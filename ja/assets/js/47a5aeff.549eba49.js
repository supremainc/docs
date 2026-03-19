"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["49429"], {
83401: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_getting_started_mdx_47a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-getting-started-mdx-47a.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_getting_started_mdx_47a_namespaceObject = JSON.parse('{"id":"platform/biostar_air/getting-started","title":"はじめに","description":"管理者の追加、デバイス登録、ドア作成、アクセス権の構成、ユーザー管理などを通じて、BioStar Air サイトの設定方法を段階的に案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/getting-started.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/getting-started","permalink":"/docs/ja/platform/biostar_air/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"はじめに","description":"管理者の追加、デバイス登録、ドア作成、アクセス権の構成、ユーザー管理などを通じて、BioStar Air サイトの設定方法を段階的に案内します。","keywords":["BioStar Air ポータル","設定","ガイド"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"サイト管理者","permalink":"/docs/ja/platform/biostar_air/site-admin-guide"},"next":{"title":"サイトセレクター(Site Selector)","permalink":"/docs/ja/platform/biostar_air/site-selector"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: 'はじめに',
	description: '管理者の追加、デバイス登録、ドア作成、アクセス権の構成、ユーザー管理などを通じて、BioStar Air サイトの設定方法を段階的に案内します。',
	keywords: [
		'BioStar Air ポータル',
		'設定',
		'ガイド'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "ポータルへのアクセス",
  "id": "navigating-to-the-feature",
  "level": 2
}, {
  "value": "ダッシュボードの概要",
  "id": "dashboard-overview",
  "level": 2
}, {
  "value": "サイト設定のステップバイステップガイド",
  "id": "step-by-step-guide",
  "level": 2
}, {
  "value": "管理者の追加",
  "id": "adding-administrators",
  "level": 3
}, {
  "value": "デバイスの登録",
  "id": "registering-devices",
  "level": 3
}, {
  "value": "ドアの作成と管理",
  "id": "creating-and-managing-doors",
  "level": 3
}, {
  "value": "ドアをグループに分類",
  "id": "categorizing-doors-into-groups",
  "level": 3
}, {
  "value": "アクセス権の設定",
  "id": "configuring-access-rights",
  "level": 3
}, {
  "value": "祝日グループの設定",
  "id": "setting-up-holiday-groups",
  "level": 4
}, {
  "value": "スケジュールの作成",
  "id": "creating-schedules",
  "level": 4
}, {
  "value": "アクセスレベルの設定",
  "id": "defining-access-levels",
  "level": 4
}, {
  "value": "ユーザーグループの作成とユーザーの追加",
  "id": "creating-user-groups-and-adding-users",
  "level": 3
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air ポータルは、Web とモバイルアプリ全体で統合されたインターフェースを提供し、一貫したユーザー体験を実現します。 BioStar Air ポータルを通じて、管理者はアクセス制御の設定を管理し、サイトの利用状況を監視し、ユーザーやデバイスを円滑に構成できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigating-to-the-feature",
      children: "ポータルへのアクセス"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Air ポータルにアクセスするには、Web ブラウザーを開き、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://admin.biostarair.com",
        children: "admin.biostarair.com"
      }), " に移動します。 ログインページが表示されたら、現在の所在地に応じて ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "グローバルサーバー"
      }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "EUサーバー"
      }), " を選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-gettingstarted-login.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["サインアップでアカウントを作成できません。 システム導入担当者または既存の管理者がサイトに招待する必要があります。 管理者アカウントの管理および招待に関する詳細は、", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-administrators"
        }), "をご参照ください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-overview",
      children: "ダッシュボードの概要"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ログインすると、サイトの主要情報を確認できる ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "dashboard_menu",
        product: "air"
      }), " が表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-gettingstarted-dashboard.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_tagged_today",
            product: "air"
          }), "：本日サイトにアクセスしたユーザー数を確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "users_card",
            product: "air"
          }), "：登録および有効化されたユーザーの合計数を確認できます。 カードをクリックすると、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " メニューに移動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "devices_card",
            product: "air"
          }), "：登録されたデバイス数を確認できます。 カードをクリックすると、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " メニューに移動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "credit_status_card",
            product: "air"
          }), "：アカウントのクレジット残高を確認できます。 カードをクリックすると、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "credit_center_submenu",
            product: "air"
          }), " メニューに移動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "dashboard_usage_header",
            product: "air"
          }), "：デバイスグループ、頻度（日次、週次、月次）または任意の日付を指定して、範囲ごとに並べ替えできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "recent_actions_header",
            product: "air"
          }), "：ログイン、デバイスの更新、ユーザー作成など、管理者が実行した操作のアクティビティログを表示します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-by-step-guide",
      children: "サイト設定のステップバイステップガイド"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "次の案内に従って新しいサイトを設定してください。"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "adding-administrators",
          children: "管理者の追加"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "管理者を招待してください。"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "admin_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-setting-admin.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "btn_invite",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "admin_invitation_title",
                product: "air"
              }), " ウィンドウが表示されたら、管理者のメールアドレスを入力し、役割を付与してください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-setting-admin-invite.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "send_btn",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["サイト管理者はサイトを管理でき、認証されたユーザーは", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Suprema Pass"
            }), "アプリを通じてのみアクセスできます。"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "registering-devices",
          children: "デバイスの登録"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登録済みのデバイスを確認するか、デバイスを追加してください。 画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " をクリックします。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-gettingstarted-device-mng.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "デバイスを登録していない場合は、別の管理者が現場で BioStar Air モバイルアプリを使用して登録する必要があります。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_submenu",
                product: "air"
              }), " では、デバイスの削除、ファームウェアの更新、およびデバイスグループの管理ができます。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "creating-and-managing-doors",
          children: "ドアの作成と管理"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "ドアを追加し、デバイスを割り当ててください。"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_submenu",
                product: "air"
              }), " をクリックしてください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-door-mng.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ドアがない場合は、画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "doors_group_label_add_device",
                product: "air"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.title",
                product: "air"
              }), " パネルが表示されたら、名前と説明を入力してください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-door-mng-add.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["登録済みのデバイスを ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column2",
                product: "air"
              }), " と ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column3",
                product: "air"
              }), " に割り当ててください。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " では、ドアの編集・削除、アクセススケジュールの設定、グループでの管理ができます。"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "categorizing-doors-into-groups",
          children: "ドアをグループに分類"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "ドアをグループに分類してください。"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_groups_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-door-group-mng.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "doors_group_add_btn",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "doors_group_title_add_popup_overlay",
                product: "air"
              }), " ウィンドウが表示されたら、グループ名を ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "屋内"
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "屋外"
              }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Trap Doors"
              }), " のように入力し、必要なドアを選択してください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-door-group-mng-add.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["すべてのドアを選択したら、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "btn_ok",
                product: "air"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "configuring-access-rights",
          children: "アクセス権の設定"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "アクセス権を管理するには、次の手順に従ってください。"
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "setting-up-holiday-groups",
          children: "祝日グループの設定"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "access_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "holiday_groups_submenu",
                product: "air"
              }), " をクリックしてください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-holiday-group-mng.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "holiday_group_add_btn",
                product: "air"
              }), " ボタンをクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "holiday_group_add_title",
                product: "air"
              }), " パネルが表示されたら、名前を入力してください（例：「休日」）。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-holiday-group-mng-add.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_holidays_title",
                product: "air"
              }), " セクションでアクセスを制限する祝日を設定し、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_btn",
                product: "air"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["すべての祝日を追加したら、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "creating-schedules",
          children: "スケジュールの作成"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "access_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "schedules_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-schedule.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面右上の", (0,jsx_runtime.jsx)(Cmd, {
                sid: "schedule_add_title",
                product: "air"
              }), "ボタンをクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "schedule_add_title",
                product: "air"
              }), " パネルが表示されたら、名前を入力してください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-schedule-add.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "有効にする曜日を選択し、祝日グループを関連付けてください。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["スケジュール設定を完了したら、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "defining-access-levels",
          children: "アクセスレベルの設定"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "access_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "access_levels_submenu",
                product: "air"
              }), " をクリックしてください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-access-level-mng.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_access_level",
                product: "air"
              }), " ボタンをクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "access_level_title",
                product: "air"
              }), " パネルが表示されたら名前を入力し、ドアグループ、個別ドア、およびスケジュールを割り当ててください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-access-level-mng-add.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["アクセスレベルの設定が完了したら、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), "をクリックしてください。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "creating-user-groups-and-adding-users",
          children: "ユーザーグループの作成とユーザーの追加"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーグループを作成し、新しいユーザーグループにユーザーを追加してください。"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_groups_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-user-group-mng.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_group_btn",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_group_popup_title",
                product: "air"
              }), " ウィンドウが表示されたら、ユーザーグループ名を入力します。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-user-group-mng-add.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ユーザーグループを保存するには、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_grops_ok_btn",
                product: "air"
              }), "をクリックしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_btn",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_a_user",
                product: "air"
              }), " をクリックしてください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-user-group-mng-add-user.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_a_user",
                product: "air"
              }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_detail",
                product: "air"
              }), " セクションでユーザーのIDや名前などを入力してください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-user-group-mng-add-user-details.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "credential_detail",
                product: "air"
              }), " セクションで、1つ以上の認証方法を有効にしてください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-user-group-mng-add-credential-details.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "access_detail",
                product: "air"
              }), " セクションでアクセスレベルを選択してください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-user-group-mng-add-aclevel-details.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ユーザーのアクセス設定を完了するには、右下の ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_card_activate_btn",
                product: "air"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user_menu",
              product: "air"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_groups_submenu",
              product: "air"
            }), " メニューでは、ユーザーを一括管理し、再発行、停止、削除ができ、データのエクスポートやプロファイル画像の一括アップロードも可能です。"]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "チェックリスト"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "上記の手順を要約すると、次のステップに沿って進めます。"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "管理者を追加してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスを登録してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ドアを作成し、デバイスを割り当ててください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ドアをグループに分類してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "アクセス権を設定してください（祝日、スケジュール、アクセスレベル）。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ユーザーグループを作成し、ユーザーを追加してください。"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "上記のステップに従うことで、BioStar Air サイトを円滑に設定できます。 提供されているユーザーガイドの個別ビデオチュートリアルを参照して、詳細を確認してください。"
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