"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["55764"], {
93230: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_extendedmodule_sc_product_specifications_mdx_081_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-extendedmodule-sc-product-specifications-mdx-081.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_extendedmodule_sc_product_specifications_mdx_081_namespaceObject = JSON.parse('{"id":"device/extendedmodule_sc/product-specifications","title":"製品仕様","description":"製品のサイズ、機能、性能などの主要な仕様情報を提供します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/extendedmodule_sc/product-specifications.mdx","sourceDirName":"device/extendedmodule_sc","slug":"/device/extendedmodule_sc/product-specifications","permalink":"/docs/ja/device/extendedmodule_sc/product-specifications","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/extendedmodule_sc/product-specifications.mdx","tags":[],"version":"current","frontMatter":{"id":"product-specifications","title":"製品仕様","description":"製品のサイズ、機能、性能などの主要な仕様情報を提供します。","keywords":["一般","インターフェース","製品寸法"],"isTranslationMissing":false},"sidebar":"extendedmodule_sc","previous":{"title":"インストール","permalink":"/docs/ja/device/extendedmodule_sc/installation"},"next":{"title":"付録","permalink":"/docs/ja/device/extendedmodule_sc/appendices"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./static/specs/extm_sc_specs.json
var extm_sc_specs_namespaceObject = JSON.parse('{"D":{"j":{"label":"일반","label_id":"specs.general","items":{"ip_rating":{"label":"IP 등급","label_id":"specs.general.ip_rating","label_link":"../../reference/glossary#ip_rating","value":"IP65"}}},"q":{"label":"인터페이스","label_id":"specs.interface","items":{"rs485":{"label":"RS-485","label_id":"specs.interface.rs485","value":{"ko":"1채널","en":"1 ch"}},"rs232c":{"label":"RS-232C","label_id":"specs.interface.rs232c","value":{"ko":"1채널","en":"1 ch"}}}}}}')
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/extendedmodule_sc/product-specifications.mdx


const frontMatter = {
	id: 'product-specifications',
	title: '製品仕様',
	description: '製品のサイズ、機能、性能などの主要な仕様情報を提供します。',
	keywords: [
		'一般',
		'インターフェース',
		'製品寸法'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*일반*/
/*인터페이스*/



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
      data: extm_sc_specs_namespaceObject.D.j
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: extm_sc_specs_namespaceObject.D.q
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "サイズと重量",
      children: "サイズと重量"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/extm-sc-dimension.svg",
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