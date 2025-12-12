"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["64876"], {
24725: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_check_door_status_mdx_ee4_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-check-door-status-mdx-ee4.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_check_door_status_mdx_ee4_namespaceObject = JSON.parse('{"id":"platform/biostar_x/check-door-status","title":"ドア状態を確認","description":"ドアの状態をリアルタイムで監視し、セキュリティシステムを安定的に運用できます。 また、ドアに割り当てられたデバイスの異常状態も確認できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/check-door-status.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/check-door-status","permalink":"/docs/ja/platform/biostar_x/check-door-status","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/check-door-status.mdx","tags":[],"version":"current","frontMatter":{"id":"check-door-status","title":"ドア状態を確認","description":"ドアの状態をリアルタイムで監視し、セキュリティシステムを安定的に運用できます。 また、ドアに割り当てられたデバイスの異常状態も確認できます。","keywords":["モニタリング","ドア"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ドアをモニタリング","permalink":"/docs/ja/platform/biostar_x/monitoring-door"},"next":{"title":"出入ドアを制御する","permalink":"/docs/ja/platform/biostar_x/control-door"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/door-tree.json
var door_tree_namespaceObject = JSON.parse('[{"name":"すべてのドアグループ","children":[{"name":"ドアグループ A","type":"door-group","children":[{"name":"ドア","type":"door-device","children":[{"name":"ドアセンサー","type":"door-sensor"},{"name":"ドアリレー","type":"door-relay"},{"name":"警備状態","type":"door-arm"},{"name":"カメラ","type":"door-camera"}]}]}]},{"name":"すべてのエレベーターグループ","type":"elevator","children":[{"name":"エレベーターグループ B","type":"elevator-group","children":[{"name":"エレベーター 1","type":"elevator-device","children":[{"name":"エレベーター 1 - 1階","type":"elevator-floor"},{"name":"エレベーター 1 - 2階","type":"elevator-floor"}]}]}]},{"name":"すべての高度アクセス制御","type":"access-control","children":[{"name":"アクセス制御設定","type":"access-zone"}]}]')
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/check-door-status.mdx


const frontMatter = {
	id: 'check-door-status',
	title: 'ドア状態を確認',
	description: 'ドアの状態をリアルタイムで監視し、セキュリティシステムを安定的に運用できます。 また、ドアに割り当てられたデバイスの異常状態も確認できます。',
	keywords: [
		'モニタリング',
		'ドア'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "開始する前に",
  "id": "開始する前に",
  "level": 2
}, {
  "value": "ツリー構造を確認",
  "id": "door-tree-structure",
  "level": 2
}, {
  "value": "状態を確認",
  "id": "状態を確認",
  "level": 2
}, {
  "value": "接続エラーとアラームを確認",
  "id": "check-the-error-status",
  "level": 3
}, {
  "value": "ドアのロックを確認",
  "id": "check-the-door-lock",
  "level": 3
}, {
  "value": "カメラの状態を確認",
  "id": "check-the-camera-status",
  "level": 3
}, {
  "value": "セキュリティ状態を確認",
  "id": "check-the-security-status",
  "level": 3
}, {
  "value": "エレベーター状態を確認",
  "id": "エレベーター状態を確認",
  "level": 3
}, {
  "value": "グループリストの展開/折りたたみ",
  "id": "グループリストの展開折りたたみ",
  "level": 2
}, {
  "value": "最上位グループ",
  "id": "最上位グループ",
  "level": 3
}, {
  "value": "サブグループ",
  "id": "サブグループ",
  "level": 3
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAlert, IcArm, IcCamFail, IcCamOk, IcDisable, IcDisarm, IcErr, IcRelayLock, IcRelayUnlock, Image, StatusNormal, StatusOK, Treeview} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAlert) _missingMdxReference("IcAlert", true);
  if (!IcArm) _missingMdxReference("IcArm", true);
  if (!IcCamFail) _missingMdxReference("IcCamFail", true);
  if (!IcCamOk) _missingMdxReference("IcCamOk", true);
  if (!IcDisable) _missingMdxReference("IcDisable", true);
  if (!IcDisarm) _missingMdxReference("IcDisarm", true);
  if (!IcErr) _missingMdxReference("IcErr", true);
  if (!IcRelayLock) _missingMdxReference("IcRelayLock", true);
  if (!IcRelayUnlock) _missingMdxReference("IcRelayUnlock", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusNormal) _missingMdxReference("StatusNormal", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  if (!Treeview) _missingMdxReference("Treeview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドアの状態をリアルタイムで監視し、セキュリティシステムを安定的に運用できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " が提供するステータスアイコンでドアに割り当てられたデバイスの異常状態を一目で確認し、問題発生時に即座に対応してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " をクリックするか、画面左上のショートカットリストから ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " を選択してください。 画面左のサイドバーにある ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.door.title"
      }), " タブで各ドアの状態を確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "開始する前に",
      children: "開始する前に"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ドアに接続されたデバイスが正しく構成されているか確認してください。 デバイスがネットワークに接続され、最新ファームウェアに更新されているか確認することが重要です。 問題が発生した場合は、まずデバイスの電源状態とネットワーク接続を確認してください。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["デバイスの追加と構成の詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-devices",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドアの追加と構成の詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-door",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドアの状態をモニタリングまたは制御するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.logUploadType",
              product: "2"
            }), " 機能を有効にする必要があります。 この機能は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.server.root"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.server.server"
            }), " のメニュー経路にある ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.general",
              product: "2"
            }), " セクションで有効化できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["VMSサーバーと連携してカメラをドアに紐付ける機能は、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "アドバンス"
            }), " (Advanced) 以上のライセンスで追加オプションとして利用できます。 ライセンスポリシーの詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-tree-structure",
      children: "ツリー構造を確認"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画面左のサイドバーにある ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.door.title"
      }), " タブのツリーは次のような構成です。"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(Treeview, {
      data: door_tree_namespaceObject
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["デバイスの追加と構成の詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-devices",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドアの追加と構成の詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-door",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["エレベーターの追加と構成の詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-elevators",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["高度アクセス制御設定の詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-advanced-ac",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドアとカメラを連携するには", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状態を確認",
      children: "状態を確認"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-error-status",
      children: "接続エラーとアラームを確認"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ドアまたはエレベーターの状態を確認して、正常に動作しているか把握できます。 各アイコンの状態は以下を参照してください。"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "ステータスアイコン"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcErr, {
                width: "35px",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイスの切断、通信サーバーエラー、同期エラーなどのデバイス異常状態を表示します。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcAlert, {
                width: "40px",
                height: "40px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ドアアラーム（強制開扉、長時間開扉、APB、火災アラーム、非常開放）または AI 映像解析アラーム（徘徊検知、侵入検知など）が発生した状態を表示します。"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "ステータスアイコンをクリックすると、ツールチップで詳細情報を確認できます。 ツールチップに表示されたエラーメッセージのリンクをクリックすると、ドアまたはエレベーターに接続されたデバイスの一覧へ移動できます。"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/monitoring-door-status-tooltip.png"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["該当デバイスを右クリックし、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.reconnect"
        }), " または ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.reboot"
        }), " オプションを選択してください。"]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/monitoring-door-status-tooltip-device.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ドアまたはエレベーターで発生するアラームは、次の設定で構成できます。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-door-add#alarm",
                  children: "ドアアラーム設定"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-elevators-add#alarm",
                  children: "エレベーターアラーム設定"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-advanced-ac",
                  children: "高度アクセス制御設定"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ビデオルールでドアとカメラを連携させてアラームを設定します。 ビデオルール設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["VMSサーバーと連携する際、映像に対するAIイベントアラームを設定すると、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " にアラームを送信できます。 詳細はVMSサーバーのマニュアルを参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["アラーム解除の詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-event#acknowledge-alarm-and-record-action",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-door-lock",
      children: "ドアのロックを確認"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ドアリレーの状態からドアのロック状態を確認できます。 ドアリレーの状態は以下を参照してください。"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "ステータスアイコン"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcRelayLock, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ドアが施錠されています。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcRelayUnlock, {
                width: "auto",
                height: "40px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ドアが開いています。"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-camera-status",
      children: "カメラの状態を確認"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "カメラの状態を確認して、正常に動作しているか確認できます。 カメラの状態は以下を参照してください。"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "ステータスアイコン"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamOk, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラが接続されています。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamFail, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラの電源がオフ、または接続が解除されています。"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-the-security-status",
      children: "セキュリティ状態を確認"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ドアまたは高度アクセス制御設定の警備状態を確認します。"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "ステータスアイコン"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcDisable, {
                width: "auto",
                height: "30px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "無効化された設定のアイコンです。 無効化された設定ではアラームは発生しません。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcArm, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "セキュリティが有効です。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcDisarm, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "セキュリティが無効です。"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["警備状態は、ドアを", (0,jsx_runtime.jsx)(_components.strong, {
          children: "警備"
        }), "に設定した場合にのみ表示されます。 警備設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-advanced-ac-intrusion-alarm",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "エレベーター状態を確認",
      children: "エレベーター状態を確認"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "エレベーター経由のフロアアクセス制御状態を確認します。"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "ステータスアイコン"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(StatusNormal, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "エレベーター経由で当該フロアが施錠されています。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(StatusOK, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "エレベーター経由で当該フロアが解放されています。"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "グループリストの展開折りたたみ",
      children: "グループリストの展開/折りたたみ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "最上位グループまたはサブグループからリストを展開または折りたたむことができます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-group-expand-collapse.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "最上位グループ",
      children: "最上位グループ"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " タブで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allDoorGroups"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allElevatorGroups"
          }), "、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allZones"
          }), " を選択して右クリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.expandAll"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.collapseAll"
          }), " を選択してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "選択した最上位グループを基準にすべてのサブリストを展開または折りたたむことができます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "サブグループ",
      children: "サブグループ"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各最上位グループのサブグループリストを展開または折りたたむには、サブグループを選択して右クリックしてください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.expandBelow"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.collapseBelow"
          }), " を選択してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "選択したサブグループのリストを展開または折りたたむことができます。"
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