"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4314"], {
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
66606: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (g)
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92102);
/* ESM import */var _scalar_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4859);
/* ESM import */var _hooks_useLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68864);



const g = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */.pM)({
  __name: "SidebarButton",
  props: {
    click: { type: Function },
    hotkey: {}
  },
  setup(a) {
    const l = a, { layout: n } = (0,_hooks_useLayout_js__WEBPACK_IMPORTED_MODULE_2__/* .useLayout */.g)(), c = () => {
      l.click();
    };
    return (t, h) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createBlock */.Wv)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarButton */.RO), {
      class: "bg-b-1 text-c-1 hover:bg-b-2 group relative h-auto w-auto border px-2 py-1 md:w-full md:p-1.5",
      variant: "outlined",
      onClick: c
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .renderSlot */.RG)(t.$slots, "title"),
        t.hotkey && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(n) === "desktop" ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createBlock */.Wv)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarHotkey */.RH), {
          key: 0,
          class: "text-c-2 add-item-hotkey absolute right-2 hidden group-hover:opacity-80 md:flex",
          hotkey: t.hotkey
        }, null, 8, ["hotkey"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createCommentVNode */.Q3)("", !0)
      ]),
      _: 3
    }));
  }
});



}),
36598: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (_)
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92102);
/* ESM import */var _virtual_plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94622);


const s = {}, l = { class: "gap-1/2 flex flex-col px-3 pb-[75px]" };
function n(e, f) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)("ul", l, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .renderSlot */.RG)(e.$slots, "default")
  ]);
}
const _ = /* @__PURE__ */ (0,_virtual_plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */.A)(s, [["render", n]]);



}),
29449: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ SidebarListElement_vue_p)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@scalar/draggable/dist/index.js + 5 modules
var draggable_dist = __webpack_require__(38543);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs + 6 modules
var vue_router = __webpack_require__(76522);
// EXTERNAL MODULE: ./node_modules/@scalar/use-hooks/dist/useClipboard/index.js + 1 modules
var useClipboard = __webpack_require__(75202);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Actions/DeleteSidebarListElement.vue.js
var DeleteSidebarListElement_vue = __webpack_require__(75483);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/SidebarListElementActions.vue.js




const E = { class: "absolute right-1 flex opacity-0 group-hover:opacity-100" }, R = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "SidebarListElementActions",
  props: {
    variable: {},
    warningMessage: {},
    isCopyable: { type: Boolean },
    isDeletable: { type: Boolean },
    isRenameable: { type: Boolean }
  },
  emits: ["delete", "rename"],
  setup(d, { emit: p }) {
    const b = p, o = (0,vue_runtime_esm_bundler/* .ref */.KR)({ action: "None", name: "" }), s = (0,dist/* .useModal */.hS)(), { copyToClipboard: v } = (0,useClipboard/* .useClipboard */.i)();
    function f(e) {
      o.value = { action: e, name: d.variable.name }, s.show();
    }
    function c() {
      s.hide(), o.value = { action: "None", name: "" };
    }
    function y(e) {
      b("delete", e), c();
    }
    return (e, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, [
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", E, [
        e.isCopyable ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("button", {
          key: 0,
          class: "text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-[5px]",
          type: "button",
          onClick: t[0] || (t[0] = (u) => (0,vue_runtime_esm_bundler/* .unref */.R1)(v)(e.variable.name))
        }, [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
            class: "h-3 w-3",
            icon: "Clipboard"
          })
        ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
        e.isRenameable ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("button", {
          key: 1,
          class: "text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-[5px]",
          type: "button",
          onClick: t[1] || (t[1] = (u) => b("rename", e.variable.uid))
        }, [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
            class: "h-3 w-3",
            icon: "Edit"
          })
        ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
        !e.variable.isDefault && e.isDeletable ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("button", {
          key: 2,
          class: "text-c-3 hover:bg-b-3 hover:text-c-1 rounded p-1",
          type: "button",
          onClick: t[2] || (t[2] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((u) => f(
            "Delete"
            /* Delete */
          ), ["prevent"]))
        }, [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
            class: "h-3.5 w-3.5",
            icon: "Close"
          })
        ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
      ]),
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarModal */.uT), {
        size: "sm",
        state: (0,vue_runtime_esm_bundler/* .unref */.R1)(s),
        title: `${o.value.action} ${o.value.name}`
      }, {
        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          o.value.action === "Delete" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(DeleteSidebarListElement_vue/* ["default"] */.A, {
            key: 0,
            variableName: o.value.name,
            warningMessage: e.warningMessage,
            onClose: c,
            onDelete: t[3] || (t[3] = (u) => y(e.variable.uid))
          }, null, 8, ["variableName", "warningMessage"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
        ]),
        _: 1
      }, 8, ["state", "title"])
    ], 64));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/SidebarListElement.vue2.js





