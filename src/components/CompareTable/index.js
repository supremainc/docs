import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import  "tabulator-tables/dist/css/tabulator.min.css";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '@site/src/pages/product-compares/styles.module.css';
import Locale from '@site/src/pages/product-compares/resources.json';

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

  // 컬럼 정의를 메모이제이션
  const columns = useMemo(() => {
    const createColumn = (title, field) => ({
      title,
      field,
      ...COMMON_COLUMN_PROPS,
      width: 120,
      formatter: customFormatter
    });

    const createColumnGroup = (title, columns) => ({
      title,
      headerHozAlign: "center",
      columns
    });

    return [
      { 
        title: getLocale("product_specs"), 
        field: "function", 
        ...FROZEN_COLUMN_PROPS,
        formatter: customFormatter
      },
      createColumnGroup("BioStation A2", [
        createColumn("BSA2-OEPW", "BSA2OEPW"),
        createColumn("BSA2-OHPW", "BSA2OHPW"),
        createColumn("BSA2-OIPW", "BSA2OIPW"),
        createColumn("BSA2-OMPW", "BSA2OMPW")
      ]),
      createColumnGroup("BioStation 2", [
        createColumn("BS2-OEPW", "BS2OEPW"),
        createColumn("BS2-OHPW", "BS2OHPW"),
        createColumn("BS2-OIPW", "BS2OIPW"),
        createColumn("BS2-OMPW", "BS2OMPW")
      ]),
      createColumnGroup("BioStation 2A", [
        createColumn("BS2A-ODPB", "BS2AODPB"),
        createColumn("BS2A-OAPWB", "BS2AOAPWB")
      ]),
      createColumnGroup("BioStation L2", [
        createColumn("BSL2-OE", "BSL2OE"),
        createColumn("BSL2-OM", "BSL2OM")
      ]),
      createColumnGroup("BioLite N2", [
        createColumn("BSL2-OE", "BLN2ODB"),
        createColumn("BLN2-ODB", "BLN2OAB"),
        createColumn("BLN2-PAB", "BLN2PAB")
      ]),
      createColumnGroup("BioEntry W2", [
        createColumn("BEW2-OHP", "BEW2OHP"),
        createColumn("BEW2-ODP", "BEW2ODP"),
        createColumn("BEW2-OAP", "BEW2OAP"),
        createColumn("BEW2-OHPB", "BEW2OHPB"),
        createColumn("BEW2-ODPB", "BEW2ODPB"),
        createColumn("BEW2-OAPB", "BEW2OAPB")
      ]),
      createColumnGroup("BioEntry P2", [
        createColumn("BEP2-OD", "BEP2OD"),
        createColumn("BEP2-OA", "BEP2OA")
      ]),
      createColumnGroup("X-Station 2 Finger", [
        createColumn("XS2-ODPB", "XS2ODPB"),
        createColumn("XS2-OAPB", "XS2OAPB")
      ]),
      createColumnGroup("BioLite Net", [
        createColumn("BLR-OC", "BLROC"),
        createColumn("BLN-OC", "BLNOC")
      ])
    ];
  }, [getLocale, customFormatter]);

  const groupHeader = useCallback((value, count) => {
    return getLocale(value.toLowerCase()) + " (" + count + ")";
  }, [getLocale]);

  useEffect(() => {
    if (tableRef.current && !tabulatorInstance.current) {
      tabulatorInstance.current = new Tabulator(tableRef.current, {
        height: "calc(100vh - 350px)",
        autoResize: false,
        data: data,
        layout: "fitDataFill",
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

  return (
    <div ref={tableRef} className={styles.tableContainer}></div>
  );
}

export function RenderTableFuncs({ data }) {
  const getLocale = useLocale();
  const customFormatter = useCustomLocaleFormatter();
  const tableRef = useRef(null);
  const tabulatorInstance = useRef(null);

  // 단순한 컬럼 정의를 메모이제이션
  const columns = useMemo(() => {
    const createColumn = (title, field) => ({
      title,
      field,
      width: 150,
      ...COMMON_COLUMN_PROPS,
      formatter: customFormatter
    });

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
      createColumn("BioStation A2", "BSA2"),
      createColumn("BioStation 2", "BS2"),
      createColumn("BioStation 2a", "BS2a"),
      createColumn("BioStation L2", "BSL2"),
      createColumn("BioLite N2", "BLN2"),
      createColumn("BioEntry W2", "BEW2"),
      createColumn("BioEntry P2", "BEP2"),
      createColumn("X-Station 2 Finger", "XS2F"),
      createColumn("BioLite Net", "BLNet")
    ];
  }, [getLocale, customFormatter]);

  const groupHeader = useCallback((value, count) => {
    return getLocale(value.toLowerCase()) + " (" + count + ")";
  }, [getLocale]);

  useEffect(() => {
    if (tableRef.current && !tabulatorInstance.current) {
      tabulatorInstance.current = new Tabulator(tableRef.current, {
        height: "calc(100vh - 350px)",
        data: data,
        layout:"fitDataFill",
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