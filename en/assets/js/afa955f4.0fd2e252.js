"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["74345"], {
38802: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_remote_access_mdx_afa_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-remote-access-mdx-afa.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_remote_access_mdx_afa_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-remote-access","title":"Set up Remote Access","description":"This guide explains how to set up remote access via the ngrok service.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-remote-access.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-remote-access","permalink":"/docs/en/platform/biostar_x/settings-remote-access","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-remote-access.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-remote-access","title":"Set up Remote Access","description":"This guide explains how to set up remote access via the ngrok service.","keywords":["remote","access","ngrok"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Directory Integration Settings","permalink":"/docs/en/platform/biostar_x/settings-diretory-integration"},"next":{"title":"Integrate Virtual Device Event Log","permalink":"/docs/en/platform/biostar_x/settings-virtual-device-event-log"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-remote-access.mdx


const frontMatter = {
	id: 'settings-remote-access',
	title: 'Set up Remote Access',
	description: 'This guide explains how to set up remote access via the ngrok service.',
	keywords: [
		'remote',
		'access',
		'ngrok'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "When to use this?",
  "id": "when-to-use-this",
  "level": 2
}, {
  "value": "Remote access setup",
  "id": "remote-access-setup",
  "level": 2
}, {
  "value": "Activate remote access license",
  "id": "activate-remote-access-license",
  "level": 3
}, {
  "value": "Activate remote access",
  "id": "activate-remote-access",
  "level": 3
}, {
  "value": "Enter ngrok setup information",
  "id": "enter-ngrok-setup-information",
  "level": 3
}, {
  "value": "Access endpoint URL",
  "id": "access-endpoint-url",
  "level": 2
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Remote access via ngrok allows secure access to internal networks from external networks. This feature enables access to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " server remotely without firewall settings or port forwarding."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The remote access feature is available as an additional option. For more information on licensing policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When purchasing the remote access license, Suprema generates a bot account, endpoint, and license document for remote access use on the ngrok Suprema site."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Remote Access is provided through ngrok’s third‑party tunneling service. Remote Access is provided through ngrok’s third‑party tunneling service. Before using this feature, please review ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../legal/eula#remote-access-agreement",
              children: "Remote Access Feature Agreement"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStar X simply supports the connection by calling the ngrok API, but the security, safety, and continuity of internet connectivity entirely depend on the ngrok service. Therefore, Suprema assumes no responsibility for any security incidents, data loss, or system breaches that may occur during the use of this feature."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-to-use-this",
      children: "When to use this?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the remote access feature in the following situations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When you need to connect to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " server from an external network"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When it's challenging to connect directly due to firewalls or NAT environments"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When you want to quickly set up remote access without complex network setups"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When you need to temporarily provide outside access rights"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "remote-access-setup",
      children: "Remote access setup"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "activate-remote-access-license",
          children: "Activate remote access license"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Log in with your ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " admin ID."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
                sid: "setting.menu.license.root"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.license.biostarXLicense"
              }), " in the left sidebar."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Enter the remote access license key and admin name provided by Suprema, then click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.license.button.activate",
                product: "2"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on license registration, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-license-biostar-x-license",
              children: "the following"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "activate-remote-access",
          children: "Activate remote access"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Log in with your ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " admin ID."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
                sid: "setting.menu.remoteAccess.root"
              }), " in the left sidebar."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.section.title"
              }), " section, change the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.remoteAccess.root"
              }), " option to ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-remote-access.png"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "enter-ngrok-setup-information",
          children: "Enter ngrok setup information"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Enter the ngrok setup information provided by Suprema."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.field.ngrokUserId"
              }), ": Enter your ngrok account."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.field.tunnelToken"
              }), ": Enter your ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Authtoken"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.remoteAccess.field.hostURL"
              }), ": Enter the endpoint URL. The URL is in the format ", (0,jsx_runtime.jsx)(_components.code, {
                children: "your-name.bsx.ngrok.app"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["After entering all the information, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " button. If a warning message window appears, check the content and click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.remoteAccess.button.agree"
          }), " button."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "access-endpoint-url",
      children: "Access endpoint URL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After completing the setup, verify whether you can access the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " server from an external network using the endpoint URL you entered in ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.remoteAccess.field.hostURL"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "If you cannot access via endpoint URL from an external network, contact the sales point or distributor that issued your license."
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