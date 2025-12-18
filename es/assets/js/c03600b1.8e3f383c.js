"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["44495"], {
91951: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_control_door_mdx_c03_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-control-door-mdx-c03.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_control_door_mdx_c03_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-door","title":"Control de puerta","description":"Controla la puerta y consulta la información detallada.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/control-door.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-door","permalink":"/docs/es/platform/biostar_x/control-door","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-door.mdx","tags":[],"version":"current","frontMatter":{"id":"control-door","title":"Control de puerta","description":"Controla la puerta y consulta la información detallada.","keywords":["Monitorizar","Puerta"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Verifica el estado de la puerta","permalink":"/docs/es/platform/biostar_x/check-door-status"},"next":{"title":"Controlar dispositivos esclavos","permalink":"/docs/es/platform/biostar_x/control-door-slave-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/control-door.mdx


const frontMatter = {
	id: 'control-door',
	title: 'Control de puerta',
	description: 'Controla la puerta y consulta la información detallada.',
	keywords: [
		'Monitorizar',
		'Puerta'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*In this case, add a tab to the screen and click <Cmd sid='arena.tree.contextMenu.openVideo' /> again.*/


const toc = [{
  "value": "Abrir puerta",
  "id": "door-open",
  "level": 2
}, {
  "value": "Normalizar puerta",
  "id": "door-unlock",
  "level": 2
}, {
  "value": "Bloquear puerta",
  "id": "door-lock",
  "level": 2
}, {
  "value": "Ver cámara de la puerta",
  "id": "door-camera",
  "level": 2
}, {
  "value": "Restablecer alarma",
  "id": "alarm-reset",
  "level": 2
}, {
  "value": "Restablecer anti-passback",
  "id": "apb-reset",
  "level": 2
}, {
  "value": "Activar o desactivar la alarma",
  "id": "activar-o-desactivar-la-alarma",
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
  }, {Cmd, Glossary, IcArm, IcDisarm, IcRelayLock, IcRelayUnlock, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Glossary) _missingMdxReference("Glossary", true);
  if (!IcArm) _missingMdxReference("IcArm", true);
  if (!IcDisarm) _missingMdxReference("IcDisarm", true);
  if (!IcRelayLock) _missingMdxReference("IcRelayLock", true);
  if (!IcRelayUnlock) _missingMdxReference("IcRelayUnlock", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía describe cómo controlar puertas. Bloquea la puerta durante un periodo determinado, verifica la cámara conectada a la puerta y borra las alarmas que se hayan generado."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Controla la puerta de forma remota para administrar el acceso. Configura la puerta para que permanezca abierta o bloqueada durante un periodo específico."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Monitorea en tiempo real las situaciones de acceso mediante la cámara conectada a la puerta."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["La función ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#apb",
            children: "anti-passback"
          }), " evita el acceso no autorizado y gestiona los registros de acceso con precisión."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " o seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " en la lista de accesos directos en la esquina superior izquierda de la pantalla. Selecciona la puerta que deseas controlar y haz clic derecho. Seleccione la función deseada en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.logUploadType",
              product: "2"
            }), " debe estar habilitada para supervisar o controlar el estado de la puerta de acceso. Activa esta función en la ruta de menú ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.server.root"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.server.server"
            }), ", en la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.general",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.openVideo"
            }), " está vinculada al VMS y requiere la integración de la puerta de acceso y la cámara para poder usarse. Además, esta función está disponible mediante la compra de opciones adicionales con una licencia ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "advanced"
            }), " o superior. Para obtener más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-open",
      children: "Abrir puerta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cualquiera puede acceder a la puerta cuando está abierta. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.unlock"
      }), " en el menú emergente y seleccione la opción deseada."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockOnce"
          }), ": Desbloquea la puerta una vez."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockTimed"
          }), ": Abre la puerta durante un tiempo determinado. Ingresa el tiempo deseado en segundos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockPermanent"
          }), ": Desbloquea la puerta sin límite de tiempo."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cuando la puerta de acceso se abre, el ícono de relé de la puerta cambia del estado ", (0,jsx_runtime.jsx)(IcRelayLock, {}), " a ", (0,jsx_runtime.jsx)(IcRelayUnlock, {}), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La puerta puede abrirse temporalmente para la comodidad de los visitantes externos. Después de abrir la puerta, cambia al modo ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.normalize"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-unlock",
      children: "Normalizar puerta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cambiar la puerta al estado ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " permitirá el acceso solo a usuarios autorizados. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-lock",
      children: "Bloquear puerta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cambiar la puerta al estado ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " impedirá el acceso a cualquier persona. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " en el menú emergente y selecciona la opción deseada."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockTimed"
          }), ": Cambia la puerta a un estado bloqueado durante un período determinado. Ingresa el tiempo deseado en segundos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.lockPermanent"
          }), ": Cambia la puerta a un estado bloqueado sin límite de tiempo."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-camera",
      children: "Ver cámara de la puerta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Consulta la cámara conectada a la puerta. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openVideo"
      }), " en el menú emergente. Agrega y reproduce el metraje de la cámara seleccionada en la sección de mosaicos de video de ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-control-open-video.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["O selecciona la cámara deseada y haz clic con el botón derecho del ratón. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openVideo"
      }), " en el menú emergente para añadir y reproducir la grabación de la cámara seleccionada."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-camera-control-open-video.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si hay más de una cámara conectada a la puerta de acceso, la primera cámara conectada aparece en el mosaico de video."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los mosaicos de video se añaden en orden desde la parte superior izquierda de la pantalla. Si no hay espacio para añadir más, aparece un mensaje de error. "
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la monitorización de video, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Esta función está disponible con opciones adicionales en la licencia ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced"
            }), " o superior. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alarm-reset",
      children: "Restablecer alarma"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Desactiva la alarma que se generó en la puerta. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), " en el menú emergente. Un mensaje de alarma aparece en la esquina superior derecha de la pantalla."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "apb-reset",
      children: "Restablecer anti-passback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Desactiva la alarma APB cuando se produzca una violación de anti-passback."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.clearApb"
          }), " en el menú emergente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.clearApb"
          }), ", revisa la lista de usuarios que han infringido el anti-passback."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-door-monitoring-disable-apb.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona un usuario y haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Un mensaje de finalización aparece en la esquina superior derecha de la pantalla."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(Glossary, {
            termid: "apb"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cómo configurar el ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "anti-passback"
            }), " en la puerta, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-door-add#antipassback",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "activar-o-desactivar-la-alarma",
      children: "Activar o desactivar la alarma"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si la puerta está configurada en modo seguridad, activa o desactiva la seguridad. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.arm"
      }), " o ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disarm"
      }), " en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-arm-status.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Una puerta de acceso en estado de alarma cambia el ícono de estado de alarma de ", (0,jsx_runtime.jsx)(IcDisarm, {}), " a ", (0,jsx_runtime.jsx)(IcArm, {}), ". En ese momento, el ícono ", (0,jsx_runtime.jsx)(IcArm, {}), " también se aplica a la configuración de control de acceso correspondiente."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Esta función está disponible al adquirir opciones adicionales con una licencia ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced"
        }), " o superior, o con una licencia ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enterprise"
        }), " o superior. Para obtener más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detail-view",
      children: "Ver detalles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Consulta la información detallada de la puerta y el historial de eventos. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " en el menú emergente. La información detallada y el historial de eventos de la puerta aparecen en el lado derecho de la pantalla."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-view-details.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Información detallada de la puerta"
          }), ": Consulta el nombre, la ubicación, el estado y la información de los subdispositivos conectados a la puerta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.recentEvent"
          }), ": Consulta la lista de eventos recientes que se produjeron en la puerta de acceso seleccionada."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre cada elemento de la sección de detalles de la puerta, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-door-add",
          children: "the following"
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