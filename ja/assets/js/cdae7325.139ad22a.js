"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["44549"], {
96117: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_video_mdx_cda_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-monitoring-video-mdx-cda.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_video_mdx_cda_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-video","title":"ビデオをモニタリングする","description":"ビデオモニタリング機能の主な操作（映像の追加、サイズ変更、位置変更、アラーム確認など）を段階的に案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-video.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-video","permalink":"/docs/ja/platform/biostar_x/monitoring-video","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-video.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-video","title":"ビデオをモニタリングする","description":"ビデオモニタリング機能の主な操作（映像の追加、サイズ変更、位置変更、アラーム確認など）を段階的に案内します。","keywords":["モニタリング","ビデオ"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"デバイスをモニタリングする","permalink":"/docs/ja/platform/biostar_x/monitoring-device"},"next":{"title":"イベントをモニタリングする​","permalink":"/docs/ja/platform/biostar_x/monitoring-event"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-video.mdx


const frontMatter = {
	id: 'monitoring-video',
	title: 'ビデオをモニタリングする',
	description: 'ビデオモニタリング機能の主な操作（映像の追加、サイズ変更、位置変更、アラーム確認など）を段階的に案内します。',
	keywords: [
		'モニタリング',
		'ビデオ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*이런 경우 화면에 탭을 추가하고 <Cmd sid='arena.tree.contextMenu.openVideo' />를 다시 클릭하세요.*/
/*크기를 늘린 영상은 이동되지 않습니다. ???*/


const toc = [{
  "value": "映像を再生する",
  "id": "play-video",
  "level": 2
}, {
  "value": "映像を制御する",
  "id": "control-video",
  "level": 2
}, {
  "value": "ドア制御ツール",
  "id": "door-control-tool",
  "level": 2
}, {
  "value": "映像アラームを確認する",
  "id": "check-the-video-alarm",
  "level": 2
}, {
  "value": "ビデオログを確認する",
  "id": "check-video-log",
  "level": 2
}, {
  "value": "ビデオタイルのレイアウトを設定する",
  "id": "video-tile-layout-setting",
  "level": 2
}, {
  "value": "映像サイズを変更する",
  "id": "change-video-size",
  "level": 3
}, {
  "value": "映像を拡大する",
  "id": "video-size-enlargement",
  "level": 3
}, {
  "value": "映像の位置を変更する",
  "id": "changing-the-video-location",
  "level": 3
}, {
  "value": "全画面で表示する",
  "id": "full-screen",
  "level": 2
}, {
  "value": "映像を閉じる",
  "id": "close-the-video",
  "level": 2
}, {
  "value": "すべての映像を閉じる",
  "id": "close-all-video",
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
  }, {Calloutlists, Cmd, Column, Columns, IcClose, IcFullscreen, IcMoreB, IcRestorscreen, IcVidLog, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcFullscreen) _missingMdxReference("IcFullscreen", true);
  if (!IcMoreB) _missingMdxReference("IcMoreB", true);
  if (!IcRestorscreen) _missingMdxReference("IcRestorscreen", true);
  if (!IcVidLog) _missingMdxReference("IcVidLog", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ビデオモニタリング機能を使用すると、ドア、エリア、デバイスに連携されたカメラ映像をリアルタイムで確認し、制御できます。 本書では、ビデオタイルを使用してカメラ映像を追加し、サイズ変更、位置変更、全画面表示などのさまざまな操作を行う方法を説明します。 さらに、アラーム状態の確認や解除といった管理機能によって、セキュリティ状況に迅速に対応できるよう支援します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ビデオタイル"
            }), "は、画面中央に位置するカメラ映像表示エリアです。 複数のカメラ映像を同時に配置してモニタリングできるインターフェースコンポーネントです。 ユーザーはビデオタイルで映像のサイズを調整したり位置を変更し、必要に応じて映像を閉じたり全画面に切り替えたりできます。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-monitoring-video-tiles.png",
            width: "70%"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["VMSと連携してカメラを追加・管理する方法は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "VMS の録画映像を再生するときにロードエラーが発生する場合は、VMS サーバーに証明書をインストールし、クライアント PC にも VMS サーバーの証明書をインストールする必要があります。 詳細については次のドキュメントを参照してください。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-video-integration#install-vms-certification",
                  children: "VMS サーバーでの証明書インストール"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-video-integration#video-troubleshooting",
                  children: "クライアント PC での VMS サーバー証明書のインストール"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ビデオモニタリングは ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "アドバンス"
            }), "(Advanced) 以上のライセンスで追加オプションとして利用できます。 ライセンスポリシーの詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "play-video",
      children: "映像を再生する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ビデオタイルにカメラ映像を追加してモニタリングできます。 ビデオタイルは画面中央に配置され、複数のカメラ映像を同時にモニタリングできます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.map.title"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.device.title"
          }), " タブから映像を確認するカメラデバイスを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "マウスの右ボタンをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.openVideo"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "選択したカメラの映像を画面中央のビデオタイルに配置できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-control-open-video.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "サイドバーのリストからカメラを選択し、ビデオタイル領域へドラッグ＆ドロップして映像を追加することもできます。"
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/monitoring-door-control-open-video-drag-drop.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ビデオタイルは画面左上から順に追加され、現在の画面に追加スペースがない場合はエラーメッセージが表示されます。 "
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "control-video",
      children: "映像を制御する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ビデオタイルに配置した映像はデフォルトでリアルタイム再生されます。 再生ツールを使って映像を停止したり、過去の録画映像を確認できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-player.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "カメラデバイスの名前です。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["映像を全画面(", (0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-fullscreen.svg",
              ico: true,
              alone: true
            }), ")で再生したり、ビデオタイルから除外(", (0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-close.svg",
              ico: true,
              alone: true
            }), ")したりできるボタンです。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "映像の再生位置を調整できるスライダーです。 スライダーをドラッグして過去時点の映像を表示できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-play.svg",
              ico: true,
              alone: true
            }), " または ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-pause.svg",
              ico: true,
              alone: true
            }), " をクリックして動画を再生または一時停止します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "現在の映像をリアルタイムで再生していることを示すアイコンです。 過去の映像を再生中にリアルタイム映像へ戻すには、このアイコンをクリックしてください。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "door-control-tool",
      children: "ドア制御ツール"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["映像を追加した後、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.map.doorControl"
      }), " ツールを使用して追加操作を実行できます。 ビデオタイルでドアに連携されたカメラを選択すると、ドアを制御できる ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.map.doorControl"
      }), " ツールが有効になります。 ドアの開放、ロック、解除、アラーム解除などの機能を利用できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-door-control.png",
      alt: "ドアを制御"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.map.doorControl"
            }), " ツールは、右パネルに何も開かれていないときに使用できます。 右パネルに詳細情報が開いている場合は、閉じてから使用してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["この機能を使用するには、ドアにカメラが連携されている必要があります。 ドアとカメラの連携について詳しくは、", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.map.doorControl"
            }), " ツールで利用できる機能の詳細については、", (0,jsx_runtime.jsx)(_components.a, {
              href: "control-door",
              children: "次の文書"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-the-video-alarm",
      children: "映像アラームを確認する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "カメラと連携されたドアのいずれかがアラーム状態になると、映像にアラームアイコンが表示されます。 連携されたドアのアラームをすべて解除すると、アラームアイコンが消えます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-alarm.png",
      alt: "アラーム"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ドアのアラームを解除するには、ドアリストで右クリックし、ポップアップメニューから ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), " をクリックします。 または ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.map.doorControl"
      }), " ツールで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-clear-alarm.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画面上部に成功または失敗メッセージが表示されます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-clear-alarm-success.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.eventTable.event"
        }), " セクションの詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "monitoring-event",
          children: "次のドキュメント"
        }), "を参照します。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-video-log",
      children: "ビデオログを確認する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ルールで設定されたドアで特定のイベントが発生すると、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.eventTable.title"
      }), " セクションの該当イベント項目にビデオログ(", (0,jsx_runtime.jsx)(IcVidLog, {}), ")アイコンが表示されます。 ビデオログアイコンが表示されたイベント項目をクリックすると、画面右側に詳細情報が表示されます。 特定のイベントが発生した時刻の映像を確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-event-video-log.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ビデオログアイコンは、ドアにカメラが連携されている場合に表示されます。 カメラとドアの連携について詳しくは、", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-videos-rule",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "イベント設定ルールに基づき、最初に接続されたカメラを優先して再生します。 映像をさらに大きな画面で再生するには、画面をダブルクリックします。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ドアには最大4台のカメラを接続でき、映像下部のカメラボタンをクリックして目的のカメラ映像を再生できます。 接続されているカメラが1台のみの場合、カメラボタンは表示されません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.eventTable.event"
            }), " セクションの詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-event",
              children: "次のドキュメント"
            }), "を参照します。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "video-tile-layout-setting",
      children: "ビデオタイルのレイアウトを設定する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ビデオタイルに配置した映像は、サイズを変更したり任意の位置に移動したりできます。 重要度に応じて映像のサイズを調整し、位置を変更してモニタリングします。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "change-video-size",
      children: "映像サイズを変更する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "サイズを変更する映像をクリックすると、選択した映像のフレームがアクティブになります。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-adjust-size-01.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "フレームの境界にカーソルを合わせると、サイズを調整できるカーソルに変わります。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "角をクリックして希望のサイズまでドラッグします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-adjust-size-02.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置されたタイルのサイズに比例して映像のサイズを調整できます。 逆に映像のサイズを縮小することもできます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-adjust-size-03.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "video-size-enlargement",
      children: "映像を拡大する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "映像をビデオタイルの全体サイズに拡大するには、映像をダブルクリックします。 映像がビデオタイルのサイズに拡大されます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/monitoring-video-extend.gif",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "changing-the-video-location",
      children: "映像の位置を変更する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "位置を変更する映像をクリックし、目的の位置へドラッグします。 選択した映像の位置を変更できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/monitoring-video-move-position.png",
      alone: true
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "full-screen",
      children: "全画面で表示する"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-fullscreen.png",
          alone: true
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l10",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["ビデオタイルに配置された映像を全画面で表示するには、映像右上の ", (0,jsx_runtime.jsx)(IcFullscreen, {}), " ボタンをクリックします。"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["全画面表示を終了するには、画面右上の ", (0,jsx_runtime.jsx)(IcRestorscreen, {}), " ボタンをクリックしてください。 またはキーボードの ", (0,jsx_runtime.jsx)("kbd", {
            children: "ESC"
          }), " キーを押します。"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "close-the-video",
      children: "映像を閉じる"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/monitoring-video-close.png",
          alone: true
        })
      }), (0,jsx_runtime.jsx)(Column, {
        className: "padding--l10",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ビデオタイルに配置された映像を閉じるには、映像右上の ", (0,jsx_runtime.jsx)(IcClose, {}), " ボタンをクリックします。"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "close-all-video",
      children: "すべての映像を閉じる"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ビデオタイルに配置したすべての映像を閉じるには、画面右上の ", (0,jsx_runtime.jsx)(IcMoreB, {}), " ボタンをクリックします。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.monitoring.contextMenu.closeAll"
      }), " をクリックしてください。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-video-close-all.png"
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