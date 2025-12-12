"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["65227"], {
50938: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_initial_setup_mdx_cb0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-corestation-setup-manager-initial-setup-mdx-cb0.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_initial_setup_mdx_cb0_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/initial-setup","title":"デバイスを初期設定する","description":"CoreStation Setup Manager を使用するための初期手順を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/initial-setup.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/initial-setup","permalink":"/docs/ja/device/corestation_setup_manager/initial-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/initial-setup.mdx","tags":[],"version":"current","frontMatter":{"id":"initial-setup","title":"デバイスを初期設定する","description":"CoreStation Setup Manager を使用するための初期手順を案内します。","keywords":["CoreStation","初期設定","証明書のインストール","管理者登録"],"isTranslationMissing":false},"sidebar":"corestation_setup_manager","previous":{"title":"はじめに","permalink":"/docs/ja/device/corestation_setup_manager/getting-started"},"next":{"title":"デバイス構成","permalink":"/docs/ja/device/corestation_setup_manager/configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/initial-setup.mdx


const frontMatter = {
	id: 'initial-setup',
	title: 'デバイスを初期設定する',
	description: 'CoreStation Setup Manager を使用するための初期手順を案内します。',
	keywords: [
		'CoreStation',
		'初期設定',
		'証明書のインストール',
		'管理者登録'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation Setup Manager は Web ベースのサービスを提供します。 そのため、CoreStation を用いて集中型アクセス制御システムを構築する際、配線が完了したら、どこからでも Web ブラウザで CoreStation Setup Manager にアクセスし、CoreStation の接続状態を確認できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation Setup Manager を初めて使用する場合は、CoreStation を接続して初期設定を進めてください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CoreStation にケーブルを接続します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Web ブラウザを起動します。"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Chrome 75 以降の Web ブラウザを使用します。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Web ブラウザのアドレス入力欄に既定の IP アドレス ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://169.254.0.1:3001"
          }), " を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ログイン画面で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Download https certification"
          }), " をクリックします。 CoreStation Setup Manager に初めて接続する場合、HTTPS を正しく使用するために証明書をインストールする必要があります。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/initial-main.png",
          width: "80%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "cs_client.crt"
          }), " ファイルを実行します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ファイルを開く"
          }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "セキュリティの警告"
          }), " ウィンドウが表示されたら ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "開く"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "証明書"
          }), " ウィンドウで ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "証明書のインストール"
          }), " をクリックします。 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "証明書のインポート ウィザード"
          }), " が起動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["続行するには ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["証明書ストアを選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "完了"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " の順にクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザー ID とログインパスワードを入力します。 初回接続時のユーザー ID とログインパスワードはいずれも \"admin\" です。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["管理者アカウントを登録するには、各項目を設定してから ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/initial-setup-new-user.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "機能説明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "ID"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["ID は自動的に ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "0"
                }), " に設定され、変更できません。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Name"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["管理者名を入力します。", (0,jsx_runtime.jsx)("br", {}), "- 名前は最大 48 文字まで入力できます。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Operator Level"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Operator Level は自動的に ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Administrator"
                }), " に設定され、変更できません。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Login ID"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["ログイン ID を入力します。", (0,jsx_runtime.jsx)("br", {}), "- ログイン ID は最大 32 文字まで入力できます。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Password"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["ログインパスワードを入力します。", (0,jsx_runtime.jsx)("br", {}), "- ログインパスワードは 7～32 文字の英数字と記号の組み合わせで入力します。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Confirm Password"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "確認のため、ログインパスワードを再入力します。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ログイン画面に切り替わります。 登録した管理者アカウントでログインします。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "管理者アカウントは CoreStation Setup Manager へ初回接続する際にのみ設定でき、1 名のユーザーしか指定できません。 登録が完了すると、初回接続時に使用した既定のユーザー ID とログインパスワードは使用できなくなります。 また、管理者アカウントは工場出荷時リセットを含むすべての設定を確認および編集できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CoreStation Setup Manager バージョン 1.01 から ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level 1"
            }), " 管理者ランクの名称が ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Administrator"
            }), " に変更され、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level 2"
            }), " ～ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level 3"
            }), " ランクの管理者アカウントはサポートされなくなりました。"]
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