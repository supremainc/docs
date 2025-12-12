"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["83964"], {
10641: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_audit_trail_mdx_e55_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-system-audit-trail-mdx-e55.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_audit_trail_mdx_e55_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-audit-trail","title":"監査トレイルを管理する​","description":"ユーザーの接続情報だけでなく、システムで変更されるすべての情報を追跡できます。​","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-audit-trail.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-audit-trail","permalink":"/docs/ja/platform/biostar_x/settings-system-audit-trail","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-audit-trail.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-audit-trail","title":"監査トレイルを管理する​","description":"ユーザーの接続情報だけでなく、システムで変更されるすべての情報を追跡できます。​","keywords":["監査トレイル​","システム変更履歴​","audit trail​","ログ管理​","セキュリティ監査​","システム監視​"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"システム設定","permalink":"/docs/ja/platform/biostar_x/settings-system"},"next":{"title":"システムをバックアップする","permalink":"/docs/ja/platform/biostar_x/settings-system-system-backup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-audit-trail.mdx


const frontMatter = {
	id: 'settings-system-audit-trail',
	title: '監査トレイルを管理する​',
	description: 'ユーザーの接続情報だけでなく、システムで変更されるすべての情報を追跡できます。​',
	keywords: [
		'監査トレイル​',
		'システム変更履歴​',
		'audit trail​',
		'ログ管理​',
		'セキュリティ監査​',
		'システム監視​'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "監査トレイルを使用する {#audit-trail-guide}​",
  "id": "監査トレイルを使用する-audit-trail-guide",
  "level": 2
}, {
  "value": "追跡される操作タイプ {#method}​",
  "id": "追跡される操作タイプ-method",
  "level": 3
}, {
  "value": "権限レベル別の分類 {#permision}​",
  "id": "権限レベル別の分類-permision",
  "level": 3
}, {
  "value": "期間設定の照会​",
  "id": "期間設定の照会",
  "level": 2
}, {
  "value": "事前定義された期間で照会​",
  "id": "事前定義された期間で照会",
  "level": 3
}, {
  "value": "ユーザー定義期間で照会​",
  "id": "ユーザー定義期間で照会",
  "level": 3
}, {
  "value": "フィルター設定​",
  "id": "フィルター設定",
  "level": 2
}, {
  "value": "フィルターの保存",
  "id": "フィルターの保存",
  "level": 2
}, {
  "value": "ページナビゲーション​",
  "id": "ページナビゲーション",
  "level": 2
}, {
  "value": "CSV へのエクスポート",
  "id": "csv-へのエクスポート",
  "level": 2
}, {
  "value": "列設定",
  "id": "列設定",
  "level": 2
}, {
  "value": "主要監査項目",
  "id": "audit-trail-items",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, Details, IcEditUL, IcMoreW, IcTrash2, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcEditUL) _missingMdxReference("IcEditUL", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.menu.system.auditTrail"
      }), " 機能は、システムで発生するすべてのアクティビティを記録して追跡します。​ ユーザーのログイン／ログアウト、設定変更、システム管理作業などのすべてのアクティビティが記録され、セキュリティ監査やシステム監視に活用できます。​"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "セキュリティ監査"
          }), "：不正アクセスの試みや権限乱用を検出できます。​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "トラブルシューティング"
          }), "：システムエラーが発生した時点や設定変更履歴を追跡できます。​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "コンプライアンス"
          }), "：アクセス記録の保存や監査レポートの作成ができます。​"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "監査トレイルを使用する-audit-trail-guide",
      children: "監査トレイルを使用する {#audit-trail-guide}​"
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
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.system.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.system.auditTrail"
          }), " をクリックします。​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "監査トレイルの一覧が画面に表示されます。​"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["主要な追跡項目の詳細は", (0,jsx_runtime.jsx)(_components.a, {
        href: "#audit-trail-items",
        children: "以下のドキュメント"
      }), "を参照してください。​"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "追跡される操作タイプ-method",
      children: "追跡される操作タイプ {#method}​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.method",
        product: "2"
      }), " オプションをクリックして、監査トレイルを次の動作タイプで分類します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-action-filter.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.1",
            product: "2"
          }), "：新しい項目の作成​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.3",
            product: "2"
          }), "：既存項目の変更​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.4",
            product: "2"
          }), "：項目の削除​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.method.2",
            product: "2"
          }), "：システム機能の実行（ログイン、デバイス制御など）​"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "権限レベル別の分類-permision",
      children: "権限レベル別の分類 {#permision}​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["管理者レベルに応じて監査トレイルを分類できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.bioStarOperator",
        product: "2"
      }), " オプションをクリックして、次の権限レベルでフィルタリングします。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.1",
            product: "2"
          }), "：すべてのシステム機能へのアクセス​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.2",
            product: "2"
          }), "：ユーザー管理機能​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.3",
            product: "2"
          }), "：モニタリング機能​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.253",
            product: "2"
          }), "：ビデオ関連機能​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.permission.254",
            product: "2"
          }), "：勤怠管理機能​"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "audit.permission.253",
          product: "2"
        }), " と ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "audit.permission.254",
          product: "2"
        }), " 権限レベルは、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced"
        }), " ライセンス以上で追加オプションとして利用できます。 ライセンスポリシーの詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "期間設定の照会",
      children: "期間設定の照会​"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "照会する期間を設定し、特定期間の監査トレイル履歴を確認します。​"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "事前定義された期間で照会",
      children: "事前定義された期間で照会​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画面左のフィルターリストで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.one_month",
        product: "2"
      }), " または ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.three_month",
        product: "2"
      }), " を選択します。​"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-defined-period.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ユーザー定義期間で照会",
      children: "ユーザー定義期間で照会​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["詳細な期間設定が必要な場合は、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " セクションの ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.datetime",
        product: "2"
      }), " オプションで開始日と終了日を設定します。​"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-set-period.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "フィルター設定",
      children: "フィルター設定​"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "監査トレイル一覧を効率的に閲覧できるよう、さまざまな条件でフィルターします。​"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-list.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " セクションで次のオプションを設定できます。​ フィルターオプションは監査トレイル一覧の列項目と一致します。​ ただし、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.content",
        product: "2"
      }), " 列はフィルタリングできません。​"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.datetime",
            product: "2"
          }), "：イベントが発生した日時​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.gnb.user",
            product: "2"
          }), "：イベントを実行したユーザーID​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.bioStarOperator",
            product: "2"
          }), "：ユーザーの", (0,jsx_runtime.jsx)(_components.a, {
            href: "#permision",
            children: "権限レベル"
          }), "​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.ip",
            product: "2"
          }), "：ユーザーが接続したIPアドレス​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.menu",
            product: "2"
          }), "：変更された項目のメニューカテゴリ​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.target",
            product: "2"
          }), "：変更された対象​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.method",
            product: "2"
          }), "：実行された", (0,jsx_runtime.jsx)(_components.a, {
            href: "#method",
            children: "操作"
          }), "​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.content",
            product: "2"
          }), "：イベント発生時の詳細内容​"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "フィルターの保存",
      children: "フィルターの保存"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["フィルターを設定し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "auditTrail.filter.title",
        product: "2"
      }), " セクションの ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ta.report.condition.saveFilter.button",
        product: "2"
      }), " ボタンをクリックすると、画面左のフィルターリストに設定したフィルターを保存できます。​"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-audit-trail-add-filter.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["フィルター名を変更するには ", (0,jsx_runtime.jsx)(IcEditUL, {}), " ボタンをクリックします。​ フィルター名を入力し、", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " キーを押すとフィルター名が変更されます。​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["フィルターを削除するには ", (0,jsx_runtime.jsx)(IcTrash2, {}), " ボタンをクリックします。​ フィルターリストからそのフィルターが削除されます。​"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ページナビゲーション",
      children: "ページナビゲーション​"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ページを移動したり、1ページに表示する一覧の件数を設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-first-page.png",
            ico: true,
            alone: true
          }), "：最初のページへ移動します。​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-previous-page.png",
            ico: true,
            alone: true
          }), "：前のページへ移動します。​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-nav-page.png",
            ico: true,
            alone: true
          }), "：移動したいページ番号を入力し、", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " キーを押すとそのページへ移動します。​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-next-page.png",
            ico: true,
            alone: true
          }), "：次のページへ移動します。​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-audit-trail-last-page.png",
            ico: true,
            alone: true
          }), "：最後のページへ移動します。​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/ico-audit-trail-rows-page.png",
            ico: true
          }), "：1ページに表示するリスト数を選択できます。​"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csv-へのエクスポート",
      children: "CSV へのエクスポート"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "監査トレイルの一覧をCSVファイルにエクスポートし、外部分析ツールで活用します。​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.filter.title",
            product: "2"
          }), " セクションで必要に応じてフィルターを設定します。​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["セクション右側の ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "audit.user.csv_export",
            product: "2"
          }), " をクリックします。​"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "フィルタリングを設定した場合、フィルタリングされた結果だけがCSVファイルにエクスポートされます。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "列設定",
      children: "列設定"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--40",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-audit-trail-column-setting.png"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l20",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["監査トレイルリストの列の位置を変更したり、非表示にしたりできます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auditTrail.filter.title",
            product: "2"
          }), " セクションの一番右で ", (0,jsx_runtime.jsx)(IcMoreW, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.columnSetting",
            product: "2"
          }), " をクリックします。"]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "列リストで非表示にしたい項目のチェックボックスの選択を解除します。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "列の順序を変更するには、目的の項目をドラッグして位置を変更できます。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["列設定を初期化するには、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "columnSetting.button.defaultColumn",
                product: "2"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " をクリックします。"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "audit-trail-items",
      children: "主要監査項目"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "監査トレイルで記録されるすべてのアクティビティをカテゴリ別に整理しました。 各項目をクリックして詳細を確認します。"
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "システムアクセス"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ログイン"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.login",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "多要素認証ログイン"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.fingerprint_login",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ログアウト"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.logout",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ログイン失敗回数超過"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.system.maximum_invalid_attempts",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ユーザー情報"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "基本情報"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.user_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.login_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.email",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.phone",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "認証情報"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.password",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.pin",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.fingerprint_templates",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.faces",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.cards",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "権限およびグループ"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.permission",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.access_groups",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.user_group_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.private_operation_modes",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ユーザー状態"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.disabled",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.start_datetime",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.expiry_datetime",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "データ管理"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.csv_import",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.csv_export",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.data_import",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.data_export",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "デバイス連携"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.export",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.remove",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "その他"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.photo",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.user_custom_fields",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.security_level",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.report",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "管理"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.csv_export.absence",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.delete.absence",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.menu.faceMigration"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.list.visualFaceImport.title"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "メール機能"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.emailSentSuccess",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.user.emailSentFail",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "アクセス制御"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ドア設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.door_group_id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ドアデバイス"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.entry_device_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.exit_device_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.relay_output_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.sensor_input_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.exit_button_input_id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ドア制御"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open_duration",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open_once",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open_timeout",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.dual_authentication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.unconditional_lock",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ドア動作"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.unlock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.release",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.open",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_alarm",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_apb",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_apb_ex",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.door.clear_timed_apb_ex",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "アクセスグループ"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.access_levels",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.user_groups",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_group.users",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "アクセスレベル"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_level.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_level.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.access_level.access_level_items",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "エレベーター設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.elevator_group_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.floors",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.active_timeout",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "エレベーターデバイス"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.control_device_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.reader_devices",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.module_devices",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.tamper_device",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "エレベーター制御"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.dual_authentication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.trigger_actions",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "エレベーター動作"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.unlock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.release",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.open",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.clear_alarm",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.elevator.clear_apb",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "フロアレベル"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.floor_level.floor_level_items",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "デバイス管理"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "デバイス基本設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.device_group_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.timezone",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "認証設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.authentication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.fingerprint",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.face",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.card",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "インターフェース設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.display",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.imageLogEventInfo",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.use_image_log",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "通信設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.lan",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.server",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.rs485",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.wlan",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.wiegand",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.wiegand_io",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.usb",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.voip",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "機能設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.system",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.tna",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.trigger_actions",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.camera_frequency",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ユーザー管理"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.export",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "デバイス制御"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.connect",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.disconnect",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.sync",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.deleteNsync",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.discover_wiegand",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "システム管理"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.factory_reset",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.reset",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.update",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.sync_time",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.license",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "デバイス状態"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.locked",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.clear_alarm",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.device.delete",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "高度アクセス制御"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "高度アクセス制御の基本設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.zone_type",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.enable",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.is_global",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "アンチパスバック"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.antipassback",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.clear_apb",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.clear_apb_ex",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "火災警報"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.fire_alarm",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "スケジュール制御"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.forced_lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.forced_unlock",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "在室人数管理"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.increase_occupancy",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.decrease_occupancy",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.set_occupancy",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "高度アクセス制御の操作"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.lock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.unlock",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.release",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.open",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.zone.clear_alarm",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "システム設定"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "サーバー設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.server_addr",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.server_port",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.https",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.session_timeout",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "セキュリティ設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.secure_communication",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.password_strength",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.server_matching",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "同期設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.log_sync_method",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.user_sync_method",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "デバイス設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.enrollment_device_list",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.fingerprint_format",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.support_mobile_credential",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.use_photo_log",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ライセンス"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.server.licenses",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "基本設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.language",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.date_format",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.time_format",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.preference.time_zone",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "スケジュール設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.daily_schedules",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.holiday_schedules",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.start_date",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.use_daily_iteration",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.schedule.days_of_iteration",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "休日設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.holiday_group.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.holiday_group.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.holiday_group.setting.holidays",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "警報設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.event_type.alert_on",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.event_type.alert_off",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "イメージログ設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.image_filter.EventFilterCollection",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.image_filter.CutoffOption",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "モバイルクレデンシャル"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.mobileCredential.use",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.mobileCredential.notUse",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "高度セキュリティ設定"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "スマートカード - DESFire"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_app_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_file_id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_encryption_type",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.desfire_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "スマートカード - iClass"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.iclass_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.iclass_second_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.iclass_start_block_index",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "スマートカード - MIFARE"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mifare_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mifare_second_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mifare_start_block_index",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.use_mifare_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.use_mifare_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "スマートカード - Mobile"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mobile_primary_key",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.mobile_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "スマートカード - 一般"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.number_of_template",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.template_size",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.smartcard.use_second_key",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wiegand設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.length",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.id_fields",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.parity_fields",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.parity_positions",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.parity_types",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.wiegand_format.use_facility_code",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "作業条件および動作"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.trigger",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.action",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.trigger_action.schedule_id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "カスタム権限"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.description",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.id",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.operator",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.permission.permission_items",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "カスタムフィールド"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.custom_fields.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.custom_fields.id",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "信号設定"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.name",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.delay",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.count",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.on_duration",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.setting.output_signal.off_duration",
              product: "2"
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "データ管理"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "システムバックアップ"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.systemBackup",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ビデオ管理"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.video.camera",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.video.rule",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "訪問者管理"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.visitor",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.visitor.setting",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ポート管理"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.port",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "サマータイム"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.dst",
              product: "2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "カスタムインターフェース"
            }), "：", (0,jsx_runtime.jsx)(Cmd, {
              sid: "audit.menu.setting.quick_action",
              product: "2"
            })]
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