"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["154"], {
41229: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_reference_compares_fingerprint_devices_funcs_mdx_4fc_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-reference-compares-fingerprint-devices-funcs-mdx-4fc.json
var site_docs_reference_compares_fingerprint_devices_funcs_mdx_4fc_namespaceObject = JSON.parse('{"id":"reference/compares/fingerprint-devices-funcs","title":"기능 비교","description":"","source":"@site/docs/reference/compares/fingerprint-devices-funcs.mdx","sourceDirName":"reference/compares","slug":"/reference/compares/fingerprint-devices-funcs","permalink":"/docs/reference/compares/fingerprint-devices-funcs","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/reference/compares/fingerprint-devices-funcs.mdx","tags":[],"version":"current","frontMatter":{"id":"fingerprint-devices-funcs","title":"기능 비교","hide_table_of_contents":true,"isTranslationMissing":false},"sidebar":"reference","previous":{"title":"용어집","permalink":"/docs/reference/glossary"},"next":{"title":"사양 비교","permalink":"/docs/reference/compares/fingerprint-devices-specs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
// EXTERNAL MODULE: ./src/pages/product-compares/fingerprint-devices/supported-functions.json
var supported_functions = __webpack_require__(91495);
// EXTERNAL MODULE: ./src/components/CompareTable/index.js
var CompareTable = __webpack_require__(9453);
;// CONCATENATED MODULE: ./docs/reference/compares/fingerprint-devices-funcs.mdx


const frontMatter = {
	id: 'fingerprint-devices-funcs',
	title: '기능 비교',
	hide_table_of_contents: true,
	isTranslationMissing: false
};
const contentTitle = '지문 인식 장치 기능 비교';

const assets = {

};





const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "지문-인식-장치-기능-비교",
        children: "지문 인식 장치 기능 비교"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(CompareTable/* RenderTableFuncs */.h, {
      data: supported_functions
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
30400: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (__WEBPACK_DEFAULT_EXPORT__)
});
// extracted by css-extract-rspack-plugin
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container_FDwQ","tableContainerBlock":"tableContainerBlock_ClQM","tableContainer":"tableContainer_AcIC","subtitle":"subtitle_skU6"});

}),
9453: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  f: () => (RenderTableSpecs),
  h: () => (RenderTableFuncs)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var tabulator_tables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15735);
/* ESM import */var tabulator_tables_dist_css_tabulator_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10409);
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2933);
/* ESM import */var _site_src_pages_product_compares_styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30400);
/* ESM import */var _site_src_pages_product_compares_resources_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72724);







