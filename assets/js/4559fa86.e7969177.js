"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4527"], {
27555: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_ip_camera_support_and_configuration_mdx_455_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-ip-camera-support-and-configuration-mdx-455.json
var site_docs_platform_biostar_air_ip_camera_support_and_configuration_mdx_455_namespaceObject = JSON.parse('{"id":"platform/biostar_air/ip-camera-support-and-configuration","title":"IP Camera Support and Configuration","description":"Learn how to set up ONVIF-compatible IP cameras, configure live and recorded video streams, and integrate camera footage with access events in BioStar Air.","source":"@site/docs/platform/biostar_air/ip-camera-support-and-configuration.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/ip-camera-support-and-configuration","permalink":"/docs/platform/biostar_air/ip-camera-support-and-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/ip-camera-support-and-configuration.mdx","tags":[],"version":"current","frontMatter":{"id":"ip-camera-support-and-configuration","title":"IP Camera Support and Configuration","description":"Learn how to set up ONVIF-compatible IP cameras, configure live and recorded video streams, and integrate camera footage with access events in BioStar Air.","keywords":["IP Camera","BioStar Air","camera configuration"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Managing Sites with your Phone","permalink":"/docs/platform/biostar_air/managing-sites-with-phone"},"next":{"title":"Checking if a Camera Supports Recorded Video Playback","permalink":"/docs/platform/biostar_air/video-troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/ip-camera-support-and-configuration.mdx


const frontMatter = {
	id: 'ip-camera-support-and-configuration',
	title: 'IP Camera Support and Configuration',
	description: 'Learn how to set up ONVIF-compatible IP cameras, configure live and recorded video streams, and integrate camera footage with access events in BioStar Air.',
	keywords: [
		'IP Camera',
		'BioStar Air',
		'camera configuration'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Compatibility",
  "id": "compatibility",
  "level": 2
}, {
  "value": "Functionality",
  "id": "functionality",
  "level": 2
}, {
  "value": "Instructions",
  "id": "instructions",
  "level": 2
}, {
  "value": "Connect the IP Camera",
  "id": "connect-the-ip-camera",
  "level": 3
}, {
  "value": "Log into Airfob Pro",
  "id": "log-into-airfob-pro",
  "level": 3
}, {
  "value": "Enable Video Management",
  "id": "enable-video-management",
  "level": 3
}, {
  "value": "Add Cameras",
  "id": "add-cameras",
  "level": 3
}, {
  "value": "Associate Cameras with Doors",
  "id": "associate-cameras-with-doors",
  "level": 3
}, {
  "value": "View Live Camera Footage",
  "id": "view-live-camera-footage",
  "level": 3
}, {
  "value": "View Recorded Camera Footage",
  "id": "view-recorded-camera-footage",
  "level": 3
}, {
  "value": "View Event Footage",
  "id": "view-event-footage",
  "level": 3
}, {
  "value": "Explore Additional Settings",
  "id": "explore-additional-settings",
  "level": 3
}, {
  "value": "Tested &amp; Confirmed Devices",
  "id": "tested--confirmed-devices",
  "level": 2
}, {
  "value": "General Steps to Enable ONVIF on IP Cameras",
  "id": "general-steps-to-enable-onvif-on-ip-cameras",
  "level": 2
}, {
  "value": "Additional Tips",
  "id": "additional-tips",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Step, Steps} = _components;
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Airfob Pro can automatically detect IP cameras that are connected to the same network as an Airfob Edge Reader. The cameras use the reader as a gateway, eliminating the need for an NVR (Network Video Recorder). Instead, the cameras utilize the built-in SD card storage."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each Airfob Edge Reader or XPass 2 installed, BioStar Air can show simultaneous live view streams for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Up to 2 cameras at Full HD resolution (1080p)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Up to 4 cameras at HD resolution (720p)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These numbers double when using the XStation 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compatibility",
      children: "Compatibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Onvif Profiles"
          }), ": IP cameras must be compatible with Onvif profiles S and/or G."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Onvif Profile S"
              }), ": Streaming Live Video"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Onvif Profile G"
              }), ": Record Video to an SD Card"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SD Card"
          }), ": IP cameras should have an on-board SD card to record video for later playback. (We recommend SanDisk microSDXC Class10 Max Endurance 256GB or 512GB)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Encoding"
          }), ": Cameras must support H.264 (AVC) and it must be enabled as the active CODEC. Airfob Space does not currently support H.265."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Recommended Brands"
          }), ": We have excellent compatibility with Hanwha, Hikvision, and Dahua cameras. Compatibility with other brands may vary depending on their adherence to Onvif profiles."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Testing New Cameras"
          }), ": If you have other camera brands that you would like to test, our team can assist you through the process."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functionality",
      children: "Functionality"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the Airfob Pro app, you can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "View live camera feeds."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "View recorded camera feeds."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Access camera footage associated with access events."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "instructions",
      children: "Instructions"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "connect-the-ip-camera",
          children: "Connect the IP Camera"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Network Connection"
              }), ": Ensure that your IP camera is connected to the same network as an Airfob Edge Reader or Airfob Edge Reader Ultimate."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Enable Onvif"
              }), ": Ensure that Onvif is enabled on your cameras."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Reader Registration"
              }), ": Verify that the reader is registered to a site."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "log-into-airfob-pro",
          children: "Log into Airfob Pro"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Only ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Master Administrators"
          }), " can make changes to site settings, such as enabling Video Management. Make sure that you log in with Master privileges."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "enable-video-management",
          children: "Enable Video Management"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Navigate to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Site"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Additional features"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Video Management"
          }), " to turn on Video Management. (This can only be enabled by a Master level administrator.)"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "add-cameras",
          children: "Add Cameras"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device Management"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Cameras"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "+ Add Camera"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Select Device (Reader)"
              }), ": Select the reader that will act as a gateway. The reader should be running firmware version 2.5.1 or later and be on the same network as the camera."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Automatic Search"
              }), ": Airfob Pro will automatically search for cameras on your network."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Camera Registration"
              }), ": You may need to input an ID and password to register a camera."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "associate-cameras-with-doors",
          children: "Associate Cameras with Doors"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Door Management"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Registered Doors"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Assign Devices"
              }), ": Select a door, then in the Assign Devices section, select a camera. This links the camera to a door, allowing you to view relevant footage in event logs."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "view-live-camera-footage",
          children: "View Live Camera Footage"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Monitoring"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Real-Time Video"
              }), " to watch live video streams."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Simultaneous Streams"
              }), ": You can view up to 2 live Full HD (1080p) streams for each Airfob Edge Reader installed."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Additional Streams"
              }), ": To view more live streams, add more readers or reduce the camera resolution (", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device Management"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Cameras"
              }), " → Click on a Camera → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Profile"
              }), ")."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "view-recorded-camera-footage",
          children: "View Recorded Camera Footage"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Recorded Video"
          }), " to watch recorded video streams."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "view-event-footage",
          children: "View Event Footage"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Event Logs"
          }), ". Find an event log with an associated video clip and click the play button to view it."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "explore-additional-settings",
          children: "Explore Additional Settings"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "There are many other settings available for you to explore within the app. This guide is an interim reference until the official instruction manual is published."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tested--confirmed-devices",
      children: "Tested & Confirmed Devices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Manufacturer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Model No."
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Device Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Onvif Profiles"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "general-steps-to-enable-onvif-on-ip-cameras",
      children: "General Steps to Enable ONVIF on IP Cameras"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Log into the Camera’s Web Interface"
          }), ": Open a web browser, enter the camera’s IP address, and log in with admin credentials."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Navigate to Network or Configuration Settings"
          }), ": Find the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configuration"
          }), " section."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable ONVIF Protocol"
          }), ": Enable ONVIF or Open Network Video Interface."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Set up an ONVIF Profile or User"
          }), ": Create an ONVIF-specific user profile if required."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Save and Test Connectivity"
          }), ": Save the settings and test ONVIF connection in Airfob Space."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-tips",
      children: "Additional Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Firmware Updates"
          }), ": Keep your camera and readers updated to the latest firmware."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Port Forwarding"
          }), ": Configure port forwarding for ONVIF if needed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Third-Party Tools"
          }), ": Use ONVIF Device Manager to verify camera settings and functionality."]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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