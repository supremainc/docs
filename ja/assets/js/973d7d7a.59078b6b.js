"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["32284"], {
23894: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_plugins_troubleshooting_mdx_973_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-plugins-troubleshooting-mdx-973.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_plugins_troubleshooting_mdx_973_namespaceObject = JSON.parse('{"id":"platform/plugins/troubleshooting","title":"トラブルシューティング","description":"BioStar X プラグインの開発・登録・運用過程で発生し得る問題の解決方法を提供します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/plugins/troubleshooting.mdx","sourceDirName":"platform/plugins","slug":"/platform/plugins/troubleshooting","permalink":"/docs/ja/platform/plugins/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/plugins/troubleshooting.mdx","tags":[],"version":"current","frontMatter":{"id":"troubleshooting","title":"トラブルシューティング","description":"BioStar X プラグインの開発・登録・運用過程で発生し得る問題の解決方法を提供します。","keywords":["トラブルシューティング","デバッグ","エラーの解決"],"isTranslationMissing":false},"sidebar":"bsxplugins","previous":{"title":"登録と管理","permalink":"/docs/ja/platform/plugins/registration-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/plugins/troubleshooting.mdx


const frontMatter = {
	id: 'troubleshooting',
	title: 'トラブルシューティング',
	description: 'BioStar X プラグインの開発・登録・運用過程で発生し得る問題の解決方法を提供します。',
	keywords: [
		'トラブルシューティング',
		'デバッグ',
		'エラーの解決'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "プラグイン登録に失敗する",
  "id": "プラグイン登録に失敗する",
  "level": 2
}, {
  "value": "認証コールバックに失敗する",
  "id": "認証コールバックに失敗する",
  "level": 2
}, {
  "value": "復号化エラー",
  "id": "復号化エラー",
  "level": 2
}, {
  "value": "デバッグのヒント",
  "id": "デバッグのヒント",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, Cmd} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " プラグインの開発・登録・運用過程で発生し得る問題の解決方法を提供します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "プラグイン登録に失敗する",
      children: "プラグイン登録に失敗する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "プラグインを登録する前にサーバーが稼働していることを確認してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Badge, {
            className: "get",
            children: "GET"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/bsx"
          }), " エンドポイントが正しく応答するか確認してください。 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "curl"
          }), " コマンドを使用してテストできます。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "curl -H \"X-BioStar-Ping: test123\" http://localhost:8000/bsx\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーからプラグインサーバーの URL にアクセスできることを確認してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "認証コールバックに失敗する",
      children: "認証コールバックに失敗する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "証明書ファイルが存在し、有効であることを確認してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Service Manager"
          }), " の ", (0,jsx_runtime.jsx)(Cmd, {
            children: "SERVICE SETTINGS"
          }), " で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーのアドレスとポートを確認してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["プラグインサーバーと ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバー間のネットワーク接続を確認してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "復号化エラー",
      children: "復号化エラー"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AES キーの生成と暗号化プロセスを確認してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "IV が同じキーから派生しているか確認してください。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバッグのヒント",
      children: "デバッグのヒント"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "リクエストおよびレスポンスの詳細を確認するには、ロギングを有効にしてください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "統合前にエンドポイントを個別にテストしてください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "curl"
          }), " コマンドを使用して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーへのリクエストをシミュレーションしてください。"]
        }), "\n"]
      }), "\n"]
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