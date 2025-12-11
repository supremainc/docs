"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["56657"], {
37164: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_how_to_guide_data_mdx_ed0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-how-to-guide-data-mdx-ed0.json
var site_docs_platform_biostar_x_how_to_guide_data_mdx_ed0_namespaceObject = JSON.parse('{"id":"platform/biostar_x/how-to-guide-data","title":"데이터","description":"사용자 정보나 원하는 조건의 이벤트를 조회할 수 있고, 보고서를 일정 주기에 맞춰 생성할 수 있습니다.","source":"@site/docs/platform/biostar_x/how-to-guide-data.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/how-to-guide-data","permalink":"/platform/biostar_x/how-to-guide-data","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/how-to-guide-data.mdx","tags":[],"version":"current","frontMatter":{"id":"how-to-guide-data","title":"데이터","description":"사용자 정보나 원하는 조건의 이벤트를 조회할 수 있고, 보고서를 일정 주기에 맞춰 생성할 수 있습니다.","keywords":["데이터"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"이벤트 모니터링하기","permalink":"/platform/biostar_x/monitoring-event"},"next":{"title":"리포트 생성하기","permalink":"/platform/biostar_x/data-generate-reports"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/how-to-guide-data.mdx


const frontMatter = {
	id: 'how-to-guide-data',
	title: '데이터',
	description: '사용자 정보나 원하는 조건의 이벤트를 조회할 수 있고, 보고서를 일정 주기에 맞춰 생성할 수 있습니다.',
	keywords: [
		'데이터'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Overview} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Overview) _missingMdxReference("Overview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.data"
      }), " 메뉴를 사용하면 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에 등록된 사용자 정보나 원하는 조건의 이벤트를 조회할 수 있고, 보고서를 일정 주기에 맞춰 생성할 수 있습니다. 필요시 원하는 리포트를 일정 주기로 자동 생성할 수 있으며 생성된 리포트는 CSV, PDF 파일로 내보내거나 인쇄할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.data"
      }), "를 클릭하거나 화면 왼쪽 상단의 바로 가기 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.data"
      }), "를 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-main.png"
    }), "\n", (0,jsx_runtime.jsx)(Overview, {})]
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