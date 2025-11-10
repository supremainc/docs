"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["45915"], {
3131: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (h)
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92102);
/* ESM import */var _scalar_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4859);


const v = { class: "flex gap-2" }, w = { class: "flex max-h-8 flex-1" }, h = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */.pM)({
  __name: "CommandActionForm",
  props: {
    loading: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["submit", "cancel", "back"],
  setup(B) {
    const { cx: n } = (0,_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .useBindCx */.AX)();
    return (e, o) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)("form", {
      class: "flex w-full flex-col gap-3",
      onKeydown: o[0] || (o[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withKeys */.jR)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withModifiers */.D$)(() => {
      }, ["stop"]), ["enter"])),
      onSubmit: o[1] || (o[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withModifiers */.D$)((C) => !e.disabled && e.$emit("submit"), ["prevent", "stop"]))
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeProps */._B)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .guardReactiveProps */.Ng)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(n)("relative flex min-h-20 flex-col rounded"))), [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .renderSlot */.RG)(e.$slots, "default")
      ], 16),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("div", v, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("div", w, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .renderSlot */.RG)(e.$slots, "options")
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */.bF)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarButton */.RO), {
          class: "max-h-8 px-3 text-xs",
          disabled: e.disabled,
          loading: e.loading,
          type: "submit"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .renderSlot */.RG)(e.$slots, "submit", {}, () => [
              o[2] || (o[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */.eW)("Continue", -1))
            ])
          ]),
          _: 3
        }, 8, ["disabled", "loading"])
      ])
    ], 32));
  }
});



}),
95077: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (E)
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92102);

const k = ["placeholder"], E = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */.pM)({
  inheritAttrs: !1,
  __name: "CommandActionInput",
  props: {
    modelValue: {},
    placeholder: {},
    autofocus: { type: Boolean }
  },
  emits: ["update:modelValue", "onDelete"],
  setup(s, { emit: i }) {
    const n = s, r = i, a = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */.KR)(null);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .onMounted */.sV)(
      () => (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .nextTick */.dY)(() => {
        n.autofocus || a.value?.focus();
      })
    );
    const l = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */.EW)({
      get: () => n.modelValue ?? "",
      set: (e) => r("update:modelValue", e)
    });
    function p(e) {
      if (e.shiftKey || !e.target)
        return;
      e.preventDefault();
      const t = e.target, o = new Event("submit", { cancelable: !0 });
      t.form?.dispatchEvent(o);
    }
    function d(e) {
      l.value === "" && (e.preventDefault(), e.stopPropagation(), r("onDelete", e));
    }
    return (e, t) => (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withDirectives */.bo)(((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)("textarea", (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .mergeProps */.v6)({
      id: "command-action-input",
      ref_key: "input",
      ref: a,
      "onUpdate:modelValue": t[0] || (t[0] = (o) => l.value = o),
      class: "min-h-8 w-full flex-1 resize-none border border-transparent py-1.5 pl-8.5 text-sm outline-none focus:border-b-1",
      placeholder: n.placeholder ?? "",
      wrap: "hard"
    }, e.$attrs, {
      onKeydown: [
        t[1] || (t[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withKeys */.jR)((o) => d(o), ["delete"])),
        t[2] || (t[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withKeys */.jR)((o) => p(o), ["enter"]))
      ]
    }), null, 16, k)), [
      [vue__WEBPACK_IMPORTED_MODULE_0__/* .vModelText */.Jo, l.value]
    ]);
  }
});



}),
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
84076: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (C)
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92102);
/* ESM import */var _scalar_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4859);
/* ESM import */var _SidebarListElementForm_vue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80061);



