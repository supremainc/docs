"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["43239"], {
25036: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_device_manager_ip_device_settings_mdx_f17_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-device-manager-ip-device-settings-mdx-f17.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_device_manager_ip_device_settings_mdx_f17_namespaceObject = JSON.parse('{"id":"device/device_manager/ip-device-settings","title":"IPデバイスを設定する","description":"IPデバイスの設定を変更できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/device_manager/ip-device-settings.mdx","sourceDirName":"device/device_manager","slug":"/device/device_manager/ip-device-settings","permalink":"/docs/ja/device/device_manager/ip-device-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/device_manager/ip-device-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"ip-device-settings","title":"IPデバイスを設定する","description":"IPデバイスの設定を変更できます。","keywords":["IPデバイス","ネットワーク","サーバー","RS-485","その他","LED/ブザー","デバイス設定","デバイス接続","ファームウェアをアップグレードする","デバイス再起動","設定の初期化","パスワード変更"],"isTranslationMissing":false},"sidebar":"device_manager","previous":{"title":"デバイスを初期設定する","permalink":"/docs/ja/device/device_manager/initial-setup"},"next":{"title":"XPass D2 を設定する","permalink":"/docs/ja/device/device_manager/xpd2-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/device_manager/ip-device-settings.mdx


const frontMatter = {
	id: 'ip-device-settings',
	title: 'IPデバイスを設定する',
	description: 'IPデバイスの設定を変更できます。',
	keywords: [
		'IPデバイス',
		'ネットワーク',
		'サーバー',
		'RS-485',
		'その他',
		'LED/ブザー',
		'デバイス設定',
		'デバイス接続',
		'ファームウェアをアップグレードする',
		'デバイス再起動',
		'設定の初期化',
		'パスワード変更'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "デバイス設定を変更する",
  "id": "デバイス設定を変更する",
  "level": 2
}, {
  "value": "ネットワーク設定",
  "id": "ネットワーク設定",
  "level": 3
}, {
  "value": "サーバー",
  "id": "サーバー",
  "level": 3
}, {
  "value": "RS-485",
  "id": "rs-485",
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
  "value": "デバイスを接続する",
  "id": "connect-device",
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
  "value": "設定を初期化する",
  "id": "設定を初期化する",
  "level": 2
}, {
  "value": "ネットワーク以外のデバイス設定を初期化する",
  "id": "ネットワーク以外のデバイス設定を初期化する",
  "level": 2
}, {
  "value": "デバイスパスワードを変更する",
  "id": "デバイスパスワードを変更する",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcFilter, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcFilter) _missingMdxReference("IcFilter", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "IPデバイスの設定を変更できます。 PCで管理プログラムに接続して設定を変更したり、コマンドカードを使用する方法よりも、より迅速かつ便利に設定を変更できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["デバイスのファームウェアバージョンが低い場合、いくつかの設定が適用されないことがあります。 すべての設定を適用するには、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#device-firmware-upgrade",
          children: "デバイスファームウェアをアップグレードする"
        }), "を参照してファームウェアをアップグレードしてください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイス設定を変更する",
      children: "デバイス設定を変更する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスのネットワーク、サーバー、RS-485、LEDおよびブザー、その他の設定を変更できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "バイオ認証デバイスはネットワークとサーバー設定のみをサポートします。"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル機器でBluetooth機能を有効にした後、Suprema Device Managerを起動してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メイン画面でIPデバイスを選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接続可能なデバイス一覧でデバイスIDを確認してデバイスを選択するか、接続するデバイスにモバイル端末を近づけます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスパスワードを設定した後、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "をタップします。 入力したパスワードを画面に表示するには ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-password.svg",
            ico: true,
            alone: true
          }), " を押します。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "デバイスパスワードは6~32桁の数字で設定できます。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "デバイスパスワードを紛失しないよう注意してください。 デバイスパスワードを紛失した場合、デバイスに接続するにはそのデバイスを初期化する必要があります。"
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["各項目を設定したら、保存するために", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_288",
            product: "dev"
          }), "をタップします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ネットワーク設定",
      children: "ネットワーク設定"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/ip-device-network.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_355",
            product: "dev"
          }), "：デバイスが使用するポートを入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_012",
            product: "dev"
          }), "：デバイスでDHCPを使用する場合は有効にします。 このオプションを有効にすると、ネットワーク情報を直接入力できません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_029",
            product: "dev"
          }), "、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_068",
            product: "dev"
          }), "、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_191",
            product: "dev"
          }), "：デバイスのネットワーク情報を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_013",
            product: "dev"
          }), "：DNSサーバーアドレスを入力します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "サーバー",
      children: "サーバー"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/ip-device-server.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_188",
            product: "dev"
          }), "：サーバー通信方式を設定できます。 サーバーからデバイスを検索して接続する場合は", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_181",
            product: "dev"
          }), "を選択します。 デバイス側で接続先サーバー情報を設定する場合は", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_281",
            product: "dev"
          }), "を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_182",
            product: "dev"
          }), "：サーバーのIPアドレスを入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_183",
            product: "dev"
          }), "：サーバーのドメインアドレスを入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_189",
            product: "dev"
          }), "：サーバーのポートを入力します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rs-485",
      children: "RS-485"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/ip-device-rs485.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_050",
            product: "dev"
          }), "：RS-485モードを設定します。"]
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
      id: "その他",
      children: "その他"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/ip-device-others.png",
      width: 250
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_132",
            product: "dev"
          }), "：メモリ使用状況を確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_150",
            product: "dev"
          }), "：デバイスでタンパーイベントが発生した場合、保存されている全ユーザー情報、全ログ、セキュリティキーを削除するように設定できます。 セキュリティタンパー機能を使用するには有効にしてください。"]
        }), "\n"]
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
      id: "connect-device",
      children: "デバイスを接続する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "周辺に設置されたIPデバイスを検索して接続できます。 Suprema Device Managerに接続すると、デバイスのファームウェアアップグレード、デバイス再起動、設定初期化、ネットワークを除く設定の初期化、管理者パスワード変更など、さまざまな機能を利用できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル機器でBluetooth機能を有効にした後、Suprema Device Managerを起動してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メイン画面でIPデバイスを選択します。 接続可能なデバイスの一覧が表示されます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-connect.png",
          width: 250
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
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_291",
          product: "dev"
        }), "：デバイス一覧画面の上部で", (0,jsx_runtime.jsx)(IcFilter, {}), "をタップして、目的のデバイスのみが一覧に表示されるように設定できます。"]
      })
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
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "デバイスを接続する"
          }), "を参照して、ファームウェアをアップグレードするデバイスに接続します。"]
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
          src: "/img/device/ip-device-fwupgrade.png",
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
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "デバイスを接続する"
          }), "を参照して、再起動するデバイスに接続します。"]
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
          src: "/img/device/ip-device-restart.png",
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
      id: "設定を初期化する",
      children: "設定を初期化する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイス設定を初期化できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "デバイスを接続する"
          }), "を参照して、設定を初期化するデバイスに接続します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_195",
            product: "dev"
          }), "をタップします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-restore-default.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスを初期化すると、適用されているすべての設定が初期値に復元されます。 続行するには", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "をタップします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ネットワーク以外のデバイス設定を初期化する",
      children: "ネットワーク以外のデバイス設定を初期化する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ネットワーク設定を除くデバイス設定を初期化できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "デバイスを接続する"
          }), "を参照して、ネットワーク設定を除く設定を初期化するデバイスに接続します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-option.svg",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_105",
            product: "dev"
          }), "をタップします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/ip-device-restore-default-network.png",
          width: 250
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ネットワーク以外のデバイス設定を初期化すると、ネットワークを除くその他の設定が初期化されます。 続行するには", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), "をタップします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイスパスワードを変更する",
      children: "デバイスパスワードを変更する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスのパスワードを変更できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#connect-device",
            children: "デバイスを接続する"
          }), "を参照して、パスワードを変更するデバイスに接続します。"]
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
          src: "/img/device/ip-device-change-password.png",
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
            children: "デバイスパスワードは6~32桁の数字で設定できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスパスワードを紛失しないよう注意してください。 デバイスパスワードを紛失した場合、デバイスに接続するにはそのデバイスを初期化する必要があります。"
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