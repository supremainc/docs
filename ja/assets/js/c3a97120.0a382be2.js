"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["32614"], {
35398: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_facestation_f_2_index_mdx_c3a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-facestation-f-2-index-mdx-c3a.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_facestation_f_2_index_mdx_c3a_namespaceObject = JSON.parse('{"id":"device/facestation_f2/index","title":"FaceStation F2","description":"FaceStation F2 は、ビジュアル認識と赤外線 (IR) 認識を融合した Suprema 独自のフュージョンマッチング技術により、最高レベルの顔認証精度となりすまし顔の検出機能を提供します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/facestation_f2/index.mdx","sourceDirName":"device/facestation_f2","slug":"/device/facestation_f2/","permalink":"/docs/ja/device/facestation_f2/","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_f2/index.mdx","tags":[],"version":"current","frontMatter":{"title":"FaceStation F2","description":"FaceStation F2 は、ビジュアル認識と赤外線 (IR) 認識を融合した Suprema 独自のフュージョンマッチング技術により、最高レベルの顔認証精度となりすまし顔の検出機能を提供します。","keywords":["FaceStation F2","Suprema"],"isTranslationMissing":false},"sidebar":"facestationf2","next":{"title":"安全のための注意事項","permalink":"/docs/ja/device/facestation_f2/safety-instructions"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/facestation_f2/index.mdx


const frontMatter = {
	title: 'FaceStation F2',
	description: 'FaceStation F2 は、ビジュアル認識と赤外線 (IR) 認識を融合した Suprema 独自のフュージョンマッチング技術により、最高レベルの顔認証精度となりすまし顔の検出機能を提供します。',
	keywords: [
		'FaceStation F2',
		'Suprema'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Overview} = _components;
  if (!Overview) _missingMdxReference("Overview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "FaceStation F2 は次世代フュージョン顔認証技術を搭載したマルチモーダル入退室管理端末で、ポストコロナ時代の非接触型セキュリティソリューションの要件に最適化された製品です。 Suprema 独自のフュージョンマッチング技術はビジュアル認識と赤外線（IR）認識を同時に活用し、業界最高レベルの認証精度を実現するとともに、誤認識率（FAR）100億分の1という卓越した性能を誇ります。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Example banner",
        src: (__webpack_require__(1618)/* ["default"] */.A) + "",
        width: "1200",
        height: "778"
      })
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
1618: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/facestationf2-main-36ba08cb74b124a6675d1736385c6880.png");

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