const C = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */.pM)({
  __name: "EditSidebarListElement",
  props: {
    name: {}
  },
  emits: ["close", "edit"],
  setup(m, { emit: l }) {
    const r = m, n = l, t = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */.KR)(r.name);
    return (x, e) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createBlock */.Wv)(_SidebarListElementForm_vue_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.A, {
      onCancel: e[1] || (e[1] = (o) => n("close")),
      onSubmit: e[2] || (e[2] = (o) => n("edit", t.value))
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */.bF)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarTextInput */.SB), {
          modelValue: t.value,
          "onUpdate:modelValue": e[0] || (e[0] = (o) => t.value = o),
          autofocus: ""
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }));
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
86006: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ $e)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@scalar/draggable/dist/index.js + 5 modules
var draggable_dist = __webpack_require__(38543);
// EXTERNAL MODULE: ./node_modules/@scalar/icons/dist/index.js + 1513 modules
var icons_dist = __webpack_require__(48013);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Actions/DeleteSidebarListElement.vue.js
var DeleteSidebarListElement_vue = __webpack_require__(75483);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Actions/EditSidebarListElement.vue.js
var EditSidebarListElement_vue = __webpack_require__(84076);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutSection.vue.js
var ViewLayoutSection_vue = __webpack_require__(70139);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/views/Environment/EnvironmentColorModal.vue.js
var EnvironmentColorModal_vue = __webpack_require__(63610);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/views/Environment/EnvironmentModal.vue.js
var EnvironmentModal_vue = __webpack_require__(34557);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/CodeInput/CodeInput.vue.js + 5 modules
var CodeInput_vue = __webpack_require__(41873);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/DataTable/DataTable.vue.js
var DataTable_vue = __webpack_require__(83638);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/DataTable/DataTableCell.vue.js
var DataTableCell_vue = __webpack_require__(68642);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/DataTable/DataTableHeader.vue.js
var DataTableHeader_vue = __webpack_require__(51331);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/DataTable/DataTableRow.vue.js
var DataTableRow_vue = __webpack_require__(83920);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/store.js + 10 modules
var store = __webpack_require__(99456);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/components/EnvironmentForm.vue2.js









