import React, { useMemo } from 'react';
import CodeBlock from '@theme/CodeBlock';
import Admonition from '@theme/Admonition';
import { md } from './utils';

// ```lang ... ``` 코드펜스와 :::type[Title] ... ::: admonition만 먼저 잘라내
// CodeBlock(Prism 하이라이트) / Admonition(알림 박스)으로 그리고, 나머지 텍스트만
// markdown-it으로 렌더링한다. dangerouslySetInnerHTML 문자열 안에는 React 컴포넌트를
// 끼워 넣을 수 없어서, 두 블록 앞뒤로 세그먼트를 나누는 방식을 쓴다.
// admonition 본문은 재귀적으로 같은 방식으로 다시 나눈다(내부에 코드펜스가 올 수 있음).
const BLOCK_RE =
  /^```(?<fenceLang>[\w-]*)\n(?<fenceCode>[\s\S]*?)\n?```$|^:::(?<adType>\w+)(?:\[(?<adTitle>[^\]]*)\])?[ \t]*\n(?<adBody>[\s\S]*?)\n:::$/gm;

function parseSegments(text) {
  const segments = [];
  let lastIndex = 0;
  let match;
  const re = new RegExp(BLOCK_RE);
  while ((match = re.exec(text))) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', content: text.slice(lastIndex, match.index) });
    }
    const g = match.groups;
    if (g.fenceCode !== undefined) {
      segments.push({ type: 'code', lang: g.fenceLang || 'text', code: g.fenceCode });
    } else {
      segments.push({ type: 'admonition', kind: g.adType, title: g.adTitle, children: parseSegments(g.adBody) });
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    segments.push({ type: 'text', content: text.slice(lastIndex) });
  }
  return segments;
}

function renderSegments(segments) {
  return segments.map((seg, i) => {
    if (seg.type === 'code') {
      return <CodeBlock key={i} language={seg.lang}>{seg.code}</CodeBlock>;
    }
    if (seg.type === 'admonition') {
      return (
        <Admonition key={i} type={seg.kind} title={seg.title || undefined}>
          {renderSegments(seg.children)}
        </Admonition>
      );
    }
    return <div key={i} dangerouslySetInnerHTML={{ __html: md.render(seg.content) }} />;
  });
}

export default function Markdown({ text }) {
  const segments = useMemo(() => {
    if (!text) return [];
    const normalized = text.replace(/\r\n/g, '\n').replace(/^\\\-/gm, '-');
    return parseSegments(normalized);
  }, [text]);

  if (!segments.length) return null;

  return (
    <div className="markdown" style={{ color: 'var(--ifm-color-content)', fontSize: 14, lineHeight: 1.7 }}>
      {renderSegments(segments)}
    </div>
  );
}
