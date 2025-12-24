"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["99130"], {
83283: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_install_communication_server_mdx_b00_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-install-communication-server-mdx-b00.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_install_communication_server_mdx_b00_namespaceObject = JSON.parse('{"id":"platform/biostar_x/install-communication-server","title":"Communication サーバーをインストールする","description":"Communication サーバーのインストール手順を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/install-communication-server.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/install-communication-server","permalink":"/docs/ja/platform/biostar_x/install-communication-server","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/install-communication-server.mdx","tags":[],"version":"current","frontMatter":{"id":"install-communication-server","title":"Communication サーバーをインストールする","description":"Communication サーバーのインストール手順を案内します。","keywords":["Communication サーバー","インストール"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"アップグレードする","permalink":"/docs/ja/platform/biostar_x/migration-x"},"next":{"title":"ログインする","permalink":"/docs/ja/platform/biostar_x/login"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/install-communication-server.mdx


const frontMatter = {
	id: 'install-communication-server',
	title: 'Communication サーバーをインストールする',
	description: 'Communication サーバーのインストール手順を案内します。',
	keywords: [
		'Communication サーバー',
		'インストール'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "開始前",
  "id": "start-before",
  "level": 2
}, {
  "value": "インストール前の確認事項",
  "id": "check-before-install",
  "level": 3
}, {
  "value": "インストールガイド",
  "id": "install-guide",
  "level": 2
}, {
  "value": "インストール後の確認事項",
  "id": "check-after-install",
  "level": 2
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Start} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["本ドキュメントでは、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " の ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Communication サーバー"
      }), " のインストール方法を案内します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "コミュニケーションサーバーは、入退室管理デバイスとの通信を専任で行うサーバーです。 メインサーバーとは別に設置し、多数のデバイスを安定して管理できるよう支援します。 1 台のコミュニケーションサーバーで最大 1,000 台のデバイスを接続でき、必要に応じて複数台を追加することもできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Ethernet (TCP/IP) で接続できるデバイスの最大数は 1,000 台です。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "start-before",
      children: "開始前"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Communication サーバーをインストールする前に、次の事項を確認します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Communication サーバーは ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーと同じサーバーにインストールできません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Communication サーバーは 64 ビットオペレーティングシステムにのみインストールできます。 システムの最小要件の詳細は ", (0,jsx_runtime.jsx)(_components.a, {
            href: "system-requirements#communication-server",
            children: "次のドキュメント"
          }), " を参照します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Communication サーバーをインストールして接続するには、マルチ Communication サーバーライセンスが必要です。 ライセンスポリシーの詳細は", (0,jsx_runtime.jsx)(_components.a, {
            href: "licensing#features-add-ons",
            children: "次のドキュメント"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-before-install",
      children: "インストール前の確認事項"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Communication サーバーをインストールする前に ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X Service Manager"
      }), " を実行し、インストール中に入力が必要な情報を確認します。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows で ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Service Manager"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Service Manager"
          }), " ウィンドウが表示されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "SERVICE SETTINGS"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下に、Communication サーバーのインストール時に入力が必要な情報を示します。 各項目を確認して準備します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-cumm-server-matching.png"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "table-fixed",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "BioStar X Service Manager"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Communication サーバーインストール時の入力情報"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "BioStar X Core Service"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                children: "RPC Port"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Server gRPC Port for Communication"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "BioStar X Coordinator Service"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Client Port"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Coordinator Service Port for Communication"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "BioStar X Cache Service"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Client Port"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X Cache Service Client for Communication"
              })
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          children: "SERVICE SETTINGS"
        }), " の詳細は ", (0,jsx_runtime.jsx)(_components.a, {
          href: "service-settings",
          children: "次のドキュメント"
        }), " を参照します。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "install-guide",
      children: "インストールガイド"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Communication サーバーをインストールするには、次の手順に従います。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://download.supremainc.com/",
            children: "Suprema ダウンロードセンター"
          }), " にアクセスしてログインし、インストールパッケージ (", (0,jsx_runtime.jsx)(_components.em, {
            children: "BioStar X Communications Server.X.Y.X.BB.exe"
          }), ") をダウンロードします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ダウンロードしたインストールファイルを実行してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用する言語を選択し、", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.ok",
            className: "bold"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-select-language.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["インストールを続行するには、", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.agree",
            className: "bold"
          }), " を選択し、", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-license-agree.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Communication サーバーをインストールするパスを設定し、", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-set-path.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["個人情報に関する権限と責任の内容を確認し、インストールを続行するには ", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-private-policy.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Communication サーバーのコンポーネントを選択し、", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-select-component.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーの IP アドレスとポート番号を入力し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーと接続するために各項目を入力します。 設定を完了し、", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-settings.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["各入力項目の詳細は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#check-before-install",
              children: "次のドキュメント"
            }), " を参照します。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " の管理者 ID とパスワードを入力し、", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-login.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通信用ポートを設定し、", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.next",
            className: "bold"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-port-settings.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべてのインストール準備が完了したら、", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.btnInstall",
            className: "bold"
          }), " ボタンをクリックしてください。 インストールを実行します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-install-step.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["インストール完了メッセージを確認し、", (0,jsx_runtime.jsx)(Cmd, {
            code: "biostar2.install.complete",
            className: "bold"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-install-comm-server-complete.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Communication サーバーのインストールを完了します。 インストールが完了したら、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " メインサーバーで Communication サーバーと接続されていることを確認します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-after-install",
      children: "インストール後の確認事項"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Communication サーバーのインストールを完了したら、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X Service Manager"
      }), " を使用してメインサーバーと Communication サーバーを接続する必要があります。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows で ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Service Manager"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Service Manager"
          }), " ウィンドウが表示されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            children: "COMMUNICATIONS"
          }), " メニューをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-sm-cluster-main-01.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Add Communication Server"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Add Communication Server"
          }), " ウィンドウが表示されたら、インストールした Communication サーバーの IP アドレスと一致する項目のチェックボックスをクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            children: "Database"
          }), " 列で使用するデータベースを選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-sm-cluster-main-03.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Add"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Communication サーバー一覧で、追加した Communication サーバーの ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Server Status"
      }), " 列が ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Connected"
      }), " 状態であることを確認します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-cluster-main-04.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "COMMUNICATIONS"
            }), " メニューは、マルチ Communication サーバーライセンスを有効化したときに使用できます。 ライセンスポリシーの詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Communication サーバーを削除するには、一覧で削除するサーバーのチェックボックスをクリックし、画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Delete Commnunication Server"
            }), " ボタンをクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Communication サーバーを追加した場合、メインサーバーの負荷を軽減するために、Communication サーバーと連携する補助データベースを追加できます。 補助データベースの追加の詳細は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "add-sub-db",
              children: "次のドキュメント"
            }), " を参照します。"]
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