"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["64755"], {
44654: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_control_zone_mdx_8aa_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-control-zone-mdx-8aa.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_control_zone_mdx_8aa_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-zone","title":"Gestionar el control de acceso avanzado","description":"Controle el control de acceso avanzado y verifique la información detallada.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/control-zone.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-zone","permalink":"/docs/es/platform/biostar_x/control-zone","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-zone.mdx","tags":[],"version":"current","frontMatter":{"id":"control-zone","title":"Gestionar el control de acceso avanzado","description":"Controle el control de acceso avanzado y verifique la información detallada.","keywords":["Monitorizar","Control de acceso avanzado"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Controlar ascensores","permalink":"/docs/es/platform/biostar_x/control-elevator"},"next":{"title":"Mapa de monitoreo","permalink":"/docs/es/platform/biostar_x/monitoring-map"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/control-zone.mdx


const frontMatter = {
	id: 'control-zone',
	title: 'Gestionar el control de acceso avanzado',
	description: 'Controle el control de acceso avanzado y verifique la información detallada.',
	keywords: [
		'Monitorizar',
		'Control de acceso avanzado'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Borrar anti-passback",
  "id": "apb-release",
  "level": 2
}, {
  "value": "Borrar alarma",
  "id": "alarm",
  "level": 2
}, {
  "value": "Activar/Desactivar",
  "id": "zone-revitalizationdisabled",
  "level": 2
}, {
  "value": "Seguridad/Desarmar",
  "id": "security-zone-control",
  "level": 2
}, {
  "value": "Ver informe de muster",
  "id": "confirmation-of-muster-reports",
  "level": 2
}, {
  "value": "Monitorear límite de ocupación",
  "id": "monitoring-of-restrictions-on-the-number-of-people",
  "level": 2
}, {
  "value": "Ver detalles",
  "id": "detail-view",
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
  }, {Cmd, IcDisable, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcDisable) _missingMdxReference("IcDisable", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía explica cómo controlar puertas o dispositivos configurados con control de acceso avanzado. Las funciones proporcionadas permiten respuestas rápidas y una gestión eficiente en caso de problemas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " o seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " en la lista de accesos directos en la esquina superior izquierda de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vaya a la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " en la barra lateral izquierda de la pantalla y seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allZones"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione el control de acceso avanzado configurado y haga clic derecho. Seleccione la función deseada en el menú emergente."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-zone-popup.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Las funciones ofrecidas varían según el tipo de control de acceso avanzado. Los tipos de control de acceso avanzado son los siguientes."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Passback"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Alarma de incendios"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Bloqueo/desbloqueo programado"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Alarma Intrusión"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Esclusa"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Aforo"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Limite de Ocupación"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Lista de Presencia"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre cada control de acceso avanzado, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-advanced-ac",
          children: "lo siguiente"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "apb-release",
      children: "Borrar anti-passback"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Borre la alarma APB de la puerta o dispositivo configurado con ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Passback"
      }), ". Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearApb"
      }), " en el menú emergente. Un mensaje de finalización aparece en la parte superior de la pantalla."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.clearApb"
            }), " solo está disponible para ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Passback"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la configuración de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Passback"
            }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-apb",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Passback"
            }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../reference/glossary#apb",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alarm",
      children: "Borrar alarma"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Borre la alarma que ocurrió en la puerta o dispositivo. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), " en el menú emergente. Un mensaje de finalización aparece en la parte superior de la pantalla."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.clearAlarm"
        }), " no se puede usar en la función de límite de ocupación."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zone-revitalizationdisabled",
      children: "Activar/Desactivar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Active el control de acceso avanzado o desactive las funciones que no se usen. El control de acceso avanzado desactivado muestra el ícono ", (0,jsx_runtime.jsx)(IcDisable, {
        width: "20px",
        height: "20px"
      }), ". Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.enable"
      }), " o ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disable"
      }), " en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-zone-control",
      children: "Seguridad/Desarmar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Active o desactive la seguridad de la puerta o dispositivo. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.arm"
      }), " o ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disarm"
      }), " en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.arm"
            }), " o ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.disarm"
            }), " solo pueden usarse en controles de acceso avanzado configurados para seguridad."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la configuración de seguridad, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-intrusion-alarm",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "confirmation-of-muster-reports",
      children: "Ver informe de muster"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.musterReport"
      }), " para revisar el informe de muster. En la nueva ventana, verifique las horas de entrada y salida de los usuarios y si el tiempo de estancia se ha excedido, mediante la lista de usuarios y los dispositivos configurados con la función de muster."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.musterReport"
            }), " solo está disponible en los muster."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la función de muster, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-muster",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoring-of-restrictions-on-the-number-of-people",
      children: "Monitorear límite de ocupación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Verifique el estado de los dispositivos configurados con la función de límite de ocupación. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.occupancyMonitoring"
      }), " en el menú emergente. En la nueva ventana, vaya al menú ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.setting"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.advancedAc.root"
      }), ". Verifique el estado en la lista ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.occupancy.title",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.occupancyMonitoring"
            }), " solo está disponible para elementos configurados con la función de límite de ocupación."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la configuración del límite de ocupación, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-occupancy",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detail-view",
      children: "Ver detalles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Verifique la información detallada y el historial de eventos del control de acceso avanzado. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " en el menú emergente. La información detallada y el historial de eventos se muestran en el panel derecho de la pantalla."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Información detallada"
          }), ": Verifique el nombre y el estado de la función de control de acceso avanzado, la información del dispositivo, etc."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.recentEvent"
          }), ": Verifique la lista de eventos recientes ocurridos en el control de acceso avanzado seleccionado."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre cada elemento de la sección de detalles del control de acceso avanzado, consulte ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-advanced-ac",
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