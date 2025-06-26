"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["788"], {
1650: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_event_mdx_5c5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-monitoring-event-mdx-5c5.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_event_mdx_5c5_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-event","title":"Monitor Event","description":"This guide provides methods for monitoring and managing real-time events through the event monitoring feature. Utilize various functions such as alarm events, warning events, filtering, and status management to efficiently handle events.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-event.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-event","permalink":"/docs/en/platform/biostar_x/monitoring-event","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-event.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-event","title":"Monitor Event","description":"This guide provides methods for monitoring and managing real-time events through the event monitoring feature. Utilize various functions such as alarm events, warning events, filtering, and status management to efficiently handle events.","keywords":["Monitoring","Event monitoring","Real-time event","Alarm event","Warning event","Event filtering"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Monitor Video","permalink":"/docs/en/platform/biostar_x/monitoring-video"},"next":{"title":"Data","permalink":"/docs/en/platform/biostar_x/how-to-guide-data"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-event.mdx


const frontMatter = {
	id: 'monitoring-event',
	title: 'Monitor Event',
	description: 'This guide provides methods for monitoring and managing real-time events through the event monitoring feature. Utilize various functions such as alarm events, warning events, filtering, and status management to efficiently handle events.',
	keywords: [
		'Monitoring',
		'Event monitoring',
		'Real-time event',
		'Alarm event',
		'Warning event',
		'Event filtering'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*Example image to be added*/
/*Differences between Alarm Events and Warning Events*/


const toc = [{
  "value": "Checking the event list",
  "id": "event-list",
  "level": 2
}, {
  "value": "Distinguishing events by color",
  "id": "event-color",
  "level": 2
}, {
  "value": "Checking alarm events",
  "id": "alarm-event",
  "level": 2
}, {
  "value": "Checking related events",
  "id": "related-event",
  "level": 2
}, {
  "value": "Real-time events",
  "id": "real-time-event",
  "level": 2
}, {
  "value": "Filtering events",
  "id": "filter-event",
  "level": 2
}, {
  "value": "Applying filters",
  "id": "apply-filter",
  "level": 3
}, {
  "value": "Saving filters",
  "id": "save-filter",
  "level": 3
}, {
  "value": "Removing filters",
  "id": "remove-filter",
  "level": 3
}, {
  "value": "Clearing the event list",
  "id": "clear-event-list",
  "level": 2
}, {
  "value": "Popup menu features for events",
  "id": "popup-menu-features-for-events",
  "level": 2
}, {
  "value": "Acknowledging alarms and recording actions",
  "id": "acknowledging-alarms-and-recording-actions",
  "level": 2
}, {
  "value": "Viewing unacknowledged alarm events",
  "id": "viewing-unacknowledged-alarm-events",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcAdd, IcAlarm, IcClose, IcErr, IcFilter, IcMoreB, IcPause, IcPlay, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcAlarm) _missingMdxReference("IcAlarm", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcErr) _missingMdxReference("IcErr", true);
  if (!IcFilter) _missingMdxReference("IcFilter", true);
  if (!IcMoreB) _missingMdxReference("IcMoreB", true);
  if (!IcPause) _missingMdxReference("IcPause", true);
  if (!IcPlay) _missingMdxReference("IcPlay", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " section at the bottom of the monitoring page, you can check and manage real-time events. Efficient event management is possible through various features such as event status, alarm event handling, filtering, and color coding. Specifically, you can monitor events related to doors, devices, and users in real time and take prompt actions as needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "event-list",
      children: "Checking the event list"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " section, you can view events as they occur in real time. Each event includes the following information:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.date"
          }), ": The date and time the event occurred."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.area"
          }), ": The area where the event occurred."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.door"
          }), ": The door where the event occurred."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.device"
          }), ": The device on which the event occurred."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.userGroup"
          }), ": The user group that triggered the event."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.user"
          }), ": The user who triggered the event."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.event"
          }), ": Detailed information about the event."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.status"
          }), ": The event status. Active events are shown as Active. Alarm events have a ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), " button displayed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.view"
          }), ": If the event includes video information from the camera connected to the door, a video icon is displayed. Clicking this icon lets you view the video."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Clicking on an individual event will display detailed information on the right side of the screen. This detailed information includes the time of the event, area, door, device, user group, user, port, and event details."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If the event includes video or image information from a camera connected to the door, you can also view video and image logs."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "event-color",
      children: "Distinguishing events by color"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Events in the event list can be distinguished by color:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No Color"
          }), ": Normal event."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Yellow"
          }), ": Warning event. This indicates events that need attention, such as unauthorized access attempts in restricted areas or doors being left open."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Red"
          }), ": ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#alarm",
            children: "Alarm"
          }), " event. This indicates events requiring action within the system."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Green"
          }), ": Resolved alarm event."]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alarm-event",
      children: "Checking alarm events"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Only alarm events can be viewed in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " section. Click the ", (0,jsx_runtime.jsx)(IcAlarm, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.toolbar.alarmEvents"
      }), " button in the upper right corner of the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " section."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The event list will display only alarm events, which are indicated in red."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To view all events, click the ", (0,jsx_runtime.jsx)(IcAlarm, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.eventTable.toolbar.allEvents"
        }), " button in the upper right corner of the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.eventTable.title"
        }), " section."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-event",
      children: "Checking related events"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can view only events related to the video or map currently being observed in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " section. Click the ", (0,jsx_runtime.jsx)(IcFilter, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.toolbar.relatedEvents"
      }), " button in the upper right corner of the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " section."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The event list will display only related events."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To view all events, click ", (0,jsx_runtime.jsx)(IcFilter, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.eventTable.toolbar.allEvents"
        }), " in the upper right corner of the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.eventTable.title"
        }), " section."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-time-event",
      children: "Real-time events"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The event list in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " section allows you to check events as they occur in real time. To stop real-time events, click ", (0,jsx_runtime.jsx)(IcPause, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.toolbar.pause"
      }), " in the upper right corner of the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " section. Click ", (0,jsx_runtime.jsx)(IcPlay, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.toolbar.play"
      }), " to resume real-time events."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filter-event",
      children: "Filtering events"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "apply-filter",
      children: "Applying filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users can filter the event list according to their desired criteria, allowing for quick identification of relevant events."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcFilter, {}), " on each header column in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the filter window appears, select the desired item from the left list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To deselect an item, click ", (0,jsx_runtime.jsx)("span", {
            className: "text-blue-500",
            children: (0,jsx_runtime.jsx)(IcClose, {})
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once all settings are complete, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Only events that meet the set conditions will be displayed in the event list."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can also quickly search for desired items using the search input field in the filter window."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Multiple conditions can be set for each header column, applying an ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AND"
            }), " condition if more than one condition is specified."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When filtering conditions are applied, the ", (0,jsx_runtime.jsx)("span", {
              className: "text-blue-500",
              children: (0,jsx_runtime.jsx)(IcFilter, {})
            }), " icon color in the header column changes to blue."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "save-filter",
      children: "Saving filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can save the set filter conditions. Saved filters can be retrieved by clicking the tab button."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAdd, {}), " in the upper left corner of the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When a new tab is created, enter your desired name."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After entering the name, press ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " or click outside the area."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set the filter conditions."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.eventTable.toolbar.allEvents"
            }), " tab is provided as a default."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can double-click the tab name to change it."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Clicking ", (0,jsx_runtime.jsx)(IcClose, {}), " on a tab will delete it. Once a tab is deleted, it cannot be recovered."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Tabs with saved filter conditions are stored in the user account. Saved tabs will not be displayed when logged in with a different user account."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If an alarm event occurs while no filter tab is selected, ", (0,jsx_runtime.jsx)(IcErr, {}), " will be displayed."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remove-filter",
      children: "Removing filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can clear the applied filter conditions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)("span", {
            className: "text-blue-500",
            children: (0,jsx_runtime.jsx)(IcFilter, {})
          }), " on the header column where filters were applied in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the filter window appears, click ", (0,jsx_runtime.jsx)("span", {
            className: "text-blue-500",
            children: (0,jsx_runtime.jsx)(IcClose, {})
          }), " next to the item you wish to remove from the right list. To clear all filters, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.removeAll"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once all conditions to be cleared are set, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can also quickly search for desired items using the search input field in the filter window."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When filtering conditions are cleared, the icon color in the header column will revert to its original state."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "clear-event-list",
      children: "Clearing the event list"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " section, you can clear events. Click ", (0,jsx_runtime.jsx)(IcMoreB, {}), " in the upper right corner of the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " section and select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.clearEvents"
      }), " from the popup menu. If there are many unnecessary events accumulated in the event list, you can use the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.clearEvents"
      }), " feature to clean up."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "popup-menu-features-for-events",
      children: "Popup menu features for events"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Right-clicking on individual items in the event list brings up a popup menu. Using the features provided in the popup menu, you can quickly select doors, devices, and cameras related to an event."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.findDoorInTree"
          }), ": Quickly find the door associated with the event log in the left sidebar. The ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " tab in the sidebar will be activated and highlight the corresponding door."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This feature requires the event log to include ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Door"
            }), " information."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.findDeviceInTree"
          }), ": Quickly find the device associated with the event log in the left sidebar. The ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.device.title"
          }), " tab in the sidebar will be activated and highlight the corresponding device."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This feature requires the event log to include ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device"
            }), " information."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openVideo"
          }), ": Play the video associated with the event log's door in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.title"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This feature requires the event log to include ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Door"
            }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rule"
            }), " information."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openMap"
          }), ": View the map associated with the event log's door in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.title"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This feature requires the event log to include ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Map"
            }), " information made up of doors."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.viewDetail"
          }), ": Check detailed information about the event log. A detailed information window will appear on the right side of the screen."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The displayed information may vary depending on the type of event. For more information about setting event rules, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "following"
            }), "."]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acknowledging-alarms-and-recording-actions",
      children: "Acknowledging alarms and recording actions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When an alarm event occurs, ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " is displayed in the status column of the event list. Through ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), ", administrators can record their acknowledgement of the triggered alarm event and any actions taken."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To select all events, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.selectAll"
      }), ". When the alarm event popup window appears, select the alarm event from the left list for which you wish to record an action."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Memo"
          }), ": You can record actions taken regarding the alarm event, up to 500 characters."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), ": Records acknowledgement and actions regarding the alarm event."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.ignore"
          }), ": Defers acknowledgement of the alarm event. Actions taken can be recorded."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Ignore All"
          }), ": Defers acknowledgement of all triggered alarm events. Actions taken can be recorded."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The functionalities provided are only available for alarm events."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Ignore All"
            }), " button is displayed only when two or more identical alarm events occur."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewing-unacknowledged-alarm-events",
      children: "Viewing unacknowledged alarm events"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This feature allows you to view unacknowledged alarm events at once and record actions taken. It is especially useful when multiple identical alarm events occur."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the icon button in the upper right corner of the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["This will record the actions for the selected events and close the alarm event popup window. Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.selectAll"
          }), " to select all events."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter actions regarding the alarm event in the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Memo"
          }), " input field."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " for the alarm event. A popup window will appear where you can enter your acknowledgement of the alarm event and any actions taken."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "If only one alarm event is selected, you can view the detailed information about that event. If another user has previously recorded actions for the same alarm event, that recorded content will be displayed. The current user can modify the recorded actions."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.acknowledge"
            }), ", you must select more than one event from the alarm event list."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Clicking ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Alarm History"
            }), " will move to the alarm history feature on the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.data"
            }), " page. For more information about the alarm history feature, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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