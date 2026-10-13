import React, { createContext, useContext, useMemo, useCallback, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import renderRoutes from '@docusaurus/renderRoutes';
import NotFoundContent from '@theme/NotFound/Content';
import { useHistory, useLocation } from '@docusaurus/router';
import Sidebar from './Sidebar';
import { useIsMobile } from './hooks';
import { buildSlugIndex } from './slug';

// api-docs-routes 플러그인이 만든 /developer/{api} 레이아웃 라우트.
// 사이드바를 그리고, 하위 라우트(ApiDocsEntry)에 컬렉션과 slug 색인을 컨텍스트로 넘긴다.

const ApiDocsContext = createContext(null);

export function useApiDocs() {
  return useContext(ApiDocsContext);
}

// 화살표 키 이동 순서. 사이드바에 보이는 순서와 같다.
function flattenItems(collection) {
  const list = [];
  for (const folder of collection.item || []) {
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
}

function slugFromPath(pathname, basePath) {
  const path = pathname.replace(/\/+$/, '');
  if (!path.startsWith(`${basePath}/`)) return null;
  return decodeURIComponent(path.slice(basePath.length + 1));
}

const isSameItem = (a, b) => (a?._folder ? a._folder === b?._folder : !!a && a === b);

export default function ApiDocsLayout({ route, collection, api, basePath }) {
  const history = useHistory();
  const location = useLocation();
  const isMobile = useIsMobile();
  const mainRef = useRef(null);

  const index = useMemo(() => buildSlugIndex(collection), [collection]);
  const flatItems = useMemo(() => flattenItems(collection), [collection]);
  const hrefOf = useCallback(
    (item) => (item ? `${basePath}/${index.slugOf(item)}` : basePath),
    [basePath, index],
  );

  // 경로에서 바로 계산하므로 빌드(SSR) 시점에도 선택된 항목이 정해진다.
  const slug = slugFromPath(location.pathname, basePath);
  const selected = slug ? index.findBySlug(slug) : null;

  // 이전 형식의 주소(?api=slug)를 경로 형식으로 옮긴다.
  useEffect(() => {
    const legacy = new URLSearchParams(location.search).get('api');
    if (!legacy) return;
    const target = index.findBySlug(legacy) ? legacy : index.legacySlugOf(legacy);
    history.replace(target ? `${basePath}/${target}` : basePath);
  }, [location.search, index, basePath, history]);

  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      e.preventDefault();
      const currentIdx = flatItems.findIndex(item => isSameItem(item, selected));
      const next = flatItems[currentIdx + (e.key === 'ArrowRight' ? 1 : -1)];
      if (next) history.push(hrefOf(next));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected, flatItems, hrefOf, history]);

  const contextValue = useMemo(
    () => ({ api, collection, index, hrefOf }),
    [api, collection, index, hrefOf],
  );

  return (
    <ApiDocsContext.Provider value={contextValue}>
      <Layout>
        <Head>
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta property="og:site_name" content="Suprema Docs" />
          <meta name="keywords" content={api.keywords} />
        </Head>
        <div style={{ display: 'flex', height: 'calc(100vh - var(--ifm-navbar-height, 60px))', overflow: 'hidden' }}>
          {(!isMobile || !selected) && (
            <Sidebar
              allFolders={collection.item || []}
              title={collection.info?.name}
              selected={selected}
              hrefOf={hrefOf}
              isMobile={isMobile}
            />
          )}
          {(!isMobile || selected) && (
            <main ref={mainRef} className='api--docs' style={{ flex: 1, overflow: 'auto', background: 'var(--ifm-background-color)', minWidth: 0 }}>
              {isMobile && selected && (
                <Link to={basePath} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '10px 16px', width: '100%',
                  background: 'var(--ifm-color-emphasis-100)',
                  borderBottom: '1px solid var(--ifm-color-emphasis-300)',
                  textDecoration: 'none',
                  fontSize: 14, fontWeight: 600, color: 'var(--ifm-color-content)',
                }}>
                  ← Back
                </Link>
              )}
              {slug && !selected ? <NotFoundContent /> : renderRoutes(route.routes)}
            </main>
          )}
        </div>
      </Layout>
    </ApiDocsContext.Provider>
  );
}
