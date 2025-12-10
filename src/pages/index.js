import React, { useEffect } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ExternalLinkCard, BiometricReader, RfMobileDevices, IntenlligentController, Peripheral, Apps} from '@site/src/components/ExternalLinkCard';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import {Autocomplete, ProductItem} from '@site/src/components/Autocomplete';
import '@algolia/autocomplete-theme-classic';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import BioStarLogo from '@site/static/img/logo-biostar-x.svg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const appId = siteConfig.themeConfig.algolia.appId;
  const apiKey = siteConfig.themeConfig.algolia.apiKey;
  const indexName = siteConfig.themeConfig.algolia.indexName;
  const searchClient = algoliasearch(appId, apiKey);
  const { i18n: {currentLocale} } = useDocusaurusContext();
  const lang = currentLocale;
  const bsxDesc = translate({
    id: 'index.biostarx.description',
  });
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx('container', styles.containerRef)}>
        <div className={styles.section}>
          <Heading as='h1' className={styles.hero__title}>
            {siteConfig.title}
          </Heading>
          <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
          <div className={styles.appcontainer}>
            <Autocomplete
              openOnFocus={false}
              getSources={({ query }) => [
                {
                  sourceId: 'products',
                  getItems({ query }) {
                    return getAlgoliaResults({
                      searchClient,
                      queries: [
                        {
                          indexName: indexName,
                          query,
                          params: {
                            hitsPerPage: 10,
                            attributesToSnippet: ['content:60', 'hierarchy.lvl0', 'hierarchy.lvl1', 'hierarchy.lvl2', 'hierarchy.lvl3', 'hierarchy.lvl4', 'sidelvl2', 'sidelvl3', 'sidelvl4'],
                            snippetEllipsisText: '…',
                            // filters: [`lang=${lang}`],
                            facetFilters: [`language: ${lang}`],
                            // highlightPreTag: `<mark>`,
                            // highlightPostTag: `</mark>`,
                          }
                        },
                      ],
                    });
                  },
                  templates: {
                    item({ item, components }) {
                      return <ProductItem hit={item} components={components}/>;
                    },
                  },
                },
              ]}
              onSubmit={(event) => {
                  // Code to run when the form submits
                  const Searchparam = event.state.query;
                  if (Searchparam) {
                      const searchUrl = `search?q=${encodeURIComponent(Searchparam)}`;
                      window.location.href = searchUrl;
                  }
              }}
              onStateChange={(state) => {
                  // 검색 결과 목록에서 Enter를 입력하면 해당 item으로 이동하는 코드
                  const curid = state.state.activeItemId !== null ? state.state.activeItemId : false;
                  if (curid !== false) {
                      const activeUrl = state.state.collections[0].items[curid].url;
                      const curOrigin = window.location.origin;
                      const goUrl = activeUrl.replace("https://docs.supremainc.com", curOrigin);
                      window.onkeydown = (e) => {
                          if (e.keyCode === 13) {
                              window.location.href = activeUrl;
                          }
                      }
                  }
              }}
              // detachedMediaQuery="(max-width: 1280px)"
            />
          </div>
        </div>
        <div className={styles.section__banner}>
          <Link to='/platform/biostar_x' className={styles.banner}>
            <div className={styles.banner__biostar}>
              <div>
                <BioStarLogo width='284' height='78' />
                <Heading as='h2' className={styles.banner__biostarh2}>New BioStar</Heading>
                <p dangerouslySetInnerHTML={{__html: bsxDesc}} />
              </div>
              <div className={styles.banner__biostar__img}>
                {/* <img src={require('@site/static/img/banner/biostarx-banner.png').default} width='284px' height='217px'/> */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Integration() {
  return (
    <div className={clsx('container', styles.grid, styles.integration)}>
      <div className={clsx(styles.paxton, styles.integration__item)}>
        <Link to='integration/paxton_2.0/introduction'><Paxton /></Link>
      </div>
      <div className={styles.integration__item}>
        <Link to='integration/dom/introduction'><Dom /></Link>
      </div>
      {/* <div>
        <Link to='integration/paxton_2.0/introduction'><Paxton /></Link>
      </div> */}
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  // 브라우저 언어 탐지 및 자동 리다이렉트
  useEffect(() => {
    // 현재 URL이 루트 경로인지 확인 (언어별 경로가 아닌 경우)
    const currentPath = window.location.pathname;
    const isRootPath = currentPath === '/docs/' || currentPath === '/docs/index.html';

    if (isRootPath) {
      // 사용자가 이미 언어를 선택했는지 확인
      const hasUserSelectedLanguage = localStorage.getItem('userHasSelectedLanguage') === 'true';
      const savedLanguage = localStorage.getItem('preferredLanguage');
      
      // 사용자가 이미 언어를 선택한 적이 있다면 저장된 언어로 리다이렉트
      if (hasUserSelectedLanguage && savedLanguage && ['ko', 'en'].includes(savedLanguage)) {
        if (savedLanguage !== 'ko') { // 기본 언어가 아닌 경우만 리다이렉트
          window.location.replace('/docs/en/');
          return;
        }
        return; // 한국어인 경우 그대로 유지
      }
      
      // 첫 방문자인 경우에만 브라우저 언어 탐지
      const detectBrowserLanguage = () => {
        const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
        
        for (const lang of browserLanguages) {
          const langCode = lang.toLowerCase().split('-')[0];
          if (langCode === 'en') {
            return 'en';
          } else if (langCode === 'ko') {
            return 'ko';
          }
        }
        return 'ko'; // 기본값
      };
      
      const detectedLanguage = detectBrowserLanguage();
      
      // 첫 방문 시에만 브라우저 언어에 따라 자동 리다이렉트
      if (detectedLanguage !== 'ko') {
        localStorage.setItem('preferredLanguage', detectedLanguage);
        localStorage.setItem('autoDetected', 'true'); // 자동 탐지되었음을 표시
        window.location.replace('/docs/en/');
      } else {
        // 한국어인 경우 localStorage에 저장
        localStorage.setItem('preferredLanguage', 'ko');
        localStorage.setItem('autoDetected', 'true');
      }
    }
  }, []);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <main className={styles.heroLayout}>
        <HomepageHeader />

        <div className={clsx('container', styles.headsec)}>
          <Heading as='h2'>Biometric Devices</Heading>
        </div>
        <BiometricReader />

        <div className={clsx('container', styles.headsec)}>
          <Heading as='h2'>RF/Mobile Devices</Heading>
        </div>
        <RfMobileDevices />

        <div className={clsx('container', styles.headsec)}>
          <Heading as='h2'>Intelligent Controller</Heading>
        </div>
        <IntenlligentController />

        <div className={clsx('container', styles.headsec)}>
          <Heading as='h2'>Peripherals</Heading>
        </div>
        <Peripheral />

        <div className={clsx('container', styles.headsec)}>
          <Heading as='h2'>APPS</Heading>
        </div>
        <Apps />

        <div className={clsx('container', styles.headsec)}>
          <Heading as='h2'>Developers</Heading>
        </div>
        <ExternalLinkCard />
      </main>
    </Layout>
  );
}
