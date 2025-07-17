"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5958"], {
61933: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_federated_sites_mdx_b94_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-federated-sites-mdx-b94.json
var site_docs_platform_biostar_air_federated_sites_mdx_b94_namespaceObject = JSON.parse('{"id":"platform/biostar_air/federated-sites","title":"Federated Sites","description":"Learn how to set up and manage federated sites in BioStar Air for multi-tenant buildings and multi-branch organizations with centralized control.","source":"@site/docs/platform/biostar_air/federated-sites.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/federated-sites","permalink":"/docs/platform/biostar_air/federated-sites","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/federated-sites.mdx","tags":[],"version":"current","frontMatter":{"id":"federated-sites","title":"Federated Sites","description":"Learn how to set up and manage federated sites in BioStar Air for multi-tenant buildings and multi-branch organizations with centralized control.","keywords":["federated","sites","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"BioStar Air Partner Portal Detailed Use","permalink":"/docs/platform/biostar_air/biostar-air-partner-portal-detailed-use"},"next":{"title":"Integration Quickstart","permalink":"/docs/platform/biostar_air/integration-quickstart"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/federated-sites.mdx


const frontMatter = {
	id: 'federated-sites',
	title: 'Federated Sites',
	description: 'Learn how to set up and manage federated sites in BioStar Air for multi-tenant buildings and multi-branch organizations with centralized control.',
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
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "What Are Federated Sites?",
  "id": "what-are-federated-sites",
  "level": 2
}, {
  "value": "Why Use Federated Sites?",
  "id": "why-use-federated-sites",
  "level": 2
}, {
  "value": "Multi-Tenant Buildings",
  "id": "multi-tenant-buildings",
  "level": 3
}, {
  "value": "Multi-Branch Organizations",
  "id": "multi-branch-organizations",
  "level": 3
}, {
  "value": "How to Set Up Federated Sites",
  "id": "how-to-set-up-federated-sites",
  "level": 2
}, {
  "value": "Access the Partner Portal",
  "id": "access-the-partner-portal",
  "level": 3
}, {
  "value": "Create the Primary Site",
  "id": "create-the-primary-site",
  "level": 3
}, {
  "value": "Add Sub-Sites",
  "id": "add-sub-sites",
  "level": 3
}, {
  "value": "Important Considerations",
  "id": "important-considerations",
  "level": 2
}, {
  "value": "User and Reader Management",
  "id": "user-and-reader-management",
  "level": 3
}, {
  "value": "Primary Site Usage",
  "id": "primary-site-usage",
  "level": 3
}, {
  "value": "Billing",
  "id": "billing",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Step, Steps} = _components;
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Air provides the capability to create ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "federated sites"
      }), ", allowing a primary site to manage multiple sub-sites seamlessly. This feature is ideal for multi-tenant buildings or multi-branch organizations, offering centralized control with distributed access management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-are-federated-sites",
      children: "What Are Federated Sites?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Federated sites enable a hierarchical structure where a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "primary site"
      }), " oversees one or more ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sub-sites"
      }), ". Administrators on the primary site, known as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Federated Admins"
      }), ", can access and manage sub-sites directly through the Airfob Pro interface."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-use-federated-sites",
      children: "Why Use Federated Sites?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Federated sites are beneficial in the following scenarios:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-tenant-buildings",
      children: "Multi-Tenant Buildings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For example, in a commercial building with different companies occupying each floor, you can establish:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "master account"
          }), " for the building."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sub-accounts"
          }), " for each tenant company."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This setup ensures only authorized employees access specific floors while simplifying management for the building administrator."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-branch-organizations",
      children: "Multi-Branch Organizations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For companies with offices in multiple locations, you can set up:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "master account"
          }), " to manage global settings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sub-accounts"
          }), " for each branch."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For instance, a business with 10 offices worldwide can use a federated structure to streamline administration."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-set-up-federated-sites",
      children: "How to Set Up Federated Sites"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "access-the-partner-portal",
          children: "Access the Partner Portal"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "The Airfob Partner Portal is exclusively available to partners and installers."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "End customers must contact their installer to configure this feature."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "create-the-primary-site",
          children: "Create the Primary Site"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Log in to the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Partner Portal"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create Site"
              }), " and select ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Federation Site"
              }), " under the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Site Profile"
              }), "."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["This step ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "must"
                  }), " be done when setting up a site for the first time."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Regular sites cannot be changed into federated sites later."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Add ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Federated Admins"
              }), " on the same screen."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Federated Admins"
                  }), " (added in the Partner Portal) have access to the primary site and all sub-sites."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Regular Admins"
                  }), " (added in Airfob Pro) only manage individual sites."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "add-sub-sites",
          children: "Add Sub-Sites"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Once the primary site is set up as a federated site, the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Site List"
              }), " will display an option to create sub-sites."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Create Sub-Site"
              }), " and configure it as you would any other site."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-considerations",
      children: "Important Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-and-reader-management",
      children: "User and Reader Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Users and readers must be added separately to each sub-site."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Readers can only be registered to one site at a time—either the primary site or a sub-site."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primary-site-usage",
      children: "Primary Site Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Some customers use the primary site solely as an access point for managing sub-sites, without registering users or readers to the primary site."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Example 1"
          }), ": A company with three branch offices sets up a primary site with no devices and creates sub-sites for each branch."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Example 2"
          }), ": A company with a headquarters and three branches registers users and readers at the headquarters (primary site) and sets up sub-sites for the branches."]
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
          children: "There is no additional cost for creating a primary site without registered devices."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By utilizing the Federated Sites feature in Airfob Space, administrators can effectively manage access for complex environments, ensuring a secure, scalable, and streamlined experience for all stakeholders."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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