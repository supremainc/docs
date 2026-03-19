"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["82543"], {
39640: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_e_200_qr_scanner_mdx_4f4_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-e-200-qr-scanner-mdx-4f4.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_e_200_qr_scanner_mdx_4f4_namespaceObject = JSON.parse('{"id":"platform/biostar_air/e200-qr-scanner","title":"Cableado y configuración del escáner QR E200","description":"Cablea y configura los dispositivos BioStar Air para un rendimiento óptimo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/e200-qr-scanner.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/e200-qr-scanner","permalink":"/docs/es/platform/biostar_air/e200-qr-scanner","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/e200-qr-scanner.mdx","tags":[],"version":"current","frontMatter":{"id":"e200-qr-scanner","title":"Cableado y configuración del escáner QR E200","description":"Cablea y configura los dispositivos BioStar Air para un rendimiento óptimo.","keywords":["cableado","configuración","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configurar el módulo seguro SIO2","permalink":"/docs/es/platform/biostar_air/configuring-the-sio2-secure-module"},"next":{"title":"Identificar puertos y dispositivos de red","permalink":"/docs/es/platform/biostar_air/site-setup-networking"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/e200-qr-scanner.mdx


const frontMatter = {
	id: 'e200-qr-scanner',
	title: 'Cableado y configuración del escáner QR E200',
	description: 'Cablea y configura los dispositivos BioStar Air para un rendimiento óptimo.',
	keywords: [
		'cableado',
		'configuración',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Paso 1: Cablear",
  "id": "wiring",
  "level": 2
}, {
  "value": "Paso 2: Habilitar el lector QR",
  "id": "enable-qr-reader",
  "level": 2
}, {
  "value": "Paso 3: Configurar el escáner QR",
  "id": "configure-qr-scanner",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "wiring",
      children: "Paso 1: Cablear"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Conecta el escáner QR de la serie E200 usando el cable adaptador incluido como se muestra a continuación."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["El bloque de terminales verde tiene pines etiquetados del ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1 al 4"
          }), ", dispuestos de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "derecha a izquierda"
          }), " cuando estés frente al conector."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "Pin"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Color del cable"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Función"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Negro"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Negativo / Tierra"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Rojo"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Positivo (V+)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Amarillo (franja blanca)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RS-485 TRXN"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "4"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Azul (franja blanca)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RS-485 TRXP"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "La dirección del cableado es exactamente opuesta a la de muchos otros conectores. Verifica la orientación nuevamente antes de cablear."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Conecta el conector de 4 pines al puerto CON en la parte inferior del escáner QR. Como el conector está ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "polarizado"
          }), " (con muesca), solo encaja en una posición."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/air-hardware-qr-reader-diagram.png",
          width: "80%",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enable-qr-reader",
      children: "Paso 2: Habilitar el lector QR"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Inicia sesión en el ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "portal de BioStar Air"
          }), " (web o app)."]
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haz clic en el dispositivo que tiene conectado el escáner QR E200."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Habilita la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_qr_reader",
            product: "air"
          }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "new_layout_nav_title_detail",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-details-qr-reader.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para guardar los cambios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Habilitar el lector QR impide que uses otros dispositivos RS-485 (por ejemplo, un SIO2) en el mismo lector."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configure-qr-scanner",
      children: "Paso 3: Configurar el escáner QR"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Por defecto, el ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "escáner QR E200"
      }), " viene configurado con una velocidad de baudios de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "115,200"
      }), ". Cambia la velocidad de baudios a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "9,600"
      }), " para usarlo con dispositivos Suprema."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Conecta el escáner QR al dispositivo y ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "escanea el código de barras a continuación"
      }), " para aplicar la nueva velocidad de baudios."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-hardware-qr-reader-barcode.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cuando el cableado sea correcto y el dispositivo Suprema esté conectado a la red, utiliza las ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "credenciales QR dinámicas"
      }), " proporcionadas a través de BioStar Air."]
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