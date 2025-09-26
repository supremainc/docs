"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8645"], {
78532: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  diagram: () => (diagram)
});
/* ESM import */var _chunk_5NNNAHNI_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39092);
/* ESM import */var _chunk_7B677QYD_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10136);
/* ESM import */var _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12022);
/* ESM import */var _mermaid_js_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70307);




// src/diagrams/info/infoParser.ts

var parser = {
  parse: /* @__PURE__ */ (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_1__/* .__name */.K2)(async (input) => {
    const ast = await (0,_mermaid_js_parser__WEBPACK_IMPORTED_MODULE_2__/* .parse */.qg)("info", input);
    _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_1__/* .log.debug */.Rm.debug(ast);
  }, "parse")
};

// src/diagrams/info/infoDb.ts
var DEFAULT_INFO_DB = { version: _chunk_5NNNAHNI_mjs__WEBPACK_IMPORTED_MODULE_3__/* .package_default.version */.n.version };
var getVersion = /* @__PURE__ */ (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_1__/* .__name */.K2)(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};

// src/diagrams/info/infoRenderer.ts
var draw = /* @__PURE__ */ (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_1__/* .__name */.K2)((text, id, version) => {
  _chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_1__/* .log.debug */.Rm.debug("rendering info diagram\n" + text);
  const svg = (0,_chunk_7B677QYD_mjs__WEBPACK_IMPORTED_MODULE_0__/* .selectSvgElement */.D)(id);
  (0,_chunk_YTJNT7DU_mjs__WEBPACK_IMPORTED_MODULE_1__/* .configureSvgSize */.a$)(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };

// src/diagrams/info/infoDiagram.ts
var diagram = {
  parser,
  db,
  renderer
};



}),

}]);