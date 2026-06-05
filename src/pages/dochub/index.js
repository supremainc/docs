import React, { useEffect, useRef, useCallback, useState } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator.min.css";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Resources from "./resource.json";
import "./styles.css";

const BLOB_BASE_URL = "https://supremadocs.blob.core.windows.net/dochub/";

const Locale = {
  ko: {
    pageTitle: "다운로드 센터",
    searchPlaceholder: "모델 또는 제품명으로 검색...",
    allCategories: "전체",
    countSuffix: "개 제품",
    colProduct: "제품",
    colVersion: "버전",
    colManuals: "사용자 가이드",
    colReleaseNotes: "릴리스 노트",
    colQuickguides: "퀵 가이드",
    colAE: "A&E",
    colDT: "드릴링 템플릿",
  },
  en: {
    pageTitle: "Download center",
    searchPlaceholder: "Search by model or series...",
    allCategories: "All",
    countSuffix: " products",
    colProduct: "Product",
    colVersion: "Version",
    colManuals: "User Guide",
    colReleaseNotes: "Release Notes",
    colQuickguides: "Quick Guide",
    colAE: "A&E",
    colDT: "Datasheet",
  },
  ja: {
    pageTitle: "ダウンロードセンター",
    searchPlaceholder: "モデルまたは製品名で検索...",
    allCategories: "すべて",
    countSuffix: " 製品",
    colProduct: "製品",
    colVersion: "バージョン",
    colManuals: "ユーザーガイド",
    colReleaseNotes: "リリースノート",
    colQuickguides: "クイックガイド",
    colAE: "インストールガイド",
    colDT: "データシート",
  },
  es: {
    pageTitle: "Centro de descargas",
    searchPlaceholder: "Buscar por modelo o serie...",
    allCategories: "Todo",
    countSuffix: " productos",
    colProduct: "Producto",
    colVersion: "Versión",
    colManuals: "Guía del usuario",
    colReleaseNotes: "Notas de versión",
    colQuickguides: "Guía rápida",
    colAE: "Guía de instalación",
    colDT: "Hoja de datos",
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
  const [productCount, setProductCount] = useState(data.length);
  const selectedCategoryRef = useRef("all");
  const searchQueryRef = useRef("");
  const localeData = useLocaleData();
  const { i18n: { currentLocale } } = useDocusaurusContext();

  selectedCategoryRef.current = selectedCategory;
  searchQueryRef.current = searchQuery;

  useEffect(() => {
    const cats = [...new Set(data.map(item => item.category?.trim()).filter(Boolean))];
    setCategories(cats);
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

    const getUrl = (val) => {
      if (!val) return null;
      if (typeof val === "object") {
        return val[currentLocale] || val["en"] || Object.values(val).find(Boolean);
      }
      return val;
    };

    const productFormatter = (cell) => {
      const row = cell.getRow().getData();
      const models = Array.isArray(row.models) ? row.models.join(", ") : "";
      return `<div class="dochub-product-cell">
        <span class="dochub-product-name">${row.product}</span>
        ${models ? `<span class="dochub-models">${models}</span>` : ""}
      </div>`;
    };

    const versionFormatter = (cell) => {
      const v = cell.getValue();
      if (!v) return "";
      return `<span class="dochub-version-badge">FW ${v}</span>`;
    };

    const pdfFormatter = (cell) => {
      const url = getUrl(cell.getValue());
      if (!url) return "";
      return `<a href="${BLOB_BASE_URL}${url}" target="_blank" rel="noopener noreferrer" class="dochub-pdf-link" title="Download PDF">
        <img src="/img/menus/ico-air-report.svg" class="dochub-pdf-icon" alt="PDF" />
      </a>`;
    };

    const table = new Tabulator(tableRef.current, {
      data: data,
      layout: "fitColumns",
      pagination: true,
      paginationSize: 20,
      columns: [
        {
          title: localeData.colProduct,
          field: "product",
          formatter: productFormatter,
          minWidth: 200,
        },
        {
          title: localeData.colVersion,
          field: "version",
          formatter: versionFormatter,
          width: 110,
          hozAlign: "left",
          headerSort: true,
        },
        {
          title: localeData.colManuals,
          field: "manuals",
          formatter: pdfFormatter,
          width: 110,
          hozAlign: "center",
          headerSort: false,
        },
        {
          title: localeData.colReleaseNotes,
          field: "release_notes",
          formatter: pdfFormatter,
          width: 120,
          hozAlign: "center",
          headerSort: false,
        },
        {
          title: localeData.colQuickguides,
          field: "quickguides",
          formatter: pdfFormatter,
          width: 110,
          hozAlign: "center",
          headerSort: false,
        },
        {
          title: localeData.colAE,
          field: "a_e",
          formatter: pdfFormatter,
          width: 110,
          hozAlign: "center",
          headerSort: false,
        },
        {
          title: localeData.colDT,
          field: "dt",
          formatter: pdfFormatter,
          width: 110,
          hozAlign: "center",
          headerSort: false,
        },
      ],
    });

    tabulatorInstance.current = table;

    table.on("tableBuilt", () => {
      applyFilters(table, searchQueryRef.current, selectedCategoryRef.current);
      setProductCount(table.getData("active").length);
    });

    table.on("dataFiltered", (_filters, rows) => {
      setProductCount(rows.length);
    });

    return () => {
      table.destroy();
      tabulatorInstance.current = null;
    };
  }, [data, currentLocale, localeData, applyFilters]);

  useEffect(() => {
    applyFilters(tabulatorInstance.current, searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory, applyFilters]);

  return (
    <div className="dochub-page">
      {/* 페이지 헤더 */}
      <div className="dochub-header">
        <div className="dochub-header-left">
          <span className="dochub-brand">SUPREMA</span>
          <h1 className="dochub-title">{localeData.pageTitle}</h1>
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

      {/* 콘텐츠 영역: 사이드바 + 메인 */}
      <div className="dochub-body">
        {/* 사이드바 */}
        <aside className="dochub-sidebar">
          <ul className="dochub-category-list">
            <li
              className={`dochub-category-item${selectedCategory === "all" ? " active" : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              {localeData.allCategories}
            </li>
            {categories.map(cat => (
              <li
                key={cat}
                className={`dochub-category-item${selectedCategory === cat ? " active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* 메인 */}
        <main className="dochub-main">
          {/* 상단 카테고리 탭 */}
          <div className="dochub-tabs-bar">
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
          </div>

          {/* 제품 수 */}
          <div className="dochub-count">
            {productCount}{localeData.countSuffix}
          </div>

          {/* 테이블 */}
          <div ref={tableRef} className="dochub-table" />
        </main>
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
