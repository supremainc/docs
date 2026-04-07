import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ExternalLinkCard, AiCamera, BiometricReader, RfMobileDevices, IntenlligentController, Peripheral, Apps} from '@site/src/components/ExternalLinkCard';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import SupLogo from '@site/static/img/suprema-logo.svg';
import Cloudicon from '@site/static/img/air-cloud.svg';
import SearchBar from '@theme/SearchBar';

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
      <div className={styles.hero__header}>
        <Heading as='h1' className={styles.hero__title}>
          <SupLogo width={331} height={49} /> <span className={styles.gray}>Docs</span>
        </Heading>
        <h3 className={styles.hero__subtitle}>{siteConfig.tagline}</h3>
        <div className={styles.appcontainer}>
          <SearchBar className={styles.searchTriger} />
        </div>
      </div>
      <div className={clsx('container', styles.containerRef)}>
        <div className={clsx(styles.section__banner, styles.bsx)}>
          
            <div className={styles.banner__biostar}>
              <div>
                <Heading as='h2' className={styles.banner__biostarh2}>
                  {translate({ id: "index.biostarx.subtitle" })}
                </Heading>
                {/* <BioStarLogo width='189' height='52' /> */}
                <p dangerouslySetInnerHTML={{__html: `${translate({ id: "index.biostarx.description" })}`}} />
              </div>
              <Link to='/platform/biostar_x' className={styles.banner}>
                <div className={styles.banner__learnmore}>
                  {translate({ id: "index.heroBanner.shortcut.biostarx" })}
                </div>
              </Link>
            </div>
        </div>
        <div className={clsx(styles.section__banner, styles.bsair)}>
          <div className={styles.banner__biostar}>
            <div>
              <Cloudicon />
              <Heading as='h2' className={styles.banner__biostarh2}>{translate({ id: "index.biostarair.subtitle" })}</Heading>
              <p dangerouslySetInnerHTML={{__html: `${translate({ id: "index.biostarair.description" })}`}} />
            </div>
            <Link to='/platform/biostar_air' className={styles.banner}>
              <div className={styles.banner__learnmore}>
                {translate({ id: "index.heroBanner.shortcut.biostarair" })}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={clsx('container', styles.shortcutbanner)}>
        <div className={styles.compareProduct}>
          <h3>{translate({ id: "index.shortcut.compare.title" })} <Link to='reference/compares'><span>{translate({ id: "index.shortcut.linkText" })}</span></Link></h3>
          <p>{translate({ id: "index.shortcut.compare.description" })}</p>
        </div>
        <div className={styles.howToArticles}>
          <h3>{translate({ id: "index.shortcut.howto.title" })} <Link to='how-to/'><span>{translate({ id: "index.shortcut.linkText" })}</span></Link></h3>
          <p>{translate({ id: "index.shortcut.howto.description" })}</p>
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
  const isDev = process.env.NODE_ENV === 'development';
  
  // 브라우저 언어 탐지 및 자동 리다이렉트
  useEffect(() => {
    // 현재 URL이 루트 경로인지 확인 (언어별 경로가 아닌 경우)
    const currentPath = window.location.pathname;
    const isRootPath = currentPath === '/docs/' || currentPath === '/docs/index.html';
    if (isDev) {
      return; // 개발 환경에서는 리다이렉트 하지 않음
    }
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
        {/* <div className={styles.backBlurSky}></div>
        <div className={styles.backBlurPink}></div> */}
        <HomepageHeader />

        {/* <div className={clsx('container', styles.headsec)}>
          <Heading as='h2'>AI Camera</Heading>
        </div>
        <AiCamera /> */}

        <div className={clsx('container', styles.headsec)}>
          <Heading as='h2'>{translate({message: 'index.productTitle.biometricsDevice'})}</Heading>
        </div>
        <BiometricReader />

        <div className={clsx('container', styles.headsec)}>
          <Heading as='h2'>{translate({message: 'index.productTitle.rfMobileDevices'})}</Heading>
        </div>
        <RfMobileDevices />

        <div className={clsx('container', styles.headsec)}>
          <Heading as='h2'>{translate({message: 'index.productTitle.intelligentController'})}</Heading>
        </div>
        <IntenlligentController />

        <div className={clsx('container', styles.headsec)}>
          <Heading as='h2'>{translate({message: 'index.productTitle.peripheral'})}</Heading>
        </div>
        <Peripheral />
        
        <div className='container'>
          <div className={clsx('container', styles.gridappdeveloper)}>
            <div className={clsx(styles.headsec)}>
              <Heading as='h2'>{translate({message: 'index.productTitle.developers'})}</Heading>
              <ExternalLinkCard />
            </div>
            <div className={clsx(styles.headsec)}>
              <Heading as='h2'>{translate({message: 'index.productTitle.apps'})}</Heading>
              <Apps />
            </div>
          </div>
        </div>
        
      </main>
    </Layout>
  );
}
