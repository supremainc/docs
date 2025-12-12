"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["13727"], {
45244: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Redirect2Product)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* ESM import */var _docusaurus_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56347);
/* ESM import */var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97158);




function Redirect2Product() {
    const location = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .useLocation */.zy)();
    const search = location.search;
    // example: ?name=xpassq2
    const product = search ? `${new URLSearchParams(search).get('name')}` : '';
    // 외부 URL로 새창에서 열리게 하는 함수
    const redirectToExternal = (url)=>{
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            window.open(url, '_blank', 'noopener,noreferrer');
        }, []);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            children: "Opening in new window..."
        });
    };
    switch(product){
        case 'bs3':
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .Redirect */.rd, {
                to: (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Ay)(`/device/biostation_3`)
            });
        case 'bs3m':
            // 외부 사이트로 리다이렉트 예시
            return redirectToExternal('https://download.supremainc.com/download-center/pages/login.asp');
        case 'xpq2':
            return redirectToExternal('https://download.supremainc.com/download-center/pages/login.asp');
        default:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_router__WEBPACK_IMPORTED_MODULE_3__/* .Redirect */.rd, {
                to: (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Ay)(`/`)
            });
    }
}


}),

}]);