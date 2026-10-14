import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useHistory, useLocation } from '@docusaurus/router';
import specs from './_specs.json';
import styles from './styles.module.css';

// 스펙 데이터(_specs.json)는 utils/fetchProductSpecs.mjs로 생성합니다. 직접 수정하지 마세요.

const Locale = {
  ko: {
    pageTitle: '제품 사양',
    subtitle: '슈프리마 장치의 모델별 사양을 확인하세요.',
    product: '제품',
    attribute: '항목',
    updatedAt: '데이터 기준일',
  },
  en: {
    pageTitle: 'Product Specifications',
    subtitle: 'Check the specifications of each Suprema device model.',
    product: 'Product',
    attribute: 'Item',
    updatedAt: 'Last updated',
  },
  ja: {
    pageTitle: '製品仕様',
    subtitle: 'Suprema デバイスのモデル別仕様を確認できます。',
    product: '製品',
    attribute: '項目',
    updatedAt: 'データ基準日',
  },
  es: {
    pageTitle: 'Especificaciones del producto',
    subtitle: 'Consulte las especificaciones de cada modelo de dispositivo Suprema.',
    product: 'Producto',
    attribute: 'Elemento',
    updatedAt: 'Última actualización',
  },
};

const EMPTY_VALUE = '-';

// 모든 모델의 값이 같으면 한 셀로 합쳐 표시하고, 다르면 모델별로 나눠 표시합니다.
function ValueCells({ attribute, models }) {
  const values = models.map((model) => attribute.values[model] ?? EMPTY_VALUE);
  if (models.length > 1 && values.every((value) => value === values[0])) {
    return <td colSpan={models.length} className={styles.value}>{values[0]}</td>;
  }
  return values.map((value, index) => (
    <td key={models[index]} className={styles.value}>{value}</td>
  ));
}

// 그룹이 있는 속성은 그룹 셀을 rowSpan으로 묶고, 그룹이 없는(null) 속성은 항목 셀을 두 칸으로 표시합니다.
function SectionTable({ section, models, t }) {
  return (
    <div className={styles.tableWrapper}>
      {/* table-layout: fixed로 섹션마다 같은 열 너비를 유지하고, 모델 열은 남은 너비를 균등하게 나눕니다.
          모델이 많을 때 열이 너무 좁아지지 않도록 모델 수에 비례해 최소 너비를 지정합니다. */}
      <table className={styles.specTable} style={{ minWidth: `calc(20rem + ${models.length} * 9rem)` }}>
        <colgroup>
          <col className={styles.colGroup} />
          <col className={styles.colName} />
          {models.map((model) => (
            <col key={model} />
          ))}
        </colgroup>
        <thead>
          <tr>
            <th colSpan={2}>{t.attribute}</th>
            {models.map((model) => (
              <th key={model} scope="col" className={styles.modelHeader}>{model}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {section.groups.map((group, groupIndex) =>
            group.attributes.map((attr, attrIndex) => (
              <tr key={`${groupIndex}-${attr.code}`}>
                {group.name === null ? (
                  <th scope="row" colSpan={2}>{attr.name}</th>
                ) : (
                  <>
                    {attrIndex === 0 && (
                      <th scope="rowgroup" rowSpan={group.attributes.length} className={styles.groupCell}>
                        {group.name}
                      </th>
                    )}
                    <th scope="row">{attr.name}</th>
                  </>
                )}
                <ValueCells attribute={attr} models={models} />
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function ProductsSpecs() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const t = Locale[currentLocale] || Locale.en;
  const history = useHistory();
  const location = useLocation();

  const [productName, setProductName] = useState(specs.products[0].name);
  const product = specs.products.find((p) => p.name === productName) || specs.products[0];

  // URL 쿼리(?product=BioStation 3)로 특정 제품을 바로 열 수 있게 합니다.
  // 정적 HTML과 하이드레이션 결과가 달라지지 않도록 마운트 후에 반영합니다.
  useEffect(() => {
    const query = new URLSearchParams(location.search).get('product');
    if (query && specs.products.some((p) => p.name === query)) {
      setProductName(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectProduct = (name) => {
    setProductName(name);
    const params = new URLSearchParams(location.search);
    params.set('product', name);
    history.replace({ search: params.toString() });
  };

  const updatedAt = specs.updatedAt.slice(0, 10);

  return (
    <Layout title={t.pageTitle} description={t.subtitle}>
      <main className={`container margin-vert--lg ${styles.page}`}>
        <header className={styles.header}>
          <h1>{t.pageTitle}</h1>
          <p>{t.subtitle}</p>
          <p className={styles.updatedAt}>
            {t.updatedAt}: {updatedAt}
          </p>
        </header>

        <label className={styles.productSelect}>
          <span>{t.product}</span>
          <select value={product.name} onChange={(e) => selectProduct(e.target.value)}>
            {specs.products.map((p) => (
              <option key={p.name} value={p.name}>{p.name}</option>
            ))}
          </select>
        </label>

        <h2 className={styles.productTitle}>{product.name}</h2>

        {product.sections.map((section) => (
          <section key={section.name} className={styles.section}>
            <h3>{section.name}</h3>
            <SectionTable section={section} models={product.models} t={t} />
          </section>
        ))}
      </main>
    </Layout>
  );
}
