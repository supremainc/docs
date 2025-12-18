"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["39315"], {
81876: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    li: "li",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Xclude} = _components;
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
    type: "info",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Los componentes pueden variar según el entorno de instalación."
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "corestation_20,corestation_40,doorinterface,doormodule,inputmodule,outputmodule,securemodule,extendedmodule,extendedmodule_sc",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "Al ensamblar el producto con el soporte, puedes usar el tornillo de fijación del soporte incluido (en forma de estrella) en lugar del tornillo de fijación del producto para aumentar la seguridad."
        }), "\n"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
23398: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_extendedmodule_sc_getting_started_mdx_da2_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-extendedmodule-sc-getting-started-mdx-da2.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_extendedmodule_sc_getting_started_mdx_da2_namespaceObject = JSON.parse('{"id":"device/extendedmodule_sc/getting-started","title":"Primeros pasos","description":"Proporciona procedimientos iniciales para empezar con el dispositivo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/extendedmodule_sc/getting-started.mdx","sourceDirName":"device/extendedmodule_sc","slug":"/device/extendedmodule_sc/getting-started","permalink":"/docs/es/device/extendedmodule_sc/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/extendedmodule_sc/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"Primeros pasos","description":"Proporciona procedimientos iniciales para empezar con el dispositivo.","keywords":["Componentes","Nombre","Función","Cable","Conector"],"isTranslationMissing":false},"sidebar":"extendedmodule_sc","previous":{"title":"Instrucciones de seguridad","permalink":"/docs/es/device/extendedmodule_sc/safety-instructions"},"next":{"title":"Instalación","permalink":"/docs/es/device/extendedmodule_sc/installation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_getting-started-components-note.mdx
var _getting_started_components_note = __webpack_require__(81876);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/extendedmodule_sc/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: 'Primeros pasos',
	description: 'Proporciona procedimientos iniciales para empezar con el dispositivo.',
	keywords: [
		'Componentes',
		'Nombre',
		'Función',
		'Cable',
		'Conector'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*구성품 노트*/



const toc = [{
  "value": "Componentes",
  "id": "componentes",
  "level": 2
}, ..._getting_started_components_note/* .toc */.RM, {
  "value": "Nombre y función de cada parte",
  "id": "nombre-y-función-de-cada-parte",
  "level": 2
}, {
  "value": "Cables y conectores",
  "id": "cables-y-conectores",
  "level": 2
}, {
  "value": "RS-232C",
  "id": "rs-232c",
  "level": 3
}, {
  "value": "RS-485",
  "id": "rs-485",
  "level": 3
}, {
  "value": "Cable de conexión al puerto de expansión USB",
  "id": "cable-de-conexión-al-puerto-de-expansión-usb",
  "level": 3
}, {
  "value": "Ejemplo de instalación",
  "id": "ejemplo-de-instalación",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
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
  }, {Image, Row, Table, Tbody, Td} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Proporciona procedimientos iniciales para empezar con el dispositivo."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "La conexión del módulo de expansión no es compatible con el firmware estándar, por lo que se requiere un firmware personalizado aparte."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "componentes",
      children: "Componentes"
    }), "\n", (0,jsx_runtime.jsx)(Table, {
      className: "component",
      children: (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-extm-sc.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-pinmap-extm-sc.svg",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-screws2.svg",
              className: "none",
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: "Módulo de expansión"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "Etiqueta del mapa de pines"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "Tornillos de fijación x2"
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Table, {
      className: "component",
      children: (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/cable-rs485-4pin.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/cable-rs485-4pin.svg",
              className: "none",
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: "Cable RS-232C"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "Cable RS-485"
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/cable-usb-4pin.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/cable-usb-4pin-short.svg",
              className: "none",
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: "Cable de conexión al puerto de expansión USB (BioStation 3)"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "Cable de conexión al puerto de expansión USB (BioStation 2a)"
          })]
        })]
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_getting_started_components_note/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nombre-y-función-de-cada-parte",
      children: "Nombre y función de cada parte"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/name-function-each-part-extm-sc.png",
      className: "none",
      width: "80%"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Puerto de expansión USB (5 pines)"
          }), ": conecta el dispositivo al módulo de expansión."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RS-485 (4 pines)"
          }), ": Conecta el cable RS-485."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RS-232C (4 pines)"
          }), ": conecta el cable RS-232C."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cables-y-conectores",
      children: "Cables y conectores"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rs-232c",
      children: "RS-232C"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/cable-rs485-4pin.svg",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col3--10-20-70",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Pin"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Nombre"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Color"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "232 TX"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Azul"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "232 RX"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Amarillo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "232 GND"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Negro"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SH GND"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Gris"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rs-485",
      children: "RS-485"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/cable-rs485-4pin.svg",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col3--10-20-70",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Pin"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Nombre"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Color"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "485 TRXP"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Azul"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "485 TRXN"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Amarillo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "485 GND"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Negro"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SH GND"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Gris"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cable-de-conexión-al-puerto-de-expansión-usb",
      children: "Cable de conexión al puerto de expansión USB"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/cable-usb-4pin.svg",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col3--10-20-70",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Pin"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Nombre"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Color"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MAIN VBUS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Rojo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MAIN DM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Blanco"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MAIN DP"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Verde"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NC"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "*"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "5"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MAIN GND"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Negro"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ejemplo-de-instalación",
      children: "Ejemplo de instalación"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "La conexión del módulo de expansión no es compatible con el firmware estándar, por lo que se requiere un firmware personalizado aparte."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Equipa el dispositivo Suprema con un módulo de expansión para utilizar adicionalmente los puertos RS-485 y RS-232C."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los dispositivos Suprema que pueden admitir el módulo de expansión son los siguientes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/docs/es/device/biostation_3/",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 3"
            })
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/docs/es/device/biostation_2a/",
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStation 2a"
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-example-extm-sc.png",
      className: "none",
      width: "65%"
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