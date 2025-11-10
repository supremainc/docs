"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5244"], {
99361: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ $)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@headlessui/vue/dist/hooks/use-controllable.js
var use_controllable = __webpack_require__(36371);
// EXTERNAL MODULE: ./node_modules/@headlessui/vue/dist/hooks/use-id.js
var use_id = __webpack_require__(29757);
// EXTERNAL MODULE: ./node_modules/@headlessui/vue/dist/hooks/use-tree-walker.js
var use_tree_walker = __webpack_require__(80303);
// EXTERNAL MODULE: ./node_modules/@headlessui/vue/dist/internal/hidden.js
var internal_hidden = __webpack_require__(94189);
// EXTERNAL MODULE: ./node_modules/@headlessui/vue/dist/keyboard.js
var keyboard = __webpack_require__(93478);
// EXTERNAL MODULE: ./node_modules/@headlessui/vue/dist/utils/dom.js
var dom = __webpack_require__(24133);
// EXTERNAL MODULE: ./node_modules/@headlessui/vue/dist/utils/focus-management.js
var focus_management = __webpack_require__(22513);
// EXTERNAL MODULE: ./node_modules/@headlessui/vue/dist/utils/form.js
var utils_form = __webpack_require__(9591);
// EXTERNAL MODULE: ./node_modules/@headlessui/vue/dist/utils/owner.js
var owner = __webpack_require__(19866);
// EXTERNAL MODULE: ./node_modules/@headlessui/vue/dist/utils/render.js
var render = __webpack_require__(35117);
// EXTERNAL MODULE: ./node_modules/@headlessui/vue/dist/components/description/description.js
var description = __webpack_require__(8359);
;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/components/label/label.js
let label_a=Symbol("LabelContext");function label_d(){let t=(0,vue_runtime_esm_bundler/* .inject */.WQ)(label_a,null);if(t===null){let n=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,label_d),n}return t}function E({slot:t={},name:n="Label",props:i={}}={}){let e=(0,vue_runtime_esm_bundler/* .ref */.KR)([]);function o(r){return e.value.push(r),()=>{let l=e.value.indexOf(r);l!==-1&&e.value.splice(l,1)}}return (0,vue_runtime_esm_bundler/* .provide */.Gt)(label_a,{register:o,slot:t,name:n,props:i}),(0,vue_runtime_esm_bundler/* .computed */.EW)(()=>e.value.length>0?e.value.join(" "):void 0)}let label_K=(0,vue_runtime_esm_bundler/* .defineComponent */.pM)({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(t,{slots:n,attrs:i}){var r;let e=(r=t.id)!=null?r:`headlessui-label-${(0,use_id/* .useId */.B)()}`,o=label_d();return (0,vue_runtime_esm_bundler/* .onMounted */.sV)(()=>(0,vue_runtime_esm_bundler/* .onUnmounted */.hi)(o.register(e))),()=>{let{name:l="Label",slot:p={},props:c={}}=o,{passive:f,...s}=t,u={...Object.entries(c).reduce((b,[g,m])=>Object.assign(b,{[g]:(0,vue_runtime_esm_bundler/* .unref */.R1)(m)}),{}),id:e};return f&&(delete u.onClick,delete u.htmlFor,delete s.onClick),(0,render/* .render */.XX)({ourProps:u,theirProps:s,slot:p,attrs:i,slots:n,name:l})}}});

;// CONCATENATED MODULE: ./node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js
function le(t,m){return t===m}let H=Symbol("RadioGroupContext");function N(t){let m=(0,vue_runtime_esm_bundler/* .inject */.WQ)(H,null);if(m===null){let u=new Error(`<${t} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,N),u}return m}let he=(0,vue_runtime_esm_bundler/* .defineComponent */.pM)({name:"RadioGroup",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"div"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>le},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},id:{type:String,default:null}},inheritAttrs:!1,setup(t,{emit:m,attrs:u,slots:S,expose:g}){var O;let d=(O=t.id)!=null?O:`headlessui-radiogroup-${(0,use_id/* .useId */.B)()}`,p=(0,vue_runtime_esm_bundler/* .ref */.KR)(null),l=(0,vue_runtime_esm_bundler/* .ref */.KR)([]),R=E({name:"RadioGroupLabel"}),T=(0,description/* .useDescriptions */.r)({name:"RadioGroupDescription"});g({el:p,$el:p});let[f,G]=(0,use_controllable/* .useControllable */.P)((0,vue_runtime_esm_bundler/* .computed */.EW)(()=>t.modelValue),e=>m("update:modelValue",e),(0,vue_runtime_esm_bundler/* .computed */.EW)(()=>t.defaultValue)),s={options:l,value:f,disabled:(0,vue_runtime_esm_bundler/* .computed */.EW)(()=>t.disabled),firstOption:(0,vue_runtime_esm_bundler/* .computed */.EW)(()=>l.value.find(e=>!e.propsRef.disabled)),containsCheckedOption:(0,vue_runtime_esm_bundler/* .computed */.EW)(()=>l.value.some(e=>s.compare((0,vue_runtime_esm_bundler/* .toRaw */.ux)(e.propsRef.value),(0,vue_runtime_esm_bundler/* .toRaw */.ux)(t.modelValue)))),compare(e,a){if(typeof t.by=="string"){let n=t.by;return(e==null?void 0:e[n])===(a==null?void 0:a[n])}return t.by(e,a)},change(e){var n;if(t.disabled||s.compare((0,vue_runtime_esm_bundler/* .toRaw */.ux)(f.value),(0,vue_runtime_esm_bundler/* .toRaw */.ux)(e)))return!1;let a=(n=l.value.find(i=>s.compare((0,vue_runtime_esm_bundler/* .toRaw */.ux)(i.propsRef.value),(0,vue_runtime_esm_bundler/* .toRaw */.ux)(e))))==null?void 0:n.propsRef;return a!=null&&a.disabled?!1:(G(e),!0)},registerOption(e){l.value.push(e),l.value=(0,focus_management/* .sortByDomNode */.wl)(l.value,a=>a.element)},unregisterOption(e){let a=l.value.findIndex(n=>n.id===e);a!==-1&&l.value.splice(a,1)}};(0,vue_runtime_esm_bundler/* .provide */.Gt)(H,s),(0,use_tree_walker/* .useTreeWalker */.i)({container:(0,vue_runtime_esm_bundler/* .computed */.EW)(()=>(0,dom/* .dom */.t)(p)),accept(e){return e.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(e){e.setAttribute("role","none")}});function v(e){if(!p.value||!p.value.contains(e.target))return;let a=l.value.filter(n=>n.propsRef.disabled===!1).map(n=>n.element);switch(e.key){case keyboard/* .Keys.Enter */.D.Enter:(0,utils_form/* .attemptSubmit */.q)(e.currentTarget);break;case keyboard/* .Keys.ArrowLeft */.D.ArrowLeft:case keyboard/* .Keys.ArrowUp */.D.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,focus_management/* .focusIn */.CU)(a,focus_management/* .Focus.Previous */.BD.Previous|focus_management/* .Focus.WrapAround */.BD.WrapAround)===focus_management/* .FocusResult.Success */.Me.Success){let i=l.value.find(r=>{var c;return r.element===((c=(0,owner/* .getOwnerDocument */.T)(p))==null?void 0:c.activeElement)});i&&s.change(i.propsRef.value)}break;case keyboard/* .Keys.ArrowRight */.D.ArrowRight:case keyboard/* .Keys.ArrowDown */.D.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,focus_management/* .focusIn */.CU)(a,focus_management/* .Focus.Next */.BD.Next|focus_management/* .Focus.WrapAround */.BD.WrapAround)===focus_management/* .FocusResult.Success */.Me.Success){let i=l.value.find(r=>{var c;return r.element===((c=(0,owner/* .getOwnerDocument */.T)(r.element))==null?void 0:c.activeElement)});i&&s.change(i.propsRef.value)}break;case keyboard/* .Keys.Space */.D.Space:{e.preventDefault(),e.stopPropagation();let n=l.value.find(i=>{var r;return i.element===((r=(0,owner/* .getOwnerDocument */.T)(i.element))==null?void 0:r.activeElement)});n&&s.change(n.propsRef.value)}break}}let b=(0,vue_runtime_esm_bundler/* .computed */.EW)(()=>{var e;return(e=(0,dom/* .dom */.t)(p))==null?void 0:e.closest("form")});return (0,vue_runtime_esm_bundler/* .onMounted */.sV)(()=>{(0,vue_runtime_esm_bundler/* .watch */.wB)([b],()=>{if(!b.value||t.defaultValue===void 0)return;function e(){s.change(t.defaultValue)}return b.value.addEventListener("reset",e),()=>{var a;(a=b.value)==null||a.removeEventListener("reset",e)}},{immediate:!0})}),()=>{let{disabled:e,name:a,form:n,...i}=t,r={ref:p,id:d,role:"radiogroup","aria-labelledby":R.value,"aria-describedby":T.value,onKeydown:v};return (0,vue_runtime_esm_bundler.h)(vue_runtime_esm_bundler/* .Fragment */.FK,[...a!=null&&f.value!=null?(0,utils_form/* .objectToFormEntries */.h)({[a]:f.value}).map(([c,L])=>(0,vue_runtime_esm_bundler.h)(internal_hidden/* .Hidden */.j,(0,render/* .compact */.oE)({features:internal_hidden/* .Features.Hidden */.O.Hidden,key:c,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:n,disabled:e,name:c,value:L}))):[],(0,render/* .render */.XX)({ourProps:r,theirProps:{...u,...(0,render/* .omit */.cJ)(i,["modelValue","defaultValue","by"])},slot:{},attrs:u,slots:S,name:"RadioGroup"})])}}});var ie=(u=>(u[u.Empty=1]="Empty",u[u.Active=2]="Active",u))(ie||{});let Oe=(0,vue_runtime_esm_bundler/* .defineComponent */.pM)({name:"RadioGroupOption",props:{as:{type:[Object,String],default:"div"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(t,{attrs:m,slots:u,expose:S}){var i;let g=(i=t.id)!=null?i:`headlessui-radiogroup-option-${(0,use_id/* .useId */.B)()}`,d=N("RadioGroupOption"),p=E({name:"RadioGroupLabel"}),l=(0,description/* .useDescriptions */.r)({name:"RadioGroupDescription"}),R=(0,vue_runtime_esm_bundler/* .ref */.KR)(null),T=(0,vue_runtime_esm_bundler/* .computed */.EW)(()=>({value:t.value,disabled:t.disabled})),f=(0,vue_runtime_esm_bundler/* .ref */.KR)(1);S({el:R,$el:R});let G=(0,vue_runtime_esm_bundler/* .computed */.EW)(()=>(0,dom/* .dom */.t)(R));(0,vue_runtime_esm_bundler/* .onMounted */.sV)(()=>d.registerOption({id:g,element:G,propsRef:T})),(0,vue_runtime_esm_bundler/* .onUnmounted */.hi)(()=>d.unregisterOption(g));let s=(0,vue_runtime_esm_bundler/* .computed */.EW)(()=>{var r;return((r=d.firstOption.value)==null?void 0:r.id)===g}),v=(0,vue_runtime_esm_bundler/* .computed */.EW)(()=>d.disabled.value||t.disabled),b=(0,vue_runtime_esm_bundler/* .computed */.EW)(()=>d.compare((0,vue_runtime_esm_bundler/* .toRaw */.ux)(d.value.value),(0,vue_runtime_esm_bundler/* .toRaw */.ux)(t.value))),O=(0,vue_runtime_esm_bundler/* .computed */.EW)(()=>v.value?-1:b.value||!d.containsCheckedOption.value&&s.value?0:-1);function e(){var r;d.change(t.value)&&(f.value|=2,(r=(0,dom/* .dom */.t)(R))==null||r.focus())}function a(){f.value|=2}function n(){f.value&=-3}return()=>{let{value:r,disabled:c,...L}=t,K={checked:b.value,disabled:v.value,active:Boolean(f.value&2)},M={id:g,ref:R,role:"radio","aria-checked":b.value?"true":"false","aria-labelledby":p.value,"aria-describedby":l.value,"aria-disabled":v.value?!0:void 0,tabIndex:O.value,onClick:v.value?void 0:e,onFocus:v.value?void 0:a,onBlur:v.value?void 0:n};return (0,render/* .render */.XX)({ourProps:M,theirProps:L,slot:K,attrs:m,slots:u,name:"RadioGroupOption"})}}}),ke=label_K,Ee=(/* unused pure expression or super */ null && (ne));

// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@scalar/icons/dist/library/index.js + 86 modules
var library = __webpack_require__(76371);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/IconSelector.vue.js




const IconSelector_vue_G = { class: "flex text-sm" }, IconSelector_vue_L = { class: "bg-b-1 custom-scroll grid w-dvw max-w-[420px] auto-rows-[32px] grid-cols-[repeat(auto-fill,minmax(32px,1fr))] content-between justify-between rounded border p-1" }, $ = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "IconSelector",
  props: {
    modelValue: {},
    placement: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: f }) {
    const b = i, x = f, c = (0,vue_runtime_esm_bundler/* .computed */.EW)({
      get: () => b.modelValue,
      set: (l) => x("update:modelValue", l)
    });
    return (l, r) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarPopover */.w), {
      class: "bg-b-2 rounded",
      focus: "",
      placement: l.placement ?? "bottom"
    }, {
      popover: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(({ close: v }) => [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(he), {
          modelValue: c.value,
          "onUpdate:modelValue": r[0] || (r[0] = (t) => c.value = t),
          class: "flex flex-col"
        }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", IconSelector_vue_G, [
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(ke), { class: "text-c-2 px-1 py-1" }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .renderSlot */.RG)(l.$slots, "title", {}, () => [
                    r[1] || (r[1] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("Select an icon", -1))
                  ])
                ]),
                _: 3
              })
            ]),
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("ul", IconSelector_vue_L, [
              ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)((0,vue_runtime_esm_bundler/* .unref */.R1)(library/* .libraryIcons */.Sb), (t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(Oe), {
                key: t.src,
                as: "li",
                class: "text-c-3 hover:text-c-2 hover:bg-b-2 ui-checked:bg-b-3 ui-active:bg-b-2 flex cursor-pointer items-center justify-center rounded p-2",
                value: t.src,
                onClick: v
              }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(ke), { class: "sr-only" }, {
                    default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                      (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)((0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(t.src.replaceAll("-", " ")) + " Icon ", 1)
                    ]),
                    _: 2
                  }, 1024),
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(library/* .LibraryIcon */.$n), {
                    class: "stroke-[1.5]",
                    src: t.src
                  }, null, 8, ["src"])
                ]),
                _: 2
              }, 1032, ["value", "onClick"]))), 128))
            ])
          ]),
          _: 2
        }, 1032, ["modelValue"])
      ]),
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .renderSlot */.RG)(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["placement"]));
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
60615: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RequestRoot_vue_a)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@scalar/oas-utils/dist/helpers/index.js + 9 modules
var helpers = __webpack_require__(28751);
;// CONCATENATED MODULE: ./node_modules/@scalar/object-utils/dist/parse/json.js
const safeJSON = {
  parse(v) {
    try {
      return {
        error: false,
        data: JSON.parse(v)
      };
    } catch (e) {
      return {
        error: true,
        message: e.message ? String(e.message) : "Unknown Error"
      };
    }
  }
};

//# sourceMappingURL=json.js.map

;// CONCATENATED MODULE: ./node_modules/@scalar/object-utils/dist/parse/index.js

//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/@scalar/use-toasts/dist/index.js + 3 modules
var dist = __webpack_require__(35050);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs + 6 modules
var vue_router = __webpack_require__(76522);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/hooks/useSidebar.js
var useSidebar = __webpack_require__(58360);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/SidebarToggle.vue.js


const SidebarToggle_vue_u = ["aria-pressed"], SidebarToggle_vue_m = { class: "sr-only" }, SidebarToggle_vue_g = {
  class: "size-4",
  fill: "none",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, SidebarToggle_vue_h = { "clip-path": "url(#mask)" }, SidebarToggle_vue_k = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "SidebarToggle",
  setup(b) {
    const { isSidebarOpen: s, toggleSidebarOpen: r } = (0,useSidebar/* .useSidebar */.cL)();
    return (f, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("button", {
      "aria-pressed": (0,vue_runtime_esm_bundler/* .unref */.R1)(s),
      class: "scalar-sidebar-toggle text-c-3 hover:bg-b-2 active:text-c-1 rounded-lg p-2",
      type: "button",
      onClick: t[0] || (t[0] = //@ts-ignore
      (...i) => (0,vue_runtime_esm_bundler/* .unref */.R1)(r) && (0,vue_runtime_esm_bundler/* .unref */.R1)(r)(...i))
    }, [
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", SidebarToggle_vue_m, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)((0,vue_runtime_esm_bundler/* .unref */.R1)(s) ? "Hide" : "Show") + " sidebar", 1),
      ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("svg", SidebarToggle_vue_g, [
        t[1] || (t[1] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("defs", null, [
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("clipPath", { id: "mask" }, [
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("path", {
              "clip-rule": "evenodd",
              d: "M9 3.2H4c-1.7 0-3 1.3-3 3v11.5c0 1.7 1.3 3 3 3h5V3.2z"
            })
          ])
        ], -1)),
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("g", SidebarToggle_vue_h, [
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("path", {
            class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["transition-transform duration-300", (0,vue_runtime_esm_bundler/* .unref */.R1)(s) ? "translate-x-0" : "-translate-x-1/2"]),
            d: "M1 3.2h8v17.5H1z",
            fill: "currentColor"
          }, null, 2)
        ]),
        t[2] || (t[2] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("path", {
          d: "M20 20.8H4c-1.7 0-3-1.3-3-3V6.2c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v11.5c0 1.7-1.3 3-3 3zM9 3.2v17.5",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2"
        }, null, -1))
      ]))
    ], 8, SidebarToggle_vue_u));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/analytics-client/node_modules/zod/lib/index.mjs
var lib_util;
(function (util) {
    util.assertEqual = (val) => val;
    function assertIs(_arg) { }
    util.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util.assertNever = assertNever;
    util.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
            obj[item] = item;
        }
        return obj;
    };
    util.getValidEnumValues = (obj) => {
        const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
            filtered[k] = obj[k];
        }
        return util.objectValues(filtered);
    };
    util.objectValues = (obj) => {
        return util.objectKeys(obj).map(function (e) {
            return obj[e];
        });
    };
    util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
        ? (obj) => Object.keys(obj) // eslint-disable-line ban/ban
        : (object) => {
            const keys = [];
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
    util.find = (arr, checker) => {
        for (const item of arr) {
            if (checker(item))
                return item;
        }
        return undefined;
    };
    util.isInteger = typeof Number.isInteger === "function"
        ? (val) => Number.isInteger(val) // eslint-disable-line ban/ban
        : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
        return array
            .map((val) => (typeof val === "string" ? `'${val}'` : val))
            .join(separator);
    }
    util.joinValues = joinValues;
    util.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
            return value.toString();
        }
        return value;
    };
})(lib_util || (lib_util = {}));
var lib_objectUtil;
(function (objectUtil) {
    objectUtil.mergeShapes = (first, second) => {
        return {
            ...first,
            ...second, // second overwrites first
        };
    };
})(lib_objectUtil || (lib_objectUtil = {}));
const ZodParsedType = lib_util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
]);
const getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "symbol":
            return ZodParsedType.symbol;
        case "object":
            if (Array.isArray(data)) {
                return ZodParsedType.array;
            }
            if (data === null) {
                return ZodParsedType.null;
            }
            if (data.then &&
                typeof data.then === "function" &&
                data.catch &&
                typeof data.catch === "function") {
                return ZodParsedType.promise;
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return ZodParsedType.map;
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return ZodParsedType.set;
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return ZodParsedType.date;
            }
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};

const ZodIssueCode = lib_util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
]);
const quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
    get errors() {
        return this.issues;
    }
    constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
            this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
            this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            // eslint-disable-next-line ban/ban
            Object.setPrototypeOf(this, actualProto);
        }
        else {
            this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
    }
    format(_mapper) {
        const mapper = _mapper ||
            function (issue) {
                return issue.message;
            };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
            for (const issue of error.issues) {
                if (issue.code === "invalid_union") {
                    issue.unionErrors.map(processError);
                }
                else if (issue.code === "invalid_return_type") {
                    processError(issue.returnTypeError);
                }
                else if (issue.code === "invalid_arguments") {
                    processError(issue.argumentsError);
                }
                else if (issue.path.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                }
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while (i < issue.path.length) {
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) {
                            curr[el] = curr[el] || { _errors: [] };
                            // if (typeof el === "string") {
                            //   curr[el] = curr[el] || { _errors: [] };
                            // } else if (typeof el === "number") {
                            //   const errorArray: any = [];
                            //   errorArray._errors = [];
                            //   curr[el] = curr[el] || errorArray;
                            // }
                        }
                        else {
                            curr[el] = curr[el] || { _errors: [] };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    static assert(value) {
        if (!(value instanceof ZodError)) {
            throw new Error(`Not a ZodError: ${value}`);
        }
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, lib_util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
            if (sub.path.length > 0) {
                fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                fieldErrors[sub.path[0]].push(mapper(sub));
            }
            else {
                formErrors.push(mapper(sub));
            }
        }
        return { formErrors, fieldErrors };
    }
    get formErrors() {
        return this.flatten();
    }
}
ZodError.create = (issues) => {
    const error = new ZodError(issues);
    return error;
};

const lib_errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
        case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) {
                message = "Required";
            }
            else {
                message = `Expected ${issue.expected}, received ${issue.received}`;
            }
            break;
        case ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, lib_util.jsonStringifyReplacer)}`;
            break;
        case ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${lib_util.joinValues(issue.keys, ", ")}`;
            break;
        case ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${lib_util.joinValues(issue.options)}`;
            break;
        case ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${lib_util.joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
        case ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
        case ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
                if ("includes" in issue.validation) {
                    message = `Invalid input: must include "${issue.validation.includes}"`;
                    if (typeof issue.validation.position === "number") {
                        message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                    }
                }
                else if ("startsWith" in issue.validation) {
                    message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                }
                else if ("endsWith" in issue.validation) {
                    message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                }
                else {
                    lib_util.assertNever(issue.validation);
                }
            }
            else if (issue.validation !== "regex") {
                message = `Invalid ${issue.validation}`;
            }
            else {
                message = "Invalid";
            }
            break;
        case ZodIssueCode.too_small:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${issue.minimum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly equal to `
                    : issue.inclusive
                        ? `greater than or equal to `
                        : `greater than `}${new Date(Number(issue.minimum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.too_big:
            if (issue.type === "array")
                message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string")
                message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number")
                message = `Number must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "bigint")
                message = `BigInt must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `less than or equal to`
                        : `less than`} ${issue.maximum}`;
            else if (issue.type === "date")
                message = `Date must be ${issue.exact
                    ? `exactly`
                    : issue.inclusive
                        ? `smaller than or equal to`
                        : `smaller than`} ${new Date(Number(issue.maximum))}`;
            else
                message = "Invalid input";
            break;
        case ZodIssueCode.custom:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        case ZodIssueCode.not_finite:
            message = "Number must be finite";
            break;
        default:
            message = _ctx.defaultError;
            lib_util.assertNever(issue);
    }
    return { message };
};

let overrideErrorMap = lib_errorMap;
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}

const makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...(issueData.path || [])];
    const fullIssue = {
        ...issueData,
        path: fullPath,
    };
    if (issueData.message !== undefined) {
        return {
            ...issueData,
            path: fullPath,
            message: issueData.message,
        };
    }
    let errorMessage = "";
    const maps = errorMaps
        .filter((m) => !!m)
        .slice()
        .reverse();
    for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
        ...issueData,
        path: fullPath,
        message: errorMessage,
    };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const overrideMap = getErrorMap();
    const issue = makeIssue({
        issueData: issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap, // contextual error map is first priority
            ctx.schemaErrorMap, // then schema-bound map if available
            overrideMap, // then global override map
            overrideMap === lib_errorMap ? undefined : lib_errorMap, // then global default map
        ].filter((x) => !!x),
    });
    ctx.common.issues.push(issue);
}
class ParseStatus {
    constructor() {
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid")
            this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted")
            this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
            if (s.status === "aborted")
                return INVALID;
            if (s.status === "dirty")
                status.dirty();
            arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
                key,
                value,
            });
        }
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
            const { key, value } = pair;
            if (key.status === "aborted")
                return INVALID;
            if (value.status === "aborted")
                return INVALID;
            if (key.status === "dirty")
                status.dirty();
            if (value.status === "dirty")
                status.dirty();
            if (key.value !== "__proto__" &&
                (typeof value.value !== "undefined" || pair.alwaysSet)) {
                finalObject[key.value] = value.value;
            }
        }
        return { status: status.value, value: finalObject };
    }
}
const INVALID = Object.freeze({
    status: "aborted",
});
const DIRTY = (value) => ({ status: "dirty", value });
const OK = (value) => ({ status: "valid", value });
const isAborted = (x) => x.status === "aborted";
const isDirty = (x) => x.status === "dirty";
const isValid = (x) => x.status === "valid";
const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var lib_errorUtil;
(function (errorUtil) {
    errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(lib_errorUtil || (lib_errorUtil = {}));

var _ZodEnum_cache, _ZodNativeEnum_cache;
class ParseInputLazyPath {
    constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        if (!this._cachedPath.length) {
            if (this._key instanceof Array) {
                this._cachedPath.push(...this._path, ...this._key);
            }
            else {
                this._cachedPath.push(...this._path, this._key);
            }
        }
        return this._cachedPath;
    }
}
const handleResult = (ctx, result) => {
    if (isValid(result)) {
        return { success: true, data: result.value };
    }
    else {
        if (!ctx.common.issues.length) {
            throw new Error("Validation failed but no issues detected.");
        }
        return {
            success: false,
            get error() {
                if (this._error)
                    return this._error;
                const error = new ZodError(ctx.common.issues);
                this._error = error;
                return this._error;
            },
        };
    }
};
function processCreateParams(params) {
    if (!params)
        return {};
    const { errorMap, invalid_type_error, required_error, description } = params;
    if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap)
        return { errorMap: errorMap, description };
    const customMap = (iss, ctx) => {
        var _a, _b;
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
            return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
        }
        if (typeof ctx.data === "undefined") {
            return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
        }
        if (iss.code !== "invalid_type")
            return { message: ctx.defaultError };
        return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
    };
    return { errorMap: customMap, description };
}
class ZodType {
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return (ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent,
        });
    }
    _processInputParams(input) {
        return {
            status: new ParseStatus(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent,
            },
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
            throw new Error("Synchronous parse encountered promise.");
        }
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    safeParse(data, params) {
        var _a;
        const ctx = {
            common: {
                issues: [],
                async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
    }
    "~validate"(data) {
        var _a, _b;
        const ctx = {
            common: {
                issues: [],
                async: !!this["~standard"].async,
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        if (!this["~standard"].async) {
            try {
                const result = this._parseSync({ data, path: [], parent: ctx });
                return isValid(result)
                    ? {
                        value: result.value,
                    }
                    : {
                        issues: ctx.common.issues,
                    };
            }
            catch (err) {
                if ((_b = (_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes("encountered")) {
                    this["~standard"].async = true;
                }
                ctx.common = {
                    issues: [],
                    async: true,
                };
            }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result)
            ? {
                value: result.value,
            }
            : {
                issues: ctx.common.issues,
            });
    }
    async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
            return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
                async: true,
            },
            path: (params === null || params === void 0 ? void 0 : params.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data),
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult)
            ? maybeAsyncResult
            : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val) => {
            if (typeof message === "string" || typeof message === "undefined") {
                return { message };
            }
            else if (typeof message === "function") {
                return message(val);
            }
            else {
                return message;
            }
        };
        return this._refinement((val, ctx) => {
            const result = check(val);
            const setError = () => ctx.addIssue({
                code: ZodIssueCode.custom,
                ...getIssueProperties(val),
            });
            if (typeof Promise !== "undefined" && result instanceof Promise) {
                return result.then((data) => {
                    if (!data) {
                        setError();
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            }
            if (!result) {
                setError();
                return false;
            }
            else {
                return true;
            }
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function"
                    ? refinementData(val, ctx)
                    : refinementData);
                return false;
            }
            else {
                return true;
            }
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: lib_ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "refinement", refinement },
        });
    }
    superRefine(refinement) {
        return this._refinement(refinement);
    }
    constructor(def) {
        /** Alias of safeParseAsync */
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: (data) => this["~validate"](data),
        };
    }
    optional() {
        return ZodOptional.create(this, this._def);
    }
    nullable() {
        return ZodNullable.create(this, this._def);
    }
    nullish() {
        return this.nullable().optional();
    }
    array() {
        return ZodArray.create(this);
    }
    promise() {
        return ZodPromise.create(this, this._def);
    }
    or(option) {
        return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
        return new ZodEffects({
            ...processCreateParams(this._def),
            schema: this,
            typeName: lib_ZodFirstPartyTypeKind.ZodEffects,
            effect: { type: "transform", transform },
        });
    }
    default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
            ...processCreateParams(this._def),
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: lib_ZodFirstPartyTypeKind.ZodDefault,
        });
    }
    brand() {
        return new ZodBranded({
            typeName: lib_ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(this._def),
        });
    }
    catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
            ...processCreateParams(this._def),
            innerType: this,
            catchValue: catchValueFunc,
            typeName: lib_ZodFirstPartyTypeKind.ZodCatch,
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description,
        });
    }
    pipe(target) {
        return ZodPipeline.create(this, target);
    }
    readonly() {
        return ZodReadonly.create(this);
    }
    isOptional() {
        return this.safeParse(undefined).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
// faster, simpler, safer
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
// const ipv6Regex =
// /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
// https://base64.guru/standards/base64url
const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
// simple
// const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
// no leap year validation
// const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
// with leap year validation
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
    // let regex = `\\d{2}:\\d{2}:\\d{2}`;
    let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
    if (args.precision) {
        regex = `${regex}\\.\\d{${args.precision}}`;
    }
    else if (args.precision == null) {
        regex = `${regex}(\\.\\d+)?`;
    }
    return regex;
}
function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
}
// Adapted from https://stackoverflow.com/a/3143231
function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset)
        opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
    }
    return false;
}
function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt))
        return false;
    try {
        const [header] = jwt.split(".");
        // Convert base64url to base64
        const base64 = header
            .replace(/-/g, "+")
            .replace(/_/g, "/")
            .padEnd(header.length + ((4 - (header.length % 4)) % 4), "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null)
            return false;
        if (!decoded.typ || !decoded.alg)
            return false;
        if (alg && decoded.alg !== alg)
            return false;
        return true;
    }
    catch (_a) {
        return false;
    }
}
function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
        return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
        return true;
    }
    return false;
}
class ZodString extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.string,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "length") {
                const tooBig = input.data.length > check.value;
                const tooSmall = input.data.length < check.value;
                if (tooBig || tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    if (tooBig) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    else if (tooSmall) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: true,
                            message: check.message,
                        });
                    }
                    status.dirty();
                }
            }
            else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "email",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "emoji") {
                if (!emojiRegex) {
                    emojiRegex = new RegExp(_emojiRegex, "u");
                }
                if (!emojiRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "emoji",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "uuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "nanoid") {
                if (!nanoidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "nanoid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cuid2") {
                if (!cuid2Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid2",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ulid") {
                if (!ulidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ulid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "url") {
                try {
                    new URL(input.data);
                }
                catch (_a) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "regex",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "trim") {
                input.data = input.data.trim();
            }
            else if (check.kind === "includes") {
                if (!input.data.includes(check.value, check.position)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { includes: check.value, position: check.position },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "toLowerCase") {
                input.data = input.data.toLowerCase();
            }
            else if (check.kind === "toUpperCase") {
                input.data = input.data.toUpperCase();
            }
            else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { startsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: { endsWith: check.value },
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "datetime") {
                const regex = datetimeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "datetime",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "date") {
                const regex = dateRegex;
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "date",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "time") {
                const regex = timeRegex(check);
                if (!regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: "time",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "duration") {
                if (!durationRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "duration",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "ip") {
                if (!isValidIP(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "ip",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "jwt") {
                if (!isValidJWT(input.data, check.alg)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "jwt",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "cidr") {
                if (!isValidCidr(input.data, check.version)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cidr",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "base64") {
                if (!base64Regex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "base64",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "base64url") {
                if (!base64urlRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "base64url",
                        code: ZodIssueCode.invalid_string,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                lib_util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
            validation,
            code: ZodIssueCode.invalid_string,
            ...lib_errorUtil.errToObj(message),
        });
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    email(message) {
        return this._addCheck({ kind: "email", ...lib_errorUtil.errToObj(message) });
    }
    url(message) {
        return this._addCheck({ kind: "url", ...lib_errorUtil.errToObj(message) });
    }
    emoji(message) {
        return this._addCheck({ kind: "emoji", ...lib_errorUtil.errToObj(message) });
    }
    uuid(message) {
        return this._addCheck({ kind: "uuid", ...lib_errorUtil.errToObj(message) });
    }
    nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...lib_errorUtil.errToObj(message) });
    }
    cuid(message) {
        return this._addCheck({ kind: "cuid", ...lib_errorUtil.errToObj(message) });
    }
    cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...lib_errorUtil.errToObj(message) });
    }
    ulid(message) {
        return this._addCheck({ kind: "ulid", ...lib_errorUtil.errToObj(message) });
    }
    base64(message) {
        return this._addCheck({ kind: "base64", ...lib_errorUtil.errToObj(message) });
    }
    base64url(message) {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return this._addCheck({
            kind: "base64url",
            ...lib_errorUtil.errToObj(message),
        });
    }
    jwt(options) {
        return this._addCheck({ kind: "jwt", ...lib_errorUtil.errToObj(options) });
    }
    ip(options) {
        return this._addCheck({ kind: "ip", ...lib_errorUtil.errToObj(options) });
    }
    cidr(options) {
        return this._addCheck({ kind: "cidr", ...lib_errorUtil.errToObj(options) });
    }
    datetime(options) {
        var _a, _b;
        if (typeof options === "string") {
            return this._addCheck({
                kind: "datetime",
                precision: null,
                offset: false,
                local: false,
                message: options,
            });
        }
        return this._addCheck({
            kind: "datetime",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
            local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
            ...lib_errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    date(message) {
        return this._addCheck({ kind: "date", message });
    }
    time(options) {
        if (typeof options === "string") {
            return this._addCheck({
                kind: "time",
                precision: null,
                message: options,
            });
        }
        return this._addCheck({
            kind: "time",
            precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
            ...lib_errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    duration(message) {
        return this._addCheck({ kind: "duration", ...lib_errorUtil.errToObj(message) });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex: regex,
            ...lib_errorUtil.errToObj(message),
        });
    }
    includes(value, options) {
        return this._addCheck({
            kind: "includes",
            value: value,
            position: options === null || options === void 0 ? void 0 : options.position,
            ...lib_errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message),
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value: value,
            ...lib_errorUtil.errToObj(message),
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value: value,
            ...lib_errorUtil.errToObj(message),
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...lib_errorUtil.errToObj(message),
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...lib_errorUtil.errToObj(message),
        });
    }
    length(len, message) {
        return this._addCheck({
            kind: "length",
            value: len,
            ...lib_errorUtil.errToObj(message),
        });
    }
    /**
     * Equivalent to `.min(1)`
     */
    nonempty(message) {
        return this.min(1, lib_errorUtil.errToObj(message));
    }
    trim() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
        });
    }
    toLowerCase() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
        });
    }
    toUpperCase() {
        return new ZodString({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
        });
    }
    get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
    }
    get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
    }
    get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
    }
    get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
    }
    get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
    }
    get isBase64url() {
        // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodString.create = (params) => {
    var _a;
    return new ZodString({
        checks: [],
        typeName: lib_ZodFirstPartyTypeKind.ZodString,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return (valInt % stepInt) / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        if (this._def.coerce) {
            input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.number,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "int") {
                if (!lib_util.isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        exact: false,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "finite") {
                if (!Number.isFinite(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_finite,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                lib_util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, lib_errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, lib_errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, lib_errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, lib_errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: lib_errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: lib_errorUtil.toString(message),
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: lib_errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: lib_errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: lib_errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: lib_errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value: value,
            message: lib_errorUtil.toString(message),
        });
    }
    finite(message) {
        return this._addCheck({
            kind: "finite",
            message: lib_errorUtil.toString(message),
        });
    }
    safe(message) {
        return this._addCheck({
            kind: "min",
            inclusive: true,
            value: Number.MIN_SAFE_INTEGER,
            message: lib_errorUtil.toString(message),
        })._addCheck({
            kind: "max",
            inclusive: true,
            value: Number.MAX_SAFE_INTEGER,
            message: lib_errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" ||
            (ch.kind === "multipleOf" && lib_util.isInteger(ch.value)));
    }
    get isFinite() {
        let max = null, min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "finite" ||
                ch.kind === "int" ||
                ch.kind === "multipleOf") {
                return true;
            }
            else if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
            else if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return Number.isFinite(min) && Number.isFinite(max);
    }
}
ZodNumber.create = (params) => {
    return new ZodNumber({
        checks: [],
        typeName: lib_ZodFirstPartyTypeKind.ZodNumber,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodBigInt extends ZodType {
    constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
    }
    _parse(input) {
        if (this._def.coerce) {
            try {
                input.data = BigInt(input.data);
            }
            catch (_a) {
                return this._getInvalidInput(input);
            }
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
            return this._getInvalidInput(input);
        }
        let ctx = undefined;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                const tooSmall = check.inclusive
                    ? input.data < check.value
                    : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        type: "bigint",
                        minimum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                const tooBig = check.inclusive
                    ? input.data > check.value
                    : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        type: "bigint",
                        maximum: check.value,
                        inclusive: check.inclusive,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "multipleOf") {
                if (input.data % check.value !== BigInt(0)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message,
                    });
                    status.dirty();
                }
            }
            else {
                lib_util.assertNever(check);
            }
        }
        return { status: status.value, value: input.data };
    }
    _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.bigint,
            received: ctx.parsedType,
        });
        return INVALID;
    }
    gte(value, message) {
        return this.setLimit("min", value, true, lib_errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, lib_errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, lib_errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, lib_errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodBigInt({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: lib_errorUtil.toString(message),
                },
            ],
        });
    }
    _addCheck(check) {
        return new ZodBigInt({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: false,
            message: lib_errorUtil.toString(message),
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: false,
            message: lib_errorUtil.toString(message),
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: true,
            message: lib_errorUtil.toString(message),
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: true,
            message: lib_errorUtil.toString(message),
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: lib_errorUtil.toString(message),
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max;
    }
}
ZodBigInt.create = (params) => {
    var _a;
    return new ZodBigInt({
        checks: [],
        typeName: lib_ZodFirstPartyTypeKind.ZodBigInt,
        coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
        ...processCreateParams(params),
    });
};
class ZodBoolean extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.boolean,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodBoolean.create = (params) => {
    return new ZodBoolean({
        typeName: lib_ZodFirstPartyTypeKind.ZodBoolean,
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        ...processCreateParams(params),
    });
};
class ZodDate extends ZodType {
    _parse(input) {
        if (this._def.coerce) {
            input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.date,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (isNaN(input.data.getTime())) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_date,
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = undefined;
        for (const check of this._def.checks) {
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        minimum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        message: check.message,
                        inclusive: true,
                        exact: false,
                        maximum: check.value,
                        type: "date",
                    });
                    status.dirty();
                }
            }
            else {
                lib_util.assertNever(check);
            }
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime()),
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [...this._def.checks, check],
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: lib_errorUtil.toString(message),
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: lib_errorUtil.toString(message),
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "min") {
                if (min === null || ch.value > min)
                    min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
            if (ch.kind === "max") {
                if (max === null || ch.value < max)
                    max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
}
ZodDate.create = (params) => {
    return new ZodDate({
        checks: [],
        coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
        typeName: lib_ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params),
    });
};
class ZodSymbol extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.symbol,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodSymbol.create = (params) => {
    return new ZodSymbol({
        typeName: lib_ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params),
    });
};
class ZodUndefined extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.undefined,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodUndefined.create = (params) => {
    return new ZodUndefined({
        typeName: lib_ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params),
    });
};
class ZodNull extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.null,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodNull.create = (params) => {
    return new ZodNull({
        typeName: lib_ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params),
    });
};
class ZodAny extends ZodType {
    constructor() {
        super(...arguments);
        // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
        this._any = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodAny.create = (params) => {
    return new ZodAny({
        typeName: lib_ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params),
    });
};
class ZodUnknown extends ZodType {
    constructor() {
        super(...arguments);
        // required
        this._unknown = true;
    }
    _parse(input) {
        return OK(input.data);
    }
}
ZodUnknown.create = (params) => {
    return new ZodUnknown({
        typeName: lib_ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params),
    });
};
class ZodNever extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.never,
            received: ctx.parsedType,
        });
        return INVALID;
    }
}
ZodNever.create = (params) => {
    return new ZodNever({
        typeName: lib_ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params),
    });
};
class ZodVoid extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.void,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return OK(input.data);
    }
}
ZodVoid.create = (params) => {
    return new ZodVoid({
        typeName: lib_ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params),
    });
};
class ZodArray extends ZodType {
    _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (def.exactLength !== null) {
            const tooBig = ctx.data.length > def.exactLength.value;
            const tooSmall = ctx.data.length < def.exactLength.value;
            if (tooBig || tooSmall) {
                addIssueToContext(ctx, {
                    code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                    minimum: (tooSmall ? def.exactLength.value : undefined),
                    maximum: (tooBig ? def.exactLength.value : undefined),
                    type: "array",
                    inclusive: true,
                    exact: true,
                    message: def.exactLength.message,
                });
                status.dirty();
            }
        }
        if (def.minLength !== null) {
            if (ctx.data.length < def.minLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.minLength.message,
                });
                status.dirty();
            }
        }
        if (def.maxLength !== null) {
            if (ctx.data.length > def.maxLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxLength.value,
                    type: "array",
                    inclusive: true,
                    exact: false,
                    message: def.maxLength.message,
                });
                status.dirty();
            }
        }
        if (ctx.common.async) {
            return Promise.all([...ctx.data].map((item, i) => {
                return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            })).then((result) => {
                return ParseStatus.mergeArray(status, result);
            });
        }
        const result = [...ctx.data].map((item, i) => {
            return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: { value: minLength, message: lib_errorUtil.toString(message) },
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: { value: maxLength, message: lib_errorUtil.toString(message) },
        });
    }
    length(len, message) {
        return new ZodArray({
            ...this._def,
            exactLength: { value: len, message: lib_errorUtil.toString(message) },
        });
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodArray.create = (schema, params) => {
    return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: lib_ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params),
    });
};
function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
        const newShape = {};
        for (const key in schema.shape) {
            const fieldSchema = schema.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema._def,
            shape: () => newShape,
        });
    }
    else if (schema instanceof ZodArray) {
        return new ZodArray({
            ...schema._def,
            type: deepPartialify(schema.element),
        });
    }
    else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
    }
    else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    }
    else {
        return schema;
    }
}
class ZodObject extends ZodType {
    constructor() {
        super(...arguments);
        this._cached = null;
        /**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */
        this.nonstrict = this.passthrough;
        // extend<
        //   Augmentation extends ZodRawShape,
        //   NewOutput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
        //       ? Augmentation[k]["_output"]
        //       : k extends keyof Output
        //       ? Output[k]
        //       : never;
        //   }>,
        //   NewInput extends util.flatten<{
        //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
        //       ? Augmentation[k]["_input"]
        //       : k extends keyof Input
        //       ? Input[k]
        //       : never;
        //   }>
        // >(
        //   augmentation: Augmentation
        // ): ZodObject<
        //   extendShape<T, Augmentation>,
        //   UnknownKeys,
        //   Catchall,
        //   NewOutput,
        //   NewInput
        // > {
        //   return new ZodObject({
        //     ...this._def,
        //     shape: () => ({
        //       ...this._def.shape(),
        //       ...augmentation,
        //     }),
        //   }) as any;
        // }
        /**
         * @deprecated Use `.extend` instead
         *  */
        this.augment = this.extend;
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const shape = this._def.shape();
        const keys = lib_util.objectKeys(shape);
        return (this._cached = { shape, keys });
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever &&
            this._def.unknownKeys === "strip")) {
            for (const key in ctx.data) {
                if (!shapeKeys.includes(key)) {
                    extraKeys.push(key);
                }
            }
        }
        const pairs = [];
        for (const key of shapeKeys) {
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: { status: "valid", value: key },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") {
                for (const key of extraKeys) {
                    pairs.push({
                        key: { status: "valid", value: key },
                        value: { status: "valid", value: ctx.data[key] },
                    });
                }
            }
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.unrecognized_keys,
                        keys: extraKeys,
                    });
                    status.dirty();
                }
            }
            else if (unknownKeys === "strip") ;
            else {
                throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
            }
        }
        else {
            // run catchall validation
            const catchall = this._def.catchall;
            for (const key of extraKeys) {
                const value = ctx.data[key];
                pairs.push({
                    key: { status: "valid", value: key },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                    ),
                    alwaysSet: key in ctx.data,
                });
            }
        }
        if (ctx.common.async) {
            return Promise.resolve()
                .then(async () => {
                const syncPairs = [];
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    syncPairs.push({
                        key,
                        value,
                        alwaysSet: pair.alwaysSet,
                    });
                }
                return syncPairs;
            })
                .then((syncPairs) => {
                return ParseStatus.mergeObjectSync(status, syncPairs);
            });
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        lib_errorUtil.errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...(message !== undefined
                ? {
                    errorMap: (issue, ctx) => {
                        var _a, _b, _c, _d;
                        const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                        if (issue.code === "unrecognized_keys")
                            return {
                                message: (_d = lib_errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError,
                            };
                        return {
                            message: defaultError,
                        };
                    },
                }
                : {}),
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip",
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough",
        });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
        return new ZodObject({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...augmentation,
            }),
        });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...merging._def.shape(),
            }),
            typeName: lib_ZodFirstPartyTypeKind.ZodObject,
        });
        return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
        return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index,
        });
    }
    pick(mask) {
        const shape = {};
        lib_util.objectKeys(mask).forEach((key) => {
            if (mask[key] && this.shape[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    omit(mask) {
        const shape = {};
        lib_util.objectKeys(this.shape).forEach((key) => {
            if (!mask[key]) {
                shape[key] = this.shape[key];
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => shape,
        });
    }
    /**
     * @deprecated
     */
    deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        lib_util.objectKeys(this.shape).forEach((key) => {
            const fieldSchema = this.shape[key];
            if (mask && !mask[key]) {
                newShape[key] = fieldSchema;
            }
            else {
                newShape[key] = fieldSchema.optional();
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    required(mask) {
        const newShape = {};
        lib_util.objectKeys(this.shape).forEach((key) => {
            if (mask && !mask[key]) {
                newShape[key] = this.shape[key];
            }
            else {
                const fieldSchema = this.shape[key];
                let newField = fieldSchema;
                while (newField instanceof ZodOptional) {
                    newField = newField._def.innerType;
                }
                newShape[key] = newField;
            }
        });
        return new ZodObject({
            ...this._def,
            shape: () => newShape,
        });
    }
    keyof() {
        return createZodEnum(lib_util.objectKeys(this.shape));
    }
}
ZodObject.create = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: lib_ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: lib_ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: lib_ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params),
    });
};
class ZodUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            // return first issue-free validation if it exists
            for (const result of results) {
                if (result.result.status === "valid") {
                    return result.result;
                }
            }
            for (const result of results) {
                if (result.result.status === "dirty") {
                    // add issues from dirty option
                    ctx.common.issues.push(...result.ctx.common.issues);
                    return result.result;
                }
            }
            // return invalid
            const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return Promise.all(options.map(async (option) => {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                return {
                    result: await option._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx,
                    }),
                    ctx: childCtx,
                };
            })).then(handleResults);
        }
        else {
            let dirty = undefined;
            const issues = [];
            for (const option of options) {
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: [],
                    },
                    parent: null,
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx,
                });
                if (result.status === "valid") {
                    return result;
                }
                else if (result.status === "dirty" && !dirty) {
                    dirty = { result, ctx: childCtx };
                }
                if (childCtx.common.issues.length) {
                    issues.push(childCtx.common.issues);
                }
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues) => new ZodError(issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors,
            });
            return INVALID;
        }
    }
    get options() {
        return this._def.options;
    }
}
ZodUnion.create = (types, params) => {
    return new ZodUnion({
        options: types,
        typeName: lib_ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params),
    });
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
    }
    else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
    }
    else if (type instanceof ZodLiteral) {
        return [type.value];
    }
    else if (type instanceof ZodEnum) {
        return type.options;
    }
    else if (type instanceof ZodNativeEnum) {
        // eslint-disable-next-line ban/ban
        return lib_util.objectValues(type.enum);
    }
    else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
    }
    else if (type instanceof ZodUndefined) {
        return [undefined];
    }
    else if (type instanceof ZodNull) {
        return [null];
    }
    else if (type instanceof ZodOptional) {
        return [undefined, ...getDiscriminator(type.unwrap())];
    }
    else if (type instanceof ZodNullable) {
        return [null, ...getDiscriminator(type.unwrap())];
    }
    else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
    }
    else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
    }
    else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
    }
    else {
        return [];
    }
};
class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [discriminator],
            });
            return INVALID;
        }
        if (ctx.common.async) {
            return option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
        else {
            return option._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
        }
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get options() {
        return this._def.options;
    }
    get optionsMap() {
        return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
        // Get all the valid discriminator values
        const optionsMap = new Map();
        // try {
        for (const type of options) {
            const discriminatorValues = getDiscriminator(type.shape[discriminator]);
            if (!discriminatorValues.length) {
                throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
            }
            for (const value of discriminatorValues) {
                if (optionsMap.has(value)) {
                    throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                }
                optionsMap.set(value, type);
            }
        }
        return new ZodDiscriminatedUnion({
            typeName: lib_ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            optionsMap,
            ...processCreateParams(params),
        });
    }
}
function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) {
        return { valid: true, data: a };
    }
    else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        const bKeys = lib_util.objectKeys(b);
        const sharedKeys = lib_util
            .objectKeys(a)
            .filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
    }
    else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) {
            return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) {
                return { valid: false };
            }
            newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
    }
    else if (aType === ZodParsedType.date &&
        bType === ZodParsedType.date &&
        +a === +b) {
        return { valid: true, data: a };
    }
    else {
        return { valid: false };
    }
}
class ZodIntersection extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
            if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                return INVALID;
            }
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_intersection_types,
                });
                return INVALID;
            }
            if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                status.dirty();
            }
            return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
            return Promise.all([
                this._def.left._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
                this._def.right._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }),
            ]).then(([left, right]) => handleParsed(left, right));
        }
        else {
            return handleParsed(this._def.left._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }), this._def.right._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            }));
        }
    }
}
ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
        left: left,
        right: right,
        typeName: lib_ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params),
    });
};
class ZodTuple extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: this._def.items.length,
                inclusive: true,
                exact: false,
                type: "array",
            });
            status.dirty();
        }
        const items = [...ctx.data]
            .map((item, itemIndex) => {
            const schema = this._def.items[itemIndex] || this._def.rest;
            if (!schema)
                return null;
            return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        })
            .filter((x) => !!x); // filter nulls
        if (ctx.common.async) {
            return Promise.all(items).then((results) => {
                return ParseStatus.mergeArray(status, results);
            });
        }
        else {
            return ParseStatus.mergeArray(status, items);
        }
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest,
        });
    }
}
ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
        items: schemas,
        typeName: lib_ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params),
    });
};
class ZodRecord extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
            pairs.push({
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
                alwaysSet: key in ctx.data,
            });
        }
        if (ctx.common.async) {
            return ParseStatus.mergeObjectAsync(status, pairs);
        }
        else {
            return ParseStatus.mergeObjectSync(status, pairs);
        }
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) {
            return new ZodRecord({
                keyType: first,
                valueType: second,
                typeName: lib_ZodFirstPartyTypeKind.ZodRecord,
                ...processCreateParams(third),
            });
        }
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: lib_ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second),
        });
    }
}
class ZodMap extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.map,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])),
            };
        });
        if (ctx.common.async) {
            const finalMap = new Map();
            return Promise.resolve().then(async () => {
                for (const pair of pairs) {
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return INVALID;
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
                return { status: status.value, value: finalMap };
            });
        }
        else {
            const finalMap = new Map();
            for (const pair of pairs) {
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") {
                    return INVALID;
                }
                if (key.status === "dirty" || value.status === "dirty") {
                    status.dirty();
                }
                finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
        }
    }
}
ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
        valueType,
        keyType,
        typeName: lib_ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params),
    });
};
class ZodSet extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.set,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
            if (ctx.data.size < def.minSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def.minSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.minSize.message,
                });
                status.dirty();
            }
        }
        if (def.maxSize !== null) {
            if (ctx.data.size > def.maxSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def.maxSize.value,
                    type: "set",
                    inclusive: true,
                    exact: false,
                    message: def.maxSize.message,
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements) {
            const parsedSet = new Set();
            for (const element of elements) {
                if (element.status === "aborted")
                    return INVALID;
                if (element.status === "dirty")
                    status.dirty();
                parsedSet.add(element.value);
            }
            return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
            return Promise.all(elements).then((elements) => finalizeSet(elements));
        }
        else {
            return finalizeSet(elements);
        }
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: { value: minSize, message: lib_errorUtil.toString(message) },
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: { value: maxSize, message: lib_errorUtil.toString(message) },
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
}
ZodSet.create = (valueType, params) => {
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: lib_ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params),
    });
};
class ZodFunction extends ZodType {
    constructor() {
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.function,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        function makeArgsIssue(args, error) {
            return makeIssue({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    lib_errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_arguments,
                    argumentsError: error,
                },
            });
        }
        function makeReturnsIssue(returns, error) {
            return makeIssue({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    lib_errorMap,
                ].filter((x) => !!x),
                issueData: {
                    code: ZodIssueCode.invalid_return_type,
                    returnTypeError: error,
                },
            });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(async function (...args) {
                const error = new ZodError([]);
                const parsedArgs = await me._def.args
                    .parseAsync(args, params)
                    .catch((e) => {
                    error.addIssue(makeArgsIssue(args, e));
                    throw error;
                });
                const result = await Reflect.apply(fn, this, parsedArgs);
                const parsedReturns = await me._def.returns._def.type
                    .parseAsync(result, params)
                    .catch((e) => {
                    error.addIssue(makeReturnsIssue(result, e));
                    throw error;
                });
                return parsedReturns;
            });
        }
        else {
            // Would love a way to avoid disabling this rule, but we need
            // an alias (using an arrow function was what caused 2651).
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const me = this;
            return OK(function (...args) {
                const parsedArgs = me._def.args.safeParse(args, params);
                if (!parsedArgs.success) {
                    throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
                }
                const result = Reflect.apply(fn, this, parsedArgs.data);
                const parsedReturns = me._def.returns.safeParse(result, params);
                if (!parsedReturns.success) {
                    throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
                }
                return parsedReturns.data;
            });
        }
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create()),
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType,
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params) {
        return new ZodFunction({
            args: (args
                ? args
                : ZodTuple.create([]).rest(ZodUnknown.create())),
            returns: returns || ZodUnknown.create(),
            typeName: lib_ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params),
        });
    }
}
class ZodLazy extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
}
ZodLazy.create = (getter, params) => {
    return new ZodLazy({
        getter: getter,
        typeName: lib_ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params),
    });
};
class ZodLiteral extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_literal,
                expected: this._def.value,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
    get value() {
        return this._def.value;
    }
}
ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
        value: value,
        typeName: lib_ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params),
    });
};
function createZodEnum(values, params) {
    return new ZodEnum({
        values,
        typeName: lib_ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params),
    });
}
class ZodEnum extends ZodType {
    constructor() {
        super(...arguments);
        _ZodEnum_cache.set(this, void 0);
    }
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                expected: lib_util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
            __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
            enumValues[val] = val;
        }
        return enumValues;
    }
    extract(values, newDef = this._def) {
        return ZodEnum.create(values, {
            ...this._def,
            ...newDef,
        });
    }
    exclude(values, newDef = this._def) {
        return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
            ...this._def,
            ...newDef,
        });
    }
}
_ZodEnum_cache = new WeakMap();
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
    constructor() {
        super(...arguments);
        _ZodNativeEnum_cache.set(this, void 0);
    }
    _parse(input) {
        const nativeEnumValues = lib_util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string &&
            ctx.parsedType !== ZodParsedType.number) {
            const expectedValues = lib_util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                expected: lib_util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type,
            });
            return INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
            __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(lib_util.getValidEnumValues(this._def.values)), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
            const expectedValues = lib_util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues,
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get enum() {
        return this._def.values;
    }
}
_ZodNativeEnum_cache = new WeakMap();
ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
        values: values,
        typeName: lib_ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params),
    });
};
class ZodPromise extends ZodType {
    unwrap() {
        return this._def.type;
    }
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise &&
            ctx.common.async === false) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.promise,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise
            ? ctx.data
            : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap,
            });
        }));
    }
}
ZodPromise.create = (schema, params) => {
    return new ZodPromise({
        type: schema,
        typeName: lib_ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params),
    });
};
class ZodEffects extends ZodType {
    innerType() {
        return this._def.schema;
    }
    sourceType() {
        return this._def.schema._def.typeName === lib_ZodFirstPartyTypeKind.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
    }
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
            addIssue: (arg) => {
                addIssueToContext(ctx, arg);
                if (arg.fatal) {
                    status.abort();
                }
                else {
                    status.dirty();
                }
            },
            get path() {
                return ctx.path;
            },
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data, checkCtx);
            if (ctx.common.async) {
                return Promise.resolve(processed).then(async (processed) => {
                    if (status.value === "aborted")
                        return INVALID;
                    const result = await this._def.schema._parseAsync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx,
                    });
                    if (result.status === "aborted")
                        return INVALID;
                    if (result.status === "dirty")
                        return DIRTY(result.value);
                    if (status.value === "dirty")
                        return DIRTY(result.value);
                    return result;
                });
            }
            else {
                if (status.value === "aborted")
                    return INVALID;
                const result = this._def.schema._parseSync({
                    data: processed,
                    path: ctx.path,
                    parent: ctx,
                });
                if (result.status === "aborted")
                    return INVALID;
                if (result.status === "dirty")
                    return DIRTY(result.value);
                if (status.value === "dirty")
                    return DIRTY(result.value);
                return result;
            }
        }
        if (effect.type === "refinement") {
            const executeRefinement = (acc) => {
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) {
                    return Promise.resolve(result);
                }
                if (result instanceof Promise) {
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                }
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inner.status === "aborted")
                    return INVALID;
                if (inner.status === "dirty")
                    status.dirty();
                // return value is ignored
                executeRefinement(inner.value);
                return { status: status.value, value: inner.value };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((inner) => {
                    if (inner.status === "aborted")
                        return INVALID;
                    if (inner.status === "dirty")
                        status.dirty();
                    return executeRefinement(inner.value).then(() => {
                        return { status: status.value, value: inner.value };
                    });
                });
            }
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (!isValid(base))
                    return base;
                const result = effect.transform(base.value, checkCtx);
                if (result instanceof Promise) {
                    throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                }
                return { status: status.value, value: result };
            }
            else {
                return this._def.schema
                    ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
                    .then((base) => {
                    if (!isValid(base))
                        return base;
                    return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
                });
            }
        }
        lib_util.assertNever(effect);
    }
}
ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
        schema,
        typeName: lib_ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params),
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: lib_ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params),
    });
};
class ZodOptional extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
            return OK(undefined);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodOptional.create = (type, params) => {
    return new ZodOptional({
        innerType: type,
        typeName: lib_ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params),
    });
};
class ZodNullable extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
            return OK(null);
        }
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodNullable.create = (type, params) => {
    return new ZodNullable({
        innerType: type,
        typeName: lib_ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params),
    });
};
class ZodDefault extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
            data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
}
ZodDefault.create = (type, params) => {
    return new ZodDefault({
        innerType: type,
        typeName: lib_ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function"
            ? params.default
            : () => params.default,
        ...processCreateParams(params),
    });
};
class ZodCatch extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        // newCtx is used to not collect issues from inner types in ctx
        const newCtx = {
            ...ctx,
            common: {
                ...ctx.common,
                issues: [],
            },
        };
        const result = this._def.innerType._parse({
            data: newCtx.data,
            path: newCtx.path,
            parent: {
                ...newCtx,
            },
        });
        if (isAsync(result)) {
            return result.then((result) => {
                return {
                    status: "valid",
                    value: result.status === "valid"
                        ? result.value
                        : this._def.catchValue({
                            get error() {
                                return new ZodError(newCtx.common.issues);
                            },
                            input: newCtx.data,
                        }),
                };
            });
        }
        else {
            return {
                status: "valid",
                value: result.status === "valid"
                    ? result.value
                    : this._def.catchValue({
                        get error() {
                            return new ZodError(newCtx.common.issues);
                        },
                        input: newCtx.data,
                    }),
            };
        }
    }
    removeCatch() {
        return this._def.innerType;
    }
}
ZodCatch.create = (type, params) => {
    return new ZodCatch({
        innerType: type,
        typeName: lib_ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params),
    });
};
class ZodNaN extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.nan,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        return { status: "valid", value: input.data };
    }
}
ZodNaN.create = (params) => {
    return new ZodNaN({
        typeName: lib_ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params),
    });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
    _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx,
        });
    }
    unwrap() {
        return this._def.type;
    }
}
class ZodPipeline extends ZodType {
    _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
            const handleAsync = async () => {
                const inResult = await this._def.in._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inResult.status === "aborted")
                    return INVALID;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return DIRTY(inResult.value);
                }
                else {
                    return this._def.out._parseAsync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx,
                    });
                }
            };
            return handleAsync();
        }
        else {
            const inResult = this._def.in._parseSync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx,
            });
            if (inResult.status === "aborted")
                return INVALID;
            if (inResult.status === "dirty") {
                status.dirty();
                return {
                    status: "dirty",
                    value: inResult.value,
                };
            }
            else {
                return this._def.out._parseSync({
                    data: inResult.value,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        }
    }
    static create(a, b) {
        return new ZodPipeline({
            in: a,
            out: b,
            typeName: lib_ZodFirstPartyTypeKind.ZodPipeline,
        });
    }
}
class ZodReadonly extends ZodType {
    _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
            if (isValid(data)) {
                data.value = Object.freeze(data.value);
            }
            return data;
        };
        return isAsync(result)
            ? result.then((data) => freeze(data))
            : freeze(result);
    }
    unwrap() {
        return this._def.innerType;
    }
}
ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
        innerType: type,
        typeName: lib_ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params),
    });
};
function custom(check, params = {}, 
/**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */
fatal) {
    if (check)
        return ZodAny.create().superRefine((data, ctx) => {
            var _a, _b;
            if (!check(data)) {
                const p = typeof params === "function"
                    ? params(data)
                    : typeof params === "string"
                        ? { message: params }
                        : params;
                const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
                const p2 = typeof p === "string" ? { message: p } : p;
                ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
            }
        });
    return ZodAny.create();
}
const late = {
    object: ZodObject.lazycreate,
};
var lib_ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind) {
    ZodFirstPartyTypeKind["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(lib_ZodFirstPartyTypeKind || (lib_ZodFirstPartyTypeKind = {}));
const instanceOfType = (
// const instanceOfType = <T extends new (...args: any[]) => any>(
cls, params = {
    message: `Input not instance of ${cls.name}`,
}) => custom((data) => data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();
const coerce = {
    string: ((arg) => ZodString.create({ ...arg, coerce: true })),
    number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
    boolean: ((arg) => ZodBoolean.create({
        ...arg,
        coerce: true,
    })),
    bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
    date: ((arg) => ZodDate.create({ ...arg, coerce: true })),
};
const NEVER = INVALID;

var lib_z = /*#__PURE__*/Object.freeze({
    __proto__: null,
    defaultErrorMap: lib_errorMap,
    setErrorMap: setErrorMap,
    getErrorMap: getErrorMap,
    makeIssue: makeIssue,
    EMPTY_PATH: EMPTY_PATH,
    addIssueToContext: addIssueToContext,
    ParseStatus: ParseStatus,
    INVALID: INVALID,
    DIRTY: DIRTY,
    OK: OK,
    isAborted: isAborted,
    isDirty: isDirty,
    isValid: isValid,
    isAsync: isAsync,
    get util () { return lib_util; },
    get objectUtil () { return lib_objectUtil; },
    ZodParsedType: ZodParsedType,
    getParsedType: getParsedType,
    ZodType: ZodType,
    datetimeRegex: datetimeRegex,
    ZodString: ZodString,
    ZodNumber: ZodNumber,
    ZodBigInt: ZodBigInt,
    ZodBoolean: ZodBoolean,
    ZodDate: ZodDate,
    ZodSymbol: ZodSymbol,
    ZodUndefined: ZodUndefined,
    ZodNull: ZodNull,
    ZodAny: ZodAny,
    ZodUnknown: ZodUnknown,
    ZodNever: ZodNever,
    ZodVoid: ZodVoid,
    ZodArray: ZodArray,
    ZodObject: ZodObject,
    ZodUnion: ZodUnion,
    ZodDiscriminatedUnion: ZodDiscriminatedUnion,
    ZodIntersection: ZodIntersection,
    ZodTuple: ZodTuple,
    ZodRecord: ZodRecord,
    ZodMap: ZodMap,
    ZodSet: ZodSet,
    ZodFunction: ZodFunction,
    ZodLazy: ZodLazy,
    ZodLiteral: ZodLiteral,
    ZodEnum: ZodEnum,
    ZodNativeEnum: ZodNativeEnum,
    ZodPromise: ZodPromise,
    ZodEffects: ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional: ZodOptional,
    ZodNullable: ZodNullable,
    ZodDefault: ZodDefault,
    ZodCatch: ZodCatch,
    ZodNaN: ZodNaN,
    BRAND: BRAND,
    ZodBranded: ZodBranded,
    ZodPipeline: ZodPipeline,
    ZodReadonly: ZodReadonly,
    custom: custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late: late,
    get ZodFirstPartyTypeKind () { return lib_ZodFirstPartyTypeKind; },
    coerce: coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    'enum': enumType,
    'function': functionType,
    'instanceof': instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    'null': nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean: oboolean,
    onumber: onumber,
    optional: optionalType,
    ostring: ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    'undefined': undefinedType,
    union: unionType,
    unknown: unknownType,
    'void': voidType,
    NEVER: NEVER,
    ZodIssueCode: ZodIssueCode,
    quotelessJson: quotelessJson,
    ZodError: ZodError
});



;// CONCATENATED MODULE: ./node_modules/@scalar/analytics-client/dist/events.js

const analyticsEventData = {
  "page-view": lib_z.object({
    to: lib_z.string(),
    from: lib_z.string(),
    hostname: lib_z.string()
  })
};
const analyticsEvents = Object.keys(analyticsEventData);
const analyticsEventEnum = lib_z["enum"](analyticsEvents);

//# sourceMappingURL=events.js.map

;// CONCATENATED MODULE: ./node_modules/@scalar/analytics-client/dist/index.js

const analyticsFactory = (baseUrl, getAuthToken) => {
  async function capture(event, ...[data]) {
    if (!analyticsEvents.includes(event)) {
      throw new Error("[Analytics]: Invalid event submission");
    }
    const authToken = getAuthToken();
    await fetch(`${baseUrl}/analytics/send`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...authToken ? { "authorization": `Bearer ${authToken}` } : {}
      },
      body: JSON.stringify({
        event,
        data
      })
    });
  }
  return {
    capture
  };
};

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/analytics.js

const analytics_c = analyticsFactory(
  "https://api.scalar.com",
  () => null
  // There is no auth to return.
);


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/hooks/useClientConfig.js
var useClientConfig = __webpack_require__(87147);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/hooks/useLayout.js
var useLayout = __webpack_require__(68864);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/hooks/useAnalytics.js



function useAnalytics_m() {
  const { layout: o } = (0,useLayout/* .useLayout */.g)();
  if (!(!(0,useClientConfig/* .useClientConfig */.T)().value.telemetry || o === "modal"))
    return analytics_c;
}


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/libs/validate-parameters.js
const validate_parameters_i = (a) => {
  const r = {
    invalidParams: /* @__PURE__ */ new Set(),
    hasBlockingErrors: !1
  };
  return a && (a.parameters?.path?.forEach((e) => {
    e.enabled && e.value.trim() === "" && (r.invalidParams.add(e.key), r.hasBlockingErrors = !0);
  }), ["query", "headers", "cookies"].forEach((e) => {
    a.parameters?.[e]?.forEach((s) => {
      s.required && s.value === "" && r.invalidParams.add(s.key);
    });
  })), r;
};


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/active-entities.js + 1 modules
var active_entities = __webpack_require__(17342);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/import-spec.js
var import_spec = __webpack_require__(34735);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/views/Request/libs/watch-mode.js
var watch_mode = __webpack_require__(56917);
// EXTERNAL MODULE: ./node_modules/@scalar/oas-utils/dist/transforms/index.js + 3 modules
var transforms = __webpack_require__(74437);
// EXTERNAL MODULE: ./node_modules/@vueuse/core/index.mjs
var core = __webpack_require__(55410);
// EXTERNAL MODULE: ./node_modules/microdiff/dist/index.js
var microdiff_dist = __webpack_require__(63308);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/store.js + 10 modules
var store = __webpack_require__(99456);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/hooks/useOpenApiWatcher.js










const useOpenApiWatcher_b = 5 * 1e3, useOpenApiWatcher_P = 60 * 1e3, useOpenApiWatcher_B = () => {
  const { toast: h } = (0,dist/* .useToasts */.Yf)(), c = (0,active_entities/* .useActiveEntities */.JC)(), o = (0,store/* .useWorkspace */.hA)(), { activeCollection: s, activeWorkspace: v } = c, { collectionMutators: n } = o, i = (e) => h(`[useOpenApiWatcher] Changes to the ${e} were not applied`, "error"), O = (e) => {
    e.path[0] === "info" || e.path[0] === "security" ? (0,watch_mode/* .mutateCollectionDiff */.w7)(e, c, o) || i("collection") : e.path[0] === "components" && e.path[1] === "securitySchemes" ? (0,watch_mode/* .mutateSecuritySchemeDiff */.Jm)(e, c, o) || i("securitySchemes") : e.path[0] === "servers" ? (0,watch_mode/* .mutateServerDiff */.Li)(e, c, o) || i("servers") : e.path[0] === "tags" ? (0,watch_mode/* .mutateTagDiff */.su)(e, c, o) || i("tags") : e.path[0] === "paths" && ((0,watch_mode/* .mutateRequestDiff */.pl)(e, c, o) || i("requests"));
  }, { pause: p, resume: m } = (0,core/* .useTimeoutPoll */.Sj0)(async () => {
    const e = s.value?.documentUrl;
    if (!e)
      return;
    const t = import_spec/* .specDictionary */.i[e];
    try {
      const a = await (0,helpers/* .fetchDocument */.sW)(e, v.value?.proxyUrl, void 0, !1), u = (0,helpers/* .createHash */.n1)(a);
      if (n.edit(s.value.uid, "watchModeStatus", "WATCHING"), t?.hash)
        if (t.hash && t.hash !== u) {
          const { schema: r } = await (0,transforms/* .parseSchema */.D0)(a), W = (0,microdiff_dist/* ["default"] */.A)(t.schema, r), d = (0,watch_mode/* .combineRenameDiffs */.uA)(W);
          try {
            d.forEach(O), import_spec/* .specDictionary */.i[e] = {
              hash: u,
              schema: r
            };
          } catch (w) {
            console.error("[useOpenApiWatcher] Error:", w);
          }
        } else
          console.log("[useOpenApiWatcher] No changes detected yet…");
      else {
        const { schema: r } = await (0,transforms/* .parseSchema */.D0)(a);
        r && (import_spec/* .specDictionary */.i[e] = {
          hash: u,
          schema: r
        });
      }
    } catch (a) {
      console.error("[useOpenApiWatcher] Error:", a), console.info("[useOpenApiWatcher] Pausing watcher for 60 seconds"), p(), n.edit(s.value.uid, "watchModeStatus", "ERROR"), h("[useOpenApiWatcher] Unable to fetch the spec file, paused the watcher for 60 seconds", "error"), setTimeout(() => {
        console.info("[useOpenApiWatcher] Resuming watcher"), m();
      }, useOpenApiWatcher_P);
    }
  }, useOpenApiWatcher_b);
  (0,vue_runtime_esm_bundler/* .watch */.wB)(
    [() => s.value?.documentUrl, () => s.value?.watchMode],
    ([e, t]) => {
      e && t ? (console.info(`[useOpenApiWatcher] Watching ${e} …`), m()) : s.value && (p(), n.edit(s.value.uid, "watchModeStatus", "IDLE"));
    },
    { immediate: !0 }
  );
};


// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var components_dist = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@scalar/icons/dist/library/index.js + 86 modules
var library = __webpack_require__(76371);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/assets/rabbit.ascii.js
const rabbit_ascii_ = `         ,\\
         \\\\\\,_
          \\\` ,\\
     __,.-" =__)
   ."        )
,_/   ,    \\/\\_
\\_| )_-\\ \\_-\`
   \`-----\` \`--\``;


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/assets/rabbitjump.ascii.js
const rabbitjump_ascii_ = `         __
        // \\,_
          \\\` ,\\
     __,.-" =__)
   ."        )
,_/   ,    \\/\\ 
\\_| // /  /  /
   /  /    `;


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/routes.js
var routes = __webpack_require__(15650);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/EnvironmentSelector/EnvironmentSelector.vue.js







const EnvironmentSelector_vue_q = { class: "m-0 flex items-center gap-1.5 font-medium whitespace-nowrap" }, EnvironmentSelector_vue_G = { class: "flex h-4 w-4 items-center justify-center" }, EnvironmentSelector_vue_ee = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "EnvironmentSelector",
  setup(H) {
    const { activeCollection: o, activeWorkspace: i, activeEnvironment: c } = (0,active_entities/* .useActiveEntities */.JC)(), { collectionMutators: S } = (0,store/* .useWorkspace */.hA)(), { layout: C } = (0,useLayout/* .useLayout */.g)(), y = (0,vue_router/* .useRouter */.rd)(), m = (t) => {
      o.value && i.value && (S.edit(
        o.value.uid,
        "x-scalar-active-environment",
        t
      ), i.value.activeEnvironmentId = t);
    }, I = () => y.push({
      name: "environment.default",
      params: {
        [routes/* .PathId.Workspace */.TU.Workspace]: i.value?.uid
      }
    }), N = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      const { value: t } = c, { value: e } = o;
      return t?.name || e?.["x-scalar-active-environment"] || "No Environment";
    }), u = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      const { value: t } = o, e = t?.["x-scalar-environments"];
      return e ? Object.entries(e).map(([a, x]) => ({
        ...x,
        uid: a,
        name: a
      })) : [];
    }), b = () => {
      const t = u.value;
      if (t.length > 0) {
        const e = t[t.length - 1];
        e?.uid && m(e.uid);
      }
    };
    (0,vue_runtime_esm_bundler/* .watch */.wB)(u, (t, e) => {
      t.length > e.length && b();
    });
    const f = (t) => {
      const e = t["x-scalar-active-environment"];
      e && o.value && i.value ? (o.value["x-scalar-active-environment"] = e, i.value.activeEnvironmentId = e) : i.value && (i.value.activeEnvironmentId = "");
    };
    return (0,vue_runtime_esm_bundler/* .watch */.wB)(
      o,
      (t) => t && f(t)
    ), (0,vue_runtime_esm_bundler/* .onMounted */.sV)(() => {
      o.value && f(o.value);
    }), (t, e) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdown */.SM), { teleport: "" }, {
      items: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(u.value, (a) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownItem */.rA), {
          key: a.uid,
          class: "group/item flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap",
          onClick: (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((x) => m(a.uid), ["stop"])
        }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarListboxCheckbox */.Pq), {
              selected: (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.["x-scalar-active-environment"] === a.uid
            }, null, 8, ["selected"]),
            (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" " + (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(a.name), 1)
          ]),
          _: 2
        }, 1032, ["onClick"]))), 128)),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownItem */.rA), {
          class: "group/item flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap",
          onClick: e[0] || (e[0] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((a) => m(""), ["stop"]))
        }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarListboxCheckbox */.Pq), {
              selected: (0,vue_runtime_esm_bundler/* .unref */.R1)(c)?.uid === "" && (0,vue_runtime_esm_bundler/* .unref */.R1)(o)?.["x-scalar-active-environment"] === "" || (0,vue_runtime_esm_bundler/* .unref */.R1)(c)?.name === "No Environment"
            }, null, 8, ["selected"]),
            e[1] || (e[1] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" No Environment ", -1))
          ]),
          _: 1
        }),
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownDivider */.t)),
        (0,vue_runtime_esm_bundler/* .unref */.R1)(C) !== "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownItem */.rA), {
          key: 0,
          class: "flex items-center gap-1.5",
          onClick: I
        }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", EnvironmentSelector_vue_G, [
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                icon: "Brackets",
                size: "sm"
              })
            ]),
            e[2] || (e[2] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", { class: "leading-none" }, "Manage Environments", -1))
          ]),
          _: 1
        })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
      ]),
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarButton */.RO), {
          class: "text-c-1 hover:bg-b-2 line-clamp-1 h-auto w-fit justify-start px-1.5 py-1.5 font-normal",
          variant: "ghost"
        }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("h2", EnvironmentSelector_vue_q, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(N.value), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/HttpMethod/HttpMethod.vue.js + 1 modules
var HttpMethod_vue = __webpack_require__(91567);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ScalarAsciiArt.vue.js + 1 modules
var ScalarAsciiArt_vue = __webpack_require__(57723);
// EXTERNAL MODULE: ./node_modules/fuse.js/dist/fuse.mjs
var fuse = __webpack_require__(21281);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/Search/useSearch.js







function useSearch_N() {
  const h = (0,vue_router/* .useRouter */.rd)(), { activeWorkspace: W, activeWorkspaceRequests: f, activeWorkspaceCollections: b } = (0,active_entities/* .useActiveEntities */.JC)(), { requests: E, tags: w } = (0,store/* .useWorkspace */.hA)(), n = (0,vue_runtime_esm_bundler/* .ref */.KR)([]), c = (0,vue_runtime_esm_bundler/* .ref */.KR)([]), s = (0,vue_runtime_esm_bundler/* .ref */.KR)(0), o = (0,vue_runtime_esm_bundler/* .ref */.KR)(""), r = (0,vue_runtime_esm_bundler/* .ref */.KR)(null), m = (0,vue_runtime_esm_bundler/* .ref */.KR)([]), p = new fuse/* ["default"] */.A(n.value, {
    keys: ["title", "description", "body"]
  }), x = () => {
    o.value = "", s.value = 0, c.value = [], r.value instanceof HTMLInputElement && r.value.blur();
  }, d = (e) => {
    n.value = e.filter((t) => !(0,helpers/* .shouldIgnoreEntity */.pH)(t)).filter((t) => !!!b.value?.find(
      (a) => a.requests.includes(t.uid)
    )?.tags.map((a) => w[a]).filter(helpers/* .isDefined */.O9).filter((a) => t.tags?.includes(a.name)).filter((a) => (0,helpers/* .shouldIgnoreEntity */.pH)(a)).length).map((t) => ({
      id: t.uid,
      title: t.summary ?? t.method,
      description: t.description ?? "",
      httpVerb: t.method,
      path: t.path,
      link: h?.resolve({
        name: "request",
        params: {
          [routes/* .PathId.Request */.TU.Request]: t.uid,
          [routes/* .PathId.Workspace */.TU.Workspace]: W.value?.uid
        }
      })?.href
    })), p.setCollection(n.value);
  }, R = () => {
    s.value = 0, c.value = p.search(o.value);
  };
  (0,vue_runtime_esm_bundler/* .watch */.wB)(o, (e) => {
    e.length ? R() : c.value = [];
  });
  const A = (e) => {
    const t = e === "up" ? -1 : 1, i = u.value.length;
    s.value = (s.value + t + i) % i, (0,vue_runtime_esm_bundler/* .nextTick */.dY)(() => {
      const v = m.value[s.value];
      v instanceof HTMLElement && v.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  }, C = () => {
    if (s.value >= 0) {
      const e = u.value[s.value];
      e && g(e);
    }
  }, D = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => f.value.map((e) => E[e]).filter(helpers/* .isDefined */.O9));
  (0,vue_runtime_esm_bundler/* .watch */.wB)(
    f,
    () => {
      d(D.value);
    },
    { immediate: !0 }
  );
  const g = (e) => {
    h.push(e.item.id), x();
  }, u = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => o.value.length === 0 ? n.value.map((e) => ({
    item: e
  })) : c.value);
  return {
    searchText: o,
    searchResultsWithPlaceholderResults: u,
    selectedSearchResult: s,
    onSearchResultClick: g,
    fuseSearch: R,
    searchInputRef: r,
    searchResultRefs: m,
    navigateSearchResults: A,
    selectSearchResult: C,
    populateFuseDataArray: d
  };
}


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/SidebarButton.vue.js
var SidebarButton_vue = __webpack_require__(66606);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/requests.js
var requests = __webpack_require__(4516);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/handle-drag.js

function handle_drag_I(f, { collections: n, collectionMutators: a, tags: o, tagMutators: p, workspaceMutators: x }) {
  const { layout: D } = (0,useLayout/* .useLayout */.g)(), y = (i, d) => {
    i.type === "collection" ? a.edit(i.uid, "children", d) : i.type === "tag" && p.edit(i.uid, "children", d);
  };
  return {
    handleDragEnd: (i, d) => {
      if (!i || !d)
        return;
      const { id: l, parentId: r } = i, { id: u, parentId: s, offset: c } = d;
      if (r ? n[r] ? a.edit(
        r,
        "children",
        n[r].children.filter((e) => e !== l)
      ) : o[r] && p.edit(
        r,
        "children",
        o[r].children.filter((e) => e !== l)
      ) : x.edit(
        f.value?.uid,
        "collections",
        f.value?.collections.filter((e) => e !== l) ?? []
      ), c === 2) {
        const e = n[u] || o[u];
        e && y(e, [...e.children ?? [], l]);
      } else if (s) {
        const e = n[s] || o[s];
        if (!e)
          return;
        const t = [...e.children ?? []], h = t.findIndex((U) => u === U) ?? 0;
        t.splice(h + c, 0, l), y(e, t);
      } else {
        const e = [...f.value?.collections ?? []], t = e.findIndex((h) => u === h) ?? 0;
        e.splice(t + c, 0, l), x.edit(f.value?.uid, "collections", e);
      }
    },
    isDroppable: (i, d) => !(D === "modal" || !n[i.id] && d.offset !== 2 || n[i.id] && n[d.id]?.info?.title === "Drafts")
  };
}


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Actions/DeleteSidebarListElement.vue.js
var DeleteSidebarListElement_vue = __webpack_require__(75483);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/IconSelector.vue.js + 2 modules
var IconSelector_vue = __webpack_require__(99361);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Actions/SidebarListElementForm.vue.js + 1 modules
var SidebarListElementForm_vue = __webpack_require__(80061);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Actions/EditSidebarListCollection.vue.js





const EditSidebarListCollection_vue_C = { class: "grid grid-cols-[auto_1fr] gap-2" }, EditSidebarListCollection_vue_g = { class: "flex aspect-square" }, EditSidebarListCollection_vue_$ = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "EditSidebarListCollection",
  props: {
    name: {},
    icon: {}
  },
  emits: ["close", "edit"],
  setup(d, { emit: c }) {
    const r = d, i = c, a = (0,vue_runtime_esm_bundler/* .ref */.KR)(r.name), o = (0,vue_runtime_esm_bundler/* .ref */.KR)(r.icon);
    return (w, e) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(SidebarListElementForm_vue/* ["default"] */.A, {
      onCancel: e[2] || (e[2] = (t) => i("close")),
      onSubmit: e[3] || (e[3] = (t) => i("edit", a.value, o.value))
    }, {
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", EditSidebarListCollection_vue_C, [
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", EditSidebarListCollection_vue_g, [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)(IconSelector_vue/* ["default"] */.A, {
              modelValue: o.value,
              "onUpdate:modelValue": e[0] || (e[0] = (t) => o.value = t),
              placement: "bottom-start"
            }, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarButton */.RO), {
                  class: "aspect-square h-auto px-0",
                  variant: "outlined"
                }, {
                  default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                    (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(library/* .LibraryIcon */.$n), {
                      class: "text-c-2 size-4",
                      src: o.value
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarTextInput */.SB), {
            modelValue: a.value,
            "onUpdate:modelValue": e[1] || (e[1] = (t) => a.value = t),
            autofocus: "",
            class: "flex-1"
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    }));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Actions/EditSidebarListElement.vue.js
var EditSidebarListElement_vue = __webpack_require__(84076);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/RequestSidebarItemMenu.vue2.js










const RequestSidebarItemMenu_vue2_fe = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "RequestSidebarItemMenu",
  props: {
    menuItem: {}
  },
  emits: ["closeMenu", "toggleWatchMode", "clearDrafts"],
  setup(x, { emit: z }) {
    const s = x, M = z, { replace: k } = (0,vue_router/* .useRouter */.rd)(), {
      activeRouterParams: E,
      activeWorkspaceCollections: y,
      activeWorkspaceRequests: N
    } = (0,active_entities/* .useActiveEntities */.JC)(), { events: S, requestMutators: T } = (0,store/* .useWorkspace */.hA)(), d = (0,components_dist/* .useModal */.hS)(), v = (0,components_dist/* .useModal */.hS)(), g = (0,components_dist/* .useModal */.hS)(), A = () => S.commandPalette.emit({
      commandName: "Add Example",
      metaData: {
        itemUid: s.menuItem.item?.entity.uid
      }
    }), R = (t, e) => {
      s.menuItem.item?.edit(t, e), d.hide();
    }, B = () => {
      if (s.menuItem.item?.delete(), !N.value.length) {
        const { request: t } = (0,requests/* .createInitialRequest */.AJ)(), e = y.value.find(
          (m) => m.info?.title === "Drafts"
        );
        e && (T.add(t, e.uid), k({
          name: "request",
          params: {
            [routes/* .PathId.Request */.TU.Request]: t.uid
          }
        }));
      }
      if (E.value[routes/* .PathId.Request */.TU.Request] === s.menuItem.item?.entity.uid && k({
        name: "request",
        params: {
          [routes/* .PathId.Request */.TU.Request]: "default"
        }
      }), E.value[routes/* .PathId.Examples */.TU.Examples] === s.menuItem.item?.entity.uid && k({
        name: "request",
        params: {
          [routes/* .PathId.Request */.TU.Request]: "default"
        }
      }), y.value[0]) {
        const t = y.value[0].requests[0];
        k({
          name: "request",
          params: {
            [routes/* .PathId.Request */.TU.Request]: t
          }
        });
      }
      v.hide();
    }, f = (0,vue_runtime_esm_bundler/* .ref */.KR)(null);
    (0,vue_runtime_esm_bundler/* .watch */.wB)([() => s.menuItem.open, f], ([t]) => {
      t && f.value?.$parent?.$el && f.value.$parent.$el.focus();
    });
    const h = () => s.menuItem.open && M("closeMenu");
    (0,vue_runtime_esm_bundler/* .onMounted */.sV)(() => window.addEventListener("click", h)), (0,vue_runtime_esm_bundler/* .onBeforeUnmount */.xo)(() => window.removeEventListener("click", h));
    const U = () => {
      M("toggleWatchMode", s.menuItem.item);
    }, V = () => {
      M("clearDrafts"), g.hide();
    }, D = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => s.menuItem.item?.title === "Drafts");
    return (t, e) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, [
      t.menuItem.targetRef && t.menuItem.open ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarFloating */.Z5), {
        key: 0,
        placement: "right-start",
        target: t.menuItem.targetRef,
        teleport: ""
      }, {
        floating: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownMenu */.dR), {
            onKeydown: e[3] || (e[3] = (0,vue_runtime_esm_bundler/* .withKeys */.jR)((m) => t.$emit("closeMenu"), ["escape"]))
          }, {
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              t.menuItem.item?.entity.type === "request" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownButton */.kZ), {
                key: 0,
                class: "flex items-center gap-2",
                onClick: A
              }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                    class: "inline-flex",
                    icon: "Example",
                    size: "md",
                    thickness: "1.5"
                  }),
                  e[8] || (e[8] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, "Add Example", -1))
                ]),
                _: 1
              })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
              D.value ? (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownButton */.kZ), {
                key: 1,
                ref_key: "menuRef",
                ref: f,
                class: "flex items-center gap-2",
                onClick: e[0] || (e[0] = (m) => (0,vue_runtime_esm_bundler/* .unref */.R1)(d).show())
              }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                    class: "inline-flex",
                    icon: "Edit",
                    size: "md",
                    thickness: "1.5"
                  }),
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, [
                    t.menuItem.item?.entity.type === "collection" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 0 }, [
                      (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Edit ")
                    ], 64)) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 1 }, [
                      (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Rename ")
                    ], 64))
                  ])
                ]),
                _: 1
              }, 512)),
              t.menuItem.item?.documentUrl ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownButton */.kZ), {
                key: 2,
                ref_key: "menuRef",
                ref: f,
                class: "flex items-center gap-2",
                onClick: U
              }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                    class: "inline-flex",
                    icon: t.menuItem.item?.watchMode ? "Unwatch" : "Watch",
                    size: "md",
                    thickness: "1.5"
                  }, null, 8, ["icon"]),
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(t.menuItem.item?.watchMode ? "Disable Watch Mode" : "Enable Watch Mode"), 1)
                ]),
                _: 1
              }, 512)) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
              D.value ? (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownButton */.kZ), {
                key: 3,
                class: "flex items-center gap-2",
                onClick: e[1] || (e[1] = (m) => (0,vue_runtime_esm_bundler/* .unref */.R1)(v).show())
              }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                    class: "inline-flex",
                    icon: "Delete",
                    size: "md",
                    thickness: "1.5"
                  }),
                  e[9] || (e[9] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, "Delete", -1))
                ]),
                _: 1
              })),
              D.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownButton */.kZ), {
                key: 4,
                class: "flex items-center gap-2",
                onClick: e[2] || (e[2] = (m) => (0,vue_runtime_esm_bundler/* .unref */.R1)(g).show())
              }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                    class: "inline-flex",
                    icon: "Delete",
                    size: "md",
                    thickness: "1.5"
                  }),
                  e[10] || (e[10] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, "Clear Drafts", -1))
                ]),
                _: 1
              })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["target"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarModal */.uT), {
        size: "xxs",
        state: (0,vue_runtime_esm_bundler/* .unref */.R1)(v),
        title: `Delete ${t.menuItem.item?.resourceTitle}`
      }, {
        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DeleteSidebarListElement_vue/* ["default"] */.A, {
            variableName: t.menuItem.item?.title ?? "",
            warningMessage: t.menuItem.item?.warning,
            onClose: e[4] || (e[4] = (m) => (0,vue_runtime_esm_bundler/* .unref */.R1)(v).hide()),
            onDelete: B
          }, null, 8, ["variableName", "warningMessage"])
        ]),
        _: 1
      }, 8, ["state", "title"]),
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarModal */.uT), {
        size: "xxs",
        state: (0,vue_runtime_esm_bundler/* .unref */.R1)(d),
        title: `Edit ${t.menuItem.item?.resourceTitle}`
      }, {
        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          t.menuItem.item?.resourceTitle === "Collection" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(EditSidebarListCollection_vue_$, {
            key: 0,
            icon: t.menuItem.item?.icon || "interface-content-folder",
            name: t.menuItem.item?.title,
            onClose: e[5] || (e[5] = (m) => (0,vue_runtime_esm_bundler/* .unref */.R1)(d).hide()),
            onEdit: R
          }, null, 8, ["icon", "name"])) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(EditSidebarListElement_vue/* ["default"] */.A, {
            key: 1,
            name: t.menuItem.item?.title ?? "",
            onClose: e[6] || (e[6] = (m) => (0,vue_runtime_esm_bundler/* .unref */.R1)(d).hide()),
            onEdit: R
          }, null, 8, ["name"]))
        ]),
        _: 1
      }, 8, ["state", "title"]),
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarModal */.uT), {
        size: "xxs",
        state: (0,vue_runtime_esm_bundler/* .unref */.R1)(g),
        title: "Clear Drafts"
      }, {
        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DeleteSidebarListElement_vue/* ["default"] */.A, {
            variableName: "All Drafts",
            warningMessage: "This action will clear all drafts. This cannot be undone.",
            onClose: e[7] || (e[7] = (m) => (0,vue_runtime_esm_bundler/* .unref */.R1)(g).hide()),
            onDelete: V
          })
        ]),
        _: 1
      }, 8, ["state"])
    ], 64));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper = __webpack_require__(94622);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/RequestSidebarItemMenu.vue.js

