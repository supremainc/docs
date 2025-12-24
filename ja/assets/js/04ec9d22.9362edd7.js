"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["89837"], {
70024: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_common_mdx_04e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-ui-common-mdx-04e.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_common_mdx_04e_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ui-common","title":"共通 UI を理解する","description":"BioStar Xで共通して使用されるユーザーインターフェース（User Interface）を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-common.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ui-common","permalink":"/docs/ja/platform/biostar_x/ui-common","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ui-common.mdx","tags":[],"version":"current","frontMatter":{"id":"ui-common","title":"共通 UI を理解する","description":"BioStar Xで共通して使用されるユーザーインターフェース（User Interface）を案内します。","keywords":["UI"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"UI を確認","permalink":"/docs/ja/platform/biostar_x/ui-overview"},"next":{"title":"ユーザー","permalink":"/docs/ja/platform/biostar_x/ui-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-common.mdx


const frontMatter = {
	id: 'ui-common',
	title: '共通 UI を理解する',
	description: 'BioStar Xで共通して使用されるユーザーインターフェース（User Interface）を案内します。',
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Calloutlists, Cmd, IcAccount, IcHelp, IcInfo, IcLogout, IcSvTime, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAccount) _missingMdxReference("IcAccount", true);
  if (!IcHelp) _missingMdxReference("IcHelp", true);
  if (!IcInfo) _missingMdxReference("IcInfo", true);
  if (!IcLogout) _missingMdxReference("IcLogout", true);
  if (!IcSvTime) _missingMdxReference("IcSvTime", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " のユーザーインターフェース（User Interface、以下 UI）は、ユーザーがシステムを簡単に操作・利用できるように設計されています。 本ドキュメントでは、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " の共通 UI 構成要素について説明します。 このドキュメントを通じて ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " の UI を理解し、システムをより効率的に利用できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画面のヘッダー領域はすべてのページで共通で、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " のさまざまな機能へアクセスできるリンクボタンを提供します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-header.png"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X ロゴ"
            }), "：ユーザーが ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.launcher"
            }), " ページに戻るためのリンクボタンです。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ショートカット"
            }), "：", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " が提供する主要ページへ移動できるリンクを提供します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.action"
            }), "：サーバーユーザーが設定した ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "アクション"
            }), "（Action）機能を実行できます。 ボタンをクリックするとアクション一覧が表示されます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-custom-interface",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcSvTime, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "サーバー時刻"
            }), "：稼働中の ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " サーバーの時刻を確認できます。 ボタンにマウスを乗せると現在のサーバー時刻が表示されます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcInfo, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "情報"
            }), "：インストールされている ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " のバージョン情報を確認できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcHelp, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ヘルプ"
            }), "：", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " のヘルプページへ移動するリンクボタンです。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcAccount, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "アカウント"
            }), ": ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.preferences.root"
            }), " メニューへ移動したり、現在ログインしているユーザーのパスワードを変更できます。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.menu.preferences.root"
                }), " の設定に関する詳細は", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-preferences",
                  children: "以下"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["現在ログインしているユーザーのパスワード変更に関する詳細は", (0,jsx_runtime.jsx)(_components.a, {
                  href: "set-permission#changeLoginUserPassword",
                  children: "以下"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcLogout, {
              width: "26",
              height: "26"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ログアウト"
            }), "：現在ログインしているユーザーのセッションを終了してログアウトできます。"]
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