"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8696"], {
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
var focus_management = __webpack_require__(44894);
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
84091: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Collection_vue2_P)
});

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 4 modules
var vue_runtime_esm_bundler = __webpack_require__(92102);
// EXTERNAL MODULE: ./node_modules/@vueuse/core/index.mjs
var core = __webpack_require__(55410);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs + 6 modules
var vue_router = __webpack_require__(76522);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayout.vue.js
var ViewLayout_vue = __webpack_require__(14074);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/ViewLayout/ViewLayoutSection.vue.js
var ViewLayoutSection_vue = __webpack_require__(70139);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/routes.js
var routes = __webpack_require__(15650);
// EXTERNAL MODULE: ./node_modules/@scalar/icons/dist/library/index.js + 86 modules
var library = __webpack_require__(76371);
// EXTERNAL MODULE: ./node_modules/@scalar/components/dist/index.js + 321 modules
var dist = __webpack_require__(4859);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/Form/LabelInput.vue2.js


const g = ["for"], y = ["id", "placeholder", "value"], b = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "LabelInput",
  props: {
    inputId: {},
    placeholder: {},
    value: {},
    layout: {}
  },
  emits: ["updateValue"],
  setup(_, { emit: i }) {
    const s = i, { cx: t } = (0,dist/* .useBindCx */.AX)(), d = (e) => {
      const a = e.target;
      s("updateValue", a.value);
    };
    return (e, a) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", (0,vue_runtime_esm_bundler/* .normalizeProps */._B)((0,vue_runtime_esm_bundler/* .guardReactiveProps */.Ng)((0,vue_runtime_esm_bundler/* .unref */.R1)(t)("flex-1 flex gap-1 items-center pointer-events-none group"))), [
      e.layout !== "modal" ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, { key: 0 }, [
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("label", (0,vue_runtime_esm_bundler/* .mergeProps */.v6)(
          (0,vue_runtime_esm_bundler/* .unref */.R1)(t)(
            "absolute w-full h-full top-0 left-0 pointer-events-auto opacity-0 cursor-text"
          ),
          { for: e.inputId }
        ), null, 16, g),
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("input", (0,vue_runtime_esm_bundler/* .mergeProps */.v6)(
          (0,vue_runtime_esm_bundler/* .unref */.R1)(t)(
            "flex-1 text-c-1 rounded pointer-events-auto relative w-full pl-1.25 -ml-0.5 md:-ml-1.25 h-8 group-hover-input has-[:focus-visible]:outline z-10"
          ),
          {
            id: e.inputId,
            placeholder: e.placeholder,
            value: e.value,
            onInput: d
          }
        ), null, 16, y)
      ], 64)) : ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("span", (0,vue_runtime_esm_bundler/* .normalizeProps */._B)((0,vue_runtime_esm_bundler/* .mergeProps */.v6)({ key: 1 }, (0,vue_runtime_esm_bundler/* .unref */.R1)(t)("flex items-center text-c-1 h-8"))), (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(e.value), 17))
    ], 16));
  }
});


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/_virtual/_plugin-vue_export-helper.js
var _plugin_vue_export_helper = __webpack_require__(94622);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/components/Form/LabelInput.vue.js

/* empty css                */

const LabelInput_vue_e = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(b, [["__scopeId", "data-v-fced736a"]]);


// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/components/IconSelector.vue.js + 2 modules
var IconSelector_vue = __webpack_require__(99361);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/active-entities.js + 1 modules
var active_entities = __webpack_require__(17342);
// EXTERNAL MODULE: ./node_modules/@scalar/api-client/dist/store/store.js + 10 modules
var store = __webpack_require__(99456);
;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/CollectionInfoForm.vue2.js







