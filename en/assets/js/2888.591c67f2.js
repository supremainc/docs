"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2888"], {
35465: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  K: () => (__name)
});
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });




}),
54235: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (layouts_default)
});
/* ESM import */var _chunks_mermaid_layout_elk_core_chunk_ZW26E7AF_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35465);


// src/layouts.ts
var loader = /* @__PURE__ */ (0,_chunks_mermaid_layout_elk_core_chunk_ZW26E7AF_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */.K)(async () => await Promise.all(/* import() */ [__webpack_require__.e("9471"), __webpack_require__.e("3939")]).then(__webpack_require__.bind(__webpack_require__, 31486)), "loader");
var algos = ["elk.stress", "elk.force", "elk.mrtree", "elk.sporeOverlap"];
var layouts = [
  {
    name: "elk",
    loader,
    algorithm: "elk.layered"
  },
  ...algos.map((algo) => ({
    name: algo,
    loader,
    algorithm: algo
  }))
];
var layouts_default = layouts;



}),

}]);