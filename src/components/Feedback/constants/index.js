/**
 * 피드백 시스템 공통 상수 및 설정
 */

// Google Forms 설정
export const FEEDBACK_CONFIG = {
  GOOGLE_FORM_ID: '1FAIpQLSc80m8XWDnKO3XJ9ZZ_hJ9iZVcYocu6XjdsGgOwC1vvh_IuxA',
  ENTRY_IDS: {
    FEEDBACK_TYPE: 'entry.1129679087',
    PAGE_URL: 'entry.23458126', 
    DETAIL_CONTENT: 'entry.1070297166'
  },
  FORM_FIELDS: {
    FVV: '1',
    PAGE_HISTORY: '0'
  }
};

// 피드백 유형 정의
export const FEEDBACK_TYPES = {
  POSITIVE: 'positive',
  NEGATIVE: 'negative'
};

// 제출 상태 정의
export const SUBMIT_STATUS = {
  IDLE: 'idle',
  SUCCESS: 'success',
  ERROR: 'error',
  VALIDATION_ERROR: 'validation-error'
};

// 피드백 텍스트 매핑
export const FEEDBACK_TEXT_MAP = {
  [FEEDBACK_TYPES.POSITIVE]: '😊 Good',
  [FEEDBACK_TYPES.NEGATIVE]: '😫 Bad'
};

// 기본 메시지 
export const DEFAULT_MESSAGES = {
  NEGATIVE_NO_DETAIL: '구체적인 개선 사항은 작성되지 않았습니다.',
  POSITIVE_QUICK: '빠른 긍정 피드백 (추가 의견 없음)',
  NO_COMMENT: '추가 의견 없음'
};

// 텍스트영역 설정
export const TEXTAREA_CONFIG = {
  MAX_LENGTH: 1000,
  ROWS: 4
};

// 타이밍 설정
export const TIMING_CONFIG = {
  SUCCESS_AUTO_CLOSE: 2000, // 모바일용 자동 닫힘
  SUCCESS_DISPLAY_TIME: 3000 // 데스크탑용 표시 시간
};

// 상태 검증 함수들
export const STATUS_CHECKS = {
  isIdle: (status) => status === SUBMIT_STATUS.IDLE,
  isSuccess: (status) => status === SUBMIT_STATUS.SUCCESS,
  isError: (status) => status === SUBMIT_STATUS.ERROR,
  isValidationError: (status) => status === SUBMIT_STATUS.VALIDATION_ERROR,
  isSubmitting: (status, isSubmitting) => isSubmitting
};

/**
 * Google Forms 제출 URL 생성
 * @param {string} formId - Google Form ID
 * @returns {string} 완전한 제출 URL
 */
export function createSubmitUrl(formId = FEEDBACK_CONFIG.GOOGLE_FORM_ID) {
  return `https://docs.google.com/forms/d/e/${formId}/formResponse`;
}

/**
 * 피드백 유형에 따른 텍스트 반환
 * @param {string} type - 피드백 유형 ('positive' | 'negative')
 * @returns {string} 피드백 텍스트
 */
export function getFeedbackText(type) {
  return FEEDBACK_TEXT_MAP[type] || '';
}

/**
 * 상세 내용 처리 로직
 * @param {string} detailText - 사용자 입력 텍스트
 * @param {string} feedbackType - 피드백 유형
 * @returns {string} 처리된 상세 내용
 */
export function processDetailContent(detailText, feedbackType) {
  const trimmedText = detailText.trim();
  
  if (!trimmedText && feedbackType === FEEDBACK_TYPES.NEGATIVE) {
    return DEFAULT_MESSAGES.NEGATIVE_NO_DETAIL;
  } else if (!trimmedText && feedbackType === FEEDBACK_TYPES.POSITIVE) {
    return DEFAULT_MESSAGES.POSITIVE_QUICK;
  } else {
    return trimmedText || DEFAULT_MESSAGES.NO_COMMENT;
  }
}