const oe = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "EnvironmentForm",
  props: {
    collection: {},
    environment: {},
    workspace: {},
    envVariables: {}
  },
  setup(l) {
    const { collectionMutators: d } = (0,store/* .useWorkspace */.hA)(), o = (0,vue_runtime_esm_bundler/* .ref */.KR)([]), y = (0,vue_runtime_esm_bundler/* .ref */.KR)(/* @__PURE__ */ new Set()), k = (0,vue_runtime_esm_bundler/* .ref */.KR)(/* @__PURE__ */ new Map()), u = (0,vue_runtime_esm_bundler/* .ref */.KR)(!1), M = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      if (!l.environment?.value)
        return [{ key: "", value: "" }];
      try {
        const e = JSON.parse(l.environment.value), a = Object.entries(e).map(([t, n]) => ({
          key: t,
          value: String(n)
        }));
        return a.length === 0 ? [{ key: "", value: "" }] : a;
      } catch {
        return [{ key: "", value: "" }];
      }
    }), x = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      const e = o.value[o.value.length - 1];
      return e ? e.key || e.value ? [...o.value, { key: "", value: "" }] : o.value : [{ key: "", value: "" }];
    }), p = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      const e = /* @__PURE__ */ new Map();
      return o.value.forEach((a, t) => {
        if (a.key) {
          const n = e.get(a.key) || [];
          n.push(t), e.set(a.key, n);
        }
      }), k.value.forEach((a, t) => {
        if (a) {
          const n = e.get(a) || [];
          n.push(t), e.set(a, n);
        }
      }), Array.from(e.values()).filter((a) => a.length > 1).flat();
    });
    (0,vue_runtime_esm_bundler/* .watch */.wB)(
      M,
      (e) => {
        o.value = [...e], y.value = new Set(e.map((a) => a.key).filter(Boolean));
      },
      { immediate: !0 }
    );
    const C = async (e, a, t) => {
      if (!u.value) {
        if (a === "key") {
          k.value.set(e, t);
          const n = new Set(y.value), r = o.value[e];
          if (r && n.delete(r.key), n.has(t))
            return;
        }
        u.value = !0;
        try {
          const n = [...o.value], r = n[e];
          if (!r)
            return;
          n[e] = {
            key: a === "key" ? t : r.key,
            value: a === "value" ? t : r.value
          }, !n[e].key && !n[e].value && e !== n.length - 1 && n.splice(e, 1);
          const v = n.reduce(
            (s, { key: B, value: I }) => ((B || I) && (s[B] = I), s),
            {}
          );
          if (l.collection) {
            const s = {
              ...l.collection["x-scalar-environments"],
              [l.environment.name]: {
                ...l.collection["x-scalar-environments"]?.[l.environment.name],
                variables: v
              }
            };
            await d.edit(
              l.collection.uid,
              "x-scalar-environments",
              s
            );
          }
          if (e === o.value.length - 1) {
            const s = n[n.length - 1];
            s && (s.key || s.value) && await w();
          }
          await (0,vue_runtime_esm_bundler/* .nextTick */.dY)(), o.value = n, a === "key" && (y.value = new Set(
            n.map((s) => s.key).filter(Boolean)
          ), k.value.delete(e));
        } finally {
          u.value = !1;
        }
      }
    }, w = async () => {
      if (!u.value) {
        u.value = !0;
        try {
          const e = [...o.value, { key: "", value: "" }], a = e.reduce(
            (t, { key: n, value: r }) => ((n || r) && (t[n] = r), t),
            {}
          );
          if (l.collection) {
            const t = {
              ...l.collection["x-scalar-environments"],
              [l.environment.name]: {
                ...l.collection["x-scalar-environments"]?.[l.environment.name],
                variables: a
              }
            };
            await d.edit(
              l.collection.uid,
              "x-scalar-environments",
              t
            );
          }
          await (0,vue_runtime_esm_bundler/* .nextTick */.dY)(), o.value = e;
        } finally {
          u.value = !1;
        }
      }
    }, N = async (e) => {
      if (!u.value) {
        u.value = !0;
        try {
          const a = [...o.value];
          a.splice(e, 1);
          const t = a.reduce(
            (n, { key: r, value: v }) => ((r || v) && (n[r] = v), n),
            {}
          );
          if (l.collection) {
            const n = {
              ...l.collection["x-scalar-environments"],
              [l.environment.name]: {
                ...l.collection["x-scalar-environments"]?.[l.environment.name],
                variables: t
              }
            };
            await d.edit(
              l.collection.uid,
              "x-scalar-environments",
              n
            );
          }
          await (0,vue_runtime_esm_bundler/* .nextTick */.dY)(), o.value = a;
        } finally {
          u.value = !1;
        }
      }
    }, S = async () => {
      if (o.value.length === 0)
        await w();
      else if (o.value.length >= 1) {
        const e = o.value[o.value.length - 1];
        e && (e.key || e.value) && await w();
      }
    };
    return (0,vue_runtime_esm_bundler/* .onMounted */.sV)(() => {
      S();
    }), (0,vue_runtime_esm_bundler/* .watch */.wB)(
      () => o.value,
      () => {
        S();
      }
    ), (e, a) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(DataTable_vue/* ["default"] */.A, {
      class: "group/table flex-1",
      columns: ["", ""]
    }, {
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTableRow_vue/* ["default"] */.A, { class: "sr-only !block" }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTableHeader_vue/* ["default"] */.A, null, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...a[0] || (a[0] = [
                (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("Key", -1)
              ])]),
              _: 1
            }),
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTableHeader_vue/* ["default"] */.A, null, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...a[1] || (a[1] = [
                (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("Value", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(x.value, (t, n) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(DataTableRow_vue/* ["default"] */.A, {
          key: n,
          class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)({
            error: p.value.includes(n)
          })
        }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTableCell_vue/* ["default"] */.A, null, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                (0,vue_runtime_esm_bundler/* .createVNode */.bF)(CodeInput_vue/* ["default"] */.A, {
                  disableCloseBrackets: "",
                  disableEnter: "",
                  disableTabIndent: "",
                  lineWrapping: "",
                  environment: e.environment,
                  envVariables: e.envVariables,
                  modelValue: t.key,
                  placeholder: "Key",
                  workspace: e.workspace,
                  "onUpdate:modelValue": (r) => C(n, "key", r)
                }, (0,vue_runtime_esm_bundler/* .createSlots */.eX)({ _: 2 }, [
                  p.value.includes(n) ? {
                    name: "icon",
                    fn: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                      (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(icons_dist/* .ScalarIconWarning */.aQ8), { class: "text-red mr-0.75 size-3.5 brightness-[.9]" })
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["environment", "envVariables", "modelValue", "workspace", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DataTableCell_vue/* ["default"] */.A, null, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                (0,vue_runtime_esm_bundler/* .createVNode */.bF)(CodeInput_vue/* ["default"] */.A, {
                  class: "pr-6 group-hover:pr-10 group-has-[.cm-focused]:pr-10",
                  disableCloseBrackets: "",
                  disableEnter: "",
                  disableTabIndent: "",
                  lineWrapping: "",
                  environment: e.environment,
                  envVariables: e.envVariables,
                  modelValue: t.value,
                  placeholder: "Value",
                  workspace: e.workspace,
                  "onUpdate:modelValue": (r) => C(n, "value", r)
                }, {
                  icon: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                    t.key || t.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
                      key: 0,
                      class: "text-c-2 hover:text-c-1 hover:bg-b-2 z-context hidden h-fit rounded p-1 group-hover:flex group-has-[.cm-focused]:flex",
                      size: "sm",
                      variant: "ghost",
                      onClick: (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((r) => N(n), ["stop"])
                    }, {
                      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(icons_dist/* .ScalarIconTrash */.QIv), { class: "size-3.5" })
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
                  ]),
                  _: 2
                }, 1032, ["environment", "envVariables", "modelValue", "workspace", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["class"]))), 128))
      ]),
      _: 1
    }));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper = __webpack_require__(94622);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/components/EnvironmentForm.vue.js

