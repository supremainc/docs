import React from "react";
import clsx from 'clsx';
import styles from "./styles.module.css";
import Head from "@site/src/components/Head";
import {useThemeConfig} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import faqsKR from "@site/i18n/ko/faqs.json";
import faqsEN from "@site/i18n/en/faqs.json";

/**
 * FAQ 컴포넌트
 * @param {Object} props
 * @param {string|string[]} [props.product] - 필터링할 제품명(들)
 */

export function FaqsItems(data) {
  // FAQ 구조화 데이터 생성 (Google FAQPage Schema)
  
  const faqsData = data.data || [];
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  // console.log(faqStructuredData);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {faqsData.map((faq, idx) => (
        <details className={styles.faq} key={idx}>
          <summary>
            <span className={styles.question}>Q.</span>
            <span dangerouslySetInnerHTML={{__html: faq.question}} />
          </summary>
          <div className={styles.faqBody}>
            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </div>
        </details>
      ))}
    </>
  );
}

export default function Faqs() {

  const faqsMap = {
    ko: faqsKR,
    en: faqsEN,
  };
  const { i18n: {currentLocale} } = useDocusaurusContext();
  const location = useLocation();
  
  const cProd = currentLocale === "ko" ? location.pathname.split("/")[3] : location.pathname.split("/")[4];

  // console.log(cProd);
  
  // product가 주어지면 해당 제품만 필터링, 아니면 전체 출력
  const productList = Array.isArray(cProd) ? cProd : cProd ? [cProd] : null;
  const faqs = faqsMap[currentLocale] || faqsEN;
  // 카테고리별로 FAQ를 필터링
  const filteredCategories = faqs
    .map(cat => {
      const contentsArr = Array.isArray(cat.category.contents)
        ? cat.category.contents
        : [cat.category.contents];
      const filteredContents = productList
        ? contentsArr.filter(faq => faq.product.some(p => productList.includes(p)))
        : contentsArr;
      return filteredContents.length > 0
        ? { title: cat.category.title, hid: cat.category.hid, contents: filteredContents }
        : null;
    })
    .filter(Boolean);

  // FAQ 구조화 데이터 생성 (Google FAQPage Schema)
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": filteredCategories.flatMap(cat =>
      cat.contents.map(faq => ({
        "@type": "Question",
        "name": faq.question.replace(/<[^>]+>/g, ""),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.map(a => a.replace(/<[^>]+>/g, "")).join(" ")
        }
      }))
    )
  };
  const {
    navbar: {hideOnScroll},
  } = useThemeConfig();
  // console.log(filteredCategories.length);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {filteredCategories.length === 0 ? (
        <p>There are no FAQs for this product.</p>
      ) : (
        filteredCategories.map((cat, cidx) => (
          <React.Fragment key={cidx}>
            <Head 
              hashid={cat.hid}
              level={3}
              className={styles.faqTitle}
            >
              {cat.title}
            </Head>
            {cat.contents.map((faq, idx) => (
              <details className={styles.faq} key={idx}>
                <summary>
                  <span className={styles.question}>Q.</span>
                  <span dangerouslySetInnerHTML={{__html: faq.question}} />
                </summary>
                <div className={styles.faqBody}>
                  <div>
                    <ul style={{ marginTop: 8 }}>
                      {faq.answer.map((a, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: a }} />
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            ))}
          </React.Fragment>
        ))
      )}
    </>
  );
}