const O = { class: "empty-variable-name line-clamp-1 text-sm break-all group-hover:pr-5" }, q = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "SidebarListElement",
  props: {
    variable: {},
    warningMessage: {},
    to: {},
    isDeletable: { type: Boolean },
    isCopyable: { type: Boolean },
    isRenameable: { type: Boolean },
    isDraggable: { type: Boolean, default: !1 },
    isDroppable: { type: [Boolean, Function], default: !1 },
    collectionId: {}
  },
  emits: ["delete", "colorModal", "rename", "onDragEnd"],
  setup(i, { emit: u }) {
    const o = u, t = (0,vue_router/* .useRouter */.rd)(), f = (e) => {
      e.metaKey ? window.open(t.resolve(i.to).href, "_blank") : t.push(i.to);
    }, c = (e) => {
      o("delete", e);
    }, v = (e) => {
      o("colorModal", e);
    }, D = (e) => {
      o("rename", e);
    }, y = (0,vue_runtime_esm_bundler/* .ref */.KR)(null), s = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => ({
      ceiling: 0.5,
      floor: 0.5
    }));
    return (e, l) => {
      const k = (0,vue_runtime_esm_bundler/* .resolveComponent */.g2)("router-link");
      return (0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("li", null, [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(draggable_dist/* .Draggable */.s), {
          id: e.variable.uid,
          ref_key: "draggableRef",
          ref: y,
          ceiling: s.value.ceiling,
          floor: s.value.floor,
          isDraggable: e.isDraggable,
          isDroppable: e.isDroppable,
          parentIds: e.collectionId ? [e.collectionId] : [],
          onOnDragEnd: l[2] || (l[2] = (...a) => e.$emit("onDragEnd", ...a))
        }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)(k, {
              class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["text-c-2 hover:bg-b-2 group relative flex h-8 items-center gap-1.5 rounded py-1 pr-1.5 font-medium no-underline", [e.variable.color ? "pl-5" : "pl-1.5"]]),
              exactActiveClass: "bg-b-2 !text-c-1",
              role: "button",
              to: e.to,
              onClick: l[1] || (l[1] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((a) => f(a), ["prevent"]))
            }, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                e.variable.color ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("button", {
                  key: 0,
                  class: "hover:bg-b-3 rounded p-1.5",
                  type: "button",
                  onClick: l[0] || (l[0] = (a) => v(e.variable.uid))
                }, [
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
                    class: "h-2.5 w-2.5 rounded-xl",
                    style: (0,vue_runtime_esm_bundler/* .normalizeStyle */.Tr)({ backgroundColor: e.variable.color })
                  }, null, 4)
                ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
                e.variable.icon ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
                  key: 1,
                  class: "text-sidebar-c-2 size-3.5 stroke-[2.25]",
                  icon: e.variable.icon
                }, null, 8, ["icon"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", O, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(e.variable.name), 1),
                (0,vue_runtime_esm_bundler/* .createVNode */.bF)(R, {
                  isCopyable: !!e.isCopyable,
                  isDeletable: !!e.isDeletable,
                  isRenameable: !!e.isRenameable,
                  variable: { ...e.variable, isDefault: e.variable.isDefault ?? !1 },
                  warningMessage: e.warningMessage,
                  onDelete: c,
                  onRename: D
                }, null, 8, ["isCopyable", "isDeletable", "isRenameable", "variable", "warningMessage"])
              ]),
              _: 1
            }, 8, ["class", "to"])
          ]),
          _: 1
        }, 8, ["id", "ceiling", "floor", "isDraggable", "isDroppable", "parentIds"])
      ]);
    };
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper = __webpack_require__(94622);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/SidebarListElement.vue.js

