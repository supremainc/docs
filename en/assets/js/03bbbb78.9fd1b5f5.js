"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["99082"], {
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
83663: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_troubleshooting_suprema_pass_app_mdx_03b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-troubleshooting-suprema-pass-app-mdx-03b.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_troubleshooting_suprema_pass_app_mdx_03b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/troubleshooting-suprema-pass-app","title":"Fix Mobile Card Issues","description":"Resolve mobile card authentication, Bluetooth and location permission issues, and connection failures in the Suprema Pass app.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/troubleshooting-suprema-pass-app.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/troubleshooting-suprema-pass-app","permalink":"/docs/en/platform/biostar_air/troubleshooting-suprema-pass-app","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/troubleshooting-suprema-pass-app.mdx","tags":[],"version":"current","frontMatter":{"id":"troubleshooting-suprema-pass-app","title":"Fix Mobile Card Issues","description":"Resolve mobile card authentication, Bluetooth and location permission issues, and connection failures in the Suprema Pass app.","keywords":["Troubleshooting","Mobile card","Airfob"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Why Am I Being Asked to Enable Location Services?","permalink":"/docs/en/platform/biostar_air/location-services-issues"},"next":{"title":"Troubleshoot Video Playback Issues","permalink":"/docs/en/platform/biostar_air/video-troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/troubleshooting-suprema-pass-app.mdx


const frontMatter = {
	id: 'troubleshooting-suprema-pass-app',
	title: 'Fix Mobile Card Issues',
	description: 'Resolve mobile card authentication, Bluetooth and location permission issues, and connection failures in the Suprema Pass app.',
	keywords: [
		'Troubleshooting',
		'Mobile card',
		'Airfob'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "Contact your BioStar Air administrator",
  "id": "contactbsairAdmin",
  "level": 2
}, {
  "value": "Was the mobile card deleted?",
  "id": "mobileCardDeleted",
  "level": 2
}, {
  "value": "Step-by-step troubleshooting guide",
  "id": "troubleshootingSteps",
  "level": 2
}, {
  "value": "Did an error message appear in the Suprema Pass app?",
  "id": "did-an-error-message-appear-in-the-suprema-pass-app",
  "level": 3
}, {
  "value": "Is Bluetooth enabled on your mobile device?",
  "id": "is-bluetooth-enabled-on-your-mobile-device",
  "level": 3
}, {
  "value": "Allow location permission for the Suprema Pass app",
  "id": "allow-location-permission-for-the-suprema-pass-app",
  "level": 3
}, {
  "value": "Check cellular network and Wi-Fi connections",
  "id": "check-cellular-network-and-wi-fi-connections",
  "level": 3
}, {
  "value": "Are you using the selected connection method?",
  "id": "are-you-using-the-selected-connection-method",
  "level": 3
}, {
  "value": "Did the mobile device vibrate during authentication?",
  "id": "did-the-mobile-device-vibrate-during-authentication",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcFunc, IcHamberg, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcFunc) _missingMdxReference("IcFunc", true);
  if (!IcHamberg) _missingMdxReference("IcHamberg", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "If the mobile card authenticates with the device but the door does not open, follow these steps to resolve the issue."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contactbsairAdmin",
      children: "Contact your BioStar Air administrator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The site administrator can help with mobile card reissuance, temporary mobile device issues, and setting issues."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-contact-admin.png",
      width: "78%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the Suprema Pass app on your mobile device, tap the ", (0,jsx_runtime.jsx)(IcFunc, {}), " icon below the mobile card."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the bottom panel appears, tap ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Contact Admin"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the pop-up window appears, enter a title and message."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Send"
          }), " to send a message to the administrator."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mobileCardDeleted",
      children: "Was the mobile card deleted?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you changed your mobile device or reinstalled the Suprema Pass app, all mobile cards were deleted for security reasons. Contact the following for mobile card reissuance."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Company Spaces"
          }), ": HR, IT, security, or operations team"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Shared Spaces"
          }), ": regional administrator or customer service team"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshootingSteps",
      children: "Step-by-step troubleshooting guide"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "did-an-error-message-appear-in-the-suprema-pass-app",
          children: "Did an error message appear in the Suprema Pass app?"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "If the door does not open, try authenticating again in the Suprema Pass app."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "If an error message appears, capture a screenshot and share it with your site administrator."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "is-bluetooth-enabled-on-your-mobile-device",
          children: "Is Bluetooth enabled on your mobile device?"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The mobile card relies on Bluetooth communication between the mobile device and the access controller."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Make sure Bluetooth is enabled."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Turn Bluetooth off and back on."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Restart the mobile device if necessary."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "allow-location-permission-for-the-suprema-pass-app",
          children: "Allow location permission for the Suprema Pass app"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Bluetooth and NFC authentication require location permission."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Settings"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Apps"
              }), " on the mobile device."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Suprema Pass"
              }), " app."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Under ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Permissions"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Location"
              }), ", set location access to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Allow all the time"
              }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Allow only while using the app"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "check-cellular-network-and-wi-fi-connections",
          children: "Check cellular network and Wi-Fi connections"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "A stable cellular network or Wi-Fi connection is required for mobile card authentication."
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "are-you-using-the-selected-connection-method",
          children: "Are you using the selected connection method?"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the connection method in the Suprema Pass app."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["On the Suprema Pass app home screen, tap ", (0,jsx_runtime.jsx)(IcHamberg, {}), " in the upper right corner."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Check authentication mode in ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Connection Method"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Keep the app open in the background when using ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Background Mode"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "did-the-mobile-device-vibrate-during-authentication",
          children: "Did the mobile device vibrate during authentication?"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "If the mobile device vibrated but the door did not open, open the Suprema Pass app and try authenticating again."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "If an error message appears, capture a screenshot and share it with your site administrator."
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