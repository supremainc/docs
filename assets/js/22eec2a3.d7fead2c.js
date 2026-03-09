"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["62343"], {
10819: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_manage_elevator_mdx_22e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-manage-elevator-mdx-22e.json
var site_docs_platform_biostar_air_manage_elevator_mdx_22e_namespaceObject = JSON.parse('{"id":"platform/biostar_air/manage-elevator","title":"엘리베이터","description":"OM-120 모듈을 사용하여 엘리베이터 층별 출입을 제어합니다. 출입 통제 장치와 통합하여 최대 144층까지 관리할 수 있습니다.","source":"@site/docs/platform/biostar_air/manage-elevator.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/manage-elevator","permalink":"/docs/platform/biostar_air/manage-elevator","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/manage-elevator.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-elevator","title":"엘리베이터","description":"OM-120 모듈을 사용하여 엘리베이터 층별 출입을 제어합니다. 출입 통제 장치와 통합하여 최대 144층까지 관리할 수 있습니다.","keywords":["BioStar Air","OM-120","엘리베이터 출입 통제"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"출입문 스케줄 관리하기","permalink":"/docs/platform/biostar_air/managing-door-schedules"},"next":{"title":"엘리베이터 관리하기","permalink":"/docs/platform/biostar_air/elevator-add-edit-delete"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/manage-elevator.mdx


const frontMatter = {
	id: 'manage-elevator',
	title: '엘리베이터',
	description: 'OM-120 모듈을 사용하여 엘리베이터 층별 출입을 제어합니다. 출입 통제 장치와 통합하여 최대 144층까지 관리할 수 있습니다.',
	keywords: [
		'BioStar Air',
		'OM-120',
		'엘리베이터 출입 통제'
	],
	isTranslationMissing: false
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
      children: "슈프리마의 OM-120 모듈을 사용하여 엘리베이터 출입 통제를 지원합니다. OM-120 모듈을 통해 관리자는 슈프리마 또는 에어팝(Airfob) 출입 통제 장치와 통합하여 층별 출입을 제어할 수 있습니다. 데이지 체인 방식으로 연결된 OM-120 장치를 통해 최대 144층까지 지원합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "엘리베이터 관리에 대한 동영상 가이드를 시청하려면 다음 영상을 참고하세요."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "szCBlVFdrBo"
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