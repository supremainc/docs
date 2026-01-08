"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["59088"], {
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
82226: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_user_groups_mdx_c11_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-user-groups-mdx-c11.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_user_groups_mdx_c11_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-user-groups","title":"Manage User Groups","description":"This guide explains how to create, organize, and manage user groups and lower groups to efficiently categorize users and control access in BioStar Air.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-user-groups.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-user-groups","permalink":"/docs/en/platform/biostar_air/managing-user-groups","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-user-groups.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-user-groups","title":"Manage User Groups","description":"This guide explains how to create, organize, and manage user groups and lower groups to efficiently categorize users and control access in BioStar Air.","keywords":["User Management","BioStar Air","User group"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Add Users in Bulk","permalink":"/docs/en/platform/biostar_air/adding-users-in-bulk"},"next":{"title":"Manage Card Templates","permalink":"/docs/en/platform/biostar_air/managing-card-templates"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-user-groups.mdx


const frontMatter = {
	id: 'managing-user-groups',
	title: 'Manage User Groups',
	description: 'This guide explains how to create, organize, and manage user groups and lower groups to efficiently categorize users and control access in BioStar Air.',
	keywords: [
		'User Management',
		'BioStar Air',
		'User group'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "Create group",
  "id": "creatingUserGroup",
  "level": 2
}, {
  "value": "Create lower group",
  "id": "creatingSubgroup",
  "level": 2
}, {
  "value": "Assign users to a group",
  "id": "assigning-users-to-a-group",
  "level": 2
}, {
  "value": "Remove or move group",
  "id": "disableGroup",
  "level": 2
}, {
  "value": "Edit group name",
  "id": "editGroupName",
  "level": 2
}, {
  "value": "Delete group",
  "id": "deleteGroup",
  "level": 2
}, {
  "value": "Understand user group totals",
  "id": "understanding-user-group-totals",
  "level": 2
}, {
  "value": "User group composition",
  "id": "user-group-composition",
  "level": 3
}, {
  "value": "Can users belong to multiple user groups?",
  "id": "can-a-user-belong-to-multiple-user-groups",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirEdit, IcAirGroup, IcAirRemove, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirGroup) _missingMdxReference("IcAirGroup", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "In BioStar Air, administrators can categorize users by department, role, or other criteria through user groups. This enables more efficient configuration and management of access control."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Refer to the following video to watch the guide on managing user groups."
      }), (0,jsx_runtime.jsx)(YouTube, {
        videoId: "sNxu5pQuOsI"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creatingUserGroup",
      children: "Create group"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a new user group."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-gettingstarted-user-group-mng.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_group_btn",
            product: "air"
          }), " at the top right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_group_popup_title",
            product: "air"
          }), " window appears, enter the user group name."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-gettingstarted-user-group-mng-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to create the group."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When a warning message appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_yes",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Deleting a group does not delete the users in that group. The users are only removed from the group."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creatingSubgroup",
      children: "Create lower group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use lower groups to further categorize user groups. However, lower groups are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not hierarchical"
      }), ". This means users in a lower group are not automatically included in the upper group."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_group_btn",
            product: "air"
          }), " at the top right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_group_popup_title",
            product: "air"
          }), " window appears, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_sub_group_text",
            product: "air"
          }), " option."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-sub-group-popup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["From ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "select_group_placeholder",
            product: "air"
          }), ", select the upper group."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter the group name in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_subgroup_name_input",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to create the lower group."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The newly created lower group appears indented under the upper group in the user group list."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-user-sub-group-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "assigning-users-to-a-group",
      children: "Assign users to a group"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After creating a user group, add users to it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the checkbox next to the users to assign to the group in the user list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirGroup, {}), " at the top left of the user list."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-assign.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_user_groups_header",
            product: "air"
          }), " window appears, select the upper or lower group to assign the users."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-assign-popup.png",
          width: "50%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to save the group settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Confirm that the users are assigned to the new group in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_table_column5",
        product: "air"
      }), " column of the user list."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-user-group-assign-result.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Return to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_groups_submenu",
        product: "air"
      }), " to confirm that the group's ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_groups_table_col2",
        product: "air"
      }), " is updated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "disableGroup",
      children: "Remove or move group"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remove users from a group or move them to another group."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the checkbox next to the users to remove from or move between groups in the user list."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "When moving users, first select users from the same group, then proceed."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirGroup, {}), " at the top left of the user list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_user_groups_header",
            product: "air"
          }), " window appears, perform one of the following:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "To unassign the group, clear the selected group's checkbox."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "To move the group, select the checkbox for the current group and then choose the target group."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to save the group settings."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Confirm the group changes in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_table_column5",
        product: "air"
      }), " column of the user list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editGroupName",
      children: "Edit group name"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modify the name of an existing user group."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the checkbox for the user group to edit in the list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " at the top left of the user group list."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_user_group_btn",
            product: "air"
          }), " window appears, edit the group name."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-edit-popup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " to save the changes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The group name can be edited only when a single group is selected."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteGroup",
      children: "Delete group"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Delete any user groups that are no longer needed."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the checkbox for the user group to delete in the list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirRemove, {}), " at the top left of the user group list."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-remove.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "understanding-user-group-totals",
      children: "Understand user group totals"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-group-composition",
      children: "User group composition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "User groups are not organized hierarchically."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Users in a lower group do ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "not"
          }), " automatically appear in the upper group."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The upper group’s total user count does not include lower group members unless they are added manually."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Selecting a lower group shows only the users assigned to that lower group."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "can-a-user-belong-to-multiple-user-groups",
      children: "Can users belong to multiple user groups?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Users in BioStar Air can belong to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "multiple user groups"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In BioStar 2, user groups were typically linked to a single department. BioStar Air separates these, allowing more dynamic use."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Filter the user list by group to quickly manage access levels."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "e.g., HR department"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create context-specific groups that span multiple departments."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "e.g., men’s locker room"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["User groups are used for ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "event log filtering"
          }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "report generation"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Assign user groups to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "muster zone"
          }), " devices or device groups to enforce specific safety protocols."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This flexibility makes it easier to manage overlapping user roles and access scenarios."
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