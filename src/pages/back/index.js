import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';
import { translate } from '@docusaurus/Translate';

export default function Backcover() {
  const { i18n: {currentLocale} } = useDocusaurusContext();
  const lang = currentLocale;
  const address = `${translate({id: "theme.cover.address"})}`
  const copyright = `${translate({id: "theme.cover.copyright"})}`
  const qrtext = `${translate({id: "theme.cover.qrCodetext"})}`
  useEffect(() => {
    // 특정 페이지에서만 @page 스타일을 동적으로 추가
    const style = document.createElement('style');
    style.innerHTML = `
      @page {
          margin: 0;
      }
    `;
    document.head.appendChild(style);

    // 컴포넌트 언마운트 시 스타일 제거
    return () => {
      document.head.removeChild(style);
    };
}, []);
  return (
    <Layout>
      <Head>
        <meta name="robots" content="noindex, nofollow"/>
      </Head>
      <div className={styles.coverpage}>
        <div className={styles.footer}>
          <div className={styles.logo}>
            <img src={useBaseUrl('img/common/logo_back.svg')}/>
          </div>
          <div className={styles.address}>
            <p dangerouslySetInnerHTML={{__html: address}} />
            {(lang === 'en') && 
              <div className={styles.qrcontents}>
                <div className={styles.qrimage}> 
                  <img src={useBaseUrl('img/common/qr.svg')} className={styles.qr} />
                </div>
                <div className={styles.qrtext} dangerouslySetInnerHTML={{__html: qrtext}} />
              </div>
            }
          </div>
        </div>
        <div className={styles.copyright} dangerouslySetInnerHTML={ {__html: copyright}} />
      </div>
    </Layout>
  );
}