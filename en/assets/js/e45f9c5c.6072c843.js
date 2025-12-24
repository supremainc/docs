"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["86922"], {
2119: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_view_users_mdx_e45_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-view-users-mdx-e45.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_view_users_mdx_e45_namespaceObject = JSON.parse('{"id":"platform/biostar_x/view-users","title":"Explore Users","description":"This guide explains how to use the features for viewing, searching, sorting, and managing the user list.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/view-users.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/view-users","permalink":"/docs/en/platform/biostar_x/view-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/view-users.mdx","tags":[],"version":"current","frontMatter":{"id":"view-users","title":"Explore Users","description":"This guide explains how to use the features for viewing, searching, sorting, and managing the user list.","keywords":["User","Search"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configure User Advanced Settings","permalink":"/docs/en/platform/biostar_x/set-user-advanced"},"next":{"title":"Manage Users","permalink":"/docs/en/platform/biostar_x/user-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/view-users.mdx


const frontMatter = {
	id: 'view-users',
	title: 'Explore Users',
	description: 'This guide explains how to use the features for viewing, searching, sorting, and managing the user list.',
	keywords: [
		'User',
		'Search'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "View user list",
  "id": "view-user-list",
  "level": 2
}, {
  "value": "Select view options",
  "id": "select-view-options",
  "level": 2
}, {
  "value": "Go to the user list",
  "id": "user-list-page-moves",
  "level": 3
}, {
  "value": "Change the number of users displayed on the list",
  "id": "change-number-of-users-list-indications",
  "level": 3
}, {
  "value": "Sort user list",
  "id": "user-list-alignment",
  "level": 3
}, {
  "value": "Search user",
  "id": "user-search",
  "level": 2
}, {
  "value": "General search",
  "id": "general-search",
  "level": 3
}, {
  "value": "Advanced search",
  "id": "advanced-search",
  "level": 3
}, {
  "value": "User list column settings",
  "id": "user-list-column-settings",
  "level": 2
}, {
  "value": "Print user list",
  "id": "print-user-list",
  "level": 2
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdvSearch, IcAscend, IcBw, IcDescend, IcFirst, IcFw, IcLast, IcMoreW, IcTips, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdvSearch) _missingMdxReference("IcAdvSearch", true);
  if (!IcAscend) _missingMdxReference("IcAscend", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!IcDescend) _missingMdxReference("IcDescend", true);
  if (!IcFirst) _missingMdxReference("IcFirst", true);
  if (!IcFw) _missingMdxReference("IcFw", true);
  if (!IcLast) _missingMdxReference("IcLast", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcTips) _missingMdxReference("IcTips", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This guide explains how to view and manage registered users on the user list page. You can quickly find desired users through general and advanced searches, and use features like list sorting, column settings, and printing."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To access the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " page, click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " in the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " or select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " from the menu at the top left of the screen."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "view-user-list",
      children: "View user list"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On the user list page, you can check the basic information and status of users, and view or edit the detailed information of each user."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The user list displays all registered users, and you can check each user's ID, name, email address, duration, status of enrolled credentials. Users are listed in order by their ID."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To view the detailed information of an individual user, click on the desired user in the user list. User profile information will be displayed on the right side of the screen. Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.preview.button.seeMore"
          }), " button in the user profile information to navigate to the page where you can edit detailed user information."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-users-list-view-profile.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "To edit the detailed information of a user, double-click on the desired user in the user list. Go to the page where you can edit the user's detailed information."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about user information modification, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "edit-user",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can change the column layout in the user list. For more information on changing column layouts, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "view-users#user-list-column-settings",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "select-view-options",
      children: "Select view options"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the display options for the user list using the tool button in the upper right corner of the screen."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-list-page-moves",
      children: "Go to the user list"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The user list displays a default of 10 users. You can click the button at the top of the screen to go to another page."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list-pagenation.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcFirst, {}), " : Go to the first page of the user list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcFw, {}), " : Go to the previous page of the user list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcBw, {}), " : Go to the next page of the user list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcLast, {}), " : Go to the last page of the user list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Go to the desired page, enter the page number in the number input field and press the ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "change-number-of-users-list-indications",
      children: "Change the number of users displayed on the list"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the number of users displayed in the user list. Select the desired number of users from the list box at the top right of the screen. Available options are 50, 100, or 200 users."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list-select-row.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-list-alignment",
      children: "Sort user list"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can change the sorting criteria of the user list. Clicking the column header at the top of the list allows you to sort in ascending or descending order. For example, clicking the column header ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.table.firstName"
      }), " will sort the users' names in ascending or descending order. The clicked item will show either an ascending (", (0,jsx_runtime.jsx)(IcAscend, {}), ") or descending (", (0,jsx_runtime.jsx)(IcDescend, {}), ") icon."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list-order.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "There may be items that cannot be sorted depending on the column type."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-search",
      children: "Search user"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provides guidance on how to search for specific users. You can quickly find the desired users using the search feature on the user list page."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Search terms are case-insensitive."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["User’s basic information must be entered to search for users. For more information about user information input, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "add-user-basic-info",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "general-search",
      children: "General search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can search based on the user's ID, name, or email. Enter the desired keywords in the search input field at the top of the screen and press the ", (0,jsx_runtime.jsx)(Kbd, {
        children: "Enter"
      }), ". Users matching the specified keyword will be displayed in the list. You can check the number of search results at the very top of the list."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-search-result.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-search",
      children: "Advanced search"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can search for specific user IDs, names, email addresses, and so on."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcAdvSearch, {}), " button next to the search input field at the top of the screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the advanced search window opens, enter your desired search criteria and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.search"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-advanced-search.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The fields with ", (0,jsx_runtime.jsx)(IcTips, {}), " icon do not support partial word search due to encryption of personal data in the database."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To reset the criteria entered the advanced search window, click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.clearAll"
            }), " button."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Advanced search supports searching for ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.title",
              product: "2"
            }), ". For more information on ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.title",
              product: "2"
            }), ", refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-server-server#custom-field",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-list-column-settings",
      children: "User list column settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can change the column settings displayed in the user list. Through column settings, you can select the columns to be displayed or change the order of the columns."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcMoreW, {}), " button at the top right of the user list screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.columnLayout"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.columnSetting.title"
          }), " window appears, select or deselect the desired columns."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-users-list-column-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "To change the order of the columns, click and drag the desired column to change its position."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To save the settings, click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Column settings are saved for each user account."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To reset the column layout settings, click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "columnSetting.button.defaultColumn",
              product: "2"
            }), " button."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "print-user-list",
      children: "Print user list"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can save the user list you are currently viewing as a PDF or SVG file."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcMoreW, {}), " button at the top right of the user list screen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.print"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "printOption.dialog.header",
            product: "2"
          }), " window appears, select your desired format in the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "printOption.fileFormat",
            product: "2"
          }), " options and set the other options."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-users-print-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Enter ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "printOption.printReason",
            product: "2"
          }), " (optional) and click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.print"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can print the PDF or SVG file that opens through the browser."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "printOption.printReason",
          product: "2"
        }), " is optional. Check ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "printOption.printReason",
          product: "2"
        }), " records in ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.setting"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.system.root"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.system.auditTrail"
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