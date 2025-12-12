"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["88545"], {
9969: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_biostation_3_release_notes_131_mdx_2ff_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-biostation-3-release-notes-131-mdx-2ff.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_biostation_3_release_notes_131_mdx_2ff_namespaceObject = JSON.parse('{"id":"device/biostation_3/release-notes/131","title":"Firmware Version 1.3.1","description":"Release2024-09-03","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/biostation_3/release-notes/131.mdx","sourceDirName":"device/biostation_3/release-notes","slug":"/device/biostation_3/release-notes/131","permalink":"/docs/ja/device/biostation_3/release-notes/131","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/release-notes/131.mdx","tags":[],"version":"current","frontMatter":{"id":"131","title":"Firmware Version 1.3.1","isTranslationMissing":false},"sidebar":"biostation3","previous":{"title":"Firmware Version 1.4.0","permalink":"/docs/ja/device/biostation_3/release-notes/140"},"next":{"title":"Firmware Version 1.3.0","permalink":"/docs/ja/device/biostation_3/release-notes/130"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/biostation_3/release-notes/131.mdx


const frontMatter = {
	id: 131,
	title: 'Firmware Version 1.3.1',
	isTranslationMissing: false
};
const contentTitle = 'Firmware Version 1.3.1 (Build No. 1.3.1_240902)';

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
    admonition: "admonition",
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
        id: "firmware-version-131-build-no-131_240902",
        children: "Firmware Version 1.3.1 (Build No. 1.3.1_240902)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release", (0,jsx_runtime.jsx)(Separator, {}), "2024-09-03"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-features-and-improvements",
      children: "New Features and Improvements"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved the issue that occurs when the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Display Name"
          }), " of the saved extension number is long."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved to show an ellipsis in the extension number list for long display names."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["On the call screen, only the middle part of the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Display Name"
              }), " is displayed."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Improved wrapping of long display names on the call screen."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved UI in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Advanced Settings"
          }), " screen in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "AUTHENTICATION"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Improved vulnerability in conditions required when setting ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "RTSP"
          }), " login password."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Store Visual Face Image"
          }), " feature."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Supports the feature to save both the actual image and the template in the visual face, or to save only the template without storing the actual image."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added an option to enable or disable the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Scramble Keypad"
          }), ", which randomizes the position of numeric keys when entering a PIN."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "AUTHENTICATION"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scramble Keypad"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Added a feature that prevents facial authentication from occurring at close range to reduce false authentication during facial authentication at close range."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved face anti-spoofing performance."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Face anti-spoofing performance has been improved to pass the iBeta Level 1 ISO 30107-3 Presentation Attack Detection Test."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["We recommend using the ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Fake Detection"
                }), " feature set to ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Normal"
                }), " in environments with strong sunlight."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "FAS_IR_SP"
          }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Device Info"
          }), " to check the algorithm version of face anti-spoofing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Require No Mask"
          }), " option that allows rejecting authentication for users wearing a mask during face authentication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Added ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hidden Network"
          }), " that allows manually adding and connecting to a wireless network by directly entering network information on the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Improved to periodically check the Wi-Fi signal strength of the connected wireless network, ensuring the Wi-Fi signal strength icon on the home screen is updated."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-fixes",
      children: "Bug Fixes"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When setting a user validity ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Period"
            }), ", an error message is not displayed when the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Start Date"
            }), " is set to exceed the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "End Date"
            }), ". ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Fixed some strings in user validity ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Period"
            }), " settings. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The keypad that appears when setting certain menus is hidden from view by obscuring the menu. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the name of a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Schedule"
            }), " created in BioStar 2 is long, the schedule name overlaps with the UI in menus where schedule settings are required. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When a long server address is entered in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edit Server"
            }), " menu, the server URL text overlaps with the screen UI. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When an initialized device is connected as a slave via RS-485, the LED status indicator on the slave device blinks blue and green. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Intermittently, the settings in face authentication are not saved. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the device does not have a face authentication mode, after registering 50,000 face credential users and setting the face authentication mode, the menu freezes when entering the user menu. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When deleting an ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extensions"
            }), " from the extension list, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Display Name"
            }), " of other configured extension numbers disappears. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The device language was changed, but some menus are not displayed in the selected language. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When checking the event logs, if the user menu is accessed after scanning a face on the device via BioStar 2, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "EVENT LOG"
            }), " screen remains open. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In the extension number selection screen, the area at the bottom of the background screen should not be touchable, but it is responsive to touch. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When entering an unsupported key in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ID"
            }), " field during user registration, the cursor moves one position forward. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When activating ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Voice Instruction"
            }), " on a slave device connected to BioStar 2 and then accessing the user menu on the slave device, an authentication failure voice prompt is incorrectly played. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The top-right corner of the background in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Event Log Details"
            }), " screen is touched, causing unintended interactions. Additionally, the event log search or the '", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delete all logs?"
            }), "' pop-up messages may appear incorrectly. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["During an ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intercom"
            }), " call, it is possible to scan a face or card on the device through BioStar 2. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When exiting the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Arm"
            }), " mode during an ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intercom"
            }), " call, the home screen is displayed incorrectly. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the user ID is long, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "User ID"
            }), " name overlaps with the UI on the event log detail view screen. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In BioStar 2, after setting ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Image Log"
            }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enabled"
            }), ", the image log icon on the device does not display correctly when a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Template on Mobile"
            }), " related log occurs. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.2.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When authenticating an iClass AoC card and a fingerprint simultaneously, the device restarts abnormally. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reset Time"
            }), " for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Timed Anti PassBack"
            }), " is set to 0, anti-passback does not work. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["During an ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intercom"
            }), " call, the screen incorrectly displays 'Connected' instead of 'In Call'. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the maximum number of extensions that can be stored on the device is reached, a blank space appears at the bottom of the call screen. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When automatically reconnecting to a previously connected wireless network, the WLAN icon on the home screen appears gray. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the bit interval is set for the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Facility Code"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ID Field"
            }), " of the Wiegand card format and the card is scanned during add user, the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Facility Code"
            }), " is displayed as an incorrect value. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the device is restarted with the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary Key"
            }), " set only in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Suprema Smart Card Layout"
            }), " and the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Secondary Key"
            }), " set only in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Custom Smart Card Layout"
            }), ", the device recognizes the Custom Smart Card as a CSN card. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When a short ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DNS Server Address"
            }), " is entered, the device fails to connect to the DNS server properly. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the face sensor sensitivity on the device is set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "High"
            }), " using the SDK, the motion sensor intermittently does not work. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The device freezes when the RS-485 mode on the device is set to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Not Use"
            }), " using the SDK. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Issue when attempting ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reconnect"
            }), " on a device configured in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trigger & Action"
            }), " to deactivate upon disconnection from BioStar 2. ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Logs 'BioStar 2 Disconnected' and 'Device Locked' are repeatedly generated."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "The device fails to reconnect to the server after the connection is lost."
              }), "\n"]
            }), "\n"]
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