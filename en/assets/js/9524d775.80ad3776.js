"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9748"], {
5801: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_index_mdx_952_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-index-mdx-952.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_index_mdx_952_namespaceObject = JSON.parse('{"id":"platform/biostar_air/index","title":"BioStar Air","description":"BioStar Air is a fully cloud-native access control solution built by Suprema, the global leader in biometric security.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/index.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/","permalink":"/docs/en/platform/biostar_air/","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/index.mdx","tags":[],"version":"current","frontMatter":{"title":"BioStar Air","description":"BioStar Air is a fully cloud-native access control solution built by Suprema, the global leader in biometric security.","keywords":["BioStar Air","access control","cloud-based solution"],"isTranslationMissing":false},"sidebar":"biostar_air","next":{"title":"What is BioStar Air?","permalink":"/docs/en/platform/biostar_air/what-is-biostar-air"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/index.mdx


const frontMatter = {
	title: 'BioStar Air',
	description: 'BioStar Air is a fully cloud-native access control solution built by Suprema, the global leader in biometric security.',
	keywords: [
		'BioStar Air',
		'access control',
		'cloud-based solution'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "About This User Guide",
  "id": "about-this-user-guide",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Image, Overview} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Overview) _missingMdxReference("Overview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air is a fully cloud-native access control solution built by Suprema, the global leader in biometric security. Designed to eliminate the need for on-premise infrastructure, BioStar Air provides secure, flexible, and scalable access control that can be managed from anywhere. With smart readers directly connected to the cloud, businesses can control access across multiple locations effortlessly using just a phone or browser."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-main-cover-image.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "about-this-user-guide",
      children: "About This User Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This comprehensive user guide provides step-by-step instructions for setting up, configuring, and managing your BioStar Air access control system. Whether you're an administrator managing multiple sites, a system integrator implementing solutions, or an end user accessing facilities, this guide covers everything you need to know."
    }), "\n", (0,jsx_runtime.jsx)(Overview, {
      all: true
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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