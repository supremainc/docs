"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["188"], {
"9277": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Cover)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("7294");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 71 modules
var Layout = __webpack_require__("609");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__("3187");
;// CONCATENATED MODULE: ./src/pages/cover/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"coverpage":"coverpage_s00n","title":"title_Ox8A","ver":"ver_YY1T","lang":"lang_UZLZ","number":"number__Jg4","next":"next_L80O","footer":"footer_XGkm","logo":"logo_jjey"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__("1199");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("7026");
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__("6550");
;// CONCATENATED MODULE: ./src/pages/cover/index.js








function Cover() {
    const { search } = (0,react_router/* useLocation */.TH)();
    const params = Object.fromEntries(new URLSearchParams(search));
    const { title = "Suprema", sub: subtitle = "...", ver = "ver", lang = "Language", num = "Number", next = "/" } = params;
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
                        className: styles_module.title,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                children: subtitle
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: styles_module.ver,
                                children: ver
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: styles_module.lang,
                                children: lang
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: styles_module.number,
                                children: num
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.footer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: (0,useBaseUrl/* default */.ZP)('img/suprema-logo-bottom.svg'),
                            className: styles_module.logo,
                            alt: "Suprema Logo"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                        className: (0,clsx/* default */.Z)(styles_module.next, "pagination-nav__link pagination-nav__link--next"),
                        href: next,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "pagination-nav__sublabel",
                            children: "다음"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "page-break"
                    })
                ]
            })
        ]
    });
}


}),

}]);