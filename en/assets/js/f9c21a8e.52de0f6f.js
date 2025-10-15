"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3637"], {
53954: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_device_mdx_f9c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-monitoring-device-mdx-f9c.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_device_mdx_f9c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-device","title":"Monitor Device","description":"Monitor devices and cameras connected to all areas and doors in real time. Efficient management is possible through various features, including checking the status of devices and cameras, viewing detailed information, and playing camera video.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-device.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-device","permalink":"/docs/en/platform/biostar_x/monitoring-device","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-device.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-device","title":"Monitor Device","description":"Monitor devices and cameras connected to all areas and doors in real time. Efficient management is possible through various features, including checking the status of devices and cameras, viewing detailed information, and playing camera video.","keywords":["Monitoring","Device","Camera"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Monitor Map","permalink":"/docs/en/platform/biostar_x/monitoring-map"},"next":{"title":"Monitor Video","permalink":"/docs/en/platform/biostar_x/monitoring-video"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-device.mdx


const frontMatter = {
	id: 'monitoring-device',
	title: 'Monitor Device',
	description: 'Monitor devices and cameras connected to all areas and doors in real time. Efficient management is possible through various features, including checking the status of devices and cameras, viewing detailed information, and playing camera video.',
	keywords: [
		'Monitoring',
		'Device',
		'Camera'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Checking device and camera status",
  "id": "checking-device-and-camera-status",
  "level": 2
}, {
  "value": "Device Control",
  "id": "device-control",
  "level": 2
}, {
  "value": "Reconnect Device",
  "id": "reconnect-device",
  "level": 3
}, {
  "value": "Restart Device",
  "id": "restart-device",
  "level": 3
}, {
  "value": "Lock Device",
  "id": "lock-device",
  "level": 3
}, {
  "value": "Stop Action",
  "id": "stop-action",
  "level": 3
}, {
  "value": "Device detailed view",
  "id": "device-detailed-view",
  "level": 3
}, {
  "value": "Camera Control",
  "id": "camera-control",
  "level": 2
}, {
  "value": "Playing camera video",
  "id": "playing-camera-video",
  "level": 3
}, {
  "value": "Camera detailed view",
  "id": "camera-detailed-view",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcCamFail, IcCamOk, Image, StatusFail, StatusOK} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCamFail) _missingMdxReference("IcCamFail", true);
  if (!IcCamOk) _missingMdxReference("IcCamOk", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusFail) _missingMdxReference("StatusFail", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This document provides guidance on using the device and camera monitoring features. You can check the status of devices and cameras, view detailed information, and play camera video in real-time, among various other features. Additionally, review recent events to efficiently manage the status of devices and cameras."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To access the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " page, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " or select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " from the menu at the top left of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "checking-device-and-camera-status",
      children: "Checking device and camera status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.device.title"
      }), " tab on the left sidebar. You can check the status of all devices and cameras. Refer to the following for the status of devices and cameras."]
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
              children: (0,jsx_runtime.jsx)(StatusOK, {})
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The device is connected properly."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(StatusFail, {})
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The device is off or disconnected."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device-control",
      children: "Device Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select the desired device from the list on the left sidebar and right-click. You can select the desired feature from the popup menu."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-device-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reconnect-device",
      children: "Reconnect Device"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the device is off or disconnected, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.reconnect"
      }), " in the popup menu. When the device reconnects, the status icon changes to ", (0,jsx_runtime.jsx)(StatusOK, {}), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.reconnect"
        }), " feature is not supported for devices connected via ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.deviceToServerConnection",
          product: "2"
        }), " option. For more information on enrolling devices, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-adding-devices#setipaddress",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "restart-device",
      children: "Restart Device"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To restart the device, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.reboot"
      }), " in the popup menu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lock-device",
      children: "Lock Device"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To lock the device, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.deviceLock"
          }), " in the popup menu. A message will appear at the top of the screen indicating that the device lock is in progress. When the lock is completed, the message will disappear."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To unlock the device, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.deviceUnlock"
          }), " in the popup menu. A message will appear at the top of the screen indicating that the device unlock is in progress. When the unlock is completed, the message will disappear."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stop-action",
      children: "Stop Action"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To stop an ongoing action, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.stopAction"
      }), " in the popup menu. A success message for stopping the action will appear at the top of the screen. When the action stop is completed, the message will disappear."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-detailed-view",
      children: "Device detailed view"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To view detailed information about the device, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " in the popup menu. Or double-click the device. The detailed information of the device will appear on the right side of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-device-details.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can view the device's ID, group, model name, uptime, IP address, and other details. The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.recentEvent"
      }), " list at the bottom shows recent events in reverse chronological order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "camera-control",
      children: "Camera Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select the desired camera from the list on the left sidebar and right-click. You can select the desired feature from the popup menu."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "playing-camera-video",
      children: "Playing camera video"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To place the camera video in the video tile and monitor in real-time, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openVideo"
      }), " in the popup menu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Adding camera video to video tiles can also be done in the following ways:"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Double-click the camera to play the video from the camera in the left sidebar."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can also add video by dragging and dropping the camera into the video tile area."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Video tiles are added in order from the top left of the screen. If there is no space to add more, an error message appears."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For detailed information on how to control the video and the tools displayed on the video, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera-detailed-view",
      children: "Camera detailed view"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To view the camera details, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " in the popup menu. You can check the camera's group, description, ID, and IP address."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-details.png"
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