/* empty css                            */

const RequestSidebarItemMenu_vue_m = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(RequestSidebarItemMenu_vue2_fe, [["__scopeId", "data-v-01a1ab71"]]);


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/RequestSection/helpers/getting-started.js
const getting_started_u = (n, t, r) => {
  const e = n.find((l) => l.info?.title === "Drafts"), i = t.length === 1;
  if (!t[0])
    return !1;
  const s = e?.requests.includes(t[0]);
  if (!s)
    return !1;
  const f = r[e?.requests[0] ?? ""]?.summary !== "My First Request";
  return i && s && !f;
};


// EXTERNAL MODULE: ./node_modules/@scalar/draggable/dist/index.js + 5 modules
var draggable_dist = __webpack_require__(38543);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/libs/hot-keys.js
var hot_keys = __webpack_require__(14397);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/RequestSidebarItem.vue2.js












const qe = { class: "line-clamp-1 w-full pl-2 break-all" }, Ue = { class: "flex flex-row items-center gap-1" }, De = { class: "relative" }, Ie = { class: "flex items-start" }, Ce = { class: "flex flex-1 flex-row justify-between font-medium" }, RequestSidebarItem_vue2_Re = { class: "line-clamp-1 w-full text-left break-all" }, Te = { class: "relative flex h-fit justify-end" }, Me = {
  class: "flex items-center justify-center",
  type: "button"
}, Ee = ["aria-expanded"], $e = { class: "flex h-5 max-w-[14px] items-center justify-center" }, ze = { class: "flex flex-1 flex-row justify-between" }, Se = { class: "line-clamp-1 w-full text-left font-medium break-all" }, je = { class: "relative flex h-fit justify-end" }, Be = {
  class: "flex items-center justify-center",
  type: "button"
}, We = { key: 3 }, RequestSidebarItem_vue2_W = "hover:bg-sidebar-b-active indent-padding-left", Qe = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "RequestSidebarItem",
  props: {
    isDraggable: { type: Boolean, default: !1 },
    isDroppable: { type: [Boolean, Function], default: !1 },
    parentUids: {},
    uid: {},
    menuItem: {}
  },
  emits: ["onDragEnd", "newTab", "openMenu"],
  setup(o, { emit: X }) {
    (0,vue_runtime_esm_bundler/* .useCssVars */.$9)((t) => ({
      "0bed2d4e": te.value,
      "57ee1db0": ie.value
    }));
    const Z = X, { activeCollection: _, activeRequest: A, activeRouterParams: ee, activeWorkspace: x } = (0,active_entities/* .useActiveEntities */.JC)(), {
      collections: q,
      tags: U,
      requests: T,
      requestExamples: M,
      collectionMutators: E,
      tagMutators: N,
      requestMutators: $,
      requestExampleMutators: O,
      events: P
    } = (0,store/* .useWorkspace */.hA)(), y = (0,vue_router/* .useRouter */.rd)(), { collapsedSidebarFolders: w, toggleSidebarFolder: V } = (0,useSidebar/* .useSidebar */.cL)(), { layout: d } = (0,useLayout/* .useLayout */.g)(), i = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      const t = q[o.uid], e = U[o.uid], r = T[o.uid], l = M[o.uid];
      return t ? {
        title: t.info?.title || "Untitled Collection",
        entity: t,
        resourceTitle: "Collection",
        children: t.children,
        icon: t["x-scalar-icon"],
        documentUrl: t.documentUrl,
        watchMode: t.watchMode,
        to: t.uid && t?.info?.title !== "Drafts" ? {
          name: "collection",
          params: {
            [routes/* .PathId.Workspace */.TU.Workspace]: x.value?.uid,
            [routes/* .PathId.Collection */.TU.Collection]: t.uid
          }
        } : void 0,
        warning: "This cannot be undone. You're about to delete the collection and all folders and requests inside it.",
        edit: (a, I) => {
          E.edit(t.uid, "info.title", a), I && E.edit(t.uid, "x-scalar-icon", I);
        },
        delete: () => {
          x.value && E.delete(t, x.value);
        }
      } : e ? {
        title: e.name,
        entity: e,
        resourceTitle: "Tag",
        children: e.children,
        warning: "This cannot be undone. You're about to delete the tag and all requests inside it",
        edit: (a) => N.edit(e.uid, "name", a),
        delete: () => o.parentUids[0] && N.delete(e, o.parentUids[0])
      } : r ? {
        title: r.summary ?? r.path,
        to: {
          name: "request",
          params: {
            workspace: x.value?.uid,
            request: r.uid
          }
        },
        method: r.method,
        entity: r,
        resourceTitle: "Request",
        warning: "This cannot be undone. You're about to delete the request.",
        children: r.examples.slice(1),
        edit: (a) => $.edit(r.uid, "summary", a),
        delete: () => o.parentUids[0] && $.delete(r, o.parentUids[0])
      } : l?.requestUid ? {
        title: l.name,
        to: {
          name: "request.examples",
          params: {
            workspace: x.value?.uid,
            request: l.requestUid,
            examples: l.uid
          }
        },
        method: T[l.requestUid]?.method,
        entity: l,
        resourceTitle: "Example",
        warning: "This cannot be undone. You're about to delete the example from the request.",
        children: [],
        edit: (a) => O.edit(l.uid, "name", a),
        delete: () => O.delete(l)
      } : {
        title: "Unknown",
        entity: {
          uid: "",
          type: "unknown"
        },
        resourceTitle: "Unknown",
        children: [],
        edit: () => null,
        delete: () => null
      };
    }), D = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => i.value.entity.type === "collection" && i.value.title === "Drafts"
    ), te = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => o.parentUids.length ? d === "modal" ? `${(o.parentUids.length - 1) * 12}px` : `${o.parentUids.length * 12}px` : "12px"), ie = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => o.parentUids.length ? d === "modal" ? `${(o.parentUids.length - 1) * 12}px` : `${o.parentUids.length * 12}px` : "0px"), ne = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => w[o.uid] || A.value?.uid === o.uid && i.value.entity.examples.length > 1
    ), le = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => typeof y.currentRoute.value.name == "string" && y.currentRoute.value.name.startsWith("request") && ee.value[routes/* .PathId.Request */.TU.Request] === "default" && A.value?.uid === o.uid
    ), z = (0,vue_runtime_esm_bundler/* .ref */.KR)(null), F = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      let t = 0.5, e = 0.5;
      if (!z.value)
        return { ceiling: t, floor: e };
      const { draggingItem: r } = z.value;
      return !q[r?.id] && i.value.entity.type === "collection" ? (t = 1, e = 0) : i.value.entity.type === "tag" && (t = 0.8, e = 0.2), { ceiling: t, floor: e };
    }), oe = (t, e) => !(d === "modal" || M[e.id] || q[t.id]), se = (t, e) => {
      t && ((0,hot_keys/* .getModifiers */.RN)(["default"]).some((a) => t[a]) ? Z("newTab", e.title || "", e.entity.uid) : e.to && y.push(e.to), (0,vue_runtime_esm_bundler/* .nextTick */.dY)(() => P.focusAddressBar.emit()));
    };
    function S(t) {
      const e = o.parentUids[0] ? q[o.parentUids[0]]?.uid || "" : t, r = o.parentUids[0] && U[t]?.name ? { tags: [U[t].name] } : {}, l = $.add(
        r,
        e
      );
      l && (y.push({
        name: "request",
        params: {
          workspace: x.value?.uid,
          request: l.uid
        }
      }), P.hotKeys.emit({
        focusAddressBar: new KeyboardEvent("keydown", { key: "l" })
      }));
    }
    const Y = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      const { uid: t, watchModeStatus: e } = _.value || {};
      return t !== i.value.entity.uid ? "text-c-3" : e === "WATCHING" ? "text-c-1" : e === "ERROR" ? "text-red" : "text-c-3";
    }), H = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => i.value.title === "Drafts" && d !== "modal" && i.value.children.length > 0), ae = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      const t = T[o.uid];
      if (t)
        return !(0,helpers/* .shouldIgnoreEntity */.pH)(t);
      const e = U[o.uid];
      return e ? !(0,helpers/* .shouldIgnoreEntity */.pH)(e) : !0;
    });
    return (t, e) => {
      const r = (0,vue_runtime_esm_bundler/* .resolveComponent */.g2)("RequestSidebarItem", !0);
      return ae.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("li", {
        key: 0,
        class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["relative flex flex-row", [
          (0,vue_runtime_esm_bundler/* .unref */.R1)(d) === "modal" && t.parentUids.length > 1 || (0,vue_runtime_esm_bundler/* .unref */.R1)(d) !== "modal" && t.parentUids.length ? "before:bg-border indent-border-line-offset mb-[.5px] before:pointer-events-none before:absolute before:top-0 before:left-[calc(.75rem_+_.5px)] before:z-1 before:h-[calc(100%_+_.5px)] before:w-[.5px] last:mb-0 last:before:h-full" : ""
        ]])
      }, [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(draggable_dist/* .Draggable */.s), {
          id: i.value.entity.uid,
          ref_key: "draggableRef",
          ref: z,
          ceiling: F.value.ceiling,
          class: "gap-1/2 flex flex-1 flex-col text-base",
          floor: F.value.floor,
          isDraggable: t.isDraggable,
          isDroppable: t.isDroppable,
          parentIds: t.parentUids,
          onOnDragEnd: e[12] || (e[12] = (...l) => t.$emit("onDragEnd", ...l))
        }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (i.value.entity.type === "request" || i.value.entity.type === "requestExample") && i.value.to ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(vue_router/* .RouterLink */.Wk), {
              key: 0,
              class: "group no-underline",
              to: i.value.to,
              onClick: e[1] || (e[1] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)(
                (l) => se(l, i.value),
                ["prevent"]
              ))
            }, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(({ isExactActive: l }) => [
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
                  class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["relative flex min-h-8 w-full cursor-pointer flex-row items-start justify-between gap-0.5 rounded py-1.5 pr-2", [
                    RequestSidebarItem_vue2_W,
                    l || le.value ? "bg-sidebar-b-active text-sidebar-c-active font-medium transition-none" : "text-sidebar-c-2"
                  ]])
                }, [
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", qe, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(i.value.title || "Untitled"), 1),
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", Ue, [
                    (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", De, [
                      (0,vue_runtime_esm_bundler/* .unref */.R1)(d) !== "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarButton */.RO), {
                        key: 0,
                        class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["hover:bg-b-3 hidden aspect-square h-fit px-0.5 py-0 opacity-0 group-hover:flex group-hover:opacity-100 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100", {
                          flex: t.menuItem?.item?.entity.uid === i.value.entity.uid && t.menuItem.open
                        }]),
                        size: "sm",
                        type: "button",
                        variant: "ghost",
                        onClick: e[0] || (e[0] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)(
                          (a) => t.$emit("openMenu", {
                            item: i.value,
                            parentUids: t.parentUids,
                            targetRef: a.currentTarget,
                            open: !t.menuItem.open
                          }),
                          ["stop", "prevent"]
                        ))
                      }, {
                        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                            icon: "Ellipses",
                            size: "md"
                          })
                        ]),
                        _: 1
                      }, 8, ["class"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
                    ]),
                    (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", Ie, [
                      e[13] || (e[13] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("   ", -1)),
                      e[14] || (e[14] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", { class: "sr-only" }, "HTTP Method:", -1)),
                      i.value.method ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(HttpMethod_vue/* ["default"] */.A), {
                        key: 0,
                        class: "font-bold",
                        method: i.value.method
                      }, null, 8, ["method"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
                    ])
                  ])
                ], 2)
              ]),
              _: 1
            }, 8, ["to"])) : ((0,vue_runtime_esm_bundler/* .unref */.R1)(d) !== "modal" || t.parentUids.length) && i.value.entity.type === "collection" && i.value.to ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(vue_router/* .RouterLink */.Wk), {
              key: 1,
              "aria-expanded": !!(0,vue_runtime_esm_bundler/* .unref */.R1)(w)[i.value.entity.uid],
              class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["hover:bg-b-2 group relative flex w-full flex-row justify-start gap-1.5 rounded p-1.5 no-underline focus-visible:z-10", [
                RequestSidebarItem_vue2_W,
                {
                  "bg-sidebar-b-active text-sidebar-c-active transition-none": typeof (0,vue_runtime_esm_bundler/* .unref */.R1)(y).currentRoute.value.name == "string" && (0,vue_runtime_esm_bundler/* .unref */.R1)(y).currentRoute.value.name.startsWith("collection") && (0,vue_runtime_esm_bundler/* .unref */.R1)(y).currentRoute.value.params[(0,vue_runtime_esm_bundler/* .unref */.R1)(routes/* .PathId */.TU).Collection] === i.value.entity.uid,
                  "text-c-2": i.value.title === "Untitled Collection"
                }
              ]]),
              to: i.value.to
            }, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", {
                  class: "flex h-5 max-w-[14px] cursor-pointer items-center justify-center",
                  onClick: e[2] || (e[2] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((l) => (0,vue_runtime_esm_bundler/* .unref */.R1)(V)(i.value.entity.uid), ["stop", "prevent"]))
                }, [
                  (0,vue_runtime_esm_bundler/* .renderSlot */.RG)(t.$slots, "leftIcon", {}, () => [
                    (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarSidebarGroupToggle */.SL), {
                      class: "text-c-3 shrink-0",
                      open: !!(0,vue_runtime_esm_bundler/* .unref */.R1)(w)[i.value.entity.uid]
                    }, null, 8, ["open"])
                  ], !0),
                  e[15] || (e[15] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("   ", -1))
                ]),
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", Ce, [
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", RequestSidebarItem_vue2_Re, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(i.value.title), 1),
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", Te, [
                    (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
                      class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["items-center gap-px opacity-0 group-hover:flex group-hover:opacity-100 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100", {
                        flex: t.menuItem.open,
                        hidden: !t.menuItem.open || t.menuItem.item?.entity.uid !== i.value.entity.uid
                      }])
                    }, [
                      (0,vue_runtime_esm_bundler/* .unref */.R1)(d) !== "modal" && !D.value || D.value && H.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarButton */.RO), {
                        key: 0,
                        class: "hover:bg-b-3 hover:text-c-1 aspect-square h-fit px-0.5 py-0 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100",
                        size: "sm",
                        variant: "ghost",
                        onClick: e[3] || (e[3] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)(
                          (l) => t.$emit("openMenu", {
                            item: i.value,
                            parentUids: t.parentUids,
                            targetRef: l.currentTarget.parentNode,
                            open: !0
                          }),
                          ["stop", "prevent"]
                        ))
                      }, {
                        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                            icon: "Ellipses",
                            size: "md"
                          })
                        ]),
                        _: 1
                      })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
                      (0,vue_runtime_esm_bundler/* .unref */.R1)(d) !== "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarButton */.RO), {
                        key: 1,
                        class: "hover:bg-b-3 hover:text-c-1 aspect-square h-fit px-0.5 py-0 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100",
                        size: "sm",
                        variant: "ghost",
                        onClick: e[4] || (e[4] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((l) => S(i.value.entity.uid), ["stop", "prevent"]))
                      }, {
                        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                            icon: "Add",
                            size: "md",
                            thickness: "2"
                          })
                        ]),
                        _: 1
                      })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
                    ], 2),
                    i.value.watchMode ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarTooltip */.iy), {
                      key: 0,
                      placement: "right",
                      offset: 12,
                      content: `Watching: ${i.value.documentUrl}`
                    }, {
                      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("button", Me, [
                          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                            class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["ml-0.5 text-sm", Y.value]),
                            icon: "Watch",
                            size: "md",
                            thickness: "2"
                          }, null, 8, ["class"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["content"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
                    e[16] || (e[16] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, " ", -1))
                  ])
                ])
              ]),
              _: 3
            }, 8, ["aria-expanded", "class", "to"])) : (0,vue_runtime_esm_bundler/* .unref */.R1)(d) !== "modal" || t.parentUids.length ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("button", {
              key: 2,
              "aria-expanded": !!(0,vue_runtime_esm_bundler/* .unref */.R1)(w)[i.value.entity.uid],
              class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["hover:bg-b-2 group relative flex w-full flex-row justify-start gap-1.5 rounded p-1.5 focus-visible:z-10", [RequestSidebarItem_vue2_W]]),
              type: "button",
              onClick: e[7] || (e[7] = (l) => (0,vue_runtime_esm_bundler/* .unref */.R1)(V)(i.value.entity.uid))
            }, [
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", $e, [
                (0,vue_runtime_esm_bundler/* .renderSlot */.RG)(t.$slots, "leftIcon", {}, () => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarSidebarGroupToggle */.SL), {
                    class: "text-c-3 hover:text-c-1 shrink-0",
                    open: !!(0,vue_runtime_esm_bundler/* .unref */.R1)(w)[i.value.entity.uid]
                  }, null, 8, ["open"])
                ], !0),
                e[17] || (e[17] = (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)("   ", -1))
              ]),
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", ze, [
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", Se, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(i.value.title), 1),
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", je, [
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
                    class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["items-center gap-px opacity-0 group-hover:flex group-hover:opacity-100 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100", {
                      flex: t.menuItem.open,
                      hidden: !t.menuItem.open || t.menuItem.item?.entity.uid !== i.value.entity.uid
                    }])
                  }, [
                    (0,vue_runtime_esm_bundler/* .unref */.R1)(d) !== "modal" && !D.value || D.value && H.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarButton */.RO), {
                      key: 0,
                      class: "hover:bg-b-3 hover:text-c-1 aspect-square h-fit px-0.5 py-0 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100",
                      size: "sm",
                      variant: "ghost",
                      onClick: e[5] || (e[5] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)(
                        (l) => t.$emit("openMenu", {
                          item: i.value,
                          parentUids: t.parentUids,
                          targetRef: l.currentTarget.parentNode,
                          open: !0
                        }),
                        ["stop", "prevent"]
                      ))
                    }, {
                      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                          icon: "Ellipses",
                          size: "md"
                        })
                      ]),
                      _: 1
                    })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
                    (0,vue_runtime_esm_bundler/* .unref */.R1)(d) !== "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarButton */.RO), {
                      key: 1,
                      class: "hover:bg-b-3 hover:text-c-1 aspect-square h-fit px-0.5 py-0 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100",
                      size: "sm",
                      variant: "ghost",
                      onClick: e[6] || (e[6] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((l) => S(i.value.entity.uid), ["stop", "prevent"]))
                    }, {
                      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                          icon: "Add",
                          size: "md",
                          thickness: "2"
                        })
                      ]),
                      _: 1
                    })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
                  ], 2),
                  i.value.watchMode ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarTooltip */.iy), {
                    key: 0,
                    content: "Watching: {{ item.documentUrl }}",
                    placement: "right",
                    offset: 12
                  }, {
                    default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("button", Be, [
                        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                          class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["ml-0.5 text-sm", Y.value]),
                          icon: "Watch",
                          size: "md",
                          thickness: "2"
                        }, null, 8, ["class"])
                      ])
                    ]),
                    _: 1
                  })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
                  e[18] || (e[18] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, " ", -1))
                ])
              ])
            ], 10, Ee)) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
            ne.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("ul", We, [
              ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(i.value.children, (l) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(r, {
                key: l,
                isDraggable: !(0,vue_runtime_esm_bundler/* .unref */.R1)(M)[l],
                isDroppable: oe,
                menuItem: t.menuItem,
                parentUids: [...t.parentUids, t.uid],
                uid: l,
                onNewTab: e[8] || (e[8] = (a, I) => t.$emit("newTab", a, I)),
                onOnDragEnd: e[9] || (e[9] = (...a) => t.$emit("onDragEnd", ...a)),
                onOpenMenu: e[10] || (e[10] = (a) => t.$emit("openMenu", a))
              }, null, 8, ["isDraggable", "menuItem", "parentUids", "uid"]))), 128)),
              i.value.children.length === 0 ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarButton */.RO), {
                key: 0,
                class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["text-c-1 hover:bg-b-2 flex h-8 w-full justify-start gap-1.5 py-0 text-xs", t.parentUids.length ? "pl-9" : ""]),
                variant: "ghost",
                onClick: e[11] || (e[11] = (l) => S(i.value.entity.uid))
              }, {
                default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                    icon: "Add",
                    size: "sm"
                  }),
                  e[19] || (e[19] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, "Add Request", -1))
                ]),
                _: 1
              }, 8, ["class"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
            ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
          ]),
          _: 3
        }, 8, ["id", "ceiling", "floor", "isDraggable", "isDroppable", "parentIds"])
      ], 2)) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0);
    };
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/RequestSidebarItem.vue.js

