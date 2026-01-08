"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["36306"], {
86205: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_manage_device_mdx_b34_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-manage-device-mdx-b34.json
var site_docs_platform_biostar_air_manage_device_mdx_b34_namespaceObject = JSON.parse('{"id":"platform/biostar_air/manage-device","title":"장치 관리","description":"BioStar Air에서 장치 생명주기를 관리하는 모든 방법을 안내합니다. 장치 등록부터 세부 설정 구성, 그룹 관리, 펌웨어 업그레이드, 그리고 생체 인식 및 보안 모듈 구성까지 장치를 효율적으로 운영하는 전체 과정을 다룹니다.","source":"@site/docs/platform/biostar_air/manage-device.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/manage-device","permalink":"/docs/ja/platform/biostar_air/manage-device","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/manage-device.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-device","title":"장치 관리","description":"BioStar Air에서 장치 생명주기를 관리하는 모든 방법을 안내합니다. 장치 등록부터 세부 설정 구성, 그룹 관리, 펌웨어 업그레이드, 그리고 생체 인식 및 보안 모듈 구성까지 장치를 효율적으로 운영하는 전체 과정을 다룹니다.","keywords":["장치 관리","장치 등록","장치 설정","장치 그룹","펌웨어 업그레이드","생체 인식","근태 관리","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"링크패스 크리덴셜","permalink":"/docs/ja/platform/biostar_air/linkpass-credentials"},"next":{"title":"장치 등록하기","permalink":"/docs/ja/platform/biostar_air/register-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/manage-device.mdx


const frontMatter = {
	id: 'manage-device',
	title: '장치 관리',
	description: 'BioStar Air에서 장치 생명주기를 관리하는 모든 방법을 안내합니다. 장치 등록부터 세부 설정 구성, 그룹 관리, 펌웨어 업그레이드, 그리고 생체 인식 및 보안 모듈 구성까지 장치를 효율적으로 운영하는 전체 과정을 다룹니다.',
	keywords: [
		'장치 관리',
		'장치 등록',
		'장치 설정',
		'장치 그룹',
		'펌웨어 업그레이드',
		'생체 인식',
		'근태 관리',
		'BioStar Air'
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
      children: "BioStar Air의 장치 관리는 등록부터 운영까지 모든 단계를 포괄합니다. 모바일 앱에서 장치를 등록하고, 웹 포털에서 네트워크, 인증, 펌웨어 등 세부 설정을 구성하며, 장치를 그룹으로 관리하여 대규모 배포를 효율화할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "생체 인식 기능, 근태 관리, 보안 모듈 구성 등 고급 기능으로 조직의 요구에 맞게 시스템을 커스터마이징할 수 있습니다."
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