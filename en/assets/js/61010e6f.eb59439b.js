"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["5097"], {
"726": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// extracted by css-extract-rspack-plugin
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"coverpage":"coverpage_s00n","title":"title_Ox8A","ver":"ver_YY1T","lang":"lang_UZLZ","number":"number__Jg4","next":"next_L80O","footer":"footer_XGkm","logo":"logo_jjey"});

}),
"4210": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return Cover; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* ESM import */var _theme_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(609);
/* ESM import */var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3187);
/* ESM import */var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(726);
/* ESM import */var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1199);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7026);
/* ESM import */var _docusaurus_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6550);








function Cover() {
    const { search } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_5__/* .useLocation */.TH)();
    const params = Object.fromEntries(new URLSearchParams(search));
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
        // 컴포넌트 언마운트 시 스타일 제거
        return ()=>{
            document.head.removeChild(style);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
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