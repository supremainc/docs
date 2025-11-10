"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["93608"], {
69607: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_install_communication_server_mdx_ef9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-install-communication-server-mdx-ef9.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_install_communication_server_mdx_ef9_namespaceObject = JSON.parse('{"id":"platform/biostar_x/install-communication-server","title":"Install Communication Server","description":"This document guides the process of installing the communication server.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/install-communication-server.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/install-communication-server","permalink":"/docs/en/platform/biostar_x/install-communication-server","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/install-communication-server.mdx","tags":[],"version":"current","frontMatter":{"id":"install-communication-server","title":"Install Communication Server","description":"This document guides the process of installing the communication server.","keywords":["Communication Server","Installation"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Upgrade","permalink":"/docs/en/platform/biostar_x/migration-x"},"next":{"title":"How to Log in","permalink":"/docs/en/platform/biostar_x/login"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/install-communication-server.mdx


const frontMatter = {
	id: 'install-communication-server',
	title: 'Install Communication Server',
	description: 'This document guides the process of installing the communication server.',
	keywords: [
		'Communication Server',
		'Installation'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Before starting",
  "id": "start-before",
  "level": 2
}, {
  "value": "Pre-installation checks",
  "id": "check-before-install",
  "level": 3
}, {
  "value": "Installation guide",
  "id": "install-guide",
  "level": 2
}, {
  "value": "Post-installation checks",
  "id": "check-after-install",
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
  }, {Cmd, Image, Start} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document explains how to install the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Communication Server"
      }), " of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The communication server is a server dedicated to communication with access control devices. It helps to manage many devices reliably by installing separately from the main server. A single communication server can connect up to 1,000 devices, and you can add multiple communication servers as needed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "start-before",
      children: "Before starting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before installing the communication server, check the following items."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The communication server cannot be installed on the same server as the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " server."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The communication server can only be installed on a 64-bit operating system. For more information on the system minimum requirements, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "system-requirements#communication-server",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A multi-communication server license is required to install and connect the communication server. For more information on licensing policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "licensing#features-add-ons",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-before-install",
      children: "Pre-installation checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before installing the communication server, run ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X Service Manager"
      }), " to check the information needed during installation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Service Manager"
          }), " on Windows."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Service Manager"
          }), " window appears."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            children: "SERVICE SETTINGS"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below is the information required when installing the communication server. Review and prepare each item."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-cumm-server-matching.png"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "table-fixed",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "BioStar X Service Manager"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Information required for communication server installation"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "BioStar X Core Service"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                children: "RPC Port"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Server gRPC Port for Communication"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "BioStar X Coordinator Service"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Client Port"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Coordinator Service Port for Communication"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "BioStar X Cache Service"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Client Port"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Cache Service Client for Communication"
              })
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on ", (0,jsx_runtime.jsx)(Cmd, {
          children: "SERVICE SETTINGS"
        }), ", refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "service-settings",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "install-guide",
      children: "Installation guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Follow the steps below to install the communication server."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Access the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://download.supremainc.com/",
            children: "Suprema Download Center"
          }), ", log in, and download the installation package (", (0,jsx_runtime.jsx)(_components.em, {
            children: "BioStar X Communications Server.X.Y.X.BB.exe"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run the downloaded installation file."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the language to use and select the ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.ok",
            className: "bold"
          }), " button."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-select-language.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To continue the installation, select ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.agree",
            className: "bold"
          }), " and click the ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " button."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-license-agree.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the path where the communication server will be installed and click ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-set-path.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Review the permissions and responsibilities regarding personal information and click ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " to continue the installation."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-private-policy.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the components of the communication server and click ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-select-component.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the IP address and port number of the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " server, and input details for connection to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " server. Complete your settings and click ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-settings.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on each entry item, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#check-before-install",
              children: "the following"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set the port for communication and click ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-port-settings.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When all preparations for installation are complete, click the ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.btnInstall",
            className: "bold"
          }), " button. Proceed with the installation."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-install-step.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check the installation completion message and click ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.complete",
            className: "bold"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-complete.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Complete the installation of the communication server. Once the installation is complete, verify the connection between the communication server and the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " main server."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-after-install",
      children: "Post-installation checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After completing the installation of the communication server, you need to connect the main server and the communication server through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X Service Manager"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Service Manager"
          }), " on Windows."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Service Manager"
          }), " window appears."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the left sidebar, click the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "COMMUNICATIONS"
          }), " menu."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-sm-cluster-main-01.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Add Communication Server"
          }), " button in the upper right corner of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Add Communication Server"
          }), " window appears, check the box for the item that matches the IP address of the installed communication server, and select the database to use from the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Database"
          }), " column."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-sm-cluster-main-03.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Add"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the communication server list, check if the ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Server Status"
      }), " column of the added communication server is in ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Connected"
      }), " status."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-cluster-main-04.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              children: "COMMUNICATIONS"
            }), " menu can be used when the multi-communication server license is activated. For more information on licensing policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To delete the communication server, check the box of the server to be deleted in the list and click the ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Delete Communication Server"
            }), " button in the upper right corner of the screen."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When adding a communication server, you can also add a secondary database to reduce the load on the main server. For more information on adding a secondary database, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "add-sub-db",
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