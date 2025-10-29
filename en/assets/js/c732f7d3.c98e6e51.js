"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5485"], {
18011: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_manage_device_users_mdx_c73_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-manage-device-users-mdx-c73.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_manage_device_users_mdx_c73_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-manage-device-users","title":"Manage Users Registered on Device","description":"This document provides guidance on managing users stored in the device.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-manage-device-users.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-manage-device-users","permalink":"/docs/en/platform/biostar_x/settings-device-manage-device-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-manage-device-users.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-manage-device-users","title":"Manage Users Registered on Device","description":"This document provides guidance on managing users stored in the device.","keywords":["Device","User"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Register Slave","permalink":"/docs/en/platform/biostar_x/settings-adding-slave-device"},"next":{"title":"Upgrade Firmware","permalink":"/docs/en/platform/biostar_x/settings-device-upgrade-firmware"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-manage-device-users.mdx


const frontMatter = {
	id: 'settings-device-manage-device-users',
	title: 'Manage Users Registered on Device',
	description: 'This document provides guidance on managing users stored in the device.',
	keywords: [
		'Device',
		'User'
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can check the number of users, fingerprints, faces, and cards stored on the device. Information about users not registered on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " can be compared with registered user information, and you can send or delete this information on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " server."]
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.manageUsersInDevice",
            product: "2"
          }), " from the pop-up menu."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-manage-device-users.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.menu.manageUsersInDevice",
        product: "2"
      }), " window appears, you can compare the user information registered on the device with the user information registered on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-manage-device-users-popup.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Refer to the values displayed in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.status",
        product: "2"
      }), " column to choose whether to delete user information from the device or send it to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " server. The values in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.status",
        product: "2"
      }), " column are as follows:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.syncStatus.same",
            product: "2"
          }), ": User with the same information registered on the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " server"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.syncStatus.different",
            product: "2"
          }), ": User with information different from that registered on the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " server"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.syncStatus.newUser",
            product: "2"
          }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " user not stored on the server"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To delete specific user information from the device, select the user to delete and click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.delete",
        product: "2"
      }), " button. To send user information to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " server, click the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.upload",
        product: "2"
      }), " button."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.manageUsersInDevice",
              product: "2"
            }), " feature can only be used with one device selected."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When clicking the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.upload",
              product: "2"
            }), " button, if there is a user on the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " server with the same ID, it can be updated with the device’s information."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Deleted user information is removed only from the device and will be retained on the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " server."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about the device's settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-details",
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