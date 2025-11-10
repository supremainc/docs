"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8039"], {
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
63307: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ r)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/assets/keycap.ascii.js
const n = `          .:=+++++=================-
         .--#*                       :.
        .-:-**                        -.
      .:-::-+*                        =:
     .:-:::-=#                         ::
    .-:::----**                        ..
   .-:::::---=#                         ..
  :-::::::----**                         ..
.:-::::::::----*=                        ..
.-::::::::------+-                        ..
..::::::::-------=                         ..
 .:::::----------++                        ..
   .:::----------+**+*++*+*++*+++*++++++++++:.
   ------------+*+=-=======================.
   .----------+*+=========================:.
    :--------+*+=-========================.
    .=------+*+=-========================:.
     .=----+*+=-------=================+-.
     .----+*+=----------================.
     .:=-+*+=----------=-==============-
      .-+*+=----------------===========.
       .-+=------------------====-====:.`;


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ScalarAsciiArt.vue.js + 1 modules
var ScalarAsciiArt_vue = __webpack_require__(57723);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/EmptyState.vue2.js




const p = { class: "flex-center flex w-full scale-75" }, m = { class: "relative" }, d = { class: "relative -ml-12" }, h = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "EmptyState",
  setup(_) {
    return (f, a) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", p, [
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", m, [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarHotkey */.RH), {
          class: "keycap-hotkey right-14 border-transparent py-0 text-xl",
          hotkey: ""
        }),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ScalarAsciiArt_vue/* ["default"] */.A, {
          art: (0,vue_runtime_esm_bundler/* .unref */.R1)(n),
          class: "text-c-3 !leading-[6px]"
        }, null, 8, ["art"])
      ]),
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", d, [
        a[0] || (a[0] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", { class: "keycap-hotkey right-16 text-xl" }, "K", -1)),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ScalarAsciiArt_vue/* ["default"] */.A, {
          art: (0,vue_runtime_esm_bundler/* .unref */.R1)(n),
          class: "keycap-n !leading-[6px]"
        }, null, 8, ["art"])
      ])
    ]));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper = __webpack_require__(94622);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/EmptyState.vue.js

/* empty css                */

const r = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(h, [["__scopeId", "data-v-45a9fc44"]]);



}),
54616: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (q)
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92102);
/* ESM import */var _scalar_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4859);
/* ESM import */var _DataTable_DataTable_vue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83638);
/* ESM import */var _DataTable_DataTableInput_vue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15054);
/* ESM import */var _DataTable_DataTableRow_vue_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83920);
/* ESM import */var _ViewLayout_ViewLayoutSection_vue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70139);
/* ESM import */var _store_active_entities_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17342);







const B = { key: 0 }, D = { class: "flex flex-1 flex-col gap-1.5" }, F = ["for"], I = { class: "centered-y bg-b-2 flex-center absolute right-1 z-1 rounded px-1 py-0.5" }, q = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .defineComponent */.pM)({
  __name: "Form",
  props: {
    title: {},
    options: {},
    data: {},
    onUpdate: { type: Function }
  },
  setup(N) {
    const { activeEnvVariables: f, activeEnvironment: k, activeWorkspace: s } = (0,_store_active_entities_js__WEBPACK_IMPORTED_MODULE_6__/* .useActiveEntities */.JC)(), i = (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .useId */.Bi)();
    return (e, T) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createBlock */.Wv)(_ViewLayout_ViewLayoutSection_vue_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */.A, { class: "last:rounded-b-lg" }, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createSlots */.eX)({
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("div", D, [
          Object.keys(e.data).length > 0 && (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(s) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createBlock */.Wv)(_DataTable_DataTable_vue_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.A, {
            key: 0,
            columns: [""],
            class: "rounded-b-lg"
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(!0), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)(vue__WEBPACK_IMPORTED_MODULE_0__/* .Fragment */.FK, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .renderList */.pI)(e.options, (a, d) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createBlock */.Wv)(_DataTable_DataTableRow_vue_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.A, {
                key: d,
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .normalizeClass */.C4)({ "border-t": d === 0 })
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */.bF)(_DataTable_DataTableInput_vue_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.A, {
                    class: "pr-9",
                    lineWrapping: "",
                    id: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(i),
                    envVariables: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(f),
                    environment: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(k),
                    modelValue: e.data[a.key] ?? "",
                    placeholder: a.placeholder,
                    workspace: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(s),
                    "onUpdate:modelValue": (_) => e.onUpdate(a.key, _)
                  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createSlots */.eX)({
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("label", { for: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(i) }, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .toDisplayString */.v_)(a.label), 9, F)
                    ]),
                    _: 2
                  }, [
                    a.key === "description" ? {
                      name: "icon",
                      fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementVNode */.Lk)("div", I, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createVNode */.bF)((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .unref */.R1)(_scalar_components__WEBPACK_IMPORTED_MODULE_1__/* .ScalarIcon */.kv), {
                            icon: "Markdown",
                            size: "lg"
                          })
                        ])
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["id", "envVariables", "environment", "modelValue", "placeholder", "workspace", "onUpdate:modelValue"])
                ]),
                _: 2
              }, 1032, ["class"]))), 128))
            ]),
            _: 1
          })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createCommentVNode */.Q3)("", !0)
        ])
      ]),
      _: 2
    }, [
      e.title || e.$slots.title ? {
        name: "title",
        fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .withCtx */.k6)(() => [
          e.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__/* .openBlock */.uX)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .createElementBlock */.CE)("span", B, (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .toDisplayString */.v_)(e.title), 1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__/* .renderSlot */.RG)(e.$slots, "title", { key: 1 })
        ]),
        key: "0"
      } : void 0
    ]), 1024));
  }
});



}),
57723: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ i)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/ScalarAsciiArt.vue2.js

