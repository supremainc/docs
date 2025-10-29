"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5834"], {
61402: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_dashboard_adding_widget_mdx_d2b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-dashboard-adding-widget-mdx-d2b.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_dashboard_adding_widget_mdx_d2b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/dashboard-adding-widget","title":"Add Widgets","description":"The dashboard is a customizable monitoring screen where users can freely arrange the information they want.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/dashboard-adding-widget.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/dashboard-adding-widget","permalink":"/docs/en/platform/biostar_x/dashboard-adding-widget","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/dashboard-adding-widget.mdx","tags":[],"version":"current","frontMatter":{"id":"dashboard-adding-widget","title":"Add Widgets","description":"The dashboard is a customizable monitoring screen where users can freely arrange the information they want.","keywords":["Dashboard","Widget"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Dashboard","permalink":"/docs/en/platform/biostar_x/how-to-guide-dashboard"},"next":{"title":"Edit Widget","permalink":"/docs/en/platform/biostar_x/dashboard-edit-widget"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/dashboard-adding-widget.mdx


const frontMatter = {
	id: 'dashboard-adding-widget',
	title: 'Add Widgets',
	description: 'The dashboard is a customizable monitoring screen where users can freely arrange the information they want.',
	keywords: [
		'Dashboard',
		'Widget'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Add widgets",
  "id": "add-widgets",
  "level": 2
}, {
  "value": "Types of widgets",
  "id": "widget-types",
  "level": 2
}, {
  "value": "Chart",
  "id": "chart",
  "level": 3
}, {
  "value": "Counter",
  "id": "bar",
  "level": 3
}, {
  "value": "Text",
  "id": "text",
  "level": 3
}, {
  "value": "Real-time events",
  "id": "realtime-events",
  "level": 3
}, {
  "value": "Real-time access monitoring",
  "id": "real-time-access-monitoring",
  "level": 3
}, {
  "value": "System usage status",
  "id": "system-usage-status",
  "level": 3
}, {
  "value": "Door control",
  "id": "door-control",
  "level": 3
}, {
  "value": "Set widget data refresh interval",
  "id": "widget-refresh-interval",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcSet2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSet2) _missingMdxReference("IcSet2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " dashboard is a customizable monitoring screen where users can freely arrange the information they want. By adding various widgets, you can configure the key information of the access control system according to your work environment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The types of widgets that can be added are as follows."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chart"
          }), ": Visualize access event data in bar, line, or pie charts"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Counter"
          }), ": Display the number of events per day/week in numbers"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real-time events"
          }), ": Monitor all events occurring in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " in real-time"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real-time access monitoring"
          }), ": Display authentication success user information for specific devices in real-time"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "System usage status"
          }), ": Display registration status of users, devices, access points, etc. in numbers"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Door control"
          }), ": Check the status of selected access points and control them remotely"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Text"
          }), ": Place custom text such as announcements or widget titles"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can gain the following advantages from the widgets placed on the dashboard."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Customized configuration"
          }), ": Select only the information needed for work and arrange it on one screen"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Real-time monitoring"
          }), ": Instantly check access events and system status"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Intuitive visualization"
          }), ": Visual representation of data through charts and counters"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Efficient management"
          }), ": Improve work efficiency by integrating monitoring and control features"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-widgets",
      children: "Add widgets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can add widgets to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.dashboard"
      }), " to check the information you want."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.addWidget",
            product: "2"
          }), " button."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-dashboard-add-widget.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.addNewWidget",
            product: "2"
          }), " window appears, select the desired item in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetType",
            product: "2"
          }), " and enter or set the required fields."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-dashboard-add-widget-type.png",
          width: 400
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Complete the widget settings and click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.apply",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the widget is created in the widget display area, adjust its size or place it in the desired location."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once you have completed all settings, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.apply",
            product: "2"
          }), " button in the upper right corner of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If a widget has already been added, click the ", (0,jsx_runtime.jsx)(IcSet2, {}), " icon in the upper right corner of the screen. Once you enter ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.dashboardSettings",
          product: "2"
        }), " mode, click the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.addWidget",
          product: "2"
        }), " button."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "widget-types",
      children: "Types of widgets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The default widget size is set differently for each widget and is optimized to look best at the default."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "All widgets can be resized by dragging the lower-right corner."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-adjust-win-size.png",
          caption: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chart",
      children: "Chart"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Selecting desired chart data enables the display of the number of events that occurred in a chart."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-chart.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetTypes.chartData",
            product: "2"
          }), ": From the daily or weekly event list, select the desired chart data."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAPBViolation",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAPBViolation",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartType",
            product: "2"
          }), ": Select the desired type among ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.verticalBar",
            product: "2"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.horizontalBar",
            product: "2"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.line",
            product: "2"
          }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.pie",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartColorSchemes",
            product: "2"
          }), ": Select the desired color among 5 color schemes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The charts shown when selecting ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.chartColorSchemes",
          product: "2"
        }), " are random values for preview, not actual values."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bar",
      children: "Counter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Selecting desired counter data enables the display of the number of events that occurred as a number."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-counter.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetTypes.counterData",
            product: "2"
          }), ": From the daily or weekly event list, select the desired counter data."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAPBViolation",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAPBViolation",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "text",
      children: "Text"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can input and place the desired text in the widget area of ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.dashboard"
      }), ". After creation, you can place it in the required location and use it as a title for a widget or as a notice."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-text.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you select the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.text.removeBackground",
          product: "2"
        }), " option while creating a ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.text",
          product: "2"
        }), " widget, transparency will be applied to the background."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "realtime-events",
      children: "Real-time events"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Shows events occurring in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " in real-time. You can check events by filtering specific events, users, doors, and devices."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-real-time-event.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.pause",
            product: "2"
          }), ": To pause the real-time event."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.play",
            product: "2"
          }), ": Resume a real-time event that stopped."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.clear",
            product: "2"
          }), ": The entire captured record will be removed."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you navigate to another page and then return to ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.dashboard"
        }), ", the list will be cleared and events will be recorded again."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-time-access-monitoring",
      children: "Real-time access monitoring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Select one device and display the profile photo and information (", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.user",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.date",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.device",
        product: "2"
      }), ") of the user who successfully authenticated to the selected device in real time."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-checkpoint.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.pause",
            product: "2"
          }), ": To pause the checkpoint."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.play",
            product: "2"
          }), ": To resume the checkpoint that paused."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.clear",
            product: "2"
          }), ": The entire captured record will be removed."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.checkpoint",
          product: "2"
        }), " are recorded for up to 5 people."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-usage-status",
      children: "System usage status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The various usage statuses of BioStar X are displayed in numbers."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-system-usage.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.widgetTypes.systemUsage",
        product: "2"
      }), " that can be displayed is as follows:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.users",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.cards",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.fingerprint",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.visualFace",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.face",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.qrBarcode",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.mobileAccessCard",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.devices",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.doors",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.zones",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.accessGroups",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.userGroups",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.deviceGroups",
          product: "2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "door-control",
      children: "Door control"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select one door to check and control its status."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-door-control.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following items can be controlled with the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.doorControl.actionsBtn",
        product: "2"
      }), " buttons:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.open",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.normalize",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.lock",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.unlock",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.clearAlarm",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.clearAPB",
          product: "2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The name of the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.doorControl",
          product: "2"
        }), " widget is automatically assigned to the name of the door and cannot be modified."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "widget-refresh-interval",
      children: "Set widget data refresh interval"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set the data refresh interval of widgets added to the dashboard."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcSet2, {}), " icon in the upper right corner of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once you enter ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.dashboardSettings",
            product: "2"
          }), " mode, set ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.autoRefreshInterval",
            product: "2"
          }), " in the general settings at the bottom of the screen."]
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