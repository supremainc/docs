"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["35852"], {
42873: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_biolite_n_2_release_notes_140_mdx_4c8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-biolite-n-2-release-notes-140-mdx-4c8.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_biolite_n_2_release_notes_140_mdx_4c8_namespaceObject = JSON.parse('{"id":"device/biolite_n2/release-notes/140","title":"Firmware Version 1.4.0","description":"Release2021-06-25","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/biolite_n2/release-notes/140.mdx","sourceDirName":"device/biolite_n2/release-notes","slug":"/device/biolite_n2/release-notes/140","permalink":"/docs/ja/device/biolite_n2/release-notes/140","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biolite_n2/release-notes/140.mdx","tags":[],"version":"current","frontMatter":{"id":"140","title":"Firmware Version 1.4.0","isTranslationMissing":false},"sidebar":"bioliten2","previous":{"title":"Firmware Version 1.4.1","permalink":"/docs/ja/device/biolite_n2/release-notes/141"},"next":{"title":"Firmware Version 1.3.2","permalink":"/docs/ja/device/biolite_n2/release-notes/132"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/biolite_n2/release-notes/140.mdx


const frontMatter = {
	id: 140,
	title: 'Firmware Version 1.4.0',
	isTranslationMissing: false
};
const contentTitle = 'Firmware Version 1.4.0 (Build No. 1.4.0_210617)';

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
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "firmware-version-140-build-no-140_210617",
        children: "Firmware Version 1.4.0 (Build No. 1.4.0_210617)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release", (0,jsx_runtime.jsx)(Separator, {}), "2021-06-25"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-features-and-improvements",
      children: "New Features and Improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved manually turning the secure tamper on or off even when the default hash key is set."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Upgraded to the 1.1.1i version of OpenSSL."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Separated event logs of Mobile Access cards and RFID cards."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the connection of the slave device in the Scheduled Unlock Zone was disconnected and then was reconnected, the relay did not maintain the previous status. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The screen was abnormally displayed when the second user authentication was successful on a slave device with dual authentication. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After being disconnected from BioStar 2, an incorrect pop-up message was displayed until they were reconnected. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The device rebooted abnormally when the firmware version was upgraded to 1.3.2 after changing the slave device with firmware version 1.2.0 to a master device. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The relay operated as Off (Lock) after setting the scheduled unlock zone in the elevator and rebooting the master device. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The slave device rebooted abnormally. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Disconnected logs frequently occurred when the device was used with Secure I/O 2. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The Wiegand reader operated as Unlock after setting the Wiegand reader connected to DM-20 to Lock and rebooting the device when using the device with DM-20. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The door remained locked and did not open after rebooting the device when it was set to Manual Unlock. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Ten administrators were still not deleted from the device when initializing the device that has 1,000 assigned administrators. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["It was not able to enter special symbols (., ?, /, *) in the server URL field. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Keystrokes were not working or a delay occurred in a user interface after upgrading the firmware. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When enrolling a new fingerprint to AoC, it was able to authenticate the user with both the new fingerprint data and the existing fingerprint data. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 or earlier"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["It was able to set not only Card Only but the other modes for Wiegand readers. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 or earlier"
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