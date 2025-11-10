"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["25076"], {
30143: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ h)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutSection.vue.js
var ViewLayoutSection_vue = __webpack_require__(70139);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/active-entities.js + 1 modules
var active_entities = __webpack_require__(17342);
// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/CodeInput/CodeInput.vue.js + 5 modules
var CodeInput_vue = __webpack_require__(41873);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/components/MarkdownInput.vue2.js



const B = { class: "flex h-full w-full flex-col gap-2 pt-8" }, C = { class: "flex min-h-8 items-center justify-between gap-2 pl-1.5" }, I = { class: "has-[:focus-visible]:bg-b-1 group relative z-1 flex flex-col rounded-lg" }, E = { class: "flex h-full min-h-[calc(1rem*4)] flex-col" }, N = {
  key: 1,
  class: "text-c-3 flex h-full items-center justify-center rounded-lg border p-4"
}, F = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "MarkdownInput",
  props: {
    modelValue: {},
    environment: {},
    envVariables: {},
    workspace: {}
  },
  emits: ["update:modelValue"],
  setup(S, { emit: k }) {
    const g = k, t = (0,vue_runtime_esm_bundler/* .ref */.KR)("preview"), m = (0,vue_runtime_esm_bundler/* .ref */.KR)(null);
    (0,vue_runtime_esm_bundler/* .watch */.wB)(t, (l) => {
      l === "edit" && (0,vue_runtime_esm_bundler/* .nextTick */.dY)(() => {
        m.value?.focus();
      });
    });
    const V = () => {
      requestAnimationFrame(() => {
        t.value = "preview";
      });
    };
    return (l, e) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", B, [
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", C, [
        e[5] || (e[5] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("h3", { class: "font-bold" }, "Description", -1)),
        t.value === "preview" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
          key: 0,
          class: "text-c-2 hover:text-c-1 flex items-center gap-2",
          size: "sm",
          type: "button",
          variant: "outlined",
          onClick: e[0] || (e[0] = (s) => t.value = "edit")
        }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
              icon: "Pencil",
              size: "sm",
              thickness: "1.5"
            }),
            e[4] || (e[4] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, "Edit", -1))
          ]),
          _: 1
        })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
      ]),
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", I, [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", E, [
          t.value === "preview" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 0 }, [
            l.modelValue && l.modelValue.trim().length ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 0 }, [
              l.modelValue ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarMarkdown */.mi), {
                key: 0,
                class: "h-full flex-1 rounded border border-transparent p-1.5 hover:border-(--scalar-background-3)",
                value: l.modelValue,
                withImages: "",
                onDblclick: e[1] || (e[1] = (s) => t.value = "edit")
              }, null, 8, ["value"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
              e[6] || (e[6] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", { class: "brightness-lifted bg-b-1 absolute inset-0 -z-1 hidden rounded group-hover:block group-has-[:focus-visible]:hidden" }, null, -1))
            ], 64)) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", N, [
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
                class: "hover:bg-b-2 hover:text-c-1 text-c-2 flex items-center gap-2",
                size: "sm",
                variant: "ghost",
                onClick: e[2] || (e[2] = (s) => t.value = "edit")
              }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
                    icon: "Pencil",
                    size: "sm",
                    thickness: "1.5"
                  }),
                  e[7] || (e[7] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, "Write a description", -1))
                ]),
                _: 1
              })
            ]))
          ], 64)) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
          t.value === "edit" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(CodeInput_vue/* ["default"] */.A, {
            key: 1,
            ref_key: "codeInputRef",
            ref: m,
            class: "h-full flex-1 border px-0.5 py-0",
            envVariables: l.envVariables,
            environment: l.environment,
            modelValue: l.modelValue,
            workspace: l.workspace,
            onBlur: V,
            "onUpdate:modelValue": e[3] || (e[3] = (s) => g("update:modelValue", s))
          }, null, 8, ["envVariables", "environment", "modelValue", "workspace"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
        ])
      ])
    ]));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper = __webpack_require__(94622);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/components/MarkdownInput.vue.js

/* empty css                   */

const MarkdownInput_vue_m = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(F, [["__scopeId", "data-v-5997a667"]]);


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/store.js + 10 modules
var store = __webpack_require__(99456);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/CollectionOverview.vue2.js





const h = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "CollectionOverview",
  setup(k) {
    const {
      activeCollection: o,
      activeEnvironment: t,
      activeEnvVariables: c,
      activeWorkspace: n
    } = (0,active_entities/* .useActiveEntities */.JC)(), { collectionMutators: l } = (0,store/* .useWorkspace */.hA)(), s = (i) => {
      o.value && l.edit(o.value.uid, "info.description", i);
    };
    return (i, V) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayoutSection_vue/* ["default"] */.A, null, {
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .unref */.R1)(t) && (0,vue_runtime_esm_bundler/* .unref */.R1)(n) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(MarkdownInput_vue_m, {
          key: 0,
          envVariables: (0,vue_runtime_esm_bundler/* .unref */.R1)(c),
          environment: (0,vue_runtime_esm_bundler/* .unref */.R1)(t),
          modelValue: (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.info?.description ?? "",
          workspace: (0,vue_runtime_esm_bundler/* .unref */.R1)(n),
          "onUpdate:modelValue": s
        }, null, 8, ["envVariables", "environment", "modelValue", "workspace"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
      ]),
      _: 1
    }));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/CollectionOverview.vue.js




}),

}]);