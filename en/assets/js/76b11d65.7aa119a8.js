"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["96844"], {
10751: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_facestation_f_2_release_notes_221_mdx_76b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-facestation-f-2-release-notes-221-mdx-76b.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_facestation_f_2_release_notes_221_mdx_76b_namespaceObject = JSON.parse('{"id":"device/facestation_f2/release-notes/221","title":"Firmware Version 2.2.1","description":"Release2024-12-09","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/facestation_f2/release-notes/221.mdx","sourceDirName":"device/facestation_f2/release-notes","slug":"/device/facestation_f2/release-notes/221","permalink":"/en/device/facestation_f2/release-notes/221","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_f2/release-notes/221.mdx","tags":[],"version":"current","frontMatter":{"id":"221","title":"Firmware Version 2.2.1","isTranslationMissing":false},"sidebar":"facestationf2","previous":{"title":"FaceStation F2 Release Notes","permalink":"/en/device/facestation_f2/release-notes/"},"next":{"title":"Firmware Version 2.2.0","permalink":"/en/device/facestation_f2/release-notes/220"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/facestation_f2/release-notes/221.mdx


const frontMatter = {
	id: 221,
	title: 'Firmware Version 2.2.1',
	isTranslationMissing: false
};
const contentTitle = 'Firmware Version 2.2.1 (Build No. 2.2.1_241204)';

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
        id: "firmware-version-221-build-no-221_241204",
        children: "Firmware Version 2.2.1 (Build No. 2.2.1_241204)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release", (0,jsx_runtime.jsx)(Separator, {}), "2024-12-09"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "For devices with the new SE processor, after upgrading the firmware to v2.1.0 or higher, you cannot downgrade to a lower version and downgrade the firmware customized in the lower version."
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
        children: "Changes to a new LCD screen."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "For devices with firmware v2.2.0 or earlier, be sure to upgrade the firmware to the latest version before replacing it with a new LCD display."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The devices using the new LCD display cannot be downgraded to a version earlier than v2.2.1 after upgrading the firmware to v2.2.1 or higher."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After a firmware upgrade, authentication failure occurs with the previously used cards. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When using ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thermal Camera"
            }), " mode with the TCM10 connected, the face authentication screen is displayed abnormally. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.0.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Custom smart cards with the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DESFire Advanced"
            }), " option enabled fail to be recognized. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Some smart cards fail to be recognized in environments using the new SE chip firmware. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.1.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mask All but First Letter"
            }), " option in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auth Result Display Option"
            }), " is not applied correctly. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After transferring more than 50,000 users with 1", ":N", " credentials to the device and then upgrading the firmware, the device freezes. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.1.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When a user with more than two cards enrolled attempts card authentication to the Wiegand output device, the ID of a card other than the authenticated card is output. ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.1.1"
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