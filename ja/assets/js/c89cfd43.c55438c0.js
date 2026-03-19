"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["10180"], {
21271: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_registered_devices_mdx_c89_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-registered-devices-mdx-c89.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_registered_devices_mdx_c89_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-registered-devices","title":"登録済みデバイスの管理","description":"BioStar Air ポータルでデバイスの接続状態を確認し、生体認証やカード設定を変更したり、ファームウェアを更新できます。 個別または一括でセキュリティシステムを効率的に管理できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-registered-devices.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-registered-devices","permalink":"/docs/ja/platform/biostar_air/managing-registered-devices","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-registered-devices.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-registered-devices","title":"登録済みデバイスの管理","description":"BioStar Air ポータルでデバイスの接続状態を確認し、生体認証やカード設定を変更したり、ファームウェアを更新できます。 個別または一括でセキュリティシステムを効率的に管理できます。","keywords":["デバイス管理","デバイス設定","BioStar Air","生体認証","カード設定","ファームウェアのアップデート","ネットワーク設定"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"デバイスの登録と削除","permalink":"/docs/ja/platform/biostar_air/manage-device-with-app"},"next":{"title":"デバイス情報および設定オプションのご案内","permalink":"/docs/ja/platform/biostar_air/device-info-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-registered-devices.mdx


