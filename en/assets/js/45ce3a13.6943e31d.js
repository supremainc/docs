"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["33291"], {
89398: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_site_advanced_settings_mdx_45c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-site-advanced-settings-mdx-45c.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_site_advanced_settings_mdx_45c_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-advanced-settings","title":"Advanced Settings","description":"Use the advanced settings on the BioStar Air site to configure the system to meet your organization\'s requirements. You can configure various options, including time zone, time and attendance, mobile authentication, and reader compatibility.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/site-advanced-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-advanced-settings","permalink":"/docs/en/platform/biostar_air/site-advanced-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-advanced-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"site-advanced-settings","title":"Advanced Settings","description":"Use the advanced settings on the BioStar Air site to configure the system to meet your organization\'s requirements. You can configure various options, including time zone, time and attendance, mobile authentication, and reader compatibility.","keywords":["Advanced Settings","configure"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Set Up Basic Settings","permalink":"/docs/en/platform/biostar_air/site-basic-settings"},"next":{"title":"Set Up Security","permalink":"/docs/en/platform/biostar_air/site-security-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/site-advanced-settings.mdx


const frontMatter = {
	id: 'site-advanced-settings',
	title: 'Advanced Settings',
	description: 'Use the advanced settings on the BioStar Air site to configure the system to meet your organization\'s requirements. You can configure various options, including time zone, time and attendance, mobile authentication, and reader compatibility.',
	keywords: [
		'Advanced Settings',
		'configure'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Configure advanced options to optimize BioStar Air for your organization's work environment. Set the time zone and daylight saving time, enable time and attendance, and adjust mobile authentication methods and how event logs are displayed."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_submenu",
        product: "air"
      }), " in the left sidebar. Use the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_tab_setting",
        product: "air"
      }), " tab to configure site settings."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-site-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input4",
            product: "air"
          }), ": Change the time zone at any time. Logs and events are recorded according to the configured time zone. For more information, refer to ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/daylight-saving-time"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_field_dst_usage",
              product: "air"
            }), ": Enable or disable daylight saving time for specific regions."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input8",
            product: "air"
          }), ": Enable the time and attendance (T&A) feature. After enabling the T&A feature, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_setting",
            product: "air"
          }), " to configure detailed settings. For more information, refer to ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/configuring-ta"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_report",
            product: "air"
          }), ": Generate time and attendance (T&A) reports. After enabling the report feature, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_setting",
            product: "air"
          }), " to configure report conditions. For more information, refer to ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/reports-time-attendance-reports"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input7",
            product: "air"
          }), ": Enable the Long Touch feature to remotely open doors from a certain distance."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_ble_background",
            product: "air"
          }), ": Allow mobile cards while the Suprema Pass app runs in background mode. When enabled, users can open a door without launching the app."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "display_face_preview_setting",
            product: "air"
          }), ": Show a face preview when issuing face credentials."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input5",
            product: "air"
          }), ": Set how event log times are displayed."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_time_display_setting1",
                product: "air"
              }), ": Show event logs based on each device's time zone."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_time_display_setting2",
                product: "air"
              }), ": Show logs according to the site's time zone. Useful when all devices are in one location. See the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "site_profile_input4",
                product: "air"
              }), " option."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "new_setting_label_msb",
            product: "air"
          }), ": Configure how card data is transmitted when using Airfob Patch with third-party readers."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "This setting applies only to patch devices and can be adjusted to match the type of third-party device to which the patch is attached."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "validity_period_label",
            product: "air"
          }), ": Set the default validity period for mobile credentials."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Admins can set a separate expiration date for each user's credentials. For more information, refer to ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/adding-individual-users#setting-access-levels-and-validity"
            }), "."]
          })
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