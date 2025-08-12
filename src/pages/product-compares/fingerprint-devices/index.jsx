import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import  "tabulator-tables/dist/css/tabulator.min.css";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../styles.module.css';
import fData from './supported-functions.json';
import sData from './fingerprint-specs.json';
import Locale from '../resources.json';

// 공통 상수 정의
const COMMON_COLUMN_PROPS = {
  hozAlign: "center",
  headerHozAlign: "center", 
  headerVertical: false,
  headerSort: false,
  width: 120
};

const FROZEN_COLUMN_PROPS = {
  hozAlign: "right",
  headerHozAlign: "center",
  headerVertical: false,
  headerSort: false,
  width: 180,
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

function RenderTableSpecs({ data }) {
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
        height: "100%",
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

function RenderTableFuncs({ data }) {
  const getLocale = useLocale();
  const customFormatter = useCustomLocaleFormatter();
  const tableRef = useRef(null);
  const tabulatorInstance = useRef(null);

  // 단순한 컬럼 정의를 메모이제이션
  const columns = useMemo(() => {
    const createColumn = (title, field) => ({
      title,
      field,
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
        height: "100%",
        autoResize: false,
        data: data,
        layout: "fitDataTable",
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

export default function ProductCompares() {
  const { siteConfig } = useDocusaurusContext();
  const getLocale = useLocale();
  return (
    <Layout
      title={`${siteConfig.title} - 제품 비교: 지문 인식 장치`}
      description="Suprema 제품 비교 페이지입니다. 다양한 Suprema 제품의 기능을 비교할 수 있습니다."
    >
      <div className={styles.container}>
        <h1 className={styles.title}>{getLocale("fingerprint_title")}</h1>
        <h2 className={styles.subtitle}>{getLocale("main_function_compare")}</h2>
        <p>{getLocale("main_function_compare_note")}</p>
        <div className={styles.tableContainerBlock}>
          <RenderTableFuncs data={fData} />
        </div>
        <h2 className={styles.subtitle}>{getLocale("product_specs_compare")}</h2>
        <div className={styles.tableContainerBlock}>
          <RenderTableSpecs data={sData} />
        </div>
      </div>
    </Layout>
  );
}