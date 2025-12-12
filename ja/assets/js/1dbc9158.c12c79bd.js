"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["72549"], {
65130: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_event_mdx_1db_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-monitoring-event-mdx-1db.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_event_mdx_1db_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-event","title":"イベントをモニタリングする​","description":"イベントモニタリング機能を使用し、リアルタイムイベントを確認および管理する方法を案内します。 アラームイベント、警告イベント、フィルタリングや状態管理など、さまざまな機能を活用してイベントを効率的に処理します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-event.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-event","permalink":"/docs/ja/platform/biostar_x/monitoring-event","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-event.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-event","title":"イベントをモニタリングする​","description":"イベントモニタリング機能を使用し、リアルタイムイベントを確認および管理する方法を案内します。 アラームイベント、警告イベント、フィルタリングや状態管理など、さまざまな機能を活用してイベントを効率的に処理します。","keywords":["モニタリング","イベントモニタリング","リアルタイムイベント","アラームイベント","警告イベント","イベントフィルタリング"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ビデオをモニタリングする","permalink":"/docs/ja/platform/biostar_x/monitoring-video"},"next":{"title":"データ","permalink":"/docs/ja/platform/biostar_x/how-to-guide-data"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-event.mdx


const frontMatter = {
	id: 'monitoring-event',
	title: 'イベントをモニタリングする​',
	description: 'イベントモニタリング機能を使用し、リアルタイムイベントを確認および管理する方法を案内します。 アラームイベント、警告イベント、フィルタリングや状態管理など、さまざまな機能を活用してイベントを効率的に処理します。',
	keywords: [
		'モニタリング',
		'イベントモニタリング',
		'リアルタイムイベント',
		'アラームイベント',
		'警告イベント',
		'イベントフィルタリング'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*예시 이미지 추가*/
/*알림 이벤트와 경고 이벤트의 차이*/


const toc = [{
  "value": "イベント一覧を確認する",
  "id": "event-list",
  "level": 2
}, {
  "value": "色によるイベント区分",
  "id": "event-color",
  "level": 2
}, {
  "value": "アラームイベントの確認",
  "id": "alarm-event",
  "level": 2
}, {
  "value": "リアルタイムイベント",
  "id": "real-time-event",
  "level": 2
}, {
  "value": "イベントのフィルタリング",
  "id": "filter-event",
  "level": 2
}, {
  "value": "フィルター適用",
  "id": "apply-filter",
  "level": 3
}, {
  "value": "フィルタリング解除",
  "id": "removefilter",
  "level": 3
}, {
  "value": "イベント一覧をクリア",
  "id": "cleareventlist",
  "level": 2
}, {
  "value": "アラームの確認および措置内容の記録",
  "id": "acknowledge-alarm-and-record-action",
  "level": 2
}, {
  "value": "アラームイベントへの措置内容の記録",
  "id": "recordactionforalarmevent",
  "level": 3
}, {
  "value": "アラームイベントの認知保留",
  "id": "deferalarmeventacknowledgment",
  "level": 3
}, {
  "value": "イベント一覧でアラームイベントを確認",
  "id": "イベント一覧でアラームイベントを確認",
  "level": 3
}, {
  "value": "未確認のアラームイベントを表示する",
  "id": "未確認のアラームイベントを表示する",
  "level": 2
}, {
  "value": "イベント一覧の列設定",
  "id": "イベント一覧の列設定",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAlarm, IcClose, IcFilter, IcMoreB, IcPause, IcPlay, IcVidLog, IcViewAlert, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAlarm) _missingMdxReference("IcAlarm", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcFilter) _missingMdxReference("IcFilter", true);
  if (!IcMoreB) _missingMdxReference("IcMoreB", true);
  if (!IcPause) _missingMdxReference("IcPause", true);
  if (!IcPlay) _missingMdxReference("IcPlay", true);
  if (!IcVidLog) _missingMdxReference("IcVidLog", true);
  if (!IcViewAlert) _missingMdxReference("IcViewAlert", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["モニタリングページの画面下部にある ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " セクションで、リアルタイムで発生するイベントを確認および管理できます。 イベントの状態、アラームイベント処理、フィルタリング、色分けなど多様な機能により、イベントを効率的に管理できます。 特に、ドア、デバイス、ユーザーに関連するイベントをリアルタイムでモニタリングし、必要な対応を迅速に行えます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "event-list",
      children: "イベント一覧を確認する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " セクションでは、発生したイベントをリアルタイムで確認できます。 イベントには次の情報が含まれます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-details.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.date"
          }), "：イベントが発生した日時です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.door"
          }), "：イベントが発生したドアです。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.device"
          }), "：イベントが発生したデバイスです。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.user"
          }), "：イベントを発生させたユーザーです。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.event"
          }), "：イベントの詳細内容です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.status"
          }), "：イベントの状態です。 アクティブなイベントの場合、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.preview.event.active"
          }), " 状態で表示されます。 アラームイベントには ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), " ボタンが表示されます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), " ボタンをクリックすると、該当イベントが解除されます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-alarm-active.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.view"
          }), "：イベントに扉に接続されたカメラの映像情報が含まれている場合、ビデオアイコン(", (0,jsx_runtime.jsx)(IcVidLog, {}), ")が表示されます。 アイコンをクリックすると映像を確認できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "個別のイベントをクリックすると、画面右側に詳細情報が表示されます。 詳細情報には、イベント発生日時とエリア、ドア、デバイス、ユーザーグループ、ユーザー、ポート、イベントの詳細が含まれます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "イベントにドアに接続されたカメラの映像または画像情報が含まれている場合、ビデオおよびイメージログも確認できます。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "event-color",
      children: "色によるイベント区分"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "イベント一覧に表示されるイベントは色分けで区別できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-types.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "色なし"
          }), "：通常イベントです。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              color: '#ffa200'
            },
            children: "オレンジ"
          }), "：注意イベントです。 アクセスが許可されていないエリアにユーザーが入ろうとした場合や、ドアが開いたままの場合など、注意が必要なイベントです。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              color: '#ff0000'
            },
            children: "赤"
          }), "：", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#alarm",
            children: "アラーム"
          }), "イベントです。 システムで発生したイベントのうち、対応が必要な警告イベントです。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              color: '#6dae00'
            },
            children: "緑"
          }), "：解除されたアラームイベントです。"]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alarm-event",
      children: "アラームイベントの確認"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " セクションの一覧でアラームイベントのみを確認できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " セクション右上の ", (0,jsx_runtime.jsx)(IcAlarm, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.toolbar.alarmEvents"
      }), " ボタンをクリックします。 イベント一覧にはアラームイベントのみが表示されます。 アラームイベントは赤色で表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-view-only-alarm.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.eventTable.title"
        }), " セクション右上の ", (0,jsx_runtime.jsx)(IcAlarm, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.eventTable.toolbar.allEvents"
        }), " ボタンをクリックすると、アラームイベントを含むすべてのイベントを確認できます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-time-event",
      children: "リアルタイムイベント"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " セクションのイベント一覧では、リアルタイムで発生するイベントを確認できます。 リアルタイムイベントを停止するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " セクション右上の ", (0,jsx_runtime.jsx)(IcPause, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.toolbar.pause"
      }), " ボタンをクリックします。 ", (0,jsx_runtime.jsx)(IcPlay, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.toolbar.play"
      }), " ボタンをクリックすると、リアルタイムイベントを再開します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-pause.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filter-event",
      children: "イベントのフィルタリング"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "apply-filter",
      children: "フィルター適用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーが希望する条件でイベント一覧をフィルタリングできます。 これにより、目的の条件に合ったイベントを素早く確認できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " セクション一覧の各ヘッダー列で ", (0,jsx_runtime.jsx)(IcFilter, {}), " アイコンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-filter-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "フィルターウィンドウが表示されたら、左側の一覧から目的の項目をクリックします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-filter-02.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["選択した項目を解除するには、", (0,jsx_runtime.jsx)("span", {
            className: "text-blue-500",
            children: (0,jsx_runtime.jsx)(IcClose, {})
          }), " ボタンをクリックします。 すべての項目を解除するには ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.removeAll"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべての設定が完了したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "イベント一覧には設定した条件のイベントのみが表示されます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "フィルターウィンドウの検索入力フィールドを使って目的の項目を素早く検索することもできます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["各ヘッダー列ごとに複数の条件を設定できます。 1つ以上の条件を設定すると、", (0,jsx_runtime.jsx)(_components.code, {
              children: "AND"
            }), " 条件が適用されます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ヘッダー列ごとにフィルタリング可能な項目は異なる場合があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["フィルター条件を設定すると、ヘッダー列の ", (0,jsx_runtime.jsx)("span", {
              className: "text-blue-500",
              children: (0,jsx_runtime.jsx)(IcFilter, {})
            }), " アイコンの色が青に変わります。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removefilter",
      children: "フィルタリング解除"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "適用したフィルター条件を解除できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " セクション一覧でフィルターが適用されているヘッダー列の ", (0,jsx_runtime.jsx)("span", {
            className: "text-blue-500",
            children: (0,jsx_runtime.jsx)(IcFilter, {})
          }), " アイコンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["フィルターウィンドウが表示されたら、右側の一覧で解除したい項目の右側にある ", (0,jsx_runtime.jsx)("span", {
            className: "text-blue-500",
            children: (0,jsx_runtime.jsx)(IcClose, {})
          }), " ボタンをクリックします。 すべてのフィルターを解除するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.removeAll"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-filter-02.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["解除する条件をすべて設定したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "フィルターウィンドウの検索入力フィールドを使って目的の項目を素早く検索することもできます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "フィルター条件が解除されると、ヘッダー列のアイコンの色が元に戻ります。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cleareventlist",
      children: "イベント一覧をクリア"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " セクションの一覧からイベントを削除できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " セクション右上の ", (0,jsx_runtime.jsx)(IcMoreB, {}), " ボタンをクリックし、ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.clearEvents"
      }), " を選択します。 イベント一覧に不要なイベントが大量に溜まっている場合は、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.clearEvents"
      }), " 機能を使用して整理できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-remove.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acknowledge-alarm-and-record-action",
      children: "アラームの確認および措置内容の記録"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ドアの強制開放などのアラームイベントが発生すると、アラームメッセージウィンドウが表示されます。 アラームメッセージウィンドウには、発生したアラームイベントの詳細が含まれます。 このとき管理者は、発生したアラームイベントの認知状況と措置内容を記録できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-alert-message.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "common.ignoreAll"
        }), " ボタンは、アラームイベントが2件以上発生した場合にのみ表示されます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recordactionforalarmevent",
      children: "アラームイベントへの措置内容の記録"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["メッセージ入力フィールドにアラームイベントへの措置内容を入力します。 最大500文字まで入力できます。 措置内容を入力して ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " ボタンをクリックします。 アラームイベントの認知状況と措置内容が記録されます。 アラームメッセージウィンドウが閉じられます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deferalarmeventacknowledgment",
      children: "アラームイベントの認知保留"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.ignore"
      }), " ボタンをクリックして、アラームイベントの認知を保留することもできます。 対応事項を記録できます。 アラームメッセージウィンドウが閉じられます。 保留したアラームイベントはイベント一覧で ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.preview.event.active"
      }), " 状態で表示され、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " ボタンを使用できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-list-alarm-active.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "イベント一覧でアラームイベントを確認",
      children: "イベント一覧でアラームイベントを確認"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["イベント一覧の ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.status"
      }), " 列に表示される ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " ボタンをクリックすると、発生したアラームイベントの認知状況と措置内容を記録できます。 入力を完了し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.acknowledge"
      }), " ボタンをクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-event-alert-acknowledge.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "未確認のアラームイベントを表示する",
      children: "未確認のアラームイベントを表示する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "まだ確認していないアラームイベントを一度に確認し、対応事項を記録できる機能を提供します。 同じアラームイベントが複数発生した場合に有用です。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " セクション右上の ", (0,jsx_runtime.jsx)(IcViewAlert, {}), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-view-alerts-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.activeAlarm.activeAlarmEvents"
          }), " ウィンドウが表示されたら、左側の一覧で措置内容を記録するアラームイベントを選択します。 すべてのイベントを選択するには、ヘッダー列一番左のチェックボックスをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-view-alerts-02.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.activeAlarm.memo"
          }), " 入力フィールドにアラームイベントへの措置内容を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.acknowledge"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "選択したイベントに対する対応事項を記録します。 アラームイベントのポップアップウィンドウが閉じられます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["アラームイベント一覧で1件以上のイベントを選択すると、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.acknowledge"
        }), " ボタンが有効になります。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "イベント一覧の列設定",
      children: "イベント一覧の列設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "イベント一覧で表示する列を追加したり、順序変更や非表示設定ができます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.title"
          }), " セクション右上で ", (0,jsx_runtime.jsx)(IcMoreB, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.columnLayout"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-column-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.eventTable.columnLayout"
          }), " ウィンドウが表示されたら、表示する列のチェックボックスをクリックして追加または非表示設定ができます。 ドラッグ＆ドロップで列の順序を変更することもできます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-monitoring-event-list-column-layout-popup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["列設定をすべて変更したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["列設定を初期化するには、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "columnSetting.button.defaultColumn",
          product: "2"
        }), " をクリックします。"]
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