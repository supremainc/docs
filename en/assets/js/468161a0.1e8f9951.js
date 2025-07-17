"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9980"], {
2081: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_user_mdx_468_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-ui-user-mdx-468.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_user_mdx_468_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ui-user","title":"User","description":"This guide describes the user interface of the user page.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-user.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ui-user","permalink":"/docs/en/platform/biostar_x/ui-user","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ui-user.mdx","tags":[],"version":"current","frontMatter":{"id":"ui-user","title":"User","description":"This guide describes the user interface of the user page.","keywords":["User","UI"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Launcher","permalink":"/docs/en/platform/biostar_x/ui-launcher"},"next":{"title":"Monitoring","permalink":"/docs/en/platform/biostar_x/ui-monitoring"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-user.mdx


const frontMatter = {
	id: 'ui-user',
	title: 'User',
	description: 'This guide describes the user interface of the user page.',
	keywords: [
		'User',
		'UI'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/** <Cmd sid='team.menu.resendMobileAccess' />: 모바일로 출입 권한을 재전송할 수 있습니다. 사용자가 모바일로 출입 권한을 받지 못했거나, 모바일 기기를 변경한 경우에 사용할 수 있습니다. For more information, refer to the [following](#).*/
/** <Cmd sid='team.menu.sendFaceMobileEnrollLink' />: 사용자가 모바일 애플리케이션으로 얼굴을 등록할 수 있는 링크를 이메일로 보낼 수 있습니다. 사용자가 모바일 애플리케이션을 설치한 후 얼굴 등록을 할 수 있도록 안내할 수 있습니다. For more information, refer to the [following](#).*/
/** <Cmd sid='team.menu.resendQR' />: QR 코드를 인증 수단으로 사용하는 사용자에게 QR 코드를 재전송할 수 있습니다. For more information, refer to the [following](#).*/


const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Calloutlists, Cmd, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " page's ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.sidebar.user"
      }), " menu allows efficient user management through various features such as managing user groups, managing users, and checking users by access rights, enhancing security through permissions. The UI components of the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " page are as follows:"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-ui-user.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Check user groups or access groups."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["For more information about user groups, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "user-group-manage",
                  children: "following"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["For more information about access groups, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "view-user-by-access",
                  children: "following"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "View user groups or access groups in tree structure format. You can expand or collapse the tree structure, and click each group to check the users belonging to that group."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Check the number of users in the selected user group from the side menu."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.selectAll"
            }), " button to select all displayed users in the user list. The number of selected users appears in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.selected"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Enter keywords to search for users. For more information about user search, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "view-users#user-search",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click the page navigation button provided at the top right of the screen to check the next or previous user lists. You can also specify a desired page to move to. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "view-users#select-view-options",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Click the ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-more-white.svg",
              ico: true,
              alone: true
            }), " button to access various features related to users."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.export.title"
                }), ": Save the user list in CSV file or Data file format. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "export-import-user-info",
                  children: "following"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.import.title"
                }), ": Import user lists in CSV file or Data file format or import facial authentication information. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "export-import-user-info",
                  children: "following"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.transferToDevice"
                }), ": Function to send enrolled user information to the device. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "transfer-user-info-to-device",
                  children: "following"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.faceMigration"
                }), ": Upgrade visual face enrolled in previous versions of ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "BioStar X"
                }), " to the latest algorithm to enhance authentication performance. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "migration-face",
                  children: "following"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.columnLayout"
                }), ": Change header items of columns in the user list. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "columnlayout",
                  children: "following"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.print"
                }), ": Print the user list."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Use the functions for user enrollment and batch modification or deletion."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.batchEdit"
                }), ": Modify information or access rights for multiple users at once. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "edit-user#user-information-collective-modification",
                  children: "following"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.delete"
                }), ": Delete selected users. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "delete-user",
                  children: "following"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.user.newUser"
                }), ": Enroll new users. For more information, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "add-user",
                  children: "following"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", "\n", "\n"]
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