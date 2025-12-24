"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["87795"], {
31501: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_export_import_user_info_mdx_7d6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-export-import-user-info-mdx-7d6.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_export_import_user_info_mdx_7d6_namespaceObject = JSON.parse('{"id":"platform/biostar_x/export-import-user-info","title":"ユーザー情報のエクスポート/インポート","description":"ユーザー情報をエクスポートまたはインポートして、旧バージョンや別のサーバーのユーザー情報を利用します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/export-import-user-info.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/export-import-user-info","permalink":"/docs/ja/platform/biostar_x/export-import-user-info","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/export-import-user-info.mdx","tags":[],"version":"current","frontMatter":{"id":"export-import-user-info","title":"ユーザー情報のエクスポート/インポート","description":"ユーザー情報をエクスポートまたはインポートして、旧バージョンや別のサーバーのユーザー情報を利用します。","keywords":["ユーザー情報","エクスポート","インポート"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ユーザーの入退室履歴を追跡する","permalink":"/docs/ja/platform/biostar_x/trace-user-access-log"},"next":{"title":"アクセスグループを管理する","permalink":"/docs/ja/platform/biostar_x/view-user-by-access"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/export-import-user-info.mdx


const frontMatter = {
	id: 'export-import-user-info',
	title: 'ユーザー情報のエクスポート/インポート',
	description: 'ユーザー情報をエクスポートまたはインポートして、旧バージョンや別のサーバーのユーザー情報を利用します。',
	keywords: [
		'ユーザー情報',
		'エクスポート',
		'インポート'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "CSV エクスポート／インポート",
  "id": "csvexportimport",
  "level": 2
}, {
  "value": "CSV エクスポート",
  "id": "csvexport",
  "level": 3
}, {
  "value": "CSV インポート",
  "id": "csvimport",
  "level": 3
}, {
  "value": "データファイル エクスポート／インポート",
  "id": "exportimportdatafile",
  "level": 2
}, {
  "value": "データエクスポート",
  "id": "exportdata",
  "level": 3
}, {
  "value": "データインポート",
  "id": "importdata",
  "level": 3
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Details, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー情報をエクスポートまたはインポートして、旧バージョンや別のサーバーのユーザー情報を利用します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csvexportimport",
      children: "CSV エクスポート／インポート"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "選択したユーザー情報をCSVファイルに保存するか、保存済みのCSVファイルを読み込みます。 CSVファイルを使用して簡単にユーザー情報を移行します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " に追加していないカスタムユーザーフィールドがある場合、CSVファイルを正しくインポートできません。 カスタムユーザーフィールドの追加方法は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-server-server#custom-field",
              children: "次のドキュメント"
            }), "を参照します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "英語と韓国語以外の言語でユーザー情報を入力した場合は、CSVファイルをUTF-8で保存します。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csvexport",
      children: "CSV エクスポート"
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーリストでCSVファイルに保存するユーザーのチェックボックスをクリックします。 1 人以上のユーザーを選択できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(IcMoreW, {}), " をクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.csv"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-export-csv.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.csv"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.title"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.exportReason"
          }), "(任意)を入力し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.download"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-export-csv-popup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ローカルの任意のパスにCSVファイルを保存します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "team.menu.export.exportReason"
        }), " は必須入力項目ではありません。 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "team.menu.export.exportReason"
        }), "の記録は", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.setting"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.system.root"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.system.auditTrail"
        }), "で確認できます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csvimport",
      children: "CSV インポート"
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
          children: ["画面右上の", (0,jsx_runtime.jsx)(IcMoreW, {}), " ボタンをクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.csv"
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ローカルに保存したCSVファイルを選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.csv"
          }), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.title"
          }), " ウィンドウで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.importStartRow"
          }), " を設定し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CSVファイルのユーザーデータフィールドと ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " のユーザーデータフィールドが自動でマッピングされて表示されます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.reMapping",
            product: "2"
          }), " をクリックすると、名前が同じフィールドが再マッピングされます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-02.png",
          width: "50%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " にすでにユーザーIDが登録されているユーザーデータを保持するか、CSVファイルの情報で上書きするかを選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-03.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSVファイルの情報をインポート中にエラーが発生した場合、エラーが発生したCSVデータのみを再確認してアップロードできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CSVインポートでモバイルアクセスカードを発行します。 レギュラーサイトを使用する場合、インポート完了後にAirfob Portalでモバイルアクセスカード1枚につき1クレジットが差し引かれます。 モバイルアクセスカードを発行しない場合は、マッピングを解除します。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSVファイルに ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " に登録済みのユーザーに発行したモバイルアクセスカードと同一のデータが存在する場合は、データを保持するか上書きし、既存のモバイルアクセスカードを維持します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSVファイルに ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " に登録済みのユーザーに発行したモバイルアクセスカードと異なるデータが存在する場合、データを保持すると既存のモバイルアクセスカードが維持され、上書きするとそのユーザーに新しいモバイルアクセスカードが発行されます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSVインポートでモバイルアクセスカードを発行する際にダイナミックサイトを使用する場合は、", (0,jsx_runtime.jsx)(_components.code, {
              children: "mobile_start_datetime"
            }), " と ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mobile_expiry_datetime"
            }), " フィールドに必ず値を入力します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " QR はCSVインポートでは発行できません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSVインポートでユーザーの顔を登録します。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "batch-import-face#import-csv",
              children: "次のドキュメント"
            }), "を参照します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSVインポートでユーザーのPINを登録します。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "enroll-credential-pin",
              children: "次のドキュメント"
            }), "を参照します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["保存済みのCSVファイルに一致しない列を追加すると、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " でファイルをインポートできません。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exportimportdatafile",
      children: "データファイル エクスポート／インポート"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["外部ストレージ(USB)にユーザー情報を保存し、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " またはデバイスでインポートします。 最大500,000人のユーザー情報をサーバーからデバイスへ、またはデバイス間で移行します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["古いファームウェアバージョンを使用するデバイスからエクスポートしたデータは ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " にインポートできません。 常に最新バージョンのファームウェアを使用してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "異なる指紋テンプレート形式を使用する場合、データをインポートできません。 例えば、Suprema指紋テンプレート形式を使用するデバイスからエクスポートしたデータは、ISO指紋テンプレート形式を使用するデバイスではインポートできません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザーデータを取り込む際、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " サーバーに登録されている指紋および顔クレデンシャルがすでに存在する場合、既存のデータは上書きされます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "古いファームウェアバージョンを使用するデバイスのデータはインポートできません。 デバイスのファームウェアを互換バージョンにアップグレードします。"
          }), "\n", (0,jsx_runtime.jsxs)(Details, {
            children: [(0,jsx_runtime.jsx)("summary", {
              children: "対応デバイスとファームウェアバージョンを表示"
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 2 ファームウェア 1.9.0 以上"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation A2 ファームウェア 1.8.0 以上"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "FaceStation 2 ファームウェア 1.4.0 以上"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "FaceStation F2 ファームウェア 2.2.0 以上"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "X-Station 2 ファームウェア 1.0.0 以上"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 3 ファームウェア 1.3.1 以上"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "BioStation 2a ファームウェア 1.0.0 以上"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exportdata",
      children: "データエクスポート"
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーリストでエクスポートするユーザーのチェックボックスをクリックします。 1 人以上のユーザーを選択できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(IcMoreW, {}), " をクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.dataFile"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-export-data.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.dialog.exprotDataFile.title"
          }), " ウィンドウで、データファイルを適用するデバイスを選択してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-export-data-select-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.export.exportReason"
          }), "(任意)を入力し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ローカルの任意のパスにデータファイルを保存します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "データファイルのエクスポートでは、ユーザー情報のうちプロフィール写真、ID、名前、有効期間、入退グループ、PIN、個人認証モード、クレデンシャル（顔、指紋、カード、モバイルカード、顔、QR/Barcode）、1:1セキュリティ等級情報をファイルとして保存します。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "データファイルを適用するデバイスを正しく選択しないと、そのデバイスではデータファイルを認識できません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "team.menu.export.exportReason"
            }), " は必須入力項目ではありません。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.menu.export.exportReason"
            }), "の記録は", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.system.root"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.system.auditTrail"
            }), "で確認できます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " からエクスポートしたファイルをデバイスにインポートするには、現在のデバイスが認識できるようにファイル名を以下のとおり変更する必要があります。 ファイル名の形式は、今後のデバイスファームウェアのアップデートにより自動認識されるよう調整される予定です。"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsxs)(_components.em, {
          children: [(0,jsx_runtime.jsx)("b", {
            children: "BioStarX"
          }), "_YYYYMMDD_HHMMSS.tgz"]
        }), " → ", (0,jsx_runtime.jsxs)(_components.em, {
          children: [(0,jsx_runtime.jsx)("b", {
            children: "BioStar2"
          }), "_YYYYMMDD_HHMMSS.tgz"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "importdata",
      children: "データインポート"
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
          children: ["画面右上の ", (0,jsx_runtime.jsx)(IcMoreW, {}), " をクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.title"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.import.dataFile"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-import-data.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ローカルに保存されているデータファイル（", (0,jsx_runtime.jsx)(_components.em, {
            children: ".tgz"
          }), "）を選択します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "データファイルのインポートに成功すると、画面にメッセージが表示されます。"
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