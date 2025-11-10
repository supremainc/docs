"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9516"], {
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
52018: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ ee)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@scalar/icons/dist/index.js + 1513 modules
var icons_dist = __webpack_require__(48013);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Actions/DeleteSidebarListElement.vue.js
var DeleteSidebarListElement_vue = __webpack_require__(75483);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/active-entities.js + 1 modules
var active_entities = __webpack_require__(17342);
// EXTERNAL MODULE: ./node_modules/@scalar/oas-utils/dist/helpers/index.js + 9 modules
var helpers = __webpack_require__(28751);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Form/Form.vue.js
var Form_vue = __webpack_require__(54616);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Server/ServerVariablesForm.vue.js + 2 modules
var ServerVariablesForm_vue = __webpack_require__(52445);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/store.js + 10 modules
var store = __webpack_require__(99456);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/CollectionServerForm.vue.js






const W = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "CollectionServerForm",
  props: {
    collectionId: { default: "" },
    serverUid: { default: "" }
  },
  setup(v) {
    const l = v, { activeWorkspaceCollections: s } = (0,active_entities/* .useActiveEntities */.JC)(), { servers: d, serverMutators: i } = (0,store/* .useWorkspace */.hA)(), p = [
      {
        label: "URL",
        key: "url",
        placeholder: "https://void.scalar.com",
        type: "text"
      },
      {
        label: "Description",
        key: "description",
        placeholder: "Production",
        type: "text"
      }
    ], e = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      const r = s.value.find(
        (a) => a.uid === l.collectionId
      );
      return d[r && typeof l.serverUid == "string" && l.serverUid === "default" ? r.servers[0] ?? "" : r?.servers.find((a) => a === l.serverUid) ?? ""];
    }), f = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => e.value?.url ? e.value.url.match(helpers/* .REGEX.PATH */.QL.PATH)?.map((r) => r.slice(1, -1)) ?? [] : []);
    (0,vue_runtime_esm_bundler/* .watch */.wB)(
      f,
      (r) => {
        if (!e.value)
          return;
        const a = e.value.variables ? { ...e.value.variables } : {};
        Object.keys(a).forEach((t) => {
          r.includes(t) || delete a[t];
        }), r.forEach((t) => {
          a[t] || (a[t] = { default: "" });
        }), i.edit(e.value.uid, "variables", a);
      },
      { immediate: !0 }
    );
    const m = (r, a) => {
      !s.value || !e.value || i.edit(e.value.uid, r, a);
    }, b = (r, a) => {
      if (!e.value)
        return;
      const t = e.value.variables || {};
      t[r] = { ...t[r], default: a }, i.edit(e.value.uid, "variables", t);
    };
    return (r, a) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", {
      class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["divide-0.5 flex w-full flex-col divide-y rounded-b-lg text-sm", e.value?.variables && "bg-b-1"])
    }, [
      e.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 0 }, [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(Form_vue/* ["default"] */.A, {
          data: e.value,
          onUpdate: m,
          options: p
        }, null, 8, ["data"]),
        e.value.variables ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ServerVariablesForm_vue/* ["default"] */.A, {
          key: 0,
          variables: e.value.variables,
          "onUpdate:variable": b
        }, null, 8, ["variables"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
      ], 64)) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
    ], 2));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/CollectionServers.vue2.js







const P = { class: "flex h-full w-full flex-col gap-12 px-1.5 pt-8" }, T = { class: "flex flex-col gap-4" }, F = { class: "rounded-lg border" }, O = { class: "bg-b-2 flex items-start justify-between rounded-t-lg py-1 pr-1 pl-3 text-sm" }, R = {
  key: 1,
  class: "self-center"
}, CollectionServers_vue2_W = { class: "text-c-3 flex h-full items-center justify-center rounded-lg border p-4" }, ee = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "CollectionServers",
  setup(Y) {
    const { activeCollection: t } = (0,active_entities/* .useActiveEntities */.JC)(), { servers: u, events: p, serverMutators: x } = (0,store/* .useWorkspace */.hA)(), i = (0,dist/* .useModal */.hS)(), n = (0,vue_runtime_esm_bundler/* .ref */.KR)(null), h = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => !u || !t.value?.servers ? [] : Object.values(u).filter(
      (c) => t.value?.servers.includes(c.uid)
    )), _ = () => p.commandPalette.emit({
      commandName: "Add Server"
    }), S = () => {
      !t.value?.uid || !n.value || (x.delete(n.value, t.value.uid), i.hide());
    }, g = (c) => {
      n.value = c, i.show();
    };
    return (c, s) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", P, [
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", T, [
        s[2] || (s[2] = (0,vue_runtime_esm_bundler/* .createStaticVNode */.Fv)('<div class="flex items-start justify-between gap-2"><div class="flex flex-col gap-2"><div class="flex h-8 items-center"><h3 class="font-bold">Servers</h3></div><p class="text-sm"> Add different base URLs for your API. You can use <code class="font-code text-c-2">{variables}</code> for dynamic parts. </p></div></div>', 1)),
        ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(h.value, (l, b) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", {
          key: l.uid
        }, [
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", F, [
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", O, [
              l.description ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarMarkdown */.mi), {
                key: 0,
                class: "self-center",
                value: l.description
              }, null, 8, ["value"])) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("span", R, "Server " + (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(b + 1), 1)),
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
                class: "hover:bg-b-3 hover:text-c-1 h-fit p-1.25",
                variant: "ghost",
                onClick: (q) => g(l.uid)
              }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(icons_dist/* .ScalarIconTrash */.QIv), { class: "size-3.5" })
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            (0,vue_runtime_esm_bundler/* .unref */.R1)(t) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(W, {
              key: 0,
              collectionId: (0,vue_runtime_esm_bundler/* .unref */.R1)(t).uid,
              serverUid: l.uid
            }, null, 8, ["collectionId", "serverUid"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
          ])
        ]))), 128)),
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", CollectionServers_vue2_W, [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
            class: "hover:bg-b-2 hover:text-c-1 flex items-center gap-2",
            size: "sm",
            variant: "ghost",
            onClick: _
          }, {
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
                class: "inline-flex",
                icon: "Add",
                size: "sm",
                thickness: "1.5"
              }),
              s[1] || (s[1] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, "Add Server", -1))
            ]),
            _: 1
          })
        ])
      ]),
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarModal */.uT), {
        size: "xxs",
        state: (0,vue_runtime_esm_bundler/* .unref */.R1)(i),
        title: `Delete ${n.value ? (0,vue_runtime_esm_bundler/* .unref */.R1)(u)[n.value]?.url : "Server"}`
      }, {
        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DeleteSidebarListElement_vue/* ["default"] */.A, {
            variableName: "Server",
            warningMessage: "Are you sure you want to delete this server? This action cannot be undone.",
            onClose: s[0] || (s[0] = (l) => (0,vue_runtime_esm_bundler/* .unref */.R1)(i).hide()),
            onDelete: S
          })
        ]),
        _: 1
      }, 8, ["state", "title"])
    ]));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/CollectionServers.vue.js




}),

}]);