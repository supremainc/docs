"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["38431"], {
55808: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_network_mdx_53a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-network-mdx-53a.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_network_mdx_53a_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-network","title":"ネットワークを設定する","description":"デバイスの TCP/IP、RS-485、サーバー通信などのネットワーク設定を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-network.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-network","permalink":"/docs/ja/platform/biostar_x/settings-device-details-network","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-network.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-network","title":"ネットワークを設定する","description":"デバイスの TCP/IP、RS-485、サーバー通信などのネットワーク設定を説明します。","keywords":["デバイス","ネットワーク","TCP/IP","RS-485","サーバー通信","シリアル通信","インテリジェントスレーブ"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"基本情報を設定する","permalink":"/docs/ja/platform/biostar_x/settings-device-details-info"},"next":{"title":"認証を設定する","permalink":"/docs/ja/platform/biostar_x/settings-device-details-auth"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-network.mdx


const frontMatter = {
	id: 'settings-device-details-network',
	title: 'ネットワークを設定する',
	description: 'デバイスの TCP/IP、RS-485、サーバー通信などのネットワーク設定を説明します。',
	keywords: [
		'デバイス',
		'ネットワーク',
		'TCP/IP',
		'RS-485',
		'サーバー通信',
		'シリアル通信',
		'インテリジェントスレーブ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "TCP/IP 設定",
  "id": "tcpip-設定",
  "level": 2
}, {
  "value": "動的 IP 設定",
  "id": "動的-ip-設定",
  "level": 3
}, {
  "value": "固定 IP 設定",
  "id": "固定-ip-設定",
  "level": 3
}, {
  "value": "無線 LAN 設定",
  "id": "無線-lan-設定",
  "level": 2
}, {
  "value": "サーバー通信設定",
  "id": "サーバー通信設定",
  "level": 2
}, {
  "value": "シリアル通信設定",
  "id": "シリアル通信設定",
  "level": 2
}, {
  "value": "インテリジェントスレーブ設定",
  "id": "インテリジェントスレーブ設定",
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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Details, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["登録した装置のネットワーク設定を案内します。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.network",
        product: "2"
      }), " セクションでは、装置のTCP/IP、RS-485、サーバー通信などのネットワークを設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-network.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスの種類によって設定できるネットワークオプションが異なる場合があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザーが任意で変更した内容がある場合は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " をクリックします。 変更内容を保存しないとデバイスに反映されません。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tcpip-設定",
      children: "TCP/IP 設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tcpIpSetting",
        product: "2"
      }), " グループではデバイスの IP アドレスを設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["デバイスを登録する際の IP アドレス設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-adding-devices#setipaddress",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "動的-ip-設定",
      children: "動的 IP 設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["装置を動的IPで使用するよう設定するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.useDhcp",
        product: "2"
      }), " オプションのチェックボックスをクリックします。 デバイスが DHCP サーバーから IP アドレスを自動取得します。 この場合、デバイスの IP アドレスが変更されることがあります。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "固定-ip-設定",
      children: "固定 IP 設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["装置のIPアドレスを固定に設定するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.useDhcp",
        product: "2"
      }), " オプションのチェックボックスの選択を解除します。 以下の詳細項目に装置のネットワーク情報を入力できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.ipAddress",
            product: "2"
          }), "：デバイスの IP アドレスを入力します。 IP アドレスは ", (0,jsx_runtime.jsx)(_components.code, {
            children: "xxx.xxx.xxx.xxx"
          }), " 形式で入力でき、各オクテットには 0〜255 の数値のみを入力できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.subnetMask",
            product: "2"
          }), "：デバイスのサブネットマスクを入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.gateway",
            product: "2"
          }), "：デバイスのゲートウェイアドレスを入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.devicePort",
            product: "2"
          }), "：デバイスのポート番号を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.dnsServerAddress",
            product: "2"
          }), "：デバイスの DNS サーバーアドレスを入力します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "DNS サーバーアドレスを入力できるデバイスとファームウェアバージョンを表示"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation L2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation A2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 2 ファームウェア 1.2.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation 2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioLite N2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceLite ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass 2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation F2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "X-Station 2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "無線-lan-設定",
      children: "無線 LAN 設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.wlan",
        product: "2"
      }), " グループではデバイスの無線 LAN 設定をオンまたはオフにできます。 詳細項目はデバイスで設定でき、詳細はデバイスのユーザーガイドを参照してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "無線 LAN 設定に対応するデバイスは以下を参照してください。"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 2"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation A2"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation 2"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "サーバー通信設定",
      children: "サーバー通信設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.server",
        product: "2"
      }), " グループでは ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " サーバーとの通信方法を設定できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceToServerConnection",
            product: "2"
          }), "：このオプションを選択すると、デバイスで接続する ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーの IP アドレスとポート番号を入力できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.serverIP",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーの IP アドレスまたはドメインアドレスを入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.serverPort",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーのポート番号を入力します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["この機能は ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " サーバーの IP アドレスが変更される際に便利です。 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " サーバーの IP アドレスを変更する前に複数のデバイスでこのオプションを事前に設定しておくと、デバイスは自動的に変更後の IP アドレスへ接続します。"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.serverIP",
          product: "2"
        }), " にドメインを入力できるデバイスとファームウェアバージョンを表示"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation L2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation A2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 2 ファームウェア 1.2.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry P2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation 2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceLite ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation F2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioLite N2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass 2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "X-Station 2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "シリアル通信設定",
      children: "シリアル通信設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.serialSetting",
        product: "2"
      }), " グループでは RS-485 通信方式で接続されたデバイスのモード、伝送速度、および表示する認証結果を設定できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.rs485",
            product: "2"
          }), "：RS-485 モードを設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.baudRate",
            product: "2"
          }), "：RS-485 通信速度を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.osdpAuthResult",
            product: "2"
          }), "：他社コントローラーと連携してデバイスを使用する際、デバイス画面に表示する認証結果を選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.osdpControllerResult",
                product: "2"
              }), "：他社コントローラーの認証結果をデバイスに表示できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.osdpDeviceResult",
                product: "2"
              }), "：デバイスの認証結果を表示できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.osdpAuthResult",
          product: "2"
        }), " オプションは、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.rs485",
          product: "2"
        }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.rs485.slave",
          product: "2"
        }), " または ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.rs485.default",
          product: "2"
        }), " を選択した場合に有効になります。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "インテリジェントスレーブ設定",
      children: "インテリジェントスレーブ設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.intelligentPD",
        product: "2"
      }), " グループでは、Suprema デバイスと他社コントローラーを組み合わせた環境でユーザーが指紋認証を行った際、その認証結果を ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../reference/glossary#osdp",
        children: "Open Supervised Device Protocol(OSDP)"
      }), " のカードデータとして送信し、多数の 1:1 または 1", ":N", " マッチングをサポートします。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.ipdUseFailCode",
            product: "2"
          }), "：インテリジェントスレーブを使用する際に認証失敗などの例外が発生した場合、例外コードを10進数(0~18446744073709551615)または16進数(0~FFFFFFFFFFFFFFFF)形式で入力して正確なログを残せます。 16進数は数字または英字で入力できます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-edit-network-exception-code.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.ipdCardFormat",
            product: "2"
          }), "：認証が成功したときにカードIDまたはユーザーIDを出力できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.ipdOsdpID",
            product: "2"
          }), "：装置のOSDPアドレスを入力してください。 0~126 の範囲の数字で入力できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.ipdUseFailCode",
              product: "2"
            }), "のデータサイズは最大8バイトまで入力できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.intelligentPD",
              product: "2"
            }), " オプションは、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.rs485",
              product: "2"
            }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.rs485.default",
              product: "2"
            }), " を選択したときに有効になります。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.intelligentPD",
          product: "2"
        }), " オプションをサポートするデバイスとファームウェアバージョンを表示"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W2 ファームウェア 1.6.3 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation L2 ファームウェア 1.6.1 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry P2 ファームウェア 1.4.1 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass 2 ファームウェア 1.2.3 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "X-Station 2 ファームウェア 1.1.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioLite N2 ファームウェア 1.4.1 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation F2 ファームウェア 1.1.2 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 3 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W3 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n"]
      })]
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