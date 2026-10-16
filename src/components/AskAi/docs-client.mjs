/**
 * SOLIS 문서 챗봇 — 단일 질문 위젯용 브라우저 클라이언트. 의존성이 없고, 쿠키를 쓰지 않으며,
 * 브라우저에 아무것도 저장하지 않는다. 질문은 각각 독립적으로 처리된다(대화 기록 없음).
 *
 *   import { createDocsClient } from './docs-client.mjs';
 *
 *   const chatbot = createDocsClient('https://solis.example.com', 'docs-widget');
 *   const status = await chatbot.ask('How do I change the device IP?', (event) => {
 *     if (event.type === 'text-delta') answer += event.text;
 *   }, { signal: controller.signal });              // 'completed' | 'failed' | 'cancelled'
 *
 * onEvent로 전달되는 이벤트 (모두 `seq` 번호를 함께 가진다):
 *   progress    { stage: 'working' }                        답변을 준비하는 중
 *   text-delta  { text }                                    답변에 이어 붙일 텍스트 (Markdown)
 *   sources     { sources: [{ index, kind, title, url }] }  답변에 사용한 출처
 *   error       { message }                                 일반적인 실패 메시지. 뒤이어 `end`가 온다
 *   end         { status }                                  실행의 마지막 이벤트
 *
 * ask()가 실패하면 `status`(HTTP 코드)와 `retryAfter`(서버가 보낸 경우, 초 단위)를 담은 Error로 reject된다:
 *   429        질문 수나 진행 중인 답변 수가 한도를 넘었다 — 사용자에게 기다리라고 안내하고, 반복 재시도하지 않는다
 *   503        서비스를 일시적으로 사용할 수 없다
 *   403        이 페이지의 Origin이 등록되어 있지 않다 — 브라우저는 보통 CORS 실패로 처리하므로
 *              `status` 없이 reject된다 (네트워크 오류와 같다)
 *   401        이 클라이언트가 직접 처리한다: 세션을 갱신하고 질문을 한 번 다시 보낸다
 * `signal`을 abort하면 AbortError로 reject되고, 서버의 답변 생성도 취소된다.
 *
 * 질문 하나의 처리 흐름 (단계마다 아래 함수가 맡는다):
 *   1. bindingKeys()  이 페이지용 키 쌍을 한 번 만든다 (WebCrypto가 없으면 건너뛴다)
 *   2. token()        POST /sessions로 세션 토큰을 받고, 만료가 가까워질 때까지 재사용한다
 *   3. ask()          POST /runs로 실행을 시작하고, GET /runs/{id}/events로 이벤트를 읽는다
 *   4. ask()          끝나기 전에 멈추면 POST /runs/{id}/cancel로 실행을 취소한다
 * 모든 API 호출은 request()가 보낸다. 토큰을 싣는 호출에는 proof()가 1단계의 키로 서명을 붙인다.
 *
 * 요구 사항: HTTPS 페이지(http://localhost도 동작), WebCrypto를 지원하는 브라우저, ES 모듈로 로드.
 * 클라이언트 하나로는 한 번에 한 질문만 한다 — 기본 설정에서는 답변이 생성되는 동안 ask()를
 * 다시 호출하면 429로 거절된다.
 *
 * 세션 토큰은 추출할 수 없는(non-extractable) P-256 키 쌍에 묶인다: 인증이 필요한 요청마다
 * 그 키로 서명한 DPoP proof를 싣기 때문에, 토큰을 복사해도 다른 곳에서는 쓸 수 없다.
 * WebCrypto가 없으면(HTTPS가 아닌 페이지) 세션이 키에 묶이지 않은 채 발급되며,
 * 키 바인딩을 요구하도록 설정된 클라이언트는 이런 세션을 거절한다.
 */
