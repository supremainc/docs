"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["7397"], {
"7921": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Backcover)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 71 modules
var Layout = __webpack_require__("609");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__("3187");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__("7262");
;// CONCATENATED MODULE: ./src/pages/back/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"coverpage":"coverpage_i_My","footer":"footer_gjLK","logo":"logo_HiDa","address":"address_VONI","qrcontents":"qrcontents_xP75","qrtext":"qrtext_xeyq","qr":"qr_jvFo","qrimage":"qrimage_RrPw","copyright":"copyright_toFS"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__("1199");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__("7670");
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
    (0,react.useEffect)(()=>{
        // 특정 페이지에서만 @page 스타일을 동적으로 추가
        const style = document.createElement('style');
        style.innerHTML = `
      @page {
          margin: 0;
      }
    `;
        document.head.appendChild(style);
        // 컴포넌트 언마운트 시 스타일 제거
        return ()=>{
            document.head.removeChild(style);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Head/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.coverpage,
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