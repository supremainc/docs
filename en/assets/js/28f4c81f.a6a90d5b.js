"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["76432"], {
49169: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Customers who began using BioStar Air access control before May 2025 may still be using the Airfob Space app, which has since been rebranded as the Suprema Pass app. Both apps offer identical functionality and are fully compatible. There is no need for existing users to switch — mobile credentials work seamlessly across both."
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
51458: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_daylight_saving_time_mdx_28f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-daylight-saving-time-mdx-28f.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_daylight_saving_time_mdx_28f_namespaceObject = JSON.parse('{"id":"platform/biostar_air/daylight-saving-time","title":"Configure Daylight Saving Time (DST)","description":"Learn how to configure automatic and manual DST settings in BioStar Air, enable DST for devices, and manage time zone adjustments across multiple locations.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/daylight-saving-time.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/daylight-saving-time","permalink":"/docs/en/platform/biostar_air/daylight-saving-time","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/daylight-saving-time.mdx","tags":[],"version":"current","frontMatter":{"id":"daylight-saving-time","title":"Configure Daylight Saving Time (DST)","description":"Learn how to configure automatic and manual DST settings in BioStar Air, enable DST for devices, and manage time zone adjustments across multiple locations.","keywords":["Daylight Saving Time","DST","time zone"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configure Site Settings","permalink":"/docs/en/platform/biostar_air/site-settings"},"next":{"title":"Customize Email Templates","permalink":"/docs/en/platform/biostar_air/customizing-email-templates"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/daylight-saving-time.mdx


const frontMatter = {
	id: 'daylight-saving-time',
	title: 'Configure Daylight Saving Time (DST)',
	description: 'Learn how to configure automatic and manual DST settings in BioStar Air, enable DST for devices, and manage time zone adjustments across multiple locations.',
	keywords: [
		'Daylight Saving Time',
		'DST',
		'time zone'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "Add a new DST configuration",
  "id": "addingNewdst",
  "level": 2
}, {
  "value": "Automatic configuration",
  "id": "autoConfig",
  "level": 3
}, {
  "value": "Manual configuration",
  "id": "manualConfig",
  "level": 3
}, {
  "value": "Edit an existing DST configuration",
  "id": "editingDstConfiguration",
  "level": 2
}, {
  "value": "Enable DST for devices",
  "id": "enablingDstForDevices",
  "level": 2
}, {
  "value": "Delete a DST configuration",
  "id": "deleteDst",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirEdit, IcAirRemove, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Use Daylight Saving Time (DST) settings to configure how the site adjusts time. This is especially important for ensuring consistent and accurate time tracking when managing a site with visitors across multiple time zones."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Watch the following video for a guide to configuring Daylight Saving Time (DST) settings."
      }), (0,jsx_runtime.jsx)(YouTube, {
        videoId: "e51UOKLECz8"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Consider the following when reviewing ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "event_logs_submenu",
          product: "air",
          className: "normal"
        }), "."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If device time is configured, event log timestamps adjust to each device's DST time."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If site time is configured, timestamps adjust according to the site's DST configuration instead of each device."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addingNewdst",
      children: "Add a new DST configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "daylight_saving_time_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_add_DST",
            product: "air"
          }), " at the top right of the screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-dst.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired item from ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_timezone",
            product: "air"
          }), " when the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "dst_add_modal_title",
            product: "air"
          }), " panel appears."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-dst-add.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autoConfig",
      children: "Automatic configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "dst_add_modal_subtitle_setting_dst",
        product: "air"
      }), " section, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "dst_auto",
        product: "air"
      }), ", and then click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "save_btn",
        product: "air"
      }), " at the bottom. The DST configuration for the selected time zone is added automatically."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-dst-add-auto.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manualConfig",
      children: "Manual configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set the appropriate start and end times for the time zone to configure manually."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-dst-add-manual.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "date_label",
            product: "air"
          }), ": Select the dates when DST starts and ends."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "dropdown_label_week",
            product: "air"
          }), ": Select the weeks when DST starts and ends."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "save_btn",
        product: "air"
      }), " at the bottom to save the DST configuration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editingDstConfiguration",
      children: "Edit an existing DST configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "daylight_saving_time_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the DST configuration you want to edit in the list. Alternatively, select the checkbox and click ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " at the top."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Modify the start and end times when the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "dst_update_modal_title",
            product: "air"
          }), " panel appears."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-dst-edit.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " at the bottom to save the changes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enablingDstForDevices",
      children: "Enable DST for devices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enable DST on each device to ensure accurate time adjustment."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
          children: "Click the device to which you want to apply the DST settings in the list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired time zone in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_timezone",
            product: "air"
          }), " section, and enable the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_field_dst_usage",
            product: "air"
          }), " option."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-edit-timezone.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " at the bottom to save the changes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This setting is enabled by default for time zones where DST applies."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteDst",
      children: "Delete a DST configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "daylight_saving_time_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the checkbox for the DST configuration you want to delete in the list. You can select more than one DST configuration."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirRemove, {}), " at the top of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_delete",
            product: "air"
          }), " when the message window appears."]
        }), "\n"]
      }), "\n"]
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