"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["68453"], {
15382: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_elevators_add_mdx_3da_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-elevators-add-mdx-3da.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_elevators_add_mdx_3da_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-elevators-add","title":"エレベーターを登録する","description":"階制御に使用するエレベーターの登録方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-elevators-add.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-elevators-add","permalink":"/docs/ja/platform/biostar_x/settings-elevators-add","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-elevators-add.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-elevators-add","title":"エレベーターを登録する","description":"階制御に使用するエレベーターの登録方法を案内します。","keywords":["エレベーター","階制御"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"エレベーターグループを管理する","permalink":"/docs/ja/platform/biostar_x/settings-manage-elevators-group"},"next":{"title":"エレベーター情報を編集する","permalink":"/docs/ja/platform/biostar_x/settings-elevators-edit-info"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-elevators-add.mdx


const frontMatter = {
	id: 'settings-elevators-add',
	title: 'エレベーターを登録する',
	description: '階制御に使用するエレベーターの登録方法を案内します。',
	keywords: [
		'エレベーター',
		'階制御'
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
  "value": "エレベーターの登録",
  "id": "adding-elevator",
  "level": 2
}, {
  "value": "基本情報の設定",
  "id": "info",
  "level": 3
}, {
  "value": "詳細情報の設定",
  "id": "details",
  "level": 3
}, {
  "value": "追加オプションの設定",
  "id": "option",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "エレベーターを登録して設定する方法を案内します。 エレベーターは階制御に使用され、ドアとともに入退室制御システムを構成します。 エレベーターを登録すると、特定の階への入室権限を制御できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "開始前に"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["エレベーターを登録する前に、アクセス制御用のアクセスレベル、アクセスグループ、階レベルを設定してください。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control",
            children: "以下"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "エレベーターを登録する前に、デバイスを登録してください。 デバイス登録の詳細は、以下のドキュメントを参照してください。"
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
      id: "adding-elevator",
      children: "エレベーターの登録"
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
            sid: "setting.menu.elevator.root"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.new.title",
            product: "2"
          }), " 画面が表示されたら、各セクション項目を順に設定してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.information",
                product: "2"
              }), "：エレベーターの基本情報を設定してください。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "#info",
                children: "以下のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.detail",
                product: "2"
              }), "：エレベーターの詳細情報を設定してください。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "#details",
                children: "以下のドキュメント"
              }), "で確認してください。"]
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
      }), " セクションでは、エレベーターの名前・グループ・説明を入力または変更できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), "：エレベーターの名前を入力してください。 エレベーターの位置を特定できる名前を入力すると、より便利に管理できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.group",
            product: "2"
          }), "：エレベーターグループを選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.description",
            product: "2"
          }), "：エレベーターに関する簡単な説明を入力してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "エレベーター名は最大48文字まで入力できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["エレベーターグループ登録の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-manage-elevators-group",
              children: "以下のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "details",
      children: "詳細情報の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.detail",
        product: "2"
      }), " セクションでは、エレベーターの詳細情報を設定できます。 エレベーターに接続するデバイスと階情報を設定してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.list.column.controller",
            product: "2"
          }), "：エレベーターのアクセス権限を制御するデバイスを選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.list.column.reader",
            product: "2"
          }), "：認証に使用するデバイスを選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.list.column.module",
            product: "2"
          }), "：エレベーターボタンリレーを制御するデバイスを選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.floor.totalFloor",
            product: "2"
          }), "：エレベーターで移動可能な総階数を入力してください。 最大192階まで入力できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.list.csvImport.autoMapping",
            product: "2"
          }), "：自動マッピングの使用有無を選択してください。 自動マッピングを使用すると、リレー番号が順番に割り当てられます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.floor.setting.title",
            product: "2"
          }), "：階名と階を制御するリレー番号を設定してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "elevator.list.column.controller",
              product: "2"
            }), " オプションでは、マスターデバイスのみ選択できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "elevator.list.column.reader",
              product: "2"
            }), " オプションでは、マスター、スレーブ、Wiegand デバイスのみ選択でき、最大4台まで選択できます。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "OM-120モデルはリーダーとして設定できません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "elevator.list.column.module",
              product: "2"
            }), " オプションでは、OM-120、DM-20、IM-120、SIO2モデルのみ選択できます。"]
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
      }), " セクションでは、エレベーターの追加オプションを設定できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "elevator.option.relayTime",
            product: "2"
          }), "：階ボタンリレーに関するオプションを設定してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door.openTime",
              product: "2"
            }), "：認証完了後に階ボタンが有効な状態を維持する時間を設定してください。 この時間を過ぎると、リレーは階ボタンに信号を送りません。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.dualAuthentication",
            product: "2"
          }), "：2人（一般ユーザーと管理者）がクレデンシャルを認証して階ボタンを有効にするよう設定できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.device",
                product: "2"
              }), "：二重認証を使用するデバイスを選択してください。 二重認証を使用しない場合は", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.none",
                product: "2"
              }), "を選択してください。"]
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
              }), "：1回目の認証後から2回目の認証までの待機時間を設定します。 設定した時間内に2回目の認証が完了しない場合、階ボタンは有効になりません。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["在室人数制限設定に構成されているデバイスのデュアル認証を変更するには、次のメニューで設定を編集します。 ", (0,jsx_runtime.jsx)(Cmd, {
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
            sid: "device.info.wiegandTamper",
            product: "2"
          }), "：タンパー信号を出力するポートを設定します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alarm",
      children: "アラーム設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "door.alarm",
        product: "2"
      }), " セクションでは、タンパー入力を検知した場合や別途の入力信号を検知した場合に実行する動作を設定できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.trigger",
            product: "2"
          }), "：タンパー入力の検知または別途の入力信号の検知を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.action",
            product: "2"
          }), "：設定した動作条件に応じて実行する動作を設定します。 エレベーターの全階ボタンを有効化するか、特定の信号を出力できます。"]
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