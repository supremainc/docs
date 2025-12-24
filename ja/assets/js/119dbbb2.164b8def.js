"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["60571"], {
95367: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_configuration_mdx_119_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-corestation-setup-manager-configuration-mdx-119.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_configuration_mdx_119_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/configuration","title":"デバイス構成","description":"デバイスの設定と管理について説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/configuration.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/configuration","permalink":"/docs/ja/device/corestation_setup_manager/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/configuration.mdx","tags":[],"version":"current","frontMatter":{"id":"configuration","title":"デバイス構成","description":"デバイスの設定と管理について説明します。","keywords":["デバイス構成","スレーブ","情報","ネットワーク","認証","高度な設定"],"isTranslationMissing":false},"sidebar":"corestation_setup_manager","previous":{"title":"デバイスを初期設定する","permalink":"/docs/ja/device/corestation_setup_manager/initial-setup"},"next":{"title":"モニタリング","permalink":"/docs/ja/device/corestation_setup_manager/monitoring"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/configuration.mdx


const frontMatter = {
	id: 'configuration',
	title: 'デバイス構成',
	description: 'デバイスの設定と管理について説明します。',
	keywords: [
		'デバイス構成',
		'スレーブ',
		'情報',
		'ネットワーク',
		'認証',
		'高度な設定'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "スレーブデバイスの検索と登録",
  "id": "スレーブデバイスの検索と登録",
  "level": 2
}, {
  "value": "デバイス再起動",
  "id": "デバイス再起動",
  "level": 2
}, {
  "value": "デバイス設定および情報の編集",
  "id": "デバイス設定および情報の編集",
  "level": 2
}, {
  "value": "情報",
  "id": "情報",
  "level": 3
}, {
  "value": "ネットワーク",
  "id": "ネットワーク",
  "level": 3
}, {
  "value": "認証",
  "id": "認証",
  "level": 3
}, {
  "value": "高度な設定",
  "id": "高度な設定",
  "level": 3
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスの設定と管理について説明します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "スレーブデバイスの検索と登録",
      children: "スレーブデバイスの検索と登録"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation にスレーブデバイスを追加して、簡単に入退室管理システムのネットワークを拡張できます。 CoreStation（マスターデバイス）とスレーブデバイスは RS-485 で接続でき、デバイスだけでなく Secure I/O などの周辺装置も接続して使用できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CONFIGURE"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Device List の CoreStation を右クリックし、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Search Slave Device"
          }), " をクリックします。 CoreStation に接続されているスレーブデバイスのリストが表示されます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/config-search-slave-device1.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["スレーブとして登録するデバイスを選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add"
          }), " をクリックします。 また、個々のポートを選択してスレーブデバイスを追加することもできます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/config-search-slave-device2.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイス再起動",
      children: "デバイス再起動"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスを再起動できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CONFIGURE"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Device List の CoreStation を右クリックし、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reboot"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/config-reboot.png",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイス設定および情報の編集",
      children: "デバイス設定および情報の編集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation の詳細を設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CONFIGURE"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各項目を設定してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべての設定を完了し、変更を保存するには ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "情報",
      children: "情報"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-information.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "名称"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "機能説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Name"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイス名を確認できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device ID"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイス ID を確認できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device Type"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイスタイプを確認できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Firmware Version"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Firmware Upgrade"
              }), " をクリックし、アップグレードするファームウェアファイルを選択すると、新しいバージョンのファームウェアをインストールできます。"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Kernel Version"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カーネルバージョンを確認できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Hardware Version"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ハードウェアバージョンを確認できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Factory Default"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイスに保存されているすべての情報とルート証明書を削除し、設定を初期化できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Restore to Default"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["デバイスの設定を初期化できます。", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ALL"
              }), "：すべての設定を初期化します。", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "without Network"
              }), "：ネットワーク設定以外のすべてを初期化します。"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Locked"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["動作条件によりデバイスがロックされている場合、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Unlock"
              }), " ボタンを使用できます。"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Time Zone"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイスのタイムゾーンを設定できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Display Date"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["日付と時刻を手動で設定できます。", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Get Time"
              }), "：デバイスに設定されている時刻を取得するにはクリックします。", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Set Time"
              }), "：CoreStation Setup Manager に設定されている時刻をデバイスに適用するにはクリックします。"]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Factory Default"
        }), " メニューは、デバイスにルート証明書が保存されている場合に利用できます。 出荷時設定を実行すると管理者アカウントが削除されます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ネットワーク",
      children: "ネットワーク"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-network.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "名称"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "機能説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Use DHCP"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイスを DHCP で動的 IP アドレスを使用するように設定するには選択します。 この項目を選択すると固定 IP アドレスは設定できません。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "IP Address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイスの IP アドレスを確認できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Gateway"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイスのゲートウェイを確認できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "DNS Server Address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイスの DNS サーバーアドレスを確認できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Subnet Mask"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイスのサブネットマスクを確認できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device Port"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイスが使用するポートを入力します。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device to Server Connection"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "このオプションを選択すると、BioStar X サーバー情報を入力してデバイスからサーバーへ接続できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BioStar X サーバーの IP アドレスまたはドメインアドレスを入力します。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Server Port"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BioStar X サーバーのポートを入力します。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "RS485"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "マスターモードのみ使用できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Baud Rate"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "各 RS-485 ポートのボーレートを設定できます。"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "認証",
      children: "認証"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-auth.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "名称"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "機能説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["1", ":N", " Security Level"]
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "指紋認証時に使用するセキュリティレベルを設定できます。 セキュリティレベルが高いほど本人拒否率（FRR）は上がりますが、他人受入率（FAR）は下がります。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsxs)(_components.strong, {
                children: ["1", ":N", " Fast Mode"]
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["指紋認証の速度を設定できます。 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Auto"
              }), " を選択すると、デバイスに登録されている指紋テンプレートの総数に応じて認証速度が自動的に設定されます。"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Template Format"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "設定されている指紋テンプレート形式を確認できます。"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "生体認証はCoreStationでのみサポートされます。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "高度な設定",
      children: "高度な設定"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/config-advanced.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col2--20-80",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "名称"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "機能説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AC Fail"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "電源入力信号を監視するAUXポートを設定できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Tamper"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "タンパーが接続されたAUXポートを設定できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Fire"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "火災検知信号を監視するAUXポートを設定できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Configuration"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CoreStation のスーパーバイズド入力ポートを Input ポートとして使用するように設定でき、さらにスーパーバイズド入力で使用する抵抗値を設定できます。 抵抗値は 1 kΩ、2.2 kΩ、4.7 kΩ、10 kΩ を設定できます。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Secure Tamper"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイスでタンパーイベントが発生した場合、デバイスに保存されているすべてのユーザー情報、すべてのログ、およびセキュリティキーを削除するように設定できます。"
            })]
          })]
        })]
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