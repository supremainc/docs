"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["41656"], {
8094: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_device_manager_xpd_2_settings_mdx_4e9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-device-manager-xpd-2-settings-mdx-4e9.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_device_manager_xpd_2_settings_mdx_4e9_namespaceObject = JSON.parse('{"id":"device/device_manager/xpd2-settings","title":"XPass D2 を設定する","description":"XPass D2 に適用する設定をあらかじめテンプレートとして作成し、個別デバイスに直接適用できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/device_manager/xpd2-settings.mdx","sourceDirName":"device/device_manager","slug":"/device/device_manager/xpd2-settings","permalink":"/docs/ja/device/device_manager/xpd2-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/device_manager/xpd2-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"xpd2-settings","title":"XPass D2 を設定する","description":"XPass D2 に適用する設定をあらかじめテンプレートとして作成し、個別デバイスに直接適用できます。","keywords":["XPass D2","テンプレート","デバイス検索","デバイス接続","ファームウェアをアップグレードする","デバイス再起動","管理者パスワード"],"isTranslationMissing":false},"sidebar":"device_manager","previous":{"title":"IPデバイスを設定する","permalink":"/docs/ja/device/device_manager/ip-device-settings"},"next":{"title":"付録","permalink":"/docs/ja/device/device_manager/appendices"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/device_manager/xpd2-settings.mdx


const frontMatter = {
	id: 'xpd2-settings',
	title: 'XPass D2 を設定する',
	description: 'XPass D2 に適用する設定をあらかじめテンプレートとして作成し、個別デバイスに直接適用できます。',
	keywords: [
		'XPass D2',
		'テンプレート',
		'デバイス検索',
		'デバイス接続',
		'ファームウェアをアップグレードする',
		'デバイス再起動',
		'管理者パスワード'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "テンプレートを追加する",
  "id": "template-add",
  "level": 2
}, {
  "value": "テンプレート名および管理者パスワードの設定",
  "id": "テンプレート名および管理者パスワードの設定",
  "level": 3
}, {
  "value": "インターフェース",
  "id": "インターフェース",
  "level": 3
}, {
  "value": "認証",
  "id": "認証",
  "level": 3
}, {
  "value": "ウィーガンドカードフォーマット",
  "id": "ウィーガンドカードフォーマット",
  "level": 3
}, {
  "value": "Suprema スマートカードレイアウト",
  "id": "suprema-スマートカードレイアウト",
  "level": 3
}, {
  "value": "カスタムスマートカードレイアウト",
  "id": "カスタムスマートカードレイアウト",
  "level": 3
}, {
  "value": "キーパッド設定",
  "id": "キーパッド設定",
  "level": 3
}, {
  "value": "その他",
  "id": "その他",
  "level": 3
}, {
  "value": "LED / ブザー",
  "id": "led--ブザー",
  "level": 3
}, {
  "value": "テンプレートを適用する",
  "id": "テンプレートを適用する",
  "level": 2
}, {
  "value": "テンプレートを管理する",
  "id": "テンプレートを管理する",
  "level": 2
}, {
  "value": "テンプレートを編集する",
  "id": "テンプレートを編集する",
  "level": 3
}, {
  "value": "テンプレートを削除する",
  "id": "テンプレートを削除する",
  "level": 3
}, {
  "value": "テンプレートをエクスポートする",
  "id": "テンプレートをエクスポートする",
  "level": 3
}, {
  "value": "テンプレートをインポートする",
  "id": "テンプレートをインポートする",
  "level": 3
}, {
  "value": "デバイスの検索と接続",
  "id": "device-search-connect",
  "level": 2
}, {
  "value": "デバイスのファームウェアをアップグレードする",
  "id": "device-firmware-upgrade",
  "level": 2
}, {
  "value": "デバイスを再起動する",
  "id": "デバイスを再起動する",
  "level": 2
}, {
  "value": "管理者パスワードを変更する",
  "id": "admin-password-change",
  "level": 2
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "XPass D2 に適用する設定をあらかじめテンプレートとして作成し、個別デバイスに直接適用できます。 PC で管理プログラムに接続して設定を変更したりコマンドカードを使用する方法と比べて、はるかに速く設定を適用できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["デバイスのファームウェアバージョンが低い場合、いくつかの設定が適用されないことがあります。 すべての設定を適用するには、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#device-firmware-upgrade",
          children: "デバイスファームウェアをアップグレードする"
        }), "を参照してファームウェアをアップグレードしてください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "template-add",
      children: "テンプレートを追加する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RS-485 通信、カード形式、キーパッド設定、PIN、LED、ブザーなどを設定した後、テンプレートとして追加できます。 テンプレートを追加すると、複数の個別デバイスを毎回設定せずに、迅速かつ簡単に設定を適用できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル端末で Suprema Device Manager を起動します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メイン画面で XPass D2 を選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add.svg",
            ico: true,
            alone: true
          }), " を押します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-add.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "テンプレートを作成するデバイスモデルを選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["各項目を設定した後、テンプレートを保存するには ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_295",
            product: "dev"
          }), " を押します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "テンプレートは最大 100 個まで追加できます。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "テンプレート名および管理者パスワードの設定",
      children: "テンプレート名および管理者パスワードの設定"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-name-pw.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_341",
            product: "dev"
          }), "：希望するテンプレート名を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_074",
            product: "dev"
          }), "：管理者パスワードを入力します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "管理者パスワードは 6～32 桁の数字で設定できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "管理者パスワードを紛失しないよう注意してください。 管理者パスワードを紛失した場合、テンプレートを適用したデバイスに接続するにはそのデバイスを初期化する必要があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["管理者パスワードの変更について詳しくは、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#admin-password-change",
              children: "管理者パスワードを変更する"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "インターフェース",
      children: "インターフェース"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-interface.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_038",
            product: "dev"
          }), "：デバイスとマスターデバイスの通信で使用する OSDP アドレスを設定します。 0～126 の数値で設定できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_298",
            product: "dev"
          }), "：RS-485 の転送速度を設定します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "認証",
      children: "認証"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-auth-cardtype.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_328",
            product: "dev"
          }), "：デバイスで使用するカードタイプを設定できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_008",
                product: "dev"
              }), "：CSN カードタイプを選択し、バイト順序を設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_201",
                product: "dev"
              }), "：Suprema が発行したスマートカードタイプを選択できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_333",
                product: "dev"
              }), "：他社が発行したスマートカードタイプを選択できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_139",
                product: "dev"
              }), "：モバイルカードタイプを設定できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["バイト順序を ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_034",
          product: "dev"
        }), " に設定すると、カードデータを処理する際に上位バイトから下位バイトの順に処理し、カードのシリアル番号（CSN）を保存するときに左から右へ順に処理します。 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_030",
          product: "dev"
        }), " は下位バイトから上位バイトの順に処理し、カードのシリアル番号（CSN）を保存します。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ウィーガンドカードフォーマット",
      children: "ウィーガンドカードフォーマット"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-wiegand-card.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_354",
            product: "dev"
          }), "：デバイスに指定する Wiegand カード形式を設定できます。 設定した形式でカードデータが処理されます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_179",
                product: "dev"
              }), "：希望するフォーマットがない場合、", (0,jsx_runtime.jsx)(IcAdd, {}), " を押して新しい Wiegand フォーマットを追加できます。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/device/xpd2-template-wiegand-card-new.png",
              width: 250
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_253",
                    product: "dev"
                  }), "：希望する Wiegand フォーマットの名前を入力します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_318",
                    product: "dev"
                  }), "：合計ビット数を入力します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_024",
                    product: "dev"
                  }), "：使用する ID の開始ビットと終了ビットを入力します。 ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-add3.svg",
                    ico: true,
                    alone: true
                  }), " ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_319",
                    product: "dev"
                  }), " を押すと、ID フィールドを追加できます。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_350",
                    product: "dev"
                  }), "：使用するパリティフィールドの位置と開始ビット、終了ビットを入力します。 ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-add3.svg",
                    ico: true,
                    alone: true
                  }), " ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_319",
                    product: "dev"
                  }), " を押すと、パリティフィールドを追加できます。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
                  type: "info",
                  children: (0,jsx_runtime.jsx)(_components.p, {
                    children: "パリティフィールドを追加するには、合計ビット数を入力します。"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_352",
            product: "dev"
          }), "：Wiegand 信号のパルス幅を設定できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_351",
            product: "dev"
          }), "：Wiegand 信号のパルス間隔を設定できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "suprema-スマートカードレイアウト",
      children: "Suprema スマートカードレイアウト"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-suprema-card.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_151",
            product: "dev"
          }), "：補助サイトキーの使用可否を設定できます。 補助サイトキーを設定すると、カードの基本キーが一致しない場合に補助サイトキーを使用して認証を実行できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_032",
            product: "dev"
          }), "：MIFARE カードを設定できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), "：暗号化方式を Crypto-1 または AES-128 に設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), "：スマートカードとデバイス間の通信を暗号化するキーです。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), "：カードの基本サイトキーが一致しない場合に使用して認証を実行できます。 補助サイトキーの項目は、前レベルの ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " を有効にしたときのみ表示されます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_214",
                product: "dev"
              }), "：各テンプレートを保存する開始ブロックを選択します。 このブロックはユーザー情報を保存するブロックのインデックスです。既にスマートカードを使用している場合は、保存可能なブロックを設定します。 MIFAREのみ設定できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_010",
            product: "dev"
          }), "：DESFireカードを設定できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_011",
                product: "dev"
              }), "：他社が発行したDESFireカードを使用できます。 DESFireのみ設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), "：スマートカードとデバイス間の通信を暗号化するキーです。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), "：カードの基本サイトキーが一致しない場合に使用して認証を実行できます。 補助サイトキーの項目は、前レベルの ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " を有効にしたときのみ表示されます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_223",
                product: "dev"
              }), "：アプリケーションIDを設定してください。 ファイルIDを含む一種のディレクトリとして機能します。 DESFireのみ設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_347",
                product: "dev"
              }), "：ファイルIDを設定してください。 DESFireのみ設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), "：暗号化方式をDES/3DESまたはAESに設定できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_202",
            product: "dev"
          }), "：スマートカード出力のバイト順序を設定できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_011",
              product: "dev"
            }), "を使用するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_225",
              product: "dev"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_349",
              product: "dev"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_223",
              product: "dev"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_347",
              product: "dev"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_222",
              product: "dev"
            }), "の情報を正確に入力してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), "は最大32バイトの16進数のみ入力できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["バイト順序を ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_034",
              product: "dev"
            }), " に設定すると、カードデータを処理する際に上位バイトから下位バイトの順に処理し、カードのシリアル番号（CSN）を保存するときに左から右へ順に処理します。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_030",
              product: "dev"
            }), " は下位バイトから上位バイトの順に処理し、カードのシリアル番号（CSN）を保存します。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "カスタムスマートカードレイアウト",
      children: "カスタムスマートカードレイアウト"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-custom-card.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_151",
            product: "dev"
          }), "：補助サイトキーの使用可否を設定できます。 補助サイトキーを設定すると、カードの基本キーが一致しない場合に補助サイトキーを使用して認証を実行できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_032",
            product: "dev"
          }), "：MIFARE カードを設定できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), "：暗号化方式を Crypto-1 または AES-128 に設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), "：スマートカードとデバイス間の通信を暗号化するキーです。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), "：カードの基本サイトキーが一致しない場合に使用して認証を実行できます。 補助サイトキーの項目は、前レベルの ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " を有効にしたときのみ表示されます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_154",
                product: "dev"
              }), "：各テンプレートが保存される開始ブロックを選択してください。 このブロックはユーザー情報を保存するブロックのインデックスです。既にスマートカードを使用している場合は、保存可能なブロックを設定します。 MIFAREのみ設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_145",
                product: "dev"
              }), "：カード番号を読み取る開始位置を設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_110",
                product: "dev"
              }), "：（設定した", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), "と", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), "がカードの設定値と同じ場合）読み取るカードのデータサイズを設定できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_010",
            product: "dev"
          }), "：DESFireカードを設定できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_011",
                product: "dev"
              }), "：他社が発行したDESFireカードを使用できます。 DESFireのみ設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), "：スマートカードとデバイス間の通信を暗号化するキーです。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), "：カードの基本サイトキーが一致しない場合に使用して認証を実行できます。 補助サイトキーの項目は、前レベルの ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), " を有効にしたときのみ表示されます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_223",
                product: "dev"
              }), "：アプリケーションIDを設定してください。 ファイルIDを含む一種のディレクトリとして機能します。 DESFireのみ設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_347",
                product: "dev"
              }), "：ファイルIDを設定してください。 DESFireのみ設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_222",
                product: "dev"
              }), "：暗号化方式をDES/3DESまたはAESに設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_145",
                product: "dev"
              }), "：カード番号を読み取る開始位置を設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_110",
                product: "dev"
              }), "：（設定した", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_087",
                product: "dev"
              }), "と", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_151",
                product: "dev"
              }), "がカードの設定値と同じ場合）読み取るカードのデータサイズを設定できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_146",
            product: "dev"
          }), "：スマートカード出力のバイト順序を設定できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_011",
              product: "dev"
            }), "を使用するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_225",
              product: "dev"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_349",
              product: "dev"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_223",
              product: "dev"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_347",
              product: "dev"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_222",
              product: "dev"
            }), "の情報を正確に入力してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_224",
              product: "dev"
            }), "、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_348",
              product: "dev"
            }), "は最大32バイトの16進数のみ入力できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["バイト順序を ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_034",
              product: "dev"
            }), " に設定すると、カードデータを処理する際に上位バイトから下位バイトの順に処理し、カードのシリアル番号（CSN）を保存するときに左から右へ順に処理します。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_030",
              product: "dev"
            }), " は下位バイトから上位バイトの順に処理し、カードのシリアル番号（CSN）を保存します。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "キーパッド設定",
      children: "キーパッド設定"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-keypad.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_335",
            product: "dev"
          }), "：キーパッドの使用可否を設定できます。 キーパッドを有効にすると、キーパッドでカードIDを入力して認証できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_219",
            product: "dev"
          }), "：キーパッドでカードIDを入力する際、キーを押すたびに値を送信します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_306",
            product: "dev"
          }), "：キーパッドでカードIDを入力する際、すべてのキーを押した後に「#」キーを押すと、全値を一括で送信します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_327",
            product: "dev"
          }), "：デバイスの認証モードをカード＋PINに設定した場合、ユーザーがカードを提示するとLEDを動作させてPIN入力を促すことができます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_147",
            product: "dev"
          }), "：キーパッドのバックライトをオンまたはオフにできます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_336",
              product: "dev"
            }), "はXPD2-GKDBデバイスのテンプレート設定画面にのみ表示されます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_147",
              product: "dev"
            }), "はXPD2-GKDBハードウェアV02M、ファームウェアv1.7.1以上でのみサポートされます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスでキーパッドを通じて入力された値は、基本的に4ビット単位で送信されます。 キーパッドで入力したカードIDは、Wiegandカード形式に従ってカードIDと同じ形式で送信されます。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "その他",
      children: "その他"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/xpd2-template-others.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_150",
          product: "dev"
        }), "：デバイスでタンパーイベントが発生した場合、デバイスに保存されたセキュリティキーを削除するよう設定できます。 セキュリティタンパー機能を使用するには有効にしてください。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "led--ブザー",
      children: "LED / ブザー"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/device-manager-led-buzzer.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_272",
            product: "dev"
          }), "：通常時にデバイスLEDに表示される色を設定できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_325",
            product: "dev"
          }), "：デバイスにカードをスキャンする際にデバイスLEDに表示される色とブザー音の再生回数を設定できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_262",
            product: "dev"
          }), "：認証成功時にデバイスLEDに表示される色とブザー音の再生回数を設定できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_263",
            product: "dev"
          }), "：認証失敗時にデバイスLEDに表示される色とブザー音の再生回数を設定できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "LEDは最大3色を交互に繰り返し表示するよう設定できます。 スロットを押して色を選択してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Image, {
              src: "/img/common/ico-cancel2.svg",
              ico: true,
              alone: true
            }), " を選択すると、該当スロットの色表示順序をスキップし、次の順序のスロットに設定された色が表示されます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "テンプレートを適用する",
      children: "テンプレートを適用する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "追加したテンプレートはBLE通信を利用して複数台のデバイスに同一に適用できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["デバイスのファームウェアバージョンが低い場合、いくつかの設定が適用されないことがあります。 すべての設定を適用するには、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#device-firmware-upgrade",
          children: "デバイスファームウェアをアップグレードする"
        }), "を参照してファームウェアをアップグレードしてください。"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル機器でBluetooth機能を有効にした後、Suprema Device Managerを起動してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メイン画面で XPass D2 を選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_343",
            product: "dev"
          }), "を押してください。 選択可能なテンプレートの一覧が表示されます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-choose-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "テンプレート一覧から目的のテンプレートを選択してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_212",
            product: "dev"
          }), "を押してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-choose-select-start.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "テンプレートを適用するデバイスにモバイル機器の背面を完全に接触させてください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["テンプレート適用が完了したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "を押してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Suprema Device Managerで変更した設定はデバイスにのみ適用され、サーバーには同期されません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスがマスターデバイスと接続されているか、Wiegand出力設定が変更されている場合、Suprema Device Managerにデフォルトキーで接続できません。 Suprema Device Managerに接続するにはデバイスを初期化してください。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "テンプレートを管理する",
      children: "テンプレートを管理する"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "テンプレートを編集する",
      children: "テンプレートを編集する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル端末で Suprema Device Manager を起動します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メイン画面で XPass D2 を選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "を押してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "テンプレート一覧から編集するテンプレートを選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「", (0,jsx_runtime.jsx)(_components.a, {
            href: "#template-add",
            children: "テンプレートを追加"
          }), "」を参照してテンプレートを編集します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更した設定を保存するには ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_295",
            product: "dev"
          }), " を、新しいテンプレートとして保存するには ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_178",
            product: "dev"
          }), " を押します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "テンプレートを削除する",
      children: "テンプレートを削除する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル端末で Suprema Device Manager を起動します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メイン画面で XPass D2 を選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "を押してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "テンプレート一覧で削除するテンプレートを選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["テンプレートを削除するには ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-delete.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " を押します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-select-del.png",
          width: 250
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "テンプレートをエクスポートする",
      children: "テンプレートをエクスポートする"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XPass D2 設定のテンプレートをアプリからエクスポートできます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル端末で Suprema Device Manager を起動します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メイン画面で XPass D2 を選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "を押してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-export1.png",
          className: "none",
          width: 840
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["テンプレート一覧画面の上部で ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), " を押してから ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_339",
            product: "dev"
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["エクスポートするテンプレートを選択した後、", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-check.svg",
            ico: true,
            alone: true
          }), " を押します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-export2.png",
          width: 250
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["テンプレートは Suprema Device Manager アプリケーションのインストールファイルと同じ場所に作成される ", (0,jsx_runtime.jsx)(_components.em, {
          children: "DeviceManager_TemplateFiles"
        }), " フォルダーに保存されます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "テンプレートをインポートする",
      children: "テンプレートをインポートする"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "XPass D2 設定のテンプレートをアプリにインポートできます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル端末で Suprema Device Manager を起動します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メイン画面で XPass D2 を選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_338",
            product: "dev"
          }), "を押してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-import.png",
          className: "none",
          width: 840
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["テンプレート一覧画面の上部で ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), " を押してから ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_337",
            product: "dev"
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "テンプレートが保存されているフォルダーでインポートするテンプレートを選択します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["テンプレートは Suprema Device Manager アプリケーションのインストールファイルと同じ場所に作成される ", (0,jsx_runtime.jsx)(_components.em, {
          children: "DeviceManager_TemplateFiles"
        }), " フォルダーに保存されます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device-search-connect",
      children: "デバイスの検索と接続"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "周辺に設置された XPass D2 を検索して接続できます。 Suprema Device Manager と接続すると、デバイスのファームウェアのアップグレードやデバイスの再起動、テンプレートのパスワード変更など、さまざまな機能を利用できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル機器でBluetooth機能を有効にした後、Suprema Device Managerを起動してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メイン画面で XPass D2 を選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_285",
            product: "dev"
          }), " を押します。 接続可能なデバイスの一覧が表示されます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-search-device-select.png",
          className: "none",
          width: 540
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "デバイス一覧でデバイス ID を確認してデバイスを選択するか、接続するデバイスにモバイル機器を近づけます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["接続パスワードを入力します。 入力したパスワードを画面に表示するには ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-password.svg",
            ico: true,
            alone: true
          }), " を押します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスの接続を完了するには ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " を押します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device-firmware-upgrade",
      children: "デバイスのファームウェアをアップグレードする"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスのファームウェアを簡単にアップグレードできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ファームウェアをアップグレードするには、モバイル機器にファームウェアファイルをダウンロードする必要があります。 最新ファームウェアは", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://download.supremainc.com/",
              children: "Suprema ダウンロードセンター"
            }), "からダウンロードできます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ファームウェアのアップグレード中は、デバイスとモバイル機器の距離を 1 m 以内に保ってください。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「", (0,jsx_runtime.jsx)(_components.a, {
            href: "#device-search-connect",
            children: "デバイスの検索と接続"
          }), "」を参照して、ファームウェアをアップグレードするデバイスと接続します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_018",
            product: "dev"
          }), " を押します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-fwupgrade.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ファームウェアファイルが保存されているパスでファームウェアを選択します。 ファームウェアのアップグレードが実行されます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ファームウェアのアップグレードを完了するには ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " を押します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイスを再起動する",
      children: "デバイスを再起動する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスを再起動できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「", (0,jsx_runtime.jsx)(_components.a, {
            href: "#device-search-connect",
            children: "デバイスの検索と接続"
          }), "」を参照して、再起動するデバイスと接続します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_287",
            product: "dev"
          }), " を押します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-restart.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスを再起動すると、モバイル機器との BLE 通信が切断されます。 自動で再接続するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_276",
            product: "dev"
          }), " 機能を有効にします。 詳細な設定方法は「", (0,jsx_runtime.jsx)(_components.a, {
            href: "initial-setup#app-settings",
            children: "アプリを設定する"
          }), "」を参照してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "admin-password-change",
      children: "管理者パスワードを変更する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "テンプレートの管理者パスワードを変更できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「", (0,jsx_runtime.jsx)(_components.a, {
            href: "#device-search-connect",
            children: "デバイスの検索と接続"
          }), "」を参照し、パスワードを変更するテンプレートが適用されたデバイスと接続します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_156",
            product: "dev"
          }), " を押します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/xpd2-template-management-password.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "現在のパスワードと新しいパスワードを入力します。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-manager-change-password.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["パスワードの変更を完了するには ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " を押します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "管理者パスワードは 6～32 桁の数字で設定できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "管理者パスワードを紛失しないよう注意してください。 管理者パスワードを紛失した場合、テンプレートを適用したデバイスに接続するにはそのデバイスを初期化する必要があります。"
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