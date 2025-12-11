"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["92905"], {
68444: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_view_user_by_access_mdx_38f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-view-user-by-access-mdx-38f.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_view_user_by_access_mdx_38f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/view-user-by-access","title":"Manage Access Groups","description":"This guide shows how to query users by access group and explore the access permission structure.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/view-user-by-access.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/view-user-by-access","permalink":"/en/platform/biostar_x/view-user-by-access","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/view-user-by-access.mdx","tags":[],"version":"current","frontMatter":{"id":"view-user-by-access","title":"Manage Access Groups","description":"This guide shows how to query users by access group and explore the access permission structure.","keywords":["User","Access Permission"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Export/Import User Information","permalink":"/en/platform/biostar_x/export-import-user-info"},"next":{"title":"Login in with Multi-Factor Authentication","permalink":"/en/platform/biostar_x/login-with-mfa"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/view-user-by-access.mdx


const frontMatter = {
	id: 'view-user-by-access',
	title: 'Manage Access Groups',
	description: 'This guide shows how to query users by access group and explore the access permission structure.',
	keywords: [
		'User',
		'Access Permission'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Check users by access group",
  "id": "view-user-by-access",
  "level": 2
}, {
  "value": "Learn about the tree structure",
  "id": "learn-tree-view",
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
  }, {Cmd, IcAdd, IcMinus, Image, Treeview} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcMinus) _missingMdxReference("IcMinus", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Treeview) _missingMdxReference("Treeview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide shows how to query and manage users based on access groups. Use ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.accessExplorer"
      }), " to check registered users by access group and explore the access permission hierarchy through the tree structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To check access doors or floors belonging to an access group in ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "team.tree.accessExplorer"
        }), ", you must first set up the access control feature. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-access-control",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "view-user-by-access",
      children: "Check users by access group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " page."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.accessExplorer"
          }), " tab in the tree structure menu."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-access-explorer.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the desired access permission group in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.tree.accessExplorerRootName"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can view users belonging to the selected access permission group in the user list."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To expand or collapse access levels or floor levels under the access group, click ", (0,jsx_runtime.jsx)(IcAdd, {}), " or ", (0,jsx_runtime.jsx)(IcMinus, {}), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learn-tree-view",
      children: "Learn about the tree structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The tree structure menu is composed of the following structure."
    }), "\n", (0,jsx_runtime.jsx)(Treeview, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Access group"
          }), " is the upper layer that includes access levels, floor levels, user groups, and users. You can manage access permissions through the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "access group"
          }), ". For more information on creating access groups, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control-manage-access-group",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Access level"
          }), " sets the times when users can enter and grants permission to access doors during this time. For more information on creating access levels, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control-manage-access-level",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can manage the floors users can access via elevators through the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "floor level"
          }), ". For more information on creating floor levels, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control-manage-floor-level",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Schedule"
          }), " is a feature that efficiently operates access control and attendance management by setting access and holiday schedules. For more information on registering schedules, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-schedule",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can register elevators and manage the floors accessible via the elevators. For more information about elevator enrollment, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-elevators-add",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The elevator registration feature is available through additional options for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced"
        }), " licenses and above. For more information on licensing policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "the following"
        }), "."]
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