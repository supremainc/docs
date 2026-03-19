"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6754"], {
39454: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_site_management_mdx_e80_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-site-management-mdx-e80.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_site_management_mdx_e80_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-management","title":"Administrar sitios","description":"En BioStar Air, un sitio es la unidad central del sistema de control de acceso y representa una ubicación física a la que pueden acceder los usuarios. Cada sitio puede contar con ajustes, usuarios, dispositivos y permisos de acceso propios. Los administradores pueden crear y administrar varios sitios para gestionar el control de acceso de forma eficiente en distintas ubicaciones.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/site-management.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-management","permalink":"/docs/es/platform/biostar_air/site-management","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-management.mdx","tags":[],"version":"current","frontMatter":{"id":"site-management","title":"Administrar sitios","description":"En BioStar Air, un sitio es la unidad central del sistema de control de acceso y representa una ubicación física a la que pueden acceder los usuarios. Cada sitio puede contar con ajustes, usuarios, dispositivos y permisos de acceso propios. Los administradores pueden crear y administrar varios sitios para gestionar el control de acceso de forma eficiente en distintas ubicaciones.","keywords":["BioStar Air","Administración del Sitio","Control de acceso"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Primeros pasos con la aplicación BioStar Air","permalink":"/docs/es/platform/biostar_air/managing-sites-with-app"},"next":{"title":"Usuarios","permalink":"/docs/es/platform/biostar_air/managing-users"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/site-management.mdx


const frontMatter = {
	id: 'site-management',
	title: 'Administrar sitios',
	description: 'En BioStar Air, un sitio es la unidad central del sistema de control de acceso y representa una ubicación física a la que pueden acceder los usuarios. Cada sitio puede contar con ajustes, usuarios, dispositivos y permisos de acceso propios. Los administradores pueden crear y administrar varios sitios para gestionar el control de acceso de forma eficiente en distintas ubicaciones.',
	keywords: [
		'BioStar Air',
		'Administración del Sitio',
		'Control de acceso'
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
  }, {Overview} = _components;
  if (!Overview) _missingMdxReference("Overview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["En BioStar Air, un ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sitio"
      }), " es la unidad central del sistema de control de acceso y representa una ubicación física a la que pueden acceder los usuarios. Cada sitio puede contar con ajustes, usuarios, dispositivos y permisos de acceso propios. Los administradores pueden crear y administrar varios sitios para gestionar el control de acceso de forma eficiente en distintas ubicaciones."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consulte los siguientes documentos para saber cómo administrar los sitios de manera eficaz en el portal de BioStar Air."
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