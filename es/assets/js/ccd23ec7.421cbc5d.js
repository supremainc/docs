"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["22462"], {
96987: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_report_edit_mdx_ccd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-report-edit-mdx-ccd.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_report_edit_mdx_ccd_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-report-edit","title":"Editar informe de T&A","description":"Esta guía explica cómo modificar los registros de asistencia en los informes generados.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-report-edit.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-report-edit","permalink":"/docs/es/platform/biostar_x/tna-report-edit","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-report-edit.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-report-edit","title":"Editar informe de T&A","description":"Esta guía explica cómo modificar los registros de asistencia en los informes generados.","keywords":["Informe de tiempo y asistencia","Editar"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Ver el informe","permalink":"/docs/es/platform/biostar_x/tna-report"},"next":{"title":"Configurar tiempo y asistencia","permalink":"/docs/es/platform/biostar_x/tna-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-report-edit.mdx


const frontMatter = {
	id: 'tna-report-edit',
	title: 'Editar informe de T&A',
	description: 'Esta guía explica cómo modificar los registros de asistencia en los informes generados.',
	keywords: [
		'Informe de tiempo y asistencia',
		'Editar'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Editar en la lista",
  "id": "editar-en-la-lista",
  "level": 2
}, {
  "value": "Editar en el calendario",
  "id": "editar-en-el-calendario",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Calloutlists, Cmd, IcBw, IcCalc, IcEdit, IcFw, IcList, IcRefresh, IcTrash2, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!IcCalc) _missingMdxReference("IcCalc", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcFw) _missingMdxReference("IcFw", true);
  if (!IcList) _missingMdxReference("IcList", true);
  if (!IcRefresh) _missingMdxReference("IcRefresh", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Haz clic en la tabla del informe generado para modificar los registros de asistencia."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Primero debes generar un informe para modificar los registros de asistencia. Para obtener más información sobre la generación de informes, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-report",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "No se pueden modificar los registros de los usuarios sin un horario de asistencia."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haz clic en el elemento de la lista de informes generados para modificar el registro."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Modifica los registros de asistencia o agrega ausencias según sea necesario."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editar-en-la-lista",
      children: "Editar en la lista"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-edit-list.png"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      className: "svg-none-style",
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timeCard.dateRange",
              product: "2"
            }), ": Configura el período de los registros de asistencia que se mostrará en la lista."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Registro diario de asistencia"
            }), ": Muestra el registro diario de asistencia."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Haz clic en las horas de entrada/salida para agregar, modificar o eliminar registros de asistencia. Después de hacer clic en las horas de entrada/salida, haz clic en el botón ", (0,jsx_runtime.jsx)(IcEdit, {}), " para modificar el registro de asistencia, y haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "button.apply",
                  product: "2"
                }), " para guardar los cambios."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(IcEdit, {}), " para agregar una ausencia. Necesitas un código de tiempo configurado como ausencia para agregar vacaciones. Haz clic en ", (0,jsx_runtime.jsx)(IcTrash2, {}), " en la ausencia agregada del usuario para eliminarla."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Resumen de registros de asistencia"
            }), ": Revisa los registros de asistencia del período especificado."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Actualizar"
            }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ver en calendario"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcRefresh, {}), ": Actualiza la lista de registros de asistencia."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcCalc, {}), ": Visualiza los registros de asistencia en formato de calendario."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre la creación de códigos de tiempo, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "tna-rule-shift-paycode",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editar-en-el-calendario",
      children: "Editar en el calendario"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-edit-calendar.png"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      className: "svg-none-style",
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tipo de evento"
            }), ": Selecciona u oculta los tipos de evento que aparecerán en el calendario."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mes"
            }), ": Haz clic en ", (0,jsx_runtime.jsx)(IcFw, {}), " o ", (0,jsx_runtime.jsx)(IcBw, {}), " para moverte al mes anterior o siguiente."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Registro diario de asistencia"
            }), ": Muestra el registro diario de asistencia."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Haz clic en el horario de trabajo (en blanco) para agregar, modificar o eliminar registros de asistencia. Haz clic en el botón ", (0,jsx_runtime.jsx)(IcEdit, {}), " para modificar el registro de asistencia, y luego haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "button.apply",
                  product: "2"
                }), " para guardar los cambios."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Haz clic en las reglas de trabajo (en gris) para agregar gestión de ausencias de usuario. Necesitas un código de tiempo configurado como ausencia para agregar una ausencia de usuario. Haz clic en ", (0,jsx_runtime.jsx)(IcTrash2, {}), " en la ausencia agregada del usuario para eliminarla."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Resumen de registros de asistencia"
            }), ": Muestra el registro de asistencia mensual."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Actualizar"
            }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ver en lista"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcRefresh, {}), ": Actualiza la lista de registros de asistencia."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcList, {}), ": Visualiza los registros de asistencia en formato de lista."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre la creación de códigos de tiempo, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "tna-rule-shift-paycode",
          children: "lo siguiente"
        }), "."]
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