"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["35953"], {
64287: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_bioentry_w_3_index_mdx_185_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-bioentry-w-3-index-mdx-185.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_bioentry_w_3_index_mdx_185_namespaceObject = JSON.parse('{"id":"device/bioentry_w3/index","title":"BioEntry W3","description":"BioEntry W3 is a next-generation facial authentication access control device equipped with Suprema\'s advanced AI technology. It features an AI processor (NPU) optimized for deep learning, boasting high accuracy and ultra-fast facial authentication performance. It can withstand harsh environments like deserts and strong external impacts, providing excellent installation convenience with its slim and compact design.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/bioentry_w3/index.mdx","sourceDirName":"device/bioentry_w3","slug":"/device/bioentry_w3/","permalink":"/en/device/bioentry_w3/","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/bioentry_w3/index.mdx","tags":[],"version":"current","frontMatter":{"title":"BioEntry W3","description":"BioEntry W3 is a next-generation facial authentication access control device equipped with Suprema\'s advanced AI technology. It features an AI processor (NPU) optimized for deep learning, boasting high accuracy and ultra-fast facial authentication performance. It can withstand harsh environments like deserts and strong external impacts, providing excellent installation convenience with its slim and compact design.","keywords":["BioEntry W3","AI-Based Facial Authentication Device"],"isTranslationMissing":false},"sidebar":"bioentryw3","next":{"title":"Safety Instructions","permalink":"/en/device/bioentry_w3/safety-instructions"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/bioentry_w3/index.mdx


const frontMatter = {
	title: 'BioEntry W3',
	description: 'BioEntry W3 is a next-generation facial authentication access control device equipped with Suprema\'s advanced AI technology. It features an AI processor (NPU) optimized for deep learning, boasting high accuracy and ultra-fast facial authentication performance. It can withstand harsh environments like deserts and strong external impacts, providing excellent installation convenience with its slim and compact design.',
	keywords: [
		'BioEntry W3',
		'AI-Based Facial Authentication Device'
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
      children: "BioEntry W3 is a next-generation facial authentication access control device equipped with Suprema's advanced AI technology. It features an AI processor (NPU) optimized for deep learning, boasting high accuracy and ultra-fast facial authentication performance. It can withstand harsh environments like deserts and strong external impacts, providing excellent installation convenience with its slim and compact design."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Example banner",
        src: (__webpack_require__(91318)/* ["default"] */.A) + "",
        width: "1150",
        height: "606"
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
91318: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bioentry-w3-main-a832fc7955775dd4587ce959bbc1a438.jpg");

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