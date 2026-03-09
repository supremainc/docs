"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["16608"], {
70722: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_site_admin_guide_mdx_c9d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-site-admin-guide-mdx-c9d.json
var site_docs_platform_biostar_air_site_admin_guide_mdx_c9d_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-admin-guide","title":"사이트 관리자","description":"사용자, 장치, 출입문, 엘리베이터 관리부터 출입 권한 구성, 모니터링, 시스템 설정 및 서비스 구성까지 BioStar Air 사이트 운영에 필요한 모든 관리 기능을 안내합니다.","source":"@site/docs/platform/biostar_air/site-admin-guide.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-admin-guide","permalink":"/docs/platform/biostar_air/site-admin-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-admin-guide.mdx","tags":[],"version":"current","frontMatter":{"id":"site-admin-guide","title":"사이트 관리자","description":"사용자, 장치, 출입문, 엘리베이터 관리부터 출입 권한 구성, 모니터링, 시스템 설정 및 서비스 구성까지 BioStar Air 사이트 운영에 필요한 모든 관리 기능을 안내합니다.","keywords":["사이트 관리자","관리","설정"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"보안 체계","permalink":"/docs/platform/biostar_air/security-overview"},"next":{"title":"시작하기","permalink":"/docs/platform/biostar_air/getting-started"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/site-admin-guide.mdx


const frontMatter = {
	id: 'site-admin-guide',
	title: '사이트 관리자',
	description: '사용자, 장치, 출입문, 엘리베이터 관리부터 출입 권한 구성, 모니터링, 시스템 설정 및 서비스 구성까지 BioStar Air 사이트 운영에 필요한 모든 관리 기능을 안내합니다.',
	keywords: [
		'사이트 관리자',
		'관리',
		'설정'
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
  }, {Overview} = _components;
  if (!Overview) _missingMdxReference("Overview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사이트 관리자는 BioStar Air 사이트의 운영 전반을 담당합니다. 사용자 등록과 크리덴셜 관리, 장치, 출입문, 엘리베이터 설정, 출입 권한 및 스케줄 구성, 이벤트 모니터링, 시스템 설정과 서비스 구성까지 필요한 모든 관리 작업을 안내합니다."
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