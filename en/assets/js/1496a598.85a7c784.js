"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8931"], {
2269: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_device_biostation_2_a_troubleshooting_mdx_149_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-biostation-2-a-troubleshooting-mdx-149.json
var site_docs_device_biostation_2_a_troubleshooting_mdx_149_namespaceObject = JSON.parse('{"id":"device/biostation_2a/troubleshooting","title":"문제 해결","description":"장치 사용 중 발생할 수 있는 문제에 대한 점검 사항과 기본 해결 방법을 제공합니다.","source":"@site/docs/device/biostation_2a/troubleshooting.mdx","sourceDirName":"device/biostation_2a","slug":"/device/biostation_2a/troubleshooting","permalink":"/docs/en/device/biostation_2a/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_2a/troubleshooting.mdx","tags":[],"version":"current","frontMatter":{"id":"troubleshooting","title":"문제 해결","description":"장치 사용 중 발생할 수 있는 문제에 대한 점검 사항과 기본 해결 방법을 제공합니다.","keywords":["문제 해결"],"isTranslationMissing":true},"sidebar":"biostation2a","previous":{"title":"이벤트 로그","permalink":"/docs/en/device/biostation_2a/event-log"},"next":{"title":"제품 사양","permalink":"/docs/en/device/biostation_2a/product-specifications"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/device/biostation_2a/troubleshooting.mdx


const frontMatter = {
	id: 'troubleshooting',
	title: '문제 해결',
	description: '장치 사용 중 발생할 수 있는 문제에 대한 점검 사항과 기본 해결 방법을 제공합니다.',
	keywords: [
		'문제 해결'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "고장 신고 전 확인 사항",
  "id": "고장-신고-전-확인-사항",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Faqs} = _components;
  if (!Faqs) _missingMdxReference("Faqs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "장치 사용 중 발생할 수 있는 문제에 대한 점검 사항과 기본 해결 방법을 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "고장-신고-전-확인-사항",
      children: "고장 신고 전 확인 사항"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치를 사용하는 도중 발생할 수 있는 예기치 않은 문제를 해결하는 데 도움이 되는 정보를 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)(Faqs, {})]
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