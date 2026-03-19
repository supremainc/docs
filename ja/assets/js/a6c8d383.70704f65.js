"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["80712"], {
20719: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_adding_users_in_bulk_mdx_a6c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-adding-users-in-bulk-mdx-a6c.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_adding_users_in_bulk_mdx_a6c_namespaceObject = JSON.parse('{"id":"platform/biostar_air/adding-users-in-bulk","title":"ユーザーを一括で追加する","description":"BioStar Air PortalでCSVファイルのアップロードを使用して複数のユーザーを一度に効率よく追加する方法、大量のアクセスレベルを構成する方法、プロファイル画像を管理する方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/adding-users-in-bulk.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/adding-users-in-bulk","permalink":"/docs/ja/platform/biostar_air/adding-users-in-bulk","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/adding-users-in-bulk.mdx","tags":[],"version":"current","frontMatter":{"id":"adding-users-in-bulk","title":"ユーザーを一括で追加する","description":"BioStar Air PortalでCSVファイルのアップロードを使用して複数のユーザーを一度に効率よく追加する方法、大量のアクセスレベルを構成する方法、プロファイル画像を管理する方法を説明します。","keywords":["ユーザー管理","BioStar Air","一括ユーザー"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"ユーザー管理","permalink":"/docs/ja/platform/biostar_air/user-management-user-list"},"next":{"title":"ユーザーグループを管理する","permalink":"/docs/ja/platform/biostar_air/managing-user-groups"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/adding-users-in-bulk.mdx


const frontMatter = {
	id: 'adding-users-in-bulk',
	title: 'ユーザーを一括で追加する',
	description: 'BioStar Air PortalでCSVファイルのアップロードを使用して複数のユーザーを一度に効率よく追加する方法、大量のアクセスレベルを構成する方法、プロファイル画像を管理する方法を説明します。',
	keywords: [
		'ユーザー管理',
		'BioStar Air',
		'一括ユーザー'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "CSVテンプレートをダウンロード",
  "id": "downloadCSVTemplate",
  "level": 2
}, {
  "value": "CSVファイルの準備",
  "id": "preparing-the-csv-file",
  "level": 2
}, {
  "value": "主要入力フィールド",
  "id": "keyInputFields",
  "level": 3
}, {
  "value": "カスタムWiegand形式のサポート",
  "id": "カスタムwiegand形式のサポート",
  "level": 3
}, {
  "value": "複数カードのサポート",
  "id": "複数カードのサポート",
  "level": 3
}, {
  "value": "CSVファイルのアップロード",
  "id": "uploading-the-csv-file",
  "level": 2
}, {
  "value": "CSVファイルの検証",
  "id": "csvファイルの検証",
  "level": 3
}, {
  "value": "ユーザープロファイル画像のアップロード",
  "id": "uploadProfileImages",
  "level": 2
}, {
  "value": "一括アップロードの完了",
  "id": "finalizing-the-bulk-upload",
  "level": 2
}, {
  "value": "トラブルシューティング",
  "id": "トラブルシューティング",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
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
  }, {Cmd, DocLink, IcAirUpface, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirUpface) _missingMdxReference("IcAirUpface", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーをまとめて追加する必要がある場合は、BioStar Airの一括ユーザー追加機能をご利用ください。 CSVファイルをアップロードすることで、数十〜数百人分の従業員情報を数分でシステムに登録できます。 ユーザー情報を入力すると同時に、プロフィール画像を一括でアップロードすることもできます。 本ドキュメントでは、CSVテンプレートのダウンロード、ファイルの準備、アップロード、プロフィール画像の管理、およびアップロード後のユーザー情報の検証方法を手順に沿って案内します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "複数のユーザーを一括追加する全工程を段階的に説明する次のビデオを参照してください。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "gOi2nP0Ag5o"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "downloadCSVTemplate",
      children: "CSVテンプレートをダウンロード"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "次の手順に従ってCSVテンプレートファイルをダウンロードしてください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " をクリックします。"]
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
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user.png"
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
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user-download-csv-template.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSVテンプレートファイル(", (0,jsx_runtime.jsx)(_components.em, {
            children: "biostar-import-user-csv-example.csv"
          }), ")をローカルに保存します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "preparing-the-csv-file",
      children: "CSVファイルの準備"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSVテンプレートをダウンロードし、各ユーザーの必須情報を入力してください。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "keyInputFields",
      children: "主要入力フィールド"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "入力する主なフィールドは以下の通りです。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header11",
            product: "air",
            className: "bold"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), "でグループIDを確認できます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-list-check-ids.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header12",
            product: "air",
            className: "bold"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_levels_submenu",
            product: "air"
          }), "でアクセスレベルIDを確認できます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "full_access",
            product: "air",
            className: "bold"
          }), "は常に", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1"
          }), "に設定されます。 複数のアクセスレベルを指定する際はカンマ（", (0,jsx_runtime.jsx)(_components.code, {
            children: ","
          }), "）を区切りとして使用できます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-ac-level-list-check-ids.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header7",
            product: "air",
            className: "bold"
          }), "：メールで招待状を送信する場合は必須です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header8",
            product: "air",
            className: "bold"
          }), "：モバイルSMSで招待状を送信する場合は必須です。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "user_csv_example_header7",
          product: "air",
          className: "bold"
        }), "と", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_csv_example_header8",
          product: "air",
          className: "bold"
        }), "は重複してはいけません。 重複する値を入力してCSVファイルをアップロードするとエラーが発生する可能性があります。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "カスタムwiegand形式のサポート",
      children: "カスタムWiegand形式のサポート"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ファシリティコード、セグメント、パリティビットなどの情報を含むあらゆるWiegand形式を自由に構成できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HID Corporate 1000およびiClass SE、SEOS形式をサポートします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CSVテンプレート"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "各定義された形式（カスタムまたはデフォルト）はCSVファイル内で別々の列として表示されます。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_1",
                  product: "air",
                  className: "bold"
                }), "、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_2",
                  product: "air",
                  className: "bold"
                }), "、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_3",
                  product: "air",
                  className: "bold"
                }), "、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_4",
                  product: "air",
                  className: "bold"
                }), "、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "rf_card_data_format_option_5",
                  product: "air",
                  className: "bold"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["複数の項目を単一フィールドに入力する場合はスラッシュ（", (0,jsx_runtime.jsx)(_components.code, {
                children: "/"
              }), "）で区切ってください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["カード名は小さい引用符（", (0,jsx_runtime.jsx)(_components.code, {
                children: "'"
              }), "）で囲むことができます。 ダブルクォート（", (0,jsx_runtime.jsx)(_components.code, {
                children: "'"
              }), "）を使用するとエラーが発生する可能性があります。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "✅ 'CardName' | ❌ 'CardName'"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "例"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["ファシリティコードがある場合：", (0,jsx_runtime.jsx)(_components.em, {
                  children: "1234567-100-'Main Office Card'"
                }), "（", (0,jsx_runtime.jsx)(_components.code, {
                  children: "CardID"
                }), "-", (0,jsx_runtime.jsx)(_components.code, {
                  children: "FacilityCode"
                }), "-", (0,jsx_runtime.jsx)(_components.code, {
                  children: "'CardName'"
                }), "）"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["複数のセグメントがある場合：", (0,jsx_runtime.jsx)(_components.em, {
                  children: "12-3456-78-'Lab Entry Card'"
                })]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "複数カードのサポート",
      children: "複数カードのサポート"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーごとに最大8つのCSNまたはWiegandカード形式を割り当てることができます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CSVテンプレート"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "単一カードの場合はCSNカード番号を入力します。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["複数のカードを登録する場合はCSNカード番号をスラッシュ（", (0,jsx_runtime.jsx)(_components.code, {
                children: "/"
              }), "）で区切ってください。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "カード名の指定形式"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CSN"
        }), "-", (0,jsx_runtime.jsx)(_components.code, {
          children: "'Card Name'"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["例：", (0,jsx_runtime.jsx)(_components.em, {
          children: "1234567-'Main Entry'"
        }), " / ", (0,jsx_runtime.jsx)(_components.em, {
          children: "7654321-'Back Door'"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uploading-the-csv-file",
      children: "CSVファイルのアップロード"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSVファイルの準備が完了したらアップロードしてください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " をクリックします。"]
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
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), "パネルが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "face_register_upload_csv_text_select_file",
            product: "air"
          }), "ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user-select-csv.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "事前に準備したCSVファイルを選択してください。"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザーのプロファイル画像が用意されている場合は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "face_register_upload_face_photo",
              product: "air"
            }), "オプションを有効にします。 詳細については", (0,jsx_runtime.jsx)(DocLink, {
              inner: "#uploadProfileImages"
            }), "を参照してください。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "new_popup_import_users_btn_next",
            product: "air"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_data_preview",
            product: "air"
          }), "セクションで最初の列のデータの正確性を確認してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-bulk-import-user-csv-data-preview.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["データに問題がなければ、右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_btn",
            product: "air"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "アップロードが完了すると、次の画面でユーザーの画像を読み込むか、モバイルカードを一括発行できます。 希望する操作を選択してください。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-add-bulk-import-user-csv-complete.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSVファイル名にはカンマ（", (0,jsx_runtime.jsx)(_components.code, {
              children: ","
            }), "）を除く特殊文字は使用できません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["アップロード可能なCSVファイルの最大サイズは", (0,jsx_runtime.jsx)(_components.strong, {
              children: "5MB"
            }), "です。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user_actions_import_title",
              product: "air"
            }), "パネルの", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_actions_import_upload_text",
              product: "air"
            }), "フィールドにCSVファイルをドラッグアンドドロップしてアップロードすることもできます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csvファイルの検証",
      children: "CSVファイルの検証"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CSVアップロードプロセスが改善され、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "行ごとのエラーのフィードバック"
      }), "を提供するため、問題の解決が容易になりました。 アップロード中にエラーが発生した場合、エラー内容を確認できる詳細レポートを提供します。 レポートをダウンロードするには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_actions_import_download_btn_text",
        product: "air"
      }), "ボタンをクリックしてください。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-add-bulk-import-user-csv-error.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uploadProfileImages",
      children: "ユーザープロファイル画像のアップロード"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "プロファイル画像はCSVファイルと一緒に自動でアップロードするか、後で手動で一括アップロードできます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-add-bulk-import-user-with-face-photo.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSVファイルの", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_csv_example_header1",
            product: "air",
            className: "bold"
          }), "列と一致するプロファイル画像ファイルを用意してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["例えば、", (0,jsx_runtime.jsx)(_components.em, {
            children: "601.jpg"
          }), "ファイルはユーザーID", (0,jsx_runtime.jsx)(_components.strong, {
            children: "601"
          }), "に対応します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_actions_import_title",
            product: "air"
          }), "パネルでCSVファイルをアップロードした後、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "face_register_upload_face_photo",
            product: "air"
          }), "オプションを有効にしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "face_register_upload_face_photo_select_folder",
            product: "air"
          }), "ボタンをクリックしてから、プロファイル画像が保存されているフォルダを選択してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ファイル形式の要件"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["対応形式: ", (0,jsx_runtime.jsx)(_components.em, {
              children: ".jpg"
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: ".jpeg"
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: ".png"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ファイルサイズ制限: 画像ごとに ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1MB"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["プロファイル画像がCSVファイルアップロード時に用意されていない場合は、ユーザーリストの", (0,jsx_runtime.jsx)(Cmd, {
          sid: "image_upload_action",
          product: "air"
        }), "(", (0,jsx_runtime.jsx)(IcAirUpface, {}), ")機能を使って後で追加できます。"]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-add-bulk-import-user-profile-images.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "finalizing-the-bulk-upload",
      children: "一括アップロードの完了"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "すべてのユーザーデータと画像をアップロードすると、システムが項目を処理し、新しいユーザーが割り当てられたクレデンシャルとともにユーザーリストに表示されます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "トラブルシューティング",
      children: "トラブルシューティング"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CSVアップロードに関して問題が発生した場合は、一般的な問題の解決に役立つ", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/troubleshooting-adding-users-in-bulk"
      }), "を確認してください。 このドキュメントには、データの検証と重複の除去に役立つExcelの式も含まれています。"]
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