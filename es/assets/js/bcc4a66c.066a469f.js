"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["79712"], {
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
87410: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_doorinterface_getting_started_mdx_bcc_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-doorinterface-getting-started-mdx-bcc.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_doorinterface_getting_started_mdx_bcc_namespaceObject = JSON.parse('{"id":"device/doorinterface/getting-started","title":"Primeros pasos","description":"Proporciona procedimientos iniciales para empezar con el dispositivo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/doorinterface/getting-started.mdx","sourceDirName":"device/doorinterface","slug":"/device/doorinterface/getting-started","permalink":"/docs/es/device/doorinterface/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/doorinterface/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"Primeros pasos","description":"Proporciona procedimientos iniciales para empezar con el dispositivo.","keywords":["Componentes","Nombre","Función","Cable","Conector"],"isTranslationMissing":false},"sidebar":"doorinterface","previous":{"title":"Instrucciones de seguridad","permalink":"/docs/es/device/doorinterface/safety-instructions"},"next":{"title":"Instalación","permalink":"/docs/es/device/doorinterface/installation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/common/_getting-started-components-note.mdx
var _getting_started_components_note = __webpack_require__(81876);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/doorinterface/getting-started.mdx


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




const toc = [{
  "value": "Componentes",
  "id": "componentes",
  "level": 2
}, ..._getting_started_components_note/* .toc */.RM, {
  "value": "Nombre y función de cada parte",
  "id": "nombre-y-función-de-cada-parte",
  "level": 2
}, {
  "value": "LED de estado de la interfaz de puerta",
  "id": "led-de-estado-de-la-interfaz-de-puerta",
  "level": 3
}, {
  "value": "Ejemplo de instalación",
  "id": "ejemplo-de-instalación",
  "level": 3
}, {
  "value": "Diagrama del sistema",
  "id": "diagrama-del-sistema",
  "level": 3
}, {
  "value": "Diagrama general de conexión",
  "id": "diagrama-general-de-conexión",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
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
  }, {Column, Columns, Image, Magnify, PageBreak, Row, Table, Tbody, Td} = _components;
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Magnify) _missingMdxReference("Magnify", true);
  if (!PageBreak) _missingMdxReference("PageBreak", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Proporciona procedimientos iniciales para empezar con el dispositivo."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "componentes",
      children: "Componentes"
    }), "\n", (0,jsx_runtime.jsx)(Table, {
      className: "component",
      children: (0,jsx_runtime.jsxs)(Tbody, {
        children: [(0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            rowspan: 3,
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-device-di24.svg",
              className: "none",
              height: 350,
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-quick-guide.svg",
              className: "none",
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsx)(Row, {
          className: "center",
          children: (0,jsx_runtime.jsx)(Td, {
            children: "Guía rápida"
          })
        }), (0,jsx_runtime.jsx)(Row, {
          className: "center white",
          children: (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-oss-guide.svg",
              className: "none",
              alone: true
            })
          })
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: "Interfaz de puerta"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "Guía de software de código abierto"
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center white",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-fixing-screws6.svg",
              className: "none",
              alone: true
            })
          }), (0,jsx_runtime.jsx)(Td, {
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/component-diode4.svg",
              className: "none",
              alone: true
            })
          })]
        }), (0,jsx_runtime.jsxs)(Row, {
          className: "center",
          children: [(0,jsx_runtime.jsx)(Td, {
            children: "Tornillo de fijación x6"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "Diodo x4"
          })]
        })]
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_getting_started_components_note/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nombre-y-función-de-cada-parte",
      children: "Nombre y función de cada parte"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "partname",
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Magnify, {
          src: "/img/device/product-part-di24.svg",
          width: 600,
          zoomFactor: .4,
          mgWidth: 500,
          mgHeight: 500,
          alone: true
        })
      }), (0,jsx_runtime.jsx)(Column, {
        className: "padding--l20",
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "No."
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Nombre"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "1"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Conexión ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "AUX IN (0:2)"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "2"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Conexión ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "RS-485"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "3"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Interruptor de resistencia terminal ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "RS-485"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "4"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Conexión ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "SUPERVISED INPUT (3:5)"
                }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Input (3:5)"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "5"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Conexión ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "RELAY 2 (Alarma)"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "6"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Conexión ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "OUTPUT (3:5)"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "7"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Interruptor de resistencia terminal ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "RS-485 1"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "8"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Conexión ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "WIEGAND 1"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "9"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Conexión ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "RS-485 1"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "10"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Conexión ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "RELAY 3 (Cerradura)"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "11"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Conexión de alimentación para la interfaz de puerta (DC 12V / DC 24V IN)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "12"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Botón ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "RESET"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "13"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Botón ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "INIT"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "14"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Conexión ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "RELAY 1 (Cerradura)"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "15"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Conexión ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "WIEGAND 0"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "16"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Conexión ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "RS-485 0"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "17"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Interruptor de resistencia terminal ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "RS-485 0"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "18"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Conexión ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "OUTPUT (0:2)"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "19"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Conexión ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "RELAY 0 (Alarma)"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "20"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Conexión ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "SUPERVISED INPUT (0:2)"
                }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Input (0:2)"
                })]
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Presione el botón ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "INIT"
            }), " durante más de 2 segundos, después de inicializar el producto vinculado al dispositivo, para conectarlo a otro dispositivo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Presione el botón ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RESET"
            }), " para reiniciar el producto."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Use la salida de alimentación del lector del producto (12 Vdc, hasta 0.6 A / 24 Vdc, hasta 0.3 A) como fuente de alimentación del lector al conectar el producto. Conecte dos lectores que consuman 0.3 A usando la salida de 12 Vdc."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "led-de-estado-de-la-interfaz-de-puerta",
      children: "LED de estado de la interfaz de puerta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verifique el estado del producto en STATUS, ubicado en el lado derecho del frontal del dispositivo; muestra en orden cada segundo el estado de Ethernet, RS-485, RS-485 0 y RS-485 1."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Ítem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LED"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Estado"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "2",
            children: "RS-485"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo magenta/azul"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispositivo maestro normal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo magenta/amarillo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispositivo maestro desconectado"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "3",
            children: "RS-485 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo amarillo/azul"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispositivo esclavo normal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo amarillo/amarillo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispositivo esclavo desconectado"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo amarillo/rojo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sin dispositivo esclavo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "3",
            children: "RS-485 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo verde/azul"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispositivo esclavo normal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo verde/amarillo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispositivo esclavo desconectado"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo verde/rojo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sin dispositivo esclavo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "7",
            children: "Sistema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo blanco/blanco"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bloqueo del sistema (condiciones y comportamiento operativos de BioStar X) + Tamper activado"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo blanco/magenta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bloqueo del sistema (condiciones y comportamiento operativos del dispositivo) + Tamper activado"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo blanco/azul"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sabotaje On"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo blanco/cian"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conexión exitosa a BioStar X + Tamper activado"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo blanco/verde"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conexión exitosa a BioStar X"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo blanco/amarillo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bloqueo del sistema (condiciones y comportamiento operativos de BioStar X)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parpadeo blanco/rojo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bloqueo del sistema (condiciones y comportamiento operativos del dispositivo)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ejemplo-de-instalación",
      children: "Ejemplo de instalación"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure fácilmente hasta 2 puertas de acceso como módulo de expansión."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integre BioStar X para utilizar el control de acceso y la gestión de asistencia, y disponga de diversas interfaces como RS-485 (OSDP), Wiegand, entrada supervisada y AUX."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-example-di24.png",
      width: "70%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "diagrama-del-sistema",
      children: "Diagrama del sistema"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Este producto admite 3 puertos RS-485 y, al encadenar (daisy chain) varias interfaces de puerta al dispositivo maestro, puede configurar hasta 34 puertas."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/system-configuration-di24.png",
      width: "75%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Se pueden conectar hasta 2 dispositivos por puerto para RS-485 0 y RS-485 1."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si se conectan más de 3 dispositivos a un solo puerto RS-485, es posible que el dispositivo deseado no aparezca en la lista de conexión al buscar dispositivos esclavos."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Abra puertas de acceso identificando el código de recinto de la tarjeta mediante el código de recinto para el modo sin conexión cuando conecte la interfaz de puerta como esclava al puerto host del dispositivo maestro, incluso si se pierde la conexión con el maestro para los dispositivos esclavos conectados a la interfaz de puerta."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "diagrama-general-de-conexión",
      children: "Diagrama general de conexión"
    }), "\n", (0,jsx_runtime.jsx)(Magnify, {
      src: "/img/en/device/system-di24.svg",
      width: "80%",
      zoomFactor: .4,
      mgWidth: 500,
      mgHeight: 500
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