/* empty css                        */
/* empty css                        */

const RequestSidebarItem_vue_f = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(Qe, [["__scopeId", "data-v-4f5a9d1f"]]);


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/Sidebar/Sidebar.vue.js + 1 modules
var Sidebar_vue = __webpack_require__(37120);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/components/WorkspaceDropdown.vue.js







const WorkspaceDropdown_vue_J = { class: "flex w-[inherit] items-center text-base" }, WorkspaceDropdown_vue_K = { class: "m-0 flex items-center gap-1.5 font-bold" }, WorkspaceDropdown_vue_Q = { class: "line-clamp-1 text-left" }, WorkspaceDropdown_vue_X = { class: "overflow-hidden text-ellipsis" }, WorkspaceDropdown_vue_Z = { class: "flex h-4 w-4 items-center justify-center" }, WorkspaceDropdown_vue_re = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "WorkspaceDropdown",
  setup(ee) {
    const { activeWorkspace: c } = (0,active_entities/* .useActiveEntities */.JC)(), { workspaces: r, workspaceMutators: w, events: E } = (0,store/* .useWorkspace */.hA)(), { push: x } = (0,vue_router/* .useRouter */.rd)(), T = (o) => {
      o !== c.value?.uid && x({
        name: "workspace",
        params: {
          workspace: o
        }
      });
    }, _ = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => Object.keys(r).length === 1), j = () => E.commandPalette.emit({ commandName: "Create Workspace" }), d = (0,vue_runtime_esm_bundler/* .ref */.KR)(""), i = (0,vue_runtime_esm_bundler/* .ref */.KR)(""), u = (0,components_dist/* .useModal */.hS)(), p = (0,components_dist/* .useModal */.hS)(), g = (o) => {
      const t = r[o];
      t && (d.value = t.name, i.value = o, u.show());
    }, B = (o) => {
      o.trim() && (w.edit(i.value, "name", o.trim()), u.hide());
    }, b = (o) => {
      const t = r[o];
      t && (d.value = t.name, i.value = o, p.show());
    }, R = async () => {
      if (!_.value) {
        const o = c.value?.uid === i.value, t = { ...r };
        if (delete t[i.value], w.delete(i.value), o) {
          const a = Object.keys(t)[0];
          await x({
            name: "workspace",
            params: {
              workspace: a
            }
          });
        }
      }
      p.hide();
    };
    return (o, t) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", null, [
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", WorkspaceDropdown_vue_J, [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdown */.SM), null, {
          items: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)((0,vue_runtime_esm_bundler/* .unref */.R1)(r), (a, M) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownItem */.rA), {
              key: M,
              class: "group/item flex w-full items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap",
              onClick: (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((m) => T(a.uid), ["stop"])
            }, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarListboxCheckbox */.Pq), {
                  selected: (0,vue_runtime_esm_bundler/* .unref */.R1)(c)?.uid === M
                }, null, 8, ["selected"]),
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", WorkspaceDropdown_vue_X, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(a.name), 1),
                (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdown */.SM), {
                  placement: "right-start",
                  teleport: ""
                }, {
                  items: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                    (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownItem */.rA), {
                      class: "flex gap-2",
                      onMousedown: (m) => g(a.uid),
                      onTouchend: (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((m) => g(a.uid), ["prevent"])
                    }, {
                      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                          class: "inline-flex",
                          icon: "Edit",
                          size: "md",
                          thickness: "1.5"
                        }),
                        t[2] || (t[2] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, "Rename", -1))
                      ]),
                      _: 1
                    }, 8, ["onMousedown", "onTouchend"]),
                    _.value ? (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownItem */.rA), {
                      key: 0,
                      class: "flex gap-2",
                      onMousedown: (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((m) => b(a.uid), ["prevent"]),
                      onTouchend: (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((m) => b(a.uid), ["prevent"])
                    }, {
                      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                          class: "inline-flex",
                          icon: "Delete",
                          size: "md",
                          thickness: "1.5"
                        }),
                        t[3] || (t[3] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, "Delete", -1))
                      ]),
                      _: 1
                    }, 8, ["onMousedown", "onTouchend"]))
                  ]),
                  default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                    (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarButton */.RO), {
                      class: "hover:bg-b-3 -mr-1 ml-auto aspect-square h-fit px-0.5 py-0 group-hover/item:flex",
                      size: "sm",
                      type: "button",
                      variant: "ghost"
                    }, {
                      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                        (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                          icon: "Ellipses",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 128)),
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownDivider */.t)),
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarDropdownItem */.rA), {
              class: "flex items-center gap-1.5",
              onClick: j
            }, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", WorkspaceDropdown_vue_Z, [
                  (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                    icon: "Add",
                    size: "sm"
                  })
                ]),
                t[4] || (t[4] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", null, "Create Workspace", -1))
              ]),
              _: 1
            })
          ]),
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarButton */.RO), {
              class: "text-c-1 hover:bg-b-2 line-clamp-1 h-full w-fit justify-start px-1.5 py-1.5 font-normal",
              variant: "ghost"
            }, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", WorkspaceDropdown_vue_K, [
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("h2", WorkspaceDropdown_vue_Q, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)((0,vue_runtime_esm_bundler/* .unref */.R1)(c)?.name), 1)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarModal */.uT), {
        size: "xxs",
        state: (0,vue_runtime_esm_bundler/* .unref */.R1)(p),
        title: "Delete workspace"
      }, {
        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(DeleteSidebarListElement_vue/* ["default"] */.A, {
            variableName: d.value,
            warningMessage: "This cannot be undone. You're about to delete the workspace and everything inside it.",
            onClose: t[0] || (t[0] = (a) => (0,vue_runtime_esm_bundler/* .unref */.R1)(p).hide()),
            onDelete: R
          }, null, 8, ["variableName"])
        ]),
        _: 1
      }, 8, ["state"]),
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarModal */.uT), {
        size: "xxs",
        state: (0,vue_runtime_esm_bundler/* .unref */.R1)(u),
        title: "Rename Workspace"
      }, {
        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)(EditSidebarListElement_vue/* ["default"] */.A, {
            name: d.value,
            onClose: t[1] || (t[1] = (a) => (0,vue_runtime_esm_bundler/* .unref */.R1)(u).hide()),
            onEdit: B
          }, null, 8, ["name"])
        ]),
        _: 1
      }, 8, ["state"])
    ]));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/RequestSidebar.vue2.js
























