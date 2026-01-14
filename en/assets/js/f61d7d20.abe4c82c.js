"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["24104"], {
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
                src: (__webpack_require__(95867)/* ["default"] */.A) + "",
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
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41IiBmaWxsPSIjOTMzNkZGIi8+DQo8cGF0aCBkPSJNMzMuNzUgOS4zNzVDMzMuNzQ0MSA5LjEyODIzIDMzLjY0MzQgOC44OTMyMiAzMy40Njg4IDguNzE4NjdDMzMuMjk0MyA4LjU0NDEzIDMzLjA1OTMgOC40NDM0NSAzMi44MTI1IDguNDM3NUgxMi4xODc1QzExLjk0MDcgOC40NDM0NSAxMS43MDU3IDguNTQ0MTMgMTEuNTMxMiA4LjcxODY3QzExLjM1NjYgOC44OTMyMiAxMS4yNTU5IDkuMTI4MjMgMTEuMjUgOS4zNzVWMzUuNjI1QzExLjI1NTkgMzUuODcxOCAxMS4zNTY2IDM2LjEwNjggMTEuNTMxMiAzNi4yODEzQzExLjcwNTcgMzYuNDU1OSAxMS45NDA3IDM2LjU1NjYgMTIuMTg3NSAzNi41NjI1SDMyLjgxMjVDMzMuMDU5MyAzNi41NTY2IDMzLjI5NDMgMzYuNDU1OSAzMy40Njg4IDM2LjI4MTNDMzMuNjQzNCAzNi4xMDY4IDMzLjc0NDEgMzUuODcxOCAzMy43NSAzNS42MjVWOS4zNzVaTTI0LjM3NSAxMy4xMjVIMzBWMTYuODc1SDI0LjM3NVYxMy4xMjVaTTMwIDIzLjQzNzVIMjQuMzc1VjE5LjY4NzVIMzBWMjMuNDM3NVpNMTUgMTMuMTI1SDIwLjYyNVYxNi44NzVIMTVWMTMuMTI1Wk0xNSAyMy40Mzc1VjE5LjY4NzVIMjAuNjI1VjIzLjQzNzVIMTVaTTE4Ljc1IDM0LjY4NzVWMjguMTI1QzE4Ljc1NTkgMjcuODc4MiAxOC44NTY2IDI3LjY0MzIgMTkuMDMxMiAyNy40Njg3QzE5LjIwNTcgMjcuMjk0MSAxOS40NDA3IDI3LjE5MzQgMTkuNjg3NSAyNy4xODc1SDI1LjMxMjVDMjUuNTU5MyAyNy4xOTM0IDI1Ljc5NDMgMjcuMjk0MSAyNS45Njg4IDI3LjQ2ODdDMjYuMTQzNCAyNy42NDMyIDI2LjI0NDEgMjcuODc4MiAyNi4yNSAyOC4xMjVWMzQuNjg3NUgxOC43NVoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==");

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
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41IiBmaWxsPSIjM0U2NkZGIi8+DQo8cGF0aCBkPSJNMzAuMDI2NiAxNi4wMjY2QzMwLjA4NDcgMTUuNjE5MSAzMC4wNDcyIDE1LjIwMzYgMjkuOTE3IDE0LjgxMzFDMjkuNzg2OCAxNC40MjI2IDI5LjU2NzUgMTQuMDY3OCAyOS4yNzY0IDEzLjc3NjhDMjguOTg1NCAxMy40ODU3IDI4LjYzMDUgMTMuMjY2NCAyOC4yNCAxMy4xMzYyQzI3Ljg0OTUgMTMuMDA2IDI3LjQzNDEgMTIuOTY4NCAyNy4wMjY2IDEzLjAyNjZIMTEuMDI2NkMxMC42MTkxIDEyLjk2ODQgMTAuMjAzNiAxMy4wMDYgOS44MTMxNCAxMy4xMzYyQzkuNDIyNjUgMTMuMjY2NCA5LjA2NzgyIDEzLjQ4NTcgOC43NzY3NSAxMy43NzY4QzguNDg1NjkgMTQuMDY3OCA4LjI2NjM3IDE0LjQyMjYgOC4xMzYxNyAxNC44MTMxQzguMDA1OTYgMTUuMjAzNiA3Ljk2ODQ1IDE1LjYxOTEgOC4wMjY1OSAxNi4wMjY2VjMwLjAyNjZDNy45Njg0NSAzMC40MzQxIDguMDA1OTYgMzAuODQ5NSA4LjEzNjE3IDMxLjI0QzguMjY2MzcgMzEuNjMwNSA4LjQ4NTY5IDMxLjk4NTQgOC43NzY3NSAzMi4yNzY0QzkuMDY3ODIgMzIuNTY3NSA5LjQyMjY1IDMyLjc4NjggOS44MTMxNCAzMi45MTdDMTAuMjAzNiAzMy4wNDcyIDEwLjYxOTEgMzMuMDg0NyAxMS4wMjY2IDMzLjAyNjZIMjcuMDI2NkMyNy40MzQxIDMzLjA4NDcgMjcuODQ5NSAzMy4wNDcyIDI4LjI0IDMyLjkxN0MyOC42MzA1IDMyLjc4NjggMjguOTg1NCAzMi41Njc1IDI5LjI3NjQgMzIuMjc2NEMyOS41Njc1IDMxLjk4NTQgMjkuNzg2OCAzMS42MzA1IDI5LjkxNyAzMS4yNEMzMC4wNDcyIDMwLjg0OTUgMzAuMDg0NyAzMC40MzQxIDMwLjAyNjYgMzAuMDI2NlYxNi4wMjY2Wk0zMi4wMjY2IDE5LjM3NjZWMjYuNzc2NkwzNi41NzY2IDI5LjQyNjZDMzYuODQxIDI5LjYwOTkgMzcuMTI2NCAyOS43NjA5IDM3LjQyNjYgMjkuODc2NkMzNy42NjM3IDI5Ljk3NzMgMzcuOTE5IDMwLjAyODQgMzguMTc2NiAzMC4wMjY2QzM4LjQzMDQgMjkuOTk3OSAzOC42ODEzIDI5Ljk0NzcgMzguOTI2NiAyOS44NzY2QzM5LjI4NTUgMjkuNzI4OCAzOS41ODY3IDI5LjQ2ODYgMzkuNzg1MSAyOS4xMzVDMzkuOTgzNCAyOC44MDE0IDQwLjA2ODIgMjguNDEyNSA0MC4wMjY2IDI4LjAyNjZWMTguMDI2NkM0MC4wNjgyIDE3LjY0MDcgMzkuOTgzNCAxNy4yNTE4IDM5Ljc4NTEgMTYuOTE4MkMzOS41ODY3IDE2LjU4NDYgMzkuMjg1NSAxNi4zMjQ0IDM4LjkyNjYgMTYuMTc2NkMzOC42ODEzIDE2LjEwNTQgMzguNDMwNCAxNi4wNTUzIDM4LjE3NjYgMTYuMDI2NkMzNy45MTkgMTYuMDI0OCAzNy42NjM3IDE2LjA3NTggMzcuNDI2NiAxNi4xNzY2QzM3LjEyNjQgMTYuMjkyMyAzNi44NDEgMTYuNDQzMyAzNi41NzY2IDE2LjYyNjZMMzMuMDI2NiAxOC43MjY2VjE4Ljc3NjZMMzIuMDI2NiAxOS4zNzY2WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K");

}),
16920: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41IiBmaWxsPSIjM0U2NkZGIi8+DQo8cGF0aCBkPSJNMzAuMDI2NiAxNi4wMjY2QzMwLjA4NDcgMTUuNjE5MSAzMC4wNDcyIDE1LjIwMzYgMjkuOTE3IDE0LjgxMzFDMjkuNzg2OCAxNC40MjI2IDI5LjU2NzUgMTQuMDY3OCAyOS4yNzY0IDEzLjc3NjhDMjguOTg1NCAxMy40ODU3IDI4LjYzMDUgMTMuMjY2NCAyOC4yNCAxMy4xMzYyQzI3Ljg0OTUgMTMuMDA2IDI3LjQzNDEgMTIuOTY4NCAyNy4wMjY2IDEzLjAyNjZIMTEuMDI2NkMxMC42MTkxIDEyLjk2ODQgMTAuMjAzNiAxMy4wMDYgOS44MTMxNCAxMy4xMzYyQzkuNDIyNjUgMTMuMjY2NCA5LjA2NzgyIDEzLjQ4NTcgOC43NzY3NSAxMy43NzY4QzguNDg1NjkgMTQuMDY3OCA4LjI2NjM3IDE0LjQyMjYgOC4xMzYxNyAxNC44MTMxQzguMDA1OTYgMTUuMjAzNiA3Ljk2ODQ1IDE1LjYxOTEgOC4wMjY1OSAxNi4wMjY2VjMwLjAyNjZDNy45Njg0NSAzMC40MzQxIDguMDA1OTYgMzAuODQ5NSA4LjEzNjE3IDMxLjI0QzguMjY2MzcgMzEuNjMwNSA4LjQ4NTY5IDMxLjk4NTQgOC43NzY3NSAzMi4yNzY0QzkuMDY3ODIgMzIuNTY3NSA5LjQyMjY1IDMyLjc4NjggOS44MTMxNCAzMi45MTdDMTAuMjAzNiAzMy4wNDcyIDEwLjYxOTEgMzMuMDg0NyAxMS4wMjY2IDMzLjAyNjZIMjcuMDI2NkMyNy40MzQxIDMzLjA4NDcgMjcuODQ5NSAzMy4wNDcyIDI4LjI0IDMyLjkxN0MyOC42MzA1IDMyLjc4NjggMjguOTg1NCAzMi41Njc1IDI5LjI3NjQgMzIuMjc2NEMyOS41Njc1IDMxLjk4NTQgMjkuNzg2OCAzMS42MzA1IDI5LjkxNyAzMS4yNEMzMC4wNDcyIDMwLjg0OTUgMzAuMDg0NyAzMC40MzQxIDMwLjAyNjYgMzAuMDI2NlYxNi4wMjY2Wk0zMi4wMjY2IDE5LjM3NjZWMjYuNzc2NkwzNi41NzY2IDI5LjQyNjZDMzYuODQxIDI5LjYwOTkgMzcuMTI2NCAyOS43NjA5IDM3LjQyNjYgMjkuODc2NkMzNy42NjM3IDI5Ljk3NzMgMzcuOTE5IDMwLjAyODQgMzguMTc2NiAzMC4wMjY2QzM4LjQzMDQgMjkuOTk3OSAzOC42ODEzIDI5Ljk0NzcgMzguOTI2NiAyOS44NzY2QzM5LjI4NTUgMjkuNzI4OCAzOS41ODY3IDI5LjQ2ODYgMzkuNzg1MSAyOS4xMzVDMzkuOTgzNCAyOC44MDE0IDQwLjA2ODIgMjguNDEyNSA0MC4wMjY2IDI4LjAyNjZWMTguMDI2NkM0MC4wNjgyIDE3LjY0MDcgMzkuOTgzNCAxNy4yNTE4IDM5Ljc4NTEgMTYuOTE4MkMzOS41ODY3IDE2LjU4NDYgMzkuMjg1NSAxNi4zMjQ0IDM4LjkyNjYgMTYuMTc2NkMzOC42ODEzIDE2LjEwNTQgMzguNDMwNCAxNi4wNTUzIDM4LjE3NjYgMTYuMDI2NkMzNy45MTkgMTYuMDI0OCAzNy42NjM3IDE2LjA3NTggMzcuNDI2NiAxNi4xNzY2QzM3LjEyNjQgMTYuMjkyMyAzNi44NDEgMTYuNDQzMyAzNi41NzY2IDE2LjYyNjZMMzMuMDI2NiAxOC43MjY2VjE4Ljc3NjZMMzIuMDI2NiAxOS4zNzY2WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0yMS44NTU1IDI3LjI2ODVMMTkuMDI2OSAyNC40NDA2TDE2LjE5ODcgMjcuMjY4NUMxNi4xMDU5IDI3LjM2MTUgMTUuOTk1NCAyNy40MzUzIDE1Ljg3NCAyNy40ODU2QzE1Ljc1MjYgMjcuNTM1OSAxNS42MjI2IDI3LjU2MTggMTUuNDkxMiAyNy41NjE4QzE1LjM1OTggMjcuNTYxOCAxNS4yMjk4IDI3LjUzNTkgMTUuMTA4NCAyNy40ODU2QzE0Ljk4NyAyNy40MzUzIDE0Ljg3NjYgMjcuMzYxNSAxNC43ODM3IDI3LjI2ODVDMTQuNTk2MiAyNy4wODEgMTQuNDkwNyAyNi44MjY3IDE0LjQ5MDcgMjYuNTYxNUMxNC40OTA3IDI2LjI5NjQgMTQuNTk2MiAyNi4wNDIxIDE0Ljc4MzcgMjUuODU0NkwxNy42MTI4IDIzLjAyNTVMMTQuNzgzNyAyMC4xOTc1QzE0LjY5MDcgMjAuMTA0NyAxNC42MTY3IDE5Ljk5NDQgMTQuNTY2NCAxOS44NzNDMTQuNTE2MSAxOS43NTE2IDE0LjQ5MDIgMTkuNjIxNSAxNC40OTAyIDE5LjQ5MDFDMTQuNDkwMiAxOS4zNTg2IDE0LjUxNjEgMTkuMjI4NSAxNC41NjY0IDE5LjEwNzFDMTQuNjE2NyAxOC45ODU3IDE0LjY5MDcgMTguODc1NCAxNC43ODM3IDE4Ljc4MjVDMTQuODc2NiAxOC42ODk2IDE0Ljk4NyAxOC42MTU4IDE1LjEwODQgMTguNTY1NUMxNS4yMjk4IDE4LjUxNTIgMTUuMzU5OCAxOC40ODkzIDE1LjQ5MTIgMTguNDg5M0MxNS42MjI2IDE4LjQ4OTMgMTUuNzUyNiAxOC41MTUyIDE1Ljg3NCAxOC41NjU1QzE1Ljk5NTQgMTguNjE1OCAxNi4xMDU5IDE4LjY4OTYgMTYuMTk4NyAxOC43ODI1TDE5LjAyNjkgMjEuNjExNUwyMS44NTU1IDE4Ljc4MjVDMjIuMDQzIDE4LjU5NTEgMjIuMjk3MyAxOC40ODk3IDIyLjU2MjUgMTguNDg5N0MyMi44Mjc3IDE4LjQ4OTcgMjMuMDgyIDE4LjU5NTEgMjMuMjY5NSAxOC43ODI1QzIzLjM2MjUgMTguODc1NCAyMy40MzY1IDE4Ljk4NTcgMjMuNDg2OCAxOS4xMDcxQzIzLjUzNzEgMTkuMjI4NSAyMy41NjMgMTkuMzU4NiAyMy41NjMgMTkuNDkwMUMyMy41NjMgMTkuNjIxNSAyMy41MzcxIDE5Ljc1MTYgMjMuNDg2OCAxOS44NzNDMjMuNDM2NSAxOS45OTQ0IDIzLjM2MjUgMjAuMTA0NyAyMy4yNjk1IDIwLjE5NzVMMjAuNDQxNCAyMy4wMjU1TDIzLjI2OTUgMjUuODU0NkMyMy40NTcgMjYuMDQyMSAyMy41NjI1IDI2LjI5NjQgMjMuNTYyNSAyNi41NjE1QzIzLjU2MjUgMjYuODI2NyAyMy40NTcgMjcuMDgxIDIzLjI2OTUgMjcuMjY4NUMyMy4wODIgMjcuNDU2MSAyMi44Mjc3IDI3LjU2MTUgMjIuNTYyNSAyNy41NjE1QzIyLjI5NzMgMjcuNTYxNSAyMi4wNDMgMjcuNDU2MSAyMS44NTU1IDI3LjI2ODVaIiBmaWxsPSIjRkYwMDAwIi8+DQo8L3N2Zz4NCg==");

}),
95867: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41IiBmaWxsPSIjRkY1RTAwIi8+DQo8cGF0aCBkPSJNMjguNjM4NyAxMi4xOTQ2QzI4LjU3NjYgMTIuMTI2NCAyOC41MDE0IDEyLjA3MTYgMjguNDE3NSAxMi4wMzM0QzI4LjMzMzYgMTEuOTk1MyAyOC4yNDI4IDExLjk3NDYgMjguMTUwNiAxMS45NzI3SDE1Ljg2MDRDMTUuNjEzNCAxMS45NzY4IDE1LjM3NjUgMTIuMDcxNSAxNS4xOTQ4IDEyLjIzODlDMTUuMDU0MiAxMi4zOTg0IDE0Ljk3NTUgMTIuNjAzMSAxNC45NzMgMTIuODE1N1YzNi4yNDI2QzE0Ljk2ODcgMzYuMzQ4OCAxNC45ODYyIDM2LjQ1NDcgMTUuMDI0NCAzNi41NTM5QzE1LjA2MjUgMzYuNjUzMSAxNS4xMjA1IDM2Ljc0MzQgMTUuMTk0OCAzNi44MTk0QzE1LjI3OSAzNi45MTM1IDE1LjM4MTQgMzYuOTg5NiAxNS40OTU4IDM3LjA0M0MxNS42MTAyIDM3LjA5NjMgMTUuNzM0MiAzNy4xMjU5IDE1Ljg2MDQgMzcuMTNIMjguMTUwNkMyOC4yNDI4IDM3LjEyODEgMjguMzMzNiAzNy4xMDc0IDI4LjQxNzUgMzcuMDY5M0MyOC41MDE0IDM3LjAzMTEgMjguNTc2NiAzNi45NzYzIDI4LjYzODcgMzYuOTA4MUwyOC43Mjc0IDM2LjgxOTRDMjguODEzMiAzNi43NTAzIDI4Ljg4MTkgMzYuNjYyMiAyOC45MjgxIDM2LjU2MjJDMjguOTc0MiAzNi40NjIxIDI4Ljk5NjcgMzYuMzUyNyAyOC45OTM2IDM2LjI0MjZWMTIuODE1N0MyOC45OTA3IDEyLjcwNjYgMjguOTY1NSAxMi41OTkyIDI4LjkxOTggMTIuNUMyOC44NzQgMTIuNDAwOCAyOC44MDg2IDEyLjMxMiAyOC43Mjc0IDEyLjIzODlDMjguNzE2MyAxMi4yMjYgMjguNzAyOCAxMi4yMTU0IDI4LjY4NzUgMTIuMjA3OEMyOC42NzIzIDEyLjIwMDIgMjguNjU1NyAxMi4xOTU3IDI4LjYzODcgMTIuMTk0NlpNMTYuNzkyMSAyNC41MjkyQzE2Ljc4OTEgMjQuNDA2IDE2LjgxMTEgMjQuMjgzNSAxNi44NTY5IDI0LjE2OUMxNi45MDI2IDI0LjA1NDYgMTYuOTcxMSAyMy45NTA3IDE3LjA1ODMgMjMuODYzNUMxNy4xNDU0IDIzLjc3NjQgMTcuMjQ5MyAyMy43MDc5IDE3LjM2MzcgMjMuNjYyMUMxNy40NzgyIDIzLjYxNjQgMTcuNjAwNyAyMy41OTQ0IDE3LjcyMzkgMjMuNTk3NEMxNy44NDcxIDIzLjU5NCAxNy45Njk3IDIzLjYxNTkgMTguMDg0MiAyMy42NjE3QzE4LjE5ODYgMjMuNzA3NSAxOC4zMDI1IDIzLjc3NjIgMTguMzg5NCAyMy44NjM2QzE4LjU1NjggMjQuMDQ1MyAxOC42NTE2IDI0LjI4MjIgMTguNjU1NiAyNC41MjkyQzE4LjY1ODcgMjQuNjUyNCAxOC42MzY3IDI0Ljc3NDkgMTguNTkwOSAyNC44ODkzQzE4LjU0NTIgMjUuMDAzNyAxOC40NzY2IDI1LjEwNzcgMTguMzg5NSAyNS4xOTQ4QzE4LjMwMjQgMjUuMjgxOSAxOC4xOTg0IDI1LjM1MDQgMTguMDg0IDI1LjM5NjJDMTcuOTY5NiAyNS40NDE5IDE3Ljg0NzEgMjUuNDY0IDE3LjcyMzkgMjUuNDYwOUMxNy40NzY5IDI1LjQ1NjkgMTcuMjQgMjUuMzYyMSAxNy4wNTgzIDI1LjE5NDdDMTYuOTcwOSAyNS4xMDc4IDE2LjkwMjIgMjUuMDAzOSAxNi44NTY0IDI0Ljg4OTVDMTYuODEwNiAyNC43NzUgMTYuNzg4NyAyNC42NTI0IDE2Ljc5MjEgMjQuNTI5MlpNMzEuOTY2MyAxMS4zNTE2QzMxLjk2ODggMTEuMDUwMSAzMS45MDY4IDEwLjc1MTYgMzEuNzg0MyAxMC40NzYxQzMxLjY2MTkgMTAuMjAwNiAzMS40ODE5IDkuOTU0NDUgMzEuMjU2NCA5Ljc1NDI3QzMxLjA0NzQgOS41MjQ4OSAzMC43OTQzIDkuMzM5OTEgMzAuNTEyMyA5LjIxMDMzQzMwLjIzMDIgOS4wODA3NSAyOS45MjUgOS4wMDkyMiAyOS42MTQ4IDlIMTQuMzUxOEMxMy43MTM1IDkuMDI0MDYgMTMuMTA5MiA5LjI5NDM5IDEyLjY2NTggOS43NTQyN0MxMi40NTE3IDkuOTYwOTQgMTIuMjgyMSAxMC4yMDkzIDEyLjE2NzcgMTAuNDg0QzEyLjA1MzIgMTAuNzU4NyAxMS45OTYyIDExLjA1NCAxMi4wMDAzIDExLjM1MTZWMzYuMjQyNkMxMS45OTcyIDM2LjM1MjcgMTIuMDE5NyAzNi40NjIxIDEyLjA2NTggMzYuNTYyMkMxMi4xMTIgMzYuNjYyMiAxMi4xODA3IDM2Ljc1MDMgMTIuMjY2NSAzNi44MTk0QzEyLjM0IDM2LjkxNDYgMTIuNDM0IDM2Ljk5MiAxMi41NDE1IDM3LjA0NTdDMTIuNjQ5MSAzNy4wOTk1IDEyLjc2NzQgMzcuMTI4MyAxMi44ODc3IDM3LjEzSDEyLjk3NjRDMTMuMDkwOSAzNy4xMzEgMTMuMjAzOCAzNy4xMDMxIDEzLjMwNDcgMzcuMDQ4OEMxMy40MDU1IDM2Ljk5NDUgMTMuNDkxIDM2LjkxNTYgMTMuNTUzMiAzNi44MTk0QzEzLjY0OTQgMzYuNzU3MiAxMy43MjgzIDM2LjY3MTcgMTMuNzgyNiAzNi41NzA5QzEzLjgzNjkgMzYuNDcgMTMuODY0OCAzNi4zNTcxIDEzLjg2MzggMzYuMjQyNlYxMi4yODMzQzEzLjg2MDMgMTIuMTAyIDEzLjg5NCAxMS45MjE5IDEzLjk2MjYgMTEuNzU0QzE0LjAzMTMgMTEuNTg2MiAxNC4xMzM2IDExLjQzNDEgMTQuMjYzMSAxMS4zMDcyQzE0LjM5MzkgMTEuMTY3NSAxNC41NTIgMTEuMDU2MSAxNC43Mjc1IDEwLjk3OThDMTQuOTAzIDEwLjkwMzUgMTUuMDkyMiAxMC44NjM5IDE1LjI4MzYgMTAuODYzNUgyOC42ODNDMjguODY4MyAxMC44NjE0IDI5LjA1MTggMTAuOSAyOS4yMjA1IDEwLjk3NjdDMjkuMzg5MiAxMS4wNTM0IDI5LjUzODkgMTEuMTY2MiAyOS42NTkyIDExLjMwNzJDMjkuODAwMiAxMS40Mjc0IDI5LjkxMyAxMS41NzcyIDI5Ljk4OTcgMTEuNzQ1OUMzMC4wNjYzIDExLjkxNDUgMzAuMTA1IDEyLjA5OCAzMC4xMDI4IDEyLjI4MzNWMzYuMjQyNkMzMC4wOTk4IDM2LjM1MjcgMzAuMTIyMiAzNi40NjIxIDMwLjE2ODQgMzYuNTYyMkMzMC4yMTQ2IDM2LjY2MjIgMzAuMjgzMyAzNi43NTAzIDMwLjM2OTEgMzYuODE5NEMzMC40NDI1IDM2LjkxNDYgMzAuNTM2NiAzNi45OTIgMzAuNjQ0MSAzNy4wNDU3QzMwLjc1MTcgMzcuMDk5NSAzMC44NyAzNy4xMjgzIDMwLjk5MDIgMzcuMTNIMzEuMDc5QzMxLjE5OTIgMzcuMTI4MyAzMS4zMTc1IDM3LjA5OTUgMzEuNDI1MSAzNy4wNDU3QzMxLjUzMjYgMzYuOTkyIDMxLjYyNjcgMzYuOTE0NiAzMS43MDAxIDM2LjgxOTRDMzEuNzg1OSAzNi43NTAzIDMxLjg1NDYgMzYuNjYyMiAzMS45MDA4IDM2LjU2MjJDMzEuOTQ3IDM2LjQ2MjEgMzEuOTY5NCAzNi4zNTI3IDMxLjk2NjMgMzYuMjQyNlYxMS4zNTE2WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K");

}),
30129: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA1MSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHk9IjI0IiB3aWR0aD0iMjQiIGhlaWdodD0iNTEiIHJ4PSIxMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDAgMjQpIiBmaWxsPSIjM0YzRTNCIi8+DQo8cGF0aCBkPSJNMTcuMTU1MyAxMi42OTE4TDkuMTg2NTIgMTIuNjkxOEw5LjE4NjUyIDExLjMzOTVMMTcuMTU1MyAxMS4zMzk1TDE3LjE1NTMgMTIuNjkxOFpNMTMuODQ3IDE2TDEyLjQ5NDggMTZMMTIuNDk0OCA4LjAzMTI1TDEzLjg0NyA4LjAzMTI1TDEzLjg0NyAxNloiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNNDEgMTEuNVYxMi41TDMzIDEyLjVWMTEuNUw0MSAxMS41WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K");

}),
44678: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAyNCA1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSI1MSIgcng9IjExIiBmaWxsPSIjM0YzRTNCIi8+DQo8cGF0aCBkPSJNMTEuMzA4MiAxNy4xNTUzVjkuMTg2NTJIMTIuNjYwNVYxNy4xNTUzSDExLjMwODJaTTggMTMuODQ3VjEyLjQ5NDhIMTUuOTY4OFYxMy44NDdIOFoiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMTYgMzlWNDBIOFYzOUgxNloiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==");

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