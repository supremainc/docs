"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6276"], {
3892: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_login_with_mfa_mdx_c64_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-login-with-mfa-mdx-c64.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_login_with_mfa_mdx_c64_namespaceObject = JSON.parse('{"id":"platform/biostar_x/login-with-mfa","title":"Login in with Multi-Factor Authentication","description":"Using multi-factor authentication when logging into BioStar X can enhance the security of your account.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/login-with-mfa.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/login-with-mfa","permalink":"/docs/en/platform/biostar_x/login-with-mfa","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/login-with-mfa.mdx","tags":[],"version":"current","frontMatter":{"id":"login-with-mfa","title":"Login in with Multi-Factor Authentication","description":"Using multi-factor authentication when logging into BioStar X can enhance the security of your account.","keywords":["Log in","MFA","Multi-Factor Authentication","Multi-factor authentication"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Manage Access Groups","permalink":"/docs/en/platform/biostar_x/view-user-by-access"},"next":{"title":"Face Migration","permalink":"/docs/en/platform/biostar_x/migration-face"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/login-with-mfa.mdx


const frontMatter = {
	id: 'login-with-mfa',
	title: 'Login in with Multi-Factor Authentication',
	description: 'Using multi-factor authentication when logging into BioStar X can enhance the security of your account.',
	keywords: [
		'Log in',
		'MFA',
		'Multi-Factor Authentication',
		'Multi-factor authentication'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Multi-Factor Authentication Setting",
  "id": "multi-factor-authentication-setting",
  "level": 2
}, {
  "value": "Multi-Factor Authentication Batch Setting",
  "id": "multi-factor-authentication-batch-set",
  "level": 2
}, {
  "value": "Log in with Multi-Factor Authentication",
  "id": "login-with-multi-factor-authentication",
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
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can use the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-Factor Authentication"
      }), " feature to enhance security when logging into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Enabling ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.multiFactorAuth"
      }), " adds a fingerprint authentication step through a fingerprint scanner to the combination of user ID and password."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-Factor Authentication"
            }), " refers to the method of authenticating users through two or more authentication procedures."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Users who want to use the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " feature must enroll their fingerprint and set their username, password, and operator level."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To use the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " feature, a fingerprint scanner that supports multi-factor authentication login must be connected to the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " client PC. Please refer to the list below for devices supported by the fingerprint scanner."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioMini"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioMini Plus 2"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioMini Slim 2"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you use the ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Use for BioStar X Login"
            }), " option with an Active Directory Server account, you will not be able to use the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " feature."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Users with ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " set cannot register for BioStar X services other than BioStar X AC."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "After setting up the multi-factor authentication feature for the main admin account (ID 1), please be aware that you will not be able to log in with that account if the fingerprint authentication becomes unavailable."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If login becomes impossible due to fingerprint issues, please contact ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://support.supremainc.com",
              children: "Suprema Technical Support"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multi-factor-authentication-setting",
      children: "Multi-Factor Authentication Setting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Follow the steps below to set ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.multiFactorAuth"
      }), "."]
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
          children: ["Double click on the user who wants to set ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.multiFactorAuth"
          }), " from the user list."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Alternatively, click a user and then click the ", (0,jsx_runtime.jsx)(Cmd, {
            children: "See More"
          }), " button in the profile screen that appears on the right side of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the user profile screen appears, set the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.multiFactorAuth"
          }), " to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use"
          }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.title"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-edit-user-mfa-use.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " button at the top right of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Completing multi-factor authentication setup."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multi-factor-authentication-batch-set",
      children: "Multi-Factor Authentication Batch Setting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can use the batch edit feature to apply the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.multiFactorAuth"
      }), " feature to multiple users."]
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Click the checkbox to the left of the user you want to set up multi-factor authentication for in the user list."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.batchEdit"
          }), " button at the top right of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the batch edit window appears, set the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.multiFactorAuth"
          }), " to ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use"
          }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.title"
          }), " section."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-batch-edit-user-mfa-use.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " button at the top right of the screen."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Completing the multi-factor authentication setup for multiple selected users."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If any of the selected users do not meet the conditions required to set ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "team.user.permission.multiFactorAuth"
        }), " to use, a pop-up message will display ", (0,jsx_runtime.jsx)(Cmd, {
          children: "Not applicable user(s)"
        }), ". Please check the conditions required for the settings and try again."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "login-with-multi-factor-authentication",
      children: "Log in with Multi-Factor Authentication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Access ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " log in screen through a web browser."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Please enter your user ID and password to log in."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "When the fingerprint input screen appears, scan your fingerprint using the fingerprint scanner."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Completing the login."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The scan time limit is fixed at 18 seconds and cannot be changed."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Fingerprint scanning can be attempted up to three times consecutively. If the fingerprint is not accurately scanned within these three attempts, authentication will fail."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In the case of authentication failure, click the ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Retry"
            }), " to attempt fingerprint authentication again. Up to two retry attempts are allowed. If authentication fails after retry attempts, the process will revert to the ID and Password login step."]
          }), "\n"]
        }), "\n"]
      })
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