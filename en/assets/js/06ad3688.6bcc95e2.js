"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["33818"], {
49935: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_custom_wiegand_card_formats_mdx_06a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-custom-wiegand-card-formats-mdx-06a.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_custom_wiegand_card_formats_mdx_06a_namespaceObject = JSON.parse('{"id":"platform/biostar_air/custom-wiegand-card-formats","title":"Custom Wiegand Card Formats","description":"Learn how to create and configure custom Wiegand card formats in BioStar Air v2.10, including facility codes, ID segments, parity bits, and bit assignments for seamless migration from existing access control systems.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/custom-wiegand-card-formats.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/custom-wiegand-card-formats","permalink":"/en/platform/biostar_air/custom-wiegand-card-formats","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/custom-wiegand-card-formats.mdx","tags":[],"version":"current","frontMatter":{"id":"custom-wiegand-card-formats","title":"Custom Wiegand Card Formats","description":"Learn how to create and configure custom Wiegand card formats in BioStar Air v2.10, including facility codes, ID segments, parity bits, and bit assignments for seamless migration from existing access control systems.","keywords":["Wiegand","card formats","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Managing Sites with your Phone","permalink":"/en/platform/biostar_air/managing-sites-with-phone"},"next":{"title":"Managing Door Access","permalink":"/en/platform/biostar_air/managing-door-access"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/custom-wiegand-card-formats.mdx


const frontMatter = {
	id: 'custom-wiegand-card-formats',
	title: 'Custom Wiegand Card Formats',
	description: 'Learn how to create and configure custom Wiegand card formats in BioStar Air v2.10, including facility codes, ID segments, parity bits, and bit assignments for seamless migration from existing access control systems.',
	keywords: [
		'Wiegand',
		'card formats',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Navigating to the Feature",
  "id": "navigating-to-the-feature",
  "level": 2
}, {
  "value": "Card Format Overview",
  "id": "card-format-overview",
  "level": 2
}, {
  "value": "Adding a Wiegand Card Format",
  "id": "adding-a-wiegand-card-format",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Introduced in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v2.10"
      }), " (August 2025), Wiegand Card Format support is now available for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStation 3"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioEntry W3"
      }), " devices. Support for all BioStar Air-compatible readers is planned by the end of 2025."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigating-to-the-feature",
      children: "Navigating to the Feature"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Card Format"
      }), " in the BioStar Air Portal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "card-format-overview",
      children: "Card Format Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create, manage, and view special card formats, including ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wiegand formats"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SIA"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HID formats"
      }), ". This feature is especially useful for sites migrating from existing access control solutions where cards are already provisioned."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Card Format List"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View all registered Wiegand card formats, including default formats included in BioStar Air (26-bit SIA Standard, HID 37-bit, HID Corporate 1000)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "View Wiegand Card Format Details"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "See the name, description, total bits, bit preview, and detailed bit assignments."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add Wiegand Card Format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configure a new custom card format, including name, description, total bits, and detailed bit assignments. The system provides a bit preview for visual verification."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-a-wiegand-card-format",
      children: "Adding a Wiegand Card Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Detail"
          }), ": Enter the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), ", optional ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Description"
          }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Total Bits"
          }), " for the format."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bit Preview"
          }), ": View a visual representation of all bits in the format, showing assignments for Facility Code, ID, Parity Bits, and unassigned bits."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bit Assignment"
          }), " Configure:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Facility Code"
              }), ": Enable/disable and assign bit ranges."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ID"
              }), ": Add one or more ID segments with start and end bits."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Parity Bit"
              }), ": Add Odd/Even parity bits with defined start and end ranges."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), " to register the new format."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Wiegand Card Format"
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-custom-wiegand-card-format-01.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-custom-wiegand-card-format-02.png",
      alone: true
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