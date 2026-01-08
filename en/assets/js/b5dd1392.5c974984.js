"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["17378"], {
44785: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_ip_camera_support_and_configuration_mdx_b5d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-ip-camera-support-and-configuration-mdx-b5d.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_ip_camera_support_and_configuration_mdx_b5d_namespaceObject = JSON.parse('{"id":"platform/biostar_air/ip-camera-support-and-configuration","title":"IP Camera Support and Settings","description":"Set up ONVIF-compatible IP cameras in BioStar Air, configure live and recorded video streams, and integrate camera footage with access events.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/ip-camera-support-and-configuration.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/ip-camera-support-and-configuration","permalink":"/docs/en/platform/biostar_air/ip-camera-support-and-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/ip-camera-support-and-configuration.mdx","tags":[],"version":"current","frontMatter":{"id":"ip-camera-support-and-configuration","title":"IP Camera Support and Settings","description":"Set up ONVIF-compatible IP cameras in BioStar Air, configure live and recorded video streams, and integrate camera footage with access events.","keywords":["IP camera","BioStar Air","camera configuration"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Wire and Configure E200 QR Scanner","permalink":"/docs/en/platform/biostar_air/e200-qr-scanner"},"next":{"title":"BioStar Air Partner Portal","permalink":"/docs/en/platform/biostar_air/intro-to-partner-portal"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/ip-camera-support-and-configuration.mdx


const frontMatter = {
	id: 'ip-camera-support-and-configuration',
	title: 'IP Camera Support and Settings',
	description: 'Set up ONVIF-compatible IP cameras in BioStar Air, configure live and recorded video streams, and integrate camera footage with access events.',
	keywords: [
		'IP camera',
		'BioStar Air',
		'camera configuration'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Compatibility",
  "id": "compatibility",
  "level": 2
}, {
  "value": "Functionality overview",
  "id": "functionality",
  "level": 2
}, {
  "value": "Instructions",
  "id": "instructions",
  "level": 2
}, {
  "value": "Connect IP cameras",
  "id": "connect-ip-cameras",
  "level": 3
}, {
  "value": "Log in to BioStar Air",
  "id": "log-in-to-biostar-air",
  "level": 3
}, {
  "value": "Enable video management",
  "id": "enable-video-management",
  "level": 3
}, {
  "value": "Add camera",
  "id": "add-camera",
  "level": 3
}, {
  "value": "Link to a door",
  "id": "link-to-a-door",
  "level": 3
}, {
  "value": "View live camera video",
  "id": "view-live-camera-video",
  "level": 3
}, {
  "value": "View recorded camera video",
  "id": "view-recorded-camera-video",
  "level": 3
}, {
  "value": "View event video",
  "id": "view-event-video",
  "level": 3
}, {
  "value": "Tested and verified devices list",
  "id": "tested-devices",
  "level": 2
}, {
  "value": "Enable ONVIF on an IP camera",
  "id": "enable-onvif-on-an-ip-camera",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
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
  }, {Cmd, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air automatically detects IP cameras connected to the same network as Airfob Edge. Because the cameras use the device as a gateway, a network video recorder (NVR) is not required. Instead, the cameras use the built-in SD card storage."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With an Airfob Edge or XPass 2 installed, BioStar Air can display the following concurrent live view streams."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Up to two cameras at Full HD resolution (1080p)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Up to four cameras at HD resolution (720p)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These specifications double when XStation 2 is used."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If recorded video does not play after registering the camera in BioStar Air, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "video-troubleshooting",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compatibility",
      children: "Compatibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Onvif profiles"
          }), ": The IP camera must be compatible with Onvif profile S or G."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Onvif profile S"
              }), ": Live video streaming"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Onvif profile G"
              }), ": Recorded video stored on the SD card"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SD card"
          }), ": The IP camera must have a built-in SD card so that recorded footage can be played back later."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Use SanDisk microSDXC Class10 Max Endurance 256 GB or 512 GB."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Encoding"
          }), ": The camera must support H.264 (AVC) and it must be set as the active codec. BioStar Air currently does not support H.265."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Recommended brands"
          }), ": HanwhaVision, Hikvision, and Dahua cameras are highly compatible. Compatibility with other brands may vary depending on Onvif profile compliance. For more information on the tested and verified devices list, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#tested-devices",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Contact the service team to test other camera brands."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functionality",
      children: "Functionality overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Perform the following actions in the BioStar Air portal or mobile app."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "View live camera feeds."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "View recorded camera footage."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Access camera footage related to access events."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "instructions",
      children: "Instructions"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "connect-ip-cameras",
          children: "Connect IP cameras"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Network connection"
              }), ": Ensure that the IP camera is on the same network as the Airfob Edge or Airfob Edge Ultimate."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Enable Onvif"
              }), ": Make sure Onvif is enabled on the camera."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Device registration"
              }), ": Make sure the device is registered in the BioStar Air portal."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "log-in-to-biostar-air",
          children: "Log in to BioStar Air"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Master"
          }), " administrators can change site settings such as enabling Video Management. Log in to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com/",
            children: "BioStar Air portal"
          }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "master"
          }), " privileges."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "enable-video-management",
          children: "Enable video management"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "site_submenu",
                product: "air"
              }), " in the left sidebar."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_qr_reader_tab",
                product: "air"
              }), " tab."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Enable ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_video_management",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-addtional-feature-video-mangement.png"
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Only ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "master"
            }), "-level administrators can enable this feature."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "add-camera",
          children: "Add camera"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "cameras_groups_submenu",
                product: "air"
              }), " in the left sidebar."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-camera.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "cameras_list_title_add_button",
                product: "air"
              }), " at the top right of the screen."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "cameras_templ_title_modal",
                product: "air"
              }), " window appears, select the device that will act as the gateway."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-camera-add.png",
              caption: true
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Set the following information to add the camera."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "cameras_add_camera_input_name",
                    product: "air"
                  }), ": Enter the camera name."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "recent_action_device_column",
                    product: "air"
                  }), ": Select a name to identify the camera."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "cameras_add_camera_input_id",
                    product: "air"
                  }), ": Enter the ID to connect to the camera."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "cameras_add_camera_input_pass",
                    product: "air"
                  }), ": Enter the password to connect to the camera."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " to add the selected camera."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "The device must run firmware version 2.5.1 or later and be on the same network as the camera."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStar Air automatically discovers cameras on the network."
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "link-to-a-door",
          children: "Link to a door"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Link the added camera to a door to associate video with access events."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_submenu",
                product: "air"
              }), " in the left sidebar."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Click the door in the list to assign a camera."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "edit_door.title",
                product: "air"
              }), " panel appears, scroll to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_auxiliary_device",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select the camera you added from ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column6",
                product: "air"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-door-assign-camera.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " to save the changes."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "view-live-camera-video",
          children: "View live camera video"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["View live video from the added cameras. Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "realtime_video_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-realtime-camera.png",
          caption: true
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "View up to two Full HD (1080p) live streams per installed Airfob Edge."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Add more devices or reduce camera resolution to view more live streams."
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_menu",
                  product: "air"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "cameras_groups_submenu",
                  product: "air"
                }), " → Click camera in the list → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "cameras_edit_camera_name_profile",
                  product: "air"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "view-recorded-camera-video",
          children: "View recorded camera video"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["View recorded video streams. Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "recorded_video_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-recorded-camera.png",
          caption: true
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "view-event-video",
          children: "View event video"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          }), " in the left sidebar. Find an event log with an associated video clip and click play to watch it."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tested-devices",
      children: "Tested and verified devices list"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "No"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Manufacturer"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Model number"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Device type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Onvif profile"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Resolution"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hanwha Techwin"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "QNV-C8011R"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T, M"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2592x1944"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hanwha Techwin"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "QND-6022R"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hanwha Techwin"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MMI-600R"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HIKVISION"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DS-2CD2025FWD-I"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "5"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HIKVISION"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DS-2CD2166G2-I"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "3200×1800"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "6"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HIKVISION"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DS-2CD1121-I"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920x1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "7"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DHI-NVR2104HS-P-S3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NVR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "12MP"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "8"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IPC-HDBW3249E-AS-NI"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920×1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "9"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SD22204UEN-GN"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, G, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920×1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Dahua"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DH-IPC-HFW1230DT-STW-VN"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1920×1080"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "11"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Marruy"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IPC-A32E-L"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S, T"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2304×1296"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "12"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "TP-Link"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Tapo C210"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Camera"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2304×1296"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enable-onvif-on-an-ip-camera",
      children: "Enable ONVIF on an IP camera"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Open a web browser and enter the camera's IP address."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Authenticate with administrator credentials and log in."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configuration"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enable ONVIF or the open network video interface."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create an ONVIF-only user profile if necessary."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Save the settings and test the ONVIF connection in BioStar Air."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Firmware update"
            }), ": Update the camera and the device to the latest firmware."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Port forwarding"
            }), ": Configure port forwarding for ONVIF if required."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Third-party tools"
            }), ": Use ONVIF Device Manager to verify camera settings and functionality."]
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