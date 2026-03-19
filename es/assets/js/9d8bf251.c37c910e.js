"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["39593"], {
59427: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_troubleshooting_suprema_pass_app_mdx_9d8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-troubleshooting-suprema-pass-app-mdx-9d8.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_troubleshooting_suprema_pass_app_mdx_9d8_namespaceObject = JSON.parse('{"id":"platform/biostar_air/troubleshooting-suprema-pass-app","title":"Solucionar problemas con la tarjeta móvil","description":"Resuelva problemas de autenticación de la tarjeta móvil, permisos de Bluetooth y de ubicación, y fallas de conexión en la app Suprema Pass.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/troubleshooting-suprema-pass-app.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/troubleshooting-suprema-pass-app","permalink":"/docs/es/platform/biostar_air/troubleshooting-suprema-pass-app","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/troubleshooting-suprema-pass-app.mdx","tags":[],"version":"current","frontMatter":{"id":"troubleshooting-suprema-pass-app","title":"Solucionar problemas con la tarjeta móvil","description":"Resuelva problemas de autenticación de la tarjeta móvil, permisos de Bluetooth y de ubicación, y fallas de conexión en la app Suprema Pass.","keywords":["Solución de Problemas","Tarjeta móvil","Airfob"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Solución de problemas al agregar usuarios en masa","permalink":"/docs/es/platform/biostar_air/troubleshooting-adding-users-in-bulk"},"next":{"title":"¿Por qué se me solicita activar los servicios de ubicación?","permalink":"/docs/es/platform/biostar_air/location-services-issues"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/troubleshooting-suprema-pass-app.mdx


const frontMatter = {
	id: 'troubleshooting-suprema-pass-app',
	title: 'Solucionar problemas con la tarjeta móvil',
	description: 'Resuelva problemas de autenticación de la tarjeta móvil, permisos de Bluetooth y de ubicación, y fallas de conexión en la app Suprema Pass.',
	keywords: [
		'Solución de Problemas',
		'Tarjeta móvil',
		'Airfob'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Contacte al administrador de BioStar Air",
  "id": "contactbsairAdmin",
  "level": 2
}, {
  "value": "¿Se eliminó la tarjeta móvil?",
  "id": "mobileCardDeleted",
  "level": 2
}, {
  "value": "Guía de solución de problemas paso a paso",
  "id": "troubleshootingSteps",
  "level": 2
}, {
  "value": "¿Apareció un mensaje de error en la app Suprema Pass?",
  "id": "apareció-un-mensaje-de-error-en-la-app-suprema-pass",
  "level": 3
}, {
  "value": "¿Está activado el Bluetooth en su dispositivo móvil?",
  "id": "está-activado-el-bluetooth-en-su-dispositivo-móvil",
  "level": 3
}, {
  "value": "Conceder permiso de ubicación a la app Suprema Pass",
  "id": "conceder-permiso-de-ubicación-a-la-app-suprema-pass",
  "level": 3
}, {
  "value": "Verifique las conexiones de red celular y Wi‑Fi",
  "id": "verifique-las-conexiones-de-red-celular-y-wifi",
  "level": 3
}, {
  "value": "¿Está usando el método de conexión seleccionado?",
  "id": "está-usando-el-método-de-conexión-seleccionado",
  "level": 3
}, {
  "value": "¿El dispositivo móvil vibró durante la autenticación?",
  "id": "el-dispositivo-móvil-vibró-durante-la-autenticación",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcFunc, IcHamberg, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcFunc) _missingMdxReference("IcFunc", true);
  if (!IcHamberg) _missingMdxReference("IcHamberg", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Si la tarjeta móvil se autentica con el dispositivo pero la puerta no se abre, siga estos pasos para resolver el problema."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contactbsairAdmin",
      children: "Contacte al administrador de BioStar Air"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "El administrador del sitio puede ayudar con la reemisión de tarjetas móviles, problemas temporales del dispositivo móvil y problemas de configuración."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-contact-admin.png",
      width: "78%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la app Suprema Pass en su dispositivo móvil, toque el icono ", (0,jsx_runtime.jsx)(IcFunc, {}), " debajo de la tarjeta móvil."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel inferior, toque ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Contactar al administrador"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando aparezca la ventana emergente, ingrese un título y un mensaje."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Enviar"
          }), " para enviar un mensaje al administrador."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mobileCardDeleted",
      children: "¿Se eliminó la tarjeta móvil?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si cambió su dispositivo móvil o reinstaló la app Suprema Pass, todas las tarjetas móviles se eliminaron por motivos de seguridad. Comuníquese con los siguientes contactos para solicitar la reemisión de las tarjetas móviles."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Company Spaces"
          }), ": Recursos Humanos, TI, seguridad u operaciones"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Shared Spaces"
          }), ": administrador regional o equipo de servicio al cliente"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshootingSteps",
      children: "Guía de solución de problemas paso a paso"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "apareció-un-mensaje-de-error-en-la-app-suprema-pass",
          children: "¿Apareció un mensaje de error en la app Suprema Pass?"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Si la puerta no se abre, intente autenticarse nuevamente en la app Suprema Pass."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Si aparece un mensaje de error, haga una captura de pantalla y compártala con el administrador del sitio."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "está-activado-el-bluetooth-en-su-dispositivo-móvil",
          children: "¿Está activado el Bluetooth en su dispositivo móvil?"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "La tarjeta móvil depende de la comunicación por Bluetooth entre el dispositivo móvil y el controlador de acceso."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Asegúrese de que el Bluetooth esté activado."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Apague y vuelva a encender el Bluetooth."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Reinicie el dispositivo móvil si es necesario."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "conceder-permiso-de-ubicación-a-la-app-suprema-pass",
          children: "Conceder permiso de ubicación a la app Suprema Pass"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "La autenticación por Bluetooth y por NFC requiere permiso de ubicación."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Vaya a ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Configuración"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Aplicaciones"
              }), " en el dispositivo móvil."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Seleccione la aplicación ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Suprema Pass"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Permisos"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ubicación"
              }), ", configure el acceso a la ubicación en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Permitir siempre"
              }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Permitir solo mientras se usa la aplicación"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "verifique-las-conexiones-de-red-celular-y-wifi",
          children: "Verifique las conexiones de red celular y Wi‑Fi"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Se requiere una conexión estable de red celular o Wi‑Fi para la autenticación con tarjeta móvil."
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "está-usando-el-método-de-conexión-seleccionado",
          children: "¿Está usando el método de conexión seleccionado?"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Verifique el método de conexión en la aplicación Suprema Pass."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la pantalla principal de la aplicación Suprema Pass, toque ", (0,jsx_runtime.jsx)(IcHamberg, {}), " en la esquina superior derecha."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Verifique el modo de autenticación en ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Método de conexión"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Mantenga la aplicación abierta en segundo plano al usar ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Modo en segundo plano"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "el-dispositivo-móvil-vibró-durante-la-autenticación",
          children: "¿El dispositivo móvil vibró durante la autenticación?"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Si el dispositivo móvil vibró pero la puerta no se abrió, abra la aplicación Suprema Pass e intente autenticarse de nuevo."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Si aparece un mensaje de error, haga una captura de pantalla y compártala con el administrador del sitio."
            }), "\n"]
          }), "\n"]
        })]
      })]
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