const CollectionInfoForm_vue2_I = ["aria-label"], CollectionInfoForm_vue2_g = { class: "group relative ml-1.25" }, CollectionInfoForm_vue2_y = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "CollectionInfoForm",
  setup(k) {
    const { activeCollection: e } = (0,active_entities/* .useActiveEntities */.JC)(), { collectionMutators: l } = (0,store/* .useWorkspace */.hA)(), a = (0,vue_runtime_esm_bundler/* .computed */.EW)(
      () => e?.value?.["x-scalar-icon"] || "interface-content-folder"
    ), s = (t) => {
      e?.value?.uid && l.edit(e?.value?.uid, "x-scalar-icon", t);
    }, d = (t) => {
      e.value && l.edit(e.value.uid, "info.title", t);
    }, r = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => ({
      icon: e?.value?.["x-scalar-icon"],
      title: e?.value?.info?.title,
      description: e?.value?.info?.description,
      version: e?.value?.info?.version
    }));
    return (t, i) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", {
      "aria-label": `Collection: ${r.value.title}`,
      class: "mx-auto flex h-fit w-full flex-col gap-2 pt-6 pb-3 md:mx-auto md:max-w-[720px]"
    }, [
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)(IconSelector_vue/* ["default"] */.A, {
        modelValue: a.value,
        placement: "bottom-start",
        "onUpdate:modelValue": i[0] || (i[0] = (m) => s(m))
      }, {
        default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(dist/* .ScalarButton */.RO), {
            class: "hover:bg-b-2 aspect-square h-7 w-7 cursor-pointer rounded border border-transparent p-0 hover:border-inherit",
            variant: "ghost"
          }, {
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(library/* .LibraryIcon */.$n), {
                class: "text-c-2 size-5",
                src: a.value,
                "stroke-width": "2"
              }, null, 8, ["src"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]),
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", CollectionInfoForm_vue2_g, [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(LabelInput_vue_e, {
          class: "text-xl font-bold",
          inputId: "collectionName",
          placeholder: "Untitled Collection",
          value: r.value.title,
          onUpdateValue: d
        }, null, 8, ["value"])
      ])
    ], 8, CollectionInfoForm_vue2_I));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/CollectionInfoForm.vue.js

/* empty css                        */

const CollectionInfoForm_vue_f = /* @__PURE__ */ (0,_plugin_vue_export_helper/* ["default"] */.A)(CollectionInfoForm_vue2_y, [["__scopeId", "data-v-68d5218e"]]);


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/CollectionNavigation.vue.js






const B = { class: "bg-b-1 sticky -top-[104px] z-10 mx-auto w-full" }, E = {
  key: 0,
  class: "flex max-w-40 items-center"
}, z = { class: "text-c-1 mr-[6.25px] hidden overflow-hidden px-2 font-medium text-ellipsis whitespace-nowrap md:block" }, P = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "CollectionNavigation",
  props: {
    isSticky: { type: Boolean }
  },
  setup(I) {
    const { currentRoute: c } = (0,vue_router/* .useRouter */.rd)(), { activeCollection: e } = (0,active_entities/* .useActiveEntities */.JC)(), p = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => [
      {
        displayName: "Overview",
        // icon: 'Collection',
        to: {
          name: "collection.overview",
          params: {
            [routes/* .PathId.Collection */.TU.Collection]: e.value?.uid
          }
        }
      },
      {
        displayName: "Servers",
        // icon: 'Server',
        to: {
          name: "collection.servers",
          params: {
            [routes/* .PathId.Collection */.TU.Collection]: e.value?.uid
          }
        }
      },
      {
        displayName: "Authentication",
        // icon: 'Lock',
        to: {
          name: "collection.authentication",
          params: {
            [routes/* .PathId.Collection */.TU.Collection]: e.value?.uid
          }
        }
      },
      {
        displayName: "Environment",
        // icon: 'Brackets',
        to: {
          name: "collection.environment",
          params: {
            [routes/* .PathId.Collection */.TU.Collection]: e.value?.uid
          }
        }
      },
      // {
      //   displayName: 'Cookies',
      //   // icon: 'Cookie',
      //   to: {
      //     name: 'collection.cookies',
      //     params: {
      //       [PathId.Collection]: activeCollection.value?.uid,
      //     },
      //   },
      // },
      // {
      //   displayName: 'Scripts',
      //   // icon: 'CodeFolder',
      //   to: {
      //     name: 'collection.scripts',
      //     params: {
      //       [PathId.Collection]: activeCollection.value?.uid,
      //     },
      //   },
      // },
      // {
      //   displayName: 'Sync',
      //   // icon: 'Download',
      //   to: {
      //     name: 'collection.sync',
      //   },
      // },
      {
        displayName: "Settings",
        // icon: 'Settings',
        to: {
          name: "collection.settings"
        }
      }
    ]);
    return (r, L) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", B, [
      (0,vue_runtime_esm_bundler/* .createVNode */.bF)(CollectionInfoForm_vue_f),
      (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
        class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)([
          "items-center text-sm font-medium",
          r.isSticky ? "h-fit border-b md:grid md:grid-cols-[1fr_720px_1fr] md:px-4" : "flex md:mx-auto md:max-w-[720px]"
        ])
      }, [
        r.isSticky ? ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)("div", E, [
          (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(library/* .LibraryIcon */.$n), {
            class: "text-c-2 hidden size-3.5 md:block",
            src: (0,vue_runtime_esm_bundler/* .unref */.R1)(e)?.["x-scalar-icon"] || "interface-content-folder",
            "stroke-width": "2"
          }, null, 8, ["src"]),
          (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", z, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)((0,vue_runtime_esm_bundler/* .unref */.R1)(e)?.info?.title), 1)
        ])) : (0,vue_runtime_esm_bundler/* .createCommentVNode */.Q3)("", !0),
        (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", {
          class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)(["flex w-full max-w-[720px] gap-2 pl-1.5 md:ml-1.5 md:pl-0", !r.isSticky && "border-b"])
        }, [
          ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(!0), (0,vue_runtime_esm_bundler/* .createElementBlock */.CE)(vue_runtime_esm_bundler/* .Fragment */.FK, null, (0,vue_runtime_esm_bundler/* .renderList */.pI)(p.value, ({ to: l, displayName: u }, f) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)((0,vue_runtime_esm_bundler/* .unref */.R1)(vue_router/* .RouterLink */.Wk), {
            key: f,
            class: "-ml-2 flex h-10 cursor-pointer items-center px-2 text-center text-sm font-medium whitespace-nowrap no-underline -outline-offset-1 has-[:focus-visible]:outline",
            to: l
          }, {
            default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
              (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("span", {
                class: (0,vue_runtime_esm_bundler/* .normalizeClass */.C4)([
                  "flex-center h-full w-full border-b",
                  typeof l.name == "string" && typeof (0,vue_runtime_esm_bundler/* .unref */.R1)(c).name == "string" && (0,vue_runtime_esm_bundler/* .unref */.R1)(c).name?.startsWith(l.name) ? "text-c-1 border-c-1" : "text-c-2 hover:text-c-1 border-transparent"
                ])
              }, (0,vue_runtime_esm_bundler/* .toDisplayString */.v_)(u), 3)
            ]),
            _: 2
          }, 1032, ["to"]))), 128))
        ], 2)
      ], 2)
    ]));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/Collection.vue2.js








