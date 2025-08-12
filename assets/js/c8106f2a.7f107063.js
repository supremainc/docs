"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1986"], {
30400: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (__WEBPACK_DEFAULT_EXPORT__)
});
// extracted by css-extract-rspack-plugin
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"container_FDwQ","tableContainerBlock":"tableContainerBlock_ClQM","tableContainer":"tableContainer_AcIC","subtitle":"subtitle_skU6"});

}),
23745: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (ProductCompares)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var tabulator_tables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15735);
/* ESM import */var tabulator_tables_dist_css_tabulator_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10409);
/* ESM import */var _theme_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21986);
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2933);
/* ESM import */var _styles_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30400);
/* ESM import */var _supported_functions_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91495);
/* ESM import */var _fingerprint_specs_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82861);
/* ESM import */var _resources_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72724);










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
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z)();
    const getLocale = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>{
        return _resources_json__WEBPACK_IMPORTED_MODULE_7__[currentLocale]?.[id] || id;
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
            tabulatorInstance.current = new tabulator_tables__WEBPACK_IMPORTED_MODULE_8__/* .TabulatorFull */.Ae(tableRef.current, {
                height: "100%",
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
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_9__/* ["default"].tableContainer */.Z.tableContainer
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
            tabulatorInstance.current = new tabulator_tables__WEBPACK_IMPORTED_MODULE_8__/* .TabulatorFull */.Ae(tableRef.current, {
                height: "100%",
                autoResize: false,
                data: data,
                layout: "fitDataTable",
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
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_9__/* ["default"].tableContainer */.Z.tableContainer
    });
}
function ProductCompares() {
    const { siteConfig } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z)();
    const getLocale = useLocale();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z, {
        title: `${siteConfig.title} - \u{C81C}\u{D488} \u{BE44}\u{AD50}: \u{C9C0}\u{BB38} \u{C778}\u{C2DD} \u{C7A5}\u{CE58}`,
        description: "Suprema \uC81C\uD488 \uBE44\uAD50 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4. \uB2E4\uC591\uD55C Suprema \uC81C\uD488\uC758 \uAE30\uB2A5\uC744 \uBE44\uAD50\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: _styles_module_css__WEBPACK_IMPORTED_MODULE_9__/* ["default"].container */.Z.container,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_9__/* ["default"].title */.Z.title,
                    children: getLocale("fingerprint_title")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_9__/* ["default"].subtitle */.Z.subtitle,
                    children: getLocale("main_function_compare")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                    children: getLocale("main_function_compare_note")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_9__/* ["default"].tableContainerBlock */.Z.tableContainerBlock,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RenderTableFuncs, {
                        data: _supported_functions_json__WEBPACK_IMPORTED_MODULE_5__
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_9__/* ["default"].subtitle */.Z.subtitle,
                    children: getLocale("product_specs_compare")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_9__/* ["default"].tableContainerBlock */.Z.tableContainerBlock,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RenderTableSpecs, {
                        data: _fingerprint_specs_json__WEBPACK_IMPORTED_MODULE_6__
                    })
                })
            ]
        })
    });
}


}),
82861: (function (module) {
module.exports = JSON.parse('[{"category":"rfid","function":"rfoption","BSA2OEPW":"125kHz EM","BSA2OHPW":"125kHz EM, HID Prox","BSA2OIPW":"13.56MHz iCLASS SE/SR/Seos","BSA2OMPW":"13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BS2OEPW":"125kHz EM","BS2OHPW":"125kHz HID Prox","BS2OIPW":"13.56MHz iCLASS SE/SR/Seos","BS2OMPW":"13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BS2AODPB":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BS2AOAPWB":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, iCLASS SE/SR/Seos, FeliCa","BSL2OE":"125kHz EM","BSL2OM":"13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BLN2ODB":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BLN2OAB":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa, iCLASS SE/SR/Seos","BLN2PAB":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa, iCLASS SE/SR/Seos","BEW2OHP":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BEW2ODP":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BEW2OAP":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa, iCLASS SE/SR/Seos","BEW2OHPB":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BEW2ODPB":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BEW2OAPB":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa, iCLASS SE/SR/Seos","BEP2OD":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","BEP2OA":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa, iCLASS SE/SR/Seos","XS2ODPB":"125kHz EM & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa","XS2OAPB":"125kHz EM, HID Prox & 13.56MHz MIFARE, MIFARE Plus, DESFire, DESFire EV1/EV2/EV3, FeliCa, iCLASS SE/SR/Seos","BLROC":"125kHz EM","BLNOC":"13.56MHz MIFARE, MIFARE Plus, DESFire/EV1(CSN)"},{"category":"rfid","function":"mobile","BSA2OEPW":false,"BSA2OHPW":false,"BSA2OIPW":"NFC","BSA2OMPW":"NFC","BS2OEPW":false,"BS2OHPW":false,"BS2OIPW":"NFC","BS2OMPW":"NFC","BS2AODPB":"NFC, BLE","BS2AOAPWB":"NFC, BLE","BSL2OE":false,"BSL2OM":"NFC","BLN2ODB":"NFC, BLE","BLN2OAB":"NFC, BLE","BLN2PAB":"NFC, BLE","BEW2OHP":"NFC","BEW2ODP":"NFC","BEW2OAP":"NFC","BEW2OHPB":"NFC, BLE","BEW2ODPB":"NFC, BLE","BEW2OAPB":"NFC, BLE","BEP2OD":"NFC","BEP2OA":"NFC","XS2ODPB":"NFC, BLE","XS2OAPB":"NFC, BLE","BLROC":false,"BLNOC":false},{"category":"rfid","function":"sckeypad","BSA2OEPW":false,"BSA2OHPW":false,"BSA2OIPW":false,"BSA2OMPW":false,"BS2OEPW":false,"BS2OHPW":false,"BS2OIPW":false,"BS2OMPW":false,"BS2AODPB":false,"BS2AOAPWB":false,"BSL2OE":false,"BSL2OM":false,"BLN2ODB":false,"BLN2OAB":false,"BLN2PAB":false,"BEW2OHP":false,"BEW2ODP":false,"BEW2OAP":false,"BEW2OHPB":false,"BEW2ODPB":false,"BEW2OAPB":false,"BEP2OD":false,"BEP2OA":false,"XS2ODPB":true,"XS2OAPB":true,"BLROC":false,"BLNOC":false},{"category":"rfid","function":"qr","BSA2OEPW":false,"BSA2OHPW":false,"BSA2OIPW":false,"BSA2OMPW":false,"BS2OEPW":false,"BS2OHPW":false,"BS2OIPW":false,"BS2OMPW":false,"BS2AODPB":false,"BS2AOAPWB":false,"BSL2OE":false,"BSL2OM":false,"BLN2ODB":false,"BLN2OAB":false,"BLN2PAB":false,"BEW2OHP":false,"BEW2ODP":false,"BEW2OAP":false,"BEW2OHPB":false,"BEW2ODPB":false,"BEW2OAPB":false,"BEP2OD":false,"BEP2OA":false,"XS2ODPB":"supportExcept","XS2OAPB":"supportExcept","BLROC":false,"BLNOC":false},{"category":"protectlevel","function":"wd","BSA2OEPW":false,"BSA2OHPW":false,"BSA2OIPW":false,"BSA2OMPW":false,"BS2OEPW":"IP65","BS2OHPW":"IP65","BS2OIPW":"IP65","BS2OMPW":"IP65","BS2AODPB":"IP65","BS2AOAPWB":"IP65","BSL2OE":false,"BSL2OM":false,"BLN2ODB":"IP67","BLN2OAB":"IP67","BLN2PAB":"IP67","BEW2OHP":"IP67","BEW2ODP":"IP67","BEW2OAP":"IP67","BEW2OHPB":"IP67","BEW2ODPB":"IP67","BEW2OAPB":"IP67","BEP2OD":false,"BEP2OA":false,"XS2ODPB":"IP65","XS2OAPB":"IP65","BLROC":"IP65","BLNOC":"IP65"},{"category":"protectlevel","function":"breakprevent","BSA2OEPW":false,"BSA2OHPW":false,"BSA2OIPW":false,"BSA2OMPW":false,"BS2OEPW":false,"BS2OHPW":false,"BS2OIPW":false,"BS2OMPW":false,"BS2AODPB":false,"BS2AOAPWB":false,"BSL2OE":false,"BSL2OM":false,"BLN2ODB":false,"BLN2OAB":false,"BLN2PAB":false,"BEW2OHP":"IK09","BEW2ODP":"IK09","BEW2OAP":"IK09","BEW2OHPB":"IK09","BEW2ODPB":"IK09","BEW2OAPB":"IK09","BEP2OD":false,"BEP2OA":false,"XS2ODPB":false,"XS2OAPB":false,"BLROC":false,"BLNOC":false},{"category":"fingerprint","function":"template","BSA2OEPW":"SUPREMA / ISO 19794-2 / ANSI 378","BSA2OHPW":"SUPREMA / ISO 19794-2 / ANSI 378","BSA2OIPW":"SUPREMA / ISO 19794-2 / ANSI 378","BSA2OMPW":"SUPREMA / ISO 19794-2 / ANSI 378","BS2OEPW":"SUPREMA / ISO 19794-2 / ANSI 378","BS2OHPW":"SUPREMA / ISO 19794-2 / ANSI 378","BS2OIPW":"SUPREMA / ISO 19794-2 / ANSI 378","BS2OMPW":"SUPREMA / ISO 19794-2 / ANSI 378","BS2AODPB":"SUPREMA / ISO 19794-2 / ANSI 378","BS2AOAPWB":"SUPREMA / ISO 19794-2 / ANSI 378","BSL2OE":"SUPREMA / ISO 19794-2 / ANSI 378","BSL2OM":"SUPREMA / ISO 19794-2 / ANSI 378","BLN2ODB":"SUPREMA / ISO 19794-2 / ANSI 378","BLN2OAB":"SUPREMA / ISO 19794-2 / ANSI 378","BLN2PAB":"SUPREMA / ISO 19794-2 / ANSI 378","BEW2OHP":"SUPREMA / ISO 19794-2 / ANSI 378","BEW2ODP":"SUPREMA / ISO 19794-2 / ANSI 378","BEW2OAP":"SUPREMA / ISO 19794-2 / ANSI 378","BEW2OHPB":"SUPREMA / ISO 19794-2 / ANSI 378","BEW2ODPB":"SUPREMA / ISO 19794-2 / ANSI 378","BEW2OAPB":"SUPREMA / ISO 19794-2 / ANSI 378","BEP2OD":"SUPREMA / ISO 19794-2 / ANSI 378","BEP2OA":"SUPREMA / ISO 19794-2 / ANSI 378","XS2ODPB":"SUPREMA / ISO 19794-2 / ANSI 378","XS2OAPB":"SUPREMA / ISO 19794-2 / ANSI 378","BLROC":"SUPREMA / ISO 19794-2 / ANSI 378","BLNOC":"SUPREMA / ISO 19794-2 / ANSI 378"},{"category":"fingerprint","function":"detection","BSA2OEPW":"minex","BSA2OHPW":"minex","BSA2OIPW":"minex","BSA2OMPW":"minex","BS2OEPW":"minex","BS2OHPW":"minex","BS2OIPW":"minex","BS2OMPW":"minex","BS2AODPB":"minex","BS2AOAPWB":"minex","BSL2OE":"minex","BSL2OM":"minex","BLN2ODB":"minex","BLN2OAB":"minex","BLN2PAB":"minex","BEW2OHP":"minex","BEW2ODP":"minex","BEW2OAP":"minex","BEW2OHPB":"minex","BEW2ODPB":"minex","BEW2OAPB":"minex","BEP2OD":"minex","BEP2OA":"minex","XS2ODPB":"minex","XS2OAPB":"minex","BLROC":"minex","BLNOC":"minex"},{"category":"fingerprint","function":"fake-fingerprint-detection","BSA2OEPW":true,"BSA2OHPW":true,"BSA2OIPW":true,"BSA2OMPW":true,"BS2OEPW":false,"BS2OHPW":false,"BS2OIPW":false,"BS2OMPW":false,"BS2AODPB":"supportSW","BS2AOAPWB":"supportSW","BSL2OE":true,"BSL2OM":true,"BLN2ODB":"supportSW","BLN2OAB":"supportSW","BLN2PAB":"supportSW","BEW2OHP":true,"BEW2ODP":true,"BEW2OAP":true,"BEW2OHPB":"supportSWHW","BEW2ODPB":"supportSWHW","BEW2OAPB":"supportSWHW","BEP2OD":"supportSW","BEP2OA":"supportSW","XS2ODPB":"supportSW","XS2OAPB":"supportSW","BLROC":false,"BLNOC":false},{"category":"storage","function":"maxUser","BSA2OEPW":"500,000","BSA2OHPW":"500,000","BSA2OIPW":"500,000","BSA2OMPW":"500,000","BS2OEPW":"500,000","BS2OHPW":"500,000","BS2OIPW":"500,000","BS2OMPW":"500,000","BS2AODPB":"500,000","BS2AOAPWB":"500,000","BSL2OE":"500,000","BSL2OM":"500,000","BLN2ODB":"10,000","BLN2OAB":"10,000","BLN2PAB":"10,000","BEW2OHP":"500,000","BEW2ODP":"500,000","BEW2OAP":"500,000","BEW2OHPB":"500,000","BEW2ODPB":"500,000","BEW2OAPB":"500,000","BEP2OD":"10,000","BEP2OA":"10,000","XS2ODPB":"500,000","XS2OAPB":"500,000","BLROC":"5,000","BLNOC":"5,000"},{"category":"storage","function":"maxCred1onN","BSA2OEPW":"finger100","BSA2OHPW":"finger100","BSA2OIPW":"finger100","BSA2OMPW":"finger100","BS2OEPW":"finger20","BS2OHPW":"finger20","BS2OIPW":"finger20","BS2OMPW":"finger20","BS2AODPB":"finger100","BS2AOAPWB":"finger100","BSL2OE":"finger100","BSL2OM":"finger100","BLN2ODB":"finger10","BLN2OAB":"finger10","BLN2PAB":"finger10","BEW2OHP":"finger100","BEW2ODP":"finger100","BEW2OAP":"finger100","BEW2OHPB":"finger100","BEW2ODPB":"finger100","BEW2OAPB":"finger100","BEP2OD":"finger10","BEP2OA":"finger10","XS2ODPB":"finger100","XS2OAPB":"finger100","BLROC":"finger5","BLNOC":"finger5"},{"category":"storage","function":"maxCred1on1","BSA2OEPW":"cred500","BSA2OHPW":"cred500","BSA2OIPW":"cred500","BSA2OMPW":"cred500","BS2OEPW":"cred500","BS2OHPW":"cred500","BS2OIPW":"cred500","BS2OMPW":"cred500","BS2AODPB":"cred500","BS2AOAPWB":"cred500","BSL2OE":"cred500","BSL2OM":"cred500","BLN2ODB":"cred10","BLN2OAB":"cred10","BLN2PAB":"cred10","BEW2OHP":"cred2t500","BEW2ODP":"cred2t500","BEW2OAP":"cred2t500","BEW2OHPB":"cred2t500","BEW2ODPB":"cred2t500","BEW2OAPB":"cred2t500","BEP2OD":"cred2t10","BEP2OA":"cred2t10","XS2ODPB":"cred500","XS2OAPB":"cred500","BLROC":"cred5","BLNOC":"cred5"},{"category":"storage","function":"maxTextLog","BSA2OEPW":"5,000,000","BSA2OHPW":"5,000,000","BSA2OIPW":"5,000,000","BSA2OMPW":"5,000,000","BS2OEPW":"3,000,000","BS2OHPW":"3,000,000","BS2OIPW":"3,000,000","BS2OMPW":"3,000,000","BS2AODPB":"5,000,000","BS2AOAPWB":"5,000,000","BSL2OE":"1,000,000","BSL2OM":"1,000,000","BLN2ODB":"1,000,000","BLN2OAB":"1,000,000","BLN2PAB":"1,000,000","BEW2OHP":"1,000,000","BEW2ODP":"1,000,000","BEW2OAP":"1,000,000","BEW2OHPB":"1,000,000","BEW2ODPB":"1,000,000","BEW2OAPB":"1,000,000","BEP2OD":"1,000,000","BEP2OA":"1,000,000","XS2ODPB":"5,000,000","XS2OAPB":"5,000,000","BLROC":"50,000","BLNOC":"50,000"},{"category":"storage","function":"maxImageLog","BSA2OEPW":"50,000","BSA2OHPW":"50,000","BSA2OIPW":"50,000","BSA2OMPW":"50,000","BS2OEPW":false,"BS2OHPW":false,"BS2OIPW":false,"BS2OMPW":false,"BS2AODPB":false,"BS2AOAPWB":false,"BSL2OE":false,"BSL2OM":false,"BLN2ODB":false,"BLN2OAB":false,"BLN2PAB":false,"BEW2OHP":false,"BEW2ODP":false,"BEW2OAP":false,"BEW2OHPB":false,"BEW2ODPB":false,"BEW2OAPB":false,"BEP2OD":false,"BEP2OA":false,"XS2ODPB":"50,000","XS2OAPB":"50,000","BLROC":false,"BLNOC":false},{"category":"general","function":"CPU","BSA2OEPW":"1.0 GHz Quad Core","BSA2OHPW":"1.0 GHz Quad Core","BSA2OIPW":"1.0 GHz Quad Core","BSA2OMPW":"1.0 GHz Quad Core","BS2OEPW":"1.0 GHz","BS2OHPW":"1.0 GHz","BS2OIPW":"1.0 GHz","BS2OMPW":"1.0 GHz","BS2AODPB":"1.5 GHz Quad Core","BS2AOAPWB":"1.5 GHz Quad Core","BSL2OE":"1.2 GHz Quad Core","BSL2OM":"1.2 GHz Quad Core","BLN2ODB":"1.2 GHz","BLN2OAB":"1.2 GHz","BLN2PAB":"1.2 GHz","BEW2OHP":"1.2 GHz Quad Core","BEW2ODP":"1.2 GHz Quad Core","BEW2OAP":"1.2 GHz Quad Core","BEW2OHPB":"1.2 GHz Quad Core","BEW2ODPB":"1.2 GHz Quad Core","BEW2OAPB":"1.2 GHz Quad Core","BEP2OD":"1.0 GHz ","BEP2OA":"1.0 GHz ","XS2ODPB":"1.5 GHz Quad Core","XS2OAPB":"1.5 GHz Quad Core","BLROC":"533MHz DSP","BLNOC":"533MHz DSP"},{"category":"general","function":"Memory","BSA2OEPW":"8 GB Flash + 1 GB RAM","BSA2OHPW":"8 GB Flash + 1 GB RAM","BSA2OIPW":"8 GB Flash + 1 GB RAM","BSA2OMPW":"8 GB Flash + 1 GB RAM","BS2OEPW":"8 GB Flash + 256 MB RAM","BS2OHPW":"8 GB Flash + 256 MB RAM","BS2OIPW":"8 GB Flash + 256 MB RAM","BS2OMPW":"8 GB Flash + 256 MB RAM","BS2AODPB":"16 GB Flash + 2 GB RAM","BS2AOAPWB":"16 GB Flash + 2 GB RAM","BSL2OE":"2 GB Flash + 256 MB RAM","BSL2OM":"2 GB Flash + 256 MB RAM","BLN2ODB":"4 GB Flash + 64 Mb RAM","BLN2OAB":"4 GB Flash + 64 Mb RAM","BLN2PAB":"4 GB Flash + 64 Mb RAM","BEW2OHP":"2 GB Flash + 256 MB RAM","BEW2ODP":"2 GB Flash + 256 MB RAM","BEW2OAP":"2 GB Flash + 256 MB RAM","BEW2OHPB":"2 GB Flash + 256 MB RAM","BEW2ODPB":"2 GB Flash + 256 MB RAM","BEW2OAPB":"2 GB Flash + 256 MB RAM","BEP2OD":"8 GB Flash + 64 MB RAM","BEP2OA":"8 GB Flash + 64 MB RAM","XS2ODPB":"16 GB Flash + 1 GB RAM","XS2OAPB":"16 GB Flash + 1 GB RAM","BLROC":"16 MB RAM + 8 MB Flash","BLNOC":"16 MB RAM + 8 MB Flash"},{"category":"general","function":"cryptochip","BSA2OEPW":true,"BSA2OHPW":true,"BSA2OIPW":true,"BSA2OMPW":true,"BS2OEPW":true,"BS2OHPW":true,"BS2OIPW":true,"BS2OMPW":true,"BS2AODPB":true,"BS2AOAPWB":true,"BSL2OE":true,"BSL2OM":true,"BLN2ODB":true,"BLN2OAB":true,"BLN2PAB":true,"BEW2OHP":true,"BEW2ODP":true,"BEW2OAP":true,"BEW2OHPB":true,"BEW2ODPB":true,"BEW2OAPB":true,"BEP2OD":true,"BEP2OA":true,"XS2ODPB":true,"XS2OAPB":true,"BLROC":true,"BLNOC":true},{"category":"general","function":"display","BSA2OEPW":"5\\" color TFT touch","BSA2OHPW":"5\\" color TFT touch","BSA2OIPW":"5\\" color TFT touch","BSA2OMPW":"5\\" color TFT touch","BS2OEPW":"2.8\\" color TFT LCD","BS2OHPW":"2.8\\" color TFT LCD","BS2OIPW":"2.8\\" color TFT LCD","BS2OMPW":"2.8\\" color TFT LCD","BS2AODPB":"2.8\\" color TFT LCD","BS2AOAPWB":"2.8\\" color TFT LCD","BSL2OE":"2\\" color TFT LCD","BSL2OM":"2\\" color TFT LCD","BLN2ODB":"1.77\\" color TFT LCD","BLN2OAB":"1.77\\" color TFT LCD","BLN2PAB":"1.77\\" color TFT LCD","BEW2OHP":false,"BEW2ODP":false,"BEW2OAP":false,"BEW2OHPB":false,"BEW2ODPB":false,"BEW2OAPB":false,"BEP2OD":false,"BEP2OA":false,"XS2ODPB":"4\\" IPS color LCD","XS2OAPB":"4\\" IPS color LCD","BLROC":"128 x 64 Graphic LCD (Monochrome)","BLNOC":"128 x 64 Graphic LCD (Monochrome)"},{"category":"general","function":"resolution","BSA2OEPW":"480 x 854 pixels","BSA2OHPW":"480 x 854 pixels","BSA2OIPW":"480 x 854 pixels","BSA2OMPW":"480 x 854 pixels","BS2OEPW":"320 x 240 pixels","BS2OHPW":"320 x 240 pixels","BS2OIPW":"320 x 240 pixels","BS2OMPW":"320 x 240 pixels","BS2AODPB":"320 x 240 pixels","BS2AOAPWB":"320 x 240 pixels","BSL2OE":"220 x 176 pixels","BSL2OM":"220 x 176 pixels","BLN2ODB":"160 x 128 pixels","BLN2OAB":"160 x 128 pixels","BLN2PAB":"160 x 128 pixels","BEW2OHP":false,"BEW2ODP":false,"BEW2OAP":false,"BEW2OHPB":false,"BEW2ODPB":false,"BEW2OAPB":false,"BEP2OD":false,"BEP2OA":false,"XS2ODPB":"480 x 800 pixels","XS2OAPB":"480 x 800 pixels","BLROC":"128 x 64 pixels","BLNOC":"128 x 64 pixels"},{"category":"general","function":"LED","BSA2OEPW":"multiColor","BSA2OHPW":"multiColor","BSA2OIPW":"multiColor","BSA2OMPW":"multiColor","BS2OEPW":"multiColor","BS2OHPW":"multiColor","BS2OIPW":"multiColor","BS2OMPW":"multiColor","BS2AODPB":"multiColor","BS2AOAPWB":"multiColor","BSL2OE":false,"BSL2OM":false,"BLN2ODB":false,"BLN2OAB":false,"BLN2PAB":false,"BEW2OHP":"multiColor","BEW2ODP":"multiColor","BEW2OAP":"multiColor","BEW2OHPB":"multiColor","BEW2ODPB":"multiColor","BEW2OAPB":"multiColor","BEP2OD":"multiColor","BEP2OA":"multiColor","XS2ODPB":false,"XS2OAPB":false,"BLROC":"multiColor","BLNOC":"multiColor"},{"category":"general","function":"sound","BSA2OEPW":"echoCancle","BSA2OHPW":"echoCancle","BSA2OIPW":"echoCancle","BSA2OMPW":"echoCancle","BS2OEPW":"16 bit","BS2OHPW":"16 bit","BS2OIPW":"16 bit","BS2OMPW":"16 bit","BS2AODPB":"16 bit","BS2AOAPWB":"16 bit","BSL2OE":"16 bit","BSL2OM":"16 bit","BLN2ODB":"16 bit","BLN2OAB":"16 bit","BLN2PAB":"16 bit","BEW2OHP":"multiToneBuzzer","BEW2ODP":"multiToneBuzzer","BEW2OAP":"multiToneBuzzer","BEW2OHPB":"multiToneBuzzer","BEW2ODPB":"multiToneBuzzer","BEW2OAPB":"multiToneBuzzer","BEP2OD":"multiToneBuzzer","BEP2OA":"multiToneBuzzer","XS2ODPB":"24 bit","XS2OAPB":"24 bit","BLROC":"multiToneBuzzer","BLNOC":"multiToneBuzzer"},{"category":"general","function":"operating-temperature","BSA2OEPW":"-20 °C ~ 50 °C","BSA2OHPW":"-20 °C ~ 50 °C","BSA2OIPW":"-20 °C ~ 50 °C","BSA2OMPW":"-20 °C ~ 50 °C","BS2OEPW":"-20 °C ~ 50 °C","BS2OHPW":"-20 °C ~ 50 °C","BS2OIPW":"-20 °C ~ 50 °C","BS2OMPW":"-20 °C ~ 50 °C","BS2AODPB":"-20 °C ~ 60 °C","BS2AOAPWB":"-20 °C ~ 60 °C","BSL2OE":"-20 °C ~ 50 °C","BSL2OM":"-20 °C ~ 50 °C","BLN2ODB":"-20 °C ~ 50 °C","BLN2OAB":"-20 °C ~ 50 °C","BLN2PAB":"-10 °C ~ 50 °C","BEW2OHP":"-20 °C ~ 50 °C","BEW2ODP":"-20 °C ~ 50 °C","BEW2OAP":"-20 °C ~ 50 °C","BEW2OHPB":"-20 °C ~ 50 °C","BEW2ODPB":"-20 °C ~ 50 °C","BEW2OAPB":"-20 °C ~ 50 °C","BEP2OD":"-20 °C ~ 50 °C","BEP2OA":"-20 °C ~ 50 °C","XS2ODPB":"-20 °C ~ 50 °C","XS2OAPB":"-20 °C ~ 50 °C","BLROC":"-20 °C ~ 50 °C","BLNOC":"-20 °C ~ 50 °C"},{"category":"general","function":"storage-temperature","BSA2OEPW":"-40 °C ~ 70 °C","BSA2OHPW":"-40 °C ~ 70 °C","BSA2OIPW":"-40 °C ~ 70 °C","BSA2OMPW":"-40 °C ~ 70 °C","BS2OEPW":"-40 °C ~ 70 °C","BS2OHPW":"-40 °C ~ 70 °C","BS2OIPW":"-40 °C ~ 70 °C","BS2OMPW":"-40 °C ~ 70 °C","BS2AODPB":"-40 °C ~ 70 °C","BS2AOAPWB":"-40 °C ~ 70 °C","BSL2OE":"-40 °C ~ 70 °C","BSL2OM":"-40 °C ~ 70 °C","BLN2ODB":"-40 °C ~ 70 °C","BLN2OAB":"-40 °C ~ 70 °C","BLN2PAB":"-20 °C ~ 60 °C","BEW2OHP":"-40 °C ~ 70 °C","BEW2ODP":"-40 °C ~ 70 °C","BEW2OAP":"-40 °C ~ 70 °C","BEW2OHPB":"-40 °C ~ 70 °C","BEW2ODPB":"-40 °C ~ 70 °C","BEW2OAPB":"-40 °C ~ 70 °C","BEP2OD":"-40 °C ~ 70 °C","BEP2OA":"-40 °C ~ 70 °C","XS2ODPB":"-40 °C ~ 70 °C","XS2OAPB":"-40 °C ~ 70 °C","BLROC":"-40 °C ~ 70 °C","BLNOC":"-40 °C ~ 70 °C"},{"category":"general","function":"operating-humidity","BSA2OEPW":"operating-humidity-spec","BSA2OHPW":"operating-humidity-spec","BSA2OIPW":"operating-humidity-spec","BSA2OMPW":"operating-humidity-spec","BS2OEPW":"operating-humidity-spec","BS2OHPW":"operating-humidity-spec","BS2OIPW":"operating-humidity-spec","BS2OMPW":"operating-humidity-spec","BS2AODPB":"operating-humidity-spec","BS2AOAPWB":"operating-humidity-spec","BSL2OE":"operating-humidity-spec","BSL2OM":"operating-humidity-spec","BLN2ODB":"operating-humidity-spec","BLN2OAB":"operating-humidity-spec","BLN2PAB":"operating-humidity-spec","BEW2OHP":"operating-humidity-spec","BEW2ODP":"operating-humidity-spec","BEW2OAP":"operating-humidity-spec","BEW2OHPB":"operating-humidity-spec","BEW2ODPB":"operating-humidity-spec","BEW2OAPB":"operating-humidity-spec","BEP2OD":"operating-humidity-spec","BEP2OA":"operating-humidity-spec","XS2ODPB":"operating-humidity-spec","XS2OAPB":"operating-humidity-spec","BLROC":"operating-humidity-spec","BLNOC":"operating-humidity-spec"},{"category":"general","function":"storage-humidity","BSA2OEPW":"storage-humidity-spec","BSA2OHPW":"storage-humidity-spec","BSA2OIPW":"storage-humidity-spec","BSA2OMPW":"storage-humidity-spec","BS2OEPW":"storage-humidity-spec","BS2OHPW":"storage-humidity-spec","BS2OIPW":"storage-humidity-spec","BS2OMPW":"storage-humidity-spec","BS2AODPB":"storage-humidity-spec","BS2AOAPWB":"storage-humidity-spec","BSL2OE":"storage-humidity-spec","BSL2OM":"storage-humidity-spec","BLN2ODB":"storage-humidity-spec","BLN2OAB":"storage-humidity-spec","BLN2PAB":"storage-humidity-spec","BEW2OHP":"storage-humidity-spec","BEW2ODP":"storage-humidity-spec","BEW2OAP":"storage-humidity-spec","BEW2OHPB":"storage-humidity-spec","BEW2ODPB":"storage-humidity-spec","BEW2OAPB":"storage-humidity-spec","BEP2OD":"storage-humidity-spec","BEP2OA":"storage-humidity-spec","XS2ODPB":"storage-humidity-spec","XS2OAPB":"storage-humidity-spec","BLROC":"storage-humidity-spec","BLNOC":"storage-humidity-spec"},{"category":"general","function":"weight","BSA2OEPW":"d440b89","BSA2OHPW":"d440b89","BSA2OIPW":"d440b89","BSA2OMPW":"d440b89","BS2OEPW":"d440b130","BS2OHPW":"d440b130","BS2OIPW":"d440b130","BS2OMPW":"d440b130","BS2AODPB":"d429b142","BS2AOAPWB":"d429b142","BSL2OE":"d280b61","BSL2OM":"d280b61","BLN2ODB":"d255b57","BLN2OAB":"d255b57","BLN2PAB":"d255b57","BEW2OHP":"d251b43","BEW2ODP":"d251b43","BEW2OAP":"d251b43","BEW2OHPB":"d251b43","BEW2ODPB":"d251b43","BEW2OAPB":"d251b43","BEP2OD":"d162b39","BEP2OA":"d162b39","XS2ODPB":"d375b86","XS2OAPB":"d375b86","BLROC":"d242b59","BLNOC":"d242b59"},{"category":"general","function":"dimension","BSA2OEPW":"155 x 155 x 40","BSA2OHPW":"155 x 155 x 40","BSA2OIPW":"155 x 155 x 40","BSA2OMPW":"155 x 155 x 40","BS2OEPW":"142 x 144 x 45 (Bottom) / 38 (Top)","BS2OHPW":"142 x 144 x 45 (Bottom) / 38 (Top)","BS2OIPW":"142 x 144 x 45 (Bottom) / 38 (Top)","BS2OMPW":"142 x 144 x 45 (Bottom) / 38 (Top)","BS2AODPB":"142 x 144 x 45 (Bottom) / 37.8 (Top) (mm)","BS2AOAPWB":"142 x 144 x 45 (Bottom) / 37.8 (Top) (mm)","BSL2OE":"70.9 x 200.9 x 44.3 (Bottom) / 34.2 (Top)","BSL2OM":"70.9 x 200.9 x 44.3 (Bottom) / 34.2 (Top)","BLN2ODB":"58 x 190 x 44 (Bottom) / 34.6 (Top)","BLN2OAB":"58 x 190 x 44 (Bottom) / 34.6 (Top)","BLN2PAB":"58 x 190 x 44 (Bottom) / 34.6 (Top)","BEW2OHP":"50 x 172 x 43.4 (Bottom) / 38.1 (Top)","BEW2ODP":"50 x 172 x 43.4 (Bottom) / 38.1 (Top)","BEW2OAP":"50 x 172 x 43.4 (Bottom) / 38.1 (Top)","BEW2OHPB":"50 x 172 x 43.4 (Bottom) / 38.1 (Top)","BEW2ODPB":"50 x 172 x 43.4 (Bottom) / 38.1 (Top)","BEW2OAPB":"50 x 172 x 43.4 (Bottom) / 38.1 (Top)","BEP2OD":"50.1 x 164 x 38","BEP2OA":"50.1 x 164 x 38","XS2ODPB":"82 x 208.5 x 53 (Bottom) / 25.9 (Top)","XS2OAPB":"82 x 208.5 x 53 (Bottom) / 25.9 (Top)","BLROC":"60 x 185 x 40","BLNOC":"60 x 185 x 40"},{"category":"interface","function":"ethernet","BSA2OEPW":"ethernet-spec","BSA2OHPW":"ethernet-spec","BSA2OIPW":"ethernet-spec","BSA2OMPW":"ethernet-spec","BS2OEPW":"ethernet-spec","BS2OHPW":"ethernet-spec","BS2OIPW":"ethernet-spec","BS2OMPW":"ethernet-spec","BS2AODPB":"ethernet-spec","BS2AOAPWB":"ethernet-spec","BSL2OE":"ethernet-spec","BSL2OM":"ethernet-spec","BLN2ODB":"ethernet-spec","BLN2OAB":"ethernet-spec","BLN2PAB":"ethernet-spec","BEW2OHP":"ethernet-spec","BEW2ODP":"ethernet-spec","BEW2OAP":"ethernet-spec","BEW2OHPB":"ethernet-spec","BEW2ODPB":"ethernet-spec","BEW2OAPB":"ethernet-spec","BEP2OD":"ethernet-spec","BEP2OA":"ethernet-spec","XS2ODPB":"ethernet-spec","XS2OAPB":"ethernet-spec","BLROC":"ethernet-spec","BLNOC":"ethernet-spec"},{"category":"interface","function":"wifi","BSA2OEPW":"Built-in, IEEE 802.11 b/g","BSA2OHPW":"Built-in, IEEE 802.11 b/g","BSA2OIPW":"Built-in, IEEE 802.11 b/g","BSA2OMPW":"Built-in, IEEE 802.11 b/g","BS2OEPW":"Built-in, IEEE 802.11 b/g","BS2OHPW":"Built-in, IEEE 802.11 b/g","BS2OIPW":"Built-in, IEEE 802.11 b/g","BS2OMPW":"Built-in, IEEE 802.11 b/g","BS2AODPB":false,"BS2AOAPWB":"802.11 b/ g/ n 2.4 GHz","BSL2OE":false,"BSL2OM":false,"BLN2ODB":false,"BLN2OAB":false,"BLN2PAB":false,"BEW2OHP":false,"BEW2ODP":false,"BEW2OAP":false,"BEW2OHPB":false,"BEW2ODPB":false,"BEW2OAPB":false,"BEP2OD":false,"BEP2OA":false,"XS2ODPB":false,"XS2OAPB":false,"BLROC":false,"BLNOC":false},{"category":"interface","function":"networkprotocol","BSA2OEPW":"TCP, UDP","BSA2OHPW":"TCP, UDP","BSA2OIPW":"TCP, UDP","BSA2OMPW":"TCP, UDP","BS2OEPW":"TCP, UDP","BS2OHPW":"TCP, UDP","BS2OIPW":"TCP, UDP","BS2OMPW":"TCP, UDP","BS2AODPB":"TCP, UDP","BS2AOAPWB":"TCP, UDP","BSL2OE":"TCP, UDP","BSL2OM":"TCP, UDP","BLN2ODB":"TCP, UDP","BLN2OAB":"TCP, UDP","BLN2PAB":"TCP, UDP","BEW2OHP":"TCP, UDP","BEW2ODP":"TCP, UDP","BEW2OAP":"TCP, UDP","BEW2OHPB":"TCP, UDP","BEW2ODPB":"TCP, UDP","BEW2OAPB":"TCP, UDP","BEP2OD":"TCP, UDP","BEP2OA":"TCP, UDP","XS2ODPB":"TCP, UDP","XS2OAPB":"TCP, UDP","BLROC":"TCP, UDP","BLNOC":"TCP, UDP"},{"category":"interface","function":"rs485","BSA2OEPW":"1chmasterslave","BSA2OHPW":"1chmasterslave","BSA2OIPW":"1chmasterslave","BSA2OMPW":"1chmasterslave","BS2OEPW":"1chmasterslave","BS2OHPW":"1chmasterslave","BS2OIPW":"1chmasterslave","BS2OMPW":"1chmasterslave","BS2AODPB":"1chmasterslave","BS2AOAPWB":"1chmasterslave","BSL2OE":"1chmasterslave","BSL2OM":"1chmasterslave","BLN2ODB":"1chmasterslave","BLN2OAB":"1chmasterslave","BLN2PAB":"1chmasterslave","BEW2OHP":"1chmasterslave","BEW2ODP":"1chmasterslave","BEW2OAP":"1chmasterslave","BEW2OHPB":"1chmasterslave","BEW2ODPB":"1chmasterslave","BEW2OAPB":"1chmasterslave","BEP2OD":"1chmasterslave","BEP2OA":"1chmasterslave","XS2ODPB":"1chmasterslave","XS2OAPB":"1chmasterslave","BLROC":"1chmasterslave","BLNOC":"1chmasterslave"},{"category":"interface","function":"rs485-protocol","BSA2OEPW":"osdpv2","BSA2OHPW":"osdpv2","BSA2OIPW":"osdpv2","BSA2OMPW":"osdpv2","BS2OEPW":"osdpv2","BS2OHPW":"osdpv2","BS2OIPW":"osdpv2","BS2OMPW":"osdpv2","BS2AODPB":"osdpv2","BS2AOAPWB":"osdpv2","BSL2OE":"osdpv2","BSL2OM":"osdpv2","BLN2ODB":"osdpv2","BLN2OAB":"osdpv2","BLN2PAB":"osdpv2","BEW2OHP":"osdpv2","BEW2ODP":"osdpv2","BEW2OAP":"osdpv2","BEW2OHPB":"osdpv2","BEW2ODPB":"osdpv2","BEW2OAPB":"osdpv2","BEP2OD":"osdpv2","BEP2OA":"osdpv2","XS2ODPB":"osdpv2","XS2OAPB":"osdpv2","BLROC":"osdpv2","BLNOC":"osdpv2"},{"category":"interface","function":"wiegand","BSA2OEPW":"1chin1chout","BSA2OHPW":"1chin1chout","BSA2OIPW":"1chin1chout","BSA2OMPW":"1chin1chout","BS2OEPW":"1chin1chout","BS2OHPW":"1chin1chout","BS2OIPW":"1chin1chout","BS2OMPW":"1chin1chout","BS2AODPB":"1chin1chout","BS2AOAPWB":"1chin1chout","BSL2OE":"1chin1choutopt1","BSL2OM":"1chin1choutopt1","BLN2ODB":"1chin1choutopt1","BLN2OAB":"1chin1choutopt1","BLN2PAB":"1chin1choutopt1","BEW2OHP":"1chin1choutopt1","BEW2ODP":"1chin1choutopt1","BEW2OAP":"1chin1choutopt1","BEW2OHPB":"1chin1choutopt1","BEW2ODPB":"1chin1choutopt1","BEW2OAPB":"1chin1choutopt1","BEP2OD":"1chin1choutopt1","BEP2OA":"1chin1choutopt1","XS2ODPB":"1chin1choutopt2","XS2OAPB":"1chin1choutopt2","BLROC":"1chin1choutopt2","BLNOC":"1chin1choutopt2"},{"category":"interface","function":"Input","BSA2OEPW":"2chinput","BSA2OHPW":"2chinput","BSA2OIPW":"2chinput","BSA2OMPW":"2chinput","BS2OEPW":"2chinout","BS2OHPW":"2chinout","BS2OIPW":"2chinout","BS2OMPW":"2chinout","BS2AODPB":"3chinput","BS2AOAPWB":"3chinput","BSL2OE":"2chinput","BSL2OM":"2chinput","BLN2ODB":"2chinput","BLN2OAB":"2chinput","BLN2PAB":"2chinput","BEW2OHP":"2chinput","BEW2ODP":"2chinput","BEW2OAP":"2chinput","BEW2OHPB":"2chinput","BEW2ODPB":"2chinput","BEW2OAPB":"2chinput","BEP2OD":"2chinput","BEP2OA":"2chinput","XS2ODPB":"2chinput","XS2OAPB":"2chinput","BLROC":"2chinput","BLNOC":"2chinput"},{"category":"interface","function":"relay","BSA2OEPW":"2relay","BSA2OHPW":"2relay","BSA2OIPW":"2relay","BSA2OMPW":"2relay","BS2OEPW":"1relay","BS2OHPW":"1relay","BS2OIPW":"1relay","BS2OMPW":"1relay","BS2AODPB":"1relay","BS2AOAPWB":"1relay","BSL2OE":"1relay","BSL2OM":"1relay","BLN2ODB":"1relay","BLN2OAB":"1relay","BLN2PAB":"1relay","BEW2OHP":"1relay","BEW2ODP":"1relay","BEW2OAP":"1relay","BEW2OHPB":"1relay","BEW2ODPB":"1relay","BEW2OAPB":"1relay","BEP2OD":"1relay","BEP2OA":"1relay","XS2ODPB":"1relay","XS2OAPB":"1relay","BLROC":"1relay","BLNOC":"1relay"},{"category":"interface","function":"poe","BSA2OEPW":"ieee8023af","BSA2OHPW":"ieee8023af","BSA2OIPW":"ieee8023af","BSA2OMPW":"ieee8023af","BS2OEPW":"ieee8023af","BS2OHPW":"ieee8023af","BS2OIPW":"ieee8023af","BS2OMPW":"ieee8023af","BS2AODPB":"ieee8023af","BS2AOAPWB":"ieee8023af","BSL2OE":false,"BSL2OM":false,"BLN2ODB":false,"BLN2OAB":false,"BLN2PAB":false,"BEW2OHP":"ieee8023af","BEW2ODP":"ieee8023af","BEW2OAP":"ieee8023af","BEW2OHPB":"ieee8023af","BEW2ODPB":"ieee8023af","BEW2OAPB":"ieee8023af","BEP2OD":false,"BEP2OA":false,"XS2ODPB":"ieee8023af","XS2OAPB":"ieee8023af","BLROC":false,"BLNOC":false},{"category":"interface","function":"intercom","BSA2OEPW":true,"BSA2OHPW":true,"BSA2OIPW":true,"BSA2OMPW":true,"BS2OEPW":true,"BS2OHPW":true,"BS2OIPW":true,"BS2OMPW":true,"BS2AODPB":false,"BS2AOAPWB":false,"BSL2OE":false,"BSL2OM":false,"BLN2ODB":false,"BLN2OAB":false,"BLN2PAB":false,"BEW2OHP":false,"BEW2ODP":false,"BEW2OAP":false,"BEW2OHPB":false,"BEW2ODPB":false,"BEW2OAPB":false,"BEP2OD":false,"BEP2OA":false,"XS2ODPB":false,"XS2OAPB":false,"BLROC":false,"BLNOC":false},{"category":"interface","function":"USB","BSA2OEPW":true,"BSA2OHPW":true,"BSA2OIPW":true,"BSA2OMPW":true,"BS2OEPW":true,"BS2OHPW":true,"BS2OIPW":true,"BS2OMPW":true,"BS2AODPB":true,"BS2AOAPWB":true,"BSL2OE":false,"BSL2OM":false,"BLN2ODB":false,"BLN2OAB":false,"BLN2PAB":false,"BEW2OHP":false,"BEW2ODP":false,"BEW2OAP":false,"BEW2OHPB":false,"BEW2ODPB":false,"BEW2OAPB":false,"BEP2OD":false,"BEP2OA":false,"XS2ODPB":true,"XS2OAPB":true,"BLROC":false,"BLNOC":false},{"category":"interface","function":"sdcard","BSA2OEPW":"microSD card (최대 32 GB)","BSA2OHPW":"microSD card (최대 32 GB)","BSA2OIPW":"microSD card (최대 32 GB)","BSA2OMPW":"microSD card (최대 32 GB)","BS2OEPW":false,"BS2OHPW":false,"BS2OIPW":false,"BS2OMPW":false,"BS2AODPB":false,"BS2AOAPWB":false,"BSL2OE":false,"BSL2OM":false,"BLN2ODB":false,"BLN2OAB":false,"BLN2PAB":false,"BEW2OHP":false,"BEW2ODP":false,"BEW2OAP":false,"BEW2OHPB":false,"BEW2ODPB":false,"BEW2OAPB":false,"BEP2OD":false,"BEP2OA":false,"XS2ODPB":false,"XS2OAPB":false,"BLROC":false,"BLNOC":false},{"category":"interface","function":"tamper","BSA2OEPW":true,"BSA2OHPW":true,"BSA2OIPW":true,"BSA2OMPW":true,"BS2OEPW":true,"BS2OHPW":true,"BS2OIPW":true,"BS2OMPW":true,"BS2AODPB":true,"BS2AOAPWB":true,"BSL2OE":true,"BSL2OM":true,"BLN2ODB":true,"BLN2OAB":true,"BLN2PAB":true,"BEW2OHP":true,"BEW2ODP":true,"BEW2OAP":true,"BEW2OHPB":true,"BEW2ODPB":true,"BEW2OAPB":true,"BEP2OD":true,"BEP2OA":true,"XS2ODPB":true,"XS2OAPB":true,"BLROC":true,"BLNOC":true},{"category":"electric","function":"power","BSA2OEPW":"p12ve1a","BSA2OHPW":"p12ve1a","BSA2OIPW":"p12ve1a","BSA2OMPW":"p12ve1a","BS2OEPW":"p12ve8a","BS2OHPW":"p12ve8a","BS2OIPW":"p12ve8a","BS2OMPW":"p12ve8a","BS2AODPB":"p12ve8a24v4a","BS2AOAPWB":"p12ve8a24v4a","BSL2OE":"p12ve5a","BSL2OM":"p12ve5a","BLN2ODB":"p12ve4a","BLN2OAB":"p12ve4a","BLN2PAB":"p12ve4a","BEW2OHP":"p12ve5a","BEW2ODP":"p12ve5a","BEW2OAP":"p12ve5a","BEW2OHPB":"p12ve5a","BEW2ODPB":"p12ve5a","BEW2OAPB":"p12ve5a","BEP2OD":"p12ve2a","BEP2OA":"p12ve2a","XS2ODPB":"p12ve8a24v5a","XS2OAPB":"p12ve8a24v5a","BLROC":"p12ve3a","BLNOC":"p12ve3a"}]')

}),
91495: (function (module) {
module.exports = JSON.parse('[{"category":"credential","function":"face","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":false,"BLNet":false},{"category":"credential","function":"fingerprint","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":true},{"category":"credential","function":"rfid","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":true},{"category":"credential","function":"mobile","BSA2":"🔶","BS2":"🔶","BS2a":true,"BSL2":"🔶","BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":false},{"category":"credential","function":"pin","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":false,"BEP2":false,"XS2F":true,"BLNet":true},{"category":"credential","function":"sckeypad","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":true,"BLNet":false},{"category":"credential","function":"qr","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":true,"BLNet":false},{"category":"basic","function":"wd","BSA2":false,"BS2":true,"BS2a":true,"BSL2":false,"BLN2":true,"BEW2":true,"BEP2":false,"XS2F":true,"BLNet":true},{"category":"basic","function":"breakprevent","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":true,"BEP2":false,"XS2F":false,"BLNet":false},{"category":"basic","function":"credential-auth","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":true},{"category":"basic","function":"display","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":false,"BEP2":false,"XS2F":true,"BLNet":true},{"category":"basic","function":"keypad","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":false,"BEP2":false,"XS2F":true,"BLNet":true},{"category":"basic","function":"tcp-ip","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":true},{"category":"basic","function":"wifi","BSA2":true,"BS2":true,"BS2a":true,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":false,"BLNet":false},{"category":"basic","function":"rs485","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":true},{"category":"basic","function":"wiegand","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":true},{"category":"basic","function":"tamper","BSA2":true,"BS2":true,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":true},{"category":"advanced","function":"image-log","BSA2":true,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":true,"BLNet":false},{"category":"advanced","function":"fake-fingerprint-detection","BSA2":true,"BS2":false,"BS2a":true,"BSL2":true,"BLN2":true,"BEW2":true,"BEP2":false,"XS2F":true,"BLNet":false},{"category":"advanced","function":"fake-face-detection","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":false,"BLNet":false},{"category":"advanced","function":"face-detection","BSA2":true,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":true,"BLNet":false},{"category":"advanced","function":"intercom","BSA2":true,"BS2":true,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":false,"BLNet":false},{"category":"advanced","function":"poe","BSA2":true,"BS2":true,"BS2a":true,"BSL2":false,"BLN2":false,"BEW2":true,"BEP2":false,"XS2F":true,"BLNet":false},{"category":"advanced","function":"mullion-type","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":false,"BLNet":true},{"category":"advanced","function":"gang-box-type","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":false,"BEW2":false,"BEP2":false,"XS2F":false,"BLNet":false},{"category":"advanced","function":"multi-card-reading","BSA2":false,"BS2":false,"BS2a":false,"BSL2":false,"BLN2":true,"BEW2":true,"BEP2":true,"XS2F":true,"BLNet":false}]')

}),
72724: (function (module) {
module.exports = JSON.parse('{"ko":{"fingerprint_title":"지문 인식 장치 비교","main_function":"주요 기능","main_function_compare":"주요 기능 비교","main_function_compare_note":"🔶: 제품 세부 모델에 따라 지원 여부가 다를 수 있습니다.","product_specs":"제품 사양","product_specs_compare":"제품 사양 비교","credential":"크리덴셜","face":"얼굴","fingerprint":"지문","rfid":"RFID","mobile":"모바일 카드","pin":"PIN","sckeypad":"스크램블 키패드(PIN)","qr":"QR/바코드","basic":"기본","wd":"방수 방진","breakprevent":"파손 방지","credential-auth":"크리덴셜 인증","display":"디스플레이","keypad":"키패드","tcp-ip":"TCP/IP","wifi":"Wi-Fi","rs485":"RS-485","rs485-protocol":"RS-485 통신 프로토콜","wiegand":"Wiegand","tamper":"탬퍼","advanced":"고급","image-log":"이미지 로그","fake-fingerprint-detection":"위조 지문 검출","fake-face-detection":"위조 얼굴 검출","face-detection":"얼굴 검출","intercom":"인터폰","poe":"PoE","mullion-type":"멀리온 타입","gang-box-type":"갱 박스 타입","multi-card-reading":"멀티 카드 읽기","rfoption":"RF 옵션","protectlevel":"보호 등급","template":"템플릿","detection":"추출 / 매치","supportExcept":"지원, 별도의 장치 라이선스가 필요합니다.","minex":"MINEX 인증 및 호환","supportSW":"지원 (SW 기반)","supportSWHW":"지원 (HW + SW 기반)","storage":"저장 용량","maxUser":"최대 사용자 수","maxCred1onN":"최대 크리덴셜 수(1:N)","finger100":"지문: 100,000","finger20":"지문: 20,000","finger10":"지문: 10,000","finger5":"지문: 5,000","maxCred1on1":"최대 크리덴셜 수(1:1)","cred500":"지문: 500,000 / 카드: 500,000 / PIN: 500,000","cred2t500":"지문: 500,000 / 카드: 500,000","cred10":"지문: 10,000 / 카드: 10,000 / PIN: 10,000","cred2t10":"지문: 10,000 / 카드: 10,000","cred5":"지문: 5,000 / 카드: 5,000 /<br/>PIN: 5,000","maxTextLog":"최대 텍스트 로그 수","maxImageLog":"최대 이미지 로그 수","general":"일반","cryptochip":"크립토 칩","resolution":"화면 해상도","multiColor":"다중 색상","sound":"소리","echoCancle":"24 bit/Voice DSP (에코 캔슬)","multiToneBuzzer":"멀티톤 버저","operating-temperature":"동작 온도","storage-temperature":"보관 온도","operating-humidity":"동작 습도","operating-humidity-spec":"0% ~ 80%, 비응축","storage-humidity":"보관 습도","storage-humidity-spec":"0% ~ 90%, 비응축","weight":"무게","d440b89":"장치: 440g, 브래킷: 89g (와셔 및 볼트 포함)","d440b130":"장치: 440g, 브래킷: 130g (와셔 및 스크류 포함)","d429b142":"장치: 429g, 브래킷: 142g (와셔 및 볼트 포함)","d280b61":"장치: 280g, 브래킷: 61g (와셔 및 볼트 포함)","d255b57":"장치: 255g, 브래킷: 57g (와셔 및 볼트 포함)","d251b43":"장치: 251g, 브래킷: 43g (와셔 및 볼트 포함)","d162b39":"장치: 162g, 브래킷: 39g (와셔 및 볼트 포함)","d375b86":"장치: 375g, 브래킷: 86g (와셔 및 볼트 포함)","d242b59":"장치: 242g, 브래킷: 59g (와셔 및 볼트 포함)","dimension":"치수 (WxHxD, mm)","interface":"인터페이스","ethernet":"이더넷","ethernet-spec":"10/100 Mbps, 자동 MDI/MDI-X","networkprotocol":"네트워크 프로토콜","1chmasterslave":"1채널 마스터/슬레이브 (선택 가능)","osdpv2":"OSDP V2 호환","1chin1chout":"1채널 입력, 1채널 출력","1chin1choutopt1":"1채널 입력/출력 (선택 가능)","1chin1choutopt2":"1채널 입력/1채널 출력 (선택 가능)","2chinput":"2채널 입력","2chinout":"2채널 입력, 2채널 출력","3chinput":"3채널 입력","relay":"릴레이","1relay":"1 릴레이","2relay":"2 릴레이","ieee8023af":"IEEE 802.3af 호환","sdcard":"SD 카드","microSD":"microSD 카드 (최대 32 GB)","electric":"전기 규격","power":"전원","p12ve1a":"전압: 12 Vdc, 전류: 최대 1 A","p12ve8a":"전압: 12 Vdc, 전류: 최대 0.8 A","p12ve8a24v4a":"전압: 12 Vdc, 전류: 최대 0.8 A / 전압: 24 Vdc , 전류: 최대 0.4 A","p12ve8a24v5a":"전압: 12 Vdc, 전류: 최대 0.8 A / 전압: 24 Vdc , 전류: 최대 0.5 A","p12ve5a":"전압: 12 Vdc, 전류: 최대 0.5 A","p12ve4a":"전압: 12 Vdc, 전류: 최대 0.4 A","p12ve3a":"전압: 12 Vdc, 전류: 최대 0.3 A","p12ve2a":"전압: 12 Vdc, 전류: 최대 0.2 A"},"en":{"fingerprint_title":"Compare Fingerprint Recognition Devices","main_function":"Main Function","main_function_compare":"Compare main functions","main_function_compare_note":"🔶: Support may vary depending on the specific product model.","product_specs":"Product specifications","product_specs_compare":"Compare product specifications","credential":"Credential","face":"Face","fingerprint":"Fingerprint","rfid":"RFID","mobile":"Mobile card","pin":"PIN","sckeypad":"Scramble Keypad (PIN)","qr":"QR/Barcode","basic":"Basic","wd":"Waterproof/Dustproof","breakprevent":"Break prevent","credential-auth":"Credential authentication","display":"Display","keypad":"Keypad","tcp-ip":"TCP/IP","wifi":"Wi-Fi","rs485":"RS-485","rs485-protocol":"RS-485 communication protocol","wiegand":"Wiegand","tamper":"Tamper","advanced":"Advanced","image-log":"Image log","fake-fingerprint-detection":"Fake fingerprint detection","fake-face-detection":"Fake face detection","face-detection":"Face detection","intercom":"Intercom","poe":"PoE","mullion-type":"Mullion type","gang-box-type":"Gang box type","multi-card-reading":"Multi card reading","rfoption":"RF option","protectlevel":"Protection Level","detection":"Detection / Match","supportExcept":"Support, a separate device license is required.","minex":"MINEX certified and compatible","supportSW":"Support (Based SW)","supportSWHW":"Support (Based HW, SW)","storage":"Storage size","maxUser":"Maximum user count","maxCred1onN":"Maximum credential count (1:N)","finger100":"Fingerprint: 100,000","finger20":"Fingerprint: 20,000","finger10":"Fingerprint: 10,000","finger5":"Fingerprint: 5,000","maxCred1on1":"Maximum credential count (1:1)","cred500":"Fingerprint: 500,000 / Card: 500,000 / PIN: 500,000","cred2t500":"Fingerprint: 500,000 / Card: 500,000","cred10":"Fingerprint: 10,000 / Card: 10,000 / PIN: 10,000","cred2t10":"Fingerprint: 10,000 / Card: 10,000","cred5":"Fingerprint: 5,000 / Card: 5,000 /<br/>PIN: 5,000","maxTextLog":"Maximum text log count","maxImageLog":"Maximum image log count","general":"General","cryptochip":"Crypto chip","resolution":"Screen resolution","multiColor":"Multi-color","sound":"Sound","echoCancle":"24 bit/Voice DSP (echo cancellation)","multiToneBuzzer":"Multi-tone buzzer","operating-temperature":"Operating temperature","storage-temperature":"Storage temperature","operating-humidity":"Operating humidity","operating-humidity-spec":"0% ~ 80%, non-condensing","storage-humidity":"Storage humidity","storage-humidity-spec":"0% ~ 90%, non-condensing","weight":"Weight","d440b89":"Device: 440g, Bracket: 89g (Including washer and bolt)","d440b130":"Device: 440g, Bracket: 130g (Including washer and screw)","d429b142":"Device: 429g, Bracket: 142g (Including washer and bolt)","d280b61":"Device: 280g, Bracket: 61g (Including washer and bolt)","d255b57":"Device: 255g, Bracket: 57g (Including washer and bolt)","d251b43":"Device: 251g, Bracket: 43g (Including washer and bolt)","d162b39":"Device: 162g, Bracket: 39g (Including washer and bolt)","d375b86":"Device: 375g, Bracket: 86g (Including washer and bolt)","d242b59":"Device: 242g, Bracket: 59g (Including washer and bolt)","dimension":"Dimension (WxHxD, mm)","interface":"Interface","ethernet":"Ethernet","ethernet-spec":"10/100 Mbps, auto MDI/MDI-X","networkprotocol":"Network Protocol","1chmasterslave":"1ch Host or Slave (selectable)","osdpv2":"OSDP V2 compliant","1chin1chout":"1ch input, 1ch output","1chin1choutopt1":"1ch input/output (selectable)","1chin1choutopt2":"1ch input/1ch output (selectable)","2chinput":"2ch input","2chinout":"2ch inputs, 2ch outputs","3chinput":"3ch inputs","relay":"Relay","1relay":"1 Relay","2relay":"2 Relay","ieee8023af":"IEEE 802.3af compliant","sdcard":"SD card","microSD":"microSD card (Supports up to 32 GB)","electric":"Electrical","power":"Power","p12ve1a":"Voltage: 12 Vdc, Current: Max. 1 A","p12ve8a":"Voltage: 12 Vdc, Current: Max. 0.8 A","p12ve8a24v4a":"Voltage: 12, Vdc Current: Max. 0.8 A / Voltage: 24 Vdc, Current: Max. 0.4 A","p12ve8a24v5a":"Voltage: 12 Vdc, Current: Max. 0.8 A / Voltage: 24 Vdc, Current: Max. 0.5 A","p12ve5a":"Voltage: 12 Vdc, Current: Max. 0.5 A","p12ve4a":"Voltage: 12 Vdc, Current: Max. 0.4 A","p12ve3a":"Voltage: 12 Vdc, Current: Max. 0.3 A","p12ve2a":"Voltage: 12 Vdc, Current: Max. 0.2 A"}}')

}),

}]);