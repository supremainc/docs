"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["55064"], {
97743: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_dashboard_adding_widget_mdx_294_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-dashboard-adding-widget-mdx-294.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_dashboard_adding_widget_mdx_294_namespaceObject = JSON.parse('{"id":"platform/biostar_x/dashboard-adding-widget","title":"ウィジェットを追加","description":"ダッシュボードは、ユーザーが希望する情報を自由に配置できるカスタムモニタリング画面です。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/dashboard-adding-widget.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/dashboard-adding-widget","permalink":"/docs/ja/platform/biostar_x/dashboard-adding-widget","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/dashboard-adding-widget.mdx","tags":[],"version":"current","frontMatter":{"id":"dashboard-adding-widget","title":"ウィジェットを追加","description":"ダッシュボードは、ユーザーが希望する情報を自由に配置できるカスタムモニタリング画面です。","keywords":["ダッシュボード","ウィジェット"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ダッシュボード","permalink":"/docs/ja/platform/biostar_x/how-to-guide-dashboard"},"next":{"title":"ウィジェットを編集する","permalink":"/docs/ja/platform/biostar_x/dashboard-edit-widget"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/dashboard-adding-widget.mdx


const frontMatter = {
	id: 'dashboard-adding-widget',
	title: 'ウィジェットを追加',
	description: 'ダッシュボードは、ユーザーが希望する情報を自由に配置できるカスタムモニタリング画面です。',
	keywords: [
		'ダッシュボード',
		'ウィジェット'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "ウィジェットの追加",
  "id": "add-widgets",
  "level": 2
}, {
  "value": "ウィジェットの種類",
  "id": "widget-types",
  "level": 2
}, {
  "value": "チャート",
  "id": "chart",
  "level": 3
}, {
  "value": "カウンター",
  "id": "bar",
  "level": 3
}, {
  "value": "テキスト",
  "id": "text",
  "level": 3
}, {
  "value": "リアルタイムイベント",
  "id": "realtime-events",
  "level": 3
}, {
  "value": "リアルタイムアクセス監視",
  "id": "real-time-access-monitoring",
  "level": 3
}, {
  "value": "システム使用状況",
  "id": "system-usage-status",
  "level": 3
}, {
  "value": "ドア制御",
  "id": "door-control",
  "level": 3
}, {
  "value": "ウィジェットデータの更新間隔設定",
  "id": "widget-refresh-interval",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcSet2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSet2) _missingMdxReference("IcSet2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " ダッシュボードは、ユーザーが希望する情報を自由に配置できるカスタムモニタリング画面です。 さまざまなウィジェットを追加して、入退室管理システムの主要情報を業務環境に合わせて構成できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "追加可能なウィジェットの種類は次のとおりです。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "チャート"
          }), "：入退室イベントデータを棒／線／円チャートで可視化"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "カウンター"
          }), "：日次／週次イベント発生数を数値で表示"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "リアルタイムイベント"
          }), "：", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " で発生するすべてのイベントをリアルタイムでモニタリング"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "リアルタイム出入モニタリング"
          }), "：特定デバイスで認証に成功したユーザー情報をリアルタイム表示"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "システム使用状況"
          }), "：ユーザー、デバイス、ドアなどの登録状況を数値で表示"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ドア制御"
          }), "：選択したドアの状態確認とリモート制御"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "テキスト"
          }), "：お知らせやウィジェットタイトルなどのカスタムテキストを配置"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ダッシュボードに配置したウィジェットによって、次のようなメリットが得られます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "カスタム構成"
          }), "：業務に必要な情報だけを選択し、一画面に配置"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "リアルタイムモニタリング"
          }), "：入退室イベントとシステム状態を即時確認"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "直感的なビジュアル化"
          }), "：チャートとカウンターによるデータの視覚的表現"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "効率的な管理"
          }), "：モニタリングと制御機能を統合し、業務効率を向上"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-widgets",
      children: "ウィジェットの追加"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.dashboard"
      }), " にウィジェットを追加して、必要な情報を確認できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.addWidget",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-dashboard-add-widget.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.addNewWidget",
            product: "2"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetType",
            product: "2"
          }), " から希望の項目を選択し、必須項目を入力または設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-dashboard-add-widget-type.png",
          width: 400
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ウィジェットの設定を完了し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ウィジェット表示エリアにウィジェットが作成されたら、サイズを調整するか、希望の位置に配置します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべての設定が完了したら、画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既にウィジェットが追加されている場合は、画面右上の ", (0,jsx_runtime.jsx)(IcSet2, {}), " アイコンをクリックします。 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.dashboardSettings",
          product: "2"
        }), " モードに入ったら、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.addWidget",
          product: "2"
        }), " ボタンをクリックします。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "widget-types",
      children: "ウィジェットの種類"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ウィジェットごとにデフォルトサイズが異なり、デフォルト状態で最も見やすいよう最適化されています。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "すべてのウィジェットは右下をドラッグしてサイズを調整できます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-adjust-win-size.png",
          caption: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chart",
      children: "チャート"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任意のチャートデータを選択して発生したイベント数をチャートで表示できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-chart.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetTypes.chartData",
            product: "2"
          }), "：日次または週次イベント一覧から希望のチャートデータを選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAPBViolation",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAPBViolation",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartType",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.verticalBar",
            product: "2"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.horizontalBar",
            product: "2"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.line",
            product: "2"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartTypes.pie",
            product: "2"
          }), " の中から希望のタイプを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.chartColorSchemes",
            product: "2"
          }), "：5 つのカラースキームから希望の色を選択します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.chartColorSchemes",
          product: "2"
        }), " を選択するときに表示されるチャートの値は実際の値ではなく、プレビュー用の仮の値です。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bar",
      children: "カウンター"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "任意のカウンターデータを選択して発生したイベント数を数値で表示できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-counter.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.widgetTypes.counterData",
            product: "2"
          }), "：日次または週次イベント一覧から希望のカウンターデータを選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.dailyAPBViolation",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessGranted",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAccessDenied",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyCommunicationIssue",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "reportApp.weeklyAPBViolation",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "text",
      children: "テキスト"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.dashboard"
      }), " のウィジェット領域に、ユーザーが希望するテキストを入力して配置できます。 作成後、必要な位置に配置してウィジェットのタイトルやお知らせなどに利用できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-text.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.text",
          product: "2"
        }), " ウィジェットを作成するときに ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.text.removeBackground",
          product: "2"
        }), " オプションを選択すると、背景に透明度が適用されます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "realtime-events",
      children: "リアルタイムイベント"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "で発生するイベントをリアルタイムで表示します。 特定のイベント、ユーザー、ドア、デバイスをフィルタリングしてイベントを確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-real-time-event.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.pause",
            product: "2"
          }), "：リアルタイムイベントを停止できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.play",
            product: "2"
          }), "：停止したリアルタイムイベントを再開できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.clear",
            product: "2"
          }), "：認証履歴をすべて削除できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["別のページに移動してから再度", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.dashboard"
        }), "に戻ると、リストがクリアされてイベントが再び記録されます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-time-access-monitoring",
      children: "リアルタイムアクセス監視"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1 台のデバイスを選択すると、そのデバイスで認証に成功したユーザーのプロフィール写真と情報（", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.user",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.date",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.device",
        product: "2"
      }), "）をリアルタイムで表示します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-checkpoint.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.pause",
            product: "2"
          }), "：リアルタイム出入モニタリングを停止できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.play",
            product: "2"
          }), "：停止したリアルタイム出入モニタリングを再開できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.clear",
            product: "2"
          }), "：認証履歴をすべて削除できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.checkpoint",
          product: "2"
        }), " には最大 5 名まで記録されます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-usage-status",
      children: "システム使用状況"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar X のさまざまな利用状況を数値で表示します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-system-usage.png",
      caption: true,
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["表示可能な ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.widgetTypes.systemUsage",
        product: "2"
      }), " は次のとおりです。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.users",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.cards",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.fingerprint",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.visualFace",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.face",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.qrBarcode",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.mobileAccessCard",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.devices",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.doors",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.zones",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.accessGroups",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.userGroups",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.systemUsage.deviceGroups",
          product: "2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "door-control",
      children: "ドア制御"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1 つのドアを選択して、そのドアの状態を確認および制御できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-door-control.png",
      caption: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.doorControl.actionsBtn",
        product: "2"
      }), " ボタンで制御できる項目は次のとおりです。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.open",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.normalize",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.lock",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.unlock",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.clearAlarm",
          product: "2"
        }), ", ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.doorControl.actions.clearAPB",
          product: "2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.widgetTypes.doorControl",
          product: "2"
        }), " ウィジェットの名前はドア名で自動設定され、変更できません。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "widget-refresh-interval",
      children: "ウィジェットデータの更新間隔設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ダッシュボードに追加したウィジェットのデータ更新間隔を設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(IcSet2, {}), " アイコンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.dashboardSettings",
            product: "2"
          }), " モードに入ったら、画面下部の一般設定で", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.autoRefreshInterval",
            product: "2"
          }), "を設定します。"]
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