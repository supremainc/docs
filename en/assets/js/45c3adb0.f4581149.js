"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["65454"], {
55978: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_federated_sites_mdx_45c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-federated-sites-mdx-45c.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_federated_sites_mdx_45c_namespaceObject = JSON.parse('{"id":"platform/biostar_air/federated-sites","title":"Federated Sites","description":"Set up and manage federated sites in BioStar Air for multi-tenant buildings and multi-branch organizations through centralized control.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/federated-sites.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/federated-sites","permalink":"/docs/en/platform/biostar_air/federated-sites","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/federated-sites.mdx","tags":[],"version":"current","frontMatter":{"id":"federated-sites","title":"Federated Sites","description":"Set up and manage federated sites in BioStar Air for multi-tenant buildings and multi-branch organizations through centralized control.","keywords":["federated","sites","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Use The Partner Portal","permalink":"/docs/en/platform/biostar_air/biostar-air-partner-portal-detailed-use"},"next":{"title":"API Integration","permalink":"/docs/en/platform/biostar_air/integration-quickstart"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/federated-sites.mdx


const frontMatter = {
	id: 'federated-sites',
	title: 'Federated Sites',
	description: 'Set up and manage federated sites in BioStar Air for multi-tenant buildings and multi-branch organizations through centralized control.',
	keywords: [
		'federated',
		'sites',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "What is a federated site?",
  "id": "whatFederatedSites",
  "level": 2
}, {
  "value": "Multi-tenant building",
  "id": "multi-tenant-building",
  "level": 3
}, {
  "value": "Multi-branch organization",
  "id": "multi-branch-organization",
  "level": 3
}, {
  "value": "Set up federated sites",
  "id": "setFederatedSites",
  "level": 2
}, {
  "value": "Access Partner Portal",
  "id": "access-partner-portal",
  "level": 3
}, {
  "value": "Create primary site",
  "id": "create-primary-site",
  "level": 3
}, {
  "value": "Add subsites",
  "id": "add-subsites",
  "level": 3
}, {
  "value": "Important considerations",
  "id": "important-considerations",
  "level": 2
}, {
  "value": "User and device management",
  "id": "user-and-reader-management",
  "level": 3
}, {
  "value": "Primary site usage",
  "id": "primary-site-usage",
  "level": 3
}, {
  "value": "Billing",
  "id": "billing",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Step, Steps} = _components;
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Air provides ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "federated sites"
      }), ", enabling a primary site to seamlessly manage multiple subsites. This feature is ideal for multi-tenant buildings or organizations with multiple branches and offers centralized control through distributed access management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By leveraging the federated site feature in BioStar Air, administrators effectively manage access in complex environments and deliver a secure, scalable, and streamlined experience for all stakeholders."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "whatFederatedSites",
      children: "What is a federated site?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Federated sites"
      }), " support a hierarchical structure in which a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "primary site"
      }), " manages one or more ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "subsites"
      }), ". An administrator of the primary site—called the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "federation administrator"
      }), "—can directly access and manage subsites from the BioStar Air interface."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Federated sites are useful in the following situations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-tenant-building",
      children: "Multi-tenant building"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For example, in a commercial building where each floor is occupied by a different company, configure the system as follows."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Master account"
          }), " for the building"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subaccount"
          }), " for each tenant company"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This setup authorizes only employees with access to a specific floor, simplifying building management."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-branch-organization",
      children: "Multi-branch organization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A company with offices in multiple locations can configure the system as follows."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Manage global settings through a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "master account"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "subaccount"
          }), " for each branch"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For example, a company with ten offices worldwide can use a federated structure to streamline management."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setFederatedSites",
      children: "Set up federated sites"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "access-partner-portal",
          children: "Access Partner Portal"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["URL: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://partner.biostarair.com",
            children: "https://partner.biostarair.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Only partners and installers can use the BioStar Air Partner Portal."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "End customers must contact an installer to configure this feature."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "create-primary-site",
          children: "Create primary site"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Log in to the ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://partner.biostarair.com",
                children: "Partner Portal"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create Site"
              }), ", and in ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Site Profile"
              }), " select ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Federated Site"
              }), "."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["This step ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "must"
                  }), " be performed when first setting up the site."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "A standard site cannot be converted to a federated site later."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Add a federation site administrator on the same screen."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "federation site administrator"
                  }), " added in the Partner Portal can access the primary site and all subsites."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "general administrator"
                  }), " added in BioStar Air can manage only individual sites."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "add-subsites",
          children: "Add subsites"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["After the primary site is set as a federated site, the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Site List"
              }), " shows an option to create subsites."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create Subsite"
              }), " and configure it like any other site."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-considerations",
      children: "Important considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-and-reader-management",
      children: "User and device management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add users and devices separately to each subsite."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A device can be registered to only one site at a time. Select either the primary site or a subsite."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primary-site-usage",
      children: "Primary site usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Certain customers use the primary site only as an access point for subsite management and do not register any users or devices in the primary site."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Example 1"
          }), ": A company with three branch offices sets up a primary site with no devices and creates a subsite for each branch."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Example 2"
          }), ": A company with headquarters and three branches registers users and devices at headquarters (the primary site) and sets up subsites for the branches."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "billing",
      children: "Billing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Billing is calculated based on the number of registered devices (readers) per site."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "There is no additional cost to create a primary site without registered devices."
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