/* empty css                     */

const EnvironmentForm_vue_c = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(oe, [["__scopeId", "data-v-83bfcc8a"]]);


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/active-entities.js + 1 modules
var active_entities = __webpack_require__(17342);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/CollectionEnvironment.vue2.js












const re = { class: "flex h-full w-full flex-col gap-12 px-1.5 pt-8" }, ie = { class: "flex flex-col gap-4" }, ce = { class: "rounded-lg border" }, de = { class: "bg-b-2 flex cursor-grab items-center justify-between rounded-t-lg px-1 py-1 text-sm" }, ue = { class: "flex items-center" }, ve = ["onClick"], me = { class: "text-c-3 flex h-full items-center justify-center rounded-lg border p-4" }, $e = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "CollectionEnvironment",
  setup(fe) {
    const { activeCollection: n, activeWorkspace: w, activeEnvVariables: S } = (0,active_entities/* .useActiveEntities */.JC)(), { collectionMutators: m } = (0,store/* .useWorkspace */.hA)(), x = (0,dist/* .useModal */.hS)(), b = (0,dist/* .useModal */.hS)(), h = (0,dist/* .useModal */.hS)(), g = (0,dist/* .useModal */.hS)(), $ = (0,vue_runtime_esm_bundler/* .ref */.KR)(""), l = (0,vue_runtime_esm_bundler/* .ref */.KR)(null), E = (0,vue_runtime_esm_bundler/* .ref */.KR)(void 0), D = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => n.value?.["x-scalar-environments"] ? Object.entries(n.value["x-scalar-environments"]).map(
      ([o, t]) => ({
        uid: o,
        name: o,
        value: JSON.stringify(t.variables || {}),
        color: t.color || "#FFFFFF"
      })
    ) : []), V = () => {
      !n.value?.uid || !l.value || (m.removeEnvironment(
        l.value,
        n.value.uid
      ), b.hide());
    }, N = (o) => {
      l.value = o, b.show();
    }, j = (o) => {
      n.value?.uid && (m.addEnvironment(
        o.name,
        {
          variables: {},
          color: o.color
        },
        n.value.uid
      ), h.hide());
    }, z = (o) => {
      l.value = o.name, $.value = o.color || "#FFFFFF", x.show();
    }, O = (o) => {
      if (!n.value?.uid || !l.value)
        return;
      const t = {
        ...n.value["x-scalar-environments"],
        [l.value]: {
          variables: n.value["x-scalar-environments"]?.[l.value]?.variables || {},
          color: o
        }
      };
      m.edit(
        n.value.uid,
        "x-scalar-environments",
        t
      ), x.hide();
    }, A = (o) => {
      l.value = o, E.value = o, g.show();
    }, B = () => {
      l.value = null, E.value = void 0, g.hide();
    }, W = (o) => {
      if (!n.value?.uid || !l.value)
        return;
      const t = { ...n.value["x-scalar-environments"] };
      if (!t[l.value])
        return;
      const i = {}, c = Object.entries(t), f = c.findIndex(
        ([v]) => v === l.value
      );
      c.forEach(([v, p], d) => {
        d === f ? i[o] = p : i[v] = p;
      }), m.edit(
        n.value.uid,
        "x-scalar-environments",
        i
      ), l.value = null, E.value = void 0, g.hide();
    }, R = (o, t) => {
      if (!n.value?.uid)
        return;
      const s = { ...n.value["x-scalar-environments"] }, i = {}, c = Object.entries(s), f = c.findIndex(([d]) => d === o.id), v = c.findIndex(([d]) => d === t.id);
      if (f === -1 || v === -1)
        return;
      const p = c[f];
      p && (c.splice(f, 1), c.splice(v, 0, p), c.forEach(([d, T]) => {
        i[d] = T;
      }), m.edit(
        n.value.uid,
        "x-scalar-environments",
        i
      ));
    };
    return (o, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayoutSection_vue/* ["default"] */.A, null, {
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", re, [
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", ie, [
            t[5] || (t[5] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", { class: "flex items-start justify-between gap-2" }, [
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", { class: "flex flex-col gap-2" }, [
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", { class: "flex h-8 items-center" }, [
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("h3", { class: "font-bold" }, "Environment Variables")
                ]),
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("p", { class: "text-sm" }, [
                  (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Set environment variables at your collection level. Use "),
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("code", { class: "font-code text-c-2" }, "{{ variable }}"),
                  (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" to add / search among the selected environment's variables in your request inputs. ")
                ])
              ])
            ], -1)),
            ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(D.value, (s) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(draggable_dist/* .Draggable */.s), {
              key: s.name,
              id: s.name,
              isDraggable: !0,
              isDroppable: !0,
              parentIds: [],
              onOnDragEnd: R
            }, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", ce, [
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", de, [
                    (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", ue, [
                      (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
                        class: "hover:bg-b-3 flex h-6 w-6 p-1",
                        onClick: (i) => z(s),
                        variant: "ghost"
                      }, {
                        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", {
                            style: (0,vue_runtime_esm_bundler/* .normalizeStyle */.Tr)({ backgroundColor: s.color || "#FFFFFF" }),
                            class: "h-2.5 w-2.5 rounded-full"
                          }, null, 4)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("button", {
                        class: "hover:bg-b-3 rounded px-1 py-0.5 text-sm",
                        onClick: (i) => A(s.name)
                      }, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(s.name), 9, ve)
                    ]),
                    (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
                      class: "hover:bg-b-3 hover:text-c-1 h-fit p-1.25",
                      variant: "ghost",
                      onClick: (i) => N(s.name)
                    }, {
                      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(icons_dist/* .ScalarIconTrash */.QIv), { class: "size-3.5" })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  (0,vue_runtime_esm_bundler/* .unref */.R1)(n) && (0,vue_runtime_esm_bundler/* .unref */.R1)(w) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(EnvironmentForm_vue_c, {
                    key: 0,
                    collection: (0,vue_runtime_esm_bundler/* .unref */.R1)(n),
                    environment: s,
                    envVariables: (0,vue_runtime_esm_bundler/* .unref */.R1)(S),
                    workspace: (0,vue_runtime_esm_bundler/* .unref */.R1)(w)
                  }, null, 8, ["collection", "environment", "envVariables", "workspace"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
                ])
              ]),
              _: 2
            }, 1032, ["id"]))), 128)),
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", me, [
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
                class: "hover:bg-b-2 hover:text-c-1 flex items-center gap-2",
                size: "sm",
                variant: "ghost",
                onClick: t[0] || (t[0] = (s) => (0,vue_runtime_esm_bundler/* .unref */.R1)(h).show())
              }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
                    class: "inline-flex",
                    icon: "Add",
                    size: "sm",
                    thickness: "1.5"
                  }),
                  t[4] || (t[4] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, "Add Environment", -1))
                ]),
                _: 1
              })
            ])
          ]),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarModal */.uT), {
            size: "xxs",
            state: (0,vue_runtime_esm_bundler/* .unref */.R1)(b),
            title: `Delete ${l.value || "Environment"}`
          }, {
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DeleteSidebarListElement_vue/* ["default"] */.A, {
                variableName: "Environment",
                warningMessage: "Are you sure you want to delete this environment? This action cannot be undone.",
                onClose: t[1] || (t[1] = (s) => (0,vue_runtime_esm_bundler/* .unref */.R1)(b).hide()),
                onDelete: V
              })
            ]),
            _: 1
          }, 8, ["state", "title"]),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(EnvironmentModal_vue/* ["default"] */.A, {
            activeWorkspaceCollections: (0,vue_runtime_esm_bundler/* .unref */.R1)(n) ? [(0,vue_runtime_esm_bundler/* .unref */.R1)(n)] : [],
            collectionId: (0,vue_runtime_esm_bundler/* .unref */.R1)(n)?.uid,
            state: (0,vue_runtime_esm_bundler/* .unref */.R1)(h),
            onCancel: t[2] || (t[2] = (s) => (0,vue_runtime_esm_bundler/* .unref */.R1)(h).hide()),
            onSubmit: j
          }, null, 8, ["activeWorkspaceCollections", "collectionId", "state"]),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(EnvironmentColorModal_vue/* ["default"] */.A, {
            selectedColor: $.value,
            state: (0,vue_runtime_esm_bundler/* .unref */.R1)(x),
            onCancel: t[3] || (t[3] = (s) => (0,vue_runtime_esm_bundler/* .unref */.R1)(x).hide()),
            onSubmit: O
          }, null, 8, ["selectedColor", "state"]),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarModal */.uT), {
            size: "xxs",
            state: (0,vue_runtime_esm_bundler/* .unref */.R1)(g),
            title: `Edit ${l.value}`
          }, {
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)(EditSidebarListElement_vue/* ["default"] */.A, {
                name: E.value ?? "",
                onClose: B,
                onEdit: W
              }, null, 8, ["name"])
            ]),
            _: 1
          }, 8, ["state", "title"])
        ])
      ]),
      _: 1
    }));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/CollectionEnvironment.vue.js

