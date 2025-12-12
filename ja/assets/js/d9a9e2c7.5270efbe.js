"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["67548"], {
19145: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_plugins_index_mdx_d9a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-plugins-index-mdx-d9a.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_plugins_index_mdx_d9a_namespaceObject = JSON.parse('{"id":"platform/plugins/index","title":"BioStar X プラグイン開発者ガイド","description":"BioStar X プラットフォームと連携するプラグイン開発のための統合ガイドです。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/plugins/index.mdx","sourceDirName":"platform/plugins","slug":"/platform/plugins/","permalink":"/docs/ja/platform/plugins/","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/plugins/index.mdx","tags":[],"version":"current","frontMatter":{"title":"BioStar X プラグイン開発者ガイド","description":"BioStar X プラットフォームと連携するプラグイン開発のための統合ガイドです。","keywords":["プラグイン","開発","BioStar X","連携","API","セッションブリッジ"],"hide_table_of_contents":true,"isTranslationMissing":false},"sidebar":"bsxplugins","next":{"title":"概要","permalink":"/docs/ja/platform/plugins/plugins-overview"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/plugins/index.mdx


const frontMatter = {
	title: 'BioStar X プラグイン開発者ガイド',
	description: 'BioStar X プラットフォームと連携するプラグイン開発のための統合ガイドです。',
	keywords: [
		'プラグイン',
		'開発',
		'BioStar X',
		'連携',
		'API',
		'セッションブリッジ'
	],
	hide_table_of_contents: true,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "サポートおよびお問い合わせ",
  "id": "サポートおよびお問い合わせ",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Overview} = _components;
  if (!Overview) _missingMdxReference("Overview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " プラグインシステムに関する統合ガイドです。 プラグインの基本概念から実際の開発、登録、運用まで、必要なすべての情報を提供します。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["初めて ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " プラグイン開発を行う場合は、次の順序でドキュメントをお読みください。"]
    }), "\n", (0,jsx_runtime.jsx)(Overview, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "サポートおよびお問い合わせ",
      children: "サポートおよびお問い合わせ"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["プラグイン開発に関して追加のご質問や技術サポートが必要な場合は、Suprema テクニカルサポートチーム (", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:CS@suprema.co.kr",
        children: "CS@suprema.co.kr"
      }), ") までお問い合わせください。"]
    })]
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