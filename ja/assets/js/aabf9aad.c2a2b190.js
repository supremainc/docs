"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["16433"], {
34255: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_virtual_device_event_log_mdx_aab_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-virtual-device-event-log-mdx-aab.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_virtual_device_event_log_mdx_aab_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-virtual-device-event-log","title":"仮想デバイスのイベントログを連携する","description":"仮想デバイスを登録し、外部システムで発生したイベントログを BioStar X に記録する方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-virtual-device-event-log.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-virtual-device-event-log","permalink":"/docs/ja/platform/biostar_x/settings-virtual-device-event-log","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-virtual-device-event-log.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-virtual-device-event-log","title":"仮想デバイスのイベントログを連携する","description":"仮想デバイスを登録し、外部システムで発生したイベントログを BioStar X に記録する方法を説明します。","keywords":["仮想デバイス","イベントログ","API","連携"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"リモートアクセスを設定する","permalink":"/docs/ja/platform/biostar_x/settings-remote-access"},"next":{"title":"プラグイン","permalink":"/docs/ja/platform/biostar_x/plugins"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-virtual-device-event-log.mdx


const frontMatter = {
	id: 'settings-virtual-device-event-log',
	title: '仮想デバイスのイベントログを連携する',
	description: '仮想デバイスを登録し、外部システムで発生したイベントログを BioStar X に記録する方法を説明します。',
	keywords: [
		'仮想デバイス',
		'イベントログ',
		'API',
		'連携'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "いつ使用しますか？",
  "id": "いつ使用しますか",
  "level": 2
}, {
  "value": "開始する前に",
  "id": "開始する前に",
  "level": 2
}, {
  "value": "仮想デバイスを登録する",
  "id": "仮想デバイスを登録する",
  "level": 2
}, {
  "value": "デバイスグループを管理する",
  "id": "デバイスグループを管理する",
  "level": 3
}, {
  "value": "仮想デバイスの制限事項",
  "id": "仮想デバイスの制限事項",
  "level": 3
}, {
  "value": "API でイベントログを記録する",
  "id": "api-でイベントログを記録する",
  "level": 2
}, {
  "value": "対応イベントタイプ",
  "id": "対応イベントタイプ",
  "level": 3
}, {
  "value": "API パラメーター",
  "id": "api-パラメーター",
  "level": 3
}, {
  "value": "イベントログを照会する",
  "id": "イベントログを照会する",
  "level": 2
}, {
  "value": "監査トレイル​",
  "id": "監査トレイル",
  "level": 2
}, {
  "value": "トラブルシューティング",
  "id": "トラブルシューティング",
  "level": 2
}, {
  "value": "<Cmd class=\"normal\"></Cmd> ボタンが表示されない場合",
  "id": "-ボタンが表示されない場合",
  "level": 3
}, {
  "value": "API 呼び出しが失敗する場合",
  "id": "api-呼び出しが失敗する場合",
  "level": 3
}, {
  "value": "イベントが照会されない場合",
  "id": "イベントが照会されない場合",
  "level": 3
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
  }, {Cmd, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["仮想デバイス機能を使用すると、勤怠管理機能を連携する際にモバイルアプリや他社サービスで発生した出勤・退勤などのイベントを ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " に直接記録できます。 実際の物理デバイスがなくてもイベントログを体系的に管理できるため、外部システムとの連携に役立ちます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "いつ使用しますか",
      children: "いつ使用しますか？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "次のような場合に仮想デバイスのイベントログ連携機能を使用してください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["外部勤怠管理システムのイベントを ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " で統合管理する必要がある場合"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["モバイルアプリや外部システムで発生した入退記録（Punch Log）を ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " に直接保存する必要がある場合（データベース連携なしで出勤／退勤イベントを記録）"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["他社アプリケーションやサービスから ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " API を通じて直接イベントを送信する必要がある場合"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "開始する前に",
      children: "開始する前に"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["「イベントログ API」ライセンスが有効になっている必要があります。 ライセンスポリシーの詳細は", (0,jsx_runtime.jsx)(_components.a, {
        href: "licensing#features-add-ons",
        children: "次のドキュメント"
      }), "を参照してください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ライセンスの適用については", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-license-biostar-x-license",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "仮想デバイスを登録する",
      children: "仮想デバイスを登録する"
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
          children: ["画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.root"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイス一覧で画面右上の ", (0,jsx_runtime.jsx)(IcMoreW, {}), " ボタンをクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.addVirtualDevice",
            product: "2"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-device-add-virtual-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.addVirtualDevice",
            product: "2"
          }), " 画面が表示されたら設定情報を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-device-add-virtual-device-settings.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.name",
                product: "2"
              }), "：仮想デバイスの名前を入力します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.group",
                product: "2"
              }), "：仮想デバイスを割り当てるグループを選択します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.deviceId",
                product: "2"
              }), "：仮想デバイスの固有 ID を入力します。 既存のデバイス ID と重複しない範囲で指定する必要があります。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.description",
                product: "2"
              }), "：仮想デバイスに関する説明を入力します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["仮想デバイスを登録するには、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.deviceId",
              product: "2"
            }), " は 100000〜999999 の範囲で指定できます。 既存の Suprema デバイス ID と重複しない範囲で指定する必要があります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["既に作成された ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.deviceId",
              product: "2"
            }), " の値は変更できません。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "デバイスグループを管理する",
      children: "デバイスグループを管理する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仮想デバイスも通常のデバイスと同様にデバイスグループ機能を使用できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "既存のデバイスと同じグループに配置できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "グループ権限があれば、そのグループ内の仮想デバイスにも権限を付与できます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["デバイスグループの詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-manage-device-group",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "仮想デバイスの制限事項",
      children: "仮想デバイスの制限事項"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仮想デバイスは次のメニューにのみ表示されます。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shell.header.setting"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.menu.device.root"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shell.header.arena"
              }), " メニューのすべてのイベントログ閲覧およびイベントログプレビュー"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "shell.header.data"
              }), " メニューのイベントログ閲覧"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["仮想デバイスは、ドアおよび ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.advancedAc.root"
          }), " で入退室制御機能を使用できません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " 用のデバイスとして指定できません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " メニューのサイドバーにはデバイス一覧として表示されません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "デバイス制御機能は使用できません。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "「マルチコミュニケーションサーバー」ライセンスのデバイス数には含まれません。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-でイベントログを記録する",
      children: "API でイベントログを記録する"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "対応イベントタイプ",
      children: "対応イベントタイプ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "次のイベントタイプのみ記録できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "入退室許可"
          }), " (Access granted：", (0,jsx_runtime.jsx)(_components.code, {
            children: "4088"
          }), ")"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "入退室拒否"
          }), " (Access denied：", (0,jsx_runtime.jsx)(_components.code, {
            children: "6400"
          }), ")"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-パラメーター",
      children: "API パラメーター"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "イベントログを記録するときは、次のパラメーターを指定する必要があります。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "パラメーター"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "説明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必須かどうか"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dev_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "登録済みの仮想デバイス ID のみ許可"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必須"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "evt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access Granted または Access Denied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必須"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "datetime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "イベント発生時刻"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必須"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "user_id"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ユーザーID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必須"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tna_key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定された値のみ入力可能"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "任意"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        metastring: "title='Request example'",
        children: "{\n    \"packet_device_id\" : 100003, // required\n    \"is_virtual_device\" : \"true\", // required\n    \"events\":[ //4088 access granted, 6400 access denied\n        {\n            \"dev_id\": 100003, // required\n            \"evt\": 6400, // required\n            \"datetime\": \"2025-08-21T14:12:00Z\", // required\n            \"user_id\": \"2\", // required\n            \"tna_key\": \"1\"\n        },\n        {\n            \"dev_id\": 100003,\n            \"evt\": 6400,\n            \"datetime\": \"2025-08-21T14:13:01Z\",\n            \"user_id\": \"2\",\n            \"tna_key\": \"1\"\n        }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        metastring: "title='Response example'",
        children: "{\n    \"Response\": {\n        \"code\": \"0\",\n        \"link\": \"https://support.supremainc.com/en/support/home\",\n        \"message\": \"Success\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "単一 API 呼び出しで 1 つの仮想デバイスに対して複数のイベントログを一度に記録できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["API の利用に関する詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../api/bsxapi#tag/Virtual-Device-and-Event-Import",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "イベントログを照会する",
      children: "イベントログを照会する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仮想デバイスで記録したイベントログはメニューで照会できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), "：すべてのイベントの照会とフィルター、イベントプレビュー"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), "：すべてのイベントの照会とフィルター"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.arena"
            }), " メニューでのイベント照会の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-event",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.data"
            }), " メニューの詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "data-generate-reports",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "監査トレイル",
      children: "監査トレイル​"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "イベントログを記録すると、次の例のように監査トレイルが記録されます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Access Granted, 2025/08/05 03:37:49, 12階出入口 外部, Administrator(1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "イベントを一括して記録しても、イベントごとに個別の監査トレイル項目が生成されます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.system.auditTrail"
            }), " の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-audit-trail",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "トラブルシューティング",
      children: "トラブルシューティング"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "-ボタンが表示されない場合",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.addVirtualDevice",
        product: "2",
        className: "normal"
      }), " ボタンが表示されない場合"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "「イベントログ API」ライセンスが有効になっているか確認してください。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-呼び出しが失敗する場合",
      children: "API 呼び出しが失敗する場合"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "「イベントログ API」ライセンスが有効になっているか確認してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "登録されているデバイス ID が仮想デバイスであることを確認してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API パラメーター形式が正しいか確認してください。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "イベントが照会されない場合",
      children: "イベントが照会されない場合"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "記録したデバイスが正しい仮想デバイス ID であることを確認してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "イベントフィルターで該当の仮想デバイスが選択されているか確認してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "イベント記録時にエラーが発生していないか監査トレースを確認してください。"
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