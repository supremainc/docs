import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import clsx from 'clsx';
import koLocale from './ko.json';
import enLocale from './en.json';
import xkoLocale from './x/ko.json';
import xenLocale from './x/en.json';

// 다국어 지원을 위한 locale mapping
const localeMap = {
  ko: koLocale,
  en: enLocale,
  // 향후 다른 언어 추가 예시:
  // fr: frLocale,
  // es: esLocale,
};

const xlocaleMap = {
  ko: xkoLocale,
  en: xenLocale,
  // 향후 다른 언어 추가 예시:
  // fr: frLocale,
  // es: esLocale,
};

// 중첩된 JSON 값에 접근하기 위한 함수
const getLocaleText = (locale, sid) => {
  return sid.split('.').reduce((acc, key) => acc && acc[key], locale);
};

const ReplacementLocaleText = ({ sid, code, className, children, product }) => {
  const { i18n: { currentLocale } } = useDocusaurusContext();

  if (sid) {
    // 현재 로케일에 해당하는 locale을 사용, 없으면 기본은 영어
    let localeText;

    if (product === 'x') {
      const locale = xlocaleMap[currentLocale] || xlocaleMap.en;
      const text = getLocaleText(locale, sid);
      localeText = text ? text.replace('<br>', '') : null;
    } else {
      const locale = localeMap[currentLocale] || localeMap.en;
      localeText = locale[sid] ? locale[sid].replace('<br>', '') : null;
    }
    
    
    if (!localeText) {
      console.error(`Locale text not found for SID: ${sid}`);
      return null;
    }
    return <span className={clsx('cmd', className)}>{localeText}</span>;
  } else if (code) {
    try {
      const localeText = translate({ id: code });
      return <span className={clsx('cmd', className)}>{localeText}</span>;
    } catch (error) {
      console.error(`Error rendering locale text for code: ${code}`, error);
      return null;
    }
  } else if (children) {
    return <span className={clsx('cmd', className)}>{children}</span>;
  }
  return null;
};

export default ReplacementLocaleText;