"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["16192"], {
66356: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_user_group_manage_mdx_be8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-user-group-manage-mdx-be8.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_user_group_manage_mdx_be8_namespaceObject = JSON.parse('{"id":"platform/biostar_x/user-group-manage","title":"Manage User Groups","description":"Enhance management efficiency, scalability by leveraging user groups and optimize access control operations.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/user-group-manage.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/user-group-manage","permalink":"/docs/en/platform/biostar_x/user-group-manage","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/user-group-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"user-group-manage","title":"Manage User Groups","description":"Enhance management efficiency, scalability by leveraging user groups and optimize access control operations.","keywords":["User","Group","Access control"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"User","permalink":"/docs/en/platform/biostar_x/how-to-guide-user"},"next":{"title":"Register Users","permalink":"/docs/en/platform/biostar_x/add-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/user-group-manage.mdx


const frontMatter = {
	id: 'user-group-manage',
	title: 'Manage User Groups',
	description: 'Enhance management efficiency, scalability by leveraging user groups and optimize access control operations.',
	keywords: [
		'User',
		'Group',
		'Access control'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Add group",
  "id": "group-additional",
  "level": 2
}, {
  "value": "Create top-level group",
  "id": "creating-a-higher-group",
  "level": 3
}, {
  "value": "Create lower group",
  "id": "creating-a-lower-group",
  "level": 3
}, {
  "value": "Change group name",
  "id": "group-name-change",
  "level": 2
}, {
  "value": "Delete group",
  "id": "group-deletion",
  "level": 2
}, {
  "value": "View users by group",
  "id": "viewgroupuser",
  "level": 2
}, {
  "value": "Expand/collapse group list",
  "id": "expandcollapse-group-list",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "User groups can share common properties and permissions. When a user becomes a member of a group, they are automatically granted all properties of that group. A user can belong to only one user group."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Instead of setting access permissions for individual users, you can create user groups by department or role and apply the same access permissions at once."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Modifying the group's access permissions will automatically apply to all users belonging to that group, reducing the administrative workload. You can quickly adjust permissions when there are organizational changes or new projects."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "You can prevent unnecessary access and increase security by setting permissions by group."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "You can separately analyze the access logs of specific groups, making security audits and log management easier."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "User groups can apply detailed policies such as access limit times and restricted areas in integration with the access level."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "group-additional",
      children: "Add group"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create groups to efficiently manage multiple users. By registering a name such as the organization the user belongs to, it can be managed conveniently."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Registering the group name as the name of the organization or department that the user belongs to makes management easier."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You can create sub-groups of the group sequentially up to 8 levels."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The user group name can be up to 48 characters long."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If you select a group from the user group list, only users belonging to that group will be displayed in the user list."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-a-higher-group",
      children: "Create top-level group"
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
          children: ["In the left sidebar of the screen, select ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.tree.userGroupRootName"
          }), " from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " tab and right-click."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-group-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.addNewGroup"
          }), " in the popup menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the group is created, enter your desired group name."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-group-add-input.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-a-lower-group",
      children: "Create lower group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " tab of the left sidebar on the screen, select the parent group and right-click."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-sub-group-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.addNewGroup"
          }), " in the popup menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the group is created, enter your desired group name."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "You must select a parent group when creating a sub-group, and you can create up to 8 levels."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can set a group as a subgroup of the target group by dragging the group to another group. Moving a group to ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.tree.userGroupRootName"
            }), " can set it as the top-level group."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "group-name-change",
      children: "Change group name"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the name of the group to which the user belongs. It is recommended to change the group name when the name of the organization or department changes."
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
          children: ["Select the group you want to rename from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " list of the left sidebar and right-click."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-group-rename.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.renameGroup"
          }), " in the popup menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Change the desired group name."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Check for changes in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.userGroup"
      }), " list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The user group name can be up to 48 characters long."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "group-deletion",
      children: "Delete group"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can delete the group to which the user belongs."
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
          children: ["Select the group to delete from the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " list of the left sidebar and right-click."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.deleteGroup"
          }), " in the popup menu."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-group-remove.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the confirm message appears, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.tree.dialog.delete.yes"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.userGroup"
      }), " list, confirm that the selected group has been deleted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewgroupuser",
      children: "View users by group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can see users belonging to the user group. In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " page, select the desired user group from the left sidebar. Users from the selected user group will be displayed in the list."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-user-group-select-group-user.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expandcollapse-group-list",
      children: "Expand/collapse group list"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can expand or collapse the user group list. In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.userGroup"
      }), " tab, select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.tree.userGroupRootName"
      }), " and right-click. In the popup menu, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.expandAll"
      }), " or ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.collapseAll"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-user-group-expand-collapse.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If there are subgroups within the group, you can expand or collapse them. Select the parent group and right-click. In the popup menu, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.tree.contextMenu.expandBelow"
      }), " or ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.tree.contextMenu.collapseBelow"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-user-sub-group-expand-collapse.png"
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