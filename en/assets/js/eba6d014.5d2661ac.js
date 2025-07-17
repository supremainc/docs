"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8643"], {
19751: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_manage_server_mdx_eba_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-x-manage-server-mdx-eba.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_x_manage_server_mdx_eba_namespaceObject = JSON.parse('{"id":"platform/biostar_x/manage-server","title":"Manage Server","description":"This guide explains how to manage the status of the BioStar X server.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/manage-server.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/manage-server","permalink":"/docs/en/platform/biostar_x/manage-server","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/manage-server.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-server","title":"Manage Server","description":"This guide explains how to manage the status of the BioStar X server.","keywords":["BioStar X setting","Manage server"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Initial Setup Guide","permalink":"/docs/en/platform/biostar_x/initial-setup-guide"},"next":{"title":"Change the Port","permalink":"/docs/en/platform/biostar_x/change-port"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_x/manage-server.mdx


const frontMatter = {
	id: 'manage-server',
	title: 'Manage Server',
	description: 'This guide explains how to manage the status of the BioStar X server.',
	keywords: [
		'BioStar X setting',
		'Manage server'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*모든 서비스를 종료하려면 화면 오른쪽 상단의 <Cmd>Stop All</Cmd> 버튼을 클릭하세요.*/
/*모든 서비스를 시작하려면 화면 오른쪽 상단의 <Cmd>Start All</Cmd> 버튼을 클릭하세요.*/


const toc = [{
  "value": "Manage BioStar X service",
  "id": "biostar-x-setting",
  "level": 2
}, {
  "value": "End service",
  "id": "end-service",
  "level": 3
}, {
  "value": "Start the server",
  "id": "start-the-server",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image, Start} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide provides instructions on how to manage the status of the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " server. You can stop or restart the running services."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "biostar-x-setting",
      children: "Manage BioStar X service"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Provides a tool to manage the status of the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " server. Click ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X Service Manager"
      }), ". The ", (0,jsx_runtime.jsx)(Cmd, {
        children: "BioStar X Service Manager"
      }), " window appears."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-tutoria-service-manager-main.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you do not restart, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " may not operate properly. If you have changed the time settings of the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " server, stop and restart the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X Core Service"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "end-service",
      children: "End service"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To shut down ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", click the ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Stop"
      }), " button for individual services in the ", (0,jsx_runtime.jsx)(Cmd, {
        children: "SERVICES"
      }), " menu."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-tutoria-service-manager-main.png",
      alone: true
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "start-the-server",
      children: "Start the server"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To restart ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", click ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Start"
      }), " for the service in the ", (0,jsx_runtime.jsx)(Cmd, {
        children: "SERVICES"
      }), " menu with a ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Stopped"
      }), " status in the ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Status"
      }), " column."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-tutoria-service-manager-main-restart.png",
      alone: true
    }), "\n"]
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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