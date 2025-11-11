import { useState, useCallback, useEffect } from 'react';

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
  googleFormId = '1FAIpQLSc80m8XWDnKO3XJ9ZZ_hJ9iZVcYocu6XjdsGgOwC1vvh_IuxA',
  feedbackTypeEntryId = 'entry.1129679087',
  pageUrlEntryId = 'entry.23458126', 
  detailEntryId = 'entry.1070297166',
  onSuccess,
  onReset
} = {}) {
  // 공통 상태
  const [feedbackType, setFeedbackType] = useState(null);
  const [detailText, setDetailText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
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
    setSubmitStatus('idle');
  }, []);

  // 초기화 함수
  const resetFeedback = useCallback(() => {
    setFeedbackType(null);
    setDetailText('');
    setSubmitStatus('idle');
    onReset?.();
  }, [onReset]);

  // Google Forms 제출 로직
  const submitToGoogleForms = useCallback(async () => {
    try {
      const formData = new FormData();
      
      // 피드백 유형
      const feedbackTypeText = feedbackType === 'positive' ? '😊 Good' : '😫 Bad';
      formData.append(feedbackTypeEntryId, feedbackTypeText);
      
      // 페이지 URL
      formData.append(pageUrlEntryId, currentPageUrl);
      
      // 상세 내용
      const detailContent = detailText.trim();
      if (!detailContent && feedbackType === 'negative') {
        formData.append(detailEntryId, '구체적인 개선 사항은 작성되지 않았습니다.');
      } else if (!detailContent && feedbackType === 'positive') {
        formData.append(detailEntryId, '빠른 긍정 피드백 (추가 의견 없음)');
      } else {
        formData.append(detailEntryId, detailContent || '추가 의견 없음');
      }

      // 필수 필드들
      formData.append('fvv', '1');
      formData.append('pageHistory', '0');

      // Google Forms 제출 URL
      const submitUrl = `https://docs.google.com/forms/d/e/${googleFormId}/formResponse`;

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
    if (feedbackType === 'negative' && !detailText.trim()) {
      setSubmitStatus('validation-error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const success = await submitToGoogleForms();

    if (success) {
      setSubmitStatus('success');
      onSuccess?.(feedbackType, detailText);
    } else {
      setSubmitStatus('error');
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