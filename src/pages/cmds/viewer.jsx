import React, { useEffect, useMemo, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './viewer.css';

// static/data/remark-cmd 하위 카테고리 경로 (BioStar 2는 루트 경로이므로 path: '')
// product는 <Cmd sid='...' product='...' /> 복사 스니펫에 쓰이는 값 (BioStar X는 product 속성 생략)
const CATEGORIES = [
  { label: 'BioStar X', path: 'x', product: null },
  { label: 'BioStar 2', path: '', product: '2' },
  { label: 'BioStar Air Admin', path: 'air', product: 'air' },
  { label: 'BioStar Air Partner', path: 'partner', product: 'pn' },
  { label: 'ViOnyx', path: 'cam', product: 'cam' },
  { label: 'Device', path: 'device', product: 'dev' },
  { label: 'CLUe', path: 'clue', product: 'clue' },
];

const LOCALES = ['ko', 'en', 'es', 'ja'];

function stripHtml(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

function buildCmdSnippet(key, product) {
  return product ? `<Cmd sid='${key}' product='${product}' />` : `<Cmd sid='${key}' />`;
}

// device 카테고리 등에서 값이 { common, <기기명>: ... } 형태의 기기별 분기 객체인 경우
// 한 셀에 "기기명: 값" 형태로 모두 나열해서 보여준다.
function formatCellValue(value) {
  if (typeof value === 'string' && value.length > 0) {
    return { html: value, copyText: stripHtml(value) };
  }
  if (value && typeof value === 'object') {
    const entries = Object.entries(value);
    if (entries.length === 0) return null;
    return {
      html: entries.map(([variant, text]) => `<strong>${variant}</strong>: ${text}`).join('<br/>'),
      copyText: entries.map(([variant, text]) => `${variant}: ${stripHtml(String(text))}`).join('\n'),
    };
  }
  return null;
}

function valueSearchText(value) {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object') return Object.values(value).join(' ');
  return '';
}

async function fetchLocale(baseUrl, categoryPath, locale) {
  const url = categoryPath ? `${baseUrl}/${categoryPath}/${locale}.json` : `${baseUrl}/${locale}.json`;
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}

function CmdViewer() {
  const dataBaseUrl = useBaseUrl('/data/remark-cmd');
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [locales, setLocales] = useState([]);
  const [missingLocales, setMissingLocales] = useState([]);
  const [query, setQuery] = useState('');
  const [exactMatch, setExactMatch] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    const category = CATEGORIES[categoryIndex];
    Promise.all(LOCALES.map((locale) => fetchLocale(dataBaseUrl, category.path, locale))).then(
      (results) => {
        if (cancelled) return;

        const dataByLocale = {};
        LOCALES.forEach((locale, i) => {
          if (results[i]) dataByLocale[locale] = results[i];
        });

        const loadedLocales = LOCALES.filter((l) => dataByLocale[l]);
        const notLoaded = LOCALES.filter((l) => !dataByLocale[l]);

        const keySet = new Set();
        loadedLocales.forEach((locale) => {
          Object.keys(dataByLocale[locale]).forEach((k) => keySet.add(k));
        });

        const sortedKeys = Array.from(keySet).sort((a, b) => a.localeCompare(b));
        const nextRows = sortedKeys.map((key) => {
          const values = {};
          loadedLocales.forEach((locale) => {
            values[locale] = dataByLocale[locale][key];
          });
          return { key, values };
        });

        setLocales(loadedLocales);
        setMissingLocales(notLoaded);
        setRows(nextRows);
        setLoading(false);
      },
    );

    return () => {
      cancelled = true;
    };
  }, [dataBaseUrl, categoryIndex]);

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) => {
      const keyLower = row.key.toLowerCase();
      if (exactMatch ? keyLower === q : keyLower.includes(q)) return true;
      return locales.some((locale) => {
        const text = valueSearchText(row.values[locale]).toLowerCase();
        if (!text) return false;
        return exactMatch ? text === q : text.includes(q);
      });
    });
  }, [rows, locales, query, exactMatch]);

  function showToast(message) {
    setToast(message);
    clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(null), 1600);
  }

  async function copyToClipboard(text, message) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      showToast(message);
    } catch (e) {
      showToast('복사에 실패했습니다.');
    }
  }

  const statusText = loading
    ? '불러오는 중...'
    : query
      ? `필터링됨: ${filteredRows.length} / 전체 ${rows.length}`
      : `총 ${rows.length}개 키 (${locales.join(', ')})${
          missingLocales.length ? ` · 누락: ${missingLocales.join(', ')}` : ''
        }`;

  return (
    <Layout>
      <Head>
        <title>Remark Cmd 키 뷰어 | Suprema Docs</title>
        <meta
          name="description"
          content="Cmd remark 플러그인에서 사용되는 remark-cmd JSON 데이터를 카테고리/언어별로 조회하고, 키를 클립보드에 복사합니다."
        />
      </Head>
      <div className="cmdv-page">
        <header className="cmdv-header">
          <h1>Remark Cmd 키 뷰어</h1>
          <p>카테고리별 remark-cmd JSON을 언어별로 불러와 키/번역을 검색하고, 클릭하여 클립보드에 복사할 수 있습니다. `${statusText}`</p>
        </header>

        <div className="cmdv-toolbar">
          <div className="cmdv-field">
            <label htmlFor="cmdv-category">카테고리</label>
            <select
              id="cmdv-category"
              value={categoryIndex}
              onChange={(e) => setCategoryIndex(Number(e.target.value))}
            >
              {CATEGORIES.map((cat, idx) => (
                <option key={cat.label} value={idx}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
          <div className="cmdv-field">
            <label htmlFor="cmdv-search">키 / 값 검색</label>
            <div className="cmdv-search-row">
              <input
                id="cmdv-search"
                type="search"
                placeholder="예: ACB_ERROR_CODE 또는 로그인"
                autoComplete="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <label className="cmdv-checkbox" htmlFor="cmdv-exact-match">
                <input
                  id="cmdv-exact-match"
                  type="checkbox"
                  checked={exactMatch}
                  onChange={(e) => setExactMatch(e.target.checked)}
                />
                정확히 일치
              </label>
            </div>
          </div>
        </div>

        <main className="cmdv-main">
          <div className="cmdv-table-wrap">
            {!loading && filteredRows.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>Key</th>
                    {locales.map((locale) => (
                      <th key={locale}>{locale.toUpperCase()}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.map((row) => (
                    <tr key={row.key}>
                      <td
                        className="cmdv-key-cell"
                        title="클릭하여 <Cmd /> 스니펫 복사"
                        onClick={() =>
                          copyToClipboard(
                            buildCmdSnippet(row.key, CATEGORIES[categoryIndex].product),
                            `키 복사됨: ${row.key}`,
                          )
                        }
                      >
                        {row.key}
                      </td>
                      {locales.map((locale) => {
                        const formatted = formatCellValue(row.values[locale]);
                        if (formatted) {
                          return (
                            <td
                              key={locale}
                              className="cmdv-value-cell"
                              title="클릭하여 값 복사"
                              onClick={() =>
                                copyToClipboard(formatted.copyText, `값 복사됨 (${locale.toUpperCase()})`)
                              }
                              dangerouslySetInnerHTML={{ __html: formatted.html }}
                            />
                          );
                        }
                        return (
                          <td key={locale} className="cmdv-value-empty">
                            —
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {loading && <div className="cmdv-loading-state">불러오는 중...</div>}
            {!loading && filteredRows.length === 0 && (
              <div className="cmdv-empty-state">일치하는 키가 없습니다.</div>
            )}
          </div>
        </main>

        <div className={`cmdv-toast${toast ? ' cmdv-toast--show' : ''}`}>{toast}</div>
      </div>
    </Layout>
  );
}

export default CmdViewer;
