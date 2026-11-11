import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useDoc, useBreadcrumbsStructuredData } from '@docusaurus/plugin-content-docs/client';
import {
  buildWebsite,
  buildOrganization,
  getInLanguage,
  websiteId,
} from '@site/src/utils/structuredData';

export default function DocBreadcrumbsStructuredData(props) {
  const { i18n: { currentLocale }, siteConfig } = useDocusaurusContext();
  const { metadata, frontMatter } = useDoc();
  const inLanguage = getInLanguage(currentLocale);
  const siteUrl = siteConfig.url;

  const pageUrl = `${siteUrl}${metadata.permalink}`;
  const breadcrumbId = `${pageUrl}/#breadcrumb`;

  const { '@context': _, ...breadcrumbNode } = useBreadcrumbsStructuredData({ breadcrumbs: props.breadcrumbs });

  const webPage = {
    '@type': 'WebPage',
    '@id': `${pageUrl}/#webpage`,
    url: pageUrl,
    name: metadata.title,
    ...(metadata.description && { description: metadata.description }),
    inLanguage,
    datePublished: frontMatter.date_published || '2026-01-02',
    isPartOf: { '@id': websiteId(siteUrl) },
    breadcrumb: { '@id': breadcrumbId },
    potentialAction: [{ '@type': 'ReadAction', target: [pageUrl] }],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'article p:first-of-type', '[data-speakable]'],
    },
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      webPage,
      { ...breadcrumbNode, '@id': breadcrumbId },
      buildWebsite(siteUrl, siteConfig.tagline, inLanguage),
      buildOrganization(siteUrl),
    ],
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(graph)}
      </script>
    </Head>
  );
}
