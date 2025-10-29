"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["466"], {
13623: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Include} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.administrator",
            product: "2"
          }), ": This is an administrator level that can use all menus."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.userOperator",
            product: "2"
          }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " menu has ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "read"
          }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "write"
          }), " permissions."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.monitoringOperator",
            product: "2"
          }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.data"
          }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), " menus have ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "read"
          }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "write"
          }), " permissions."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.taOperator",
            product: "2"
          }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "common.gnb.time_attendance",
            product: "2"
          }), " menu has ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "read"
          }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "write"
          }), " permissions."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.visitorOperator",
            product: "2"
          }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "common.gnb.visitor",
            product: "2"
          }), " menu has ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "read"
          }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "write"
          }), " permissions."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        pages: "set-permission",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["Select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "common.selectNone"
            }), " if you do not want to set an admin level. In this case, the user cannot log in to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["To add new user permissions other than the predefined ones, refer to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "settings-adding-custom-account",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "The permissions of the default accounts cannot be modified or deleted."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Levels such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "setting.account.taOperator",
              product: "2"
            }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "setting.account.visitorOperator",
              product: "2"
            }), " require separate licenses. For more information on licensing policy, refer to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })]
    })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
86115: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "New User"
        }), ": Click the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
          sid: "team.user.dialog.newUser"
        }), " button at the top right of the screen. The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
          sid: "team.user.dialog.newUser"
        }), " window appears."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Existing User"
        }), ": Double-click a user in the user list. Or, click the user and click the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
          sid: "team.user.preview.button.seeMore"
        }), " button in the preview screen displayed on the right side of the screen. A window for editing user information appears."]
      }), "\n"]
    }), "\n"]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
92773: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_set_permission_mdx_2aa_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-set-permission-mdx-2aa.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_set_permission_mdx_2aa_namespaceObject = JSON.parse('{"id":"platform/biostar_x/set-permission","title":"Setting User Permissions","description":"This guide explains how to set the administrator privileges and access permissions for BioStar X users.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/set-permission.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/set-permission","permalink":"/docs/en/platform/biostar_x/set-permission","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/set-permission.mdx","tags":[],"version":"current","frontMatter":{"id":"set-permission","title":"Setting User Permissions","description":"This guide explains how to set the administrator privileges and access permissions for BioStar X users.","keywords":["User","Permission"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Enroll PIN","permalink":"/docs/en/platform/biostar_x/enroll-credential-pin"},"next":{"title":"Configure User Advanced Settings","permalink":"/docs/en/platform/biostar_x/set-user-advanced"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_enter-user-page.mdx
var _enter_user_page = __webpack_require__(86115);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common/_account-list.mdx
var _account_list = __webpack_require__(13623);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/set-permission.mdx


const frontMatter = {
	id: 'set-permission',
	title: 'Setting User Permissions',
	description: 'This guide explains how to set the administrator privileges and access permissions for BioStar X users.',
	keywords: [
		'User',
		'Permission'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [..._enter_user_page/* .toc */.RM, {
  "value": "Select administrator level",
  "id": "operatorLevel",
  "level": 2
}, ..._account_list/* .toc */.RM, {
  "value": "Set login ID and password",
  "id": "set-login-id-and-password",
  "level": 3
}, {
  "value": "Multi-Factor Authentication Setting",
  "id": "multiFactorAuth",
  "level": 2
}, {
  "value": "Login settings with user IP address",
  "id": "userIp",
  "level": 2
}, {
  "value": "Select access group",
  "id": "accessGroup",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["According to the organization's security policy, you can differentiate user-specific operational privileges and access permissions for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Restrict access to main menus through administrator levels and control access to physical spaces through access groups. You can also enhance security through IP address restrictions and multi-factor authentication."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go to the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " page and set access permissions using the two methods below."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_enter_user_page/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " section, the following items can be set. Refer to the descriptions for each item to set appropriate user permissions."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-permission.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operatorLevel",
      children: "Select administrator level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The menus accessible will be limited based on the selected administrator level. Select the user's administrator level in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " section, under the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.bioStarOperator",
        product: "2"
      }), " item. Refer to the list below for the administrator levels that can be assigned to users."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_account_list/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "set-login-id-and-password",
      children: "Set login ID and password"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you selected an administrator level, you must set the ID and password to be used when the user logs in to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-permission-set-login.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Precautions when setting ID and password"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Set the ID to a combination of letters and numbers between 8 and 32 characters."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information on password policy configuration, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-security#password-policy-configuration",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Avoid using passwords that are vulnerable to security."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Consecutive characters or numbers (e.g., abcd, 1234)"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Common words or patterns (e.g., qwerty, password)"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multiFactorAuth",
      children: "Multi-Factor Authentication Setting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enabling ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.fingerprintLogin",
        product: "2"
      }), " allows users to log into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " with added fingerprint authentication."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information about the multi-factor authentication settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "login-with-mfa",
          children: "this document"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "userIp",
      children: "Login settings with user IP address"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you register a user IP address, you can log in to the PC only when the IP information matches the one registered to your account. This enhances security. Enter the user's IP address in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.userIp"
      }), " field of the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " section."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "IP addresses can be entered in the format xxx.xxx.xxx.xxx, and each octet must contain a number in the range of 0–255."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If the IP address is not registered, PC login will be allowed regardless of IP information."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessGroup",
      children: "Select access group"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set the user's access group to restrict access by organization or department. In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " section, select the access group from ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.accessGroup"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information about adding and managing access groups, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-access-control-manage-access-group",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "set-user-advanced",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.advanced",
            product: "2"
          }), " section, you can set the message to display on the device when the user accesses it or exclude that user from synchronization when linking with ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2",
            className: "normal"
          }), "."]
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "edit-user",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Check how to edit user information."
        })
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