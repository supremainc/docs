"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["44774"], {
59460: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_user_mdx_828_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-ui-user-mdx-828.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_user_mdx_828_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ui-user","title":"ユーザー","description":"ユーザーページのユーザーインターフェース (User Interface) について説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-user.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ui-user","permalink":"/docs/ja/platform/biostar_x/ui-user","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ui-user.mdx","tags":[],"version":"current","frontMatter":{"id":"ui-user","title":"ユーザー","description":"ユーザーページのユーザーインターフェース (User Interface) について説明します。","keywords":["ユーザー","UI"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"共通 UI を理解する","permalink":"/docs/ja/platform/biostar_x/ui-common"},"next":{"title":"モニタリング","permalink":"/docs/ja/platform/biostar_x/ui-monitoring"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-user.mdx


const frontMatter = {
	id: 'ui-user',
	title: 'ユーザー',
	description: 'ユーザーページのユーザーインターフェース (User Interface) について説明します。',
	keywords: [
		'ユーザー',
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
  }, {Calloutlists, Cmd, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " ページの ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.sidebar.user"
      }), " メニューでは、ユーザーグループ管理、ユーザー管理、アクセス権別のユーザー確認など、さまざまな機能によりユーザーを効率的に管理し、権限によってセキュリティを強化できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " ページの UI 構成要素は次のとおりです。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-ui-user.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ユーザーグループまたはアクセスグループを確認できます。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["ユーザーグループの詳細は", (0,jsx_runtime.jsx)(_components.a, {
                  href: "user-group-manage",
                  children: "次のドキュメント"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["アクセスグループの詳細は", (0,jsx_runtime.jsx)(_components.a, {
                  href: "view-user-by-access",
                  children: "次のドキュメント"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ユーザーグループまたはアクセスグループをツリー構造で確認できます。 ツリーを展開または折りたたみ、各グループをクリックしてそのグループに属するユーザーを確認できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "サイドメニューで選択したユーザーグループのユーザー数を確認できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザー一覧に表示されているすべてのユーザーを選択するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.selectAll"
            }), " ボタンをクリックします。 選択したユーザーの数は ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.selected"
            }), " に表示されます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["キーワードを入力してユーザーを検索できます。 ユーザー検索の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "view-users#user-search",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["画面右上のページ移動ボタンをクリックして、次または前のユーザーリストを確認できます。 また、移動したいページを指定することもできます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "view-users#select-view-options",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-more-white.svg",
              ico: true,
              alone: true
            }), " ボタンをクリックすると、ユーザーに関連するさまざまな機能を使用できます。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.export.title"
                }), "：ユーザー一覧を CSV ファイルまたは Data ファイル形式で保存できます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
                  href: "export-import-user-info",
                  children: "次のドキュメント"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.import.title"
                }), "：ユーザー一覧を CSV ファイルまたは Data ファイル形式で読み込んだり、顔認証情報を取り込んだりできます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
                  href: "export-import-user-info",
                  children: "次のドキュメント"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.transferToDevice"
                }), "：登録したユーザー情報をデバイスへ送信する機能です。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
                  href: "transfer-user-info-to-device",
                  children: "次のドキュメント"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.faceMigration"
                }), "：", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "BioStar X"
                }), " の以前のバージョンで登録した顔データを最新アルゴリズムにアップグレードし、認証性能を向上できます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
                  href: "migration-face",
                  children: "次のドキュメント"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.columnLayout"
                }), "：ユーザー一覧で列ヘッダー項目を変更できます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
                  href: "view-users#user-list-column-settings",
                  children: "次のドキュメント"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.print"
                }), "：ユーザー一覧を印刷できます。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ユーザーの登録、一括編集、削除機能を利用できます。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.batchEdit"
                }), "：複数ユーザーの情報やアクセス権を一度に修正できます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
                  href: "edit-user#user-information-collective-modification",
                  children: "次のドキュメント"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.delete"
                }), "：選択したユーザーを削除できます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
                  href: "delete-user",
                  children: "次のドキュメント"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.user.newUser"
                }), "：新しいユーザーを登録できます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
                  href: "add-user",
                  children: "次のドキュメント"
                }), "を参照してください。"]
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