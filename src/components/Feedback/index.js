import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {translate} from '@docusaurus/Translate';
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
import styles from './styles.module.css';
import IcClose from '@site/static/img/menus/ico-close.svg';

export default function FeedbackWidget({
  googleFormId,
  feedbackTypeEntryId,
  pageUrlEntryId,
  detailEntryId,
}) {
  // 데스크탑 전용 상태 관리
  const [isExpanded, setIsExpanded] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

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
    googleFormId,
    feedbackTypeEntryId,
    pageUrlEntryId,
    detailEntryId,
    onSuccess: () => {
      // 데스크탑에서는 성공 시 위젯 초기화
      setTimeout(() => {
        resetWidget();
      }, TIMING_CONFIG.SUCCESS_DISPLAY_TIME);
    }
  });

  const handleFeedbackClick = useCallback((type) => {
    baseFeedbackClick(type);
    setIsExpanded(true); // 피드백 선택 시 바로 확장
  }, [baseFeedbackClick]);

  const handleOpenWidget = useCallback(() => {
    setIsWidgetOpen(true);
  }, []);

  const handleExpandClick = useCallback(() => {
    setIsExpanded(true);
  }, []);

  const resetWidget = useCallback(() => {
    setIsExpanded(false);
    setIsWidgetOpen(false);
    resetFeedback();
  }, [resetFeedback]);

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
          <SuccessMessage styles={styles} />
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
            <FeedbackButtons
              feedbackType={feedbackType}
              onFeedbackClick={handleFeedbackClick}
              isSubmitting={isSubmitting}
              styles={styles}
              containerClassName={styles.feedbackButtons}
            />
          </div>

          {feedbackType === 'positive' && (
            <QuickSubmitButton
              isSubmitting={isSubmitting}
              onClick={handleSubmit}
              styles={styles}
            />
          )}

          {isExpanded && (
            <div className={styles.feedbackExpanded}>
              <FeedbackTextarea
                feedbackType={feedbackType}
                detailText={detailText}
                onDetailTextChange={setDetailText}
                isSubmitting={isSubmitting}
                submitStatus={submitStatus}
                styles={styles}
              />

              {submitStatus === 'error' && (
                <ErrorMessage styles={styles} />
              )}

              <div className={styles.feedbackActions}>
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