/* empty css                           */



}),
63610: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (M)
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92102);
/* ESM import */var _scalar_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4859);
/* ESM import */var _components_Sidebar_Actions_SidebarListElementForm_vue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80061);
/* ESM import */var _EnvironmentColors_vue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66162);




const b = { class: "flex flex-col gap-4" }, M = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */.pM)({
  __name: "EnvironmentColorModal",
  props: {
    state: {},
    selectedColor: {}
  },
  emits: ["cancel", "submit"],
  setup(r, { emit: a }) {
    const s = r, o = a, e = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */.KR)(""), c = (t) => {
      e.value = t;
    }, i = () => {
      o("submit", e.value), e.value = "";
    };
    return (t, l) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createBlock */.Wv)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarModal */.uT), {
      size: "xxs",
      state: t.state,
      title: "Edit Environment Color"
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("div", b, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */.bF)(_EnvironmentColors_vue_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.A, {
            activeColor: e.value || s.selectedColor,
            class: "w-full p-1",
            onSelect: c
          }, null, 8, ["activeColor"]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */.bF)(_components_Sidebar_Actions_SidebarListElementForm_vue_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.A, {
            onCancel: l[0] || (l[0] = (E) => o("cancel")),
            onSubmit: i
          })
        ])
      ]),
      _: 1
    }, 8, ["state"]));
  }
});



}),
66162: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (U)
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92102);
/* ESM import */var _scalar_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4859);