const c = 500, o = 100, k = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "ScalarAsciiArt",
  props: {
    art: {},
    animate: { type: Boolean }
  },
  setup(m) {
    const p = m, e = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => p.art.split(`
`)), u = (t, l) => ({
      animationDuration: `${t * o}ms, ${c}ms`,
      animationTimingFunction: `steps(${t}), step-end`,
      animationDelay: `${l * o}ms, 0ms`,
      animationIterationCount: `1, ${((e.value?.length ?? 0) + (e.value?.[e.value?.length - 1]?.length ?? 0) + 5) * o / c}`
    });
    return (t, l) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", {
      "aria-hidden": "true",
      class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["ascii-art font-code flex flex-col items-start text-[6px] leading-[7px]", { "ascii-art-animate": t.animate }]),
      role: "presentation",
      inert: ""
    }, [
      ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(e.value, (n, s) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("span", {
        key: s,
        class: "inline-block",
        style: (0,vue_runtime_esm_bundler/* .normalizeStyle */.Tr)({ width: `calc(${n.length + 1}ch)` })
      }, [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", {
          class: "inline-block whitespace-pre overflow-hidden",
          style: (0,vue_runtime_esm_bundler/* .normalizeStyle */.Tr)(u(n.length, s))
        }, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(n), 5)
      ], 4))), 128))
    ], 2));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper = __webpack_require__(94622);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/ScalarAsciiArt.vue.js

/* empty css                    */

const i = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(k, [["__scopeId", "data-v-69ebd973"]]);



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
9034: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ _e)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@scalar/oas-utils/dist/entities/cookie/index.js + 1 modules
var cookie = __webpack_require__(84427);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs + 6 modules
var vue_router = __webpack_require__(76522);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/EmptyState.vue.js + 2 modules
var EmptyState_vue = __webpack_require__(63307);
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
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/routes.js
var routes = __webpack_require__(15650);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Form/Form.vue.js
var Form_vue = __webpack_require__(54616);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/active-entities.js + 1 modules
var active_entities = __webpack_require__(17342);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/store.js + 10 modules
var store = __webpack_require__(99456);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Cookies/CookieForm.vue.js





const x = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "CookieForm",
  setup(f) {
    const { activeCookieId: e } = (0,active_entities/* .useActiveEntities */.JC)(), { cookies: t, cookieMutators: i } = (0,store/* .useWorkspace */.hA)(), c = [
      { label: "Name", key: "name", placeholder: "session_id" },
      { label: "Value", key: "value", placeholder: "my-cookie-session-id" },
      { label: "Domain", key: "domain", placeholder: "example.com" }
      // TODO: We don't check the path (yet), so we don't need to show it.
      // { label: 'Path', key: 'path', placeholder: '/' },
    ], m = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => t[e.value] || cookie/* .cookieSchema.parse */.c.parse({
        name: "",
        value: "",
        domain: "",
        path: ""
      })
    ), n = (o, a) => {
      i.edit(e.value, o, a);
    };
    return (o, a) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(Form_vue/* ["default"] */.A, {
      data: m.value,
      onUpdate: n,
      options: c
    }, null, 8, ["data"]));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/use-toasts/dist/index.js + 3 modules