const frontMatter = {
	id: 'managing-registered-devices',
	title: '登録済みデバイスの管理',
	description: 'BioStar Air ポータルでデバイスの接続状態を確認し、生体認証やカード設定を変更したり、ファームウェアを更新できます。 個別または一括でセキュリティシステムを効率的に管理できます。',
	keywords: [
		'デバイス管理',
		'デバイス設定',
		'BioStar Air',
		'生体認証',
		'カード設定',
		'ファームウェアのアップデート',
		'ネットワーク設定'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "デバイス一覧の表示",
  "id": "viewing-device-information",
  "level": 2
}, {
  "value": "デバイス接続状況",
  "id": "device-connection-status",
  "level": 3
}, {
  "value": "デバイス情報",
  "id": "device-information",
  "level": 3
}, {
  "value": "フィルタリング",
  "id": "deviceFiltering",
  "level": 3
}, {
  "value": "個別デバイス情報および設定の編集",
  "id": "editing-individual-device",
  "level": 2
}, {
  "value": "デバイス一括操作",
  "id": "bulkDeviceActions",
  "level": 2
}, {
  "value": "デバイスグループの管理",
  "id": "device_group_in_device_list",
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
  }, {Cmd, DocLink, IcAirByte, IcAirCloud, IcAirDset, IcAirFilter, IcAirFw, IcAirGroup, IcAirRef, IcAirRemove, IcAirUpd, IcAirWarn, Image, StatusFail, StatusOK, StatusUpdating, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirByte) _missingMdxReference("IcAirByte", true);
  if (!IcAirCloud) _missingMdxReference("IcAirCloud", true);
  if (!IcAirDset) _missingMdxReference("IcAirDset", true);
  if (!IcAirFilter) _missingMdxReference("IcAirFilter", true);
  if (!IcAirFw) _missingMdxReference("IcAirFw", true);
  if (!IcAirGroup) _missingMdxReference("IcAirGroup", true);
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!IcAirUpd) _missingMdxReference("IcAirUpd", true);
  if (!IcAirWarn) _missingMdxReference("IcAirWarn", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusFail) _missingMdxReference("StatusFail", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  if (!StatusUpdating) _missingMdxReference("StatusUpdating", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "登録されたデバイスの接続状態を一目で確認し、生体認証やカード設定を変更したり、ファームウェアを更新できます。 少数のデバイスは個別に、多数のデバイスは一括で管理できるため、セキュリティシステムを効率的に運用できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["デバイスは iOS または Android の ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar Air モバイルアプリ"
            }), "でのみ登録できます。 ウェブポータルでは登録できない。 モバイルアプリでのデバイス登録方法の詳細は ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-device-with-app"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "リモート接続"
            }), "、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "生体認証"
            }), "、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "QRコードによる入退室"
            }), "、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ファームウェアの更新"
            }), "など一部の機能を利用するには、デバイスがインターネットに接続されている必要があります。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "デバイスの登録と管理に関するビデオガイドを見るには、次のビデオを参照してください。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "lpMPkMyjr-c"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewing-device-information",
      children: "デバイス一覧の表示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイス一覧では、BioStar Air に登録されたすべてのデバイスを一目で確認できます。 各デバイスの接続状態、モデル名、ファームウェアバージョンなどの主要な情報を一目で確認できます。 また、各デバイスをクリックして詳細情報を確認し、設定を変更できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device_submenu",
        product: "air"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-connection-status",
      children: "デバイス接続状況"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイス一覧のステータスアイコンで各デバイスの接続状態を確認できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(StatusOK, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "緑"
          }), ": オンライン状態で、該当デバイスをリモートで制御でき、QR認証を受け入れ、アップデートできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(StatusFail, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "赤"
          }), ": オフライン状態のデバイスです。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(StatusUpdating, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "オレンジ"
          }), ": ファームウェアをアップデート中です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["⚪ ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "接続なし"
          }), "：ネットワークに接続されていないデバイスです。 (例：Airfob Patch)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirWarn, {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "注意"
          }), "：サーバーとデバイス間の同期が必要な状態です。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-information",
      children: "デバイス情報"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイス一覧の各列には、以下の情報が含まれます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list-info.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_product_column",
            product: "air"
          }), "：Supremaデータベースから取得したデバイス名とモデル名です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_nickname_column",
            product: "air"
          }), "：識別しやすいようにユーザーが編集できる項目です。 デバイス一覧でデバイスをクリックすると表示される ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_title",
            product: "air"
          }), " ウィンドウで変更できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_id_column",
            product: "air"
          }), "：デバイスに割り当てられた固有識別子です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_group_column",
            product: "air"
          }), "：デバイスが属するグループです。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_battery_column",
            product: "air"
          }), "：バッテリー駆動のデバイスで確認できます。 エアポップタグ(AirFob Tag) デバイスのみ対応しています。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_fw_column",
            product: "air"
          }), "：現在インストールされているファームウェアのバージョンです。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_timezone_column",
            product: "air"
          }), "：デバイスに設定されているタイムゾーンです。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deviceFiltering",
      children: "フィルタリング"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイス一覧の上部ヘッダー領域でフィルター機能を利用できます。 ヘッダー領域の ", (0,jsx_runtime.jsx)(IcAirFilter, {
        title: "Filter"
      }), " ボタンをクリックすると、条件を設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["適用したフィルター条件を初期化するには、", (0,jsx_runtime.jsx)(IcAirFilter, {
          title: "Filter"
        }), " ボタンをクリックし、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "column_filter_modal_reset_btn",
          product: "air"
        }), " ボタンを選択してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editing-individual-device",
      children: "個別デバイス情報および設定の編集"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧から編集するデバイスをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device_edit_title",
            product: "air"
          }), " ウィンドウが表示されます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-list-edit-details.png",
          caption: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "デバイスの詳細情報または設定を編集します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更を保存するには、下部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["各セクションごとの詳細情報の編集および設定オプションの詳細は ", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/device-info-settings"
      }), " を参照してください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bulkDeviceActions",
      children: "デバイス一括操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイス一覧上部で提供される機能により、複数のデバイスを一度に管理できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-mng-list-tools.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRef, {
            width: "24px",
            height: "24px",
            title: "Refresh"
          }), "：デバイス一覧とデバイスの状態を更新します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRemove, {
            width: "24px",
            height: "24px",
            title: "Delete"
          }), "：サイトに登録されたデバイスを削除できます。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "warning",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["オンラインのデバイスのみ永続的に削除できます。 デバイスがオフラインの場合、別のサイトに追加する前に BioStar Air モバイルアプリで先に削除してください。 モバイルアプリでのデバイス削除方法の詳細は ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-device-with-app#removingDevice"
            }), " を参照してください。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirFw, {
            width: "24px",
            height: "24px",
            title: "Update Firmware"
          }), "：デバイス一覧で選択したデバイスのファームウェアを更新できます。 ファームウェアの更新に関する詳細は ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/how-to-upgrade-firmware"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirCloud, {
            width: "24px",
            height: "24px",
            title: "Sync with Server"
          }), "：デバイス一覧で選択したデバイスからサーバーに生体認証テンプレートを同期できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), "：デバイス一覧で選択したデバイスをグループに割り当てることができます。 デバイスグループの管理の詳細については、", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#device_group_in_device_list"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirByte, {
            width: "24px",
            height: "24px",
            title: "RF Card Byte Order"
          }), "：デバイス一覧で選択したデバイスのRFカードのバイト順を", (0,jsx_runtime.jsx)(Cmd, {
            children: "MSB"
          }), "または", (0,jsx_runtime.jsx)(Cmd, {
            children: "LSB"
          }), "に切り替えられます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "MSB"
              }), "：カードデータを処理するとき、大きいバイト単位から小さいバイト単位の順に処理し、カードシリアル番号 (CSN) を左から右へ順に保存します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "LSB"
              }), "：カードデータを処理するとき、小さいバイト単位から大きいバイト単位の順に処理してカードシリアル番号 (CSN) を保存します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirDset, {
            width: "24px",
            height: "24px",
            title: "Load Device Setting"
          }), "：スタンドアロンモードで、元の設定を持つデバイスの設定を読み込むことができます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirUpd, {
            width: "24px",
            height: "24px",
            title: "Update Status"
          }), "：デバイス一覧で選択したデバイスの状態を更新できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device_group_in_device_list",
      children: "デバイスグループの管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイス一覧で個別のデバイスを選択して、グループに追加したり既存のグループから削除したりできます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "デバイスグループ一覧で、グループに追加または削除するデバイスのチェックボックスをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスグループ一覧の上部にある ", (0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_device_group_title",
            product: "air"
          }), " ウィンドウが表示されたら、選択したデバイスをグループに追加または削除します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-list-group-mng.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_device_group_title_two",
            product: "air"
          }), " のチェックボックスの状態は、以下の意味を持ちます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_device_group_checkbox_state_one",
                product: "air"
              }), "：選択したデバイスをグループから削除します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_device_group_checkbox_state_two",
                product: "air"
              }), "：選択したデバイスの一部がグループに含まれている状態です。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_device_group_checkbox_state_three",
                product: "air"
              }), "：選択したデバイスをグループに追加します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更内容を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "manage_device_group_title",
              product: "air"
            }), " ウィンドウで別のグループを選択すると、選択したデバイスはそのグループに移動します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスはグループに重複して所属できます。 1つのデバイスを複数のグループに割り当てることができます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["変更内容を初期化するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device_btn_reset",
              product: "air"
            }), " ボタンをクリックします。"]
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