import React, { useMemo } from 'react';
import { md } from './utils';

export default function Markdown({ text }) {
  if (!text) return null;
  const html = useMemo(() => {
    const normalized = text.replace(/\r\n/g, '\n').replace(/^\\\-/gm, '-');
    return md.render(normalized);
  }, [text]);
  return (
    <div
      className="markdown"
      style={{ color: 'var(--ifm-color-content)', fontSize: 14, lineHeight: 1.7 }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
