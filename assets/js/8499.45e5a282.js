"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8499"], {
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
77374: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Settings_vue2_k)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayout.vue.js
var ViewLayout_vue = __webpack_require__(14074);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutContent.vue.js
var ViewLayoutContent_vue = __webpack_require__(42149);
// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@scalar/themes/dist/index.js + 15 modules
var themes_dist = __webpack_require__(88837);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/ImportCollection/IntegrationLogo.vue.js


const m = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "IntegrationLogo",
  props: {
    integration: {}
  },
  setup(e) {
    const n = e, a = [
      "adonisjs",
      "astro",
      "dotnet",
      "elysiajs",
      "express",
      "fastapi",
      "fastify",
      "go",
      "hono",
      "laravel",
      "litestar",
      "nestjs",
      "nextjs",
      "nitro",
      "nuxt",
      "platformatic",
      "react",
      "rust",
      "svelte"
    ], r = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      const o = "Openapi", t = n.integration?.toLocaleLowerCase();
      if (!t)
        return o;
      const s = t.charAt(0).toUpperCase() + t.slice(1);
      return a.includes(t) ? s : o;
    });
    return (o, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
      class: "h-full w-full rounded-lg",
      logo: r.value
    }, null, 8, ["logo"]));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/active-entities.js + 1 modules
var active_entities = __webpack_require__(17342);
// EXTERNAL MODULE: ./node_modules/@scalar/use-hooks/dist/useColorMode/index.js + 1 modules
var useColorMode = __webpack_require__(10443);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Settings/components/SettingsAppearance.vue.js



const C = { class: "flex flex-col gap-2" }, z = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "SettingsAppearance",
  setup(h) {
    const { colorMode: r, setColorMode: n } = (0,useColorMode/* .useColorMode */.G)(), a = (0,dist/* .cva */.Fj)({
      base: "w-full shadow-none text-c-1 justify-start pl-2 gap-2 border",
      variants: {
        active: {
          true: "bg-primary text-c-1 hover:bg-inherit",
          false: "bg-b-1 hover:bg-b-2"
        }
      }
    });
    return (w, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", C, [
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
        class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist.cx)((0,vue_runtime_esm_bundler/* .unref */.R1)(a)({ active: (0,vue_runtime_esm_bundler/* .unref */.R1)(r) === "system" }))),
        onClick: t[0] || (t[0] = (b) => (0,vue_runtime_esm_bundler/* .unref */.R1)(n)("system"))
      }, {
        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
            class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1", {
              "bg-c-accent text-b-1 border-transparent": (0,vue_runtime_esm_bundler/* .unref */.R1)(r) === "system"
            }])
          }, [
            (0,vue_runtime_esm_bundler/* .unref */.R1)(r) === "system" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
              key: 0,
              icon: "Checkmark",
              size: "xs",
              thickness: "3.5"
            })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
          ], 2),
          t[3] || (t[3] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" System Preference (default) ", -1))
        ]),
        _: 1
      }, 8, ["class"]),
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
        class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist.cx)((0,vue_runtime_esm_bundler/* .unref */.R1)(a)({ active: (0,vue_runtime_esm_bundler/* .unref */.R1)(r) === "light" }))),
        onClick: t[1] || (t[1] = (b) => (0,vue_runtime_esm_bundler/* .unref */.R1)(n)("light"))
      }, {
        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
            class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1", {
              "bg-c-accent text-b-1 border-transparent": (0,vue_runtime_esm_bundler/* .unref */.R1)(r) === "light"
            }])
          }, [
            (0,vue_runtime_esm_bundler/* .unref */.R1)(r) === "light" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
              key: 0,
              icon: "Checkmark",
              size: "xs",
              thickness: "3.5"
            })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
          ], 2),
          t[4] || (t[4] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Light Mode Always ", -1))
        ]),
        _: 1
      }, 8, ["class"]),
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
        class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist.cx)((0,vue_runtime_esm_bundler/* .unref */.R1)(a)({ active: (0,vue_runtime_esm_bundler/* .unref */.R1)(r) === "dark" }))),
        onClick: t[2] || (t[2] = (b) => (0,vue_runtime_esm_bundler/* .unref */.R1)(n)("dark"))
      }, {
        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
            class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1", {
              "bg-c-accent text-b-1 border-transparent": (0,vue_runtime_esm_bundler/* .unref */.R1)(r) === "dark"
            }])
          }, [
            (0,vue_runtime_esm_bundler/* .unref */.R1)(r) === "dark" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
              key: 0,
              icon: "Checkmark",
              size: "xs",
              thickness: "3.5"
            })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
          ], 2),
          t[5] || (t[5] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Dark Mode Always ", -1))
        ]),
        _: 1
      }, 8, ["class"])
    ]));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Settings/components/SettingsSection.vue.js

