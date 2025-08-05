"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["7397"], {
93492: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Backcover)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 74 modules
var Layout = __webpack_require__(21986);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(4757);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(2933);
;// CONCATENATED MODULE: ./src/pages/back/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"backpage":"backpage_ksF4","footer":"footer_gjLK","logo":"logo_HiDa","address":"address_VONI","qrcontents":"qrcontents_xP75","qrtext":"qrtext_xeyq","qr":"qr_jvFo","qrimage":"qrimage_RrPw","copyright":"copyright_toFS"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(94819);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(96025);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(67026);
;// CONCATENATED MODULE: ./src/pages/back/index.js









function Backcover() {
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* default */.Z)();
    const lang = currentLocale;
    const address = `${(0,Translate/* translate */.I)({
        id: "theme.cover.address"
    })}`;
    const copyright = `${(0,Translate/* translate */.I)({
        id: "theme.cover.copyright"
    })}`;
    const qrtext = `${(0,Translate/* translate */.I)({
        id: "theme.cover.qrCodetext"
    })}`;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Head/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "robots",
                        content: "noindex, nofollow"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("style", {
                        children: `@page {margin: 0;}`
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (0,clsx/* default */.Z)(styles_module.backpage, 'backcoverpage'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.footer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: styles_module.logo,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: (0,useBaseUrl/* default */.ZP)('img/common/logo_back.svg')
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: styles_module.address,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        dangerouslySetInnerHTML: {
                                            __html: address
                                        }
                                    }),
                                    lang === 'en' && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: styles_module.qrcontents,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: styles_module.qrimage,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                    src: (0,useBaseUrl/* default */.ZP)('img/common/qr.svg'),
                                                    className: styles_module.qr
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: styles_module.qrtext,
                                                dangerouslySetInnerHTML: {
                                                    __html: qrtext
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.copyright,
                        dangerouslySetInnerHTML: {
                            __html: copyright
                        }
                    })
                ]
            })
        ]
    });
}


}),

}]);