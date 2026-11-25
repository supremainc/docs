import {translate} from '@docusaurus/Translate';
import {
  HISTORY_TURNS,
  MAX_HISTORY_ANSWER_LENGTH,
  MAX_QUESTION_LENGTH,
  MAX_QUESTIONS_PER_CHAT,
} from './limits';

// Algolia Agent Studio 어댑터. SOLIS 서버(solisAdapter.js)를 쓸 수 없는 동안 대신 쓴다.
// 응답은 AI SDK v5 UI message stream(SSE)이다: `data: {JSON}` 줄이 이어지다가 `data: [DONE]`으로 끝난다.
//
// 에이전트 쪽 설정(Agent Studio 대시보드)과 맞물려 동작한다:
// - 검색 도구의 facet에서 lang/language를 뺐다. 언어는 이 어댑터가 요청마다 현재 페이지 언어로 거른다.
// - 허용 도메인: docs.supremainc.com, supremainc.github.io, localhost (127.0.0.1은 차단된다)
// - 브라우저에서는 응답 헤더 중 Correlation-ID만 읽을 수 있어 Retry-After를 쓸 수 없다.

export function createAlgoliaAdapter({appId, apiKey, agentId, indexName, language}) {
  const url =
    `https://${appId.toLowerCase()}.algolia.net/agent-studio/1/agents/${encodeURIComponent(agentId)}` +
    '/completions?compatibilityMode=ai-sdk-5&stream=true';

  return {
    async *run({messages, abortSignal}) {
      // 화면에서 입력을 막지만, 다시 생성 등 다른 경로로 들어온 경우에도 한 번 더 확인한다.
      if (messages.filter((message) => message.role === 'user').length > MAX_QUESTIONS_PER_CHAT) {
        throw new Error(
          translate(
            {id: 'askAi.limit.reached', message: '한 대화에서는 질문을 최대 {max}개까지 할 수 있습니다. 새 대화를 시작하세요.'},
            {max: MAX_QUESTIONS_PER_CHAT},
          ),
        );
      }

      let response;
      try {
        response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-algolia-application-id': appId,
            'x-algolia-api-key': apiKey,
          },
          body: JSON.stringify({
            messages: toAgentMessages(messages),
            // 현재 페이지 언어의 문서만 검색한다.
            algolia: {searchParameters: {[indexName]: {filters: `language:${language}`}}},
          }),
          credentials: 'omit',
          signal: abortSignal,
        });
      } catch (error) {
        if (error.name === 'AbortError') return;
        throw new Error(describeStatus());
      }
      if (!response.ok || !response.body) throw new Error(describeStatus(response.status));

      let text = '';
      let searching = false;
      let failed = false;
      // 검색 결과(hit)를 문서 URL별로 모아 두었다가, 답변에 인용된 문서만 출처로 보여 준다.
      const hits = new Map();
      const snapshot = () => ({content: toParts(text), metadata: {custom: {searching}}});

      try {
        for await (const event of readEvents(response.body)) {
          switch (event.type) {
            case 'tool-input-start':
              searching = true;
              break;
            case 'tool-output-available':
              collectHits(hits, event.output);
              break;
            case 'text-delta':
              searching = false;
              text += event.delta ?? '';
              break;
            case 'error':
              failed = true;
              break;
            default:
              continue; // tool-input-delta 등은 화면에 영향이 없으므로 yield하지 않는다.
          }
          yield snapshot();
        }
      } catch (error) {
        if (error.name === 'AbortError') return;
        throw new Error(describeStatus());
      }

      // 실패하면 그때까지 받은 답변은 남기고 오류 메시지를 함께 보여 준다.
      if (failed || !text) {
        throw new Error(
          translate({id: 'askAi.error.failed', message: '답변을 생성하지 못했습니다. 잠시 후 다시 시도하세요.'}),
        );
      }
      yield {
        content: [...toParts(text), ...citedSources(text, hits)],
        metadata: {custom: {searching: false}},
        status: {type: 'complete', reason: 'stop'},
      };
    },
  };
}

