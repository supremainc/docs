"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["16807"], {
7498: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_service_settings_mdx_5d1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-service-settings-mdx-5d1.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_service_settings_mdx_5d1_namespaceObject = JSON.parse('{"id":"platform/biostar_x/service-settings","title":"Configuración del servicio","description":"Configure y gestione los servicios centrales del sistema desde la Configuración del servicio de BioStar X Service Manager.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/service-settings.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/service-settings","permalink":"/docs/es/platform/biostar_x/service-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/service-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"service-settings","title":"Configuración del servicio","description":"Configure y gestione los servicios centrales del sistema desde la Configuración del servicio de BioStar X Service Manager.","keywords":["Configuración del servicio","Service Manager","BioStar X"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Iniciar y detener el servidor","permalink":"/docs/es/platform/biostar_x/manage-server"},"next":{"title":"Cambiar el puerto","permalink":"/docs/es/platform/biostar_x/change-port"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/service-settings.mdx


const frontMatter = {
	id: 'service-settings',
	title: 'Configuración del servicio',
	description: 'Configure y gestione los servicios centrales del sistema desde la Configuración del servicio de BioStar X Service Manager.',
	keywords: [
		'Configuración del servicio',
		'Service Manager',
		'BioStar X'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Situaciones en las que se necesitan cambios de configuración",
  "id": "when-to-change",
  "level": 2
}, {
  "value": "Cómo cambiar la configuración",
  "id": "how-to-change",
  "level": 2
}, {
  "value": "Composición del servicio",
  "id": "service-composition",
  "level": 2
}, {
  "value": "Servicio web principal de BioStar X",
  "id": "biostar-x-core-web-service",
  "level": 3
}, {
  "value": "Servicio principal de BioStar X",
  "id": "biostar-x-core-service",
  "level": 3
}, {
  "value": "Servicio de puerta de enlace unificada",
  "id": "unified-gateway-service",
  "level": 3
}, {
  "value": "Servicio coordinador de BioStar X",
  "id": "biostar-x-coordinator-service",
  "level": 3
}, {
  "value": "Servidor BioStar X (principal)",
  "id": "biostar-x-server-(main)",
  "level": 3
}, {
  "value": "Servicio de caché de BioStar X",
  "id": "biostar-x-cache-service",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure y gestione los servicios centrales del sistema en el menú ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Configuración del servicio"
      }), " de ", (0,jsx_runtime.jsx)(Cmd, {
        children: "BioStar X Service Manager"
      }), ". Configure cada servicio de forma independiente y verifique los puertos de red y la información de versión."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["La ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Configuración del servicio"
      }), " incluye los siguientes servicios principales."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Servicio web principal de BioStar X"
          }), ": Servicio de interfaz web"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Servicio principal de BioStar X"
          }), ": Funcionalidades centrales del sistema y servicio de comunicación API"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Servicio de puerta de enlace unificada"
          }), ": Servicio de puerta de enlace integrada basado en proxy inverso"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Servicio coordinador de BioStar X"
          }), ": Administración de la información de configuración del sistema distribuido y sincronización de servicios"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Servidor BioStar X (Principal)"
          }), ": Servicio de servidor principal"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Servicio de caché de BioStar X"
          }), ": Almacenamiento en caché de datos y mejora del rendimiento del sistema"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-to-change",
      children: "Situaciones en las que se necesitan cambios de configuración"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie la configuración del servicio en las siguientes situaciones."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Resolver conflictos de puertos"
          }), ": cuando otra aplicación utiliza el mismo puerto y provoca conflictos"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cumplimiento de políticas de seguridad"
          }), ": cuando la política de seguridad de la red de la organización solo permite puertos específicos"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configuración del firewall"
          }), ": cuando sea necesario cambiar a puertos permitidos por el firewall corporativo"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cambios en el entorno del servidor"
          }), ": al cambiar la dirección IP del servidor o la configuración de red"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Optimización del rendimiento"
          }), ": cuando se necesita separar puertos para distribuir el tráfico o equilibrar la carga"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-change",
      children: "Cómo cambiar la configuración"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el menú ", (0,jsx_runtime.jsx)(Cmd, {
            children: "CONFIGURACIÓN DEL SERVICIO"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Service Manager"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Vaya a la sección del servicio que desea cambiar."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Modifique el número de puerto o la dirección necesarios."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Aplicar"
          }), " en la esquina superior derecha de la pantalla para aplicar los cambios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Reinicie el servicio correspondiente para aplicar los cambios tras modificar la configuración."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La compatibilidad para cambiar el puerto varía según el servicio."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Al cambiar los números de puerto, asegúrese de que no existan conflictos con otros servicios o aplicaciones."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "service-composition",
      children: "Composición del servicio"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-core-web-service",
      children: "Servicio web principal de BioStar X"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Este servicio es responsable de la interfaz de usuario basada en web."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-cws.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Puerto HTTPS"
          }), ": puerto de acceso a la interfaz web (predeterminado: 5002)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Puerto WebServerThrift"
          }), ": puerto de comunicación del servidor web basado en el protocolo Thrift (predeterminado: 9310)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-core-service",
      children: "Servicio principal de BioStar X"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Este es el servicio principal que gestiona las funcionalidades centrales del sistema y las comunicaciones API externas."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-core-s.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Puerto WebSocket"
          }), ": puerto WebSocket para comunicación bidireccional en tiempo real (predeterminado: 9002)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Puerto API"
          }), ": puerto de comunicación de la API REST (predeterminado: 9010)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Puerto WebServerFastCgi"
          }), ": puerto de comunicación del servidor web basado en protocolo FastCGI (predeterminado: 9000)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Puerto RPC"
          }), ": puerto de comunicación de llamada a procedimiento remoto (RPC) (predeterminado: 51218)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unified-gateway-service",
      children: "Servicio de puerta de enlace unificada"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Procese eficientemente las solicitudes al servidor ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " mediante proxy inverso, mejore las vulnerabilidades de seguridad de los iframes y minimice los errores de certificado SSL."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-ugs.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          children: "Puerto HTTPS"
        }), ": puerto de comunicación HTTPS de la puerta de enlace integrada (predeterminado: 443)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-coordinator-service",
      children: "Servicio coordinador de BioStar X"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Este servicio se encarga de administrar la información de configuración del sistema distribuido, supervisar el estado del servicio y sincronizar los servicios."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-coordinator-s.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          children: "Puerto de cliente"
        }), ": puerto de comunicación para conexiones de cliente (predeterminado: 21810)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cambie el valor del ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Puerto de cliente"
            }), " y, luego, reinicie manualmente el ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Servicio coordinador de BioStar X"
            }), " en ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Servicios de Windows"
            }), " (", (0,jsx_runtime.jsx)(_components.em, {
              children: "services.msc"
            }), ")."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Después de reiniciar el ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Servicio coordinador de BioStar X"
            }), ", vaya a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Service Manager"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SERVICIOS"
            }), " y reinicie todos los servicios."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Detener todo"
            }), " en la esquina superior derecha de la pantalla. Cuando todos los servicios estén detenidos y el botón ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Iniciar todo"
            }), " esté habilitado, haga clic en él."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-server-(main)",
      children: "Servidor BioStar X (principal)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Este es el servicio central que funciona como servidor principal del sistema."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-server.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Dirección del servidor"
          }), ": dirección IP del servidor principal"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Puerto del servidor"
          }), ": puerto de comunicación general del servidor (predeterminado: 51212)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Puerto SSL del servidor"
          }), ": puerto de comunicación segura cifrada SSL (predeterminado: 51213)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Puerto gRPC del servidor"
          }), ": puerto de comunicación de alto rendimiento basado en el protocolo gRPC (predeterminado: 51219)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-cache-service",
      children: "Servicio de caché de BioStar X"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Este servicio mejora la velocidad de procesamiento de datos y el rendimiento del sistema al almacenar en memoria los datos utilizados con frecuencia."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-cache-s.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Puerto de cliente"
          }), ": puerto de conexión de cliente del servicio de caché (predeterminado: 10800)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Puerto de comunicación"
          }), ": puerto de comunicación interna entre nodos de caché (predeterminado: 47500)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Puerto de descubrimiento"
          }), ": puerto para el descubrimiento automático de nodos de caché distribuidos (predeterminado: 47100)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "change-port",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Aprenda paso a paso a cambiar el puerto predeterminado (443) de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        })
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