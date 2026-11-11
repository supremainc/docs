// 사이트 전역 JSON-LD 엔티티(WebSite, Organization) 정의.
// 홈페이지와 문서 페이지가 같은 정의를 공유하도록 이 모듈에서만 관리합니다.

export const ORG_URL = 'https://supremainc.com';

export const LOCALE_MAP = {
  ko: 'ko-KR',
  en: 'en-US',
  ja: 'ja-JP',
  es: 'es-419',
};

export function getInLanguage(locale) {
  return LOCALE_MAP[locale] ?? locale;
}

export function websiteId(siteUrl) {
  return `${siteUrl}/#website`;
}

export function organizationId(siteUrl) {
  return `${siteUrl}/#organization`;
}

export function buildWebsite(siteUrl, description, inLanguage) {
  return {
    '@type': 'WebSite',
    '@id': websiteId(siteUrl),
    name: 'Suprema Docs',
    url: siteUrl,
    description,
    publisher: { '@id': organizationId(siteUrl) },
    potentialAction: [{
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/search?q={searchTerms}` },
      'query-input': 'required name=searchTerms',
    }],
    inLanguage,
  };
}

export function buildOrganization(siteUrl) {
  return {
    '@type': 'Organization',
    '@id': organizationId(siteUrl),
    name: 'Suprema Inc.',
    alternateName: 'Suprema',
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
