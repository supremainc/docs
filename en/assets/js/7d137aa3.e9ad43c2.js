"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4719"], {
3949: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_launcher_mdx_7d1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-ui-launcher-mdx-7d1.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_launcher_mdx_7d1_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ui-launcher","title":"Launcher","description":"This guide describes the user interface of the launcher page.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-launcher.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ui-launcher","permalink":"/docs/en/platform/biostar_x/ui-launcher","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ui-launcher.mdx","tags":[],"version":"current","frontMatter":{"id":"ui-launcher","title":"Launcher","description":"This guide describes the user interface of the launcher page.","keywords":["Launcher","UI"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Add auxiliary database","permalink":"/docs/en/platform/biostar_x/add-sub-db"},"next":{"title":"User","permalink":"/docs/en/platform/biostar_x/how-to-guide-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-launcher.mdx


const frontMatter = {
	id: 'ui-launcher',
	title: 'Launcher',
	description: 'This guide describes the user interface of the launcher page.',
	keywords: [
		'Launcher',
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
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " page is the initial ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " home page users encounter after logging in, serving as a central hub for accessing ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "'s main features. This page is designed to allow users to easily navigate and use all features of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". The UI components of the launcher page are as follows."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-launcher.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " page provides links to the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.data"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.dashboard"
      }), ", and ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.setting"
      }), " pages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), ": Efficiently manage users through various features such as user group management, user management, user template management, and checking users by access permissions, thereby enhancing security through permissions. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-user",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), ": Monitor doors, devices, video, and events in various ways. Control related features and monitor through real-time video. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-monitoring",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), ": Query user information or events based on desired criteria, and generate reports on a set schedule. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-data",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), ": Users can add and arrange widgets based on data selected from the various data provided by ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " to create their desired dashboard. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-dashboard",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), ": Configure ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " optimized for user environments through various settings for devices, access control, user permissions, language, and time. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-settings",
            children: "the following"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For more information about the header area at the top of the screen, refer to the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "ui-common",
              children: "following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "At the bottom of the screen, features installed through additional plugins can be accessed. A plugin license is required to use plugin features."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["For more information on using plugins, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "plugins",
                  children: "the following"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["For more information about the license policy, refer to ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "licensing",
                  children: "the following"
                }), "."]
              }), "\n"]
            }), "\n"]
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