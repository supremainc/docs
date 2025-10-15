"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2126"], {
57647: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_map_manage_floor_mdx_39f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-map-manage-floor-mdx-39f.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_map_manage_floor_mdx_39f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-map-manage-floor","title":"Configure Floors","description":"Configure floors before configuring zones and facilities. Place doors and cameras on the floor image to visually confirm.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-map-manage-floor.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-map-manage-floor","permalink":"/docs/en/platform/biostar_x/settings-map-manage-floor","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-map-manage-floor.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-map-manage-floor","title":"Configure Floors","description":"Configure floors before configuring zones and facilities. Place doors and cameras on the floor image to visually confirm.","keywords":["Map","Floor","Facility","Door","Camera","Layout","Images"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Manage Map","permalink":"/docs/en/platform/biostar_x/settings-map-management"},"next":{"title":"Configure facility","permalink":"/docs/en/platform/biostar_x/settings-map-manage-facility"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-map-manage-floor.mdx


const frontMatter = {
	id: 'settings-map-manage-floor',
	title: 'Configure Floors',
	description: 'Configure floors before configuring zones and facilities. Place doors and cameras on the floor image to visually confirm.',
	keywords: [
		'Map',
		'Floor',
		'Facility',
		'Door',
		'Camera',
		'Layout',
		'Images'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Add floor",
  "id": "add-floor",
  "level": 2
}, {
  "value": "Modify floor configuration",
  "id": "modify-floor-configuration",
  "level": 2
}, {
  "value": "Delete door/camera",
  "id": "delete-doorcamera",
  "level": 3
}, {
  "value": "Set camera shooting range",
  "id": "set-camera-shooting-range",
  "level": 3
}, {
  "value": "Delete floor image",
  "id": "delete-floor-image",
  "level": 3
}, {
  "value": "Delete floor",
  "id": "delete-floor",
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
  }, {Cmd, IcCrop, IcFremove, IcLrot, IcRrot, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCrop) _missingMdxReference("IcCrop", true);
  if (!IcFremove) _missingMdxReference("IcFremove", true);
  if (!IcLrot) _missingMdxReference("IcLrot", true);
  if (!IcRrot) _missingMdxReference("IcRrot", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure floors before configuring zones and facilities. Upload the floor layout as an image and place doors and cameras for visual management. After configuring a floor, check the doors and cameras for that floor on the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " page."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-settings-map-add-floor-example.png",
      alone: true,
      caption: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Register doors before configuring floors. For more information about door enrollment, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-door-add",
              children: "the following"
            }), "."]
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
      id: "add-floor",
      children: "Add floor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Upload a floor layout or a 3D bird’s eye view image to add a floor and place doors and cameras."
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
          children: ["In the left sidebar, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.floor"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.table.actions.newFloor"
          }), " in the upper right corner of the floor list screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the name and description of the floor you want to add in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.page.title"
          }), " screen's ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.information.section.title"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.button.floorPlan"
          }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.section.title"
          }), " section or drag and drop the image to upload."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Confirm the uploaded image in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addFloorPlan"
          }), " window and proceed with the settings."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-01.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To rotate the image, click ", (0,jsx_runtime.jsx)(IcLrot, {}), " or ", (0,jsx_runtime.jsx)(IcRrot, {}), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To crop the image, click ", (0,jsx_runtime.jsx)(IcCrop, {}), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After completing the image settings, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To add a door to the uploaded image in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.section.title"
          }), " section, right-click on the desired location in the image and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addDoor"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addDoor"
          }), " window appears, select one of the registered doors."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-03.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To place the door in the image, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-04.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To add a camera to the uploaded image, right-click on the desired location in the image and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addCamera"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.floor.configuration.dialog.title.addCamera"
          }), " window appears, select one of the registered cameras."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-05.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To place the camera in the image, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-add-floor-06.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Additionally place doors and cameras as needed in the actual floor."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To save the configured floor settings, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " after completing all settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "To change the position of doors and cameras placed on the floor, click and drag the respective door or camera to the desired location."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on the icons and status of the doors and cameras placed on the floor, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-map#component-and-options",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modify-floor-configuration",
      children: "Modify floor configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can modify the layout of the floor with added doors and cameras. Modifying the floor layout allows you to change or delete the positions of doors and cameras."
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
          children: ["In the left sidebar, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.floor"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the floor you want to modify from the list."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After completing all settings and saving the configured floor, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.apply"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-doorcamera",
      children: "Delete door/camera"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click the ", (0,jsx_runtime.jsx)(IcFremove, {}), " icon for the door or camera you want to delete from the floor image. You can delete the respective door or camera."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-camera-shooting-range",
      children: "Set camera shooting range"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Right-click on the camera you want to set the shooting range for in the floor image. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.area.button.addCoverage"
      }), " in the popup menu."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-map-floor-add-camera-coverage.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "To change the shooting range, move the mouse pointer into the green area. When the mouse pointer changes to a cross shape, click and drag to the desired location while holding the mouse button down."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-floor-camera-rotation.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "To adjust the coverage area, hold the edge of the range and drag to resize."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-floor-camera-adjust.png",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-floor-image",
      children: "Delete floor image"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To delete the floor image, right-click on the floor image and select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.floor.contextMenu.deleteFloor"
      }), " from the popup menu."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-map-remove-floor.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "delete-floor",
      children: "Delete floor"
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
          children: ["In the left sidebar, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.map.floor"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the checkbox of the floor you want to delete from the list. You can select more than one floor."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-map-remove-floor-item.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.delete"
          }), " at the top right of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The selected floors will be deleted from the list. The deleted floors cannot be recovered."
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