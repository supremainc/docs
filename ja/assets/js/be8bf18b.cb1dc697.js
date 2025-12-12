"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2240"], {
34668: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_bioentry_w_2_release_notes_182_mdx_be8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-bioentry-w-2-release-notes-182-mdx-be8.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_bioentry_w_2_release_notes_182_mdx_be8_namespaceObject = JSON.parse('{"id":"device/bioentry_w2/release-notes/182","title":"Firmware Version 1.8.2","description":"Release2024-11-01","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/bioentry_w2/release-notes/182.mdx","sourceDirName":"device/bioentry_w2/release-notes","slug":"/device/bioentry_w2/release-notes/182","permalink":"/docs/ja/device/bioentry_w2/release-notes/182","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/bioentry_w2/release-notes/182.mdx","tags":[],"version":"current","frontMatter":{"id":"182","title":"Firmware Version 1.8.2","isTranslationMissing":false},"sidebar":"bioentryw2","previous":{"title":"BioEntry W2 Release Notes","permalink":"/docs/ja/device/bioentry_w2/release-notes/"},"next":{"title":"Firmware Version 1.8.1","permalink":"/docs/ja/device/bioentry_w2/release-notes/181"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/bioentry_w2/release-notes/182.mdx


const frontMatter = {
	id: 182,
	title: 'Firmware Version 1.8.2',
	isTranslationMissing: false
};
const contentTitle = 'Firmware Version 1.8.2 (Build No. 1.8.2_241025)';

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
        id: "firmware-version-182-build-no-182_241025",
        children: "Firmware Version 1.8.2 (Build No. 1.8.2_241025)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release", (0,jsx_runtime.jsx)(Separator, {}), "2024-11-01"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Devices with the new SE processor cannot downgrade to a lower version after upgrading the firmware to v1.7.1 or later. Devices with existing SE processor can be downgraded to a lower version."
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
            children: ["When the device is restarted with the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary Key"
            }), " set only in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Suprema Smart Card Layout"
            }), " and the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Secondary Key"
            }), " set only in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Smart Card Layout"
            }), ", the device recognizes the Custom Smart Card as a CSN card. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Some devices fail to boot after a firmware upgrade. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.0"
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
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Smart Card Layout"
            }), " set through ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Batch Edit"
            }), " is not applied on the device detail page. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the device log is full and a new event occurs, unintended logs are retrieved with the newly generated event. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.7.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time Synchronization with Server"
            }), " option is disabled and the device time is changed, the device restarts abnormally. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Some smart cards fail to be recognized in environments using the new SE chip firmware. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.7.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["DESFire smart cards with the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Smart Card Layout"
            }), " set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Secondary Key"
            }), " are recognized as CSN cards. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.8.0"
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
              children: "1.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Custom smart cards with the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DESFire Advanced"
            }), " option enabled fail to be recognized. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.8.0"
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