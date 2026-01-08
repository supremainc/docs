"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["47623"], {
74487: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_settings_alert_report_mdx_63e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-settings-alert-report-mdx-63e.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_settings_alert_report_mdx_63e_namespaceObject = JSON.parse('{"id":"platform/biostar_air/settings-alert-report","title":"Set Up Alerts and Reports","description":"This article provides step-by-step instructions to configure event alerts and automatic reports in BioStar Air.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/settings-alert-report.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/settings-alert-report","permalink":"/docs/en/platform/biostar_air/settings-alert-report","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/settings-alert-report.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-alert-report","title":"Set Up Alerts and Reports","description":"This article provides step-by-step instructions to configure event alerts and automatic reports in BioStar Air.","keywords":["BioStar Air","Alert setting","Report setting","System alerts","User reports"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Customize Email Templates","permalink":"/docs/en/platform/biostar_air/customizing-email-templates"},"next":{"title":"Set Custom Wiegand Card Format","permalink":"/docs/en/platform/biostar_air/custom-wiegand-card-formats"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/settings-alert-report.mdx


const frontMatter = {
	id: 'settings-alert-report',
	title: 'Set Up Alerts and Reports',
	description: 'This article provides step-by-step instructions to configure event alerts and automatic reports in BioStar Air.',
	keywords: [
		'BioStar Air',
		'Alert setting',
		'Report setting',
		'System alerts',
		'User reports'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Add alerts",
  "id": "addAlert",
  "level": 2
}, {
  "value": "Set conditions",
  "id": "conditionSettings",
  "level": 3
}, {
  "value": "Event log",
  "id": "eventLog",
  "level": 4
}, {
  "value": "System",
  "id": "system",
  "level": 4
}, {
  "value": "Set alert recipients",
  "id": "alertTargetSettings",
  "level": 3
}, {
  "value": "Set delivery method",
  "id": "alertSendMethodSettings",
  "level": 3
}, {
  "value": "Generate reports",
  "id": "reportGeneration",
  "level": 2
}, {
  "value": "Set conditions",
  "id": "reportConditionSettings",
  "level": 3
}, {
  "value": "Set report recipients",
  "id": "reportAlertTargetSettings",
  "level": 3
}, {
  "value": "Set delivery method",
  "id": "reportAlertSendMethodSettings",
  "level": 3
}, {
  "value": "Edit alerts and reports",
  "id": "editAlertReport",
  "level": 2
}, {
  "value": "Delete alerts and reports",
  "id": "deleteAlertReport",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirRemove, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Setting up alerts and reports enables automatic detection and tracking of system events and security situations. This article explains how to configure alert and report settings in BioStar Air."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alert and report settings provide the following benefits."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Immediately detect security threats or system issues and send real-time alerts to administrators."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Automatically generate reports on system status and user activity to improve management efficiency."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addAlert",
      children: "Add alerts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure alerts for specific event logs and system status on the site."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_sub_menu_title",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.add_alert_btn",
            product: "air"
          }), " at the top right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.add_alert_btn",
            product: "air"
          }), " panel appears, choose either the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.event_log_type",
            product: "air"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.system_type",
            product: "air"
          }), " tab."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-alert-add-event-log.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After configuring each item, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to save."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "conditionSettings",
      children: "Set conditions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "eventLog",
      children: "Event log"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.event_log_type",
        product: "air"
      }), " tab, set alert conditions by event type."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-alert-event-log-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.events_block_title",
            product: "air"
          }), ": Select the event types to alert. A predefined ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.preset_events_block_title",
            product: "air"
          }), " can also be selected."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_label",
            product: "air"
          }), ": Select door. Send an alert when an event occurs at the selected door. More than one door can be selected."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.frequency_and_duration_label",
            product: "air"
          }), ": Send an alert when events occur at a specified frequency within the defined time period. For example, configure the system to send an alert if an event occurs three times within five minutes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "system",
      children: "System"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-alert-system-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.system_type",
        product: "air"
      }), " tab, set alert conditions based on system status. The available options are as follows."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "low_credit_reminders",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "low_credit_site_suspension",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "low_credit_sms_less_than_10",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "low_apb_battery",
          product: "air"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "new_fw_availabel",
          product: "air"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alertTargetSettings",
      children: "Set alert recipients"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alert_target",
        product: "air"
      }), " to designate alert recipients. Select users by administrator role or select individual users."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alertSendMethodSettings",
      children: "Set delivery method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Choose the delivery method in ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alert_send_by",
        product: "air"
      }), ". Alerts are delivered by email, SMS, or app push notification."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["SMS delivery is available only after recharging SMS credits in ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings_menu",
          product: "air"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "credit_center_submenu",
          product: "air"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reportGeneration",
      children: "Generate reports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automatically generate reports at defined intervals and send them to administrators. Generate reports on event log activity and user status."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_sub_menu_title",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.add_alert_btn",
            product: "air"
          }), " at the top right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.add_alert_btn",
            product: "air"
          }), " panel appears, select the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.report_type",
            product: "air"
          }), " tab."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-alert-add-report.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After configuring each item, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to save."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reportConditionSettings",
      children: "Set conditions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure report type and generation interval."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "name_column",
            product: "air"
          }), ": Select the report type to generate."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "alerts.report_event_log",
                product: "air"
              }), ": Generates a report on event log activity for the selected period."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "alerts.report_user",
                product: "air"
              }), ": Generates a report on user status for the selected period."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedules_label",
            product: "air"
          }), ": Select the report generation interval. Choose between ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "weekly_option",
            product: "air"
          }), " and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monthly_option",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reportAlertTargetSettings",
      children: "Set report recipients"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alert_target",
        product: "air"
      }), " to designate alert recipients. Select users by administrator role or select individual users."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reportAlertSendMethodSettings",
      children: "Set delivery method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Choose the delivery method in ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alert_send_by",
        product: "air"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Reports are delivered ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "by email only"
        }), ". They are not delivered by SMS or app push notification."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editAlertReport",
      children: "Edit alerts and reports"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_sub_menu_title",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the alert or report to edit in the list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.edit_alert_header",
            product: "air"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.edit_report_header",
            product: "air"
          }), " panel appears, edit the necessary items."]
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
      id: "deleteAlertReport",
      children: "Delete alerts and reports"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_sub_menu_title",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the checkbox of the alert or report to delete in the list. More than one item can be selected."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirRemove, {}), " at the top left of the list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the message window appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "delete_action",
            product: "air"
          }), "."]
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