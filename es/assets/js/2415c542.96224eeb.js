"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["51526"], {
54643: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_data_automatic_report_schedule_mdx_241_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-data-automatic-report-schedule-mdx-241.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_data_automatic_report_schedule_mdx_241_namespaceObject = JSON.parse('{"id":"platform/biostar_x/data-automatic-report-schedule","title":"Programación automática de reportes","description":"Configure una programación para generar automáticamente informes personalizados creados al establecer el período DYNAMIC.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/data-automatic-report-schedule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/data-automatic-report-schedule","permalink":"/docs/es/platform/biostar_x/data-automatic-report-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/data-automatic-report-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"data-automatic-report-schedule","title":"Programación automática de reportes","description":"Configure una programación para generar automáticamente informes personalizados creados al establecer el período DYNAMIC.","keywords":["Informe automático","Turno"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Generar reporte","permalink":"/docs/es/platform/biostar_x/data-generate-reports"},"next":{"title":"Ajustes","permalink":"/docs/es/platform/biostar_x/data-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/data-automatic-report-schedule.mdx


const frontMatter = {
	id: 'data-automatic-report-schedule',
	title: 'Programación automática de reportes',
	description: 'Configure una programación para generar automáticamente informes personalizados creados al establecer el período DYNAMIC.',
	keywords: [
		'Informe automático',
		'Turno'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Agregar programación automática",
  "id": "agregar-programación-automática",
  "level": 2
}, {
  "value": "Configuración de información",
  "id": "configuración-de-información",
  "level": 3
}, {
  "value": "Configuración de informes y programación",
  "id": "configuración-de-informes-y-programación",
  "level": 3
}, {
  "value": "Configuración del formato de informe",
  "id": "configuración-del-formato-de-informe",
  "level": 3
}, {
  "value": "Eliminar programación automática",
  "id": "eliminar-programación-automática",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure una programación para generar automáticamente ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.customReport",
        product: "2"
      }), " creados al establecer el período DYNAMIC."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agregar-programación-automática",
      children: "Agregar programación automática"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), " o seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), " en la lista de accesos directos en la parte superior izquierda de la pantalla en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.mainMenu.schedule",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.addSchedule",
            product: "2"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-auto-schedule-main.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.schedule.newSchedulePageTitle"
          }), ", configure cada elemento."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuración-de-información",
      children: "Configuración de información"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure la información básica de la programación de informes automáticos."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-information.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.scheduleName",
          product: "2"
        }), ": Ingrese el nombre de la programación."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuración-de-informes-y-programación",
      children: "Configuración de informes y programación"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure la programación que se generará automáticamente para cada informe."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-report-schedule.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.report",
            product: "2"
          }), ": Seleccione un informe personalizado para generar automáticamente. Solo aparecerán los informes personalizados configurados con período DYNAMIC."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.frequency",
            product: "2"
          }), ": Configure la frecuencia para generar informes automáticamente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.generateTime",
            product: "2"
          }), ": Configure la hora para generar informes automáticamente."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre la creación de informes personalizados, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "data-generate-reports#custom-report",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuración-del-formato-de-informe",
      children: "Configuración del formato de informe"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure el formato para cada informe."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-report-format.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.outputType",
            product: "2"
          }), ": Configure el método de generación automática de informes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.reportTitle",
            product: "2"
          }), ": Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.showTitle",
            product: "2"
          }), " para mostrar el nombre del informe como título en cada página."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.header",
            product: "2"
          }), ": Si se selecciona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.showHeader",
            product: "2"
          }), ", el encabezado se muestra cuando se crea el informe. Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.onEveryPage",
            product: "2"
          }), " para mostrar el encabezado en cada página."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "El encabezado puede variar según los informes."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.footer",
            product: "2"
          }), ": Configure si se mostrarán números de página."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.fileFormat",
            product: "2"
          }), ": Configure el formato de archivo para exportar informes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.apply",
          product: "2"
        }), " para guardar la configuración."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Cuando todas las configuraciones estén completas, establezca la ruta para guardar el informe. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "data-settings",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "eliminar-programación-automática",
      children: "Eliminar programación automática"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), " o seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), " en la lista de accesos directos en la parte superior izquierda de la pantalla en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.mainMenu.schedule",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic en la casilla de verificación de la programación que desea eliminar de la lista de programación automática."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-auto-schedule-remove-item.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.delete"
          }), " en la parte superior derecha de la pantalla."]
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