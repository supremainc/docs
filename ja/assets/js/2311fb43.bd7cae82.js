"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["52996"], {
32420: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_event_logs_mdx_231_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-monitoring-event-logs-mdx-231.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_monitoring_event_logs_mdx_231_namespaceObject = JSON.parse('{"id":"platform/biostar_air/monitoring-event-logs","title":"イベントログの使い方","description":"BioStar Airでイベントログを監視・分析し、フィルターの適用、データのエクスポート、管理操作の追跡方法について案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-event-logs.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/monitoring-event-logs","permalink":"/docs/ja/platform/biostar_air/monitoring-event-logs","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/monitoring-event-logs.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-event-logs","title":"イベントログの使い方","description":"BioStar Airでイベントログを監視・分析し、フィルターの適用、データのエクスポート、管理操作の追跡方法について案内します。","keywords":["モニタリング","イベントログ","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"モニタリング","permalink":"/docs/ja/platform/biostar_air/monitoring"},"next":{"title":"変更ログの使い方","permalink":"/docs/ja/platform/biostar_air/monitoring-audit-logs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/monitoring-event-logs.mdx


const frontMatter = {
	id: 'monitoring-event-logs',
	title: 'イベントログの使い方',
	description: 'BioStar Airでイベントログを監視・分析し、フィルターの適用、データのエクスポート、管理操作の追跡方法について案内します。',
	keywords: [
		'モニタリング',
		'イベントログ',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "イベントログの確認",
  "id": "イベントログの確認",
  "level": 2
}, {
  "value": "ログのフィルタリング",
  "id": "filtering-event-logs",
  "level": 2
}, {
  "value": "レポート設定",
  "id": "generatingReports",
  "level": 2
}, {
  "value": "個人情報のマスキング",
  "id": "dataMasking",
  "level": 2
}, {
  "value": "その他の機能",
  "id": "その他の機能",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirColumn, IcAirDown, IcAirLogfilter, IcAirMask, IcAirRef, IcAirReport, IcAirReportApp, IcSearch, Image, TabItem, Tabs, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirColumn) _missingMdxReference("IcAirColumn", true);
  if (!IcAirDown) _missingMdxReference("IcAirDown", true);
  if (!IcAirLogfilter) _missingMdxReference("IcAirLogfilter", true);
  if (!IcAirMask) _missingMdxReference("IcAirMask", true);
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  if (!IcAirReport) _missingMdxReference("IcAirReport", true);
  if (!IcAirReportApp) _missingMdxReference("IcAirReportApp", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "クラウド出入管理プラットフォームの主な利点の一つは、いつでもどこでもサイト活動を監視できることです。 このドキュメントでは、BioStar Airでイベントログを監視および分析する方法について説明します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "イベントログの動画ガイドを視聴するには、以下の動画をご覧ください。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "nwIEYyK-uAg"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "イベントログの確認",
      children: "イベントログの確認"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["イベントログを確認するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          }), " に移動します。 画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "monitoring_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          }), " をクリックします。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-list.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "event_logs_submenu",
            product: "air"
          }), " 画面にはイベント発生時間、イベント名、ドア名、デバイス名、ユーザータイプ、ユーザー名などの詳細を含むテーブル一覧が表示されます。"]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "モバイルアプリでイベントログを確認する方法について説明します。"
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-mobile-monitoring-eventlog.png",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "モバイル端末でBioStar Airアプリを起動してログインします。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["初期画面の下部にある ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "monitoring_menu",
                product: "air"
              }), " をタップします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "event_logs_submenu",
                product: "air"
              }), " カードをタップします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "イベントログ一覧をスクロールして内容を確認できます。"
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "logs_filters_action_btn",
                  product: "air"
                }), "：イベントログをフィルタリングできます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcSearch, {
                  width: "20",
                  height: "20",
                  title: "Search"
                }), "：特定のキーワードを検索できます。 RFカードID、ユーザーID、メールアドレス、氏名のいずれかを入力します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcAirReportApp, {
                  width: "20",
                  height: "20",
                  title: "Report"
                }), "：レポートを作成できます。 レポート作成に関する詳細については、", (0,jsx_runtime.jsx)(DocLink, {
                  inner: "#generatingReports"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcAirDown, {
                  width: "20",
                  height: "20",
                  title: "Download"
                }), "：レポートをCSVまたはPDF形式でダウンロードできます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcAirMask, {
                  width: "20",
                  height: "20",
                  title: "Apply Masking"
                }), "：個人情報のマスキングを適用できます。"]
              }), "\n"]
            }), "\n"]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "column_filter_modal_title",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["テーブルの列をカスタマイズして、表示または非表示にする情報を選択できます。 順序を変更して、よく使う列を前方に配置することもできます。 イベントログ一覧の上部にある ", (0,jsx_runtime.jsx)(IcAirColumn, {
        title: "Customize"
      }), " をクリックしてください。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "column_filter_modal_title",
        product: "air"
      }), " ウィンドウが表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-eventlog-list-custom-table.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "表示または非表示にする列のチェックボックスを選択または解除します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "列の順序を変更するには、該当する列をクリックしたまま目的の位置にドラッグします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_title",
            product: "air"
          }), " を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_title",
            product: "air"
          }), " を保存せずにログ一覧に適用するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_apply_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_title",
            product: "air"
          }), " の変更を取り消して初期状態に戻すには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_reset_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_save_btn",
              product: "air"
            }), " をクリックすると設定が保存され、他のメニューに移動しても保持されます。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_apply_btn",
              product: "air"
            }), " をクリックすると変更は現在の一覧にのみ適用され、他のメニューに移動すると以前の設定に戻ります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "audit_logs_submenu",
              product: "air"
            }), " では ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_title",
              product: "air"
            }), " 機能はサポートされていません。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filtering-event-logs",
      children: "ログのフィルタリング"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ログをフィルタリングして、目的の情報を素早く見つけることができます。 ログ一覧の上部にある ", (0,jsx_runtime.jsx)(IcAirLogfilter, {
        width: "20",
        height: "20",
        title: "Filters"
      }), " をクリックしてください。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "logs_filters_action_btn",
        product: "air"
      }), " ウィンドウが表示されたら、各項目で希望の値を選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-eventlog-list-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_save_btn",
              product: "air"
            }), " または ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action2",
              product: "air"
            }), " をクリックすると設定が保存され、他のメニューに移動しても保持されます。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_apply_btn",
              product: "air"
            }), " または ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action3",
              product: "air"
            }), " をクリックすると変更は現在の一覧にのみ適用され、他のメニューに移動すると以前の設定に戻ります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "column_filter_modal_reset_btn",
              product: "air"
            }), " または ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "filters_action1",
              product: "air"
            }), " をクリックして変更を取り消し、初期状態に戻します。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generatingReports",
      children: "レポート設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ログデータをフィルタリングして、特定の期間に発生したイベントのレポートを生成できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ログ一覧の上部にある ", (0,jsx_runtime.jsx)(IcAirReport, {
            width: "20",
            height: "20",
            title: "Report"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), " ウィンドウが表示されたら、レポート名を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-report-setting.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "レポートに含める項目を選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_add",
            product: "air"
          }), " をクリックして設定したレポートを保存します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), " に指定した名前でレポートが作成されます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-report-added.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["作成されたレポートをダウンロードするには、レポート名の横にある ", (0,jsx_runtime.jsx)(IcAirDown, {
            width: "20",
            height: "20",
            title: "Download"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_popup_title",
            product: "air"
          }), " ウィンドウが表示されたら、イベントを照会する期間を選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_download_popup_button_title",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-report-download.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管理者のメールアドレスにダウンロードリンクが送信されます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "report_form_text_title",
          product: "air"
        }), " で作成したレポートを検索、編集、ダウンロード、削除できます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dataMasking",
      children: "個人情報のマスキング"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ログ内の個人情報をマスキングして、機密情報を保護できます。 個人情報のマスキングを有効にすると、ユーザー名、メールアドレス、電話番号などの情報が部分的に隠されます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["個人情報のマスキングを有効にするには、ログ一覧の上部にある ", (0,jsx_runtime.jsx)(IcAirMask, {
        width: "20",
        height: "20",
        title: "Apply Masking"
      }), " をクリックします。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "apply_masking_title",
        product: "air"
      }), " オプションを有効にし、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "save_btn",
        product: "air"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-eventlog-apply-masking.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "その他の機能",
      children: "その他の機能"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ログ一覧の上部にあるツールバーを使用して、ログをより効率的に管理できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ログを日付で並べ替えるには、日付と時間の範囲を選択してから ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_apply_btn",
            product: "air"
          }), " をクリックします。 日付をリセットするには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "column_filter_modal_reset_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-set-datetime.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "search_placeholder",
            product: "air"
          }), " 入力フィールドに特定のキーワードを入力してログを検索できます。 RFカードID、ユーザーID、メールアドレス、氏名のいずれかを入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ログをCSVまたはPDFファイルとして保存するには、", (0,jsx_runtime.jsx)(IcAirDown, {
            width: "20",
            height: "20",
            title: "Export"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ログを更新するには、一覧の上部にある ", (0,jsx_runtime.jsx)(IcAirRef, {
            width: "20",
            height: "20",
            title: "Refresh"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["特定の間隔で自動更新するには、一覧の左下にある ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auto_refresh_btn",
            product: "air"
          }), " で5秒または1分を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-monitoring-eventlog-auto-refresh.png"
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