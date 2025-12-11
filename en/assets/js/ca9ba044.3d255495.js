"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["96174"], {
27674: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_map_manage_area_mdx_ca9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-map-manage-area-mdx-ca9.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_map_manage_area_mdx_ca9_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-map-manage-area","title":"Configure Area","description":"Complete the floor and facility configuration to set up the area. Verify secured areas through the map.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-map-manage-area.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-map-manage-area","permalink":"/en/platform/biostar_x/settings-map-manage-area","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-map-manage-area.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-map-manage-area","title":"Configure Area","description":"Complete the floor and facility configuration to set up the area. Verify secured areas through the map.","keywords":["Map","Zone","Floor","Facility"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configure Facility","permalink":"/en/platform/biostar_x/settings-map-manage-facility"},"next":{"title":"Set Visitor","permalink":"/en/platform/biostar_x/settings-visitor"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-map-manage-area.mdx


const frontMatter = {
	id: 'settings-map-manage-area',
	title: 'Configure Area',
	description: 'Complete the floor and facility configuration to set up the area. Verify secured areas through the map.',
	keywords: [
		'Map',
		'Zone',
		'Floor',
		'Facility'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Add zone",
  "id": "add-area",
  "level": 2
}, {
  "value": "Edit zone",
  "id": "edit-area",
  "level": 2
}, {
  "value": "Reset zone",
  "id": "reset-zone",
  "level": 3
}, {
  "value": "Delete facility/entrance/camera",
  "id": "delete-facilityentrancecamera",
  "level": 3
}, {
  "value": "Set camera coverage",
  "id": "set-camera-coverage",
  "level": 3
}, {
  "value": "Delete zone",
  "id": "delete-zone",
  "level": 2
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
  }, {Cmd, DocLink, IcCurP, IcFremove, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcCurP) _missingMdxReference("IcCurP", true);
  if (!IcFremove) _missingMdxReference("IcFremove", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Complete the floor and facility configuration to set up the area. Verify secured areas through the map. Configuring zones provides functionality to access and monitor the facilities and floors in the respective zone on the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " page."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-map-open-map.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Register floors and facilities before configuring zones. For more information about registering floors and facilities, refer to the following:"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/settings-map-manage-floor"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/settings-map-manage-facility"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about map monitoring, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-map",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Map settings and map monitoring feature can be used via additional options with an ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "advanced"
            }), " license or higher. For more information on licensing policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-area",
      children: "Add zone"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure and manage zones of the security areas you are currently managing via the map."
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
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.area"
          }), " on the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.table.action.newArea"
          }), " button in the upper right of the area list screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-area.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the name and description of the area you want to add in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.information.section.title"
          }), " section of the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.page.title"
          }), " screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the location of the zone to add on the map in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.configuration.section.title"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Right-click on the map and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.label.setArea"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-add-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set the zone in your desired shape. Click the mouse to start drawing and drag to set the zone."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-drawing.gif",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To reset the area, you must delete the configured area. To delete the area, click the ", (0,jsx_runtime.jsx)(IcFremove, {}), " button."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To add facilities to the configured area, right-click and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "map.menu.add.facility"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-add-02.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "When adding a zone, at least one facility, entrance, or camera must be configured."
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["To add an entrance, right-click and select ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.area.label.addDoor"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["To add a camera, right-click and select ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.area.label.addCamera"
                }), "."]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.label.addFacility"
          }), " window appears, select the facility to add and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-add-03.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When adding an entrance or camera, the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.area.label.addDoor"
            }), " or ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.area.label.addCamera"
            }), " window will also appear. Select the item to add and click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.apply"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once the area settings are complete, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button in the lower right of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can search for your desired location using the input field at the top left of the map. Click ", (0,jsx_runtime.jsx)(IcCurP, {}), " to return to the current location."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-settings-map-area-find-point.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When adding a zone on the map, it can only be set as a single polygon. When setting a zone, ensure that the start and end points are the same. Once configured, the shape of the zone cannot be changed. To modify the zone, you must delete it and re-add it."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The positions of the added facilities, entrances, and cameras can be changed via drag-and-drop on the map."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edit-area",
      children: "Edit zone"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can delete and reconfigure existing zones or add or remove facilities, entrances, and cameras."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reset-zone",
      children: "Reset zone"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To reset a zone on the map, you must delete the existing zone and re-add it."
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
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.area"
          }), " on the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the zone you want to reset from the zone list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the map under the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.configuration.section.title"
          }), " section, click the ", (0,jsx_runtime.jsx)(IcFremove, {}), " button at the top left of the already created area."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-reset.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Right-click on the map and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.area.label.setArea"
          }), " from the popup menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To set the area as desired and save, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button in the lower right of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-facilityentrancecamera",
      children: "Delete facility/entrance/camera"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click the facility, entrance, or camera you want to delete on the map. The ", (0,jsx_runtime.jsx)(IcFremove, {}), " icon will appear. Click the icon to delete the selected facility."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-map-area-x-btn.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-camera-coverage",
      children: "Set camera coverage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set the camera coverage area on the map. Right-click the icon where the camera is placed and select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.area.button.addCoverage"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-map-area-camera-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "To change the shooting range, click and drag the green area's shooting range in the desired direction."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-camera-rot.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "To adjust the coverage area, hold the edge of the range and drag to resize."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-camera-adjust.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To delete the coverage area, click the ", (0,jsx_runtime.jsx)(IcFremove, {}), " icon."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Settings made by the user are only features provided for the convenience of security management and do not reflect the actual shooting range of the camera."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-zone",
      children: "Delete zone"
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
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.area"
          }), " on the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the checkbox of the zone you want to delete from the zone list."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-area-remove-item.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.delete"
          }), " at the top right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the confirmation message window appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.yes"
          }), "."]
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