const i = { class: "flex flex-col gap-2" }, SettingsSection_vue_r = {
  key: 0,
  class: "font-bold"
}, c = {
  key: 1,
  class: "text-c-2 mb-4 leading-[21px]"
}, SettingsSection_vue_m = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "SettingsSection",
  setup(a) {
    return (e, d) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", i, [
      e.$slots.title ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("h3", SettingsSection_vue_r, [
        (0,vue_runtime_esm_bundler/* .renderSlot */.RG)(e.$slots, "title")
      ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
      e.$slots.description ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("p", c, [
        (0,vue_runtime_esm_bundler/* .renderSlot */.RG)(e.$slots, "description")
      ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
      (0,vue_runtime_esm_bundler/* .renderSlot */.RG)(e.$slots, "default")
    ]));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/store.js + 10 modules
var store = __webpack_require__(99456);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Settings/SettingsGeneral.vue.js








const W = { class: "bg-b-1 h-full w-full overflow-auto" }, F = { class: "mr-auto ml-auto w-full max-w-[720px] px-5 py-5" }, O = { class: "flex flex-col gap-8" }, D = { class: "flex flex-col gap-2" }, G = { class: "flex flex-col gap-2" }, q = { class: "grid grid-cols-2 gap-2" }, H = { class: "flex items-center gap-2" }, M = { class: "flex items-center gap-1" }, X = { class: "grid grid-cols-2 gap-2" }, Y = { class: "flex items-center gap-2" }, J = { class: "flex items-center gap-1" }, K = { class: "size-7 rounded-xl" }, g = "https://proxy.scalar.com", ne = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "SettingsGeneral",
  setup(Q) {
    const { activeWorkspace: o } = (0,active_entities/* .useActiveEntities */.JC)(), { proxyUrl: f, workspaceMutators: U } = (0,store/* .useWorkspace */.hA)(), T = [
      "default",
      "alternate",
      // 'moon',
      "purple",
      "solarized",
      // 'bluePlanet',
      "saturn",
      "kepler"
      // 'mars',
      // 'deepSpace',
      // 'laserwave',
    ], B = ["elysiajs", "fastify"], v = (d) => ({
      default: { light: "#fff", dark: "#0f0f0f", accent: "#0099ff" },
      alternate: { light: "#f9f9f9", dark: "#131313", accent: "#e7e7e7" },
      moon: { light: "#ccc9b3", dark: "#313332", accent: "#645b0f" },
      purple: { light: "#f5f6f8", dark: "#22252b", accent: "#5469d4" },
      solarized: { light: "#fdf6e3", dark: "#00212b", accent: "#007acc" },
      bluePlanet: { light: "#f0f2f5", dark: "#000e23", accent: "#e0e2e6" },
      saturn: { light: "#e4e4df", dark: "#2c2c30", accent: "#1763a6" },
      kepler: { light: "#f6f6f6", dark: "#0d0f1e", accent: "#7070ff" },
      mars: { light: "#f2efe8", dark: "#321116", accent: "#c75549" },
      deepSpace: { light: "#f4f4f5", dark: "#09090b", accent: "#8ab4f8" },
      laserwave: { light: "#f4f2f7", dark: "#27212e", accent: "#ed78c2" },
      none: { light: "#ffffff", dark: "#000000", accent: "#3b82f6" }
    })[d] || { light: "#ffffff", dark: "#000000", accent: "#3b82f6" }, S = (d) => U.edit(o.value?.uid, "themeId", d), k = (0,dist/* .cva */.Fj)({
      base: "w-full shadow-none text-c-1 justify-start pl-2 gap-2 border",
      variants: {
        active: {
          true: "bg-primary text-c-1 hover:bg-inherit",
          false: "bg-b-1 hover:bg-b-2"
        }
      }
    }), h = (d) => U.edit(o.value?.uid, "proxyUrl", d);
    return (d, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", W, [
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", F, [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", O, [
          t[13] || (t[13] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", null, [
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("h2", { class: "mt-10 text-xl font-bold" }, "Settings")
          ], -1)),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(SettingsSection_vue_m, null, {
            title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...t[3] || (t[3] = [
              (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" CORS Proxy ", -1)
            ])]),
            description: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...t[4] || (t[4] = [
              (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Browsers block cross-origin requests for security. We provide a public proxy to ", -1),
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("a", {
                class: "hover:text-c-1 underline-offset-2",
                href: "https://en.wikipedia.org/wiki/Cross-origin_resource_sharing",
                target: "_blank"
              }, " bypass CORS issues ", -1),
              (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" . Check the ", -1),
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("a", {
                class: "hover:text-c-1 underline-offset-2",
                href: "https://github.com/scalar/scalar/tree/main/examples/proxy-server",
                target: "_blank"
              }, " source code on GitHub ", -1),
              (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" . ", -1)
            ])]),
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", D, [
                (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
                  class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(
                    (0,vue_runtime_esm_bundler/* .unref */.R1)(dist.cx)(
                      (0,vue_runtime_esm_bundler/* .unref */.R1)(k)({
                        active: (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.proxyUrl === g
                      })
                    )
                  ),
                  onClick: t[0] || (t[0] = (s) => h(g))
                }, {
                  default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                    (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
                      class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1", {
                        "bg-c-accent text-b-1 border-transparent": (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.proxyUrl === g
                      }])
                    }, [
                      (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.proxyUrl === g ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
                        key: 0,
                        icon: "Checkmark",
                        size: "xs",
                        thickness: "3.5"
                      })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
                    ], 2),
                    t[5] || (t[5] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Use proxy.scalar.com (default) ", -1))
                  ]),
                  _: 1
                }, 8, ["class"]),
                (0,vue_runtime_esm_bundler/* .unref */.R1)(f) && (0,vue_runtime_esm_bundler/* .unref */.R1)(f) !== g ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
                  key: 0,
                  class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(
                    (0,vue_runtime_esm_bundler/* .unref */.R1)(dist.cx)(
                      (0,vue_runtime_esm_bundler/* .unref */.R1)(k)({
                        active: (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.proxyUrl === (0,vue_runtime_esm_bundler/* .unref */.R1)(f)
                      })
                    )
                  ),
                  onClick: t[1] || (t[1] = (s) => h((0,vue_runtime_esm_bundler/* .unref */.R1)(f)))
                }, {
                  default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                    (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
                      class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1", {
                        "bg-c-accent text-b-1 border-transparent": (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.proxyUrl === (0,vue_runtime_esm_bundler/* .unref */.R1)(f)
                      }])
                    }, [
                      (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.proxyUrl === (0,vue_runtime_esm_bundler/* .unref */.R1)(f) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
                        key: 0,
                        icon: "Checkmark",
                        size: "xs",
                        thickness: "3.5"
                      })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
                    ], 2),
                    (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Use custom proxy (" + (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)((0,vue_runtime_esm_bundler/* .unref */.R1)(f)) + ") ", 1)
                  ]),
                  _: 1
                }, 8, ["class"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
                (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
                  class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist.cx)((0,vue_runtime_esm_bundler/* .unref */.R1)(k)({ active: !(0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.proxyUrl }))),
                  onClick: t[2] || (t[2] = (s) => h(void 0))
                }, {
                  default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                    (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
                      class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)([
                        "flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1",
                        !(0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.proxyUrl && "bg-c-accent text-b-1 border-transparent"
                      ])
                    }, [
                      (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.proxyUrl ? (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
                        key: 0,
                        icon: "Checkmark",
                        size: "xs",
                        thickness: "3.5"
                      }))
                    ], 2),
                    t[6] || (t[6] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Skip the proxy ", -1))
                  ]),
                  _: 1
                }, 8, ["class"])
              ])
            ]),
            _: 1
          }),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(SettingsSection_vue_m, null, {
            title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...t[7] || (t[7] = [
              (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Themes ", -1)
            ])]),
            description: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...t[8] || (t[8] = [
              (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" We've got a whole rainbow of themes for you to play with: ", -1)
            ])]),
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", G, [
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", q, [
                  ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(T, (s) => (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
                    key: s,
                    class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(
                      (0,vue_runtime_esm_bundler/* .unref */.R1)(dist.cx)(
                        (0,vue_runtime_esm_bundler/* .unref */.R1)(k)({
                          active: (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.themeId === s
                        })
                      )
                    ),
                    onClick: (A) => S(s)
                  }, {
                    default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", H, [
                        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
                          class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1", {
                            "bg-c-accent text-b-1 border-transparent": (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.themeId === s
                          }])
                        }, [
                          (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.themeId === s ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
                            key: 0,
                            icon: "Checkmark",
                            size: "xs",
                            thickness: "3.5"
                          })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
                        ], 2),
                        (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" " + (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)((0,vue_runtime_esm_bundler/* .unref */.R1)(themes_dist/* .themeLabels */.ty)[s]), 1)
                      ]),
                      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", M, [
                        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", {
                          class: "border-c-3 -mr-3 inline-block h-5 w-5 rounded-full",
                          style: (0,vue_runtime_esm_bundler/* .normalizeStyle */.Tr)({
                            backgroundColor: v(s).light
                          })
                        }, null, 4),
                        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", {
                          class: "border-c-3 -mr-3 inline-block h-5 w-5 rounded-full",
                          style: (0,vue_runtime_esm_bundler/* .normalizeStyle */.Tr)({
                            backgroundColor: v(s).dark
                          })
                        }, null, 4),
                        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", {
                          class: "border-c-3 inline-block h-5 w-5 rounded-full",
                          style: (0,vue_runtime_esm_bundler/* .normalizeStyle */.Tr)({
                            backgroundColor: v(s).accent
                          })
                        }, null, 4)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class", "onClick"])), 64))
                ])
              ])
            ]),
            _: 1
          }),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(SettingsSection_vue_m, null, {
            title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...t[9] || (t[9] = [
              (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Framework Themes ", -1)
            ])]),
            description: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...t[10] || (t[10] = [
              (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Are you a real fan? Show your support by using your favorite framework's theme! ", -1)
            ])]),
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", X, [
                ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(B, (s) => (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
                  key: s,
                  class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(
                    (0,vue_runtime_esm_bundler/* .unref */.R1)(dist.cx)(
                      (0,vue_runtime_esm_bundler/* .unref */.R1)(k)({
                        active: (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.themeId === s
                      })
                    )
                  ),
                  onClick: (A) => S(s)
                }, {
                  default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                    (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", Y, [
                      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
                        class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] p-1", {
                          "bg-c-accent text-b-1 border-transparent": (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.themeId === s
                        }])
                      }, [
                        (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.themeId === s ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarIcon */.kv), {
                          key: 0,
                          icon: "Checkmark",
                          size: "xs",
                          thickness: "3.5"
                        })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
                      ], 2),
                      (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" " + (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)((0,vue_runtime_esm_bundler/* .unref */.R1)(themes_dist/* .themeLabels */.ty)[s]), 1)
                    ]),
                    (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", J, [
                      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", K, [
                        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(m, { integration: s }, null, 8, ["integration"])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"])), 64))
              ])
            ]),
            _: 1
          }),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(SettingsSection_vue_m, null, {
            title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...t[11] || (t[11] = [
              (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Appearance ", -1)
            ])]),
            description: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...t[12] || (t[12] = [
              (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Choose between light, dark, or system-based appearance for your workspace. ", -1)
            ])]),
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)(z)
            ]),
            _: 1
          })
        ])
      ])
    ]));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Settings/Settings.vue2.js




const Settings_vue2_k = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "Settings",
  setup(p) {
    const e = {
      general: {
        component: ne,
        title: "general"
      }
    }, t = (0,vue_runtime_esm_bundler/* .ref */.KR)("general");
    return (u, d) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayout_vue/* ["default"] */.A, null, {
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ViewLayoutContent_vue/* ["default"] */.A, { class: "flex-1" }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            e[t.value] ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .resolveDynamicComponent */.$y)(e[t.value].component), { key: 0 })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Settings/Settings.vue.js




}),

}]);