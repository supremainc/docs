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
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_custom_wiegand_card_formats_mdx_06a_namespaceObject = JSON.parse('{"id":"platform/biostar_air/custom-wiegand-card-formats","title":"Set Custom Wiegand Card Format","description":"Create and configure a custom Wiegand card format in BioStar Air v2.10—including facility codes, ID segments, parity bits, and bit assignments—to migrate smoothly from an existing access control system.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/custom-wiegand-card-formats.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/custom-wiegand-card-formats","permalink":"/docs/en/platform/biostar_air/custom-wiegand-card-formats","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/custom-wiegand-card-formats.mdx","tags":[],"version":"current","frontMatter":{"id":"custom-wiegand-card-formats","title":"Set Custom Wiegand Card Format","description":"Create and configure a custom Wiegand card format in BioStar Air v2.10—including facility codes, ID segments, parity bits, and bit assignments—to migrate smoothly from an existing access control system.","keywords":["Wiegand","Card format","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Set Up Alerts and Reports","permalink":"/docs/en/platform/biostar_air/settings-alert-report"},"next":{"title":"Configure Account","permalink":"/docs/en/platform/biostar_air/account-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/custom-wiegand-card-formats.mdx


const frontMatter = {
	id: 'custom-wiegand-card-formats',
	title: 'Set Custom Wiegand Card Format',
	description: 'Create and configure a custom Wiegand card format in BioStar Air v2.10—including facility codes, ID segments, parity bits, and bit assignments—to migrate smoothly from an existing access control system.',
	keywords: [
		'Wiegand',
		'Card format',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Wiegand card format list",
  "id": "cardFormatMenu",
  "level": 2
}, {
  "value": "Add a card format",
  "id": "add-a-card-format",
  "level": 2
}, {
  "value": "Edit card format",
  "id": "editCardFormat",
  "level": 2
}, {
  "value": "Delete card format",
  "id": "deleteCardFormat",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirRemove, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Create and configure a custom Wiegand card format in BioStar Air v2.10—including facility codes, ID segments, parity bits, and bit assignments—to migrate smoothly from an existing access control system."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cardFormatMenu",
      children: "Wiegand card format list"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_format_submenu",
        product: "air"
      }), " in the left sidebar. Create, manage, and view special card formats, including Wiegand, SIA, and HID formats. Useful for sites migrating from an existing access control solution with pre-issued cards."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-card-format.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "View all registered Wiegand card formats, including the default formats included in BioStar Air."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the format's name, description, total bits, bit preview, and detailed bit assignments."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configure a new custom card format, including its name, description, total bits, and detailed bit assignments. The system provides a bit preview for visual verification."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "As of v2.10 (August 2025), Wiegand card formats are supported on BioStation 3 and BioEntry W3 devices. All BioStar Air-compatible devices will be supported by the end of 2025."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-a-card-format",
      children: "Add a card format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add a new custom Wiegand card format in addition to the built-in formats."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_format_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_title_popup_add",
            product: "air"
          }), " at the top right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_title_popup_add",
            product: "air"
          }), " window appears, enter the name, optional description, and total bits in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_label_detail",
            product: "air"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-card-format-add-wiegand.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the total bits to activate ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_label_bit_preview",
            product: "air"
          }), ", then configure bit assignment in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_label_bit_assignment",
            product: "air"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-card-format-add-wiegand-assign-bit.png",
          caption: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_bit_preview_facility_code",
                product: "air"
              }), ": Click the toggle switch to enable the facility code. Enter ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_start_bit",
                product: "air"
              }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_end_bit",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_bit_preview_id",
                product: "air"
              }), ": Specify start and end bits to add one or more ID segments."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "wiegand_card_format_label_position",
                product: "air"
              }), ": Specify start and end bits to add odd/even parity bits."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to add the new card format."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editCardFormat",
      children: "Edit card format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Follow these steps to edit an existing Wiegand card format."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_format_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the card format to edit."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_format_title_popup_edit",
            product: "air"
          }), " window appears, edit the required fields."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-card-format-edit-wiegand.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to save the edited card format."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteCardFormat",
      children: "Delete card format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_format_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the checkbox for the card format to delete. Select one or more card formats."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirRemove, {}), " at the top of the list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the message window appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_yes",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The five built-in Wiegand card formats cannot be deleted."
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