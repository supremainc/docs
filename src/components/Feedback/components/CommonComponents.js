import React from 'react';
import { translate } from '@docusaurus/Translate';

/**
 * 피드백 버튼 컴포넌트
 */
export function FeedbackButtons({ 
  feedbackType, 
  onFeedbackClick, 
  isSubmitting, 
  className = '' 
}) {
  return (
    <div className={className}>
      <button
        className={`feedback-button ${feedbackType === 'positive' ? 'active' : ''}`}
        onClick={() => onFeedbackClick('positive')}
        disabled={isSubmitting}
        aria-label="Positive feedback: Good"
      >
        <span className="icon">😊</span>
        <span>
          {translate({
            id: 'feedback.components.feedbackTypeGood',
            message: '도움이 되었습니다.'
          })}
        </span>
      </button>

      <button
        className={`feedback-button ${feedbackType === 'negative' ? 'active' : ''}`}
        onClick={() => onFeedbackClick('negative')}
        disabled={isSubmitting}
        aria-label="Negative feedback: Bad"
      >
        <span className="icon">😫</span>
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
  className = ''
}) {
  return (
    <div className={className}>
      <label htmlFor="feedback-detail" className="textarea-label">
        {translate({
          id: 'feedback.components.feedbackDetail',
          message: '평가에 대해 자세히 알려주세요.'
        })}
        <span className="required">
          {feedbackType === 'negative' 
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
        className="feedback-textarea"
        placeholder={
          feedbackType === 'negative' 
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
        rows={4}
        maxLength={1000}
        required={feedbackType === 'negative'}
      />

      <div className="character-count">
        {detailText.length} / 1000
        {feedbackType === 'negative' && detailText.trim().length === 0 && (
          <span className="required-note">
            {translate({
              id: 'feedback.component.requiredNote',
              message: '* 필수 입력'
            })}
          </span>
        )}
      </div>

      {submitStatus === 'validation-error' && (
        <div className="error-message" role="alert">
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
export function SuccessMessage({ className = '' }) {
  return (
    <div className={`${className} success-message`}>
      <span className="success-icon">✓</span>
      <p>
        {translate({
          id: 'feedback.components.thanksForFeedback',
          message: '피드백을 제출해 주셔서 감사합니다.'
        })}
      </p>
      <p className="success-subtext">
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
export function ErrorMessage({ className = '' }) {
  return (
    <div className={`${className} error-message`} role="alert">
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
  className = ''
}) {
  const isDisabled = disabled || isSubmitting || 
    (feedbackType === 'negative' && !detailText.trim());

  return (
    <button
      className={`${className} submit-button`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isSubmitting ? (
        <>
          <span className="spinner" aria-hidden="true"></span>
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
  );
}