"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["14186"], {
56403: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_bioentry_p_2_release_notes_160_mdx_d95_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-bioentry-p-2-release-notes-160-mdx-d95.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_bioentry_p_2_release_notes_160_mdx_d95_namespaceObject = JSON.parse('{"id":"device/bioentry_p2/release-notes/160","title":"Firmware Version 1.6.0","description":"Release2026-03-17","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/bioentry_p2/release-notes/160.mdx","sourceDirName":"device/bioentry_p2/release-notes","slug":"/device/bioentry_p2/release-notes/160","permalink":"/docs/ja/device/bioentry_p2/release-notes/160","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/bioentry_p2/release-notes/160.mdx","tags":[],"version":"current","frontMatter":{"id":"160","title":"Firmware Version 1.6.0","isTranslationMissing":false},"sidebar":"bioentryp2","previous":{"title":"BioEntry P2 Release Notes","permalink":"/docs/ja/device/bioentry_p2/release-notes/"},"next":{"title":"Firmware Version 1.5.2","permalink":"/docs/ja/device/bioentry_p2/release-notes/152"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/bioentry_p2/release-notes/160.mdx


const frontMatter = {
	id: 160,
	title: 'Firmware Version 1.6.0',
	isTranslationMissing: false
};
const contentTitle = 'Firmware Version 1.6.0 (Build No. 1.6.0_260212)';

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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "firmware-version-160-build-no-160_260212",
        children: "Firmware Version 1.6.0 (Build No. 1.6.0_260212)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release", (0,jsx_runtime.jsx)(Separator, {}), "2026-03-17"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "After upgrading the firmware to v1.5.1 or later, it is not able to downgrade to an earlier version of the firmware."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BEP2-OA type of BioEntry P2 model support HID iCLASS card type through SE processor.", (0,jsx_runtime.jsx)("br", {}), "For devices with the new SE processor, after upgrading the firmware to v1.4.4 or later, you cannot downgrade to a lower version and downgrade the firmware customized in the lower version. Devices with existing SE processor can be downgraded to a lower version."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information, check the serial number of the device and contact the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://supremainc.com",
              children: "Suprema"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-features-and-improvements",
      children: "New Features and Improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Reflects global cybersecurity standards and the latest security requirements."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Added identification code to support recognition of the latest cards."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DESFire EV3"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved time synchronization behavior between server and devices."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports feature to set the baud rate of slave devices."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved to distinguish devices that support the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Secure Tamper"
          }), " feature."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ignore Repeated Signals Duration"
          }), " feature, which ignores repetitive authentication signals from the controller when the device is connected to a 3rd party controller via Wiegand."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports not logging events when the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ignore Repeated Signals Duration"
          }), " feature is activated."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports SL1, SL3, and SL1/SL3 Mix Mode for security level compatibility with MIFARE Plus EV1 cards."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SL1: Compatible mode with MIFARE Classic"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SL3: Advanced security mode based on AES"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to not recognize SEOS configuration cards as CSN for 1 minute after device booting."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved so that when authentication is attempted on a door set to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manual Lock"
          }), ", an authentication failure event occurs and a locked message appears."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Supports real-time monitoring of the device's multiple statuses in BioStar X."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved compatibility to support accessing the detail page and changing settings for ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Master Admin"
          }), " supported devices connected as slaves."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Some smart cards fail to be recognized in environments using the new SE chip firmware. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Authentication fails with a ‘period expired’ message when using a smart card issued with a visual face included. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The database does not migrate when using the getOperator function in the SDK. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Access group authentication behaves abnormally according to the schedule (Daily) when DST is applied. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["DESFire smart cards with the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Smart Card Layout"
            }), " set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Secondary Key"
            }), " are recognized as CSN cards. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
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
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Smart Card"
            }), " option does not appear on the device detail page when ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RS-485"
            }), " mode is set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Slave"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When a user with more than two cards enrolled attempts card authentication to the Wiegand output device, the ID of a card other than the authenticated card is output. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
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
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the elevator is set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schedule Unlock"
            }), ", if the RS-485 connection of the slave device is disconnected and then reconnected after the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schedule Unlock"
            }), " ends, the relay does not operate as locked. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Custom smart cards with the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DESFire Advanced"
            }), " option enabled fail to be recognized. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Smart Card Layout"
            }), " set through ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Batch Edit"
            }), " is not applied on the device detail page. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the device log is full and a new event occurs, unintended logs are retrieved with the newly generated event. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When using the BS2_GetDeviceCapabilities function in the SDK to get information supported by the device, the CustomClassicPlus and CustomDesFireEV1 are displayed as False though the device supports custom smart cards. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Device abnormally restarts when changing the device’s Network settings in BioStar 2. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Incorrect maxFacePerUser value being returned for devices lacking face authentication support when retrieving device capabilities via the BS2_GetDeviceCapabilities API. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Some cards are recognized differently from the settings in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Suprema Smart Card"
            }), " option. ", (0,jsx_runtime.jsx)(Badge, {
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