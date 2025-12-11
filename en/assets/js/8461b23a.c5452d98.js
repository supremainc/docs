"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["41169"], {
15805: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_common_mdx_846_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-ui-common-mdx-846.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_common_mdx_846_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ui-common","title":"Learn Common UI","description":"This guide describes the common user interface of BioStar X.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-common.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ui-common","permalink":"/en/platform/biostar_x/ui-common","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ui-common.mdx","tags":[],"version":"current","frontMatter":{"id":"ui-common","title":"Learn Common UI","description":"This guide describes the common user interface of BioStar X.","keywords":["UI"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Explore UI","permalink":"/en/platform/biostar_x/ui-overview"},"next":{"title":"User","permalink":"/en/platform/biostar_x/ui-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-common.mdx


const frontMatter = {
	id: 'ui-common',
	title: 'Learn Common UI',
	description: 'This guide describes the common user interface of BioStar X.',
	keywords: [
		'UI'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Calloutlists, Cmd, IcHelp, IcInfo, IcLogout, IcSvTime, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcHelp) _missingMdxReference("IcHelp", true);
  if (!IcInfo) _missingMdxReference("IcInfo", true);
  if (!IcLogout) _missingMdxReference("IcLogout", true);
  if (!IcSvTime) _missingMdxReference("IcSvTime", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["The user interface (UI) of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " is designed to allow users to easily navigate and use the system. This document guides the common UI components of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". You can understand the UI of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " and use the system more efficiently."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The header area of the screen is used across all pages and provides link buttons to access various features of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-header.png"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X logo"
            }), ": Link button that allows users to return to the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.launcher"
            }), " page of ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Shortcuts"
            }), ": Provides links to main pages offered by ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.action"
            }), ": Execute the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "action"
            }), " feature set by the server user. Clicking the button displays the action list. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-custom-interface",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcSvTime, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Server time"
            }), ": Check the current server time of the running ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " server. Hovering the mouse over the button displays the current server time."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcInfo, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Information"
            }), ": Check the version information of the installed ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcHelp, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Help"
            }), ": Link button that leads to the help page of ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcLogout, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logout"
            }), ": End the session of the currently logged-in user and log out."]
          }), "\n"]
        }), "\n"]
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