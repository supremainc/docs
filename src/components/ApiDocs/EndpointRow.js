import React from 'react';
import MethodBadge from './MethodBadge';

export default function EndpointRow({ req, onSelect }) {
  const method = req.request?.method;
  const desc = req.request?.description;
  const shortDesc = typeof desc === 'string' ? desc.split('\n')[0].replace(/\*\*/g, '').trim() : '';
  return (
    <button onClick={() => onSelect(req)} style={{
      display: 'flex', alignItems: 'flex-start', gap: 12, width: '100%',
      padding: '12px 16px', background: 'none', border: 'none',
      borderBottom: '1px solid var(--ifm-color-emphasis-200)',
      cursor: 'pointer', textAlign: 'left',
    }}>
      <span style={{ flexShrink: 0, marginTop: 2 }}><MethodBadge method={method} compact /></span>
      <span style={{ flex: 1 }}>
        <span style={{ display: 'block', fontWeight: 600, fontSize: 14, color: 'var(--ifm-color-content)' }}>
          {req.name}
        </span>
        {shortDesc && (
          <span style={{ display: 'block', fontSize: 13, color: 'var(--ifm-color-content-secondary)', marginTop: 2 }}>
            {shortDesc}
          </span>
        )}
      </span>
    </button>
  );
}
