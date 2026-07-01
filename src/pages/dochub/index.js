import React, { useEffect, useRef, useCallback, useState } from "react";
import { renderToStaticMarkup } from 'react-dom/server';
import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator.min.css";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Resources from "./resource.json";
import Pdficon from "@site/static/img/menus/ico-pdf.svg";
import Wordicon from "@site/static/img/menus/ico-word.svg";
import "./styles.css";

const BLOB_BASE_URL = "https://supremadocs.blob.core.windows.net/dochub/";

const Locale = {
  ko: {
    brand: "CENTRAL REPOSITORY",
    pageTitle: "Document Hub",
    subtitle: "슈프리마 제품의 매뉴얼 및 기술 문서를 쉽게 찾고 다운로드하세요.",
    searchPlaceholder: "모델 또는 제품명으로 검색...",
    allCategories: "전체",
    colProduct: "PRODUCT IDENTITY",
    colVersion: "VERSION",
    colDocumentation: "DOCUMENTATION & ASSETS",
    docLabels: {
      manuals: "사용자 가이드",
      release_notes: "릴리스 노트",
      dt: "드릴링 템플릿",
      a_e: "A&E Specification",
      quickguides: "퀵 가이드",
    },
    colReleaseDate: "RELEASED",
  },
  en: {
    brand: "CENTRAL REPOSITORY",
    pageTitle: "Document Hub",
    subtitle: "Easily find and download all Suprema product manuals and technical documentation.",
    searchPlaceholder: "Search by model or product name...",
    allCategories: "All",
    colProduct: "PRODUCT IDENTITY",
    colVersion: "VERSION",
    colDocumentation: "DOCUMENTATION & ASSETS",
    docLabels: {
      manuals: "Manual",
      release_notes: "Release Notes",
      dt: "Drilling Template",
      a_e: "A&E Specification",
      quickguides: "Quick Guide",
    },
    colReleaseDate: "RELEASED",
  },
  ja: {
    brand: "CENTRAL REPOSITORY",
    pageTitle: "ドキュメントハブ",
    subtitle: "Suprema製品のマニュアルおよび技術文書を簡単に検索・ダウンロードできます。",
    searchPlaceholder: "モデルまたは製品名で検索...",
    allCategories: "すべて",
    colProduct: "PRODUCT IDENTITY",
    colVersion: "VERSION",
    colDocumentation: "DOCUMENTATION & ASSETS",
    docLabels: {
      manuals: "ユーザーガイド",
      release_notes: "リリースノート",
      dt: "ドリルテンプレート",
      a_e: "A&E仕様書",
      quickguides: "クイックガイド",
    },
    colReleaseDate: "RELEASED",
  },
  es: {
    brand: "CENTRAL REPOSITORY",
    pageTitle: "Centro de Documentos",
    subtitle: "Encuentre y descargue fácilmente los manuales de productos Suprema y documentación técnica.",
    searchPlaceholder: "Buscar por modelo o nombre de producto...",
    allCategories: "Todo",
    colProduct: "PRODUCT IDENTITY",
    colVersion: "VERSION",
    colDocumentation: "DOCUMENTATION & ASSETS",
    docLabels: {
      manuals: "Manual",
      release_notes: "Notas de versión",
      dt: "Plantilla de perforación",
      a_e: "Especificación A&E",
      quickguides: "Guía rápida",
    },
    colReleaseDate: "RELEASED",
  },
};

function useLocaleData() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  return Locale[currentLocale] || Locale["en"];
}

