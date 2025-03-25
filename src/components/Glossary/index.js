import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// 각 로케일에 맞는 glossary 파일을 정적으로 import
import glossary_ko from '@site/i18n/ko/glossary.json';
import glossary_en from '@site/i18n/en/glossary.json';

const glossaryMap = {
  ko: glossary_ko,
  en: glossary_en,
};

export function Glossary({ termid }) {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  // 현재 로케일에 맞는 glossary 객체 가져오기, 기본값은 한국어
  const glossary = glossaryMap[currentLocale] || glossary_en;

  const term = glossary[termid];
  if (!term) {
    return <div>Term not found</div>;
  }

  const { name, description } = term;
  return (
    <p>
      <b>{name}</b>: <span dangerouslySetInnerHTML={{ __html: description }} />
    </p>
  );
}