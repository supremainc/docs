"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["82958"], {
33561: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_scheduled_unlock_mdx_94b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-advanced-ac-scheduled-unlock-mdx-94b.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_scheduled_unlock_mdx_94b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-advanced-ac-scheduled-unlock","title":"Apertura Programada","description":"Pautas para la configuración de desbloqueo programado. El desbloqueo programado permite abrir puertas en horarios específicos.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-scheduled-unlock.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-advanced-ac-scheduled-unlock","permalink":"/docs/es/platform/biostar_x/settings-advanced-ac-scheduled-unlock","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-advanced-ac-scheduled-unlock.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-advanced-ac-scheduled-unlock","title":"Apertura Programada","description":"Pautas para la configuración de desbloqueo programado. El desbloqueo programado permite abrir puertas en horarios específicos.","keywords":["Control de acceso avanzado","Apertura Programada"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Cierre Programado","permalink":"/docs/es/platform/biostar_x/settings-advanced-ac-scheduled-lock"},"next":{"title":"Alarma Intrusión","permalink":"/docs/es/platform/biostar_x/settings-advanced-ac-intrusion-alarm"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-scheduled-unlock.mdx


const frontMatter = {
	id: 'settings-advanced-ac-scheduled-unlock',
	title: 'Apertura Programada',
	description: 'Pautas para la configuración de desbloqueo programado. El desbloqueo programado permite abrir puertas en horarios específicos.',
	keywords: [
		'Control de acceso avanzado',
		'Apertura Programada'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Registrar desbloqueo programado",
  "id": "addScheduledUnlockZone",
  "level": 2
}, {
  "value": "Guía de opciones de configuración",
  "id": "setting",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Pautas para la configuración de desbloqueo programado. El desbloqueo programado permite abrir puertas en horarios específicos. Esta función mejora el control de acceso y es útil para permitir el ingreso durante determinados períodos de tiempo."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["El desbloqueo programado solo admite el modo ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.globalZone.local",
          product: "2"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addScheduledUnlockZone",
      children: "Registrar desbloqueo programado"
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
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.advancedAc.root"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addZone",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.scheduledUnlock",
            product: "2"
          }), " y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Introduzca el nombre de la función de desbloqueo programado que se va a añadir en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-schedule-unlock.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure los detalles de la función de desbloqueo programado en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), ". Para obtener más información, consulta ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setting",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione el grupo de acceso que puede iniciar el desbloqueo programado en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.forcedUnlock.firstManInTitle",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de completar todas las configuraciones, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting",
      children: "Guía de opciones de configuración"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los detalles de la configuración de desbloqueo programado son los siguientes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.activatedAndDeactivated",
            product: "2"
          }), ": Puedes activar o desactivar temporalmente la configuración."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.forcedUnlock.firstManIn",
            product: "2"
          }), ": Si se define en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.activated",
            product: "2"
          }), ", aparecerá la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.forcedUnlock.firstManInTitle",
            product: "2"
          }), ". Los usuarios del grupo de usuarios seleccionado en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.forcedUnlock.firstManInGroups",
            product: "2"
          }), " deben autenticarse según el horario especificado para iniciar el desbloqueo programado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.selectoption",
            product: "2"
          }), ": Seleccione la puerta o el ascensor al que se aplicará la función de desbloqueo programado."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Al seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.door",
                product: "2"
              }), ", se activa la lista de puertas. Seleccione la puerta a la que se aplicará la función de desbloqueo programado. Se pueden seleccionar varias puertas."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Al seleccionar ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.elevator",
                product: "2"
              }), ", se activa la lista de ascensores. Seleccione el ascensor al que se aplicará la función de desbloqueo programado. Se pueden seleccionar varios ascensores."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.selectoption",
              product: "2"
            }), " aparece cuando se registra un ascensor. Si no hay ascensores registrados, solo aparecerá la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.door",
              product: "2"
            }), ". Para obtener más información sobre la incorporación de ascensores, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-elevators-add",
              children: "lo siguiente"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.schedule",
            product: "2"
          }), ": Selecciona un horario. Si el horario deseado no está disponible, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAddSchedule",
            product: "2"
          }), " para agregar uno."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.floor",
            product: "2"
          }), ": Puede seleccionar los pisos para el ascensor seleccionado."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["En el modo ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.globalZone.local",
              product: "2"
            }), ", puede seleccionar varias puertas para configurar la función de desbloqueo programado."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si selecciona un ascensor que ya forma parte de otra configuración de desbloqueo programado, no podrá duplicar los ajustes en el mismo piso."
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