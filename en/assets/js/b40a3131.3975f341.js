"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["54449"], {
13714: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_e_200_qr_scanner_mdx_b40_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-e-200-qr-scanner-mdx-b40.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_e_200_qr_scanner_mdx_b40_namespaceObject = JSON.parse('{"id":"platform/biostar_air/e200-qr-scanner","title":"Wire and Configure E200 QR Scanner","description":"Wire and configure BioStar Air devices for optimal performance.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/e200-qr-scanner.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/e200-qr-scanner","permalink":"/docs/en/platform/biostar_air/e200-qr-scanner","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/e200-qr-scanner.mdx","tags":[],"version":"current","frontMatter":{"id":"e200-qr-scanner","title":"Wire and Configure E200 QR Scanner","description":"Wire and configure BioStar Air devices for optimal performance.","keywords":["wiring","configuration","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"BioStation 3 SIP Intercom","permalink":"/docs/en/platform/biostar_air/sip-intercom-for-biostation3"},"next":{"title":"IP Camera Support and Settings","permalink":"/docs/en/platform/biostar_air/ip-camera-support-and-configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/e200-qr-scanner.mdx


const frontMatter = {
	id: 'e200-qr-scanner',
	title: 'Wire and Configure E200 QR Scanner',
	description: 'Wire and configure BioStar Air devices for optimal performance.',
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
  "value": "Step 1: Wire",
  "id": "wiring",
  "level": 2
}, {
  "value": "Step 2: Enable the QR reader",
  "id": "enable-qr-reader",
  "level": 2
}, {
  "value": "Step 3: Configure the QR scanner",
  "id": "configure-qr-scanner",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "wiring",
      children: "Step 1: Wire"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Connect the E200-series QR scanner using the included adapter cable as shown below."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The green terminal block has pins labeled ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1 through 4"
          }), ", arranged ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "right-to-left"
          }), " when you face the front of the connector."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "Pin"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Wire color"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Feature"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Black"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Negative / Ground"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Red"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Positive (V+)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Yellow (white stripe)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RS-485 TRXN"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "4"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Blue (white stripe)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RS-485 TRXP"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "The wiring direction is the exact opposite of many other connectors. Check the orientation again before wiring."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Attach the 4-pin connector to the CON port on the bottom of the QR scanner. Because the connector is ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "polarized"
          }), " (keyed), it fits only one way."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/air-hardware-qr-reader-diagram.png",
          width: "80%",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enable-qr-reader",
      children: "Step 2: Enable the QR reader"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Sign in to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "BioStar Air portal"
          }), " (web or app)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the device that has the connected E200 QR scanner."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enable the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_qr_reader",
            product: "air"
          }), " option in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_device_info",
            product: "air"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-details-qr-reader.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to save the changes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Enabling the QR reader prevents you from using other RS-485 devices (for example, an SIO2) on the same reader."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configure-qr-scanner",
      children: "Step 3: Configure the QR scanner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "E200 QR scanner"
      }), " is set to a baud rate of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "115,200"
      }), ". Change the baud rate to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "9,600"
      }), " to use it with Suprema devices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Connect the QR scanner to the device and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "scan the barcode below"
      }), " to apply the new baud rate."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-hardware-qr-reader-barcode.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the wiring is correct and the Suprema device is connected to the network, use the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dynamic QR credentials"
      }), " provided through BioStar Air."]
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