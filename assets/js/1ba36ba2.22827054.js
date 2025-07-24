"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5724"], {
8830: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_12_door_management_managing_door_and_device_groups_in_airfob_pro_mdx_1ba_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-12-door-management-managing-door-and-device-groups-in-airfob-pro-mdx-1ba.json
var site_docs_platform_biostar_air_12_door_management_managing_door_and_device_groups_in_airfob_pro_mdx_1ba_namespaceObject = JSON.parse('{"id":"platform/biostar_air/door-management-managing-door-and-device-groups-in-airfob-pro","title":"door-management-managing-door-and-device-groups-in-airfob-pro","description":"","source":"@site/docs/platform/biostar_air/12-door-management-managing-door-and-device-groups-in-airfob-pro.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/door-management-managing-door-and-device-groups-in-airfob-pro","permalink":"/docs/platform/biostar_air/door-management-managing-door-and-device-groups-in-airfob-pro","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/12-door-management-managing-door-and-device-groups-in-airfob-pro.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"isTranslationMissing":false}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/12-door-management-managing-door-and-device-groups-in-airfob-pro.mdx


const frontMatter = {
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
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