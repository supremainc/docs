"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6967"], {
56743: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_data_generate_reports_mdx_f81_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-data-generate-reports-mdx-f81.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_data_generate_reports_mdx_f81_namespaceObject = JSON.parse('{"id":"platform/biostar_x/data-generate-reports","title":"レポートを作成する ","description":"希望のフォーマットでレポートを作成できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/data-generate-reports.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/data-generate-reports","permalink":"/docs/ja/platform/biostar_x/data-generate-reports","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/data-generate-reports.mdx","tags":[],"version":"current","frontMatter":{"id":"data-generate-reports","title":"レポートを作成する ","description":"希望のフォーマットでレポートを作成できます。","keywords":["レポート","テンプレート"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"データ","permalink":"/docs/ja/platform/biostar_x/how-to-guide-data"},"next":{"title":"自動生成スケジュールを設定する","permalink":"/docs/ja/platform/biostar_x/data-automatic-report-schedule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/data-generate-reports.mdx


const frontMatter = {
	id: 'data-generate-reports',
	title: 'レポートを作成する ',
	description: '希望のフォーマットでレポートを作成できます。',
	keywords: [
		'レポート',
		'テンプレート'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "すべてのイベントを閲覧",
  "id": "すべてのイベントを閲覧",
  "level": 2
}, {
  "value": "期間の設定",
  "id": "期間の設定",
  "level": 3
}, {
  "value": "照会条件の設定",
  "id": "照会条件の設定",
  "level": 3
}, {
  "value": "照会条件の解除",
  "id": "照会条件の解除",
  "level": 3
}, {
  "value": "イベント映像を確認する",
  "id": "イベント映像を確認する",
  "level": 3
}, {
  "value": "CSV へのエクスポート",
  "id": "csv-へのエクスポート",
  "level": 3
}, {
  "value": "警報履歴の閲覧",
  "id": "警報履歴の閲覧",
  "level": 2
}, {
  "value": "期間の設定",
  "id": "期間の設定-1",
  "level": 3
}, {
  "value": "照会条件の設定",
  "id": "照会条件の設定-1",
  "level": 3
}, {
  "value": "照会条件の解除",
  "id": "照会条件の解除-1",
  "level": 3
}, {
  "value": "ユーザーレポートの閲覧",
  "id": "ユーザーレポートの閲覧",
  "level": 2
}, {
  "value": "カスタムレポートの作成",
  "id": "custom-report",
  "level": 2
}, {
  "value": "レポート管理",
  "id": "report-management",
  "level": 2
}, {
  "value": "レポート保存",
  "id": "レポート保存",
  "level": 3
}, {
  "value": "レポートファイルの保存",
  "id": "レポートファイルの保存",
  "level": 3
}, {
  "value": "レポートの印刷",
  "id": "レポートの印刷",
  "level": 3
}, {
  "value": "レポートの削除",
  "id": "レポートの削除",
  "level": 3
}, {
  "value": "列設定",
  "id": "列設定",
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
  }, {Cmd, Column, Columns, IcBw2, IcClose, IcFilter2, IcFirst2, IcFw2, IcLast2, IcMoreW, IcRepTrash, IcRepoEdit, IcReportVid, IcSearch, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!IcBw2) _missingMdxReference("IcBw2", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcFilter2) _missingMdxReference("IcFilter2", true);
  if (!IcFirst2) _missingMdxReference("IcFirst2", true);
  if (!IcFw2) _missingMdxReference("IcFw2", true);
  if (!IcLast2) _missingMdxReference("IcLast2", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcRepTrash) _missingMdxReference("IcRepTrash", true);
  if (!IcRepoEdit) _missingMdxReference("IcRepoEdit", true);
  if (!IcReportVid) _missingMdxReference("IcReportVid", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " で発生したすべてのイベントを閲覧することも、警報履歴のみを閲覧することもできます。 ユーザーの条件に合わせてフィルタリングし、カスタムレポートを作成することもできます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.data"
      }), " をクリックするか、画面左上のショートカットリストから ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.data"
      }), " を選択してください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "すべてのイベントを閲覧",
      children: "すべてのイベントを閲覧"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " で発生したすべてのイベントを閲覧できます。 画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.events"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.allEvents"
      }), " をクリックしてください。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-generate-report.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["表示されたリストで前のページまたは次のページを確認するには、画面右上の ", (0,jsx_runtime.jsx)(IcFw2, {}), " または ", (0,jsx_runtime.jsx)(IcBw2, {}), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "リストに表示する行数を変更するには、画面右上のドロップダウンメニューをクリックし、希望の値を選択してください。 最少で25行、最大で200行まで選択できます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-all-events-set-rows.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "期間の設定",
      children: "期間の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画面左上の ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.header.customReport.period"
      }), " で、希望する期間を設定できます。 日付エリアをクリックしてください。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-select-period.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "本日を基準に、1日から6か月までのあらかじめ定義された期間を選択できます。 期間を選択すると、その期間に発生したイベントがリストに自動表示されます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "data.dialog.rollCall.userDefined"
          }), " を選択すると、任意の期間を手動で設定することもできます。 期間選択ウィンドウが表示されたら、開始日、終了日、時間を設定し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.ok"
          }), " ボタンをクリックしてください。 設定した期間に発生したイベントがリストに自動表示されます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-all-events-set-custom-period.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["本日の日付を選択するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.dialog.rollCall.today"
            }), " ボタンをクリックしてください。"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "照会条件の設定",
      children: "照会条件の設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "リストのヘッダーで条件を設定し、リストをフィルタリングできます。 日付を除くすべての項目に条件を設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["イベントリストのヘッダーで、対象列の ", (0,jsx_runtime.jsx)(IcFilter2, {}), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "フィルター条件ウィンドウが表示されたら、必要な項目を選択してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["選択が完了したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCondition",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "選択した条件に一致するイベントのみがリストに表示されます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-filtered.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "照会条件の解除",
      children: "照会条件の解除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["設定した照会条件を解除するには、ヘッダー下に表示されている条件の ", (0,jsx_runtime.jsx)(IcClose, {}), " ボタンをクリックしてください。 条件が解除され、すべてのイベントがリストに再表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-disable-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "イベント映像を確認する",
      children: "イベント映像を確認する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["イベントリストで、特定のイベントが発生したデバイスにカメラが接続されている場合、そのイベントの ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.column.customReport.view"
      }), " 列に ", (0,jsx_runtime.jsx)(IcReportVid, {}), " アイコンが表示されます。 アイコンをクリックすると、ポップアップウィンドウで該当イベント発生時点の映像を確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-video-log.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["カメラルール設定で複数のカメラを連携している場合は、1台目のカメラ映像を再生します。 カメラルール設定の詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["この機能は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "アドバンス"
            }), "（Advanced）ライセンス以上で、追加オプションにより使用できます。 ライセンスポリシーの詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドアとカメラの連携について詳しくは、", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "csv-へのエクスポート",
      children: "CSV へのエクスポート"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示されたイベントリストを CSV ファイルとしてエクスポートできます。 画面右上の ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "menu.csvDownload",
        product: "2"
      }), " をクリックしてください。 CSV ファイルがユーザーの PC にダウンロードされます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["CSV ファイル名の形式は ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Report_YYYYMMDD_hash.csv"
        }), " です。 （例：", (0,jsx_runtime.jsx)(_components.em, {
          children: "Report_20251002_94a85b7519664378b4b39b879f1e81b7.csv"
        }), "）"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "警報履歴の閲覧",
      children: "警報履歴の閲覧"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["警報（アラーム）履歴のみを閲覧できます。 画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.events"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.alertHistory"
      }), " をクリックしてください。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-alert-lists.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["表示されたリストで前のページまたは次のページを確認するには、画面右上の ", (0,jsx_runtime.jsx)(IcFw2, {}), " または ", (0,jsx_runtime.jsx)(IcBw2, {}), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["表示されたリストで最初のページまたは最後のページへ移動するには、画面右上の ", (0,jsx_runtime.jsx)(IcFirst2, {}), " または ", (0,jsx_runtime.jsx)(IcLast2, {}), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "リストに表示する行数を変更するには、画面右上のドロップダウンメニューをクリックし、希望の値を選択してください。 最少で25行、最大で200行まで選択できます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-all-events-set-rows.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["イベントモニタリングで警報（アラーム）イベントを確認する方法の詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "monitoring-event",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "期間の設定-1",
      children: "期間の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["期間を設定し、その期間に発生した警報履歴を閲覧できます。 リストの ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportHeader.datetime",
        product: "2"
      }), " 列で ", (0,jsx_runtime.jsx)(IcFilter2, {}), " ボタンをクリックしてください。 期間選択ウィンドウが表示されたら、開始日、終了日、時間を設定し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.button.ok"
      }), " ボタンをクリックしてください。 設定した期間に発生したイベントがリストに自動表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-all-events-set-custom-period.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["本日の日付を選択するには、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "data.dialog.rollCall.today"
        }), " ボタンをクリックしてください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "照会条件の設定-1",
      children: "照会条件の設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "リストのヘッダーで条件を設定し、リストをフィルタリングできます。 日付を除くすべての項目に条件を設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["イベントリストのヘッダーで、対象列の ", (0,jsx_runtime.jsx)(IcFilter2, {}), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "フィルター条件ウィンドウが表示されたら、必要な項目を選択してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["選択が完了したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addCondition",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "選択した条件に一致するイベントのみがリストに表示されます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-alert-events-filtered.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "照会条件の解除-1",
      children: "照会条件の解除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["設定した照会条件を解除するには、ヘッダー下に表示されている条件の ", (0,jsx_runtime.jsx)(IcClose, {}), " ボタンをクリックしてください。 条件が解除され、すべてのイベントがリストに再表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-alert-events-disable-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ユーザーレポートの閲覧",
      children: "ユーザーレポートの閲覧"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザー関連テンプレートを選択してレポートを作成できます。 画面左のサイドバーの ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.user"
      }), " 配下で、目的のテンプレートをクリックしてください。"]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--30",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-user-report.png"
        })
      }), (0,jsx_runtime.jsx)(Column, {
        className: "padding--l10",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersInformation"
              }), "：ユーザーの詳細情報をリスト形式で閲覧できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersInDevice"
              }), "：デバイスに登録されたユーザー情報を閲覧できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.userDetail"
              }), "：ユーザーの詳細情報をカード形式で閲覧できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.userPhotoGallery"
              }), "：ユーザープロフィール写真をギャラリー形式で閲覧できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersWithoutCredential"
              }), "：クレデンシャルを設定していないユーザーを閲覧できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.privateAuthModeByUser"
              }), "：ユーザーの個別認証モード設定情報を閲覧できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.numberOfCredentialsByUser"
              }), "：ユーザーに設定されているクレデンシャルの数を閲覧できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.allCards"
              }), "：登録済みカードを基準にユーザーを検索できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.unassignedCards"
              }), "：ユーザーに割り当てられていないカードを検索できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.blacklistCards"
              }), "：使用停止されたカードを検索できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.expiredUsers"
              }), "：有効期限が切れたユーザーを検索できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.usersToBeExpiredInNDays"
              }), "：N日以内に有効期限が切れるユーザーを検索できます。 日数はレポート作成前に直接入力できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.report.idleUsersWithValue"
              }), "：直近Nか月間に入退室履歴がないユーザーを検索できます。 月数はレポート作成前に直接入力できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.sidebar.inactiveUsers"
              }), "：無効化されたユーザーを検索できます。"]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["作成したレポートは ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.sidebar.savedReports"
            }), " 配下に保存できます。 レポート左上の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.button.saveReport"
            }), " ボタンをクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["レポート管理の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "#report-management",
              children: "以下のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "custom-report",
      children: "カスタムレポートの作成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "必要な条件でフィルタリングしてカスタムレポートを作成できます。 作成したレポートをテンプレートとして保存すると、後から同じ条件でレポートを作成する際に便利です。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.sidebar.events"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.sidebar.customReport"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "data.dialog.customReport.events"
          }), " ウィンドウで必要なイベントを選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-set-filter.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["イベントの選択を終えたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-select-items.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["検索(", (0,jsx_runtime.jsx)(IcSearch, {}), ")入力フィールドで必要な項目を検索できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["最右列のリストで ", (0,jsx_runtime.jsx)(IcRepTrash, {}), " ボタンをクリックすると、選択した項目を除外できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["照会期間を設定し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-set-period.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.static"
              }), "：指定した日付と時刻を設定して照会期間を設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "data.dynamic"
              }), "：本日を基準に開始日、終了日、時刻を設定できます。 一定期間のレポートを繰り返し作成する際に便利です。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザー、ドア、デバイスを基準にグループ別または個別で条件を設定できます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-select-filters.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["右側のリストで ", (0,jsx_runtime.jsx)(IcRepTrash, {}), " ボタンをクリックすると、選択した項目を除外できます。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["必要な条件を選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.next"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "列設定ウィンドウでレポートに表示するカラムを選択します。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-custom-report-set-columns.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["カラムの選択を終えたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.button.generate"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "カスタムレポートの作成が完了します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-complete.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["レポートのタイトル、イベント項目、期間、フィルター条件を修正するには、レポート上部の ", (0,jsx_runtime.jsx)(IcRepoEdit, {}), " ボタンをクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["レポートタイトルは画面左のサイドバーの ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.sidebar.savedReports"
            }), " 配下でも変更できます。 タイトルを変更するカスタムレポートを選択し、右クリックします。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "data.sidebar.renameSavedReport"
            }), " を選択します。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-data-custom-report-rename.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["レポート管理の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "#report-management",
              children: "以下のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "report-management",
      children: "レポート管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "レポート保存",
      children: "レポート保存"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["作成したレポートをテンプレートとして保存するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.saveReport"
      }), " ボタンをクリックします。 保存したレポートは画面左のサイドバーの ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.savedReports"
      }), " 配下で確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-saved.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "レポートファイルの保存",
      children: "レポートファイルの保存"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["レポートをPDFまたはCSVファイルとしてエクスポートするには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.export"
      }), " ボタンをクリックします。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.exportReport"
      }), " ウィンドウが表示されたら各項目を設定し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.export"
      }), " ボタンをクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-export.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "レポートの印刷",
      children: "レポートの印刷"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PCに接続されたプリンターでレポートを印刷するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.print"
      }), " ボタンをクリックします。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.printReport"
      }), " ウィンドウが表示されたら各項目を設定し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.button.print"
      }), " ボタンをクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-print.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Webブラウザーの新しいタブで印刷プレビュー画面が表示されます。 画面右上の印刷ボタンをクリックすると印刷を開始できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "レポートの削除",
      children: "レポートの削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["保存したレポートを削除するには、画面左のサイドバーの ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.savedReports"
      }), " 配下で削除するレポートを選択し、右クリックします。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "data.sidebar.deleteSavedReport"
      }), " を選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-custom-report-remove.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "列設定",
      children: "列設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "レポートに表示される列（カラム）設定を変更できます。 列設定で表示する列を選択したり、列の順序を変更したりできます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["レポート右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "data.dialog.customReport.columns"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.columnSetting.title"
          }), " ウィンドウが表示されたら、必要な列を選択または選択解除します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-column-setting.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "列の順序を変更するには、目的の列をクリックしたままドラッグして位置を変更します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["列レイアウト設定を初期化するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "columnSetting.button.defaultColumn",
              product: "2"
            }), " ボタンをクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "作成したレポートによって、選択または選択解除できる列が異なる場合があります。"
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