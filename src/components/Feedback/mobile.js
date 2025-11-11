import React, { useState, useCallback, useEffect } from 'react';
import { translate } from '@docusaurus/Translate';
import styles from './mobile.module.css';

export default function MobileFeedback() {
  // 피드백 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState(null);
  const [detailText, setDetailText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [currentPageUrl, setCurrentPageUrl] = useState('');

  useEffect(() => {
    // SSR 환경에서 window 객체 접근 방지
    if (typeof window !== 'undefined') {
      setCurrentPageUrl(window.location.href);
    }
  }, []);

  const handleFeedbackClick = useCallback((type) => {
    setFeedbackType(type);
    setIsModalOpen(true);
    setSubmitStatus('idle');
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setFeedbackType(null);
    setDetailText('');
    setSubmitStatus('idle');
  }, []);

  const submitToGoogleForms = useCallback(async () => {
    try {
      const formData = new FormData();
      
      // 피드백 유형
      const feedbackTypeText = feedbackType === 'positive' ? '😊 Good' : '😫 Bad';
      formData.append('entry.1129679087', feedbackTypeText);
      
      // 페이지 URL
      formData.append('entry.23458126', currentPageUrl);
      
      // 상세 내용
      const detailContent = detailText.trim();
      if (!detailContent && feedbackType === 'negative') {
        formData.append('entry.1070297166', '구체적인 개선 사항은 작성되지 않았습니다.');
      } else if (!detailContent && feedbackType === 'positive') {
        formData.append('entry.1070297166', '빠른 긍정 피드백 (추가 의견 없음)');
      } else {
        formData.append('entry.1070297166', detailContent || '추가 의견 없음');
      }

      // 필수 필드들
      formData.append('fvv', '1');
      formData.append('pageHistory', '0');

      // Google Forms 제출 URL
      const submitUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc80m8XWDnKO3XJ9ZZ_hJ9iZVcYocu6XjdsGgOwC1vvh_IuxA/formResponse';

      await fetch(submitUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      return true;
    } catch (error) {
      console.error('Google Forms 제출 오류:', error);
      return false;
    }
  }, [feedbackType, currentPageUrl, detailText]);

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
        closeModal();
      }, 2000);
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  }, [feedbackType, detailText, submitToGoogleForms, closeModal]);

  return (
    <>
      {/* 모바일 피드백 위젯 */}
      <div className={styles.feedbackWidget}>
        <div className={styles.feedbackTitle}>
          {translate({
            id: 'feedback.components.feedbackTitle',
            message: '이 페이지가 도움이 되었나요?'
          })}
        </div>
        <div className={styles.selectFeedback}>
          <button
            className={`${styles.feedbackButton}`}
            onClick={() => handleFeedbackClick('positive')}
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
            className={`${styles.feedbackButton}`}
            onClick={() => handleFeedbackClick('negative')}
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
      </div>

      {/* 모바일 피드백 모달 */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>
                <span className={styles.icon}>
                  {feedbackType === 'positive' ? '😊' : '😫'}
                </span>
                <span>
                  {feedbackType === 'positive' 
                    ? translate({
                        id: 'feedback.components.feedbackTypeGood',
                        message: '도움이 되었습니다.'
                      })
                    : translate({
                        id: 'feedback.components.feedbackTypeBad',
                        message: '개선이 필요합니다.'
                      })
                  }
                </span>
              </h3>
              <button
                className={styles.closeButton}
                onClick={closeModal}
                aria-label={translate({
                  id: 'theme.SearchModal.searchBox.cancelButtonText',
                  message: '취소'
                })}
              >
                ×
              </button>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalDescription}>
                {translate({
                  id: 'feedback.components.feedbackDescription',
                  message: '귀하의 피드백은 문서 품질 향상에 큰 도움이 됩니다.'
                })}
              </p>

              {feedbackType === 'positive' && submitStatus !== 'success' && (
                <div className={styles.quickSubmitSection}>
                  <button
                    className={styles.quickSubmitButton}
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting 
                      ? translate({
                          id: 'feedback.components.quickSubmitButton.onGoing',
                          message: '제출 중...'
                        })
                      : translate({
                          id: 'feedback.components.quickSubmitButton.idle',
                          message: '빠른 제출 (추가 의견 없음)'
                        })
                    }
                  </button>
                </div>
              )}

              {submitStatus !== 'success' && (
                <div className={styles.feedbackForm}>
                  <label htmlFor="feedback-detail" className={styles.textareaLabel}>
                    {translate({
                      id: 'feedback.components.feedbackDetail',
                      message: '평가에 대해 자세히 알려주세요.'
                    })}
                    <span className={styles.required}>
                      {feedbackType === 'negative' ? translate({
                        id: 'feedback.components.required',
                        message: '(필수)'
                      }) : translate({
                        id: 'feedback.components.optional',
                        message: '(선택사항)'
                      })}
                    </span>
                  </label>
                  <textarea
                    id="feedback-detail"
                    className={styles.feedbackTextarea}
                    placeholder={translate({
                      id: 'feedback.component.feedbackTextarea.negativePlaceholder',
                      message: '문서에 문제점을 상세히 작성해 주시면 만족할 수 있도록 반영하겠습니다.'
                    })}
                    value={detailText}
                    onChange={(e) => setDetailText(e.target.value)}
                    disabled={isSubmitting}
                    rows={4}
                    maxLength={1000}
                    required
                  />

                  <div className={styles.characterCount}>
                    {detailText.length} / 1000
                    {detailText.trim().length === 0 && (
                      <span className={styles.requiredNote}>
                        {feedbackType === 'negative' ? translate({
                        id: 'feedback.components.required',
                        message: '(필수)'
                      }) : translate({
                        id: 'feedback.components.optional',
                        message: '(선택사항)'
                      })}
                      </span>
                    )}
                  </div>

                  {submitStatus === 'validation-error' && (
                    <div className={styles.errorMessage} role="alert">
                      {translate({
                        id: 'feedback.components.validationError',
                        message: '개선이 필요한 부분에 대한 상세한 의견을 작성해 주세요.'
                      })}
                    </div>
                  )}

                  <div className={styles.modalActions}>
                    <button
                      className={styles.submitButton}
                      onClick={handleSubmit}
                      disabled={isSubmitting || !detailText.trim()}
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
                      onClick={closeModal}
                      disabled={isSubmitting}
                    >
                      {translate({
                        id: 'theme.SearchModal.searchBox.cancelButtonText',
                        message: '취소'
                      })}
                    </button>
                  </div>
                </div>
              )}

              {submitStatus === 'success' && (
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
              )}

              {submitStatus === 'error' && (
                <div className={styles.errorMessage} role="alert">
                  {translate({
                    id: 'feedback.components.errorMessage',
                    message: '피드백 제출 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'
                  })}
                </div>
              )}
            </div>

            <div className={styles.modalFooter}>
              <p className={styles.privacyNote}>
                {translate({
                  id: 'feedback.component.privacyNote',
                  message: '제출된 피드백은 문서 개선 목적으로만 사용되며, 개인 식별 정보는 수집되지 않습니다.'
                })}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
