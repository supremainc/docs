"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["89478"], {
65720: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_monitoring_mdx_760_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-corestation-setup-manager-monitoring-mdx-760.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_monitoring_mdx_760_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/monitoring","title":"Monitorizar","description":"Guía para comprobar y controlar el estado en tiempo real de los puertos de entrada, salida y Wiegand.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/monitoring.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/monitoring","permalink":"/docs/es/device/corestation_setup_manager/monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/monitoring.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring","title":"Monitorizar","description":"Guía para comprobar y controlar el estado en tiempo real de los puertos de entrada, salida y Wiegand.","keywords":["Puerto de entrada","Puerto de salida","Puerto Wiegand"],"isTranslationMissing":false},"sidebar":"corestation_setup_manager","previous":{"title":"Configuración del dispositivo","permalink":"/docs/es/device/corestation_setup_manager/configuration"},"next":{"title":"Ajustes","permalink":"/docs/es/device/corestation_setup_manager/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/monitoring.mdx


const frontMatter = {
	id: 'monitoring',
	title: 'Monitorizar',
	description: 'Guía para comprobar y controlar el estado en tiempo real de los puertos de entrada, salida y Wiegand.',
	keywords: [
		'Puerto de entrada',
		'Puerto de salida',
		'Puerto Wiegand'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Estado del puerto de entrada",
  "id": "estado-del-puerto-de-entrada",
  "level": 2
}, {
  "value": "Estado del puerto de salida",
  "id": "estado-del-puerto-de-salida",
  "level": 2
}, {
  "value": "Estado del puerto Wiegand",
  "id": "estado-del-puerto-wiegand",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Compruebe el estado en tiempo real de la entrada y salida de la CoreStation después de completar el cableado. Compruebe también el ID de la tarjeta leído desde el lector Wiegand conectado."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "La cantidad de puertos que se pueden conectar puede variar según el modelo de CoreStation."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "estado-del-puerto-de-entrada",
      children: "Estado del puerto de entrada"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Se muestra el estado de conexión de los puertos de entrada y de entrada auxiliar. Compruebe el estado de conexión del puerto de entrada in situ justo después de completar el cableado."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/monitoring-input.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "estado-del-puerto-de-salida",
      children: "Estado del puerto de salida"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Se muestra el estado de conexión de los puertos de relé y de salida. Seleccione el elemento deseado y haga clic en el interruptor para controlar los puertos de relé y de salida."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/monitoring-output.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "estado-del-puerto-wiegand",
      children: "Estado del puerto Wiegand"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cuando se escanea una tarjeta en el lector Wiegand conectado al puerto Wiegand, el ID de la tarjeta correspondiente aparece en la columna ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/monitoring-wiegand.png",
      alone: true
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