"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["20452"], {
39502: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_the_airfob_patch_and_tag_mdx_003_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-configuring-the-airfob-patch-and-tag-mdx-003.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_the_airfob_patch_and_tag_mdx_003_namespaceObject = JSON.parse('{"id":"platform/biostar_air/configuring-the-airfob-patch-and-tag","title":"Configurar Airfob Patch y Tag","description":"Esta guía explica cómo configurar el Airfob Patch y el Tag, establecer el modo BLE y personalizar la salida del ID de tarjeta para actualizar un sistema de control de acceso existente a BioStar Air.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-the-airfob-patch-and-tag.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/configuring-the-airfob-patch-and-tag","permalink":"/docs/es/platform/biostar_air/configuring-the-airfob-patch-and-tag","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/configuring-the-airfob-patch-and-tag.mdx","tags":[],"version":"current","frontMatter":{"id":"configuring-the-airfob-patch-and-tag","title":"Configurar Airfob Patch y Tag","description":"Esta guía explica cómo configurar el Airfob Patch y el Tag, establecer el modo BLE y personalizar la salida del ID de tarjeta para actualizar un sistema de control de acceso existente a BioStar Air.","keywords":["Airfob","Patch","Tag","configuración"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Gestionar Grupos de Dispositivos","permalink":"/docs/es/platform/biostar_air/manage-device-group"},"next":{"title":"Actualización de firmware","permalink":"/docs/es/platform/biostar_air/how-to-upgrade-firmware"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-the-airfob-patch-and-tag.mdx


const frontMatter = {
	id: 'configuring-the-airfob-patch-and-tag',
	title: 'Configurar Airfob Patch y Tag',
	description: 'Esta guía explica cómo configurar el Airfob Patch y el Tag, establecer el modo BLE y personalizar la salida del ID de tarjeta para actualizar un sistema de control de acceso existente a BioStar Air.',
	keywords: [
		'Airfob',
		'Patch',
		'Tag',
		'configuración'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Pasos de configuración",
  "id": "configurationSteps",
  "level": 2
}, {
  "value": "Abre la aplicación",
  "id": "accessApp",
  "level": 3
}, {
  "value": "Ve a la configuración del dispositivo",
  "id": "navigateToDeviceSettings",
  "level": 3
}, {
  "value": "Activa el modo BLE",
  "id": "enable-ble-mode",
  "level": 3
}, {
  "value": "Configura el método de salida del ID de tarjeta",
  "id": "set-card-id-output-method",
  "level": 3
}, {
  "value": "Selecciona el método de salida",
  "id": "choose-the-output-method",
  "level": 3
}, {
  "value": "Guardar la configuración",
  "id": "save-your-settings",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
  }, {Cmd, Column, Columns, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "El Airfob Patch y el Tag actualizan un lector de control de acceso o una cerradura existente para que funcionen con credenciales móviles de BioStar Air."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Patch"
          }), ": Un dispositivo que aprovecha la energía para lectores con cable e intercomunicadores, y se instala sin necesidad de cableado adicional."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Tag"
          }), ": Se adapta a dispositivos alimentados por batería, como cerraduras que usan una pila tipo botón."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El Airfob Patch y el Tag son compatibles con la tecnología MIFARE 1K, pero no son compatibles con lectores o cerraduras de baja frecuencia de 125 kHz."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Autentican credenciales Bluetooth cifradas de BioStar Air desde un dispositivo móvil y funcionan emulando una señal RFID MIFARE. Se adhieren a lectores y cerraduras con cinta y no requieren cableado."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configurationSteps",
      children: "Pasos de configuración"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instala el Airfob Patch o Tag y regístralo en la aplicación BioStar Air. Sigue estos pasos para configurar el dispositivo."
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "accessApp",
          children: "Abre la aplicación"
        }), (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--20",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-aifob-login-app.png"
            })
          }), (0,jsx_runtime.jsx)(Column, {
            className: "padding--l10",
            children: (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Abre ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar Air"
                  }), " en tu dispositivo móvil."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Inicia sesión en el sitio donde está registrado el Airfob Patch o Tag."
                }), "\n"]
              }), "\n"]
            })
          })]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "navigateToDeviceSettings",
          children: "Ve a la configuración del dispositivo"
        }), (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--20",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-aifob-app-device.png"
            })
          }), (0,jsx_runtime.jsx)(Column, {
            className: "padding--l10",
            children: (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["En la pantalla principal de ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar Air"
                  }), ", toca ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "site_setting_tab_management",
                    product: "air"
                  }), " en la parte inferior."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Para ver los dispositivos registrados, toca ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "devices_card",
                    product: "air"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Selecciona el Airfob Patch o Tag de la lista de dispositivos."
                }), "\n"]
              }), "\n"]
            })
          })]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "enable-ble-mode",
          children: "Activa el modo BLE"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Acerca el dispositivo móvil a la unidad."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Activa ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Modo BLE"
              }), " en la aplicación."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "set-card-id-output-method",
          children: "Configura el método de salida del ID de tarjeta"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Desplázate hasta ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Método de salida del ID de tarjeta"
              }), " y toca ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Editar"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Toca ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Seleccionar"
              }), " junto a ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ID de tarjeta de usuario"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "choose-the-output-method",
          children: "Selecciona el método de salida"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Ninguno"
              }), ": Seleccione esta opción cuando no desee enviar un ID de tarjeta. Útil para el control de tiempo y asistencia, ya que prolonga la vida útil de la batería."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Dispositivo fijo"
              }), ": Envía el ID de tarjeta fijo preprogramado. Útil para cerraduras o intercomunicadores que requieren programar cada tarjeta RFID de forma individual. Solo este ID fijo aparece en los registros del dispositivo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ID de tarjeta de usuario"
              }), ": Envía un ID de tarjeta único para cada usuario que coincide con el número de tarjeta RFID registrado en el sistema de control de acceso. Esto permite una integración sin necesidad de emitir nuevas tarjetas físicas."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Entrada directa"
              }), ": Especifique manualmente el ID de la tarjeta que se enviará. Útil para configuraciones personalizadas en las que un mismo ID debe utilizarse en varias unidades."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "save-your-settings",
          children: "Guardar la configuración"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Mantenga el dispositivo móvil cerca de la unidad, toque ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " y confirme las selecciones."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Se muestra el mensaje 'Actualización completada'."
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