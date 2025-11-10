"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["14948"], {
37167: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_securemodule_index_mdx_dd8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-securemodule-index-mdx-dd8.json
var site_docs_device_securemodule_index_mdx_dd8_namespaceObject = JSON.parse('{"id":"device/securemodule/index","title":"Secure Module","description":"Secure Module은 1개 외부 도어 릴레이 제어와 입출력 확장을 위한 분리형 컨트롤러입니다. 슈프리마 IP 출입통제 단말기와 암호화된 통신으로 사용되어 보안을 강화할 수 있으며, 사용 환경에 최적화된 솔루션을 제공합니다.","source":"@site/docs/device/securemodule/index.mdx","sourceDirName":"device/securemodule","slug":"/device/securemodule/","permalink":"/docs/en/device/securemodule/","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/securemodule/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Secure Module","description":"Secure Module은 1개 외부 도어 릴레이 제어와 입출력 확장을 위한 분리형 컨트롤러입니다. 슈프리마 IP 출입통제 단말기와 암호화된 통신으로 사용되어 보안을 강화할 수 있으며, 사용 환경에 최적화된 솔루션을 제공합니다.","keywords":["Secure Module","분리형 컨트롤러"],"isTranslationMissing":true},"sidebar":"securemodule","next":{"title":"안전을 위한 주의 사항","permalink":"/docs/en/device/securemodule/safety-instructions"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/securemodule/index.mdx


const frontMatter = {
	title: 'Secure Module',
	description: 'Secure Module은 1개 외부 도어 릴레이 제어와 입출력 확장을 위한 분리형 컨트롤러입니다. 슈프리마 IP 출입통제 단말기와 암호화된 통신으로 사용되어 보안을 강화할 수 있으며, 사용 환경에 최적화된 솔루션을 제공합니다.',
	keywords: [
		'Secure Module',
		'분리형 컨트롤러'
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Overview} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Overview) _missingMdxReference("Overview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Secure Module은 1개 외부 도어 릴레이 제어와 입출력 확장을 위한 분리형 컨트롤러입니다. 슈프리마 IP 출입통제 단말기와 암호화된 통신으로 사용되어 보안을 강화할 수 있으며, 사용 환경에 최적화된 솔루션을 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/securemodule-main.png",
      className: "none",
      alone: true
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