"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["10694"], {
43668: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_control_elevator_mdx_c2e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-control-elevator-mdx-c2e.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_control_elevator_mdx_c2e_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-elevator","title":"Control Elevators","description":"Control elevators and check detailed information.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/control-elevator.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-elevator","permalink":"/en/platform/biostar_x/control-elevator","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-elevator.mdx","tags":[],"version":"current","frontMatter":{"id":"control-elevator","title":"Control Elevators","description":"Control elevators and check detailed information.","keywords":["Monitoring","Elevator"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Control Slave Devices","permalink":"/en/platform/biostar_x/control-door-slave-device"},"next":{"title":"Control Advanced Access Control","permalink":"/en/platform/biostar_x/control-zone"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/control-elevator.mdx


const frontMatter = {
	id: 'control-elevator',
	title: 'Control Elevators',
	description: 'Control elevators and check detailed information.',
	keywords: [
		'Monitoring',
		'Elevator'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Control Elevators",
  "id": "control-elevators",
  "level": 2
}, {
  "value": "Clear alarm",
  "id": "clear-alarm",
  "level": 3
}, {
  "value": "View details",
  "id": "detail-view",
  "level": 3
}, {
  "value": "Floor access control",
  "id": "floor-access-control",
  "level": 2
}, {
  "value": "Floor open",
  "id": "floor-open",
  "level": 3
}, {
  "value": "Normalize floor",
  "id": "floor-unlock",
  "level": 3
}, {
  "value": "Lock floor",
  "id": "floor-lock",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This guide describes how to control the elevator. You can control the elevator or check detailed information through the provided features."
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
          }), " tab on the left sidebar, go to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allElevatorGroups"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the elevator in the desired group and right-click. You can select the desired feature from the popup menu."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information about how to set up the elevator and configuring groups, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-manage-elevators",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-elevators",
      children: "Control Elevators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can acknowledge or check details of alarms triggered by the elevator."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-elevator-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clear-alarm",
      children: "Clear alarm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can deactivate the alarm that occurred at this elevator. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), " in the popup menu. A completion message appears in the upper right corner of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detail-view",
      children: "View details"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can check detailed information about the elevator and the event history. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " in the popup menu. Detailed information and event history for the elevator appear on the right side of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-elevator-details.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "View Details"
          }), ": You can check the name, location, status information, and more for the elevator."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.recentEvent"
          }), ": You can check the recent event list that occurred at the selected elevator."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information about each item in the elevator's details section, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-elevators-add",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "floor-access-control",
      children: "Floor access control"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can control the floors that can be accessed by the elevator. Click on the relay for the floor set in the elevator and right-click. Select the desired feature from the pop-up menu."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-elevator-floor-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "floor-open",
      children: "Floor open"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The opened floor can be accessed by anyone. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.unlock"
      }), " in the popup menu and select the desired option."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockOnce"
          }), ": Opens the floor once."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockPermanent"
          }), ": Opens the floor regardless of time."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The floor can be temporarily opened for the convenience of external guests when they visit. After opening the floor, be sure to switch to ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.normalize"
        }), " mode."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "floor-unlock",
      children: "Normalize floor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Changing the floor to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " status will allow only authorized users to access. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " in the popup menu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "floor-lock",
      children: "Lock floor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Changing the floor to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " status will prevent anyone from access. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " in the popup menu."]
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