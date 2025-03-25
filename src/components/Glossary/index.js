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

  // 현재 로케일에 맞는 glossary 객체 가져오기, 기본값은 영어
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

export function GlossaryAll() {
	const {
		i18n: { currentLocale },
	} = useDocusaurusContext();

	const glossary = glossaryMap[currentLocale] || glossary_en;

	// glossary 객체를 key와 value를 포함한 배열로 변환 후 정렬
	const sortedEntries = Object.entries(glossary).sort(([, a], [, b]) =>
		a.name.localeCompare(b.name, currentLocale)
	);

	return (
		<dl>
			{sortedEntries.map(([key, term]) => (
				<React.Fragment key={key}>
					<dt id={key}>{term.name}</dt>
					<dd dangerouslySetInnerHTML={{ __html: term.description }} />
				</React.Fragment>
			))}
		</dl>
	);
}