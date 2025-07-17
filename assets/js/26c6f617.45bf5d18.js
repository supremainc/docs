"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5566"], {
4933: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (MDXContent),
  d$: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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
2808: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_28_device_management_configuring_the_airfob_patch_and_tag_mdx_26c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-28-device-management-configuring-the-airfob-patch-and-tag-mdx-26c.json
var site_docs_platform_biostar_air_28_device_management_configuring_the_airfob_patch_and_tag_mdx_26c_namespaceObject = JSON.parse('{"id":"platform/biostar_air/configuring-the-airfob-patch-and-tag","title":"Configuring the Airfob Patch and Tag","description":"Learn how to configure Airfob Patch and Tag devices, set up BLE mode, and customize card ID output methods for upgrading existing access control systems to BioStar Air.","source":"@site/docs/platform/biostar_air/28-device-management-configuring-the-airfob-patch-and-tag.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/configuring-the-airfob-patch-and-tag","permalink":"/docs/platform/biostar_air/configuring-the-airfob-patch-and-tag","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/28-device-management-configuring-the-airfob-patch-and-tag.mdx","tags":[],"version":"current","sidebarPosition":28,"frontMatter":{"id":"configuring-the-airfob-patch-and-tag","title":"Configuring the Airfob Patch and Tag","description":"Learn how to configure Airfob Patch and Tag devices, set up BLE mode, and customize card ID output methods for upgrading existing access control systems to BioStar Air.","keywords":["Airfob","Patch","Tag","configuration"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configuring Time & Attendance (T&A)","permalink":"/docs/platform/biostar_air/configuring-ta"},"next":{"title":"Configuring the SIO2 Secure Module","permalink":"/docs/platform/biostar_air/configuring-the-sio2-secure-module"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(4933);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/28-device-management-configuring-the-airfob-patch-and-tag.mdx


const frontMatter = {
	id: 'configuring-the-airfob-patch-and-tag',
	title: 'Configuring the Airfob Patch and Tag',
	description: 'Learn how to configure Airfob Patch and Tag devices, set up BLE mode, and customize card ID output methods for upgrading existing access control systems to BioStar Air.',
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
  "value": "Device Overview",
  "id": "device-overview",
  "level": 2
}, ..._biostarair_customer_notice/* toc */.d$, {
  "value": "Compatibility",
  "id": "compatibility",
  "level": 2
}, {
  "value": "Functionality",
  "id": "functionality",
  "level": 2
}, {
  "value": "Configuration Steps",
  "id": "configuration-steps",
  "level": 2
}, {
  "value": "Access the App",
  "id": "access-the-app",
  "level": 3
}, {
  "value": "Navigate to Device Settings",
  "id": "navigate-to-device-settings",
  "level": 3
}, {
  "value": "Enable BLE Mode",
  "id": "enable-ble-mode",
  "level": 3
}, {
  "value": "Set Card ID Output Method",
  "id": "set-card-id-output-method",
  "level": 3
}, {
  "value": "Choose the Output Method",
  "id": "choose-the-output-method",
  "level": 3
}, {
  "value": "Save Your Settings",
  "id": "save-your-settings",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Step, Steps} = _components;
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "device-overview",
      children: "Device Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Airfob Patch and Tag devices upgrade existing access control readers or door locks to be compatible with BioStar Air mobile credentials."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Patch"
          }), ": Ideal for wired readers and intercoms, this energy-harvesting device attaches without the need for wiring."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Tag"
          }), ": Equipped with a coin cell battery, making it suitable for battery-powered devices like door locks."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compatibility",
      children: "Compatibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both devices work with MIFARE 1K technology but are not compatible with 125 KHz \"low frequency\" readers or locks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functionality",
      children: "Functionality"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These devices operate by reading the encrypted Bluetooth BioStar Air credential from a mobile phone and emulating a MIFARE RFID signal. They attach to readers and locks using tape, requiring no wiring."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-steps",
      children: "Configuration Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After installing your Tag or Patch and registering it with the BioStar Air app, follow these steps to configure your device:"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "access-the-app",
          children: "Access the App"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Open the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar Air"
            }), " app."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Log into the site where your Tag or Patch is registered."
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "navigate-to-device-settings",
          children: "Navigate to Device Settings"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Tap ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Access Point"
              }), " on the menu bar."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device"
              }), " to view a list of registered devices."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Choose the Patch or Tag you wish to configure."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "enable-ble-mode",
          children: "Enable BLE Mode"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Bring your phone close to the device."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Toggle on ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BLE Mode"
              }), " in the app."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "set-card-id-output-method",
          children: "Set Card ID Output Method"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Scroll to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Card ID Output Method"
              }), " and tap ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Edit"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Press ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select"
              }), " next to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "User Card ID"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "choose-the-output-method",
          children: "Choose the Output Method"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "None"
              }), ": Select this option if no card ID should be transmitted. This setting is useful for Time & Attendance (T&A) purposes to extend battery life."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Fixed Device"
              }), ": Transmits a constant, pre-programmed card ID. Useful for door locks or intercoms that require RFID cards to be programmed individually. The device log will only display this fixed card ID."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "User Card ID"
              }), ": Transmits a unique card ID for each user, aligning with existing RFID card numbers in access control systems. This allows seamless integration without issuing new physical cards."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Direct Input"
              }), ": Manually specify the card ID to transmit. Useful for custom settings where a single ID must be used across multiple devices."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "save-your-settings",
          children: "Save Your Settings"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Confirm your selections by pressing ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Save"
              }), " while your phone is near the device."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "A success message will confirm the update."
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By following these steps, you can ensure that your Airfob Tag and Patch devices are properly configured to meet your specific access control needs."
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
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
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