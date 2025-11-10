"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["73649"], {
40004: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
// extracted by css-extract-rspack-plugin
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"coverpage":"coverpage_s00n","loaded":"loaded_cjDc","title":"title_Ox8A","small":"small_QyLS","ver":"ver_YY1T","lang":"lang_UZLZ","number":"number__Jg4","next":"next_L80O","footer":"footer_XGkm","logo":"logo_jjey"});

}),
47855: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Cover)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* ESM import */var _theme_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10584);
/* ESM import */var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97158);
/* ESM import */var _styles_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40004);
/* ESM import */var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25895);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39836);
/* ESM import */var _docusaurus_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56347);








function Cover() {
    const { search } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_5__/* .useLocation */.zy)();
    const params = Object.fromEntries(new URLSearchParams(search));
    const [isLoaded, setIsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { title = "Suprema", sub: subtitle = "...", ver = "ver", lang = "Language", num = "Number", next = "/" } = params;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // 특정 페이지에서만 @page 스타일을 동적으로 추가
        const style = document.createElement('style');
        style.innerHTML = `
            @page {
                margin: 0;
            }
        `;
        document.head.appendChild(style);
        // URL 파라미터가 로드된 후 표시
        setTimeout(()=>{
            setIsLoaded(true);
            // PrinceXML이 인식할 수 있는 로딩 완료 표시
            document.body.setAttribute('data-loaded', 'true');
            document.body.classList.add('content-loaded');
        }, 100);
        // 컴포넌트 언마운트 시 스타일 제거
        return ()=>{
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        };
    }, [
        params
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.A, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.A, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */.A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* ["default"].coverpage */.A.coverpage, {
                    [_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* ["default"].loaded */.A.loaded]: isLoaded
                }),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* ["default"].title */.A.title,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                children: title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                children: subtitle
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* ["default"].ver */.A.ver,
                                children: ver
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* ["default"].lang */.A.lang,
                                children: lang
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* ["default"].number */.A.number,
                                children: num
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* ["default"].footer */.A.footer,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                            src: (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Ay)('img/suprema-logo-bottom.svg'),
                            className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* ["default"].logo */.A.logo,
                            alt: "Suprema Logo"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */.A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_7__/* ["default"].next */.A.next, "pagination-nav__link pagination-nav__link--next"),
                        href: next,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "pagination-nav__sublabel",
                            children: "다음"
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