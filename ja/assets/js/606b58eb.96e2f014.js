"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["93380"], {
18431: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_check_ethernet_mdx_606_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-check-ethernet-mdx-606.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_check_ethernet_mdx_606_namespaceObject = JSON.parse('{"id":"platform/biostar_x/check-ethernet","title":"ネットワーク優先順位を確認する","description":"BioStar X をインストールする前に、サーバーのネットワーク優先順位を確認して設定する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/check-ethernet.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/check-ethernet","permalink":"/docs/ja/platform/biostar_x/check-ethernet","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/check-ethernet.mdx","tags":[],"version":"current","frontMatter":{"id":"check-ethernet","title":"ネットワーク優先順位を確認する","description":"BioStar X をインストールする前に、サーバーのネットワーク優先順位を確認して設定する方法を案内します。","keywords":["ネットワーク","BioStar X"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"はじめに","permalink":"/docs/ja/platform/biostar_x/getting-started"},"next":{"title":"簡単インストール","permalink":"/docs/ja/platform/biostar_x/express-install"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/check-ethernet.mdx


const frontMatter = {
	id: 'check-ethernet',
	title: 'ネットワーク優先順位を確認する',
	description: 'BioStar X をインストールする前に、サーバーのネットワーク優先順位を確認して設定する方法を案内します。',
	keywords: [
		'ネットワーク',
		'BioStar X'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "必要なタイミング？",
  "id": "必要なタイミング",
  "level": 2
}, {
  "value": "ネットワーク優先順位を確認する",
  "id": "ネットワーク優先順位を確認する",
  "level": 2
}, {
  "value": "コマンドプロンプトで確認",
  "id": "コマンドプロンプトで確認",
  "level": 3
}, {
  "value": "ネットワークアダプター情報を確認",
  "id": "ネットワークアダプター情報を確認",
  "level": 3
}, {
  "value": "ネットワーク優先順位を変更する",
  "id": "ネットワーク優先順位を変更する",
  "level": 2
}, {
  "value": "ネットワーク設定を開く",
  "id": "ネットワーク設定を開く",
  "level": 3
}, {
  "value": "アダプターオプションを開く",
  "id": "アダプターオプションを開く",
  "level": 3
}, {
  "value": "メトリックを設定",
  "id": "メトリックを設定",
  "level": 3
}, {
  "value": "設定を確認",
  "id": "設定を確認",
  "level": 3
}, {
  "value": "トラブルシューティング",
  "id": "トラブルシューティング",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, NextItem, NextStep, Step, Steps} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " をインストールする前に、サーバーのネットワーク優先順位を確認して設定する方法を案内します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "必要なタイミング",
      children: "必要なタイミング？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "次のような場合にネットワーク優先順位の確認と設定が必要です。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "サーバーに 2 つ以上のネットワークアダプター (LAN カード) が搭載されている場合"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サービスで特定のネットワークアダプターを使用する必要がある場合"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " のインストール後にネットワーク接続問題が発生しないように事前に防止したい場合"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["上記に該当しない場合、ネットワーク優先順位を変更する必要はありません。 この手順をスキップし、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " をインストールする。 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " のインストールの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
          href: "express-install",
          children: "次のドキュメント"
        }), " を参照する。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " のインストール時、メトリック値が低い (優先順位が高い) ネットワークアダプターが自動的に選択されます。 インストール後にこの設定を変更することは困難なため、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "インストール前に必ずネットワーク優先順位を確認して調整"
        }), "する必要があります。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ネットワーク優先順位を確認する",
      children: "ネットワーク優先順位を確認する"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "コマンドプロンプトで確認",
      children: "コマンドプロンプトで確認"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "スタート"
          }), " メニューで ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cmd"
          }), " を検索し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "コマンドプロンプト"
          }), " を起動する。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "次のコマンドを入力する。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cmd",
            children: "route print\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["出力結果の ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "IPv4 Route Table"
          }), " セクションで ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Network Destination"
          }), " が ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.0.0.0"
          }), " の項目を探す。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Metric"
          }), " 列の値を確認する。 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "値が低いほど優先順位が高くなります"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "出力例："
      })
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-install-check-network-cmd.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上記の例では、", (0,jsx_runtime.jsx)(_components.code, {
        children: "192.168.40.123"
      }), " インターフェースがメトリック値 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "20"
      }), " でより高い優先順位を持ちます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ネットワークアダプター情報を確認",
      children: "ネットワークアダプター情報を確認"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "各インターフェースがどのネットワークアダプターに対応しているかを確認する。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "コマンドプロンプト"
          }), " で次のコマンドを入力する。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cmd",
            children: "ipconfig /all\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["各ネットワークアダプターの ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "IPv4 アドレス"
          }), " と先ほど確認した ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Gateway"
          }), " アドレスを照合し、どのアダプターかを特定する。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ネットワーク優先順位を変更する",
      children: "ネットワーク優先順位を変更する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目的のネットワークアダプターの優先順位を上げるには次の手順を実行する。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "以下の手順は Windows 11 を基準としています。 使用している Windows バージョンによってメニューの位置が異なる場合があります。"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ネットワーク設定を開く",
          children: "ネットワーク設定を開く"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "スタート"
              }), " メニューで ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ネットワーク接続の表示"
              }), " と入力する。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-start-network-search.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["検索結果で ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ネットワーク接続の表示"
              }), " をクリックする。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "一覧からインターネットに接続されているアダプターをダブルクリックする。"
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-control-network-connections.png"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "アダプターオプションを開く",
          children: "アダプターオプションを開く"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "イーサネットの状態"
              }), " ウィンドウが表示されたら ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "プロパティ"
              }), " をクリックする。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-ethernet-status.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["イーサネットのプロパティが表示されたら、一覧から ", (0,jsx_runtime.jsx)("b", {
                children: "インターネット プロトコル バージョン 4 (TCP/IPv4)"
              }), " を選択する。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-ethernet-properties.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "プロパティ"
              }), " をクリックする。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "インターネット プロトコル バージョン 4 (TCP/IPv4) のプロパティ"
              }), " が表示されたら ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "詳細設定"
              }), " をクリックする。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-protocol-properties.png"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "メトリックを設定",
          children: "メトリックを設定"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "自動メトリック"
              }), " のチェックを ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "外す"
              }), "。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-install-check-set-metrics.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "インターフェイスメトリック"
              }), " フィールドに希望する値を入力する。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["最高の優先順位にする場合は ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "1"
                  }), " を入力する。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "他のアダプターより高い優先順位にしたい場合、そのアダプターのメトリック値より小さい数値を入力する。"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["設定を保存してすべてのウィンドウを閉じるには ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "OK"
              }), " をクリックする。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "インターフェイスメトリック"
            }), " に入力できる値は ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            }), " から ", (0,jsx_runtime.jsx)(_components.code, {
              children: "9999"
            }), " まで。 値が低いほど優先順位が高くなります。"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "設定を確認",
          children: "設定を確認"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "コマンドプロンプト"
              }), " を再度開き、", (0,jsx_runtime.jsx)(_components.code, {
                children: "route print"
              }), " コマンドを実行する。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "メトリック値が変更されたか確認する。"
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "トラブルシューティング",
      children: "トラブルシューティング"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "設定が反映されない場合は、コンピューターを再起動するか、ネットワークアダプターを無効にしてから再度有効にする。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ネットワーク接続が切れた場合は元の設定に戻し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "自動メトリック"
          }), " オプションを再度有効にする。 ネットワーク管理者に問い合わせて正しい設定値を確認する。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " のインストール後にネットワーク設定を変更する必要がある場合は、プログラムを完全に削除してから再インストールすることを推奨します。"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "express-install",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "初めてインストールするユーザー向けの簡易インストール手順を案内します。"
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "custom-install",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "既にインストール済みのデータベースと連携するためのカスタムインストール手順を案内します。"
        })
      })]
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