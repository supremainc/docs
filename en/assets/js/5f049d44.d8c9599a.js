"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6554"], {
12281: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_check_door_status_mdx_5f0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-check-door-status-mdx-5f0.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_check_door_status_mdx_5f0_namespaceObject = JSON.parse('{"id":"platform/biostar_x/check-door-status","title":"Check door status","description":"This guides you on how to monitor the status of devices connected to the door in real-time and resolve any issues that may arise.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/check-door-status.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/check-door-status","permalink":"/docs/en/platform/biostar_x/check-door-status","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/check-door-status.mdx","tags":[],"version":"current","frontMatter":{"id":"check-door-status","title":"Check door status","description":"This guides you on how to monitor the status of devices connected to the door in real-time and resolve any issues that may arise.","keywords":["Monitoring","Door"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Monitor Doors","permalink":"/docs/en/platform/biostar_x/monitoring-door"},"next":{"title":"Door Control","permalink":"/docs/en/platform/biostar_x/control-door"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/door-tree.json
var door_tree_namespaceObject = JSON.parse('[{"name":"All Entry Door Groups","children":[{"name":"Entry Door Group A","type":"door-group","children":[{"name":"Door","type":"door-device","children":[{"name":"Door sensor","type":"door-sensor"},{"name":"Door relay","type":"door-relay"},{"name":"Arming status","type":"door-arm"},{"name":"Camera","type":"door-camera"}]}]}]},{"name":"All Elevator Groups","type":"elevator","children":[{"name":"Elevator Group B","type":"elevator-group","children":[{"name":"Elevator 1","type":"elevator-device","children":[{"name":"Elevator 1 - 1st Floor","type":"elevator-floor"},{"name":"Elevator 1 - 2nd Floor","type":"elevator-floor"}]}]}]},{"name":"All Advanced ACs","type":"access-control","children":[{"name":"Access Control zone","type":"access-zone"}]}]')
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/check-door-status.mdx


const frontMatter = {
	id: 'check-door-status',
	title: 'Check door status',
	description: 'This guides you on how to monitor the status of devices connected to the door in real-time and resolve any issues that may arise.',
	keywords: [
		'Monitoring',
		'Door'
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
  "value": "Learn about the tree structure",
  "id": "door-tree-structure",
  "level": 2
}, {
  "value": "Check status",
  "id": "check-status",
  "level": 2
}, {
  "value": "Check connection errors and alarms",
  "id": "check-the-error-status",
  "level": 3
}, {
  "value": "Checking Door Lock Status",
  "id": "check-the-door-lock",
  "level": 3
}, {
  "value": "Checking Camera Status",
  "id": "check-the-camera-status",
  "level": 3
}, {
  "value": "Checking Arming Status",
  "id": "check-the-security-status",
  "level": 3
}, {
  "value": "Check elevator status",
  "id": "check-elevator-status",
  "level": 3
}, {
  "value": "Expand/collapse group list",
  "id": "expandcollapse-group-list",
  "level": 2
}, {
  "value": "Top-level group",
  "id": "top-level-group",
  "level": 3
}, {
  "value": "Sub-group",
  "id": "sub-group",
  "level": 3
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAlert, IcArm, IcCamFail, IcCamOk, IcDisable, IcDisarm, IcErr, IcRelayLock, IcRelayUnlock, Image, Start, StatusNormal, StatusOK, Treeview} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAlert) _missingMdxReference("IcAlert", true);
  if (!IcArm) _missingMdxReference("IcArm", true);
  if (!IcCamFail) _missingMdxReference("IcCamFail", true);
  if (!IcCamOk) _missingMdxReference("IcCamOk", true);
  if (!IcDisable) _missingMdxReference("IcDisable", true);
  if (!IcDisarm) _missingMdxReference("IcDisarm", true);
  if (!IcErr) _missingMdxReference("IcErr", true);
  if (!IcRelayLock) _missingMdxReference("IcRelayLock", true);
  if (!IcRelayUnlock) _missingMdxReference("IcRelayUnlock", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  if (!StatusNormal) _missingMdxReference("StatusNormal", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  if (!Treeview) _missingMdxReference("Treeview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Monitor the status of devices connected to the door in real-time to ensure stable operation of the security system. Use the status icons provided by ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " to quickly check the connection status of devices, the locking status of the door, the operation status of the camera, and respond immediately in case of any issues."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " page or select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " from the shortcut list at the top left of the screen. In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.door.title"
      }), " tab on the left sidebar, you can check the status of each door and the connected slave devices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "Before start"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ensure that the devices connected to the door are correctly configured. It is important to check if the device is connected to the network and updated with the latest firmware. In case of an issue, it is advisable to first check the power status and network connection of the device."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about adding and configuring devices, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-devices",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about adding and configuring doors, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-door",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.logUploadType",
              product: "2"
            }), " feature must be enabled to monitor or control the status of the access door. This feature can be enabled in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.server.root"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.server.server"
            }), " menu path under the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.general",
              product: "2"
            }), " section."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The feature to connect cameras to the door through the VMS server is available as an additional option with an ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced"
            }), " license or higher. For more information on licensing policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-tree-structure",
      children: "Learn about the tree structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The tree structure in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.door.title"
      }), " tab of the left sidebar is organized as follows."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(Treeview, {
      data: door_tree_namespaceObject
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about adding and configuring devices, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-devices",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about adding and configuring doors, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-door",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about adding and configuring elevators, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-elevators",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about setting access control areas, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To link the door and the camera, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-status",
      children: "Check status"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-error-status",
      children: "Check connection errors and alarms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can check the status of the door or elevator to verify proper operation. Refer to the information below for the status of each icon."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Status Icon"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcErr, {
                width: "35px",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "There is a communication server error, or connection loss, or synchronization error status."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcAlert, {
                width: "40px",
                height: "40px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "An alarm has occurred at the door. If loitering or intrusion is detected, the corresponding icon will be displayed."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Click a status icon to view detailed information in a tooltip. Click the link in the tooltip error message to navigate to the list of devices connected to the door or elevator."
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/monitoring-door-status-tooltip.png"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Right-click on the device and select the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.reconnect"
        }), " or ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.reboot"
        }), " option."]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/monitoring-door-status-tooltip-device.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Alarms occurring from the door or elevator can be configured through the following settings."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-door-add#alarm",
                  children: "Door alarm settings"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-elevators-add#alarm",
                  children: "Elevator alarm settings"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-advanced-ac",
                  children: "Advanced access control settings"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can set alarms in camera rules. For more information about camera rule settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When linked with the VMS server, AI event alarms for videos can be sent to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), ". For more details, refer to the manual for the VMS server."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on acknowledging alarms, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-event#acknowledge-alarm-and-record-action",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If there are communication server errors, connection loss, or synchronization errors, you can check the connection status through ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Service Manager"
            }), ". Click ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Service Manager"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              children: "COMMUNICATION SERVERS"
            }), " menu. Check if the ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Server Status"
            }), " column for each server in the communication server list is in ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Connected"
            }), " status. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "install-communication-server#check-after-install",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-door-lock",
      children: "Checking Door Lock Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can check the locking status of the door through the door relay status. Refer to the following for the status of the door relay."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Status Icon"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcRelayLock, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The door is closed."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcRelayUnlock, {
                width: "auto",
                height: "40px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The door is open."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-camera-status",
      children: "Checking Camera Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check the camera status to verify that the camera is operating normally. Refer to the following for camera status."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Status Icon"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamOk, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The camera is connected."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamFail, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The camera is off or disconnected."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-security-status",
      children: "Checking Arming Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can check the security status of the door or access control area."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Status Icon"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcDisable, {
                width: "auto",
                height: "30px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The icon for the deactivated zone. The deactivated zone will not trigger any alarms."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcArm, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The door is armed."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcDisarm, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The door is disarmed."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The security status is displayed only when the door is set as a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "secured area"
        }), ". For more information about how to set up the intrusion alarm zone, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-advanced-ac-intrusion-alarm",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-elevator-status",
      children: "Check elevator status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can check the locking status of the elevator."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Status Icon"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(StatusNormal, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Elevator is locked."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(StatusOK, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Elevator is unlocked."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expandcollapse-group-list",
      children: "Expand/collapse group list"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can expand or collapse the list through the top-level group or sub-group."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-group-expand-collapse.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-level-group",
      children: "Top-level group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " tab, select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allDoorGroups"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allElevatorGroups"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allZones"
          }), " and right-click."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Choose ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.expandAll"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.collapseAll"
          }), " from the popup menu."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All sub-lists can be expanded or collapsed based on the selected top-level group."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sub-group",
      children: "Sub-group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "To expand or collapse the list of sub-groups in each top-level group, select the sub-group and right-click."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.expandBelow"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.collapseBelow"
          }), " option from the popup menu."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can expand or collapse the list of the selected sub-group."
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