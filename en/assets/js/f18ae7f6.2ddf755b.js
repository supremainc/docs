"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8117"], {
2236: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_check_zone_status_mdx_f18_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-check-zone-status-mdx-f18.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_check_zone_status_mdx_f18_namespaceObject = JSON.parse('{"id":"platform/biostar_x/check-zone-status","title":"Check Zone Status","description":"Describes how to check the status of a zone and how to respond to various situations.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/check-zone-status.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/check-zone-status","permalink":"/docs/en/platform/biostar_x/check-zone-status","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/check-zone-status.mdx","tags":[],"version":"current","frontMatter":{"id":"check-zone-status","title":"Check Zone Status","description":"Describes how to check the status of a zone and how to respond to various situations.","keywords":["Monitoring","Zone"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Controll Elevators","permalink":"/docs/en/platform/biostar_x/control-elevator"},"next":{"title":"Controll Zones","permalink":"/docs/en/platform/biostar_x/control-zone"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/check-zone-status.mdx


const frontMatter = {
	id: 'check-zone-status',
	title: 'Check Zone Status',
	description: 'Describes how to check the status of a zone and how to respond to various situations.',
	keywords: [
		'Monitoring',
		'Zone'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Checking zone alarm",
  "id": "zone-alarm-check",
  "level": 2
}, {
  "value": "Checking Zone Status",
  "id": "check-the-status-of-the-zone",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcArm, IcDisable, IcErr} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcArm) _missingMdxReference("IcArm", true);
  if (!IcDisable) _missingMdxReference("IcDisable", true);
  if (!IcErr) _missingMdxReference("IcErr", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Check the status of each zone. This helps administrators quickly grasp the operating status of each zonethrough the indicated icons and detailed descriptions, and respond swiftly in case of issues."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Click ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " on the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " page or select ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " from the shortcut list at the top left of the screen. In the ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.door.title"
      }), " tab on the left sidebar, go to ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.door.allZones"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information about the zone settings, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "this document"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zone-alarm-check",
      children: "Checking zone alarm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When an event occurs in each zone, the ", (0,jsx_runtime.jsx)(IcErr, {
        width: "20px",
        height: "20px"
      }), " icon will be displayed. Click the alarm icon to check the event details."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-the-status-of-the-zone",
      children: "Checking Zone Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Status Icon"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(IcDisable, {
              width: "auto",
              height: "30px"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The icon for the deactivated zone. The deactivated zone will not trigger any alarms."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(IcArm, {
              width: "auto",
              height: "35px"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The security in the Intrusion Alarm zone is activated."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "The activated zone will not display an icon."
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