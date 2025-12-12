"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["67441"], {
85701: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_server_https_mdx_5fb_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-server-https-mdx-5fb.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_server_https_mdx_5fb_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-server-https","title":"HTTPS 証明書をインストールする","description":"BioStar X を HTTPS で接続するには、BioStar X をインストールしたサーバーの IP アドレスを登録して証明書をインストールする必要があります。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-server-https.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-server-https","permalink":"/docs/ja/platform/biostar_x/settings-server-https","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-server-https.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-server-https","title":"HTTPS 証明書をインストールする","description":"BioStar X を HTTPS で接続するには、BioStar X をインストールしたサーバーの IP アドレスを登録して証明書をインストールする必要があります。","keywords":["HTTPS","証明書"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"サーバーの詳細を設定する","permalink":"/docs/ja/platform/biostar_x/settings-server-server"},"next":{"title":"ライセンスを有効化","permalink":"/docs/ja/platform/biostar_x/settings-license"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-server-https.mdx


const frontMatter = {
	id: 'settings-server-https',
	title: 'HTTPS 証明書をインストールする',
	description: 'BioStar X を HTTPS で接続するには、BioStar X をインストールしたサーバーの IP アドレスを登録して証明書をインストールする必要があります。',
	keywords: [
		'HTTPS',
		'証明書'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "証明書のインストールが必要な場合",
  "id": "証明書のインストールが必要な場合",
  "level": 2
}, {
  "value": "証明書のインストール",
  "id": "証明書のインストール",
  "level": 2
}, {
  "value": "サーバー設定で証明書をインストール",
  "id": "サーバー設定で証明書をインストール",
  "level": 2
}, {
  "value": "VMS サーバーの証明書をインストールする",
  "id": "vms-certification",
  "level": 2
}, {
  "value": "クライアント PC で証明書をインストールする",
  "id": "install-client-certification",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
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
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " を HTTPS で接続するには、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " をインストールしたサーバーの IP アドレスを登録して証明書をインストールする必要があります。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "証明書のインストールが必要な場合",
      children: "証明書のインストールが必要な場合"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " に HTTPS 証明書がインストールされていない状態で接続すると、Web ブラウザーに次のようなセキュリティ警告が表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-not-secure.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["これは、ブラウザーがサーバーの身元を確認できないために表示される警告です。 証明書をインストールすると、ブラウザーが ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " サーバーを信頼し、警告なしで安全な HTTPS 接続を利用できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "証明書のインストール",
      children: "証明書のインストール"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["適切にネットワーク接続するため、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " を使用する前に証明書をインストールします。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " のログインページにアクセスします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auth.httpsDownload"
          }), " リンクをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-login-down-https-cert.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), " ファイルをローカルに保存します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ダウンロードしたファイルを解凍し、", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.exe"
          }), " ファイルを実行します。 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enroll Certificate"
          }), " プログラムが起動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Target System"
          }), " で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " がインストールされている PC の IP アドレスを ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Server Address"
          }), " に入力して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-certification.png",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " のデフォルトポート番号は 443 です。 ポート番号を変更した場合は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Port"
            }), " に変更後のポート番号を入力します。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["セキュリティ警告メッセージを確認し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "はい"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web ブラウザーを再起動し、登録した IP アドレスを入力して ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " ページへ移動します。 アドレスバー左側のアイコンをクリックすると ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "この接続は安全です"
      }), " のメッセージが表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-secure.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enroll Certificate"
        }), " で入力する IP アドレスは ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " に設定されている IP アドレスと同一でなければなりません。 これは、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.setting"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.server.root"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.server.server"
        }), " のメニュー経路にある ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.biostarIPAdress",
          product: "2"
        }), " 項目で確認できます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "サーバー設定で証明書をインストール",
      children: "サーバー設定で証明書をインストール"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "ページで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.https.https",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.certDownload",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-https.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), " ファイルをローカルに保存します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ダウンロードしたファイルを解凍し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cert-register.exe"
          }), " ファイルを実行します。 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enroll Certificate"
          }), " プログラムが起動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Target System"
          }), " で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " がインストールされている PC の IP アドレスを ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Server Address"
          }), " に入力して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-certification.png",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " のデフォルトポート番号は 443 です。 ポート番号を変更した場合は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Port"
            }), " に変更後のポート番号を入力します。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["セキュリティ警告メッセージを確認し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "はい"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web ブラウザーを再起動し、登録した IP アドレスを入力して ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " ページへ移動します。 アドレスバー左側のアイコンをクリックすると ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "この接続は安全です"
      }), " のメッセージが表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-secure.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vms-certification",
      children: "VMS サーバーの証明書をインストールする"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "次のような状況が発生した場合、VMS サーバーにインストールされている証明書をクライアント PC にインストールして問題を解決できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ブラウザーで ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Video Management System"
          }), " (VMS) にアクセスした際に「安全ではありません」と警告が表示される場合"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " ページでライブ映像は再生されるが録画映像が再生されない場合"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS サーバーと ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " を同じサーバーにインストールする場合"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["VMS サーバーに証明書をインストールする方法は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-video-integration#install-vms-certification",
              children: "the following"
            }), " を参照します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["VMS サーバーと連携する機能は、追加オプションを別途購入することで利用できます。 ライセンスポリシーの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "以下"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "install-client-certification",
      children: "クライアント PC で証明書をインストールする"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " をインストールしたクライアント PC のログイン画面、または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.https.https",
            product: "2"
          }), " から HTTPS 証明書インストーラ (", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.zip"
          }), ") をダウンロードします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ダウンロードしたファイルを解凍し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cert-register.exe"
          }), " ファイルを実行します。 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enroll Certificate"
          }), " プログラムが起動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Target System"
          }), " で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "VMS"
          }), " を選択し、次の情報を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-settings-server-enrollment-vms-certification.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Address"
              }), "：VMS サーバーの IP アドレス"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Port"
              }), "：VMS サーバーのポート番号"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["セキュリティ警告メッセージを確認し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "はい"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web ブラウザーを再起動し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " ページで VMS サーバーの録画映像が正常に再生されるか確認します。"]
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