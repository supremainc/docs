"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["22189"], {
74729: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_service_settings_mdx_6ef_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-service-settings-mdx-6ef.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_service_settings_mdx_6ef_namespaceObject = JSON.parse('{"id":"platform/biostar_x/service-settings","title":"Service Settings","description":"In the Service Settings of BioStar X Service Manager, you can configure and manage the core services of the system.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/service-settings.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/service-settings","permalink":"/en/platform/biostar_x/service-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/service-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"service-settings","title":"Service Settings","description":"In the Service Settings of BioStar X Service Manager, you can configure and manage the core services of the system.","keywords":["Service Settings","Service Manager","BioStar X"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Start and Stop Server","permalink":"/en/platform/biostar_x/manage-server"},"next":{"title":"Change the Port","permalink":"/en/platform/biostar_x/change-port"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/service-settings.mdx


const frontMatter = {
	id: 'service-settings',
	title: 'Service Settings',
	description: 'In the Service Settings of BioStar X Service Manager, you can configure and manage the core services of the system.',
	keywords: [
		'Service Settings',
		'Service Manager',
		'BioStar X'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Situations where configuration changes are needed",
  "id": "when-to-change",
  "level": 2
}, {
  "value": "How to change settings",
  "id": "how-to-change",
  "level": 2
}, {
  "value": "Service composition",
  "id": "service-composition",
  "level": 2
}, {
  "value": "BioStar X Core Web Service",
  "id": "biostar-x-core-web-service",
  "level": 3
}, {
  "value": "BioStar X Core Service",
  "id": "biostar-x-core-service",
  "level": 3
}, {
  "value": "Unified Gateway Service",
  "id": "unified-gateway-service",
  "level": 3
}, {
  "value": "BioStar X Coordinator Service",
  "id": "biostar-x-coordinator-service",
  "level": 3
}, {
  "value": "BioStar X Server (Main)",
  "id": "biostar-x-server-(main)",
  "level": 3
}, {
  "value": "BioStar X Cache Service",
  "id": "biostar-x-cache-service",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Service Settings"
      }), " menu of ", (0,jsx_runtime.jsx)(Cmd, {
        children: "BioStar X Service Manager"
      }), ", you can configure and manage the core services of the system. Each service is configured independently, and you can check network ports and version information."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        children: "Service Settings"
      }), " consists of the following major services."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Core Web Service"
          }), ": Web interface service"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Core Service"
          }), ": Core system functionalities and API communication service"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Unified Gateway Service"
          }), ": Reverse proxy-based integrated gateway service"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Coordinator Service"
          }), ": Management of distributed system configuration information and service synchronization"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Server (Main)"
          }), ": Main server service"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Cache Service"
          }), ": Data caching and enhanced system performance"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-to-change",
      children: "Situations where configuration changes are needed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You may need to change the service settings in the following situations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Resolving port conflicts"
          }), ": When another application uses the same port and causes conflicts"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compliance with security policies"
          }), ": When only specific ports are allowed according to the organization's network security policy"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Firewall settings"
          }), ": When you need to change to ports allowed by your corporate firewall"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Server environment changes"
          }), ": When changing the server IP address or network configuration"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Performance optimization"
          }), ": When separation of ports is needed for traffic distribution or load balancing"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-change",
      children: "How to change settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "SERVICE SETTINGS"
          }), " menu in ", (0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Service Manager"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Go to the section of the service you want to change."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Modify the required port number or address."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To apply changes, click the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Apply"
          }), " button in the upper right corner of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Restart the related service to apply the changes after changing the service setting."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Support for changing the port may vary depending on certain services."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "When changing port numbers, make sure there are no conflicts with other services or applications."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "service-composition",
      children: "Service composition"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-core-web-service",
      children: "BioStar X Core Web Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This service is responsible for the web-based user interface."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-cws.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "HTTPS Port"
          }), ": Web interface access port (default: 5002)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "WebServerThrift Port"
          }), ": Web server communication port based on the Thrift protocol (default: 9310)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-core-service",
      children: "BioStar X Core Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the main service that handles core functionalities of the system and external API communications."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-core-s.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "WebSocket Port"
          }), ": WebSocket port for real-time bidirectional communication (default: 9002)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "API Port"
          }), ": REST API communication port (default: 9010)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "WebServerFastCgi Port"
          }), ": Web server communication port based on FastCGI protocol (default: 9000)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Rpc Port"
          }), ": Remote Procedure Call (RPC) communication port (default: 51218)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unified-gateway-service",
      children: "Unified Gateway Service"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Efficiently process requests to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " server through reverse proxy, improve the security vulnerabilities of iframes, and minimize SSL certificate errors."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-ugs.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          children: "HTTPS Port"
        }), ": Integrated gateway HTTPS communication port (default: 443)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-coordinator-service",
      children: "BioStar X Coordinator Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This service is responsible for managing configuration information of the distributed system, monitoring service status, and synchronizing services."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-coordinator-s.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          children: "Client Port"
        }), ": Communication port for client connections (default: 21810)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Change the value of ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Client Port"
            }), ", then manually restart the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Coordinator Service"
            }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Windows Services"
            }), "(", (0,jsx_runtime.jsx)(_components.em, {
              children: "services.msc"
            }), ")."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After restarting the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Coordinator Service"
            }), ", go to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Service Manager"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SERVICES"
            }), " and restart all services."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Stop All"
            }), " in the top right corner of the screen. After all services are stopped, when the ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Start All"
            }), " button is enabled, click the button."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-server-(main)",
      children: "BioStar X Server (Main)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the core service that serves as the main server of the system."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-server.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Server Address"
          }), ": IP address of the main server"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Server Port"
          }), ": General server communication port (default: 51212)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "SSL Server Port"
          }), ": SSL secure encrypted communication port (default: 51213)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "gRPC Server Port"
          }), ": High-performance communication port based on gRPC protocol (default: 51219)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-cache-service",
      children: "BioStar X Cache Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This service improves the system's data processing speed and performance by storing frequently used data in memory."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-cache-s.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Client Port"
          }), ": Cache service client connection port (default: 10800)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Communication Port"
          }), ": Internal communication port between cache nodes (default: 47500)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Discovery Port"
          }), ": Port for automatic discovery of distributed cache nodes (default: 47100)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "change-port",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Learn step-by-step how to change the default port (443) of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "."]
        })
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