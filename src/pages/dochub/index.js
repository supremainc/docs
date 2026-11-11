import React, { useMemo, useState } from "react";
import {
  createColumnHelper,
  createSortedRowModel,
  rowSortingFeature,
  sortFn_alphanumeric,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
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
    categories: {
      platform: "플랫폼",
      aicamera: "AI 카메라",
      biometric: "바이오인식 장치",
      rfmobile: "RF/모바일 장치",
      intelligent: "출입통제 컨트롤러",
      peripherals: "주변 장치",
      apps: "애플리케이션",
      integration: "인테그레이션"
    },
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
    categories: {
      platform: "Platform",
      aicamera: "AI Camera",
      biometric: "Biometric Readers",
      rfmobile: "RFID Readers",
      intelligent: "Access Control Unit",
      peripherals: "Peripherals",
      apps: "Apps",
      integration: "Integration"
    },
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
    categories: {
      platform: "プラットフォーム",
      aicamera: "AI カメラ",
      biometric: "バイオメトリックリーダー",
      rfmobile: "RFID リーダー",
      intelligent: "アクセス制御ユニット",
      peripherals: "周辺機器",
      apps: "アプリ",
      integration: "インテグレーション"
    },
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
    allCategories: "Todos",
    colProduct: "PRODUCT IDENTITY",
    colVersion: "VERSION",
    colDocumentation: "DOCUMENTATION & ASSETS",
    categories: {
      platform: "Plataformas",
      aicamera: "Cámaras AI",
      biometric: "Lectores Biométricos",
      rfmobile: "Lectores RFID",
      intelligent: "Unidad de Control de Acceso",
      peripherals: "Dispositivos Periféricos",
      apps: "Aplicaciones",
      integration: "Integración"
    },
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

// 표는 빌드 시 정적 HTML <table>로 렌더링됩니다(SSR).
// 크롤러가 문서 목록을 읽을 수 있도록 useEffect나 <BrowserOnly> 안에서 렌더링하지 마세요.
const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: { alphanumeric: sortFn_alphanumeric },
});
const helper = createColumnHelper();

const DOC_KEYS = ["manuals", "release_notes", "dt", "a_e"];
const REQUIRED_FIELDS = ["category", "product", "release_date"];

function getDocUrl(value, locale) {
  if (!value) return null;
  if (typeof value === "object") {
    return value[locale] || value.en || null;
  }
  return value;
}

function trackDownload(e) {
  const link = e.currentTarget;
  window.gtag?.("event", "file_download", {
    file_name: link.href.split("/").pop(),
    file_extension: link.href.split(".").pop(),
    link_url: link.href,
    link_text: link.dataset.docLabel,
    doc_type: link.dataset.docType,
    product_name: link.dataset.product,
  });
}

function ProductCell({ row }) {
  const models = Array.isArray(row.models) ? row.models.join(", ") : "";
  return (
    <div className="dochub-product-cell">
      <span className="dochub-product-name">{row.product}</span>
      {models && (
        <span className="dochub-models">
          <span className="dochub-model-label">MODEL:</span> {models}
        </span>
      )}
    </div>
  );
}

