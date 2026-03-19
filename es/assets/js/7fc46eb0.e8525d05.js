"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["33417"], {
11983: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_audit_logs_mdx_7fc_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-monitoring-audit-logs-mdx-7fc.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_audit_logs_mdx_7fc_namespaceObject = JSON.parse('{"id":"platform/biostar_air/monitoring-audit-logs","title":"Usar registros de auditoría","description":"Esta guía explica cómo supervisar y analizar los registros de auditoría en BioStar Air, aplicar filtros, exportar datos y rastrear la actividad administrativa.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-audit-logs.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/monitoring-audit-logs","permalink":"/docs/es/platform/biostar_air/monitoring-audit-logs","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/monitoring-audit-logs.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-audit-logs","title":"Usar registros de auditoría","description":"Esta guía explica cómo supervisar y analizar los registros de auditoría en BioStar Air, aplicar filtros, exportar datos y rastrear la actividad administrativa.","keywords":["Monitorizar","Registros de auditoría","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Usar registros de eventos","permalink":"/docs/es/platform/biostar_air/monitoring-event-logs"},"next":{"title":"Consultar historial de alertas e informes","permalink":"/docs/es/platform/biostar_air/monitoring-alert-report-history"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-audit-logs.mdx


const frontMatter = {
	id: 'monitoring-audit-logs',
	title: 'Usar registros de auditoría',
	description: 'Esta guía explica cómo supervisar y analizar los registros de auditoría en BioStar Air, aplicar filtros, exportar datos y rastrear la actividad administrativa.',
	keywords: [
		'Monitorizar',
		'Registros de auditoría',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Ver registros de auditoría",
  "id": "ver-registros-de-auditoría",
  "level": 2
}, {
  "value": "Filtrar registros",
  "id": "filtering-event-logs",
  "level": 2
}, {
  "value": "Configurar informes",
  "id": "generatingReports",
  "level": 2
}, {
  "value": "Enmascarar datos personales",
  "id": "dataMasking",
  "level": 2
}, {
  "value": "Otras funciones",
  "id": "otras-funciones",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirDown, IcAirLogfilter, IcAirMask, IcAirRef, IcAirReport, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirDown) _missingMdxReference("IcAirDown", true);
  if (!IcAirLogfilter) _missingMdxReference("IcAirLogfilter", true);
  if (!IcAirMask) _missingMdxReference("IcAirMask", true);
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  if (!IcAirReport) _missingMdxReference("IcAirReport", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Una de las principales ventajas de una plataforma de control de acceso en la nube es la capacidad de supervisar la actividad del sitio en todo momento y desde cualquier lugar. Este documento explica cómo supervisar y analizar los registros de auditoría en BioStar Air."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Vea el siguiente video para un tutorial sobre los registros de auditoría."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "nwIEYyK-uAg"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ver-registros-de-auditoría",
      children: "Ver registros de auditoría"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vaya a ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "audit_logs_submenu",
        product: "air"
      }), " para ver los registros de auditoría. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "monitoring_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "audit_logs_submenu",
        product: "air"
      }), " en la barra lateral izquierda."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-auditlog-list.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Utilice ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "audit_logs_submenu",
        product: "air"
      }), " para rastrear las acciones de los administradores. Cada registro en la lista muestra una tabla con información como la hora de la operación, la dirección de correo electrónico, los privilegios de administrador, el tipo de operación, la ruta del menú y los detalles de la operación."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filtering-event-logs",
      children: "Filtrar registros"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Filtre los registros para encontrar rápidamente la información que necesita. Haga clic en ", (0,jsx_runtime.jsx)(IcAirLogfilter, {
        width: "20",
        height: "20",
        title: "Filters"
      }), " en la parte superior de la lista de registros. Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "logs_filters_action_btn",
        product: "air"
      }), ", seleccione el valor deseado para cada elemento."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-audit-log-list-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_save_btn",
              product: "air"
            }), " o ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action2",
              product: "air"
            }), " para guardar la configuración y que se mantenga al navegar a otro menú. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_apply_btn",
              product: "air"
            }), " o ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action3",
              product: "air"
            }), " para aplicar los cambios solo a la lista actual; se revertirán al salir."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_reset_btn",
              product: "air"
            }), " o ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action1",
              product: "air"
            }), " para cancelar los cambios y volver al estado inicial."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generatingReports",
      children: "Configurar informes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Genere informes de los eventos ocurridos durante un período determinado, filtrando los datos de los registros."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(IcAirReport, {
            width: "20",
            height: "20",
            title: "Report"
          }), " en la parte superior de la lista de registros."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), ", ingrese un nombre para el informe."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-auditlog-report-setting.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione los elementos que desea incluir en el informe."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_add",
            product: "air"
          }), " para guardar el informe configurado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Se crea un informe con el nombre establecido en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-auditlog-report-added.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para descargar el informe generado, haga clic en el botón ", (0,jsx_runtime.jsx)(IcAirDown, {
            width: "20",
            height: "20",
            title: "Download"
          }), " junto al nombre del informe."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_popup_title",
            product: "air"
          }), ", seleccione el período para consultar los eventos y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_popup_button_title",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-auditlog-report-download.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Se envía un enlace de descarga al correo electrónico del administrador."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "report_form_text_title",
          product: "air"
        }), " le permite buscar, editar, descargar o eliminar los informes creados."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dataMasking",
      children: "Enmascarar datos personales"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enmascare los datos personales en los registros para proteger la información sensible. Cuando el enmascaramiento de datos personales está habilitado, información como los nombres de usuario, las direcciones de correo electrónico y los números de teléfono se oculta parcialmente."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para habilitar el enmascaramiento de datos personales, haga clic en el botón ", (0,jsx_runtime.jsx)(IcAirMask, {
        width: "20",
        height: "20",
        title: "Apply Masking"
      }), " en la parte superior de la lista de registros. En el menú emergente, active ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "apply_masking_title",
        product: "air"
      }), " y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "save_btn",
        product: "air"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-auditlog-apply-masking.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "otras-funciones",
      children: "Otras funciones"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Utilice la barra de herramientas en la parte superior de la lista para gestionar los registros de forma más eficiente."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para ordenar los registros por fecha, seleccione un rango de fecha y hora, luego haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "logs_filter_ok_btn",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-auditlog-select-date.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirDown, {
            width: "20",
            height: "20",
            title: "Export"
          }), " para guardar los registros como un archivo CSV o PDF."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirRef, {
            width: "20",
            height: "20",
            title: "Refresh"
          }), " en la parte superior de la lista de registros para actualizarla."]
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