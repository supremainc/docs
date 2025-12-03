"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["11050"], {
12683: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
        children: "Components may vary according to the installation environment."
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "corestation_20,corestation_40,doorinterface,doormodule,inputmodule,outputmodule,securemodule,extendedmodule,extendedmodule_sc",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "When assembling the product with the bracket, you can use the included bracket fixing screw (Star Shaped) instead of the product fixing screw for enhanced security."
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
43444: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_doorinterface_getting_started_mdx_52f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-doorinterface-getting-started-mdx-52f.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_doorinterface_getting_started_mdx_52f_namespaceObject = JSON.parse('{"id":"device/doorinterface/getting-started","title":"Getting Started","description":"Provides initial procedures for getting started with the device.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/doorinterface/getting-started.mdx","sourceDirName":"device/doorinterface","slug":"/device/doorinterface/getting-started","permalink":"/docs/en/device/doorinterface/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/doorinterface/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"Getting Started","description":"Provides initial procedures for getting started with the device.","keywords":["Components","Name","Feature","Cable","Connector"],"isTranslationMissing":false},"sidebar":"doorinterface","previous":{"title":"Safety Instructions","permalink":"/docs/en/device/doorinterface/safety-instructions"},"next":{"title":"Installation","permalink":"/docs/en/device/doorinterface/installation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_getting-started-components-note.mdx
var _getting_started_components_note = __webpack_require__(12683);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/doorinterface/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: 'Getting Started',
	description: 'Provides initial procedures for getting started with the device.',
	keywords: [
		'Components',
		'Name',
		'Feature',
		'Cable',
		'Connector'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Components",
  "id": "components",
  "level": 2
}, ..._getting_started_components_note/* .toc */.RM, {
  "value": "Name and function of each part",
  "id": "name-and-function-of-each-part",
  "level": 2
}, {
  "value": "Door Interface status LED",
  "id": "door-interface-status-led",
  "level": 3
}, {
  "value": "Installation example",
  "id": "installation-example",
  "level": 3
}, {
  "value": "System diagram",
  "id": "system-diagram",
  "level": 3
}, {
  "value": "Overall connection diagram",
  "id": "overall-connection-diagram",
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
      children: "Provides initial procedures for getting started with the device."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "components",
      children: "Components"
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
            children: "Quick Guide"
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
            children: "Door Interface"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "Open Source Software Guide"
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
            children: "Fixing Screw x6"
          }), (0,jsx_runtime.jsx)(Td, {
            children: "Diode x4"
          })]
        })]
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_getting_started_components_note/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "name-and-function-of-each-part",
      children: "Name and function of each part"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "partname",
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Magnify, {
          src: "/img/device/product-part-di24.svg",
          width: 600,
          zoomFactor: .4,
          mgWidth: 500,
          mgHeight: 500
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
                children: "Name"
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
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "AUX IN (0:2)"
                }), " connection"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "2"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "RS-485"
                }), " connection"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "3"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "RS-485"
                }), " termination resistor switch"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "4"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "SUPERVISED INPUT (3:5)"
                }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Input (3:5)"
                }), " connection"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "5"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "RELAY 2 (Alarm)"
                }), " connection"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "6"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "OUTPUT (3:5)"
                }), " connection"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "7"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "RS-485 1"
                }), " termination resistor switch"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "8"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "WIEGAND 1"
                }), " connection"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "9"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "RS-485 1"
                }), " connection"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "10"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "RELAY 3 (Lock)"
                }), " connection"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "11"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Power connection for Door Interface (DC 12V / DC 24V IN)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "12"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "RESET"
                }), " button"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "13"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "INIT"
                }), " button"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "14"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "RELAY 1 (Lock)"
                }), " connection"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "15"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "WIEGAND 0"
                }), " connection"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "16"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "RS-485 0"
                }), " connection"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "17"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "RS-485 0"
                }), " termination resistor switch"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "18"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "OUTPUT (0:2)"
                }), " connection"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "19"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "RELAY 0 (Alarm)"
                }), " connection"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "20"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "SUPERVISED INPUT (0:2)"
                }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Input (0:2)"
                }), " connection"]
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
            children: ["Press the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "INIT"
            }), " button for more than 2 seconds after initializing the product linked to the device to connect it to another device."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Press the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RESET"
            }), " button to reboot the product."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can use the product's reader power output (12 Vdc, up to 0.6 A / 24 Vdc, up to 0.3 A) as power for the reader when connecting the product to the reader. You can connect two readers consuming 0.3 A based on 12 Vdc power output."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "door-interface-status-led",
      children: "Door Interface status LED"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The product's status can be checked at the STATUS located on the right side of the front of the product, displaying the status of Ethernet, RS-485, RS-485 0, RS-485 1, in order every second."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LED"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "2",
            children: "RS-485"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Magenta/blue blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master device normal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Magenta/yellow blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master device disconnected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "3",
            children: "RS-485 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yellow/blue blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slave device normal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Yellow/yellow blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slave device disconnected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Yellow/red blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No slave device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "3",
            children: "RS-485 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Green/blue blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slave device normal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Green/yellow blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slave device disconnected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Green/red blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No slave device"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "7",
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "White/white blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System lock (BioStar X's operational conditions and behavior) + Tamper on"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "White/magenta blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System lock (Device's operational conditions and behavior) + Tamper on"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "White/blue blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tamper on"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "White/cyan blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BioStar X connection successful + Tamper on"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "White/green blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BioStar X connection successful"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "White/yellow blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System lock (BioStar X's operational conditions and behavior)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "White/red blinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System lock (Device's operational conditions and behavior)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installation-example",
      children: "Installation example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This product can easily configure up to 2 access doors as an extension module."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When integrated with BioStar X, both access control and attendance management can be utilized, providing various interfaces such as RS-485 (OSDP), Wiegand, supervised input, and AUX."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-example-di24.png",
      width: "70%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-diagram",
      children: "System diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This product supports 3 RS-485 ports, and by daisy-chaining multiple Door Interfaces to the master device, you can configure up to 34 doors."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/system-configuration-di24.png",
      width: "75%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Up to 2 devices can be connected per port for RS-485 0 and RS-485 1."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If more than 3 devices are connected to a single RS-485 port, the desired device may not appear in the connectable list when searching for slave devices."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When connecting the Door Interface as a slave to the host port of the master device, you can open access doors by identifying the facility code of the card through the Facility Code for Offline Mode, even if the connection with the master device is lost for the slave devices connected to the Door Interface."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overall-connection-diagram",
      children: "Overall connection diagram"
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