"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["50637"], {
99046: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_manage_server_mdx_b8d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-manage-server-mdx-b8d.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_manage_server_mdx_b8d_namespaceObject = JSON.parse('{"id":"platform/biostar_x/manage-server","title":"サーバーの起動と停止","description":"BioStar X Service Manager を使用して BioStar X サーバーのサービスを起動および停止する方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/manage-server.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/manage-server","permalink":"/docs/ja/platform/biostar_x/manage-server","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/manage-server.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-server","title":"サーバーの起動と停止","description":"BioStar X Service Manager を使用して BioStar X サーバーのサービスを起動および停止する方法を説明します。","keywords":["BioStar X 設定","サーバー管理"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"サーバー管理","permalink":"/docs/ja/platform/biostar_x/server-management"},"next":{"title":"サービス設定","permalink":"/docs/ja/platform/biostar_x/service-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/manage-server.mdx


const frontMatter = {
	id: 'manage-server',
	title: 'サーバーの起動と停止',
	description: 'BioStar X Service Manager を使用して BioStar X サーバーのサービスを起動および停止する方法を説明します。',
	keywords: [
		'BioStar X 設定',
		'サーバー管理'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*모든 서비스를 종료하려면 화면 오른쪽 상단의 <Cmd>Stop All</Cmd> 버튼을 클릭하세요.*/
/*모든 서비스를 시작하려면 화면 오른쪽 상단의 <Cmd>Start All</Cmd> 버튼을 클릭하세요.*/


const toc = [{
  "value": "BioStar X Service Manager",
  "id": "biostar-x-setting",
  "level": 2
}, {
  "value": "サービスを終了する",
  "id": "end-service",
  "level": 3
}, {
  "value": "サーバーを起動する",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Start} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X Service Manager"
      }), " を使用して BioStar X サーバーのサービスを管理する方法を確認します。 個別のサービスを起動または停止できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "biostar-x-setting",
      children: "BioStar X Service Manager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " サーバーの状態を管理できるツールを提供します。 Windows で ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X Service Manager"
      }), " をクリックします。 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "BioStar X Service Manager"
      }), " ウィンドウが表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-tutoria-service-manager-main.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " サーバーの時間設定を変更した場合は、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X Core Service"
        }), " を停止して再起動してください。 再起動しないと、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " が動作しない可能性があります。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "end-service",
      children: "サービスを終了する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " を終了するには、", (0,jsx_runtime.jsx)(Cmd, {
        children: "SERVICES"
      }), " メニューで各サービスの ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Stop"
      }), " ボタンをクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-tutoria-service-manager-main.png",
      alone: true
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "start-the-server",
      children: "サーバーを起動する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " を再起動するには、", (0,jsx_runtime.jsx)(Cmd, {
        children: "SERVICES"
      }), " メニューの ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Status"
      }), " 列で ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Stopped"
      }), " 状態のサービスの ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Start"
      }), " ボタンをクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-tutoria-service-manager-main-restart.png",
      alone: true
    }), "\n"]
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