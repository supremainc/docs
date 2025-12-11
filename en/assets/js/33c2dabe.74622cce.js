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
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_control_zone_mdx_33c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-zone","title":"Control Advanced Access Control","description":"Control advanced access control and check detailed information.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/control-zone.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-zone","permalink":"/en/platform/biostar_x/control-zone","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-zone.mdx","tags":[],"version":"current","frontMatter":{"id":"control-zone","title":"Control Advanced Access Control","description":"Control advanced access control and check detailed information.","keywords":["Monitoring","Advanced access control"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Control Elevators","permalink":"/en/platform/biostar_x/control-elevator"},"next":{"title":"Monitor Map","permalink":"/en/platform/biostar_x/monitoring-map"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/control-zone.mdx


const frontMatter = {
	id: 'control-zone',
	title: 'Control Advanced Access Control',
	description: 'Control advanced access control and check detailed information.',
	keywords: [
		'Monitoring',
		'Advanced access control'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Clear anti pass back",
  "id": "apb-release",
  "level": 2
}, {
  "value": "Clear alarm",
  "id": "alarm",
  "level": 2
}, {
  "value": "Activate/Deactivate",
  "id": "zone-revitalizationdisabled",
  "level": 2
}, {
  "value": "Security/Disarm",
  "id": "security-zone-control",
  "level": 2
}, {
  "value": "View muster report",
  "id": "confirmation-of-muster-reports",
  "level": 2
}, {
  "value": "Monitoring occupancy limit",
  "id": "monitoring-of-restrictions-on-the-number-of-people",
  "level": 2
}, {
  "value": "View details",
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
  }, {Cmd, IcDisable, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcDisable) _missingMdxReference("IcDisable", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This guides how to control doors or devices set with advanced access control. The features provided enable quick responses and efficient management in case of issues."
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
          children: ["Move to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " tab under the left sidebar on the screen and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allZones"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the configured advanced access control and right-click. You can select the desired feature from the popup menu."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-zone-popup.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "The features offered vary depending on the type of advanced access control. The types of advanced access control are as follows."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Passback"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Fire Alarm"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Scheduled Lock/Unlock"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Intrusion Alarm"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Interlock"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Muster"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Occupancy Limit"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Roll Call"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on each advanced access control, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-advanced-ac",
          children: "the following"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "apb-release",
      children: "Clear anti pass back"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can clear the APB alarm for the door or device set to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Anti-Passback"
      }), ". Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearApb"
      }), " in the popup menu. A completion message appears at the top of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.clearApb"
            }), " feature is only available for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Passback"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Passback"
            }), " settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-apb",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anti-Passback"
            }), ", refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../reference/glossary#apb",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alarm",
      children: "Clear alarm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can clear the alarm that occurred at the door or device. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), " in the popup menu. A completion message appears at the top of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.clearAlarm"
        }), " cannot be used in the occupancy limit feature."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zone-revitalizationdisabled",
      children: "Activate/Deactivate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can activate advanced access control or disable unused features. Deactivated advanced access control displays the ", (0,jsx_runtime.jsx)(IcDisable, {
        width: "20px",
        height: "20px"
      }), " icon. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.enable"
      }), " or ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disable"
      }), " in the popup menu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-zone-control",
      children: "Security/Disarm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set or clear the security for the door or device. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.arm"
      }), " or ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.disarm"
      }), " in the popup menu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.arm"
            }), " or ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.disarm"
            }), " can only be used on advanced access control set for security."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on security settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-intrusion-alarm",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "confirmation-of-muster-reports",
      children: "View muster report"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To check the report on musters, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.musterReport"
      }), ". In the new window, you can check user entry and exit times and whether the stay time has exceeded through the user list and devices set with the muster feature."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.musterReport"
            }), " feature is only available in musters."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about the muster feature, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-muster",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoring-of-restrictions-on-the-number-of-people",
      children: "Monitoring occupancy limit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can check the status of devices set with the occupancy limit feature. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.occupancyMonitoring"
      }), " in the popup menu. In the new window, go to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.setting"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.advancedAc.root"
      }), " menu. You can check the status in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.occupancy.title",
        product: "2"
      }), " list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.contextMenu.occupancyMonitoring"
            }), " feature is only available for items set with the occupancy limit feature."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on the occupancy limit settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac-occupancy",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detail-view",
      children: "View details"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can check detailed information and event occurrence history of advanced access control. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " in the popup menu. Detailed information and event occurrence history are displayed in the right panel of the screen."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Detailed Information"
          }), ": You can check the name and status of the advanced access control feature, device information, etc."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.recentEvent"
          }), ": You can check the list of recent events occurred in the selected advanced access control."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on each item in the advanced access control details section, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-advanced-ac",
          children: "the following"
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