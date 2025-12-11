"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["7428"], {
76263: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_xstation_2_index_mdx_498_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-xstation-2-index-mdx-498.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_xstation_2_index_mdx_498_namespaceObject = JSON.parse('{"id":"device/xstation_2/index","title":"X-Station 2","description":"X-Station 2 is an intelligent access terminal that supports various authentication methods, from mobile access cards to QR codes, barcodes, RFID cards, and fingerprints. Equipped with secure boot features, OSDP, and a camera for image logging, X-Station 2 enhances access security while protecting user data. X-Station 2 is easy to install, use, and maintain, featuring PoE, an intuitive UI with a 4-inch touchscreen, and an IP65 rating for waterproof and dustproof capabilities.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/xstation_2/index.mdx","sourceDirName":"device/xstation_2","slug":"/device/xstation_2/","permalink":"/en/device/xstation_2/","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/xstation_2/index.mdx","tags":[],"version":"current","frontMatter":{"title":"X-Station 2","description":"X-Station 2 is an intelligent access terminal that supports various authentication methods, from mobile access cards to QR codes, barcodes, RFID cards, and fingerprints. Equipped with secure boot features, OSDP, and a camera for image logging, X-Station 2 enhances access security while protecting user data. X-Station 2 is easy to install, use, and maintain, featuring PoE, an intuitive UI with a 4-inch touchscreen, and an IP65 rating for waterproof and dustproof capabilities.","keywords":["X-Station 2","Suprema"],"isTranslationMissing":false},"sidebar":"xstation2","next":{"title":"Safety Instructions","permalink":"/en/device/xstation_2/safety-instructions"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/xstation_2/index.mdx


const frontMatter = {
	title: 'X-Station 2',
	description: 'X-Station 2 is an intelligent access terminal that supports various authentication methods, from mobile access cards to QR codes, barcodes, RFID cards, and fingerprints. Equipped with secure boot features, OSDP, and a camera for image logging, X-Station 2 enhances access security while protecting user data. X-Station 2 is easy to install, use, and maintain, featuring PoE, an intuitive UI with a 4-inch touchscreen, and an IP65 rating for waterproof and dustproof capabilities.',
	keywords: [
		'X-Station 2',
		'Suprema'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Overview} = _components;
  if (!Overview) _missingMdxReference("Overview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "X-Station 2 is an intelligent access terminal that supports various authentication methods, from mobile access cards to QR codes, barcodes, RFID cards, and fingerprints. Equipped with secure boot features, OSDP, and a camera for image logging, X-Station 2 enhances access security while protecting user data. X-Station 2 is easy to install, use, and maintain, featuring PoE, an intuitive UI with a 4-inch touchscreen, and an IP65 rating for waterproof and dustproof capabilities."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Example banner",
        src: (__webpack_require__(49731)/* ["default"] */.A) + "",
        width: "800",
        height: "533"
      })
    }), "\n", (0,jsx_runtime.jsx)(Overview, {})]
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
49731: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/xstation2-main-e2cbd3211e53b659061f75dffac3d174.png");

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