"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["18263"], {
27052: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_card_mdx_185_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-card-mdx-185.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_card_mdx_185_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-card","title":"入退室カードを登録する","description":"ユーザーにCSN、Wiegand、スマートカードを登録する手順を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-card.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-card","permalink":"/docs/ja/platform/biostar_x/enroll-credential-card","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-card.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-card","title":"入退室カードを登録する","description":"ユーザーにCSN、Wiegand、スマートカードを登録する手順を案内します。","keywords":["アクセスカード","登録","クレデンシャル","認証","カード"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"顔を登録する","permalink":"/docs/ja/platform/biostar_x/enroll-credential-face"},"next":{"title":"モバイルアクセスカードを登録する","permalink":"/docs/ja/platform/biostar_x/enroll-credential-mobile"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-card.mdx


const frontMatter = {
	id: 'enroll-credential-card',
	title: '入退室カードを登録する',
	description: 'ユーザーにCSN、Wiegand、スマートカードを登録する手順を案内します。',
	keywords: [
		'アクセスカード',
		'登録',
		'クレデンシャル',
		'認証',
		'カード'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "CSNカード",
  "id": "csncard",
  "level": 2
}, {
  "value": "Wiegandカード",
  "id": "wiegandcard",
  "level": 2
}, {
  "value": "スマートカード",
  "id": "smardcard",
  "level": 2
}, {
  "value": "カードの読み取り／フォーマット",
  "id": "readformatcard",
  "level": 2
}, {
  "value": "割り当てたカード情報の確認",
  "id": "割り当てたカード情報の確認",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
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
  }, {Cmd, Details, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーにアクセスカードを登録する方法を案内します。 CSNカード、Wiegandカード、スマートカードの登録方法とカードの読み取り/フォーマット機能について説明します。 デバイスがサポートするカードの種類については、該当デバイスのマニュアルを参照してください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "USB エージェントを使ったカード登録"
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: "table-fixed",
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "カード種類"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "CSN"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "Wiegand"
              }), (0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "スマートカード"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "EM"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MIFARE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DESFire"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "FeliCa"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "✅"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HID Prox"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HID iCLASS"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              }), (0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "❌"
              })]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csncard",
      children: "CSNカード"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), "」セクションで、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCard",
            product: "2"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.card",
            product: "2"
          }), "」ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
            children: "CSN"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-card-csn.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), " オプションで、希望するカード登録方式を選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.registerByCardReader",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device",
                product: "2"
              }), " リストからカードをスキャンするデバイスを選択し、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.readCard",
                product: "2"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.assignCard",
                product: "2"
              }), "：リストからユーザーに割り当てるカードを選択します。 入力フィールドで検索することもできます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.enterManually",
                product: "2"
              }), "：カード番号を直接入力するか、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.useUserId",
                product: "2"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiegandcard",
      children: "Wiegandカード"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), "」セクションで、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCard",
            product: "2"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.card",
            product: "2"
          }), "」ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Wiegand"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-card-wiegand.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnrol.cardFormat",
            product: "2"
          }), " オプションで、必要なフォーマットを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), " オプションで、希望するカード登録方式を選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.registerByCardReader",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device",
                product: "2"
              }), " リストからカードをスキャンするデバイスを選択し、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.readCard",
                product: "2"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.assignCard",
                product: "2"
              }), "：リストからユーザーに割り当てるカードを選択します。 入力フィールドで検索することもできます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.enterManually",
                product: "2"
              }), "：施設コード (Facility Code) とカードIDを直接入力します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "user.cardEnrol.cardFormat",
          product: "2"
        }), " オプションに目的のカードデータフォーマットがない場合は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-credential-wiegand-format",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "smardcard",
      children: "スマートカード"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "セキュアクレデンシャルカード、アクセスオンカード、カスタムスマートカードを登録できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), "」セクションで、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCard",
            product: "2"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.card",
            product: "2"
          }), "」ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.smartCard",
            product: "2"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-card-smartcard.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device",
            product: "2"
          }), " オプションで、カードを登録するデバイスを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスを選択すると、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardLayoutFormatName",
            product: "2"
          }), " オプションに設定されているカードレイアウト形式が表示されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardMode",
            product: "2"
          }), " オプションで、必要なカードタイプを選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.secureCredentialCard",
                product: "2"
              }), "：ユーザー情報（カードID、PIN、入退室グループ、有効期間、指紋テンプレート、顔テンプレート、個人認証モード）をカードに保存できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.accessOnCard",
                product: "2"
              }), "：ユーザー情報（カードID、PIN、指紋テンプレート、顔テンプレート）をカードに保存できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.customSmartCard",
                product: "2"
              }), "：他社が発行したスマートカードを登録できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.readCard",
                product: "2"
              }), " をクリックしてカードIDを登録します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "カードに登録する指紋テンプレートを選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.writeCard",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["スマートカードを発行するには、正しいカードフォーマットを設定する必要があります。 カードフォーマットの詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-credential-smart-format",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["スマートカードに保存されるユーザー情報は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " に保存された情報を使用します。 変更したユーザー情報を保存しない場合、スマートカードに誤ったユーザー情報が保存される可能性があります。 また、変更したユーザー情報をデバイスと同期しないと、デバイスが認証を実行できない場合があります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["顔テンプレートを使用するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.credential.root"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.credential.cardFormat"
            }), " メニューで新しいスマートカードを追加する際、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.layout",
              product: "2"
            }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.cardFormat.useFace",
              product: "2"
            }), " を選択します。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-credential-smart-format#layout",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user.accessOnCard",
              product: "2",
              className: "normal"
            }), " ではカードIDを直接設定できません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "カスタムスマートカードが使用できるデバイスとファームウェアバージョンは以下のリストを参照してください。"
          }), "\n", (0,jsx_runtime.jsxs)(Details, {
            children: [(0,jsx_runtime.jsx)("summary", {
              children: "カスタムスマートカード対応デバイスとファームウェアバージョンを表示"
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "XPass D2 ファームウェア 1.7.1 以上"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry P2 ファームウェア 1.5.1 以上"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry W2 ファームウェア 1.8.0 以上"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 2a ファームウェア 1.1.0 以上"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "X-Station 2 ファームウェア 1.3.0 以上"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 3 ファームウェア 1.3.0 以上"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioEntry W3 ファームウェア 1.0.0 以上"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioLite N2 ファームウェア 1.6.2 以上"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["デバイスにスマートカードレイアウトを設定するには", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-details-auth",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["スマートカードをフォーマットして情報を書き込み直すには", (0,jsx_runtime.jsx)(_components.a, {
              href: "#readformatcard",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "readformatcard",
      children: "カードの読み取り／フォーマット"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "スマートカードをフォーマットして情報を書き込み直すことができます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), "」セクションで、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCard",
            product: "2"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.card",
            product: "2"
          }), "」ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.readCard",
            product: "2"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-card-readcard.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.device",
            product: "2"
          }), " オプションで、スマートカードを読み取ることができるデバイスを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardModeLong",
            product: "2"
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.readCard",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["カード情報を確認し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.formatCard",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.device",
              product: "2"
            }), " のデバイスリストはスマートカードレイアウトが設定されている場合にのみ表示されます。設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-details-auth",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "カスタムスマートカードはフォーマットできません。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "割り当てたカード情報の確認",
      children: "割り当てたカード情報の確認"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザーに割り当てられたカード情報を確認するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.credential",
        product: "2"
      }), " セクションの ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.cardHistory",
        product: "2"
      }), " ボタンをクリックします。 カードを割り当てた日付、カードの種類、カードID、状態を確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-card-assign-info.png"
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