/* empty css                        */
/* empty css                        */

const SidebarListElement_vue_p = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(q, [["__scopeId", "data-v-0b6c70e4"]]);



}),
14074: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (u)
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92102);
/* ESM import */var _scalar_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4859);


const u = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */.pM)({
  __name: "ViewLayout",
  setup(m) {
    const { cx: e } = (0,_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .useBindCx */.AX)();
    return (r, s) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeProps */._B)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .guardReactiveProps */.Ng)(
      (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(e)(
        "flex flex-col min-h-0 flex-1 *:border-t first:*:border-t-0 md:*:border-t-0 xl:overflow-hidden md:flex-row leading-3"
      )
    )), [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .renderSlot */.RG)(r.$slots, "default")
    ], 16));
  }
});



}),
42149: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (x)
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92102);
/* ESM import */var _virtual_plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94622);


const c = {}, s = { class: "custom-scroll flex flex-col pr-0 *:border-t *:first:border-t-0 xl:flex-row *:xl:border-t-0 *:xl:border-l *:first:xl:border-l-0" };
function n(r, f) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)("div", s, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .renderSlot */.RG)(r.$slots, "default")
  ]);
}
const x = /* @__PURE__ */ (0,_virtual_plugin_vue_export_helper_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */.A)(c, [["render", n]]);



}),
9057: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ vn)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@scalar/icons/dist/library/index.js + 86 modules
var library = __webpack_require__(76371);
// EXTERNAL MODULE: ./node_modules/@scalar/use-toasts/dist/index.js + 3 modules
var use_toasts_dist = __webpack_require__(35050);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs + 6 modules
var vue_router = __webpack_require__(76522);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/CodeInput/CodeInput.vue.js + 5 modules
var CodeInput_vue = __webpack_require__(41873);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Actions/EditSidebarListElement.vue.js
var EditSidebarListElement_vue = __webpack_require__(84076);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Sidebar.vue.js + 1 modules
var Sidebar_vue = __webpack_require__(37120);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/SidebarButton.vue.js
var SidebarButton_vue = __webpack_require__(66606);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/SidebarList.vue.js
var SidebarList_vue = __webpack_require__(36598);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/SidebarListElement.vue.js + 2 modules
var SidebarListElement_vue = __webpack_require__(29449);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayout.vue.js
var ViewLayout_vue = __webpack_require__(14074);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutContent.vue.js
var ViewLayoutContent_vue = __webpack_require__(42149);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutSection.vue.js
var ViewLayoutSection_vue = __webpack_require__(70139);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/hooks/useSidebar.js
var useSidebar = __webpack_require__(58360);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/routes.js
var routes = __webpack_require__(15650);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/active-entities.js + 1 modules
var active_entities = __webpack_require__(17342);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/views/Environment/EnvironmentColorModal.vue.js
var EnvironmentColorModal_vue = __webpack_require__(63610);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/views/Environment/EnvironmentModal.vue.js
var EnvironmentModal_vue = __webpack_require__(34557);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Environment/handle-drag.js
function handle_drag_U(l, v) {
  return {
    handleDragEnd: (t, d) => {
      if (!t || !d)
        return;
      const { id: s, parentId: i } = t, { id: x, parentId: p, offset: u } = d;
      if (i !== p)
        return;
      const e = l.value.find((n) => n.uid === i);
      if (!e || !e["x-scalar-environments"])
        return;
      const o = e["x-scalar-environments"], r = Object.keys(o);
      ({ ...o });
      const f = r.findIndex((n) => n === s);
      r.splice(f, 1);
      const g = r.findIndex((n) => n === x) + (u === 1 ? 1 : 0);
      r.splice(g, 0, s);
      const I = r.reduce(
        (n, a) => {
          const c = o[a];
          return c && (n[a] = c), n;
        },
        {}
      );
      e["x-scalar-environments"] = I, v.edit(e.uid, "x-scalar-environments", e["x-scalar-environments"]);
    },
    isDroppable: (t, d) => t.parentId === d.parentId
  };
}


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/store.js + 10 modules
var store = __webpack_require__(99456);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Environment/Environment.vue2.js





















