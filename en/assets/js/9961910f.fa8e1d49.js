"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["12343"], {
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
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_site_selector_mdx_996_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-selector","title":"Site Selector","description":"This article explains how to manage multiple BioStar Air sites with a single email address and streamline the login process using the Site Selector feature.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/site-selector.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-selector","permalink":"/docs/en/platform/biostar_air/site-selector","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-selector.mdx","tags":[],"version":"current","frontMatter":{"id":"site-selector","title":"Site Selector","description":"This article explains how to manage multiple BioStar Air sites with a single email address and streamline the login process using the Site Selector feature.","keywords":["BioStar Air","login","Site Selector"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Getting Started","permalink":"/docs/en/platform/biostar_air/getting-started"},"next":{"title":"Getting Started with the BioStar Air App","permalink":"/docs/en/platform/biostar_air/managing-sites-with-app"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
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



const toc = [{
  "value": "What is Site Selector?",
  "id": "siteSelector",
  "level": 2
}, {
  "value": "Create a new site",
  "id": "newSite",
  "level": 2
}, {
  "value": "Using one email across multiple sites",
  "id": "existingSites",
  "level": 2
}, {
  "value": "Using the Site Selector",
  "id": "howToLogInAndUseTheSiteSelector",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Site Selector"
      }), " feature simplifies processes and reduces the need to log in multiple times by allowing management of multiple sites with a single email address."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "siteSelector",
      children: "What is Site Selector?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Site Selector"
      }), " feature enables signing in to the BioStar Air portal with a single, unified email address even when managing multiple sites. There is no need to sign in with different email addresses for each site. Sign in once with a single email address, and then use the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Site Selector"
      }), " menu to switch easily between the sites being managed."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-site-selector.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Even with a unified email, each site's permissions and settings remain independent. Administrator roles and access rights are managed separately for each site."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "select_site_title",
              product: "air"
            }), " does not appear or the wrong site is shown, make sure the migration request has been completed, or contact the MOCA (MOCA) support team for further assistance."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "select_site_title",
              product: "air"
            }), " feature streamlines sign-in and consolidates multiple sites under one account, saving time and effort when managing sites in BioStar Air."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Sites marked with an ", (0,jsx_runtime.jsx)(_components.code, {
              children: "F"
            }), " icon are Federation Site in the site selection list. Federation Sites are displayed in the upper-left corner of the screen. For more information on Federation Site, see ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/federated-sites"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/air/bsair-site-selector-top.png"
          }), "\n"]
        }), "\n"]
      })
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
        children: ["For detailed information on signing up for and using the Partner Portal, see ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/biostar-air-partner-portal-detailed-use"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "existingSites",
      children: "Using one email across multiple sites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If multiple sites are already managed but each uses separate sign-in credentials, request a manual migration from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Suprema"
      }), ". This process consolidates the email addresses, enabling management of all sites with a single sign-in."]
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Once migration is complete, access all sites with a single email address through the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Site Selector"
          }), " feature."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "howToLogInAndUseTheSiteSelector",
      children: "Using the Site Selector"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If your email address is associated with multiple sites, signing in and switching between them is easy."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enter your email address and password."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you manage multiple sites, use the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "select_site_title",
            product: "air"
          }), " window to quickly find the site you want. Selecting a site takes you to the dashboard."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-site-selector-search.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "After signing in, click the profile icon in the top right corner of the screen."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the pop-up menu appears, click the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Site selector"
          }), " option below your email address."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-site-selector-profile.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can view a list of all sites associated with the email address."
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