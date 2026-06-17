import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import CodeBlock from '@theme/CodeBlock';
import { useHistory, useLocation } from '@docusaurus/router';
import collectionData from './bsxapi-postman-collection.json';
import MarkdownIt from 'markdown-it';

// ─── Constants ────────────────────────────────────────────────────────
const METHOD_COLORS = {
  GET:    '#61affe',
  POST:   '#49cc90',
  PUT:    '#fca130',
  DELETE: '#f93e3e',
  PATCH:  '#50e3c2',
  HEAD:   '#9012fe',
};

const SNIPPET_LANGS = {
  Shell: 'bash', Python: 'python', JavaScript: 'javascript',
  'Node.js': 'javascript', Go: 'go', Java: 'java',
};

const SECTION_LABEL = {
  fontSize: 11, fontWeight: 700, color: 'var(--ifm-color-content-secondary)',
  textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 8px',
};

const TOTAL_ENDPOINTS = (collectionData.item || []).reduce((acc, f) => acc + (f.item?.length || 0), 0);

const FLAT_ITEMS = (() => {
  const list = [];
  for (const folder of collectionData.item || []) {
    list.push({ _folder: folder });
    for (const child of folder.item || []) {
      if (child.item?.length > 0) {
        list.push({ _folder: child });
        for (const req of child.item) list.push(req);
      } else {
        list.push(child);
      }
    }
  }
  return list;
})();

// ─── Responsive hook ─────────────────────────────────────────────────
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return isMobile;
}

// ─── URL utilities ────────────────────────────────────────────────────
function toDisplayUrl(url) {
  if (!url?.raw) return '';
  return url.raw
    .replace(/\{\{baseUrl\}\}/g, '{server_url}')
    .replace(/\{\{([^}]+)\}\}/g, '{$1}');
}

function toSnippetUrl(url) {
  if (!url?.raw) return 'https://your-server.com';
  return url.raw
    .replace(/\{\{baseUrl\}\}/g, 'https://your-server.com')
    .replace(/\{\{([^}]+)\}\}/g, '{$1}');
}

function prettyJson(raw) {
  if (!raw) return '';
  try { return JSON.stringify(JSON.parse(raw.replace(/\r\n/g, '\n')), null, 2); }
  catch { return raw.replace(/\r\n/g, '\n'); }
}

