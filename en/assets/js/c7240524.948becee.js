"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9280"], {
5177: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_column_layout_mdx_c72_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-column-layout-mdx-c72.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_column_layout_mdx_c72_namespaceObject = JSON.parse('{"id":"platform/biostar_x/columnlayout","title":"Column Layout","description":"Describes the column layout feature provided on list pages.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/column-layout.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/columnlayout","permalink":"/docs/en/platform/biostar_x/columnlayout","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/column-layout.mdx","tags":[],"version":"current","frontMatter":{"id":"columnlayout","title":"Column Layout","description":"Describes the column layout feature provided on list pages.","keywords":["Column layout"],"isTranslationMissing":false}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/column-layout.mdx


const frontMatter = {
	id: 'columnlayout',
	title: 'Column Layout',
	description: 'Describes the column layout feature provided on list pages.',
	keywords: [
		'Column layout'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Show/Hide Columns",
  "id": "columnvisibility",
  "level": 2
}, {
  "value": "Load Column Layout",
  "id": "columnlayoutload",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " displays various information such as user lists and event lists in a table format. Users can click on the column header area to sort the list, resize the columns, and select or hide columns displayed in the list."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "columnvisibility",
      children: "Show/Hide Columns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can select only the desired items from the various information displayed in the table on the list-type page to show on the screen. For example, the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " page displays the user ID, name, email address, and the status of enrolled credentials in columns. Users can use the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.dialog.columnSetting.title"
      }), " feature to select and view only the information they need, and they can save the settings as a template for future use."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcMoreW, {}), " button at the top of the list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.columnSetting.title"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired number from ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.columnSetting.layout"
          }), " when the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.columnSetting.title"
          }), " window appears."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-common-ui-column-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select or deselect the desired items in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.columnSetting.dialogSettings"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The configuration of the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.dialog.columnSetting.dialogSettings"
            }), " may vary depending on the page."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The number selected in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.dialog.columnSetting.layout"
            }), " represents a template. For example, selecting number 1 in ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.dialog.columnSetting.layout"
            }), " will apply the column layout of template number 1 to the list. Users can select and save templates from 1 to 8."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To cancel the set content and revert to the default value, click the ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.dialog.columnSetting.reset"
            }), " button."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "columnlayoutload",
      children: "Load Column Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you have set a custom column layout on the list-type page, you can load the saved layout as needed."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(IcMoreW, {}), " button at the top of the list."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.columnSetting.title"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select the desired number in ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.columnSetting.layout"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " button."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The column layout of the selected template will be applied to the list."
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