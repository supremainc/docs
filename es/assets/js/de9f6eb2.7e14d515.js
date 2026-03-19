"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["49865"], {
52106: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_reports_time_attendance_reports_mdx_de9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-reports-time-attendance-reports-mdx-de9.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_reports_time_attendance_reports_mdx_de9_namespaceObject = JSON.parse('{"id":"platform/biostar_air/reports-time-attendance-reports","title":"Informe de tiempo y asistencia","description":"Esta guía explica cómo configurar el informe básico de tiempo y asistencia en BioStar Air. Permite el seguimiento de horas de trabajo presenciales, opciones de exportación a CSV e integración mediante la API.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/reports-time-attendance-reports.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/reports-time-attendance-reports","permalink":"/docs/es/platform/biostar_air/reports-time-attendance-reports","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/reports-time-attendance-reports.mdx","tags":[],"version":"current","frontMatter":{"id":"reports-time-attendance-reports","title":"Informe de tiempo y asistencia","description":"Esta guía explica cómo configurar el informe básico de tiempo y asistencia en BioStar Air. Permite el seguimiento de horas de trabajo presenciales, opciones de exportación a CSV e integración mediante la API.","keywords":["informes","tiempo y asistencia","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Tiempo y asistencia (T&A)","permalink":"/docs/es/platform/biostar_air/configuring-ta"},"next":{"title":"Crear y programar informes","permalink":"/docs/es/platform/biostar_air/configuring-reports"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/reports-time-attendance-reports.mdx


const frontMatter = {
	id: 'reports-time-attendance-reports',
	title: 'Informe de tiempo y asistencia',
	description: 'Esta guía explica cómo configurar el informe básico de tiempo y asistencia en BioStar Air. Permite el seguimiento de horas de trabajo presenciales, opciones de exportación a CSV e integración mediante la API.',
	keywords: [
		'informes',
		'tiempo y asistencia',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirDown, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirDown) _missingMdxReference("IcAirDown", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["El informe de tiempo y asistencia (T&A) en BioStar Air es un informe sencillo sobre las ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "horas de trabajo presenciales"
      }), ". Muestra las horas de entrada y salida de los empleados según los registros de eventos."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Esta función está diseñada para informes básicos sin opciones de configuración complejas. Los sistemas de tiempo y asistencia pueden tener requisitos diversos según la normativa local. Si el informe integrado de tiempo y asistencia no satisface las necesidades de tu organización, utiliza una solución T&A de terceros. Exporta los registros de eventos en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CSV"
      }), " o integra directamente con software T&A de terceros mediante la API de BioStar Air."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El informe integrado de tiempo y asistencia es intencionalmente sencillo y puede no cumplir todos los requisitos normativos."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si existen reglas complejas de T&A (por ejemplo, leyes laborales locales o esquemas de turnos), utiliza una solución T&A de terceros."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Exporta los registros de eventos en CSV para su procesamiento manual o utiliza la API para integrarlos automáticamente con otros sistemas."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sigue estos pasos para generar un informe de tiempo y asistencia (T&A)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_tab_setting",
            product: "air"
          }), ", haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_report",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_setting",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-usage-settings-site.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haz clic en el interruptor a la derecha para activar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "tna_report",
              product: "air"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), ", escribe un nombre para el informe."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-usage-settings-site-tna-report-config.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona los usuarios o grupos de usuarios que deseas incluir en el informe."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_add",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Se genera un informe descargable en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-usage-settings-site-tna-report-config-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcAirDown, {
            width: "20",
            height: "20",
            title: "Download"
          }), " para descargar el informe."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_popup_title",
            product: "air"
          }), ", selecciona un rango de fecha y hora."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-usage-settings-site-tna-report-config-down.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_popup_button_title",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Una vez generado el informe, se envía un enlace de descarga al correo electrónico del administrador. Descarga el informe desde ese correo en formato PDF o CSV."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Activa ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_template_item",
              product: "air"
            }), " y selecciona los elementos de plantilla que quieras incluir en el informe."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El informe estará disponible para descargar durante 24 horas después de recibir el correo con el enlace de descarga. Tras ese período, ya no estará disponible."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Configura una programación automática en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "alerts.alert_sub_menu_title",
              product: "air"
            }), ". Para más información, consulta ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/settings-alert-report#reportGeneration"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
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