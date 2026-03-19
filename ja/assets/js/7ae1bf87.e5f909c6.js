"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["93839"], {
65131: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_suprema_pass_app_advanced_features_mdx_7ae_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-suprema-pass-app-advanced-features-mdx-7ae.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_suprema_pass_app_advanced_features_mdx_7ae_namespaceObject = JSON.parse('{"id":"platform/biostar_air/suprema-pass-app-advanced-features","title":"高度な機能の設定","description":"Suprema PassアプリでBluetoothおよびNFC認証モードの構成方法、PINまたは生体認証オプションによる2段階認証の設定方法、アクセスログの確認方法、サポート機能の利用方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/suprema-pass-app-advanced-features.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/suprema-pass-app-advanced-features","permalink":"/docs/ja/platform/biostar_air/suprema-pass-app-advanced-features","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/suprema-pass-app-advanced-features.mdx","tags":[],"version":"current","frontMatter":{"id":"suprema-pass-app-advanced-features","title":"高度な機能の設定","description":"Suprema PassアプリでBluetoothおよびNFC認証モードの構成方法、PINまたは生体認証オプションによる2段階認証の設定方法、アクセスログの確認方法、サポート機能の利用方法を案内します。","keywords":["高度な機能","uprema Passアプリ","2段階認証","アクセスログ","サポートオプション"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"モバイル認証情報の使い方","permalink":"/docs/ja/platform/biostar_air/opening-doors-with-mobile-credentials"},"next":{"title":"感度を設定する","permalink":"/docs/ja/platform/biostar_air/suprema-pass-app-sensitivity-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/suprema-pass-app-advanced-features.mdx


const frontMatter = {
	id: 'suprema-pass-app-advanced-features',
	title: '高度な機能の設定',
	description: 'Suprema PassアプリでBluetoothおよびNFC認証モードの構成方法、PINまたは生体認証オプションによる2段階認証の設定方法、アクセスログの確認方法、サポート機能の利用方法を案内します。',
	keywords: [
		'高度な機能',
		'uprema Passアプリ',
		'2段階認証',
		'アクセスログ',
		'サポートオプション'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "接続方式の設定",
  "id": "connectingSetting",
  "level": 2
}, {
  "value": "Bluetooth",
  "id": "bluetooth",
  "level": 3
}, {
  "value": "NFC",
  "id": "nfc",
  "level": 3
}, {
  "value": "二段階認証(2FA)",
  "id": "twoFactorAuth",
  "level": 2
}, {
  "value": "iOSユーザー",
  "id": "ios",
  "level": 3
}, {
  "value": "Androidユーザー",
  "id": "android",
  "level": 3
}, {
  "value": "アクセスログ",
  "id": "accesslogs",
  "level": 2
}, {
  "value": "サポートセンター",
  "id": "supportCenter",
  "level": 2
}, {
  "value": "高度な設定",
  "id": "高度な設定",
  "level": 2
}, {
  "value": "追加機能",
  "id": "additionalFeatures",
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
  }, {Cmd, DocLink, IcHamberg, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcHamberg) _missingMdxReference("IcHamberg", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema Passアプリは、ユーザー体験と入退室管理機能を向上させるための高度な設定とセキュリティオプションを含みます。 ユーザーは認証方法の構成、2段階認証の有効化、アクセスログの確認、問題の報告およびサポート機能の利用ができます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connectingSetting",
      children: "接続方式の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザーは入退室管理機器との通信で使用する接続方式を選択できます。 Suprema Passアプリの初期画面で右上の ", (0,jsx_runtime.jsx)(IcHamberg, {
        title: "Hamburger menu"
      }), " アイコンをタップし、", (0,jsx_runtime.jsx)(Cmd, {
        children: "接続方式"
      }), "から希望のモードを選んでください。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-connection-mode.png",
      width: "50%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bluetooth",
      children: "Bluetooth"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーは2つのBluetooth認証モードから選択できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "アプリ起動時"
          }), ": モバイル端末でアプリが開いているときのみモバイルカードで認証できます。 このモードはバッテリーを節約しますが、ドアに近づく前に手動でアプリを起動する必要があります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "バックグラウンドモード"
          }), ": アプリがバックグラウンドで実行されている場合、端末の画面がオフでもモバイルカードで認証できます。 このモードはより便利ですが、バッテリーをより消費します。 アプリが終了した場合、バックグラウンド機能を再開するためにアプリを再起動する必要があります。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nfc",
      children: "NFC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFC認証はAndroid端末でのみ利用できます。 ユーザーは迅速な入退室のためにNFCを単独で使用するか、Bluetoothと併用できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "NFC対応端末を使用するAndroidユーザーは、Bluetoothと併用してNFCを使用できます。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "twoFactorAuth",
      children: "二段階認証(2FA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["追加のセキュリティのために、ユーザーは", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PIN、パターン、または生体認証"
      }), "（顔または指紋）を使用して二段階認証を有効にできます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-twofactor.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["この機能は入退室認証時にアプリ画面が開いている必要があるため、", (0,jsx_runtime.jsx)(Cmd, {
              children: "バックグラウンドモード"
            }), "の接続方式ではサポートされません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "PINまたはパターンを忘れた場合は、アプリを再インストールしてモバイルカードを再有効化する必要があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "端末によってサポートされる機能は異なる場合があります。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ios",
      children: "iOSユーザー"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Suprema Passアプリの初期画面で右上の ", (0,jsx_runtime.jsx)(IcHamberg, {
            title: "Hamburger menu"
          }), " アイコンをタップしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["接続方式を", (0,jsx_runtime.jsx)(Cmd, {
            children: "アプリ起動時"
          }), "に設定してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "二段階認証"
          }), "をタップしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "PIN番号登録"
          }), "をタップしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "6桁のPIN番号を入力してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["成功の通知メッセージが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            children: "OK"
          }), "をタップしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["PIN番号を変更するには、", (0,jsx_runtime.jsx)(Cmd, {
              children: "PIN番号変更"
            }), "をタップしてから新しいPIN番号を入力してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["生体認証機能を使用するには、", (0,jsx_runtime.jsx)(Cmd, {
              children: "生体認証"
            }), "を有効にして設定の案内に従ってください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "android",
      children: "Androidユーザー"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Suprema Passアプリの初期画面で右上の ", (0,jsx_runtime.jsx)(IcHamberg, {
            title: "Hamburger menu"
          }), " アイコンをタップしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["接続方式を", (0,jsx_runtime.jsx)(Cmd, {
            children: "アプリ起動時"
          }), "または", (0,jsx_runtime.jsx)(Cmd, {
            children: "NFC"
          }), "に設定してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "二段階認証"
          }), "をタップしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "PIN番号"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "PIN番号登録"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            children: "パターン"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            children: "パターン登録"
          }), " をタップしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "選択したPIN番号またはパターンを入力してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["成功の通知メッセージが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            children: "OK"
          }), "をタップしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["PIN番号を変更するには、", (0,jsx_runtime.jsx)(Cmd, {
              children: "PIN番号変更"
            }), "をタップしてから新しいPIN番号を入力してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["パターンを変更するには、", (0,jsx_runtime.jsx)(Cmd, {
              children: "パターン変更"
            }), "をタップしてから新しいパターンを入力してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["生体認証機能を使用するには、", (0,jsx_runtime.jsx)(Cmd, {
              children: "生体認証"
            }), "を有効にして設定の案内に従ってください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accesslogs",
      children: "アクセスログ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "アクセス記録を通じてユーザーの入退室の試行を追跡し、入退室に関する問題を解決できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-access-log.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Suprema Passアプリの初期画面で右上の ", (0,jsx_runtime.jsx)(IcHamberg, {
            title: "Hamburger menu"
          }), " アイコンをタップしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "出入記録"
          }), "をタップしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "サイトを選択し、開始日と終了日を設定してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "検索"
          }), "ボタンをタップしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "supportCenter",
      children: "サポートセンター"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["追加サポートが必要なユーザーは、", (0,jsx_runtime.jsx)(Cmd, {
        children: "サポートセンター"
      }), "に入り、支援を受けることができます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-support.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Suprema Passアプリの初期画面で右上の ", (0,jsx_runtime.jsx)(IcHamberg, {
            title: "Hamburger menu"
          }), " アイコンをタップしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "その他"
          }), "をタップしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "サポートセンター"
          }), "をタップしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Suprema Technical Support"
          }), "ページに移動します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "疑問点を検索するか、よくある質問を確認してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "サポートが必要な場合は、右下のチャットアイコンをタップしてMOCAシステムチームにサポートチケットを送信できます。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "高度な設定",
      children: "高度な設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Suprema Passアプリの初期画面で右上の ", (0,jsx_runtime.jsx)(IcHamberg, {
        title: "Hamburger menu"
      }), " アイコンをタップし、", (0,jsx_runtime.jsx)(Cmd, {
        children: "その他"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        children: "高度な設定"
      }), "から次の追加機能を利用できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-advanced.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "位置設定"
          }), "：ユーザーの位置に応じて ", (0,jsx_runtime.jsx)(Cmd, {
            children: "グローバル"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            children: "EU"
          }), " サーバーを選択してください。 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "自動"
          }), "を選択すると、アプリが位置を検出して適切なサーバーを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Bluetooth認証"
          }), "：モバイル端末が動いていないときにBluetooth認証が作動しないようにするには、", (0,jsx_runtime.jsx)(Cmd, {
            children: "不要なドア開放の防止"
          }), "オプションを有効にしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "感度設定"
          }), "：モバイル端末とBioStar Air対応機器間のBluetooth検出感度を調整できます。 詳細については", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/suprema-pass-app-sensitivity-settings"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additionalFeatures",
      children: "追加機能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Suprema Passアプリの初期画面で右上の ", (0,jsx_runtime.jsx)(IcHamberg, {
        title: "Hamburger menu"
      }), " アイコンをタップし、", (0,jsx_runtime.jsx)(Cmd, {
        children: "その他"
      }), "から次の追加機能を利用できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "テーマ"
          }), "：アプリのカラーモードを設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "ライト"
          }), "、", (0,jsx_runtime.jsx)(Cmd, {
            children: "ダーク"
          }), "、", (0,jsx_runtime.jsx)(Cmd, {
            children: "システム"
          }), "モードを選択できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "バグレポート"
          }), "：エラー発生状況や再現手順などの詳細を記入して開発者にバグレポートを提出できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "アプリ詳細"
          }), "：モバイル端末のモデル名、OSバージョン、BLEサポートおよび状態などの関連情報を確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "アプリライセンス"
          }), "：Suprema Passアプリに適用されるオープンソースライセンス情報を確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "利用規約"
          }), "：BioStar Airプラットフォームの利用規約を確認できます。"]
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