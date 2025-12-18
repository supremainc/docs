"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["64440"], {
76412: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_interphone_mdx_7e1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-interphone-mdx-7e1.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_interphone_mdx_7e1_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-interphone","title":"Configuración del intercomunicador","description":"Esto proporciona orientación sobre la configuración de elementos detallados para el uso del intercomunicador.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-interphone.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-interphone","permalink":"/docs/es/platform/biostar_x/settings-device-details-interphone","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-interphone.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-interphone","title":"Configuración del intercomunicador","description":"Esto proporciona orientación sobre la configuración de elementos detallados para el uso del intercomunicador.","keywords":["Dispositivo","Intercomunicador IP"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración térmica y de máscara","permalink":"/docs/es/platform/biostar_x/settings-device-details-thermal-mask"},"next":{"title":"Configuración de RTSP","permalink":"/docs/es/platform/biostar_x/settings-device-details-rtsp"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-interphone.mdx


const frontMatter = {
	id: 'settings-device-details-interphone',
	title: 'Configuración del intercomunicador',
	description: 'Esto proporciona orientación sobre la configuración de elementos detallados para el uso del intercomunicador.',
	keywords: [
		'Dispositivo',
		'Intercomunicador IP'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Configuración del intercomunicador",
  "id": "ip-interphone-settings",
  "level": 2
}, {
  "value": "Editar números de extensión",
  "id": "edit-extension",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
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
      children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.interphone",
        product: "2"
      }), ", configure opciones detalladas para usar el intercomunicador."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Esta función es compatible con BioStation 3, FaceStation 2 y BioStation A2."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el usuario ha realizado cambios, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), ". Los cambios no se aplicarán al dispositivo si no se guardan."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ip-interphone-settings",
      children: "Configuración del intercomunicador"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure cada opción para registrar el dispositivo en el servidor SIP (Session Initiation Protocol)."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-ipinterphone.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.interphone",
            product: "2"
          }), ": Para usar el dispositivo como intercomunicador, configúrelo en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.enabled",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.ipAddr",
            product: "2"
          }), ": Ingrese la dirección del servidor SIP."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.port",
            product: "2"
          }), ": Ingrese el puerto del servidor SIP. El valor predeterminado es 5060."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.account.new",
            product: "2"
          }), ": Ingrese el nombre de usuario de la cuenta SIP."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.password.new",
            product: "2"
          }), ": Ingrese la contraseña de la cuenta SIP."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.authorization.id",
            product: "2"
          }), ": Ingrese el ID de autorización de la cuenta SIP."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.registration.duration",
            product: "2"
          }), ": Ingrese la duración del registro en segundos. El dispositivo intenta registrarse en el servidor SIP cada vez que vence la duración del registro."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.doorOpenButton",
            product: "2"
          }), ": Especifique un botón para abrir la puerta de entrada durante una llamada."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.transport",
            product: "2"
          }), ": Elija el método de transporte SIP al configurar los ajustes del servidor SIP del intercomunicador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.outbound.proxy.server",
            product: "2"
          }), ": Establézcalo en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.enabled",
            product: "2"
          }), " si utiliza servicios SIP a través de un servidor proxy de salida independiente."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.intercom.outbound.proxy.server.ipAddress",
                product: "2"
              }), ": Ingrese la dirección del servidor proxy de salida."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.intercom.outbound.proxy.server.port",
                product: "2"
              }), ": Ingrese el puerto del servidor proxy de salida."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.resolution",
            product: "2"
          }), ": Seleccione la resolución de la salida de video cuando use el intercomunicador. El valor predeterminado es ", (0,jsx_runtime.jsx)(Cmd, {
            children: "360 x 640"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.display",
            product: "2"
          }), ": Establézcalo en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.disable",
            product: "2"
          }), " para evitar que el dispositivo muestre el número de extensión. Si no se muestra el número de extensión, no podrá distinguir al destinatario en la pantalla de llamada."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension",
            product: "2"
          }), ": Puede registrar hasta 128 números de extensión. Para agregar o editar números de extensión, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.editBtn",
            product: "2"
          }), ". Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#edit-extension",
            children: "lo siguiente"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Las opciones ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.account.new",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.authorization.id",
              product: "2"
            }), " solo pueden incluir números, letras inglesas (distingue mayúsculas y minúsculas) y caracteres especiales."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.registration.duration",
              product: "2"
            }), " se puede configurar entre 60 y 600 segundos."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Las opciones ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.transport",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.resolution",
              product: "2"
            }), " son compatibles con el firmware versión 1.3.0 y posteriores de BioStation 3."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Initiation Protocol"
            }), " (SIP) es un protocolo de comunicación basado en protocolos de Internet para diversas comunicaciones multimedia, como VoIP y videoconferencias. El servidor SIP gestiona dichas comunicaciones y establece conexiones."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edit-extension",
      children: "Editar números de extensión"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Orientación sobre las funciones proporcionadas en la ventana ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.intercom.extension.popup.title",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-ipinterphone-extension.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.sendToTop",
            product: "2"
          }), ": Mueva el número de extensión seleccionado al principio de la lista."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.csvImport",
            product: "2"
          }), ": Importe un archivo CSV que contenga los números de extensión."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.csvExport",
            product: "2"
          }), ": Exporte los números de extensión guardados a un archivo CSV."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.add",
            product: "2"
          }), ": Agregue un número de extensión."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.delete",
            product: "2"
          }), ": Elimine un número de extensión."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.list.reorder",
            product: "2"
          }), ": Cambie el orden de los números de extensión arrastrándolos con el mouse."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los modelos FaceStation 2 y BioStation A2 pueden guardar hasta 16 números de extensión."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "No puede importar un archivo CSV que contenga más números de extensión que el máximo permitido."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los números de extensión solo pueden incluir números, letras inglesas (distingue mayúsculas y minúsculas) y caracteres especiales."
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