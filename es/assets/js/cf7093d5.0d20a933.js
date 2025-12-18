"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["23805"], {
40466: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_biostation_3_release_notes_101_mdx_cf7_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-biostation-3-release-notes-101-mdx-cf7.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_biostation_3_release_notes_101_mdx_cf7_namespaceObject = JSON.parse('{"id":"device/biostation_3/release-notes/101","title":"Firmware Version 1.0.1","description":"Release2022-10-21","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/biostation_3/release-notes/101.mdx","sourceDirName":"device/biostation_3/release-notes","slug":"/device/biostation_3/release-notes/101","permalink":"/docs/es/device/biostation_3/release-notes/101","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/release-notes/101.mdx","tags":[],"version":"current","frontMatter":{"id":"101","title":"Firmware Version 1.0.1","isTranslationMissing":false},"sidebar":"biostation3","previous":{"title":"Firmware Version 1.0.2","permalink":"/docs/es/device/biostation_3/release-notes/102"},"next":{"title":"Firmware Version 1.0.0","permalink":"/docs/es/device/biostation_3/release-notes/100"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/biostation_3/release-notes/101.mdx


const frontMatter = {
	id: 101,
	title: 'Firmware Version 1.0.1',
	isTranslationMissing: false
};
const contentTitle = 'Firmware Version 1.0.1 (Build No. 1.0.1_221020)';

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
        id: "firmware-version-101-build-no-101_221020",
        children: "Firmware Version 1.0.1 (Build No. 1.0.1_221020)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release", (0,jsx_runtime.jsx)(Separator, {}), "2022-10-21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-features-and-improvements",
      children: "New Features and Improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved motion detection performance for low-light environments."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved Visual Face matching algorithm."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved all pop-up messages displayed on the device to operate according to the time set in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Message Timeout"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Fixed Korean and English strings in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "RTSP"
          }), " menu."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When upgrading resources or firmware from BioStar 2, the device could not check the progress of the upgrade because no information was displayed. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When synchronizing multiple users to a device in BioStar 2 and then restarting the device, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "User Usage"
            }), " on the device displays a different number of visual faces than the number of synchronized. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When entering the device detail page after adding a logo image to the device connected as a slave, an Invalid payload error occurs and the RS-485 get disconnected. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Hashkey Management"
            }), " is set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use"
            }), " in BioStar 2 and migration proceeds, all users are deleted from the device, but a delete notification pop-up is not displayed. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Device hangs intermittently and then restarts. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When entering the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wireless"
            }), ", the new SSID does not appear, but only the previously searched SSID appears. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When enrolling a visual face or card on a device using the BioStar 2, the scan screen is not visible and the screen saver state remains. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the call button on the main screen is pressed with only one extension number stored in the device, it does not connect directly. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edit User"
            }), ", if you select ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extended Private Auth Mode"
            }), " as ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ID"
            }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fingerprint"
            }), "/", (0,jsx_runtime.jsx)(_components.strong, {
              children: "PIN"
            }), " and press ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            }), ", the fingerprint icon is incorrectly displayed as a face icon in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extended Private Auth Mode"
            }), " list. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Authentication failure occurs when authenticating with AoC with private auth mode set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Card"
            }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Face"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the device is restarted via BioStar 2, only a notification sound plays and the restart pop-up message does not appear. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Firmware upgrade via USB restarts the device without a success or failure popup message. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In BioStar 2's ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T&A"
            }), " menu, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schedule"
            }), " display part is blank when creating a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T&A Code"
            }), " with a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schedule"
            }), " other than ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Always"
            }), " and selecting the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T&A Code"
            }), " on the device. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Memory usage incorrectly displayed in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DRAM Usage"
            }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory Info"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When entering the menu from a device connected as a slave, a normal menu touch sound plays instead of a warning sound. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When enrolling a visual face in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "USER"
            }), " menu in BioStar 2, when the scan waiting time exceeded while enrolling the 1st face and then scanning the 2nd face, the face enrolled in the 1st appears. ", (0,jsx_runtime.jsx)(Badge, {
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
            children: ["Device hangs intermittently when Wiegand ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Input/Output"
            }), " setting is set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Output"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Extension number gets stored in the phonebook while exceeding the maximum characters in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Display Name"
            }), " of the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intercom"
            }), " settings. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When entering the edit screen by selecting the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auth Mode"
            }), " set in the device's ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auth Mode"
            }), ", the touch sound does not play. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Device connected as a slave intermittently operates while disconnected. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["An error occurs when calling the extension number when the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intercom"
            }), " of the device is set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Not Use"
            }), " via BioStar 2 while the list of extension numbers is displayed by pressing the call button on the main screen of the device. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In the screen to set the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schedule"
            }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auth Mode"
            }), ", the already created schedule is shown as a duplicate. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the device is in the middle of ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Factory Default"
            }), " process, the device hangs while loading. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Language"
            }), " of the device is set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom"
            }), ", the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Voice Instruction"
            }), " menu part of ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sound"
            }), " displays as a blank. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time Zone"
            }), " of the master device connected via RS-485 is changed, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time Zone"
            }), " of the slave device does not change. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When authenticating with a mobile card set to NFC, authentication fails and the device restarts intermittently ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The correct message does not appear when an unenrolled card is scanned with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Filter"
            }), " set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Card"
            }), " in the user search ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The pop-up to set the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Filter"
            }), " on the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "EVENT LOG"
            }), " search screen does not disappear even after the time set in the device's ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Menu Timeout"
            }), " has elapsed. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Event log is not logged when ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time Zone"
            }), " is changed on the device. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When scanning ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Visual Face"
            }), " via BioStar 2 while the device is in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SETTINGS"
            }), ", the scan screen does not close on the device even after scanning is complete. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Baud Rate"
            }), " selection pop-up appears when touching an empty space at the bottom of the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ethernet"
            }), " screen. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When sending a user whose card is duplicated with another user from BioStar 2 to the device, the user is deleted from the device. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the firmware is upgraded for each device connected as master-slave, the slave device completes normally, but the master device hangs. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["RTSP connection termination event log is not logged and RTSP icon is not deleted even after setting ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RTSP"
            }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Not Use"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Does not restart on ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Restore Default"
            }), " due to setup error. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Date & Time"
            }), " not displayed correctly. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When adding a user, the backlight does not turn off when waiting without card input on the card scan screen. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Search does not work when searching by ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Start Time"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "End Time"
            }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "EVENT LOG"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["An incorrect schedule displays in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edit Auth Mode"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you scan a Wiegand format card that is not set when enrolling a card to a user and then scan a normal card, it will not be scanned. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The device retains the call screen even after the recipient terminates the call. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "WiFi MAC"
            }), " does not appear in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DASHBOARD"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Info"
            }), " for Wi-Fi supported models. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["On the scan card screen, the background allows touch and the face can get authenticated. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When enrolling a card in BioStar 2, after selecting ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Write Smart Card"
            }), ", the device restarts while waiting for scan. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["An issue occurs when upgrading the firmware of a slave device from BioStar 2 while the device is connected as Master-Slave. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Slave device disconnects and the firmware upgrade fails."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Master device restart fails."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            }), " button does not work when repeatedly searching the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "EVENT LOG"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Intermittently, the image log is logged abnormally. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Speaker turns on and off repeatedly when multiple sound files are played continuously. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The device restarts abnormally when the firmware is upgraded while the device is locked. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Wireless connection intermittently disconnects when sending Visual face from BioStar 2 to device. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The screen turns off at the time set in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Menu Timeout"
            }), " during an Intercom call. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When deleting all logs, image logs does not get deleted. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "VFMCore"
            }), " version information is not displayed when long-touching the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "MAC"
            }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Info"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When issuing a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Smart Card"
            }), ", if a fingerprint/face is included in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Private Auth Mode"
            }), ", the issuance fails intermittently in a specific card. ", (0,jsx_runtime.jsx)(Badge, {
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