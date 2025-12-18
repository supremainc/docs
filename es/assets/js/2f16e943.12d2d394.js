"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["88272"], {
90503: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_device_mdx_2f1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-monitoring-device-mdx-2f1.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_device_mdx_2f1_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-device","title":"Supervisar dispositivo","description":"Supervisa en tiempo real los dispositivos y cámaras conectados a todas las áreas y puertas. La gestión eficiente es posible mediante varias funciones, incluidas la verificación del estado de dispositivos y cámaras, la visualización de información detallada y la reproducción de video de la cámara.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-device.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-device","permalink":"/docs/es/platform/biostar_x/monitoring-device","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-device.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-device","title":"Supervisar dispositivo","description":"Supervisa en tiempo real los dispositivos y cámaras conectados a todas las áreas y puertas. La gestión eficiente es posible mediante varias funciones, incluidas la verificación del estado de dispositivos y cámaras, la visualización de información detallada y la reproducción de video de la cámara.","keywords":["Monitorizar","Dispositivo","Cámara"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Mapa de monitoreo","permalink":"/docs/es/platform/biostar_x/monitoring-map"},"next":{"title":"Supervisar Video","permalink":"/docs/es/platform/biostar_x/monitoring-video"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-device.mdx


const frontMatter = {
	id: 'monitoring-device',
	title: 'Supervisar dispositivo',
	description: 'Supervisa en tiempo real los dispositivos y cámaras conectados a todas las áreas y puertas. La gestión eficiente es posible mediante varias funciones, incluidas la verificación del estado de dispositivos y cámaras, la visualización de información detallada y la reproducción de video de la cámara.',
	keywords: [
		'Monitorizar',
		'Dispositivo',
		'Cámara'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Verificar estado de dispositivos y cámaras",
  "id": "verificar-estado-de-dispositivos-y-cámaras",
  "level": 2
}, {
  "value": "Control del dispositivo",
  "id": "control-del-dispositivo",
  "level": 2
}, {
  "value": "Reconectar dispositivo",
  "id": "reconectar-dispositivo",
  "level": 3
}, {
  "value": "Reiniciar dispositivo",
  "id": "reiniciar-dispositivo",
  "level": 3
}, {
  "value": "Bloquear dispositivo",
  "id": "bloquear-dispositivo",
  "level": 3
}, {
  "value": "Detener acción",
  "id": "detener-acción",
  "level": 3
}, {
  "value": "Vista detallada del dispositivo",
  "id": "vista-detallada-del-dispositivo",
  "level": 3
}, {
  "value": "Control de la cámara",
  "id": "control-de-la-cámara",
  "level": 2
}, {
  "value": "Reproducir video de la cámara",
  "id": "reproducir-video-de-la-cámara",
  "level": 3
}, {
  "value": "Vista detallada de la cámara",
  "id": "vista-detallada-de-la-cámara",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcCamFail, IcCamOk, Image, StatusFail, StatusOK} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCamFail) _missingMdxReference("IcCamFail", true);
  if (!IcCamOk) _missingMdxReference("IcCamOk", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusFail) _missingMdxReference("StatusFail", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Este documento proporciona orientación sobre cómo usar las funciones de supervisión de dispositivos y cámaras. Puedes verificar el estado de dispositivos y cámaras, ver información detallada y reproducir video de la cámara en tiempo real, entre otras funciones. Además, revisa los eventos recientes para gestionar de manera eficiente el estado de dispositivos y cámaras."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para acceder a la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), ", haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " o selecciona ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " en el menú de la parte superior izquierda de la pantalla."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verificar-estado-de-dispositivos-y-cámaras",
      children: "Verificar estado de dispositivos y cámaras"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haz clic en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.device.title"
      }), " en la barra lateral izquierda. Puedes verificar el estado de todos los dispositivos y cámaras. Consulta lo siguiente para conocer el estado de los dispositivos y cámaras."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Ícono de estado"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Descripción"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(StatusOK, {})
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "El dispositivo está conectado correctamente."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(StatusFail, {})
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "El dispositivo está apagado o desconectado."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamOk, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "La cámara está conectada."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamFail, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "La cámara está apagada o desconectada."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-del-dispositivo",
      children: "Control del dispositivo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Selecciona el dispositivo deseado de la lista en la barra lateral izquierda y haz clic derecho. Seleccione la función deseada en el menú emergente."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-device-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reconectar-dispositivo",
      children: "Reconectar dispositivo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si el dispositivo está apagado o desconectado, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.reconnect"
      }), " en el menú emergente. Cuando el dispositivo se reconecte, el ícono de estado cambiará a ", (0,jsx_runtime.jsx)(StatusOK, {}), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La función ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.reconnect"
        }), " no es compatible con dispositivos conectados mediante la opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.deviceToServerConnection",
          product: "2"
        }), ". Para obtener más información sobre el registro de dispositivos, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-adding-devices#setipaddress",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reiniciar-dispositivo",
      children: "Reiniciar dispositivo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para reiniciar el dispositivo, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.reboot"
      }), " en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bloquear-dispositivo",
      children: "Bloquear dispositivo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para bloquear el dispositivo, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.deviceLock"
          }), " en el menú emergente. Aparecerá un mensaje en la parte superior de la pantalla que indica que el bloqueo del dispositivo está en curso. Cuando se complete el bloqueo, el mensaje desaparecerá."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para desbloquear el dispositivo, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.deviceUnlock"
          }), " en el menú emergente. Aparecerá un mensaje en la parte superior de la pantalla que indica que el desbloqueo del dispositivo está en curso. Cuando se complete el desbloqueo, el mensaje desaparecerá."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detener-acción",
      children: "Detener acción"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para detener una acción en curso, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.stopAction"
      }), " en el menú emergente. Aparecerá un mensaje de éxito en la parte superior de la pantalla indicando que la acción se detuvo. Cuando la acción se detenga, el mensaje desaparecerá."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vista-detallada-del-dispositivo",
      children: "Vista detallada del dispositivo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para ver información detallada del dispositivo, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " en el menú emergente. O haz doble clic en el dispositivo. La información detallada del dispositivo aparecerá en el lado derecho de la pantalla."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-device-details.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puedes ver el ID del dispositivo, grupo, nombre del modelo, tiempo de actividad, dirección IP y otros detalles. La lista ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.recentEvent"
      }), " en la parte inferior muestra los eventos recientes en orden cronológico inverso."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-de-la-cámara",
      children: "Control de la cámara"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Selecciona la cámara deseada de la lista en la barra lateral izquierda y haz clic derecho. Seleccione la función deseada en el menú emergente."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reproducir-video-de-la-cámara",
      children: "Reproducir video de la cámara"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Para colocar el video de la cámara en el mosaico de video y supervisarlo en tiempo real, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openVideo"
      }), " en el menú emergente."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "También puedes añadir video de la cámara a los mosaicos de video de las siguientes maneras:"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Haz doble clic en la cámara para reproducir su video desde la barra lateral izquierda."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "También puedes añadir video arrastrando y soltando la cámara en el área de mosaicos de video."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los mosaicos de video se añaden en orden desde la parte superior izquierda de la pantalla. Si no hay espacio para añadir más, aparece un mensaje de error."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información detallada sobre cómo controlar el video y las herramientas que se muestran en él, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vista-detallada-de-la-cámara",
      children: "Vista detallada de la cámara"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " en el menú emergente para ver los detalles de la cámara. Puedes verificar el grupo, la descripción, el ID y la dirección IP de la cámara."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-details.png"
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