"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["16280"], {
64320: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_initial_setup_mdx_92c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-corestation-setup-manager-initial-setup-mdx-92c.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_initial_setup_mdx_92c_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/initial-setup","title":"Initial Setup of the Device","description":"Guidelines for initial procedures to use CoreStation Setup Manager.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/initial-setup.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/initial-setup","permalink":"/docs/en/device/corestation_setup_manager/initial-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/initial-setup.mdx","tags":[],"version":"current","frontMatter":{"id":"initial-setup","title":"Initial Setup of the Device","description":"Guidelines for initial procedures to use CoreStation Setup Manager.","keywords":["CoreStation","Initial setup","Certificate installation","Administrator registration"],"isTranslationMissing":false},"sidebar":"corestation_setup_manager","previous":{"title":"Getting Started","permalink":"/docs/en/device/corestation_setup_manager/getting-started"},"next":{"title":"Device Settings","permalink":"/docs/en/device/corestation_setup_manager/configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/initial-setup.mdx


const frontMatter = {
	id: 'initial-setup',
	title: 'Initial Setup of the Device',
	description: 'Guidelines for initial procedures to use CoreStation Setup Manager.',
	keywords: [
		'CoreStation',
		'Initial setup',
		'Certificate installation',
		'Administrator registration'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
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
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation Setup Manager provides a web-based service. Therefore, after completing the wiring to build a centralized access control system using CoreStation, you can access CoreStation Setup Manager from any location via a web browser and check the connection status of CoreStation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you are using CoreStation Setup Manager for the first time, connect CoreStation and proceed with the initial setup."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Complete the cable connection to CoreStation."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Please launch the web browser."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Use a web browser version 75 or higher of Chrome."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the default IP address ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://169.254.0.1:3001"
          }), " in the address input field of the web browser."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Download https certification"
          }), " on the login screen. When accessing CoreStation Setup Manager for the first time, you need to install the certificate to use HTTPS correctly."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/initial-main.png",
          width: "80%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Run the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cs_client.crt"
          }), " file."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Open File"
          }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Security Warning"
          }), " window appears, click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Open"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Certificate details"
          }), " window, click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install Certificate…"
          }), ". The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Certificate Import Wizard"
          }), " will be launched."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), " to continue."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the certificate store and then click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Finish"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enter your user ID and login password. The user ID and login password for the first access are both 'admin'."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To register the administrator account, configure each item and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/initial-setup-new-user.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                  children: "ID"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["The ID is automatically set to ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "0"
                }), " and cannot be changed."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Name"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Enter the administrator's name.", (0,jsx_runtime.jsx)("br", {}), "- A name of up to 48 characters can be entered."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Operator Level"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["The Operator Level is automatically set to ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Administrator"
                }), " and cannot be changed."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Login ID"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Enter the login ID.", (0,jsx_runtime.jsx)("br", {}), "- The login ID can be up to 32 characters long."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Password"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Enter the login password.", (0,jsx_runtime.jsx)("br", {}), "- The login password should be a combination of alphanumeric characters and symbols, with a length of 7 to 32 characters."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Confirm Password"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Re-enter the login password for confirmation."
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "You will be redirected to the login screen. Log in with the registered administrator account."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The administrator account can only be set up when accessing CoreStation Setup Manager for the first time, and only one user can be designated. Once registration is complete, the default user ID and login password used during the first access can no longer be used. Additionally, the administrator account can review and edit all settings, including factory initialization."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Starting from CoreStation Setup Manager version 1.01, the name of the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level 1"
            }), " administrator grade has been changed to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Administrator"
            }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level 2"
            }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level 3"
            }), " administrator accounts are no longer supported."]
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