"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["78690"], {
11768: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_securemodule_product_specifications_mdx_f5f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-securemodule-product-specifications-mdx-f5f.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_securemodule_product_specifications_mdx_f5f_namespaceObject = JSON.parse('{"id":"device/securemodule/product-specifications","title":"製品仕様","description":"製品のサイズ、機能、性能などの主要な仕様情報を提供します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/securemodule/product-specifications.mdx","sourceDirName":"device/securemodule","slug":"/device/securemodule/product-specifications","permalink":"/docs/ja/device/securemodule/product-specifications","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/securemodule/product-specifications.mdx","tags":[],"version":"current","frontMatter":{"id":"product-specifications","title":"製品仕様","description":"製品のサイズ、機能、性能などの主要な仕様情報を提供します。","keywords":["一般","インターフェース","電気仕様","製品寸法"],"isTranslationMissing":false},"sidebar":"securemodule","previous":{"title":"接続する","permalink":"/docs/ja/device/securemodule/installation"},"next":{"title":"規制認証情報","permalink":"/docs/ja/device/securemodule/regulatory-information"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./static/specs/sio2_specs.json
var sio2_specs_namespaceObject = JSON.parse('{"y":{"ju":{"label":"일반","label_id":"specs.general","items":{"modelName":{"label":"모델명","label_id":"specs.general.modelName","value":"SIO2"},"cpu":{"label":"CPU","label_id":"specs.general.cpu","value":"Cortex M3 72 MHz"},"memory":{"label":"메모리","label_id":"specs.general.memory","value":"128 KB Flash + 20 KB RAM"},"led_type":{"label":"LED","label_id":"specs.general.led_type","type":"model","items":{"multiColor":{"label":"다중 색상","label_id":"specs.general.led_type.multiColor","value":{"ko":["POWER: 1개","RS-485 TX: 1개","RS-485 RX: 1개","INPUT: 2개","RELAY: 1개"],"en":["POWER: 1ea","RS-485 TX: 1ea","RS-485 RX: 1ea","INPUT: 2ea","RELAY: 1ea"]}}}},"operating_temp":{"label":"동작 온도","label_id":"specs.general.operating_temp","value":"-20 °C ~ 50 °C"},"storage_temp":{"label":"보관 온도","label_id":"specs.general.storage_temp","value":"-40 °C ~ 70 °C"},"operating_humidity":{"label":"동작 습도","label_id":"specs.general.operating_humidity","value":{"ko":"0 % ~ 80 %, 비응축","en":"0 % ~ 80 %, non-condensing"}},"storage_humidity":{"label":"보관 습도","label_id":"specs.general.storage_humidity","value":{"ko":"0 % ~ 90 %, 비응축","en":"0 % ~ 90 %, non-condensing"}},"certifications":{"label":"인증","label_id":"specs.general.certifications","value":"CE, UKCA, KC, FCC, RoHS, REACH, WEEE"}}},"qO":{"label":"인터페이스","label_id":"specs.interface","items":{"rs485":{"label":"RS-485","label_id":"specs.interface.rs485","value":{"ko":"1채널","en":"1 ch"}},"rs485_protocol":{"label":"RS-485 통신 프로토콜","label_id":"specs.interface.rs485_protocol","value":{"ko":"OSDP V2 호환","en":"OSDP V2 compliant"}},"input":{"label":"Input","label_id":"specs.interface.input","value":{"ko":"2채널","en":"2 ch"}},"relay":{"label":"릴레이","label_id":"specs.interface.relay","value":{"ko":"1개","en":"1 relay"}}}},"yp":{"label":"전기 규격","label_id":"specs.power","items":{"power":{"label":"전원","label_id":"specs.power.power","type":"model","items":{"12vdc":{"label":"12 Vdc","value":{"ko":"전류: 최대 0.5 A","en":"Current: Max. 0.5 A"}}}},"relay":{"label":"릴레이","label_id":"specs.power.relay","value":["2 A @ 30 VDC Resistive load","1 A @ 30 VDC Inductive load"]}}}}}')
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/securemodule/product-specifications.mdx


const frontMatter = {
	id: 'product-specifications',
	title: '製品仕様',
	description: '製品のサイズ、機能、性能などの主要な仕様情報を提供します。',
	keywords: [
		'一般',
		'インターフェース',
		'電気仕様',
		'製品寸法'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*일반*/
/*인터페이스*/
/*전기 규격*/



const toc = [{
  "value": "サイズと重量",
  "id": "サイズと重量",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    hr: "hr",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, SpecSection} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!SpecSection) _missingMdxReference("SpecSection", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "製品のサイズ、機能、性能などの主要な仕様情報を提供します。"
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: sio2_specs_namespaceObject.y.ju
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: sio2_specs_namespaceObject.y.qO
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: sio2_specs_namespaceObject.y.yp
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "サイズと重量",
      children: "サイズと重量"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "寸法公差は ±0.3 mm です。"
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/sio2-dimension.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "製品仕様は性能向上のため予告なく変更されることがあります。"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
84429: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


}),

}]);