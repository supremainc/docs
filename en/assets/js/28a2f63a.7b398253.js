"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["35357"], {
27578: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_data_generate_reports_mdx_28a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-data-generate-reports-mdx-28a.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_data_generate_reports_mdx_28a_namespaceObject = JSON.parse('{"id":"platform/biostar_x/data-generate-reports","title":"Generate Report","description":"Reports are created in the desired format.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/data-generate-reports.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/data-generate-reports","permalink":"/en/platform/biostar_x/data-generate-reports","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/data-generate-reports.mdx","tags":[],"version":"current","frontMatter":{"id":"data-generate-reports","title":"Generate Report","description":"Reports are created in the desired format.","keywords":["Report","Template"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Data","permalink":"/en/platform/biostar_x/how-to-guide-data"},"next":{"title":"Automatic Report Schedule","permalink":"/en/platform/biostar_x/data-automatic-report-schedule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/data-generate-reports.mdx


const frontMatter = {
	id: 'data-generate-reports',
	title: 'Generate Report',
	description: 'Reports are created in the desired format.',
	keywords: [
		'Report',
		'Template'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "View all events",
  "id": "view-all-events",
  "level": 2
}, {
  "value": "Set period",
  "id": "set-period",
  "level": 3
}, {
  "value": "Set query conditions",
  "id": "set-query-conditions",
  "level": 3
}, {
  "value": "Clear query conditions",
  "id": "clear-query-conditions",
  "level": 3
}, {
  "value": "Check event video",
  "id": "check-event-video",
  "level": 3
}, {
  "value": "Export to CSV",
  "id": "export-to-csv",
  "level": 3
}, {
  "value": "View alarm history",
  "id": "view-alarm-history",
  "level": 2
}, {
  "value": "Set period",
  "id": "set-period-1",
  "level": 3
}, {
  "value": "Set query conditions",
  "id": "set-query-conditions-1",
  "level": 3
}, {
  "value": "Clear query conditions",
  "id": "clear-query-conditions-1",
  "level": 3
}, {
  "value": "User report query",
  "id": "user-report-query",
  "level": 2
}, {
  "value": "Generate custom report",
  "id": "custom-report",
  "level": 2
}, {
  "value": "Report management",
  "id": "report-management",
  "level": 2
}, {
  "value": "Report Save",
  "id": "report-save",
  "level": 3
}, {
  "value": "Save report file",
  "id": "save-report-file",
  "level": 3
}, {
  "value": "Print report",
  "id": "print-report",
  "level": 3
}, {
  "value": "Delete report",
  "id": "delete-report",
  "level": 3
}, {
  "value": "Set columns",
  "id": "set-columns",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
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
  }, {Cmd, Column, Columns, IcBw2, IcClose, IcFilter2, IcFirst2, IcFw2, IcLast2, IcMoreW, IcRepTrash, IcRepoEdit, IcReportVid, IcSearch, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!IcBw2) _missingMdxReference("IcBw2", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcFilter2) _missingMdxReference("IcFilter2", true);
  if (!IcFirst2) _missingMdxReference("IcFirst2", true);
  if (!IcFw2) _missingMdxReference("IcFw2", true);
  if (!IcLast2) _missingMdxReference("IcLast2", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcRepTrash) _missingMdxReference("IcRepTrash", true);
  if (!IcRepoEdit) _missingMdxReference("IcRepoEdit", true);
  if (!IcReportVid) _missingMdxReference("IcReportVid", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can view all events that occurred in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " or just the alarm history. You can filter and generate custom reports according to user-defined conditions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.data"
      }), " or select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.data"
      }), " from the shortcut list at the top left of the screen on the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " page."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "view-all-events",
      children: "View all events"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can view all events that occurred in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.events"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.allEvents"
      }), " on the left sidebar of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-generate-report.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To check the previous or next page from the listed results, click ", (0,jsx_runtime.jsx)(IcFw2, {}), " or ", (0,jsx_runtime.jsx)(IcBw2, {}), " at the top right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "To change the number of rows displayed in the list, click the dropdown menu at the top right of the screen and select your desired value. You can select from a minimum of 25 rows to a maximum of 200 rows."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-all-events-set-rows.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-period",
      children: "Set period"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set the desired period in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.header.customReport.period"
      }), " option at the top left of the screen. Click the date area."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-select-period.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "You can select predefined periods from today ranging from the 1st to 6 months. The events that occurred during the selected period will be automatically displayed in the list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["By selecting ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.dialog.rollCall.userDefined"
          }), ", you can also manually set your desired period. When the period selection window appears, set the start date, end date, and time, then click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.ok"
          }), ". The events that occurred during the set period will automatically appear in the list."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-all-events-set-custom-period.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To select today's date, click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.dialog.rollCall.today"
            }), "."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-query-conditions",
      children: "Set query conditions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can filter the list by setting your desired conditions in the header section of the query list. You can set conditions for all items except for dates."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the header section of the event list, click the ", (0,jsx_runtime.jsx)(IcFilter2, {}), " button for the desired column."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the filter condition window appears, select your desired items."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once your selections are complete, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCondition",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Only events matching the selected conditions will be displayed in the list."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-filtered.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clear-query-conditions",
      children: "Clear query conditions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To clear the set query conditions, click the ", (0,jsx_runtime.jsx)(IcClose, {}), " button in the conditions set below the header section. The set conditions will be cleared, and all events will be displayed in the list again."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-disable-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-event-video",
      children: "Check event video"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If a camera is connected to a device where a specific event occurred in the event list, an ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.column.customReport.view"
      }), " column will show the ", (0,jsx_runtime.jsx)(IcReportVid, {}), " icon for that event. By clicking the icon, you can view the video at the time the event occurred through a pop-up window."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-video-log.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you have connected more than one camera in the camera rule settings, it will play the video from the first camera. For more information about camera rule settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This feature is available with additional options on the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced"
            }), " license or higher. For more information on licensing policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For information on linking doors and cameras, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "export-to-csv",
      children: "Export to CSV"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can export the queried event list as a CSV file. Click ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "menu.csvDownload",
        product: "2"
      }), " at the top right of the screen. You can download the CSV file to your PC."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The name format of the CSV file is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Report_YYYYMMDD_hash.csv"
        }), ". (For example, ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Report_20251002_94a85b7519664378b4b39b879f1e81b7.csv"
        }), ")"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "view-alarm-history",
      children: "View alarm history"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can only view alarm (alert) history. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.events"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.alertHistory"
      }), " on the left sidebar of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-alert-lists.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To check the previous or next page from the listed results, click ", (0,jsx_runtime.jsx)(IcFw2, {}), " or ", (0,jsx_runtime.jsx)(IcBw2, {}), " at the top right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To go to the first or last page of the queried list, click ", (0,jsx_runtime.jsx)(IcFirst2, {}), " or ", (0,jsx_runtime.jsx)(IcLast2, {}), " at the top right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "To change the number of rows displayed in the list, click the dropdown menu at the top right of the screen and select your desired value. You can select from a minimum of 25 rows to a maximum of 200 rows."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-all-events-set-rows.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information about checking alarm (alert) events in event monitoring, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "monitoring-event",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-period-1",
      children: "Set period"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set the desired period and query the alarm history that occurred during that period. In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportHeader.datetime",
        product: "2"
      }), " column of the queried list, click the ", (0,jsx_runtime.jsx)(IcFilter2, {}), " button. When the period selection window appears, set the start date, end date, and time, then click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.button.ok"
      }), ". The events that occurred during the set period will automatically appear in the list."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-set-custom-period.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To select today's date, click ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "data.dialog.rollCall.today"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-query-conditions-1",
      children: "Set query conditions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can filter the list by setting your desired conditions in the header section of the query list. You can set conditions for all items except for dates."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the header section of the event list, click the ", (0,jsx_runtime.jsx)(IcFilter2, {}), " button for the desired column."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the filter condition window appears, select your desired items."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once your selections are complete, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCondition",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Only events matching the selected conditions will be displayed in the list."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-alert-events-filtered.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clear-query-conditions-1",
      children: "Clear query conditions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To clear the set query conditions, click the ", (0,jsx_runtime.jsx)(IcClose, {}), " button in the conditions set below the header section. The set conditions will be cleared, and all events will be displayed in the list again."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-alert-events-disable-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-report-query",
      children: "User report query"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can select user-related templates to generate reports. In the left sidebar of the screen, click the desired template under ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.user"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--30",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-user-report.png"
        })
      }), (0,jsx_runtime.jsx)(Column, {
        className: "padding--l10",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersInformation"
              }), ": You can view detailed user information in a list format."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersInDevice"
              }), ": You can view information of users registered to the device."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.userDetail"
              }), ": You can view detailed user information in a card format."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.userPhotoGallery"
              }), ": You can view user profile pictures in a gallery format."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersWithoutCredential"
              }), ": You can view users who have not set credentials."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.privateAuthModeByUser"
              }), ": You can view user-specific private authentication mode settings."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.numberOfCredentialsByUser"
              }), ": You can view the number of credentials set for the user."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.allCards"
              }), ": You can view users based on enrolled cards."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.unassignedCards"
              }), ": You can view cards that have not been assigned to users."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.blacklistCards"
              }), ": You can view disabled cards."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.expiredUsers"
              }), ": You can view users whose expiration date has passed."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersToBeExpiredInNDays"
              }), ": You can view users whose expiration date is approaching within N days. You can directly input the number of days before generating the report."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.report.idleUsersWithValue"
              }), ": You can view users who have had no access records for the past N months. You can directly input the number of months before generating the report."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.inactiveUsers"
              }), ": You can view inactive users."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The generated report can be saved under ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.sidebar.savedReports"
            }), ". Click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.button.saveReport"
            }), " button at the top left of the report."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about report management, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#report-management",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "custom-report",
      children: "Generate custom report"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can filter and generate custom reports according to your desired conditions. The generated report can be saved as a template for convenient use when generating reports with the same conditions in the future."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.sidebar.events"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.sidebar.customReport"
          }), " on the left sidebar of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.dialog.customReport.events"
          }), " window, select the desired events."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-set-filter.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once you have completed your desired event selection, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), " button."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-select-items.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["In the search (", (0,jsx_runtime.jsx)(IcSearch, {}), ") input field, you can search for desired items."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["By clicking the ", (0,jsx_runtime.jsx)(IcRepTrash, {}), " button in the rightmost list, you can exclude the selected items."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the query period and click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), " button."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-set-period.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.static"
              }), ": You can set a specific date and time to set the query period."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.dynamic"
              }), ": You can set the start date, end date, and time based on today. It is useful when generating reports for a specific period iteratively."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "You can set conditions based on users, doors, and devices, either grouped or individually."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-select-filters.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["By clicking the ", (0,jsx_runtime.jsx)(IcRepTrash, {}), " button in the right list, you can exclude the selected items."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select your desired conditions and click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the column settings window, select the columns to be displayed in the report."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-set-columns.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once you have finished selecting your desired columns, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.button.generate"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Complete the creation of the custom report."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-complete.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To modify the report title, event items, period, and filter conditions, click the ", (0,jsx_runtime.jsx)(IcRepoEdit, {}), " button at the top of the report."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The report title can also be changed under ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.sidebar.savedReports"
            }), " in the left sidebar of the screen. Select the custom report for which you want to change the title and right-click. Select ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.sidebar.renameSavedReport"
            }), " from the pop-up menu."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-data-custom-report-rename.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about report management, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#report-management",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "report-management",
      children: "Report management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "report-save",
      children: "Report Save"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To save the generated report as a template, click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.saveReport"
      }), " button. Saved reports can be viewed under ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.savedReports"
      }), " in the left sidebar of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-saved.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "save-report-file",
      children: "Save report file"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To export the report as a PDF or CSV file, click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.export"
      }), " button. When the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.exportReport"
      }), " window appears, set each item and click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.export"
      }), " button."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-export.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "print-report",
      children: "Print report"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To print the report using a printer connected to your PC, click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.print"
      }), " button. When the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.printReport"
      }), " window appears, set each item and click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.print"
      }), " button."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-print.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The print preview screen will appear in a new tab of your web browser. Click the print button at the top right of the screen to start printing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-report",
      children: "Delete report"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To delete a saved report, select the report to be deleted under ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.savedReports"
      }), " in the left sidebar and right-click. Select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.deleteSavedReport"
      }), " from the pop-up menu."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-remove.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-columns",
      children: "Set columns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the column settings displayed in the report. Through column settings, you can select the columns to be displayed or change the order of the columns."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.dialog.customReport.columns"
          }), " button at the top right of the report."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.columnSetting.title"
          }), " window appears, select or deselect the desired columns."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-column-setting.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "To change the order of the columns, click and drag the desired column to change its position."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To save the settings, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To reset the column layout settings, click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "columnSetting.button.defaultColumn",
              product: "2"
            }), " button."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Depending on the generated report, the columns that can be selected or deselected may vary."
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