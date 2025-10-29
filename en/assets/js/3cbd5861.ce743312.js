"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1264"], {
62858: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_connection_manager_mdx_3cb_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-connection-manager-mdx-3cb.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_connection_manager_mdx_3cb_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-connection-manager","title":"Device Connection Management Settings","description":"This document provides guidance on connecting and managing a large number of devices through the communication server in BioStar X. You can manage up to 3,000 network devices by distributing them across multiple servers.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-connection-manager.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-connection-manager","permalink":"/docs/en/platform/biostar_x/settings-device-connection-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-connection-manager.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-connection-manager","title":"Device Connection Management Settings","description":"This document provides guidance on connecting and managing a large number of devices through the communication server in BioStar X. You can manage up to 3,000 network devices by distributing them across multiple servers.","keywords":["Device Connection Manager","Communication Server","Settings"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"USB Agent Settings","permalink":"/docs/en/platform/biostar_x/settings-device-usb-agent"},"next":{"title":"Manage Doors","permalink":"/docs/en/platform/biostar_x/settings-manage-door"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-connection-manager.mdx


const frontMatter = {
	id: 'settings-device-connection-manager',
	title: 'Device Connection Management Settings',
	description: 'This document provides guidance on connecting and managing a large number of devices through the communication server in BioStar X. You can manage up to 3,000 network devices by distributing them across multiple servers.',
	keywords: [
		'Device Connection Manager',
		'Communication Server',
		'Settings'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Key features",
  "id": "key-features",
  "level": 2
}, {
  "value": "Move devices to another server",
  "id": "move-devices-to-another-server",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "'s ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.deviceConnectionManager.settingMenuTitle",
        product: "2"
      }), " is a feature designed to efficiently manage a large number of devices in companies or large buildings. Previously, a single server could connect a maximum of 1,000 devices, but now you can install multiple ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "communication"
      }), " servers on several computers to manage up to 3,000 network devices."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This feature requires the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Manager"
            }), " license to be activated. For more information about the license policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "For specifications and installation of the communication server, refer to the followings:"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "system-requirements#communication-server",
                  children: "Communication Server Specifications"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "install-communication-server",
                  children: "Install Communication Server"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-features",
      children: "Key features"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Server Expansion"
          }), ": Install communication servers on additional computers besides the main computer to connect more devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Multiple Server Operation"
          }), ": Use up to three servers together to support a total of 3,000 devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Convenient Device Management"
          }), ": When adding new devices, choose which server to connect to, and you can also move existing devices to another server."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Large Environment Support"
          }), ": Operate a large number of devices reliably in large business sites or buildings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The communication server is a dedicated service that separates the connection functionality with devices from the integrated server of BioStar X. It focuses solely on reliable communication with devices, enhancing the performance of the overall system."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "move-devices-to-another-server",
      children: "Move devices to another server"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can move devices registered on the main server or other communication servers to another communication server. This feature helps maintain the connection status of the devices while moving them between servers."
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
            sid: "setting.menu.device.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.deviceConnectionManager"
          }), " on the left sidebar"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["From the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.deviceConnectionManager.followerSelectLabel",
            product: "2"
          }), " section on the left, select the server where the device you want to move is registered."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-connection-manager-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.deviceConnectionManager.selectedSelectLabel",
            product: "2"
          }), " section on the right, select the target server to which you want to move the devices."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-connection-manager-02.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the device(s) you want to move from the device list. You can select multiple devices."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-connection-manager-03.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "To search for a specific device, enter keywords in the input field at the top. You can search by device name or serial number."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.deviceConnectionManager.moveButtonTitle",
            product: "2"
          }), " to move the device to the target server."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-connection-manager-04.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the total number of devices to move, the number of TCP/IP connected devices, the name of the server to move to, and the IP address in the message window."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once the move is complete, you can check the total number of devices moved, the number of TCP/IP connected devices, and the name and IP address of the moved server in the message window."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If there are devices that failed to move, the message window will show the number of devices that failed to move and the number of TCP/IP connected devices. To view a list of devices that failed to move and the reasons for failure in a CSV file, click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.download",
        product: "2"
      }), " button."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If there are no connected extension servers, ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.deviceConnectionManager.selectedSelectLabel",
              product: "2"
            }), " on the right side of the screen will not be displayed."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When selecting a server, you can see all registered devices, including Wiegand and RS-485 connected devices on that server."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Selecting a device or device group will also move the subordinate devices connected to the device and the devices included in the group."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Devices that are not connected via TCP/IP cannot be moved."
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