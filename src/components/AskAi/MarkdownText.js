import '@assistant-ui/react-markdown/styles/dot.css';

import React, {memo} from 'react';
import {MarkdownTextPrimitive, memoizeMarkdownComponents} from '@assistant-ui/react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './thread.module.css';

// 답변 본문은 문서 본문과 같은 사이트 스타일(Infima)을 쓴다.
function MarkdownTextImpl() {
  return (
    <MarkdownTextPrimitive
      remarkPlugins={[remarkGfm]}
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
