"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["25996"], {
50566: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_plugins_index_mdx_498_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-plugins-index-mdx-498.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_plugins_index_mdx_498_namespaceObject = JSON.parse('{"id":"platform/plugins/index","title":"Guía para desarrolladores de complementos de BioStar X","description":"Esta es una guía completa para desarrollar complementos integrados con la plataforma BioStar X.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/plugins/index.mdx","sourceDirName":"platform/plugins","slug":"/platform/plugins/","permalink":"/docs/es/platform/plugins/","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/plugins/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Guía para desarrolladores de complementos de BioStar X","description":"Esta es una guía completa para desarrollar complementos integrados con la plataforma BioStar X.","keywords":["Plugin","Desarrollo","BioStar X","Integración","API","Puente de sesión"],"hide_table_of_contents":true,"isTranslationMissing":false},"sidebar":"bsxplugins","next":{"title":"Resúmen","permalink":"/docs/es/platform/plugins/plugins-overview"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/plugins/index.mdx


const frontMatter = {
	title: 'Guía para desarrolladores de complementos de BioStar X',
	description: 'Esta es una guía completa para desarrollar complementos integrados con la plataforma BioStar X.',
	keywords: [
		'Plugin',
		'Desarrollo',
		'BioStar X',
		'Integración',
		'API',
		'Puente de sesión'
	],
	hide_table_of_contents: true,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Soporte y consultas",
  "id": "soporte-y-consultas",
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
      children: ["Esta es una guía completa del sistema de complementos ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Proporciona toda la información necesaria, desde los conceptos básicos de los complementos hasta el desarrollo, registro y operación."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si está comenzando a desarrollar complementos ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", lea el documento en el siguiente orden."]
    }), "\n", (0,jsx_runtime.jsx)(Overview, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "soporte-y-consultas",
      children: "Soporte y consultas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para consultas adicionales sobre el desarrollo de complementos o soporte técnico, comuníquese con el equipo de soporte técnico de Suprema (", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:CS@suprema.co.kr",
        children: "CS@suprema.co.kr"
      }), ")."]
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