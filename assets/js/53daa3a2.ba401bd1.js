"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8961"], {
84933: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (MDXContent),
  d$: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


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
86844: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_29_troubleshooting_my_mobile_card_isnt_working_mdx_53d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-29-troubleshooting-my-mobile-card-isnt-working-mdx-53d.json
var site_docs_platform_biostar_air_29_troubleshooting_my_mobile_card_isnt_working_mdx_53d_namespaceObject = JSON.parse('{"id":"platform/biostar_air/troubleshooting-suprema-pass-app","title":"Troubleshooting","description":"Learn how to troubleshoot mobile card authentication issues, fix Bluetooth and location permission problems, and resolve connection failures in the Suprema Pass app.","source":"@site/docs/platform/biostar_air/29-troubleshooting-my-mobile-card-isnt-working.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/troubleshooting-suprema-pass-app","permalink":"/docs/platform/biostar_air/troubleshooting-suprema-pass-app","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/29-troubleshooting-my-mobile-card-isnt-working.mdx","tags":[],"version":"current","sidebarPosition":29,"frontMatter":{"id":"troubleshooting-suprema-pass-app","title":"Troubleshooting","description":"Learn how to troubleshoot mobile card authentication issues, fix Bluetooth and location permission problems, and resolve connection failures in the Suprema Pass app.","keywords":["troubleshooting","mobile card","Airfob"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Sensitivity Settings","permalink":"/docs/platform/biostar_air/suprema-pass-app-sensitivity-settings"},"next":{"title":"Why Do I Need to Enable Location Services?","permalink":"/docs/platform/biostar_air/location-services-issues"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(84933);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/29-troubleshooting-my-mobile-card-isnt-working.mdx


const frontMatter = {
	id: 'troubleshooting-suprema-pass-app',
	title: 'Troubleshooting',
	description: 'Learn how to troubleshoot mobile card authentication issues, fix Bluetooth and location permission problems, and resolve connection failures in the Suprema Pass app.',
	keywords: [
		'troubleshooting',
		'mobile card',
		'Airfob'
	],
	isTranslationMissing: false
};
const contentTitle = 'Troubleshooting - My Mobile Card Isn\'t Working';

const assets = {

};




const toc = [..._biostarair_customer_notice/* toc */.d$, {
  "value": "Contact Your BioStar Air Administrator",
  "id": "contact-your-biostar-air-administrator",
  "level": 2
}, {
  "value": "How to Contact Your Space&#39;s Admin:",
  "id": "how-to-contact-your-spaces-admin",
  "level": 3
}, {
  "value": "Was Your Mobile Card Deleted?",
  "id": "was-your-mobile-card-deleted",
  "level": 2
}, {
  "value": "Who to Contact for Mobile Card Reissuance:",
  "id": "who-to-contact-for-mobile-card-reissuance",
  "level": 3
}, {
  "value": "Step-by-Step Troubleshooting",
  "id": "step-by-step-troubleshooting",
  "level": 2
}, {
  "value": "Did You See an Error Message in the Airfob Space App?",
  "id": "did-you-see-an-error-message-in-the-airfob-space-app",
  "level": 3
}, {
  "value": "Is Your Smartphone’s Bluetooth Turned On?",
  "id": "is-your-smartphones-bluetooth-turned-on",
  "level": 3
}, {
  "value": "Allow Location Permissions for the Airfob Space App",
  "id": "allow-location-permissions-for-the-airfob-space-app",
  "level": 3
}, {
  "value": "Check Your Wireless Network and Wi-Fi Connection",
  "id": "check-your-wireless-network-and-wi-fi-connection",
  "level": 3
}, {
  "value": "Did You Use the Selected Connection Method?",
  "id": "did-you-use-the-selected-connection-method",
  "level": 3
}, {
  "value": "Did Your Phone Vibrate When You Tried to Authenticate?",
  "id": "did-your-phone-vibrate-when-you-tried-to-authenticate",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "troubleshooting---my-mobile-card-isnt-working",
        children: "Troubleshooting - My Mobile Card Isn't Working"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If your mobile card doesn't open the door when you authenticate it to the reader device, follow these steps for quick solutions."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contact-your-biostar-air-administrator",
      children: "Contact Your BioStar Air Administrator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The administrator of your space can help with mobile card reissues, temporary smartphone issues, and setup problems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-contact-your-spaces-admin",
      children: "How to Contact Your Space's Admin:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Open the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Suprema Pass"
          }), " app on your smartphone."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the square icon below your mobile card to send a direct inquiry to the site administrator."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "was-your-mobile-card-deleted",
      children: "Was Your Mobile Card Deleted?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you changed your smartphone or reinstalled the Airfob Space app, all mobile cards are deleted for security reasons."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "who-to-contact-for-mobile-card-reissuance",
      children: "Who to Contact for Mobile Card Reissuance:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Company Spaces"
          }), ": HR, IT, Security, or Operations team"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Shared Spaces"
          }), ": Local manager or customer service team"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-by-step-troubleshooting",
      children: "Step-by-Step Troubleshooting"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "did-you-see-an-error-message-in-the-airfob-space-app",
          children: "Did You See an Error Message in the Airfob Space App?"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "If the door doesn't open, try authenticating again with the Suprema Pass app on screen."
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "If you see a pop-up error message, take a screenshot and share it with your administrator."
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "is-your-smartphones-bluetooth-turned-on",
          children: "Is Your Smartphone’s Bluetooth Turned On?"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The mobile card relies on Bluetooth communication between your smartphone and the reader."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Ensure Bluetooth is turned on."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Try toggling Bluetooth off and on again."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Restart your smartphone if needed."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "allow-location-permissions-for-the-airfob-space-app",
          children: "Allow Location Permissions for the Airfob Space App"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Bluetooth and NFC authentication require location permissions."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Go to your smartphone’s settings."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Find the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Suprema Pass"
              }), " app."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Set location access to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Allow"
              }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Always allow"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "check-your-wireless-network-and-wi-fi-connection",
          children: "Check Your Wireless Network and Wi-Fi Connection"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "A stable wireless network or Wi-Fi connection may be required for mobile card authentication."
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "did-you-use-the-selected-connection-method",
          children: "Did You Use the Selected Connection Method?"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Check your connection settings in the Suprema Pass app:"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Tap the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "≡"
              }), " icon in the top right corner."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Connection Method"
              }), " to confirm your authentication mode."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["If using ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Background Mode"
              }), ", the app must remain open in the background."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "did-your-phone-vibrate-when-you-tried-to-authenticate",
          children: "Did Your Phone Vibrate When You Tried to Authenticate?"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "If your phone vibrated but the door didn’t open, try authenticating again with the Suprema Pass app open."
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "If you receive an error message, take a screenshot and share it with your administrator."
        })]
      })]
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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