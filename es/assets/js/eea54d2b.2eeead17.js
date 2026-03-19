"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["12268"], {
52822: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_alert_report_history_mdx_eea_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-monitoring-alert-report-history-mdx-eea.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_alert_report_history_mdx_eea_namespaceObject = JSON.parse('{"id":"platform/biostar_air/monitoring-alert-report-history","title":"Consultar historial de alertas e informes","description":"Aprende a consultar el historial de alertas e informes generados en BioStar Air.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-alert-report-history.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/monitoring-alert-report-history","permalink":"/docs/es/platform/biostar_air/monitoring-alert-report-history","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/monitoring-alert-report-history.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-alert-report-history","title":"Consultar historial de alertas e informes","description":"Aprende a consultar el historial de alertas e informes generados en BioStar Air.","keywords":["Monitorizar","Historial de alertas","Historial de informes","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Usar registros de auditoría","permalink":"/docs/es/platform/biostar_air/monitoring-audit-logs"},"next":{"title":"Supervisar el estado de la puerta","permalink":"/docs/es/platform/biostar_air/monitoring-door-status"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-alert-report-history.mdx


const frontMatter = {
	id: 'monitoring-alert-report-history',
	title: 'Consultar historial de alertas e informes',
	description: 'Aprende a consultar el historial de alertas e informes generados en BioStar Air.',
	keywords: [
		'Monitorizar',
		'Historial de alertas',
		'Historial de informes',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Antes de Comenzar",
  "id": "antes-de-comenzar",
  "level": 2
}, {
  "value": "Consultar historial de alertas e informes",
  "id": "consultar-historial-de-alertas-e-informes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirRef, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Aprende a consultar el historial de alertas e informes generados en BioStar Air. Los administradores pueden ver las alertas y los informes generados anteriormente a través del portal web y la aplicación móvil."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "antes-de-comenzar",
      children: "Antes de Comenzar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["El historial de alertas e informes muestra únicamente los elementos generados por las reglas de alertas e informes configuradas en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts_history.alerts_history_submenu",
        product: "air"
      }), ". Para obtener más información sobre cómo establecer reglas para crear alertas e informes, consulta ", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/settings-alert-report"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consultar-historial-de-alertas-e-informes",
      children: "Consultar historial de alertas e informes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la barra lateral izquierda, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "monitoring_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts_history.alerts_history_submenu",
        product: "air"
      }), ". Aparecerá el historial de alertas e informes."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-alert-report-history.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Consulta la hora, el tipo y los detalles de cada alerta o informe generado en la lista."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haz clic en el selector de rango de fechas en la esquina superior derecha de la pantalla, establece el período deseado y filtra el historial de alertas e informes para ese intervalo."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcAirRef, {
            title: "Refresh"
          }), " en la parte superior de la lista para actualizarla."]
        }), "\n"]
      }), "\n"]
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