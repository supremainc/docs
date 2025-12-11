"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["49831"], {
39447: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_site_setup_networking_mdx_1db_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-site-setup-networking-mdx-1db.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_site_setup_networking_mdx_1db_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-setup-networking","title":"Network Ports and Device Identification","description":"Set up network ports and determine MAC addresses for BioStar Air compatible readers.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/site-setup-networking.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-setup-networking","permalink":"/en/platform/biostar_air/site-setup-networking","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-setup-networking.mdx","tags":[],"version":"current","frontMatter":{"id":"site-setup-networking","title":"Network Ports and Device Identification","description":"Set up network ports and determine MAC addresses for BioStar Air compatible readers.","keywords":["networking","ports"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Security Overview","permalink":"/en/platform/biostar_air/security-overview"},"next":{"title":"BioStar Air Migration","permalink":"/en/platform/biostar_air/biostar-air-migration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/site-setup-networking.mdx


const frontMatter = {
	id: 'site-setup-networking',
	title: 'Network Ports and Device Identification',
	description: 'Set up network ports and determine MAC addresses for BioStar Air compatible readers.',
	keywords: [
		'networking',
		'ports'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Feature Overview",
  "id": "feature-overview",
  "level": 2
}, {
  "value": "Required Network Ports",
  "id": "required-network-ports",
  "level": 2
}, {
  "value": "Determining the MAC Address from the Serial Number",
  "id": "determining-the-mac-address-from-the-serial-number",
  "level": 2
}, {
  "value": "Steps",
  "id": "steps",
  "level": 3
}, {
  "value": "Example",
  "id": "example",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-overview",
      children: "Feature Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For BioStar Air to function correctly, certain network ports must be accessible. These ports enable secure communication between compatible readers, cloud services, and user applications. Additionally, administrators may sometimes need to determine the MAC address of a BioStar Air compatible reader from its serial number for network configuration tasks."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "required-network-ports",
      children: "Required Network Ports"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ensure the following ports are open in your network firewall:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "6379, 6381: Redis Ports"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Used as a message broker to sync user information, handle fast event logging, manage sessions, and process device-to-cloud signaling."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "5671: AMQP over TLS (RabbitMQ)"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Provides a secure messaging protocol for real-time communication between services."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "443: HTTPS (TLS)"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Standard secure web traffic, required for:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Admin Portal web app (browser access)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar Air mobile apps (iOS/Android)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "API calls"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Device firmware updates pulled from the cloud"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Device login and authentication services"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If using BioStar Air's built-in Video Management:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "WebSocket Domain : eu-wss-api.airfob.com"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "WebSocket Port : 3500"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "TURN/STUN Port : 80, 443, 3478, 5349"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Important"
        }), ": Ensure access to the following endpoints for device login and authentication:"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://e-afs-api.airfob.com/v1/device/login",
              children: "https://e-afs-api.airfob.com/v1/device/login"
            }), " (Europe)"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://afs-api.airfob.com/v1/device/login",
              children: "https://afs-api.airfob.com/v1/device/login"
            }), " (Rest of world)"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "determining-the-mac-address-from-the-serial-number",
      children: "Determining the MAC Address from the Serial Number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In some cases, you may need to determine the MAC address of a BioStar Air compatible reader using only its serial number. This is helpful for tasks such as whitelisting devices before adding them to your network."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Locate the Serial Number"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Find the 9-digit serial number on the back of the device."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Convert the Serial Number to Hexadecimal"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use a calculator or an online tool to convert the serial number from decimal to hexadecimal format."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Extract the Last 3 Bytes"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "From the hexadecimal value, take the last 6 characters. These represent the final 3 bytes."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Formulate the MAC Address"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The MAC address always starts with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "00:17:FC:"
          }), ". Append the last 3 bytes (6 characters) from the hexadecimal value, separating each pair with a colon."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example",
      children: "Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Serial Number"
          }), ": 546089489"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Conversion to Hex"
          }), ": 208CAA11"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Extract the Last 3 Bytes"
          }), ": 8CAA11"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Formulate the MAC Address"
          }), ": 00:17:FC:8C:AA:11"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Following these steps ensures you can accurately identify a BioStar Air compatible reader on your network using its serial number."
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