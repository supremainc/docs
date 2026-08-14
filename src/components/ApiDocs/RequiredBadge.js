import React from 'react';

export default function RequiredBadge() {
  return (
    <span style={{
      background: 'rgba(220, 38, 38, 0.12)', color: '#dc2626',
      padding: '1px 6px', borderRadius: 3,
      fontSize: 9, fontWeight: 700, letterSpacing: '0.02em',
      textTransform: 'uppercase', display: 'inline-block', marginLeft: 6,
    }}>
      Required
    </span>
  );
}
