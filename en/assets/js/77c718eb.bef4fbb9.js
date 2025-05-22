"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["4102"], {
"1339": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_biostation_3_installation_mdx_77c_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-biostation-3-installation-mdx-77c.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_biostation_3_installation_mdx_77c_namespaceObject = JSON.parse('{"id":"device/biostation_3/installation","title":"Installation","description":"Provides the complete installation procedures and connection examples required for the device.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/biostation_3/installation.mdx","sourceDirName":"device/biostation_3","slug":"/device/biostation_3/installation","permalink":"/docs/en/device/biostation_3/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/installation.mdx","tags":[],"version":"current","frontMatter":{"id":"installation","title":"Installation","description":"Provides the complete installation procedures and connection examples required for the device.","keywords":["Bracket","Power","Network","Input","Relay","Standalone","Secure I/O","Wiegand"],"isTranslationMissing":false},"sidebar":"bioStation3","previous":{"title":"Getting Started","permalink":"/docs/en/device/biostation_3/getting-started"},"next":{"title":"Using the Device","permalink":"/docs/en/device/biostation_3/using-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/biostation_3/installation.mdx


const frontMatter = {
	id: 'installation',
	title: 'Installation',
	description: 'Provides the complete installation procedures and connection examples required for the device.',
	keywords: [
		'Bracket',
		'Power',
		'Network',
		'Input',
		'Relay',
		'Standalone',
		'Secure I/O',
		'Wiegand'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Fixing the Bracket and the Product",
  "id": "fixing-the-bracket-and-the-product",
  "level": 2
}, {
  "value": "Power Supply Connection",
  "id": "power-supply-connection",
  "level": 2
}, {
  "value": "Network Connection",
  "id": "network-connection",
  "level": 2
}, {
  "value": "TCP/IP",
  "id": "tcpip",
  "level": 3
}, {
  "value": "LAN connection (connecting to a hub)",
  "id": "lan-connection-connecting-to-a-hub",
  "level": 4
}, {
  "value": "LAN connection (connecting to a PC directly)",
  "id": "lan-connection-connecting-to-a-pc-directly",
  "level": 4
}, {
  "value": "TTL Input Connection",
  "id": "ttl-input-connection",
  "level": 2
}, {
  "value": "Relay Connection",
  "id": "relay-connection",
  "level": 2
}, {
  "value": "Fail Safe Lock",
  "id": "fail-safe-lock",
  "level": 3
}, {
  "value": "Fail Secure Lock",
  "id": "fail-secure-lock",
  "level": 3
}, {
  "value": "Automatic door connection",
  "id": "automatic-door-connection",
  "level": 3
}, {
  "value": "Connecting as a Standalone",
  "id": "connecting-as-a-standalone",
  "level": 2
}, {
  "value": "Connecting to Secure I/O 2",
  "id": "connecting-to-secure-io-2",
  "level": 2
}, {
  "value": "Wiegand Connection",
  "id": "wiegand-connection",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Column, Columns, Image, Row, Table, Tbody, Td, Th, Thead} = _components;
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  if (!Th) _missingMdxReference("Th", true);
  if (!Thead) _missingMdxReference("Thead", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Provides the complete installation procedures and connection examples required for the device."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fixing-the-bracket-and-the-product",
      children: "Fixing the Bracket and the Product"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Determine the correct position to install the bracket using the provided drilling template."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-recommended-bs3.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "The optimal height for installing device is 136 cm."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Install the device where it does not reach the direct sunlight or UV light."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Adjust the installation position so that the face is not exposed to direct sunlight when a user tries to authenticate."
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Fix the bracket firmly using fixing screws through the bracket to the position where BioStation 3 will be installed."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device1-bs3.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "If installing BioStation 3 on a concrete wall, drill holes, insert PVC anchors, and fix them with fixing screws."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "To avoid RF interference, a minimum separation distance must be maintained."
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsxs)(Columns, {
            children: [(0,jsx_runtime.jsxs)(Column, {
              className: "text--center",
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/device/installation-wall1-bs3.svg",
                className: "none",
                alone: true
              }), (0,jsx_runtime.jsx)("div", {
                className: "overflow-x",
                children: (0,jsx_runtime.jsxs)(_components.table, {
                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.th, {
                        style: {
                          textAlign: "center"
                        },
                        children: "Wall thickness"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        style: {
                          textAlign: "center"
                        },
                        children: "Distance"
                      })]
                    })
                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "100 mm"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "200 mm"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "120 mm"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "180 mm"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "150 mm"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        style: {
                          textAlign: "center"
                        },
                        children: "150 mm"
                      })]
                    })]
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)(Column, {
              className: "text--center",
              children: (0,jsx_runtime.jsx)(Image, {
                src: "/img/device/installation-wall2-bs3.svg",
                className: "none",
                alone: true
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "When using a mobile access card, install devices maintaining a minimum distance of 1 m between devices to avoid BLE interference."
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "After assembling the cable cover, fix it firmly using the six screws on the cover."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device2-bs3.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "IMake sure that the cable cover is completely closed after connecting it to the product to maintain the water-resistant and dust-resistant features (IP65 rating)."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Install BioStation 3 onto the fixed bracket."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device3-bs3.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Connect BioStation 3 to the bracket by rotating the product fixing screw of BioStation 3."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device4-bs3.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "power-supply-connection",
      children: "Power Supply Connection"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-power-connection-bs3.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Use the IEC/EN 62368-1 approved power adapter that supports higher power consumption than the product. If you wish to connect and use another device to the power supply adapter, you should use an adapter with a current capacity which is the same or larger than the total power consumption required for the terminal and another device."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                href: "product-specifications#specs.power",
                children: "Power"
              }), " in the product specifications for maximum current consumption specifications."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Use a separate power supply for Secure I/O 2, the electric lock, and the product respectively. If connecting and using the power supply to these devices together, the devices may malfunction."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When connecting the power supply, be aware of the distance between BioStation 3 and the power supply. The BioStation 3 should be connected as close as possible to the power supply so that the length of the connecting cable is kept to a minimum. If cable connections are made improperly it may cause the device to malfunction. It is recommended to use a 16 AWG or 18 AWG cable if the BioStation 3 is far from the power supply. The connection distance may differ depending on the standard of the cable used and the installation environment. BioStation 3 supports both DC 24 V and DC 12 V power, so check the maximum length according to the cable specification to ensure that the unit is properly powered."
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(Table, {
        children: [(0,jsx_runtime.jsxs)(Thead, {
          children: [(0,jsx_runtime.jsxs)(Row, {
            children: [(0,jsx_runtime.jsx)(Th, {
              rowspan: "2",
              children: "Cable standard"
            }), (0,jsx_runtime.jsx)(Th, {
              colspan: "2",
              children: "Max. extended length"
            })]
          }), (0,jsx_runtime.jsxs)(Row, {
            children: [(0,jsx_runtime.jsx)(Th, {
              children: "DC 12V"
            }), (0,jsx_runtime.jsx)(Th, {
              children: "DC 24V"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(Tbody, {
          children: [(0,jsx_runtime.jsxs)(Row, {
            children: [(0,jsx_runtime.jsx)(Td, {
              children: "16 AWG"
            }), (0,jsx_runtime.jsx)(Td, {
              children: "50 m"
            }), (0,jsx_runtime.jsx)(Td, {
              children: "150 m"
            })]
          }), (0,jsx_runtime.jsxs)(Row, {
            children: [(0,jsx_runtime.jsx)(Td, {
              children: "18 AWG"
            }), (0,jsx_runtime.jsx)(Td, {
              children: "30 m"
            }), (0,jsx_runtime.jsx)(Td, {
              children: "136 m"
            })]
          }), (0,jsx_runtime.jsxs)(Row, {
            children: [(0,jsx_runtime.jsx)(Td, {
              children: "20 AWG"
            }), (0,jsx_runtime.jsx)(Td, {
              children: "20 m"
            }), (0,jsx_runtime.jsx)(Td, {
              children: "90 m"
            })]
          })]
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "DO NOT extend the length of power cable when using the power adapter."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "DO NOT use the CAT5 UTP 2-Wire for power supply purpose."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "network-connection",
      children: "Network Connection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tcpip",
      children: "TCP/IP"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "lan-connection-connecting-to-a-hub",
      children: "LAN connection (connecting to a hub)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can connect the product to a hub using a general type CAT-5 cable."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-network-hub-connection-bs3.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "lan-connection-connecting-to-a-pc-directly",
      children: "LAN connection (connecting to a PC directly)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStation 3 has an automatic MDI/MDIX function so that it can be connected to a PC directly using a normal straight type CAT-5 cable or a cross cable."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-network-direct-connection-bs3.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "When you use a gigabit network switch, please see below information."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Use a Cat5e UTP(Unshielded Twisted Pair) cable."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Use all 4 pairs (8 lines) of cable for network connection."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "DO NOT use the pair of cable for other purpose."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ttl-input-connection",
      children: "TTL Input Connection"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-ttl-input-connection-bs3.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "relay-connection",
      children: "Relay Connection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fail-safe-lock",
      children: "Fail Safe Lock"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In order to use the Fail Safe Lock, connect N/C relay as shown in the figure below. There is normally a current flowing through the relay for the Fail Safe Lock. When the relay is activated, blocking the current flow, the door will open. If the power supply to the product is cut off due to a power failure or an external factor, the door will open."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-relay-fail-safe-lock-bs3.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Install a diode at both sides of the door lock wire as shown in the figure to protect the relay from the reverse current, which occurs when the door lock operates."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Use a separate power supply for BioStation 3 and the door lock."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Suprema’s standalone intelligent readers contain internal relays that can directly lock/unlock doors without external controllers for added convenience. For access control applications in need of security, however, it is NOT recommended to use the internal relay of a reader to prevent any tampering attacks which can potentially trigger the door unlock. For such applications, it is highly recommended to use a separate relay unit for a lock control such as Suprema’s Secure I/O 2, DM-20 or CoreStation installed at a secure side of a door."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Take caution of the installation direction of the diode. Install the diode close to the door lock."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fail-secure-lock",
      children: "Fail Secure Lock"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In order to use the Fail Secure Lock, connect N/O relay as shown in the figure below There is normally no current flowing through the relay for the Fail Secure Lock. When the current flow is activated by the relay, the door will open. If the power supply to the product is cut off due to a power failure or an external factor, the door will lock."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-relay-fail-secure-lock-bs3.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Install a diode at both sides of the door lock wire as shown in the figure to protect the relay from the reverse current, which occurs when the door lock operates."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Use a separate power supply for BioStation 3 and the door lock."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Suprema’s standalone intelligent readers contain internal relays that can directly lock/unlock doors without external controllers for added convenience. For access control applications in need of security, however, it is NOT recommended to use the internal relay of a reader to prevent any tampering attacks which can potentially trigger the door unlock. For such applications, it is highly recommended to use a separate relay unit for a lock control such as Suprema’s Secure I/O 2, DM-20 or CoreStation installed at a secure side of a door."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Take caution of the installation direction of the diode. Install the diode close to the door lock."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automatic-door-connection",
      children: "Automatic door connection"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-automatic-door-bs3.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connecting-as-a-standalone",
      children: "Connecting as a Standalone"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStation 3 can be connected to the door lock, door button, and door sensor directly without connecting a separate I/O device."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-standalone-connection-bs3.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Suprema’s standalone intelligent readers contain internal relays that can directly lock/unlock doors without external controllers for added convenience. For access control applications in need of security, however, it is NOT recommended to use the internal relay of a reader to prevent any tampering attacks which can potentially trigger the door unlock. For such applications, it is highly recommended to use a separate relay unit for a lock control such as Suprema’s Secure I/O 2, DM-20 or CoreStation installed at a secure side of a door."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 can be used as a multi-door controller with the slave devices with the RS-485 cable. The slave devices are used as dummy readers and authentication is performed in the master device."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If a fingerprint authentication device is configured as a slave device in BioStation 3, you cannot add another BioStation 3 as a slave device."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If the fingerprint authentication device is the master device, BioStation 3 cannot be added as a slave device."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If FaceStation F2 is a master device, BioStation 3 cannot be used as a slave device, and vice versa."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When you connect BioStation 3 as a slave device while BioStation 3 is the master device, only one BioStation 3 can be added as a slave device."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When BioStation 3 is the master device and another BioStation 3 is connected to it as a slave device, you can connect one additional Secure I/O 2 and DM-20 each."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When BioStation 3 is the master device and another BioStation 3 is connected to it as a slave device, you cannot connect additional OM-120."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The maximum number of slave devices available to connect varies according to the authentication method, number of users, and number of devices. Also note that the number of slave devices affects the authentication speed."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "A master device can control 31 slave devices. The bandwidth of RS-485 allows for up to 7 fingerprint authentication devices to be connected."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information, contact the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://support.supremainc.com",
              children: "Suprema technical support team"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connecting-to-secure-io-2",
      children: "Connecting to Secure I/O 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Secure I/O 2 is an I/O device, can be connected to BioStation 3 with the RS-485 cable. Security can be maintained even if the connection between BioStation 3 and Secure I/O 2 has been lost or the power supply to BioStation 3 has been shut off due to external factors."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use an AWG24 twisted pair with a maximum length of 1.2 km for the RS-485 cable."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If connecting with a RS-485 daisy chain, connect the termination resistor (120 Ω) to both ends of the daisy chain connection. If connected to the middle line, the signal level becomes smaller and the communication performance will deteriorate. Make sure to connect it to both ends of the daisy chain connection."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-sio2-connection-bs3.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 can be used as a multi-door controller with the slave devices with the RS-485 cable. The slave devices are used as dummy readers and authentication is performed in the master device."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If a fingerprint authentication device is configured as a slave device in BioStation 3, you cannot add another BioStation 3 as a slave device."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If the fingerprint authentication device is the master device, BioStation 3 cannot be added as a slave device."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If FaceStation F2 is a master device, BioStation 3 cannot be used as a slave device, and vice versa."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When you connect BioStation 3 as a slave device while BioStation 3 is the master device, only one BioStation 3 can be added as a slave device."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When BioStation 3 is the master device and another BioStation 3 is connected to it as a slave device, you can connect one additional Secure I/O 2 and DM-20 each."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When BioStation 3 is the master device and another BioStation 3 is connected to it as a slave device, you cannot connect additional OM-120."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The maximum number of slave devices available to connect varies according to the authentication method, number of users, and number of devices. Also note that the number of slave devices affects the authentication speed."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "A master device can control 31 slave devices. The bandwidth of RS-485 allows for up to 7 fingerprint authentication devices to be connected."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information, contact the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://support.supremainc.com",
              children: "Suprema technical support team"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiegand-connection",
      children: "Wiegand Connection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used as a Wiegand input device."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-wiegand-in-connection-bs3.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used as a Wiegand output device."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/installation-wiegand-out-connection-bs3.png",
      className: "none",
      alone: true
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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
"65": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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