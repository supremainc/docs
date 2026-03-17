"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["94152"], {
5771: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_service_configuration_mdx_275_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-service-configuration-mdx-275.json
var site_docs_platform_biostar_air_service_configuration_mdx_275_namespaceObject = JSON.parse('{"id":"platform/biostar_air/service-configuration","title":"추가 사이트 구성하기","description":"일광 절약 시간, 이메일 템플릿, 알림·리포트, 커스텀 Wiegand 카드 형식, 근태 관리 등 BioStar Air 서비스 운영에 필요한 세부 기능을 구성하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/service-configuration.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/service-configuration","permalink":"/docs/es/platform/biostar_air/service-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/service-configuration.mdx","tags":[],"version":"current","frontMatter":{"id":"service-configuration","title":"추가 사이트 구성하기","description":"일광 절약 시간, 이메일 템플릿, 알림·리포트, 커스텀 Wiegand 카드 형식, 근태 관리 등 BioStar Air 서비스 운영에 필요한 세부 기능을 구성하는 방법을 안내합니다.","keywords":["서비스 구성","BioStar Air","일광 절약 시간","이메일 템플릿","알림","리포트","Wiegand 카드","근태 관리"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"개인 계정 설정하기","permalink":"/docs/es/platform/biostar_air/account-settings"},"next":{"title":"일광 절약 시간(DST) 구성하기","permalink":"/docs/es/platform/biostar_air/daylight-saving-time"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/service-configuration.mdx


const frontMatter = {
	id: 'service-configuration',
	title: '추가 사이트 구성하기',
	description: '일광 절약 시간, 이메일 템플릿, 알림·리포트, 커스텀 Wiegand 카드 형식, 근태 관리 등 BioStar Air 서비스 운영에 필요한 세부 기능을 구성하는 방법을 안내합니다.',
	keywords: [
		'서비스 구성',
		'BioStar Air',
		'일광 절약 시간',
		'이메일 템플릿',
		'알림',
		'리포트',
		'Wiegand 카드',
		'근태 관리'
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
  }, {DocCardList} = _components;
  if (!DocCardList) _missingMdxReference("DocCardList", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사이트 기본 설정 외에도 시간 정책, 이메일 발송 양식, 알림 수신 방식, 근태 기록 등 BioStar Air 서비스 전반에 영향을 주는 세부 기능을 구성할 수 있습니다. 커스텀 Wiegand 카드 형식을 추가하거나, T&A 운영 방식과 리포트 생성 기준을 직접 설정할 수도 있습니다."
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