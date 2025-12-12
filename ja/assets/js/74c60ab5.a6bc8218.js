"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["42088"], {
43321: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_report_mdx_74c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-report-mdx-74c.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_report_mdx_74c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-report","title":"勤怠記録を確認する","description":"システムで収集したユーザーの勤怠イベントから勤怠レポートを生成でき、タイムレコードを編集したり、CSV ファイルまたは PDF ファイルにエクスポートしたりできます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-report.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-report","permalink":"/docs/ja/platform/biostar_x/tna-report","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-report.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-report","title":"勤怠記録を確認する","description":"システムで収集したユーザーの勤怠イベントから勤怠レポートを生成でき、タイムレコードを編集したり、CSV ファイルまたは PDF ファイルにエクスポートしたりできます。","keywords":["勤怠記録","レポート"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"勤務スケジュールを設定する","permalink":"/docs/ja/platform/biostar_x/tna-rule-schedule"},"next":{"title":"勤怠記録を修正する","permalink":"/docs/ja/platform/biostar_x/tna-report-edit"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-report.mdx


const frontMatter = {
	id: 'tna-report',
	title: '勤怠記録を確認する',
	description: 'システムで収集したユーザーの勤怠イベントから勤怠レポートを生成でき、タイムレコードを編集したり、CSV ファイルまたは PDF ファイルにエクスポートしたりできます。',
	keywords: [
		'勤怠記録',
		'レポート'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*Working alarm time Report*/


const toc = [{
  "value": "開始する前に",
  "id": "開始する前に",
  "level": 2
}, {
  "value": "多言語レポートを使用する前に",
  "id": "多言語レポートを使用する前に",
  "level": 3
}, {
  "value": "レポートを更新する前に",
  "id": "レポートを更新する前に",
  "level": 3
}, {
  "value": "勤怠記録の確認",
  "id": "勤怠記録の確認",
  "level": 2
}, {
  "value": "勤怠レポートを作成する",
  "id": "勤怠レポートを作成する",
  "level": 3
}, {
  "value": "フィルター条件の設定",
  "id": "フィルター条件の設定",
  "level": 3
}, {
  "value": "レポート期間の設定",
  "id": "レポート期間の設定",
  "level": 3
}, {
  "value": "レポートのエクスポート",
  "id": "レポートのエクスポート",
  "level": 3
}, {
  "value": "警告勤務時間レポートを作成する",
  "id": "警告勤務時間レポートを作成する",
  "level": 2
}, {
  "value": "メール自動送信の設定",
  "id": "メール自動送信の設定",
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
  }, {Cmd, IcSearch, IcSet, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!IcSet) _missingMdxReference("IcSet", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "システムで収集したユーザーの勤怠イベントから勤怠レポートを生成でき、タイムレコードを編集したり、CSV ファイルまたは PDF ファイルにエクスポートしたりできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "あらかじめ設定されている 7 つのレポートフィルターを利用して簡単に使うことができ、管理者がフィルターを直接設定することもできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "開始する前に",
      children: "開始する前に"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多言語レポートを使用する前に",
      children: "多言語レポートを使用する前に"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " では韓国語と英語を基本サポートしています。 多言語レポートを使用するには、次の案内に従って希望の言語を設定してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["次のパスに移動します。 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "C:\\Program Files\\BioStar X\\plugin\\ta\\dist\\setup\\report_fonts"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用する言語名でフォルダーを作成します。 言語名は ISO 639-1 規格を参照してください。 例として、スペイン語を使用する場合はフォルダー名を \"es\" にします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "作成したフォルダーにフォントをコピーして貼り付けます。 TrueType フォントは 1 つのみサポートされます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "レポートを更新する前に",
      children: "レポートを更新する前に"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " は標準データベースとして MariaDB を使用します。 MS SQL Server データベースを使用する場合は、以下の事項を先に確認してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " を MS SQL Server データベースと併用すると、登録ユーザー数が多い場合、レポートを更新するたびに PC のメモリ使用量が蓄積されることがあります。 MS SQL Server データベースの最大サーバーメモリを再設定してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Microsoft SQL Server Management Studio"
          }), " を実行します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["オブジェクトエクスプローラーで ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " のデータベースを右クリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "プロパティ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "メモリ"
          }), " をクリックし、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "最大サーバーメモリ"
          }), " 項目の値を下げます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " のインストール時の MariaDB および MS SQL Server の設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "custom-install",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "勤怠記録の確認",
      children: "勤怠記録の確認"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "勤怠レポートを作成する",
      children: "勤怠レポートを作成する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "登録されたユーザーの勤怠記録レポートを生成する方法を説明します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.title",
            product: "2"
          }), " タブをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "画面左のサイドバーで目的のレポートフィルター項目をクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.userGroup",
            product: "2"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), " 項目で ", (0,jsx_runtime.jsx)(IcSearch, {}), " ボタンをクリックし、グループまたはユーザーを指定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["レポートを生成するには ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.updateReport",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "画面下部にレポート一覧が表示されたら、目的の項目をクリックして詳細を確認できます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-update-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "フィルター条件の設定",
      children: "フィルター条件の設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "フィルター条件を設定して新しい勤怠記録レポートを生成できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-filter-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), "：レポート名を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.reportType",
            product: "2"
          }), "：希望するレポート種類を選択します。 提供されているレポート種類は次のとおりです。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "report.daily",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.dailySummary",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.individual",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.individualSummary",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.leave",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.exception",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.modifiedPunchLogHistory",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.workweek",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.report.condition.reportType",
              product: "2"
            }), " を ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "report.individual",
              product: "2"
            }), " に選択すると、ユーザーの入退室記録の出力有無を設定できます。"]
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-tna-report-individual-types.png"
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "report.individual.optionSummary",
                  product: "2"
                }), "：レポートにはユーザーの出勤および退勤記録のみを出力します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "report.individual.optionDetail",
                  product: "2"
                }), "：レポートにはユーザーのすべての入退室記録を出力します。"]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "grid.columnSetting",
            product: "2"
          }), "：レポートテーブルの列順を変更したり非表示にしたりできます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-filter-setting-column.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["列順を変更した後に既定設定へ戻すには ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "columnSetting.defaultColumn",
              product: "2"
            }), " ボタンをクリックします。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report.filter",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.reportType",
            product: "2"
          }), " を ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report.leave",
            product: "2"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report.exception",
            product: "2"
          }), " に設定した場合のみ有効になり、不在記録または例外記録の詳細条件を選択できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.userGroup",
            product: "2"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.user",
            product: "2"
          }), "：レポートを生成するユーザーグループまたはユーザーを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.saveFilter.button",
            product: "2"
          }), "：設定した勤怠レポートをフィルターとして保存できます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-filter-saving.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "レポート期間の設定",
      children: "レポート期間の設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "レポート期間の設定方法を説明します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-period-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["レポート期間を ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.daily",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.weekly",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.monthly",
        product: "2"
      }), " に設定できます。 特定期間のレポートを生成するには ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timeCard.custom",
        product: "2"
      }), " を選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "レポートのエクスポート",
      children: "レポートのエクスポート"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.downloadToCsv",
            product: "2"
          }), "：生成したレポートを CSV ファイルとして保存できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.exportPdf",
            product: "2"
          }), "：生成したレポートを PDF ファイルとして保存できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "警告勤務時間レポートを作成する",
      children: "警告勤務時間レポートを作成する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定された勤務時間に到達したユーザーの勤怠レポートを生成したり、メールで管理者に通知したりできます。 警告勤務時間レポートは週単位で生成されます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.title",
            product: "2"
          }), " タブをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左サイドバーのフィルター一覧で ", (0,jsx_runtime.jsx)(Cmd, {
            children: "警告勤務時間レポート"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-working-alarm.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.filterConditions",
            product: "2"
          }), " と ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.report.condition.reportPeriod",
            product: "2"
          }), " の各項目を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["レポートを生成するには ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.updateReport",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["指定された勤務時間に達したユーザーの通知を管理者へメールで送信するには ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ta.report.condition.autoEmail",
          product: "2"
        }), " を設定します。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
          href: "#autoEmail",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "メール自動送信の設定",
      children: "メール自動送信の設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定された勤務時間に達したユーザーに関する警告メールを自動で管理者へ送信できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-report-working-alarm-auto-email.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.email",
            product: "2"
          }), "：管理者へメールを自動送信する場合は、チェックボックスをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.dst.dayOfWeek",
            product: "2"
          }), "：管理者へメールを送信する曜日を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shift.time",
            product: "2"
          }), "：管理者へメールを送信する時間を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.triggerAction.recipient",
            product: "2"
          }), "：メールを受信する管理者を指定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.edit",
            product: "2"
          }), " ボタンをクリックすると、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.triggerAction.recipient",
            product: "2"
          }), " ポップアップが表示されます。 メールアドレスを入力します。 1人以上の管理者を指定できます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-report-working-alarm-auto-email-receipt.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.report.condition.autoEmail",
              product: "2"
            }), " 機能を設定するには、フィルター条件を設定してからフィルターを保存する必要があります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["自動送信メールの送信者情報は、画面左のサイドバーの ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.setting",
              product: "2"
            }), "(", (0,jsx_runtime.jsx)(IcSet, {}), ") → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.triggerAction.senderInfor",
              product: "2"
            }), " で設定できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "tna-settings#senderInfo",
              children: "次のドキュメント"
            }), "を参照してください。"]
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