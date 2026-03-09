"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["37541"], {
17467: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_developer_guide_mdx_962_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-developer-guide-mdx-962.json
var site_docs_platform_biostar_air_developer_guide_mdx_962_namespaceObject = JSON.parse('{"id":"platform/biostar_air/developer-guide","title":"개발자","description":"BioStar Air Cloud API를 사용해 사용자 관리와 크리덴셜 발급을 자동화하는 방법을 안내합니다. 데모 환경 구성부터 API 인증, 사용자 관리 API 활용 및 샘플 코드까지 단계별로 안내합니다.","source":"@site/docs/platform/biostar_air/developer-guide.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/developer-guide","permalink":"/docs/en/platform/biostar_air/developer-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/developer-guide.mdx","tags":[],"version":"current","frontMatter":{"id":"developer-guide","title":"개발자","description":"BioStar Air Cloud API를 사용해 사용자 관리와 크리덴셜 발급을 자동화하는 방법을 안내합니다. 데모 환경 구성부터 API 인증, 사용자 관리 API 활용 및 샘플 코드까지 단계별로 안내합니다.","keywords":["BioStar Air API","개발자","API 통합","사용자 관리"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"민감도 설정하기","permalink":"/docs/en/platform/biostar_air/suprema-pass-app-sensitivity-settings"},"next":{"title":"빠른 시작하기","permalink":"/docs/en/platform/biostar_air/integration-quickstart"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/developer-guide.mdx


const frontMatter = {
	id: 'developer-guide',
	title: '개발자',
	description: 'BioStar Air Cloud API를 사용해 사용자 관리와 크리덴셜 발급을 자동화하는 방법을 안내합니다. 데모 환경 구성부터 API 인증, 사용자 관리 API 활용 및 샘플 코드까지 단계별로 안내합니다.',
	keywords: [
		'BioStar Air API',
		'개발자',
		'API 통합',
		'사용자 관리'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    hr: "hr",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Overview} = _components;
  if (!Overview) _missingMdxReference("Overview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air는 클라우드 기반 RESTful API를 제공합니다. 외부 시스템과의 연동, 사용자 라이프사이클 자동화, 크리덴셜 관리를 API로 처리할 수 있습니다. 데모 환경을 구성하고 인증 흐름을 이해한 뒤, 사용자 관리 API로 실제 통합을 구현하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(Overview, {})]
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