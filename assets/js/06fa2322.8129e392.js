"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4972"], {
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
7456: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_17_monitoring_monitoring_door_status_in_airfob_pro_mdx_06f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-17-monitoring-monitoring-door-status-in-airfob-pro-mdx-06f.json
var site_docs_platform_biostar_air_17_monitoring_monitoring_door_status_in_airfob_pro_mdx_06f_namespaceObject = JSON.parse('{"id":"platform/biostar_air/monitoring-door-status","title":"Monitoring Door Status","description":"Learn how to monitor real-time door status, remotely control locks, and manage door access using both web portal and mobile app in BioStar Air.","source":"@site/docs/platform/biostar_air/17-monitoring-monitoring-door-status-in-airfob-pro.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/monitoring-door-status","permalink":"/docs/platform/biostar_air/monitoring-door-status","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/17-monitoring-monitoring-door-status-in-airfob-pro.mdx","tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"id":"monitoring-door-status","title":"Monitoring Door Status","description":"Learn how to monitor real-time door status, remotely control locks, and manage door access using both web portal and mobile app in BioStar Air.","keywords":["monitoring","door status","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Event Logs and Audit Logs","permalink":"/docs/platform/biostar_air/event-and-audit-logs"},"next":{"title":"Managing Roll Call & Fire Muster","permalink":"/docs/platform/biostar_air/managing-roll-call-fire-muster"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(4933);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/17-monitoring-monitoring-door-status-in-airfob-pro.mdx


const frontMatter = {
	id: 'monitoring-door-status',
	title: 'Monitoring Door Status',
	description: 'Learn how to monitor real-time door status, remotely control locks, and manage door access using both web portal and mobile app in BioStar Air.',
	keywords: [
		'monitoring',
		'door status',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "Feature Overview",
  "id": "feature-overview",
  "level": 2
}, ..._biostarair_customer_notice/* toc */.d$, {
  "value": "Monitoring Door Status in the Web Portal",
  "id": "monitoring-door-status-web-portal",
  "level": 2
}, {
  "value": "Understanding Door Status Indicators",
  "id": "understanding-door-status-indicators",
  "level": 3
}, {
  "value": "Remotely Unlocking a Door",
  "id": "remotely-unlocking-a-door",
  "level": 3
}, {
  "value": "Permanently Unlocking a Door",
  "id": "permanently-unlocking-a-door",
  "level": 3
}, {
  "value": "Forcing a Door to Lock",
  "id": "forcing-a-door-to-lock",
  "level": 3
}, {
  "value": "Monitoring Door Status in the BioStar Air App",
  "id": "monitoring-door-status-app",
  "level": 2
}, {
  "value": "Viewing Door Information",
  "id": "viewing-door-information",
  "level": 3
}, {
  "value": "Controlling Door Access from the App",
  "id": "controlling-door-access-app",
  "level": 3
}, {
  "value": "Refreshing Door Status",
  "id": "refreshing-door-status",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {YouTube} = _components;
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-overview",
      children: "Feature Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Door Status feature in BioStar Air provides real-time monitoring of doors connected to the system. Administrators can check whether doors are locked or unlocked, view door sensor status, and remotely control access by locking or unlocking doors."
    }), "\n", (0,jsx_runtime.jsx)(YouTube, {
      videoId: "_nxSRwst480"
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoring-door-status-web-portal",
      children: "Monitoring Door Status in the Web Portal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To access door status in the BioStar Air web portal:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Door Status"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The system will display a list of doors currently connected."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "understanding-door-status-indicators",
      children: "Understanding Door Status Indicators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each door entry includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Relay Status"
          }), ": Indicates whether the door is locked or unlocked."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Door Sensor"
          }), ": Shows whether the door is physically open or closed."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remotely-unlocking-a-door",
      children: "Remotely Unlocking a Door"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If a door is online and connected to BioStar Air, you can unlock it remotely:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Open Door"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The relay status will update to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Unlocked"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "After a set duration, the door will return to its locked state."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "permanently-unlocking-a-door",
      children: "Permanently Unlocking a Door"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To keep a door unlocked indefinitely:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Menu"
          }), " icon next to the door."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Unlock Mode"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The relay will remain in an unlocked state."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To restore normal operation, select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release"
      }), " in the menu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "forcing-a-door-to-lock",
      children: "Forcing a Door to Lock"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To lock a door regardless of the current schedule:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Menu"
          }), " icon next to the door."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Lock Mode"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The relay will switch to a locked state, preventing entry."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To release the door back to normal operation, click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoring-door-status-app",
      children: "Monitoring Door Status in the BioStar Air App"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To check door status using the BioStar Air mobile app:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Open the BioStar Air app."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring"
          }), " tab at the bottom of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Door Status"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The system will display all doors currently connected."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "viewing-door-information",
      children: "Viewing Door Information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The app provides the following details for each door:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Door Name"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Group Assignment"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Relay Status"
          }), " (Locked/Unlocked)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Door Sensor"
          }), " (Open/Closed)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "controlling-door-access-app",
      children: "Controlling Door Access from the App"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the door is connected to the network, you can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Tap Open"
          }), " to remotely unlock the door."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Set Lock/Unlock Modes"
          }), " to override schedules."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Release"
          }), " a locked or unlocked mode to return to normal operation."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "refreshing-door-status",
      children: "Refreshing Door Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To update the current status of doors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Refresh"
          }), " button at the top of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The system will retrieve the latest status of all doors."
        }), "\n"]
      }), "\n"]
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