const RequestSidebar_vue2_je = { class: "bg-b-1 sticky top-0 z-20 flex h-12 items-center px-3" }, Je = {
  key: 1,
  class: "text-c-3"
}, RequestSidebar_vue2_Qe = ["aria-pressed"], Xe = { class: "sr-only" }, Ye = {
  key: 0,
  class: "search-button-fade sticky top-12 z-10 px-3 py-2.5 pt-0 focus-within:z-20",
  role: "search"
}, Ze = {
  key: 1,
  class: "contents"
}, et = {
  key: 0,
  class: "empty-sidebar-item-content px-2.5 py-2.5"
}, tt = { class: "rabbit-ascii relative m-auto mt-2 h-[68px] w-[60px]" }, $t = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "RequestSidebar",
  emits: ["newTab", "clearDrafts"],
  setup(ot, { emit: G }) {
    const j = G, {
      collapsedSidebarFolders: J,
      isSidebarOpen: T,
      setCollapsedSidebarFolder: Q,
      toggleSidebarOpen: X
    } = (0,useSidebar/* .useSidebar */.cL)(), { layout: l } = (0,useLayout/* .useLayout */.g)(), P = (0,store/* .useWorkspace */.hA)(), {
      activeCollection: _,
      activeWorkspaceCollections: c,
      activeRequest: Y,
      activeWorkspaceRequests: V,
      activeWorkspace: Z
    } = (0,active_entities/* .useActiveEntities */.JC)(), { findRequestParents: ee, events: k, requestMutators: E, requests: y } = P, { handleDragEnd: te, isDroppable: oe } = handle_drag_I(
      Z,
      P
    ), { replace: L } = (0,vue_router/* .useRouter */.rd)(), se = () => {
      k.commandPalette.emit({
        commandName: "Import from OpenAPI/Swagger/Postman/cURL"
      });
    }, N = (0,vue_runtime_esm_bundler/* .useId */.Bi)(), { toast: re } = (0,dist/* .useToasts */.Yf)(), S = (0,vue_runtime_esm_bundler/* .reactive */.Kh)({ open: !1 }), f = (0,vue_runtime_esm_bundler/* .ref */.KR)(!1);
    (0,vue_runtime_esm_bundler/* .watch */.wB)(
      Y,
      (s) => {
        s && ee(s).forEach(
          (e) => Q(e, !0)
        );
      },
      { immediate: !0 }
    );
    const {
      searchText: p,
      searchResultsWithPlaceholderResults: x,
      selectedSearchResult: w,
      onSearchResultClick: ae,
      fuseSearch: le,
      searchInputRef: O,
      searchResultRefs: ne,
      navigateSearchResults: z,
      selectSearchResult: ie
    } = useSearch_N(), B = (0,vue_runtime_esm_bundler/* .ref */.KR)(), F = (s) => {
      s && (s.toggleSidebar && X(), s.focusRequestSearch && O.value?.focus());
    };
    (0,vue_runtime_esm_bundler/* .onMounted */.sV)(() => k.hotKeys.on(F)), (0,vue_runtime_esm_bundler/* .onBeforeUnmount */.xo)(() => {
      k.hotKeys.off(F);
    });
    const ue = (s) => {
      if (s?.documentUrl) {
        s.watchMode = !s.watchMode;
        const e = c.value.find(
          (o) => o.uid === s.entity.uid
        );
        e && (e.watchMode = s.watchMode);
      }
    };
    (0,vue_runtime_esm_bundler/* .watch */.wB)(
      () => c.value.map(
        (s) => s.watchMode
      ),
      (s, e) => {
        s.forEach((o, r) => {
          if (l !== "modal" && o !== e[r] && c.value[r]?.info?.title !== "Drafts" && c.value[r]) {
            const i = c.value[r];
            if (!i)
              return;
            const pe = `${i.info?.title}: Watch Mode ${o ? "enabled" : "disabled"}`;
            re(pe, "info");
          }
        });
      }
    );
    const ce = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => {
      const s = x.value;
      if (!s.length)
        return "No results found";
      const e = s[w.value]?.item;
      if (!e)
        return "No result selected";
      const o = p.value.length ? `${s.length} result${s.length === 1 ? "" : "s"} found, ` : "", r = `, HTTP Method ${e.httpVerb}, Path ${e.path}`, i = `${e.title} ${r}`;
      return `${o}Selected: ${i}`;
    }), de = () => {
      const s = c.value.find(
        (o) => o.info?.title === "Drafts"
      );
      if (s && s.requests.forEach((o) => {
        y[o] && E.delete(y[o], s.uid);
      }), V.value.length) {
        const r = c.value[0]?.requests[0];
        r && L({
          name: "request",
          params: {
            [routes/* .PathId.Request */.TU.Request]: r
          }
        });
      } else {
        const { request: o } = (0,requests/* .createInitialRequest */.AJ)();
        s && (E.add(o, s.uid), L({
          name: "request",
          params: {
            [routes/* .PathId.Request */.TU.Request]: o.uid
          }
        }));
      }
    };
    (0,vue_runtime_esm_bundler/* .watch */.wB)(f, (s) => {
      s || (p.value = "");
    });
    const R = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => getting_started_u(
        c.value,
        V.value,
        y
      )
    ), me = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => l === "modal" && _.value ? [_.value] : c.value);
    function fe(s) {
      !p.value && s.relatedTarget !== B.value && (f.value = !1);
    }
    return (s, e) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, [
      (0,vue_runtime_esm_bundler/* .withDirectives */.bo)((0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(Sidebar_vue/* ["default"] */.A), {
        class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)([(0,vue_runtime_esm_bundler/* .unref */.R1)(T) ? "sidebar-active-width" : ""])
      }, (0,vue_runtime_esm_bundler/* .createSlots */.eX)({
        content: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", RequestSidebar_vue2_je, [
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
              class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["size-8", { "xl:hidden": (0,vue_runtime_esm_bundler/* .unref */.R1)(l) !== "modal" }])
            }, null, 2),
            (0,vue_runtime_esm_bundler/* .unref */.R1)(l) !== "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(WorkspaceDropdown_vue_re), { key: 0 })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
            (0,vue_runtime_esm_bundler/* .unref */.R1)(l) !== "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("span", Je, " / ")) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
            (0,vue_runtime_esm_bundler/* .unref */.R1)(l) !== "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(EnvironmentSelector_vue_ee, { key: 2 })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("button", {
              ref_key: "searchToggleRef",
              ref: B,
              "aria-pressed": f.value,
              class: "ml-auto",
              type: "button",
              onClick: e[0] || (e[0] = (o) => f.value = !f.value)
            }, [
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", Xe, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(f.value ? "Hide" : "Show") + " search ", 1),
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                class: "text-c-3 hover:bg-b-2 max-h-8 max-w-8 rounded-lg p-1.75 text-sm",
                icon: "Search"
              })
            ], 8, RequestSidebar_vue2_Qe)
          ]),
          f.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", Ye, [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarSidebarSearchInput */.Rc), {
              ref_key: "searchInputRef",
              ref: O,
              modelValue: (0,vue_runtime_esm_bundler/* .unref */.R1)(p),
              "onUpdate:modelValue": e[1] || (e[1] = (o) => (0,vue_runtime_esm_bundler/* .isRef */.i9)(p) ? p.value = o : null),
              autofocus: "",
              "aria-controls": (0,vue_runtime_esm_bundler/* .unref */.R1)(N),
              label: ce.value,
              onInput: (0,vue_runtime_esm_bundler/* .unref */.R1)(le),
              onKeydown: [
                e[2] || (e[2] = (0,vue_runtime_esm_bundler/* .withKeys */.jR)((0,vue_runtime_esm_bundler/* .withModifiers */.D$)((o) => (0,vue_runtime_esm_bundler/* .unref */.R1)(z)("down"), ["stop"]), ["down"])),
                e[3] || (e[3] = (0,vue_runtime_esm_bundler/* .withKeys */.jR)((0,vue_runtime_esm_bundler/* .withModifiers */.D$)((o) => (0,vue_runtime_esm_bundler/* .unref */.R1)(ie)(), ["stop"]), ["enter"])),
                e[4] || (e[4] = (0,vue_runtime_esm_bundler/* .withKeys */.jR)((0,vue_runtime_esm_bundler/* .withModifiers */.D$)((o) => (0,vue_runtime_esm_bundler/* .unref */.R1)(z)("up"), ["stop"]), ["up"]))
              ],
              onBlur: fe
            }, null, 8, ["modelValue", "aria-controls", "label", "onInput"])
          ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
            class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["gap-1/2 flex flex-1 flex-col overflow-visible overflow-y-auto px-3 pt-0 pb-3", [
              {
                "pb-14": (0,vue_runtime_esm_bundler/* .unref */.R1)(l) !== "modal"
              },
              {
                "h-[calc(100%-273.5px)]": R.value
              }
            ]]),
            onDragenter: e[7] || (e[7] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)(() => {
            }, ["prevent"])),
            onDragover: e[8] || (e[8] = (0,vue_runtime_esm_bundler/* .withModifiers */.D$)(() => {
            }, ["prevent"]))
          }, [
            (0,vue_runtime_esm_bundler/* .unref */.R1)(p) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarSearchResultList */.oN), {
              key: 0,
              id: (0,vue_runtime_esm_bundler/* .unref */.R1)(N),
              "aria-label": "Search Results",
              class: "gap-px",
              noResults: !(0,vue_runtime_esm_bundler/* .unref */.R1)(x).length
            }, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)((0,vue_runtime_esm_bundler/* .unref */.R1)(x), (o, r) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarSearchResultItem */.rQ), {
                  id: `#search-input-${o.item.id}`,
                  key: o.refIndex,
                  ref_for: !0,
                  ref: (i) => (0,vue_runtime_esm_bundler/* .unref */.R1)(ne)[r] = i,
                  selected: (0,vue_runtime_esm_bundler/* .unref */.R1)(w) === r,
                  class: "px-2",
                  href: o.item.link,
                  onClick: (0,vue_runtime_esm_bundler/* .withModifiers */.D$)((i) => (0,vue_runtime_esm_bundler/* .unref */.R1)(ae)(o), ["prevent"]),
                  onFocus: (i) => w.value = r
                }, {
                  addon: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                    e[10] || (e[10] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", { class: "sr-only" }, "HTTP Method:", -1)),
                    (0,vue_runtime_esm_bundler/* .createVNode */.bF)(HttpMethod_vue/* ["default"] */.A, {
                      class: "font-bold",
                      method: o.item.httpVerb ?? "get"
                    }, null, 8, ["method"])
                  ]),
                  default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                    (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)((0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(o.item.title) + " ", 1)
                  ]),
                  _: 2
                }, 1032, ["id", "selected", "href", "onClick", "onFocus"]))), 128))
              ]),
              _: 1
            }, 8, ["id", "noResults"])) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("nav", Ze, [
              ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(me.value, (o) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(RequestSidebarItem_vue_f, {
                key: o.uid,
                isDraggable: (0,vue_runtime_esm_bundler/* .unref */.R1)(l) !== "modal" && o.info?.title !== "Drafts",
                isDroppable: (0,vue_runtime_esm_bundler/* .unref */.R1)(oe),
                menuItem: S,
                parentUids: [],
                uid: o.uid,
                onNewTab: e[5] || (e[5] = (r, i) => j("newTab", { name: r, uid: i })),
                onOnDragEnd: (0,vue_runtime_esm_bundler/* .unref */.R1)(te),
                onOpenMenu: e[6] || (e[6] = (r) => Object.assign(S, r))
              }, {
                leftIcon: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
                  o.info?.title === "Drafts" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                    key: 0,
                    class: "text-sidebar-c-2 group-hover:hidden",
                    icon: "Scribble",
                    thickness: "2.25"
                  })) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(library/* .LibraryIcon */.$n), {
                    key: 1,
                    class: "text-sidebar-c-2 size-3.5 min-w-3.5 stroke-2 group-hover:hidden",
                    src: o["x-scalar-icon"] || "interface-content-folder"
                  }, null, 8, ["src"])),
                  (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
                    class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)({
                      "rotate-90": (0,vue_runtime_esm_bundler/* .unref */.R1)(J)[o.uid]
                    })
                  }, [
                    (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarIcon */.kv), {
                      class: "text-c-3 hover:text-c-1 hidden text-sm group-hover:block",
                      icon: "ChevronRight",
                      size: "md"
                    })
                  ], 2)
                ]),
                _: 2
              }, 1032, ["isDraggable", "isDroppable", "menuItem", "uid", "onOnDragEnd"]))), 128))
            ]))
          ], 34)
        ]),
        button: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
            class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)({
              "empty-sidebar-item": R.value
            })
          }, [
            R.value ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", et, [
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", tt, [
                (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ScalarAsciiArt_vue/* ["default"] */.A, {
                  art: (0,vue_runtime_esm_bundler/* .unref */.R1)(rabbit_ascii_),
                  class: "rabbitsit font-bold"
                }, null, 8, ["art"]),
                (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ScalarAsciiArt_vue/* ["default"] */.A, {
                  art: (0,vue_runtime_esm_bundler/* .unref */.R1)(rabbitjump_ascii_),
                  class: "rabbitjump absolute top-0 left-0 font-bold"
                }, null, 8, ["art"])
              ]),
              e[11] || (e[11] = (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", { class: "mt-2 mb-2 text-center text-sm text-balance" }, [
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("b", { class: "font-medium" }, "Let's Get Started"),
                (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("p", { class: "mt-2" }, " Create request, folder, collection or import from OpenAPI/Postman ")
              ], -1))
            ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
            (0,vue_runtime_esm_bundler/* .unref */.R1)(l) !== "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(components_dist/* .ScalarButton */.RO), {
              key: 1,
              class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["mb-1.5 hidden h-fit w-full p-1.5 opacity-0", {
                "flex opacity-100": R.value
              }]),
              onClick: se
            }, {
              default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...e[12] || (e[12] = [
                (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Import Collection ", -1)
              ])]),
              _: 1
            }, 8, ["class"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
            (0,vue_runtime_esm_bundler/* .unref */.R1)(l) !== "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(SidebarButton_vue/* ["default"] */.A, {
              key: 2,
              click: (0,vue_runtime_esm_bundler/* .unref */.R1)(k).commandPalette.emit,
              hotkey: "K"
            }, {
              title: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [...e[13] || (e[13] = [
                (0,vue_runtime_esm_bundler/* .createTextVNode */.eW)(" Add Item ", -1)
              ])]),
              _: 1
            }, 8, ["click"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
          ], 2)
        ]),
        _: 2
      }, [
        (0,vue_runtime_esm_bundler/* .unref */.R1)(l) !== "modal" ? {
          name: "header",
          fn: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => []),
          key: "0"
        } : void 0
      ]), 1032, ["class"]), [
        [vue_runtime_esm_bundler/* .vShow */.aG, (0,vue_runtime_esm_bundler/* .unref */.R1)(T)]
      ]),
      (0,vue_runtime_esm_bundler/* .unref */.R1)(l) !== "modal" && S ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(RequestSidebarItemMenu_vue_m, {
        key: 0,
        menuItem: S,
        onClearDrafts: de,
        onCloseMenu: e[9] || (e[9] = (o) => S.open = !1),
        onToggleWatchMode: ue
      }, null, 8, ["menuItem"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0)
    ], 64));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/RequestSidebar.vue.js

