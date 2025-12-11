"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5100"], {
3069: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_control_door_slave_device_mdx_c0a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-control-door-slave-device-mdx-c0a.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_control_door_slave_device_mdx_c0a_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-door-slave-device","title":"Control Slave Devices","description":"This guides how to control devices connected to the entrance door.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/control-door-slave-device.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-door-slave-device","permalink":"/docs/en/platform/biostar_x/control-door-slave-device","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-door-slave-device.mdx","tags":[],"version":"current","frontMatter":{"id":"control-door-slave-device","title":"Control Slave Devices","description":"This guides how to control devices connected to the entrance door.","keywords":["Monitoring","Door","slave device"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Door Control","permalink":"/docs/en/platform/biostar_x/control-door"},"next":{"title":"Control Elevators","permalink":"/docs/en/platform/biostar_x/control-elevator"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/control-door-slave-device.mdx


const frontMatter = {
	id: 'control-door-slave-device',
	title: 'Control Slave Devices',
	description: 'This guides how to control devices connected to the entrance door.',
	keywords: [
		'Monitoring',
		'Door',
		'slave device'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Controlling door relay",
  "id": "control-relay",
  "level": 2
}, {
  "value": "Relay unlock",
  "id": "relay-open",
  "level": 3
}, {
  "value": "Relay normalize",
  "id": "relay-release",
  "level": 3
}, {
  "value": "Relay lock",
  "id": "relay-lock",
  "level": 3
}, {
  "value": "Controlling security device",
  "id": "control-arm",
  "level": 2
}, {
  "value": "Controlling door camera device",
  "id": "control-camera",
  "level": 2
}, {
  "value": "Checking camera video",
  "id": "camera-video",
  "level": 3
}, {
  "value": "View camera details",
  "id": "camera-detail",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Glossary, IcRelayLock, IcRelayUnlock, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Glossary) _missingMdxReference("Glossary", true);
  if (!IcRelayLock) _missingMdxReference("IcRelayLock", true);
  if (!IcRelayUnlock) _missingMdxReference("IcRelayUnlock", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This document provides guidance on controlling devices by model for easy control of devices connected to the entrance door. Various features are available, such as locking/unlocking via door relay, checking camera video and detailed information, and managing security status."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page or select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " from the shortcut list at the top left of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " tab, select a door."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the connected device from the sublist and click the right mouse button. You can select the desired feature from the popup menu."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-relay",
      children: "Controlling door relay"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can control the relay connected to the door. Right-click on the relay device. You can select the desired feature from the popup menu."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-relay-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(Glossary, {
        termid: "relay"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relay-open",
      children: "Relay unlock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can unlock the door through the relay device connected to the door. The opened door can be accessed by anyone. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.unlock"
      }), " in the popup menu and select the desired option."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockOnce"
          }), ": Unlocks the door once."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockTimed"
          }), ": Opens the door for a certain time. Enter the desired time in seconds."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockPermanent"
          }), ": Unlocks the door regardless of time."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Opening the door relay changes the door relay icon from ", (0,jsx_runtime.jsx)(IcRelayLock, {}), " to ", (0,jsx_runtime.jsx)(IcRelayUnlock, {}), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The door can be temporarily opened for the convenience of external guests when they visit. After opening the door, be sure to switch to ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.normalize"
        }), " mode."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relay-release",
      children: "Relay normalize"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Change the door to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " status using the relay so that only authorized users can access. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " in the popup menu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relay-lock",
      children: "Relay lock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Change the door to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " status using the relay connected to the door will prevent anyone from access. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " in the popup menu and select the desired option."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockTimed"
          }), ": Changes the door to a locked state for a certain period of time. Enter the desired time in seconds."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.lockPermanent"
          }), ": Changes the door to a locked state regardless of time."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-arm",
      children: "Controlling security device"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set or unset the door in armed state through the security device connected to the door. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.arm"
      }), " or ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disarm"
      }), " in the popup menu."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-arm-popup.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["This feature can be used by purchasing additional options with an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "advanced"
        }), " license or higher, or with an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "enterprise"
        }), " license or higher. For more information about the license policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-camera",
      children: "Controlling door camera device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can control the camera device connected to the door. You can view the camera video in real time or view details."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-camera-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This feature requires the door to be connected to a camera in order to be used. Refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "the following"
            }), " for how to integrate the door with the camera."]
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
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera-video",
      children: "Checking camera video"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To view the camera feed in real-time, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openVideo"
      }), " from the pop-up menu. You can add and play footage from the selected camera in the video tile section of ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-camera-control-open-video.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "camera-detail",
      children: "View camera details"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To view the camera details, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " in the popup menu. Camera details appear on the right side of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-camera-details.png"
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