"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["21412"], {
95420: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_launcher_mdx_64c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-ui-launcher-mdx-64c.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_launcher_mdx_64c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ui-launcher","title":"ランチャー","description":"ランチャーページのユーザーインターフェース (User Interface) を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-launcher.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ui-launcher","permalink":"/docs/ja/platform/biostar_x/ui-launcher","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ui-launcher.mdx","tags":[],"version":"current","frontMatter":{"id":"ui-launcher","title":"ランチャー","description":"ランチャーページのユーザーインターフェース (User Interface) を案内します。","keywords":["ランチャー","UI"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"補助データベースを追加する","permalink":"/docs/ja/platform/biostar_x/add-sub-db"},"next":{"title":"ユーザー","permalink":"/docs/ja/platform/biostar_x/how-to-guide-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-launcher.mdx


const frontMatter = {
	id: 'ui-launcher',
	title: 'ランチャー',
	description: 'ランチャーページのユーザーインターフェース (User Interface) を案内します。',
	keywords: [
		'ランチャー',
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
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " ページは、ログイン後に最初に表示される ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " のスタートページであり、ユーザーが ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " の主要機能にアクセスするための中心的なハブとして機能します。 このページは、ユーザーが ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " のすべての機能を簡単に探索して利用できるように設計されています。 ランチャーページの UI 構成要素は次のとおりです。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-launcher.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " ページでは、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.data"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.dashboard"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.setting"
      }), " ページへのリンクが提供されます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), "：ユーザーグループ管理、ユーザー管理、ユーザーテンプレート管理、入退室権限別ユーザー確認など、さまざまな機能を通じてユーザーを効率的に管理し、権限によってセキュリティを強化できます。 詳細については、", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-user",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), "：ドア、デバイス、ビデオ、イベントを多様な方法で監視します。 関連機能を制御し、リアルタイム映像で監視できます。 詳細については、", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-monitoring",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), "：ユーザー情報や希望の条件のイベントを照会でき、レポートを一定の周期で生成できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-data",
            children: "次のドキュメント"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), "：", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " が提供する多様なデータを利用して、ユーザーが選択したデータに基づくウィジェットを追加・配置し、希望のダッシュボードを構築できます。 詳細については、", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-dashboard",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "：デバイスおよび入退室制御、ユーザーごとの権限、言語、時刻などの多様な設定を通じて、ユーザー環境に最適化された ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " を構成できます。 詳細は ", (0,jsx_runtime.jsx)(_components.a, {
            href: "how-to-guide-settings",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["画面上部ヘッダー領域の詳細については、", (0,jsx_runtime.jsx)(_components.a, {
              href: "ui-common",
              children: "次のドキュメント"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "画面下部では、プラグインを追加してインストールした機能を利用できます。 プラグイン機能を使用するには、プラグインライセンスが必要です。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["プラグインの使用に関する詳細は、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "plugins",
                  children: "次のドキュメント"
                }), " を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["ライセンスポリシーの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "licensing",
                  children: "以下"
                }), " を参照してください。"]
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