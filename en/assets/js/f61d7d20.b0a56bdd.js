"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4104"], {
77421: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_map_mdx_f61_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-monitoring-map-mdx-f61.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_map_mdx_f61_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-map","title":"Monitor Map","description":"This guide explains how to monitor and control the real-time status of doors and cameras by zone and floor using the map monitoring feature. Visually manage areas and floor structures linked to the GIS map, utilizing various features such as access control and camera video playback.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-map.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-map","permalink":"/docs/en/platform/biostar_x/monitoring-map","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-map.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-map","title":"Monitor Map","description":"This guide explains how to monitor and control the real-time status of doors and cameras by zone and floor using the map monitoring feature. Visually manage areas and floor structures linked to the GIS map, utilizing various features such as access control and camera video playback.","keywords":["Monitoring","Map","Zone","Floor"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Control Advanced Access Control","permalink":"/docs/en/platform/biostar_x/control-zone"},"next":{"title":"Monitor Device","permalink":"/docs/en/platform/biostar_x/monitoring-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-map.mdx


const frontMatter = {
	id: 'monitoring-map',
	title: 'Monitor Map',
	description: 'This guide explains how to monitor and control the real-time status of doors and cameras by zone and floor using the map monitoring feature. Visually manage areas and floor structures linked to the GIS map, utilizing various features such as access control and camera video playback.',
	keywords: [
		'Monitoring',
		'Map',
		'Zone',
		'Floor'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Components and options",
  "id": "component-and-options",
  "level": 2
}, {
  "value": "Component",
  "id": "component",
  "level": 3
}, {
  "value": "Options",
  "id": "options",
  "level": 3
}, {
  "value": "Check status",
  "id": "check-status",
  "level": 3
}, {
  "value": "Open map",
  "id": "open-map",
  "level": 2
}, {
  "value": "Map size adjustment and relocation",
  "id": "resize-map",
  "level": 2
}, {
  "value": "Enter the floor",
  "id": "entry-floor",
  "level": 2
}, {
  "value": "Move to another floor",
  "id": "move-to-another-floor",
  "level": 2
}, {
  "value": "Controlling camera",
  "id": "control-camera",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    img: "img",
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
  }, {Cmd, IcAlert, IcBack, IcCamFail, IcCamOk, IcClose, IcErr, IcFLockDr, IcFUlockDr, IcMapmore, IcMove, IcZoom, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAlert) _missingMdxReference("IcAlert", true);
  if (!IcBack) _missingMdxReference("IcBack", true);
  if (!IcCamFail) _missingMdxReference("IcCamFail", true);
  if (!IcCamOk) _missingMdxReference("IcCamOk", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcErr) _missingMdxReference("IcErr", true);
  if (!IcFLockDr) _missingMdxReference("IcFLockDr", true);
  if (!IcFUlockDr) _missingMdxReference("IcFUlockDr", true);
  if (!IcMapmore) _missingMdxReference("IcMapmore", true);
  if (!IcMove) _missingMdxReference("IcMove", true);
  if (!IcZoom) _missingMdxReference("IcZoom", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This guide explains how to monitor and control the real-time status of doors and cameras by zone and floor using the map monitoring feature. Map monitoring allows for easy navigation of areas and floors through a visual interface integrated with Google Maps, enabling various features such as access door control and camera video playback."
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Multiple facilities can be configured within a single area in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Each facility can have multiple floors configured. In one floor, you can set up the door and camera based on the drawing for monitoring. Please refer to the below."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Area structure",
        src: (__webpack_require__(69796)/* ["default"] */.A) + "",
        width: "2743",
        height: "1771"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can access the configured area on the GIS map in the order of Area → Facility → Floor, as shown in the image, to monitor and control doors and cameras. This structure can also be seen in the sidebar of the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " page."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Monitoring sidebar",
        src: (__webpack_require__(43593)/* ["default"] */.A) + "",
        width: "400",
        height: "395"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on how to configure the map, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-map-management",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "component-and-options",
      children: "Components and options"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "component",
      children: "Component"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Components displayed on the map include the area, facilities, and cameras connected to the facilities. You can access the floor through the facility. You can check the door and camera on the floor."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-map-main.png"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Component"
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
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "Facility icon",
                src: (__webpack_require__(2684)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Facility"
              }), ": Click on a facility placed on the map to enter the corresponding configured floor."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "Door icon",
                src: (__webpack_require__(18248)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Door"
              }), ": Click on a door placed on the map to display a popup menu for controlling that door. For more information about the provided features, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                href: "control-door",
                children: "the following"
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "Camera icon",
                src: (__webpack_require__(21006)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Camera"
              }), ": Click on the camera to play the video of the corresponding facility or floor."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.img, {
                alt: "Camera error icon",
                src: (__webpack_require__(16920)/* ["default"] */.A) + "",
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Camera Error"
              }), ": This message appears when the camera is not connected or powered off."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcFUlockDr, {
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Open Door"
              }), ": The door placed on the floor is in an open state."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcFLockDr, {
                width: "45",
                height: "45"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Locked Door"
              }), ": The door placed on the floor is in a locked state."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "options",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The options feature provided in the map or layer is as follows."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Feature"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: [(0,jsx_runtime.jsx)(_components.img, {
                alt: "Zoom/Reduce",
                src: (__webpack_require__(44678)/* ["default"] */.A) + "",
                width: "24",
                height: "51"
              }), " / ", (0,jsx_runtime.jsx)(_components.img, {
                alt: "Zoom/Reduce",
                src: (__webpack_require__(30129)/* ["default"] */.A) + "",
                width: "51",
                height: "24"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can zoom in and out by clicking the buttons located at the top left and bottom right of the map. You can also use the mouse wheel to zoom in or out of the map."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcZoom, {})
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "You can zoom in and out by clicking the buttons located at the bottom right of the floor."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcMapmore, {
                width: "30",
                height: "30"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Click the button to access additional features."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcClose, {
                width: "30",
                height: "30"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "To close the map or floor positioned on the video tile, click the button at the top right."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcMove, {
                width: "30",
                height: "30"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "By clicking and dragging while holding down the icon, you can move the map to another location."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can move the position by dragging the mouse while clicking on the map. You can zoom in or out using the mouse wheel."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Double-click the map to expand it to full screen. Double-click again or press the ", (0,jsx_runtime.jsx)(Kbd, {
              children: "ESC"
            }), " key to return to the original size."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-status",
      children: "Check status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the left sidebar, you can check the status of each door and camera for the facilities or floors. Refer to the information below for the status of each icon."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80",
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
              children: "There is a communication server error or the connection is lost."
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
      id: "open-map",
      children: "Open map"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If the area is linked to the GIS map, you can display the map in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " section."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In the left sidebar, select the facility to view on the map."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Right-click."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openMap"
          }), " in the popup menu."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The map of the selected area will be displayed in the video tile of the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " section."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-map-open-map.png",
      alt: "Open map"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can also open the map by double-clicking the corresponding facility in the left sidebar."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The image is an example screen. The actual screen may differ."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on how to configure areas linked to the GIS map, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-map-manage-area",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resize-map",
      children: "Map size adjustment and relocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To adjust the size of the map, click on an empty area on the map. Handles for resizing will appear at each corner. Click and drag the handle to adjust to the desired size."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-monitoring-map-resize.gif",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To move the map to another location while resizing, click on the ", (0,jsx_runtime.jsx)(IcMove, {}), " icon over the map and drag it to the desired position."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-monitoring-map-move.gif",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "entry-floor",
      children: "Enter the floor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To enter a floor on the map, click on the facility. When the list of floors accessible from the popup menu is displayed, select the desired floor. You can check the drawings, doors, and cameras on the selected floor."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Or, double-click the floor in the left sidebar or right-click it and select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openMap"
      }), " from the popup menu."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-map-select-floor.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Clicking the door will display a popup menu that allows you to control that door. For more information about the provided features, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "control-door",
            children: "the following"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-map-floor-control-door.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Double-clicking the camera allows you to play the live feed."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/monitoring-map-select-floor-play-video.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on how to set up doors and cameras in the floor, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-map-manage-floor",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To navigate to the map displaying the facility, click the ", (0,jsx_runtime.jsx)(IcBack, {}), " button at the top left."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about video control methods and the tools displayed in the video, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video#control-video",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The image is an example screen. The actual screen may differ."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "move-to-another-floor",
      children: "Move to another floor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To move to a different floor, click on the selection option in the upper left corner of the map and select the floor you want to move to."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/monitoring-map-select-floor-list-box.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To navigate to the map displaying the facility, click the ", (0,jsx_runtime.jsx)(IcBack, {}), " button at the top left."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The floor selection option at the top left of the map displays only the floors configured for the facility. If the floor is not configured in the facility, it will not be displayed in the list. For more information on how to configure floors in the facility, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-map-manage-facility",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-camera",
      children: "Controlling camera"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "To control the camera on the map or floor, click the camera icon. Select the desired feature from the pop-up menu."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-map-camera-popup.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.camera.playVideo"
              }), ": You can check the camera video in real-time."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.camera.showCoverage"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.camera.hideCoverage"
              }), ": You can display or hide the shooting range of the camera."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "map.menu.door.viewDetail"
              }), ": You can check detailed information about the camera. Displays the name, group, ID, IP address, etc., of the camera in the right panel."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To place and play the camera feed on the video tile, double-click the camera in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.map.title"
          }), " list on the left sidebar of the screen. Or right-click and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openVideo"
          }), " from the popup menu."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-map-open-camera.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To view detailed information such as the camera's name and group, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.viewDetail"
          }), " from the popup menu."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Video tiles are added in order from the top left of the screen. If there is no space to add more, an error message appears."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about video control methods and the tools displayed in the video, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video#control-video",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
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
2684: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiM5MzM2RkYiLz4KPHBhdGggZD0iTTMzLjc1IDkuMzc1QzMzLjc0NDEgOS4xMjgyMyAzMy42NDM0IDguODkzMjIgMzMuNDY4OCA4LjcxODY3QzMzLjI5NDMgOC41NDQxMyAzMy4wNTkzIDguNDQzNDUgMzIuODEyNSA4LjQzNzVIMTIuMTg3NUMxMS45NDA3IDguNDQzNDUgMTEuNzA1NyA4LjU0NDEzIDExLjUzMTIgOC43MTg2N0MxMS4zNTY2IDguODkzMjIgMTEuMjU1OSA5LjEyODIzIDExLjI1IDkuMzc1VjM1LjYyNUMxMS4yNTU5IDM1Ljg3MTggMTEuMzU2NiAzNi4xMDY4IDExLjUzMTIgMzYuMjgxM0MxMS43MDU3IDM2LjQ1NTkgMTEuOTQwNyAzNi41NTY2IDEyLjE4NzUgMzYuNTYyNUgzMi44MTI1QzMzLjA1OTMgMzYuNTU2NiAzMy4yOTQzIDM2LjQ1NTkgMzMuNDY4OCAzNi4yODEzQzMzLjY0MzQgMzYuMTA2OCAzMy43NDQxIDM1Ljg3MTggMzMuNzUgMzUuNjI1VjkuMzc1Wk0yNC4zNzUgMTMuMTI1SDMwVjE2Ljg3NUgyNC4zNzVWMTMuMTI1Wk0zMCAyMy40Mzc1SDI0LjM3NVYxOS42ODc1SDMwVjIzLjQzNzVaTTE1IDEzLjEyNUgyMC42MjVWMTYuODc1SDE1VjEzLjEyNVpNMTUgMjMuNDM3NVYxOS42ODc1SDIwLjYyNVYyMy40Mzc1SDE1Wk0xOC43NSAzNC42ODc1VjI4LjEyNUMxOC43NTU5IDI3Ljg3ODIgMTguODU2NiAyNy42NDMyIDE5LjAzMTIgMjcuNDY4N0MxOS4yMDU3IDI3LjI5NDEgMTkuNDQwNyAyNy4xOTM0IDE5LjY4NzUgMjcuMTg3NUgyNS4zMTI1QzI1LjU1OTMgMjcuMTkzNCAyNS43OTQzIDI3LjI5NDEgMjUuOTY4OCAyNy40Njg3QzI2LjE0MzQgMjcuNjQzMiAyNi4yNDQxIDI3Ljg3ODIgMjYuMjUgMjguMTI1VjM0LjY4NzVIMTguNzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");

}),
43593: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/monitoring-map-area-tree-example-83c033a246fd3a83889a4111c4e2ced2.png");

}),
69796: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/monitoring-map-area-tree-ad4ae185a1ecc1918cfb680e0d0a82ca.png");

}),
21006: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiMzRTY2RkYiLz4KPHBhdGggZD0iTTMwLjAyNjYgMTYuMDI2NkMzMC4wODQ3IDE1LjYxOTEgMzAuMDQ3MiAxNS4yMDM2IDI5LjkxNyAxNC44MTMxQzI5Ljc4NjggMTQuNDIyNiAyOS41Njc1IDE0LjA2NzggMjkuMjc2NCAxMy43NzY4QzI4Ljk4NTQgMTMuNDg1NyAyOC42MzA1IDEzLjI2NjQgMjguMjQgMTMuMTM2MkMyNy44NDk1IDEzLjAwNiAyNy40MzQxIDEyLjk2ODQgMjcuMDI2NiAxMy4wMjY2SDExLjAyNjZDMTAuNjE5MSAxMi45Njg0IDEwLjIwMzYgMTMuMDA2IDkuODEzMTQgMTMuMTM2MkM5LjQyMjY1IDEzLjI2NjQgOS4wNjc4MiAxMy40ODU3IDguNzc2NzUgMTMuNzc2OEM4LjQ4NTY5IDE0LjA2NzggOC4yNjYzNyAxNC40MjI2IDguMTM2MTcgMTQuODEzMUM4LjAwNTk2IDE1LjIwMzYgNy45Njg0NSAxNS42MTkxIDguMDI2NTkgMTYuMDI2NlYzMC4wMjY2QzcuOTY4NDUgMzAuNDM0MSA4LjAwNTk2IDMwLjg0OTUgOC4xMzYxNyAzMS4yNEM4LjI2NjM3IDMxLjYzMDUgOC40ODU2OSAzMS45ODU0IDguNzc2NzUgMzIuMjc2NEM5LjA2NzgyIDMyLjU2NzUgOS40MjI2NSAzMi43ODY4IDkuODEzMTQgMzIuOTE3QzEwLjIwMzYgMzMuMDQ3MiAxMC42MTkxIDMzLjA4NDcgMTEuMDI2NiAzMy4wMjY2SDI3LjAyNjZDMjcuNDM0MSAzMy4wODQ3IDI3Ljg0OTUgMzMuMDQ3MiAyOC4yNCAzMi45MTdDMjguNjMwNSAzMi43ODY4IDI4Ljk4NTQgMzIuNTY3NSAyOS4yNzY0IDMyLjI3NjRDMjkuNTY3NSAzMS45ODU0IDI5Ljc4NjggMzEuNjMwNSAyOS45MTcgMzEuMjRDMzAuMDQ3MiAzMC44NDk1IDMwLjA4NDcgMzAuNDM0MSAzMC4wMjY2IDMwLjAyNjZWMTYuMDI2NlpNMzIuMDI2NiAxOS4zNzY2VjI2Ljc3NjZMMzYuNTc2NiAyOS40MjY2QzM2Ljg0MSAyOS42MDk5IDM3LjEyNjQgMjkuNzYwOSAzNy40MjY2IDI5Ljg3NjZDMzcuNjYzNyAyOS45NzczIDM3LjkxOSAzMC4wMjg0IDM4LjE3NjYgMzAuMDI2NkMzOC40MzA0IDI5Ljk5NzkgMzguNjgxMyAyOS45NDc3IDM4LjkyNjYgMjkuODc2NkMzOS4yODU1IDI5LjcyODggMzkuNTg2NyAyOS40Njg2IDM5Ljc4NTEgMjkuMTM1QzM5Ljk4MzQgMjguODAxNCA0MC4wNjgyIDI4LjQxMjUgNDAuMDI2NiAyOC4wMjY2VjE4LjAyNjZDNDAuMDY4MiAxNy42NDA3IDM5Ljk4MzQgMTcuMjUxOCAzOS43ODUxIDE2LjkxODJDMzkuNTg2NyAxNi41ODQ2IDM5LjI4NTUgMTYuMzI0NCAzOC45MjY2IDE2LjE3NjZDMzguNjgxMyAxNi4xMDU0IDM4LjQzMDQgMTYuMDU1MyAzOC4xNzY2IDE2LjAyNjZDMzcuOTE5IDE2LjAyNDggMzcuNjYzNyAxNi4wNzU4IDM3LjQyNjYgMTYuMTc2NkMzNy4xMjY0IDE2LjI5MjMgMzYuODQxIDE2LjQ0MzMgMzYuNTc2NiAxNi42MjY2TDMzLjAyNjYgMTguNzI2NlYxOC43NzY2TDMyLjAyNjYgMTkuMzc2NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

}),
16920: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiMzRTY2RkYiLz4KPHBhdGggZD0iTTMwLjAyNjYgMTYuMDI2NkMzMC4wODQ3IDE1LjYxOTEgMzAuMDQ3MiAxNS4yMDM2IDI5LjkxNyAxNC44MTMxQzI5Ljc4NjggMTQuNDIyNiAyOS41Njc1IDE0LjA2NzggMjkuMjc2NCAxMy43NzY4QzI4Ljk4NTQgMTMuNDg1NyAyOC42MzA1IDEzLjI2NjQgMjguMjQgMTMuMTM2MkMyNy44NDk1IDEzLjAwNiAyNy40MzQxIDEyLjk2ODQgMjcuMDI2NiAxMy4wMjY2SDExLjAyNjZDMTAuNjE5MSAxMi45Njg0IDEwLjIwMzYgMTMuMDA2IDkuODEzMTQgMTMuMTM2MkM5LjQyMjY1IDEzLjI2NjQgOS4wNjc4MiAxMy40ODU3IDguNzc2NzUgMTMuNzc2OEM4LjQ4NTY5IDE0LjA2NzggOC4yNjYzNyAxNC40MjI2IDguMTM2MTcgMTQuODEzMUM4LjAwNTk2IDE1LjIwMzYgNy45Njg0NSAxNS42MTkxIDguMDI2NTkgMTYuMDI2NlYzMC4wMjY2QzcuOTY4NDUgMzAuNDM0MSA4LjAwNTk2IDMwLjg0OTUgOC4xMzYxNyAzMS4yNEM4LjI2NjM3IDMxLjYzMDUgOC40ODU2OSAzMS45ODU0IDguNzc2NzUgMzIuMjc2NEM5LjA2NzgyIDMyLjU2NzUgOS40MjI2NSAzMi43ODY4IDkuODEzMTQgMzIuOTE3QzEwLjIwMzYgMzMuMDQ3MiAxMC42MTkxIDMzLjA4NDcgMTEuMDI2NiAzMy4wMjY2SDI3LjAyNjZDMjcuNDM0MSAzMy4wODQ3IDI3Ljg0OTUgMzMuMDQ3MiAyOC4yNCAzMi45MTdDMjguNjMwNSAzMi43ODY4IDI4Ljk4NTQgMzIuNTY3NSAyOS4yNzY0IDMyLjI3NjRDMjkuNTY3NSAzMS45ODU0IDI5Ljc4NjggMzEuNjMwNSAyOS45MTcgMzEuMjRDMzAuMDQ3MiAzMC44NDk1IDMwLjA4NDcgMzAuNDM0MSAzMC4wMjY2IDMwLjAyNjZWMTYuMDI2NlpNMzIuMDI2NiAxOS4zNzY2VjI2Ljc3NjZMMzYuNTc2NiAyOS40MjY2QzM2Ljg0MSAyOS42MDk5IDM3LjEyNjQgMjkuNzYwOSAzNy40MjY2IDI5Ljg3NjZDMzcuNjYzNyAyOS45NzczIDM3LjkxOSAzMC4wMjg0IDM4LjE3NjYgMzAuMDI2NkMzOC40MzA0IDI5Ljk5NzkgMzguNjgxMyAyOS45NDc3IDM4LjkyNjYgMjkuODc2NkMzOS4yODU1IDI5LjcyODggMzkuNTg2NyAyOS40Njg2IDM5Ljc4NTEgMjkuMTM1QzM5Ljk4MzQgMjguODAxNCA0MC4wNjgyIDI4LjQxMjUgNDAuMDI2NiAyOC4wMjY2VjE4LjAyNjZDNDAuMDY4MiAxNy42NDA3IDM5Ljk4MzQgMTcuMjUxOCAzOS43ODUxIDE2LjkxODJDMzkuNTg2NyAxNi41ODQ2IDM5LjI4NTUgMTYuMzI0NCAzOC45MjY2IDE2LjE3NjZDMzguNjgxMyAxNi4xMDU0IDM4LjQzMDQgMTYuMDU1MyAzOC4xNzY2IDE2LjAyNjZDMzcuOTE5IDE2LjAyNDggMzcuNjYzNyAxNi4wNzU4IDM3LjQyNjYgMTYuMTc2NkMzNy4xMjY0IDE2LjI5MjMgMzYuODQxIDE2LjQ0MzMgMzYuNTc2NiAxNi42MjY2TDMzLjAyNjYgMTguNzI2NlYxOC43NzY2TDMyLjAyNjYgMTkuMzc2NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS44NTU1IDI3LjI2ODVMMTkuMDI2OSAyNC40NDA2TDE2LjE5ODcgMjcuMjY4NUMxNi4xMDU5IDI3LjM2MTUgMTUuOTk1NCAyNy40MzUzIDE1Ljg3NCAyNy40ODU2QzE1Ljc1MjYgMjcuNTM1OSAxNS42MjI2IDI3LjU2MTggMTUuNDkxMiAyNy41NjE4QzE1LjM1OTggMjcuNTYxOCAxNS4yMjk4IDI3LjUzNTkgMTUuMTA4NCAyNy40ODU2QzE0Ljk4NyAyNy40MzUzIDE0Ljg3NjYgMjcuMzYxNSAxNC43ODM3IDI3LjI2ODVDMTQuNTk2MiAyNy4wODEgMTQuNDkwNyAyNi44MjY3IDE0LjQ5MDcgMjYuNTYxNUMxNC40OTA3IDI2LjI5NjQgMTQuNTk2MiAyNi4wNDIxIDE0Ljc4MzcgMjUuODU0NkwxNy42MTI4IDIzLjAyNTVMMTQuNzgzNyAyMC4xOTc1QzE0LjY5MDcgMjAuMTA0NyAxNC42MTY3IDE5Ljk5NDQgMTQuNTY2NCAxOS44NzNDMTQuNTE2MSAxOS43NTE2IDE0LjQ5MDIgMTkuNjIxNSAxNC40OTAyIDE5LjQ5MDFDMTQuNDkwMiAxOS4zNTg2IDE0LjUxNjEgMTkuMjI4NSAxNC41NjY0IDE5LjEwNzFDMTQuNjE2NyAxOC45ODU3IDE0LjY5MDcgMTguODc1NCAxNC43ODM3IDE4Ljc4MjVDMTQuODc2NiAxOC42ODk2IDE0Ljk4NyAxOC42MTU4IDE1LjEwODQgMTguNTY1NUMxNS4yMjk4IDE4LjUxNTIgMTUuMzU5OCAxOC40ODkzIDE1LjQ5MTIgMTguNDg5M0MxNS42MjI2IDE4LjQ4OTMgMTUuNzUyNiAxOC41MTUyIDE1Ljg3NCAxOC41NjU1QzE1Ljk5NTQgMTguNjE1OCAxNi4xMDU5IDE4LjY4OTYgMTYuMTk4NyAxOC43ODI1TDE5LjAyNjkgMjEuNjExNUwyMS44NTU1IDE4Ljc4MjVDMjIuMDQzIDE4LjU5NTEgMjIuMjk3MyAxOC40ODk3IDIyLjU2MjUgMTguNDg5N0MyMi44Mjc3IDE4LjQ4OTcgMjMuMDgyIDE4LjU5NTEgMjMuMjY5NSAxOC43ODI1QzIzLjM2MjUgMTguODc1NCAyMy40MzY1IDE4Ljk4NTcgMjMuNDg2OCAxOS4xMDcxQzIzLjUzNzEgMTkuMjI4NSAyMy41NjMgMTkuMzU4NiAyMy41NjMgMTkuNDkwMUMyMy41NjMgMTkuNjIxNSAyMy41MzcxIDE5Ljc1MTYgMjMuNDg2OCAxOS44NzNDMjMuNDM2NSAxOS45OTQ0IDIzLjM2MjUgMjAuMTA0NyAyMy4yNjk1IDIwLjE5NzVMMjAuNDQxNCAyMy4wMjU1TDIzLjI2OTUgMjUuODU0NkMyMy40NTcgMjYuMDQyMSAyMy41NjI1IDI2LjI5NjQgMjMuNTYyNSAyNi41NjE1QzIzLjU2MjUgMjYuODI2NyAyMy40NTcgMjcuMDgxIDIzLjI2OTUgMjcuMjY4NUMyMy4wODIgMjcuNDU2MSAyMi44Mjc3IDI3LjU2MTUgMjIuNTYyNSAyNy41NjE1QzIyLjI5NzMgMjcuNTYxNSAyMi4wNDMgMjcuNDU2MSAyMS44NTU1IDI3LjI2ODVaIiBmaWxsPSIjRkYwMDAwIi8+Cjwvc3ZnPgo=");

}),
18248: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIuNSIgY3k9IjIyLjUiIHI9IjIyLjUiIGZpbGw9IiNGRjVFMDAiLz4KPHBhdGggZD0iTTI4LjYzODcgMTIuMTk0NkMyOC41NzY2IDEyLjEyNjQgMjguNTAxNCAxMi4wNzE2IDI4LjQxNzUgMTIuMDMzNEMyOC4zMzM2IDExLjk5NTMgMjguMjQyOCAxMS45NzQ2IDI4LjE1MDYgMTEuOTcyN0gxNS44NjA0QzE1LjYxMzQgMTEuOTc2OCAxNS4zNzY1IDEyLjA3MTUgMTUuMTk0OCAxMi4yMzg5QzE1LjA1NDIgMTIuMzk4NCAxNC45NzU1IDEyLjYwMzEgMTQuOTczIDEyLjgxNTdWMzYuMjQyNkMxNC45Njg3IDM2LjM0ODggMTQuOTg2MiAzNi40NTQ3IDE1LjAyNDQgMzYuNTUzOUMxNS4wNjI1IDM2LjY1MzEgMTUuMTIwNSAzNi43NDM0IDE1LjE5NDggMzYuODE5NEMxNS4yNzkgMzYuOTEzNSAxNS4zODE0IDM2Ljk4OTYgMTUuNDk1OCAzNy4wNDNDMTUuNjEwMiAzNy4wOTYzIDE1LjczNDIgMzcuMTI1OSAxNS44NjA0IDM3LjEzSDI4LjE1MDZDMjguMjQyOCAzNy4xMjgxIDI4LjMzMzYgMzcuMTA3NCAyOC40MTc1IDM3LjA2OTNDMjguNTAxNCAzNy4wMzExIDI4LjU3NjYgMzYuOTc2MyAyOC42Mzg3IDM2LjkwODFMMjguNzI3NCAzNi44MTk0QzI4LjgxMzIgMzYuNzUwMyAyOC44ODE5IDM2LjY2MjIgMjguOTI4MSAzNi41NjIyQzI4Ljk3NDIgMzYuNDYyMSAyOC45OTY3IDM2LjM1MjcgMjguOTkzNiAzNi4yNDI2VjEyLjgxNTdDMjguOTkwNyAxMi43MDY2IDI4Ljk2NTUgMTIuNTk5MiAyOC45MTk4IDEyLjVDMjguODc0IDEyLjQwMDggMjguODA4NiAxMi4zMTIgMjguNzI3NCAxMi4yMzg5QzI4LjcxNjMgMTIuMjI2IDI4LjcwMjggMTIuMjE1NCAyOC42ODc1IDEyLjIwNzhDMjguNjcyMyAxMi4yMDAyIDI4LjY1NTcgMTIuMTk1NyAyOC42Mzg3IDEyLjE5NDZaTTE2Ljc5MjEgMjQuNTI5MkMxNi43ODkxIDI0LjQwNiAxNi44MTExIDI0LjI4MzUgMTYuODU2OSAyNC4xNjlDMTYuOTAyNiAyNC4wNTQ2IDE2Ljk3MTEgMjMuOTUwNyAxNy4wNTgzIDIzLjg2MzVDMTcuMTQ1NCAyMy43NzY0IDE3LjI0OTMgMjMuNzA3OSAxNy4zNjM3IDIzLjY2MjFDMTcuNDc4MiAyMy42MTY0IDE3LjYwMDcgMjMuNTk0NCAxNy43MjM5IDIzLjU5NzRDMTcuODQ3MSAyMy41OTQgMTcuOTY5NyAyMy42MTU5IDE4LjA4NDIgMjMuNjYxN0MxOC4xOTg2IDIzLjcwNzUgMTguMzAyNSAyMy43NzYyIDE4LjM4OTQgMjMuODYzNkMxOC41NTY4IDI0LjA0NTMgMTguNjUxNiAyNC4yODIyIDE4LjY1NTYgMjQuNTI5MkMxOC42NTg3IDI0LjY1MjQgMTguNjM2NyAyNC43NzQ5IDE4LjU5MDkgMjQuODg5M0MxOC41NDUyIDI1LjAwMzcgMTguNDc2NiAyNS4xMDc3IDE4LjM4OTUgMjUuMTk0OEMxOC4zMDI0IDI1LjI4MTkgMTguMTk4NCAyNS4zNTA0IDE4LjA4NCAyNS4zOTYyQzE3Ljk2OTYgMjUuNDQxOSAxNy44NDcxIDI1LjQ2NCAxNy43MjM5IDI1LjQ2MDlDMTcuNDc2OSAyNS40NTY5IDE3LjI0IDI1LjM2MjEgMTcuMDU4MyAyNS4xOTQ3QzE2Ljk3MDkgMjUuMTA3OCAxNi45MDIyIDI1LjAwMzkgMTYuODU2NCAyNC44ODk1QzE2LjgxMDYgMjQuNzc1IDE2Ljc4ODcgMjQuNjUyNCAxNi43OTIxIDI0LjUyOTJaTTMxLjk2NjMgMTEuMzUxNkMzMS45Njg4IDExLjA1MDEgMzEuOTA2OCAxMC43NTE2IDMxLjc4NDMgMTAuNDc2MUMzMS42NjE5IDEwLjIwMDYgMzEuNDgxOSA5Ljk1NDQ1IDMxLjI1NjQgOS43NTQyN0MzMS4wNDc0IDkuNTI0ODkgMzAuNzk0MyA5LjMzOTkxIDMwLjUxMjMgOS4yMTAzM0MzMC4yMzAyIDkuMDgwNzUgMjkuOTI1IDkuMDA5MjIgMjkuNjE0OCA5SDE0LjM1MThDMTMuNzEzNSA5LjAyNDA2IDEzLjEwOTIgOS4yOTQzOSAxMi42NjU4IDkuNzU0MjdDMTIuNDUxNyA5Ljk2MDk0IDEyLjI4MjEgMTAuMjA5MyAxMi4xNjc3IDEwLjQ4NEMxMi4wNTMyIDEwLjc1ODcgMTEuOTk2MiAxMS4wNTQgMTIuMDAwMyAxMS4zNTE2VjM2LjI0MjZDMTEuOTk3MiAzNi4zNTI3IDEyLjAxOTcgMzYuNDYyMSAxMi4wNjU4IDM2LjU2MjJDMTIuMTEyIDM2LjY2MjIgMTIuMTgwNyAzNi43NTAzIDEyLjI2NjUgMzYuODE5NEMxMi4zNCAzNi45MTQ2IDEyLjQzNCAzNi45OTIgMTIuNTQxNSAzNy4wNDU3QzEyLjY0OTEgMzcuMDk5NSAxMi43Njc0IDM3LjEyODMgMTIuODg3NyAzNy4xM0gxMi45NzY0QzEzLjA5MDkgMzcuMTMxIDEzLjIwMzggMzcuMTAzMSAxMy4zMDQ3IDM3LjA0ODhDMTMuNDA1NSAzNi45OTQ1IDEzLjQ5MSAzNi45MTU2IDEzLjU1MzIgMzYuODE5NEMxMy42NDk0IDM2Ljc1NzIgMTMuNzI4MyAzNi42NzE3IDEzLjc4MjYgMzYuNTcwOUMxMy44MzY5IDM2LjQ3IDEzLjg2NDggMzYuMzU3MSAxMy44NjM4IDM2LjI0MjZWMTIuMjgzM0MxMy44NjAzIDEyLjEwMiAxMy44OTQgMTEuOTIxOSAxMy45NjI2IDExLjc1NEMxNC4wMzEzIDExLjU4NjIgMTQuMTMzNiAxMS40MzQxIDE0LjI2MzEgMTEuMzA3MkMxNC4zOTM5IDExLjE2NzUgMTQuNTUyIDExLjA1NjEgMTQuNzI3NSAxMC45Nzk4QzE0LjkwMyAxMC45MDM1IDE1LjA5MjIgMTAuODYzOSAxNS4yODM2IDEwLjg2MzVIMjguNjgzQzI4Ljg2ODMgMTAuODYxNCAyOS4wNTE4IDEwLjkgMjkuMjIwNSAxMC45NzY3QzI5LjM4OTIgMTEuMDUzNCAyOS41Mzg5IDExLjE2NjIgMjkuNjU5MiAxMS4zMDcyQzI5LjgwMDIgMTEuNDI3NCAyOS45MTMgMTEuNTc3MiAyOS45ODk3IDExLjc0NTlDMzAuMDY2MyAxMS45MTQ1IDMwLjEwNSAxMi4wOTggMzAuMTAyOCAxMi4yODMzVjM2LjI0MjZDMzAuMDk5OCAzNi4zNTI3IDMwLjEyMjIgMzYuNDYyMSAzMC4xNjg0IDM2LjU2MjJDMzAuMjE0NiAzNi42NjIyIDMwLjI4MzMgMzYuNzUwMyAzMC4zNjkxIDM2LjgxOTRDMzAuNDQyNSAzNi45MTQ2IDMwLjUzNjYgMzYuOTkyIDMwLjY0NDEgMzcuMDQ1N0MzMC43NTE3IDM3LjA5OTUgMzAuODcgMzcuMTI4MyAzMC45OTAyIDM3LjEzSDMxLjA3OUMzMS4xOTkyIDM3LjEyODMgMzEuMzE3NSAzNy4wOTk1IDMxLjQyNTEgMzcuMDQ1N0MzMS41MzI2IDM2Ljk5MiAzMS42MjY3IDM2LjkxNDYgMzEuNzAwMSAzNi44MTk0QzMxLjc4NTkgMzYuNzUwMyAzMS44NTQ2IDM2LjY2MjIgMzEuOTAwOCAzNi41NjIyQzMxLjk0NyAzNi40NjIxIDMxLjk2OTQgMzYuMzUyNyAzMS45NjYzIDM2LjI0MjZWMTEuMzUxNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

}),
30129: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA1MSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iMjQiIHdpZHRoPSIyNCIgaGVpZ2h0PSI1MSIgcng9IjExIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMCAyNCkiIGZpbGw9IiMzRjNFM0IiLz4KPHBhdGggZD0iTTE3LjE1NTMgMTIuNjkxOEw5LjE4NjUyIDEyLjY5MThMOS4xODY1MiAxMS4zMzk1TDE3LjE1NTMgMTEuMzM5NUwxNy4xNTUzIDEyLjY5MThaTTEzLjg0NyAxNkwxMi40OTQ4IDE2TDEyLjQ5NDggOC4wMzEyNUwxMy44NDcgOC4wMzEyNUwxMy44NDcgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDEgMTEuNVYxMi41TDMzIDEyLjVWMTEuNUw0MSAxMS41WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");

}),
44678: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAyNCA1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjUxIiByeD0iMTEiIGZpbGw9IiMzRjNFM0IiLz4KPHBhdGggZD0iTTExLjMwODIgMTcuMTU1M1Y5LjE4NjUySDEyLjY2MDVWMTcuMTU1M0gxMS4zMDgyWk04IDEzLjg0N1YxMi40OTQ4SDE1Ljk2ODhWMTMuODQ3SDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMzlWNDBIOFYzOUgxNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");

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