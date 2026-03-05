"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8886"], {
66332: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_managing_users_mdx_3a8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-managing-users-mdx-3a8.json
var site_docs_platform_biostar_air_managing_users_mdx_3a8_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-users","title":"사용자","description":"BioStar Air 포털에서 사용자 관리 및 대량 작업 수행, 자격 증명(모바일 카드, RFID, 얼굴 인식, PIN, 웹 카드)을 추가 및 구성, 액세스 등급 설정, 사용자 그룹 관리, 유효 기간 구성 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/managing-users.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-users","permalink":"/docs/ja/platform/biostar_air/managing-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-users.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-users","title":"사용자","description":"BioStar Air 포털에서 사용자 관리 및 대량 작업 수행, 자격 증명(모바일 카드, RFID, 얼굴 인식, PIN, 웹 카드)을 추가 및 구성, 액세스 등급 설정, 사용자 그룹 관리, 유효 기간 구성 방법을 안내합니다.","keywords":["사용자 관리","BioStar Air","사용자 그룹","출입 권한"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"사이트 관리하기","permalink":"/docs/ja/platform/biostar_air/site-management"},"next":{"title":"사용자 추가하기","permalink":"/docs/ja/platform/biostar_air/adding-individual-users"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/managing-users.mdx


const frontMatter = {
	id: 'managing-users',
	title: '사용자',
	description: 'BioStar Air 포털에서 사용자 관리 및 대량 작업 수행, 자격 증명(모바일 카드, RFID, 얼굴 인식, PIN, 웹 카드)을 추가 및 구성, 액세스 등급 설정, 사용자 그룹 관리, 유효 기간 구성 방법을 안내합니다.',
	keywords: [
		'사용자 관리',
		'BioStar Air',
		'사용자 그룹',
		'출입 권한'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    hr: "hr",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {DocCardList, YouTube} = _components;
  if (!DocCardList) _missingMdxReference("DocCardList", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air에서 사용자 계정을 생성하고, 다양한 크리덴셜(Mobile Card, RF Card, Web Card, Face, PIN)을 설정하며, 출입 권한과 유효 기간을 구성하는 방법을 안내합니다. 개별 사용자 관리부터 여러 사용자에 대한 일괄 작업, 사용자 그룹 및 필터링 관리까지 사용자 관리의 전반적인 작업을 다룹니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "사용자 관리 기능은 제공하는 다음 동영상을 통해서 더 쉽게 이해할 수 있습니다."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "uhFyrQI-N5U"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(DocCardList, {})]
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