"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["27821"], {
63073: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_vionyx_installation_mdx_b1e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-vionyx-installation-mdx-b1e.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_vionyx_installation_mdx_b1e_namespaceObject = JSON.parse('{"id":"device/vionyx/installation","title":"Installation and Connection","description":"Provides the complete installation procedures and connection examples required for the device.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/vionyx/installation.mdx","sourceDirName":"device/vionyx","slug":"/device/vionyx/installation","permalink":"/docs/en/device/vionyx/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx/installation.mdx","tags":[],"version":"current","frontMatter":{"id":"installation","title":"Installation and Connection","description":"Provides the complete installation procedures and connection examples required for the device.","keywords":["Mount Plate","Power","Network","Input","Relay"],"isTranslationMissing":false},"sidebar":"vionyx","previous":{"title":"Getting Started","permalink":"/docs/en/device/vionyx/getting-started"},"next":{"title":"Accessing and Configuring the Web Server","permalink":"/docs/en/device/vionyx/web-server-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/vionyx/installation.mdx


const frontMatter = {
	id: 'installation',
	title: 'Installation and Connection',
	description: 'Provides the complete installation procedures and connection examples required for the device.',
	keywords: [
		'Mount Plate',
		'Power',
		'Network',
		'Input',
		'Relay'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*### 전체 연결 구성도

<Magnify src='/img/device/system-cs20.svg' width='80%' zoomFactor={.4} mgWidth={500} mgHeight={500} />

:::info

The product's USB port is an expansion port for installation convenience and is not suitable for recording or surveillance.

:::*/


const toc = [{
  "value": "Installing the Camera",
  "id": "installing-the-camera",
  "level": 2
}, {
  "value": "Installation Precautions",
  "id": "installation-precautions",
  "level": 3
}, {
  "value": "Installation",
  "id": "installation",
  "level": 3
}, {
  "value": "Cable connection and setup",
  "id": "cable-connection-and-setup",
  "level": 2
}, {
  "value": "Power supply connection",
  "id": "power-supply-connection",
  "level": 3
}, {
  "value": "Network Connection",
  "id": "network-connection",
  "level": 3
}, {
  "value": "TCP/IP: LAN connection (connect to a hub)",
  "id": "tcpip-lan-connection-connect-to-a-hub",
  "level": 4
}, {
  "value": "Network ports and services",
  "id": "network-ports-and-services",
  "level": 4
}, {
  "value": "RS-485 connection (coming soon)",
  "id": "rs-485-connection-coming-soon",
  "level": 3
}, {
  "value": "Alarm input connection",
  "id": "alarm-input-connection",
  "level": 3
}, {
  "value": "Relay Connection",
  "id": "relay-connection",
  "level": 3
}, {
  "value": "Fail Safe Lock",
  "id": "fail-safe-lock",
  "level": 4
}, {
  "value": "Fail Secure Lock",
  "id": "fail-secure-lock",
  "level": 4
}, {
  "value": "Automatic door connection",
  "id": "automatic-door-connection",
  "level": 4
}, {
  "value": "Audio connection (coming soon)",
  "id": "audio-connection-coming-soon",
  "level": 3
}, {
  "value": "Micro SD card and USB device connection (coming soon)",
  "id": "micro-sd-card-and-usb-device-connection-coming-soon",
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
  }, {Column, Columns, Image, PageBreak, Row, Table, Tbody, Td, Th, Thead} = _components;
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!PageBreak) _missingMdxReference("PageBreak", true);
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
      id: "installing-the-camera",
      children: "Installing the Camera"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Follow the steps below to safely install the camera."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installation-precautions",
      children: "Installation Precautions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Be sure to read the following precautions before installing the camera."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Install the camera in a location that can support a load of at least 5 times the camera's weight."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Avoid pinching cables or damaging the wire insulation, as this may cause product damage or fire."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Keep others away from the installation area while installing the camera. Before you begin, remove any valuables or items below the installation area that could be damaged."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Using excessive force when assembling may cause malfunction or damage to the product. Use only the specified tools."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Waterproof and Dustproof Precautions"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "This product meets IP66 and IP67 ratings for water and dust protection, but do not install it in locations exposed to direct water spray or continuous immersion."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When opening the cover during installation, take care to prevent moisture or dust from entering the interior."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When connecting cables, make sure to properly fasten the provided waterproof components."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "We recommend mounting the camera on the ceiling to achieve a wide field of view."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Do not install the camera where it will be exposed directly to sunlight or UV rays."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Adjust the installation location to avoid direct sunlight on the lens or strong backlighting, as these can degrade AI-based face and object recognition performance."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "order--continuous",
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use the provided T10 star screwdriver to turn the screws counterclockwise and remove the camera cover."
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation1-vionyx.svg",
          className: "none",
          width: 250,
          alone: true
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "order--continuous",
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Loosen the mount plate's fixing screws by turning them counterclockwise, then separate the mount plate from the camera body."
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation2-vionyx.svg",
          className: "none",
          width: 250,
          alone: true
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "order--continuous",
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Insert a microSD card into the microSD card slot on the camera body. To connect USB (Type-A) accessories, plug them into the USB port."
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation-usb-sdcard-connection-vionyx.png",
          className: "none",
          width: 250,
          alone: true
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "order--continuous",
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Choose the installation location based on the camera's viewing direction."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "When mounting on the ceiling: orient the mount plate so the AI logo faces the direction the camera will point."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "When mounting on a wall: orient the mount plate so the red triangle points to 12 o'clock (up)."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation4-1-vionyx.svg",
          className: "none",
          width: 230,
          alone: true
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "order--continuous",
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Attach the provided drilling template at the installation location, then drill the screw and cable holes."
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation3-1-vionyx.svg",
          className: "none",
          width: 300,
          alone: true
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "order--continuous",
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pass the cables to be connected (power, network, audio/alarm, etc.) through the appropriate hole in the mounting plate."
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation5-vionyx.svg",
          className: "none",
          width: 300,
          alone: true
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "order--continuous",
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use the mounting screws to securely fasten the mount plate."
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation4-vionyx.svg",
          className: "none",
          width: 350,
          alone: true
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "order--continuous",
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Remove the Ethernet cable’s waterproof rubber and the waterproof hole plug from the camera body, then attach the required cables."
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation6-vionyx.svg",
          className: "none",
          width: 250,
          alone: true
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect the Ethernet cable"
        })
      }), (0,jsx_runtime.jsxs)(Columns, {
        children: [(0,jsx_runtime.jsx)(Column, {
          className: "text--left",
          children: (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Slide the waterproof rubber boot for the Ethernet cable onto the Ethernet cable. Install the appropriate waterproof rubber sleeve provided for the Ethernet cable (CAT5E or CAT6)."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Insert the Ethernet cable’s waterproof rubber into the camera body’s Ethernet hole."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Fasten the joint and nut onto the Ethernet cable’s waterproof rubber."
              }), "\n"]
            }), "\n"]
          })
        }), (0,jsx_runtime.jsx)(Column, {
          className: "text--left",
          children: (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation11-1-vionyx.svg",
            className: "none",
            width: 200,
            alone: true
          })
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect other cables"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Pass the cable through the hole where you removed the camera body’s waterproof hole plug, then install the waterproof rubber."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/camera/installation11-2-vionyx.svg",
        className: "none",
        width: 550,
        alone: true
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Waterproof the cable"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "When installing outdoors, moisture may enter through gaps in the cable connections. We recommend using commercially available butyl rubber waterproof tape and following the steps below to seal the cable connections."
      }), (0,jsx_runtime.jsxs)(Columns, {
        children: [(0,jsx_runtime.jsxs)(Column, {
          className: "text--left",
          children: [(0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Connect the required cables, such as power, I/O, and audio."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Wrap the butyl rubber tape from the cable connection to the cable jacket (part A), ensuring each layer overlaps the previous one by at least half its width."
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "If the cable jacket (part A) is not properly waterproofed, it may cause leaks. Tape it tightly with no gaps."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Waterproof butyl rubber tape is made of butyl rubber and can stretch to more than 2 times its original length. Stretch the tape sufficiently as you wrap it."
              }), "\n"]
            }), "\n"]
          })]
        }), (0,jsx_runtime.jsx)(Column, {
          className: "text--left",
          children: (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/cable-waterproofing-vionyx.svg",
            className: "none",
            width: 500,
            alone: true
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "order--continuous",
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fully loosen the mount plate fixing screw, align the camera body with the center of the printed mark (red triangle), then turn the bracket fixing screw clockwise to secure it."
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation8-vionyx.svg",
          className: "none",
          width: 250,
          alone: true
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "If you need to adjust the camera angle, rotate the camera body left or right to set the installation angle up to 15° total (up to 8° to each side)."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/camera/installation9-vionyx.png",
        className: "none",
        width: 500,
        alone: true
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "order--continuous",
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use a T10 Torx driver to firmly tighten the bracket fixing screw again."
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation10-vionyx.svg",
          className: "none",
          width: 330,
          alone: true
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "order--continuous",
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "To prevent reduced camera performance, wipe any dirt or oil from the inside and outside of the lens and cover with a soft, dry cloth."
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation11-vionyx.svg",
          className: "none",
          width: 260,
          alone: true
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "order--continuous",
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Attach the cover to the camera body and use a T10 Torx driver to firmly secure the 3 screws."
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation12-vionyx.svg",
          className: "none",
          width: 300,
          alone: true
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Fully tighten the screws when securing the cover; otherwise, waterproofing may be compromised. (IP66/IP67)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cable-connection-and-setup",
      children: "Cable connection and setup"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "power-supply-connection",
      children: "Power supply connection"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-power-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Do not connect the power supply (or adapter) and the PoE+ power source at the same time."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Use a power adapter approved to IEC/EN 62368-1 with an output rating equal to or greater than the camera's maximum power consumption. If you plan to connect another device to the power adapter, use an adapter with a capacity equal to or greater than the combined power consumption of the camera and the other device."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                href: "product-specifications#specs.power",
                children: "Power"
              }), " section in the product specifications for maximum current consumption."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When connecting the power supply, be aware of the distance between the device and the power supply. The device should be connected as close as possible to the power supply so that the length of the connecting cable is kept to a minimum. If cable connections are made improperly it may cause the device to malfunction. It is recommended to use a 16 AWG or 18 AWG cable if the product is far from the power supply. This product uses a rated voltage of 12Vdc. Do not apply power above the rated voltage, as this may damage the product. Check the maximum extension length for each cable specification and connect the power correctly."
          }), "\n", (0,jsx_runtime.jsxs)(Table, {
            children: [(0,jsx_runtime.jsx)(Thead, {
              children: (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Th, {
                  children: "Cable standard"
                }), (0,jsx_runtime.jsx)(Th, {
                  children: "Max. extended length"
                })]
              })
            }), (0,jsx_runtime.jsxs)(Tbody, {
              children: [(0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "16 AWG"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "50 m"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "18 AWG"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "30 m"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "20 AWG"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "20 m"
                })]
              })]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "DO NOT extend the length of power cable when using the power adapter."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-connection",
      children: "Network Connection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tcpip-lan-connection-connect-to-a-hub",
      children: "TCP/IP: LAN connection (connect to a hub)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "You can connect to the hub using a standard CAT-5e cable."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports PoE+, which provides both power and data over a single Ethernet cable."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-network-hub-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "network-ports-and-services",
      children: "Network ports and services"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This device uses the following ports for network communication and stable service operation."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Protocol"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Service Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TCP"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Used for communication services between the server and the device, and for the device operation status switching service."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "UDP"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Used for the device discovery service to search for devices on the network."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "These ports are required for the product's normal network operation. When configuring firewall or network security settings, allow traffic through these ports."
      })
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rs-485-connection-coming-soon",
      children: "RS-485 connection (coming soon)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Connect to external devices via RS-485. Observe the polarity (A/B) when wiring."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use an AWG24 twisted pair with a maximum length of 1.2 km for the RS-485 cable."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "It is recommended to use RS-485 cables with a characteristic impedance of 120 Ω."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If connecting with a RS-485 daisy chain, connect the termination resistor (120 Ω) to both ends of the daisy chain connection. If connected to the middle line, the signal level becomes smaller and the communication performance will deteriorate. Make sure to connect it to both ends of the daisy chain connection."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-rs485-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alarm-input-connection",
      children: "Alarm input connection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is an input port that receives signals from external sensors or switches."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-alarm-in-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relay-connection",
      children: "Relay Connection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fail-safe-lock",
      children: "Fail Safe Lock"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In order to use the Fail Safe Lock, connect N/C relay as shown in the figure below. There is normally a current flowing through the relay for the Fail Safe Lock. When the relay is activated, blocking the current flow, the door will open. If the power supply to the product is cut off due to a power failure or an external factor, the door will open."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-relay-fail-safe-lock-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Install diodes on both sides of the wiring as shown to protect the relay from reverse current generated when a door lock or strobe light activates."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "External devices connected to the product (e.g., door locks) must use a separate power supply."
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
        children: "Take caution of the installation direction of the diode. Install the diode as close as possible to the connected external device."
      })
    }), "\n", (0,jsx_runtime.jsx)(PageBreak, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fail-secure-lock",
      children: "Fail Secure Lock"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In order to use the Fail Secure Lock, connect N/O relay as shown in the figure below. There is normally no current flowing through the relay for the Fail Secure Lock. When the current flow is activated by the relay, the door will open. If the power supply to the product is cut off due to a power failure or an external factor, the door will lock."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-relay-fail-secure-lock-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Install diodes on both sides of the wiring as shown to protect the relay from reverse current generated when a door lock or strobe light activates."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "External devices connected to the product (e.g., door locks) must use a separate power supply."
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
        children: "Take caution of the installation direction of the diode. Install the diode as close as possible to the connected external device."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "automatic-door-connection",
      children: "Automatic door connection"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-automatic-door-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "audio-connection-coming-soon",
      children: "Audio connection (coming soon)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Audio input (LINE IN): Connect an audio source. The product includes a built-in microphone on the front."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Audio output (LINE OUT): Connect to an amplifier. This product does not include a built-in audio amplifier; use a separate amplifier and speakers."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-audio-connection-vionyx.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "micro-sd-card-and-usb-device-connection-coming-soon",
      children: "Micro SD card and USB device connection (coming soon)"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-usb-sdcard-connection-vionyx.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Micro SD card"
          }), ": Insert a microSD card to record video."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "USB"
          }), ": Connect other USB (Type-A) accessories."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Recommended microSD/SDHC/SDXC card specifications"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Recommended capacity: 16GB to 1TB"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "We recommend using memory cards from the following manufacturers and product lines."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Manufacturers: Samsung, SanDisk, Transcend, Micron"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Product lines: High Endurance, Pro Endurance"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Compatibility may vary by card manufacturer and type."
          }), "\n"]
        }), "\n"]
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