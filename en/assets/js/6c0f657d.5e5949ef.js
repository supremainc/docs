"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["80899"], {
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
89248: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_event_and_audit_logs_mdx_6c0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-monitoring-event-and-audit-logs-mdx-6c0.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_event_and_audit_logs_mdx_6c0_namespaceObject = JSON.parse('{"id":"platform/biostar_air/monitoring-event-and-audit-logs","title":"Use Event and Change Logs","description":"This guide explains how to monitor and analyze event and audit logs in BioStar Air, apply filters, export data, and track administrative activity.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-event-and-audit-logs.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/monitoring-event-and-audit-logs","permalink":"/docs/en/platform/biostar_air/monitoring-event-and-audit-logs","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/monitoring-event-and-audit-logs.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-event-and-audit-logs","title":"Use Event and Change Logs","description":"This guide explains how to monitor and analyze event and audit logs in BioStar Air, apply filters, export data, and track administrative activity.","keywords":["Monitoring","Event Logs","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Monitoring","permalink":"/docs/en/platform/biostar_air/monitoring"},"next":{"title":"Check Alert & Report History","permalink":"/docs/en/platform/biostar_air/monitoring-alert-report-history"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-event-and-audit-logs.mdx


const frontMatter = {
	id: 'monitoring-event-and-audit-logs',
	title: 'Use Event and Change Logs',
	description: 'This guide explains how to monitor and analyze event and audit logs in BioStar Air, apply filters, export data, and track administrative activity.',
	keywords: [
		'Monitoring',
		'Event Logs',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "Sort and manage logs",
  "id": "sort-and-manage-logs",
  "level": 2
}, {
  "value": "Filter logs",
  "id": "filtering-event-logs",
  "level": 3
}, {
  "value": "Configure reports",
  "id": "generatingReports",
  "level": 3
}, {
  "value": "Mask personal data",
  "id": "dataMasking",
  "level": 3
}, {
  "value": "Use the toolbar",
  "id": "usingToolbar",
  "level": 3
}, {
  "value": "Use event logs on mobile",
  "id": "usingEventLogsOnMobile",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirColumn, IcAirDown, IcAirLogfilter, IcAirMask, IcAirRef, IcAirReport, IcAirReportApp, IcSearch, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirColumn) _missingMdxReference("IcAirColumn", true);
  if (!IcAirDown) _missingMdxReference("IcAirDown", true);
  if (!IcAirLogfilter) _missingMdxReference("IcAirLogfilter", true);
  if (!IcAirMask) _missingMdxReference("IcAirMask", true);
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  if (!IcAirReport) _missingMdxReference("IcAirReport", true);
  if (!IcAirReportApp) _missingMdxReference("IcAirReportApp", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "One of the key advantages of a cloud access control platform is the ability to monitor site activity anytime, anywhere. This document explains how to monitor and analyze event and audit logs in BioStar Air."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Watch the following video for a tutorial on event and audit logs."
      }), (0,jsx_runtime.jsx)(YouTube, {
        videoId: "nwIEYyK-uAg"
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "event_logs_submenu",
        product: "air",
        className: "bold"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "event_logs_submenu",
        product: "air"
      }), " to view event logs. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "monitoring_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "event_logs_submenu",
        product: "air"
      }), " in the left sidebar. The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "event_logs_submenu",
        product: "air"
      }), " screen shows a table with details including event time and name, door name, device alias, user type, and user name."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-eventlog-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "audit_logs_submenu",
        product: "air",
        className: "bold"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "audit_logs_submenu",
        product: "air"
      }), " to view audit logs. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "monitoring_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "audit_logs_submenu",
        product: "air"
      }), " in the left sidebar. The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "audit_logs_submenu",
        product: "air"
      }), " screen displays logs that track administrator actions. The audit log table includes information such as operation time, email address, admin privilege, operation type, menu path, and operation details."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-auditlog-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sort-and-manage-logs",
      children: "Sort and manage logs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-2",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "column_filter_modal_title",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Customize table columns to show or hide information. Reorder columns to place frequently used ones at the front. Click the ", (0,jsx_runtime.jsx)(IcAirColumn, {}), " button at the top of the event log list. The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "column_filter_modal_title",
        product: "air"
      }), " window appears."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-eventlog-list-custom-table.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select or clear the checkboxes for columns to show or hide."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "To reorder columns, click and drag a column to the desired position."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_save_btn",
            product: "air"
          }), " to save the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_title",
            product: "air"
          }), " settings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_apply_btn",
            product: "air"
          }), " to apply ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_title",
            product: "air"
          }), " to the log list without saving."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_reset_btn",
            product: "air"
          }), " to cancel the changes in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_title",
            product: "air"
          }), " and restore the initial state."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When you click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_save_btn",
              product: "air"
            }), ", the settings remain even after navigating to another menu. When you click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_apply_btn",
              product: "air"
            }), ", the changes apply only to the current list and revert after you leave the page."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "audit_logs_submenu",
              product: "air"
            }), " does not support the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_title",
              product: "air"
            }), " feature."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filtering-event-logs",
      children: "Filter logs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Filter logs to quickly find the information you need. Click the ", (0,jsx_runtime.jsx)(IcAirLogfilter, {
        width: "20",
        height: "20",
        title: "Filter"
      }), " button at the top of the log list. When the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "logs_filters_action_btn",
        product: "air"
      }), " window appears, select the desired value for each item."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-eventlog-list-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_save_btn",
              product: "air"
            }), " or ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action2",
              product: "air"
            }), " to save the settings so they remain after navigating to another menu. Click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_apply_btn",
              product: "air"
            }), " or ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action3",
              product: "air"
            }), " to apply the changes only to the current list; they will revert when you navigate away."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_reset_btn",
              product: "air"
            }), " or ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action1",
              product: "air"
            }), " to cancel the changes and return to the initial state."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generatingReports",
      children: "Configure reports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generate reports for events that occurred during a specific period by filtering log data."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcAirReport, {
            width: "20",
            height: "20",
            title: "Report"
          }), " button at the top of the log list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), " window appears, enter a report name."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-report-setting.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the items to include in the report."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_add",
            product: "air"
          }), " to save the configured report."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A report is created with the name set in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-report-added.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To download the generated report, click the ", (0,jsx_runtime.jsx)(IcAirDown, {
            width: "20",
            height: "20",
            title: "Download"
          }), " button next to the report name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_popup_title",
            product: "air"
          }), " window appears, select the period to query events and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_popup_button_title",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-report-download.png",
          caption: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A download link is sent to the administrator's email."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "report_form_text_title",
          product: "air"
        }), " lets you search for, edit, download, or delete the reports created."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dataMasking",
      children: "Mask personal data"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mask personal data in logs to protect sensitive information. When personal data masking is enabled, information such as user names, email addresses, and phone numbers is partially hidden."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To enable personal data masking, click the ", (0,jsx_runtime.jsx)(IcAirMask, {
        width: "20",
        height: "20",
        title: "Apply Masking"
      }), " button at the top of the log list. In the pop-up menu, enable ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "apply_masking_title",
        product: "air"
      }), " and click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "save_btn",
        product: "air"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-eventlog-apply-masking.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usingToolbar",
      children: "Use the toolbar"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the toolbar at the top of the log list to manage logs more efficiently."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To sort logs by date, select a date and time range, then click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_apply_btn",
            product: "air"
          }), ". Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_reset_btn",
            product: "air"
          }), " to reset the date."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-set-datetime.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "audit_logs_submenu",
              product: "air"
            }), " automatically filters logs when you select a start and end date."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "search_placeholder",
            product: "air"
          }), " input field, enter specific keywords to search logs. Enter one of the following: RF card ID, user ID, email, or name."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "audit_logs_submenu",
              product: "air"
            }), " does not support the search function."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirDown, {
            width: "20",
            height: "20",
            title: "Export"
          }), " to save logs as a CSV or PDF file."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirRef, {
            width: "20",
            height: "20",
            title: "Refresh"
          }), " at the top of the list to refresh logs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To refresh at a specific interval, select 5 seconds or 1 minute in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auto_refresh_btn",
            product: "air"
          }), " at the bottom left of the list."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-auto-refresh.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "audit_logs_submenu",
              product: "air"
            }), " does not support the refresh function."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usingEventLogsOnMobile",
      children: "Use event logs on mobile"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-mobile-monitoring-eventlog.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Open the BioStar Air app on your mobile device and log in."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " at the bottom of the home screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          }), " card."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Scroll through the event log list to view its contents."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "logs_filters_action_btn",
              product: "air"
            }), ": Filter event logs."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcSearch, {
              width: "20",
              height: "20",
              title: "Search"
            }), ": Search by specific keywords. Enter one of the following: RF card ID, user ID, email, or name."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcAirReportApp, {
              width: "20",
              height: "20",
              title: "Report"
            }), ": Generate reports. For more information on report creation, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#generatingReports",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcAirDown, {
              width: "20",
              height: "20",
              title: "Download"
            }), ": Download reports as CSV or PDF files."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcAirMask, {
              width: "20",
              height: "20",
              title: "Apply Masking"
            }), ": Apply personal data masking."]
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