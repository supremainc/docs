// API 토큰을 과도하게 쓰지 않도록 하는 화면 쪽 제한 값.
// 화면 제한은 우회할 수 있으므로, 실제 방어는 SOLIS 서버의 제한(429)이 맡는다.

/** 질문 한 개의 최대 글자 수 */
export const MAX_QUESTION_LENGTH = 1000;

/** 질문과 함께 보낼 최근 질문·답변 쌍의 수 */
export const HISTORY_TURNS = 3;

/** 함께 보내는 이전 답변의 최대 글자 수(답변마다) */
export const MAX_HISTORY_ANSWER_LENGTH = 500;

/** 한 대화에서 보낼 수 있는 최대 질문 수. 넘으면 새 대화를 시작해야 한다. */
export const MAX_QUESTIONS_PER_CHAT = 20;
