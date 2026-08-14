import React from 'react';
import RequiredBadge from './RequiredBadge';
import { md } from './utils';

const TH = { padding: '8px 12px', textAlign: 'left', fontWeight: 600, fontSize: 12, borderBottom: '1px solid var(--ifm-color-emphasis-300)' };
const TD = { padding: '8px 12px', verticalAlign: 'top' };

export default function FieldsTable({ title, fields, note }) {
  if (!fields?.length) return null;
  return (
    <div style={{ margin: '20px 0' }} className='markdown'>
      <h4>{title}</h4>
      {note && (
        <div style={{ fontSize: 12, color: 'var(--ifm-color-content-secondary)', marginBottom: 10 }}>
          {note}
        </div>
      )}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ background: 'var(--ifm-color-emphasis-100)' }}>
            <th style={{ ...TH, width: 200 }}>Field</th>
            <th style={{ ...TH, width: 100 }}>Type</th>
            <th style={TH}>Description</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((f, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--ifm-color-emphasis-200)' }}>
              <td style={{ ...TD, fontFamily: 'monospace', fontSize: 12 }}>
                <p>
                  <strong>{f.name}</strong>
                  {f.required && <RequiredBadge />}
                </p>
              </td>
              <td style={{ ...TD, fontFamily: 'monospace', fontSize: 12, color: '#0066cc' }}>{f.type}</td>
              <td
                style={{ ...TD, color: 'var(--ifm-color-content-secondary)' }}
                dangerouslySetInnerHTML={{ __html: md.render(f.description || '\\-').replace(/^<p>([\s\S]*)<\/p>\n?$/, '$1') }}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
