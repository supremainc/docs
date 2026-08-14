import React from 'react';
import { md } from './utils';
import RequiredBadge from './RequiredBadge';

const TH = { padding: '8px 12px', textAlign: 'left', fontWeight: 600, fontSize: 12, borderBottom: '1px solid var(--ifm-color-emphasis-300)' };
const TD = { padding: '8px 12px', verticalAlign: 'top' };

export default function ParamTable({ title, params }) {
  if (!params?.length) return null;
  return (
    <div style={{ margin: '20px 0' }} className='markdown'>
      <h4>{title}</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, overflow: 'hidden' }}>
        <thead>
          <tr style={{ background: 'var(--ifm-color-emphasis-100)' }}>
            <th style={{ ...TH }}>Name</th>
            <th style={{ ...TH }}>Type</th>
            <th style={TH}>Description</th>
          </tr>
        </thead>
        <tbody>
          {params.map((p, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--ifm-color-emphasis-200)' }}>
              <td style={{ ...TD, fontFamily: 'monospace', fontSize: 12 }}>
                <strong>{p.key}</strong> {p.required && <RequiredBadge />}
              </td>
              <td style={{ ...TD, fontFamily: 'monospace', color: '#0066cc', fontSize: 12 }}>
                {(p.value || '').replace(/\{\{([^}]+)\}\}/g, '{$1}') || '-'}
              </td>
              <td style={{ ...TD, color: 'var(--ifm-color-content-secondary)' }}
                dangerouslySetInnerHTML={{ __html: md.render(p.description || '\\-').replace(/^<p>([\s\S]*)<\/p>\n?$/, '$1') }} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
