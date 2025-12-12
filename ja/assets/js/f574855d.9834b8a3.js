"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["93112"], {
60828: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_door_add_mdx_f57_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-door-add-mdx-f57.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_door_add_mdx_f57_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-door-add","title":"ドアを登録する","description":"入退室管理に使用するドアを設定してください。 ドアに応じて入室/退室デバイスを選択したり、アンチパスバックを設定してセキュリティを強化したり、アラームを構成できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-door-add.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-door-add","permalink":"/docs/ja/platform/biostar_x/settings-door-add","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-door-add.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-door-add","title":"ドアを登録する","description":"入退室管理に使用するドアを設定してください。 ドアに応じて入室/退室デバイスを選択したり、アンチパスバックを設定してセキュリティを強化したり、アラームを構成できます。","keywords":["ドア","セキュリティ","アクセス制御"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ドアグループを管理する","permalink":"/docs/ja/platform/biostar_x/settings-manage-door-group"},"next":{"title":"出入口情報を編集","permalink":"/docs/ja/platform/biostar_x/settings-door-edit-info"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-door-add.mdx


const frontMatter = {
	id: 'settings-door-add',
	title: 'ドアを登録する',
	description: '入退室管理に使用するドアを設定してください。 ドアに応じて入室/退室デバイスを選択したり、アンチパスバックを設定してセキュリティを強化したり、アラームを構成できます。',
	keywords: [
		'ドア',
		'セキュリティ',
		'アクセス制御'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "開始前に",
  "id": "before-start",
  "level": 2
}, {
  "value": "ドア登録",
  "id": "adding-door",
  "level": 2
}, {
  "value": "基本情報の設定",
  "id": "info",
  "level": 3
}, {
  "value": "ドア設定",
  "id": "configdoor",
  "level": 3
}, {
  "value": "追加オプションの設定",
  "id": "option",
  "level": 3
}, {
  "value": "アンチパスバック設定",
  "id": "antipassback",
  "level": 3
}, {
  "value": "時間制限アンチパスバック設定",
  "id": "timed-apb",
  "level": 3
}, {
  "value": "アラーム設定",
  "id": "alarm",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ドアを登録して設定する手順を案内します。 ドアごとに入室・退室デバイスを接続し、アンチパスバックや二重認証などのセキュリティ機能を設定することで、体系的な入退室管理環境を構築できます。 さらに、ドアの状態に基づくアラーム設定によりセキュリティ事故を事前に防止できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "開始前に"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ドアを登録する前に、入退室管理用の入室レベル、入室グループ、フロアレベルを設定してください。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control",
            children: "以下"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ドアを登録する前にデバイスを登録してください。 デバイス登録の詳細は、以下のドキュメントを参照してください。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-devices"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-wiegand"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-slave-device"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-door",
      children: "ドア登録"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "ページで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.door.root"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addDoor",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-door-adding.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.addNewDoor",
            product: "2"
          }), " 画面が表示されたら、各セクション項目を順に設定してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.information",
                product: "2"
              }), "：ドアの基本情報を設定します。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "#info",
                children: "以下のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.configuration",
                product: "2"
              }), "：ドアに接続されたデバイス、入室および退室ボタン、ドアセンサーを設定します。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "#configdoor",
                children: "次のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.option",
                product: "2"
              }), "：追加オプションを設定してください。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "#option",
                children: "以下のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.antiPassBack",
                product: "2"
              }), "：入退室履歴を管理しセキュリティを強化するアンチパスバック機能を設定します。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "#antipassback",
                children: "次のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "timedAPB.title",
                product: "2"
              }), "：アンチパスバック機能の初期化時間を設定できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "#timed-apb",
                children: "次のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.alarm",
                product: "2"
              }), "：アンチパスバック違反が発生した際に警報を鳴らしたりデバイスを使用不可にする設定ができます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "#alarm",
                children: "以下のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべての設定が完了したら、画面最下部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "info",
      children: "基本情報の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.information",
        product: "2"
      }), " セクションでは、ドアの名前、グループ、説明を入力または変更できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-door-adding-info.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), "：ドア名を入力します。 管理を容易にするために識別しやすい名前を入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.group",
            product: "2"
          }), "：ドアグループを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.description",
            product: "2"
          }), "：ドアに関する簡単な説明を入力します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ドア名は最大48文字まで入力できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドアグループの登録について詳しくは", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-door-group",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configdoor",
      children: "ドア設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.configuration",
        product: "2"
      }), " セクションでは、ドアに接続されたデバイスや退室ボタン、ドア配線などを設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-door-adding-configuration.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.entryDevice",
            product: "2"
          }), "：入室時に使用するデバイスを選択します。 デバイスが一覧にない場合は、先にデバイスを登録してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.doorRelay",
            product: "2"
          }), "：ドアロックとして動作する", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#relay",
            children: "リレー"
          }), "を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.exitButton",
            product: "2"
          }), "：退室ボタンとして使用するポートを選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switchType",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                children: "N/C"
              }), "(", (0,jsx_runtime.jsx)(_components.a, {
                href: "../../reference/glossary#nc",
                children: "Normally Closed"
              }), ") または ", (0,jsx_runtime.jsx)(Cmd, {
                children: "N/O"
              }), "(", (0,jsx_runtime.jsx)(_components.a, {
                href: "../../reference/glossary#no",
                children: "Normally Open"
              }), ") に設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.simulateUnlockSupported",
                product: "2"
              }), "：退室ボタン入力時にドア解錠要求ログは生成されますが、リレーは動作しないように設定できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.doorSensor",
            product: "2"
          }), "：ドア状態を確認する際に使用するポートを選択します。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.none",
            product: "2"
          }), " に設定すると、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door.alarm",
            product: "2"
          }), " セクションは使用できません。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.switchType",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                children: "N/C"
              }), "(", (0,jsx_runtime.jsx)(_components.a, {
                href: "../../reference/glossary#nc",
                children: "Normally Closed"
              }), ") または ", (0,jsx_runtime.jsx)(Cmd, {
                children: "N/O"
              }), "(", (0,jsx_runtime.jsx)(_components.a, {
                href: "../../reference/glossary#no",
                children: "Normally Open"
              }), ") に設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbUseDoorSensor",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apbUseDoorSensor",
                product: "2"
              }), " オプション使用時にドアセンサーの使用有無を設定できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title",
              product: "2"
            }), " が有効になっている場合、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.apbUseDoorSensor",
              product: "2"
            }), " オプションは使用できません。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.exitDevice",
            product: "2"
          }), "：退室時に使用するデバイスを選択します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.entryDevice",
              product: "2"
            }), " でワイヤレスドアロックを選択した場合、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.exitDevice",
              product: "2"
            }), " でもワイヤレスドアロックを選択する必要があります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.entryDevice",
              product: "2"
            }), " でワイヤレスドアロックを選択した場合、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.doorRelay",
              product: "2"
            }), " オプションは使用できません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CoreStationモデルは入室デバイスや退室デバイスとして使用できません。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "option",
      children: "追加オプションの設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.option",
        product: "2"
      }), " セクションでは、ドアに関する追加オプションを設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-door-adding-aditional-option.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.open",
            product: "2"
          }), "：ドア解錠に関するオプションを設定します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openTime",
                product: "2"
              }), "：認証完了後に出入口が開いたままになる時間を設定します。 この時間を過ぎると、出入口は自動的にロックされます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnce",
                product: "2"
              }), "：ドアセンサーがドアの閉鎖を検知すると、ドアが施錠されます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.option.openCondition.useAutoDoor",
                product: "2"
              }), " を ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnceOn",
                product: "2"
              }), " に設定すると使用できません。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.option.openCondition.useAutoDoor",
                product: "2"
              }), "：自動ドアをドアとして使用する場合、ドアセンサーの状態に関係なくリレーを動作させることができます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnce",
                product: "2"
              }), " を ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.openOnceOn",
                product: "2"
              }), " に設定すると使用できません。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.openTime",
              product: "2"
            }), " は使用するドアロック装置の種類によって異なる場合があります。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.dualAuthentication",
            product: "2"
          }), "：2人（一般ユーザーと管理者）がクレデンシャルを認証してドアを解錠するよう設定できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device",
                product: "2"
              }), "：二重認証を使用するデバイスを選択してください。 二重認証を使用しない場合は、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType.none",
                product: "2"
              }), " を選択してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.schedule",
                product: "2"
              }), "：二重認証を適用するスケジュールを選択してください。 目的のスケジュールがない場合は、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.plusAddSchedule",
                product: "2"
              }), " をクリックして追加します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType",
                product: "2"
              }), "：管理者認証の順序を設定してください。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "door.dualAuthentication.approvalType.none",
                    product: "2"
                  }), "：認証グループに関係なく、2人の認証が必要です。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "door.dualAuthentication.approvalType.last",
                    product: "2"
                  }), "：一般ユーザーが認証し、設定した認証グループに属するユーザーが認証する必要があります。"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.approvalGroup",
                product: "2"
              }), "：管理者が所属するグループを設定します。 このオプションは、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType",
                product: "2"
              }), " を ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType.last",
                product: "2"
              }), " に選択した場合に使用できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.authenticationTimeout",
                product: "2"
              }), "：1回目の認証後から2回目の認証までの待機時間を設定します。 設定された時間内に2回目の認証が完了しない場合、ドアは解錠されません。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["再室人数制限設定で構成されたデバイスの二重認証を変更するには、次のメニューで設定を修正してください。 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shell.header.setting"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.menu.advancedAc.root"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "zone.occupancy.title",
                  product: "2"
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "zone.occupancy.title",
                  product: "2"
                }), " の設定に関する詳細は", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-advanced-ac",
                  children: "以下"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["スケジュール設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-schedule",
                  children: "次のドキュメント"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.antiTailSensor",
            product: "2"
          }), "：認証されていない人物が認証済みの人物に続いて入退室するテイルゲーティングを検知するよう設定できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.sensor",
              product: "2"
            }), "：テイルゲーティングを検知するセンサーを選択してください。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "antipassback",
      children: "アンチパスバック設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "../../reference/glossary#apb",
        children: "アンチパスバック"
      }), "は入退室履歴を管理し、セキュリティを強化するために使用します。 利用者が入室後にカードを他の利用者へ渡す悪用事例を防止でき、権限を持つ利用者に続いて外部者が入室した場合に退出できないように阻止できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下を参考にして、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door.antiPassBack",
        product: "2"
      }), " セクションで設定を完了してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.type",
            product: "2"
          }), "：アンチパスバックの種類を選択してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.dualAuthentication.approvalType.none",
                product: "2"
              }), "：アンチパスバック機能を使用しません。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbType.soft",
                product: "2"
              }), "：アンチパスバック違反時でも入退室は可能ですが、アラームを鳴らすか ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " にログを生成します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbType.hard",
                product: "2"
              }), "：アンチパスバック違反時には入退室できず、アラームを鳴らすか ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " にログを生成します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime",
            product: "2"
          }), "：アンチパスバック機能が初期化されるまでの時間を設定してください。 最大で7日（10080分）まで設定でき、0に設定すると初期化されません。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["入室デバイスと退室デバイスの両方が設置されている場合に使用でき、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.configuration",
              product: "2"
            }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.exitDevice",
              product: "2"
            }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.none",
              product: "2"
            }), " に設定すると使用できません。 退室デバイスの設定方法は", (0,jsx_runtime.jsx)(_components.a, {
              href: "#configdoor",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.antiPassBack",
              product: "2"
            }), " セクションを有効にするには、RS-485で接続されたマスター装置とスレーブ装置が必要です。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "timedAPB.title",
              product: "2"
            }), " セクションが有効になっている場合、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door.antiPassBack",
              product: "2"
            }), " は使用できません。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "timed-apb",
      children: "時間制限アンチパスバック設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザーが入退室認証後に同じデバイスで再度認証を試みると、アンチパスバック機能が作動して即時の再認証はできません。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "timedAPB.title",
        product: "2"
      }), " セクションでは、アンチパスバック機能の初期化時間を設定してユーザーの頻繁な入室を効果的に制限できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-door-adding-time-litmit-apb.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.field",
            product: "2"
          }), "：時間制限アンチパスバック機能を使用するデバイスを選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime",
            product: "2"
          }), "：アンチパスバック機能が初期化されるまでの時間を設定してください。 入力単位は分（min）で、デフォルトは10分です。 最大で60分まで設定できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.apb.bypassGroup",
            product: "2"
          }), "：時間制限アンチパスバックの制限を受けず常に通行できる入退室グループを選択できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alarm",
      children: "アラーム設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "door.alarm",
        product: "2"
      }), " セクションでは、ドアが強制的に開けられた場合、開いたまま放置された場合、またはアンチパスバック違反が発生した場合にアラームを鳴らすかデバイスの使用をブロックできます。 アラームを追加する項目で ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.addplus",
        product: "2"
      }), " ボタンをクリックしてください。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-door-adding-alarm.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.heldOpen",
            product: "2"
          }), "：ドアが開いたまま放置されたときのアラーム動作を設定してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.heldOpenTime",
            product: "2"
          }), "：ドアが長時間開いている場合にアラームを鳴らす時間を設定してください。 ドアが開いたままで許容される最大時間を設定してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.forcedOpen",
            product: "2"
          }), "：ドアが強制的に開けられたときのアラーム動作を設定してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.antiPassBack",
            product: "2"
          }), " / ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "timedAPB.title",
            product: "2"
          }), "：アンチパスバックまたは時間制限アンチパスバック違反が発生したときのアラーム動作を設定してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "door.antiPassBack",
          product: "2"
        }), " オプションは、退室デバイスが登録されている場合にのみ設定できます。"]
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