const R = ["onClick"], T = ["placeholder"], U = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */.pM)({
  __name: "EnvironmentColors",
  props: {
    activeColor: {},
    selector: { type: Boolean, default: !1 }
  },
  emits: ["select"],
  setup(x, { emit: F }) {
    const e = x, z = F, o = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */.KR)(""), C = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */.KR)(null), a = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */.KR)(!1), u = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */.KR)(!1), k = [
      { color: "#FFFFFF" },
      { color: "#EF0006" },
      { color: "#EDBE20" },
      { color: "#069061" },
      { color: "#FB892C" },
      { color: "#0082D0" },
      { color: "#5203D1" },
      { color: "#FFC0CB" }
    ], b = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */.EW)(() => e.activeColor && !k.some((l) => l.color === e.activeColor) || o.value ? `background-color: ${e.activeColor || o.value};` : "background: linear-gradient(to right, rgb(235, 87, 87), rgb(242, 201, 76), rgb(76, 183, 130), rgb(78, 167, 252), rgb(250, 96, 122));"), y = () => {
      a.value = !a.value, e.selector && (u.value = !1), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .nextTick */.dY)(() => {
        C.value && C.value.focus();
      });
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .watch */.wB)(o, (l) => {
      l && !l.startsWith("#") && (o.value = `#${l}`), a.value = !0;
    });
    const B = () => {
      e.selector && (u.value = !u.value);
    }, g = (l) => {
      z("select", l), e.selector && (u.value = !1);
    };
    return (l, i) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)("div", null, [
      a.value ? (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createCommentVNode */.Q3)("", !0) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)(vue__WEBPACK_IMPORTED_MODULE_0__/* .Fragment */.FK, { key: 0 }, [
        e.selector && !u.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)("div", {
          key: 0,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeClass */.C4)(["flex cursor-pointer items-center justify-center rounded-full", e.selector ? "h-4 w-4" : "h-5 w-5"]),
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeStyle */.Tr)({ backgroundColor: l.activeColor }),
          onClick: B
        }, [
          l.activeColor ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createBlock */.Wv)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarIcon */.kv), {
            key: 0,
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeClass */.C4)(["text-c-btn", e.selector && "p-0.5"]),
            icon: "Checkmark",
            size: "xs"
          }, null, 8, ["class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createCommentVNode */.Q3)("", !0)
        ], 6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createCommentVNode */.Q3)("", !0),
        u.value || !e.selector ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)("div", {
          key: 1,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeClass */.C4)(["color-selector flex flex-row items-center justify-between gap-1.5 space-x-1", e.selector ? "h-4" : "min-h-10 min-w-[296px]"])
        }, [
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)(vue__WEBPACK_IMPORTED_MODULE_0__/* .Fragment */.FK, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .renderList */.pI)(k, (r) => (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("div", {
            key: r.color,
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeClass */.C4)(["flex cursor-pointer items-center justify-center rounded-full", e.selector ? "h-4 w-4" : "h-5 w-5"]),
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeStyle */.Tr)({ backgroundColor: r.color }),
            onClick: (L) => g(r.color)
          }, [
            l.activeColor === r.color && !o.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createBlock */.Wv)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarIcon */.kv), {
              key: 0,
              class: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeClass */.C4)(["text-c-btn", e.selector && "p-0.5"]),
              icon: "Checkmark",
              size: "xs"
            }, null, 8, ["class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createCommentVNode */.Q3)("", !0)
          ], 14, R)), 64)),
          i[2] || (i[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("hr", { class: "border-ghost h-5 w-0.5 border-l" }, null, -1)),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("label", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeClass */.C4)(["z-10 flex cursor-pointer flex-row items-center justify-center gap-2 rounded-full", e.selector ? "h-4 w-4" : "h-5 w-5"]),
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeStyle */.Tr)(b.value),
            onClick: y
          }, [
            !a.value && (l.activeColor === o.value || l.activeColor && !k.some((r) => r.color === l.activeColor)) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createBlock */.Wv)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarIcon */.kv), {
              key: 0,
              class: "text-c-btn",
              icon: "Checkmark",
              size: "xs"
            })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createCommentVNode */.Q3)("", !0)
          ], 6)
        ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createCommentVNode */.Q3)("", !0)
      ], 64)),
      a.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)("div", {
        key: 1,
        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeClass */.C4)(["color-selector flex flex-1 items-center gap-2 rounded", e.selector ? "h-4" : "min-h-10"])
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("span", {
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeClass */.C4)(["absolute rounded-full border border-dashed", e.selector ? "h-4 w-4" : "h-5 w-5"])
        }, null, 2),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("span", {
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeClass */.C4)(["z-[1] rounded-full", e.selector ? "h-4 w-4" : "h-5 w-5"]),
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeStyle */.Tr)(b.value)
        }, null, 6),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withDirectives */.bo)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("input", {
          ref_key: "customColorInputRef",
          ref: C,
          "onUpdate:modelValue": i[0] || (i[0] = (r) => o.value = r),
          class: "w-full flex-1 border-transparent text-sm outline-none",
          placeholder: l.activeColor || "#000000",
          type: "text",
          onInput: i[1] || (i[1] = (r) => g(o.value))
        }, null, 40, T), [
          [vue__WEBPACK_IMPORTED_MODULE_0__/* .vModelText */.Jo, o.value]
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("button", {
          class: "text-c-3 hover:bg-b-2 rounded-lg p-1.5",
          type: "button",
          onClick: y
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */.bF)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarIcon */.kv), {
            icon: "Checkmark",
            size: "xs"
          })
        ])
      ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createCommentVNode */.Q3)("", !0)
    ]));
  }
});



}),
34557: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (J)
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92102);
/* ESM import */var _scalar_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4859);
/* ESM import */var _scalar_use_toasts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35050);
/* ESM import */var _components_CommandPalette_CommandActionForm_vue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3131);
/* ESM import */var _components_CommandPalette_CommandActionInput_vue_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95077);
/* ESM import */var _EnvironmentColors_vue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66162);
/* ESM import */var _store_store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99456);







