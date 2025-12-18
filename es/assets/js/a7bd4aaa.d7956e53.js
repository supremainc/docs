"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5575"], {
8295: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DocVersionRoot)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99727);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12068);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82370);
/* ESM import */var _docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22831);
/* ESM import */var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10500);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function DocVersionRootMetadata(props) {
    const { version } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.A, {
                version: version.version,
                tag: (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .getDocsVersionSearchTag */.k)(version.pluginId, version.version)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .PageMetadata */.be, {
                children: version.noIndex && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
            })
        ]
    });
}
function DocVersionRootContent(props) {
    const { version, route } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .HtmlClassNameProvider */.e3, {
        className: version.className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .DocsVersionProvider */.n, {
            version: version,
            children: (0,_docusaurus_renderRoutes__WEBPACK_IMPORTED_MODULE_6__/* .renderRoutes */.v)(route.routes)
        })
    });
}
function DocVersionRoot(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocVersionRootMetadata, {
                ...props
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocVersionRootContent, {
                ...props
            })
        ]
    });
}


}),

}]);