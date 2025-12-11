"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["98422"], {
31221: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_settings_mdx_5fd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-corestation-setup-manager-settings-mdx-5fd.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_settings_mdx_5fd_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/settings","title":"Settings","description":"Guidance on how to set up the admin account and web server network settings.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/settings.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/settings","permalink":"/docs/en/device/corestation_setup_manager/settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/settings.mdx","tags":[],"version":"current","frontMatter":{"id":"settings","title":"Settings","description":"Guidance on how to set up the admin account and web server network settings.","keywords":["Admin account","Network"],"isTranslationMissing":false},"sidebar":"corestation_setup_manager","previous":{"title":"Monitoring","permalink":"/docs/en/device/corestation_setup_manager/monitoring"},"next":{"title":"Appendices","permalink":"/docs/en/device/corestation_setup_manager/appendices"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/settings.mdx


const frontMatter = {
	id: 'settings',
	title: 'Settings',
	description: 'Guidance on how to set up the admin account and web server network settings.',
	keywords: [
		'Admin account',
		'Network'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Edit admin account",
  "id": "edit-admin-account",
  "level": 2
}, {
  "value": "Web server network",
  "id": "web-server-network",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {IcEdit, Image} = _components;
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Guidance on how to set up the admin account and web server network settings."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edit-admin-account",
      children: "Edit admin account"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can edit the admin account of the CoreStation Setup Manager."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SETTINGS"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Admin Account"
          }), " → ", (0,jsx_runtime.jsx)(IcEdit, {}), (0,jsx_runtime.jsx)(_components.strong, {
            children: "Edit"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/settings-admin-accounts.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "initial-setup",
            children: "Initial Setup of the Device"
          }), ", edit each item, and then click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/settings-edit-user.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply"
          }), " to save the settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web-server-network",
      children: "Web server network"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the network information of the CoreStation Setup Manager."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SETTINGS"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Edit the necessary fields."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/settings-webserver-network.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)("div", {
          className: "overflow-x col2--20-80",
          children: (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  children: "Name"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "Feature description"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "IP Address"
                  })
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["Edit the IP address of the CoreStation Setup Manager.", (0,jsx_runtime.jsx)("br", {}), "- Only static IP can be used. DHCP is not supported."]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Gateway"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Edit the gateway of the CoreStation Setup Manager."
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Subnet Mask"
                  })
                }), (0,jsx_runtime.jsx)(_components.td, {
                  children: "Edit the subnet mask of the CoreStation Setup Manager."
                })]
              })]
            })]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply"
          }), " to save the settings. The device will restart."]
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