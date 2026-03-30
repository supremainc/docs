"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["91868"], {
73583: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_vionyx_installation_mdx_ab0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-vionyx-installation-mdx-ab0.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_vionyx_installation_mdx_ab0_namespaceObject = JSON.parse('{"id":"device/vionyx/installation","title":"設置と接続","description":"インストールに必要な全手順と接続例を提供します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/vionyx/installation.mdx","sourceDirName":"device/vionyx","slug":"/device/vionyx/installation","permalink":"/docs/ja/device/vionyx/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx/installation.mdx","tags":[],"version":"current","frontMatter":{"id":"installation","title":"設置と接続","description":"インストールに必要な全手順と接続例を提供します。","keywords":["マウントプレート","電源","ネットワーク","入力","リレー"],"isTranslationMissing":false},"sidebar":"vionyx","previous":{"title":"はじめに","permalink":"/docs/ja/device/vionyx/getting-started"},"next":{"title":"Webサーバーへの接続と設定","permalink":"/docs/ja/device/vionyx/web-server-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/vionyx/installation.mdx


const frontMatter = {
	id: 'installation',
	title: '設置と接続',
	description: 'インストールに必要な全手順と接続例を提供します。',
	keywords: [
		'マウントプレート',
		'電源',
		'ネットワーク',
		'入力',
		'リレー'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*### 전체 연결 구성도

<Magnify src='/img/device/system-cs20.svg' width='80%' zoomFactor={.4} mgWidth={500} mgHeight={500} />

:::info

製品のUSB端子はカメラ設置の利便性を高めるための拡張端子であり、撮影／監視用途には適していません。

:::*/


const toc = [{
  "value": "カメラの設置",
  "id": "カメラの設置",
  "level": 2
}, {
  "value": "設置前の注意事項",
  "id": "設置前の注意事項",
  "level": 3
}, {
  "value": "インストール",
  "id": "インストール",
  "level": 3
}, {
  "value": "ケーブルの接続と設定",
  "id": "ケーブルの接続と設定",
  "level": 2
}, {
  "value": "電源接続",
  "id": "電源接続",
  "level": 3
}, {
  "value": "ネットワーク接続",
  "id": "ネットワーク接続",
  "level": 3
}, {
  "value": "TCP/IP: LAN接続（ハブへの接続）",
  "id": "tcpip-lan接続ハブへの接続",
  "level": 4
}, {
  "value": "ネットワークポートおよびサービス",
  "id": "ネットワークポートおよびサービス",
  "level": 4
}, {
  "value": "RS-485 接続",
  "id": "rs-485-接続",
  "level": 3
}, {
  "value": "ALARM IN、RELAY 入出力の接続",
  "id": "alarm-inrelay-入出力の接続",
  "level": 3
}, {
  "value": "オーディオ接続",
  "id": "オーディオ接続",
  "level": 3
}, {
  "value": "Micro SDカードおよびUSB機器の接続",
  "id": "micro-sdカードおよびusb機器の接続",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
  }, {Image, Row, Table, Tbody, Td, Th, Thead} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Row) _missingMdxReference("Row", true);
  if (!Table) _missingMdxReference("Table", true);
  if (!Tbody) _missingMdxReference("Tbody", true);
  if (!Td) _missingMdxReference("Td", true);
  if (!Th) _missingMdxReference("Th", true);
  if (!Thead) _missingMdxReference("Thead", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "インストールに必要な全手順と接続例を提供します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "カメラの設置",
      children: "カメラの設置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下の手順に従って、カメラを安全に設置してください。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "設置前の注意事項",
      children: "設置前の注意事項"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "カメラを設置する前に、以下の注意事項を必ずお読みください。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "カメラの重量の少なくとも5倍の荷重に耐えられる場所に設置してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ケーブルが不適切な場所に挟まれたり、電線の被覆が損傷した場合、製品の破損や火災につながる可能性があるため、注意してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "カメラを設置する際は、他の人が作業場所に立ち入らないようにしてください。 設置場所の下に貴重品や破損のおそれのある物がある場合は、事前に移動してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "無理な力を加えて無理に組み立てると、製品の誤動作や破損の原因となる場合があります。 必ず規格に合った工具を使用してください。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "防水/防塵に関する注意事項"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "本製品はIP66およびIP67等級に準拠し、防水/防塵機能を備えていますが、直接の水の噴射や継続的な浸水がある環境には設置しないでください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "設置中にカバーを開ける際は、内部に水分や埃が入らないように注意してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ケーブル接続時には、付属の防水部品を正しく取り付けてください。"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "インストール",
      children: "インストール"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "本カメラは広い視野を確保するため、基本的には天井への設置を推奨します。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "直射日光や紫外線が当たる場所には設置しないでください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "AIベースの顔および物体認識の性能が低下するおそれがあるため、レンズに直射日光が当たる場所や逆光が強い場所は避け、設置位置を調整してください。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "付属のT10星形ドライバーを使用して、ねじを反時計回りに緩め、カメラのカバーを取り外してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation1-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "マウントプレートの固定ネジを反時計回りに緩め、マウントプレートとカメラ本体を分離してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation2-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "カメラ本体のmicroSDカードスロットにmicroSDカードを挿入してください。 USB（Type-A）対応の他のアクセサリを接続する場合は、USBポートに接続してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation-usb-sdcard-connection-vionyx.png",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "撮影方向を考慮して、設置位置にマウントプレートを当て、ネジ穴とケーブル穴の位置をマーキングしてから穴を開けてください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation3-vionyx.png",
          className: "none",
          width: "50%",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "壁面に設置する場合は、マウントプレートの赤い三角が12時（北）を指すように取り付けてください。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接続するケーブル(電源、ネットワーク、オーディオ/アラームケーブルなど)をマウントプレートの適切な穴に通してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation5-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "固定用ネジでマウントプレートをしっかり固定してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation4-vionyx.svg",
          className: "none",
          width: "40%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "カメラ本体からイーサネットケーブル用の防水ゴムおよび防水ゴムのホールプラグを取り外し、必要なケーブルを本体に接続してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation6-vionyx.svg",
          className: "none",
          width: "70%",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "イーサネットケーブルの接続"
            })
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation11-1-vionyx.svg",
            className: "none",
            width: "30%",
            alone: true
          }), (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "イーサネットケーブルに取り外したイーサネット用防水ゴムを通してください。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "本体のイーサネット用開口部に防水ゴムを取り付けてください。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "イーサネットケーブル用の防水ゴムにジョイントとナットを取り付け、締め付けてください。"
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "その他のケーブルの接続"
            })
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "本体の防水ゴムホールプラグを取り外した穴に接続ケーブルを通し、防水ゴムを取り付けてください。"
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation11-2-vionyx.svg",
            className: "none",
            width: "80%",
            alone: true
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "マウントプレートの固定ネジを最後まで緩め、カメラ本体を印刷された刻印の中心（赤い三角）に合わせて取り付けた後、ブラケット固定ネジを時計回りに回して固定してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation8-vionyx.svg",
          className: "none",
          width: "40%",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "取付角度を調整する必要がある場合は、本体を左右に回転させて最大15度（左右各8度）まで設置角度を調整できます。"
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation9-vionyx.png",
            className: "none",
            width: "50%",
            alone: true
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "T10のトルクスドライバーを使用して、ブラケット固定ネジをもう一度しっかり締めてください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation10-vionyx.svg",
          className: "none",
          width: "30%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "カバーをカメラ本体に取り付け、T10トルクスドライバーで3本のネジをしっかり締めて固定してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/installation12-vionyx.svg",
          className: "none",
          width: "60%",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "カバーのAIロゴがマウントプレートの赤い三角を基準にして6時の位置（南）になるようにしてください。"
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/camera/installation14-vionyx.svg",
            className: "none",
            width: "20%",
            alone: true
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "caution",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "カバーを固定する際にネジを完全に締めないと、防水性能に問題が生じる場合があります。 (IP66/IP67)"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ケーブルの接続と設定",
      children: "ケーブルの接続と設定"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "電源接続",
      children: "電源接続"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-power-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "電源装置（またはアダプター）とPoE+電源装置を同時に接続しないでください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "電源アダプターはIEC/EN 62368-1の認証を受けた製品で、カメラの最大消費電力以上の出力を持つものを使用してください。 電源アダプターに他の機器を同時に接続して使用する場合は、カメラと他の機器の消費電力を合算した容量以上のアダプターを使用してください。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["最大消費電流の規格は製品仕様の", (0,jsx_runtime.jsx)(_components.a, {
                href: "product-specifications#specs.power",
                children: "電源"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "電源を接続する際は製品と電源装置の距離に注意してください。 製品と電源装置はできるだけ近くに設置する必要があります。 正しく接続しないと製品が誤動作する恐れがあるため注意してください。 製品と電源装置の距離が長い場合は16 AWGまたは18 AWGケーブルの使用を推奨します。 使用するケーブルの規格や設置環境によって接続できる距離が異なる場合があります。 本製品はDC 12 V電源に対応しているため、各ケーブル規格ごとの最大延長長さを確認し、適切に電源を接続してください。"
          }), "\n", (0,jsx_runtime.jsxs)(Table, {
            children: [(0,jsx_runtime.jsx)(Thead, {
              children: (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Th, {
                  children: "ケーブル規格"
                }), (0,jsx_runtime.jsx)(Th, {
                  children: "最大延長長さ"
                })]
              })
            }), (0,jsx_runtime.jsxs)(Tbody, {
              children: [(0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "16 AWG"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "50 m"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "18 AWG"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "30 m"
                })]
              }), (0,jsx_runtime.jsxs)(Row, {
                children: [(0,jsx_runtime.jsx)(Td, {
                  children: "20 AWG"
                }), (0,jsx_runtime.jsx)(Td, {
                  children: "20 m"
                })]
              })]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "電源アダプターを使用する場合、電源ケーブルの長さを任意に延長しないでください。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ネットワーク接続",
      children: "ネットワーク接続"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tcpip-lan接続ハブへの接続",
      children: "TCP/IP: LAN接続（ハブへの接続）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一般的なCAT-5eケーブルを使用してハブに接続できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "イーサネットケーブルを介してデータと電力を同時に供給するPoE+に対応しています。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-network-hub-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ネットワークポートおよびサービス",
      children: "ネットワークポートおよびサービス"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本製品はネットワーク通信および円滑なサービス運用のため、以下のポートを使用します。"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "プロトコル"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "サービス"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TCP"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "サーバーとデバイス間の通信サービスおよびデバイスの運用状態切り替えサービスに使用されます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "UDP"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ネットワーク上のデバイス検索サービスに使用されます。"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "上記のポートは製品の正常なネットワーク機能の提供に必要です。ファイアウォールやネットワークセキュリティの設定を行う際は、これらのポートを許可してください。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rs-485-接続",
      children: "RS-485 接続"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RS-485通信を介して外部機器と接続できます。 配線時は極性（A/B）にご注意ください。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-rs485-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alarm-inrelay-入出力の接続",
      children: "ALARM IN、RELAY 入出力の接続"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "別途I/O機器を用意することなく、本製品内蔵のリレーで外部アラーム機器（回転灯、サイレン等）、ドアロック、退出ボタン、ドアセンサー等に直接接続できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-io-inout-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ドアロックや回転灯が作動したときに発生する逆電流からリレーを保護するため、図のように配線の両側にダイオードを取り付けてください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "本製品に接続する外部機器（ドアロック等）には、別の電源を使用してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Suprema のインテリジェントデバイスには、利便性向上のためにコントローラーを介さずスタンドアロンで接続し、扉を直接開閉できるリレーが内蔵されています。 しかし、より高いセキュリティが求められる入退室管理アプリケーションでは、扉のロック解除を引き起こす可能性のある改ざん攻撃を防ぐため、デバイス内蔵のリレーを使用しないことを推奨します。 このようなアプリケーションでは、ロック制御用に扉内部の安全な位置に設置した Suprema Secure I/O 2、DM-20、CoreStation などの別体リレー装置の使用を推奨します。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "ダイオードの取り付け方向に注意してください。 ダイオードは接続される外部機器にできるだけ近い場所に取り付けてください。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "オーディオ接続",
      children: "オーディオ接続"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "オーディオ入力（LINE IN）：音源を接続してください。 本製品は前面にマイクを内蔵しています。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "オーディオ出力（LINE OUT）：アンプに接続してください。 本製品には内蔵オーディオアンプがないため、別途アンプとスピーカーを用意してください。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-audio-connection-vionyx.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "micro-sdカードおよびusb機器の接続",
      children: "Micro SDカードおよびUSB機器の接続"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/installation-usb-sdcard-connection-vionyx.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Micro SDカード：映像を保存するためのMicro SDカードを挿入してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "USB：USB（Type-A）対応のアクセサリを接続してください。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Micro SD/SDHC/SDXCカードの推奨仕様"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "推奨容量：16GB～1TB"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "本製品では、以下のメーカーの製品群のメモリカードの使用を推奨します。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "メーカー：Samsung、SanDisk、Transcend"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "製品群：High endurance、Pro endurance"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "カードの互換性はメーカーや種類によって異なる場合があります。"
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