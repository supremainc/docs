import React from 'react';
import Head from '@docusaurus/Head';
import RequestDetail from './RequestDetail';
import WelcomeScreen from './WelcomeScreen';
import { useApiDocs } from './ApiDocsLayout';

// api-docs-routes 플러그인이 만든 하위 라우트. slug가 없으면 API 소개 화면을, 있으면 해당 항목을 그린다.
// 항목마다 제목, 설명, canonical, 구조화 데이터를 따로 넣어 검색 엔진과 AI가 개별 문서로 인식하게 한다.

// 메타 설명용으로 Markdown 설명의 첫 문단을 평문으로 만든다.
function summarize(text, maxLength = 160) {
  if (typeof text !== 'string') text = text?.content;
  if (!text) return '';
  const paragraph = text
    .replace(/\r\n/g, '\n')
    .split(/\n\s*\n/)
    .map(p => p
      .replace(/<[^>]+>/g, '')
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/^#+\s*/gm, '')
      .replace(/[*_`>|]/g, '')
      .replace(/\s+/g, ' ')
      .trim())
    .find(Boolean) || '';
  return paragraph.length > maxLength ? `${paragraph.slice(0, maxLength - 1).trimEnd()}…` : paragraph;
}

function countEndpoints(collection) {
  return (collection.item || []).reduce((acc, f) => acc + (f.item?.length || 0), 0);
}

const ORGANIZATION = { '@type': 'Organization', name: 'Suprema Inc.', url: 'https://www.supremainc.com' };
const PUBLISHER = {
  '@type': 'Organization',
  name: 'Suprema Inc.',
  logo: { '@type': 'ImageObject', url: 'https://supremainc.com/en/asset/images/common/sns_img02.jpg' },
};

export default function ApiDocsEntry({ slug }) {
  const { api, collection, index, hrefOf } = useApiDocs();
  const item = slug ? index.findBySlug(slug) : null;
  if (slug && !item) return null;

  const itemName = item ? (item._folder?.name || item.name) : null;
  const title = itemName ? `${itemName} — ${api.name}` : api.title;
  const description = (item && summarize(item._folder ? item._folder.description : item.request?.description))
    || (itemName ? `${itemName} — ${api.description}` : api.description);
  const ogDescription = item ? description : api.ogDescription;
  const canonicalUrl = slug ? `${api.canonicalUrl}/${slug}` : api.canonicalUrl;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description: item ? description : `Complete REST API documentation for ${api.name}`,
    author: ORGANIZATION,
    publisher: PUBLISHER,
    datePublished: api.datePublished,
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    ...(item ? { isPartOf: { '@type': 'WebPage', name: api.title, url: api.canonicalUrl } } : {}),
  };

  return (
    <>
      <Head>
        <title>{`${title} | Suprema Docs`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${title} | Suprema Docs`} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:type" content={item ? 'article' : 'website'} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      {item
        ? <RequestDetail item={item} hrefOf={hrefOf} auth={collection.auth} serverUrl={api.serverUrl} />
        : <WelcomeScreen info={collection.info} totalEndpoints={countEndpoints(collection)} />}
    </>
  );
}
