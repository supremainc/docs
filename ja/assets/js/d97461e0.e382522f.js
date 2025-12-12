"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["49132"], {
63048: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_advanced_mdx_d97_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-advanced-mdx-d97.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_advanced_mdx_d97_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-advanced","title":"高度設定","description":"上級設定セクションでは、マスター管理者、デバイス管理者、画面/サウンド、動作条件および動作などを設定できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-advanced.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-advanced","permalink":"/docs/ja/platform/biostar_x/settings-device-details-advanced","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-advanced.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-advanced","title":"高度設定","description":"上級設定セクションでは、マスター管理者、デバイス管理者、画面/サウンド、動作条件および動作などを設定できます。","keywords":["デバイス","高度"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"認証を設定する","permalink":"/docs/ja/platform/biostar_x/settings-device-details-auth"},"next":{"title":"熱画像とマスクを設定する","permalink":"/docs/ja/platform/biostar_x/settings-device-details-thermal-mask"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-advanced.mdx


const frontMatter = {
	id: 'settings-device-details-advanced',
	title: '高度設定',
	description: '上級設定セクションでは、マスター管理者、デバイス管理者、画面/サウンド、動作条件および動作などを設定できます。',
	keywords: [
		'デバイス',
		'高度'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "マスター管理者の追加",
  "id": "master-administrator",
  "level": 2
}, {
  "value": "二段階認証の設定",
  "id": "two-step-authentication",
  "level": 2
}, {
  "value": "管理者追加",
  "id": "administrator",
  "level": 2
}, {
  "value": "勤怠管理",
  "id": "attendance-management",
  "level": 2
}, {
  "value": "画面と音声の設定",
  "id": "screen-and-sound-settings",
  "level": 2
}, {
  "value": "作業条件と動作の設定",
  "id": "triggerAction",
  "level": 2
}, {
  "value": "イメージログ設定",
  "id": "image-log-settings",
  "level": 2
}, {
  "value": "Wiegand 設定",
  "id": "wiegang-settings",
  "level": 2
}, {
  "value": "セキュリティタンパー設定",
  "id": "tamper-settings",
  "level": 2
}, {
  "value": "アナログインターホン設定",
  "id": "analog-intercom-settings",
  "level": 2
}, {
  "value": "カメラ設定",
  "id": "camera-settings",
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
  }, {Cmd, Details, IcAdd, IcEdit, IcSearch, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcSearch) _missingMdxReference("IcSearch", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.advanced",
        product: "2"
      }), " セクションで設定できる項目について説明します。 マスター管理者、管理権限管理、勤怠イベント、画面とサウンド、動作条件と動作、イメージログ、Wiegand、セキュリティタンパーなど、多彩な高度機能の設定方法と各オプションの意味を確認できます。 環境に合わせた設定を適用し、デバイスを効率的に管理します。"]
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
      id: "master-administrator",
      children: "マスター管理者の追加"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title",
        product: "2"
      }), " 機能は、デバイスのフル管理権限を強化し、セキュリティを向上させて不正アクセスや設定変更を防止するための機能です。 新しいデバイスでは、この機能を使用して必ずマスター管理者を登録する必要があり、登録されたマスター管理者のみが管理メニューにアクセスして設定を変更できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.advanced",
        product: "2"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.administrator",
        product: "2"
      }), " の ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title",
        product: "2"
      }), " メニューで、必要な 2 種類のクレデンシャルを選択して登録します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-adv-admin-master-admin.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title",
        product: "2"
      }), " に登録できるクレデンシャルは次のとおりです。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "クレデンシャルの種類"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "登録可能数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "詳細条件"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "カード"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "最大 4 件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CSN と Wiegand タイプのみ対応し、同一タイプ内で重複登録はできません。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "顔"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "最大 2 件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同じアルゴリズムを搭載したデバイスでのみ登録できます。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "指紋"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "最大 2 件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1 件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 桁以上の数字を入力できます。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登録済みのクレデンシャルを変更するには、該当クレデンシャルの右側にある ", (0,jsx_runtime.jsx)(IcEdit, {}), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登録済みのクレデンシャルを削除するには、該当クレデンシャルの右側にある ", (0,jsx_runtime.jsx)(IcTrash2, {}), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "登録条件"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "少なくとも 2 種類以上のクレデンシャルを登録する必要があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "新規デバイスとファームウェアをアップグレードしたデバイスの両方に同じ条件が適用されます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスがサポートするすべてのクレデンシャルを認証手段として使用できます。"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "この機能は LCD 画面を使ったユーザーインターフェースに対応する Suprema 製品でのみ利用できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ファームウェアをアップグレードした既存デバイスでは、BioStar 2 のデバイス設定に ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title",
              product: "2"
            }), " メニューは表示されません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ファームウェアをアップグレードした既存デバイスは ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.title",
              product: "2"
            }), " 設定を提供しませんが、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title",
              product: "2"
            }), " オプションによってフル管理者の権限を強化し、デバイスのセキュリティを向上させることができます。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.masterAdmin.twoStepAuth.title",
              product: "2"
            }), " の設定方法については、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#two-step-authentication",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["この機能をサポートするデバイスおよびファームウェアバージョンの詳細については、", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../how-to/master-admin",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "two-step-authentication",
      children: "二段階認証の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ファームウェアをアップグレードした既存デバイスは ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.title",
        product: "2"
      }), " 設定を提供しませんが、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.twoStepAuth.title",
        product: "2"
      }), " オプションによってフル管理者の権限を強化し、デバイスのセキュリティを向上させることができます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-adv-two-step.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.masterAdmin.twoStepAuth.title",
        product: "2"
      }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.use",
        product: "2"
      }), " に設定すると、デバイスのフル管理者認証には2種類以上のクレデンシャルが必要になります。 例として、カードとPINの両方を登録した場合、フル管理者の認証ではカードのスキャンとPINの入力の両方を行う必要があります。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "すべての管理者に2種類以上のクレデンシャルが登録されていない状態で有効化すると、設定は失敗しエラーメッセージが表示されます。 すべての管理者に2種類以上のクレデンシャルを登録してから、再試行してください。"
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-setting-device-adv-error-admin.png"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["デバイスにフル管理者が設定されていない場合、次のようなポップアップメッセージが表示されます。 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.advanced",
          product: "2"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.administrator",
          product: "2"
        }), " で、すべての権限に管理者を追加してください。"]
      }), (0,jsx_runtime.jsx)(Image, {
        src: "/img/biostarx-setting-device-adv-warning-admin.png"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "device.masterAdmin.twoStepAuth.title",
          product: "2"
        }), " を有効にした後にすべての管理者のクレデンシャルを2種類未満に削除すると、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " に接続できない状況下ではデバイスから管理者メニューにアクセスできなくなります。 そのため、管理者クレデンシャルを削除する際は十分に注意してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "administrator",
      children: "管理者追加"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.administrator",
        product: "2"
      }), " グループでデバイス管理者を階級別に管理します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-administrator.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["権限レベル別の管理者を追加するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.plusAdd",
        product: "2"
      }), " をクリックしてください。 ユーザー一覧が表示されたら、目的のユーザーを選択してください。 ユーザー一覧で ", (0,jsx_runtime.jsx)(IcSearch, {}), " をクリックすると、目的のユーザーを検索することもできます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "各階級の権限は以下を参照します。"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "table-fixed",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "階級"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "ユーザー情報管理"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "デバイス設定"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.operatorLevel.all",
                product: "2"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.operatorLevel.user",
                product: "2"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "❌"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.operatorLevel.configuration",
                product: "2"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "❌"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "✔️"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "管理者を最大1,000人まで追加して管理します。 追加できる管理者数はデバイスのファームウェアバージョンによって異なる場合があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["登録済みユーザーを検索するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.admin.searchTitle",
              product: "2"
            }), " で ", (0,jsx_runtime.jsx)(IcSearch, {}), " をクリックしてください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "デバイス設定"
            }), "でデバイスの画面や音声、ネットワーク、RS-485 などの設定を変更します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["管理者を削除するには、該当管理者の右側にある ", (0,jsx_runtime.jsx)(IcTrash2, {}), " をクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["各デバイスに設定された管理者は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " の権限に影響しません。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "attendance-management",
      children: "勤怠管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tna",
        product: "2"
      }), " グループでデバイスの勤怠イベント名を変更したり、勤怠モードを設定します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-tna.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaMode",
            product: "2"
          }), "：勤怠イベントの登録方法を設定します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.unused",
                product: "2"
              }), "：勤怠イベントを記録できません。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.byUser",
                product: "2"
              }), "：ユーザーが認証時に希望する勤怠イベントを選択できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.bySchedule",
                product: "2"
              }), "：設定したスケジュールに従って勤怠イベントが自動で切り替わります。 勤怠イベントに適用するスケジュールを選択します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.lastChoice",
                product: "2"
              }), "：ユーザーが最後に使用した勤怠イベントを継続して使用できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.fixed",
                product: "2"
              }), "：選択した勤怠イベントのみを使用できます。 固定で使用する勤怠イベントを選択します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaRequired",
            product: "2"
          }), "：ユーザーが認証する際に必ず勤怠イベントを登録するように設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["このオプションは、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.tnaMode",
              product: "2"
            }), " オプションが ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.byUser",
              product: "2"
            }), " に設定されている場合に使用できます。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaEvent",
            product: "2"
          }), "：勤怠イベント名を修正したり、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.tnaMode",
            product: "2"
          }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.tna.mode.bySchedule",
            product: "2"
          }), " に設定した際に使用するスケジュールを追加します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.eventKey",
                product: "2"
              }), "：勤怠登録に使用できるキーの一覧です。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.label",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.eventKey",
                product: "2"
              }), " に対応する勤怠イベント名を変更できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.schedule",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.tnaMode",
                product: "2"
              }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.tna.mode.bySchedule",
                product: "2"
              }), " に設定した場合に自動で切り替えるスケジュールを設定します。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-setting-device-edit-advanced-tna-auto.png"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["LCD 画面がないデバイスでは、勤怠モードを ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.fixed",
              product: "2"
            }), " と ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.tna.mode.bySchedule",
              product: "2"
            }), " に設定でき、固定の勤怠イベントを登録するか、あらかじめ設定したスケジュールに応じて切り替わる勤怠イベントを登録できます。 対応デバイスは BioEntry P2、BioEntry W2、XPass D2、XPass 2 です。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["新しいスケジュール設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule",
              children: "次のドキュメント"
            }), "を参照します。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "screen-and-sound-settings",
      children: "画面と音声の設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスの画面や音声に関する設定を変更します。 デバイスによって設定できるオプションが異なる場合があります。"
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "BioEntry P2, BioEntry W2, XPass D2, XPass 2"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.sound",
              product: "2"
            }), "：音声をオンまたはオフに切り替えます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.ledBuzzer",
              product: "2"
            }), "：LED またはブザーを動作させるイベント項目を選択して設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.keypadBackLight",
              product: "2"
            }), "：キーパッドバックライトをオンまたはオフに切り替えます。 このオプションを有効にすると、キーパッド背面の照明が点灯します。 暗い環境でもキーを簡単に識別できます。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.keypadBackLight",
            product: "2"
          }), " オプションは XPass D2 ハードウェア V02M、ファームウェア 1.7.1 以降で使用できます。"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "BioStation 2, BioStation L2, BioLite N2, FaceLite"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.language",
              product: "2"
            }), "：デバイスの画面に表示する言語を設定します。 デバイスに言語リソースファイルを送信するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.updateResource",
              product: "2"
            }), " をクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.volume",
              product: "2"
            }), "：デバイスで再生される基本音量を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.menuTimeout",
              product: "2"
            }), "：メニュー画面が待機画面に切り替わるまでの時間を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.theme",
              product: "2"
            }), "：デバイスのホーム画面スタイルを変更します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.backlightTimeout",
              product: "2"
            }), "：画面バックライトが自動でオフになるまでの時間を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.msgTimeout",
              product: "2"
            }), "：メッセージが自動で消えるまでの時間を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVoice",
              product: "2"
            }), "：通知音の代わりに音声ガイダンスを使用できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.background",
              product: "2"
            }), "：デバイスのホーム画面の背景に表示する項目を設定します。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.logo",
                  product: "2"
                }), "：ユーザーが登録した画像をデバイスのホーム画面に表示できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.add",
                  product: "2"
                }), " ボタンをクリックして、希望する画像を登録します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.notice",
                  product: "2"
                }), "：管理者が入力した内容をホーム画面に表示できます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.slideShow",
                  product: "2"
                }), "：ユーザーが登録した最大10枚の画像をスライドショーとしてホーム画面に表示できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.add",
                  product: "2"
                }), " ボタンをクリックして、希望する画像を登録します。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " ボタンをクリックして、変更内容をデバイスにリアルタイムで反映します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["壁紙の種類を変更した場合、", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " ボタンをクリックしてもデバイスに適用されません。 画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.apply",
                    product: "2"
                  }), " ボタンをクリックします。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.notice",
                    product: "2"
                  }), "、", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.slideShow",
                    product: "2"
                  }), " オプションは BioStation 2 モデルでサポートされています。"]
                }), "\n"]
              }), "\n"]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.sound",
              product: "2"
            }), "：デバイスの起動、認証成功、認証失敗イベント時に再生する効果音を設定します。 サイズが500KB以下の ", (0,jsx_runtime.jsx)(_components.em, {
              children: "*.wav"
            }), " ファイルを選択します。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.browse",
              product: "2"
            }), " ボタンをクリックします。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "button.update",
                product: "2"
              }), " ボタンをクリックして、変更内容をデバイスにリアルタイムで反映します。"]
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "BioStation 3, BioStation A2, FaceStation 2, FaceStation F2, X-Station 2"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.language",
              product: "2"
            }), "：デバイスの画面に表示する言語を設定します。 デバイスに言語リソースファイルを送信するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.updateResource",
              product: "2"
            }), " をクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.volume",
              product: "2"
            }), "：デバイスで再生される基本音量を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.speakerVolume",
              product: "2"
            }), "：IP インターホン機能を使用するときにデバイスから出力される音量を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.micVolume",
              product: "2"
            }), "：IP インターホン機能を使用するときにデバイスへ入力される音量を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.menuTimeout",
              product: "2"
            }), "：メニュー画面が待機画面に切り替わるまでの時間を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.backlightTimeout",
              product: "2"
            }), "：画面バックライトが自動でオフになるまでの時間を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.msgTimeout",
              product: "2"
            }), "：メッセージが自動で消えるまでの時間を設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.serverPrivateMsg",
              product: "2"
            }), "：ユーザーが認証する際に画面に表示する個人メッセージの使用有無を設定できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useScreenSaver",
              product: "2"
            }), "：デバイスを使用していないときに LCD 画面の明るさを下げて不要な電力消費を削減できます。 この機能を有効にしない場合、デバイスで ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useScreenSaver",
              product: "2"
            }), " オプションを有効にしても認証成功メッセージは表示されません。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "このオプションは FaceStation 2、FaceStation F2、X-Station 2、BioStation 3 モデルでサポートされています。"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.useVoice",
              product: "2"
            }), "：通知音の代わりに音声ガイダンスを使用できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.homeScreen",
              product: "2"
            }), "：デバイスのホーム画面の背景に表示する項目を設定します。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.normal",
                  product: "2"
                }), "：既定の画像をホーム画面に表示します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.logo",
                  product: "2"
                }), "：ユーザーが登録した画像をデバイスのホーム画面に表示できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.add",
                  product: "2"
                }), " ボタンをクリックして、希望する画像を登録します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "device.display.background.notice",
                  product: "2"
                }), "：管理者が入力した内容をホーム画面に表示できます。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " ボタンをクリックして、変更内容をデバイスにリアルタイムで反映します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["壁紙の種類を変更した場合、", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.update",
                    product: "2"
                  }), " ボタンをクリックしてもデバイスに適用されません。 画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "button.apply",
                    product: "2"
                  }), " ボタンをクリックします。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["ホーム画面を ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.logo",
                    product: "2"
                  }), " に設定し、", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "device.display.background.slideShow",
                    product: "2"
                  }), " に設定すると、最大10枚の画像をスライドショーとしてホーム画面に表示できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "common.add",
                    product: "2"
                  }), " ボタンをクリックして、希望する画像を登録します。"]
                }), "\n"]
              }), "\n"]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.sound",
              product: "2"
            }), "：デバイスの起動、認証成功、認証失敗イベント時に再生する効果音を設定します。 サイズが500KB以下の ", (0,jsx_runtime.jsx)(_components.em, {
              children: "*.wav"
            }), " ファイルを選択します。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.browse",
              product: "2"
            }), " ボタンをクリックします。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "button.update",
                product: "2"
              }), " ボタンをクリックして、変更内容をデバイスにリアルタイムで反映します。"]
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "triggerAction",
      children: "作業条件と動作の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.triggerNAction",
        product: "2"
      }), " グループでは、各状況に応じた作業条件と動作を設定できます。 例えば、認証に失敗したときにすべてのアラームを鳴らす、または RS-485 接続が切断されたときにデバイスを使用できないように設定できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["作業条件と動作は、イベントを選択して登録することも、ユーザーが任意の条件や動作を設定することもできます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.triggerNAction",
        product: "2"
      }), " グループの右側で ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.add",
        product: "2"
      }), " ボタンをクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-triggernaction.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "triggerAction",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "triggerAction.trigger",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "あらかじめ設定されたイベントを選択するか、ユーザー定義の条件を追加できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.event",
            product: "2"
          }), "：あらかじめ設定されたイベントを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.input",
            product: "2"
          }), "：オプション内の各項目を選択してユーザー定義の条件を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.break_glass",
            product: "2"
          }), "：オプション内の各項目を選択してユーザー定義の条件を設定します。 入力に対する動作を伴わずに入力のみを検知するように設定できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.trigger",
              product: "2"
            }), " を ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.event",
              product: "2"
            }), " に設定した場合、イベントリストから 1 つのイベントしか選択できません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.input",
              product: "2"
            }), " または ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.break_glass",
              product: "2"
            }), " オプションを選択してカスタム条件を設定する際に希望するスケジュールがない場合は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.plusAddSchedule",
              product: "2"
            }), " をクリックします。 スケジュール設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.break_glass",
              product: "2"
            }), " オプションを選択してカスタム条件を設定する際に目的のイベント名がない場合は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.addNewBreakGlassEvent",
              product: "2"
            }), " をクリックします。 該当イベントが発生すると、イベントログおよびリアルタイムログに設定したイベント名が表示されます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "イベント名は最大 64 文字まで入力できます。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "triggeraction",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "triggerAction.action",
        product: "2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "あらかじめ設定された動作を選択するか、ユーザー定義の動作を追加できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.output",
              product: "2"
            }), " オプションを選択してカスタム動作を設定する際に目的の信号設定がない場合は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.addSignal",
              product: "2"
            }), " をクリックして設定します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.trigger",
              product: "2"
            }), " を ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.break_glass",
              product: "2"
            }), " に選択した場合、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.action",
              product: "2"
            }), " を ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "triggerAction.portNone",
              product: "2"
            }), " に設定できます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "image-log-settings",
      children: "イメージログ設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.imageLog",
        product: "2"
      }), " グループでは、デバイスで使用するイメージログイベントとスケジュールを設定できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.imageLog",
            product: "2"
          }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), " に設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.configuration",
            product: "2"
          }), " で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.addplus",
            product: "2"
          }), " をクリックし、必要なイベントとスケジュールを設定します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-imagelog.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "この機能は BioStation A2、FaceStation 2、FaceStation F2、X-Station 2、BioStation 3 モデルでサポートされています。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["イメージログの基本設定については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-image-log",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiegang-settings",
      children: "Wiegand 設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        children: "Wiegand"
      }), " グループでは、Wiegand デバイスの入出力に関する詳細項目を設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-wiegand.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandInOut",
            product: "2"
          }), "：入出力モードを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandOutPulseWidth",
            product: "2"
          }), "：Wiegand 信号のパルス幅を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.wiegand.inOutFormat",
            product: "2"
          }), "：デバイスに指定する Wiegand フォーマットを変更します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.wiegandOutPulseInterval",
            product: "2"
          }), "：Wiegand 信号のパルス間隔を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.wiegand.out",
            product: "2"
          }), "：Wiegand 信号の出力モードを設定します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.card.wiegand.out.normal",
                product: "2"
              }), "：設定済みの Wiegand フォーマットでカードをスキャンします。 エラーコードを設定でき、Wiegand を使用したカード認証に失敗した場合に送信する値を選択できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.card.wiegand.out.bypass",
                product: "2"
              }), "：Wiegand 認証に関係なく CSN を送信します。 ドア制御機能のないデバイスとして使用する場合に設定します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.card.wiegand.outputInfo",
            product: "2"
          }), "：認証時にデバイスへ出力する情報を選択します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Wiegand フォーマットの設定詳細については、", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-credential-wiegand-format",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tamper-settings",
      children: "セキュリティタンパー設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスでタンパーイベントが発生した場合に、デバイスに保存されているすべてのユーザー情報、全ログ、およびセキュリティキーを削除するよう設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tamperOn",
        product: "2"
      }), " 機能を有効にするには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.tamperOn.on",
        product: "2"
      }), " に設定します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-advanced-tamper.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analog-intercom-settings",
      children: "アナログインターホン設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["アナログインターホンの使用可否を設定できます。 デバイスに接続されたインターホンを使用するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.intercom.title",
        product: "2"
      }), " グループで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.use",
        product: "2"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "この機能は BioStation 2 モデルのみ対応しています。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "camera-settings",
      children: "カメラ設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["カメラの周波数を設定できます。 蛍光灯を使用する環境で周波数を誤って設定すると、画像がちらつく場合があります。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.camera",
        product: "2"
      }), " グループで地域に合わせた周波数を設定します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "この機能は、ファームウェア 2.1.4 以降の FaceStation F2 モデルおよび BioStation A2 モデルでサポートされます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "カメラの周波数は地域によって異なります。 米国では 60 Hz が一般的で、多くの他地域では 50 Hz が使用されています。 地域に適したカメラ周波数については代理店にお問い合わせください。"
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