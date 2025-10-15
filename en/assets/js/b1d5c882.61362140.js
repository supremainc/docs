"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["7923"], {
47644: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_server_server_mdx_b1d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-server-server-mdx-b1d.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_server_server_mdx_b1d_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-server-server","title":"Server Detailed Settings","description":"Guidance on the basic information of the BioStar X server, user and device management, server matching, system log levels, and settings for saving facial images.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-server-server.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-server-server","permalink":"/docs/en/platform/biostar_x/settings-server-server","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-server-server.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-server-server","title":"Server Detailed Settings","description":"Guidance on the basic information of the BioStar X server, user and device management, server matching, system log levels, and settings for saving facial images.","keywords":["Server","User Management","Device Management","Server Matching","System log"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Server Settings","permalink":"/docs/en/platform/biostar_x/settings-server"},"next":{"title":"Install HTTPS Certificate","permalink":"/docs/en/platform/biostar_x/settings-server-https"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-server-server.mdx


const frontMatter = {
	id: 'settings-server-server',
	title: 'Server Detailed Settings',
	description: 'Guidance on the basic information of the BioStar X server, user and device management, server matching, system log levels, and settings for saving facial images.',
	keywords: [
		'Server',
		'User Management',
		'Device Management',
		'Server Matching',
		'System log'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Basic information settings",
  "id": "basic-setting",
  "level": 2
}, {
  "value": "User and device management",
  "id": "user-and-device-management",
  "level": 2
}, {
  "value": "Custom field settings",
  "id": "custom-field",
  "level": 3
}, {
  "value": "AoC card settings",
  "id": "aoc-card-setting",
  "level": 3
}, {
  "value": "Other settings",
  "id": "other-settings",
  "level": 3
}, {
  "value": "Server matching",
  "id": "servermatching",
  "level": 2
}, {
  "value": "System log level settings",
  "id": "systemloglevel",
  "level": 2
}, {
  "value": "Saving facial images",
  "id": "storevisualfaceimage",
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
  }, {Cmd, Details, DocLink, IcDown, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcDown) _missingMdxReference("IcDown", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the basic information settings of the BioStar X server, user and device management, server matching, system log levels, and settings for saving facial images."
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
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.server",
            product: "2"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Set the desired items in each section."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.general",
                product: "2"
              }), ": You can set the IP address, port number, session expiration time, event log upload method, and log retention period."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.userDeviceManagement",
                product: "2"
              }), ": You can change user and device management settings."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.logLevelManagement",
                product: "2"
              }), ": You can change system log level settings."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.expertSettings.title",
                product: "2"
              }), ": You can set it to save both the actual image and the template of the face or save only the template without storing the actual image."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " at the bottom right of the screen to save the settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "basic-setting",
      children: "Basic information settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.general",
        product: "2"
      }), " section, you can set the basic information of the BioStar X."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-general.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.biostarIPAdress",
            product: "2"
          }), ": Set the server IP address. To use a specific IP address, click ", (0,jsx_runtime.jsx)(IcDown, {}), " and select from the list. Selecting ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.ipAddress.any",
            product: "2"
          }), " automatically assigns an IP address to the server."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.biostarPort",
            product: "2"
          }), ": You can change the server port. Enter the desired port number."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.sessionTimeout",
            product: "2"
          }), ": Set a session timeout period. If there is no operation after logging into BioStar X for the configured time, you will be automatically logged out."]
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
          }), ": The log retention period can be set from 1 to 120 days."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-and-device-management",
      children: "User and device management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.userDeviceManagement",
        product: "2"
      }), " section, you can set the synchronization and authentication methods between users and devices."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-management.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-sync",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.automaticUserSync",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.automaticUserSync",
        product: "2"
      }), " option, you can choose how to synchronize user information between the server and devices."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.syncOption.allDevices",
            product: "2"
          }), ": User information is synchronized automatically between the server and all registered devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.syncOption.deviceSync",
            product: "2"
          }), ": User information from the server is synchronized with all devices registered on the server. However, user information modified on the device is not synchronized to the server, and only user information added on the device is synchronized to the server."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.syncOption.smartSync",
            product: "2"
          }), ": Only devices belonging to an access group with changes are automatically synchronized with the server."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you select the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), " option, users saved on devices that do not belong to the access group cannot be managed by the server. To use this option, go to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.device.root"
            }), " to select each device, and then click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), " to proceed with synchronization. For more information about the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), " feature, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-using-functions",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Even if you select the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), " option, special access groups designated for specific purposes will synchronize regardless of the device access group."]
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
            children: ["Even if you select the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), " option, users designated as device administrators will synchronize regardless of the access group."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fingerprint-template-format",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.fingerprintTemplateFormat",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.fingerprintTemplateFormat",
        product: "2"
      }), " option, you can choose the fingerprint template format. Select from the following items."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "SUPREMA"
          }), ": Suprema fingerprint template format. Used when enrolling fingerprints on Suprema devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "ISO"
          }), ": ISO international fingerprint template format."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "ANSI378"
          }), ": Fingerprint template format defined by the American National Standards Institute (ANSI)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "If there are existing user fingerprint templates on the device, they cannot be changed to another format."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "userid-type",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType",
        product: "2"
      }), " option, you can select the user ID type as ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType.numeric",
        product: "2"
      }), " or ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType.alphanumeric",
        product: "2"
      }), ". Check the list of devices registered in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " server and select compatible settings."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: ["View devices and firmware versions that can change ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.userDevice.useridType",
          product: "2"
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CoreStation firmware version 1.0.0 or higher"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation 2 firmware 1.0.0 or higher"
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
            children: "X-Station 2 firmware 1.0.0 or higher"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 firmware 1.0.0 or higher"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Changing from ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.userDevice.useridType.alphanumeric",
          product: "2"
        }), " to ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.userDevice.useridType.numeric",
          product: "2"
        }), " requires deleting all user information registered in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enrollment-device",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.enrollment_device.title",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can add frequently used devices for enrolling fingerprints, faces, or cards in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.enrollment_device.title",
        product: "2"
      }), " option for convenience."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " button to add a device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.enrollment_device.configure.title",
            product: "2"
          }), " window appears, click the checkbox of the desired device from the list."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-management-enroll-device.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " to add the selected device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " at the bottom right of the screen to save the settings for the added device."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If you find it difficult to locate a registered device from the list due to the large number, enter keywords in the search input field to find devices. You can enter the device ID, device name, device group, and IP address."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "For detailed information on registering user information with fingerprint, face, or card credentials, refer to the following document."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-fingerprint"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-face"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-card"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-mobile"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-field",
      children: "Custom field settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.custom_field.title",
        product: "2"
      }), " option, you can add fields to input additional information about the user. The added fields will be displayed on the user information screen."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To add a custom user field, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enter the name of the custom user field and select the desired item type."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-management-custome-field.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.numericbox",
                product: "2"
              }), ": Allows entry of values from 0 to 4294962795; characters cannot be entered."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.textbox",
                product: "2"
              }), ": Allows entry of up to 32 characters of numbers and letters."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.combobox",
                product: "2"
              }), ": Allows addition of up to 20 items of 32 characters; each item is separated by a semicolon (;). (e.g., Select1;Select2;Select3)"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-server-management-custome-field-select.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.fileupload",
                product: "2"
              }), ": You can add a field for file uploads."]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "The maximum file size is 1MB."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "The filename can be between 1 to 120 characters long."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Filename restrictions: Filenames may include alphanumeric characters, underscores (_), and hyphens (-). Periods (.) are used to differentiate file extensions."
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button at the bottom right of the screen to save the added custom user field."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To change the order of the custom user fields, change the numbers in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.order",
              product: "2"
            }), " column. The position of the added fields will change."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After modifying the custom user fields, click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " button at the bottom right of the screen."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click the ", (0,jsx_runtime.jsx)(IcTrash2, {}), " button to delete a custom user field. Deleted fields cannot be recovered."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For detailed information on registering and modifying user information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "how-to-guide-user",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aoc-card-setting",
      children: "AoC card settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To delete personal information and credential information from the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " server when issuing an ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../reference/glossary#access_on_card",
        children: "Access on Card(AoC)"
      }), " credential that stores the user's credential on the card, enable the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.deleteCredentialAfterAOC",
        product: "2"
      }), " option."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: ["View devices and firmware versions that support ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "NFC mobile cards"
          })]
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
          children: ["View devices and firmware versions that support ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BLE mobile cards"
          })]
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
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.serverMatching.use",
            product: "2"
          }), ": Activates/Deactivates server matching."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "other-settings",
      children: "Other settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.eventLogRetainDays",
            product: "2"
          }), ": Set the retention period for access control event logs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.hideCredentialFaces",
            product: "2"
          }), ": To protect users' personal information, the preview image can be hidden during the registration of face credentials. When this option is enabled, the preview screen will not be provided when enrolling users' face credentials."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "servermatching",
      children: "Server matching"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.serverMatching",
        product: "2"
      }), " section, you can set up the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../reference/glossary#server_matching",
        children: "server matching"
      }), " feature to authenticate user information on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " without authenticating on the device."]
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
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "This option may vary depending on the CPU performance of the PC."
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
          }), ": You can set the security level for server matching for fingerprints. The higher the security level is set, the more the false rejection rate (FRR) can occur."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "common.serverMatching",
          product: "2"
        }), " is available when feature add-ons are enabled with an Advanced or higher license. For more information about the license policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "systemloglevel",
      children: "System log level settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevelManagement",
        product: "2"
      }), " section, you can set the level of system logs stored in the database."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-system-log-level.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["System logs are managed according to predefined categories, and the log levels are classified into ", (0,jsx_runtime.jsx)(Cmd, {
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
      }), ". The high level contains all lower level logs. For example, if you select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.trace",
        product: "2"
      }), ", it will include and save all lower levels of ", (0,jsx_runtime.jsx)(Cmd, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "storevisualfaceimage",
      children: "Saving facial images"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When enrolling a face credential, you can set it to save both the actual image and the template or save only the template without storing the actual image."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Before using"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Before activating the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.expertSettings.enableOptionLabel",
          product: "2"
        }), " option, if any changes have been made in the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.server",
          product: "2"
        }), " menu, be sure to save those changes first. Click Apply at the bottom right of the screen."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.title",
            product: "2"
          }), " section, set the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.enableOptionLabel",
            product: "2"
          }), " option to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-expert.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.enableButton",
            product: "2"
          }), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When you enter the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.detail.title",
            product: "2"
          }), " screen, set the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.detail.storeVisualFaceImageOptionLabel",
            product: "2"
          }), " option."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-expert2.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), ": This is the default setting. Saves both the actual image and the template of the face credential."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.notUse",
                product: "2"
              }), ": Does not save the actual image of the face credential and saves only the template. Read the warning popup that appears when you select this option carefully before setting it."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " to save the settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Precautions when disabling the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.detail.storeVisualFaceImageOptionLabel",
            product: "2"
          }), " option"]
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If you disable this feature, all stored facial images will be deleted, and future enrolled facial images will only save the templates excluding the images."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This feature cannot be disabled if the enrolled facial images do not have both types of templates. For more information about the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.menu.faceMigration"
            }), " feature, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "migration-face",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After disabling this feature, if you include invalid face image templates in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "menu.dataImport",
              product: "2"
            }), ", you will not be able to import the data file. To resolve this issue, temporarily enable this feature before importing the data file."]
          }), "\n"]
        }), "\n"]
      })]
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