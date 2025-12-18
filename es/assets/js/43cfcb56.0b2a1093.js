"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["70226"], {
61329: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_connection_manager_mdx_43c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-connection-manager-mdx-43c.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_connection_manager_mdx_43c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-connection-manager","title":"Configuración de administración de conexión de dispositivos","description":"Este documento brinda orientación sobre cómo conectar y administrar una gran cantidad de dispositivos a través del servidor de comunicación en BioStar X. Puede administrar hasta 3,000 dispositivos de red distribuyéndolos entre varios servidores.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-connection-manager.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-connection-manager","permalink":"/docs/es/platform/biostar_x/settings-device-connection-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-connection-manager.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-connection-manager","title":"Configuración de administración de conexión de dispositivos","description":"Este documento brinda orientación sobre cómo conectar y administrar una gran cantidad de dispositivos a través del servidor de comunicación en BioStar X. Puede administrar hasta 3,000 dispositivos de red distribuyéndolos entre varios servidores.","keywords":["Administrador de conexión de dispositivos","Servidor de comunicación","Ajustes"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración del agente USB","permalink":"/docs/es/platform/biostar_x/settings-device-usb-agent"},"next":{"title":"Administrar puertas","permalink":"/docs/es/platform/biostar_x/settings-manage-door"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-connection-manager.mdx


const frontMatter = {
	id: 'settings-device-connection-manager',
	title: 'Configuración de administración de conexión de dispositivos',
	description: 'Este documento brinda orientación sobre cómo conectar y administrar una gran cantidad de dispositivos a través del servidor de comunicación en BioStar X. Puede administrar hasta 3,000 dispositivos de red distribuyéndolos entre varios servidores.',
	keywords: [
		'Administrador de conexión de dispositivos',
		'Servidor de comunicación',
		'Ajustes'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Funciones clave",
  "id": "funciones-clave",
  "level": 2
}, {
  "value": "Mover dispositivos a otro servidor",
  "id": "mover-dispositivos-a-otro-servidor",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["El ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.deviceConnectionManager.settingMenuTitle",
        product: "2"
      }), " de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " es una función diseñada para administrar de manera eficiente una gran cantidad de dispositivos en empresas o edificios grandes. Anteriormente, un único servidor podía conectar un máximo de 1,000 dispositivos, pero ahora puede instalar varios servidores de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comunicación"
      }), " en varias computadoras para administrar hasta 3,000 dispositivos de red."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Esta función requiere que la licencia de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Manager"
            }), " esté activada. Para obtener más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Para las especificaciones e instalación del servidor de comunicación, consulte lo siguiente:"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "system-requirements#communication-server",
                  children: "Especificaciones del servidor de comunicación"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "install-communication-server",
                  children: "Instalar servidor de comunicación"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "funciones-clave",
      children: "Funciones clave"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Expansión de servidor"
          }), ": Instale servidores de comunicación en computadoras adicionales además de la principal para conectar más dispositivos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Operación con múltiples servidores"
          }), ": Use hasta tres servidores en conjunto para admitir un total de 3,000 dispositivos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Gestión conveniente de dispositivos"
          }), ": Al agregar nuevos dispositivos, elija a qué servidor conectarlos; también puede mover dispositivos existentes a otro servidor."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Soporte para entornos grandes"
          }), ": Opere una gran cantidad de dispositivos de forma fiable en sitios corporativos o edificios grandes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "El servidor de comunicación es un servicio dedicado que separa la funcionalidad de conexión con los dispositivos del servidor integrado de BioStar X. Se centra únicamente en la comunicación fiable con los dispositivos, mejorando el rendimiento del sistema en general."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mover-dispositivos-a-otro-servidor",
      children: "Mover dispositivos a otro servidor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede mover los dispositivos registrados en el servidor principal u otros servidores de comunicación a otro servidor de comunicación. Esta función ayuda a mantener el estado de conexión de los dispositivos mientras se trasladan entre servidores."
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
            sid: "setting.menu.device.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.deviceConnectionManager"
          }), " en la barra lateral izquierda"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.deviceConnectionManager.followerSelectLabel",
            product: "2"
          }), " de la izquierda, seleccione el servidor donde está registrado el dispositivo que desea mover."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-connection-manager-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.deviceConnectionManager.selectedSelectLabel",
            product: "2"
          }), " de la derecha, seleccione el servidor de destino al que desea trasladar los dispositivos."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-connection-manager-02.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione los dispositivos que desea mover de la lista de dispositivos. Puede seleccionar varios dispositivos."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-connection-manager-03.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Para buscar un dispositivo específico, ingrese palabras clave en el campo de entrada superior. Puede buscar por nombre del dispositivo o número de serie."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.deviceConnectionManager.moveButtonTitle",
            product: "2"
          }), " para mover el dispositivo al servidor de destino."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-connection-manager-04.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verifique el número total de dispositivos a mover, la cantidad de dispositivos conectados por TCP/IP, el nombre del servidor al que se trasladarán y la dirección IP en la ventana de mensajes."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Una vez completada la transferencia, puede verificar el número total de dispositivos trasladados, la cantidad de dispositivos conectados por TCP/IP, y el nombre y la dirección IP del servidor de destino en la ventana de mensajes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si hay dispositivos que no se pudieron mover, la ventana de mensajes mostrará la cantidad de dispositivos que no se movieron y la cantidad de dispositivos conectados por TCP/IP. Para ver una lista de los dispositivos que no se pudieron mover y los motivos de la falla en un archivo CSV, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.download",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si no hay servidores de extensión conectados, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.deviceConnectionManager.selectedSelectLabel",
              product: "2"
            }), " en el lado derecho de la pantalla no se mostrará."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Al seleccionar un servidor, puede ver todos los dispositivos registrados, incluidos los dispositivos conectados por Wiegand y RS-485 en ese servidor."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Al seleccionar un dispositivo o grupo de dispositivos, también se trasladarán los dispositivos subordinados conectados al dispositivo y los dispositivos incluidos en el grupo."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los dispositivos que no están conectados mediante TCP/IP no se pueden mover."
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