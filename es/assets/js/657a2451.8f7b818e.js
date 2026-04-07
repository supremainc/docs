"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["12953"], {
97512: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_i_18_n_es_docusaurus_plugin_content_blog_2026_03_changelog_md_1bd_json__WEBPACK_IMPORTED_MODULE_0__),
  toc: () => (toc)
});
/* ESM import */var _site_docusaurus_docusaurus_plugin_content_blog_default_site_i_18_n_es_docusaurus_plugin_content_blog_2026_03_changelog_md_1bd_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13020);
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84429);


const frontMatter = {
	title: 'March 2026',
	description: 'Provides an overview of key updates to Suprema Docs from February through March.',
	slug: '2026-03-changelog',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This March update improves your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Suprema Docs"
      }), " experience with a more intuitive interface and enhanced search functionality. Meanwhile, the BioStar Air Administrator Guide has been completely restructured to help you understand all features—from user management to access control and video surveillance—at a glance."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Suprema Docs 26.03 Changelogs",
        src: (__webpack_require__(76249)/* ["default"] */.A) + "",
        width: "800",
        height: "394"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
76249: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelogs-202603-c15b7331f076c3d94af5e3a46090a663.png");

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
13020: (function (module) {
module.exports = JSON.parse('{"permalink":"/docs/es/changelog/2026-03-changelog","source":"@site/i18n/es/docusaurus-plugin-content-blog/2026-03-changelog.md","title":"March 2026","description":"Provides an overview of key updates to Suprema Docs from February through March.","date":"2026-04-07T00:48:48.000Z","tags":[],"readingTime":1.89,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"March 2026","description":"Provides an overview of key updates to Suprema Docs from February through March.","slug":"2026-03-changelog","isTranslationMissing":false},"unlisted":false,"nextItem":{"title":"January 2026","permalink":"/docs/es/changelog/2026-01-02-changelog"}}')

}),

}]);