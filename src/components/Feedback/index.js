import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
import IcClose from '@site/static/img/menus/ico-close.svg';
export default function FeedbackWidget({
  googleFormId,
  feedbackTypeEntryId,
  pageUrlEntryId,
  detailEntryId,
}) {
  const [feedbackType, setFeedbackType] = useState(null);
  const [detailText, setDetailText] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [currentPageUrl, setCurrentPageUrl] = useState('');
  const [isWidgetOpen, setIsWidgetOpen] = useState(false); // 위젯 열림/닫힘 상태

  useEffect(() => {
    // SSR 환경에서 window 객체 접근 방지
    if (typeof window !== 'undefined') {
      setCurrentPageUrl(window.location.href);
    }
  }, []);

  const handleFeedbackClick = useCallback((type) => {
    setFeedbackType(type);
    setSubmitStatus('idle');
    setIsExpanded(true); // 피드백 선택 시 바로 확장
  }, []);

  const handleOpenWidget = useCallback(() => {
    setIsWidgetOpen(true);
  }, []);

  const handleExpandClick = useCallback(() => {
    setIsExpanded(true);
  }, []);

  const resetWidget = useCallback(() => {
    setFeedbackType(null);
    setDetailText('');
    setIsExpanded(false);
    setSubmitStatus('idle');
    setIsWidgetOpen(false); // 완전히 초기 상태로
  }, []);

  const submitToGoogleForms = useCallback(async () => {
    try {
      const formData = new FormData();
      
      // 피드백 유형 - HTML 테스트와 동일한 이모지 값 사용
      const feedbackTypeText = feedbackType === 'positive' 
        ? '😊 Good' 
        : '😫 Bad';
      formData.append(feedbackTypeEntryId, feedbackTypeText);
      
      // 페이지 URL
      formData.append(pageUrlEntryId, currentPageUrl);
      
      // 상세 내용 - form.json에서 required: true이므로 빈 값 처리 개선
      const detailContent = detailText.trim();
      if (!detailContent && feedbackType === 'negative') {
        // 부정 피드백인데 상세 내용이 없는 경우 기본 메시지
        formData.append(detailEntryId, '구체적인 개선 사항은 작성되지 않았습니다.');
      } else if (!detailContent && feedbackType === 'positive') {
        // 긍정 피드백이고 빠른 제출인 경우
        formData.append(detailEntryId, '빠른 긍정 피드백 (추가 의견 없음)');
      } else {
        formData.append(detailEntryId, detailContent || '추가 의견 없음');
      }

      // HTML 테스트와 동일한 추가 필수 필드들
      formData.append('fvv', '1');
      formData.append('pageHistory', '0');

      // Google Forms 제출 URL
      const submitUrl = `https://docs.google.com/forms/d/e/${googleFormId}/formResponse`;

      // no-cors 모드로 전송 (Google Forms는 CORS를 허용하지 않음)
      await fetch(submitUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      // no-cors 모드에서는 응답 확인 불가, 성공으로 간주
      return true;
    } catch (error) {
      console.error('Google Forms 제출 오류:', error);
      return false;
    }
  }, [feedbackType, feedbackTypeEntryId, pageUrlEntryId, currentPageUrl, detailEntryId, detailText, googleFormId]);

  const handleSubmit = useCallback(async () => {
    if (!feedbackType) return;
    
    // 부정 피드백인 경우 상세 내용 필수 검증
    if (feedbackType === 'negative' && !detailText.trim()) {
      setSubmitStatus('validation-error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const success = await submitToGoogleForms();

    if (success) {
      setSubmitStatus('success');
      setTimeout(() => {
        resetWidget();
      }, 3000);
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  }, [feedbackType, detailText, submitToGoogleForms, resetWidget]);

  // 제출 완료 화면
  if (submitStatus === 'success') {
    return (
      <>
        <button
          className={styles.feedbackTrigger}
          onClick={handleOpenWidget}
          aria-label={translate({
              id: 'feedback.components.sendFeedback',
              message: '피드백 제공하기'
            })}
        >
          Feedback
        </button>
        <div className={styles.feedbackWidget}>
          <div className={styles.successMessage}>
            <span className={styles.successIcon}>✓</span>
            <p>
              {translate({
                id: 'feedback.components.thanksForFeedback',
                message: '피드백을 제출해 주셔서 감사합니다.'
              })}
            </p>
            <p className={styles.successSubtext}>
              {translate({
                id: 'feedback.components.successSubtext',
                message: '귀하의 의견은 문서 개선에 소중하게 활용됩니다.'
              })}
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <button
        className={styles.feedbackTrigger}
        onClick={handleOpenWidget}
        aria-label={translate({
          id: 'feedback.components.sendFeedback',
          message: '피드백 제공하기'
        })}
      >
        Feedback
      </button>
      
      {isWidgetOpen && (
        <div className={styles.feedbackWidget}>
          <div className={styles.feedbackHeader}>
            <h3 className={styles.feedbackTitle}>
              {translate({
                id: 'feedback.components.feedbackTitle',
                message: '이 페이지가 도움이 되었나요?'
              })}
            </h3>
            <button
              className={styles.closeButton}
              onClick={() => setIsWidgetOpen(false)}
              aria-label={translate({
                id: 'theme.SearchModal.searchBox.cancelButtonText',
                message: '취소'
              })}
              >
              <IcClose />
            </button>
            <p className={styles.feedbackDescription}>
              {translate({
                id: 'feedback.components.feedbackDescription',
                message: '귀하의 피드백은 문서 품질 향상에 큰 도움이 됩니다.'
              })}
            </p>
          </div>

          <div className={styles.feedbackButtons}>
            <button
              className={`${styles.feedbackButton} ${
                feedbackType === 'positive' ? styles.active : ''
              }`}
              onClick={() => handleFeedbackClick('positive')}
              disabled={isSubmitting}
              aria-label="Positive feedback: Good"
            >
              <span className={styles.icon}>😊</span>
              <span>
                {translate({
                  id: 'feedback.components.feedbackTypeGood',
                  message: '도움이 되었습니다.'
                })}
              </span>
            </button>

            <button
              className={`${styles.feedbackButton} ${
                feedbackType === 'negative' ? styles.active : ''
              }`}
              onClick={() => handleFeedbackClick('negative')}
              disabled={isSubmitting}
              aria-label="Negative feedback: Bad"
            >
              <span className={styles.icon}>😫</span>
              <span>
                {translate({
                  id: 'feedback.components.feedbackTypeBad',
                  message: '개선이 필요합니다.'
                })}
              </span>
            </button>
          </div>

          {feedbackType === 'positive' && (
            <div className={styles.quickSubmitSection}>
              <button
                className={styles.quickSubmitButton}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ?  translate({
                  id: 'feedback.components.quickSubmitButton.onGoing',
                  message: '제출 중...'
                }) : translate({
                  id: 'feedback.components.quickSubmitButton.idle',
                  message: '빠른 제출 (추가 의견 없음)'
                })}
              </button>
            </div>
          )}

          {isExpanded && (
            <div className={styles.feedbackExpanded}>
              <label htmlFor="feedback-detail" className={styles.textareaLabel}>
                {translate({
                  id: 'feedback.components.feedbackDetail',
                  message: '평가에 대해 자세히 알려주세요.'
                })}
                
                {feedbackType === 'negative' ? translate({
                  id: 'feedback.components.required',
                  message: '(필수)'
                }) : translate({
                  id: 'feedback.components.optional',
                  message: '(선택사항)'
                })}
              </label>
              <textarea
                id="feedback-detail"
                className={styles.feedbackTextarea}
                placeholder={
                  feedbackType === 'negative' 
                    ? translate({
                      id: 'feedback.component.feedbackTextarea.negativePlaceholder',
                      message: '문서에 문제점을 상세히 작성해 주시면 만족할 수 있도록 반영하겠습니다.'
                    }) : translate({
                        id: 'feedback.component.feedbackTextarea.positivePlaceholder',
                        message: '개선이 필요한 부분이나 추가 의견을 자유롭게 작성해 주세요.'
                      })
                }
                value={detailText}
                onChange={(e) => setDetailText(e.target.value)}
                disabled={isSubmitting}
                rows={4}
                maxLength={1000}
                aria-describedby="feedback-privacy-note"
                required={feedbackType === 'negative'}
              />

              <div className={styles.characterCount}>
                {detailText.length} / 1000
                {feedbackType === 'negative' && detailText.trim().length === 0 && (
                  <span className={styles.requiredNote}>
                    {translate({  
                      id: 'feedback.component.requiredNote',
                      message: '* 필수 입력'
                    })}
                  </span>
                )}
              </div>

              {submitStatus === 'error' && (
                <div className={styles.errorMessage} role="alert">
                  {translate({
                    id: 'feedback.components.errorMessage',
                    message: '피드백 제출 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'
                  })}
                </div>
              )}

              {submitStatus === 'validation-error' && (
                <div className={styles.errorMessage} role="alert">
                  개선이 필요한 부분에 대한 상세한 의견을 작성해 주세요.
                  {translate({
                    id: 'feedback.components.validationError',
                    message: '개선이 필요한 부분에 대한 상세한 의견을 작성해 주세요.'
                  })}
                </div>
              )}

              <div className={styles.feedbackActions}>
                <button
                  className={styles.submitButton}
                  onClick={handleSubmit}
                  disabled={
                    isSubmitting || 
                    (feedbackType === 'negative' && !detailText.trim())
                  }
                  aria-label={isSubmitting ? translate({
                        id: 'feedback.components.quickSubmitButton.onGoing',
                        message: '제출 중...'
                      }) : translate({
                      id: 'feedback.component.feedbackCompletedMessage',
                      message: '피드백 제출'
                    })}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner} aria-hidden="true"></span>
                      {translate({
                        id: 'feedback.components.quickSubmitButton.onGoing',
                        message: '제출 중...'
                      })}
                    </>
                  ) : (
                    translate({
                      id: 'feedback.component.feedbackCompletedMessage',
                      message: '피드백 제출'
                    })
                  )}
                </button>

                <button
                  className={styles.cancelButton}
                  onClick={resetWidget}
                  disabled={isSubmitting}
                  aria-label={translate({
                    id: "feedback.component.cancelButton.label",
                    message: "피드백 입력 취소"
                  })}
                >
                  {translate({
                    id: 'theme.SearchModal.searchBox.cancelButtonText',
                    message: '취소'
                  })}
                </button>
              </div>

              <p id="feedback-privacy-note" 
                  className={styles.privacyNote} 
                  dangerouslySetInnerHTML={{__html: translate({
                    id: 'feedback.component.privacyNote',
                    message: '제출된 피드백은 문서 개선 목적으로만 사용되며, 개인 식별 정보는 수집되지 않습니다.'
                  })}} />
            </div>
          )}
        </div>
      )}
    </>
  );
}

// PropTypes 정의
FeedbackWidget.propTypes = {
  /** Google Form ID (URL의 /d/e/ 다음 문자열) */
  googleFormId: PropTypes.string.isRequired,
  /** 피드백 유형 필드의 entry ID */
  feedbackTypeEntryId: PropTypes.string.isRequired,
  /** 페이지 URL 필드의 entry ID */
  pageUrlEntryId: PropTypes.string.isRequired,
  /** 상세 내용 필드의 entry ID */
  detailEntryId: PropTypes.string.isRequired,
};