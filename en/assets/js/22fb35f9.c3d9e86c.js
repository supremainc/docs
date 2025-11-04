"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["453"], {
82985: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_virtual_device_event_log_mdx_22f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-virtual-device-event-log-mdx-22f.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_virtual_device_event_log_mdx_22f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-virtual-device-event-log","title":"Integrate Virtual Device Event Log","description":"This guide explains how to enroll a virtual device and log events that occur in external systems to BioStar X.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-virtual-device-event-log.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-virtual-device-event-log","permalink":"/docs/en/platform/biostar_x/settings-virtual-device-event-log","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-virtual-device-event-log.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-virtual-device-event-log","title":"Integrate Virtual Device Event Log","description":"This guide explains how to enroll a virtual device and log events that occur in external systems to BioStar X.","keywords":["Virtual Device","Event Logs","API","Integration"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Set up Remote Access","permalink":"/docs/en/platform/biostar_x/settings-remote-access"},"next":{"title":"Plugin","permalink":"/docs/en/platform/biostar_x/plugins"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-virtual-device-event-log.mdx


const frontMatter = {
	id: 'settings-virtual-device-event-log',
	title: 'Integrate Virtual Device Event Log',
	description: 'This guide explains how to enroll a virtual device and log events that occur in external systems to BioStar X.',
	keywords: [
		'Virtual Device',
		'Event Logs',
		'API',
		'Integration'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "When to use this?",
  "id": "when-to-use-this",
  "level": 2
}, {
  "value": "Before start",
  "id": "before-start",
  "level": 2
}, {
  "value": "Register virtual device",
  "id": "register-virtual-device",
  "level": 2
}, {
  "value": "Manage device groups",
  "id": "manage-device-groups",
  "level": 3
}, {
  "value": "Virtual device limitations",
  "id": "virtual-device-limitations",
  "level": 3
}, {
  "value": "Log events via API",
  "id": "log-events-via-api",
  "level": 2
}, {
  "value": "Supported event type",
  "id": "supported-event-type",
  "level": 3
}, {
  "value": "API parameters",
  "id": "api-parameters",
  "level": 3
}, {
  "value": "Retrieve event log",
  "id": "retrieve-event-log",
  "level": 2
}, {
  "value": "Audit trail",
  "id": "audit-trail",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "If the <Cmd class=\"normal\"></Cmd> button is not visible",
  "id": "if-the--button-is-not-visible",
  "level": 3
}, {
  "value": "When the API call fails",
  "id": "when-the-api-call-fails",
  "level": 3
}, {
  "value": "When events are not getting retrieved",
  "id": "when-events-are-not-getting-retrieved",
  "level": 3
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
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["By using the virtual device feature, you can log events such as clock-in and clock-out directly to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " from mobile apps or third-party services when integrating the attendance management feature. You can systematically manage event logs without a physical device, which is useful for integration with external systems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-to-use-this",
      children: "When to use this?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the virtual device event log integration feature in the following situations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When managing events from the external T&A management system in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When you need to save access logs (Punch Log) from the mobile app or external system directly to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " (recording check-in/check-out events without database linkage)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When you need to send events directly via the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " API from third-party applications or services"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "Before start"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event Log API"
      }), " license must be activated. For more information on licensing policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "licensing#features-add-ons",
        children: "the following"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on license application, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-license-biostar-x-license",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "register-virtual-device",
      children: "Register virtual device"
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
            sid: "setting.menu.device.root"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcMoreW, {}), " at the top right of the device list and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.addVirtualDevice",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-device-add-virtual-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the setting information when the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.addVirtualDevice",
            product: "2"
          }), " screen appears."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-device-add-virtual-device-settings.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.name",
                product: "2"
              }), ": Enter the virtual device's name."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.group",
                product: "2"
              }), ": Select the group to assign the virtual device."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.deviceId",
                product: "2"
              }), ": Enter the unique ID of the virtual device. It must be specified within a range that does not duplicate with the existing device ID."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.description",
                product: "2"
              }), ": Enter the description for virtual device."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " at the bottom right of the screen to register the virtual device."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.deviceId",
              product: "2"
            }), " can be specified within the range of 100000 - 999999. It must be specified within a range that does not duplicate with the existing Suprema device ID."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The value of ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.deviceId",
              product: "2"
            }), " that has already been created cannot be modified."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manage-device-groups",
      children: "Manage device groups"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Virtual devices can use the device group feature just like regular devices."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "You can place it in the same group as existing devices."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If the user has group permissions, they can grant permissions to virtual devices within that group."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on device groups, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-manage-device-group",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "virtual-device-limitations",
      children: "Virtual device limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Virtual devices appear only in the following menu."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shell.header.setting"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.device.root"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["View all event logs and preview event logs in ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shell.header.arena"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Retrieve event log from ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "shell.header.data"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The virtual device cannot use access control features at the door and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.advancedAc.root"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cannot be specified as a device for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " setting."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Virtual devices do not appear in the device list in the sidebar of the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cannot use device control feature."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Not included in the number of devices for the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Multi Communication Server"
          }), " license."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "log-events-via-api",
      children: "Log events via API"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "supported-event-type",
      children: "Supported event type"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Only the following event types can be recorded."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Access granted"
          }), " (", (0,jsx_runtime.jsx)(_components.code, {
            children: "4088"
          }), ")"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Access Denied"
          }), " (", (0,jsx_runtime.jsx)(_components.code, {
            children: "6400"
          }), ")"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-parameters",
      children: "API parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You must provide the following parameters when logging events."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dev_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only registered virtual device IDs are allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "evt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access Granted or Access Denied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "datetime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event occurrence time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "user_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tna_key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only available for input with the specified value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Option"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        metastring: "title='Request example'",
        children: "{\n    \"packet_device_id\" : 100003, // required\n    \"is_virtual_device\" : \"true\", // required\n    \"events\":[ //4088 access granted, 6400 access denied\n        {\n            \"dev_id\": 100003, // required\n            \"evt\": 6400, // required\n            \"datetime\": \"2025-08-21T14:12:00Z\", // required\n            \"user_id\": \"2\", // required\n            \"tna_key\": \"1\"\n        },\n        {\n            \"dev_id\": 100003,\n            \"evt\": 6400,\n            \"datetime\": \"2025-08-21T14:13:01Z\",\n            \"user_id\": \"2\",\n            \"tna_key\": \"1\"\n        }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        metastring: "title='Response example'",
        children: "{\n    \"Response\": {\n        \"code\": \"0\",\n        \"link\": \"https://support.supremainc.com/en/support/home\",\n        \"message\": \"Success\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can log multiple event logs for a single virtual device at once with a single API call."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on using API, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://bs2api.biostar2.com/",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "retrieve-event-log",
      children: "Retrieve event log"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can retrieve the event logs recorded through the virtual device in the menu."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), ": Retrieve and filter all events, event preview"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), ": Retrieve and filter all events"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about event retrieval on ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.arena"
            }), ", refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-event",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.data"
            }), ", refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "data-generate-reports",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "audit-trail",
      children: "Audit trail"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Audit trail is recorded as shown in the example below when logs are recorded for events."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Access granted, 2025/08/05 03:37:49, outside access door on 12th floor, Administrator(1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Even if events are logged in batch, an individual audit trail entry is created for each event."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.system.auditTrail"
            }), ", refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-audit-trail",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "if-the--button-is-not-visible",
      children: ["If the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.addVirtualDevice",
        product: "2",
        className: "normal"
      }), " button is not visible"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Check if the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event Log API"
      }), " license is activated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-the-api-call-fails",
      children: "When the API call fails"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check if the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Event Log API"
          }), " license is activated."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the device ID is a registered virtual device."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check if the API parameter format is correct."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-events-are-not-getting-retrieved",
      children: "When events are not getting retrieved"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verify that the recorded device is the correct virtual device ID."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the virtual device is selected in the event filter."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check audit trails to ensure no errors occurred when logging events."
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