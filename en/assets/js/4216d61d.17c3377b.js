"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["538"], {
49169: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Customers who began using BioStar Air access control before May 2025 may still be using the Airfob Space app, which has since been rebranded as the Suprema Pass app. Both apps offer identical functionality and are fully compatible. There is no need for existing users to switch — mobile credentials work seamlessly across both."
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
27397: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_suprema_pass_app_advanced_features_mdx_421_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-suprema-pass-app-advanced-features-mdx-421.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_suprema_pass_app_advanced_features_mdx_421_namespaceObject = JSON.parse('{"id":"platform/biostar_air/suprema-pass-app-advanced-features","title":"Advanced Features","description":"This guide explains how to configure Bluetooth and NFC authentication modes, enable two-factor authentication with a PIN or biometric option, review access logs, and use support features in the Suprema Pass app.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/suprema-pass-app-advanced-features.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/suprema-pass-app-advanced-features","permalink":"/docs/en/platform/biostar_air/suprema-pass-app-advanced-features","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/suprema-pass-app-advanced-features.mdx","tags":[],"version":"current","frontMatter":{"id":"suprema-pass-app-advanced-features","title":"Advanced Features","description":"This guide explains how to configure Bluetooth and NFC authentication modes, enable two-factor authentication with a PIN or biometric option, review access logs, and use support features in the Suprema Pass app.","keywords":["Advanced Features","Suprema Pass app","two-factor authentication","access logs","support options"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Open Doors With Mobile Credentials","permalink":"/docs/en/platform/biostar_air/opening-doors-with-mobile-credentials"},"next":{"title":"Set Sensitivity","permalink":"/docs/en/platform/biostar_air/suprema-pass-app-sensitivity-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/suprema-pass-app-advanced-features.mdx


const frontMatter = {
	id: 'suprema-pass-app-advanced-features',
	title: 'Advanced Features',
	description: 'This guide explains how to configure Bluetooth and NFC authentication modes, enable two-factor authentication with a PIN or biometric option, review access logs, and use support features in the Suprema Pass app.',
	keywords: [
		'Advanced Features',
		'Suprema Pass app',
		'two-factor authentication',
		'access logs',
		'support options'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "Configure connection method",
  "id": "connectingSetting",
  "level": 2
}, {
  "value": "Bluetooth",
  "id": "bluetooth",
  "level": 3
}, {
  "value": "NFC",
  "id": "nfc",
  "level": 3
}, {
  "value": "Two-factor authentication (2FA)",
  "id": "twoFactorAuth",
  "level": 2
}, {
  "value": "iOS users",
  "id": "ios",
  "level": 3
}, {
  "value": "Android users",
  "id": "android",
  "level": 3
}, {
  "value": "Access logs",
  "id": "accesslogs",
  "level": 2
}, {
  "value": "Support center",
  "id": "supportCenter",
  "level": 2
}, {
  "value": "Advanced Settings",
  "id": "advanced-settings",
  "level": 2
}, {
  "value": "Options",
  "id": "additionalFeatures",
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
  }, {Cmd, IcHamberg, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcHamberg) _missingMdxReference("IcHamberg", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "The Suprema Pass app includes advanced settings and security options to enhance the user experience and access control features. Users can configure authentication methods, enable two-factor authentication, review access logs, report issues, and use support features."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connectingSetting",
      children: "Configure connection method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Select a preferred connection method to communicate with the access control device. On the Suprema Pass app home screen, tap ", (0,jsx_runtime.jsx)(IcHamberg, {}), " in the upper right corner, then select the desired mode in ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Connection Method"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-connection-mode.png",
      width: "50%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bluetooth",
      children: "Bluetooth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choose between two Bluetooth authentication modes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Only while App is on Screen"
          }), ": Authenticate with a mobile card only when the app is open on the mobile device. This mode saves battery but requires manually launching the app before approaching the door."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Background Mode"
          }), ": Authenticate with a mobile card even if the device screen is off when the app runs in the background. This mode is more convenient but consumes more battery. If the app closes, relaunch it to resume background functions."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nfc",
      children: "NFC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFC authentication is available only on Android devices. Use NFC alone or with Bluetooth for faster entry."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Android users with an NFC-compatible device can use NFC with Bluetooth."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "twoFactorAuth",
      children: "Two-factor authentication (2FA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enable two-factor authentication with a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PIN, pattern, or biometric authentication"
      }), " (face or fingerprint) for additional security."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-twofactor.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This feature is not supported in ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Background Mode"
            }), " connections because the app screen must remain open during access authentication."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If the PIN or pattern is forgotten, reinstall the app and reactivate the mobile card."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Supported features may vary depending on the mobile device."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ios",
      children: "iOS users"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On the Suprema Pass app home screen, tap ", (0,jsx_runtime.jsx)(IcHamberg, {}), " in the upper right corner."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the connection method to ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Only while App is on Screen"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Two-Factor Authentication"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Register PIN"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enter the six-digit PIN."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the success message appears, tap ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Change PIN"
            }), ", then enter the new PIN to change the PIN."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Enable ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Biometric Authentication"
            }), " and follow the setup instructions to use biometrics."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "android",
      children: "Android users"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On the Suprema Pass app home screen, tap ", (0,jsx_runtime.jsx)(IcHamberg, {}), " in the upper right corner."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the connection method to ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Only while App is on Screen"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            children: "NFC"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Two-Factor Authentication"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
            children: "PIN"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Register PIN"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Pattern"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Register Pattern"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enter the selected PIN or pattern."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the success message appears, tap ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Change PIN"
            }), ", then enter the new PIN to change the PIN."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Change Pattern"
            }), ", then enter the new pattern to change the pattern."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Enable ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Biometric Authentication"
            }), " and follow the setup instructions to use biometrics."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accesslogs",
      children: "Access logs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use access records to track entry attempts and troubleshoot entry-related issues."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-access-log.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On the Suprema Pass app home screen, tap ", (0,jsx_runtime.jsx)(IcHamberg, {}), " in the upper right corner."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Access Logs"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select a site, then set the start and end dates."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Search"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "supportCenter",
      children: "Support center"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go to ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Support Center"
      }), " for additional support."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-support.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On the Suprema Pass app home screen, tap ", (0,jsx_runtime.jsx)(IcHamberg, {}), " in the upper right corner."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
            children: "More"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Support Center"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Suprema Technical Support"
          }), " page."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Search questions or review FAQs."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If support is needed, tap the chat icon in the lower right corner to submit a ticket to the MOCA Systems team."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advanced-settings",
      children: "Advanced Settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tap ", (0,jsx_runtime.jsx)(IcHamberg, {}), " in the upper right corner on the Suprema Pass app home screen, then select ", (0,jsx_runtime.jsx)(Cmd, {
        children: "More"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Advanced Settings"
      }), " to use the following additional features."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-advanced.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Location setting"
          }), ": Select ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Global"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            children: "EU"
          }), " server based on your location. Select ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Auto"
          }), " to have the app detect your location and choose the appropriate server."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Bluetooth Authentication"
          }), ": Enable ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Unwanted door opening prevention"
          }), " to block Bluetooth authentication when the mobile device is stationary."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Sensitivity Settings"
          }), ": Adjust the Bluetooth sensitivity between the mobile device and the Airfob device. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "suprema-pass-app-sensitivity-settings",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additionalFeatures",
      children: "Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tap ", (0,jsx_runtime.jsx)(IcHamberg, {}), " in the upper right corner on the Suprema Pass app home screen, then select ", (0,jsx_runtime.jsx)(Cmd, {
        children: "More"
      }), " to use the following additional features."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Theme"
          }), ": Set the app's color mode. Select ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Light"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Dark"
          }), ", or ", (0,jsx_runtime.jsx)(Cmd, {
            children: "System"
          }), " mode."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Bug Report"
          }), ": Write detailed information, such as the error occurrence context and reproduction steps, to submit the bug report to the developer."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "App Details"
          }), ": Check the model name, OS version, BLE support and status of the mobile device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "App License"
          }), ": View the open-source license information used in the Suprema Pass app."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Terms & Conditions"
          }), ": View the terms of use for the BioStar Air platform."]
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