"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1125"], {
76730: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_wiring_and_configuration_mdx_b75_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-wiring-and-configuration-mdx-b75.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_wiring_and_configuration_mdx_b75_namespaceObject = JSON.parse('{"id":"platform/biostar_air/wiring-and-configuration","title":"E200 QR Scanner - Wiring and Configuration","description":"Learn how to wire and configure BioStar Air devices for optimal performance.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/wiring-and-configuration.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/wiring-and-configuration","permalink":"/docs/en/platform/biostar_air/wiring-and-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/wiring-and-configuration.mdx","tags":[],"version":"current","frontMatter":{"id":"wiring-and-configuration","title":"E200 QR Scanner - Wiring and Configuration","description":"Learn how to wire and configure BioStar Air devices for optimal performance.","keywords":["wiring","configuration","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Integration Quickstart","permalink":"/docs/en/platform/biostar_air/integration-quickstart"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/wiring-and-configuration.mdx


const frontMatter = {
	id: 'wiring-and-configuration',
	title: 'E200 QR Scanner - Wiring and Configuration',
	description: 'Learn how to wire and configure BioStar Air devices for optimal performance.',
	keywords: [
		'wiring',
		'configuration',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Step 1: Wiring",
  "id": "wiring",
  "level": 2
}, {
  "value": "Step 2: Enable QR Reader",
  "id": "enable-qr-reader",
  "level": 2
}, {
  "value": "Step 3: Configure the QR Scanner",
  "id": "configure-qr-scanner",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "wiring",
      children: "Step 1: Wiring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wire the E200 series QR scanner using the included adapter cable, as shown below."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The green terminal block has pins labeled ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1 to 4"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "right to left"
          }), " (when facing the front of the connector)."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "This is the opposite of many other connectors—double-check orientation before wiring._"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Pin"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Wire Color"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Function"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Black"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Negative / Ground"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Red"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Positive (V+)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Yellow (white stripe)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RS-485 TRXN"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "4"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Blue (white stripe)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RS-485 TRXP"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Connect the white 4-pin pin-and-socket connector to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CON"
          }), "port on the bottom of the QR scanner."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["This connector is ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "polarized"
          }), " (with a groove), so it only fits in one direction."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/air-hardware-qr-reader-diagram.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enable-qr-reader",
      children: "Step 2: Enable QR Reader"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar Air"
      }), " admin portal (web or app), navigate to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Device Management"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Devices"
      }), " → click or tap the device with the E200 QR scanner connected."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Under ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Details"
          }), ", find the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "QR Reader"
          }), " option."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click or tap the toggle switch to turn it ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "on"
          }), ". Refer to the image on the right."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Enabling the QR reader disables the use of other RS-485-connected devices (e.g., SIO2) on the same reader."
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-hardware-edit-device-qr-reader.jpg",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configure-qr-scanner",
      children: "Step 3: Configure the QR Scanner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "E200 QR scanner"
      }), " is set to a baud rate of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "115,200"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To use it with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Suprema readers"
      }), ", you must change the baud rate to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "9,600"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After connecting the QR scanner to the reader, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "scan the barcode below"
        }), " to apply the new baud rate."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-hardware-qr-reader-barcode.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "That’s it!"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As long as your wiring is correct and your Suprema reader has an active network connection, you’ll be able to use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dynamic QR credentials"
      }), " provisioned through BioStar Air."]
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