export function createDocsClient(baseUrl, clientCode) {
  // 모든 엔드포인트는 {baseUrl}/api/v1/clients/{clientCode} 아래에 있다.
  const root = `${baseUrl.replace(/\/$/, '')}/api/v1/clients/${encodeURIComponent(clientCode)}`;
  // WebCrypto. HTTPS가 아닌 페이지에는 없으며, 이때 세션은 키에 묶이지 않고 발급된다.
  const subtle = globalThis.crypto?.subtle;
  const encoder = new TextEncoder();
  // 현재 세션: { token, expiresAt } (expiresAt은 밀리초).
  let session = null;
  // 진행 중인 세션 요청. 그동안 토큰이 필요한 호출은 모두 이 요청을 함께 기다린다.
  let issuing = null;
  // 키 쌍(Promise). 한 번 만들어 이 클라이언트의 모든 요청에 쓴다.
  let keys = null;

  // 패딩 없는 base64url — JWT와 JWK가 쓰는 인코딩.
  const b64url = (bytes) => btoa(String.fromCharCode(...new Uint8Array(bytes)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  // JSON 값을 base64url로 바꾼다: JWT의 헤더와 payload에 쓴다.
  const b64json = (value) => b64url(encoder.encode(JSON.stringify(value)));

  /** 세션 토큰을 이 페이지에 묶는 키 쌍. WebCrypto가 없으면 null로 resolve된다. */
  function bindingKeys() {
    // 1. WebCrypto가 없으면 키도 없고, 세션은 키에 묶이지 않고 발급된다.
    if (!subtle) return Promise.resolve(null);
    // 2. P-256 키 쌍을 한 번만 만든다. 개인키는 추출할 수 없다(non-extractable):
    //    이 페이지는 그 키로 서명할 수 있지만, 어떤 스크립트도 키를 브라우저 밖으로 꺼낼 수 없다.
    keys ??= subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign', 'verify'])
      .then(async (pair) => {
        // 3. 공개키를 JWK로 내보내고, 키를 식별하는 멤버(kty, crv, x, y)만 남긴다.
        //    서버는 세션을 발급할 때(POST /sessions) 이 공개키를 등록한다.
        const { kty, crv, x, y } = await subtle.exportKey('jwk', pair.publicKey);
        return { privateKey: pair.privateKey, jwk: { kty, crv, x, y } };
      })
      // 4. 실패하면 실패한 시도를 지워서, 다음 호출 때 다시 시도하게 한다.
      .catch((error) => { keys = null; throw error; });
    return keys;
  }

  /**
   * DPoP proof (RFC 9449 형식): 개인키로 서명한 JWT로, `DPoP` 헤더에 실어 보낸다.
   * 이 요청이 토큰을 발급받은 바로 그 브라우저에서 왔다는 것을 서버에 증명한다.
   */
  async function proof(method, url, bearer) {
    // 1. 키가 없으면(WebCrypto 없음) proof를 보내지 않는다.
    const key = await bindingKeys();
    if (!key) return null;
    const target = new URL(url);
    // 2. 헤더: proof 타입, 알고리즘(ES256 = P-256 + SHA-256), 서명을 확인할 공개키.
    // 3. payload: 이 proof가 어떤 요청을 위한 것인지 담는다. 서버는 모든 항목을 확인한다.
    const signed = `${b64json({ typ: 'dpop+jwt', alg: 'ES256', jwk: key.jwk })}.${b64json({
      htm: method, // 이 요청의 HTTP 메서드
      htu: target.origin + target.pathname, // 쿼리 문자열을 뺀 URL. 서버는 경로만 비교한다
      iat: Math.floor(Date.now() / 1000), // 만든 시각(초). 서버 시각과 5분 이내로 차이 나야 받아들인다
      jti: crypto.randomUUID(), // 고유 ID. 서버는 이미 받은 적 있는 proof를 거절한다
      ath: b64url(await subtle.digest('SHA-256', encoder.encode(bearer))), // 함께 보내는 토큰의 SHA-256 해시
    })}`;
    // 4. "header.payload"를 개인키로 서명하고 서명을 붙인다: header.payload.signature.
    const signature = await subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key.privateKey, encoder.encode(signed));
    return `${signed}.${b64url(signature)}`;
  }

  /** API 호출 하나를 보내고 결과를 돌려준다. 2xx가 아닌 응답이면 `status`를 담은 Error를 throw한다. */
  async function request(path, { method = 'GET', bearer, body, signal } = {}) {
    // 1. URL을 만든다. JSON 본문이 있으면 Content-Type을 붙인다.
    const url = root + path;
    const headers = {};
    if (body !== undefined) headers['Content-Type'] = 'application/json';
    // 2. 세션 토큰이 필요한 호출이면 토큰을 싣고, 이 브라우저에 키가 있으면 DPoP proof도 싣는다.
    if (bearer) {
      headers.Authorization = `Bearer ${bearer}`;
      const dpop = await proof(method, url, bearer);
      if (dpop) headers.DPoP = dpop;
    }
    // 3. 쿠키 없이(credentials: 'omit'), HTTP 캐시를 쓰지 않고 보낸다.
    const response = await fetch(url, {
      method, headers, body: body === undefined ? undefined : JSON.stringify(body), signal,
      credentials: 'omit', cache: 'no-store',
    });
    // 4. 204 No Content(취소 호출의 응답)는 읽을 본문이 없다.
    if (response.status === 204) return null;
    // 5. JSON 본문을 읽는다. JSON이 아닌 본문(예: 프록시의 오류 페이지)은 {}로 취급한다.
    const data = await response.json().catch(() => ({}));
    // 6. 오류 상태: HTTP 상태, 서버 메시지(`detail`), Retry-After(429일 때)를 담아 throw한다.
    if (!response.ok) {
      const error = new Error(typeof data.detail === 'string' ? data.detail : `HTTP ${response.status}`);
      error.status = response.status;
      error.retryAfter = response.headers.get('Retry-After');
      throw error;
    }
    // 7. 성공: 서버는 모든 결과를 { data: ... }로 감싸서 보낸다.
    return data.data;
  }

  /** 유효한 세션 토큰을 돌려준다. 세션이 없거나 곧 만료될 때만 새 세션을 요청한다. */
  async function token() {
    // 1. 남은 시간이 150초보다 많으면 현재 토큰을 재사용한다.
    //    서버는 남은 시간이 135초 미만인 토큰으로는 실행을 시작하지 않으므로, 그보다 넉넉히 먼저 갱신한다.
    if (session && session.expiresAt > Date.now() + 150_000) return session.token;
    // 2. 세션 요청은 한 번에 하나만 보낸다: 그사이 들어온 호출은 같은 요청의 결과를 기다린다.
    if (!issuing) {
      issuing = bindingKeys()
        // 3. POST /sessions. 키가 있으면 공개키를 보내 토큰을 그 키에 묶고,
        //    키가 없으면(WebCrypto 없음) 본문 없이 보내 키에 묶이지 않은 토큰을 받는다.
        .then((key) => request('/sessions', { method: 'POST', body: key ? { public_key: key.jwk } : undefined }))
        // 4. 토큰과 만료 시각을 저장한다(`expires_in`은 초 단위).
        .then((value) => {
          session = { token: value.token, expiresAt: Date.now() + value.expires_in * 1000 };
          return value.token;
        })
        // 5. 성공이든 실패든 요청이 끝났으므로, 다음 호출은 새 요청을 시작할 수 있다.
        .finally(() => { issuing = null; });
    }
    return issuing;
  }

  return {
    /**
     * 호출할 때마다 새 실행(run)을 만든다. onEvent는 text-delta, sources, progress, error, end 이벤트를 받는다.
     * 429(요청 수 또는 동시 실행 한도 초과)는 `status`와 `retryAfter`를 담아 throw한다. 반복 재시도하지 않는다.
     */
    async ask(message, onEvent, { signal } = {}) {
      // 1. 세션 토큰을 받는다. 사용자가 이미 취소했으면 여기서 멈춘다.
      let bearer = await token();
      signal?.throwIfAborted();
      // 2. POST /runs로 실행을 시작한다. 서버는 run_id와 첫 이벤트 커서(next_seq)를 바로 돌려주고,
      //    답변은 백그라운드에서 생성한다.
      const start = () => request('/runs', { method: 'POST', bearer, body: { message } });
      let run;
      try { run = await start(); }
      catch (error) {
        // 3. 명시적인 401만 서버가 실행을 받지 않았다는 뜻이다(토큰이 거절됐거나 남은 시간이 135초 미만):
        //    세션을 버리고 새 토큰을 받아 한 번만 다시 시도한다.
        //    결과가 불분명한 POST 실패는 절대 재시도하지 않는다 — 실행이 이미 시작됐을 수 있다.
        if (error.status !== 401) throw error;
        session = null;
        bearer = await token();
        signal?.throwIfAborted();
        run = await start();
      }
      let finished = false;
      try {
        // 4. 이벤트를 순서대로 읽는다. `after`는 커서다: 이 값 뒤의 이벤트는 아직 읽지 않았다.
        let after = run.next_seq;
        while (true) {
          signal?.throwIfAborted();
          // 5. 롱 폴링: 새 이벤트가 없으면 서버가 최대 10초(wait=10) 기다렸다가 응답한다.
          const page = await request(`/runs/${run.run_id}/events?after=${after}&wait=10`, { bearer, signal });
          // 6. 받은 이벤트를 순서대로 호출자에게 넘기고, 커서를 그 뒤로 옮긴다.
          for (const event of page.events) onEvent(event);
          after = page.next_seq;
          // 7. 실행이 끝났다(`end` 이벤트까지 넘겼다): 실행의 최종 상태를 돌려준다.
          if (page.done) { finished = true; return page.status; }
          // 8. 다음 페이지를 요청하기 전에 잠깐 쉰다. 토큰이 빠르게 들어올 때 촘촘한 반복을 피하기 위해서다.
          //    이벤트가 뜸한 구간에서는 서버가 여전히 롱 폴링으로 기다려 준다.
          await new Promise((resolve) => setTimeout(resolve, 250));
        }
      } finally {
        // 9. 끝나기 전에 멈췄다면(abort 또는 요청 실패) 서버가 답변 생성을 멈추도록 실행을 취소한다.
        //    실행을 시작한 토큰을 그대로 쓴다: 새로 발급한 토큰은 다른 세션 소속이라 이 실행을
        //    취소하거나 읽을 수 없다. 취소 요청이 실패해도 무시한다.
        if (!finished) {
          await request(`/runs/${run.run_id}/cancel`, { method: 'POST', bearer }).catch(() => {});
        }
      }
    },
  };
}