function textOf(message) {
  return message.content
    .filter((part) => part.type === 'text')
    .map((part) => part.text)
    .join('\n')
    .trim();
}

/** 현재 질문과, 답변이 끝난 최근 질문·답변 쌍(최대 HISTORY_TURNS개)을 에이전트 형식으로 바꾼다. */
function toAgentMessages(messages) {
  const message = (role, text) => ({role, parts: [{type: 'text', text}]});
  const question = textOf(messages[messages.length - 1]).slice(0, MAX_QUESTION_LENGTH);
  const turns = [];
  // 현재 질문 앞의 메시지를 뒤에서부터 (질문, 답변) 쌍으로 읽고, 답변이 끝난 것만 고른다.
  for (let i = messages.length - 2; i > 0 && turns.length < HISTORY_TURNS; i -= 2) {
    const asked = messages[i - 1];
    const answer = messages[i];
    if (asked.role !== 'user' || answer.role !== 'assistant' || answer.status?.type !== 'complete') continue;
    const answerText = textOf(answer)
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // 이미지는 문맥에 도움이 되지 않으므로 뺀다
      .slice(0, MAX_HISTORY_ANSWER_LENGTH);
    turns.unshift(message('user', textOf(asked)), message('assistant', answerText));
  }
  return [...turns, message('user', question)];
}

/** SSE 본문을 읽어 `data:` 줄의 JSON 이벤트를 차례로 돌려준다. */
async function* readEvents(body) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  try {
    while (true) {
      const {done, value} = await reader.read();
      buffer += decoder.decode(value, {stream: !done});
      const lines = buffer.split('\n');
      buffer = done ? '' : lines.pop();
      for (const line of lines) {
        if (!line.startsWith('data:')) continue;
        const data = line.slice(5).trim();
        if (!data || data === '[DONE]') continue;
        try {
          yield JSON.parse(data);
        } catch {
          // 형식이 깨진 줄은 건너뛴다.
        }
      }
      if (done) return;
    }
  } finally {
    reader.releaseLock();
  }
}

const pageUrl = (url) => url.split('#')[0].replace(/\/$/, '');

function collectHits(hits, output) {
  for (const hit of output?.hits ?? []) {
    const url = hit.url_without_anchor || hit.url;
    if (!url || hits.has(pageUrl(url))) continue;
    const {lvl0, lvl1} = hit.hierarchy ?? {};
    hits.set(pageUrl(url), {url, title: [lvl0, lvl1].filter(Boolean).join(' › ') || url});
  }
}

/** 답변 본문에 링크된 문서 중 검색 결과에 있는 것만, 처음 인용된 순서대로 출처로 만든다. */
function citedSources(text, hits) {
  const sources = new Map();
  for (const [, href] of text.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) {
    const key = pageUrl(href);
    if (hits.has(key) && !sources.has(key)) sources.set(key, hits.get(key));
  }
  return [...sources.values()].map((source) => ({
    type: 'source',
    sourceType: 'url',
    id: source.url,
    url: source.url,
    title: source.title,
  }));
}

function toParts(text) {
  // 텍스트가 아직 없으면 빈 메시지로 두어 진행 표시가 보이게 한다.
  return text ? [{type: 'text', text}] : [];
}

function describeStatus(status) {
  if (status === 429) {
    return translate({id: 'askAi.error.rateLimited', message: '질문이 너무 많습니다. 잠시 후에 다시 시도하세요.'});
  }
  if (status === 403 || status >= 500) {
    return translate({id: 'askAi.error.unavailable', message: '서비스를 일시적으로 사용할 수 없습니다. 잠시 후에 다시 시도하세요.'});
  }
  if (status) {
    return translate({id: 'askAi.error.failed', message: '답변을 생성하지 못했습니다. 잠시 후 다시 시도하세요.'});
  }
  return translate({id: 'askAi.error.network', message: '서버에 연결하지 못했습니다. 네트워크 연결을 확인하세요.'});
}
