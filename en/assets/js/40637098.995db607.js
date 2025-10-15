"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2781"], {
50449: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_check_ethernet_mdx_406_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-check-ethernet-mdx-406.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_check_ethernet_mdx_406_namespaceObject = JSON.parse('{"id":"platform/biostar_x/check-ethernet","title":"Check network priority","description":"Instructions for checking and setting the server\'s network priority before installing BioStar X.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/check-ethernet.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/check-ethernet","permalink":"/docs/en/platform/biostar_x/check-ethernet","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/check-ethernet.mdx","tags":[],"version":"current","frontMatter":{"id":"check-ethernet","title":"Check network priority","description":"Instructions for checking and setting the server\'s network priority before installing BioStar X.","keywords":["Network","BioStar X"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Getting Started","permalink":"/docs/en/platform/biostar_x/getting-started"},"next":{"title":"Express Installation","permalink":"/docs/en/platform/biostar_x/express-install"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/check-ethernet.mdx


const frontMatter = {
	id: 'check-ethernet',
	title: 'Check network priority',
	description: 'Instructions for checking and setting the server\'s network priority before installing BioStar X.',
	keywords: [
		'Network',
		'BioStar X'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "When is it needed?",
  "id": "when-is-it-needed",
  "level": 2
}, {
  "value": "Check network priority",
  "id": "check-network-priority",
  "level": 2
}, {
  "value": "Check in command prompt",
  "id": "check-in-command-prompt",
  "level": 3
}, {
  "value": "Check network adapter information",
  "id": "check-network-adapter-information",
  "level": 3
}, {
  "value": "Change network priority",
  "id": "change-network-priority",
  "level": 2
}, {
  "value": "Open network settings",
  "id": "open-network-settings",
  "level": 3
}, {
  "value": "Open adapter options",
  "id": "open-adapter-options",
  "level": 3
}, {
  "value": "Metric settings",
  "id": "metric-settings",
  "level": 3
}, {
  "value": "Check settings",
  "id": "check-settings",
  "level": 3
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, NextItem, NextStep, Step, Steps} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instructions for checking and setting the server's network priority before installing ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-is-it-needed",
      children: "When is it needed?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You need to check and set network priority in the following situations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When two or more network adapters are installed on the server"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When a specific network adapter must be used for the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " service"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To prevent network connection issues after installing ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If none of the above situations apply, there is no need to change the network priority. Skip this step and proceed with the installation of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ". For more information on installing ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ", refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "express-install",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["A network adapter with a lower metric (higher priority) will be automatically selected during the installation of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ". Since it may be difficult to change this setting after installation, be sure to check and adjust the network priority before installation."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-network-priority",
      children: "Check network priority"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-in-command-prompt",
      children: "Check in command prompt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Search for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cmd"
          }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Start"
          }), " menu and run ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Command Prompt"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enter the following command."
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cmd",
            children: "route print\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Look for entries in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "IPv4 Route Table"
          }), " section where ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Network Destination"
          }), " is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.0.0.0"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Check the value in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Metric"
          }), " column. The lower the value, the higher the priority."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example output:"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-install-check-network-cmd.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the above example, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "192.168.40.123"
      }), " interface has a metric value of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "20"
      }), ", resulting in a higher priority."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-network-adapter-information",
      children: "Check network adapter information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify which network adapter corresponds to each interface."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Command Prompt"
          }), " window, enter the command below."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cmd",
            children: "ipconfig /all\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Match each network adapter's ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "IPv4 address"
          }), " with the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Gateway"
          }), " address identified earlier to identify which adapter it is."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "change-network-priority",
      children: "Change network priority"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To raise the priority of the desired network adapter, follow the steps below."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The following steps are based on Windows 11. The menu location may vary depending on the version of Windows you are using."
      })
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "open-network-settings",
          children: "Open network settings"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Start"
              }), " menu, type ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "View Network Connections"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-start-network-search.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "View Network Connections"
              }), " from the search results."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Double-click on the adapter connected to the internet from the list."
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-control-network-connections.png"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "open-adapter-options",
          children: "Open adapter options"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["When the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ethernet Status"
              }), " window appears, click the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Properties"
              }), " button."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-ethernet-status.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["When the Ethernet Properties window appears, select ", (0,jsx_runtime.jsx)("b", {
                children: "Internet Protocol Version 4 (TCP/IPv4)"
              }), " from the list."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-ethernet-properties.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Properties"
              }), " button."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["When the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Internet Protocol Version 4 (TCP/IPv4) Properties"
              }), " window appears, click the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Advanced"
              }), " button."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-protocol-properties.png"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "metric-settings",
          children: "Metric settings"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Uncheck the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Automatic Metric"
              }), " checkbox."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-set-metrics.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Enter the desired value in the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Interface Metric"
              }), " field."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["If you want the highest priority, enter ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "1"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "If you want a higher priority than other adapters, enter a number smaller than the metric values of other adapters."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To save the settings and close all windows, click the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), " button."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The values you can enter for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interface Metric"
            }), " range from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "9999"
            }), ". The lower the value, the higher the priority."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "check-settings",
          children: "Check settings"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Reopen ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Command Prompt"
              }), " and execute the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "route print"
              }), " command."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Check whether the metric value has changed."
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If the settings are not applied, restart your computer or disable and then re-enable the network adapter."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If the network connection is lost, revert to the original settings and re-enable the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Automatic Metric"
          }), " option. Contact your network administrator to verify the correct settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you need to change network settings after installing ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), ", it's recommended to completely uninstall the program and then reinstall it."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "express-install",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "This guide provides a simple installation method for first-time users."
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "custom-install",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "This guides the user on how to set up a custom installation to integrate with a database that the user has already installed."
        })
      })]
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