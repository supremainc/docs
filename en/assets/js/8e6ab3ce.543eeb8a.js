"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5197"], {
23509: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_using_functions_mdx_8e6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-using-functions-mdx-8e6.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_using_functions_mdx_8e6_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-using-functions","title":"Use Device Management Feature","description":"Instructions for reconnecting the device, synchronizing, and batch editing functionality.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-using-functions.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-using-functions","permalink":"/docs/en/platform/biostar_x/settings-device-using-functions","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-using-functions.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-using-functions","title":"Use Device Management Feature","description":"Instructions for reconnecting the device, synchronizing, and batch editing functionality.","keywords":["Device"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Upgrade Firmware","permalink":"/docs/en/platform/biostar_x/settings-device-upgrade-firmware"},"next":{"title":"Device Settings","permalink":"/docs/en/platform/biostar_x/settings-device-details"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-using-functions.mdx


const frontMatter = {
	id: 'settings-device-using-functions',
	title: 'Use Device Management Feature',
	description: 'Instructions for reconnecting the device, synchronizing, and batch editing functionality.',
	keywords: [
		'Device'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide explains how to use additional features of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". It provides options for reconnecting the device, synchronization, batch information editing, and deleting the device."]
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
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the device from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.device.allDeviceGroups",
            product: "2"
          }), " list and right-click."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the desired feature from the pop-up menu."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-functions.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Refer to the features available through the pop-up menu below: The features provided may vary depending on the device."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.reconnect",
            product: "2"
          }), ": Reconnect the selected device. This option is available when one device is selected. Use this feature when the connection to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " is lost."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["This feature is not supported by devices connected with the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.deviceToServerConnection",
              product: "2"
            }), " option. For more information on registering devices, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-adding-devices#setipaddress",
              children: "the following"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.syncDevice",
            product: "2"
          }), ": Synchronize all user information registered on the device with ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". This synchronization is based on the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " database, and user information registered only on the device will be deleted. Use the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.manageUsersInDevice",
            product: "2"
          }), " feature to upload user information to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.sync_all",
            product: "2"
          }), ": Delete all setting information and user information stored on the device and resend it. This feature can also be accessed by selecting the device from the list and clicking the ", (0,jsx_runtime.jsx)(IcMoreW, {}), " button."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.manageUsersInDevice",
            product: "2"
          }), ": Upload or delete user information registered on the device in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), ". For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-device-manage-device-users",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.firmwareUpgrade",
            product: "2"
          }), ": Easily upgrade the device firmware. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-device-upgrade-firmware",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.menu.reboot",
            product: "2"
          }), ": Restart the selected device. Use this feature when the device is not operating normally."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.deleteDevice",
            product: "2"
          }), ": Delete the selected device from the list. Devices set as doors or zones cannot be deleted."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.menu.addWiegandDevice",
              product: "2"
            }), " feature, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-adding-wiegand",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.menu.searchSlaveDevice",
              product: "2"
            }), " feature, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-adding-slave-device",
              children: "the following"
            }), "."]
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