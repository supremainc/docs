"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["89387"], {
34997: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_configure_ai_events_and_rules_mdx_88f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-configure-ai-events-and-rules-mdx-88f.json
var site_docs_device_vionyx_webserver_configure_ai_events_and_rules_mdx_88f_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/configure-ai-events-and-rules","title":"AI 이벤트 및 규칙 설정하기","description":"AI 기반 이벤트를 설정하고 이벤트 발생 시 실행할 규칙을 정의하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/configure-ai-events-and-rules.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/configure-ai-events-and-rules","permalink":"/docs/device/vionyx_webserver/configure-ai-events-and-rules","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/configure-ai-events-and-rules.mdx","tags":[],"version":"current","frontMatter":{"id":"configure-ai-events-and-rules","title":"AI 이벤트 및 규칙 설정하기","description":"AI 기반 이벤트를 설정하고 이벤트 발생 시 실행할 규칙을 정의하는 방법을 안내합니다.","keywords":["AI 이벤트","규칙","사람 추적","라인 통과","침입 감지","인원 카운팅"],"isTranslationMissing":false},"sidebar":"aicamwebserver","previous":{"title":"라이브 영상 보기","permalink":"/docs/device/vionyx_webserver/live-basic"},"next":{"title":"사람 추적 이벤트로 출입자 동선 파악하기","permalink":"/docs/device/vionyx_webserver/configure-people-tracking"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/configure-ai-events-and-rules.mdx


const frontMatter = {
	id: 'configure-ai-events-and-rules',
	title: 'AI 이벤트 및 규칙 설정하기',
	description: 'AI 기반 이벤트를 설정하고 이벤트 발생 시 실행할 규칙을 정의하는 방법을 안내합니다.',
	keywords: [
		'AI 이벤트',
		'규칙',
		'사람 추적',
		'라인 통과',
		'침입 감지',
		'인원 카운팅'
	],
	isTranslationMissing: false
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
      children: "AI 이벤트를 설정하여 카메라가 감지한 특정 상황을 모니터링할 수 있습니다. 사람 추적, 침입 감지, 라인 통과, 인원 카운팅 등 다양한 AI 이벤트를 조합하여 보안 및 운영 요구사항을 충족할 수 있으며, AI 규칙을 통해 이벤트 발생 시 자동으로 오디오 재생이나 웹훅 전송 등의 작업을 수행할 수 있습니다."
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