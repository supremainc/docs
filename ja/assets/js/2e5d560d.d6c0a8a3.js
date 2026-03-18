"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["899"], {
15062: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_user_management_user_list_mdx_2e5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-user-management-user-list-mdx-2e5.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_user_management_user_list_mdx_2e5_namespaceObject = JSON.parse('{"id":"platform/biostar_air/user-management-user-list","title":"Manage Users","description":"Efficiently manage users registered in BioStar Air. You can manage all users within your organization through functions such as viewing user lists, filtering, editing details, assigning groups and access levels, issuing credentials, performing batch operations, and generating reports.","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/user-management-user-list.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/user-management-user-list","permalink":"/docs/ja/platform/biostar_air/user-management-user-list","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/user-management-user-list.mdx","tags":[],"version":"current","frontMatter":{"id":"user-management-user-list","title":"Manage Users","description":"Efficiently manage users registered in BioStar Air. You can manage all users within your organization through functions such as viewing user lists, filtering, editing details, assigning groups and access levels, issuing credentials, performing batch operations, and generating reports.","keywords":["BioStar Air","User Management","User list","Credentials","access level","User group","Report"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Add Users","permalink":"/docs/ja/platform/biostar_air/adding-individual-users"},"next":{"title":"Add Users in Bulk","permalink":"/docs/ja/platform/biostar_air/adding-users-in-bulk"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/user-management-user-list.mdx


const frontMatter = {
	id: 'user-management-user-list',
	title: 'Manage Users',
	description: 'Efficiently manage users registered in BioStar Air. You can manage all users within your organization through functions such as viewing user lists, filtering, editing details, assigning groups and access levels, issuing credentials, performing batch operations, and generating reports.',
	keywords: [
		'BioStar Air',
		'User Management',
		'User list',
		'Credentials',
		'access level',
		'User group',
		'Report'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "View the user list",
  "id": "view-the-user-list",
  "level": 2
}, {
  "value": "User information",
  "id": "user-information",
  "level": 3
}, {
  "value": "Filter",
  "id": "userFiltering",
  "level": 3
}, {
  "value": "Additional features",
  "id": "additionalFunctions",
  "level": 3
}, {
  "value": "Edit user information",
  "id": "editUserDetails",
  "level": 2
}, {
  "value": "Manage user groups",
  "id": "manageUserGroups",
  "level": 2
}, {
  "value": "Assign users to a group",
  "id": "assigning-users-to-a-group",
  "level": 3
}, {
  "value": "Remove or move group",
  "id": "disableGroup",
  "level": 3
}, {
  "value": "Manage user status",
  "id": "manageUserStatus",
  "level": 2
}, {
  "value": "Individual user",
  "id": "individual-user",
  "level": 3
}, {
  "value": "Batch actions",
  "id": "batch-actions",
  "level": 3
}, {
  "value": "Delete users",
  "id": "deleteUser",
  "level": 2
}, {
  "value": "Individual user",
  "id": "deleteSingleUser",
  "level": 3
}, {
  "value": "Delete multiple users",
  "id": "deleteMultipleUsers",
  "level": 3
}, {
  "value": "Create a user report",
  "id": "userReport",
  "level": 2
}, {
  "value": "Search users",
  "id": "searchUsers",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, DocLink, IcAdd, IcAirActive, IcAirDown, IcAirEdit, IcAirFaceLink, IcAirFilter, IcAirFilterReset, IcAirGroup, IcAirLock, IcAirMask, IcAirMore, IcAirMtag, IcAirReissue, IcAirRemove, IcAirReport, IcAirSuspend, IcAirUpface, IcAirUtemplate, IcBw, Image, TabItem, Tabs} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcAirActive) _missingMdxReference("IcAirActive", true);
  if (!IcAirDown) _missingMdxReference("IcAirDown", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirFaceLink) _missingMdxReference("IcAirFaceLink", true);
  if (!IcAirFilter) _missingMdxReference("IcAirFilter", true);
  if (!IcAirFilterReset) _missingMdxReference("IcAirFilterReset", true);
  if (!IcAirGroup) _missingMdxReference("IcAirGroup", true);
  if (!IcAirLock) _missingMdxReference("IcAirLock", true);
  if (!IcAirMask) _missingMdxReference("IcAirMask", true);
  if (!IcAirMore) _missingMdxReference("IcAirMore", true);
  if (!IcAirMtag) _missingMdxReference("IcAirMtag", true);
  if (!IcAirReissue) _missingMdxReference("IcAirReissue", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!IcAirReport) _missingMdxReference("IcAirReport", true);
  if (!IcAirSuspend) _missingMdxReference("IcAirSuspend", true);
  if (!IcAirUpface) _missingMdxReference("IcAirUpface", true);
  if (!IcAirUtemplate) _missingMdxReference("IcAirUtemplate", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "The user list is an essential management tool for administrators responsible for access control in an organization. You can perform all user management tasks, including organizational management through user grouping, immediate response to new or departing employees with real-time activation/suspension, integrated management of various credentials, enhanced security through validity period monitoring, and preparation for reporting and auditing through filtering and report generation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "view-the-user-list",
      children: "View the user list"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The user list shows all users registered in BioStar Air at a glance. View each user's details and use the filter and sort features to quickly find specific users. Edit, delete, and assign groups to users directly from the user list."
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-overview.png"
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user.png",
              className: "none"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsx)(_components.p, {
              children: "Use the user management feature in the BioStar Air app."
            }), (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Run ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar Air"
                  }), " on your mobile device."]
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
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-information",
      children: "User information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The table in the user list provides the following information."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column8",
            product: "air"
          }), ": Indicates whether the user is a regular or temporary user. For more information on regular and temporary users, refer to ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/user-card-types"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column1",
            product: "air"
          }), ": The user's name."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_info_id",
            product: "air"
          }), ": The user's unique ID."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column2",
            product: "air"
          }), ": Shows the credentials issued to the user. For more information on the types of credentials, refer to ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/user-card-types"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column3",
            product: "air"
          }), ": The validity period of the credentials issued to the user."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column4",
            product: "air"
          }), ": Indicates whether the user is active or inactive."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column5",
            product: "air"
          }), ": The group to which the user belongs. For more information on user groups, refer to ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/managing-user-groups"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column6",
            product: "air"
          }), ": The access level assigned to the user. For more information on access levels, refer to ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/manage-access-level"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column7",
            product: "air"
          }), ": The user's permissions for floors they can access. For more information on floor levels, refer to ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/manage-floor-level"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "userFiltering",
      children: "Filter"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use the filter feature in the top header of the user list. Click ", (0,jsx_runtime.jsx)(IcAirFilter, {
            title: "Filter"
          }), " in the header to set the desired conditions."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-user-filtering.png"
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click ", (0,jsx_runtime.jsx)(IcAirFilterReset, {
              title: "Clear Filters"
            }), " at the top of the user list to reset the applied filter conditions."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the mobile app, you can filter and view users in the user list by the desired criteria. Tap ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "logs_filters_action_btn",
            product: "air"
          }), " at the top right of the user list. Users can be filtered by the following criteria."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-filter.png",
          className: "none",
          width: "60%"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additionalFunctions",
      children: "Additional features"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The features available at the top of the user list are as follows."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), ": Assign, remove, or move the selected users to a group. For more information, refer to ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#manageUserGroups"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirLock, {
            width: "24px",
            height: "24px",
            title: "Set Access"
          }), ": Change the access level of the selected users. For more information about access levels, see ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/manage-access-level"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-tool-aclevel.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirMtag, {
            width: "24px",
            height: "24px",
            title: "Mobile Consecutive Tag"
          }), ": Allow the selected users to tag mobile cards consecutively without waiting time. The Suprema Pass app supports this starting from version 2.9.0."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-tool-mobile-tag.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirUtemplate, {
            width: "24px",
            height: "24px",
            title: "User Template"
          }), ": Apply a user template to the selected users. Add any other information needed in addition to the default user information."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-user-template.png",
          width: "43%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirDown, {
            width: "24px",
            height: "24px",
            title: "Download"
          }), ": Export the selected user information to a PDF or CSV file."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirUpface, {
            width: "24px",
            height: "24px",
            title: "Image Upload"
          }), ": Upload user images in bulk. The name of each image file to upload must match the user's ID."]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "For example, the file 601.jpg corresponds to user ID 601."
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File format requirements"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Supported formats: ", (0,jsx_runtime.jsx)(_components.em, {
                  children: ".jpg"
                }), ", ", (0,jsx_runtime.jsx)(_components.em, {
                  children: ".jpeg"
                }), ", ", (0,jsx_runtime.jsx)(_components.em, {
                  children: ".png"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["File size limit: ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "1 MB"
                }), " per image"]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirFaceLink, {
            width: "26px",
            height: "26px",
            title: "Send Face Registration Link"
          }), ": Send a face enrollment link to the selected users by email or text message. When a user clicks the link and enrolls their face on the webpage, they are granted access via facial authentication."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "The link cannot be sent to users without a registered email address or phone number."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirFilterReset, {
            width: "26px",
            height: "26px",
            title: "Clear Filters"
          }), ": Reset all filters applied to the user list. This feature is available only when filters are applied. For more information on applying filtering, refer to ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#userFiltering"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirReport, {
            width: "26px",
            height: "26px",
            title: "Report"
          }), ": Configure user reports. After a report is generated, it is sent to the administrator's email. For more information on report configuring, refer to ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#userReport"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirMask, {
            width: "24px",
            height: "24px",
            title: "Apply Masking"
          }), ": Mask(", (0,jsx_runtime.jsx)(_components.code, {
            children: "***"
          }), ") the information such as name and ID in the user list to protect privacy. This feature is useful in environments requiring privacy. Select the toggle button to enable this feature, and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-user-masking.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editUserDetails",
      children: "Edit user information"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "Follow these steps to edit a user's details or change their credentials."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
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
              children: "Click the user you want to edit in the list."
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-list.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " in the top right of the user details."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-details.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Edit the required details when the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_edit_header",
                product: "air"
              }), " window appears."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-details-edit-info.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["After editing, click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " at the bottom right."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-edit.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsx)(_components.p, {
              children: "To edit the detail information of user in the mobile app, follow these steps."
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
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on user information, refer to ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/adding-individual-users"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manageUserGroups",
      children: "Manage user groups"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide describes how to assign or move, exclude user from user group. For more information on creating and managing user group, refer to ", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/managing-user-groups"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "assigning-users-to-a-group",
          children: "Assign users to a group"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "After creating a user group, you can add users to the group from the user list."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
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
              children: ["Click ", (0,jsx_runtime.jsx)(IcAirGroup, {
                title: "Manage Groups"
              }), " at the top left of the user list."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-group-assign.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_user_groups_header",
                product: "air"
              }), " window appears, select the parent group or subgroup to assign the users."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-group-assign-popup.png",
              width: "50%"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Complete the selecting, and save group settings, click ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_grops_ok_btn",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Confirm that the users are assigned to the new group in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column5",
            product: "air"
          }), " column of the user list."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-assign-result.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Return to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " to confirm that the group's ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_table_col2",
            product: "air"
          }), " is updated."]
        }), (0,jsx_runtime.jsx)(_components.h3, {
          id: "disableGroup",
          children: "Remove or move group"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "You can exclude users from a user group or move them to another group."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
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
                sid: "manage_grops_ok_btn",
                product: "air"
              }), " to save the group settings."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Confirm the group changes in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column5",
            product: "air"
          }), " column of the user list."]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can manage user groups in the mobile app. Tap ", (0,jsx_runtime.jsx)(IcAirGroup, {}), " at the top of the user list. The user group list appears."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-group.png",
          className: "none",
          width: "60%"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To view users in a group, tap ", (0,jsx_runtime.jsx)(IcBw, {}), " to the right of the desired group."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To add a new group, tap ", (0,jsx_runtime.jsx)(IcAdd, {
                title: "Add"
              }), " in the top right."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To edit a group name, long-press the desired group and tap ", (0,jsx_runtime.jsx)(IcAirEdit, {
                title: "Edit"
              }), " at the bottom."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To delete a group, long-press the desired group and tap ", (0,jsx_runtime.jsx)(IcAirRemove, {
                title: "Remove"
              }), " at the bottom. Select one or more groups to delete them."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on managing user group, refer to ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/managing-user-groups"
            }), "."]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manageUserStatus",
      children: "Manage user status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Activate or suspend a user's access permissions. Reissue credentials as well."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "individual-user",
      children: "Individual user"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
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
              children: "Click the user in the list to change their status."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Select the desired action at the top of the user details."
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-details-manage-status.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcAirActive, {
                width: "24px",
                height: "24px",
                title: "Activate"
              }), ": Activate the user's access permissions. Use this feature for initial activation of new users or reactivation of suspended users."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcAirReissue, {
                width: "24px",
                height: "24px",
                title: "Reissue"
              }), ": Reissue credentials. Use this feature when the user's credentials have expired or are unavailable."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcAirSuspend, {
                width: "24px",
                height: "24px",
                title: "Suspend"
              }), ": Block the user's access. Use this feature when the user is active."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-action.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["In the mobile app, tap a user in the list. In the ", (0,jsx_runtime.jsx)(Cmd, {
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
                    sid: "user_activate_action",
                    product: "air"
                  }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "after_suspend_user_reactivate_action",
                    product: "air"
                  }), ": Activate the user's access permissions. Use this feature for initial activation of new users or reactivation of suspended users."]
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
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batch-actions",
      children: "Batch actions"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
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
              children: "Click the checkbox of each user in the list to change their status. You can select more than one user."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Click ", (0,jsx_runtime.jsx)(IcAirMore, {}), " at the top left of the screen and select the desired action from the pop-up menu."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-multi-user-batch-action.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_activate_action",
                product: "air"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "after_suspend_user_reactivate_action",
                product: "air"
              }), ": Activate the user's access permissions. Use this feature for initial activation of new users or reactivation of suspended users."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_reactivate_action",
                product: "air"
              }), ": Reissue credentials. Use this feature when the user's credentials have expired or are unavailable."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "suspend_action",
                product: "air"
              }), ": Block the user's access. Use this feature when the user is active."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-bulk-action.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["In the mobile app, long-press a user in the list to change their status. Select any additional users whose status you want to change. Tap the desired action in the ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "User actions"
              }), " menu at the bottom of the screen."]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_activate_action",
                    product: "air"
                  }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "after_suspend_user_reactivate_action",
                    product: "air"
                  }), ": Activate the user's access permissions. Use this feature for initial activation of new users or reactivation of suspended users."]
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
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "after_suspend_user_reactivate_action",
          product: "air"
        }), " option appears only for suspended users."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteUser",
      children: "Delete users"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Deleted users cannot be recovered. Be sure to verify before deleting."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deleteSingleUser",
      children: "Individual user"
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
          children: "Click the user you want to delete in the list."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)("span", {
            className: "air-remove",
            children: (0,jsx_runtime.jsx)(IcAirRemove, {})
          }), " in the user details."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-details-remove.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When a warning message appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "delete_user_yes_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deleteMultipleUsers",
      children: "Delete multiple users"
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
          children: "Click the checkbox of each user you want to delete in the list. You can select more than one user."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-multi-select.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirMore, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "delete_action",
            product: "air"
          }), " at the top left of the screen."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-multi-select-remove-opt.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When a warning message appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "delete_user_yes_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "userReport",
      children: "Create a user report"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a user report and send it to the administrator's email."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(IcAirReport, {}), " at the top of the user list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), " window appears, enter a report name."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-report-setting.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select the items to include in the report from each filter option."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_add",
            product: "air"
          }), " to save the report."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["A ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), " is created and a download link is sent to the administrator's email."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-user-report-setting-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["In ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "report_form_text_title",
          product: "air"
        }), ", search for, edit, download, or delete generated reports."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "searchUsers",
      children: "Search users"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use the search field in the top right of the user list to quickly find specific users. Search by user name, ID, or phone number."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-user-list-search.png"
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