// ─── URL slug utilities ───────────────────────────────────────────────
function toSlug(name) {
  return (name || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

const SLUG_MAP = (() => {
  const m = new Map();
  for (const folder of collectionData.item || []) {
    m.set(toSlug(folder.name), { _folder: folder });
    for (const child of folder.item || []) {
      if (child.item?.length > 0) {
        m.set(toSlug(child.name), { _folder: child });
        for (const req of child.item) m.set(toSlug(req.name), req);
      } else {
        m.set(toSlug(child.name), child);
      }
    }
  }
  return m;
})();

function findRequestBySlug(slug) {
  return SLUG_MAP.get(slug) ?? null;
}

// ─── Code snippet builder ─────────────────────────────────────────────
function makeSnippets(req) {
  const method = req.method || 'GET';
  const url = toSnippetUrl(req.url);
  const isLogin = req.url?.raw?.includes('/api/login');

  const hdrs = [...(req.header || [])];
  if (!isLogin) hdrs.unshift({ key: 'bs-session-id', value: '{your-session-id}' });

  const bodyRaw = req.body?.raw;
  const hasBody = !!bodyRaw;
  const body = hasBody ? prettyJson(bodyRaw) : '';

  if (hasBody && !hdrs.some(h => h.key?.toLowerCase() === 'content-type'))
    hdrs.push({ key: 'Content-Type', value: 'application/json' });

  const hCurl = hdrs.map(h => `     -H '${h.key}: ${h.value}'`).join(' \\\n');
  const hDict = hdrs.map(h => `    '${h.key}': '${h.value}'`).join(',\n');
  const hGo   = hdrs.map(h => `\treq.Header.Add("${h.key}", "${h.value}")`).join('\n');
  const hJava = hdrs.map(h => `    .addHeader("${h.key}", "${h.value}")`).join('\n');

  return {
    Shell: [
      `curl -s -k -X ${method} \\`,
      `${hCurl} \\`,
      hasBody ? `     -d '${body}' \\` : null,
      `     '${url}'`,
    ].filter(Boolean).join('\n'),

    Python: [
      'import requests\n',
      `url = "${url}"`,
      `headers = {\n${hDict}\n}`,
      hasBody
        ? `payload = ${body}\n\nresponse = requests.${method.toLowerCase()}(url, headers=headers, json=payload)`
        : `response = requests.${method.toLowerCase()}(url, headers=headers)`,
      'print(response.json())',
    ].join('\n'),

    JavaScript: [
      `const response = await fetch('${url}', {`,
      `  method: '${method}',`,
      `  headers: {\n${hDict}\n  },`,
      hasBody ? `  body: JSON.stringify(${body}),` : null,
      '});\n',
      'const data = await response.json();',
      'console.log(data);',
    ].filter(Boolean).join('\n'),

    'Node.js': [
      "const axios = require('axios');\n",
      'const { data } = await axios({',
      `  method: '${method.toLowerCase()}',`,
      `  url: '${url}',`,
      `  headers: {\n${hDict}\n  },`,
      hasBody ? `  data: ${body},` : null,
      '});\n',
      'console.log(data);',
    ].filter(Boolean).join('\n'),

    Go: [
      'package main\n',
      'import (',
      '\t"fmt"',
      '\t"net/http"',
      '\t"io/ioutil"',
      hasBody ? '\t"strings"' : null,
      ')\n',
      'func main() {',
      hasBody
        ? `\tpayload := strings.NewReader(\`${body}\`)\n\treq, _ := http.NewRequest("${method}", "${url}", payload)`
        : `\treq, _ := http.NewRequest("${method}", "${url}", nil)`,
      hGo,
      '\n\tres, _ := http.DefaultClient.Do(req)',
      '\tdefer res.Body.Close()',
      '\tbody, _ := ioutil.ReadAll(res.Body)',
      '\tfmt.Println(string(body))',
      '}',
    ].filter(Boolean).join('\n'),

    Java: [
      'OkHttpClient client = new OkHttpClient();\n',
      hasBody
        ? `RequestBody body = RequestBody.create(\n  MediaType.parse("application/json"),\n  ${JSON.stringify(body)}\n);`
        : 'RequestBody body = RequestBody.create(null, new byte[0]);',
      '\nRequest request = new Request.Builder()',
      `  .url("${url}")`,
      `  .method("${method}", body)`,
      hJava,
      '  .build();\n',
      'Response response = client.newCall(request).execute();',
      'System.out.println(response.body().string());',
    ].join('\n'),
  };
}

// ─── Markdown → JSX ───────────────────────────────────────────────────
const md = new MarkdownIt({ html: true, breaks: true, linkify: false, typographer: false });

function Markdown({ text }) {
  if (!text) return null;
  const html = useMemo(() => {
    const normalized = text.replace(/\r\n/g, '\n').replace(/^\\\-/gm, '-');
    return md.render(normalized);
  }, [text]);
  return (
    <div
      className="markdown"
      style={{ color: 'var(--ifm-color-content)', fontSize: 14, lineHeight: 1.7 }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// ─── Shared UI atoms ──────────────────────────────────────────────────
function MethodBadge({ method, compact }) {
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

const TH = { padding: '8px 12px', textAlign: 'left', fontWeight: 600, fontSize: 12, borderBottom: '1px solid var(--ifm-color-emphasis-300)' };
const TD = { padding: '8px 12px', verticalAlign: 'top' };

function ParamTable({ title, params }) {
  if (!params?.length) return null;
  return (
    <div style={{ margin: '20px 0' }} className='markdown'>
      <h4>{title}</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, overflow: 'hidden' }}>
        <thead>
          <tr style={{ background: 'var(--ifm-color-emphasis-100)' }}>
            <th style={{ ...TH, width: 160 }}>Name</th>
            <th style={{ ...TH, width: 120 }}>Value</th>
            <th style={TH}>Description</th>
          </tr>
        </thead>
        <tbody>
          {params.map((p, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--ifm-color-emphasis-200)' }}>
              <td style={{ ...TD, fontFamily: 'monospace', color: '#c7254e', background: 'var(--ifm-color-emphasis-100)', fontSize: 12 }}>{p.key}</td>
              <td style={{ ...TD, fontFamily: 'monospace', color: 'var(--ifm-color-content-secondary)', fontSize: 12 }}>
                {(p.value || '').replace(/\{\{([^}]+)\}\}/g, '{$1}') || '-'}
              </td>
              <td style={{ ...TD, color: 'var(--ifm-color-content-secondary)' }}
                dangerouslySetInnerHTML={{ __html: md.render(p.description || '-').replace(/^<p>([\s\S]*)<\/p>\n?$/, '$1') }} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Code snippets ────────────────────────────────────────────────────
function CodeSnippets({ req }) {
  const snippets = useMemo(() => makeSnippets(req), [req]);
  const tabs = Object.keys(snippets);
  const [active, setActive] = useState(tabs[0]);

  return (
    <div style={{ margin: '24px 0', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ background: 'var(--ifm-color-emphasis-100)', borderBottom: '1px solid var(--ifm-color-emphasis-300)', padding: '8px 16px' }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--ifm-color-content-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Code Examples
        </span>
      </div>
      <div style={{ display: 'flex', background: 'var(--ifm-background-color)', borderBottom: '1px solid var(--ifm-color-emphasis-300)', overflowX: 'auto' }}>
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActive(tab)} style={{
            padding: '8px 14px', fontSize: 12, fontWeight: active === tab ? 600 : 400,
            border: 'none', background: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
            color: active === tab ? '#0066cc' : 'var(--ifm-color-content-secondary)',
            borderBottom: `2px solid ${active === tab ? '#0066cc' : 'transparent'}`,
          }}>{tab}</button>
        ))}
      </div>
      <CodeBlock language={SNIPPET_LANGS[active] || 'bash'}>{snippets[active]}</CodeBlock>
    </div>
  );
}

// ─── Response examples ────────────────────────────────────────────────
function ResponseExamples({ responses }) {
  const [active, setActive] = useState(0);
  if (!responses?.length) return null;
  const resp = responses[active];
  return (
    <div style={{ margin: '24px 0' }}>
      <h4 style={SECTION_LABEL}>Example Responses</h4>
      <div style={{ border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, overflow: 'hidden' }}>
        <div style={{ display: 'flex', background: 'var(--ifm-color-emphasis-100)', borderBottom: '1px solid var(--ifm-color-emphasis-300)', overflowX: 'auto' }}>
          {responses.map((r, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px',
              fontSize: 12, border: 'none', background: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              color: active === i ? 'var(--ifm-color-content)' : 'var(--ifm-color-content-secondary)',
              borderBottom: `2px solid ${active === i ? '#0066cc' : 'transparent'}`,
              fontWeight: active === i ? 600 : 400,
            }}>
              <span style={{
                background: r.code >= 200 && r.code < 300 ? '#49cc90' : r.code >= 400 ? '#f93e3e' : '#fca130',
                color: '#fff', borderRadius: 10, padding: '1px 7px', fontSize: 11, fontWeight: 700,
              }}>{r.code}</span>
              {r.name}
            </button>
          ))}
        </div>
        {resp.body
          ? <CodeBlock language="json">{prettyJson(resp.body)}</CodeBlock>
          : <div style={{ padding: 16, color: '#999', fontSize: 13 }}>No response body</div>
        }
      </div>
    </div>
  );
}

function findParentKeys(selected) {
  if (!selected) return null;
  for (const folder of collectionData.item || []) {
    if (selected._folder?.name === folder.name) return { folder: folder.name };
    for (const child of folder.item || []) {
      if (child.item?.length > 0) {
        if (selected._folder?.name === child.name) return { folder: folder.name, sub: `${folder.name}::${child.name}` };
        for (const req of child.item) {
          if (req.name === selected.name) return { folder: folder.name, sub: `${folder.name}::${child.name}` };
        }
      } else if (child.name === selected.name) {
        return { folder: folder.name };
      }
    }
  }
  return null;
}

// ─── Sidebar ──────────────────────────────────────────────────────────
const reqBtnStyle = (isActive) => ({
  display: 'flex', alignItems: 'center', gap: 8, width: '100%',
  background: isActive ? 'rgba(0,102,204,0.25)' : 'transparent',
  border: 'none', borderLeft: `2px solid ${isActive ? '#0066cc' : 'transparent'}`,
  cursor: 'pointer', color: isActive ? '#fff' : '#a8b0ba',
  fontSize: 14, textAlign: 'left', transition: 'background 0.12s',
});

function Sidebar({ selected, onSelect, isMobile }) {
  const [open, setOpen] = useState(() => {
    const init = {};
    (collectionData.item || []).forEach(f => {
      init[f.name] = false;
      (f.item || []).forEach(child => {
        if (child.item?.length > 0) init[`${f.name}::${child.name}`] = false;
      });
    });
    return init;
  });
  const [q, setQ] = useState('');

  const toggle = useCallback((key) => setOpen(p => ({ ...p, [key]: !p[key] })), []);

  // selected 변경 시 해당 항목의 부모 폴더를 자동으로 열기
  useEffect(() => {
    const keys = findParentKeys(selected);
    if (!keys) return;
    setOpen(p => ({
      ...p,
      [keys.folder]: true,
      ...(keys.sub ? { [keys.sub]: true } : {}),
    }));
  }, [selected]);

  const folders = useMemo(() => {
    if (!q.trim()) return collectionData.item || [];
    const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
    const matchStr = s => tokens.every(t => s?.toLowerCase().includes(t));
    const matchReq = r => matchStr(r.name) || matchStr(r.request?.url?.raw);
    return (collectionData.item || [])
      .map(f => ({
        ...f,
        item: (f.item || [])
          .map(child => {
            if (child.item?.length > 0) {
              const filtered = child.item.filter(matchReq);
              return filtered.length > 0 ? { ...child, item: filtered } : null;
            }
            return matchReq(child) ? child : null;
          })
          .filter(Boolean),
      }))
      .filter(f => f.item.length > 0 || matchStr(f.name));
  }, [q]);

  return (
    <aside style={{
      width: isMobile ? '100%' : 380,
      minWidth: isMobile ? '100%' : 280,
      background: '#1a1d23',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      borderRight: '1px solid #2d3139',
      flexShrink: 0,
    }}>
      <div style={{ padding: '14px 14px 10px', borderBottom: '1px solid #2d3139', flexShrink: 0 }}>
        <button onClick={() => onSelect(null)} style={{
          display: 'block', width: '100%', textAlign: 'left',
          fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10,
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
        }}>
          {collectionData.info?.name}
        </button>
        <input type="search" placeholder="Filter..." value={q} onChange={e => setQ(e.target.value)} style={{
          width: '100%', boxSizing: 'border-box', padding: '5px 10px', fontSize: 14,
          background: '#2a2d35', border: '1px solid #3a3d45', borderRadius: 4,
          color: '#ccc', outline: 'none',
        }} />
      </div>

      <nav style={{ flex: 1, overflowY: 'auto', padding: '6px 0' }}>
        {folders.map(folder => {
          const hasItems = folder.item?.length > 0;
          const isFolderOpen = !!q.trim() || (open[folder.name] ?? false);
          return (
            <div key={folder.name}>
              {/* 최상위 폴더 헤더 */}
              <button onClick={() => { toggle(folder.name); onSelect({ _folder: folder }); }} style={{
                display: 'flex', alignItems: 'center', gap: 6, width: '100%',
                padding: '6px 14px', background: 'transparent', border: 'none', cursor: 'pointer',
                color: '#8b9099', fontSize: 13, fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.07em', textAlign: 'left',
              }}>
                <span style={{ fontSize: 10, opacity: 0.6 }}>
                  {hasItems ? (isFolderOpen ? '▼' : '▶') : '●'}
                </span>
                <span>{folder.name}</span>
              </button>

              {isFolderOpen && hasItems && (folder.item || []).map(child => {
                // 서브폴더
                if (child.item?.length > 0) {
                  const subKey = `${folder.name}::${child.name}`;
                  const isSubOpen = !!q.trim() || (open[subKey] ?? false);
                  return (
                    <div key={child.name}>
                      <button onClick={() => { toggle(subKey); onSelect({ _folder: child }); }} style={{
                        display: 'flex', alignItems: 'center', gap: 5, width: '100%',
                        padding: '4px 14px 4px 22px', background: 'transparent',
                        border: 'none', cursor: 'pointer', color: '#6b7280',
                        fontSize: 13, fontWeight: 600, textAlign: 'left',
                      }}>
                        <span style={{ fontSize: 8, opacity: 0.7 }}>{isSubOpen ? '▼' : '▶'}</span>
                        <span>{child.name}</span>
                      </button>
                      {isSubOpen && child.item.map(req => {
                        const isActive = selected?.name === req.name;
                        return (
                          <button key={req.name} onClick={() => onSelect(req)}
                            style={{ ...reqBtnStyle(isActive), padding: '8px 14px 8px 34px' }}>
                            <MethodBadge method={req.request?.method} compact />
                            <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {req.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  );
                }

                // 직접 요청
                const isActive = selected?.name === child.name;
                return (
                  <button key={child.name} onClick={() => onSelect(child)}
                    style={{ ...reqBtnStyle(isActive), padding: '8px 14px 8px 24px' }}>
                    <MethodBadge method={child.request?.method} compact />
                    <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {child.name}
                    </span>
                  </button>
                );
              })}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

// ─── Request detail ───────────────────────────────────────────────────
function EndpointRow({ req, onSelect }) {
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

function RequestDetail({ item, onSelect }) {
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

  const isMobile = useIsMobile();
  const req = item.request;
  const method = req?.method;
  const url = toDisplayUrl(req?.url);
  const color = METHOD_COLORS[method?.toUpperCase()] || '#0066cc';

  return (
    <div>
      {/* ── 상단 헤더 (전체 너비) ─────────────────────────── */}
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

      {/* ── 본문 (데스크톱: 2컬럼 / 모바일: 1컬럼) ──────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 3fr) minmax(0, 2fr)',
        minHeight: 0,
      }}>

        {/* 왼쪽: 설명 + 파라미터 */}
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

        {/* 오른쪽: Request Body + Code Examples + Response Examples */}
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

// ─── Welcome screen ───────────────────────────────────────────────────
function WelcomeScreen() {
  const info = collectionData.info;

  return (
    <div style={{ padding: '32px 40px', maxWidth: 860 }}>
      <h1 style={{ fontSize: 28, margin: '0 0 6px', color: 'var(--ifm-color-content)' }}>{info?.name}</h1>
      <p style={{ color: '#999', fontSize: 12, margin: '0 0 28px' }}>
        {TOTAL_ENDPOINTS} endpoints — Select an endpoint from the sidebar.
      </p>
      <Markdown text={info?.description} />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────
export default function ApiV2Page() {
  const history = useHistory();
  const location = useLocation();
  const [selected, setSelected] = useState(null);
  const isMobile = useIsMobile();
  const mainRef = useRef(null);

  // URL → 상태 동기화 (초기 로드 + 브라우저 뒤로/앞으로)
  useEffect(() => {
    const slug = new URLSearchParams(location.search).get('api');
    setSelected(slug ? findRequestBySlug(slug) : null);
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, [location.search]);

  const handleSelect = useCallback((item) => {
    if (!item) { history.push({ search: '' }); return; }
    const slug = item._folder ? toSlug(item._folder.name) : toSlug(item.name);
    history.push({ search: `?api=${slug}` });
  }, [history]);

  // ← / → 키보드 탐색
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      e.preventDefault();
      const currentIdx = FLAT_ITEMS.findIndex(item =>
        selected?._folder
          ? item._folder?.name === selected._folder.name
          : !item._folder && item.name === selected?.name
      );
      const next = FLAT_ITEMS[currentIdx + (e.key === 'ArrowRight' ? 1 : -1)];
      if (next) handleSelect(next);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected, handleSelect]);

  const pageTitle = selected
    ? (selected._folder?.name || selected.name) + ' — BioStar X API'
    : 'BioStar X API';

  return (
    <Layout title={pageTitle} description="BioStar X REST API Reference">
      <Head>
        <title>BioStar X API Reference | Suprema Docs</title>
        <meta name="description" content="BioStar X REST API documentation. Manage users, access control, doors, devices, and credentials with JSON-based endpoints." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://docs.supremainc.com/api/bsxapi" />
        
        {/* Open Graph */}
        <meta property="og:title" content="BioStar X API Reference | Suprema Docs" />
        <meta property="og:description" content="Complete REST API documentation for BioStar X access control system. Manage users, doors, devices, and biometric credentials." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docs.supremainc.com/api/bsxapi" />
        <meta property="og:site_name" content="Suprema Docs" />
        
        {/* Keywords */}
        <meta name="keywords" content="BioStar X API, Suprema API, access control API, biometric API, REST API, user management API, door control API, device management API" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "BioStar X API Reference",
            "description": "Complete REST API documentation for BioStar X access control system",
            "author": {
              "@type": "Organization",
              "name": "Suprema Inc.",
              "url": "https://www.supremainc.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Suprema Inc.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://supremainc.com/en/asset/images/common/sns_img02.jpg"
              }
            },
            "datePublished": "2025-11-11",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://docs.supremainc.com/api/bsxapi"
            }
          })}
        </script>
      </Head>
      <div style={{ display: 'flex', height: 'calc(100vh - var(--ifm-navbar-height, 60px))', overflow: 'hidden' }}>
        {/* 모바일: selected 없을 때만 사이드바 표시 / 데스크톱: 항상 표시 */}
        {(!isMobile || !selected) && (
          <Sidebar selected={selected} onSelect={handleSelect} isMobile={isMobile} />
        )}
        {/* 모바일: selected 있을 때만 콘텐츠 표시 / 데스크톱: 항상 표시 */}
        {(!isMobile || selected) && (
          <main ref={mainRef} className='api--docs' style={{ flex: 1, overflow: 'auto', background: 'var(--ifm-background-color)', minWidth: 0 }}>
            {isMobile && selected && (
              <button onClick={() => handleSelect(null)} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '10px 16px', width: '100%',
                background: 'var(--ifm-color-emphasis-100)',
                borderBottom: '1px solid var(--ifm-color-emphasis-300)',
                border: 'none', cursor: 'pointer',
                fontSize: 14, fontWeight: 600, color: 'var(--ifm-color-content)',
              }}>
                ← Back
              </button>
            )}
            {selected
              ? <RequestDetail key={selected.name || selected._folder?.name} item={selected} onSelect={handleSelect} />
              : <WelcomeScreen />
            }
          </main>
        )}
      </div>
    </Layout>
  );
}
