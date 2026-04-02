"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["52801"], {
41372: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_vionyx_web_server_settings_mdx_6fa_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-vionyx-web-server-settings-mdx-6fa.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_vionyx_web_server_settings_mdx_6fa_namespaceObject = JSON.parse('{"id":"device/vionyx/web-server-settings","title":"Webサーバーへの接続と設定","description":"ViOnyx Web Server に初めて接続してパスワードを設定し、ログインする方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/vionyx/web-server-settings.mdx","sourceDirName":"device/vionyx","slug":"/device/vionyx/web-server-settings","permalink":"/docs/ja/device/vionyx/web-server-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx/web-server-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"web-server-settings","title":"Webサーバーへの接続と設定","description":"ViOnyx Web Server に初めて接続してパスワードを設定し、ログインする方法を説明します。","keywords":["keyword1","keyword2","keyword3"],"isTranslationMissing":false},"sidebar":"vionyx","previous":{"title":"設置と接続","permalink":"/docs/ja/device/vionyx/installation"},"next":{"title":"保守・管理","permalink":"/docs/ja/device/vionyx/maintenance"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/vionyx/web-server-settings.mdx


const frontMatter = {
	id: 'web-server-settings',
	title: 'Webサーバーへの接続と設定',
	description: 'ViOnyx Web Server に初めて接続してパスワードを設定し、ログインする方法を説明します。',
	keywords: [
		'keyword1',
		'keyword2',
		'keyword3'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "カメラのWebサーバーに接続する",
  "id": "access-web-server",
  "level": 2
}, {
  "value": "パスワードの設定",
  "id": "パスワードの設定",
  "level": 2
}, {
  "value": "ログインする",
  "id": "ログインする",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ViOnyx Web Server に初めて接続してパスワードを設定し、ログインする方法を説明します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "access-web-server",
      children: "カメラのWebサーバーに接続する"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "カメラと同じネットワークに接続されているコンピュータで操作してください。"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://download.supremainc.com/",
            children: "Suprema ダウンロードセンター"
          }), "にアクセスしてログインした後、インストールパッケージ(", (0,jsx_runtime.jsx)(_components.em, {
            children: "ViOnyxTool_V1_0_1 4.zip"
          }), ")をダウンロードしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ダウンロードしたインストールファイルを解凍してから、", (0,jsx_runtime.jsx)(_components.em, {
            children: "ViOnyxTool.exe"
          }), " を実行してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/web-server-settings1.png",
          width: "80%",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "必要なプログラムがインストールされていない場合は、該当プログラムのダウンロードページに案内されます。"
              }), "\n", (0,jsx_runtime.jsx)(Image, {
                src: "/img/camera/web-server-settings2.png",
                width: "50%",
                alone: true
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["必要なプログラムをインストールした後、", (0,jsx_runtime.jsx)(_components.em, {
                  children: "ViOnyxTool.exe"
                }), " を再度実行してください。"]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Search for Cameras"
          }), " をクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/web-server-settings3.png",
          width: "80%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["検索されたカメラ一覧から接続するカメラのシリアル番号(", (0,jsx_runtime.jsx)(_components.strong, {
            children: "DeviceID"
          }), ")を見つけ、IP アドレス(", (0,jsx_runtime.jsx)(_components.strong, {
            children: "IP Address"
          }), ")を確認してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/web-server-settings4.png",
          width: "80%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Web ブラウザを起動します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["アドレスバーにカメラの IP アドレス(", (0,jsx_runtime.jsx)(_components.strong, {
            children: "IP Address"
          }), ")を入力して、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enter"
          }), " キーを押してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ViOnyx Web Server の画面が表示されます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "パスワードの設定",
      children: "パスワードの設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初回接続時にパスワードを設定してください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#access-web-server",
            children: "カメラのWebサーバーに接続する"
          }), "を参照して、Web ブラウザで ViOnyx Web Server の IP アドレスにアクセスしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/password-setting1-vionyx.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "パスワード"
          }), "入力欄にパスワードを入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "パスワード確認"
          }), "入力欄に同じパスワードをもう一度入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "入力したパスワードが以下の要件をすべて満たしていることを確認してください。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "パスワード要件"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "パスワード確認"
                }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "パスワード"
                }), "と", (0,jsx_runtime.jsx)(Cmd, {
                  children: "パスワード確認"
                }), "の入力欄の値が正確に一致している必要があります。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "長さ"
                }), ": 12文字以上64文字以下で入力してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "文字の組み合わせ"
                }), ": 英大文字(A-Z)、英小文字(a-z)、数字(0-9)、記号(", (0,jsx_runtime.jsx)(_components.code, {
                  children: "\""
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "!"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "@"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "#"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "%"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "^"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "&"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "*"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "("
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: ")"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "-"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "_"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "="
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "+"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "["
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "]"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "{"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "}"
                }), ")をそれぞれ1文字以上含める必要があります。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "空白、ハングル文字、その他のUnicode文字は使用できません。"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "セキュリティ規則"
                }), ": セキュリティ上の脆弱性を防ぐため、次のパターンは使用できません。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "4文字以上の連続した文字または数字（例：abcd、1234、4321）"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "同じ文字や数字が4回以上連続している（例：aaaa、1111）"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "ユーザーIDを含む（大文字と小文字は区別されません）"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "推測されやすい一般的な単語やパターン（例：password、qwerty）"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべての条件が満たされると、", (0,jsx_runtime.jsx)(Cmd, {
            children: "提出"
          }), "ボタンが有効になります。 ボタンをクリックしてパスワードの設定を完了してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "パスワードを紛失しないようご注意ください。 パスワードを紛失した場合は、カメラを初期化する必要があります。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ログインする",
      children: "ログインする"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "パスワードの設定が完了すると、ログインページへ自動的に移動します。 管理者IDと設定したパスワードを入力して、ViOnyx Web Server に接続してください。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/password-setting2-vionyx.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "アイディー"
          }), " 入力欄に ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "admin"
          }), " を入力してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["管理者 ID(admin)は", (0,jsx_runtime.jsx)(Cmd, {
              children: "システム"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              children: "アカウント管理"
            }), "で変更できます。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "パスワード"
          }), "入力欄に設定したパスワードを入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "ログイン"
          }), "ボタンをクリックしてください。 ログインに成功すると、ViOnyx Web Server のカメラのライブビューア画面が表示されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#",
            children: "ViOnyx Web Server ユーザーガイド"
          }), "を参照してカメラを設定してください。"]
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