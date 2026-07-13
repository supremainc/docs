import React from 'react';
import { METHOD_COLORS } from './constants';

export default function MethodBadge({ method, compact }) {
  const color = METHOD_COLORS[method?.toUpperCase()] || '#999';
  return (
    <span style={{
      background: color, color: '#fff',
      padding: compact ? '2px 5px' : '2px 8px',
      borderRadius: 3,
      fontSize: 11,
      fontWeight: 700,
      fontFamily: 'Noto Sans Coptic, monospace',
      letterSpacing: '0.02em',
      minWidth: compact ? 32 : 46,
      display: 'inline-block',
      textAlign: 'center',
      flexShrink: 0,
    }}>
      {method}
    </span>
  );
}