/* empty css                    */

const RequestSidebar_vue_c = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)($t, [["__scopeId", "data-v-bca9c474"]]);


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/plugins/hooks/usePluginManager.js
var usePluginManager = __webpack_require__(29223);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/libs/electron.js
const electron_n = () => typeof window < "u" && "electron" in window;


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/libs/errors.js
var errors = __webpack_require__(93656);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/libs/normalize-headers.js
const normalize_headers_n = (a, t = !1) => {
  const o = Object.fromEntries(a);
  t && [
    "Access-Control-Allow-Credentials",
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Methods",
    "Access-Control-Allow-Origin",
    "Access-Control-Expose-Headers"
  ].map((s) => s.toLowerCase()).forEach((s) => delete o[s]);
  const r = Object.keys(o).find((e) => e.toLowerCase() === "x-scalar-modified-headers"), c = r ? o[r]?.toString().split(", ")?.map((e) => e.toLowerCase()) ?? [] : [];
  return Object.keys(o).forEach((e) => {
    c.includes(e.toLowerCase()) && delete o[e];
  }), r && delete o[r], Object.keys(o).forEach((e) => {
    const s = /^x-scalar-original-/i;
    if (s.test(e)) {
      const l = e.replace(s, "");
      o[e] && (o[l] = o[e], delete o[e]);
    }
  }), Object.keys(o).forEach((e) => {
    const s = normalize_headers_i(e);
    e !== s && o[e] && (o[s] = o[e], delete o[e]);
  }), Object.fromEntries(Object.entries(o).sort(([e], [s]) => e.localeCompare(s)));
}, normalize_headers_i = (a) => a.split("-").map((t) => t.charAt(0).toUpperCase() + t.toLowerCase().slice(1)).join("-");


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/libs/string-template.js
var string_template = __webpack_require__(28621);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/libs/send-request/create-fetch-body.js


