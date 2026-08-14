import React from 'react';
import { STABILITY_COLORS } from './constants';

const LABELS = { stable: 'Stable', beta: 'Beta', internal: 'Internal' };

export default function StabilityBadge({ stability, compact }) {
  const color = STABILITY_COLORS[stability];
  if (!color) return null;
  return (
    <span style={{
      background: color, color: '#fff',
      padding: compact ? '1px 5px' : '2px 8px',
      borderRadius: 3,
      fontSize: compact ? 10 : 9,
      fontWeight: 700,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      display: 'inline-block',
      flexShrink: 0,
    }}>
      {LABELS[stability] || stability}
    </span>
  );
}
