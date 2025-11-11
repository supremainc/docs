import React, { useState, useCallback } from 'react';
import { translate } from '@docusaurus/Translate';
import { useFeedback } from './hooks/useFeedback';
import { TIMING_CONFIG } from './constants';
import { 
  FeedbackButtons, 
  FeedbackTextarea, 
  SuccessMessage, 
  ErrorMessage, 
  SubmitButton, 
  QuickSubmitButton 
} from './components/CommonComponents';
import styles from './mobile.module.css';

export default function MobileFeedback() {
  // 모바일 전용 상태 (모달 관리)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 공통 피드백 로직
  const {
    feedbackType,
    detailText,
    isSubmitting,
    submitStatus,
    setDetailText,
    handleFeedbackClick: baseFeedbackClick,
    handleSubmit,
    resetFeedback
  } = useFeedback({
    onSuccess: () => {
      // 모바일에서는 성공 시 자동 닫힘
      setTimeout(() => {
        closeModal();
      }, TIMING_CONFIG.SUCCESS_AUTO_CLOSE);
    }
  });

  const handleFeedbackClick = useCallback((type) => {
    baseFeedbackClick(type);
    setIsModalOpen(true);
  }, [baseFeedbackClick]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    resetFeedback();
  }, [resetFeedback]);

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
        <FeedbackButtons
          feedbackType={feedbackType}
          onFeedbackClick={handleFeedbackClick}
          isSubmitting={isSubmitting}
          styles={styles}
          containerClassName={styles.selectFeedback}
        />
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
                <QuickSubmitButton
                  isSubmitting={isSubmitting}
                  onClick={handleSubmit}
                  styles={styles}
                />
              )}

              {submitStatus !== 'success' && (
                <div className={styles.feedbackForm}>
                  <FeedbackTextarea
                    feedbackType={feedbackType}
                    detailText={detailText}
                    onDetailTextChange={setDetailText}
                    isSubmitting={isSubmitting}
                    submitStatus={submitStatus}
                    styles={styles}
                  />

                  <div className={styles.modalActions}>
                    <SubmitButton
                      isSubmitting={isSubmitting}
                      disabled={isSubmitting || (feedbackType === 'negative' && !detailText.trim())}
                      onClick={handleSubmit}
                      feedbackType={feedbackType}
                      detailText={detailText}
                      styles={styles}
                      className={styles.submitButton}
                    />

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
                <SuccessMessage styles={styles} />
              )}

              {submitStatus === 'error' && (
                <ErrorMessage styles={styles} />
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
