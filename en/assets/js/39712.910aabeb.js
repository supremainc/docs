"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["39712"], {
75483: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (w)
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92102);
/* ESM import */var _SidebarListElementForm_vue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80061);


const v = {
  key: 0,
  class: "text-c-2 text-sm leading-normal text-pretty"
}, w = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */.pM)({
  __name: "DeleteSidebarListElement",
  props: {
    variableName: {},
    warningMessage: {}
  },
  emits: ["close", "delete"],
  setup(l, { emit: o }) {
    const t = l, a = o, s = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */.EW)(() => t.variableName.length > 18 ? t.variableName.slice(0, 18) + "…" : t.variableName);
    return (n, e) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createBlock */.Wv)(_SidebarListElementForm_vue_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */.A, {
      danger: "",
      label: `Delete ${s.value}`,
      onCancel: e[0] || (e[0] = (i) => a("close")),
      onSubmit: e[1] || (e[1] = (i) => a("delete"))
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
        n.warningMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)("p", v, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .toDisplayString */.v_)(n.warningMessage), 1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createCommentVNode */.Q3)("", !0)
      ]),
      _: 1
    }, 8, ["label"]));
  }
});



}),
80061: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ a)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Actions/SidebarListElementForm.vue2.js


const g = { class: "flex justify-between gap-10" }, y = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "SidebarListElementForm",
  props: {
    danger: { type: Boolean },
    label: {}
  },
  emits: ["cancel", "submit"],
  setup(x, { emit: l }) {
    const o = l;
    return (t, e) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("form", {
      class: "flex flex-col gap-4 text-base",
      onSubmit: e[1] || (e[1] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((m) => o("submit"), ["prevent"]))
    }, [
      (0,vue_runtime_esm_bundler/* .renderSlot */.RG)(t.$slots, "default", {}, void 0, !0),
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", g, [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
          class: "flex h-8 cursor-pointer items-center gap-1.5 px-2.5 shadow-none focus:outline-none",
          type: "button",
          variant: "outlined",
          onClick: e[0] || (e[0] = (m) => o("cancel"))
        }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...e[2] || (e[2] = [
            (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Cancel ", -1)
          ])]),
          _: 1
        }),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
          class: "custom-scroll h-8 gap-1.5 px-2.5 font-medium whitespace-nowrap shadow-none focus:outline-none",
          "data-testid": "sidebar-list-element-form-submit-button",
          type: "submit",
          variant: t.danger ? "danger" : "solid"
        }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)((0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(t.label ?? "Save"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 32));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper = __webpack_require__(94622);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Actions/SidebarListElementForm.vue.js

/* empty css                            */

const a = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(y, [["__scopeId", "data-v-98703c3c"]]);



}),
6275: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ f)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs + 6 modules
var vue_router = __webpack_require__(76522);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Actions/DeleteSidebarListElement.vue.js
var DeleteSidebarListElement_vue = __webpack_require__(75483);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/routes.js
var routes = __webpack_require__(15650);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/active-entities.js + 1 modules
var active_entities = __webpack_require__(17342);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/store.js + 10 modules
var store = __webpack_require__(99456);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/CollectionSettings.vue2.js