const W = { class: "flex items-start gap-2" }, J = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */.pM)({
  __name: "EnvironmentModal",
  props: {
    state: {},
    activeWorkspaceCollections: {},
    collectionId: {}
  },
  emits: ["cancel", "submit"],
  setup(x, { emit: g }) {
    const a = x, f = g, { events: F } = (0,_store_store_js__WEBPACK_IMPORTED_MODULE_6__/* .useWorkspace */.hA)(), n = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */.KR)(""), r = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */.KR)("#FFFFFF"), c = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .computed */.EW)(() => [
      ...a.activeWorkspaceCollections.filter((t) => t.info?.title !== "Drafts").map((t) => ({
        id: t.uid,
        label: t.info?.title ?? "Untitled Collection"
      }))
    ]), e = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .ref */.KR)(
      c.value.find((t) => t.id === a.collectionId)
    ), { toast: b } = (0,_scalar_use_toasts__WEBPACK_IMPORTED_MODULE_2__/* .useToasts */.Yf)(), S = (t) => {
      r.value = t;
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .watch */.wB)(
      () => a.state.open,
      (t) => {
        t && (n.value = "", r.value = "#FFFFFF", a.collectionId ? e.value = c.value.find(
          (l) => l.id === a.collectionId
        ) : e.value = void 0);
      }
    );
    const V = () => {
      if (!n.value.trim()) {
        b("Please enter a name before adding an environment.", "error");
        return;
      }
      if (!e.value?.id) {
        b("Please select a collection before adding an environment.", "error");
        return;
      }
      f("submit", {
        name: n.value,
        color: r.value,
        type: e.value?.id === "global" ? "global" : "collection",
        collectionId: e.value?.id !== "global" ? e.value?.id : void 0
      });
    }, k = () => {
      a.state.hide(), F.commandPalette.emit({ commandName: "Create Collection" });
    };
    return (t, l) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createBlock */.Wv)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarModal */.uT), {
      bodyClass: "border-t-0 rounded-t-lg",
      size: "xs",
      state: t.state
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */.bF)(_components_CommandPalette_CommandActionForm_vue_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.A, {
          disabled: !e.value || !n.value.trim(),
          onCancel: l[2] || (l[2] = (d) => f("cancel")),
          onSubmit: V
        }, {
          options: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */.bF)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarListbox */.cy), {
              modelValue: e.value,
              "onUpdate:modelValue": l[1] || (l[1] = (d) => e.value = d),
              options: c.value,
              placeholder: "Select Type"
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
                c.value.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createBlock */.Wv)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarButton */.RO), {
                  key: 0,
                  class: "hover:bg-b-2 max-h-8 w-fit justify-between gap-1 p-2 text-xs",
                  variant: "outlined"
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("span", {
                      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeClass */.C4)(e.value ? "text-c-1" : "text-c-3")
                    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .toDisplayString */.v_)(e.value ? e.value.label : "Select Collection"), 3),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */.bF)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarIcon */.kv), {
                      class: "text-c-3",
                      icon: "ChevronDown",
                      size: "xs"
                    })
                  ]),
                  _: 1
                })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createBlock */.Wv)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarButton */.RO), {
                  key: 1,
                  class: "hover:bg-b-2 max-h-8 justify-between gap-1 p-2 text-xs",
                  variant: "outlined",
                  onClick: k
                }, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [...l[3] || (l[3] = [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("span", { class: "text-c-1" }, "Create Collection", -1)
                  ])]),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["modelValue", "options"])
          ]),
          submit: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [...l[4] || (l[4] = [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createTextVNode */.eW)(" Add Environment ", -1)
          ])]),
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("div", W, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */.bF)(_EnvironmentColors_vue_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */.A, {
                activeColor: r.value,
                class: "peer",
                selector: "",
                onSelect: S
              }, null, 8, ["activeColor"]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */.bF)(_components_CommandPalette_CommandActionInput_vue_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.A, {
                modelValue: n.value,
                "onUpdate:modelValue": l[0] || (l[0] = (d) => n.value = d),
                class: "-mt-[.5px] !p-0 peer-has-[.color-selector]:hidden",
                placeholder: "Environment name"
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }, 8, ["state"]));
  }
});



}),

}]);