var use_toasts_dist = __webpack_require__(35050);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/CommandPalette/CommandActionForm.vue.js
var CommandActionForm_vue = __webpack_require__(3131);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/CommandPalette/CommandActionInput.vue.js
var CommandActionInput_vue = __webpack_require__(95077);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Cookies/CookieModal.vue2.js





const U = { class: "flex h-8 items-start gap-2 text-sm" }, CookieModal_vue2_$ = { class: "flex h-8 items-start gap-2 text-sm" }, w = { class: "flex h-8 items-start gap-2 text-sm" }, _ = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "CookieModal",
  props: {
    state: {}
  },
  emits: ["cancel", "submit"],
  setup(r, { emit: p }) {
    const u = r, d = p, a = (0,vue_runtime_esm_bundler/* .ref */.KR)({
      name: "",
      value: "",
      domain: ""
    }), { toast: f } = (0,use_toasts_dist/* .useToasts */.Yf)(), v = () => {
      if (!a.value.name || !a.value.value) {
        f("Please fill in all fields before adding a cookie.", "error");
        return;
      }
      d("submit", a.value), u.state.hide();
    };
    return (0,vue_runtime_esm_bundler/* .watch */.wB)(
      () => u.state.open,
      (s) => {
        s && (a.value = {
          name: "",
          value: "",
          domain: ""
        });
      }
    ), (s, e) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarModal */.uT), {
      size: "xs",
      state: s.state,
      title: "Add Cookie"
    }, {
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(CommandActionForm_vue/* ["default"] */.A, {
          disabled: !a.value.name || !a.value.value,
          onCancel: e[3] || (e[3] = (o) => d("cancel")),
          onSubmit: v
        }, {
          submit: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...e[7] || (e[7] = [
            (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("Add Cookie", -1)
          ])]),
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", U, [
              e[4] || (e[4] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Name: ", -1)),
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)(CommandActionInput_vue/* ["default"] */.A, {
                modelValue: a.value.name,
                "onUpdate:modelValue": e[0] || (e[0] = (o) => a.value.name = o),
                autofocus: "",
                class: "!p-0",
                placeholder: "session_id"
              }, null, 8, ["modelValue"])
            ]),
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", CookieModal_vue2_$, [
              e[5] || (e[5] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Value: ", -1)),
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)(CommandActionInput_vue/* ["default"] */.A, {
                modelValue: a.value.value,
                "onUpdate:modelValue": e[1] || (e[1] = (o) => a.value.value = o),
                autofocus: "",
                class: "!p-0",
                placeholder: "my-cookie-session-id"
              }, null, 8, ["modelValue"])
            ]),
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", w, [
              e[6] || (e[6] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Domain: ", -1)),
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)(CommandActionInput_vue/* ["default"] */.A, {
                modelValue: a.value.domain,
                "onUpdate:modelValue": e[2] || (e[2] = (o) => a.value.domain = o),
                autofocus: "",
                class: "!p-0",
                placeholder: "example.com"
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


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper = __webpack_require__(94622);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Cookies/CookieModal.vue.js

/* empty css                 */

const CookieModal_vue_p = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(_, [["__scopeId", "data-v-694018d6"]]);


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Sidebar.vue.js + 1 modules
var Sidebar_vue = __webpack_require__(37120);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Cookies/Cookies.vue2.js

















const Z = { class: "flex-1" }, ee = { class: "relative mb-[.5px] last:mb-0" }, _e = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "Cookies",
  setup(oe) {
    const { cookies: m, cookieMutators: p, events: k, workspaceMutators: v } = (0,store/* .useWorkspace */.hA)(), { activeWorkspace: n, activeCookieId: M } = (0,active_entities/* .useActiveEntities */.JC)(), r = (0,vue_router/* .useRouter */.rd)(), C = (0,vue_router/* .useRoute */.lq)(), d = (0,dist/* .useModal */.hS)(), g = (t) => {
      const o = cookie/* .cookieSchema.parse */.c.parse({
        name: t.name,
        value: t.value,
        domain: t.domain,
        path: "/"
      });
      p.add(o), v.edit(n.value?.uid, "cookies", [
        ...n.value?.cookies ?? [],
        o.uid
      ]), r.push({
        name: "cookies",
        params: {
          cookies: o.uid
        }
      });
    }, E = (t) => {
      p.delete(t), v.edit(n.value?.uid, "cookies", [
        ...(n.value?.cookies ?? []).filter((e) => e !== t)
      ]);
      const o = Object.values(m).filter(
        (e) => e.uid !== t
      );
      if (o.length > 0) {
        const e = o[o.length - 1];
        e && r.push(e.uid);
      } else
        r.push({
          name: "cookies",
          params: {
            [routes/* .PathId.Cookies */.TU.Cookies]: "default"
          }
        });
    }, f = () => {
      d.show();
    }, h = (t) => {
      t?.createNew && C.name === "cookies" && f();
    }, N = (t, o) => {
      const e = {
        name: "cookies",
        params: {
          workspace: n.value?.uid ?? "default",
          cookies: o
        }
      };
      if (t.metaKey) {
        const u = r.resolve(e).href;
        window.open(u, "_blank");
        return;
      }
      r.push(e);
    };
    (0,vue_runtime_esm_bundler/* .onMounted */.sV)(() => k.hotKeys.on(h)), (0,vue_runtime_esm_bundler/* .onBeforeUnmount */.xo)(() => k.hotKeys.off(h));
    const S = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => m[M.value]
    ), $ = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => Object.keys(m).length > 0 && S.value
    );
    return (0,vue_runtime_esm_bundler/* .watch */.wB)(
      () => C.query.openCookieModal,
      (t) => {
        t === "true" && f();
      },
      { immediate: !0 }
    ), (t, o) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayout_vue/* ["default"] */.A, null, {
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(Sidebar_vue/* ["default"] */.A), { title: "Cookies" }, {
          content: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", Z, [
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)(SidebarList_vue/* ["default"] */.A, null, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(Object.values((0,vue_runtime_esm_bundler/* .unref */.R1)(m)), (e) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("li", {
                    key: e.uid,
                    class: "gap-1/2 flex flex-col"
                  }, [
                    (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", ee, [
                      ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(SidebarListElement_vue/* ["default"] */.A, {
                        key: e.uid,
                        class: "text-xs",
                        isDeletable: "",
                        to: {
                          name: "cookies",
                          params: {
                            [(0,vue_runtime_esm_bundler/* .unref */.R1)(routes/* .PathId */.TU).Cookies]: e.uid
                          }
                        },
                        type: "cookies",
                        variable: { name: e.name, uid: e.uid },
                        warningMessage: "Are you sure you want to delete this cookie?",
                        onClick: (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((u) => N(u, e.uid), ["prevent"]),
                        onDelete: (u) => E(e.uid)
                      }, null, 8, ["to", "variable", "onClick", "onDelete"]))
                    ])
                  ]))), 128))
                ]),
                _: 1
              })
            ])
          ]),
          button: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)(SidebarButton_vue/* ["default"] */.A, {
              click: f,
              hotkey: "N"
            }, {
              title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...o[1] || (o[1] = [
                (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Add Cookie ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ViewLayoutContent_vue/* ["default"] */.A, { class: "flex-1" }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            $.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayoutSection_vue/* ["default"] */.A, {
              key: 0,
              class: "*:border-b-0"
            }, {
              title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...o[2] || (o[2] = [
                (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("Edit Cookie", -1)
              ])]),
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                (0,vue_runtime_esm_bundler/* .createVNode */.bF)(x)
              ]),
              _: 1
            })) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(EmptyState_vue/* ["default"] */.A, { key: 1 }))
          ]),
          _: 1
        }),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(CookieModal_vue_p, {
          state: (0,vue_runtime_esm_bundler/* .unref */.R1)(d),
          onCancel: o[0] || (o[0] = (e) => (0,vue_runtime_esm_bundler/* .unref */.R1)(d).hide()),
          onSubmit: g
        }, null, 8, ["state"])
      ]),
      _: 1
    }));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Cookies/Cookies.vue.js




}),

}]);