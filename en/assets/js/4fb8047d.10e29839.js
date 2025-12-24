"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["18323"], {
52829: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_audit_trail_mdx_4fb_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-system-audit-trail-mdx-4fb.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_audit_trail_mdx_4fb_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-audit-trail","title":"Audit Trail","description":"You can track not only user access information but also all information changed in the system.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-audit-trail.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-audit-trail","permalink":"/docs/en/platform/biostar_x/settings-system-audit-trail","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-audit-trail.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-audit-trail","title":"Audit Trail","description":"You can track not only user access information but also all information changed in the system.","keywords":["Audit trail","System change history","audit trail","Log Management","Security Audit","System Monitoring"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"System Settings","permalink":"/docs/en/platform/biostar_x/settings-system"},"next":{"title":"System Backup","permalink":"/docs/en/platform/biostar_x/settings-system-system-backup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-audit-trail.mdx


const frontMatter = {
	id: 'settings-system-audit-trail',
	title: 'Audit Trail',
	description: 'You can track not only user access information but also all information changed in the system.',
	keywords: [
		'Audit trail',
		'System change history',
		'audit trail',
		'Log Management',
		'Security Audit',
		'System Monitoring'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Use audit trail",
  "id": "audit-trail-guide",
  "level": 2
}, {
  "value": "Types of tracked actions",
  "id": "method",
  "level": 3
}, {
  "value": "Classification by permission level",
  "id": "permision",
  "level": 3
}, {
  "value": "Period setting query",
  "id": "period-setting-query",
  "level": 2
}, {
  "value": "Query with predefined periods",
  "id": "query-with-predefined-periods",
  "level": 3
}, {
  "value": "Query with custom periods",
  "id": "query-with-custom-periods",
  "level": 3
}, {
  "value": "Filter settings",
  "id": "filter-settings",
  "level": 2
}, {
  "value": "Save filter",
  "id": "save-filter",
  "level": 2
}, {
  "value": "Page navigation",
  "id": "page-navigation",
  "level": 2
}, {
  "value": "Export to CSV",
  "id": "export-to-csv",
  "level": 2
}, {
  "value": "Set columns",
  "id": "set-columns",
  "level": 2
}, {
  "value": "Major tracking items",
  "id": "audit-trail-items",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, Details, IcEditUL, IcMoreW, IcTrash2, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcEditUL) _missingMdxReference("IcEditUL", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.system.auditTrail"
      }), " feature records and tracks all activities occurring in the system. All activities such as user login/logout, setting changes, and system administration tasks are recorded and can be utilized for security audits and system monitoring."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Security audit"
          }), ": Detect unauthorized access attempts or privilege abuse."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Troubleshooting"
          }), ": Track the occurrence of system errors and setting change history."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compliance"
          }), ": Retain access logs and generate audit reports."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "audit-trail-guide",
      children: "Use audit trail"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.system.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.system.auditTrail"
          }), " on the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The audit trail list appears on the screen."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For more information on major tracking items, refer to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#audit-trail-items",
        children: "the following"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method",
      children: "Types of tracked actions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.method",
        product: "2"
      }), " option in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " section to categorize audit trails by the following action types."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-action-filter.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.1",
            product: "2"
          }), ": Create new item"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.3",
            product: "2"
          }), ": Modify existing item"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.4",
            product: "2"
          }), ": Remove item"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.2",
            product: "2"
          }), ": Execute system functions (login, device control, etc.)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "permision",
      children: "Classification by permission level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Audit trails can be categorized according to admin level. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.bioStarOperator",
        product: "2"
      }), " option in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " section to filter by the following permission levels."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.1",
            product: "2"
          }), ": Access all system functions"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.2",
            product: "2"
          }), ": User management functions"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.3",
            product: "2"
          }), ": Monitoring functions"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.253",
            product: "2"
          }), ": Video-related functions"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.254",
            product: "2"
          }), ": Attendance management functions"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "audit.permission.253",
          product: "2"
        }), " and ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "audit.permission.254",
          product: "2"
        }), " permission levels are available through additional options for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced"
        }), " license or higher. For more information on licensing policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "period-setting-query",
      children: "Period setting query"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set the period to check the audit trail history for a specific duration."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "query-with-predefined-periods",
      children: "Query with predefined periods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.one_month",
        product: "2"
      }), " or ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.three_month",
        product: "2"
      }), " from the filter list on the left screen."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-defined-period.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "query-with-custom-periods",
      children: "Query with custom periods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For detailed period settings, set the start date and end date in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " section under the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.datetime",
        product: "2"
      }), " option."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-set-period.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filter-settings",
      children: "Filter settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Filter the audit trail list efficiently using various criteria."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-list.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " section, you can set the following options. Filter options match the column items of the audit trail list. However, the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.content",
        product: "2"
      }), " column cannot be filtered."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.datetime",
            product: "2"
          }), ": Date and time when the event occurred"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.user",
            product: "2"
          }), ": User ID of the user who performed the event"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.bioStarOperator",
            product: "2"
          }), ": User's ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#permision",
            children: "permission level"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.ip",
            product: "2"
          }), ": IP address from which the user accessed"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.menu",
            product: "2"
          }), ": Menu category of the modified item"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.target",
            product: "2"
          }), ": Modified target"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.method",
            product: "2"
          }), ": Performed ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#method",
            children: "action"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.content",
            product: "2"
          }), ": Details during the event occurrence"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "save-filter",
      children: "Save filter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set the filter and click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " section's ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ta.report.condition.saveFilter.button",
        product: "2"
      }), " button to save the filter you set to the filter list on the left screen."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-add-filter.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcEditUL, {}), " to edit the filter name. Enter the filter name and press ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " to change the filter name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcTrash2, {}), " to delete the filter. The filter will be removed from the filter list."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "page-navigation",
      children: "Page navigation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Move between pages or set the number of items to appear on each page."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-first-page.png",
            ico: true,
            alone: true
          }), ": Go to the first page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-previous-page.png",
            ico: true,
            alone: true
          }), ": Go to the previous page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-nav-page.png",
            ico: true,
            alone: true
          }), ": Enter the page number to navigate to and press ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " to go to that page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-next-page.png",
            ico: true,
            alone: true
          }), ": Go to the next page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-last-page.png",
            ico: true,
            alone: true
          }), ": Go to the last page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-audit-trail-rows-page.png",
            ico: true
          }), ": You can select the number of items to display per page."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "export-to-csv",
      children: "Export to CSV"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Export the audit trail list to a CSV file for use with external analysis tools."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.filter.title",
            product: "2"
          }), " section, set filters if needed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.user.csv_export",
            product: "2"
          }), " on the right side of the section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the CSV export window appears, enter ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.export.reason",
            product: "2"
          }), "(optional) and click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.download",
            product: "2"
          }), " button."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-audit-trail-export-csv.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "If you have set filtering, only the filtered results will be exported to the CSV file."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "set-columns",
      children: "Set columns"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--40",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-audit-trail-column-setting.png"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l20",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can change the positions of columns or hide them in the audit trail list. Click ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.columnSetting",
            product: "2"
          }), " on the far right of the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.filter.title",
            product: "2"
          }), " section."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Uncheck the checkbox of the item you wish to hide from the column list."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "To change the order of the columns, you can drag the desired items to a new position."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To initialize the column settings, click the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "columnSetting.button.defaultColumn",
                product: "2"
              }), " button."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button to save the settings."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "audit-trail-items",
      children: "Major tracking items"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All activities recorded in the audit trail are organized by category. Click each item to check the details."
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "System Access"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Login"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.login",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-factor login"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.fingerprint_login",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Logout"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.logout",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Login failure reasons"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.loginfailedfingerprint",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.loginfailedidpw",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.loginfailedip",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Exceeded login attempts"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.maximum_invalid_attempts",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "User Information"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Basic Info"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.user_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.login_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.email",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.phone",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Authentication Information"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.password",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.pin",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.fingerprint_templates",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.faces",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.cards",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Permissions and Groups"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.permission",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.access_groups",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.user_group_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.private_operation_modes",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "User Status"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.disabled",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.start_datetime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.expiry_datetime",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Management"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.csv_import",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.csv_export",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.data_import",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.data_export",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Integration"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.export",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.remove",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Others"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.photo",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.user_custom_fields",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.security_level",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.report",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Management"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.csv_export.absence",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.delete.absence",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.menu.faceMigration"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.list.visualFaceImport.title"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Email Functions"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.emailSentSuccess",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.emailSentFail",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Access Control"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Door Settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.door_group_id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Door Devices"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.entry_device_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.exit_device_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.relay_output_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.sensor_input_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.exit_button_input_id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Door Control"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open_duration",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open_once",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open_timeout",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.dual_authentication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.unconditional_lock",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Door Actions"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.unlock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.release",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_alarm",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_apb",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_apb_ex",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_timed_apb_ex",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Groups"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.access_levels",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.user_groups",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.users",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Access Levels"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_level.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_level.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_level.access_level_items",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Elevator Settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.elevator_group_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.floors",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.active_timeout",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Elevator Devices"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.control_device_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.reader_devices",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.module_devices",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.tamper_device",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Elevator Control"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.dual_authentication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.trigger_actions",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Elevator Actions"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.unlock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.release",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.open",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.clear_alarm",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.clear_apb",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Floor Levels"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.floor_level_items",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Device Management"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Basic Settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.device_group_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.timezone",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Authentication Settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.authentication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.fingerprint",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.face",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.card",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Interface Settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.display",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.imageLogEventInfo",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.use_image_log",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Communication Settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.lan",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.server",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.rs485",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.wlan",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.wiegand",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.wiegand_io",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.usb",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.voip",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Function Settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.system",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.tna",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.trigger_actions",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.camera_frequency",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "User Management"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.export",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Control"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.connect",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.disconnect",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.sync",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.deleteNsync",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.discover_wiegand",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "System Management"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.factory_reset",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.reset",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.update",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.sync_time",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.license",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Status"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.locked",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.clear_alarm",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.delete",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced Access Control"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced Access Control Basic Settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.zone_type",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.enable",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.is_global",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-passback"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.antipassback",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.clear_apb",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.clear_apb_ex",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Fire Alarm"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.fire_alarm",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Schedule Control"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.forced_lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.forced_unlock",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Occupancy Management"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.increase_occupancy",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.decrease_occupancy",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.set_occupancy",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced Access Control Actions"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.unlock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.release",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.open",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.clear_alarm",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "System Settings"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Server Settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.server_addr",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.server_port",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.https",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.session_timeout",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Security Settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.secure_communication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.password_strength",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.server_matching",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Sync Settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.log_sync_method",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.user_sync_method",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.enrollment_device_list",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.fingerprint_format",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.support_mobile_credential",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.use_photo_log",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Licenses"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.licenses",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Default settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.language",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.date_format",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.time_format",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.time_zone",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Schedule settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.daily_schedules",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.holiday_schedules",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.start_date",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.use_daily_iteration",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.days_of_iteration",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Holiday settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.holiday_group.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.holiday_group.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.holiday_group.setting.holidays",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Alert settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.event_type.alert_on",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.event_type.alert_off",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Image log settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.image_filter.EventFilterCollection",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.image_filter.CutoffOption",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mobile credentials"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.mobileCredential.use",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.mobileCredential.notUse",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Audit trail"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.audit.csv_export",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced security settings"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Smart card - DESFire"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_app_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_file_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_encryption_type",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Smart card - iClass"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.iclass_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.iclass_second_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.iclass_start_block_index",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Smart card - MIFARE"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mifare_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mifare_second_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mifare_start_block_index",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.use_mifare_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.use_mifare_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Smart card - Mobile"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mobile_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mobile_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Smart card - Standard"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.number_of_template",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.template_size",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.use_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wiegand settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.length",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.id_fields",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.parity_fields",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.parity_positions",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.parity_types",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.use_facility_code",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Trigger conditions and actions"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.trigger",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.action",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.schedule_id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom permissions"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.operator",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.permission_items",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom fields"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.custom_fields.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.custom_fields.id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Signal settings"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.delay",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.count",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.on_duration",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.off_duration",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Data management"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "System backup"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.systemBackup",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Video management"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.video.camera",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.video.rule",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Visitor management"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.visitor",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.visitor.setting",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Port management"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.port",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Daylight saving time"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.dst",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom interface"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.quick_action",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
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