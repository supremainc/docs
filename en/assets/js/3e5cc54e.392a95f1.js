"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["98951"], {
91887: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_configuration_mdx_3e5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-corestation-setup-manager-configuration-mdx-3e5.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_configuration_mdx_3e5_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/configuration","title":"Device Settings","description":"Guide for device settings and management.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/configuration.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/configuration","permalink":"/en/device/corestation_setup_manager/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/configuration.mdx","tags":[],"version":"current","frontMatter":{"id":"configuration","title":"Device Settings","description":"Guide for device settings and management.","keywords":["Device Settings","Slave","Information","Network","Authentication","Advanced Settings"],"isTranslationMissing":false},"sidebar":"corestation_setup_manager","previous":{"title":"Initial Setup of the Device","permalink":"/en/device/corestation_setup_manager/initial-setup"},"next":{"title":"Monitoring","permalink":"/en/device/corestation_setup_manager/monitoring"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/configuration.mdx


const frontMatter = {
	id: 'configuration',
	title: 'Device Settings',
	description: 'Guide for device settings and management.',
	keywords: [
		'Device Settings',
		'Slave',
		'Information',
		'Network',
		'Authentication',
		'Advanced Settings'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Search and register slave device",
  "id": "search-and-register-slave-device",
  "level": 2
}, {
  "value": "Restart device",
  "id": "restart-device",
  "level": 2
}, {
  "value": "Modify device settings and information",
  "id": "modify-device-settings-and-information",
  "level": 2
}, {
  "value": "Information",
  "id": "information",
  "level": 3
}, {
  "value": "Network",
  "id": "network",
  "level": 3
}, {
  "value": "Authentication",
  "id": "authentication",
  "level": 3
}, {
  "value": "Advanced Settings",
  "id": "advanced-settings",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Guide for device settings and management."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "search-and-register-slave-device",
      children: "Search and register slave device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can easily expand the access control system's network by adding slave devices to CoreStation. CoreStation (master) and slave devices can be connected via RS-485, and additional devices such as Secure I/O can also be connected for use."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CONFIGURE"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Right-click on CoreStation in the Device List and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Search Slave Device"
          }), ". A list of slave devices connected to CoreStation will appear."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/config-search-slave-device1.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the device to register as a slave and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add"
          }), ". Alternatively, you can select individual ports to add slave devices."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/config-search-slave-device2.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "restart-device",
      children: "Restart device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The user can restart the device."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CONFIGURE"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Right-click on CoreStation in the Device List and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reboot"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/config-reboot.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modify-device-settings-and-information",
      children: "Modify device settings and information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can configure details for CoreStation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CONFIGURE"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Edit the necessary fields."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To complete all settings and save changes, click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "information",
      children: "Information"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-information.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Feature description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Name"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can check the device name."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device ID"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can check the device ID."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device Type"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can check the device type."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Firmware Version"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["You can install a new version of the firmware by clicking ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Firmware Upgrade"
              }), " and selecting the firmware file to upgrade."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Kernel Version"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can check the kernel version."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Hardware Version"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can check the hardware version."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Factory Default"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can delete all information stored on the device and reset the settings."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Restore to Default"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["You can initialize the device settings.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ALL"
              }), ": Initializes all settings.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "without Network"
              }), ": Initializes all settings except network settings."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Locked"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["When the device is locked due to operating conditions, you can use the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Unlock"
              }), " button."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Time Zone"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can set the device's time zone."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Display Date"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["You can manually set the date and time.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Get Time"
              }), ": Click to retrieve the time set on the device.", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Set Time"
              }), ": Click to apply the time set in the CoreStation Setup Manager to the device."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Factory Default"
        }), " menu can be used when a root certificate is stored on the device. Executing a factory reset will delete the administrator account."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network",
      children: "Network"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-network.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Feature description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Use DHCP"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Select this option to set the device to use a dynamic IP address. If you select this item, a fixed IP address cannot be assigned."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "IP Address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can check the device's IP address."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Gateway"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can check the device's gateway."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "DNS Server Address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can check the device's DNS server address."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Subnet Mask"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can check the device's subnet mask."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device Port"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Enter the port the device will use."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device to Server Connection"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Selecting this option allows you to enter BioStar X server information to connect the device to the server."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Enter the IP address or domain address of the BioStar X server."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Port"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Enter the port of the BioStar X server."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "RS485"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Only master mode is available."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Baud Rate"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can set the transmission speed for each RS-485 port."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authentication",
      children: "Authentication"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-auth.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Feature description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["1", ":N", " Security Level"]
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can set the security level used to authenticate fingerprints. As the security level increases, the false rejection rate (FRR) increases, while the false acceptance rate (FAR) decreases."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["1", ":N", " Fast Mode"]
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["You can set the speed of fingerprint authentication. Selecting ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Auto"
              }), " sets the authentication speed according to the total number of fingerprint templates enrolled on the device."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Template Format"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can check the configured fingerprint template format."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Biometric authentication is supported only on CoreStation."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-settings",
      children: "Advanced Settings"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-advanced.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Feature description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AC Fail"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can set an AUX port to monitor power input signals."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Tamper"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can set an AUX port for tamper notifications."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Fire"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can set an AUX port to monitor fire detection signals."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Configuration"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can set CoreStation's Supervised Input port as an Input port and configure the resistor value to be used for Supervised Input. Resistor values can be set to 1 kΩ, 2.2 kΩ, 4.7 kΩ, or 10 kΩ."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Secure Tamper"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "In the event of tampering with the device, you can set it to delete all user information, logs, and security keys stored on the device."
            })]
          })]
        })]
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