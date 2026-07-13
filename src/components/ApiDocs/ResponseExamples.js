import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import { prettyJson } from './utils';
import { SECTION_LABEL } from './constants';

export default function ResponseExamples({ responses }) {
  const [active, setActive] = useState(0);
  if (!responses?.length) return null;
  const resp = responses[active];
  return (
    <div style={{ margin: '24px 0' }}>
      <h4 style={SECTION_LABEL}>Example Responses</h4>
      <div style={{ border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, overflow: 'hidden' }}>
        <div style={{ display: 'flex', background: 'var(--ifm-color-emphasis-100)', borderBottom: '1px solid var(--ifm-color-emphasis-300)', overflowX: 'auto' }}>
          {responses.map((r, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px',
              fontSize: 12, border: 'none', background: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              color: active === i ? 'var(--ifm-color-content)' : 'var(--ifm-color-content-secondary)',
              borderBottom: `2px solid ${active === i ? '#0066cc' : 'transparent'}`,
              fontWeight: active === i ? 600 : 400,
            }}>
              <span style={{
                background: r.code >= 200 && r.code < 300 ? '#49cc90' : r.code >= 400 ? '#f93e3e' : '#fca130',
                color: '#fff', borderRadius: 10, padding: '1px 7px', fontSize: 11, fontWeight: 700,
              }}>{r.code}</span>
              {r.name}
            </button>
          ))}
        </div>
        {resp.body
          ? <CodeBlock language="json">{prettyJson(resp.body)}</CodeBlock>
          : <div style={{ padding: 16, color: '#999', fontSize: 13 }}>No response body</div>
        }
      </div>
    </div>
  );
}
