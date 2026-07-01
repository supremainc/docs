import React, { useState, useMemo } from 'react';
import CodeBlock from '@theme/CodeBlock';
import { makeSnippets } from './utils';
import { SNIPPET_LANGS } from './constants';

export default function CodeSnippets({ req }) {
  const snippets = useMemo(() => makeSnippets(req), [req]);
  const tabs = Object.keys(snippets);
  const [active, setActive] = useState(tabs[0]);

  return (
    <div style={{ margin: '24px 0', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ background: 'var(--ifm-color-emphasis-100)', borderBottom: '1px solid var(--ifm-color-emphasis-300)', padding: '8px 16px' }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--ifm-color-content-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Code Examples
        </span>
      </div>
      <div style={{ display: 'flex', background: 'var(--ifm-background-color)', borderBottom: '1px solid var(--ifm-color-emphasis-300)', overflowX: 'auto' }}>
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActive(tab)} style={{
            padding: '8px 14px', fontSize: 12, fontWeight: active === tab ? 600 : 400,
            border: 'none', background: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
            color: active === tab ? '#0066cc' : 'var(--ifm-color-content-secondary)',
            borderBottom: `2px solid ${active === tab ? '#0066cc' : 'transparent'}`,
          }}>{tab}</button>
        ))}
      </div>
      <CodeBlock language={SNIPPET_LANGS[active] || 'bash'}>{snippets[active]}</CodeBlock>
    </div>
  );
}
