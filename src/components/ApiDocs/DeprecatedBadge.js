import React from 'react';

export default function DeprecatedBadge({ compact }) {
  return (
    <span style={{
      background: 'var(--ifm-color-emphasis-200)', color: 'var(--ifm-color-content-secondary)',
      border: '1px solid var(--ifm-color-emphasis-400)',
      padding: compact ? '1px 5px' : '2px 8px',
      borderRadius: 3,
      fontSize: compact ? 10 : 11,
      fontWeight: 700,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      display: 'inline-block',
      flexShrink: 0,
    }}>
      Deprecated
    </span>
  );
}
