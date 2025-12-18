"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["12403"], {
61168: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_schedule_mdx_25d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-schedule-mdx-25d.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_schedule_mdx_25d_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-schedule","title":"Ajustes De Horario","description":"Configure los horarios de entrada y festivos para gestionar de forma eficiente el control de acceso y la asistencia.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-schedule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-schedule","permalink":"/docs/es/platform/biostar_x/settings-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-schedule","title":"Ajustes De Horario","description":"Configure los horarios de entrada y festivos para gestionar de forma eficiente el control de acceso y la asistencia.","keywords":["Turno","Acceso","Festivo"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Verificar estado de permisos de acceso","permalink":"/docs/es/platform/biostar_x/settings-access-control-ac-status"},"next":{"title":"Configuración de activadores y acciones","permalink":"/docs/es/platform/biostar_x/settings-triger-and-action"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-schedule.mdx


const frontMatter = {
	id: 'settings-schedule',
	title: 'Ajustes De Horario',
	description: 'Configure los horarios de entrada y festivos para gestionar de forma eficiente el control de acceso y la asistencia.',
	keywords: [
		'Turno',
		'Acceso',
		'Festivo'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Registrar horario",
  "id": "addSchedule",
  "level": 2
}, {
  "value": "Guía de opciones para añadir nuevo horario",
  "id": "addScheduleOptions",
  "level": 3
}, {
  "value": "Añadir horario de festivos",
  "id": "addHolidaySchedule",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcCalc, IcEditUL, IcEraser, IcTrash2, IcTslot, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCalc) _missingMdxReference("IcCalc", true);
  if (!IcEditUL) _missingMdxReference("IcEditUL", true);
  if (!IcEraser) _missingMdxReference("IcEraser", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!IcTslot) _missingMdxReference("IcTslot", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía describe cómo operar de manera eficiente el control de acceso y la gestión de asistencia configurando horarios de acceso y festivos. Los horarios son un factor importante que se puede aplicar al control de acceso, lo que permite gestionar los tiempos de acceso de los usuarios y los días festivos."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addSchedule",
      children: "Registrar horario"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.schedule.root"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addSchedule",
            product: "2"
          }), " en la parte superior izquierda de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-schedule-add-btn.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Introduzca o configure cada elemento en la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addNewSchedule",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-schedule-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando termine todos los ajustes, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener información detallada sobre los elementos individuales de la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule.addNewSchedule",
          product: "2"
        }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#addScheduleOptions",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addScheduleOptions",
      children: "Guía de opciones para añadir nuevo horario"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Guía de los elementos individuales que se pueden configurar en la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "schedule.addNewSchedule",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-schedule-add-extend.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": Introduzca el nombre del horario."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.description",
            product: "2"
          }), ": Introduzca una breve descripción del horario."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.type",
            product: "2"
          }), ": Elija un horario semanal o diario. Al seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.daily",
            product: "2"
          }), ", puede seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.cycle",
            product: "2"
          }), " y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.start_date",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-schedule-add-type-daily.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.timeSegment",
            product: "2"
          }), " en el área central para establecer la hora deseada. Una vez completado, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-schedule-input-time-slot.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Puede configurar hasta cinco franjas horarias por día o por semana."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Prográmelas y haga clic en ", (0,jsx_runtime.jsx)(IcTslot, {}), " para copiar las franjas horarias establecidas arriba."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcEditUL, {}), " para modificar una franja horaria. Haga clic en ", (0,jsx_runtime.jsx)(IcEraser, {}), " para eliminar una franja horaria establecida."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.holidaySchedule",
            product: "2"
          }), ": Elija si desea aplicar horarios de festivos. Al seleccionar un elemento, se habilitan los ajustes detallados."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Seleccione la casilla ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.none",
                product: "2"
              }), " para elegir los festivos preestablecidos.  Para añadir más festivos, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.plusAdd",
                product: "2"
              }), " y establezca los festivos."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Franjas horarias de festivos"
              }), ": Haga clic en las franjas horarias para establecer las que se aplicarán en los festivos."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcEditUL, {}), " para modificar una franja horaria. Haga clic en ", (0,jsx_runtime.jsx)(IcEraser, {}), " para eliminar una franja horaria establecida."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcTrash2, {}), " para eliminar los festivos añadidos."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener información detallada sobre cómo añadir horarios de festivos, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#addHolidaySchedule",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addHolidaySchedule",
      children: "Añadir horario de festivos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.schedule.root"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addHoliday",
            product: "2"
          }), " en la parte superior izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Introduzca ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), " y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.description",
            product: "2"
          }), " en la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.addNewHoliday",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-schedule-add-holiday.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus",
            product: "2"
          }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.detail",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcCalc, {}), " para seleccionar la fecha y establecer el número de repeticiones y la duración."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " para registrar el horario de festivos establecido."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcTrash2, {}), " para eliminar un horario de festivos."]
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