function DocLinks({ row, docLabels, locale }) {
  return (
    <div className="dochub-doc-items">
      {DOC_KEYS.map((key) => {
        const url = getDocUrl(row[key], locale);
        if (!url) return null;
        const Icon = key === "a_e" ? Wordicon : Pdficon;
        return (
          <a
            key={key}
            href={encodeURI(`${BLOB_BASE_URL}${url}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="dochub-doc-item"
            data-product={row.product}
            data-doc-type={key}
            data-doc-label={docLabels[key]}
            onClick={trackDownload}
            download
          >
            <Icon className="dochub-doc-icon" aria-hidden="true" />
            <span className="dochub-doc-label">{docLabels[key]}</span>
          </a>
        );
      })}
    </div>
  );
}

// 빌드(Node)와 브라우저의 시간대가 달라도 같은 날짜가 나오도록 UTC 기준으로 표시합니다.
function ReleaseDate({ value, locale }) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return (
    <time className="dochub-release-date" dateTime={value}>
      {new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      }).format(date)}
    </time>
  );
}

function SortIndicator({ direction }) {
  return (
    <span className="dochub-sort-indicator" aria-hidden="true">
      {direction === "asc" ? "▲" : direction === "desc" ? "▼" : "↕"}
    </span>
  );
}

function DocHub({ data }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const localeData = useLocaleData();
  const { i18n: { currentLocale } } = useDocusaurusContext();

  const categories = useMemo(
    () => [...new Set(data.map((item) => item.category?.trim()).filter(Boolean))],
    [data],
  );

  const validationErrors = useMemo(
    () =>
      data.reduce((acc, item, i) => {
        const missing = REQUIRED_FIELDS.filter((f) => !item[f]);
        if (missing.length) {
          acc.push({ index: i + 1, product: item.product || `항목 ${i + 1}`, missing });
        }
        return acc;
      }, []),
    [data],
  );

  const filteredData = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return data.filter((row) => {
      if (selectedCategory !== "all" && row.category?.trim() !== selectedCategory) {
        return false;
      }
      if (!q) return true;
      const inProduct = row.product?.toLowerCase().includes(q);
      const inModels =
        Array.isArray(row.models) && row.models.some((m) => m.toLowerCase().includes(q));
      return inProduct || inModels;
    });
  }, [data, searchQuery, selectedCategory]);

  const columns = useMemo(
    () => [
      helper.accessor("product", {
        id: "product",
        header: localeData.colProduct,
        sortFn: "alphanumeric",
        cell: (info) => <ProductCell row={info.row.original} />,
      }),
      helper.accessor("version", {
        id: "version",
        header: localeData.colVersion,
        sortFn: "alphanumeric",
        sortUndefined: "last",
        cell: (info) => {
          const v = info.getValue();
          return v ? <span className="dochub-version-badge">{v}</span> : null;
        },
      }),
      helper.display({
        id: "documentation",
        header: localeData.colDocumentation,
        cell: (info) => (
          <DocLinks
            row={info.row.original}
            docLabels={localeData.docLabels}
            locale={currentLocale}
          />
        ),
      }),
      helper.accessor("release_date", {
        id: "release_date",
        header: localeData.colReleaseDate,
        enableSorting: false,
        cell: (info) => <ReleaseDate value={info.getValue()} locale={currentLocale} />,
      }),
    ],
    [localeData, currentLocale],
  );

  const table = useTable({ features, columns, data: filteredData });

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
            aria-label={localeData.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Pill 카테고리 탭 */}
      <div className="dochub-tabs">
        <button
          type="button"
          className={`dochub-tab${selectedCategory === "all" ? " active" : ""}`}
          aria-pressed={selectedCategory === "all"}
          onClick={() => setSelectedCategory("all")}
        >
          {localeData.allCategories}
        </button>
        {categories.map((cat) => (
          <button
            type="button"
            key={cat}
            className={`dochub-tab${selectedCategory === cat ? " active" : ""}`}
            aria-pressed={selectedCategory === cat}
            onClick={() => setSelectedCategory(cat)}
          >
            {localeData.categories?.[cat] || cat}
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
        <table className="dochub-table">
          <colgroup>
            <col className="dochub-col-product" />
            <col className="dochub-col-version" />
            <col className="dochub-col-docs" />
            <col className="dochub-col-release" />
          </colgroup>
          <thead>
            {table.getHeaderGroups().map((group) => (
              <tr key={group.id}>
                {group.headers.map((header) => {
                  const { column } = header;
                  const label = column.columnDef.header;
                  if (!column.getCanSort()) {
                    return (
                      <th key={header.id} scope="col">
                        {label}
                      </th>
                    );
                  }
                  const sorted = column.getIsSorted();
                  return (
                    <th
                      key={header.id}
                      scope="col"
                      aria-sort={
                        sorted === "asc" ? "ascending" : sorted === "desc" ? "descending" : "none"
                      }
                    >
                      <button
                        type="button"
                        className="dochub-sort-button"
                        onClick={column.getToggleSortingHandler()}
                      >
                        {label}
                        <SortIndicator direction={sorted} />
                      </button>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getAllCells().map((cell) => (
                  <td key={cell.id}>
                    <table.FlexRender cell={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
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