const S = { class: "w-full md:mx-auto md:max-w-[720px]" }, Collection_vue2_P = /* @__PURE__ */ (0,vue_runtime_esm_bundler/* .defineComponent */.pM)({
  __name: "Collection",
  setup(V) {
    const { activeCollection: i } = (0,active_entities/* .useActiveEntities */.JC)(), m = (0,vue_router/* .useRouter */.rd)(), o = (0,vue_runtime_esm_bundler/* .ref */.KR)(null), { y: c } = (0,core/* .useScroll */.Ll8)(o), a = (0,vue_runtime_esm_bundler/* .computed */.EW)(() => c.value > 104);
    return (0,vue_runtime_esm_bundler/* .watch */.wB)(
      i,
      (t) => {
        if (t?.info?.title === "Drafts") {
          const r = t.requests[0];
          m.push({
            name: "request",
            params: { [routes/* .PathId.Request */.TU.Request]: r }
          });
        }
      },
      {
        immediate: !0
      }
    ), (t, r) => ((0,vue_runtime_esm_bundler/* .openBlock */.uX)(), (0,vue_runtime_esm_bundler/* .createBlock */.Wv)(ViewLayout_vue/* ["default"] */.A, {
      ref_key: "el",
      ref: o,
      class: "h-fit overflow-auto pb-6 xl:overflow-auto"
    }, {
      default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
        (0,vue_runtime_esm_bundler/* .createVNode */.bF)(ViewLayoutSection_vue/* ["default"] */.A, { class: "xl:h-fit" }, {
          default: (0,vue_runtime_esm_bundler/* .withCtx */.k6)(() => [
            (0,vue_runtime_esm_bundler/* .createVNode */.bF)(P, { isSticky: a.value }, null, 8, ["isSticky"]),
            (0,vue_runtime_esm_bundler/* .createElementVNode */.Lk)("div", S, [
              (0,vue_runtime_esm_bundler/* .createVNode */.bF)((0,vue_runtime_esm_bundler/* .unref */.R1)(vue_router/* .RouterView */.Tp))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 512));
  }
});


;// CONCATENATED MODULE: ./node_modules/@scalar/api-client/dist/views/Collection/Collection.vue.js




}),

}]);