"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["839"], {
33393: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_advanced_mdx_97c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-advanced-mdx-97c.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_advanced_mdx_97c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-advanced","title":"Advanced Settings","description":"In the Advanced Settings section, configure Device Management, Display/Sound, Operating Conditions, and Actions.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-advanced.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-advanced","permalink":"/docs/en/platform/biostar_x/settings-device-details-advanced","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-advanced.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-advanced","title":"Advanced Settings","description":"In the Advanced Settings section, configure Device Management, Display/Sound, Operating Conditions, and Actions.","keywords":["Device","advanced"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Authentication Settings","permalink":"/docs/en/platform/biostar_x/settings-device-details-auth"},"next":{"title":"Thermal and Mask Settings","permalink":"/docs/en/platform/biostar_x/settings-device-details-thermal-mask"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-advanced.mdx


const frontMatter = {
	id: 'settings-device-details-advanced',
	title: 'Advanced Settings',
	description: 'In the Advanced Settings section, configure Device Management, Display/Sound, Operating Conditions, and Actions.',
	keywords: [
		'Device',
		'advanced'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Add administrators",
  "id": "administrator",
  "level": 2
}, {
  "value": "Attendance management",
  "id": "attendance-management",
  "level": 2
}, {
  "value": "Screen and sound settings",
  "id": "screen-and-sound-settings",
  "level": 2
}, {
  "value": "Trigger conditions and actions settings",
  "id": "triggerAction",
  "level": 2
}, {
  "value": "Image log settings",
  "id": "image-log-settings",
  "level": 2
}, {
  "value": "Wiegand settings",
  "id": "wiegang-settings",
  "level": 2
}, {
  "value": "Security tamper settings",
  "id": "tamper-settings",
  "level": 2
}, {
  "value": "Analog intercom settings",
  "id": "analog-intercom-settings",
  "level": 2
}, {
  "value": "Camera settings",
  "id": "camera-settings",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
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
  }, {Cmd, Details, IcAdd, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["This section provides guidance on configuring items in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.advanced",
        product: "2"
      }), " settings. You can manage administrator permissions, attendance events, screen and sound settings, operation conditions and actions, image logs, Wiegand, security tampering, and other various advanced features. Apply settings suitable for your environment to effectively manage the device."]
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
      id: "administrator",
      children: "Add administrators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.administrator",
        product: "2"
      }), " group, you can manage the device's administrators by permission level."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-administrator.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To add an administrator by permission level, click the ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.add",
        product: "2"
      }), " button. Refer to the permissions for each level below."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "table-fixed",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Level"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "User Information Management"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Device Settings"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.operatorLevel.all",
                product: "2"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.operatorLevel.user",
                product: "2"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "❌"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.operatorLevel.configuration",
                product: "2"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "❌"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Up to 1,000 administrators can be added. The number of administrators that can be added may vary depending on the device firmware version."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Settings"
            }), " allows changes to settings for screen and sound, network, RS-485, etc."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To delete an administrator, click the ", (0,jsx_runtime.jsx)(IcTrash2, {}), " button to the right of the administrator."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Administrators set for each device do not affect ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " permissions."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attendance-management",
      children: "Attendance management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tna",
        product: "2"
      }), " group allows you to change attendance event names or set attendance modes."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-tna.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaMode",
            product: "2"
          }), ": Set how attendance events are registered."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.unused",
                product: "2"
              }), ": Attendance events cannot be recorded."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.byUser",
                product: "2"
              }), ": The user can select the desired attendance event when authenticating."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.bySchedule",
                product: "2"
              }), ": Attendance events automatically change according to a set schedule. You can select a schedule to apply to attendance events."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.lastChoice",
                product: "2"
              }), ": The last used attendance event can continue to be used."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.fixed",
                product: "2"
              }), ": Only the selected attendance event can be used. Choose the fixed attendance event to use."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaRequired",
            product: "2"
          }), ": Set it to require the user to register an attendance event when authenticating."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This option can be used when the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.tnaMode",
              product: "2"
            }), " option is set to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.byUser",
              product: "2"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaEvent",
            product: "2"
          }), ": You can modify the names of attendance events or add schedules used when the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaMode",
            product: "2"
          }), " option is set to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.tna.mode.bySchedule",
            product: "2"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.eventKey",
                product: "2"
              }), ": This is a list of keys that can be used to register attendance."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.label",
                product: "2"
              }), ": You can change the name of the attendance event based on ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.eventKey",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.schedule",
                product: "2"
              }), ": You can set a schedule for automatic changes when the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.tnaMode",
                product: "2"
              }), " option is set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.bySchedule",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Devices without an LCD screen can set attendance modes to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.fixed",
              product: "2"
            }), " and ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.bySchedule",
              product: "2"
            }), " and can register fixed attendance events or attendance events that change according to a pre-set schedule. Supported device types include BioEntry P2, BioEntry W2, BioEntry Plus, BioEntry W, XPass, XPass S2, XPass D2, XPass 2."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about setting new schedules, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "screen-and-sound-settings",
      children: "Screen and sound settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change settings related to the device's screen and sound. Available options may vary depending on the device."
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "BioEntry P2, BioEntry W2, BioLite Net, BioEntry Plus, BioEntry W, XPass, XPass S2, XPass D2, XPass 2"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.language",
              product: "2"
            }), ": Set the language to be displayed on the device's screen. Click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.updateResource",
              product: "2"
            }), " button to send language resource files to the device."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.sound",
              product: "2"
            }), ": You can turn the sound on or off."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.menuTimeout",
              product: "2"
            }), ": Set the time it takes to switch from the menu screen to the idle screen."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.backlightTimeout",
              product: "2"
            }), ": Set the time before the screen light automatically turns off."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.msgTimeout",
              product: "2"
            }), ": Set the time before messages automatically disappear."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.ledBuzzer",
              product: "2"
            }), ": Select and set the event items that will activate the LED or buzzer."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.keypadBackLight",
              product: "2"
            }), ": You can turn the keypad backlight on or off. When this option is activated, the light behind the keypad turns on, making it easier to identify keys in dark environments."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.language",
                product: "2"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.menuTimeout",
                product: "2"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.backlightTimeout",
                product: "2"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.msgTimeout",
                product: "2"
              }), " options are supported by the BioLite Net model."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.keypadBackLight",
                product: "2"
              }), " option is available on XPass D2 hardware V02M and firmware version 1.7.1 or higher."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "BioStation 2, BioStation L2, BioLite N2, FaceLite"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.language",
              product: "2"
            }), ": Set the language to be displayed on the device's screen. Click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.updateResource",
              product: "2"
            }), " button to send language resource files to the device."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.volume",
              product: "2"
            }), ": Set the default sound level produced by the device."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.menuTimeout",
              product: "2"
            }), ": Set the time it takes to switch from the menu screen to the idle screen."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.theme",
              product: "2"
            }), ": Change the style of the home screen of the device."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.backlightTimeout",
              product: "2"
            }), ": Set the time before the screen light automatically turns off."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.msgTimeout",
              product: "2"
            }), ": Set the time before messages automatically disappear."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVoice",
              product: "2"
            }), ": You can use voice guidance instead of notification tones."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.background",
              product: "2"
            }), ": Set items to be displayed in the device's home screen background."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.logo",
                  product: "2"
                }), ": Users can display images they registered on the device's home screen. Click the ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.add",
                  product: "2"
                }), " button to register an image."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.notice",
                  product: "2"
                }), ": Administrators can display their input on the home screen."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.slideShow",
                  product: "2"
                }), ": Users can display up to 10 registered images as a slideshow on the home screen. Click the ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.add",
                  product: "2"
                }), " button to register an image."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["To reflect changes in real time on the device, click the ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " button."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["If you change the type of background wallpaper, clicking the ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " button will not apply it to the device. At the bottom of the screen, click the ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.apply",
                    product: "2"
                  }), " button."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["The options ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.notice",
                    product: "2"
                  }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.slideShow",
                    product: "2"
                  }), " are supported by the BioStation 2 model."]
                }), "\n"]
              }), "\n"]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.volume",
              product: "2"
            }), ": Set sound effects to play upon starting, successful authentication, and authentication failure events. Select ", (0,jsx_runtime.jsx)(_components.em, {
              children: "*.wav"
            }), " files up to 500Kb in file size. Click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.browse",
              product: "2"
            }), " button."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To reflect changes in real time on the device, click the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.update",
                product: "2"
              }), " button."]
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "BioStation 3, BioStation A2, FaceStation 2, FaceStation F2, X-Station 2"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.language",
              product: "2"
            }), ": Set the language to be displayed on the device's screen. Click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.updateResource",
              product: "2"
            }), " button to send language resource files to the device."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.volume",
              product: "2"
            }), ": Set the default sound level produced by the device."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.speakerVolume",
              product: "2"
            }), ": Set the volume of sound output from the device when using the IP intercom feature."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.micVolume",
              product: "2"
            }), ": Set the volume of sound input into the device when using the IP intercom feature."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.menuTimeout",
              product: "2"
            }), ": Set the time it takes to switch from the menu screen to the idle screen."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.backlightTimeout",
              product: "2"
            }), ": Set the time before the screen light automatically turns off."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.msgTimeout",
              product: "2"
            }), ": Set the time before messages automatically disappear."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useScreenSaver",
              product: "2"
            }), ": Reduces unnecessary power consumption by reducing LCD screen brightness when the device is not in use."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "This option is supported by the FaceStation 2, FaceStation F2, X-Station 2, and BioStation 3 models."
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVoice",
              product: "2"
            }), ": You can use voice guidance instead of notification tones."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.homeScreen",
              product: "2"
            }), ": Set items to be displayed in the device's home screen background."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.normal",
                  product: "2"
                }), ": Displays the default image on the home screen."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.logo",
                  product: "2"
                }), ": Users can display images they registered on the device's home screen. Click the ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.add",
                  product: "2"
                }), " button to register an image."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.notice",
                  product: "2"
                }), ": Administrators can display their input on the home screen."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["To reflect changes in real time on the device, click the ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " button."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["If you change the type of background wallpaper, clicking the ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " button will not apply it to the device. At the bottom of the screen, click the ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.apply",
                    product: "2"
                  }), " button."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Setting the home screen as ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.logo",
                    product: "2"
                  }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.slideShow",
                    product: "2"
                  }), " allows displaying up to 10 images as a slideshow on the home screen. Click the ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.add",
                    product: "2"
                  }), " button to register an image."]
                }), "\n"]
              }), "\n"]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.volume",
              product: "2"
            }), ": Set sound effects to play upon starting, successful authentication, and authentication failure events. Select ", (0,jsx_runtime.jsx)(_components.em, {
              children: "*.wav"
            }), " files up to 500Kb in file size. Click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.browse",
              product: "2"
            }), " button."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To reflect changes in real time on the device, click the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.update",
                product: "2"
              }), " button."]
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "triggerAction",
      children: "Trigger conditions and actions settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.triggerNAction",
        product: "2"
      }), " group, you can set action conditions and actions based on specific situations. For example, you can configure all alarms to sound when authentication fails or the device becomes unusable if the RS-485 connection is lost."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can register events by selecting them for action conditions and actions or set conditions and actions according to user preferences. Click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.triggerNAction",
        product: "2"
      }), " group and then click the ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.add",
        product: "2"
      }), " button on the right."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-triggernaction.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "triggerAction",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "triggerAction.trigger",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can select predefined events or add custom conditions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.event",
            product: "2"
          }), ": Select a predefined event."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.input",
            product: "2"
          }), ": Set custom conditions by selecting each item within the option."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.break_glass",
            product: "2"
          }), ": Set custom conditions by selecting each item within the option. You can configure it to only detect inputs without separate actions."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.trigger",
              product: "2"
            }), " is set to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.event",
              product: "2"
            }), ", you can select only one event from the event list."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When selecting the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.input",
              product: "2"
            }), " or ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.break_glass",
              product: "2"
            }), " options to set custom conditions, if your desired schedule is not available, click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.plusAddSchedule",
              product: "2"
            }), ". For more information about schedule settings, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the desired event name is not available when selecting the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.break_glass",
              product: "2"
            }), " option to set custom conditions, click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.addNewBreakGlassEvent",
              product: "2"
            }), ". When this event occurs, the event name will be displayed in the event log and real-time log."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Event names can be entered with a maximum of 64 characters."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "triggeraction",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "triggerAction.action",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can select predefined actions or add custom actions."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you select the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.output",
              product: "2"
            }), " option to set custom actions and your desired signal setting is not available, click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.addSignal",
              product: "2"
            }), " to configure it."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you selected ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.trigger",
              product: "2"
            }), " as ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.break_glass",
              product: "2"
            }), ", you can set ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.action",
              product: "2"
            }), " as ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.portNone",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "image-log-settings",
      children: "Image log settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.imageLog",
        product: "2"
      }), " group, you can set image log events and schedules used by the device."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.imageLog",
            product: "2"
          }), " option to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.configuration",
            product: "2"
          }), " and then click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus",
            product: "2"
          }), " to set your desired events and schedules."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-imagelog.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "This feature is supported by the BioStation A2, FaceStation 2, FaceStation F2, X-Station 2, and BioStation 3 models."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about the default settings of image logs, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-image-log",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiegang-settings",
      children: "Wiegand settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Wiegand"
      }), " group, you can configure input and output details related to Wiegand devices."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-wiegand.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandOutPulseWidth",
            product: "2"
          }), ": Set the pulse width for the Wiegand signal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.wiegand.inOutFormat",
            product: "2"
          }), ": Change the Wiegand format designated for the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.wiegand.out",
            product: "2"
          }), ": Configure the Wiegand signal output mode."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.card.wiegand.out.normal",
                product: "2"
              }), ": Scan cards using the configured Wiegand format. You can set error codes and select values to be sent if Wiegand card authentication fails."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.card.wiegand.out.bypass",
                product: "2"
              }), ": Send CSN regardless of Wiegand authentication. Set this if you are using it as a device without door control functionality."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandInOut",
            product: "2"
          }), ": Select the input and output mode."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandOutPulseInterval",
            product: "2"
          }), ": Set the pulse interval for the Wiegand signal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.wiegand.outputInfo",
            product: "2"
          }), ": Select the information that will be output to the device during authentication."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information about Wiegand format settings, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-credential-wiegand-format",
          children: "following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tamper-settings",
      children: "Security tamper settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If a tamper event occurs on the device, you can set it to delete all user information, logs, and security keys stored on the device. To activate the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tamperOn",
        product: "2"
      }), " feature, set it to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tamperOn.on",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-tamper.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analog-intercom-settings",
      children: "Analog intercom settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set whether to use an analog intercom. To use the intercom connected to the device, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.intercom.title",
        product: "2"
      }), " group and select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.use",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "This feature is supported only by the BioStation 2 model."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "camera-settings",
      children: "Camera settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set the camera frequency. Incorrectly setting the frequency in environments with fluorescent lights can cause flickering in images. Set the frequency for the local area in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.camera",
        product: "2"
      }), " group."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "This feature is supported by the FaceStation F2 and BioStation A2 models with firmware version 2.1.4 or higher."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Camera frequencies vary by geographic location. The USA typically uses 60Hz, while most other regions use 50Hz. For the camera frequency in your area, consult your dealer."
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