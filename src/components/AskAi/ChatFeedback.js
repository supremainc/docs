import React from 'react';
import {translate} from '@docusaurus/Translate';
import {useFeedback} from '@site/src/components/Feedback/hooks/useFeedback';
import {
  FeedbackButtons,
  FeedbackTextarea,
  ErrorMessage,
  SubmitButton,
  QuickSubmitButton,
} from '@site/src/components/Feedback/components/CommonComponents';
import styles from './feedback.module.css';

// 문서 페이지 피드백과 같은 Google Form으로 보내되, 챗봇 피드백임을 구분하도록 URL을 고정한다.
const CHAT_FEEDBACK_URL = 'https://docs.supremainc.com/chatWithAi';
// 어떤 답변에 대한 피드백인지 알 수 있도록 마지막 답변을 이 길이까지 함께 보낸다.
const MAX_ANSWER_LENGTH = 2000;

function answerDetail(answer) {
  const text = answer
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // 이미지는 뺀다
    .trim();
  if (!text) return undefined;
  const clipped = text.length > MAX_ANSWER_LENGTH ? `${text.slice(0, MAX_ANSWER_LENGTH)}…` : text;
  return `---\n[AI 답변]\n${clipped}`;
}

/** 답변이 끝난 뒤 대화 아래에 펼쳐지는 피드백. 동작은 문서 페이지의 모바일 피드백(Feedback/mobile.js)과 같다. */
export default function ChatFeedback({answer = ''}) {
  const {
    feedbackType,
    detailText,
    isSubmitting,
    submitStatus,
    setDetailText,
    handleFeedbackClick,
    handleSubmit,
    resetFeedback,
  } = useFeedback({pageUrl: CHAT_FEEDBACK_URL, extraDetail: answerDetail(answer)});

  if (submitStatus === 'success') {
    return (
      <section className={styles.feedback} role="status">
        <div className={styles.successMessage}>
          <span className={styles.successIcon} aria-hidden="true">
            ✓
          </span>
          <p>{translate({id: 'askAi.feedback.thanks', message: '피드백을 보내 주셔서 감사합니다.'})}</p>
          <p className={styles.successSubtext}>
            {translate({
              id: 'askAi.feedback.successSubtext',
              message: '보내 주신 의견은 AI 답변의 품질을 높이는 데 활용됩니다.',
            })}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.feedback}>
      <div className={styles.title}>
        {translate({id: 'askAi.feedback.title', message: '이 답변이 도움이 되었나요?'})}
      </div>
      <FeedbackButtons
        feedbackType={feedbackType}
        onFeedbackClick={handleFeedbackClick}
        isSubmitting={isSubmitting}
        styles={styles}
        containerClassName={styles.buttons}
      />

      {feedbackType && (
        <div className={styles.form}>
          {feedbackType === 'positive' && (
            <QuickSubmitButton isSubmitting={isSubmitting} onClick={handleSubmit} styles={styles} />
          )}
          <FeedbackTextarea
            feedbackType={feedbackType}
            detailText={detailText}
            onDetailTextChange={setDetailText}
            isSubmitting={isSubmitting}
            submitStatus={submitStatus}
            styles={styles}
          />
          <div className={styles.actions}>
            <SubmitButton
              isSubmitting={isSubmitting}
              onClick={handleSubmit}
              feedbackType={feedbackType}
              detailText={detailText}
              styles={styles}
            />
            <button type="button" className={styles.cancelButton} onClick={resetFeedback} disabled={isSubmitting}>
              {translate({id: 'theme.SearchModal.searchBox.cancelButtonText', message: '취소'})}
            </button>
          </div>
          {submitStatus === 'error' && <ErrorMessage styles={styles} />}
          <p id="feedback-privacy-note" className={styles.privacyNote}>
            {translate({
              id: 'askAi.feedback.privacyNote',
              message:
                '피드백과 함께 이 답변의 내용이 전송됩니다. 제출한 피드백은 AI 답변 개선에만 사용하며, 개인 식별 정보는 수집하지 않습니다.',
            })}
          </p>
        </div>
      )}
    </section>
  );
}
