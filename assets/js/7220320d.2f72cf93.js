"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4731"], {
7265: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (__WEBPACK_DEFAULT_EXPORT__)
});
// extracted by css-extract-rspack-plugin
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"coverpage":"coverpage_s00n","title":"title_Ox8A","ver":"ver_YY1T","lang":"lang_UZLZ","number":"number__Jg4","next":"next_L80O","footer":"footer_XGkm","logo":"logo_jjey"});

}),
2538: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Cover)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* ESM import */var _theme_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3451);
/* ESM import */var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4757);
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2933);
/* ESM import */var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7265);
/* ESM import */var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4819);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7026);








function Cover() {
    const { i18n: { currentLocale, label }, siteConfig } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z)();
    const title = "BioStar X";
    const subtitle = "User Guide";
    const ver = "v1.0.0";
    const lang = siteConfig.i18n.localeConfigs[currentLocale].label;
    const langLabel = currentLocale.toUpperCase();
    const num = `${langLabel} 001`;
    const next = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.ZP)('/platform/biostar_x/toc');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */.Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                        name: "robots",
                        content: "noindex, nofollow"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", {
                        children: `@page {margin: 0;}`
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].coverpage */.Z.coverpage,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].title */.Z.title,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                children: title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                children: subtitle
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].ver */.Z.ver,
                                children: ver
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].lang */.Z.lang,
                                children: lang
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].number */.Z.number,
                                children: num
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].footer */.Z.footer,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                            src: (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.ZP)('img/suprema-logo-bottom.svg'),
                            className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].logo */.Z.logo,
                            alt: "Suprema Logo"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */.Z)(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].next */.Z.next, "pagination-nav__link pagination-nav__link--next"),
                        href: next,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "pagination-nav__sublabel",
                            children: "\uB2E4\uC74C"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "page-break"
                    })
                ]
            })
        ]
    });
}


}),

}]);