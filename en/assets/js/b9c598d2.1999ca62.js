"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5001"], {
4881: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_control_door_mdx_b9c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-control-door-mdx-b9c.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_control_door_mdx_b9c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-door","title":"Door Control","description":"Control the door and check the detailed information.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/control-door.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-door","permalink":"/docs/en/platform/biostar_x/control-door","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-door.mdx","tags":[],"version":"current","frontMatter":{"id":"control-door","title":"Door Control","description":"Control the door and check the detailed information.","keywords":["Monitoring","Door"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Check Door Status","permalink":"/docs/en/platform/biostar_x/check-door-status"},"next":{"title":"Controlling Slave Devices","permalink":"/docs/en/platform/biostar_x/control-door-slave-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/control-door.mdx


const frontMatter = {
	id: 'control-door',
	title: 'Door Control',
	description: 'Control the door and check the detailed information.',
	keywords: [
		'Monitoring',
		'Door'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*In this case, add a tab to the screen and click <Cmd sid='arena.tree.contextMenu.openVideo' /> again.*/


const toc = [{
  "value": "Door Open",
  "id": "door-open",
  "level": 2
}, {
  "value": "Door Normalize",
  "id": "door-unlock",
  "level": 2
}, {
  "value": "Door Lock",
  "id": "door-lock",
  "level": 2
}, {
  "value": "Check Door Camera",
  "id": "door-camera",
  "level": 2
}, {
  "value": "Clear Alarm",
  "id": "alarm-reset",
  "level": 2
}, {
  "value": "Clear Anti Pass Back",
  "id": "apb-reset",
  "level": 2
}, {
  "value": "View Details",
  "id": "detail-view",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Glossary, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Glossary) _missingMdxReference("Glossary", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This guide describes how to control doors. You can lock the door for a certain period of time, check the camera connected to the door and clear alarms that have occurred."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Control the door remotely to manage access. You can set the door to be open or locked for a specific period of time."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "You can monitor access situations in real-time through the camera connected to the door."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Keep the door locked to enhance security so that only authorized users can enter."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#apb",
            children: "Anti Passback"
          }), " feature to prevent unauthorized access and allows for accurate management of access records."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " page or select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " from the shortcut list at the top left of the screen. Select the door you want to control and right-click. You can select the desired feature from the popup menu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-open",
      children: "Door Open"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The opened door can be accessed by anyone. Click ", (0,jsx_runtime.jsx)(Cmd, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The door can be temporarily opened for the convenience of external guests when they visit. After opening the door, be sure to switch to ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.normalize"
        }), " mode."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-unlock",
      children: "Door Normalize"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Changing the door to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " status will allow only authorized users to access. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " in the popup menu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-lock",
      children: "Door Lock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Changing the door to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " status will prevent anyone from access. Click ", (0,jsx_runtime.jsx)(Cmd, {
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
      id: "door-camera",
      children: "Check Door Camera"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can check the camera connected to the door. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openVideo"
      }), " in the popup menu. The video of the selected camera will be added to the video tile in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " section."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-control-open-video.png",
      alt: "Open video"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["While a video is selected, you can control the door through the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.map.doorControl"
      }), " tool."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-control.png",
      alt: "Door control"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.map.doorControl"
            }), " tool requires the door to be connected to a camera in order to be used. The selected camera cannot be used unless it is connected to the door."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Video tiles are added in order from the top left of the screen. If there is no space to add more, an error message appears. "
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on how to connect a camera to the door, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "this document"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about video monitoring, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video",
              children: "this document"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alarm-reset",
      children: "Clear Alarm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can deactivate the alarm that occurred at the door. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), " in the popup menu. An alarm message appears at the top right of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "apb-reset",
      children: "Clear Anti Pass Back"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When an anti-passback violation occurs, you can clear the APB alarm."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.clearApb"
          }), " in the popup menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.clearApb"
          }), " window appears, check the list of users who violated the anti-passback."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select a user and click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A completion message appears at the top right of the screen."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(Glossary, {
            termid: "apb"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on how to set up ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "anti-passback"
            }), " on the door, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "this document"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detail-view",
      children: "View Details"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can check detailed information about the door and the event history. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " in the popup menu. Detailed information and event history for the door appear on the right side of the screen."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Door Detail Information"
          }), ": You can check the name, location, status, and information of connected sub-devices of the door."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.recentEvent"
          }), ": You can check the recent event list that occurred at the selected access door."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For detailed information on each item in the door's details section, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "this document"
        }), "."]
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