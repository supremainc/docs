import React from 'react';
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