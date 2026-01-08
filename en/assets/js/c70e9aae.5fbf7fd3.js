"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9865"], {
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
2321: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_the_airfob_patch_and_tag_mdx_c70_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-configuring-the-airfob-patch-and-tag-mdx-c70.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_the_airfob_patch_and_tag_mdx_c70_namespaceObject = JSON.parse('{"id":"platform/biostar_air/configuring-the-airfob-patch-and-tag","title":"Configure Airfob Patch and Tag","description":"This guide explains how to configure Airfob Patch and Tag, set BLE mode, and customize the card ID output to upgrade an existing access control system to BioStar Air.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-the-airfob-patch-and-tag.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/configuring-the-airfob-patch-and-tag","permalink":"/docs/en/platform/biostar_air/configuring-the-airfob-patch-and-tag","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/configuring-the-airfob-patch-and-tag.mdx","tags":[],"version":"current","frontMatter":{"id":"configuring-the-airfob-patch-and-tag","title":"Configure Airfob Patch and Tag","description":"This guide explains how to configure Airfob Patch and Tag, set BLE mode, and customize the card ID output to upgrade an existing access control system to BioStar Air.","keywords":["Airfob","Patch","Tag","configuration"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Set Time & Attendance (T&A)","permalink":"/docs/en/platform/biostar_air/configuring-ta"},"next":{"title":"Configure SIO2 Secure Module","permalink":"/docs/en/platform/biostar_air/configuring-the-sio2-secure-module"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-the-airfob-patch-and-tag.mdx


const frontMatter = {
	id: 'configuring-the-airfob-patch-and-tag',
	title: 'Configure Airfob Patch and Tag',
	description: 'This guide explains how to configure Airfob Patch and Tag, set BLE mode, and customize the card ID output to upgrade an existing access control system to BioStar Air.',
	keywords: [
		'Airfob',
		'Patch',
		'Tag',
		'configuration'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Device overview",
  "id": "device-overview",
  "level": 2
}, ..._biostarair_customer_notice/* .toc */.RM, {
  "value": "Configuration steps",
  "id": "configurationSteps",
  "level": 2
}, {
  "value": "Run the app",
  "id": "accessApp",
  "level": 3
}, {
  "value": "Go to device settings",
  "id": "navigateToDeviceSettings",
  "level": 3
}, {
  "value": "Enable BLE mode",
  "id": "enable-ble-mode",
  "level": 3
}, {
  "value": "Set the card ID output method",
  "id": "set-card-id-output-method",
  "level": 3
}, {
  "value": "Choose the output method",
  "id": "choose-the-output-method",
  "level": 3
}, {
  "value": "Save your settings",
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
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "device-overview",
      children: "Device overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Airfob Patch and Tag upgrade an existing access control reader or door lock to work with BioStar Air mobile credentials."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Patch"
          }), ": An energy-harvesting device for wired readers and intercoms that attaches without additional wiring."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Tag"
          }), ": Fits battery-powered devices such as door locks using a coin-cell battery."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The Airfob Patch and Tag are compatible with MIFARE 1K technology but are not compatible with 125 kHz low-frequency readers or locks."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "They authenticate encrypted Bluetooth BioStar Air credentials from a mobile device and operate by emulating a MIFARE RFID signal. They attach to readers and locks with tape and require no wiring."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configurationSteps",
      children: "Configuration steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install the Airfob Patch or Tag and register it to the BioStar Air app. Follow these steps to configure the device."
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "accessApp",
          children: "Run the app"
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
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Run BioStar Air on your mobile device."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Sign in to the site where the Airfob Patch or Tag is registered."
                }), "\n"]
              }), "\n"]
            })
          })]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "navigateToDeviceSettings",
          children: "Go to device settings"
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
                  children: ["On the BioStar Air home screen, tap ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "site_setting_tab_management",
                    product: "air"
                  }), " at the bottom."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["To view the registered devices, tap ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "devices_card",
                    product: "air"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Select the Airfob Patch or Tag from the device list."
                }), "\n"]
              }), "\n"]
            })
          })]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "enable-ble-mode",
          children: "Enable BLE mode"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Hold the mobile device close to the unit."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Activate the ", (0,jsx_runtime.jsx)(Cmd, {
                children: "BLE Mode"
              }), " in the app."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "set-card-id-output-method",
          children: "Set the card ID output method"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Scroll to Card ID Output Method and tap Edit."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Tap Select next to User Card ID."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "choose-the-output-method",
          children: "Choose the output method"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "None"
              }), ": Select this option when you do not want to send a card ID. Useful for time and attendance to extend battery life."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Fixed Device"
              }), ": Sends the pre-programmed fixed card ID. Useful for door locks or intercoms that require each RFID card to be programmed individually. Only this fixed card ID appears in the device logs."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "User Card ID"
              }), ": Sends a unique card ID for each user that matches the existing RFID card number in the access control system. This enables seamless integration without issuing new physical cards."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Direct Input"
              }), ": Manually specify the card ID to be sent. Useful for custom configurations where one ID must be used on multiple units."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "save-your-settings",
          children: "Save your settings"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Keep the mobile device near the unit, tap ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), ", and confirm the selections."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "The update complete message appears."
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