"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["99069"], {
7339: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_usb_agent_mdx_e49_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-usb-agent-mdx-e49.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_usb_agent_mdx_e49_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-usb-agent","title":"Configuración del agente USB","description":"Este documento proporciona instrucciones para usar el dispositivo de enrolamiento de huellas USB y el dispositivo de enrolamiento de tarjetas al acceder a BioStar X en la PC cliente.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-usb-agent.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-usb-agent","permalink":"/docs/es/platform/biostar_x/settings-device-usb-agent","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-usb-agent.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-usb-agent","title":"Configuración del agente USB","description":"Este documento proporciona instrucciones para usar el dispositivo de enrolamiento de huellas USB y el dispositivo de enrolamiento de tarjetas al acceder a BioStar X en la PC cliente.","keywords":["Agente USB"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configuración de registros de imágenes","permalink":"/docs/es/platform/biostar_x/settings-device-image-log"},"next":{"title":"Configuración de administración de conexión de dispositivos","permalink":"/docs/es/platform/biostar_x/settings-device-connection-manager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-usb-agent.mdx


const frontMatter = {
	id: 'settings-device-usb-agent',
	title: 'Configuración del agente USB',
	description: 'Este documento proporciona instrucciones para usar el dispositivo de enrolamiento de huellas USB y el dispositivo de enrolamiento de tarjetas al acceder a BioStar X en la PC cliente.',
	keywords: [
		'Agente USB'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Instale el agente de dispositivo USB",
  "id": "install-usb-agent",
  "level": 2
}, {
  "value": "Configure el orden de bytes del dispositivo de tarjeta USB",
  "id": "usb-card-device-byte-order",
  "level": 2
}, {
  "value": "Configure el puerto del agente USB",
  "id": "configure-el-puerto-del-agente-usb",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
      children: ["Al acceder a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " desde una PC cliente, asegúrese de que los dispositivos USB de enrolamiento de huellas y de tarjetas estén disponibles. Instale el agente de dispositivo USB para hacerlo. Este documento brinda orientación sobre cómo instalar y configurar el agente de dispositivo USB."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "install-usb-agent",
      children: "Instale el agente de dispositivo USB"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Debe instalar el agente de dispositivo USB para acceder a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " desde una PC cliente y usar los dispositivos USB de enrolamiento de huellas y tarjetas."]
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
            sid: "setting.menu.device.usbAgent"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.download",
            product: "2"
          }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.usgAgent.lable",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-usb-agent-download.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ejecute el archivo descargado y siga las instrucciones en pantalla para completar la instalación."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Si ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "User Account Control"
        }), " está habilitado en Windows, el agente USB no se puede iniciar automáticamente. Desactive User Account Control o ejecútelo directamente con privilegios administrativos."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usb-card-device-byte-order",
      children: "Configure el orden de bytes del dispositivo de tarjeta USB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure el orden de bytes del dispositivo de tarjeta USB."
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
            sid: "setting.menu.device.usbAgent"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.usbAgent.byteOrder.title",
            product: "2"
          }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.usbAgent.byteOrder",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-usb-byte-order.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": Procesa los datos de la tarjeta en orden de unidades de byte grandes a pequeñas, almacenando secuencialmente el número de serie de la tarjeta (CSN) de izquierda a derecha."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": Procesa los datos de la tarjeta en orden de unidades de byte pequeñas a grandes, almacenando el número de serie de la tarjeta (CSN)."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez completadas todas las configuraciones, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.usbAgent.byteOrder",
          product: "2"
        }), " se aplica solo a tarjetas CSN."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configure-el-puerto-del-agente-usb",
      children: "Configure el puerto del agente USB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure el puerto usado por el agente USB."
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
            sid: "setting.menu.device.usbAgent"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese el número de puerto en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.usbAgent.port",
            product: "2"
          }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.usbAgent.port.title",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-usb-agent-port.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Una vez completadas todas las configuraciones, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " en la parte inferior de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "El agente USB es un programa que opera por cliente y la configuración del número de puerto permite que el servidor se comunique a través de ese puerto."
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