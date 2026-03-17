"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["20020"], {
83762: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_door_status_mdx_b15_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-monitoring-door-status-mdx-b15.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_door_status_mdx_b15_namespaceObject = JSON.parse('{"id":"platform/biostar_air/monitoring-door-status","title":"Monitor Door Status","description":"Monitor door status in real time, control locks remotely, and manage door access using the BioStar Air web portal and mobile app.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-door-status.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/monitoring-door-status","permalink":"/docs/en/platform/biostar_air/monitoring-door-status","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/monitoring-door-status.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-door-status","title":"Monitor Door Status","description":"Monitor door status in real time, control locks remotely, and manage door access using the BioStar Air web portal and mobile app.","keywords":["Monitoring","Door status","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Check Alert & Report History","permalink":"/docs/en/platform/biostar_air/monitoring-alert-report-history"},"next":{"title":"Roll Call","permalink":"/docs/en/platform/biostar_air/managing-roll-call-fire-muster"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-door-status.mdx


const frontMatter = {
	id: 'monitoring-door-status',
	title: 'Monitor Door Status',
	description: 'Monitor door status in real time, control locks remotely, and manage door access using the BioStar Air web portal and mobile app.',
	keywords: [
		'Monitoring',
		'Door status',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Door status monitoring",
  "id": "monitoringWebPortal",
  "level": 2
}, {
  "value": "Unlock a door",
  "id": "remotely-unlocking-a-door",
  "level": 3
}, {
  "value": "Set always-open mode",
  "id": "alwaysOpenMode",
  "level": 3
}, {
  "value": "Set lock mode",
  "id": "lockMode",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, DocLink, IcAirMore, Image, TabItem, Tabs, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirMore) _missingMdxReference("IcAirMore", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Monitor the status of doors connected to BioStar Air in real time. Check whether a door is locked or unlocked and the status of its relay sensor, and lock or unlock it remotely to control access."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Refer to the following video to watch the video guide on monitoring door status."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "_nxSRwst480"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoringWebPortal",
      children: "Door status monitoring"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Monitor door status in the BioStar Air web portal. Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_status_submenu",
            product: "air"
          }), " in the left sidebar. View the list of doors registered to BioStar Air."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-door-status.png"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the following items for each door."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column2",
                product: "air"
              }), ": Indicates whether the door is locked or unlocked."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column3",
                product: "air"
              }), ": Indicates whether the door is physically open or closed."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "Monitor door status using the BioStar Air app on a mobile device."
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-mobile-monitoring-door-status.png",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Open the BioStar Air app on your mobile device and log in."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "monitoring_menu",
                product: "air"
              }), " at the bottom of the home screen."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Tap the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_submenu",
                product: "air"
              }), " card."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "View the list of doors registered to BioStar Air."
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on door registration and management, refer to ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-registered-doors"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "remotely-unlocking-a-door",
      children: "Unlock a door"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Unlock the door remotely when it is online and connected to BioStar Air."
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "web",
        label: "Web",
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column4",
                product: "air"
              }), " column, click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_open_btn",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["The status in the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column2",
                product: "air"
              }), " column changes to unlocked, and a success message appears."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-monitoring-door-status-open-door.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "After the configured time elapses, the door returns to locked."
            }), "\n"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--30",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-mobile-monitoring-door-open.png"
            })
          }), (0,jsx_runtime.jsx)(Column, {
            className: "padding--l20",
            children: (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "door_open_btn",
                    product: "air"
                  }), " to remotely unlock the door."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "A success message will appear at the bottom of the screen."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "After the configured time elapses, the door returns to locked."
                }), "\n"]
              }), "\n"]
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For information on setting the duration that the door remains open, refer to ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-registered-doors#editingDoors"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alwaysOpenMode",
      children: "Set always-open mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keep a door unlocked indefinitely. Use this when temporary or visitor access is needed."
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["In the door list, click ", (0,jsx_runtime.jsx)(IcAirMore, {
                title: "Control"
              }), " at the far right of the door to keep open."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-monitoring-door-status-more-func.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_unlock_mode",
                product: "air"
              }), " in the popup menu."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["The status in the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column4",
                product: "air"
              }), " column changes to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_control_unlocked_description",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-door-status-control-always-open.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirMore, {
            title: "Control"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "release_icon_tooltip",
            product: "air"
          }), " to return to normal operation."]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--30",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-mobile-monitoring-door-status-control.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l20",
            children: [(0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Tap ", (0,jsx_runtime.jsx)(IcAirMore, {
                    title: "Control"
                  }), " at the far right of the door."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
                    en: "Door Info and Control",
                    children: "Door Info and Control"
                  }), " option appear, tap ", (0,jsx_runtime.jsx)(Cmd, {
                    en: "Unlock",
                    children: "Unlock"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "A success message will appear at the bottom of the screen."
                }), "\n"]
              }), "\n"]
            }), (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Tap ", (0,jsx_runtime.jsx)(IcAirMore, {
                title: "Control"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "release_icon_tooltip",
                product: "air"
              }), " to return to normal operation."]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lockMode",
      children: "Set lock mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keep a door locked regardless of the current schedule. Use this when enhanced security is required."
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["In the door list, click ", (0,jsx_runtime.jsx)(IcAirMore, {
                title: "Control"
              }), " at the far right of the door to keep locked."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-monitoring-door-status-more-func.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_lock_mode",
                product: "air"
              }), " in the pop-up menu."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["The status in the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_status_column4",
                product: "air"
              }), " column changes to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_control_locked_description",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-door-status-control-lock-mode.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirMore, {
            title: "Control"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "release_icon_tooltip",
            product: "air"
          }), " to return to normal operation."]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--30",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-mobile-monitoring-door-lock-mode.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l20",
            children: [(0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Tap ", (0,jsx_runtime.jsx)(IcAirMore, {
                    title: "Control"
                  }), " at the far right of the door."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
                    en: "Door Info and Control",
                    children: "Door Info and Control"
                  }), " option appear, tap ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "event_log_lock_mode",
                    product: "air"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "A success message will appear at the bottom of the screen."
                }), "\n"]
              }), "\n"]
            }), (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Tap ", (0,jsx_runtime.jsx)(IcAirMore, {
                title: "Control"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "release_icon_tooltip",
                product: "air"
              }), " to return to normal operation."]
            })]
          })]
        })
      })]
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