function DocHub({ data }) {
  const tableRef = useRef(null);
  const tabulatorInstance = useRef(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const selectedCategoryRef = useRef("all");
  const searchQueryRef = useRef("");
  const localeData = useLocaleData();
  const { i18n: { currentLocale } } = useDocusaurusContext();

  selectedCategoryRef.current = selectedCategory;
  searchQueryRef.current = searchQuery;

  useEffect(() => {
    const cats = [...new Set(data.map(item => item.category?.trim()).filter(Boolean))];
    setCategories(cats);

    const REQUIRED = ["category", "product", "version", "release_date"];
    const errors = data.reduce((acc, item, i) => {
      const missing = REQUIRED.filter(f => !item[f]);
      if (missing.length) {
        acc.push({ index: i + 1, product: item.product || `항목 ${i + 1}`, missing });
      }
      return acc;
    }, []);
    setValidationErrors(errors);
  }, [data]);

  const applyFilters = useCallback((tableInstance, query, category) => {
    if (!tableInstance) return;
    tableInstance.setFilter((rowData) => {
      let match = true;
      if (category && category !== "all") {
        match = match && rowData.category?.trim() === category;
      }
      if (query) {
        const q = query.toLowerCase();
        const inProduct = rowData.product?.toLowerCase().includes(q);
        const inModels = Array.isArray(rowData.models) &&
          rowData.models.some(m => m.toLowerCase().includes(q));
        match = match && (inProduct || inModels);
      }
      return match;
    });
  }, []);

  useEffect(() => {
    if (!tableRef.current) return;

    const { docLabels } = localeData;
    const DOC_FIELDS = [
      { key: "manuals", label: docLabels.manuals },
      { key: "release_notes", label: docLabels.release_notes },
      { key: "dt", label: docLabels.dt },
      { key: "a_e", label: docLabels.a_e },
    ];

    const getUrl = (val) => {
      if (!val) return null;
      if (typeof val === "object") {
        if (currentLocale === "ko") {
          return val["ko"] || val["en"] || null;
        }
        return val[currentLocale] || val["en"] || null;
      }
      return val;
    };

    const productFormatter = (cell) => {
      const row = cell.getRow().getData();
      const models = Array.isArray(row.models) ? row.models.join(", ") : "";
      return `<div class="dochub-product-cell">
        <span class="dochub-product-name">${row.product}</span>
        ${models ? `<span class="dochub-models"><span class="dochub-model-label">MODEL:</span> ${models}</span>` : ""}
      </div>`;
    };

    const versionFormatter = (cell) => {
      const v = cell.getValue();
      if (!v) return "";
      const row = cell.getRow().getData();
      if (row.category === 'Platform' || row.category === 'Integration') {
        return `<span class="dochub-version-badge platform">SW ${v}</span>`;
      } else {
        return `<span class="dochub-version-badge">FW ${v}</span>`;
      }
    };

    const releaseDateFormatter = (cell) => {
      const row = cell.getRow().getData();
      const v = row.release_date;
      if (!v) return "";
      const date = new Date(v);
      if (isNaN(date)) return v; // If not a valid date, return original value
      return `<span class="dochub-release-date">${date.toLocaleDateString(currentLocale, { year: 'numeric', month: 'short', day: 'numeric' })}</span>`;
    }

    const pdfIconHtml = renderToStaticMarkup(React.createElement(Pdficon, { className: 'dochub-doc-icon' }));
    const wordIconHtml = renderToStaticMarkup(React.createElement(Wordicon, { className: 'dochub-doc-icon' }));

    const docFormatter = (cell) => {
      const row = cell.getRow().getData();
      const items = DOC_FIELDS.map(({ key, label }) => {
        const url = getUrl(row[key]);
        if (!url) return "";
        const iconHtml = key === 'a_e' ? wordIconHtml : pdfIconHtml;
        const fullUrl = `${BLOB_BASE_URL}${url}`;
        return `<a href="${fullUrl}" target="_blank" rel="noopener noreferrer" class="dochub-doc-item"
          data-product="${row.product}"
          data-doc-type="${key}"
          data-doc-label="${label}"
          download>
          ${iconHtml}
          <span class="dochub-doc-label">${label}</span>
        </a>`;
      }).filter(Boolean);
      return `<div class="dochub-doc-items">${items.join("")}</div>`;
    };

    const table = new Tabulator(tableRef.current, {
      data: data,
      layout: "fitColumns",
      renderVertical: "virtual",
      columns: [
        {
          title: localeData.colProduct,
          field: "product",
          formatter: productFormatter,
          minWidth: 160,
          maxWidth: 420,
          widthGrow: 2,
        },
        {
          title: localeData.colVersion,
          field: "version",
          formatter: versionFormatter,
          minWidth: 100,
          widthGrow: 1,
          hozAlign: "left",
          headerSort: true,
        },
        {
          title: localeData.colDocumentation,
          field: "manuals",
          formatter: docFormatter,
          minWidth: 240,
          widthGrow: 4,
          headerSort: false,
        },
        {
          title: localeData.colReleaseDate,
          field: "release date",
          formatter: releaseDateFormatter,
          minWidth: 100,
          widthGrow: 1,
          headerSort: false,
        },
      ],
    });

    tabulatorInstance.current = table;

    table.on("tableBuilt", () => {
      applyFilters(table, searchQueryRef.current, selectedCategoryRef.current);
    });

    return () => {
      table.destroy();
      tabulatorInstance.current = null;
    };
  }, [data, currentLocale, localeData, applyFilters]);

  useEffect(() => {
    applyFilters(tabulatorInstance.current, searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory, applyFilters]);

  useEffect(() => {
    const el = tableRef.current;
    if (!el) return;

    const handleClick = (e) => {
      const link = e.target.closest("a.dochub-doc-item");
      if (!link) return;

      window.gtag?.("event", "file_download", {
        file_name: link.href.split("/").pop(),
        file_extension: link.href.split(".").pop(),
        link_url: link.href,
        link_text: link.dataset.docLabel,
        doc_type: link.dataset.docType,
        product_name: link.dataset.product,
      });
    };

    el.addEventListener("click", handleClick);
    return () => el.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="dochub-page">
      {/* 헤더 */}
      <div className="dochub-header">
        <div className="dochub-header-left">
          <span className="dochub-brand">{localeData.brand}</span>
          <h1 className="dochub-title">{localeData.pageTitle}</h1>
          <p className="dochub-subtitle">{localeData.subtitle}</p>
        </div>
        <div className="dochub-search-bar">
          <svg className="dochub-search-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="8.5" cy="8.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
            <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            className="dochub-search-input"
            placeholder={localeData.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Pill 카테고리 탭 */}
      <div className="dochub-tabs">
        <button
          className={`dochub-tab${selectedCategory === "all" ? " active" : ""}`}
          onClick={() => setSelectedCategory("all")}
        >
          {localeData.allCategories}
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`dochub-tab${selectedCategory === cat ? " active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 필수 필드 누락 경고 */}
      {validationErrors.length > 0 && (
        <div className="dochub-validation-panel" role="alert">
          <div className="dochub-validation-title">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 2L2 17h16L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M10 8v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            필수 필드 누락 — {validationErrors.length}개 항목
          </div>
          <ul className="dochub-validation-list">
            {validationErrors.map(({ index, product, missing }) => (
              <li key={index}>
                <span className="dochub-validation-product">{product}</span>
                <span className="dochub-validation-fields">{missing.join(", ")} 누락</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 테이블 */}
      <div className="dochub-table-wrapper">
        <div ref={tableRef} className="dochub-table" />
      </div>
    </div>
  );
}

export default function Main() {
  return (
    <Layout>
      <Head>
        <title>DocHub | Suprema Docs</title>
        <meta name="description" content="Access the latest product documentation, manuals, release notes, and quick guides for Suprema's range of products through DocHub." />
        <meta name="keywords" content="Suprema documentation, product manuals, release notes, quick guides, access control documentation, biometric device manuals" />
      </Head>
      <DocHub data={Resources} />
    </Layout>
  );
}
