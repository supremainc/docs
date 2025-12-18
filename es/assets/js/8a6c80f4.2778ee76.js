"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["35262"], {
57406: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_site_management_mdx_8a6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-site-management-mdx-8a6.json
var site_docs_platform_biostar_air_site_management_mdx_8a6_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-management","title":"사이트 관리","description":"BioStar Air에서 사이트는 출입 통제 시스템의 핵심 단위로, 사용자가 출입할 수 있는 물리적 위치를 의미합니다. 각 사이트는 고유한 설정, 사용자, 장치 및 접근 권한을 가질 수 있습니다. 관리자는 여러 사이트를 생성하고 관리하여 다양한 위치에서 출입 통제를 효율적으로 운영할 수 있습니다.","source":"@site/docs/platform/biostar_air/site-management.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-management","permalink":"/docs/es/platform/biostar_air/site-management","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-management.mdx","tags":[],"version":"current","frontMatter":{"id":"site-management","title":"사이트 관리","description":"BioStar Air에서 사이트는 출입 통제 시스템의 핵심 단위로, 사용자가 출입할 수 있는 물리적 위치를 의미합니다. 각 사이트는 고유한 설정, 사용자, 장치 및 접근 권한을 가질 수 있습니다. 관리자는 여러 사이트를 생성하고 관리하여 다양한 위치에서 출입 통제를 효율적으로 운영할 수 있습니다.","keywords":["BioStar Air","사이트 관리","출입 통제"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"마이그레이션","permalink":"/docs/es/platform/biostar_air/biostar-air-migration"},"next":{"title":"시작하기","permalink":"/docs/es/platform/biostar_air/getting-started"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/site-management.mdx


const frontMatter = {
	id: 'site-management',
	title: '사이트 관리',
	description: 'BioStar Air에서 사이트는 출입 통제 시스템의 핵심 단위로, 사용자가 출입할 수 있는 물리적 위치를 의미합니다. 각 사이트는 고유한 설정, 사용자, 장치 및 접근 권한을 가질 수 있습니다. 관리자는 여러 사이트를 생성하고 관리하여 다양한 위치에서 출입 통제를 효율적으로 운영할 수 있습니다.',
	keywords: [
		'BioStar Air',
		'사이트 관리',
		'출입 통제'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Overview} = _components;
  if (!Overview) _missingMdxReference("Overview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Air에서 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "사이트"
      }), "는 출입 통제 시스템의 핵심 단위로, 사용자가 출입할 수 있는 물리적 위치를 의미합니다. 각 사이트는 고유한 설정, 사용자, 장치 및 접근 권한을 가질 수 있습니다. 관리자는 여러 사이트를 생성하고 관리하여 다양한 위치에서 출입 통제를 효율적으로 운영할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음 제공하는 문서를 통해 BioStar Air 포털에서 사이트를 효과적으로 관리하는 방법을 알아보세요."
    }), "\n", (0,jsx_runtime.jsx)(Overview, {
      all: true
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