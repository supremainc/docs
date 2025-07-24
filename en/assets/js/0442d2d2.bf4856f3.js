"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4511"], {
1453: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
2232: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_18_advanced_features_managing_roll_call_and_fire_muster_mdx_044_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-18-advanced-features-managing-roll-call-and-fire-muster-mdx-044.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_18_advanced_features_managing_roll_call_and_fire_muster_mdx_044_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-roll-call-fire-muster","title":"Managing Roll Call & Fire Muster","description":"Learn how to set up muster points, initiate emergency roll calls, track user safety status, and generate roll call history reports in BioStar Air.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/18-advanced-features-managing-roll-call-and-fire-muster.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-roll-call-fire-muster","permalink":"/docs/en/platform/biostar_air/managing-roll-call-fire-muster","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/18-advanced-features-managing-roll-call-and-fire-muster.mdx","tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"id":"managing-roll-call-fire-muster","title":"Managing Roll Call & Fire Muster","description":"Learn how to set up muster points, initiate emergency roll calls, track user safety status, and generate roll call history reports in BioStar Air.","keywords":["roll call","fire muster","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Monitoring Door Status","permalink":"/docs/en/platform/biostar_air/monitoring-door-status"},"next":{"title":"Configuring Reports","permalink":"/docs/en/platform/biostar_air/configuring-reports"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(1453);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/18-advanced-features-managing-roll-call-and-fire-muster.mdx


const frontMatter = {
	id: 'managing-roll-call-fire-muster',
	title: 'Managing Roll Call & Fire Muster',
	description: 'Learn how to set up muster points, initiate emergency roll calls, track user safety status, and generate roll call history reports in BioStar Air.',
	keywords: [
		'roll call',
		'fire muster',
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
}, {
  "value": "Setting Up Muster Points",
  "id": "setting-up-muster-points",
  "level": 2
}, {
  "value": "Best Practices for Muster Points",
  "id": "best-practices",
  "level": 3
}, {
  "value": "Starting a Roll Call in the BioStar Air App",
  "id": "starting-a-roll-call-in-the-biostar-air-app",
  "level": 2
}, {
  "value": "Marking Users Safe",
  "id": "marking-users-safe",
  "level": 3
}, {
  "value": "Tracking Roll Call Progress",
  "id": "tracking-roll-call-progress",
  "level": 3
}, {
  "value": "Viewing Roll Call History",
  "id": "viewing-roll-call-history",
  "level": 2
}, {
  "value": "Key Considerations",
  "id": "key-considerations",
  "level": 2
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
      children: "The Roll Call & Fire Muster feature in BioStar Air allows organizations to track which employees have safely exited a building during an emergency. By setting up muster points and using the BioStar Air app, administrators can quickly account for all users and generate roll call history reports."
    }), "\n", (0,jsx_runtime.jsx)(YouTube, {
      videoId: "F0dnR7VmfAo"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-up-muster-points",
      children: "Setting Up Muster Points"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A muster point is a designated area where users can tap their credentials to mark themselves as safe during an emergency."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Advanced"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Roll Call"
          }), " in the BioStar Air portal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Muster Point"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), " (e.g., \"East Parking Lot\")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter an optional ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Description"
          }), " (e.g., \"Third pillar in the parking structure\")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add devices:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Add Device"
              }), " to assign a specific reader."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Alternatively, select a ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device Group"
              }), " to include multiple muster point readers."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add user groups:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "User Groups"
              }), " that should report to this muster point."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Add"
              }), " after each selection."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), " to finalize the muster point setup."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "best-practices",
      children: "Best Practices for Muster Points"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "device groups"
          }), " instead of individual devices to allow multiple muster points."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ensure that ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "only relevant users"
          }), " are assigned to specific muster points, especially in large campuses with multiple buildings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Wired access control readers support both ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "mobile and card authentication"
          }), ", while Airfob Tag and Airfob Patch require mobile credentials."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "starting-a-roll-call-in-the-biostar-air-app",
      children: "Starting a Roll Call in the BioStar Air App"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To initiate a roll call using the BioStar Air mobile app:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Open the BioStar Air app."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "All Menu"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Roll Call"
          }), " (under Advanced Features)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Roll Call Start"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The system will display a list of all users currently on-site."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "marking-users-safe",
      children: "Marking Users Safe"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users can mark themselves safe by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tapping their credential at an assigned muster point."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Administrators manually marking users safe by pressing and holding the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Checkmark"
          }), " button next to their name."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tracking-roll-call-progress",
      children: "Tracking Roll Call Progress"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Users can be filtered by their ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Muster Group"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The search function allows finding specific individuals."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The roll call is complete when:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "All users are marked safe."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "An administrator manually marks all users as safe."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "24 hours pass without completion."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewing-roll-call-history",
      children: "Viewing Roll Call History"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To check past roll calls:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Roll Call"
          }), " in the BioStar Air portal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "History"
          }), " tab."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select a completed roll call to view:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "A list of all logged access events during the roll call."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Details on whether users were marked safe or unaccounted for."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Time of roll call initiation and completion."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-considerations",
      children: "Key Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ensure muster points are properly assigned"
          }), " to user groups to prevent confusion."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Test the Roll Call feature"
          }), " regularly to ensure smooth operation in case of an actual emergency."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Access logs"
          }), " can be used to verify attendance for compliance with safety regulations."]
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