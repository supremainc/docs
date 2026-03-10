"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["53093"], {
97928: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_release_notes_v_2_11_mdx_7e9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-release-notes-v-2-11-mdx-7e9.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_release_notes_v_2_11_mdx_7e9_namespaceObject = JSON.parse('{"id":"platform/biostar_air/release-notes/v2_11","title":"v2.11","description":"Release notes for BioStar Air v2.11","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/release-notes/v2_11.mdx","sourceDirName":"platform/biostar_air/release-notes","slug":"/platform/biostar_air/release-notes/v2_11","permalink":"/docs/en/platform/biostar_air/release-notes/v2_11","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/release-notes/v2_11.mdx","tags":[],"version":"current","frontMatter":{"id":"v2_11","title":"v2.11","description":"Release notes for BioStar Air v2.11","keywords":["BioStar Air","release notes","v2.11"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Troubleshoot Video Playback Issues","permalink":"/docs/en/platform/biostar_air/video-troubleshooting"},"next":{"title":"v2.10","permalink":"/docs/en/platform/biostar_air/release-notes/v2_10"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/release-notes/v2_11.mdx


const frontMatter = {
	id: 'v2_11',
	title: 'v2.11',
	description: 'Release notes for BioStar Air v2.11',
	keywords: [
		'BioStar Air',
		'release notes',
		'v2.11'
	],
	isTranslationMissing: false
};
const contentTitle = 'BioStar Air 2.11 - Release Highlights';

const assets = {

};



const toc = [{
  "value": "RFID Card Active Sync on XPass 2 and XStation 2",
  "id": "rfid-card-active-sync-on-xpass-2-and-xstation-2",
  "level": 2
}, {
  "value": "Interface Updates",
  "id": "interface-updates",
  "level": 2
}, {
  "value": "Device List",
  "id": "device-list",
  "level": 3
}, {
  "value": "Personal Information Masking",
  "id": "personal-information-masking",
  "level": 3
}, {
  "value": "Reports",
  "id": "reports",
  "level": 3
}, {
  "value": "User List",
  "id": "user-list",
  "level": 3
}, {
  "value": "Partner Portal",
  "id": "partner-portal",
  "level": 3
}, {
  "value": "BioStation 3 – Video Gateway Support",
  "id": "biostation-3--video-gateway-support",
  "level": 2
}, {
  "value": "Event Logs &amp; Alerts",
  "id": "event-logs--alerts",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {IcAirRef} = _components;
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "biostar-air-211---release-highlights",
        children: "BioStar Air 2.11 - Release Highlights"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "November 25, 2025"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air 2.11 continues our commitment to making cloud access control more reliable than traditional on-premise systems. This release introduces major improvements to offline behavior, updates to the admin experience, and powerful new capabilities for BioStation 3."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Whether you're managing a single site or dozens of locations, this update makes BioStar Air easier to use, more resilient, and ready for more complex deployments."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rfid-card-active-sync-on-xpass-2-and-xstation-2",
      children: "RFID Card Active Sync on XPass 2 and XStation 2"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As part of our long-term goal to exceed the reliability of on-premise access control, we’ve fully re-engineered how BioStar Air handles credential redundancy. With the new ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Sync"
      }), " architecture, readers continue working normally even when disconnected from the network."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All primary credential types remain fully functional during network outages:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RF Cards"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Biometric Templates"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Mobile Credentials"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "PINs"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "You'll still need a network connection to use Dynamic QR and LinkPass Credentials"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Readers still plug in and sync automatically, with no new installation steps. Credential data is continuously synchronized in the background."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This feature is being rolled out by device type:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStation 3 / BioEntry W3"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Available now. No firmware update required."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "XPass 2"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Rolling out beginning ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Nov 25, 2025"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If firmware v2.11 is not visible yet, please be patient. All customers will receive it by ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dec 9"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "XStation 2"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Scheduled for release on ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dec 23, 2025"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interface-updates",
      children: "Interface Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We've made several UI enhancements to simplify everyday administration and reduce repetitive actions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-list",
      children: "Device List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Refresh Status"
          }), "(", (0,jsx_runtime.jsx)(IcAirRef, {
            width: "24px",
            height: "24px"
          }), ") button for situations where the displayed status may be out of date."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can now ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "delete devices directly from the web portal"
          }), " without using the mobile app. ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Note: Devices must have an active network connection or they will still need to be deleted with the mobile app. Supported on the same schedule as firmware updates listed above."
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "personal-information-masking",
      children: "Personal Information Masking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A new ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mask Personal Information"
      }), " button hides sensitive user details while viewing event logs, admin logs, or user information on-screen. Helpful for audits or shared-screen reviews."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reports",
      children: "Reports"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All dropdown filters are now ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "searchable"
      }), ", making it easier to build report templates quickly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-list",
      children: "User List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Improved the user-selection UI. Admins now see a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "visual count of selected users"
      }), " before performing batch actions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "partner-portal",
      children: "Partner Portal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "user and device counts"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "site deletion workflow"
          }), " warns you if devices are still registered to the site."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "biostation-3--video-gateway-support",
      children: "BioStation 3 – Video Gateway Support"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStation 3 can now operate as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "video gateway"
      }), ", allowing it to process and relay video streams from multiple 4K cameras simultaneously. This gives sites a powerful and flexible way to deploy video without additional hardware."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To enable:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Update your BioStation 3 firmware."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Open Device Settings for your BioStation 3."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Toggle ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Video Gateway"
          }), " on."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Refer to our knowledge base article on ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../ip-camera-support-and-configuration",
          children: "IP Camera Support and Configuration for BioStar Air"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "event-logs--alerts",
      children: "Event Logs & Alerts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Previously, some network-disconnection logs were stored on the device and only uploaded once the reader reconnected. This caused delays in alert visibility."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With v2.11:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Network disconnection events are now generated server-side"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Alerts appear immediately when a reader loses connectivity"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Admins can respond more quickly to wiring issues, outages, or unexpected device behavior"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This ensures consistent, real-time awareness, even when devices go offline."
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