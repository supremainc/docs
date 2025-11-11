import React from 'react';
import { translate } from '@docusaurus/Translate';
import { FEEDBACK_TYPES, TEXTAREA_CONFIG } from '../constants';

/**
 * 피드백 버튼 컴포넌트
 */
export function FeedbackButtons({ 
  feedbackType, 
  onFeedbackClick, 
  isSubmitting, 
  styles,
  buttonClassName = '',
  containerClassName = ''
}) {
  return (
    <div className={containerClassName}>
      <button
        className={`${styles?.feedbackButton || 'feedback-button'} ${
          feedbackType === FEEDBACK_TYPES.POSITIVE ? (styles?.active || 'active') : ''
        } ${buttonClassName}`}
        onClick={() => onFeedbackClick(FEEDBACK_TYPES.POSITIVE)}
        disabled={isSubmitting}
        aria-label="Positive feedback: Good"
      >
        <span className={styles?.icon || 'icon'}>😊</span>
        <span>
          {translate({
            id: 'feedback.components.feedbackTypeGood',
            message: '도움이 되었습니다.'
          })}
        </span>
      </button>

      <button
        className={`${styles?.feedbackButton || 'feedback-button'} ${
          feedbackType === FEEDBACK_TYPES.NEGATIVE ? (styles?.active || 'active') : ''
        } ${buttonClassName}`}
        onClick={() => onFeedbackClick(FEEDBACK_TYPES.NEGATIVE)}
        disabled={isSubmitting}
        aria-label="Negative feedback: Bad"
      >
        <span className={styles?.icon || 'icon'}>😫</span>
        <span>
          {translate({
            id: 'feedback.components.feedbackTypeBad',
            message: '개선이 필요합니다.'
          })}
        </span>
      </button>
    </div>
  );
}

/**
 * 피드백 텍스트영역 컴포넌트
 */
export function FeedbackTextarea({
  feedbackType,
  detailText,
  onDetailTextChange,
  isSubmitting,
  submitStatus,
  styles,
  className = '',
  showCharacterCount = true
}) {
  return (
    <div className={className}>
      <label htmlFor="feedback-detail" className={styles?.textareaLabel || 'textarea-label'}>
        {translate({
          id: 'feedback.components.feedbackDetail',
          message: '평가에 대해 자세히 알려주세요.'
        })}
        <span className={styles?.required || 'required'}>
          {feedbackType === FEEDBACK_TYPES.NEGATIVE 
            ? translate({
                id: 'feedback.components.required',
                message: '(필수)'
              })
            : translate({
                id: 'feedback.components.optional',
                message: '(선택사항)'
              })
          }
        </span>
      </label>
      
      <textarea
        id="feedback-detail"
        className={styles?.feedbackTextarea || 'feedback-textarea'}
        placeholder={
          feedbackType === FEEDBACK_TYPES.NEGATIVE 
            ? translate({
                id: 'feedback.component.feedbackTextarea.negativePlaceholder',
                message: '문서에 문제점을 상세히 작성해 주시면 만족할 수 있도록 반영하겠습니다.'
              })
            : translate({
                id: 'feedback.component.feedbackTextarea.positivePlaceholder',
                message: '개선이 필요한 부분이나 추가 의견을 자유롭게 작성해 주세요.'
              })
        }
        value={detailText}
        onChange={(e) => onDetailTextChange(e.target.value)}
        disabled={isSubmitting}
        rows={TEXTAREA_CONFIG.ROWS}
        maxLength={TEXTAREA_CONFIG.MAX_LENGTH}
        required={feedbackType === FEEDBACK_TYPES.NEGATIVE}
        aria-describedby="feedback-privacy-note"
      />

      {showCharacterCount && (
        <div className={styles?.characterCount || 'character-count'}>
          {detailText.length} / {TEXTAREA_CONFIG.MAX_LENGTH}
          {feedbackType === FEEDBACK_TYPES.NEGATIVE && detailText.trim().length === 0 && (
            <span className={styles?.requiredNote || 'required-note'}>
              {translate({
                id: 'feedback.component.requiredNote',
                message: '* 필수 입력'
              })}
            </span>
          )}
        </div>
      )}

      {submitStatus === 'validation-error' && (
        <div className={styles?.errorMessage || 'error-message'} role="alert">
          {translate({
            id: 'feedback.components.validationError',
            message: '개선이 필요한 부분에 대한 상세한 의견을 작성해 주세요.'
          })}
        </div>
      )}
    </div>
  );
}

/**
 * 성공 메시지 컴포넌트
 */
export function SuccessMessage({ styles, className = '' }) {
  return (
    <div className={`${styles?.successMessage || 'success-message'} ${className}`}>
      <span className={styles?.successIcon || 'success-icon'}>✓</span>
      <p>
        {translate({
          id: 'feedback.components.thanksForFeedback',
          message: '피드백을 제출해 주셔서 감사합니다.'
        })}
      </p>
      <p className={styles?.successSubtext || 'success-subtext'}>
        {translate({
          id: 'feedback.components.successSubtext',
          message: '귀하의 의견은 문서 개선에 소중하게 활용됩니다.'
        })}
      </p>
    </div>
  );
}

/**
 * 에러 메시지 컴포넌트
 */
export function ErrorMessage({ styles, className = '' }) {
  return (
    <div className={`${styles?.errorMessage || 'error-message'} ${className}`} role="alert">
      {translate({
        id: 'feedback.components.errorMessage',
        message: '피드백 제출 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'
      })}
    </div>
  );
}

/**
 * 제출 버튼 컴포넌트
 */
export function SubmitButton({
  isSubmitting,
  disabled,
  onClick,
  feedbackType,
  detailText,
  styles,
  className = '',
  children
}) {
  const isDisabled = disabled || isSubmitting || 
    (feedbackType === FEEDBACK_TYPES.NEGATIVE && !detailText.trim());

  return (
    <button
      className={`${styles?.submitButton || 'submit-button'} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={isSubmitting ? translate({
        id: 'feedback.components.quickSubmitButton.onGoing',
        message: '제출 중...'
      }) : translate({
        id: 'feedback.component.feedbackCompletedMessage',
        message: '피드백 제출'
      })}
    >
      {children || (
        <>
          {isSubmitting ? (
            <>
              <span className={styles?.spinner || 'spinner'} aria-hidden="true"></span>
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
        </>
      )}
    </button>
  );
}

/**
 * 빠른 제출 버튼 컴포넌트 (긍정 피드백용)
 */
export function QuickSubmitButton({
  isSubmitting,
  onClick,
  styles,
  className = ''
}) {
  return (
    <div className={styles?.quickSubmitSection || 'quick-submit-section'}>
      <button
        className={`${styles?.quickSubmitButton || 'quick-submit-button'} ${className}`}
        onClick={onClick}
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
  );
}