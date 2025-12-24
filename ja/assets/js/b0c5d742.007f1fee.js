"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["26821"], {
89945: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_card_printer_mdx_b0c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-card-printer-mdx-b0c.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_card_printer_mdx_b0c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-card-printer","title":"カードを印刷する","description":"BioStar X と cardPresso を連携させて、ユーザーが希望するデザインのカードを印刷できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-card-printer.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-card-printer","permalink":"/docs/ja/platform/biostar_x/settings-card-printer","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-card-printer.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-card-printer","title":"カードを印刷する","description":"BioStar X と cardPresso を連携させて、ユーザーが希望するデザインのカードを印刷できます。","keywords":["cardPresso","カードプリンター"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"IRフェイスグループマッチングを設定する","permalink":"/docs/ja/platform/biostar_x/settings-credential-ir-face-group-matching"},"next":{"title":"メールを設定する","permalink":"/docs/ja/platform/biostar_x/settings-email-setting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-card-printer.mdx


const frontMatter = {
	id: 'settings-card-printer',
	title: 'カードを印刷する',
	description: 'BioStar X と cardPresso を連携させて、ユーザーが希望するデザインのカードを印刷できます。',
	keywords: [
		'cardPresso',
		'カードプリンター'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*New → Shortcut*/


const toc = [{
  "value": "開始する前に",
  "id": "開始する前に",
  "level": 2
}, {
  "value": "cardPresso のインストールと設定",
  "id": "installing-configuring-cardPresso",
  "level": 3
}, {
  "value": "cardPresso を BioStar X に接続する",
  "id": "cardpresso-を-biostar-x-に接続する",
  "level": 2
}, {
  "value": "カードテンプレートをテスト印刷する",
  "id": "カードテンプレートをテスト印刷する",
  "level": 2
}, {
  "value": "ユーザー別カードテンプレートを印刷する",
  "id": "printing-card-template-per-user",
  "level": 2
}, {
  "value": "カスタムユーザーフィールドを追加する",
  "id": "adding-custom-user-fields",
  "level": 2
}, {
  "value": "カードテンプレート属性 ID",
  "id": "card-template-attribute-ids",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " と cardPresso を連携させて、ユーザーが希望するデザインのカードを印刷できます。 cardPresso はカードのデザインと印刷のための専門ソフトウェアです。 cardPresso を使用すると、さまざまなカードテンプレートを作成し、ユーザー情報をカードに合わせて配置できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "開始する前に",
      children: "開始する前に"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " のカードプリンタ機能を使用するには、cardPresso をインストールして ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " と接続する必要があります。 cardPresso の Web 印刷サーバー機能を使用するには、cardPresso XXL edition のライセンスが必要です。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ライセンスの種類について詳しくは、", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.cardpresso.com/cardpresso-software/editions/",
              children: "cardPresso Editions"
            }), " ページを参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Web 印刷サーバー機能は Windows オペレーティングシステムでのみサポートされています。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installing-configuring-cardPresso",
      children: "cardPresso のインストールと設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cardPresso をインストールして Web 印刷サーバーを設定するには、以下の手順に従ってください。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "インストールバージョンによってメニュー経路や画面が異なる場合があります。"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Web 印刷サーバーとして運用する PC の OS に対応した最新バージョンの cardPresso を ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.cardpresso.com/downloads-cp",
            children: "cardPresso Download"
          }), " からダウンロードしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "プログラムをインストールして、cardPresso で発行したライセンスを有効化します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "cardPresso を起動し、カードテンプレートを作成してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/cardpresso-new-card-template.png",
          alone: true,
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["作成したカードテンプレートを ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " をインストールしたサーバーの任意のパスに保存してください。 (例：", (0,jsx_runtime.jsx)(_components.em, {
            children: "C:\\template\\example.card"
          }), ")"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["cardPresso をインストールした PC のデスクトップで右クリックし、ポップアップメニューから ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "新規作成"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ショートカット"
          }), " をクリックしてください。 "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["［", (0,jsx_runtime.jsx)(_components.strong, {
            children: "項目の場所を入力"
          }), "］フィールドに以下のように入力し、［", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), "］ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"C:\\Program Files (x86)\\cardPresso\\cardPresso.exe\" /PRINTSERVER\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cardpresso-print-server-short-cut.png",
          width: 400
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "インストール環境によって cardPresso がインストールされているパスが異なる場合があります。 cardPresso のインストールパスを確認した後、上記のパスを適切に修正してください。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ショートカット名を入力し、［", (0,jsx_runtime.jsx)(_components.strong, {
            children: "完了"
          }), "］ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "デスクトップに作成した cardPresso Web 印刷サーバーのショートカットアイコンをダブルクリックして起動してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["cardPresso Web 印刷サーバーのウィンドウが表示されたら、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "設定"
          }), " アイコンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-installation2.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "アドレス"
              }), "：Web 印刷サーバーとして動作する PC の IP アドレスを入力します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ポート"
              }), "：cardPresso が印刷ジョブを受信するために使用するポート番号です。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "許可されたユーザーグループ"
              }), "：Web 印刷サーバーへアクセスできるユーザーグループを選択します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定が完了したら ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "保存"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["右下にある ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-card-printer-play.png",
            ico: true,
            alone: true
          }), " をクリックしてサービスを開始します。 正しく設定されると、アイコンが ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-card-printer-stop.png",
            ico: true,
            alone: true
          }), " に変わり、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "listen OK"
          }), " メッセージが表示されます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-installation3.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "カードの印刷が完了するまでウィンドウを閉じないでください。"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cardpresso-を-biostar-x-に接続する",
      children: "cardPresso を BioStar X に接続する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " に cardPresso を接続するには、以下のように設定してください。"]
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
            sid: "common.cardPrinter",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.cardpressoSetting",
            product: "2"
          }), " を ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), " に設定してから各項目を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.id",
                product: "2"
              }), "：cardPresso のログイン ID を入力します。 (デフォルト：ADMIN)"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.password",
                product: "2"
              }), "：cardPresso のログインパスワードを入力します。 (デフォルト：admin)"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.ipAddress",
                product: "2"
              }), "：Web 印刷サーバーとして動作する PC の IP アドレスを入力します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.ipAddressPort",
                product: "2"
              }), "：cardPresso が印刷ジョブを受信するために使用するポート番号です。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.printerName",
                product: "2"
              }), "：カードプリンターとして使用するプリンター名を入力します。 Windows の ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "コントロール パネル"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "デバイスとプリンター"
              }), " で確認できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.cardTemplate",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.plusAdd",
                product: "2"
              }), " をクリックして ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.cardTemplate",
                product: "2"
              }), " を追加できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.card_template.configure.th.name",
                product: "2"
              }), " 項目に、カードテンプレートのファイル名と拡張子を含むフルパスを入力してください。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "カードテンプレートのファイル名には英数字と記号を使用できます。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "カードテンプレートは最大 20 個までサポートします。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "パス例：C:\\template\\example.card"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.cardPrinter.printTestLabel",
                product: "2"
              }), "：カードテンプレートのテスト印刷ができます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定が完了したら ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "カードテンプレートをテスト印刷する",
      children: "カードテンプレートをテスト印刷する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Administrator 情報を含むカードテンプレートをテスト印刷できます。"
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
            sid: "common.cardPrinter",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["印刷するカードテンプレートを選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.testPrint",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer1.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Administrator 情報を含むカードテンプレートが印刷されます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "printing-card-template-per-user",
      children: "ユーザー別カードテンプレートを印刷する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーごとの情報を含むカードテンプレートでカードを印刷できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.dialog.newUser"
          }), " ボタンをクリックしてください。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.dialog.newUser"
          }), " ウィンドウが表示されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["フォームに入力し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.printCard",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ユーザー情報には英字、数字、特殊記号を入力できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["印刷するカードテンプレートを選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.print",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user1.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["カードを印刷するかどうかを確認するポップアップが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.ok",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user2.png",
          className: "none"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新しいユーザーが作成され、ユーザー情報を含むカードテンプレートでカードが印刷されます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-custom-user-fields",
      children: "カスタムユーザーフィールドを追加する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "カスタムユーザーフィールドを追加したカードテンプレートでカードを印刷できます。"
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
            sid: "setting.menu.server.server"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.userDeviceManagement",
            product: "2"
          }), " セクションの ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.title",
            product: "2"
          }), " 項目で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " ボタンをクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.name",
            product: "2"
          }), " を入力して ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.configure.th.type",
            product: "2"
          }), " を選択してください。 追加した ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.custom_field.title",
            product: "2"
          }), " の順序に従ってカードテンプレートの属性 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ID"
          }), " が決定されます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-custom-user.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar X の属性 ID では、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "順序 1"
          }), " は ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CUSTOM1"
          }), " に相当します。 BioStar X の属性 ID の詳細については、", (0,jsx_runtime.jsx)(_components.a, {
            href: "#card-template-attribute-ids",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定が完了したら、画面最下部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["cardPresso で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ファイル"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "テンプレートを開く"
          }), " をクリックしてカードテンプレートファイルを開いてください。 新しい属性を追加し、BioStar X の属性 ID の順序に合わせた ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "XML 項目 ID 名"
          }), " として ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ID"
          }), " を入力してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-template.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定が完了したら ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ファイル"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "保存"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " に戻り、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " ページでカードテンプレートを適用するユーザーを選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["追加したカスタムユーザーフィールド項目を確認できます。 該当フォームに入力し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.printCard",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-custom-user1.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["印刷するカードテンプレートを選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.print",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user1.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["カードを印刷するかどうかを確認するポップアップが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.cardPrinter.ok",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-card-printer-user2.png",
          className: "none"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー情報が保存され、カスタムユーザーフィールドを追加したカードテンプレートでカードが印刷されます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "card-template-attribute-ids",
      children: "カードテンプレート属性 ID"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " でサポートされる属性 ID は次のとおりです。 カードテンプレートを作成するときは、属性 ID を適切な ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "XML 項目 ID 名"
      }), " として入力します。"]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x cols3--20-40-40",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "番号"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "BioStar X ユーザーデータ"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "XML 項目 ID 名"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "User ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "ID"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "User Name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "NAME"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Email"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "EMAIL"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "部署"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "DEPARTMENT"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "5"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "電話番号"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "TELEPHONE"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "6"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "ユーザーグループ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "GROUP"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "7"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "プロフィール写真"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "PHOTO"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "8"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "カスタムフィールド 1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM1"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "9"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "カスタムフィールド 2"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM2"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "カスタムフィールド 3"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM3"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "11"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "カスタムフィールド 4"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM4"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "12"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "カスタムフィールド 5"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM5"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "13"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "カスタムフィールド 6"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM6"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "14"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "カスタムフィールド 7"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM7"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "15"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "カスタムフィールド 8"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM8"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "16"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "カスタムフィールド 9"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM9"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "17"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "カスタムフィールド 10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "CUSTOM10"
            })]
          })]
        })]
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