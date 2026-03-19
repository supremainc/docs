"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["75733"], {
62104: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_troubleshooting_adding_users_in_bulk_mdx_e7a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-troubleshooting-adding-users-in-bulk-mdx-e7a.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_troubleshooting_adding_users_in_bulk_mdx_e7a_namespaceObject = JSON.parse('{"id":"platform/biostar_air/troubleshooting-adding-users-in-bulk","title":"一括ユーザー追加の問題","description":"BioStar Air ポータルでユーザーを一括追加する際に発生する一般的な問題の対処方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/troubleshooting-adding-users-in-bulk.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/troubleshooting-adding-users-in-bulk","permalink":"/docs/ja/platform/biostar_air/troubleshooting-adding-users-in-bulk","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/troubleshooting-adding-users-in-bulk.mdx","tags":[],"version":"current","frontMatter":{"id":"troubleshooting-adding-users-in-bulk","title":"一括ユーザー追加の問題","description":"BioStar Air ポータルでユーザーを一括追加する際に発生する一般的な問題の対処方法を説明します。","keywords":["トラブルシューティング","一括ユーザー","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"トラブルシューティング","permalink":"/docs/ja/platform/biostar_air/troubleshooting"},"next":{"title":"モバイルカードが動作しません","permalink":"/docs/ja/platform/biostar_air/troubleshooting-suprema-pass-app"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/troubleshooting-adding-users-in-bulk.mdx


const frontMatter = {
	id: 'troubleshooting-adding-users-in-bulk',
	title: '一括ユーザー追加の問題',
	description: 'BioStar Air ポータルでユーザーを一括追加する際に発生する一般的な問題の対処方法を説明します。',
	keywords: [
		'トラブルシューティング',
		'一括ユーザー',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "CSVファイルの準備",
  "id": "csvファイルの準備",
  "level": 2
}, {
  "value": "CSVテンプレートのダウンロード",
  "id": "csvテンプレートのダウンロード",
  "level": 3
}, {
  "value": "CSVテンプレートの正確な形式を使用する",
  "id": "csvテンプレートの正確な形式を使用する",
  "level": 3
}, {
  "value": "日付 (<Cmd class=\"normal\"></Cmd> / <Cmd class=\"normal\"></Cmd>)",
  "id": "日付---",
  "level": 4
}, {
  "value": "クレデンシャルの要件",
  "id": "クレデンシャルの要件",
  "level": 4
}, {
  "value": "事前検証のためのExcel数式",
  "id": "excelFormulas",
  "level": 2
}, {
  "value": "メールまたは電話番号の重複検証",
  "id": "メールまたは電話番号の重複検証",
  "level": 3
}, {
  "value": "日付形式の検証",
  "id": "日付形式の検証",
  "level": 3
}, {
  "value": "メール形式の検証",
  "id": "メール形式の検証",
  "level": 3
}, {
  "value": "エラーが発生しますか？",
  "id": "common-errors",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
  }, {Cmd, IcAirUtemplate, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirUtemplate) _missingMdxReference("IcAirUtemplate", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "複数の顧客やパートナーから、ユーザーリストを一括で追加する際に問題が発生するという報告がありました。 ほとんどの問題は、形式が不正なCSVファイルが原因です。 一括追加機能が期待通りに動作するよう、以下の指示に正確に従ってください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "v2.10から、BioStar Airは不正な項目を含むCSVファイルをアップロードした場合、検証レポートを返します。 エラーを修正した後、ファイルを再アップロードしてください。"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-add-bulk-import-user-csv-error.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csvファイルの準備",
      children: "CSVファイルの準備"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csvテンプレートのダウンロード",
      children: "CSVテンプレートのダウンロード"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " に移動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_btn",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), " パネルが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_download_btn_text",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSVテンプレートファイル(", (0,jsx_runtime.jsx)(_components.em, {
            children: "biostar-import-user-csv-example.csv"
          }), ")をローカルに保存します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csvテンプレートの正確な形式を使用する",
      children: "CSVテンプレートの正確な形式を使用する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "列(column)を手動で追加または削除しないでください"
          }), "。 予期しない列(column)があるとエラーが発生する可能性があります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["追加フィールド（例：従業員IDまたは部署）を含める必要がある場合は、ユーザー一覧の上部にある", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_setting_templ_action",
            product: "air"
          }), "(", (0,jsx_runtime.jsx)(IcAirUtemplate, {}), ")機能を使って該当するフィールドを追加してください。 フィールドを追加すると、ダウンロードしたCSVファイルに該当する列が自動的に含まれます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "各列の要件を参照してデータを正しく入力してください。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header1",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各ユーザーの一意の数値IDです。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header1",
            product: "air",
            className: "bold"
          }), " 列は", (0,jsx_runtime.jsx)(_components.strong, {
            children: "空にすることができ"
          }), "、システムが自動的に値を割り当てます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーIDを手動で入力する場合"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "数字のみ"
              }), " を使用してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "一意の値"
              }), " を使用してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "文字、空白、ハイフン、または特殊文字を含めないでください。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["文字を含む会社固有の従業員IDを使用する場合は、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_csv_example_header1",
          product: "air",
          className: "bold"
        }), " フィールドを使用しないでください。 代わりに、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_setting_templ_action",
          product: "air"
        }), " 機能を使用して別のカスタムユーザーフィールドを作成してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header7",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["有効なメール形式を使用してください。 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#excelFormulas",
            children: "検証式"
          }), "を参照してメール形式を検証できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "空白を含めることはできません。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "@"
              }), "（アットサイン）を含める必要があります。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ドメインにはピリオド(", (0,jsx_runtime.jsx)(_components.code, {
                children: "."
              }), ")およびトップレベルドメインを含める必要があります。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "例：example.com、gmail.com、suprema.co.kr"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "アドレスの末尾に追加のピリオドがあってはなりません。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "特殊文字または不可視文字があってはなりません。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "メールアドレスである必要があります。 '提供されていません' または '提供しない' のようなエラーが発生する可能性があります。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メールアドレスは", (0,jsx_runtime.jsx)(_components.strong, {
            children: "一意である必要があります"
          }), "。 ファイル内や既存ユーザー間での重複は許可されません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以下のクレデンシャルを発行する場合、メールアドレスは必須です。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_mobile",
              product: "air"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option3",
              product: "air"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option4",
              product: "air"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RFIDカードのみを所持しているユーザーはメールアドレスの入力は不要です。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-2",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header8",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイルSMSでクレデンシャルを送信しない場合は任意です。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メールアドレスと同様に", (0,jsx_runtime.jsx)(_components.strong, {
            children: "一意である必要があり"
          }), "、ファイル内や既存ユーザー間での重複は許可されません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "クレデンシャルを配布する際は、メールを推奨します。 SMSメッセージは追加料金が発生します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "日付---",
      children: ["日付 (", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header5",
        product: "air",
        className: "normal"
      }), " / ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_csv_example_header6",
        product: "air",
        className: "normal"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "すべての日付フィールドは以下の正確な形式に従う必要があります。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-plaintext",
        children: "YYYY-MM-DDTHH:MM:SS.sssZ\n\nExample:\n1995-05-09T00:00:00.000Z\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["'Z'を欠いていたり、ダッシュ(", (0,jsx_runtime.jsx)(_components.code, {
        children: "—"
      }), ")の代わりにスラッシュ(", (0,jsx_runtime.jsx)(_components.code, {
        children: "/"
      }), ")を使用したり、時間を省略するなどの些細な違いもアップロード失敗の原因になります。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "クレデンシャルの要件",
      children: "クレデンシャルの要件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "クレデンシャル形式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "メールまたは電話番号"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_rf",
              product: "air"
            }), " Only"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "いいえ。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_mobile",
              product: "air"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option3",
              product: "air"
            }), " / ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option4",
              product: "air"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "はい、1つ必要です。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "クレデンシャルはメールアドレスまたは電話番号を通じて送信される必要があります。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["両方を提供することはできますが、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "モバイル形式のクレデンシャル"
          }), "には", (0,jsx_runtime.jsx)(_components.strong, {
            children: "最低1つが必要"
          }), "です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メールは無料です。 SMSは料金が発生します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "excelFormulas",
      children: "事前検証のためのExcel数式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["データをアップロードする前に、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ヘルパー列"
      }), "で次の数式を使ってデータを確認することを推奨します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "メールまたは電話番号の重複検証",
      children: "メールまたは電話番号の重複検証"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Detect Duplicate Emails or Phone Numbers\"",
        children: "=IF(E2=\"\", \"\", IF(COUNTIF(E$2:E2, E2)>1, \"Duplicate\", \"First Occurrence\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "日付形式の検証",
      children: "日付形式の検証"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Validate ISO 8601 Date Format (Column Q)\"",
        children: "=IF(Q2=\"\", \"\", IF(AND(LEN(Q2)=24, \n  ISNUMBER(VALUE(MID(Q2,1,4))), MID(Q2,5,1)=\"-\", \n  ISNUMBER(VALUE(MID(Q2,6,2))), MID(Q2,8,1)=\"-\", \n  ISNUMBER(VALUE(MID(Q2,9,2))), MID(Q2,11,1)=\"T\", \n  ISNUMBER(VALUE(MID(Q2,12,2))), MID(Q2,14,1)=\":\", \n  ISNUMBER(VALUE(MID(Q2,15,2))), MID(Q2,17,1)=\":\", \n  ISNUMBER(VALUE(MID(Q2,18,2))), MID(Q2,20,1)=\".\", \n  ISNUMBER(VALUE(MID(Q2,21,3))), RIGHT(Q2,1)=\"Z\"), \n  \"Valid\", \"Invalid\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "メール形式の検証",
      children: "メール形式の検証"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-excel-formula",
        metastring: "title=\"Validate Email Format (Column E)\"",
        children: "=IF(TRIM(E2)=\"\", \"\", IF(AND(\n  ISNUMBER(FIND(\"@\", E2)),\n  ISNUMBER(FIND(\".\", E2)),\n  FIND(\"@\", E2) > 1,\n  FIND(\".\", E2, FIND(\"@\", E2)) > FIND(\"@\", E2) + 1,\n  LEN(E2) - LEN(SUBSTITUTE(E2, \"@\", \"\")) = 1,\n  ISERROR(FIND(\" \", E2))\n), \"Valid\", \"Invalid\"))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-errors",
      children: "エラーが発生しますか？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "正しいテンプレートをダウンロードし、列を追加していませんか？"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイルクレデンシャルを受け取るユーザーのすべての必須フィールドが記入されていますか？"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メールアドレスと電話番号はファイル内および既存ユーザー間で一意ですか？"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "日付とメール形式は上記の通り正確ですか？"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "サービスチームはファイルの修正サービスを提供しません。 ファイルがアップロードされない場合は、上記の検証ツールを使用して問題を特定し、解決してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "この文書は、サービスチームによる手動のトラブルシューティングなしでアップロードを正常に完了できるように支援するために作成されています。"
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