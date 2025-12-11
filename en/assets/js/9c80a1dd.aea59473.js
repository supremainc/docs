"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["11094"], {
29093: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_biostation_3_release_notes_130_mdx_9c8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-biostation-3-release-notes-130-mdx-9c8.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_biostation_3_release_notes_130_mdx_9c8_namespaceObject = JSON.parse('{"id":"device/biostation_3/release-notes/130","title":"Firmware Version 1.3.0","description":"Release2024-06-28","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/biostation_3/release-notes/130.mdx","sourceDirName":"device/biostation_3/release-notes","slug":"/device/biostation_3/release-notes/130","permalink":"/en/device/biostation_3/release-notes/130","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/release-notes/130.mdx","tags":[],"version":"current","frontMatter":{"id":"130","title":"Firmware Version 1.3.0","isTranslationMissing":false},"sidebar":"biostation3","previous":{"title":"Firmware Version 1.3.1","permalink":"/en/device/biostation_3/release-notes/131"},"next":{"title":"Firmware Version 1.2.1","permalink":"/en/device/biostation_3/release-notes/121"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/biostation_3/release-notes/130.mdx


const frontMatter = {
	id: 130,
	title: 'Firmware Version 1.3.0',
	isTranslationMissing: false
};
const contentTitle = 'Firmware Version 1.3.0 (Build No. 1.3.0_240514)';

const assets = {

};



const toc = [{
  "value": "New Features and Improvements",
  "id": "new-features-and-improvements",
  "level": 2
}, {
  "value": "Bug Fixes",
  "id": "bug-fixes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "firmware-version-130-build-no-130_240514",
        children: "Firmware Version 1.3.0 (Build No. 1.3.0_240514)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release", (0,jsx_runtime.jsx)(Separator, {}), "2024-06-28"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-features-and-improvements",
      children: "New Features and Improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "XPass D2 new BLE (Bluetooth Low Energy) chip firmware (Build No. 1.7.0_220921) support."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The BLE chip parts of the hardware have been changed, and the firmware has been upgraded to be compatible with both the existing and new BLE chips."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Smart Card Layout"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to not recognize SEOS configuration cards as CSN for 1 minute after device booting."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Added event code for QR authentication."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Support for adding FeliCa card to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Smart Card Layout"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Extended the user expiration period to a maximum of '", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2037-12-31"
          }), "'."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Display Result from Controller"
          }), " feature for displaying authentication success or failure results from a 3rd party controller on the device screen when using ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Intelligent Slave"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ignore Repeated Signals Duration"
          }), " feature, which ignores repetitive authentication signals from the controller when the device is connected to a 3rd party controller via Wiegand."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Intercom"
          }), " screen UI."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SIP Server Transport"
          }), " feature, which selects the SIP transmission method when setting up the SIP server of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Intercom"
          }), " on the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports the feature of selecting the resolution of the video output from the device when using ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Intercom"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "RTSP"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Intercom Video Resolution"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "RTSP Video Resolution"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to get user update succeeded event log using the GetLogWithFilter function in the SDK."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Supports the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Auth Result Display Option"
          }), " that allows you to select how the user ID and name are displayed on the authentication result screen of the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved pop-up message displayed when authentication fails for users who set the second credential as a fingerprint in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Extended Private Auth Mode"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the maximum number of extension numbers that can be stored on the device is exceeded, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add Extension"
            }), " icon is still displayed. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["An issue occurs when authenticating with a face not wearing a mask on a device with the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mask Detection"
            }), " set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enabled (Soft)"
            }), " and the mask check method set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Check After Authentication"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "An authentication mode error occurs intermittently."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "The device freezes when facial authentication is continuous."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the Wireless AP power is turned off and the device is restarted, the wireless network does not automatically reconnect when the AP power is turned back on. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auth Mode"
            }), " is set to Card / QR Code and the mask check method is set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Check Before Authentication"
            }), " on the device, QR authentication intermittently fails after wearing a mask and authenticating. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If device settings are changed in BioStar 2 during an intercom call, card authentication fails after the call ends. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Authentication fails when authenticating with a DESFire AoC while the device is connected as a slave. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Relay"
            }), " is set in the device menu, the door does not open with a mobile card. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If a general user performs face authentication and checks the event log, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Menu Timeout"
            }), " elapses, and the device switches to a standby state, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "EVENT LOG"
            }), " screen appears at the next face authentication. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The authentication guide message was displayed incorrectly when pressing the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Arm/Disarm"
            }), " button on the home screen while setting the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intrusion Alarm Zone"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When network is repeatedly disconnected in an environment using a wireless network, RF card authentication will fail. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The user ID stored as a 32-character string is truncated to only 31 characters in a specific event log. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The device would not automatically reconnect to the previously connected wireless network when restarted while the network was connected as ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wireless"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the network is connected to a wireless LAN and then enters ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wireless"
            }), " again after changing to an ethernet connection, the wireless AP list is not displayed. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Infinite loading occurred while attempting to connect via ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wireless"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the network is connected to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wireless"
            }), ", switches to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ethernet"
            }), ", and then switches back to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wireless"
            }), ", it does not automatically reconnect to the previously connected wireless network. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Image Logs were not deleted when performing ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Factory Default"
            }), " on the device. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When a user with a 32-character user ID authenticates to the device while the device is not connected to the server, the authentication event log is not updated in BioStar 2 even after the device is reconnected to the server. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the number of fingerprints stored in the device exceeds the 1", ":N", " maximum, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finger"
            }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "User Usage"
            }), " count is displayed abnormally. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The Wi-Fi signal strength of the connected wireless network was displayed differently in the wireless LAN list and the WLAN icon on the home screen. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["On the home screen of a device with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auth Mode"
            }), " set to ID + Face/PIN, after entering the ID, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Input ID"
            }), " icon allows to enter PIN instead of changing the authentication process to the entered ID. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Deleted image logs from the device gets continuously uploaded to the server. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the device's ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Server"
            }), " setting gets inactive while the device is on the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Waiting Device"
            }), " list of BioStar 2, the device still appears in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Waiting Device"
            }), " list, and the BioStar 2 connect icon is displayed at the top of the device. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The facial authentication process continues to operate even after mask detection is completed on a device where the Wiegand device's ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Output Mode"
            }), " is set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bypass"
            }), " and the mask check mode is set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Check Only"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When enrolling a Visual Face by uploading a photo using the API, a blank area appears on the photo, and authentication fails intermittently. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When setting the face authentication operation mode on a device using the SDK's BS2_SetFaceConfig function, there is an issue where an infinite reboot occurs if an incorrect value is entered. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When creating a schedule with an invalid ID using the SDK, the device fails to boot properly. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the number of faces stored on the device exceeds the 1", ":N", " maximum, administrator login is possible via facial authentication. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When using ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Device ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "→"
              }), " Server"]
            }), " mode, the server IP address is reset if the connection to the DHCP server fails. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
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