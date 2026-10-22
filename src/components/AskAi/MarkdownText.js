import '@assistant-ui/react-markdown/styles/dot.css';

import React, {memo} from 'react';
import {MarkdownTextPrimitive, memoizeMarkdownComponents} from '@assistant-ui/react-markdown';
import remarkGfm from 'remark-gfm';
import remarkCjkFriendly from 'remark-cjk-friendly';
import remarkCjkFriendlyGfmStrikethrough from 'remark-cjk-friendly-gfm-strikethrough';
import styles from './thread.module.css';

// `**출입 레벨(Access Level)**은`처럼 강조 구문 바로 뒤에 한글이 붙어도 서식이 적용되도록 한다.
const remarkPlugins = [remarkGfm, remarkCjkFriendly, remarkCjkFriendlyGfmStrikethrough];

// 답변 본문은 문서 본문과 같은 사이트 스타일(Infima)을 쓴다.
function MarkdownTextImpl() {
  return (
    <MarkdownTextPrimitive
      remarkPlugins={remarkPlugins}
      className={`aui-md ${styles.md}`}
      components={components}
      defer
    />
  );
}

export const MarkdownText = memo(MarkdownTextImpl);

const components = memoizeMarkdownComponents({
  // 답변 속 링크는 모두 새 탭에서 연다.
  a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" />,
});
