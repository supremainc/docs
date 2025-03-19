import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';

export default function Cover() {
    const {search} = useLocation();
    const params = Object.fromEntries(new URLSearchParams(search));
    const {
        title = "Suprema",
        sub: subtitle = "...",
        ver = "ver",
        lang = "Language",
        num = "Number",
        next = "/"
    } = params;

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
                <div className={styles.title}>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <div className={styles.ver}>{ver}</div>
                    <div className={styles.lang}>{lang}</div>
                    <div className={styles.number}>{num}</div>
                </div>
                <div className={styles.footer}>
                    <img src={useBaseUrl('img/suprema-logo-bottom.svg')} className={styles.logo} alt="Suprema Logo" />
                </div>
                <a className={clsx(styles.next, "pagination-nav__link pagination-nav__link--next")} href={next}>
                    <div className="pagination-nav__sublabel">다음</div>
                </a>
                <div className="page-break"></div>
            </div>
        </Layout>
    );
}