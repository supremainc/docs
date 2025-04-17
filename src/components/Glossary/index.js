import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
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

  // 필터링 및 정렬 상태 관리
  const [filter, setFilter] = useState(null); // 현재 선택된 필터 (초성, 알파벳, 숫자)

  // 초성 추출 함수 (한글의 경우)
  const cleanString = (str) => str.replace(/[^가-힣a-zA-Z0-9]/g, ''); // 숫자와 특수문자 제거

  const getInitialConsonant = (str) => {
    if (!str) return ''; // 문자열이 없으면 빈 문자열 반환
    const firstChar = str.charAt(0);
    const unicode = firstChar.charCodeAt(0);

    // 한글 초성 범위: 가(0xAC00) ~ 힣(0xD7A3)
    if (unicode >= 0xac00 && unicode <= 0xd7a3) {
      const initialConsonantIndex = Math.floor((unicode - 0xac00) / 588);
      // 확장된 초성 배열
      return 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'[initialConsonantIndex];
    }
    return firstChar.toUpperCase(); // 한글이 아니면 대문자로 반환
  };

  const filteredEntries = Object.entries(glossary).filter(([key, term]) => {
    if (!filter) return true; // 필터가 없으면 모든 항목 표시

    const name = term.name || ''; // name 필드가 없으면 빈 문자열로 처리
    const initial =
      currentLocale === 'ko'
        ? getInitialConsonant(name) // 한글 초성 추출
        : name.charAt(0).toUpperCase(); // 알파벳 또는 숫자 첫 글자 추출

    // 숫자 필터 처리
    if (filter === '0-9') {
      return /^[0-9]/.test(name); // 숫자로 시작하는 경우만 반환
    }

    // console.log(`Filter: ${filter}, Term: ${name}, Initial: ${initial}`);
    return initial === filter;
  });

  // 필터링된 용어를 정렬
  const sortedEntries = filteredEntries.sort(([, a], [, b]) =>
    a.name.localeCompare(b.name, currentLocale)
  );

  // 한글 초성, 알파벳, 숫자 버튼 생성
  const consonants =
    currentLocale === 'ko'
      ? ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]
      : [];
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div>
      {/* 필터 버튼 UI */}
      <div>
        {currentLocale === 'ko' &&
          consonants.map((consonant) => (
            <button
              key={consonant}
              onClick={() => {
                const newFilter = filter === consonant ? null : consonant;
                // console.log(`Setting filter to: ${newFilter}`);
                setFilter(newFilter);
              }}
              style={{
                fontWeight: filter === consonant ? 'bold' : 'normal',
              }}
            >
              {consonant}
            </button>
          ))}
        {alphabets.map((alphabet) => (
          <button
            key={alphabet}
            onClick={() => setFilter(filter === alphabet ? null : alphabet)}
            style={{
              fontWeight: filter === alphabet ? 'bold' : 'normal',
            }}
          >
            {alphabet}
          </button>
        ))}
        <button
          key="0-9"
          onClick={() => setFilter(filter === '0-9' ? null : '0-9')}
          style={{
            fontWeight: filter === '0-9' ? 'bold' : 'normal',
          }}
        >
          0-9
        </button>
        <button onClick={() => setFilter(null)} style={{ fontWeight: !filter ? 'bold' : 'normal' }}>
          {translate({ id: 'theme.docs.glossary.all' })}
        </button>
      </div>

      {/* 필터링 및 정렬된 glossary 출력 */}
      <dl>
        {sortedEntries.map(([key, term]) => (
          <React.Fragment key={key}>
            <dt id={key}>
              {term.name}
              <Link className="hash-link" to={`#${key}`}>
                &#8203;
              </Link>
            </dt>
            <dd dangerouslySetInnerHTML={{ __html: term.description }} />
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
}