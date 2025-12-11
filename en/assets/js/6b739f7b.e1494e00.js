"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["47580"], {
92164: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_device_manager_xpd_2_settings_mdx_6b7_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-device-manager-xpd-2-settings-mdx-6b7.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_device_manager_xpd_2_settings_mdx_6b7_namespaceObject = JSON.parse('{"id":"device/device_manager/xpd2-settings","title":"Set Up XPass D2","description":"You can configure settings to apply to XPass D2 as a template and then directly apply them to individual devices.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/device_manager/xpd2-settings.mdx","sourceDirName":"device/device_manager","slug":"/device/device_manager/xpd2-settings","permalink":"/en/device/device_manager/xpd2-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/device_manager/xpd2-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"xpd2-settings","title":"Set Up XPass D2","description":"You can configure settings to apply to XPass D2 as a template and then directly apply them to individual devices.","keywords":["XPass D2","Template","Device search","Device connection","Firmware upgrade","Restart device","Administrator password"],"isTranslationMissing":false},"sidebar":"device_manager","previous":{"title":"Set Up IP Device","permalink":"/en/device/device_manager/ip-device-settings"},"next":{"title":"Appendices","permalink":"/en/device/device_manager/appendices"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/device_manager/xpd2-settings.mdx


const frontMatter = {
	id: 'xpd2-settings',
	title: 'Set Up XPass D2',
	description: 'You can configure settings to apply to XPass D2 as a template and then directly apply them to individual devices.',
	keywords: [
		'XPass D2',
		'Template',
		'Device search',
		'Device connection',
		'Firmware upgrade',
		'Restart device',
		'Administrator password'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Add template",
  "id": "template-add",
  "level": 2
}, {
  "value": "Set Template Name and Admin Password",
  "id": "set-template-name-and-admin-password",
  "level": 3
}, {
  "value": "Interface",
  "id": "interface",
  "level": 3
}, {
  "value": "Authentication",
  "id": "authentication",
  "level": 3
}, {
  "value": "Wiegand Card Format",
  "id": "wiegand-card-format",
  "level": 3
}, {
  "value": "Suprema Smart Card Layout",
  "id": "suprema-smart-card-layout",
  "level": 3
}, {
  "value": "Custom Smart Card Layout",
  "id": "custom-smart-card-layout",
  "level": 3
}, {
  "value": "Keypad Setting",
  "id": "keypad-setting",
  "level": 3
}, {
  "value": "Others",
  "id": "others",
  "level": 3
}, {
  "value": "LED / Buzzer",
  "id": "led--buzzer",
  "level": 3
}, {
  "value": "Apply template",
  "id": "apply-template",
  "level": 2
}, {
  "value": "Manage templates",
  "id": "manage-templates",
  "level": 2
}, {
  "value": "Edit template",
  "id": "edit-template",
  "level": 3
}, {
  "value": "Delete template",
  "id": "delete-template",
  "level": 3
}, {
  "value": "Export template",
  "id": "export-template",
  "level": 3
}, {
  "value": "Import template",
  "id": "import-template",
  "level": 3
}, {
  "value": "Search and connect device",
  "id": "device-search-connect",
  "level": 2
}, {
  "value": "Upgrade device firmware",
  "id": "device-firmware-upgrade",
  "level": 2
}, {
  "value": "Restart device",
  "id": "restart-device",
  "level": 2
}, {
  "value": "Change admin password",
  "id": "admin-password-change",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "You can configure settings to apply to XPass D2 as a template and then directly apply them to individual devices. You can apply settings much faster than by accessing the management program on a PC or using command cards."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Some settings may not apply if the device's firmware version is low. To apply all settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#device-firmware-upgrade",
          children: "Upgrade device firmware"
        }), " to upgrade the firmware."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "template-add",
      children: "Add template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set RS-485 communication, card format, keypad settings, PIN, LED, and buzzer before adding them as a template. Adding a template allows you to quickly and easily apply settings without configuring each individual device every time."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run the Suprema Device Manager on your mobile device."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select XPass D2 on the main screen."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add.svg",
            ico: true,
            alone: true
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-add.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the device model for which you want to create the template."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After configuring each item, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_295",
            product: "dev"
          }), " to save the template."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "You can add up to 100 templates."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-template-name-and-admin-password",
      children: "Set Template Name and Admin Password"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-name-pw.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_341",
            product: "dev"
          }), ": Enter the desired template name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_074",
            product: "dev"
          }), ": Enter the administrator password."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The administrator password can be set to 6-32 digits."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Be careful not to lose the administrator password. If you lose the administrator password, you will need to initialize the device to connect to the device with the applied template."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on changing the administrator password, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#admin-password-change",
              children: "Change admin password"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interface",
      children: "Interface"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-interface.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_038",
            product: "dev"
          }), ": Set the OSDP address to be used in communication between the device and the master device. Can be set to numbers from 0~126."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_298",
            product: "dev"
          }), ": Set the RS-485 transmission speed."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "authentication",
      children: "Authentication"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-auth-cardtype.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_328",
            product: "dev"
          }), ": You can set the type of card to be used by the device."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_008",
                product: "dev"
              }), ": You can select the CSN card type and set the byte order."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_201",
                product: "dev"
              }), ": You can select the types of smart cards issued by Suprema."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_333",
                product: "dev"
              }), ": You can select the types of smart cards issued by third parties."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_139",
                product: "dev"
              }), ": You can set the mobile card type."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["When set to ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_034",
          product: "dev"
        }), ", card data is processed in left-to-right order, sequentially processing from large byte to small byte order when saving the card's serial number (CSN). ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_030",
          product: "dev"
        }), " processes the card's serial number (CSN) from small byte to large byte order when saving it."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wiegand-card-format",
      children: "Wiegand Card Format"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-wiegand-card.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_354",
            product: "dev"
          }), ": You can set the Wiegand card format to be specified for the device. The card data is processed according to the set format."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_179",
                product: "dev"
              }), ": If the desired format is not available, you can click ", (0,jsx_runtime.jsx)(IcAdd, {}), " to add a new Wiegand format."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/xpd2-template-wiegand-card-new.png",
              width: 250
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_253",
                    product: "dev"
                  }), ": Enter the name of the desired Wiegand format."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_318",
                    product: "dev"
                  }), ": Enter the total number of bits."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_024",
                    product: "dev"
                  }), ": Enter the start and end bits of the ID you wish to use. Tap ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-add3.svg",
                    ico: true,
                    alone: true
                  }), " ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_319",
                    product: "dev"
                  }), " to add an ID field."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_350",
                    product: "dev"
                  }), ": Enter the position of the parity field and the start and end bits you wish to use. Tap ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-add3.svg",
                    ico: true,
                    alone: true
                  }), " ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_319",
                    product: "dev"
                  }), " to add a parity field."]
                }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
                  type: "info",
                  children: (0,jsx_runtime.jsx)(_components.p, {
                    children: "To add a parity field, enter the total bits."
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_352",
            product: "dev"
          }), ": You can set the pulse width of the Wiegand signal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_351",
            product: "dev"
          }), ": You can set the pulse interval of the Wiegand signal."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "suprema-smart-card-layout",
      children: "Suprema Smart Card Layout"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-suprema-card.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_151",
            product: "dev"
          }), ": You can set whether to use the auxiliary site key. By setting the auxiliary site key, you can use it for authentication when the card's main key does not match."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_032",
            product: "dev"
          }), ": You can set up MIFARE cards."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), ": You can set the encryption type to Crypto-1 or AES-128."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), ": The key that encrypts communication between smart cards and the device."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), ": You can use it to authenticate when the card's main site key does not match. The auxiliary site key field is only displayed when ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " from the previous depth is activated."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_214",
                product: "dev"
              }), ": Select the starting block where each template will be stored. This block is the index of the block where user information is stored; set it to a storable block if the user is already using the smart card. Can only be set for MIFARE."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_010",
            product: "dev"
          }), ": You can set up DESFire cards."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_011",
                product: "dev"
              }), ": You can use DESFire cards issued by third parties. Only DESCire can be configured."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), ": The key that encrypts communication between smart cards and the device."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), ": You can use it to authenticate when the card's main site key does not match. The auxiliary site key field is only displayed when ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " from the previous depth is activated."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_223",
                product: "dev"
              }), ": Set the application ID. Serves as a kind of directory that includes a file ID. Only DESCire can be configured."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_347",
                product: "dev"
              }), ": Set the file ID. Only DESCire can be configured."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), ": You can set the encryption type to DES/3DES or AES."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_202",
            product: "dev"
          }), ": You can set the byte order for smart card output."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To use ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_011",
              product: "dev"
            }), ", please accurately enter the information for ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_225",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_349",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_223",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_347",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_222",
              product: "dev"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), " can only accept up to 32 bytes of hexadecimal."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When set to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_034",
              product: "dev"
            }), ", card data is processed in left-to-right order, sequentially processing from large byte to small byte order when saving the card's serial number (CSN). ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_030",
              product: "dev"
            }), " processes the card's serial number (CSN) from small byte to large byte order when saving it."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-smart-card-layout",
      children: "Custom Smart Card Layout"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-custom-card.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_151",
            product: "dev"
          }), ": You can set whether to use the auxiliary site key. By setting the auxiliary site key, you can use it for authentication when the card's main key does not match."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_032",
            product: "dev"
          }), ": You can set up MIFARE cards."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), ": You can set the encryption type to Crypto-1 or AES-128."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), ": The key that encrypts communication between smart cards and the device."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), ": You can use it to authenticate when the card's main site key does not match. The auxiliary site key field is only displayed when ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " from the previous depth is activated."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_154",
                product: "dev"
              }), ": Select the starting block where each template will be stored. This block is the index of the block where user information is stored; set it to a storable block if the user is already using the smart card. Can only be set for MIFARE."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_145",
                product: "dev"
              }), ": You can set the starting point for reading the card number."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_110",
                product: "dev"
              }), ": (If the set values of ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " are the same as the values of the card) You can set the size of the data to read from the card."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_010",
            product: "dev"
          }), ": You can set up DESFire cards."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_011",
                product: "dev"
              }), ": You can use DESFire cards issued by third parties. Only DESCire can be configured."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), ": The key that encrypts communication between smart cards and the device."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), ": You can use it to authenticate when the card's main site key does not match. The auxiliary site key field is only displayed when ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " from the previous depth is activated."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_223",
                product: "dev"
              }), ": Set the application ID. Serves as a kind of directory that includes a file ID. Only DESCire can be configured."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_347",
                product: "dev"
              }), ": Set the file ID. Only DESCire can be configured."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), ": You can set the encryption type to DES/3DES or AES."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_145",
                product: "dev"
              }), ": You can set the starting point for reading the card number."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_110",
                product: "dev"
              }), ": (If the set values of ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " are the same as the values of the card) You can set the size of the data to read from the card."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_146",
            product: "dev"
          }), ": You can set the byte order for smart card output."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To use ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_011",
              product: "dev"
            }), ", please accurately enter the information for ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_225",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_349",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_223",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_347",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_222",
              product: "dev"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), " can only accept up to 32 bytes of hexadecimal."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When set to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_034",
              product: "dev"
            }), ", card data is processed in left-to-right order, sequentially processing from large byte to small byte order when saving the card's serial number (CSN). ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_030",
              product: "dev"
            }), " processes the card's serial number (CSN) from small byte to large byte order when saving it."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "keypad-setting",
      children: "Keypad Setting"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-keypad.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_335",
            product: "dev"
          }), ": You can set whether to use the keypad. When the keypad is activated, you can authenticate by entering the card ID using the keypad."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_219",
            product: "dev"
          }), ": Each time you press a key while entering the card ID on the keypad, the value will be sent."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_306",
            product: "dev"
          }), ": When entering the card ID on the keypad, all keys need to be pressed, and then press the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "#"
          }), " key to send the entire value at once."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_327",
            product: "dev"
          }), ": When the device's authentication mode is set to card + PIN, pressing the card will activate the LED to prompt the user to enter the PIN."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_147",
            product: "dev"
          }), ": You can turn the keypad backlight on or off."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_336",
              product: "dev"
            }), " is only displayed on the template setting screen of the XPD2-GKDB device."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_147",
              product: "dev"
            }), " is only supported on XPD2-GKDB hardware V02M and firmware version v1.7.1 or higher."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Values entered through the keypad are transmitted in 4-bit units by default. Card IDs entered through the keypad are sent in the same format as the Wiegand card format."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "others",
      children: "Others"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-others.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_150",
          product: "dev"
        }), ": You can set it so that when a tamper event occurs in the device, the security key stored in the device will be deleted. To use the security tamper feature, activate it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "led--buzzer",
      children: "LED / Buzzer"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/device-manager-led-buzzer.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_272",
            product: "dev"
          }), ": You can set the colors displayed on the device LED during normal operation."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_325",
            product: "dev"
          }), ": You can set the color displayed on the device LED and the number of times the buzzer sound plays when scanning a card."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_262",
            product: "dev"
          }), ": You can set the color displayed on the device LED and the number of times the buzzer sound plays upon successful authentication."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_263",
            product: "dev"
          }), ": You can set the color displayed on the device LED and the number of times the buzzer sound plays upon failed authentication."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "LED can be set to display a maximum of three colors in alternating patterns. Press the slot to choose a color."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Selecting ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/common/ico-cancel2.svg",
              ico: true,
              alone: true
            }), " skips the color sequence for that slot and displays the color set for the next slot."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "apply-template",
      children: "Apply template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The added templates can be applied uniformly to multiple devices via BLE communication."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Some settings may not apply if the device's firmware version is low. To apply all settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#device-firmware-upgrade",
          children: "Upgrade device firmware"
        }), " to upgrade the firmware."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enable Bluetooth on your mobile device and run Suprema Device Manager."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select XPass D2 on the main screen."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_343",
            product: "dev"
          }), ". A list of available templates will appear."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-choose-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the desired template from the list of templates."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_212",
            product: "dev"
          }), " to continue."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-choose-select-start.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Make sure the back of your mobile device touches the device to which you want to apply the template."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once the template application is complete, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Settings changed using Suprema Device Manager are only applied to the device and will not be synchronized with the server."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If the device is connected to the master device or if the Wiegand output settings have changed, it cannot be connected to Suprema Device Manager with the main key. To connect with Suprema Device Manager, you must initialize the device."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manage-templates",
      children: "Manage templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edit-template",
      children: "Edit template"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run the Suprema Device Manager on your mobile device."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select XPass D2 on the main screen."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the template you want to edit from the list of templates."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#template-add",
            children: "Add template"
          }), " to edit the template."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To save the changed settings, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_295",
            product: "dev"
          }), "; to save as a new template, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_178",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "delete-template",
      children: "Delete template"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run the Suprema Device Manager on your mobile device."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select XPass D2 on the main screen."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the template you wish to delete from the list of templates."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-delete.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " to delete a template."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-select-del.png",
          width: 250
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "export-template",
      children: "Export template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can export templates for XPass D2 settings from the app."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run the Suprema Device Manager on your mobile device."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select XPass D2 on the main screen."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-export1.png",
          className: "none",
          width: 840
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["At the top of the template list, tap ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), " and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_339",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After selecting the template to export, tap ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-check.svg",
            ico: true,
            alone: true
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-export2.png",
          width: 250
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Templates will be saved in the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "DeviceManager_TemplateFiles"
        }), " folder created in the same location as the Suprema Device Manager application installation file."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "import-template",
      children: "Import template"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can import templates for XPass D2 settings into the app."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run the Suprema Device Manager on your mobile device."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select XPass D2 on the main screen."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-import.png",
          className: "none",
          width: 840
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["At the top of the template list, tap ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), " and select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_337",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the template you want to import from the folder where the templates are stored."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Templates will be saved in the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "DeviceManager_TemplateFiles"
        }), " folder created in the same location as the Suprema Device Manager application installation file."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device-search-connect",
      children: "Search and connect device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can search for and connect to XPass D2 installed nearby. By connecting to Suprema Device Manager, you can upgrade the firmware of the device or use features such as restarting the device or changing the template password."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enable Bluetooth on your mobile device and run Suprema Device Manager."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select XPass D2 on the main screen."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_285",
            product: "dev"
          }), ". A list of connectable devices will appear."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-search-device-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select a device by checking the device ID in the device list or bring your mobile device close to the device to connect."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the connection password. Tap ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-password.svg",
            ico: true,
            alone: true
          }), " to display the entered password."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " to complete the device connection."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device-firmware-upgrade",
      children: "Upgrade device firmware"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can easily upgrade the device's firmware."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To upgrade the firmware, you need to download the firmware file to your mobile device. The latest firmware can be downloaded from the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://download.supremainc.com/",
              children: "Suprema Download Center"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "During the firmware upgrade, keep the distance between the device and mobile device within 1m."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#device-search-connect",
            children: "Search and connect device"
          }), " to connect to the device you want to upgrade the firmware."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_018",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-fwupgrade.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the firmware from the path where the firmware file is saved. The firmware upgrade is in progress."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " to complete the firmware upgrade."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "restart-device",
      children: "Restart device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can restart the device."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#device-search-connect",
            children: "Search and connect device"
          }), " to connect to the device you want to restart."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_287",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-restart.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When you restart the device, the BLE communication connection with the mobile device will be disconnected. To reconnect automatically, enable the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_276",
            product: "dev"
          }), " feature. For detailed configuration instructions, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "initial-setup#app-settings",
            children: "Configuring app settings"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "admin-password-change",
      children: "Change admin password"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the admin password of the template."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#device-search-connect",
            children: "Search and connect device"
          }), " to connect to the device with the template where you want to change the password."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_156",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-password.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enter the current password and the new password you will use."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-manager-change-password.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " to complete the password change."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The administrator password can be set to 6-32 digits."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Be careful not to lose the administrator password. If you lose the administrator password, you will need to initialize the device to connect to the device with the applied template."
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