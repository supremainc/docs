"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["26977"], {
22758: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_login_mdx_095_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-login-mdx-095.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_login_mdx_095_namespaceObject = JSON.parse('{"id":"platform/biostar_x/login","title":"ログインする","description":"Webブラウザーから BioStar X に接続してログインします。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/login.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/login","permalink":"/docs/ja/platform/biostar_x/login","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/login.mdx","tags":[],"version":"current","frontMatter":{"id":"login","title":"ログインする","description":"Webブラウザーから BioStar X に接続してログインします。","keywords":["ログイン","ウェブブラウザー"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Communication サーバーをインストールする","permalink":"/docs/ja/platform/biostar_x/install-communication-server"},"next":{"title":"ライセンスキーを登録する","permalink":"/docs/ja/platform/biostar_x/register-license-key"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/login.mdx


const frontMatter = {
	id: 'login',
	title: 'ログインする',
	description: 'Webブラウザーから BioStar X に接続してログインします。',
	keywords: [
		'ログイン',
		'ウェブブラウザー'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Webブラウザーからログインする",
  "id": "log-in-from-a-web-browser",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Start} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["インストールパッケージを使用して ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " のインストールが完了したら、Webブラウザーから接続して正常に動作するか確認します。 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " はWebベースのサービスを提供しており、いつでもどこでもアクセスできます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "log-in-from-a-web-browser",
      children: "Webブラウザーからログインする"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows で ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Webブラウザーを通じて ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " に接続します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-login-web-browser-ip-address.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Webブラウザーのアドレスバーで ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "BioStar X"
                }), " の接続アドレスを確認します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "BioStar X"
                }), " を別のPCにインストールした場合は、そのPCのIPアドレスを入力します。 例：", (0,jsx_runtime.jsx)(_components.code, {
                  children: "https://192.168.0.1"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["'localhost' を ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "BioStar X"
                }), " の接続アドレスとして使用しないでください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "BioStar X"
                }), " はUnified Gateway（統合ゲートウェイ）を介してすべてのリクエストを統合処理します。 そのため、WebアクセスおよびAPI呼び出しは統合ゲートウェイポート（デフォルト443）を通じて行われます。"]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ログイン画面が表示されたら、管理者アカウントでログインします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-login.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["管理者IDは ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "admin"
                }), " です。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Webブラウザーのアドレスバーに ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "安全ではありません"
                }), " の警告が表示された場合は、HTTPS証明書をインストールする必要があります。 証明書のインストールについては", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-server-https",
                  children: "次のドキュメント"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ログインすると ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " 画面が表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-main-launcher.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Chrome 100 以降のバージョンのブラウザーの使用を推奨します。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " をインストールしたPCの外部IPアドレスは", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://whatismyipaddress.com/",
              children: "次のリンク"
            }), "にアクセスして確認できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "443"
            }), " ポートをデフォルトで使用します。 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "443"
            }), " ポートを使用しているプログラムがある場合は終了してから、再度接続を試みてください。 そのプログラムを終了できない場合は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Service Manager"
            }), " を実行してポート番号を変更します。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "change-port",
              children: "次のドキュメント"
            }), "を参照してください。"]
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