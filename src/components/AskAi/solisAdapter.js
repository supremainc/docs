import {translate} from '@docusaurus/Translate';
import {createDocsClient} from './docs-client.mjs';
import {
  HISTORY_TURNS,
  MAX_HISTORY_ANSWER_LENGTH,
  MAX_QUESTION_LENGTH,
  MAX_QUESTIONS_PER_CHAT,
} from './limits';

// 서버 API(/runs)는 질문 문자열(message) 하나만 받으므로, 후속 질문을 이해할 수 있도록
// 화면의 최근 대화를 질문 앞에 붙여 함께 보낸다. 제한 값은 limits.js에 있다.

export function createSolisAdapter(baseUrl, clientCode) {
  const client = createDocsClient(baseUrl, clientCode);

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
      const question = withHistory(messages);

      let text = '';
      let sources = [];
      let failure = null;
      // client.ask()는 콜백으로 이벤트를 넘기므로, 큐에 쌓았다가 generator에서 꺼내 yield한다.
      let wake = null;
      let pending = false;
      const notify = () => {
        pending = true;
        wake?.();
      };

      let settled = false;
      const done = client
        .ask(question, (event) => {
          if (event.type === 'text-delta') text += event.text;
          else if (event.type === 'sources') sources = event.sources ?? [];
          else if (event.type === 'error') failure = event.message;
          notify();
        }, {signal: abortSignal})
        .finally(() => {
          settled = true;
          notify();
        });
      // 런타임이 generator를 중간에 닫아도 처리되지 않은 rejection이 남지 않게 한다.
      done.catch(() => {});

      while (!settled) {
        if (!pending) await new Promise((resolve) => { wake = resolve; });
        pending = false;
        yield {content: toParts(text, sources)};
      }

      let status;
      try {
        status = await done;
      } catch (error) {
        if (error.name === 'AbortError') return;
        throw new Error(describeError(error));
      }

      if (status !== 'completed') {
        throw new Error(failure ?? translate({
          id: 'askAi.error.failed',
          message: '답변을 생성하지 못했습니다. 잠시 후 다시 시도하세요.',
        }));
      }
      yield {content: toParts(text, sources), status: {type: 'complete', reason: 'stop'}};
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

function withHistory(messages) {
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
    turns.unshift(`User: ${textOf(asked)}\nAssistant: ${answerText}`);
  }
  if (turns.length === 0) return question;
  return ['Previous conversation (for context only):', ...turns, '', 'Current question:', question].join('\n');
}

function toParts(text, sources) {
  // 텍스트가 아직 없으면 빈 메시지로 두어 '답변을 준비하는 중' 표시가 보이게 한다.
  return [
    ...(text ? [{type: 'text', text}] : []),
    ...sources
      .filter((source) => source.url)
      .map((source) => ({
        type: 'source',
        sourceType: 'url',
        id: String(source.index ?? source.url),
        url: source.url,
        title: source.title || source.url,
      })),
  ];
}

function describeError(error) {
  if (error.status === 429) {
    return error.retryAfter
      ? translate(
          {id: 'askAi.error.rateLimitedWithTime', message: '질문이 너무 많습니다. {seconds}초 후에 다시 시도하세요.'},
          {seconds: error.retryAfter},
        )
      : translate({id: 'askAi.error.rateLimited', message: '질문이 너무 많습니다. 잠시 후에 다시 시도하세요.'});
  }
  if (error.status === 503) {
    return translate({id: 'askAi.error.unavailable', message: '서비스를 일시적으로 사용할 수 없습니다. 잠시 후에 다시 시도하세요.'});
  }
  return translate({id: 'askAi.error.network', message: '서버에 연결하지 못했습니다. 네트워크 연결을 확인하세요.'});
}
