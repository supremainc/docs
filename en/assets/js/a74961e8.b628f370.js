"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["7139"], {
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
91337: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_adding_users_mdx_a74_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-adding-users-mdx-a74.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_adding_users_mdx_a74_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-adding-users","title":"Manage Users in Mobile App","description":"This guide explains how to manage users, perform batch actions, and add new users using the BioStar Air mobile app.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-adding-users.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-adding-users","permalink":"/docs/en/platform/biostar_air/managing-adding-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-adding-users.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-adding-users","title":"Manage Users in Mobile App","description":"This guide explains how to manage users, perform batch actions, and add new users using the BioStar Air mobile app.","keywords":["User Management","BioStar Air","Mobile App"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Manage Card Templates","permalink":"/docs/en/platform/biostar_air/managing-card-templates"},"next":{"title":"User Card and Credential Types","permalink":"/docs/en/platform/biostar_air/user-card-types"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(49169);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-adding-users.mdx


const frontMatter = {
	id: 'managing-adding-users',
	title: 'Manage Users in Mobile App',
	description: 'This guide explains how to manage users, perform batch actions, and add new users using the BioStar Air mobile app.',
	keywords: [
		'User Management',
		'BioStar Air',
		'Mobile App'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._biostarair_customer_notice/* .toc */.RM, {
  "value": "Go to user management",
  "id": "accessingUserManage",
  "level": 2
}, {
  "value": "Add users",
  "id": "accessingUserManage",
  "level": 2
}, {
  "value": "User actions",
  "id": "userActions",
  "level": 2
}, {
  "value": "Edit user information",
  "id": "edit-user-information",
  "level": 2
}, {
  "value": "Filter users",
  "id": "filteringUsers",
  "level": 2
}, {
  "value": "Perform batch actions",
  "id": "performing-batch-actions",
  "level": 2
}, {
  "value": "Manage user groups",
  "id": "manageUserGroups",
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
  }, {Cmd, Column, Columns, IcAdd, IcAirEdit, IcAirGroup, IcAirMore, IcAirRemove, IcBw, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirGroup) _missingMdxReference("IcAirGroup", true);
  if (!IcAirMore) _missingMdxReference("IcAirMore", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "With the BioStar Air mobile app, administrators manage users, edit details, and assign credentials directly from a mobile device."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Download and install the BioStar Air app on a mobile device from the following link."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://apps.apple.com/us/app/biostar-air/id6745057397?l=ko",
              children: "iOS"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://play.google.com/store/apps/details?id=com.supremainc.biostarair",
              children: "Android"
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Log in with the ID and password used for the BioStar Air web portal."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Watch the following video guide to learn about the user management feature in the BioStar Air mobile app."
      }), (0,jsx_runtime.jsx)(YouTube, {
        videoId: "LSmlypwTwOo"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--40",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user.png",
          className: "none"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l40",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "accessingUserManage",
          children: "Go to user management"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Use the user management feature in the BioStar Air app."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Run BioStar Air on your mobile device."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_tab_management",
                product: "air"
              }), " in the bottom navigation bar."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Tap ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "A list of users appears. Add new users or edit existing user details."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--40",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-add.png",
          className: "none"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l40",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "accessingUserManage",
          children: "Add users"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "The mobile app also allows adding new users."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Tap ", (0,jsx_runtime.jsx)(IcAdd, {}), " at the top of the user list."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Enter the required details in ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_form_header",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Select whether the user is regular or temporary in ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "select_user_card_type_label",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Issue credentials for access in ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "credential_detail",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Enter the user's email address or mobile phone number in ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_form_input8",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Set the validity period and access level."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To issue the card later, tap ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), ", or tap ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_card_activate_btn",
                product: "air"
              }), " to issue the credentials immediately."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about adding users, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "adding-individual-users",
              children: "the following"
            }), "."]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--40",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-action.png"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l40",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "userActions",
          children: "User actions"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Tap a user in the user list. In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_detail",
            product: "air"
          }), " screen, tap ", (0,jsx_runtime.jsx)("span", {
            className: "rect green",
            children: (0,jsx_runtime.jsx)(IcAirMore, {})
          }), ". The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "User actions"
          }), " menu appears."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "after_suspend_user_reactivate_action",
                product: "air"
              }), ": Reactivates suspended users."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_reactivate_action",
                product: "air"
              }), ": Reissues the user's credentials."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "suspend_action",
                product: "air"
              }), ": Temporarily deactivates the user. Suspended users cannot access."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "delete_action",
                product: "air"
              }), ": Deletes the user from the system."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "after_suspend_user_reactivate_action",
              product: "air"
            }), " option appears only for suspended users."]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--40",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-edit.png"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l40",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "edit-user-information",
          children: "Edit user information"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Edit user details."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Tap the user to edit in the user list."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Tap ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " in the top right."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Edit the necessary information on the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_edit_header",
                product: "air"
              }), " screen."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To save the changes, tap ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), "."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Use ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_card_activate_btn",
                product: "air"
              }), " to issue credentials."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--40",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-filter.png",
          className: "none"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l40",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "filteringUsers",
          children: "Filter users"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Filter the user list by the desired criteria. Tap ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "logs_filters_action_btn",
            product: "air"
          }), " at the top right of the user list. Users can be filtered by the following criteria."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column8",
                product: "air"
              }), ": Filters by user type (regular or temporary)."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column2",
                product: "air"
              }), ": Filters by credential type."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column4",
                product: "air"
              }), ": Filters by activation status."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column5",
                product: "air"
              }), ": Filters by user group."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--40",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-bulk-actions.png"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l40",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "performing-batch-actions",
          children: "Perform batch actions"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Select multiple users to perform user actions in batch."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Long-press a user in the user list."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Tap additional users to select them."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Tap one of the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "User actions"
              }), " provided at the bottom of the screen."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "User actions"
            }), " feature, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#userActions",
              children: "the following"
            }), "."]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--40",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-group.png",
          className: "none"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l40",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "manageUserGroups",
          children: "Manage user groups"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Manage user groups. Tap ", (0,jsx_runtime.jsx)(IcAirGroup, {}), " at the top of the user list. The user group list appears."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To view users in a group, tap ", (0,jsx_runtime.jsx)(IcBw, {}), " to the right of the desired group."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To add a new group, tap ", (0,jsx_runtime.jsx)(IcAdd, {}), " in the top right."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To edit a group name, long-press the desired group and tap ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " at the bottom."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To delete a group, long-press the desired group and tap ", (0,jsx_runtime.jsx)(IcAirRemove, {}), " at the bottom. Select one or more groups to delete them."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on user group management, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "managing-user-groups",
              children: "the following"
            }), "."]
          })
        })]
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