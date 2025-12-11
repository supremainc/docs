"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["87011"], {
59705: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_report_mdx_3ae_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-report-mdx-3ae.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_report_mdx_3ae_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-report","title":"View the Report","description":"You can generate T&A reports from user attendance events collected through the system, and edit time records or export them as CSV or PDF files.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-report.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-report","permalink":"/en/platform/biostar_x/tna-report","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-report.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-report","title":"View the Report","description":"You can generate T&A reports from user attendance events collected through the system, and edit time records or export them as CSV or PDF files.","keywords":["Time & attendance report","Reports"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Set the Schedule","permalink":"/en/platform/biostar_x/tna-rule-schedule"},"next":{"title":"Edit T&A Report","permalink":"/en/platform/biostar_x/tna-report-edit"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-report.mdx


const frontMatter = {
	id: 'tna-report',
	title: 'View the Report',
	description: 'You can generate T&A reports from user attendance events collected through the system, and edit time records or export them as CSV or PDF files.',
	keywords: [
		'Time & attendance report',
		'Reports'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Before start",
  "id": "before-start",
  "level": 2
}, {
  "value": "Before using the multilingual report",
  "id": "before-using-the-multilingual-report",
  "level": 3
}, {
  "value": "Before updating the report,",
  "id": "before-updating-the-report",
  "level": 3
}, {
  "value": "Check the report",
  "id": "check-the-report",
  "level": 2
}, {
  "value": "Generate the report",
  "id": "generate-the-report",
  "level": 3
}, {
  "value": "Set the filter conditions",
  "id": "set-the-filter-conditions",
  "level": 3
}, {
  "value": "Set report period",
  "id": "set-report-period",
  "level": 3
}, {
  "value": "Export report",
  "id": "export-report",
  "level": 3
}, {
  "value": "Generate working alarm time report",
  "id": "generate-working-alarm-time-report",
  "level": 2
}, {
  "value": "Automated email setting",
  "id": "automated-email-setting",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcSearch, IcSet, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!IcSet) _missingMdxReference("IcSet", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "You can generate T&A reports from user attendance events collected through the system, and edit time records or export them as CSV or PDF files."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Easily use the pre-set 7 report filters, and administrators can set filters themselves."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "Before start"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "before-using-the-multilingual-report",
      children: "Before using the multilingual report"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " supports both Korean and English by default. To use multilingual reports, set your desired language according to the following instructions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Navigate to the following path. ", (0,jsx_runtime.jsx)(_components.em, {
            children: "C:\\Program Files\\BioStar X\\plugin\\ta\\dist\\setup\\report_fonts"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a folder with the name of the language you want to use. Refer to the ISO 639-1 standards for language names. For example, to use Spanish, create a folder named \"es.\""
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Copy and paste the fonts into the created folder. Only one TrueType font is supported."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "before-updating-the-report",
      children: "Before updating the report,"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " uses MariaDB as the default database. If you are using MS SQL Server database, please check the following items first."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " with MS SQL Server, if there are many registered users, the memory usage on the PC may accumulate each time the report is updated. Reset the maximum server memory of the MS SQL Server database."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Run ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Microsoft SQL Server Management Studio"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Right-click on the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " database in the object explorer."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click on ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Properties"
          }), " in the popup menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Memory"
          }), " and reduce the value of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Maximum server memory"
          }), " item."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on MariaDB and MS SQL Server settings during ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " installation, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "custom-install",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-the-report",
      children: "Check the report"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generate-the-report",
      children: "Generate the report"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This provides instructions on generating attendance records reports for registered users."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.title",
            product: "2"
          }), " tab on the left sidebar of the screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the desired report filter item from the left sidebar of the screen."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.userGroup",
            product: "2"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), ", click the ", (0,jsx_runtime.jsx)(IcSearch, {}), " button, then specify the group or user."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To generate the report, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.updateReport",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the list of reports appears at the bottom of the screen, you can click the desired item to view details."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-update-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-the-filter-conditions",
      children: "Set the filter conditions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set filter conditions to generate a new T&A record report."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-filter-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), ": Enter the report name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.reportType",
            product: "2"
          }), ": Select the desired report type. The available report types are as follows."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "report.daily",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.dailySummary",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.individual",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.individualSummary",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.leave",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.exception",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.modifiedPunchLogHistory",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.workweek",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["By selecting ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.report.condition.reportType",
              product: "2"
            }), " as ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.individual",
              product: "2"
            }), ", you can set whether to output user entry records."]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-report-individual-types.png"
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "report.individual.optionSummary",
                  product: "2"
                }), ": This outputs only the user's check-in and check-out records in the report."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "report.individual.optionDetail",
                  product: "2"
                }), ": This outputs all user entry records in the report."]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "grid.columnSetting",
            product: "2"
          }), ": You can change the order of the report table columns or hide them."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-filter-setting-column.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After changing the column order, click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "columnSetting.defaultColumn",
              product: "2"
            }), " button to restore to defaults."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report.filter",
            product: "2"
          }), ": This will only activate when ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.reportType",
            product: "2"
          }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report.leave",
            product: "2"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report.exception",
            product: "2"
          }), ", and you can choose specific conditions for absence or exception records."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.userGroup",
            product: "2"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), ": Select the user group or user for report generation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.saveFilter.button",
            product: "2"
          }), ": You can save the configured attendance report as a filter."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-filter-saving.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-report-period",
      children: "Set report period"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This provides instructions on setting the report period."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-period-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set the report period to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.daily",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.weekly",
        product: "2"
      }), ", or ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.monthly",
        product: "2"
      }), ". To generate a report for a specific period, select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.custom",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "export-report",
      children: "Export report"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.downloadToCsv",
            product: "2"
          }), ": You can save the generated report as a CSV file."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.exportPdf",
            product: "2"
          }), ": You can save the generated report as a PDF file."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generate-working-alarm-time-report",
      children: "Generate working alarm time report"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can generate T&A reports for users who have reached the designated working hours or notify the administrator via email. The alert working hours report is generated weekly."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.title",
            product: "2"
          }), " tab on the left sidebar of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Working Alarm Time Report"
          }), " in the filter list on the left sidebar."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-working-alarm.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set each item in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.filterConditions",
            product: "2"
          }), " and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.reportPeriod",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To generate the report, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.updateReport",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To send notifications to the administrator via email for users who have reached the designated working hours, set ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ta.report.condition.autoEmail",
          product: "2"
        }), ". For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#autoEmail",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-email-setting",
      children: "Automated email setting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can automatically send alarm emails to the administrator for users who have reached the designated working hours."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-working-alarm-auto-email.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.email",
            product: "2"
          }), ": Click the checkbox to automatically send emails to the administrator."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.dst.dayOfWeek",
            product: "2"
          }), ": Select the day of the week to send emails to the administrator."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.time",
            product: "2"
          }), ": Set the time to send emails to the administrator."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.triggerAction.recipient",
            product: "2"
          }), ": You can specify the administrator who will receive the email. Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.edit",
            product: "2"
          }), " button to open the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.triggerAction.recipient",
            product: "2"
          }), " popup window. Enter the email address. You can specify more than one administrator."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-working-alarm-auto-email-receipt.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To set the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.report.condition.autoEmail",
              product: "2"
            }), " feature, you must set filter conditions and then save the filter."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The sender information of automatically sent emails can be set in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.setting",
              product: "2"
            }), "(", (0,jsx_runtime.jsx)(IcSet, {}), ") → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.triggerAction.senderInfor",
              product: "2"
            }), " in the left sidebar of the screen. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-settings#senderInfo",
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