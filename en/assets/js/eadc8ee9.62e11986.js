"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["16526"], {
49169: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Customers who began using BioStar Air access control before May 2025 may still be using the Airfob Space app, which has since been rebranded as the Suprema Pass app. Both apps offer identical functionality and are fully compatible. There is no need for existing users to switch — mobile credentials work seamlessly across both."
    })
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



}),
46751: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_the_sio_2_secure_module_mdx_ead_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-configuring-the-sio-2-secure-module-mdx-ead.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_the_sio_2_secure_module_mdx_ead_namespaceObject = JSON.parse('{"id":"platform/biostar_air/configuring-the-sio2-secure-module","title":"Configure SIO2 Secure Module","description":"This guide explains how to configure the SIO2 secure module to enhance access control system security.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-the-sio2-secure-module.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/configuring-the-sio2-secure-module","permalink":"/docs/en/platform/biostar_air/configuring-the-sio2-secure-module","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/configuring-the-sio2-secure-module.mdx","tags":[],"version":"current","frontMatter":{"id":"configuring-the-sio2-secure-module","title":"Configure SIO2 Secure Module","description":"This guide explains how to configure the SIO2 secure module to enhance access control system security.","keywords":["SIO2","secure module","configuration"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configure Airfob Patch and Tag","permalink":"/docs/en/platform/biostar_air/configuring-the-airfob-patch-and-tag"},"next":{"title":"Firmware upgrade","permalink":"/docs/en/platform/biostar_air/how-to-upgrade-firmware"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-the-sio2-secure-module.mdx


const frontMatter = {
	id: 'configuring-the-sio2-secure-module',
	title: 'Configure SIO2 Secure Module',
	description: 'This guide explains how to configure the SIO2 secure module to enhance access control system security.',
	keywords: [
		'SIO2',
		'secure module',
		'configuration'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "Enable SIO2 in the BioStar Air portal",
  "id": "how-to-activate-sio2-in-the-biostar-air-portal",
  "level": 2
}, {
  "value": "Register the reader",
  "id": "register-the-reader",
  "level": 3
}, {
  "value": "Check the device connection",
  "id": "check-device-connection",
  "level": 3
}, {
  "value": "Assign SIO2 to a door",
  "id": "assign-sio2-to-a-door",
  "level": 3
}, {
  "value": "Enable SIO2",
  "id": "enable-sio2",
  "level": 3
}, {
  "value": "Configure relay and sensors",
  "id": "configure-relay-and-sensors",
  "level": 3
}, {
  "value": "Save the settings",
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
        children: "SIO2 secure module"
      }), " enhances access control system security by acting as an intermediary between Suprema or AirPop readers and relays. It communicates with the reader over an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RS485 cable"
      }), " and blocks security breaches through encrypted communication."]
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Refer to the wiring diagram included in the product package for precise installation instructions for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SIO2 secure module"
        }), ". Because installation methods may vary by environment, request professional assistance from a Suprema distributor."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-activate-sio2-in-the-biostar-air-portal",
      children: "Enable SIO2 in the BioStar Air portal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enable the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "add_doors.sio2",
        product: "air"
      }), " option by following these steps to properly integrate the SIO2 secure module and enhance access control system security."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "If SIO2 is installed but the settings are not changed in the BioStar Air portal, it may not operate."
      })
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "register-the-reader",
          children: "Register the reader"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Verify that the reader, SIO2, and door relay are connected successfully."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Register the reader to the site through the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar Air app"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "check-device-connection",
          children: "Check the device connection"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Access the ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://admin.biostarair.com/",
                children: "BioStar Air portal"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_submenu",
                product: "air"
              }), " in the left sidebar."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["In the device list, verify that the device appears in ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "green"
              }), " (", (0,jsx_runtime.jsx)(StatusOK, {}), ") to confirm the connection."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "assign-sio2-to-a-door",
          children: "Assign SIO2 to a door"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_submenu",
                product: "air"
              }), " in the left sidebar."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Click the door linked to the device in the list. Registering the device automatically creates a door."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "enable-sio2",
          children: "Enable SIO2"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "edit_door.title",
                product: "air"
              }), " panel appears, go to ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Auxiliary Device"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Enable the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.sio2",
                product: "air"
              }), " option."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-edit-door-sio2-enable.png"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "configure-relay-and-sensors",
          children: "Configure relay and sensors"
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-edit-door-sio2-settings.png",
          caption: true
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["For ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.door_relay",
                product: "air"
              }), ", select ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Relay 0"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "The SIO2 module has only one door relay port."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["For ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_door_sensor",
                product: "air"
              }), ", select the input port number of the connected SIO2."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["If ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_exit_btn",
                product: "air"
              }), " is connected, select the corresponding input port on the SIO2."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["If another type of exit device is used, select ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column3",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "save-the-settings",
          children: "Save the settings"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " to apply the settings."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "The SIO2 secure module now operates normally."
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