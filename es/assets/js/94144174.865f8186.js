"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["30388"], {
8380: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_sip_intercom_for_biostaion_3_mdx_941_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-sip-intercom-for-biostaion-3-mdx-941.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_sip_intercom_for_biostaion_3_mdx_941_namespaceObject = JSON.parse('{"id":"platform/biostar_air/sip-intercom-for-biostation3","title":"Configurar el intercomunicador SIP en BioStation 3","description":"Aprende a configurar la función de intercomunicador SIP en BioStation 3 para llamadas de audio bidireccionales, control remoto de puertas mediante comandos DTMF y recepción de llamadas a través de las aplicaciones web y móviles de BioStar Air.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/sip-intercom-for-biostaion3.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/sip-intercom-for-biostation3","permalink":"/docs/es/platform/biostar_air/sip-intercom-for-biostation3","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/sip-intercom-for-biostaion3.mdx","tags":[],"version":"current","frontMatter":{"id":"sip-intercom-for-biostation3","title":"Configurar el intercomunicador SIP en BioStation 3","description":"Aprende a configurar la función de intercomunicador SIP en BioStation 3 para llamadas de audio bidireccionales, control remoto de puertas mediante comandos DTMF y recepción de llamadas a través de las aplicaciones web y móviles de BioStar Air.","keywords":["SIP","Interfono","BioStation 3"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Instalar el hardware","permalink":"/docs/es/platform/biostar_air/hardware-setup"},"next":{"title":"Soporte y configuración de cámaras IP","permalink":"/docs/es/platform/biostar_air/ip-camera-support-and-configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/sip-intercom-for-biostaion3.mdx


const frontMatter = {
	id: 'sip-intercom-for-biostation3',
	title: 'Configurar el intercomunicador SIP en BioStation 3',
	description: 'Aprende a configurar la función de intercomunicador SIP en BioStation 3 para llamadas de audio bidireccionales, control remoto de puertas mediante comandos DTMF y recepción de llamadas a través de las aplicaciones web y móviles de BioStar Air.',
	keywords: [
		'SIP',
		'Interfono',
		'BioStation 3'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "SIP",
  "id": "sip",
  "level": 2
}, {
  "value": "Recibir llamadas",
  "id": "recibir-llamadas",
  "level": 2
}, {
  "value": "Control remoto de puertas",
  "id": "control-remoto-de-puertas",
  "level": 2
}, {
  "value": "Pasos de configuración",
  "id": "pasos-de-configuración",
  "level": 2
}, {
  "value": "Configuración del dispositivo",
  "id": "configuración-del-dispositivo",
  "level": 3
}, {
  "value": "Ajustes de la cuenta",
  "id": "ajustes-de-la-cuenta",
  "level": 3
}, {
  "value": "Proveedores SIP verificados",
  "id": "proveedores-sip-verificados",
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
  }, {Cmd, Image, Step, Steps, TabItem, Tabs} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["A partir de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar Air v2.10"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStation 3"
      }), " (BS3) es compatible con la función de intercomunicador SIP. Esto permite realizar llamadas de voz bidireccionales entre el dispositivo y los administradores, así como la apertura remota de puertas."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Es necesario un servidor SIP para usar esta función; adquiere y configura el servidor por separado. Suprema no ofrece servicios SIP."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sip",
      children: "SIP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["El ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Session Initiation Protocol"
      }), " (SIP) es un protocolo de comunicación ampliamente utilizado para iniciar, mantener y finalizar llamadas de voz y vídeo en tiempo real sobre redes IP. En este contexto, SIP permite que BioStation 3 actúe como punto final de intercomunicador, pudiendo realizar y recibir llamadas a través de un servicio SIP compatible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recibir-llamadas",
      children: "Recibir llamadas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Responde las llamadas recibidas desde BioStation 3 de las siguientes maneras."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Web"
          }), ": Recibe llamadas directamente en un navegador web"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Mobile App"
          }), " (iOS / Android): Recibe llamadas desde cualquier lugar"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-remoto-de-puertas",
      children: "Control remoto de puertas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Al responder una llamada SIP, utiliza los ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comandos DTMF"
      }), " para abrir la puerta:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Teléfono SIP físico"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Aplicación móvil BioStar Air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Interfaz web de BioStar Air"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pasos-de-configuración",
      children: "Pasos de configuración"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura esto en la configuración del dispositivo y en los ajustes de la cuenta del administrador."
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "configuración-del-dispositivo",
          children: "Configuración del dispositivo"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Inicia sesión en el ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://admin.biostarair.com",
                children: "portal de BioStar Air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_submenu",
                product: "air"
              }), " en la barra lateral izquierda."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la lista de dispositivos, haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStation 3"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Ve a la sección ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_intercom_title",
                product: "air"
              }), " y habilita la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_intercom_txt_use_intercom",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Ingresa la información del servidor SIP."
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-intercom-configuration-edit-device.png",
              className: "none",
              caption: true
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_intercom_txt_sip_server_address",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_intercom_txt_sip_server_port",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "device_intercom_txt_sip_username",
                    product: "air"
                  }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "login_password",
                    product: "air"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " para guardar los cambios."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ajustes-de-la-cuenta",
          children: "Ajustes de la cuenta"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Dirige las llamadas desde BioStation 3 a un navegador o a la aplicación."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Cada administrador que necesite recibir llamadas debe iniciar sesión en el portal de BioStar Air o en la aplicación móvil."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Ve a ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Configuración de la cuenta"
              }), "."]
            }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
              groupId: "platform",
              children: [(0,jsx_runtime.jsxs)(TabItem, {
                value: "web",
                label: "Web",
                children: [(0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Haz clic en el icono de perfil de usuario en la esquina superior derecha de la pantalla y selecciona ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "settings_menu",
                    product: "air"
                  }), "."]
                }), (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-device-bs3-sip-account-settings.png"
                })]
              }), (0,jsx_runtime.jsxs)(TabItem, {
                value: "mobile",
                label: "Mobile",
                children: [(0,jsx_runtime.jsxs)(_components.p, {
                  children: ["En la pantalla principal, toca ", (0,jsx_runtime.jsx)(Cmd, {
                    children: "All Menu"
                  }), " en la parte inferior, y luego toca el área del perfil de usuario."]
                }), (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-app-bs3-sip-account-settings.png",
                  width: "38%",
                  className: "none"
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings_menu",
                product: "air"
              }), ", haz clic en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_intercom_title",
                product: "air"
              }), " y añade la información de inicio de sesión del servidor SIP."]
            }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
              groupId: "platform",
              children: [(0,jsx_runtime.jsx)(TabItem, {
                value: "web",
                label: "Web",
                children: (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-device-bs3-sip-account-settings-intercom.png",
                  width: "60%"
                })
              }), (0,jsx_runtime.jsx)(TabItem, {
                value: "mobile",
                label: "Mobile",
                children: (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-device-bs3-sip-account-settings-intercom-mobile.png"
                })
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " para guardar la configuración."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proveedores-sip-verificados",
      children: "Proveedores SIP verificados"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStation 3 ha sido probado y se ha comprobado que funciona correctamente con los proveedores que se indican a continuación."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.ringcentral.com/",
            children: "RingCentral"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.freepbx.org/",
            children: "FreePBX"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.linphone.org/",
            children: "Linphone"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.linhome.org/",
            children: "Linhome"
          })
        }), "\n"]
      }), "\n"]
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