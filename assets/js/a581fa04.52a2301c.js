"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9475"], {
4933: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (MDXContent),
  d$: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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
8303: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_06_user_management_managing_user_groups_in_airfob_pro_mdx_a58_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-06-user-management-managing-user-groups-in-airfob-pro-mdx-a58.json
var site_docs_platform_biostar_air_06_user_management_managing_user_groups_in_airfob_pro_mdx_a58_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-user-groups","title":"Managing User Groups","description":"Learn how to create, organize, and manage user groups and subgroups for efficient user categorization and access control administration in BioStar Air.","source":"@site/docs/platform/biostar_air/06-user-management-managing-user-groups-in-airfob-pro.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-user-groups","permalink":"/docs/platform/biostar_air/managing-user-groups","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/06-user-management-managing-user-groups-in-airfob-pro.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"managing-user-groups","title":"Managing User Groups","description":"Learn how to create, organize, and manage user groups and subgroups for efficient user categorization and access control administration in BioStar Air.","keywords":["user management","BioStar Air","user groups"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"User Card Types","permalink":"/docs/platform/biostar_air/user-card-types"},"next":{"title":"Managing Card Templates","permalink":"/docs/platform/biostar_air/managing-card-templates"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(4933);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/06-user-management-managing-user-groups-in-airfob-pro.mdx


const frontMatter = {
	id: 'managing-user-groups',
	title: 'Managing User Groups',
	description: 'Learn how to create, organize, and manage user groups and subgroups for efficient user categorization and access control administration in BioStar Air.',
	keywords: [
		'user management',
		'BioStar Air',
		'user groups'
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
}, ..._biostarair_customer_notice/* toc */.d$, {
  "value": "Navigating to User Groups",
  "id": "navigating-to-user-groups",
  "level": 2
}, {
  "value": "Creating a User Group",
  "id": "creating-a-user-group",
  "level": 2
}, {
  "value": "Assigning Users to a Group",
  "id": "assigning-users-to-a-group",
  "level": 2
}, {
  "value": "Creating Subgroups",
  "id": "creating-subgroups",
  "level": 2
}, {
  "value": "To create a subgroup:",
  "id": "to-create-a-subgroup:",
  "level": 3
}, {
  "value": "Assigning Users to a Subgroup:",
  "id": "assigning-users-to-a-subgroup:",
  "level": 3
}, {
  "value": "Understanding User Group Totals",
  "id": "understanding-user-group-totals",
  "level": 2
}, {
  "value": "Can a user belong to multiple user groups?",
  "id": "can-a-user-belong-to-multiple-user-groups",
  "level": 2
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
  }, {YouTube} = _components;
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-overview",
      children: "Feature Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "User groups in BioStar Air allow administrators to categorize users based on departments, roles, or other classifications. This helps in organizing and managing access control more efficiently."
    }), "\n", (0,jsx_runtime.jsx)(YouTube, {
      videoId: "sNxu5pQuOsI"
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigating-to-user-groups",
      children: "Navigating to User Groups"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To manage user groups:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User Management"
          }), " in the BioStar Air Portal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click on ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User Groups"
          }), " to view existing groups."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Here, you can ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "add"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "edit"
          }), ", or ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "delete"
          }), " user groups."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creating-a-user-group",
      children: "Creating a User Group"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To create a new user group:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click on ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add User Group"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Enter a name for the group (e.g., \"Law Team\")."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " to create the group."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "assigning-users-to-a-group",
      children: "Assigning Users to a Group"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once a user group is created, users can be added by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Going to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Users"
          }), " under ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User Management"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecting the users to be assigned."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Clicking on ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manage Group"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Choosing the user group and confirming by clicking ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Returning to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "User Groups"
      }), " interface will reflect the updated total number of users in each group."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creating-subgroups",
      children: "Creating Subgroups"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Subgroups allow further categorization within a user group. However, subgroups are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not hierarchical"
      }), ", meaning users in a subgroup are not automatically included in the parent group."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "to-create-a-subgroup:",
      children: "To create a subgroup:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the parent group."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Subgroup"
          }), " and enter a name (e.g., \"Civil Law Team\")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " to create the subgroup."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "assigning-users-to-a-subgroup:",
      children: "Assigning Users to a Subgroup:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Users"
          }), " under ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User Management"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the users to be added."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manage Group"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the subgroup under its parent group and click ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "understanding-user-group-totals",
      children: "Understanding User Group Totals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since user groups are not hierarchical:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Users in a subgroup do ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "not"
          }), " automatically appear in the parent group."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The total user count for a parent group does not include subgroup members unless manually added."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecting a subgroup will only display users assigned specifically to that subgroup."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "can-a-user-belong-to-multiple-user-groups",
      children: "Can a user belong to multiple user groups?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Yes"
      }), ". Users in BioStar Air can be members of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "multiple user groups"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In BioStar 2, user groups were typically tied to a single department. BioStar Air decouples this, allowing more dynamic usage:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Filter the user list by group (e.g., \"HR Department\") to quickly manage access levels."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create context-specific groups (e.g., \"Men's Locker Room\") that cut across departments."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use user groups in ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "event log filters"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "report generation"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Assign user groups to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "muster point"
          }), " devices or device groups for targeted safety protocols."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This flexibility makes it easier to manage overlapping user roles and access scenarios."
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
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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