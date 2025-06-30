"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8059"], {
2784: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_adding_devices_mdx_e2f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-adding-devices-mdx-e2f.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_adding_devices_mdx_e2f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-adding-devices","title":"Register Device","description":"This guide decripte how to register a device in BioStar X.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-adding-devices.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-adding-devices","permalink":"/docs/en/platform/biostar_x/settings-adding-devices","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-adding-devices.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-adding-devices","title":"Register Device","description":"This guide decripte how to register a device in BioStar X.","keywords":["Device","Add device"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Manage Device Groups","permalink":"/docs/en/platform/biostar_x/settings-manage-device-group"},"next":{"title":"Register Wiegand Credentials","permalink":"/docs/en/platform/biostar_x/settings-adding-wiegand"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-adding-devices.mdx


const frontMatter = {
	id: 'settings-adding-devices',
	title: 'Register Device',
	description: 'This guide decripte how to register a device in BioStar X.',
	keywords: [
		'Device',
		'Add device'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Before start",
  "id": "before-start",
  "level": 2
}, {
  "value": "Quick registration",
  "id": "quickadd-device",
  "level": 2
}, {
  "value": "IP address setting",
  "id": "setipaddress",
  "level": 3
}, {
  "value": "Device search options",
  "id": "devicesearchoptions",
  "level": 3
}, {
  "value": "Advanced search",
  "id": "advancedsearch",
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
  }, {Cmd, IcEdit, IcMoreW, IcSet, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcSet) _missingMdxReference("IcSet", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide explains how to register a device in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Registering a device allows ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " to monitor and manage the status of that device. Ensure the device is properly connected before searching for it. It’s convenient to know the location, ID, IP address, and other details in advance when adding multiple devices at once."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When registering a new device, change the device key value to the server's data encryption key value. All user data on the device will be deleted during the key conversion."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To delete all setting information and user data stored on the device and resend them, click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), ". You can find the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), " option by selecting the device from the device list and clicking the ", (0,jsx_runtime.jsx)(IcMoreW, {}), " button."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To register all devices in the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "menu.device.waitingDevice",
              product: "2"
            }), " group, right-click the group name and click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.menu.addAllWaitingDevices",
              product: "2"
            }), ". To register devices individually, right-click on the device name and click ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.menu.addWaitingDevice",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the user ID type on ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " differs from the device, change the device settings according to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "’s user ID configuration."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the user ID type on ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " is set to alphanumeric, some devices may not be usable or may have restrictions. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-server-server#user-and-device-management",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To register the device and set details, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-adding-devices",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "Before start"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check the following before registering the device."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set access levels, access groups, and floor levels for access control. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-access-control",
          children: "following"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quickadd-device",
      children: "Quick registration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Devices on the same network as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " can be automatically searched and registered."]
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
            children: "Device"
          }), " on the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.searchDevice",
            product: "2"
          }), " in the device list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.searchDevice",
            product: "2"
          }), " window appears, a list of all devices that can be registered will be displayed. If the desired device is not in the list, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.search",
            product: "2"
          }), " in the top right corner."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-add-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the devices to register or uncheck those you do not want to register."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To change the name of the device to be registered, click ", (0,jsx_runtime.jsx)(IcEdit, {}), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.name",
            product: "2"
          }), " column and make the change."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-add-device-rename.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To specify the group for the device to be registered, select it in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.group",
            product: "2"
          }), " column."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-add-device-group.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once all settings for the selected devices are complete, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The added devices will appear in the device list. Select the added device and click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.syncDevice",
        product: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-sync-device.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Devices for which the IP address is unavailable or needs to be changed can be modified by clicking ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.setIp",
          product: "2"
        }), ". For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "##setipaddress",
          children: "following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setipaddress",
      children: "IP address setting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can change the IP address of the device to be registered. Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.setIp",
        product: "2"
      }), " at the bottom left of the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.searchDevice",
        product: "2"
      }), " window. When the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.setIp",
        product: "2"
      }), " window appears, select the device to change the IP address."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-set-ip.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useDhcp",
            product: "2"
          }), ": Select this option to allow the device to automatically obtain an IP address via DHCP. Selecting this option may result in the IP address changing each time the device connects to the network."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "To manually enter the IP address, subnet mask, gateway, etc., deselect this option."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceToServerConnection",
            product: "2"
          }), ": Select this option to configure the device to connect to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " server. You will need to enter the IP address and port number of the server where ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " is installed."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["After completing all IP settings and saving changes, click ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), ". To cancel changes, click ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.cancel",
          product: "2"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "devicesearchoptions",
      children: "Device search options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can set device search options by clicking ", (0,jsx_runtime.jsx)(IcSet, {}), " at the top right of the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.searchDevice",
        product: "2"
      }), " window."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-add-device-option.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.showNewDevicesOnly",
            product: "2"
          }), ": Select this option to display only newly discovered devices in the search list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.timeout",
            product: "2"
          }), ": Set the desired time to exclude devices that do not respond for a certain period from the search list. This can be set in seconds, with a default of 3 seconds."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advancedsearch",
      children: "Advanced search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can specify the IP address and port number of a specific device to registrer it."
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
            children: "Device"
          }), " on the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.advancedSearch",
            product: "2"
          }), " in the device list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.advancedSearch",
            product: "2"
          }), " window appears, enter the IP address and port number of the device to be registered."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-advanced-search.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.search",
            product: "2"
          }), " to display devices matching the entered criteria."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-advanced-search-result.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To register the device, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The added devices will appear in the device list. Select the added device and click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.syncDevice",
        product: "2"
      }), "."]
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