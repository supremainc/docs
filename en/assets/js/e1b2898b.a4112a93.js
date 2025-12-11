"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["79583"], {
55008: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_video_mdx_e1b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-monitoring-video-mdx-e1b.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_video_mdx_e1b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-video","title":"Monitor Video","description":"This document provides step-by-step instructions for the main operations of the video monitoring feature, including adding video, resizing, repositioning, and checking alarms.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-video.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-video","permalink":"/en/platform/biostar_x/monitoring-video","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-video.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-video","title":"Monitor Video","description":"This document provides step-by-step instructions for the main operations of the video monitoring feature, including adding video, resizing, repositioning, and checking alarms.","keywords":["Monitoring","Video"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Monitor Device","permalink":"/en/platform/biostar_x/monitoring-device"},"next":{"title":"Monitor Event","permalink":"/en/platform/biostar_x/monitoring-event"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-video.mdx


const frontMatter = {
	id: 'monitoring-video',
	title: 'Monitor Video',
	description: 'This document provides step-by-step instructions for the main operations of the video monitoring feature, including adding video, resizing, repositioning, and checking alarms.',
	keywords: [
		'Monitoring',
		'Video'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*In this case, add a tab to the screen and click <Cmd sid='arena.tree.contextMenu.openVideo' /> again.*/
/*크기를 늘린 영상은 이동되지 않습니다. ???*/


const toc = [{
  "value": "Play video",
  "id": "play-video",
  "level": 2
}, {
  "value": "Control video",
  "id": "control-video",
  "level": 2
}, {
  "value": "Door control tool",
  "id": "door-control-tool",
  "level": 2
}, {
  "value": "Check video alarm",
  "id": "check-the-video-alarm",
  "level": 2
}, {
  "value": "Check video log",
  "id": "check-video-log",
  "level": 2
}, {
  "value": "Set video tile layout",
  "id": "video-tile-layout-setting",
  "level": 2
}, {
  "value": "Change video size",
  "id": "change-video-size",
  "level": 3
}, {
  "value": "Enlarge video size",
  "id": "video-size-enlargement",
  "level": 3
}, {
  "value": "Change video location",
  "id": "changing-the-video-location",
  "level": 3
}, {
  "value": "Full screen view",
  "id": "full-screen",
  "level": 2
}, {
  "value": "Close video",
  "id": "close-the-video",
  "level": 2
}, {
  "value": "Close all videos",
  "id": "close-all-video",
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
  }, {Calloutlists, Cmd, Column, Columns, IcClose, IcFullscreen, IcMoreB, IcRestorscreen, IcVidLog, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcFullscreen) _missingMdxReference("IcFullscreen", true);
  if (!IcMoreB) _missingMdxReference("IcMoreB", true);
  if (!IcRestorscreen) _missingMdxReference("IcRestorscreen", true);
  if (!IcVidLog) _missingMdxReference("IcVidLog", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "You can monitor and control camera videos linked to doors, areas, and devices in real-time through the video monitoring feature. This document provides guidance on how to utilize video tiles to add camera videos, resize, reposition, view in full screen, and perform various tasks. Additionally, it supports rapid response to security situations through management features such as checking and clearing alarm statuses."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Video Tile"
            }), " is the area in the center of the screen where the camera video appears. It is an interface component that allows simultaneous placement and monitoring of multiple camera videos. Users can resize or reposition the video in the video tile and close or switch to full screen as needed."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-monitoring-video-tiles.png",
            width: "70%"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For information on how to integrate with VMS and add and manage cameras, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If a load error occurs when playing back recordings from VMS, install the certificate on the VMS server, and install the VMS server's certificate on the client PC. For more information, refer to the followings."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-video-integration#install-vms-certification",
                  children: "Install the certificate on the VMS server"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-video-integration#video-troubleshooting",
                  children: "Install the VMS server certificate on the client PC"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Video monitoring is available with additional options for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Advanced"
            }), " licenses and higher. For more information on licensing policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "play-video",
      children: "Play video"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can add camera videos to the video tile for monitoring. The video tile is located in the center of the screen and allows for simultaneous monitoring of multiple camera videos."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the camera device you wish to view from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.map.title"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.device.title"
          }), " tabs in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Right-click."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openVideo"
          }), " in the popup menu."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The selected camera video can be placed in the video tile in the center of the screen."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-control-open-video.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can also select cameras from the list in the sidebar and drag and drop them into the video tile area."
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/monitoring-door-control-open-video-drag-drop.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Video tiles are added in order from the top left of the screen. If there is no space to add more, an error message appears. "
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-video",
      children: "Control video"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The videos placed in the video tile are played in real-time by default. You can adjust the playback of the video or view recordings from the past using the playback tools."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-player.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "This is the name of the camera device."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This is a button that allows you to play the video in full screen (", (0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-fullscreen.svg",
              ico: true,
              alone: true
            }), ") or exclude it from the video tile (", (0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-close.svg",
              ico: true,
              alone: true
            }), ")."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "This is a slider that allows you to adjust the playback position of the video. Dragging the slider allows you to view past video."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To play or pause the video, click the ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-play.svg",
              ico: true,
              alone: true
            }), " or ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-pause.svg",
              ico: true,
              alone: true
            }), " button."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "This icon indicates that the current video is being played in real-time. To switch back to live video when playing back video from the past, click this icon."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-control-tool",
      children: "Door control tool"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After adding a video, use the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.map.doorControl"
      }), " tool for additional actions. Selecting the camera linked to the door from the video tile activates the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.map.doorControl"
      }), " tool that can control the door. You can use functions such as open or lock the door, unlock, and disable the alarm."]
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
            }), " tool can be used when there is nothing open in the right panel. If the detailed information is open in the right panel, use it while it is closed."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This feature requires a camera to be linked to the door. For information on linking doors and cameras, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about the features available in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.map.doorControl"
            }), " tool, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "control-door",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-the-video-alarm",
      children: "Check video alarm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When an alarm state is triggered for one of the doors linked to the camera, an alarm icon appears on the video. All alarms linked to the door must be cleared for the alarm icon to disappear."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-alarm.png",
      alt: "alarm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To clear the door alarm, right-click on the door in the list and click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), " in the popup menu. Alternatively, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.map.doorControl"
      }), " tool, then click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-clear-alarm.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A success or failure message will appear at the top of the screen."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-clear-alarm-success.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information about the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.eventTable.event"
        }), " section at the bottom of the screen, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "monitoring-event",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-video-log",
      children: "Check video log"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a specific event occurs at a door set by a rule, the corresponding event item in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " section list will display a video log (", (0,jsx_runtime.jsx)(IcVidLog, {}), ") icon. Clicking on the event item with the video log icon will show detailed information on the right side of the screen, allowing you to view video from the time the specific event occurred. You can check the video of the time a specific event occurred."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-event-video-log.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The video log icon is displayed only when a camera is linked to the door. For information on linking cameras and doors, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The first connected camera is prioritized for playback based on event setting rules. To view the video on a larger screen, double-click on it."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can link up to 4 cameras to a door and can click the camera button at the bottom of the video to play the desired camera's video. If only one camera is linked, the camera button will not be displayed."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.eventTable.event"
            }), " section at the bottom of the screen, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-event",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "video-tile-layout-setting",
      children: "Set video tile layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can resize the video placed in the video tile or reposition it as desired. Adjust the size and position of the video based on its importance for monitoring."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "change-video-size",
      children: "Change video size"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click on the video whose size you want to change to activate the frame of the selected video."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-adjust-size-01.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Hover the mouse cursor over the edges of the frame to change the cursor shape to one that can resize."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click on a corner and drag to the desired size."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-adjust-size-02.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can resize the video proportionally to the size of the placed tile. Conversely, you can also reduce the size of the video."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-adjust-size-03.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "video-size-enlargement",
      children: "Enlarge video size"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To enlarge the video to the entire size of the video tile, double-click on the video. The video will expand to the size of the video tile."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/monitoring-video-extend.gif",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "changing-the-video-location",
      children: "Change video location"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Click on the video to move and drag it to the desired location. You can change the position of the selected video."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-move-position.png",
      alone: true
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "full-screen",
      children: "Full screen view"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-fullscreen.png",
          alone: true
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l10",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["To view the video in full screen, click ", (0,jsx_runtime.jsx)(IcFullscreen, {}), " at the upper right corner of the video."]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To exit full screen, click the ", (0,jsx_runtime.jsx)(IcRestorscreen, {}), " button at the top right of the screen. Or press the ", (0,jsx_runtime.jsx)("kbd", {
            children: "ESC"
          }), " key on the keyboard."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "close-the-video",
      children: "Close video"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-close.png",
          alone: true
        })
      }), (0,jsx_runtime.jsx)(Column, {
        className: "padding--l10",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To close the video placed in the video tile, click ", (0,jsx_runtime.jsx)(IcClose, {}), " at the upper right of the video."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "close-all-video",
      children: "Close all videos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To close all videos placed in the video tile, click ", (0,jsx_runtime.jsx)(IcMoreB, {}), " at the upper right corner of the screen. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.monitoring.contextMenu.closeAll"
      }), " in the popup menu."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-video-close-all.png"
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