function create_fetch_body_c(i, o, t) {
  if (!(0,helpers/* .canMethodHaveBody */.Ik)(i))
    return { body: void 0, contentType: void 0 };
  if (o.body.activeBody === "formData" && o.body.formData) {
    const n = o.body.formData.encoding === "form-data" ? "multipart/form-data" : "application/x-www-form-urlencoded", d = o.body.formData.encoding === "form-data" ? new FormData() : new URLSearchParams();
    return o.body.formData.value.forEach((a) => {
      !a.enabled || !a.key || (a.file && d instanceof FormData ? d.append(a.key, a.file, a.file.name) : a.value !== void 0 && d.append(a.key, (0,string_template/* .replaceTemplateVariables */.GV)(a.value, t)));
    }), { body: d, contentType: n };
  }
  return o.body.activeBody === "raw" ? {
    body: (0,string_template/* .replaceTemplateVariables */.GV)(o.body.raw?.value ?? "", t),
    contentType: o.body.raw?.encoding
  } : o.body.activeBody === "binary" ? {
    body: o.body.binary,
    contentType: o.body.binary?.type
  } : {
    body: void 0,
    contentType: void 0
  };
}


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/libs/send-request/create-fetch-headers.js

function create_fetch_headers_l(t, o) {
  const a = {};
  return t.parameters.headers.forEach((e) => {
    const r = e.key.trim().toLowerCase();
    e.enabled && (r !== "content-type" || e.value !== "multipart/form-data") && (a[r] = (0,string_template/* .replaceTemplateVariables */.GV)(e.value, o));
  }), a;
}


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/libs/send-request/create-fetch-query-params.js

