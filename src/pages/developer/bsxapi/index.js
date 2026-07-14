import React, { useState, useCallback, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { useHistory, useLocation } from '@docusaurus/router';
import collectionData from '@site/static/specs/bsxapi-postman-collection.json';
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
    ? (selected._folder?.name || selected.name) + ' — BioStar X API'
    : 'BioStar X API';

  return (
    <Layout title={pageTitle} description="BioStar X REST API Reference">
      <Head>
        <title>BioStar X API Reference | Suprema Docs</title>
        <meta name="description" content="BioStar X REST API documentation. Manage users, access control, doors, devices, and credentials with JSON-based endpoints." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://docs.supremainc.com/developer/bsxapi" />

        <meta property="og:title" content="BioStar X API Reference | Suprema Docs" />
        <meta property="og:description" content="Complete REST API documentation for BioStar X access control system. Manage users, doors, devices, and biometric credentials." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docs.supremainc.com/developer/bsxapi" />
        <meta property="og:site_name" content="Suprema Docs" />

        <meta name="keywords" content="BioStar X API, Suprema API, access control API, biometric API, REST API, user management API, door control API, device management API" />

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
              "@id": "https://docs.supremainc.com/developer/bsxapi"
            }
          })}
        </script>
      </Head>
      <div style={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' }}>
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
              ? <RequestDetail key={selected.name || selected._folder?.name} item={selected} onSelect={handleSelect} auth={collectionData.auth} />
              : <WelcomeScreen info={collectionData.info} totalEndpoints={TOTAL_ENDPOINTS} />
            }
          </main>
        )}
      </div>
    </Layout>
  );
}
