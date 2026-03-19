"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["48154"], {
72101: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_the_sio_2_secure_module_mdx_532_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-configuring-the-sio-2-secure-module-mdx-532.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_the_sio_2_secure_module_mdx_532_namespaceObject = JSON.parse('{"id":"platform/biostar_air/configuring-the-sio2-secure-module","title":"Configurar el módulo seguro SIO2","description":"Esta guía explica cómo configurar el módulo seguro SIO2 para mejorar la seguridad del sistema de control de acceso.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-the-sio2-secure-module.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/configuring-the-sio2-secure-module","permalink":"/docs/es/platform/biostar_air/configuring-the-sio2-secure-module","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/configuring-the-sio2-secure-module.mdx","tags":[],"version":"current","frontMatter":{"id":"configuring-the-sio2-secure-module","title":"Configurar el módulo seguro SIO2","description":"Esta guía explica cómo configurar el módulo seguro SIO2 para mejorar la seguridad del sistema de control de acceso.","keywords":["SIO2","módulo seguro","configuración"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Soporte y configuración de cámaras IP","permalink":"/docs/es/platform/biostar_air/ip-camera-support-and-configuration"},"next":{"title":"Cableado y configuración del escáner QR E200","permalink":"/docs/es/platform/biostar_air/e200-qr-scanner"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-the-sio2-secure-module.mdx


const frontMatter = {
	id: 'configuring-the-sio2-secure-module',
	title: 'Configurar el módulo seguro SIO2',
	description: 'Esta guía explica cómo configurar el módulo seguro SIO2 para mejorar la seguridad del sistema de control de acceso.',
	keywords: [
		'SIO2',
		'módulo seguro',
		'configuración'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Habilitar SIO2 en el portal BioStar Air",
  "id": "how-to-activate-sio2-in-the-biostar-air-portal",
  "level": 2
}, {
  "value": "Registrar el lector",
  "id": "register-the-reader",
  "level": 3
}, {
  "value": "Verificar la conexión del dispositivo",
  "id": "check-device-connection",
  "level": 3
}, {
  "value": "Asignar SIO2 a una puerta",
  "id": "assign-sio2-to-a-door",
  "level": 3
}, {
  "value": "Habilitar SIO2",
  "id": "enable-sio2",
  "level": 3
}, {
  "value": "Configurar relé y sensores",
  "id": "configure-relay-and-sensors",
  "level": 3
}, {
  "value": "Guardar la configuración",
  "id": "save-the-settings",
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
  }, {Cmd, Image, StatusOK, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "El módulo seguro SIO2"
      }), " mejora la seguridad del sistema de control de acceso al actuar como intermediario entre el lector compatible con BioStar Air y los relés. Se comunica con el lector mediante un ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cable RS485"
      }), " y evita brechas de seguridad a través de comunicación cifrada."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Consulte el diagrama de cableado incluido en el paquete del producto para obtener instrucciones precisas de instalación del ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "módulo seguro SIO2"
        }), ". Dado que los métodos de instalación pueden variar según el entorno, solicite asistencia profesional a un distribuidor de Suprema."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-activate-sio2-in-the-biostar-air-portal",
      children: "Habilitar SIO2 en el portal BioStar Air"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Habilite la opción ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "add_doors.sio2",
        product: "air"
      }), " siguiendo estos pasos para integrar correctamente el módulo seguro SIO2 y mejorar la seguridad del sistema de control de acceso."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Si SIO2 está instalado pero no se modifican los ajustes en el portal BioStar Air, podría no funcionar."
      })
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "register-the-reader",
          children: "Registrar el lector"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Verifique que el lector, el SIO2 y el relé de la puerta estén conectados correctamente."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Registre el lector en el sitio a través de la ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "aplicación BioStar Air"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "check-device-connection",
          children: "Verificar la conexión del dispositivo"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Acceda al ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://admin.biostarair.com/",
                children: "portal BioStar Air"
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
              children: ["En la lista de dispositivos, verifique que el dispositivo aparezca en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "verde"
              }), " (", (0,jsx_runtime.jsx)(StatusOK, {}), ") para confirmar la conexión."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "assign-sio2-to-a-door",
          children: "Asignar SIO2 a una puerta"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_submenu",
                product: "air"
              }), " en la barra lateral izquierda."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Haga clic en la puerta vinculada al dispositivo en la lista. Al registrar el dispositivo, se crea automáticamente una puerta."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "enable-sio2",
          children: "Habilitar SIO2"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "edit_door.title",
                product: "air"
              }), ", vaya a ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Dispositivo auxiliar"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Habilite la opción ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.sio2",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-edit-door-sio2-enable.png"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "configure-relay-and-sensors",
          children: "Configurar relé y sensores"
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-edit-door-sio2-settings.png",
          caption: true
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Para ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.door_relay",
                product: "air"
              }), ", seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Relay 0"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "El módulo SIO2 solo tiene un puerto de relé de puerta."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Para ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_door_sensor",
                product: "air"
              }), ", seleccione el número de puerto de entrada del SIO2 conectado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Si ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_exit_btn",
                product: "air"
              }), " está conectado, seleccione el puerto de entrada correspondiente en el SIO2."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Si se utiliza otro tipo de dispositivo de salida, seleccione ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column3",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "save-the-settings",
          children: "Guardar la configuración"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " para aplicar la configuración."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "El módulo seguro SIO2 ahora funciona con normalidad."
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