"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["60180"], {
23207: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_biostar_air_migration_mdx_35c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-biostar-air-migration-mdx-35c.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_biostar_air_migration_mdx_35c_namespaceObject = JSON.parse('{"id":"platform/biostar_air/biostar-air-migration","title":"Migration","description":"This guide explains how to migrate from Airfob Space to BioStar Air. Compare platform features, review compatibility, and get answers to migration-related questions.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/biostar-air-migration.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/biostar-air-migration","permalink":"/docs/en/platform/biostar_air/biostar-air-migration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/biostar-air-migration.mdx","tags":[],"version":"current","frontMatter":{"id":"biostar-air-migration","title":"Migration","description":"This guide explains how to migrate from Airfob Space to BioStar Air. Compare platform features, review compatibility, and get answers to migration-related questions.","keywords":["migration","Airfob Space","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Network Ports and Device Identification","permalink":"/docs/en/platform/biostar_air/site-setup-networking"},"next":{"title":"Manage Sites","permalink":"/docs/en/platform/biostar_air/site-management"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/faqs.json
var faqs_namespaceObject = JSON.parse('[{"question":"Do I need to switch from Airfob Space to BioStar Air?","answer":"No. If you are an existing Airfob Space customer, you can continue using the platform as-is. There is no forced migration at this time."},{"question":"Will my devices or data be affected?","answer":"No. Both platforms share the same backend. Devices, user data, and configurations remain fully compatible across both services."},{"question":"Should I start using Suprema Pass instead of the Airfob Space app?","answer":"There is no need to migrate existing mobile credential users over to BioStar Air. If you use the <a href=\'app.airfobspace.com\' target=\'_blank\'>app.airfobspace.com</a> URL or Airfob Pro app to manage users and issue mobile credentials, those users will receive an invitation that points to the Airfob Space app. If you use <a href=\'admin.biostarair.com\' target=\'_blank\'>admin.biostarair.com</a> or the BioStar Air app to manage users and issue mobile credentials, those users will receive an invitation that points to the Suprema Pass app."},{"question":"Will support or billing change?","answer":"No immediate changes will occur in your support or billing processes. Over time, however, BioStar Air will become the primary brand used for documentation, support, and feature announcements."},{"question":"Can I switch to BioStar Air if I want to?","answer":"Yes. Since the backend is shared, transitioning is simple, but some branding and feature availability differences may apply. Simply start using <a href=\'admin.biostarair.com\' target=\'_blank\'>admin.biostarair.com</a> and the BioStar Air app to manage your site. Existing administrator login credentials from <a href=\'app.airfobspace.com\' target=\'_blank\'>app.airfobspace.com</a> will work seamlessly."},{"question":"What are the benefits of BioStar Air?","answer":"BioStar Air is the future-facing brand. It will receive ongoing enhancements, such as improved integrations, UI/UX updates, and new features that may not be backported to Airfob Space."},{"question":"Will future features work with Airfob Space?","answer":"Some will, but not all. New features may be exclusive to BioStar Air going forward. For the best experience and support, new deployments should use BioStar Air."}]')
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/biostar-air-migration.mdx


const frontMatter = {
	id: 'biostar-air-migration',
	title: 'Migration',
	description: 'This guide explains how to migrate from Airfob Space to BioStar Air. Compare platform features, review compatibility, and get answers to migration-related questions.',
	keywords: [
		'migration',
		'Airfob Space',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "New customers vs existing customers",
  "id": "new-customers-vs-existing-customers",
  "level": 2
}, {
  "value": "Platform comparison",
  "id": "platform-comparison",
  "level": 2
}, {
  "value": "Frequently Asked Questions",
  "id": "frequently-asked-questions",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    li: "li",
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
  }, {FaqsItems} = _components;
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air is the rebranded version of Airfob Space, designed to reflect Suprema’s unified cloud access control strategy. Both platforms share the same backend infrastructure and core features. However, new features and improvements will be released under the BioStar Air brand going forward."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-customers-vs-existing-customers",
      children: "New customers vs existing customers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Read the following carefully"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "New customers"
          }), " in supported regions must start with ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air"
          }), " using the new URL and app."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Existing customers"
          }), " can continue using ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air"
          }), ". No immediate changes are required."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The backend engine is identical on both platforms"
          }), ", ensuring data compatibility and service continuity."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Certain features will be available only on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar Air"
        }), " in the future."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "platform-comparison",
      children: "Platform comparison"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "cols3--20-40-40",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Category"
            }), (0,jsx_runtime.jsxs)(_components.th, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar Air"
              }), " (Rebranded)"]
            }), (0,jsx_runtime.jsxs)(_components.th, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar Air"
              }), " (Retained for Korea)"]
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Service name"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BioStar Air"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BioStar Air"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Web portal"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://admin.biostarair.com",
                children: "BioStar Air"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://app.airfobspace.com",
                children: "BioStar Air"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Admin app"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BioStar Air"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BioStar Air"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "User app"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Suprema Pass", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
                children: "Supports only BioStar Air authentication (Airfob support planned)"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BioStar Air"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Partner portal"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://partner.biostarair.com",
                children: "BioStar Air Partners"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://partner.airfobspace.com",
                children: "Airfob Partners"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Developer portal"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "https://developers.biostarair.com",
                children: "BioStar Air Developers"
              }), " ", (0,jsx_runtime.jsx)(_components.em, {
                children: "API base URLs will remain unchanged"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developers.airfobspace.com",
                children: "Airfob Developers"
              })
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "frequently-asked-questions",
      children: "Frequently Asked Questions"
    }), "\n", "\n", (0,jsx_runtime.jsx)(FaqsItems, {
      data: faqs_namespaceObject
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