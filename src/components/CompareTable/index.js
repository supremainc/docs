import React, { useCallback, useMemo, useState } from "react";
import clsx from "clsx";
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from "@tanstack/react-table";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Locale from './resources.json';

// 커스텀 Hook으로 getLocale 함수 제공
function useLocale() {
  const { i18n: { currentLocale } } = useDocusaurusContext();

  const getLocale = useCallback((id) => {
    return Locale[currentLocale]?.[id] || Locale["en"]?.[id];
  }, [currentLocale]);

  return getLocale;
}

// 값을 로케일/불리언/before-after 규칙에 따라 HTML 문자열로 변환
function useCellHtml() {
  const getLocale = useLocale();

  return useCallback((value) => {
    if (typeof value === "object" && value !== null && "before" in value && "after" in value) {
      const { before, after } = value;
      const beforeText = before === true ? "✔️" : before === false ? "❌" : getLocale(before);
      const afterText = after === true ? "✔️" : after === false ? "❌" : getLocale(after);
      return `<span class="before">${beforeText}</span><span class="after">${afterText}</span>`;
    }
    if (value === true) return "✔️";
    if (value === false) return "❌";
    return getLocale(value) || value || "";
  }, [getLocale]);
}

// 로케일 값에 <br/> 등 HTML이 포함되어 있어 innerHTML로 렌더링
function HtmlCell({ html }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

// 고정(frozen) 컬럼을 좌측에 sticky 처리하기 위한 스타일
function getPinningStyle(column, isHeader) {
  if (column.getIsPinned() !== "left") return undefined;
  return {
    position: "sticky",
    left: `${column.getStart("left")}px`,
    zIndex: isHeader ? 3 : 1,
  };
}

// category 필드를 기준으로 원본 데이터 등장 순서를 유지한 채 행을 그룹핑
function groupRowsByCategory(rows) {
  const order = [];
  const map = new Map();
  rows.forEach((row) => {
    const key = row.original.category;
    if (!map.has(key)) {
      map.set(key, []);
      order.push(key);
    }
    map.get(key).push(row);
  });
  return order.map((category) => ({ category, rows: map.get(category) }));
}

// category별 접기/펼치기 + 고정 컬럼을 지원하는 공용 테이블 렌더러
function GroupedTable({ table }) {
  const getLocale = useLocale();
  const [collapsed, setCollapsed] = useState(() => new Set());

  const toggleGroup = useCallback((category) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  }, []);

  const groups = useMemo(
    () => groupRowsByCategory(table.getRowModel().rows),
    [table]
  );
  const columnCount = table.getVisibleLeafColumns().length;
  const headerGroups = table.getHeaderGroups();

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.fixedhead}>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className={clsx(
                    styles.th,
                    header.column.getIsPinned() && styles.pinnedCell
                  )}
                  style={getPinningStyle(header.column, true)}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {groups.map(({ category, rows }) => {
            const isCollapsed = collapsed.has(category);
            return (
              <React.Fragment key={category}>
                <tr className={styles.groupRow} onClick={() => toggleGroup(category)}>
                  <td colSpan={columnCount} className={styles.groupCell}>
                    {(isCollapsed ? "▸" : "▾") + " " +
                      (getLocale(String(category).toLowerCase()) || category) +
                      ` (${rows.length})`}
                  </td>
                </tr>
                {!isCollapsed &&
                  rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className={clsx(
                            styles.td,
                            cell.column.getIsPinned() && styles.pinnedCell
                          )}
                          style={getPinningStyle(cell.column, false)}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function RenderTableSpecs({ data }) {
  const getLocale = useLocale();
  const cellHtml = useCellHtml();
  const columnHelper = useMemo(() => createColumnHelper(), []);

  // 중첩된 models 구조를 { function, [variant]: value } 형태로 평면화
  const rows = useMemo(() => {
    if (!data || data.length === 0) return [];
    return data.map((item) => {
      const { category, function: functionName, models } = item;
      const rowData = { category, function: functionName };
      Object.values(models).forEach((variants) => {
        Object.entries(variants).forEach(([variant, value]) => {
          rowData[variant.replace(/[-]/g, "")] = value;
        });
      });
      return rowData;
    });
  }, [data]);

  const columns = useMemo(() => {
    if (!data || data.length === 0) return [];
    const { models } = data[0];

    const productGroups = Object.entries(models).map(([productName, variants]) =>
      columnHelper.group({
        id: productName,
        header: productName,
        columns: Object.keys(variants).map((variant) => {
          const fieldName = variant.replace(/[-]/g, "");
          return columnHelper.accessor(fieldName, {
            id: fieldName,
            header: variant,
            cell: (info) => <HtmlCell html={cellHtml(info.getValue())} />,
          });
        }),
      })
    );

    return [
      columnHelper.accessor("function", {
        id: "function",
        header: () => getLocale("product_specs"),
        cell: (info) => <HtmlCell html={cellHtml(info.getValue())} />,
      }),
      ...productGroups,
    ];
  }, [data, columnHelper, getLocale, cellHtml]);

  const table = useReactTable({
    data: rows,
    columns,
    initialState: { columnPinning: { left: ["function"] } },
    getCoreRowModel: getCoreRowModel(),
  });

  if (!data || data.length === 0) return null;

  return <GroupedTable table={table} />;
}

export function RenderTableFuncs({ data }) {
  const getLocale = useLocale();
  const cellHtml = useCellHtml();
  const columnHelper = useMemo(() => createColumnHelper(), []);

  const productKeys = useMemo(() => {
    if (!data || data.length === 0) return [];
    return Object.keys(data[0]).filter((key) => key !== "category" && key !== "function");
  }, [data]);

  const columns = useMemo(() => [
    columnHelper.accessor("function", {
      id: "function",
      header: () => getLocale("main_function"),
      cell: (info) => <HtmlCell html={getLocale(info.getValue()) || info.getValue()} />,
    }),
    ...productKeys.map((key) =>
      columnHelper.accessor(key, {
        id: key,
        header: key,
        cell: (info) => <HtmlCell html={cellHtml(info.getValue())} />,
      })
    ),
  ], [columnHelper, productKeys, getLocale, cellHtml]);

  const table = useReactTable({
    data: data ?? [],
    columns,
    initialState: { columnPinning: { left: ["function"] } },
    getCoreRowModel: getCoreRowModel(),
  });

  if (!data || data.length === 0) return null;

  return <GroupedTable table={table} />;
}
