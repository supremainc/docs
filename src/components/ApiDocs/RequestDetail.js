import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Markdown from './Markdown';
import MethodBadge from './MethodBadge';
import ParamTable from './ParamTable';
import CodeSnippets from './CodeSnippets';
import ResponseExamples from './ResponseExamples';
import EndpointRow from './EndpointRow';
import DeprecatedBadge from './DeprecatedBadge';
import StabilityBadge from './StabilityBadge';
import RequestBodyFields from './RequestBodyFields';
import FieldsTable from './FieldsTable';
import { useIsMobile } from './hooks';
import { toDisplayUrl, prettyJson } from './utils';
import { METHOD_COLORS, SECTION_LABEL } from './constants';

export default function RequestDetail({ item, onSelect, auth, serverUrl }) {
  // hooks는 조건문 이전에 항상 호출
  const isMobile = useIsMobile();

  if (item._folder) {
    const folder = item._folder;
    const children = folder.item || [];
    return (
      <div style={{ padding: '32px 40px', maxWidth: 900 }} className='markdown'>
        <header><h1 style={{ marginBottom: 8 }}>{folder.name}</h1></header>
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
  const url = toDisplayUrl(req?.url, serverUrl);
  const color = METHOD_COLORS[method?.toUpperCase()] || '#0066cc';
  const hasLeftContent = !!req?.description
    || req?.header?.length > 0
    || req?.pathParams?.length > 0
    || req?.url?.variable?.length > 0
    || req?.url?.query?.length > 0
    || req?.bodyFields?.length > 0;

  return (
    <div>
      <div style={{ padding: '28px 32px 20px', borderBottom: '1px solid var(--ifm-color-emphasis-300)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <MethodBadge method={method} />
          <h1 style={{ fontSize: 24, margin: 0, lineHeight: 1.2 }}>{item.name}</h1>
          {item.deprecated && <DeprecatedBadge />}
        </div>
        <div style={{
          background: 'var(--ifm-color-emphasis-100)', borderLeft: `4px solid ${color}`,
          padding: '9px 14px', borderRadius: '0 4px 4px 0',
          fontFamily: 'var(--ifm-font-family-monospace, monospace)',
          fontSize: 13, wordBreak: 'break-all', color: 'var(--ifm-color-content)',
        }}>
          <strong>{method}</strong>{' '}{url}
          {item.stability && (
            <div style={{ position: 'relative', display: 'flow', float: 'right' }}>
              <StabilityBadge stability={item.stability} />
            </div>
          )}
        </div>
        {item.deprecated && (
          <div style={{
            marginTop: 14, padding: '9px 14px', borderRadius: 4,
            background: 'var(--ifm-color-warning-contrast-background, #fff8e6)',
            border: '1px solid var(--ifm-color-warning-dark, #e6a700)',
            color: 'var(--ifm-color-warning-contrast-foreground, #715100)',
            fontSize: 13,
          }}>
            ⚠ This API is deprecated. Do not use this endpoint for new integrations.
          </div>
        )}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 3fr) minmax(0, 2fr)',
        minHeight: 0,
      }}>
        {hasLeftContent && (
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
            {req?.pathParams?.length
              ? <FieldsTable title="Path Parameters" fields={req.pathParams} />
              : <ParamTable title="Path Parameters" params={req?.url?.variable} />}
            <ParamTable title="Query Parameters" params={req?.url?.query} />
            <RequestBodyFields fields={req?.bodyFields} contentType={req?.bodyContentType} />
          </div>
        )}

        <div style={{ padding: isMobile ? '16px 20px' : '24px 24px', background: 'var(--ifm-background-surface-color)', overflow: 'auto' }}>
          {req?.body?.raw && (
            <div style={{ marginBottom: 20 }}>
              <h4 style={SECTION_LABEL}>Example</h4>
              <CodeBlock language="json">{prettyJson(req.body.raw)}</CodeBlock>
            </div>
          )}
          <CodeSnippets req={req} auth={auth} serverUrl={serverUrl} />
          <ResponseExamples responses={item.response} />
        </div>
      </div>
    </div>
  );
}
