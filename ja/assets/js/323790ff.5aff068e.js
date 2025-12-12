"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["87138"], {
97576: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_index_mdx_323_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-index-mdx-323.json
var site_docs_platform_biostar_air_index_mdx_323_namespaceObject = JSON.parse('{"id":"platform/biostar_air/index","title":"BioStar Air","description":"BioStar Air는 생체 인식 보안 분야의 세계적인 선도 기업인 슈프리마가 개발한 클라우드 네이티브 출입 통제 솔루션입니다.","source":"@site/docs/platform/biostar_air/index.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/","permalink":"/docs/ja/platform/biostar_air/","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/index.mdx","tags":[],"version":"current","frontMatter":{"title":"BioStar Air","description":"BioStar Air는 생체 인식 보안 분야의 세계적인 선도 기업인 슈프리마가 개발한 클라우드 네이티브 출입 통제 솔루션입니다.","keywords":["BioStar Air","출입 통제","클라우드 기반 솔루션"],"isTranslationMissing":true},"sidebar":"biostar_air","next":{"title":"BioStar Air란?","permalink":"/docs/ja/platform/biostar_air/what-is-biostar-air"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/index.mdx


const frontMatter = {
	title: 'BioStar Air',
	description: 'BioStar Air는 생체 인식 보안 분야의 세계적인 선도 기업인 슈프리마가 개발한 클라우드 네이티브 출입 통제 솔루션입니다.',
	keywords: [
		'BioStar Air',
		'출입 통제',
		'클라우드 기반 솔루션'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "사용자 가이드 안내",
  "id": "사용자-가이드-안내",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Overview} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Overview) _missingMdxReference("Overview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air는 생체 인식 보안 분야의 세계적인 선도 기업인 슈프리마가 개발한 클라우드 네이티브 출입 통제 솔루션입니다. 온프레미스 인프라의 필요성을 없애도록 설계된 BioStar Air는 어디서나 관리할 수 있는 안전하고 유연하며 확장 가능한 출입 통제를 제공합니다. 클라우드에 직접 연결된 스마트 리더를 통해 기업은 휴대폰이나 브라우저만으로 여러 위치의 출입을 손쉽게 제어할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-main-cover-image.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "사용자-가이드-안내",
      children: "사용자 가이드 안내"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 가이드는 BioStar Air 출입 통제 시스템의 설정, 구성 및 관리에 대한 단계별 지침을 제공합니다. 여러 사이트를 관리하는 관리자, 솔루션을 구현하는 시스템 통합 업체 또는 시설에 출입하는 최종 사용자 모두가 알아야 할 모든 내용을 다루고 있습니다."
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