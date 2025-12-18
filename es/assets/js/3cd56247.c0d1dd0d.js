"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["36736"], {
74709: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_triger_and_action_mdx_3cd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-triger-and-action-mdx-3cd.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_triger_and_action_mdx_3cd_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-triger-and-action","title":"Configuración de activadores y acciones","description":"Configure el dispositivo o BioStar X para realizar la acción deseada cuando ocurra un evento específico en el dispositivo, la entrada o el área.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-triger-and-action.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-triger-and-action","permalink":"/docs/es/platform/biostar_x/settings-triger-and-action","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-triger-and-action.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-triger-and-action","title":"Configuración de activadores y acciones","description":"Configure el dispositivo o BioStar X para realizar la acción deseada cuando ocurra un evento específico en el dispositivo, la entrada o el área.","keywords":["Operación","Activador y acción"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Ajustes De Horario","permalink":"/docs/es/platform/biostar_x/settings-schedule"},"next":{"title":"Importar registros de eventos","permalink":"/docs/es/platform/biostar_x/settings-event-log-import"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-triger-and-action.mdx


const frontMatter = {
	id: 'settings-triger-and-action',
	title: 'Configuración de activadores y acciones',
	description: 'Configure el dispositivo o BioStar X para realizar la acción deseada cuando ocurra un evento específico en el dispositivo, la entrada o el área.',
	keywords: [
		'Operación',
		'Activador y acción'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Ingrese el nombre",
  "id": "ingrese-el-nombre",
  "level": 2
}, {
  "value": "Configurar horario",
  "id": "configurar-horario",
  "level": 2
}, {
  "value": "Usar como Acción Rápida",
  "id": "usar-como-acción-rápida",
  "level": 2
}, {
  "value": "Seleccionar dispositivo, puerta, control de acceso avanzado",
  "id": "select-device-door-advanced-ac",
  "level": 2
}, {
  "value": "Configurar condiciones de evento",
  "id": "configurar-condiciones-de-evento",
  "level": 2
}, {
  "value": "Configurar acciones",
  "id": "configurar-acciones",
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
  }, {Cmd, IcSet2, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSet2) _missingMdxReference("IcSet2", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure el dispositivo o ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " para realizar acciones deseadas cuando ocurran eventos específicos en un dispositivo, puerta o área."]
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
            sid: "setting.menu.triggerAndAction.root"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addTriggerAndAction",
            product: "2"
          }), " en la parte superior izquierda de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-trigger-and-action.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Siga las instrucciones en pantalla para configurar los detalles."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-trigger-and-action-add.png"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "ingrese-el-nombre",
          children: "Ingrese el nombre"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": Ingrese el nombre para las condiciones y las acciones."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "configurar-horario",
          children: "Configurar horario"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.schedule",
            product: "2"
          }), ": Configure el horario en el que se aplicarán las condiciones y acciones."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "button.plusAddSchedule",
                  product: "2"
                }), " para definir un horario si no existe uno adecuado al seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "triggerAction.input",
                  product: "2"
                }), " y crear condiciones personalizadas."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener más información sobre la configuración de horarios, consulta ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-schedule",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "usar-como-acción-rápida",
          children: "Usar como Acción Rápida"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quickAction",
            product: "2"
          }), " para controlar varias puertas a la vez mediante el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quickAction",
            product: "2"
          }), " en la pantalla principal de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". Haga clic en la casilla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.quickAction",
            product: "2"
          }), "."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Esta función solo está disponible cuando la opción ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "triggerAction.schedule",
                  product: "2"
                }), " se configura en ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "Always"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.quickAction",
                  product: "2"
                }), " se puede configurar en ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shell.header.setting"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.menu.customInterface.root"
                }), ". Para más información sobre ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.quickAction",
                  product: "2"
                }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-custom-interface",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "select-device-door-advanced-ac",
          children: "Seleccionar dispositivo, puerta, control de acceso avanzado"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione los elementos para enviar señales de eventos. Se pueden seleccionar varios dispositivos y funcionarán de forma independiente incluso si se pierde la conexión con ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Advanced Access Control"
            }), " solo está disponible con una licencia ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced"
            }), " o superior. Para obtener más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "lo siguiente"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "configurar-condiciones-de-evento",
          children: "Configurar condiciones de evento"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Configure los eventos de condición. Debe seleccionar uno o más eventos."
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Según las opciones seleccionadas en el ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#select-device-door-advanced-ac",
              children: "paso anterior"
            }), ", se activarán listas de eventos distintas."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "configurar-acciones",
          children: "Configurar acciones"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione el dispositivo que realizará las acciones. Elija acciones para dispositivos, puertas o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.action",
            product: "2"
          }), ", configure las señales que se enviarán cuando ocurran los eventos de condición seleccionados. Configure esto en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " para recibir registros por correo electrónico."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Al hacer clic en ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.device",
                  product: "2"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.door",
                  product: "2"
                }), ", o ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "BioStar X"
                }), " se cambiará el contenido de la sección de acciones."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para configurar la información del servidor de correo electrónico, haga clic en ", (0,jsx_runtime.jsx)(IcSet2, {}), " en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "BioStar X"
                }), ". Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.triggerAction.smtpOption",
                  product: "2"
                }), ", ingrese la información del servidor de correo electrónico y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "button.apply",
                  product: "2"
                }), ". Para más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-email-setting#email-contents-setting",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Para información detallada sobre la configuración del servidor de correo electrónico, contacte a su administrador del sistema."
              }), "\n"]
            }), "\n"]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cuando finalices la configuración, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), "."]
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