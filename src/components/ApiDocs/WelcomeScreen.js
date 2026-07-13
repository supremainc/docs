import React from 'react';
import Markdown from './Markdown';

export default function WelcomeScreen({ info, totalEndpoints }) {
  return (
    <div style={{ padding: '32px 40px', maxWidth: 860 }}>
      <h1 style={{ fontSize: 28, margin: '0 0 6px', color: 'var(--ifm-color-content)' }}>{info?.name}</h1>
      <p style={{ color: '#999', fontSize: 12, margin: '0 0 28px' }}>
        {totalEndpoints} endpoints — Select an endpoint from the sidebar.
      </p>
      <Markdown text={info?.description} />
    </div>
  );
}
