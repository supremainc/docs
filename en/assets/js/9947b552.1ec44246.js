"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["28229"], {
2571: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_reports_time_attendance_reports_mdx_994_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-reports-time-attendance-reports-mdx-994.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_reports_time_attendance_reports_mdx_994_namespaceObject = JSON.parse('{"id":"platform/biostar_air/reports-time-attendance-reports","title":"Configure Time and Attendance Report","description":"This guide explains how to configure the basic time and attendance report in BioStar Air. It supports on-site work hour tracking, CSV export options, and API integration.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/reports-time-attendance-reports.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/reports-time-attendance-reports","permalink":"/docs/en/platform/biostar_air/reports-time-attendance-reports","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/reports-time-attendance-reports.mdx","tags":[],"version":"current","frontMatter":{"id":"reports-time-attendance-reports","title":"Configure Time and Attendance Report","description":"This guide explains how to configure the basic time and attendance report in BioStar Air. It supports on-site work hour tracking, CSV export options, and API integration.","keywords":["reports","time and attendance","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configure Reports","permalink":"/docs/en/platform/biostar_air/configuring-reports"},"next":{"title":"BioStation 3 SIP Intercom","permalink":"/docs/en/platform/biostar_air/sip-intercom-for-biostation3"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/reports-time-attendance-reports.mdx


const frontMatter = {
	id: 'reports-time-attendance-reports',
	title: 'Configure Time and Attendance Report',
	description: 'This guide explains how to configure the basic time and attendance report in BioStar Air. It supports on-site work hour tracking, CSV export options, and API integration.',
	keywords: [
		'reports',
		'time and attendance',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirDown, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirDown) _missingMdxReference("IcAirDown", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["The time and attendance (T&A) report in BioStar Air is a simple ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "on-site work hour"
      }), " report. It shows employees' start and end times based on event logs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This feature is designed for basic reporting without complex configuration options. Time and attendance systems can have various requirements depending on local regulations. If the built-in time and attendance report does not meet your organization's needs, use a third-party T&A solution. Export event logs to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CSV"
      }), " or integrate directly with third-party T&A software by using the BioStar Air API."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The built-in time and attendance report is intentionally simple and may not meet all compliance requirements."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If complex T&A rules exist (for example, local labor laws or shift patterns), use a third-party T&A solution."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Export event logs to CSV for manual processing or use the API to integrate automatically with other systems."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Follow these steps to generate a time and attendance (T&A) report."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_tab_setting",
            product: "air"
          }), " tab, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_report",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_setting",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-usage-settings-site.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click the toggle on the right to enable ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "tna_report",
              product: "air"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), " window appears, enter a name for the report."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-usage-settings-site-tna-report-config.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the users or user groups to include in the report."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_add",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A downloadable report is generated in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-usage-settings-site-tna-report-config-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirDown, {
            width: "20",
            height: "20",
            title: "Download"
          }), " to download the report."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_popup_title",
            product: "air"
          }), " window appears, select a date and time range."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-usage-settings-site-tna-report-config-down.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_popup_button_title",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After the report is generated, a download link is sent to the administrator's email. Download the report from the email in PDF or CSV format."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Enable ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_template_item",
              product: "air"
            }), " and select the desired template items to include user templates in the report."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The report is available for download for 24 hours after the download email is received. After that period, the report is no longer available."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Configure an automated schedule in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "alerts.alert_sub_menu_title",
              product: "air"
            }), ". For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-alert-report#reportGeneration",
              children: "the following"
            }), "."]
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