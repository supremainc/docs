"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4678"], {
23970: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_partner_install_guide_mdx_a94_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-partner-install-guide-mdx-a94.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_partner_install_guide_mdx_a94_namespaceObject = JSON.parse('{"id":"platform/biostar_air/partner-install-guide","title":"パートナー／導入管理者","description":"顧客サイトの作成、クレジットの配布、フェデレーションサイトの管理など、パートナーポータルの運用方法と、SIPインターホン、IPカメラ、SIO2モジュールなどのハードウェアの設置方法についてご案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/partner-install-guide.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/partner-install-guide","permalink":"/docs/ja/platform/biostar_air/partner-install-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/partner-install-guide.mdx","tags":[],"version":"current","frontMatter":{"id":"partner-install-guide","title":"パートナー／導入管理者","description":"顧客サイトの作成、クレジットの配布、フェデレーションサイトの管理など、パートナーポータルの運用方法と、SIPインターホン、IPカメラ、SIO2モジュールなどのハードウェアの設置方法についてご案内します。","keywords":["パートナーポータル","AirFob","リセラー"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"レポートの作成とスケジュール設定","permalink":"/docs/ja/platform/biostar_air/configuring-reports"},"next":{"title":"パートナーポータルの使い方","permalink":"/docs/ja/platform/biostar_air/biostar-air-partner-portal-detailed-use"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/partner-install-guide.mdx


const frontMatter = {
	id: 'partner-install-guide',
	title: 'パートナー／導入管理者',
	description: '顧客サイトの作成、クレジットの配布、フェデレーションサイトの管理など、パートナーポータルの運用方法と、SIPインターホン、IPカメラ、SIO2モジュールなどのハードウェアの設置方法についてご案内します。',
	keywords: [
		'パートナーポータル',
		'AirFob',
		'リセラー'
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
      children: "BioStar Airのパートナーポータルは、流通契約を締結した付加価値リセラー（VAR）向けの専用プラットフォームです。 パートナーポータル上で顧客サイトを作成したり、クレジットを配布したり、フェデレーションサイトを構築して複数のサイトを一元管理できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SIPインターホン、IPカメラ、QRスキャナーなどの現場でのハードウェア設置やネットワーク構成の方法についてもご案内します。"
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