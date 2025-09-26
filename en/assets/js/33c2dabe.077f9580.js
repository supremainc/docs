"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2681"], {
19116: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_control_zone_mdx_33c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-control-zone-mdx-33c.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_control_zone_mdx_33c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-zone","title":"Control Zones","description":"Control the zone and check the detailed information.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/control-zone.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-zone","permalink":"/docs/en/platform/biostar_x/control-zone","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-zone.mdx","tags":[],"version":"current","frontMatter":{"id":"control-zone","title":"Control Zones","description":"Control the zone and check the detailed information.","keywords":["Monitoring","Zone"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Control Elevators","permalink":"/docs/en/platform/biostar_x/control-elevator"},"next":{"title":"Monitor Map","permalink":"/docs/en/platform/biostar_x/monitoring-map"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/control-zone.mdx


const frontMatter = {
	id: 'control-zone',
	title: 'Control Zones',
	description: 'Control the zone and check the detailed information.',
	keywords: [
		'Monitoring',
		'Zone'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Clear Anti Pass Back",
  "id": "apb-release",
  "level": 2
}, {
  "value": "Clear Alarm",
  "id": "alarm",
  "level": 2
}, {
  "value": "Activate/Deactivate Zone",
  "id": "zone-revitalizationdisabled",
  "level": 2
}, {
  "value": "Control Security Zone",
  "id": "security-zone-control",
  "level": 2
}, {
  "value": "View Muster Zone Report",
  "id": "confirmation-of-muster-reports",
  "level": 2
}, {
  "value": "Monitor Occupancy Limit Zone",
  "id": "monitoring-of-restrictions-on-the-number-of-people",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcDisable} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcDisable) _missingMdxReference("IcDisable", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This guide describes how to control zones. With the features provided, you can respond quickly to issues and manage the zone efficiently."
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
            sid: "arena.tree.door.allZones"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the desired zone and right-click. You can select the desired feature from the popup menu."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "The features provided differ depending on the type of zone. The types of zones are as follows."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Passback"
            }), " zone"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Fire alarm zone"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Schedule lock/unlock zone"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Intrusion Alarm Zone"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Interlock zone"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Muster Zone"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Occupancy limit zone"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information about how to set up the zone, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-advanced-ac",
          children: "following"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "apb-release",
      children: "Clear Anti Pass Back"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can clear the APB alarm in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Passback"
      }), " zone. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearApb"
      }), " in the popup menu. A completion message appears at the top right of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.clearApb"
            }), " feature is only available in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Passback"
            }), " zones."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about how to set up ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "anti-passback"
            }), " in the zone, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-apb",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Passback"
            }), ", refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../reference/glossary#apb",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alarm",
      children: "Clear Alarm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can deactivate the alarm that occurred in this zone. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), " in the popup menu. A completion message appears at the top right of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.clearAlarm"
        }), " feature cannot be used in occupancy limit zone."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zone-revitalizationdisabled",
      children: "Activate/Deactivate Zone"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can activate a zone or deactivate an unused zone. The deactivated area is indicated by the ", (0,jsx_runtime.jsx)(IcDisable, {
        width: "20px",
        height: "20px"
      }), " icon. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.enable"
      }), " or ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disable"
      }), " in the popup menu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-zone-control",
      children: "Control Security Zone"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can control the security status of the security zone. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.arm"
      }), " or ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disarm"
      }), " in the popup menu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.arm"
            }), " and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.disarm"
            }), " features are only available in security zones."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about how to set up the intrusion alarm zone, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-intrusion-alarm",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "confirmation-of-muster-reports",
      children: "View Muster Zone Report"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To view a report for a muster zone, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.musterReport"
      }), ". When the new window opens, you will be taken to a page where you can check the report for the muster zone."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.musterReport"
            }), " feature is only available in the muster zone."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about how to set up the muster zone, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-muster",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoring-of-restrictions-on-the-number-of-people",
      children: "Monitor Occupancy Limit Zone"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can check the status of an occupancy zone. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.occupancyMonitoring"
      }), " in the popup menu. When a new window opens, you will be taken to a page that monitors occupancy limit zone."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.occupancyMonitoring"
            }), " feature is only available in occupancy limit zones."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about how to set up the occupancy limit zone, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-occupancy",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detail-view",
      children: "View Details"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can check detailed information about the zone and the event history. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " in the popup menu. Detailed information and event history for the zone appear on the right side of the screen."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Zone Details"
          }), ": You can check the name, location, status information, and more for the zone."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.recentEvent"
          }), ": You can check the recent event list that occurred in the selected zone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information about each item in the zone's details section, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-advanced-ac",
          children: "following"
        }), "."]
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