const Ae = { class: "flex-1" }, Be = ["onClick"], Le = { class: "flex h-5 max-w-[14px] items-center justify-center" }, vn = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "Environment",
  setup(Ke) {
    const k = (0,vue_router/* .useRouter */.rd)(), b = (0,vue_router/* .useRoute */.lq)(), {
      activeWorkspace: f,
      activeEnvironment: j,
      activeWorkspaceCollections: c,
      activeEnvVariables: P
    } = (0,active_entities/* .useActiveEntities */.JC)(), { events: F, workspaceMutators: Q, collectionMutators: x } = (0,store/* .useWorkspace */.hA)(), { collapsedSidebarFolders: g, toggleSidebarFolder: _ } = (0,useSidebar/* .useSidebar */.cL)(), w = (0,dist/* .useModal */.hS)(), M = (0,dist/* .useModal */.hS)(), D = (0,dist/* .useModal */.hS)(), N = (0,vue_runtime_esm_bundler/* .ref */.KR)(null), r = (0,vue_runtime_esm_bundler/* .ref */.KR)("default"), R = (0,vue_runtime_esm_bundler/* .ref */.KR)(""), h = (0,vue_runtime_esm_bundler/* .ref */.KR)(void 0), m = (0,vue_runtime_esm_bundler/* .ref */.KR)(void 0), I = (0,vue_runtime_esm_bundler/* .ref */.KR)(void 0), { toast: W } = (0,use_toasts_dist/* .useToasts */.Yf)(), X = (e) => JSON.parse(e);
    function U(e, t, n) {
      e && (t.uid === n ? W(
        `Environment name already used in ${t.info?.title}`,
        "error"
      ) : W("Environment name already used in another collection", "error"));
    }
    const E = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => c.value.filter(
      (e) => e.info?.title !== "Drafts"
    ));
    function Y(e) {
      E.value.some(
        (n) => {
          const o = Object.keys(
            n["x-scalar-environments"] || {}
          ).includes(e.name);
          return U(o, n, e.collectionId), o;
        }
      ) || (e.collectionId && (x.addEnvironment(
        e.name,
        {
          variables: {},
          color: e.color
        },
        e.collectionId
      ), g[e.collectionId] || _(e.collectionId), k.push({
        name: "environment.collection",
        params: {
          [routes/* .PathId.Collection */.TU.Collection]: e.collectionId,
          [routes/* .PathId.Environment */.TU.Environment]: e.name
        }
      })), M.hide());
    }
    function Z(e) {
      if (!j)
        return;
      const t = X(e);
      if (r.value === "default")
        Q.edit(
          f.value?.uid,
          "environments",
          t
        );
      else {
        const n = c.value.find(
          (o) => o["x-scalar-environments"]?.[r.value ?? ""]
        );
        if (n?.["x-scalar-environments"]?.[r.value ?? ""]) {
          const o = n["x-scalar-environments"][r.value ?? ""];
          o && (o.variables = t, x.edit(
            n.uid,
            "x-scalar-environments",
            n["x-scalar-environments"]
          ));
        }
      }
    }
    const S = (e) => {
      h.value = e, M.show();
    }, ee = (e, t) => {
      m.value = e, h.value = t, I.value = e, D.show();
    }, ne = (e) => {
      N.value = e, R.value = c.value.find(
        (t) => t["x-scalar-environments"]?.[e]
      )?.["x-scalar-environments"]?.[e]?.color ?? "", w.show();
    }, te = (e) => {
      const t = N.value;
      typeof t == "string" && (c.value.some(
        (o) => o["x-scalar-environments"]?.[t]
      ) && c.value.forEach((o) => {
        o["x-scalar-environments"]?.[t] && (o["x-scalar-environments"][t].color = e, x.edit(
          o.uid,
          "x-scalar-environments",
          o["x-scalar-environments"]
        ));
      }), w.hide());
    };
    function oe(e) {
      E.value.forEach((n) => {
        x.removeEnvironment(e, n.uid);
      });
      const t = E.value.flatMap(
        (n) => Object.keys(n["x-scalar-environments"] || {})
      );
      if (t.length > 0) {
        const n = t[t.length - 1];
        if (!n)
          return;
        const o = c.value.find(
          (i) => Object.keys(i["x-scalar-environments"] || {}).includes(
            n
          )
        );
        r.value = n, k.push({
          name: "environment.collection",
          params: {
            [routes/* .PathId.Collection */.TU.Collection]: o?.uid,
            [routes/* .PathId.Environment */.TU.Environment]: n
          }
        }), o && !g[o.uid] && _(o.uid);
      } else
        r.value = "default", k.push({
          name: "environment.default",
          params: {
            [routes/* .PathId.Workspace */.TU.Workspace]: f.value?.uid
          }
        });
    }
    const ae = () => r.value === "default" ? "Global Environment" : r.value, re = () => r.value === "default" ? JSON.stringify(f.value?.environments, null, 2) : JSON.stringify(
      c.value.find(
        (e) => e["x-scalar-environments"]?.[r.value ?? ""]
      )?.["x-scalar-environments"]?.[r.value ?? ""]?.variables,
      null,
      2
    ), le = (e) => g[e], z = (e) => {
      e?.createNew && b.name === "environment" && S();
    };
    (0,vue_runtime_esm_bundler/* .watch */.wB)(
      () => [b.params[routes/* .PathId.Collection */.TU.Collection], b.params[routes/* .PathId.Environment */.TU.Environment]],
      ([e, t]) => {
        e ? r.value = t : r.value = "default";
      }
    ), (0,vue_runtime_esm_bundler/* .onMounted */.sV)(() => {
      r.value = b.params[routes/* .PathId.Environment */.TU.Environment] || "default", F.hotKeys.on(z);
      const e = b.params[routes/* .PathId.Collection */.TU.Collection];
      e && !g[e] && _(e);
    }), (0,vue_runtime_esm_bundler/* .onBeforeUnmount */.xo)(() => F.hotKeys.off(z));
    const ie = (e, t, n) => {
      const o = n ? {
        name: "environment.collection",
        params: {
          [routes/* .PathId.Workspace */.TU.Workspace]: f.value?.uid,
          [routes/* .PathId.Collection */.TU.Collection]: n,
          [routes/* .PathId.Environment */.TU.Environment]: t
        }
      } : {
        name: "environment.default",
        params: {
          [routes/* .PathId.Workspace */.TU.Workspace]: f.value?.uid,
          [routes/* .PathId.Environment */.TU.Environment]: t
        }
      };
      e.metaKey ? window.open(k.resolve(o).href, "_blank") : k.push(o);
    };
    function se() {
      m.value = void 0, h.value = void 0, I.value = void 0, D.hide();
    }
    function ue(e) {
      E.value.some(
        (n) => {
          const o = Object.keys(
            n["x-scalar-environments"] || {}
          ).includes(e);
          return U(
            o,
            n,
            h.value
          ), o;
        }
      ) || (e && m.value !== "default" && c.value.forEach((n) => {
        if (n["x-scalar-environments"]?.[m.value ?? ""]) {
          const o = n["x-scalar-environments"], i = {};
          Object.keys(o).forEach((v) => {
            const $ = o[v];
            $ && (v === m.value ? i[e] = $ : i[v] = $);
          }), n["x-scalar-environments"] = i, x.edit(
            n.uid,
            "x-scalar-environments",
            n["x-scalar-environments"]
          );
        }
      }), e && r.value === m.value && (r.value = e), m.value = void 0, h.value = void 0, I.value = void 0, D.hide());
    }
    const { handleDragEnd: ce, isDroppable: me } = handle_drag_U(
      c,
      x
    );
    return (0,vue_runtime_esm_bundler/* .watch */.wB)(
      () => b.query.openEnvironmentModal,
      (e) => {
        e === "true" && S();
      },
      { immediate: !0 }
    ), (e, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayout_vue/* ["default"] */.A, null, {
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(Sidebar_vue/* ["default"] */.A, { title: "Collections" }, {
          content: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", Ae, [
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)(SidebarList_vue/* ["default"] */.A, null, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(SidebarListElement_vue/* ["default"] */.A, {
                    key: "default",
                    class: "text-xs",
                    isCopyable: !1,
                    to: {
                      name: "environment",
                      params: {
                        [(0,vue_runtime_esm_bundler/* .unref */.R1)(routes/* .PathId */.TU).Environment]: "default"
                      }
                    },
                    type: "environment",
                    variable: {
                      name: "Global Environment",
                      uid: "default",
                      icon: "Globe",
                      isDefault: !0
                    }
                  }, null, 8, ["to"])),
                  ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(E.value, (n) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("li", {
                    key: n.uid,
                    class: "gap-1/2 flex flex-col"
                  }, [
                    (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("button", {
                      class: "hover:bg-b-2 group flex w-full items-center gap-1.5 rounded p-1.5 text-left text-sm font-medium break-words",
                      type: "button",
                      onClick: (o) => (0,vue_runtime_esm_bundler/* .unref */.R1)(_)(n.uid)
                    }, [
                      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", Le, [
                        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(library/* .LibraryIcon */.$n), {
                          class: "text-sidebar-c-2 size-3.5 min-w-3.5 stroke-2 group-hover:hidden",
                          src: n["x-scalar-icon"] || "interface-content-folder"
                        }, null, 8, ["src"]),
                        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
                          class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)({
                            "rotate-90": (0,vue_runtime_esm_bundler/* .unref */.R1)(g)[n.uid]
                          })
                        }, [
                          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
                            class: "text-c-3 hover:text-c-1 hidden text-sm group-hover:block",
                            icon: "ChevronRight",
                            size: "md"
                          })
                        ], 2)
                      ]),
                      (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" " + (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(n.info?.title ?? ""), 1)
                    ], 8, Be),
                    (0,vue_runtime_esm_bundler/* .withDirectives */.bo)((0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
                      class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)({
                        "before:bg-border relative mb-[.5px] before:pointer-events-none before:absolute before:top-0 before:left-3 before:z-1 before:h-[calc(100%_+_.5px)] before:w-[.5px] last:mb-0 last:before:h-full": Object.keys(n["x-scalar-environments"] || {}).length > 0
                      })
                    }, [
                      ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(n["x-scalar-environments"], (o, i) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(SidebarListElement_vue/* ["default"] */.A, {
                        key: i,
                        class: "text-xs",
                        collectionId: n.uid,
                        isCopyable: !1,
                        isDeletable: !0,
                        isRenameable: !0,
                        isDraggable: !0,
                        isDroppable: (0,vue_runtime_esm_bundler/* .unref */.R1)(me),
                        to: {
                          name: "environment.collection",
                          params: {
                            [(0,vue_runtime_esm_bundler/* .unref */.R1)(routes/* .PathId */.TU).Collection]: n.uid,
                            [(0,vue_runtime_esm_bundler/* .unref */.R1)(routes/* .PathId */.TU).Environment]: i
                          }
                        },
                        type: "environment",
                        variable: {
                          name: i,
                          uid: i,
                          color: o.color ?? "#FFFFFF",
                          isDefault: !1
                        },
                        warningMessage: "Are you sure you want to delete this environment?",
                        onClick: (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((v) => ie(v, i, n.uid), ["prevent"]),
                        onColorModal: (v) => ne(i),
                        onDelete: (v) => oe(i),
                        onRename: (v) => ee(i, n.uid),
                        onOnDragEnd: (0,vue_runtime_esm_bundler/* .unref */.R1)(ce)
                      }, null, 8, ["collectionId", "isDroppable", "to", "variable", "onClick", "onColorModal", "onDelete", "onRename", "onOnDragEnd"]))), 128)),
                      Object.keys(n["x-scalar-environments"] || {}).length === 0 ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
                        key: 0,
                        class: "text-c-1 hover:bg-b-2 flex h-8 w-full justify-start gap-1.5 py-0 pl-6 text-xs",
                        variant: "ghost",
                        onClick: (o) => S(n.uid)
                      }, {
                        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
                            icon: "Add",
                            size: "sm"
                          }),
                          t[2] || (t[2] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, "Add Environment", -1))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
                    ], 2), [
                      [vue_runtime_esm_bundler/* .vShow */.aG, le(n.uid)]
                    ])
                  ]))), 128))
                ]),
                _: 1
              })
            ])
          ]),
          button: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)(SidebarButton_vue/* ["default"] */.A, {
              click: S,
              hotkey: "N"
            }, {
              title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...t[3] || (t[3] = [
                (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Add Environment ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ViewLayoutContent_vue/* ["default"] */.A, { class: "flex-1" }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ViewLayoutSection_vue/* ["default"] */.A, null, (0,vue_runtime_esm_bundler/* .createSlots */.eX)({
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                r.value && (0,vue_runtime_esm_bundler/* .unref */.R1)(f) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(CodeInput_vue/* ["default"] */.A, {
                  key: 0,
                  class: "py-2 pr-2 pl-px md:px-4",
                  envVariables: (0,vue_runtime_esm_bundler/* .unref */.R1)(P),
                  environment: (0,vue_runtime_esm_bundler/* .unref */.R1)(j),
                  language: "json",
                  lineNumbers: "",
                  lint: "",
                  modelValue: re(),
                  workspace: (0,vue_runtime_esm_bundler/* .unref */.R1)(f),
                  "onUpdate:modelValue": Z
                }, null, 8, ["envVariables", "environment", "modelValue", "workspace"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
              ]),
              _: 2
            }, [
              r.value ? {
                name: "title",
                fn: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(ae()), 1)
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ]),
          _: 1
        }),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(EnvironmentColorModal_vue/* ["default"] */.A, {
          selectedColor: R.value,
          state: (0,vue_runtime_esm_bundler/* .unref */.R1)(w),
          onCancel: t[0] || (t[0] = (n) => (0,vue_runtime_esm_bundler/* .unref */.R1)(w).hide()),
          onSubmit: te
        }, null, 8, ["selectedColor", "state"]),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(EnvironmentModal_vue/* ["default"] */.A, {
          activeWorkspaceCollections: E.value,
          collectionId: h.value,
          state: (0,vue_runtime_esm_bundler/* .unref */.R1)(M),
          onCancel: t[1] || (t[1] = (n) => (0,vue_runtime_esm_bundler/* .unref */.R1)(M).hide()),
          onSubmit: Y
        }, null, 8, ["activeWorkspaceCollections", "collectionId", "state"]),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarModal */.uT), {
          size: "xxs",
          state: (0,vue_runtime_esm_bundler/* .unref */.R1)(D),
          title: `Edit ${m.value}`
        }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)(EditSidebarListElement_vue/* ["default"] */.A, {
              name: I.value ?? "",
              onClose: se,
              onEdit: ue
            }, null, 8, ["name"])
          ]),
          _: 1
        }, 8, ["state", "title"])
      ]),
      _: 1
    }));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Environment/Environment.vue.js




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