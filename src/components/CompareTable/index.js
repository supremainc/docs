import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { createColumnHelper, tableFeatures, useTable } from '@tanstack/react-table';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './styles.module.css';
import Locale from './resources.json';

// 비교표는 빌드 시 정적 HTML <table>로 렌더링되어야 합니다(SSR).
// 크롤러가 내용을 읽을 수 있도록 다음을 지키세요.
// - 표를 useEffect나 <BrowserOnly> 안에서 렌더링하지 않습니다.
// - 초기 상태는 모든 카테고리를 펼친 상태로 둡니다.
// - 가상 스크롤을 사용하지 않습니다.

const features = tableFeatures({});
const helper = createColumnHelper();
const FUNCTION_COLUMN_ID = 'function';

function useLocale() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  return useCallback(
    (id) => Locale[currentLocale]?.[id] || Locale.en?.[id],
    [currentLocale],
  );
}

// 번역 문자열의 <br/>를 React 줄바꿈으로 변환합니다.
function MultilineText({ text }) {
  const parts = String(text).split(/<br\s*\/?>/i);
  return parts.map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {part}
    </Fragment>
  ));
}

// 기호만으로는 의미가 전달되지 않으므로 aria-label과 title에 텍스트를 함께 넣습니다.
function StatusMark({ symbol, label }) {
  return (
    <span role="img" aria-label={label} title={label}>
      {symbol}
    </span>
  );
}

function Value({ value, getLocale }) {
  if (value === true) {
    return <StatusMark symbol="✔️" label={getLocale('supported')} />;
  }
  if (value === false) {
    return <StatusMark symbol="❌" label={getLocale('not_supported')} />;
  }
  if (value === '🔶') {
    return <StatusMark symbol="🔶" label={getLocale('varies_by_model')} />;
  }
  if (value === null || value === undefined || value === '') {
    return null;
  }
  return <MultilineText text={getLocale(value) || value} />;
}

function CellValue({ value, getLocale }) {
  // 변경 전/후 값을 함께 보여 주는 형식: { before, after }
  if (typeof value === 'object' && value !== null && 'before' in value && 'after' in value) {
    return (
      <>
        <span className={styles.before}>
          <Value value={value.before} getLocale={getLocale} />
        </span>
        <span className={styles.after}>
          <Value value={value.after} getLocale={getLocale} />
        </span>
      </>
    );
  }
  return <Value value={value} getLocale={getLocale} />;
}

// 데이터 순서를 유지하며 category 기준으로 행을 묶습니다.
function groupRowsByCategory(rows) {
  const groups = new Map();
  rows.forEach((row) => {
    const { category } = row.original;
    if (!groups.has(category)) groups.set(category, []);
    groups.get(category).push(row);
  });
  return [...groups.entries()];
}

function CompareTable({ data, columns, caption }) {
  const getLocale = useLocale();
  const table = useTable({ features, columns, data });
  const [collapsed, setCollapsed] = useState({});
  const columnCount = table.getAllLeafColumns().length;

  const toggle = (category) =>
    setCollapsed((prev) => ({ ...prev, [category]: !prev[category] }));

  return (
    <div className={styles.tableContainer}>
      <div className={styles.scroll}>
        <table className={styles.compare}>
          {caption && <caption className={styles.caption}>{caption}</caption>}
          <thead>
            {table.getHeaderGroups().map((group) => (
              <tr key={group.id}>
                {group.headers
                  .filter((header) => header.rowSpan > 0)
                  .map((header) => (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      rowSpan={header.rowSpan}
                      scope={header.column.columns.length > 0 ? 'colgroup' : 'col'}
                      className={
                        header.column.id === FUNCTION_COLUMN_ID ? styles.stickyCol : undefined
                      }
                    >
                      {header.column.columnDef.header}
                    </th>
                  ))}
              </tr>
            ))}
          </thead>
          {groupRowsByCategory(table.getRowModel().rows).map(([category, rows]) => {
            const isCollapsed = Boolean(collapsed[category]);
            return (
              <tbody key={category}>
                <tr className={styles.groupRow}>
                  <th colSpan={columnCount} scope="rowgroup">
                    <button
                      type="button"
                      className={styles.groupToggle}
                      aria-expanded={!isCollapsed}
                      onClick={() => toggle(category)}
                    >
                      <span className={clsx(styles.caret, isCollapsed && styles.caretCollapsed)} aria-hidden="true" />
                      {getLocale(String(category).toLowerCase()) || category} ({rows.length})
                    </button>
                  </th>
                </tr>
                {!isCollapsed &&
                  rows.map((row) => (
                    <tr key={row.id}>
                      {row.getAllCells().map((cell) =>
                        cell.column.id === FUNCTION_COLUMN_ID ? (
                          <th key={cell.id} scope="row" className={styles.stickyCol}>
                            <table.FlexRender cell={cell} />
                          </th>
                        ) : (
                          <td key={cell.id}>
                            <table.FlexRender cell={cell} />
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

function functionColumn(header, getLocale) {
  return helper.accessor((row) => row.function, {
    id: FUNCTION_COLUMN_ID,
    header,
    cell: (info) => <CellValue value={info.getValue()} getLocale={getLocale} />,
  });
}

function valueColumn(id, header, accessor, getLocale) {
  return helper.accessor(accessor, {
    id,
    header,
    cell: (info) => <CellValue value={info.getValue()} getLocale={getLocale} />,
  });
}

/**
 * 사양 비교표. 열은 제품 → 세부 모델의 2단 구조입니다.
 * data: [{ category, function, models: { [product]: { [variant]: value } } }]
 */
export function RenderTableSpecs({ data, caption }) {
  const getLocale = useLocale();

  const rows = useMemo(
    () =>
      (data ?? []).map(({ category, function: fn, models }) => {
        const values = {};
        Object.values(models ?? {}).forEach((variants) => {
          Object.entries(variants).forEach(([variant, value]) => {
            values[variant] = value;
          });
        });
        return { category, function: fn, values };
      }),
    [data],
  );

  const columns = useMemo(() => {
    if (!data?.length) return [];
    return [
      functionColumn(getLocale('product_specs'), getLocale),
      ...Object.entries(data[0].models).map(([product, variants]) =>
        helper.group({
          id: `product:${product}`,
          header: product,
          columns: Object.keys(variants).map((variant) =>
            valueColumn(variant, variant, (row) => row.values[variant], getLocale),
          ),
        }),
      ),
    ];
  }, [data, getLocale]);

  return <CompareTable data={rows} columns={columns} caption={caption} />;
}

/**
 * 기능 비교표. 열은 제품 단위입니다.
 * data: [{ category, function, [product]: value }]
 */
export function RenderTableFuncs({ data, caption }) {
  const getLocale = useLocale();
  const rows = data ?? [];

  const columns = useMemo(() => {
    if (!data?.length) return [];
    const products = Object.keys(data[0]).filter(
      (key) => key !== 'category' && key !== 'function',
    );
    return [
      functionColumn(getLocale('main_function'), getLocale),
      ...products.map((product) =>
        valueColumn(product, product, (row) => row[product], getLocale),
      ),
    ];
  }, [data, getLocale]);

  return <CompareTable data={rows} columns={columns} caption={caption} />;
}