function create_fetch_query_params_m(o, n, l) {
  const r = new URLSearchParams(), u = (l?.parameters ?? []).reduce(
    (e, a) => (a.in === "query" && (e[a.name] = a), e),
    {}
  );
  return o.parameters.query.forEach((e) => {
    if (!e.enabled) return;
    const a = u[e.key];
    switch (e.type) {
      case "array": {
        const t = (0,string_template/* .replaceTemplateVariables */.GV)(e.value ?? "", n).split(/,\ ?/);
        if (a?.explode === !1) {
          const s = t.join(",");
          r.append(e.key, s);
        } else
          t.forEach((s) => {
            r.append(e.key, s.trim());
          });
        break;
      }
      default: {
        const t = (0,string_template/* .replaceTemplateVariables */.GV)(e.value ?? "", n);
        r.append(e.key, t.trim());
        break;
      }
    }
  }), r;
}


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/node_modules/whatwg-mimetype/lib/mime-type.js
var mime_type = __webpack_require__(77380);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/views/Request/consts/mediaTypes.js
var mediaTypes = __webpack_require__(84253);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/libs/send-request/decode-buffer.js


function decode_buffer_m(r, t) {
  const e = new mime_type(t);
  return (0,mediaTypes/* .isTextMediaType */._5)(e.essence) ? new TextDecoder(e.parameters.get("charset")).decode(r) : new Blob([r], { type: e.essence });
}


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/libs/send-request/set-request-cookies.js
var set_request_cookies = __webpack_require__(14088);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/libs/send-request/build-request-security.js
var build_request_security = __webpack_require__(30837);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/libs/send-request/create-request-operation.js











const we = ({
  environment: q,
  example: s,
  globalCookies: v,
  proxyUrl: u,
  request: a,
  securitySchemes: D,
  selectedSecuritySchemeUids: E = [],
  server: k,
  status: m,
  pluginManager: h
}) => {
  try {
    const o = q ?? {}, w = new AbortController(), b = s.parameters.path.reduce((t, e) => (e.enabled && (t[e.key] = (0,string_template/* .replaceTemplateVariables */.GV)(e.value, o)), t), {}), L = (0,string_template/* .replaceTemplateVariables */.GV)(k?.url ?? "", o), l = (0,string_template/* .replaceTemplateVariables */.GV)((0,string_template/* .replaceTemplateVariables */.GV)(a.path, o), b);
    let r = L || l;
    if (!r)
      throw errors/* .ERRORS.URL_EMPTY */.Sr.URL_EMPTY;
    Object.entries(k?.variables ?? {}).forEach(([t, e]) => {
      r = (0,string_template/* .replaceTemplateVariables */.GV)(r, {
        [t]: b[t] || e.default
      });
    });
    const z = create_fetch_query_params_m(s, o, a), B = create_fetch_headers_l(s, o), { body: F } = create_fetch_body_c(a.method, s, o), { cookieParams: _ } = (0,set_request_cookies/* .setRequestCookies */.hF)({
      example: s,
      env: o,
      globalCookies: v,
      serverUrl: r,
      proxyUrl: u
    }), O = E.flat().map((t) => D[t]).filter(helpers/* .isDefined */.O9), f = (0,build_request_security/* .buildRequestSecurity */.A)(O, o), n = { ...Object.entries(f.headers).reduce(
      (t, [e, S]) => (t[e.toLowerCase()] = S, t),
      {}
    ), ...B }, W = [..._, ...f.cookies], x = new URLSearchParams([...z, ...f.urlParams]);
    electron_n() && n["user-agent"] && (n["X-Scalar-User-Agent"] = n["user-agent"]), r = (0,helpers/* .mergeUrls */.Hh)(r, l, x);
    const p = (0,string_template/* .replaceTemplateVariables */.GV)((0,set_request_cookies/* .getCookieHeader */.a2)(W, n.Cookie), o);
    p && (electron_n() || (0,helpers/* .shouldUseProxy */.p3)(u, r) ? (console.warn(
      "We're using a `X-Scalar-Cookie` custom header to the request. The proxy will forward this as a `Cookie` header. We do this to avoid the browser omitting the `Cookie` header for cross-origin requests for security reasons."
    ), n["X-Scalar-Cookie"] = p) : (console.warn(
      `We're trying to add a Cookie header, but browsers often omit them for cross-origin requests for various security reasons. If it's not working, that's probably why. Here are the requirements for it to work:

          - The browser URL must be on the same domain as the server URL.
          - The connection must be made over HTTPS.
          `
    ), n.Cookie = p));
    const A = (0,helpers/* .redirectToProxy */.mg)(u, r), y = new Request(A, {
      method: a.method.toUpperCase(),
      body: F ?? null,
      headers: n
    });
    return [
      null,
      {
        request: y,
        sendRequest: async () => {
          m?.emit("start"), h && await h.executeHook("onBeforeRequest", { request: y });
          const t = Date.now();
          try {
            const e = await fetch(y, {
              signal: w.signal
            }), S = e.headers.get("content-type")?.startsWith("text/event-stream");
            m?.emit("stop");
            const X = Date.now() - t, j = e.clone(), R = normalize_headers_n(e.headers, (0,helpers/* .shouldUseProxy */.p3)(u, r)), I = e.headers.get("content-type") ?? "text/plain;charset=UTF-8", C = await j.arrayBuffer(), Q = decode_buffer_m(C, I), i = e.clone(), V = i.statusText || helpers/* .httpStatusCodes */.Z7[i.status]?.name || "", K = [204, 205, 304].includes(i.status), d = new Response(K ? null : i.body, {
              status: i.status,
              statusText: V,
              headers: i.headers
            });
            h && await h.executeHook("onResponseReceived", { response: d, operation: a });
            const g = "getSetCookie" in d.headers && typeof d.headers.getSetCookie == "function" ? d.headers.getSetCookie() : [];
            return S && e.body ? [
              null,
              {
                timestamp: Date.now(),
                request: s,
                response: {
                  ...d,
                  headers: R,
                  cookieHeaderKeys: g,
                  reader: e.body?.getReader(),
                  duration: X,
                  method: a.method,
                  path: l
                }
              }
            ] : [
              null,
              {
                timestamp: Date.now(),
                request: s,
                response: {
                  ...e,
                  headers: R,
                  cookieHeaderKeys: g,
                  data: Q,
                  size: C.byteLength,
                  duration: Date.now() - t,
                  method: a.method,
                  status: e.status,
                  path: l
                }
              }
            ];
          } catch (e) {
            return m?.emit("abort"), [(0,errors/* .normalizeError */.cQ)(e, errors/* .ERRORS.REQUEST_FAILED */.Sr.REQUEST_FAILED), null];
          }
        },
        controller: w
      }
    ];
  } catch (o) {
    return console.error(o), m?.emit("abort"), [(0,errors/* .normalizeError */.cQ)(o), null];
  }
};


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/RequestRoot.vue2.js


















const RequestRoot_vue2_pe = { class: "flex h-full" }, ve = { class: "flex h-full flex-1 flex-col" }, RequestRoot_vue2_Te = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "RequestRoot",
  emits: ["newTab"],
  setup(Re) {
    const V = (0,store/* .useWorkspace */.hA)(), { toast: u } = (0,dist/* .useToasts */.Yf)(), { layout: f } = (0,useLayout/* .useLayout */.g)(), w = (0,useClientConfig/* .useClientConfig */.T)(), { isSidebarOpen: s } = (0,useSidebar/* .useSidebar */.cL)(), B = useAnalytics_m(), {
      activeCollection: n,
      activeExample: i,
      activeEnvironment: d,
      activeRequest: l,
      activeWorkspace: p,
      activeServer: A
    } = (0,active_entities/* .useActiveEntities */.JC)(), { cookies: T, requestHistory: P, showSidebar: v, securitySchemes: D, events: r } = V, M = (0,usePluginManager/* .usePluginManager */.u)(), z = (0,vue_runtime_esm_bundler/* .ref */.KR)(), R = (0,vue_runtime_esm_bundler/* .ref */.KR)(), S = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => validate_parameters_i(i.value ?? null)
    ), q = (0,vue_runtime_esm_bundler/* .ref */.KR)(null), y = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => (n.value?.useCollectionSecurity ? n.value?.selectedSecuritySchemeUids : l.value?.selectedSecuritySchemeUids) ?? []
    ), x = async () => {
      if (!l.value || !i.value || !n.value)
        return;
      if (S.value.hasBlockingErrors) {
        u("Path parameters must have values.", "error"), r.requestStatus.emit("abort");
        return;
      }
      const t = typeof d.value == "object" ? d.value.value : "{}", e = safeJSON.parse(t);
      e.error && console.error("INVALID ENVIRONMENT!");
      const a = e.error || typeof e.data != "object" ? {} : e.data ?? {}, W = p.value?.cookies.map((L) => T[L]).filter(helpers/* .isDefined */.O9) ?? [], j = n.value?.info?.title === "Drafts" ? void 0 : A.value, [h, g] = we({
        request: l.value,
        example: i.value,
        selectedSecuritySchemeUids: y.value,
        proxyUrl: p.value?.proxyUrl ?? "",
        environment: a,
        globalCookies: W,
        status: r.requestStatus,
        securitySchemes: D,
        server: j,
        pluginManager: M
      });
      if (w.value?.onRequestSent?.(l.value.path ?? ""), h) {
        u(h.message, "error");
        return;
      }
      R.value = g.controller;
      const [k, E] = await g.sendRequest();
      q.value = E, k ? u(k.message, "error") : P.push(J(E));
    }, I = async () => R.value?.abort(errors/* .ERRORS.REQUEST_ABORTED */.Sr.REQUEST_ABORTED);
    function b() {
      B?.capture("client-send-request");
    }
    (0,vue_runtime_esm_bundler/* .onMounted */.sV)(() => {
      r.executeRequest.on(x), r.executeRequest.on(b), r.cancelRequest.on(I);
    }), useOpenApiWatcher_B(), (0,vue_runtime_esm_bundler/* .onBeforeUnmount */.xo)(() => {
      r.executeRequest.off(x), r.executeRequest.off(b);
    });
    const J = (t) => {
      try {
        return structuredClone(t);
      } catch {
        const e = { ...t };
        return t.response?.data && (t.response.data instanceof Blob || t.response.data instanceof ArrayBuffer ? e.response.data = t.response.data : e.response.data = JSON.parse(JSON.stringify(t.response.data))), e;
      }
    };
    return (t, e) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", {
      ref_key: "element",
      ref: z,
      class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["bg-b-1 relative z-0 flex h-full flex-1 flex-col overflow-hidden pt-0", {
        "!mr-0 !mb-0 !border-0": (0,vue_runtime_esm_bundler/* .unref */.R1)(f) === "modal"
      }])
    }, [
      (0,vue_runtime_esm_bundler/* .unref */.R1)(v) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(SidebarToggle_vue_k, {
        key: 0,
        modelValue: (0,vue_runtime_esm_bundler/* .unref */.R1)(s),
        "onUpdate:modelValue": e[0] || (e[0] = (a) => (0,vue_runtime_esm_bundler/* .isRef */.i9)(s) ? s.value = a : null),
        class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["absolute top-2 left-3 z-50", [
          { hidden: (0,vue_runtime_esm_bundler/* .unref */.R1)(s) },
          { "xl:!flex": !(0,vue_runtime_esm_bundler/* .unref */.R1)(s) },
          { "!flex": (0,vue_runtime_esm_bundler/* .unref */.R1)(f) === "modal" }
        ]])
      }, null, 8, ["modelValue", "class"])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", RequestRoot_vue2_pe, [
        (0,vue_runtime_esm_bundler/* .unref */.R1)(v) ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(RequestSidebar_vue_c, {
          key: 0,
          onNewTab: e[1] || (e[1] = (a) => t.$emit("newTab", a))
        })) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", ve, [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(vue_router/* .RouterView */.Tp), {
            invalidParams: S.value.invalidParams,
            requestResult: q.value,
            selectedSecuritySchemeUids: y.value
          }, null, 8, ["invalidParams", "requestResult", "selectedSecuritySchemeUids"])
        ])
      ])
    ], 2));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Request/RequestRoot.vue.js

/* empty css                 */

const RequestRoot_vue_a = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(RequestRoot_vue2_Te, [["__scopeId", "data-v-f141e3af"]]);



}),
84253: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  _5: () => (o),
  zi: () => (t)
});
const i = {
  "application/epub+zip": { extension: ".epub" },
  "application/gzip": { extension: ".gz" },
  "application/java-archive": { extension: ".jar" },
  "application/javascript": { extension: ".js", raw: !0 },
  "application/json": { extension: ".json", raw: !0, language: "json" },
  "application/ld+json": { extension: ".jsonld", raw: !0, language: "json" },
  "application/problem+json": {
    extension: ".json",
    raw: !0,
    language: "json"
  },
  "application/vnd.api+json": { extension: ".json", raw: !0, language: "json" },
  "application/dns-json": { extension: ".json", raw: !0, language: "json" },
  "application/msword": { extension: ".doc" },
  "application/octet-stream": { extension: ".bin" },
  "application/ogg": { extension: ".ogx" },
  "application/pdf": { extension: ".pdf", preview: "object" },
  "application/rtf": { extension: ".rtf", raw: !0 },
  "application/vnd.amazon.ebook": { extension: ".azw" },
  "application/vnd.apple.installer+xml": {
    extension: ".mpkg",
    raw: !0,
    language: "xml"
  },
  "application/vnd.mozilla.xul+xml": {
    extension: ".xul",
    raw: !0,
    language: "xml"
  },
  "application/vnd.ms-excel": { extension: ".xls" },
  "application/vnd.ms-fontobject": { extension: ".eot" },
  "application/vnd.ms-powerpoint": { extension: ".ppt" },
  "application/vnd.oasis.opendocument.presentation": { extension: ".odp" },
  "application/vnd.oasis.opendocument.spreadsheet": { extension: ".ods" },
  "application/vnd.oasis.opendocument.text": { extension: ".odt" },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    extension: ".pptx"
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    extension: ".xlsx"
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    extension: ".docx"
  },
  "application/vnd.rar": { extension: ".rar" },
  "application/vnd.visio": { extension: ".vsd" },
  "application/x-7z-compressed": { extension: ".7z" },
  "application/x-abiword": { extension: ".abw" },
  "application/x-bzip": { extension: ".bz" },
  "application/x-bzip2": { extension: ".bz2" },
  "application/x-cdf": { extension: ".cda" },
  "application/x-csh": { extension: ".csh" },
  "application/x-freearc": { extension: ".arc" },
  "application/x-httpd-php": { extension: ".php", raw: !0 },
  "application/x-sh": { extension: ".sh", raw: !0 },
  "application/x-tar": { extension: ".tar" },
  "application/xhtml+xml": { extension: ".xhtml", raw: !0, language: "html" },
  "application/xml": { extension: ".xml", raw: !0, language: "xml" },
  "application/yaml": { extension: ".yaml", raw: !0, language: "yaml" },
  "application/zip": { extension: ".zip" },
  "audio/aac": { extension: ".aac" },
  "audio/midi": { extension: ".midi" },
  "audio/mpeg": { extension: ".mp3", preview: "audio" },
  "audio/ogg": { extension: ".oga" },
  "audio/wav": { extension: ".wav" },
  "audio/webm": { extension: ".weba" },
  "font/otf": { extension: ".otf" },
  "font/ttf": { extension: ".ttf" },
  "font/woff": { extension: ".woff" },
  "font/woff2": { extension: ".woff2" },
  "image/apng": { extension: ".apng", preview: "image", alpha: !0 },
  "image/avif": { extension: ".avif", preview: "image" },
  "image/bmp": { extension: ".bmp", preview: "image" },
  "image/gif": { extension: ".gif", preview: "image", alpha: !0 },
  "image/jpeg": { extension: ".jpg", preview: "image" },
  "image/png": { extension: ".png", preview: "image", alpha: !0 },
  "image/svg+xml": {
    extension: ".svg",
    raw: !0,
    language: "xml",
    preview: "image",
    alpha: !0
  },
  "image/tiff": { extension: ".tiff" },
  "image/vnd.microsoft.icon": { extension: ".ico", preview: "image" },
  "image/webp": { extension: ".webp", preview: "image", alpha: !0 },
  "text/calendar": { extension: ".ics", raw: !0 },
  "text/css": { extension: ".css", raw: !0, language: "css" },
  "text/csv": { extension: ".csv", raw: !0 },
  "text/html": {
    extension: ".html",
    raw: !0,
    language: "html",
    preview: "object"
  },
  "text/javascript": { extension: ".js", raw: !0 },
  "text/plain": { extension: ".txt", raw: !0 },
  "text/xml": { extension: ".xml", raw: !0, language: "xml" },
  "text/yaml": { extension: ".yaml", raw: !0, language: "yaml" },
  "video/3gpp": { extension: ".3gp" },
  "audio/3gpp": { extension: ".3gp" },
  "video/3gpp2": { extension: ".3g2" },
  "audio/3gpp2": { extension: ".3g2" },
  "video/mp2t": { extension: ".ts" },
  "video/mp4": { extension: ".mp4", preview: "video" },
  "video/mpeg": { extension: ".mpeg" },
  "video/ogg": { extension: ".ogv" },
  "video/webm": { extension: ".webm", preview: "video" },
  "video/x-msvideo": { extension: ".avi" }
}, a = Object.entries(i).filter(([, e]) => e?.raw).map(([e]) => e);
function t(e) {
  const n = i[e];
  if (n)
    return n;
  if (e.endsWith("+json"))
    return {
      extension: ".json",
      raw: !0,
      language: "json"
    };
}
function o(e) {
  return !!t(e)?.raw;
}



}),

}]);