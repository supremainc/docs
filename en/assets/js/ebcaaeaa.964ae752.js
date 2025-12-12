"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["28827"], {
14924: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Contact the place of purchase to issue a device license."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "One feature is available per device license."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "You can include multiple device licenses in one device license file. (Supports up to 100)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "The device license file is an encrypted file and cannot be modified arbitrarily."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Device licenses are issued based on device ID. If the device ID is changed in an unusual way, the warranty service for the license is not provided."
      }), "\n"]
    }), "\n"]
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
85640: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_xstation_2_settings_mdx_ebc_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-xstation-2-settings-mdx-ebc.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_xstation_2_settings_mdx_ebc_namespaceObject = JSON.parse('{"id":"device/xstation_2/settings","title":"Settings","description":"Provides instructions on how to set system and device configurations.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/xstation_2/settings.mdx","sourceDirName":"device/xstation_2","slug":"/device/xstation_2/settings","permalink":"/docs/en/device/xstation_2/settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/xstation_2/settings.mdx","tags":[],"version":"current","frontMatter":{"id":"settings","title":"Settings","description":"Provides instructions on how to set system and device configurations.","keywords":["Display","Sound","Network","Device"],"isTranslationMissing":false},"sidebar":"xstation2","previous":{"title":"Authentication","permalink":"/docs/en/device/xstation_2/authentication"},"next":{"title":"Event Logs","permalink":"/docs/en/device/xstation_2/event-log"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_device-license-info.mdx
var _device_license_info = __webpack_require__(14924);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/xstation_2/settings.mdx


const frontMatter = {
	id: 'settings',
	title: 'Settings',
	description: 'Provides instructions on how to set system and device configurations.',
	keywords: [
		'Display',
		'Sound',
		'Network',
		'Device'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*

### Master Admin

You can change the authentication method of the Master Admin.

1. Click <Image src='/img/common/ico-menu2.svg' ico alone /> and authenticate with administrator privileges.

2. Select <Cmd sid='ui_280' product='dev' /> → <Cmd sid='ui_128' product='dev' />.

3. Configure the desired authentication methods.

<div className='grid-container'>

<Image src='/img/device/xs2-master-admin.png' />

<Image src='/img/device/xs2-master-admin-setting-credential2.png' />

</div>

:::info

* You must enroll at least two types of credentials.

* This feature is available only on new devices running firmware v#.#.# or later.

:::

### Administrator two-step authentication \{#admin-2-step-authentication}

Devices with upgraded firmware do not provide <Cmd sid='ui_128' product='dev' /> Setting; enhance device security by elevating full admin privileges through the <Cmd sid='ui_073' product='dev' /> option.

1. Click <Image src='/img/common/ico-menu2.svg' ico alone /> and authenticate with administrator privileges.

2. Select <Cmd sid='ui_280' product='dev' /> → <Cmd sid='ui_073' product='dev' />.

<Image src='/img/device/xs2-administrator-two-step-auth.png' />

:::info

* <Cmd sid='ui_073' product='dev' /> is available after upgrading the firmware to v#.#.# or later, and the firmware cannot be downgraded to an earlier version after the upgrade.

* The first step of authentication is default unless the <Cmd sid='ui_073' product='dev' /> option is enabled.

* If there are not two types of credentials enrolled for all administrators, activation fails and an error message is displayed. Enroll two types of credentials for all administrators and try again.

<Image src='/img/how-to/error-two-step-authentication.png' className='none' width='300px' />

:::

:::caution

If you delete all administrators' credentials to below type 2 after enabling <Cmd sid='ui_073' product='dev' />, you will no longer have access to the administrator menu without being able to connect to BioStar X. Therefore, you need to be particularly careful when deleting administrator credentials.

:::
*/



const toc = [{
  "value": "Display &amp; Sound",
  "id": "display--sound",
  "level": 2
}, {
  "value": "Network",
  "id": "network",
  "level": 2
}, {
  "value": "Ethernet",
  "id": "ethernet",
  "level": 3
}, {
  "value": "Server",
  "id": "server",
  "level": 3
}, {
  "value": "OSDP settings",
  "id": "osdp-settings",
  "level": 3
}, {
  "value": "Device",
  "id": "device",
  "level": 2
}, {
  "value": "License",
  "id": "license",
  "level": 3
}, ..._device_license_info/* .toc */.RM, {
  "value": "Relay",
  "id": "relay",
  "level": 3
}, {
  "value": "Date &amp; Time",
  "id": "date-time",
  "level": 3
}, {
  "value": "Daylight saving time",
  "id": "daylight-saving-time",
  "level": 3
}, {
  "value": "Device Information",
  "id": "device-information",
  "level": 3
}, {
  "value": "Memory information",
  "id": "memory-information",
  "level": 3
}, {
  "value": "USB memory",
  "id": "usb-memory",
  "level": 3
}, {
  "value": "Secure Tamper",
  "id": "secure-tamper",
  "level": 3
}, {
  "value": "Restart device",
  "id": "restart-device",
  "level": 3
}, {
  "value": "Restore default",
  "id": "restore-default",
  "level": 3
}, {
  "value": "User ID type",
  "id": "user-id-type",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Provides instructions on how to set system and device configurations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "display--sound",
      children: "Display & Sound"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the display and sound settings of the device."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_366",
            product: "dev"
          }), " and change the desired item."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-displaysound.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_364",
                product: "dev"
              }), ": You can choose items to display in the background of the home screen."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_227",
                product: "dev"
              }), ": You can select the language that will be displayed on the screen."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_284",
                product: "dev"
              }), ": Set whether to use a Private Message, which will be displayed on the screen when the user authenticates. The ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_284",
                product: "dev"
              }), " can be set using the BioStar Device SDK. If not set, does not display a message when authentication is successful even if ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_284",
                product: "dev"
              }), " is enabled on the device."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_184",
                product: "dev"
              }), ": Set whether to use a Private Message, which will be displayed on the screen when the user authenticates. ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_184",
                product: "dev"
              }), " can be set using the BioStar X API. If not set, does not display a message when authentication is successful even if ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_184",
                product: "dev"
              }), " is enabled on the device."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_365",
                product: "dev"
              }), ": Set whether the screen saver is enabled or not. It reduces unnecessary energy consumption by lowering the brightness of the screen when the device is not in use."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_131",
                product: "dev"
              }), ": Set the time (sec) for the menu screen to disappear automatically. If there is no button input during a set time, the screen will return to the home screen."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_135",
                product: "dev"
              }), ": Set the time (sec) for a setting complete message or notification message to disappear automatically."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_148",
                product: "dev"
              }), ": Set the time (sec) to turn off the lighting of the screen."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_251",
                product: "dev"
              }), ": You can use voice guidance instead of notification tones."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_153",
                product: "dev"
              }), ": Set the volume."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on the BioStar Device SDK, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://kb.supremainc.com/bs2sdk/doku.php",
          children: "BioStar Device SDK page"
        }), " on the Suprema Knowledge Base."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "network",
      children: "Network"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the network settings of the device, such as Ethernet, server, OSDP, etc."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ethernet",
      children: "Ethernet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_344",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_252",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Change the desired item."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-network-ethernet.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_012",
                product: "dev"
              }), ": Set whether to use DHCP. By turning off DHCP settings, the user can modify ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_290",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_029",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_068",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_192",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_111",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_290",
                product: "dev"
              }), ": Set the device's port."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_029",
                product: "dev"
              }), ": You can check the device's IP address. To modify, disable DHCP setting."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_068",
                product: "dev"
              }), ": You can check the device's gateway. To modify, disable DHCP setting."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_192",
                product: "dev"
              }), ": You can check the device's subnet mask. To modify, disable DHCP setting."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_111",
                product: "dev"
              }), ": Set the DNS server address."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To save the settings, press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "server",
      children: "Server"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_344",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_180",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Change the desired item."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-network-server.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_283",
                product: "dev"
              }), ": You can send a connection signal from the device to a server with the input information directly. When ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_283",
                product: "dev"
              }), " is enabled, the user can input ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_182",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_183",
                product: "dev"
              }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_189",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_182",
                product: "dev"
              }), ": Enter the IP address of the PC on which BioStar X is installed."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_183",
                product: "dev"
              }), ": You can enter ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_183",
                product: "dev"
              }), " instead of ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_182",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_189",
                product: "dev"
              }), ": Enter the port of the PC on which BioStar X is installed."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To save the settings, press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "osdp-settings",
      children: "OSDP settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_344",
            product: "dev"
          }), " and set the desired item in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_039",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-network-osdp.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_049",
                product: "dev"
              }), ": Select the RS-485 mode."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_297",
                product: "dev"
              }), ": Select the desired baud rate."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_257",
                product: "dev"
              }), ": When using ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_269",
                product: "dev"
              }), ", select to display the authentication results of 3rd party controllers or devices on the screen. This option can be used when ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_049",
                product: "dev"
              }), " mode is set to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_088",
                product: "dev"
              }), " or ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_205",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To save the settings, press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device",
      children: "Device"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "license",
      children: "License"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can activate the device license or check ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_206",
        product: "dev"
      }), " and ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_292",
        product: "dev"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_119",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To activate the device license, connect the USB containing the license to the device and select ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add2.svg",
            ico: true,
            alone: true
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-license.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Licenses that can be activated appear on the screen. Activate the desired license."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-license1.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_device_license_info/* ["default"] */.Ay, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relay",
      children: "Relay"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set the input ports of ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_144",
        product: "dev"
      }), " and ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_015",
        product: "dev"
      }), " on the device."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_122",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-relay.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_122",
                product: "dev"
              }), ": You can set whether relay is enabled or not. Enabling relay settings will allow you to configure ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_144",
                product: "dev"
              }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_015",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_144",
                product: "dev"
              }), ": Set the duration for the door to remain open when standard user authentication has been carried out."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_015",
                product: "dev"
              }), ": Select the input port connected to the exit button."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_274",
                product: "dev"
              }), ": Select the type of switch (", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_036",
                product: "dev"
              }), " or ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_035",
                product: "dev"
              }), ") for the Exit Button's input port."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "date-time",
      children: "Date & Time"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set date and time. Set the date and time accurately in order to collect accurate log data."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_098",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Change the desired item."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-datetime.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_098",
                product: "dev"
              }), ": Check the current date and time. To modify it manually, disable ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_208",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_358",
                product: "dev"
              }), ": Set the time reference of the current location."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_208",
                product: "dev"
              }), ": Synchronize the server and the time. If you wish to synchronize the server and the time, enable ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_208",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_097",
                product: "dev"
              }), ": You can set the date format. You can select ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_062",
                product: "dev"
              }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_033",
                product: "dev"
              }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_009",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_209",
                product: "dev"
              }), ": You can set the time format. You can select ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_238",
                product: "dev"
              }), " and ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_005",
                product: "dev"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "daylight-saving-time",
      children: "Daylight saving time"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can use the device by applying daylight saving time. Set the start and end time correctly."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_270",
            product: "dev"
          }), ", then press ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add2.svg",
            ico: true,
            alone: true
          }), " to add daylight savings time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Change the desired item."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-dst.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_253",
                product: "dev"
              }), ": You can view the name of the daylight savings time."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_217",
                product: "dev"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_218",
                product: "dev"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_216",
                product: "dev"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_215",
                product: "dev"
              }), ": Set details of when daylight-saving time begins."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_094",
                product: "dev"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_095",
                product: "dev"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_093",
                product: "dev"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_092",
                product: "dev"
              }), ": Set details of when daylight-saving time ends."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To save the settings, press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-information",
      children: "Device Information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can view the model name, device ID, serial number, device and firmware version, kernel, and MAC address."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_289",
            product: "dev"
          }), ". You can check the information of ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_136",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_282",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_210",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_019",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_017",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_332",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_031",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-info.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory-information",
      children: "Memory information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "View the status of memory usage."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_134",
            product: "dev"
          }), ". You can view the memory usage status of the device."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-memory.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usb-memory",
      children: "USB memory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Connect USB Memory and import user information to the device or export log and user information from the device. You can also upgrade the firmware."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_061",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the desired item and change the setting."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xs2-usb.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_063",
                product: "dev"
              }), ": Import user information from the connected USB memory."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_100",
                product: "dev"
              }), ": Select information you wish to export to the connected USB memory."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_353",
                product: "dev"
              }), ": Upgrade the firmware if the firmware files are saved in the connected USB memory."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Do not disconnect the power supply while upgrading the firmware of the device. The device may malfunction."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "secure-tamper",
      children: "Secure Tamper"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can set whether to use security tamper. When the tamper is turned on, you can set to delete the entire user, the entire log, and the security key."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Activate ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_150",
            product: "dev"
          }), " to delete data of all registered users, all logs, and secure keys when a temper event occurs."]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "restart-device",
      children: "Restart device"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The user can restart the device."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_286",
            product: "dev"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " to restart the device. Press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_321",
            product: "dev"
          }), " to return to the previous screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "restore-default",
      children: "Restore default"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Device settings, network settings, and operator levels will be reset."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_089",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_304",
                product: "dev"
              }), ": Initializes all settings stored on the device. Press ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_367",
                product: "dev"
              }), " to initialize all device settings. Press ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_321",
                product: "dev"
              }), " to return to the previous screen."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_104",
                product: "dev"
              }), ": Initializes all settings except for network settings. Press ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_367",
                product: "dev"
              }), " to initialize all settings except for network settings. Press ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_321",
                product: "dev"
              }), " to return to the previous screen."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_072",
                product: "dev"
              }), ": Deletes all information saved in the device and the root certificate, restoring settings to default."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_121",
                product: "dev"
              }), ": Deletes the root certificate saved in the device."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you proceed with ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_089",
            product: "dev"
          }), ", the device will restart."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When you reset, the operator level will be reset as well. After resetting, make sure to set the operator level again."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Language setting will not change after resetting."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_072",
              product: "dev"
            }), " menu can be used when the root certificate is saved in the device."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_121",
              product: "dev"
            }), " menu can be used only when the root certificate is saved in the device and an administrator has been designated."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-id-type",
      children: "User ID type"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select the type of user ID to register to the device."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), " and authenticate with administrator privileges."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_280",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_168",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_200",
                product: "dev"
              }), ": You can enter a user ID with numbers only."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_237",
                product: "dev"
              }), ": You can enter a user ID using alphanumeric characters and certain symbols ", (0,jsx_runtime.jsx)(_components.code, {
                children: "_"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "-"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To save the settings, press ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "."]
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