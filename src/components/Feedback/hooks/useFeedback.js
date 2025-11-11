import { useState, useCallback, useEffect } from 'react';
import { 
  FEEDBACK_CONFIG, 
  FEEDBACK_TYPES, 
  SUBMIT_STATUS,
  createSubmitUrl,
  getFeedbackText,
  processDetailContent 
} from '../constants';

/**
 * 피드백 기능을 위한 공통 커스텀 훅
 * @param {Object} config - 설정 객체
 * @param {string} config.googleFormId - Google Form ID
 * @param {string} config.feedbackTypeEntryId - 피드백 유형 필드 ID
 * @param {string} config.pageUrlEntryId - 페이지 URL 필드 ID  
 * @param {string} config.detailEntryId - 상세 내용 필드 ID
 * @param {Function} config.onSuccess - 성공 콜백
 * @param {Function} config.onReset - 초기화 콜백
 */
export function useFeedback({
  googleFormId = FEEDBACK_CONFIG.GOOGLE_FORM_ID,
  feedbackTypeEntryId = FEEDBACK_CONFIG.ENTRY_IDS.FEEDBACK_TYPE,
  pageUrlEntryId = FEEDBACK_CONFIG.ENTRY_IDS.PAGE_URL, 
  detailEntryId = FEEDBACK_CONFIG.ENTRY_IDS.DETAIL_CONTENT,
  onSuccess,
  onReset
} = {}) {
  // 공통 상태
  const [feedbackType, setFeedbackType] = useState(null);
  const [detailText, setDetailText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(SUBMIT_STATUS.IDLE);
  const [currentPageUrl, setCurrentPageUrl] = useState('');

  // 페이지 URL 설정
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPageUrl(window.location.href);
    }
  }, []);

  // 피드백 선택 핸들러
  const handleFeedbackClick = useCallback((type) => {
    setFeedbackType(type);
    setSubmitStatus(SUBMIT_STATUS.IDLE);
  }, []);

  // 초기화 함수
  const resetFeedback = useCallback(() => {
    setFeedbackType(null);
    setDetailText('');
    setSubmitStatus(SUBMIT_STATUS.IDLE);
    onReset?.();
  }, [onReset]);

  // Google Forms 제출 로직
  const submitToGoogleForms = useCallback(async () => {
    try {
      const formData = new FormData();
      
      // 피드백 유형
      const feedbackTypeText = getFeedbackText(feedbackType);
      formData.append(feedbackTypeEntryId, feedbackTypeText);
      
      // 페이지 URL
      formData.append(pageUrlEntryId, currentPageUrl);
      
      // 상세 내용
      const processedContent = processDetailContent(detailText, feedbackType);
      formData.append(detailEntryId, processedContent);

      // 필수 필드들
      formData.append('fvv', FEEDBACK_CONFIG.FORM_FIELDS.FVV);
      formData.append('pageHistory', FEEDBACK_CONFIG.FORM_FIELDS.PAGE_HISTORY);

      // Google Forms 제출 URL
      const submitUrl = createSubmitUrl(googleFormId);

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
  }, [feedbackType, currentPageUrl, detailText, googleFormId, feedbackTypeEntryId, pageUrlEntryId, detailEntryId]);

  // 제출 핸들러
  const handleSubmit = useCallback(async () => {
    if (!feedbackType) return;
    
    // 부정 피드백인 경우 상세 내용 필수 검증
    if (feedbackType === FEEDBACK_TYPES.NEGATIVE && !detailText.trim()) {
      setSubmitStatus(SUBMIT_STATUS.VALIDATION_ERROR);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(SUBMIT_STATUS.IDLE);

    const success = await submitToGoogleForms();

    if (success) {
      setSubmitStatus(SUBMIT_STATUS.SUCCESS);
      onSuccess?.(feedbackType, detailText);
    } else {
      setSubmitStatus(SUBMIT_STATUS.ERROR);
    }

    setIsSubmitting(false);
  }, [feedbackType, detailText, submitToGoogleForms, onSuccess]);

  return {
    // 상태
    feedbackType,
    detailText,
    isSubmitting,
    submitStatus,
    currentPageUrl,
    
    // 상태 업데이트
    setFeedbackType,
    setDetailText,
    setSubmitStatus,
    
    // 핸들러
    handleFeedbackClick,
    handleSubmit,
    resetFeedback
  };
}