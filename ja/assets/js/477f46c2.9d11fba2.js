"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["33483"], {
77708: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_rule_mdx_477_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-videos-rule-mdx-477.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_rule_mdx_477_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-videos-rule","title":"ビデオルールを設定する","description":"BioStar X で VMS と連携してビデオルールを設定する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos-rule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-videos-rule","permalink":"/docs/ja/platform/biostar_x/settings-videos-rule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-videos-rule.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-videos-rule","title":"ビデオルールを設定する","description":"BioStar X で VMS と連携してビデオルールを設定する方法を案内します。","keywords":["カメラ","ルール","設定"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"カメラを設定する","permalink":"/docs/ja/platform/biostar_x/settings-videos-camera"},"next":{"title":"マップ管理","permalink":"/docs/ja/platform/biostar_x/settings-map-management"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos-rule.mdx


const frontMatter = {
	id: 'settings-videos-rule',
	title: 'ビデオルールを設定する',
	description: 'BioStar X で VMS と連携してビデオルールを設定する方法を案内します。',
	keywords: [
		'カメラ',
		'ルール',
		'設定'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "ルール追加",
  "id": "add-camera-rule",
  "level": 2
}, {
  "value": "ルール情報の入力",
  "id": "ルール情報の入力",
  "level": 3
}, {
  "value": "ビデオログ設定",
  "id": "ビデオログ設定",
  "level": 3
}, {
  "value": "VMSに記録するイベントの設定",
  "id": "vmsに記録するイベントの設定",
  "level": 3
}, {
  "value": "ドアとカメラの連携",
  "id": "link-door-camera",
  "level": 3
}, {
  "value": "ルールの編集",
  "id": "edit-rule",
  "level": 2
}, {
  "value": "ルールの削除",
  "id": "ルールの削除",
  "level": 2
}, {
  "value": "リスト列を設定する",
  "id": "リスト列を設定する",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
  }, {Cmd, IcMoreW, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ルールは、カメラとドアで発生したイベントを組み合わせ、VMSサーバーにイベントおよびブックマーク形式で送信するための設定です。 適切にビデオルールを設定することで、次のようなセキュリティ管理機能を活用できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "自動ブックマーク生成"
          }), "：特定の入退室イベントが発生した際に自動でブックマークを作成し、重要な映像を簡単に検索できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "効率的なモニタリング"
          }), "：ドアに接続されたカメラ映像をリアルタイムで監視し、イベント発生時に即座に確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "統合イベント管理"
          }), "：入退室イベントと映像を連携し、セキュリティ状況を総合的に把握できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ビデオルール機能は、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "アドバンス"
        }), "（Advanced）ライセンス以上で追加オプションとして利用できます。 ライセンスポリシーの詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-camera-rule",
      children: "ルール追加"
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
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addRule.button",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "video.rule.addRule.title",
        product: "2"
      }), " 画面が表示されたら、以下の案内に従ってルールを設定します。 画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " ボタンをクリックして、すべての設定を完了し保存します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ルール情報の入力",
      children: "ルール情報の入力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "video.rule.detail.information.title",
        product: "2"
      }), " セクションで、新しいルールの名前と説明を入力します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-info.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "video.rule.detail.description",
          product: "2"
        }), " 項目は任意です。 ルールの用途や特徴を把握しやすいように、簡単な説明を入力してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ビデオログ設定",
      children: "ビデオログ設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "video.addRule.label.videoLog",
        product: "2"
      }), " は、特定のイベント発生前後の映像を自動で記録する機能です。 イベント発生前後の状況を把握できるよう、指定した時間の映像を保存します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-video-log.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addRule.label.videoLog",
            product: "2"
          }), "：現在のルールで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addRule.label.videoLog",
            product: "2",
            className: "normal"
          }), " 機能を使用するかどうかを設定します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "video.addRule.label.enabled",
                product: "2"
              }), "：イベント発生時に前後の映像を自動で記録します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "video.addRule.label.disabled",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "video.addRule.label.videoLog",
                product: "2",
                className: "normal"
              }), " 機能を無効にします。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.addRule.label.videoLogLength",
            product: "2"
          }), "：イベント発生時刻を基準に、10秒前後の映像を記録する範囲を設定します。 最大で60秒まで設定できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "video.addRule.label.videoLogLength",
          product: "2"
        }), " で設定した範囲が長いほど、多くの保存容量が必要になる場合があります。 システム性能と保存容量を考慮して、適切な長さを設定してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vmsに記録するイベントの設定",
      children: "VMSに記録するイベントの設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "video.rule.detail.event.title",
        product: "2"
      }), " セクションでは、VMSサーバーに記録するイベントを選択し、ブックマークまたはイベント送信の有無を設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-event.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.detail.event.itemName",
            product: "2"
          }), "：VMSサーバーへ送信するイベントタイプを選択します。 左側のイベントリストで目的のイベントを選択すると、右側のリストに追加されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.detail.vmsBookmark.itemName",
            product: "2"
          }), "：イベントリストで選択したイベントが発生した際に、VMSサーバーにブックマークを作成するかどうかを設定できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.detail.vmsEvent.itemName",
            product: "2"
          }), "：イベントリストで選択したイベントが発生した際に、VMSサーバーにイベント記録を作成するかどうかを設定できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "イベントの選択は必須ではありません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "左側のイベントリスト上部の検索フィールドを使用して、目的のイベントを素早く検索できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["右側のリストからイベントを削除するには、", (0,jsx_runtime.jsx)(IcTrash2, {}), " ボタンをクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ブックマークおよびイベントをVMSサーバーに送信する際、メッセージの言語を設定できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-video-integration#vms-event-bookmark",
              children: "次の文書"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "link-door-camera",
      children: "ドアとカメラの連携"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "video.rule.detail.doorCameraLinkage.title",
        product: "2"
      }), " セクションでは、ドアとカメラを連携し、ドアでイベントが発生した際に接続されたカメラの映像と共にVMSサーバーへ送信できます。 これにより、入退室イベントに関連する映像を容易に確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-connect-door.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.detail.doorCameraLinkage.popup.title",
            product: "2"
          }), " ウィンドウが表示されたら、ドアを選択し、そのドアに関連付けるカメラを選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-add-rule-connect-door-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ドアとカメラをすべて選択したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "リストでドアに連携されたカメラを確認できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-video-add-rule-connect-door-complete.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "1つのドアには最大4台のカメラを追加できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "1つのルールに含まれたドアは、他のルールでは使用できません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドアとカメラの連携ルールを削除するには、リストで削除したい項目のチェックボックスをクリックし、右上の ", (0,jsx_runtime.jsx)(IcTrash2, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.delete",
              product: "2"
            }), " ボタンをクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドアと連携されたカメラは、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.arena"
            }), " ページのドアリストでドアのサブツリーとして確認できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "check-door-status#door-tree-structure",
              children: "次の文書"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " ボタンをクリックして、すべての設定を完了し保存します。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edit-rule",
      children: "ルールの編集"
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
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.header.all.rules",
            product: "2"
          }), " リストで編集したいルールをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ルール編集画面が表示されたら、必要な項目を修正します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["編集したルールを保存するには、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ルール編集画面の各セクションの詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "#add-camera-rule",
          children: "次の文書"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ルールの削除",
      children: "ルールの削除"
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
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.header.all.rules",
            product: "2"
          }), " リストで削除したいルールのチェックボックスをクリックします。 1つ以上のルールを選択できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上にある ", (0,jsx_runtime.jsx)(IcTrash2, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "video.rule.delete",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メッセージを確認し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "リスト列を設定する",
      children: "リスト列を設定する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "リストで表示する列を追加、順序を変更、または非表示に設定できます。"
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
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.video.video"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "video.header.all.rules",
            product: "2"
          }), " リストの右上で ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "columnSetting.dialog.header",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "columnSetting.dialog.header",
            product: "2"
          }), " ウィンドウが表示されたら、表示する列のチェックボックスをクリックして追加または非表示設定ができます。 ドラッグ＆ドロップで列の順序を変更することもできます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-video-column-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["列設定をすべて変更したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.ok",
            product: "2"
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