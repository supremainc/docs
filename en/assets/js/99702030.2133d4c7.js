"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["42792"], {
65248: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_administrators_mdx_997_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-administrators-mdx-997.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_administrators_mdx_997_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-administrators","title":"Manage Administrators","description":"Learn how to invite administrators, assign role levels, manage permissions, and configure access control for the observer, operator, administrator, and master roles in BioStar Air.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-administrators.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-administrators","permalink":"/docs/en/platform/biostar_air/managing-administrators","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-administrators.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-administrators","title":"Manage Administrators","description":"Learn how to invite administrators, assign role levels, manage permissions, and configure access control for the observer, operator, administrator, and master roles in BioStar Air.","keywords":["Administrator","roles","Access Control Settings"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Settings","permalink":"/docs/en/platform/biostar_air/settings"},"next":{"title":"Configure Site Settings","permalink":"/docs/en/platform/biostar_air/site-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-administrators.mdx


const frontMatter = {
	id: 'managing-administrators',
	title: 'Manage Administrators',
	description: 'Learn how to invite administrators, assign role levels, manage permissions, and configure access control for the observer, operator, administrator, and master roles in BioStar Air.',
	keywords: [
		'Administrator',
		'roles',
		'Access Control Settings'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "View administrators",
  "id": "viewAdmin",
  "level": 2
}, {
  "value": "Deactivate administrators",
  "id": "deactiveAdmin",
  "level": 2
}, {
  "value": "Change an administrator&#39;s role",
  "id": "changing-an-administrators-role",
  "level": 2
}, {
  "value": "Invite new administrators",
  "id": "inviteNewAdmin",
  "level": 2
}, {
  "value": "Administrator levels",
  "id": "administrator-levels",
  "level": 2
}, {
  "value": "<Cmd class=\"normal\"></Cmd> (Lowest Level)",
  "id": "observer",
  "level": 3
}, {
  "value": "<Cmd class=\"normal\"></Cmd> (Highest Level)",
  "id": "master",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Use the administrator feature in BioStar Air to manage administrator accounts, assign roles, and control access levels within your organization. This enables you to maintain security and administrative control while granting the appropriate privileges to the right personnel."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Watch the following video for a guide on managing administrators."
      }), (0,jsx_runtime.jsx)(YouTube, {
        videoId: "pUyNLeTfGRI"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewAdmin",
      children: "View administrators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_submenu",
        product: "air"
      }), " in the left sidebar."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-admin.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_submenu",
        product: "air"
      }), " menu shows a list of all active administrators. The administrator list includes the following information."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Name"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Email address"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Phone number"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Inviter"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Invitation date"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Administrator role"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Account status (active/inactive)"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deactiveAdmin",
      children: "Deactivate administrators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Instead of deleting an administrator, deactivate the account and reactivate it when needed."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Find the administrator to deactivate in the list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the toggle switch in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_admin_account_status",
            product: "air"
          }), " column."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-admin-deactive.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the message window appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), "Yes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The status in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "column_admin_account_status",
        product: "air"
      }), " column changes to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_status_disabled",
        product: "air"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-admin-deactive-result.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ability to deactivate administrators may be restricted by the administrator's role. Administrators with the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " role cannot deactivate other ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " administrators."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "changing-an-administrators-role",
      children: "Change an administrator's role"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Administrators can change the roles of administrators at a lower level."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Find the administrator to change in the list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the new administrator level in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_admin_level",
            product: "air"
          }), " column."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-admin-change-role.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the message window appears, click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), "Yes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Only ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " administrators can assign or modify the ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " role for other administrators."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inviteNewAdmin",
      children: "Invite new administrators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add new administrators."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_submenu",
            product: "air"
          }), " in the left sidebar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_invite",
            product: "air"
          }), " at the top right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_invitation_title",
            product: "air"
          }), " window appears, enter the email address."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-admin-invite.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_invitation_input2",
            product: "air"
          }), ", select the role to assign to the new administrator."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "send_btn",
            product: "air"
          }), " to send the invitation."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Each administrator must have a unique email address. If necessary, use an alias address (for example, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:erik+training@example.com",
              children: "erik+training@example.com"
            }), ")."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click the link in the invitation email. Sign up if the administrator does not have an account. If the administrator already has an account, log in to access the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "site"
            }), " directly."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "administrator-levels",
      children: "Administrator levels"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each administrator level in BioStar Air has specific permissions, and higher levels inherit the permissions of lower levels."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Each administrator role has different permissions across BioStar Air. ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "observer_role",
          product: "air",
          className: "bold"
        }), " has the most restricted access and some menus are hidden."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "observer",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "observer_role",
        product: "air",
        className: "normal"
      }), " (Lowest Level)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "dashboard_menu",
            product: "air"
          }), " dashboard and logs ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "can be viewed"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Export"
          }), " logs and generate reports."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cannot modify"
          }), " settings, users, or devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Access to menus is restricted. Most menus do not appear on the screen."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operator",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "operator_role",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Can manage ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_levels_submenu",
            product: "air"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedules_submenu",
            product: "air"
          }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "holiday_groups_submenu",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No access"
          }), " to device control or management settings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Suitable for managing everyday user and access configurations."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "administrator",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_role",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Can invite"
          }), " new administrators. However, cannot assign the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "master_role",
            product: "air",
            className: "bold"
          }), " role."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Has ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "full device control"
          }), " authority to modify settings and manage connected devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cannot delete or modify administrators with the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "master_role",
            product: "air",
            className: "bold"
          }), " role."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "This role is typically recommended for IT staff responsible for system management."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "master",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "master_role",
        product: "air",
        className: "normal"
      }), " (Highest Level)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Has ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "full access"
          }), " to all settings and features."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cannot be deleted or modified by ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "administrators"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Can create ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "subsites"
          }), " to manage different locations or organizations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Can configure ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "site settings"
          }), ", including critical system-wide configurations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Responsible for accepting the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "terms"
          }), " before other administrators log in."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Usually assigned to the company owner or a highly trusted executive."
        }), "\n"]
      }), "\n"]
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