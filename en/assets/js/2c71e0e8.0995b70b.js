"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["39667"], {
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
33777: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ configuring_reports_frontMatter),
  toc: () => (/* binding */ configuring_reports_toc),
  "default": () => (/* binding */ configuring_reports_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_reports_mdx_2c7_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ configuring_reports_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-configuring-reports-mdx-2c7.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_reports_mdx_2c7_namespaceObject = JSON.parse('{"id":"platform/biostar_air/configuring-reports","title":"Configure Reports","description":"This guide explains how to create, filter, and schedule user, event log, and audit log reports through automatic email in BioStar Air.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-reports.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/configuring-reports","permalink":"/docs/en/platform/biostar_air/configuring-reports","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/configuring-reports.mdx","tags":[],"version":"current","frontMatter":{"id":"configuring-reports","title":"Configure Reports","description":"This guide explains how to create, filter, and schedule user, event log, and audit log reports through automatic email in BioStar Air.","keywords":["Report","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Set Sensitivity","permalink":"/docs/en/platform/biostar_air/suprema-pass-app-sensitivity-settings"},"next":{"title":"Configure Time and Attendance Report","permalink":"/docs/en/platform/biostar_air/reports-time-attendance-reports"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_bsair-report-config-note.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {IcAirDown, IcAirEdit, IcAirRemove} = _components;
  if (!IcAirDown) _missingMdxReference("IcAirDown", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Click ", (0,jsx_runtime.jsx)(IcAirEdit, {
          title: "Edit"
        }), " to edit the report."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Click ", (0,jsx_runtime.jsx)(IcAirDown, {
          title: "Download"
        }), " to export the report as a PDF or CSV file."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Click ", (0,jsx_runtime.jsx)(IcAirRemove, {
          title: "Delete"
        }), " to delete the report."]
      }), "\n"]
    }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-reports.mdx


const configuring_reports_frontMatter = {
	id: 'configuring-reports',
	title: 'Configure Reports',
	description: 'This guide explains how to create, filter, and schedule user, event log, and audit log reports through automatic email in BioStar Air.',
	keywords: [
		'Report',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const configuring_reports_contentTitle = undefined;

const assets = {

};





const configuring_reports_toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "Access report configuration",
  "id": "accessing-report-configuration",
  "level": 2
}, {
  "value": "Configure user reports",
  "id": "configuring-user-reports",
  "level": 2
}, ...toc, {
  "value": "Configure event log reports",
  "id": "configuring-event-log-reports",
  "level": 2
}, ...toc, {
  "value": "Configure audit log reports",
  "id": "configuring-audit-log-reports",
  "level": 2
}, ...toc, {
  "value": "Schedule reports",
  "id": "scheduling-reports",
  "level": 2
}];
function configuring_reports_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirReport, Image} = _components;
  if (!Cmd) configuring_reports_missingMdxReference("Cmd", true);
  if (!IcAirReport) configuring_reports_missingMdxReference("IcAirReport", true);
  if (!Image) configuring_reports_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Reports in BioStar Air can be configured from different pages depending on the report type. This article explains how to create and schedule user, event log, and audit log reports."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessing-report-configuration",
      children: "Access report configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The entry path differs by report type."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["User report: ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Event log report: ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Audit log report: ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit_logs_submenu",
            product: "air"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(IcAirReport, {
        width: "20",
        height: "20",
        title: "Report"
      }), " in the toolbar at the top of the list. The report settings page appears."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuring-user-reports",
      children: "Configure user reports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure a user report to view the current status of users registered on the site."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the toolbar at the top of the user list, click ", (0,jsx_runtime.jsx)(IcAirReport, {
            width: "20",
            height: "20",
            title: "Report"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), " window appears, enter a report name."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-report-setting.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the items to include in the report from each filter option."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_add",
            product: "air"
          }), " to save the report."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), " is created at the bottom, and a download link is sent to the administrator’s email."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-user-report-setting-list.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["For more information on managing users, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "managing-users",
            children: "the following"
          }), "."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuring-event-log-reports",
      children: "Configure event log reports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure a report on event logs generated on the site."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the toolbar at the top of the log list, click ", (0,jsx_runtime.jsx)(IcAirReport, {
            width: "20",
            height: "20",
            title: "Report"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), " window appears, enter a report name."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-report-eventlog-report-setting.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the items to include in the report from each filter option."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_add",
            product: "air"
          }), " to save the report."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), " is created at the bottom, and a download link is sent to the administrator’s email."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-report-eventlog-report-setting-result.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["For more information on event logs, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "monitoring-event-and-audit-logs",
            children: "the following"
          }), "."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuring-audit-log-reports",
      children: "Configure audit log reports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure an audit log report on changes made by administrators."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit_logs_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the toolbar at the top of the log list, click ", (0,jsx_runtime.jsx)(IcAirReport, {
            width: "20",
            height: "20",
            title: "Report"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), " window appears, enter a report name."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-report-audit-trail-report-setting.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the items to include in the report from each filter option."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_add",
            product: "air"
          }), " to save the report."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), " is created at the bottom, and a download link is sent to the administrator’s email."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-report-audit-trail-report-setting-result.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["For more information on audit logs, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "monitoring-event-and-audit-logs",
            children: "the following"
          }), "."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scheduling-reports",
      children: "Schedule reports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automatically generate reports at defined intervals and send them to administrators."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(Cmd, {
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
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_condition",
            product: "air"
          }), " section, select the report type to generate from ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "name_column",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the report schedule from ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedules_label",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select either ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "weekly_option",
                product: "air"
              }), " or ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "monthly_option",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Select the specific date to send the report."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "All reports are sent at midnight on the selected day."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the recipients from ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_target",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "All administrators of a specific level"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Individual administrator"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Choose the delivery method in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "alerts.alert_send_by",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Reports can only be sent by email."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "They are not delivered by SMS or app push notification."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After configuring each item, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to save."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on scheduling reports, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-alert-report#reportGeneration",
          children: "the following"
        }), "."]
      })
    })]
  });
}
function configuring_reports_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(configuring_reports_createMdxContent, {
      ...props
    })
  }) : configuring_reports_createMdxContent(props);
}
function configuring_reports_missingMdxReference(id, component) {
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