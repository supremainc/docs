"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9786"], {
3764: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_settings_device_details_interphone_mdx_7f0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-settings-device-details-interphone-mdx-7f0.json
var site_docs_platform_biostar_x_settings_device_details_interphone_mdx_7f0_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-interphone","title":"IP 인터폰 설정하기","description":"IP 인터폰 사용에 대한 세부 항목 설정을 안내합니다.","source":"@site/docs/platform/biostar_x/settings-device-details-interphone.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-interphone","permalink":"/docs/platform/biostar_x/settings-device-details-interphone","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-interphone.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-interphone","title":"IP 인터폰 설정하기","description":"IP 인터폰 사용에 대한 세부 항목 설정을 안내합니다.","keywords":["장치","IP 인터폰"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"열화상 및 마스크 설정하기","permalink":"/docs/platform/biostar_x/settings-device-details-thermal-mask"},"next":{"title":"UI 알아보기","permalink":"/docs/platform/biostar_x/ui-overview"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/settings-device-details-interphone.mdx


const frontMatter = {
	id: 'settings-device-details-interphone',
	title: 'IP 인터폰 설정하기',
	description: 'IP 인터폰 사용에 대한 세부 항목 설정을 안내합니다.',
	keywords: [
		'장치',
		'IP 인터폰'
	],
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