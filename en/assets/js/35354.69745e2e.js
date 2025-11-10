"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["35354"], {
26305: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CollectionAuthentication_vue_r)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/active-entities.js + 1 modules
var active_entities = __webpack_require__(17342);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/store.js + 10 modules
var store = __webpack_require__(99456);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/views/Request/RequestSection/RequestAuth/RequestAuth.vue.js + 10 modules
var RequestAuth_vue = __webpack_require__(63193);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/CollectionAuthentication.vue2.js





const C = { class: "flex h-full w-full flex-col gap-12 px-1.5 pt-8" }, V = { class: "flex flex-col gap-4" }, g = { class: "flex flex-col gap-2" }, k = { class: "flex h-8 items-center justify-between" }, N = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "CollectionAuthentication",
  setup(b) {
    const {
      activeCollection: t,
      activeEnvVariables: n,
      activeEnvironment: s,
      activeServer: r,
      activeWorkspace: i
    } = (0,active_entities/* .useActiveEntities */.JC)(), { collectionMutators: a } = (0,store/* .useWorkspace */.hA)(), u = () => {
      t.value?.uid && a.edit(
        t.value.uid,
        "useCollectionSecurity",
        !t.value.useCollectionSecurity
      );
    };
    return (w, l) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", C, [
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", V, [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", g, [
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", k, [
            l[0] || (l[0] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("h3", { class: "font-bold" }, "Authentication", -1)),
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarToggle */.$J), {
              class: "w-4",
              modelValue: (0,vue_runtime_esm_bundler/* .unref */.R1)(t)?.useCollectionSecurity ?? !1,
              "onUpdate:modelValue": u
            }, null, 8, ["modelValue"])
          ]),
          l[1] || (l[1] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("p", { class: "pr-6 text-sm" }, " Added authentication will apply to all requests under this collection. You can override this by specifying another one in the request. ", -1))
        ]),
        (0,vue_runtime_esm_bundler/* .unref */.R1)(t) && (0,vue_runtime_esm_bundler/* .unref */.R1)(i) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(RequestAuth_vue/* ["default"] */.A), {
          key: 0,
          class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)([
            "scalar-collection-auth",
            !(0,vue_runtime_esm_bundler/* .unref */.R1)(t)?.useCollectionSecurity && "pointer-events-none opacity-50 mix-blend-luminosity"
          ]),
          collection: (0,vue_runtime_esm_bundler/* .unref */.R1)(t),
          envVariables: (0,vue_runtime_esm_bundler/* .unref */.R1)(n),
          environment: (0,vue_runtime_esm_bundler/* .unref */.R1)(s),
          layout: "client",
          selectedSecuritySchemeUids: (0,vue_runtime_esm_bundler/* .unref */.R1)(t)?.selectedSecuritySchemeUids ?? [],
          server: (0,vue_runtime_esm_bundler/* .unref */.R1)(r),
          title: "Authentication",
          workspace: (0,vue_runtime_esm_bundler/* .unref */.R1)(i)
        }, null, 8, ["class", "collection", "envVariables", "environment", "selectedSecuritySchemeUids", "server", "workspace"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
      ])
    ]));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper = __webpack_require__(94622);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/CollectionAuthentication.vue.js

/* empty css                              */

const CollectionAuthentication_vue_r = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(N, [["__scopeId", "data-v-cc87292e"]]);



}),

}]);