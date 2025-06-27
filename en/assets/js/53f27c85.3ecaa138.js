"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5547"], {
9511: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_auth_mdx_53f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-auth-mdx-53f.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_auth_mdx_53f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-auth","title":"Authentication Settings","description":"Instructions for various settings related to user authentication on the device are provided.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-auth.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-auth","permalink":"/docs/en/platform/biostar_x/settings-device-details-auth","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-auth.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-auth","title":"Authentication Settings","description":"Instructions for various settings related to user authentication on the device are provided.","keywords":["Device","Certifications"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Network Settings","permalink":"/docs/en/platform/biostar_x/settings-device-details-network"},"next":{"title":"Advanced Settings","permalink":"/docs/en/platform/biostar_x/settings-device-details-advanced"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-auth.mdx


const frontMatter = {
	id: 'settings-device-details-auth',
	title: 'Authentication Settings',
	description: 'Instructions for various settings related to user authentication on the device are provided.',
	keywords: [
		'Device',
		'Certifications'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Authentication method settings",
  "id": "authentication-method-settings",
  "level": 2
}, {
  "value": "Add authentication mode",
  "id": "added-auth-mode",
  "level": 3
}, {
  "value": "Fingerprint authentication settings",
  "id": "fingerprint-authentication-settings",
  "level": 2
}, {
  "value": "Facial authentication settings",
  "id": "facial-authentication-settings",
  "level": 2
}, {
  "value": "QR/Barcode settings",
  "id": "qrbarcode-settings",
  "level": 2
}, {
  "value": "Card authentication settings",
  "id": "card-authentication-settings",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Details, IcAdd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.authentication",
        product: "2"
      }), " section provides various methods for configuring user authentication on the device. You can check the authentication modes and key authentication options that the device supports in a step-by-step manner. Note that changes to settings will be applied to the actual device, and configure the authentication policy according to your environment by referring to the features and precautions of each option."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The available network options may differ depending on the device type."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the user has made any arbitrary changes, click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " button. Changes will not be applied to the device if not saved."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authentication-method-settings",
      children: "Authentication method settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set the device's authentication mode, permissions, server matching, and authentication timeout."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-auth-mode.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authenticationMode",
            product: "2"
          }), ": Set the device's authentication mode by combining one or more credentials. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#added-auth-mode",
            children: "following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.usersHaveFullAccess",
            product: "2"
          }), ": Users registered on the device can be granted all access permissions without defining access group settings."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When this option is set to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), ", the device cannot be registered in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.accessLevel",
              product: "2"
            }), " and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ag.floorLevel.title",
              product: "2"
            }), ". For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#settings-access-level",
              children: "following"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.serverMatching",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.active",
                product: "2"
              }), ": Activates server matching. Configure the server matching feature to authenticate using user information stored on the server where ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " is installed."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.inactive",
                product: "2"
              }), ": Deactivates server matching. In this case, authentication is performed using the user information registered on the device."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(Details, {
          children: [(0,jsx_runtime.jsxs)("summary", {
            children: ["View devices and firmware versions supporting ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.serverMatching",
              product: "2"
            }), " feature"]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "CoreStation firmware version 1.0.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry P2 firmware 1.0.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry W2 firmware 1.0.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation L2 firmware 1.0.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation A2 firmware 1.0.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 2 firmware 1.2.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioLite Net firmware 2.2.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry Plus firmware 2.2.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry W firmware 2.2.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "XPass firmware 2.2.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "XPass S2 firmware 2.2.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioLite N2 firmware 1.0.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "XPass D2 firmware version 1.0.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "XPass 2 firmware 1.0.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation 2 firmware version 1.4.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation F2 firmware 1.0.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "X-Station 2 firmware 1.0.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 firmware 1.0.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry W3 firmware version 1.0.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceLite does not support server matching feature."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation F2, BioStation 3, BioEntry W3 devices cannot use server matching for facial authentication."
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authTimeout",
            product: "2"
          }), ": This is the timeout for authenticating the second credential when multiple credentials are used in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authenticationMode",
            product: "2"
          }), " option. If the credential is not authenticated within the specified time, authentication will fail."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceDetection",
            product: "2"
          }), ": Set the algorithm steps for recognizing faces using the built-in camera when the user authenticates."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.faceDetectionLevel.normal",
                product: "2"
              }), ": Detects faces at a distance equivalent to the length of a person's arm."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.faceDetectionLevel.strict",
                product: "2"
              }), ": Requires the user to be closer than the length of a person's arm to detect a face."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.faceDetectionLevel.none",
                product: "2"
              }), ": Does not use facial recognition functionality."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "This option is supported on the BioStation A2."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.userNameDisplay",
            product: "2"
          }), ": Control whether to display or hide the user name shown on the device when authentication is successful."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.displayAll",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.maskAllButFirstLetter",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.hideAll",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.userIdDisplay",
            product: "2"
          }), ": Control whether to display or hide the user ID shown on the device when authentication is successful."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.displayAll",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.maskAllButFirstLetter",
              product: "2"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authUserDisplay.hideAll",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "added-auth-mode",
      children: "Add authentication mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set the device's authentication mode in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.authenticationMode",
        product: "2"
      }), " option. You can configure the authentication mode by combining credentials such as fingerprint, ID, card, PIN, and face."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.authenticationMode",
            product: "2"
          }), " option, click the ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.addNewAuthMode",
            product: "2"
          }), " window appears, drag the desired authentication mode to the center area."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-edit-auth-mode-adding.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "You can add up to five desired authentication modes."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired item in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule.schedule",
            product: "2"
          }), " option."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once all settings are completed, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If the desired schedule is not available in the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule.schedule",
          product: "2"
        }), " option, click ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule.addNewSchedule",
          product: "2"
        }), " to add a new schedule. For more information about schedule settings, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-schedule",
          children: "following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fingerprint-authentication-settings",
      children: "Fingerprint authentication settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.fingerprint",
        product: "2"
      }), " group, you can configure details related to the device's fingerprint authentication."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.securityLevel",
            product: "2"
          }), ": Set the security level used for authenticating fingerprints. Higher security levels increase the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#frr",
            children: "False Rejection Rate (FRR)"
          }), " but decrease the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#far",
            children: "False Acceptance Rate (FAR)"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.scanTimeout",
            product: "2"
          }), ": Set the timeout for fingerprint scanning. Failure to scan within the time set will result in authentication failure."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.sensorSensitivity",
            product: "2"
          }), ": Set the sensitivity of the fingerprint recognition sensor. Set the sensitivity higher to obtain precise fingerprint information."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.1NFastMode",
            product: "2"
          }), ": Set the speed of fingerprint authentication. When ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.auto",
            product: "2"
          }), " is selected, it sets the authentication speed according to the total fingerprint templates registered on the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.templateFormat",
            product: "2"
          }), ": View the configured fingerprint template format."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.matchingTimeout",
            product: "2"
          }), ": Set the timeout for fingerprint matching. If authentication is not completed within the specified time, it will fail."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.viewImage",
            product: "2"
          }), ": Display fingerprint images on the screen during authentication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.sensorMode",
            product: "2"
          }), ": Set the operating mode of the fingerprint sensor."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.sensorMode.autoOn",
                product: "2"
              }), ": The fingerprint sensor turns on by recognizing the user's finger."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.sensorMode.alwaysOn",
                product: "2"
              }), ": The fingerprint sensor remains always on."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.advancedEnrollment",
            product: "2"
          }), ": Assess the quality of scanned fingerprints to save high-quality fingerprint information. Set to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), " to notify the user if the fingerprint quality is low, helping to scan fingerprints correctly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.fingerprintLFD",
            product: "2"
          }), ": Set the level for ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#fake_fp",
            children: "fake fingerprint"
          }), " detection. Higher levels for fake fingerprint detection may also increase rejection rates for actual people’s fingerprints."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.duplicateCheck",
            product: "2"
          }), ": Check for duplicate registrations when enrolling fingerprints."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The options available for configuration may vary depending on the type of device."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Changing the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.templateFormat",
              product: "2"
            }), " option in fingerprint authentication settings will render all previously stored fingerprints unusable. Make sure to select a template in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.templateFormat",
              product: "2"
            }), " option before enrolling users' fingerprints."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.viewImage",
              product: "2"
            }), " option is supported on BioStation 2, BioStation A2, BioStation L2, BioLite N2, FaceStation F2 (FSF2-ODB), and X-Station 2 (XS2-ODPB, XS2-OAPB) models."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.fingerprintLFD",
              product: "2"
            }), " option is supported on BioStation A2, BioStation L2, BioEntry W2, BioLite N2, FaceStation F2 (FSF2-ODB), and X-Station 2 (XS2-ODPB, XS2-OAPB) models."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "facial-authentication-settings",
      children: "Facial authentication settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.credential.face",
        product: "2"
      }), " group, you can configure details related to the device's facial authentication."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.securityLevel",
            product: "2"
          }), ": Set the security level used for authenticating faces. Higher security levels increase the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#frr",
            children: "False Rejection Rate (FRR)"
          }), " but decrease the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#far",
            children: "False Acceptance Rate (FAR)"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "face.operationMode.enrollTime",
            product: "2"
          }), ": If the user's face is not enrolled within the set time when registering, the face enrollment will be canceled."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.motionSensor",
            product: "2"
          }), ": Set the sensitivity for detecting movement around the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.ambientBrightness",
            product: "2"
          }), ": The device can detect ambient brightness and adjust the intensity of the IR LED."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceLFD",
            product: "2"
          }), ": Set the level for fake face detection. Increasing the level for detecting fake face registrations may heighten the rejection rates for actual faces."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.lightBrightness",
            product: "2"
          }), ": Manually adjust the brightness of the device's light. Set brightness by choosing ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.ambientBrightness.normal",
            product: "2"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.ambientBrightness.high",
            product: "2"
          }), ", or select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.lightBrightness.notUse",
            product: "2"
          }), " to turn off the light."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceQuickEnrollment",
            product: "2"
          }), ": Set whether to enable quick face enrollment."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.enable",
                product: "2"
              }), ": Configures the face enrollment procedure to one step."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.disabled",
                product: "2"
              }), ": Configures the face enrollment procedure to three steps. Set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.disabled",
                product: "2"
              }), " for high-quality face template enrollment."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceDetectSetting",
            product: "2"
          }), ": Configure the environmental settings for recognizing the user's face during authentication."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.faceMaxRotation",
                product: "2"
              }), ": Set the maximum rotation angle permitted for the face."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.faceDetectDist",
                product: "2"
              }), ": Set the minimum and maximum distances for recognizing the face."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.faceWideSearch",
                product: "2"
              }), ": Set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.on",
                product: "2"
              }), " to allow facial recognition across the entire camera view."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceOperationMode",
            product: "2"
          }), ": Set the operation mode of the device during facial authentication."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.face.operation_mode.enable",
                product: "2"
              }), ": Perform both visual and infrared matching to enhance the accuracy of facial authentication."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.face.operation_mode.disable",
                product: "2"
              }), ": Allows for rapid authentication of users walking within the device's authentication range."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceFakeDetection",
            product: "2"
          }), ": Prevent user authentication using fake faces such as photos. This is activated when the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.faceOperationMode",
            product: "2"
          }), " option is set to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.face.operation_mode.enable",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.duplicateCheck",
            product: "2"
          }), ": Check for duplicate registrations when enrolling faces."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The options available for configuration may vary depending on the type of device."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.authmode.settings.ambientBrightness",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceLFD",
              product: "2"
            }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceQuickEnrollment",
              product: "2"
            }), " options are supported in the FaceStation 2 and FaceLite models."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.authmode.settings.lightBrightness",
              product: "2"
            }), " option is supported on FaceStation F2 firmware version 1.1.0 or higher."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceDetectSetting",
              product: "2"
            }), " and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.faceOperationMode",
              product: "2"
            }), " options are supported in FaceStation F2 and BioStation 3 models."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "qrbarcode-settings",
      children: "QR/Barcode settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.credential.barcode",
        product: "2"
      }), " group, you can configure details for QR/barcode authentication on the device."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useVisualBarcode",
            product: "2"
          }), ": Set whether to use QR/barcode authentication through the device's camera."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.qrCameraTimeout",
            product: "2"
          }), ": Set the camera scan timeout. If a QR/barcode is not scanned within the specified time, authentication will fail."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.normalize",
            product: "2"
          }), ": Set to authenticate QR codes with the same data as CSN cards or Wiegand cards issued to users."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.authmode.settings.motionSensor",
            product: "2"
          }), ": Set the sensitivity for detecting movement to initiate camera scanning."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useBarcodeScanner",
            product: "2"
          }), ": Set whether to use the device's scanner for QR/barcode authentication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.qrScanTimeout",
            product: "2"
          }), ": Set the scanning timeout. If a QR/barcode is not scanned within the specified time, authentication will fail."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVisualBarcode",
              product: "2"
            }), " option requires a separate device license. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The devices supporting ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVisualBarcode",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.qrCameraTimeout",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.normalize",
              product: "2"
            }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.authmode.settings.motionSensor",
              product: "2"
            }), " options are as follows."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "X-Station 2 (XS2-ODPB, XS2-OAPB, XS2-DPB, XS2-APB) firmware version 1.2.0 or higher"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 (BS3-DB, BS3-APWB) firmware version 1.1.0 or higher"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The devices supporting ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useBarcodeScanner",
              product: "2"
            }), " and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.qrScanTimeout",
              product: "2"
            }), " options are as follows."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "X-Station 2 (XS2-QDPB, XS2-QAPB)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "card-authentication-settings",
      children: "Card authentication settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.cardType",
        product: "2"
      }), " group, you can set the types of cards to be used on the device."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Only card types supported by the device will be displayed in the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.cardType",
          product: "2"
        }), " group."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.CSN",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can select the types of CSN cards and formats and set the byte order."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.byteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": Processes card data in order from large byte units to small byte units, sequentially storing the card serial number (CSN) from left to right."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": Processes card data in order from small byte units to large byte units, storing the card serial number (CSN)."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.formatType",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.general",
                product: "2"
              }), ": Reads and expresses the card's serial number (CSN) without separate conversion."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.wiegand",
                product: "2"
              }), ": Transforms and expresses the card's serial number (CSN) according to user-defined Wiegand format. For information on setting a new Wiegand format, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#",
                children: "following"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.Wiegand",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Select the types of Wiegand cards and set the Wiegand formats. Choose the Wiegand format to be used in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.cardFormat.wiegand.format",
        product: "2"
      }), " option."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For information on setting a new Wiegand format, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-2",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.supremaSmartCard",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select the types of Suprema smart cards and set the card layout and byte order."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.batch.supremaSmartCardLayout",
            product: "2"
          }), ": Choose the Suprema smart card layout. For information on setting a new smart card layout, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#",
            children: "following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.supremaSmartCardByteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": Processes card data in order from large byte units to small byte units."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": Processes card data in order from small byte units to large byte units."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-3",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.card.customSmartCard",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select types of custom smart cards issued by third parties and set the card layout and byte order."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.batch.customSmartCardLayout",
            product: "2"
          }), ": Choose the custom smart card layout. For information on setting a new smart card layout, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#",
            children: "following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.customSmartCardByteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": Processes card data in order from large byte units to small byte units."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": Processes card data in order from small byte units to large byte units."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "View devices and firmware versions supporting custom smart cards"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass D2 firmware version 1.7.1 or higher"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry P2 firmware version 1.5.1 or higher"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W2 firmware version 1.8.0 or higher"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 2a firmware version 1.1.0 or higher"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "X-Station 2 firmware version 1.3.0 or higher"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 firmware version 1.3.0 or higher"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 firmware version 1.0.0 or higher"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioLite N2 firmware version 1.6.2 or higher"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-4",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.csnMobile",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set the method for recognizing mobile cards."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "NFC"
          }), ": Recognizes mobile cards through NFC communication from mobile devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BLE"
          }), ": Recognizes mobile cards through Bluetooth Low Energy (BLE) communication."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-5",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.templateOnMobile",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can specify the recognition method for templates on mobile, as well as the biometric data the user will directly enroll on the device, and set the byte order."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.TomOutputByteOrder",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), ": Processes card data in order from large byte units to small byte units."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), ": Processes card data in order from small byte units to large byte units."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "View devices and firmware versions supporting templates on mobile"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 firmware version 1.2.0 or higher"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 firmware version 1.0.0 or higher"
          }), "\n"]
        }), "\n"]
      })]
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
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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