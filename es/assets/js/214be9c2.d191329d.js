"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["15736"], {
55495: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_service_configuration_mdx_214_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-service-configuration-mdx-214.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_service_configuration_mdx_214_namespaceObject = JSON.parse('{"id":"platform/biostar_air/service-configuration","title":"Configuración adicional del sitio","description":"Esta guía explica cómo configurar las funciones detalladas necesarias para operar el servicio BioStar Air, incluyendo la configuración del horario de verano, las plantillas de correo electrónico, las alertas y los informes, los formatos personalizados de tarjetas Wiegand y la gestión de tiempo y asistencia.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/service-configuration.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/service-configuration","permalink":"/docs/es/platform/biostar_air/service-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/service-configuration.mdx","tags":[],"version":"current","frontMatter":{"id":"service-configuration","title":"Configuración adicional del sitio","description":"Esta guía explica cómo configurar las funciones detalladas necesarias para operar el servicio BioStar Air, incluyendo la configuración del horario de verano, las plantillas de correo electrónico, las alertas y los informes, los formatos personalizados de tarjetas Wiegand y la gestión de tiempo y asistencia.","keywords":["Configuración del Servicio","BioStar Air","Horario de Verano (DST)","Plantilla de correo electrónico","alertas","Informe","Tarjeta Wiegand","Asistencia de tiempo"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configuración de la cuenta personal","permalink":"/docs/es/platform/biostar_air/account-settings"},"next":{"title":"Horario de Verano (DST)","permalink":"/docs/es/platform/biostar_air/daylight-saving-time"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/service-configuration.mdx


const frontMatter = {
	id: 'service-configuration',
	title: 'Configuración adicional del sitio',
	description: 'Esta guía explica cómo configurar las funciones detalladas necesarias para operar el servicio BioStar Air, incluyendo la configuración del horario de verano, las plantillas de correo electrónico, las alertas y los informes, los formatos personalizados de tarjetas Wiegand y la gestión de tiempo y asistencia.',
	keywords: [
		'Configuración del Servicio',
		'BioStar Air',
		'Horario de Verano (DST)',
		'Plantilla de correo electrónico',
		'alertas',
		'Informe',
		'Tarjeta Wiegand',
		'Asistencia de tiempo'
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
  }, {DocCardList} = _components;
  if (!DocCardList) _missingMdxReference("DocCardList", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Además de la configuración predeterminada del sitio, puede configurar funciones detalladas que afectan al servicio BioStar Air, como políticas horarias, plantillas de correo electrónico, métodos de entrega de alertas y registros de tiempo y asistencia. Puede agregar formatos personalizados de tarjetas Wiegand o configurar directamente la gestión del tiempo y la asistencia y la forma en que se generan los informes."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(DocCardList, {})]
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