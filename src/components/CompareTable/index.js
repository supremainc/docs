import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import  "tabulator-tables/dist/css/tabulator.min.css";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Locale from './resources.json';

// 공통 상수 정의
const COMMON_COLUMN_PROPS = {
  hozAlign: "center",
  headerHozAlign: "center", 
  headerVertical: false,
  headerSort: false,
};

const FROZEN_COLUMN_PROPS = {
  hozAlign: "right",
  headerHozAlign: "center",
  headerVertical: false,
  headerSort: false,
  width: 150,
  frozen: true
};

// 커스텀 Hook으로 getLocale 함수 제공
function useLocale() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  
  const getLocale = useCallback((id) => {
    return Locale[currentLocale]?.[id] || id;
  }, [currentLocale]);
  
  return getLocale;
}

// 공통 포매터 함수
function useCustomLocaleFormatter() {
  const getLocale = useLocale();
  
  return useCallback((cell) => {
    const value = cell.getValue();
    if (value === true) {
      return "✔️";
    } else if (value === false) {
      return "❌";
    } else {
      return getLocale(value) || value;
    }
  }, [getLocale]);
}

export function RenderTableSpecs({ data }) {
  const getLocale = useLocale();
  const customFormatter = useCustomLocaleFormatter();
  const tableRef = useRef(null);
  const tabulatorInstance = useRef(null);

  // 중첩된 구조의 데이터를 평면화된 형태로 변환
  const transformedData = useMemo(() => {
    if (!data || data.length === 0) {
      return [];
    }
    
    // 각 데이터 항목을 평면화
    const flattenedData = data.map(item => {
      const { category, function: functionName, models } = item;
      
      const rowData = {
        category,
        function: functionName
      };
      
      // 각 모델의 모든 변형을 해당 필드에 매핑
      Object.entries(models).forEach(([modelName, modelVariants]) => {
        Object.entries(modelVariants).forEach(([variant, value]) => {
          const fieldName = variant.replace(/[-]/g, ''); // 하이픈 제거하여 필드명 생성
          rowData[fieldName] = value;
        });
      });
      
      return rowData;
    });
    
    return flattenedData;
  }, [data]);

  // 컬럼 정의를 원본 JSON 구조 기반으로 동적 생성
  const columns = useMemo(() => {
    if (!data || data.length === 0) {
      return [];
    }

    const createColumn = (title, field) => ({
      title,
      field,
      ...COMMON_COLUMN_PROPS,
      // width: 120,
      minWidth: 120,
      formatter: customFormatter
    });

    const createColumnGroup = (title, columns) => ({
      title,
      headerHozAlign: "center",
      columns
    });

    // 첫 번째 데이터 항목에서 모델 구조를 가져옴
    const firstItem = data[0];
    const { models } = firstItem;

    // 컬럼 구성
    const columns = [
      { 
        title: getLocale("product_specs"), 
        field: "function",
        ...FROZEN_COLUMN_PROPS,
        formatter: customFormatter
      }
    ];

    // 각 제품(모델)별로 컬럼 그룹 생성
    Object.entries(models).forEach(([productName, variants]) => {
      const productColumns = Object.keys(variants).map(variant => {
        const fieldName = variant.replace(/[-]/g, ''); // 하이픈 제거하여 필드명 생성
        return createColumn(variant, fieldName);
      });
      
      if (productColumns.length > 0) {
        columns.push(createColumnGroup(productName, productColumns));
      }
    });

    return columns;
  }, [data, getLocale, customFormatter]);

  const groupHeader = useCallback((value, count) => {
    return getLocale(value.toLowerCase()) + " (" + count + ")";
  }, [getLocale]);

  useEffect(() => {
    if (tableRef.current && !tabulatorInstance.current) {
      tabulatorInstance.current = new Tabulator(tableRef.current, {
        height: "calc(100vh - 350px)",
        autoResize: false,
        data: transformedData,
        layout: "fitColumns",
        groupBy: "category",
        groupHeader,
        columns
      });
    }

    return () => {
      if (tabulatorInstance.current) {
        tabulatorInstance.current.destroy();
        tabulatorInstance.current = null;
      }
    };
  }, [transformedData, columns, groupHeader]);

  return (
    <div ref={tableRef} className={styles.tableContainer}></div>
  );
}

export function RenderTableFuncs({ data, width }) {
  const getLocale = useLocale();
  const customFormatter = useCustomLocaleFormatter();
  const tableRef = useRef(null);
  const tabulatorInstance = useRef(null);

  // 데이터에서 동적으로 컬럼 정의를 생성
  const columns = useMemo(() => {
    if (!data || data.length === 0) return [];

    const createColumn = (title, field) => ({
      title,
      field,
      width: width || null, // 기본 너비를 120으로 설정, props로 전달된 경우 사용
      minWidth: 150,
      ...COMMON_COLUMN_PROPS,
      formatter: customFormatter
    });

    // 첫 번째 데이터 항목에서 제품 컬럼들을 추출
    const firstItem = data[0];
    const productColumns = Object.keys(firstItem).filter(
      key => key !== 'category' && key !== 'function'
    );

    return [
      { 
        title: getLocale("main_function"), 
        field: "function", 
        ...FROZEN_COLUMN_PROPS,
        formatter: (cell) => {
          const value = cell.getValue();
          return getLocale(value) || value;
        }
      },
      ...productColumns.map(product => createColumn(product, product))
    ];
  }, [data, getLocale, customFormatter]);

  const groupHeader = useCallback((value, count) => {
    return getLocale(value.toLowerCase()) + " (" + count + ")";
  }, [getLocale]);

  useEffect(() => {
    if (tableRef.current && !tabulatorInstance.current) {
      tabulatorInstance.current = new Tabulator(tableRef.current, {
        height: "calc(100vh - 350px)",
        data: data,
        layout:"fitColumns",
        resizableColumnFit:true,
        groupBy: "category",
        groupHeader,
        columns
      });
    }

    return () => {
      if (tabulatorInstance.current) {
        tabulatorInstance.current.destroy();
        tabulatorInstance.current = null;
      }
    };
  }, [data, columns, groupHeader]);

  return <div ref={tableRef} className={styles.tableContainer}></div>;
}