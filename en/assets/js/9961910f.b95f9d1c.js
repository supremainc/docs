"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["12343"], {
49169: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Customers who began using BioStar Air access control before May 2025 may still be using the Airfob Space app, which has since been rebranded as the Suprema Pass app. Both apps offer identical functionality and are fully compatible. There is no need for existing users to switch — mobile credentials work seamlessly across both."
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
69885: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_site_selector_mdx_996_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-site-selector-mdx-996.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_site_selector_mdx_996_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-selector","title":"Site Selector","description":"This article explains how to manage multiple BioStar Air sites with a single email address and streamline the login process using the Site Selector feature.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/site-selector.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-selector","permalink":"/docs/en/platform/biostar_air/site-selector","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-selector.mdx","tags":[],"version":"current","frontMatter":{"id":"site-selector","title":"Site Selector","description":"This article explains how to manage multiple BioStar Air sites with a single email address and streamline the login process using the Site Selector feature.","keywords":["BioStar Air","login","Site Selector"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Getting Started","permalink":"/docs/en/platform/biostar_air/getting-started"},"next":{"title":"Manage Users","permalink":"/docs/en/platform/biostar_air/managing-users"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/site-selector.mdx


const frontMatter = {
	id: 'site-selector',
	title: 'Site Selector',
	description: 'This article explains how to manage multiple BioStar Air sites with a single email address and streamline the login process using the Site Selector feature.',
	keywords: [
		'BioStar Air',
		'login',
		'Site Selector'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "What is Site Selector?",
  "id": "siteSelector",
  "level": 2
}, {
  "value": "Create a new site",
  "id": "newSite",
  "level": 2
}, {
  "value": "Use with existing sites",
  "id": "existingSites",
  "level": 2
}, {
  "value": "Use Site Selector",
  "id": "howToLogInAndUseTheSiteSelector",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Managing multiple sites in the BioStar Air portal used to require a separate email address and password for each site. This made the process cumbersome and time-consuming. The new ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Site Selector"
      }), " feature simplifies processes and reduces the need to log in multiple times by allowing management of multiple sites with a single email address."]
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "siteSelector",
      children: "What is Site Selector?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Site Selector feature enables signing in to the BioStar Air portal with a single, unified email address even when managing multiple sites. There is no need to sign in with different email addresses for each site. Sign in once with a single email address, and then use the Site Selector menu to switch easily between the sites being managed."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-site-selector.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "newSite",
      children: "Create a new site"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When creating a new site through the Partner Portal, use an email address that is already registered as an administrator account for another site. The system automatically links the new site to the existing email, allowing management of multiple sites with a single account."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create a new site via the ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://partner.biostarair.com/",
            children: "Partner Portal"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When prompted for the administrator email, enter the email address that is already linked to another site."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The new site is automatically linked to the existing account."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on signing up for and using the Partner Portal, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "intro-to-partner-portal",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "existingSites",
      children: "Use with existing sites"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If multiple sites are already managed but each uses separate sign-in credentials, request a manual migration from Suprema. This process consolidates the email addresses, enabling management of all sites with a single sign-in."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Contact the MOCA support team and request a manual migration for the sites."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If alias addresses such as ", (0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:bob+site1@example.com",
            children: "bob+site1@example.com"
          }), " and ", (0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:bob+site2@example.com",
            children: "bob+site2@example.com"
          }), " are used, provide the root email address (", (0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:bob@example.com",
            children: "bob@example.com"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If completely unique email addresses are used for each site, provide the full list of email addresses."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Once migration is complete, access all sites with a single email address through the Site Selector feature."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "howToLogInAndUseTheSiteSelector",
      children: "Use Site Selector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With a unified email address, logging in and switching between sites is straightforward."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-site-selector-top.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Log in"
          }), ": Enter the unified email address and password."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Site Selector"
          }), ": After signing in, the Site Selector feature automatically appears and lists all sites linked to the email address."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Search and navigate"
          }), ": When managing many sites, use the search bar to quickly find the desired site. Selecting a site takes you to the dashboard."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            }), ": Even when a unified email is used, each site's permissions and settings remain independent. Administrator roles and access rights are managed separately for each site."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Troubleshooting"
            }), ": If the Site Selector feature does not appear or an incorrect site is shown, verify that the migration request is complete or contact the MOCA support team for further assistance."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "By streamlining the sign-in process and consolidating multiple sites under one account, the Site Selector feature saves time and effort when managing several sites in BioStar Air."
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