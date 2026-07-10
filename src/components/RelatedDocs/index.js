import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {useSearchResultUrlProcessor} from '@docusaurus/theme-search-algolia/client';
import './styles.css';

const MAX_RELATED = 5;

// 인덱스의 objectID는 "{n}-{url}" 형태이며 n(청크 번호)은 페이지마다 다르다.
// 페이지의 대표 레코드(type: "lvl1")는 항상 낮은 번호(0~4)에 있으므로 후보를 한 번에 조회해 찾는다.
async function resolvePageObjectId(appId, apiKey, indexName, url) {
  const candidates = [0, 1, 2, 3, 4].map((n) => `${n}-${url}`);
  const res = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/*/objects`, {
    method: 'POST',
    headers: {
      'X-Algolia-API-Key': apiKey,
      'X-Algolia-Application-Id': appId,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      requests: candidates.map((objectID) => ({indexName, objectID})),
    }),
  });
  if (!res.ok) return null;
  const {results} = await res.json();
  return results.find((r) => r?.type === 'lvl1')?.objectID ?? null;
}

async function fetchRelatedHits(appId, apiKey, indexName, objectID, locale) {
  const res = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/*/recommendations`, {
    method: 'POST',
    headers: {
      'X-Algolia-API-Key': apiKey,
      'X-Algolia-Application-Id': appId,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      requests: [
        {
          indexName,
          objectID,
          model: 'related-products',
          threshold: 0,
          // 같은 문서의 청크가 여러 개 섞여 반환될 수 있어 넉넉히 받아 중복 제거 후 상위 N개만 사용
          maxRecommendations: MAX_RELATED * 3,
          queryParameters: {filters: `language:${locale}`},
        },
      ],
    }),
  });
  if (!res.ok) return [];
  const {results} = await res.json();
  return results?.[0]?.hits ?? [];
}

function dedupeByUrl(hits) {
  const seen = new Set();
  const unique = [];
  for (const hit of hits) {
    if (seen.has(hit.url_without_anchor)) continue;
    seen.add(hit.url_without_anchor);
    unique.push(hit);
    if (unique.length >= MAX_RELATED) break;
  }
  return unique;
}

// 추천 결과는 본문 청크(type: "content")일 수 있어 hierarchy.lvl1이 비어 있는 경우가 있다.
// 이때는 사이드바 경로(sidelvl2~5)의 마지막 항목이 실제 페이지 제목이다.
function getDisplayTitle(hit) {
  return (
    hit.hierarchy?.lvl1 ||
    [hit.sidelvl2, hit.sidelvl3, hit.sidelvl4, hit.sidelvl5].filter(Boolean).pop() ||
    hit.hierarchy?.lvl0 ||
    hit.url
  );
}

export default function RelatedDocs() {
  const {siteConfig, i18n: {currentLocale}} = useDocusaurusContext();
  const {metadata} = useDoc();
  const {appId, apiKey, indexName} = siteConfig.themeConfig.algolia || {};
  const processSearchResultUrl = useSearchResultUrlProcessor();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!appId || !apiKey || !indexName) return;
    let cancelled = false;
    const currentUrl = `${siteConfig.url}${metadata.permalink}`;

    (async () => {
      try {
        const sourceObjectId = await resolvePageObjectId(appId, apiKey, indexName, currentUrl);
        if (!sourceObjectId || cancelled) return;

        const hits = await fetchRelatedHits(appId, apiKey, indexName, sourceObjectId, currentLocale);
        if (cancelled) return;

        setItems(dedupeByUrl(hits));
      } catch (e) {
        console.error('Failed to load related docs:', e);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [appId, apiKey, indexName, currentLocale, metadata.permalink, siteConfig.url]);

  if (items.length === 0) return null;

  return (
    <div className="related-docs">
      <h3 className="related-docs-title">
        <Translate id="theme.RelatedDocs.title">관련 문서</Translate>
      </h3>
      <ul className="related-docs-list">
        {items.map((hit) => (
          <li key={hit.objectID} className="related-docs-item">
            <Link to={processSearchResultUrl(hit.url)} className="related-docs-link">
              <span className="related-docs-link-title">{getDisplayTitle(hit)}</span>
              {hit.hierarchy?.lvl0 && (
                <span className="related-docs-link-category">{hit.hierarchy.lvl0}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