// 공통 상수 정의
const COMMON_COLUMN_PROPS = {
    hozAlign: "center",
    headerHozAlign: "center",
    headerVertical: false,
    headerSort: false
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
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z)();
    const getLocale = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>{
        return _site_src_pages_product_compares_resources_json__WEBPACK_IMPORTED_MODULE_4__[currentLocale]?.[id] || id;
    }, [
        currentLocale
    ]);
    return getLocale;
}
// 공통 포매터 함수
function useCustomLocaleFormatter() {
    const getLocale = useLocale();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((cell)=>{
        const value = cell.getValue();
        if (value === true) {
            return "\u2714\uFE0F";
        } else if (value === false) {
            return "\u274C";
        } else {
            return getLocale(value) || value;
        }
    }, [
        getLocale
    ]);
}
function RenderTableSpecs(param) {
    let { data } = param;
    const getLocale = useLocale();
    const customFormatter = useCustomLocaleFormatter();
    const tableRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const tabulatorInstance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // 컬럼 정의를 메모이제이션
    const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const createColumn = (title, field)=>({
                title,
                field,
                ...COMMON_COLUMN_PROPS,
                width: 120,
                formatter: customFormatter
            });
        const createColumnGroup = (title, columns)=>({
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
    }, [
        getLocale,
        customFormatter
    ]);
    const groupHeader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value, count)=>{
        return getLocale(value.toLowerCase()) + " (" + count + ")";
    }, [
        getLocale
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (tableRef.current && !tabulatorInstance.current) {
            tabulatorInstance.current = new tabulator_tables__WEBPACK_IMPORTED_MODULE_5__/* .TabulatorFull */.Ae(tableRef.current, {
                height: "calc(100vh - 350px)",
                autoResize: false,
                data: data,
                layout: "fitDataFill",
                groupBy: "category",
                groupHeader,
                columns
            });
        }
        return ()=>{
            if (tabulatorInstance.current) {
                tabulatorInstance.current.destroy();
                tabulatorInstance.current = null;
            }
        };
    }, [
        data,
        columns,
        groupHeader
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: tableRef,
        className: _site_src_pages_product_compares_styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].tableContainer */.Z.tableContainer
    });
}
function RenderTableFuncs(param) {
    let { data } = param;
    const getLocale = useLocale();
    const customFormatter = useCustomLocaleFormatter();
    const tableRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const tabulatorInstance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // 단순한 컬럼 정의를 메모이제이션
    const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const createColumn = (title, field)=>({
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
                formatter: (cell)=>{
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
    }, [
        getLocale,
        customFormatter
    ]);
    const groupHeader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value, count)=>{
        return getLocale(value.toLowerCase()) + " (" + count + ")";
    }, [
        getLocale
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (tableRef.current && !tabulatorInstance.current) {
            tabulatorInstance.current = new tabulator_tables__WEBPACK_IMPORTED_MODULE_5__/* .TabulatorFull */.Ae(tableRef.current, {
                height: "calc(100vh - 350px)",
                data: data,
                layout: "fitDataFill",
                resizableColumnFit: true,
                groupBy: "category",
                groupHeader,
                columns
            });
        }
        return ()=>{
            if (tabulatorInstance.current) {
                tabulatorInstance.current.destroy();
                tabulatorInstance.current = null;
            }
        };
    }, [
        data,
        columns,
        groupHeader
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: tableRef,
        className: _site_src_pages_product_compares_styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].tableContainer */.Z.tableContainer
    });
}


}),
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


}),
91495: (function (module) {
module.exports = JSON.parse('[{"category":"credential","function":"face","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":false,"BLNet":false},{"category":"credential","function":"fingerprint","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":true},{"category":"credential","function":"rfid","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":true},{"category":"credential","function":"mobile","BSA2":"🔶","BS2":"🔶","BS2a":true,"BSL2":"🔶","BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":false},{"category":"credential","function":"pin","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":false,"BEP2":false,"XS2F":true,"BLNet":true},{"category":"credential","function":"sckeypad","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":true,"BLNet":false},{"category":"credential","function":"qr","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":true,"BLNet":false},{"category":"basic","function":"wd","BSA2":false,"BS2":true,"BS2a":true,"BSL2":false,"BLN2":true,"BEW2":true,"BEP2":false,"XS2F":true,"BLNet":true},{"category":"basic","function":"breakprevent","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":true,"BEP2":false,"XS2F":false,"BLNet":false},{"category":"basic","function":"credential-auth","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":true},{"category":"basic","function":"display","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":false,"BEP2":false,"XS2F":true,"BLNet":true},{"category":"basic","function":"keypad","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":false,"BEP2":false,"XS2F":true,"BLNet":true},{"category":"basic","function":"tcp-ip","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":true},{"category":"basic","function":"wifi","BSA2":true,"BS2":true,"BS2a":true,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":false,"BLNet":false},{"category":"basic","function":"rs485","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":true},{"category":"basic","function":"wiegand","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":true},{"category":"basic","function":"tamper","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":true},{"category":"advanced","function":"image-log","BSA2":true,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":true,"BLNet":false},{"category":"advanced","function":"fake-fingerprint-detection","BSA2":true,"BS2":false,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":false,"XS2F":true,"BLNet":false},{"category":"advanced","function":"fake-face-detection","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":false,"BLNet":false},{"category":"advanced","function":"face-detection","BSA2":true,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":true,"BLNet":false},{"category":"advanced","function":"intercom","BSA2":true,"BS2":true,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":false,"BLNet":false},{"category":"advanced","function":"poe","BSA2":true,"BS2":true,"BS2a":true,"BSL2":false,"BLN2":false,"BEW2":true,"BEP2":false,"XS2F":true,"BLNet":false},{"category":"advanced","function":"mullion-type","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":false,"BLNet":true},{"category":"advanced","function":"gang-box-type","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":false,"BLNet":false},{"category":"advanced","function":"multi-card-reading","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":false}]')

}),
72724: (function (module) {
module.exports = JSON.parse('{"ko":{"fingerprint_title":"지문 인식 장치 비교","main_function":"주요 기능","main_function_compare":"주요 기능 비교","main_function_compare_note":"🔶: 제품 세부 모델에 따라 지원 여부가 다를 수 있습니다.","product_specs":"제품 사양","product_specs_compare":"제품 사양 비교","credential":"크리덴셜","face":"얼굴","fingerprint":"지문","rfid":"RFID","mobile":"모바일 카드","pin":"PIN","sckeypad":"스크램블 키패드(PIN)","qr":"QR/바코드","basic":"기본","wd":"방수 방진","breakprevent":"파손 방지","credential-auth":"크리덴셜 인증","display":"디스플레이","keypad":"키패드","tcp-ip":"TCP/IP","wifi":"Wi-Fi","rs485":"RS-485","rs485-protocol":"RS-485 통신 프로토콜","wiegand":"Wiegand","tamper":"탬퍼","advanced":"고급","image-log":"이미지 로그","fake-fingerprint-detection":"위조 지문 검출","fake-face-detection":"위조 얼굴 검출","face-detection":"얼굴 검출","intercom":"인터폰","poe":"PoE","mullion-type":"멀리온 타입","gang-box-type":"갱 박스 타입","multi-card-reading":"멀티 카드 읽기","rfoption":"RF 옵션","protectlevel":"보호 등급","template":"템플릿","detection":"추출 / 매치","supportExcept":"지원, 별도의 장치 라이선스가 필요합니다.","minex":"MINEX 인증 및 호환","supportSW":"지원 (SW 기반)","supportSWHW":"지원 (HW + SW 기반)","storage":"저장 용량","maxUser":"최대 사용자 수","maxCred1onN":"최대 크리덴셜 수(1:N)","finger100":"지문: 100,000","finger20":"지문: 20,000","finger10":"지문: 10,000","finger5":"지문: 5,000","maxCred1on1":"최대 크리덴셜 수(1:1)","cred500":"지문: 500,000 / 카드: 500,000 / PIN: 500,000","cred2t500":"지문: 500,000 / 카드: 500,000","cred10":"지문: 10,000 / 카드: 10,000 / PIN: 10,000","cred2t10":"지문: 10,000 / 카드: 10,000","cred5":"지문: 5,000 / 카드: 5,000 /<br/>PIN: 5,000","maxTextLog":"최대 텍스트 로그 수","maxImageLog":"최대 이미지 로그 수","general":"일반","cryptochip":"크립토 칩","resolution":"화면 해상도","multiColor":"다중 색상","sound":"소리","echoCancle":"24 bit/Voice DSP (에코 캔슬)","multiToneBuzzer":"멀티톤 버저","operating-temperature":"동작 온도","storage-temperature":"보관 온도","operating-humidity":"동작 습도","operating-humidity-spec":"0% ~ 80%, 비응축","storage-humidity":"보관 습도","storage-humidity-spec":"0% ~ 90%, 비응축","weight":"무게","d440b89":"장치: 440g, 브래킷: 89g (와셔 및 볼트 포함)","d440b130":"장치: 440g, 브래킷: 130g (와셔 및 스크류 포함)","d429b142":"장치: 429g, 브래킷: 142g (와셔 및 볼트 포함)","d280b61":"장치: 280g, 브래킷: 61g (와셔 및 볼트 포함)","d255b57":"장치: 255g, 브래킷: 57g (와셔 및 볼트 포함)","d251b43":"장치: 251g, 브래킷: 43g (와셔 및 볼트 포함)","d162b39":"장치: 162g, 브래킷: 39g (와셔 및 볼트 포함)","d375b86":"장치: 375g, 브래킷: 86g (와셔 및 볼트 포함)","d242b59":"장치: 242g, 브래킷: 59g (와셔 및 볼트 포함)","dimension":"치수 (WxHxD, mm)","interface":"인터페이스","ethernet":"이더넷","ethernet-spec":"10/100 Mbps, 자동 MDI/MDI-X","networkprotocol":"네트워크 프로토콜","1chmasterslave":"1채널 마스터/슬레이브 (선택 가능)","osdpv2":"OSDP V2 호환","1chin1chout":"1채널 입력, 1채널 출력","1chin1choutopt1":"1채널 입력/출력 (선택 가능)","1chin1choutopt2":"1채널 입력/1채널 출력 (선택 가능)","2chinput":"2채널 입력","2chinout":"2채널 입력, 2채널 출력","3chinput":"3채널 입력","relay":"릴레이","1relay":"1 릴레이","2relay":"2 릴레이","ieee8023af":"IEEE 802.3af 호환","sdcard":"SD 카드","microSD":"microSD 카드 (최대 32 GB)","electric":"전기 규격","power":"전원","p12ve1a":"전압: 12 Vdc, 전류: 최대 1 A","p12ve8a":"전압: 12 Vdc, 전류: 최대 0.8 A","p12ve8a24v4a":"전압: 12 Vdc, 전류: 최대 0.8 A / 전압: 24 Vdc , 전류: 최대 0.4 A","p12ve8a24v5a":"전압: 12 Vdc, 전류: 최대 0.8 A / 전압: 24 Vdc , 전류: 최대 0.5 A","p12ve5a":"전압: 12 Vdc, 전류: 최대 0.5 A","p12ve4a":"전압: 12 Vdc, 전류: 최대 0.4 A","p12ve3a":"전압: 12 Vdc, 전류: 최대 0.3 A","p12ve2a":"전압: 12 Vdc, 전류: 최대 0.2 A"},"en":{"fingerprint_title":"Compare Fingerprint Recognition Devices","main_function":"Main Function","main_function_compare":"Compare main functions","main_function_compare_note":"🔶: Support may vary depending on the specific product model.","product_specs":"Product specifications","product_specs_compare":"Compare product specifications","credential":"Credential","face":"Face","fingerprint":"Fingerprint","rfid":"RFID","mobile":"Mobile card","pin":"PIN","sckeypad":"Scramble Keypad (PIN)","qr":"QR/Barcode","basic":"Basic","wd":"Waterproof/Dustproof","breakprevent":"Break prevent","credential-auth":"Credential authentication","display":"Display","keypad":"Keypad","tcp-ip":"TCP/IP","wifi":"Wi-Fi","rs485":"RS-485","rs485-protocol":"RS-485 communication protocol","wiegand":"Wiegand","tamper":"Tamper","advanced":"Advanced","image-log":"Image log","fake-fingerprint-detection":"Fake fingerprint detection","fake-face-detection":"Fake face detection","face-detection":"Face detection","intercom":"Intercom","poe":"PoE","mullion-type":"Mullion type","gang-box-type":"Gang box type","multi-card-reading":"Multi card reading","rfoption":"RF option","protectlevel":"Protection Level","detection":"Detection / Match","supportExcept":"Support, a separate device license is required.","minex":"MINEX certified and compatible","supportSW":"Support (Based SW)","supportSWHW":"Support (Based HW, SW)","storage":"Storage size","maxUser":"Maximum user count","maxCred1onN":"Maximum credential count (1:N)","finger100":"Fingerprint: 100,000","finger20":"Fingerprint: 20,000","finger10":"Fingerprint: 10,000","finger5":"Fingerprint: 5,000","maxCred1on1":"Maximum credential count (1:1)","cred500":"Fingerprint: 500,000 / Card: 500,000 / PIN: 500,000","cred2t500":"Fingerprint: 500,000 / Card: 500,000","cred10":"Fingerprint: 10,000 / Card: 10,000 / PIN: 10,000","cred2t10":"Fingerprint: 10,000 / Card: 10,000","cred5":"Fingerprint: 5,000 / Card: 5,000 /<br/>PIN: 5,000","maxTextLog":"Maximum text log count","maxImageLog":"Maximum image log count","general":"General","cryptochip":"Crypto chip","resolution":"Screen resolution","multiColor":"Multi-color","sound":"Sound","echoCancle":"24 bit/Voice DSP (echo cancellation)","multiToneBuzzer":"Multi-tone buzzer","operating-temperature":"Operating temperature","storage-temperature":"Storage temperature","operating-humidity":"Operating humidity","operating-humidity-spec":"0% ~ 80%, non-condensing","storage-humidity":"Storage humidity","storage-humidity-spec":"0% ~ 90%, non-condensing","weight":"Weight","d440b89":"Device: 440g, Bracket: 89g (Including washer and bolt)","d440b130":"Device: 440g, Bracket: 130g (Including washer and screw)","d429b142":"Device: 429g, Bracket: 142g (Including washer and bolt)","d280b61":"Device: 280g, Bracket: 61g (Including washer and bolt)","d255b57":"Device: 255g, Bracket: 57g (Including washer and bolt)","d251b43":"Device: 251g, Bracket: 43g (Including washer and bolt)","d162b39":"Device: 162g, Bracket: 39g (Including washer and bolt)","d375b86":"Device: 375g, Bracket: 86g (Including washer and bolt)","d242b59":"Device: 242g, Bracket: 59g (Including washer and bolt)","dimension":"Dimension (WxHxD, mm)","interface":"Interface","ethernet":"Ethernet","ethernet-spec":"10/100 Mbps, auto MDI/MDI-X","networkprotocol":"Network Protocol","1chmasterslave":"1ch Host or Slave (selectable)","osdpv2":"OSDP V2 compliant","1chin1chout":"1ch input, 1ch output","1chin1choutopt1":"1ch input/output (selectable)","1chin1choutopt2":"1ch input/1ch output (selectable)","2chinput":"2ch input","2chinout":"2ch inputs, 2ch outputs","3chinput":"3ch inputs","relay":"Relay","1relay":"1 Relay","2relay":"2 Relay","ieee8023af":"IEEE 802.3af compliant","sdcard":"SD card","microSD":"microSD card (Supports up to 32 GB)","electric":"Electrical","power":"Power","p12ve1a":"Voltage: 12 Vdc, Current: Max. 1 A","p12ve8a":"Voltage: 12 Vdc, Current: Max. 0.8 A","p12ve8a24v4a":"Voltage: 12, Vdc Current: Max. 0.8 A / Voltage: 24 Vdc, Current: Max. 0.4 A","p12ve8a24v5a":"Voltage: 12 Vdc, Current: Max. 0.8 A / Voltage: 24 Vdc, Current: Max. 0.5 A","p12ve5a":"Voltage: 12 Vdc, Current: Max. 0.5 A","p12ve4a":"Voltage: 12 Vdc, Current: Max. 0.4 A","p12ve3a":"Voltage: 12 Vdc, Current: Max. 0.3 A","p12ve2a":"Voltage: 12 Vdc, Current: Max. 0.2 A"}}')

}),

}]);