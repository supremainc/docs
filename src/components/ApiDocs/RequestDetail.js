import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Markdown from './Markdown';
import MethodBadge from './MethodBadge';
import ParamTable from './ParamTable';
import CodeSnippets from './CodeSnippets';
import ResponseExamples from './ResponseExamples';
import EndpointRow from './EndpointRow';
import { useIsMobile } from './hooks';
import { toDisplayUrl, prettyJson } from './utils';
import { METHOD_COLORS, SECTION_LABEL } from './constants';

export default function RequestDetail({ item, onSelect }) {
  // hooks는 조건문 이전에 항상 호출
  const isMobile = useIsMobile();

  if (item._folder) {
    const folder = item._folder;
    const children = folder.item || [];
    return (
      <div style={{ padding: '32px 40px', maxWidth: 900 }}>
        <h1 style={{ fontSize: 26, marginBottom: 8 }}>{folder.name}</h1>
        {folder.description && (
          <div style={{ marginBottom: 32 }}>
            <Markdown text={folder.description} />
          </div>
        )}
        {children.length > 0 && (
          <div>
            <h4 style={{ ...SECTION_LABEL, marginBottom: 12 }}>Endpoints</h4>
            <div style={{ border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, overflow: 'hidden' }}>
              {children.map(child => {
                if (child.item?.length > 0) {
                  return (
                    <div key={child.name}>
                      <div style={{
                        padding: '8px 16px', background: 'var(--ifm-color-emphasis-100)',
                        fontSize: 12, fontWeight: 700, color: 'var(--ifm-color-content-secondary)',
                        textTransform: 'uppercase', letterSpacing: '0.06em',
                        borderBottom: '1px solid var(--ifm-color-emphasis-200)',
                      }}>{child.name}</div>
                      {child.item.map(req => <EndpointRow key={req.name} req={req} onSelect={onSelect} />)}
                    </div>
                  );
                }
                return <EndpointRow key={child.name} req={child} onSelect={onSelect} />;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  const req = item.request;
  const method = req?.method;
  const url = toDisplayUrl(req?.url);
  const color = METHOD_COLORS[method?.toUpperCase()] || '#0066cc';

  return (
    <div>
      <div style={{ padding: '28px 32px 20px', borderBottom: '1px solid var(--ifm-color-emphasis-300)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <MethodBadge method={method} />
          <h1 style={{ fontSize: 24, margin: 0, lineHeight: 1.2 }}>{item.name}</h1>
        </div>
        <div style={{
          background: 'var(--ifm-color-emphasis-100)', borderLeft: `4px solid ${color}`,
          padding: '9px 14px', borderRadius: '0 4px 4px 0',
          fontFamily: 'var(--ifm-font-family-monospace, monospace)',
          fontSize: 13, wordBreak: 'break-all', color: 'var(--ifm-color-content)',
        }}>
          <strong>{method}</strong>{' '}{url}
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 3fr) minmax(0, 2fr)',
        minHeight: 0,
      }}>
        <div style={{
          padding: isMobile ? '16px 20px' : '24px 32px',
          borderRight: isMobile ? 'none' : '1px solid var(--ifm-color-emphasis-300)',
          borderBottom: isMobile ? '1px solid var(--ifm-color-emphasis-300)' : 'none',
          overflow: 'auto',
        }}>
          {req?.description && (
            <div style={{ marginBottom: 20 }}>
              <Markdown text={req.description} />
            </div>
          )}
          <ParamTable title="Headers" params={req?.header} />
          <ParamTable title="Path Parameters" params={req?.url?.variable} />
          <ParamTable title="Query Parameters" params={req?.url?.query} />
        </div>

        <div style={{ padding: isMobile ? '16px 20px' : '24px 24px', background: 'var(--ifm-background-surface-color)', overflow: 'auto' }}>
          {req?.body?.raw && (
            <div style={{ marginBottom: 20 }}>
              <h4 style={SECTION_LABEL}>Request Body</h4>
              <CodeBlock language="json">{prettyJson(req.body.raw)}</CodeBlock>
            </div>
          )}
          <CodeSnippets req={req} />
          <ResponseExamples responses={item.response} />
        </div>
      </div>
    </div>
  );
}
