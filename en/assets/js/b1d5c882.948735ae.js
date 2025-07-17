"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9957"], {
9714: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_server_server_mdx_b1d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-server-server-mdx-b1d.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_server_server_mdx_b1d_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-server-server","title":"Server Detailed Settings","description":"You can configure the BioStar X server information, user management, device management and automatic upgrade settings.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-server-server.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-server-server","permalink":"/docs/en/platform/biostar_x/settings-server-server","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-server-server.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-server-server","title":"Server Detailed Settings","description":"You can configure the BioStar X server information, user management, device management and automatic upgrade settings.","keywords":["Server","User Management"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Server Settings","permalink":"/docs/en/platform/biostar_x/settings-server"},"next":{"title":"HTTPS","permalink":"/docs/en/platform/biostar_x/settings-server-https"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-server-server.mdx


const frontMatter = {
	id: 'settings-server-server',
	title: 'Server Detailed Settings',
	description: 'You can configure the BioStar X server information, user management, device management and automatic upgrade settings.',
	keywords: [
		'Server',
		'User Management'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "General",
  "id": "general",
  "level": 2
}, {
  "value": "User and device management",
  "id": "user-and-device-management",
  "level": 2
}, {
  "value": "Server matching",
  "id": "servermatching",
  "level": 2
}, {
  "value": "System log level settings",
  "id": "systemloglevel",
  "level": 2
}, {
  "value": "Store Visual Face Image",
  "id": "storevisualfaceimage",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Calloutlists, Cmd, Details, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "You can configure the BioStar X server information, user management, device management and automatic upgrade settings."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the left sidebar, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.server",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Edit the necessary fields."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "general",
      children: "General"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can configure the general information on BioStar X."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-general.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.biostarIPAdress",
            product: "2"
          }), ": Set the server IP address. Change the setting to use a specific IP address."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.biostarPort",
            product: "2"
          }), ": Set the server port."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.sessionTimeout",
            product: "2"
          }), ": Set a session timeout period. If there is no activity on BioStar X for the set time after logging in, the session is logged out automatically."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.logUploadType",
            product: "2"
          }), ": Select an event log upload method. If real-time communication with the server is difficult, set this to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.manual",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.logRetainDays",
            product: "2"
          }), ": Set the log retention period from 1 to 120 days."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-and-device-management",
      children: "User and device management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can configure the user synchronization and fingerprint template format settings."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-management.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.automaticUserSync",
            product: "2"
          }), ": Change the user information synchronization method."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.syncOption.allDevices",
                product: "2"
              }), " to have the user information automatically synchronized with the server."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["When set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.syncOption.deviceSync",
                product: "2"
              }), ", user information on the server is synchronized with all devices registered on the server. However, user information modified on the device is not synchronized to the server, and only user information added on the device is synchronized to the server."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.syncOption.smartSync",
                product: "2"
              }), " to automatically synchronize only the devices belonging to the access group with the changes."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.fingerprintTemplateFormat",
            product: "2"
          }), ": Set the fingerprint template format. Available options include ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SUPREMA"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ISO"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ANSI378"
          }), ". If there are still user fingerprint template remaining in the device, selecting a different format is not possible."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.userDevice.useridType",
            product: "2"
          }), ": Use of ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.userDevice.useridType.numeric",
            product: "2"
          }), " or ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.userDevice.useridType.alphanumeric",
            product: "2"
          }), " can be set for user ID. When ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.userDevice.useridType.alphanumeric",
            product: "2"
          }), " is set for ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.userDevice.useridType",
            product: "2"
          }), ", BioLite Net, BioEntry Plus and BioEntry W cannot be used. In addition, all users saved in XPass and XPass S2 will be deleted and all settings except for the network will be initialized."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.enrollment_device.title",
            product: "2"
          }), ": You can designate certain devices that you frequently use for fingerprint and card enrollment as an enrollment device. Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " and choose the devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.title",
            product: "2"
          }), ":  You can add custom user fields for extra user information and these fields appear on the User page. There are three types of custom user fields: ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.numericbox",
            product: "2"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.textbox",
            product: "2"
          }), " and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.combobox",
            product: "2"
          }), ". If you choose the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.type.combobox",
            product: "2"
          }), " for a custom user field, you can add up to 20 items with 32 characters each, and each item is separated by a semicolon (;)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.deleteCredentialAfterAOC",
            product: "2"
          }), ": If you issue an AoC card which stores user's credentials on the smart card, you can set BioStar X to delete user's data and credential information automatically."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.eventLogRetainDays",
            product: "2"
          }), ": You can set the period for storing the access control event logs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.hideCredentialFaces",
            product: "2"
          }), ": To protect users' privacy, preview images can be hidden when enrolling face credentials. If you enable this option, a preview will not be provided when enrolling the user's face or visual face."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you select ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.automaticUserSync",
              product: "2"
            }), " as ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), ", users stored in the device that do not belong to the access group cannot be managed by the server. If you use this option, go to DEVICE menu and click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), " for each device to proceed with the synchronization."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Even if you select ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.automaticUserSync",
              product: "2"
            }), " as ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), ", Access groups set up for special purposes, such as the following, will be synchronized regardless of the device's access group."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Dual authentication access group set up in the Devices and Elevators."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Bypass Group in the Anti-passback Zone."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Bypass Group in the Scheduled Lock Zone."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Scheduled Unlock Authentication Group in the Scheduled Unlock Zone."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Arm/Disarm Group in the Intrusion Alarm Zone."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Even if you select ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.automaticUserSync",
              product: "2"
            }), " as ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), ", Users set to device administrator will be synchronized regardless of the access group."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NFC card"
          }), " is supported with the below conditions."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Mobile device OS: Android 5.0 Lollipop or later, Android 10 or earlier"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar 2 Mobile 2.4.1 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass S2: XPS2M-V2 FW 2.4 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 2: BS2-OMPW, BS2-OIPW FW 1.4 or later, FW 1.8 or earlier"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation A2: BSA2-OMPW, BSA2-OIPW FW 1.3 or later, FW 1.7.1 or earlier"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation L2: BSL2-OM FW 1.2 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry W2: BEW2-OAP, BEW2-ODP FW 1.1 or later, FW 1.5 or earlier"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStation 2: FS2-D, FS2-AWB FW 1.3.1 or earlier"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioLite N2: BLN2-ODB, BLN2-OAB, BLN2-PAB FW 1.2 or earlier"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass D2: XPD2-MDB, XPD2-GDB, XPD2-GKDB FW 1.3 or earlier"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceLite: FL-DB FW 1.1 or earlier"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 2: XP2-MDPB, XP2-GDPB, XP2-GKDPB, XP2-MAPB FW 1.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry P2: BEP2-OD, BEP2-OA FW 1.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry R2: BER2-OD FW v1.1.0 or later"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BLE card"
          }), " is supported with the below conditions."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Mobile device OS: Android 5.0 Lollipop or later, Android 10 or earlier / iOS 9.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar 2 Mobile 2.4.1 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStation 2: FS2-AWB FW 1.3.1 or earlier"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioLite N2: BLN2-ODB, BLN2-OAB, BLN2-PAB FW 1.2 or earlier"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass D2: XPD2-MDB, XPD2-GDB, XPD2-GKDB FW 1.3 or earlier"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceLite: FL-DB FW 1.1 or earlier"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 2: XP2-MDPB, XP2-GDPB, XP2-GKDPB, XP2-MAPB FW 1.0 or later"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.serverMatching.use",
              product: "2"
            }), ": Activates/Deactivates server matching."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType",
              product: "2"
            }), " is changed from ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType.alphanumeric",
              product: "2"
            }), " to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.userDevice.useridType.numeric",
              product: "2"
            }), ", all user information registered on BioStar X should be deleted."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: ["The devices and the firmware versions where the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.userDevice.useridType",
            product: "2"
          }), " can be changed are as follows."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "CoreStation firmware version 1.0.0 or higher"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStaion 2 FW 1.0.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceLite firmware 1.0.0 or higher"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry W2 FW 1.1.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation L2 FW 1.2.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation A2 FW 1.3.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 2 FW 1.4.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioLite N2 firmware 1.0.0 or higher"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry P2 firmware 1.0.0 or higher"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry R2 FW 1.0.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 2 firmware 1.0.0 or higher"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass D2 firmware version 1.0.0 or higher"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass FW 2.4.0 or later"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass S2 firmware 2.4.0 or higher"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "X-Station 2 firmware 1.0.0 or higher"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 3 firmware 1.0.0 or higher"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you change the value in the ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Order"
            }), " field, the position of the custom field on the User page changes."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.numericbox",
              product: "2"
            }), ", a number from 0 to 4294962795 is allowed and characters are not allowed."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.textbox",
              product: "2"
            }), ", up to 32 characters are allowed."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.type.combobox",
              product: "2"
            }), ", the items that have been set to the field are displayed as item. If you want to configure a combo box field as shown in the screenshot below, you need to enter ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 1"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 2"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 3"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Option 4"
            }), " in the data field."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "servermatching",
      children: "Server matching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set up server matching. If you use server matching, the user’s fingerprint will be matched from BioStar X, not the device."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Server Matching will appear when the Advance or higher license is activated. For more information about the license policy, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "licensing",
        children: "following"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-server-matching.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.serverMatching.use",
            product: "2"
          }), ": Activates/Deactivates server matching."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.serverMatching.matchingConcurrencyCount",
            product: "2"
          }), ": You can configure how many matchings can be done simultaneously."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.serverMatching.matchingConcurrencyCount",
                product: "2"
              }), " depends on the PC's CPU performance."]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.serverMatching.fastMode",
            product: "2"
          }), ": You can configure the fingerprint matching speed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.serverMatching.securityLevel",
            product: "2"
          }), ": You can configure the server matching’s security level for fingerprints and faces. The higher the security level is set, the more the false rejection rate (FRR) can occur."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "systemloglevel",
      children: "System log level settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set the level of system logs stored in the database."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-system-log-level.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel",
          product: "2"
        }), ": System logs are managed according to pre-defined categories, and the log level is divided into ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.trace",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.debug",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.info",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.warning",
          product: "2"
        }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.error",
          product: "2"
        }), ". The high level contains all lower level logs. For example, when set to ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.trace",
          product: "2"
        }), ", you can store the logs including ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.debug",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.info",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.warning",
          product: "2"
        }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logLevel.error",
          product: "2"
        }), " logs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "storevisualfaceimage",
      children: "Store Visual Face Image"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Set whether to store both the actual image and the template in the visual face or to store only the template without storing the actual image."
    }), "\n", (0,jsx_runtime.jsxs)(Calloutlists, {
      children: [(0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["On the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.expertSettings.title",
              product: "2"
            }), " screen, set ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.expertSettings.enableOptionLabel",
              product: "2"
            }), " to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-settings-server-expert.png",
            className: "none"
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "caution",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["If there are any changes made in the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.server",
                product: "2"
              }), " menu, click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.apply",
                product: "2"
              }), " to save the changes before activating ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.expertSettings.enableOptionLabel",
                product: "2"
              }), "."]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click the ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/ico-expert-setting.png",
              ico: true
            }), " to enter ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.expertSettings.detail.title",
              product: "2"
            }), " and set ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.expertSettings.detail.storeVisualFaceImageOptionLabel",
              product: "2"
            }), " as desired."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-settings-server-expert2.png",
            className: "none"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.use",
                  product: "2"
                }), ": This is the default setting. Visual face stores both the actual image and the template."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.notUse",
                  product: "2"
                }), ": Only the template is stored without saving the actual image for visual face. If disabling this by setting it to ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.notUse",
                  product: "2"
                }), ", carefully read the warning pop-up before proceeding."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Caution When Disabling Store Visual Face Image Option"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Disabling this feature will delete all stored visual face images, and future enrolled visual faces will only store the template without the image."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["If the enrolled visual faces do not have both types of templates, this feature cannot be disabled. For more information about ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Face Migration"
              }), ", refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                href: "migration-face",
                children: "following"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["If this feature is disabled and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "menu.dataImport",
                product: "2"
              }), " is performed, the data file cannot be imported if it contains invalid visual face templates. To resolve this issue, temporarily enable this feature before importing the data file."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " to save the settings."]
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