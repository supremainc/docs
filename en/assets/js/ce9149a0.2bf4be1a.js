"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["1320"], {
"6326": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_how_to_guide_monitoring_mdx_ce9_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-how-to-guide-monitoring-mdx-ce9.json
var site_docs_platform_biostar_x_how_to_guide_monitoring_mdx_ce9_namespaceObject = JSON.parse('{"id":"platform/biostar_x/how-to-guide-monitoring","title":"모니터링(Monitoring)","description":"BioStar X의 핵심 기능 중 하나인 모니터링(Monitoring) 페이지에서 활용할 수 있는 기능에 대해 안내합니다.","source":"@site/docs/platform/biostar_x/how-to-guide-monitoring.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/how-to-guide-monitoring","permalink":"/docs/en/platform/biostar_x/how-to-guide-monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/how-to-guide-monitoring.mdx","tags":[],"version":"current","frontMatter":{"id":"how-to-guide-monitoring","title":"모니터링(Monitoring)","description":"BioStar X의 핵심 기능 중 하나인 모니터링(Monitoring) 페이지에서 활용할 수 있는 기능에 대해 안내합니다.","keywords":["활용 안내","사용자"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"비주얼 페이스 마이그레이션","permalink":"/docs/en/platform/biostar_x/migration-visual-face"},"next":{"title":"출입문 모니터링하기","permalink":"/docs/en/platform/biostar_x/monitoring-door"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar_x/how-to-guide-monitoring.mdx


const frontMatter = {
	id: 'how-to-guide-monitoring',
	title: '모니터링(Monitoring)',
	description: 'BioStar X의 핵심 기능 중 하나인 모니터링(Monitoring) 페이지에서 활용할 수 있는 기능에 대해 안내합니다.',
	keywords: [
		'활용 안내',
		'사용자'
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, DocCardList} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocCardList) _missingMdxReference("DocCardList", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 핵심 기능 중 하나인 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.header.arena"
      }), " 페이지에서 활용할 수 있는 기능에 대해 안내합니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.header.launcher"
      }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.header.arena"
      }), "을 클릭하거나 화면 왼쪽 상단의 바로가기 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.header.arena"
      }), "을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(DocCardList, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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
"65": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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