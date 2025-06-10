import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import clsx from 'clsx';
import koLocale from './ko.json';
import enLocale from './en.json';
import xkoLocale from './x/ko.json';
import xenLocale from './x/en.json';
import glossary_ko from '@site/i18n/ko/glossary.json';
import glossary_en from '@site/i18n/en/glossary.json';

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

const glossaryMap = {
  ko: glossary_ko,
  en: glossary_en,
};

// 중첩된 JSON 값에 접근하기 위한 함수
// const getLocaleText = (locale, sid) => {
//   return sid.split('.').reduce((acc, key) => acc && acc[key], locale);
// };

const ReplacementLocaleText = ({ sid, code, className, children, product, tip }) => {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  let localeText, desc;

  if (sid) {
    // 현재 로케일에 해당하는 locale을 사용, 없으면 기본은 영어

    if (product === '2') {
      const locale = localeMap[currentLocale] || localeMap.en;
      localeText = locale[sid] 
        ? locale[sid]
          .replace('<br>', '').replace('</br>', '').replace('<br/>', ' ')
          .replace('\\xB0\\x43', '℃').replace('\\xB0\\x46', '℉')
        : null;
    } else {
      // const locale = xlocaleMap[currentLocale] || xlocaleMap.en;
      // const text = getLocaleText(locale, sid);
      // localeText = text ? text.replace('<br>', '') : null;
      const locale = xlocaleMap[currentLocale] || xlocaleMap.en;
      localeText = locale[sid] ? locale[sid].replace('<br>', '') : null;
    }
    
    if (tip) {
      const glossary = glossaryMap[currentLocale] || glossary_en;
      desc = glossary[tip]?.description;
      // console.log('desc', desc);
    }
    
    if (!localeText) {
      console.error(`Locale text not found for SID: ${sid}`);
      return null;
    }
    return (
      <span className={clsx('cmd', className)}>
        {localeText}
        {tip && <div className="tooltip" dangerouslySetInnerHTML={{__html: desc}} />}
      </span>
    );
  } else if (code) {
    try {
      localeText = translate({ id: code });
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