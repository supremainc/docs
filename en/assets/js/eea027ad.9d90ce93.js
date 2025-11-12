"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["41757"], {
99927: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_bioentry_r_2_index_mdx_eea_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-bioentry-r-2-index-mdx-eea.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_bioentry_r_2_index_mdx_eea_namespaceObject = JSON.parse('{"id":"device/bioentry_r2/index","title":"BioEntry R2","description":"BioEntry R2 is a compact fingerprint reader designed for ACU systems. Using the latest Suprema fingerprint recognition algorithms and sensors, it can acquire high-resolution fingerprint images and utilize multi RFID card technology that can simultaneously read 125kHz and 13.56MHz frequencies, recognizing various standard cards in one device. Additionally, with its Mullion-type design, it can be perfectly installed even in narrow spaces like door frames, and can build an enhanced ACU system together with Suprema\'s intelligent biometric controller, CoreStation.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/bioentry_r2/index.mdx","sourceDirName":"device/bioentry_r2","slug":"/device/bioentry_r2/","permalink":"/docs/en/device/bioentry_r2/","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/bioentry_r2/index.mdx","tags":[],"version":"current","frontMatter":{"title":"BioEntry R2","description":"BioEntry R2 is a compact fingerprint reader designed for ACU systems. Using the latest Suprema fingerprint recognition algorithms and sensors, it can acquire high-resolution fingerprint images and utilize multi RFID card technology that can simultaneously read 125kHz and 13.56MHz frequencies, recognizing various standard cards in one device. Additionally, with its Mullion-type design, it can be perfectly installed even in narrow spaces like door frames, and can build an enhanced ACU system together with Suprema\'s intelligent biometric controller, CoreStation.","keywords":["BioEntry R2","Compact Fingerprint Reader"],"isTranslationMissing":false},"sidebar":"bioentryr2","next":{"title":"Safety Instructions","permalink":"/docs/en/device/bioentry_r2/safety-instructions"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/bioentry_r2/index.mdx


const frontMatter = {
	title: 'BioEntry R2',
	description: 'BioEntry R2 is a compact fingerprint reader designed for ACU systems. Using the latest Suprema fingerprint recognition algorithms and sensors, it can acquire high-resolution fingerprint images and utilize multi RFID card technology that can simultaneously read 125kHz and 13.56MHz frequencies, recognizing various standard cards in one device. Additionally, with its Mullion-type design, it can be perfectly installed even in narrow spaces like door frames, and can build an enhanced ACU system together with Suprema\'s intelligent biometric controller, CoreStation.',
	keywords: [
		'BioEntry R2',
		'Compact Fingerprint Reader'
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
      children: "BioEntry R2 is a compact fingerprint reader designed for ACU systems. Using the latest Suprema fingerprint recognition algorithms and sensors, it can acquire high-resolution fingerprint images and utilize multi RFID card technology that can simultaneously read 125kHz and 13.56MHz frequencies, recognizing various standard cards in one device. Additionally, with its Mullion-type design, it can be perfectly installed even in narrow spaces like door frames, and can build an enhanced ACU system together with Suprema's intelligent biometric controller, CoreStation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Example banner",
        src: (__webpack_require__(3579)/* ["default"] */.A) + "",
        width: "1000",
        height: "452"
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
3579: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bioentryr2-main-e746ca9d30f94b827b9590e7f96bf327.png");

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