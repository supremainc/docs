"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9526"], {
37551: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_partner_install_guide_mdx_f25_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-partner-install-guide-mdx-f25.json
var site_docs_platform_biostar_air_partner_install_guide_mdx_f25_namespaceObject = JSON.parse('{"id":"platform/biostar_air/partner-install-guide","title":"파트너 및 설치 관리자","description":"고객 사이트 생성, 크레딧 분배, 페더레이션 사이트 관리 등 파트너 포털 운영 방법과 SIP 인터폰, IP 카메라, SIO2 모듈 등 하드웨어 설치 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/partner-install-guide.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/partner-install-guide","permalink":"/docs/es/platform/biostar_air/partner-install-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/partner-install-guide.mdx","tags":[],"version":"current","frontMatter":{"id":"partner-install-guide","title":"파트너 및 설치 관리자","description":"고객 사이트 생성, 크레딧 분배, 페더레이션 사이트 관리 등 파트너 포털 운영 방법과 SIP 인터폰, IP 카메라, SIO2 모듈 등 하드웨어 설치 방법을 안내합니다.","keywords":["파트너 포털","AirFob","리셀러"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"리포트 구성하기","permalink":"/docs/es/platform/biostar_air/configuring-reports"},"next":{"title":"파트너 포털 사용하기","permalink":"/docs/es/platform/biostar_air/biostar-air-partner-portal-detailed-use"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/partner-install-guide.mdx


const frontMatter = {
	id: 'partner-install-guide',
	title: '파트너 및 설치 관리자',
	description: '고객 사이트 생성, 크레딧 분배, 페더레이션 사이트 관리 등 파트너 포털 운영 방법과 SIP 인터폰, IP 카메라, SIO2 모듈 등 하드웨어 설치 방법을 안내합니다.',
	keywords: [
		'파트너 포털',
		'AirFob',
		'리셀러'
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
      children: "BioStar Air 파트너 포털은 유통 계약을 체결한 부가 가치 리셀러(VAR)를 위한 전용 플랫폼입니다. 파트너 포털에서 고객 사이트를 생성하고 크레딧을 배포하거나, 페더레이션 사이트를 구성해 여러 사이트를 통합 관리할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SIP 인터폰, IP 카메라, QR 스캐너 등 현장 하드웨어 설치와 네트워크 구성 방법도 함께 안내합니다."
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