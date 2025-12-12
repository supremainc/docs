"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["22974"], {
22514: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_xpass_2_release_notes_142_mdx_d90_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-xpass-2-release-notes-142-mdx-d90.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_xpass_2_release_notes_142_mdx_d90_namespaceObject = JSON.parse('{"id":"device/xpass_2/release-notes/142","title":"Firmware Version 1.4.2","description":"Release2024-10-28","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/xpass_2/release-notes/142.mdx","sourceDirName":"device/xpass_2/release-notes","slug":"/device/xpass_2/release-notes/142","permalink":"/docs/ja/device/xpass_2/release-notes/142","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/xpass_2/release-notes/142.mdx","tags":[],"version":"current","frontMatter":{"id":"142","title":"Firmware Version 1.4.2","isTranslationMissing":false},"sidebar":"xpass2","previous":{"title":"Firmware Version 1.4.3","permalink":"/docs/ja/device/xpass_2/release-notes/143"},"next":{"title":"Firmware Version 1.4.1","permalink":"/docs/ja/device/xpass_2/release-notes/141"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/xpass_2/release-notes/142.mdx


const frontMatter = {
	id: 142,
	title: 'Firmware Version 1.4.2',
	isTranslationMissing: false
};
const contentTitle = 'Firmware Version 1.4.2 (Build No. 1.4.2_241025)';

const assets = {

};



const toc = [{
  "value": "New Features and Improvements",
  "id": "new-features-and-improvements",
  "level": 2
}, {
  "value": "Bug Fixes",
  "id": "bug-fixes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "firmware-version-142-build-no-142_241025",
        children: "Firmware Version 1.4.2 (Build No. 1.4.2_241025)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release", (0,jsx_runtime.jsx)(Separator, {}), "2024-10-28"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Devices with the new BLE chip cannot downgrade to a lower version after upgrading the firmware to v1.3.1 or higher. Devices with existing BLE chips can be downgraded to a lower version."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information, check the serial number of the device and contact the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://supremainc.com",
          children: "Suprema"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-features-and-improvements",
      children: "New Features and Improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports for device firmware upgrade via the Device Manager application."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Added feature to set the baud rate of slave devices."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to get user update succeeded event log using the GetLogWithFilter function in the SDK."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved RS-485 communication quality."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the device log is full and a new event occurs, unintended logs are retrieved with the newly generated event. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When running the Device Manager application v1.1.8 on certain iOS, the device does not connect. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Input card ID from keypad"
            }), " option is enabled, there is an issue where the card ID value recorded in the event log differs from the entered value when an unassigned card ID is input using the keypad. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When a user with a 32-character user ID authenticates to the device while the device is not connected to the server, the authentication event log is not updated in BioStar 2 even after the device is reconnected to the server. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The user ID stored as a 32-character string is truncated to only 31 characters in a specific event log. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After a firmware upgrade, authentication failure occurs with the previously used cards. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time Synchronization with Server"
            }), " option is disabled and the device time is changed, the device restarts abnormally. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RS-485"
            }), " mode is set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Slave"
            }), ", the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Smart Card Layout"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Byte Order"
            }), " of the device are not saved as set. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the device is restarted with the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary Key"
            }), " set only in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Suprema Smart Card Layout"
            }), " and the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Secondary Key"
            }), " set only in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Smart Card Layout"
            }), ", the device recognizes the Custom Smart Card as a CSN card. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Some smart cards fail to be recognized in environments using the new SE chip firmware. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["DESFire smart cards with the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Smart Card Layout"
            }), " set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Secondary Key"
            }), " are recognized as CSN cards. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Custom smart cards with the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DESFire Advanced"
            }), " option enabled fail to be recognized. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
          }), "\n"]
        }), "\n"]
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