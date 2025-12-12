"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["82258"], {
61951: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_event_mdx_5c5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-monitoring-event-mdx-5c5.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_event_mdx_5c5_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-event","title":"Monitor Event","description":"This guide provides methods for monitoring and managing real-time events through the event monitoring feature. Utilize various functions such as alarm events, warning events, filtering, and status management to efficiently handle events.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-event.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-event","permalink":"/docs/en/platform/biostar_x/monitoring-event","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-event.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-event","title":"Monitor Event","description":"This guide provides methods for monitoring and managing real-time events through the event monitoring feature. Utilize various functions such as alarm events, warning events, filtering, and status management to efficiently handle events.","keywords":["Monitoring","Event monitoring","Real-time event","Alarm event","Warning event","Event filtering"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Monitor Video","permalink":"/docs/en/platform/biostar_x/monitoring-video"},"next":{"title":"Data","permalink":"/docs/en/platform/biostar_x/how-to-guide-data"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
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
  "value": "Remove filters",
  "id": "removefilter",
  "level": 3
}, {
  "value": "Clear the event list",
  "id": "cleareventlist",
  "level": 2
}, {
  "value": "Check alarm and record action",
  "id": "acknowledge-alarm-and-record-action",
  "level": 2
}, {
  "value": "Record action for alarm event",
  "id": "recordactionforalarmevent",
  "level": 3
}, {
  "value": "Pending acknowledgment of alarm event",
  "id": "deferalarmeventacknowledgment",
  "level": 3
}, {
  "value": "Checking alarm events in the event list",
  "id": "checking-alarm-events-in-the-event-list",
  "level": 3
}, {
  "value": "Viewing unacknowledged alarm events",
  "id": "viewing-unacknowledged-alarm-events",
  "level": 2
}, {
  "value": "Event list column settings",
  "id": "event-list-column-settings",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAlarm, IcClose, IcFilter, IcMoreB, IcPause, IcPlay, IcVidLog, IcViewAlert, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAlarm) _missingMdxReference("IcAlarm", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcFilter) _missingMdxReference("IcFilter", true);
  if (!IcMoreB) _missingMdxReference("IcMoreB", true);
  if (!IcPause) _missingMdxReference("IcPause", true);
  if (!IcPlay) _missingMdxReference("IcPlay", true);
  if (!IcVidLog) _missingMdxReference("IcVidLog", true);
  if (!IcViewAlert) _missingMdxReference("IcViewAlert", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " section at the bottom of the monitoring page, you can check and manage real-time events. Efficient event management is possible through various features such as event status, alarm event handling, filtering, and color coding. Specifically, you can monitor events related to doors, devices, and users in real time and take prompt actions as needed."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "event-list",
      children: "Checking the event list"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " section, you can view events as they occur in real time. Each event includes the following information:"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-details.png"
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
          }), ": The event status. Active events are displayed as ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.preview.event.active"
          }), ". Alarm events have a ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), " button displayed. Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), " to resolve the event."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-alarm-active.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.view"
          }), ": If the event includes video information from the camera connected to the door, a video icon (", (0,jsx_runtime.jsx)(IcVidLog, {}), ") is displayed. Clicking this icon lets you view the video."]
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
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-types.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No Color"
          }), ": Normal event."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              color: '#ffa200'
            },
            children: "Orange"
          }), ": Caution event. This indicates events that need attention, such as unauthorized access attempts in restricted areas or doors being left open."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              color: '#ff0000'
            },
            children: "Red"
          }), ": ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#alarm",
            children: "Alarm"
          }), " event. This indicates a warning event requiring action within the system."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              color: '#6dae00'
            },
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
      }), " section. Click ", (0,jsx_runtime.jsx)(IcAlarm, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.toolbar.alarmEvents"
      }), " in the upper right corner of the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " section. The event list will display only alarm events, which are indicated in red. Alarm events are displayed in red."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-view-only-alarm.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To view all events, click ", (0,jsx_runtime.jsx)(IcAlarm, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
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
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-pause.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filter-event",
      children: "Filtering events"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "apply-filter",
      children: "Applying filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users can filter the event list according to their desired criteria, allowing for quick identification of relevant events. This allows you to quickly check events based on the desired conditions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcFilter, {}), " on each header column in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-filter-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the filter window appears, select the desired item from the left list."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-filter-02.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To deselect an item, click ", (0,jsx_runtime.jsx)("span", {
            className: "text-blue-500",
            children: (0,jsx_runtime.jsx)(IcClose, {})
          }), ". To clear all items, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.removeAll"
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
            }), " condition if more than one condition is specified. When setting more than one condition, apply the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AND"
            }), " condition."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The items that can be filtered may vary by header column."
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
      id: "removefilter",
      children: "Remove filters"
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
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-filter-02.png"
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
      id: "cleareventlist",
      children: "Clear the event list"
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
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-remove.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acknowledge-alarm-and-record-action",
      children: "Check alarm and record action"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When an alarm event, such as forced opening of the door, occurs, an alarm message window appears. The alarm message window includes detailed information about the triggered alarm event. At this time, the administrator can record their acknowledgement of the triggered alarm event and any actions taken."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-alert-message.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.ignoreAll"
        }), " button is displayed only when two or more alarm events occur."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recordactionforalarmevent",
      children: "Record action for alarm event"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enter actions regarding the alarm event in the message input field. You can enter up to 500 characters. Enter actions and click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " button. Records acknowledgement and actions regarding the alarm event. The alarm message window will close."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deferalarmeventacknowledgment",
      children: "Pending acknowledgment of alarm event"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can also defer acknowledgement of the alarm event by clicking the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.ignore"
      }), " button. Actions taken can be recorded. The alarm message window will close. Deferred alarm events are displayed in the event list as ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.preview.event.active"
      }), " status, and the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " button can be used."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-alarm-active.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checking-alarm-events-in-the-event-list",
      children: "Checking alarm events in the event list"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Clicking the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " button displayed in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.status"
      }), " column of the event list allows recording of the acknowledgement and actions regarding the triggered alarm events. Complete your entry and click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " button."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-alert-acknowledge.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewing-unacknowledged-alarm-events",
      children: "Viewing unacknowledged alarm events"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This feature allows you to view unacknowledged alarm events at once and record actions taken. It is especially useful when multiple identical alarm events occur."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcViewAlert, {}), " in the upper right corner of the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-view-alerts-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.activeAlarm.activeAlarmEvents"
          }), " window appears, select the alarm event to record actions from the left list. To select all events, click the checkbox on the far left of the header column."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-view-alerts-02.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter actions regarding the alarm event in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.activeAlarm.memo"
          }), " input field."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Records the actions taken for the selected event. A popup window will appear where you can enter your acknowledgement of the alarm event and any actions taken."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You must select more than one event from the alarm event list for the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.acknowledge"
        }), " button to be activated."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "event-list-column-settings",
      children: "Event list column settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can add columns to display in the event list, rearrange them, and set them to hidden."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcMoreB, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.columnLayout"
          }), " at the upper right of the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-column-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.columnLayout"
          }), " window appears, you can click the checkboxes of the columns to display them or set them as hidden. You can also change the order of columns via drag and drop."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-column-layout-popup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After making all changes to column settings, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To initialize the column settings, click the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "columnSetting.button.defaultColumn",
          product: "2"
        }), " button."]
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