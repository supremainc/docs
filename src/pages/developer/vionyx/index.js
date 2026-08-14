import React, { useState, useCallback, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { useHistory, useLocation } from '@docusaurus/router';
import collectionData from '@site/static/specs/vionyx-api-postman-collection.json';
import { Sidebar, RequestDetail, WelcomeScreen, toSlug, useIsMobile } from '@site/src/components/ApiDocs';

// ─── Data setup ───────────────────────────────────────────────────────
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

// ─── Page ─────────────────────────────────────────────────────────────
export default function ApiV2Page() {
  const history = useHistory();
  const location = useLocation();
  const [selected, setSelected] = useState(null);
  const isMobile = useIsMobile();
  const mainRef = useRef(null);

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
    ? (selected._folder?.name || selected.name) + ' — ViOnyx AI Camera API'
    : 'ViOnyx AI Camera API';

  return (
    <Layout title={pageTitle} description="ViOnyx AI Camera REST API Reference">
      <Head>
        <title>ViOnyx AI Camera API Reference | Suprema Docs</title>
        <meta name="description" content="ViOnyx AI Camera REST API documentation. Manage live video, AI events, face authentication, and device configuration with JSON-based endpoints." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://docs.supremainc.com/developer/vionyx" />

        <meta property="og:title" content="ViOnyx AI Camera API Reference | Suprema Docs" />
        <meta property="og:description" content="Complete REST API documentation for the ViOnyx AI camera. Manage live video, AI events, face authentication, and device configuration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docs.supremainc.com/developer/vionyx" />
        <meta property="og:site_name" content="Suprema Docs" />

        <meta name="keywords" content="ViOnyx API, Suprema API, AI camera API, REST API, face authentication API, AI event API, device management API" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "ViOnyx AI Camera API Reference",
            "description": "Complete REST API documentation for the ViOnyx AI camera",
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
            "datePublished": "2026-08-10",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://docs.supremainc.com/developer/vionyx"
            }
          })}
        </script>
      </Head>
      <div style={{ display: 'flex', height: 'calc(100vh - var(--ifm-navbar-height, 60px))', overflow: 'hidden' }}>
        {(!isMobile || !selected) && (
          <Sidebar
            allFolders={collectionData.item || []}
            title={collectionData.info?.name}
            selected={selected}
            onSelect={handleSelect}
            isMobile={isMobile}
          />
        )}
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
              ? <RequestDetail key={selected.name || selected._folder?.name} item={selected} onSelect={handleSelect} auth={collectionData.auth} serverUrl="https://{{your-vionyx-ip}}/v1/api" />
              : <WelcomeScreen info={collectionData.info} totalEndpoints={TOTAL_ENDPOINTS} />
            }
          </main>
        )}
      </div>
    </Layout>
  );
}
