"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["61797"], {
9921: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Backcover)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 79 modules
var Layout = __webpack_require__(25275);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(97158);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(13341);
;// CONCATENATED MODULE: ./src/pages/back/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"backpage":"backpage_ksF4","footer":"footer_gjLK","logo":"logo_HiDa","address":"address_VONI","qrcontents":"qrcontents_xP75","qrtext":"qrtext_xeyq","qr":"qr_jvFo","qrimage":"qrimage_RrPw","copyright":"copyright_toFS"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(25895);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(43789);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(39836);
;// CONCATENATED MODULE: ./src/pages/back/index.js









function Backcover() {
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* ["default"] */.A)();
    const lang = currentLocale;
    const address = `${(0,Translate/* .translate */.T)({
        id: "theme.cover.address"
    })}`;
    const copyright = `${(0,Translate/* .translate */.T)({
        id: "theme.cover.copyright"
    })}`;
    const qrtext = `${(0,Translate/* .translate */.T)({
        id: "theme.cover.qrCodetext"
    })}`;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Head/* ["default"] */.A, {
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
                className: (0,clsx/* ["default"] */.A)(styles_module.backpage, 'backcoverpage'),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.footer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: styles_module.logo,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: (0,useBaseUrl/* ["default"] */.Ay)('img/common/logo_back.svg')
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
                                                    src: (0,useBaseUrl/* ["default"] */.Ay)('img/common/qr.svg'),
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