"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3828"], {
62876: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_control_door_slave_device_mdx_d63_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-control-door-slave-device-mdx-d63.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_control_door_slave_device_mdx_d63_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-door-slave-device","title":"Controlar dispositivos esclavos","description":"Esta guía muestra cómo controlar los dispositivos conectados a la puerta de entrada.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/control-door-slave-device.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-door-slave-device","permalink":"/docs/es/platform/biostar_x/control-door-slave-device","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-door-slave-device.mdx","tags":[],"version":"current","frontMatter":{"id":"control-door-slave-device","title":"Controlar dispositivos esclavos","description":"Esta guía muestra cómo controlar los dispositivos conectados a la puerta de entrada.","keywords":["Monitorizar","Puerta","dispositivo esclavo"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Control de puerta","permalink":"/docs/es/platform/biostar_x/control-door"},"next":{"title":"Controlar ascensores","permalink":"/docs/es/platform/biostar_x/control-elevator"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/control-door-slave-device.mdx


const frontMatter = {
	id: 'control-door-slave-device',
	title: 'Controlar dispositivos esclavos',
	description: 'Esta guía muestra cómo controlar los dispositivos conectados a la puerta de entrada.',
	keywords: [
		'Monitorizar',
		'Puerta',
		'dispositivo esclavo'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Controlar el relé de la puerta",
  "id": "control-relay",
  "level": 2
}, {
  "value": "Desbloquear el relé",
  "id": "relay-open",
  "level": 3
}, {
  "value": "Normalizar el relé",
  "id": "relay-release",
  "level": 3
}, {
  "value": "Bloquear el relé",
  "id": "relay-lock",
  "level": 3
}, {
  "value": "Controlar dispositivo de seguridad",
  "id": "control-arm",
  "level": 2
}, {
  "value": "Controlar la cámara de la puerta",
  "id": "control-camera",
  "level": 2
}, {
  "value": "Revisar video de la cámara",
  "id": "camera-video",
  "level": 3
}, {
  "value": "Ver detalles de la cámara",
  "id": "camera-detail",
  "level": 3
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
  }, {Cmd, Glossary, IcRelayLock, IcRelayUnlock, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Glossary) _missingMdxReference("Glossary", true);
  if (!IcRelayLock) _missingMdxReference("IcRelayLock", true);
  if (!IcRelayUnlock) _missingMdxReference("IcRelayUnlock", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Este documento ofrece una guía sobre cómo controlar los dispositivos por modelo para facilitar el control de los dispositivos conectados a la puerta de entrada. Hay varias funciones disponibles, como bloquear/desbloquear mediante el relé de la puerta, revisar el video de la cámara y la información detallada, y gestionar el estado de seguridad."
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
          children: ["En la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), ", selecciona una puerta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecciona el dispositivo conectado desde la sublista y haz clic con el botón derecho del ratón. Seleccione la función deseada en el menú emergente."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-relay",
      children: "Controlar el relé de la puerta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Controla el relé conectado a la puerta. Haz clic derecho en el dispositivo de relé. Seleccione la función deseada en el menú emergente."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-relay-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(Glossary, {
        termid: "relay"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relay-open",
      children: "Desbloquear el relé"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Desbloquea la puerta mediante el dispositivo de relé conectado a la puerta. Cualquiera puede acceder a la puerta cuando está abierta. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
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
      children: ["Al abrir el relé de la puerta, el icono cambia de ", (0,jsx_runtime.jsx)(IcRelayLock, {}), " a ", (0,jsx_runtime.jsx)(IcRelayUnlock, {}), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La puerta puede abrirse temporalmente para la comodidad de los visitantes externos. Después de abrir la puerta, cambia al modo ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.normalize"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relay-release",
      children: "Normalizar el relé"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Usa el relé para cambiar la puerta al estado ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " y permitir el acceso solo a usuarios autorizados. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relay-lock",
      children: "Bloquear el relé"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Usa el relé conectado a la puerta para cambiarla al estado ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " y evitar el acceso de cualquier persona. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
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
      id: "control-arm",
      children: "Controlar dispositivo de seguridad"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configura o desactiva el estado armado de la puerta mediante el dispositivo de seguridad conectado. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.arm"
      }), " o ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disarm"
      }), " en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-arm-popup.png",
      className: "none"
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
      id: "control-camera",
      children: "Controlar la cámara de la puerta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Controla la cámara conectada a la puerta. Visualiza el video de la cámara en tiempo real o consulta los detalles."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-camera-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para usar esta función, la puerta debe estar conectada a una cámara. Consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "el siguiente"
            }), " para saber cómo integrar la puerta con la cámara."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera-video",
      children: "Revisar video de la cámara"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openVideo"
      }), " en el menú emergente para ver la transmisión de la cámara en tiempo real. Agrega y reproduce el metraje de la cámara seleccionada en la sección de mosaicos de video de ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-camera-control-open-video.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera-detail",
      children: "Ver detalles de la cámara"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " en el menú emergente para ver los detalles de la cámara. Los detalles de la cámara aparecen en el lado derecho de la pantalla."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-camera-details.png"
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