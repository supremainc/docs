import React, { useRef, useEffect } from "react";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import  "tabulator-tables/dist/css/tabulator.min.css";
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../styles.module.css';
import fData from './supprted-functions.json';
import sData from './fingerprint-specs.json';
import Locale from '../resources.json';
import Admonition from '@theme/Admonition';

// 커스텀 Hook으로 getLocale 함수 제공
function useLocale() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  
  const getLocale = (id) => {
    return Locale[currentLocale]?.[id] || id;
  };
  
  return getLocale;
}

function RenderTableSpecs({ data }) {
  const getLocale = useLocale();
  const tableRef = useRef(null);
  
  var CustomLocale = function(cell, formatterParams, onRendered) {
    const value = cell.getValue();
    if (value === true) {
      return "✔️"; // 체크마크 문자
    } else if (value === false) {
      return "❌"; // X 마크 문자
    } else {
      return getLocale(value) || value;
    }
  }

  useEffect(() => {
    if (tableRef.current) {
      new Tabulator(tableRef.current, {
        // width: "80%",
        height: "100%",
        autoResize: false,
        data: data, // 테이블 데이터
        layout: "fitDataFill", // 레이아웃 형식
        groupBy: "category", // 그룹핑 필드
        groupHeader: function(value, count, data, group) {
          return getLocale(value.toLowerCase()) + " (" + count + ")";
        },
        columns: [
          { 
            title: getLocale("product_specs"), 
            field: "function", 
            hozAlign: "right", 
            headerHozAlign: "center", 
            headerVertical: false, 
            headerSort: false, 
            width: 180, 
            frozen: true,
            formatter: CustomLocale
          },
          {
            title: "BioStation A2",
            headerHozAlign: "center",
            columns: [
              { title: "BSA2-OEPW", field: "BSA2OEPW", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BSA2-OHPW", field: "BSA2OHPW", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BSA2-OIPW", field: "BSA2OIPW", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BSA2-OMPW", field: "BSA2OMPW", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale }
            ]
          },
          {
            title: "BioStation 2",
            headerHozAlign: "center",
            columns: [
              { title: "BS2-OEPW", field: "BS2OEPW", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BS2-OHPW", field: "BS2OHPW", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BS2-OIPW", field: "BS2OIPW", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BS2-OMPW", field: "BS2OMPW", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale }
            ]
          },
          {
            title: "BioStation 2A",
            headerHozAlign: "center",
            columns: [
              { title: "BS2A-ODPB", field: "BS2AODPB", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BS2A-OAPWB", field: "BS2AOAPWB", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale }
            ]
          },
          {
            title: "BioStation L2",
            headerHozAlign: "center",
            columns: [
              { title: "BSL2-OE", field: "BSL2OE", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BSL2-OM", field: "BSL2OM", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale }
            ]
          },
          {
            title: "BioLite N2",
            headerHozAlign: "center",
            columns: [
              { title: "BSL2-OE", field: "BLN2ODB", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BLN2-ODB", field: "BLN2OAB", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BLN2-PAB", field: "BLN2PAB", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale }
            ]
          },
          {
            title: "BioEntry W2",
            headerHozAlign: "center",
            columns: [
              { title: "BEW2-OHP", field: "BEW2OHP", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BEW2-ODP", field: "BEW2ODP", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BEW2-OAP", field: "BEW2OAP", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BEW2-OHPB", field: "BEW2OHPB", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BEW2-ODPB", field: "BEW2ODPB", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BEW2-OAPB", field: "BEW2OAPB", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale }
            ]
          },
          {
            title: "BioEntry P2",
            headerHozAlign: "center",
            columns: [
              { title: "BEP2-OD", field: "BEP2OD", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BEP2-OA", field: "BEP2OA", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale }
            ]
          },
          {
            title: "X-Station 2 Finger",
            headerHozAlign: "center",
            columns: [
              { title: "XS2-ODPB", field: "XS2ODPB", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "XS2-OAPB", field: "XS2OAPB", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale }
            ]
          },
          {
            title: "BioLite Net",
            headerHozAlign: "center",
            columns: [
              { title: "BLR-OC", field: "BLROC", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale },
              { title: "BLN-OC", field: "BLNOC", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, width: 120, formatter: CustomLocale }
            ]
          }
        ]
    })
  }}, [])

  return (
    <div ref={tableRef} className={styles.tableContainer}></div>
  );
}

function RenderTable({ data }) {
  const getLocale = useLocale();
  const tableRef = useRef(null);

  var CustomLocale = function(cell, formatterParams, onRendered) {
    const value = cell.getValue();
    if (value === true) {
      return "✔️"; // 체크마크 문자
    } else if (value === false) {
      return "❌"; // X 마크 문자
    } else {
      return getLocale(value) || value;
    }
  }

  useEffect(() => {
    if (tableRef.current) {
      new Tabulator(tableRef.current, {
        // width: "80%",
        height: "100%",
        autoResize: false,
        data: data, // 테이블 데이터
        layout: "fitDataTable", // 레이아웃 형식
        groupBy: "category", // 그룹핑 필드
        groupHeader: function(value, count, data, group) {
          return getLocale(value.toLowerCase()) + " (" + count + ")";
        },
        columns: [
          { 
            title: getLocale("main_function"), 
            field: "function", 
            hozAlign: "right", 
            headerHozAlign: "center", 
            headerVertical: false, 
            headerSort: false, 
            width: 180, 
            frozen: true,
            formatter: function(cell, formatterParams, onRendered) {
              const value = cell.getValue();
              return getLocale(value) || value;
            }
          },
          { title: "BioStation A2", field: "BSA2", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, formatter: CustomLocale },
          { title: "BioStation 2", field: "BS2", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, formatter: CustomLocale },
          { title: "BioStation 2a", field: "BS2a", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, formatter: CustomLocale },
          { title: "BioStation L2a", field: "BSL2", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, formatter: CustomLocale },
          { title: "BioLite N2", field: "BLN2", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, formatter: CustomLocale },
          { title: "BioEntry W2", field: "BEW2", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, formatter: CustomLocale },
          { title: "BioEntry P2", field: "BEP2", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, formatter: CustomLocale },
          { title: "X-Station 2 Finger", field: "XS2F", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, formatter: CustomLocale },
          { title: "BioLite Net", field: "BLNet", hozAlign: "center", headerHozAlign: "center", headerVertical:false, headerSort: false, formatter: CustomLocale }
        ],
      });
    }
  }, []);

  return <div ref={tableRef} className={styles.tableContainer}></div>;
}

export default function ProductCompares() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - 제품 비교: 지문 인식 장치`}
      description="Suprema 제품 비교 페이지입니다. 다양한 Suprema 제품의 기능을 비교할 수 있습니다."
    >
      <div className={styles.container}>
        <h1 className={styles.title}>지문 인식 장치 비교</h1>
        <p>🔶: 제품 세부 모델에 따라 지원 여부가 다를 수 있습니다.</p>
        <div className={styles.tableContainerBlock}>
          <RenderTable data={fData} />
        </div>
        <div className={styles.tableContainerBlock}>
          <RenderTableSpecs data={sData} />
        </div>
      </div>
    </Layout>
  );
}