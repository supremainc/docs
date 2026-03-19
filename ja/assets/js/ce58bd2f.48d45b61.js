"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["40591"], {
91279: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_administrators_mdx_ce5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-administrators-mdx-ce5.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_administrators_mdx_ce5_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-administrators","title":"管理者アカウントおよび役割の管理","description":"BioStar Airでの管理者の招待、役割の割り当て、権限管理、およびオブザーバー(Observer)、オペレーター(Operator)、管理者(Administrator)、マスター(Master)の各役割に対する入退室制御の設定方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-administrators.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-administrators","permalink":"/docs/ja/platform/biostar_air/managing-administrators","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-administrators.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-administrators","title":"管理者アカウントおよび役割の管理","description":"BioStar Airでの管理者の招待、役割の割り当て、権限管理、およびオブザーバー(Observer)、オペレーター(Operator)、管理者(Administrator)、マスター(Master)の各役割に対する入退室制御の設定方法を案内します。","keywords":["管理者","役割","アクセス制御設定"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"拡張機能の設定","permalink":"/docs/ja/platform/biostar_air/site-additional-settings"},"next":{"title":"個人アカウントの設定","permalink":"/docs/ja/platform/biostar_air/account-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-administrators.mdx


const frontMatter = {
	id: 'managing-administrators',
	title: '管理者アカウントおよび役割の管理',
	description: 'BioStar Airでの管理者の招待、役割の割り当て、権限管理、およびオブザーバー(Observer)、オペレーター(Operator)、管理者(Administrator)、マスター(Master)の各役割に対する入退室制御の設定方法を案内します。',
	keywords: [
		'管理者',
		'役割',
		'アクセス制御設定'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "管理者の表示",
  "id": "viewAdmin",
  "level": 2
}, {
  "value": "管理者の無効化",
  "id": "deactiveAdmin",
  "level": 2
}, {
  "value": "管理者の役割変更",
  "id": "changing-an-administrators-role",
  "level": 2
}, {
  "value": "新しい管理者の招待",
  "id": "inviteNewAdmin",
  "level": 2
}, {
  "value": "管理者レベル",
  "id": "administrator-levels",
  "level": 2
}, {
  "value": "<Cmd class=\"normal\"></Cmd>（最低レベル）",
  "id": "observer",
  "level": 3
}, {
  "value": "<Cmd class=\"normal\"></Cmd>（最高レベル）",
  "id": "master",
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
  }, {Cmd, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airの管理者機能を使用して、組織内の管理者アカウントを管理し、役割を割り当て、入退室レベルを制御できます。 これにより、セキュリティと管理の制御を維持しながら、適切な担当者に適切な権限を付与できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "管理者管理に関するビデオガイドを見るには、次の動画を参照してください。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "pUyNLeTfGRI"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewAdmin",
      children: "管理者の表示"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_submenu",
        product: "air"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-admin.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_submenu",
        product: "air"
      }), " メニューで、すべてのアクティブな管理者の一覧を確認できます。 管理者一覧には次の情報が含まれます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "名前"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メールアドレス"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "電話番号"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "招待者"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "招待日"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "管理者権限"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "アカウントの状態（有効/無効）"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deactiveAdmin",
      children: "管理者の無効化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管理者を削除する代わりにアカウントを無効化でき、必要に応じて再度有効化できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧から無効化する管理者を見つけます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "column_admin_account_status",
            product: "air"
          }), " 列でトグルスイッチをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-admin-deactive.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["確認ダイアログが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_status_change_confirm_btn",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "column_admin_account_status",
        product: "air"
      }), " 列の状態が ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_status_disabled",
        product: "air"
      }), " に変更されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-admin-deactive-result.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["管理者の無効化機能は、管理者の権限によって制限される場合があります。 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " 権限を持つ管理者は、他の ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " 管理者を無効化できません。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "changing-an-administrators-role",
      children: "管理者の役割変更"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管理者は自分より低いレベルの管理者の役割を変更できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧から役割を変更する管理者を選びます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "column_admin_level",
            product: "air"
          }), " 列で新しい管理者レベルを選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-admin-change-role.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["確認ダイアログが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_status_change_confirm_btn",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " 管理者のみが他の管理者に ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "master_role",
          product: "air",
          className: "bold"
        }), " 権限を割り当てたり変更したりできます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inviteNewAdmin",
      children: "新しい管理者の招待"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新しい管理者を追加できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_submenu",
            product: "air"
          }), " をクリックします。"]
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
          }), " ダイアログが表示されたら、メールアドレスを入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-admin-invite.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_invitation_input2",
            product: "air"
          }), " で新しい管理者に割り当てる役割を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["招待状を送信するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "send_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["各管理者は固有のメールアドレスを持つ必要があります。 必要に応じてエイリアスアドレス（例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:erik+training@example.com",
              children: "erik+training@example.com"
            }), "）を使用できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["招待メールを受け取った管理者は、メール内のリンクをクリックします。 アカウントを持っていない管理者は登録を行います。 既にアカウントを持っている管理者は、ログイン後すぐに", (0,jsx_runtime.jsx)(_components.strong, {
              children: "サイト"
            }), "にアクセスできます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "administrator-levels",
      children: "管理者レベル"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airの各管理者レベルは特定の権限を持ち、高いレベルは低いレベルの権限を継承します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["各管理者の役割は、BioStar Air全体で異なる権限を持っています。 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "observer_role",
          product: "air",
          className: "bold"
        }), " は最も制限されたアクセス権を持ち、画面に表示されない制限されたメニューがあります。"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "observer",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "observer_role",
        product: "air",
        className: "normal"
      }), "（最低レベル）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "dashboard_menu",
            product: "air"
          }), " のダッシュボードとログを", (0,jsx_runtime.jsx)(_components.strong, {
            children: "表示できます"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ログを", (0,jsx_runtime.jsx)(_components.strong, {
            children: "エクスポートして"
          }), "レポートを作成できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定、ユーザー、またはデバイスを変更することは", (0,jsx_runtime.jsx)(_components.strong, {
            children: "できません"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メニューへのアクセスが制限されます。 ほとんどのメニューは画面に表示されません。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operator",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "operator_role",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), "および ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), "、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_levels_submenu",
            product: "air"
          }), "、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedules_submenu",
            product: "air"
          }), "、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "holiday_groups_submenu",
            product: "air"
          }), " を管理できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスの制御や管理設定へのアクセス権は", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ありません"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "日常的なユーザーと入退室構成の管理に適しています。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "administrator",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_role",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新しい管理者を", (0,jsx_runtime.jsx)(_components.strong, {
            children: "招待できます"
          }), "。 ただし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "master_role",
            product: "air",
            className: "bold"
          }), " 役割を割り当てることはできません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "すべてのデバイス制御"
          }), "権限があり、設定を変更して接続されたデバイスを管理できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "master_role",
            product: "air",
            className: "bold"
          }), " 役割の管理者を削除または変更することはできません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一般的に、システム管理を担当するIT担当者にこの役割を割り当てることを推奨します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "master",
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "master_role",
        product: "air",
        className: "normal"
      }), "（最高レベル）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべての設定と機能に", (0,jsx_runtime.jsx)(_components.strong, {
            children: "完全なアクセス"
          }), "権があります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["他の", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Administrators"
          }), "によって削除または変更されることは", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ありません"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "サブサイト"
          }), "を作成して、さまざまな場所や組織を管理できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "サイト設定"
          }), "を構成でき、ここには重要なシステム全体の構成も含まれます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["他の管理者がログインする前に", (0,jsx_runtime.jsx)(_components.strong, {
            children: "利用規約"
          }), "に同意させる責任があります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一般的に会社の所有者や高い信頼を受ける役員に割り当てることができます。"
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