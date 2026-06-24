import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useDoc, useBreadcrumbsStructuredData } from '@docusaurus/plugin-content-docs/client';

const ORG_URL = 'https://supremainc.com';

const LOCALE_MAP = {
  ko: 'ko-KR',
  en: 'en-US',
  ja: 'ja-JP',
  es: 'es-ES',
};

function buildWebsite(siteUrl, description, inLanguage) {
  return {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Suprema Docs',
    url: siteUrl,
    description,
    publisher: { '@id': `${siteUrl}/#organization` },
    potentialAction: [{
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/search?q={searchTerms}` },
      'query-input': 'required name=searchTerms',
    }],
    inLanguage,
  };
}

function buildOrganization(siteUrl) {
  return {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Suprema',
    url: ORG_URL,
    sameAs: [
      'https://blog.naver.com/supremakr',
      'https://www.facebook.com/supremaglobal',
      'https://www.youtube.com/user/supremainc',
      'https://www.instagram.com/official.suprema',
      'https://pf.kakao.com/_xnkPxes',
      'https://www.linkedin.com/company/suprema-inc-/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      url: 'https://support.supremainc.com',
      contactType: 'customer support',
    },
    logo: {
      '@type': 'ImageObject',
      '@id': `${ORG_URL}/#logo`,
      url: 'https://supremadocs.blob.core.windows.net/img/sns_img02.jpg',
      contentUrl: 'https://supremadocs.blob.core.windows.net/img/sns_img02.jpg',
      width: 1440,
      height: 900,
      caption: 'Suprema - Security & Biometrics',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KR',
      postalCode: '13554',
      streetAddress: 'L17F Parkview Tower, 248, Jeongjail-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea',
    },
  };
}

export default function DocBreadcrumbsStructuredData(props) {
  const { i18n: { currentLocale }, siteConfig } = useDocusaurusContext();
  const { metadata, frontMatter } = useDoc();
  const inLanguage = LOCALE_MAP[currentLocale] ?? currentLocale;
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
    isPartOf: { '@id': `${siteUrl}/#website` },
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