const T = { class: "flex h-full w-full flex-col gap-12 px-1.5 pt-8" }, V = { class: "flex flex-col gap-2" }, A = { class: "bg-b-2 rounded-lg border text-sm" }, B = { class: "bg-b-1 flex items-center justify-between gap-4 rounded-t-lg p-3" }, E = { class: "text-c-1 flex items-center overflow-x-auto border-t py-1.5 whitespace-nowrap" }, I = { class: "flex items-center" }, $ = ["href"], L = { class: "flex flex-col gap-4" }, O = { class: "flex items-center justify-between rounded-lg border p-3 text-sm" }, H = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "CollectionSettings",
  setup(P) {
    const { activeCollection: o, activeWorkspace: i, activeWorkspaceCollections: x } = (0,active_entities/* .useActiveEntities */.JC)(), { collectionMutators: u } = (0,store/* .useWorkspace */.hA)(), { replace: g } = (0,vue_router/* .useRouter */.rd)(), s = (0,dist/* .useModal */.hS)();
    function h() {
      o.value && o.value?.documentUrl && u.edit(
        o.value.uid,
        "watchMode",
        !o.value?.watchMode
      );
    }
    function b() {
      if (!o.value || !i.value)
        return;
      u.delete(o.value, i.value);
      const a = x.value[0];
      a && g({
        name: "collection",
        params: {
          [routes/* .PathId.Workspace */.TU.Workspace]: i.value.uid,
          [routes/* .PathId.Collection */.TU.Collection]: a.uid
        }
      }), s.hide();
    }
    return (a, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, [
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", T, [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", V, [
          t[5] || (t[5] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", { class: "flex h-8 items-center" }, [
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("h3", { class: "font-bold" }, "Features")
          ], -1)),
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", A, [
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", B, [
              t[2] || (t[2] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", null, [
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("h4", null, "Watch Mode"),
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("p", { class: "text-c-2 mt-1" }, " When enabled, the OpenAPI document will be polled for changes. The collection will be updated automatically. ")
              ], -1)),
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarToggle */.$J), {
                class: "w-4",
                disabled: !(0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.documentUrl,
                modelValue: (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.watchMode ?? !1,
                "onUpdate:modelValue": h
              }, null, 8, ["disabled", "modelValue"])
            ]),
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", E, [
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", I, [
                (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.documentUrl ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 0 }, [
                  t[3] || (t[3] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", { class: "bg-b-2 sticky left-0 pr-2 pl-3" }, "Source", -1)),
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("a", {
                    class: "text-c-2 group rounded pr-3 no-underline hover:underline",
                    href: (0,vue_runtime_esm_bundler/* .unref */.R1)(o).documentUrl,
                    target: "_blank"
                  }, [
                    (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)((0,vue_runtime_esm_bundler/* .toDisplayString */.v_)((0,vue_runtime_esm_bundler/* .unref */.R1)(o).documentUrl) + " ", 1),
                    (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
                      class: "ml-1 hidden w-2.5 group-hover:inline",
                      icon: "ExternalLink"
                    })
                  ], 8, $)
                ], 64)) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 1 }, [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
                    class: "text-c-2 mr-2 ml-3 w-4",
                    icon: "NotAllowed",
                    size: "sm"
                  }),
                  t[4] || (t[4] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", { class: "text-c-2 pr-3" }, " No URL configured. Try importing an OpenAPI document from an URL. ", -1))
                ], 64))
              ])
            ])
          ])
        ]),
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", L, [
          t[8] || (t[8] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("h3", { class: "font-bold" }, "Danger Zone", -1)),
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", O, [
            t[7] || (t[7] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", null, [
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("h4", null, "Delete Collection"),
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("p", { class: "text-c-2 mt-1" }, " Be careful, my friend. Once deleted, there is no way to recover the collection. ")
            ], -1)),
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
              class: "custom-scroll h-8 gap-1.5 px-2.5 font-medium whitespace-nowrap shadow-none focus:outline-none",
              variant: "danger",
              onClick: t[0] || (t[0] = (w) => (0,vue_runtime_esm_bundler/* .unref */.R1)(s).show())
            }, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...t[6] || (t[6] = [
                (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Delete Collection ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ]),
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarModal */.uT), {
        size: "xxs",
        state: (0,vue_runtime_esm_bundler/* .unref */.R1)(s),
        title: `Delete ${(0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.info?.title}`
      }, {
        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DeleteSidebarListElement_vue/* ["default"] */.A, {
            variableName: (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.info?.title ?? "",
            warningMessage: "This action cannot be undone.",
            onClose: t[1] || (t[1] = (w) => (0,vue_runtime_esm_bundler/* .unref */.R1)(s).hide()),
            onDelete: b
          }, null, 8, ["variableName"])
        ]),
        _: 1
      }, 8, ["state", "title"])
    ], 64));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper = __webpack_require__(94622);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/CollectionSettings.vue.js

/* empty css                        */

const f = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(H, [["__scopeId", "data-v-f353959a"]]);



}),

}]);