"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["72893"], {
81928: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_xstation_2_release_notes_123_mdx_366_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-xstation-2-release-notes-123-mdx-366.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_xstation_2_release_notes_123_mdx_366_namespaceObject = JSON.parse('{"id":"device/xstation_2/release-notes/123","title":"Firmware Version 1.2.3","description":"Release2023-09-27","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/xstation_2/release-notes/123.mdx","sourceDirName":"device/xstation_2/release-notes","slug":"/device/xstation_2/release-notes/123","permalink":"/docs/ja/device/xstation_2/release-notes/123","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/xstation_2/release-notes/123.mdx","tags":[],"version":"current","frontMatter":{"id":"123","title":"Firmware Version 1.2.3","isTranslationMissing":false},"sidebar":"xstation2","previous":{"title":"Firmware Version 1.3.0","permalink":"/docs/ja/device/xstation_2/release-notes/130"},"next":{"title":"Firmware Version 1.2.2","permalink":"/docs/ja/device/xstation_2/release-notes/122"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/xstation_2/release-notes/123.mdx


const frontMatter = {
	id: 123,
	title: 'Firmware Version 1.2.3',
	isTranslationMissing: false
};
const contentTitle = 'Firmware Version 1.2.3 (Build No. 1.2.3_230926)';

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
        id: "firmware-version-123-build-no-123_230926",
        children: "Firmware Version 1.2.3 (Build No. 1.2.3_230926)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release", (0,jsx_runtime.jsx)(Separator, {}), "2023-09-27"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "XS2-APB, XS2-QAPB and XS2-OAPB types of X-Station 2 model support HID iClass card type through SE processor."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "For devices with the new SE processor, after upgrading the firmware to v1.1.4 or higher, you cannot downgrade to a lower version and downgrade the firmware customized in the lower version."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Devices with existing SE processor can be downgraded to a lower version."
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improved to not recognize SEOS configuration cards as CSN for 1 minute after device booting."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Fixed smartcard output byte order setting. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.2.1"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "When using Wiegand or OSDP output, it is fixed to be affected by the smartcard output byte order when the Wiegand output information is set to send user ID."
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Device does not recognize certain HID iCLASS Seos cards. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The device turns off when the user ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Format Card"
            }), " in BioStar 2. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the device with the working ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Screen Saver"
            }), " is not used for a long time, a black screen occurs and the device freezes. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Restart log is not logged in the device's ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Event Log"
            }), " when the master device is restarted. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["QR authentication does not work on a device that has been using ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "QR/Barcode"
            }), " authentication for a certain period of time (about 49 days or more). ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Device abnormally restarts when changing the device's ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network"
            }), " settings in BioStar 2. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the LAN cable connected to the device is disconnected and reconnected, it takes a long time for IP to be assigned by DHCP. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.2.0"
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