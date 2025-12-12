"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["46104"], {
50228: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_view_users_mdx_c02_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-view-users-mdx-c02.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_view_users_mdx_c02_namespaceObject = JSON.parse('{"id":"platform/biostar_x/view-users","title":"ユーザーを閲覧する","description":"ユーザー一覧の照会、検索、並べ替えおよび管理機能の使用方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/view-users.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/view-users","permalink":"/docs/ja/platform/biostar_x/view-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/view-users.mdx","tags":[],"version":"current","frontMatter":{"id":"view-users","title":"ユーザーを閲覧する","description":"ユーザー一覧の照会、検索、並べ替えおよび管理機能の使用方法を説明します。","keywords":["ユーザー","検索"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ユーザーの詳細設定","permalink":"/docs/ja/platform/biostar_x/set-user-advanced"},"next":{"title":"ユーザー管理","permalink":"/docs/ja/platform/biostar_x/user-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/view-users.mdx


const frontMatter = {
	id: 'view-users',
	title: 'ユーザーを閲覧する',
	description: 'ユーザー一覧の照会、検索、並べ替えおよび管理機能の使用方法を説明します。',
	keywords: [
		'ユーザー',
		'検索'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "ユーザー一覧を表示する",
  "id": "view-user-list",
  "level": 2
}, {
  "value": "表示オプションを選択する",
  "id": "select-view-options",
  "level": 2
}, {
  "value": "ユーザー一覧ページの移動",
  "id": "user-list-page-moves",
  "level": 3
}, {
  "value": "ユーザー一覧の表示件数を変更する",
  "id": "change-number-of-users-list-indications",
  "level": 3
}, {
  "value": "ユーザー一覧の並べ替え",
  "id": "user-list-alignment",
  "level": 3
}, {
  "value": "ユーザー検索",
  "id": "user-search",
  "level": 2
}, {
  "value": "一般検索",
  "id": "general-search",
  "level": 3
}, {
  "value": "詳細検索",
  "id": "advanced-search",
  "level": 3
}, {
  "value": "ユーザー一覧の列設定",
  "id": "user-list-column-settings",
  "level": 2
}, {
  "value": "ユーザー一覧を印刷",
  "id": "print-user-list",
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
  }, {Cmd, IcAdvSearch, IcAscend, IcBw, IcDescend, IcFirst, IcFw, IcLast, IcMoreW, IcTips, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdvSearch) _missingMdxReference("IcAdvSearch", true);
  if (!IcAscend) _missingMdxReference("IcAscend", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!IcDescend) _missingMdxReference("IcDescend", true);
  if (!IcFirst) _missingMdxReference("IcFirst", true);
  if (!IcFw) _missingMdxReference("IcFw", true);
  if (!IcLast) _missingMdxReference("IcLast", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcTips) _missingMdxReference("IcTips", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー一覧ページで登録済みユーザーを照会および管理する方法を説明します。 一般検索と詳細検索を利用して目的のユーザーを素早く見つけられ、一覧の並べ替え、列設定、印刷などの機能を使用できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " ページにアクセスするには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " をクリックするか、画面左上のショートカットリストから ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " を選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "view-user-list",
      children: "ユーザー一覧を表示する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー一覧ページでは、ユーザーの基本情報と状態を確認でき、各ユーザーの詳細情報を閲覧または編集できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー一覧には登録済みユーザーがすべて表示され、各ユーザーのID、名前、メールアドレス、利用期間、登録済みクレデンシャル状況、状態を基本情報として確認できます。 ユーザーはID順に一覧表示されます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["個別ユーザーの詳細情報を確認するには、ユーザー一覧で対象ユーザーをクリックします。 ユーザーのプロフィール情報が画面右側に表示されます。 ユーザープロフィール情報で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.preview.button.seeMore"
          }), " ボタンをクリックすると、ユーザーの詳細情報を編集できるページへ移動します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-users-list-view-profile.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーの詳細情報を編集するには、ユーザー一覧で対象ユーザーをダブルクリックします。 ユーザーの詳細情報を編集できるページへ移動します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザー情報の編集について詳しくは", (0,jsx_runtime.jsx)(_components.a, {
              href: "edit-user",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザー一覧で列レイアウトを変更できます。 列レイアウトの変更について詳しくは", (0,jsx_runtime.jsx)(_components.a, {
              href: "view-users#user-list-column-settings",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "select-view-options",
      children: "表示オプションを選択する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画面右上のツールボタンを使用して、ユーザー一覧の表示オプションを変更できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-list-page-moves",
      children: "ユーザー一覧ページの移動"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー一覧にはデフォルトで10人のユーザーが表示されます。 画面上部のボタンをクリックして別のページへ移動できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list-pagenation.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcFirst, {}), " ：ユーザー一覧の最初のページへ移動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcFw, {}), " ：ユーザー一覧の前のページへ移動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcBw, {}), " ：ユーザー一覧の次のページへ移動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcLast, {}), " ：ユーザー一覧の最後のページへ移動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["指定ページへ移動するには、数値入力フィールドにページ番号を入力し、", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), " キーを押します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "change-number-of-users-list-indications",
      children: "ユーザー一覧の表示件数を変更する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー一覧に表示されるユーザー数を変更できます。 画面右上のリスト選択ボックスで表示件数を選択します。 選択できるオプションは50件、100件、200件です。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list-select-row.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-list-alignment",
      children: "ユーザー一覧の並べ替え"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザー一覧の並べ替え基準を変更できます。 一覧上部の列ヘッダーをクリックすると、昇順または降順に並べ替えられます。 たとえば、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.table.firstName"
      }), " 列ヘッダーをクリックすると、ユーザー名を基準に昇順または降順で並べ替えられます。 クリックした項目には昇順(", (0,jsx_runtime.jsx)(IcAscend, {}), ") または降順(", (0,jsx_runtime.jsx)(IcDescend, {}), ") のアイコンが表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list-order.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "列の種類によっては並べ替えできない項目があります。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-search",
      children: "ユーザー検索"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "特定のユーザーを検索する方法を説明します。 ユーザー一覧ページの検索機能を使って、目的のユーザーを素早く見つけることができます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "検索に使用するキーワードでは大文字と小文字が区別されません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザーの基本情報が入力されている必要があります。 ユーザーの基本情報入力について詳しくは", (0,jsx_runtime.jsx)(_components.a, {
              href: "add-user-basic-info",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "general-search",
      children: "一般検索"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザーのID、名前、メールアドレスを基準に検索できます。 画面上部の検索入力フィールドにキーワードを入力し、", (0,jsx_runtime.jsx)(Kbd, {
        children: "Enter"
      }), " キーを押します。 入力したキーワードと一致するユーザーが一覧に表示されます。 一覧の最上部で検索結果の件数を確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-search-result.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-search",
      children: "詳細検索"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーのID、名前、メールアドレス、電話番号などを指定して検索できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面上部の検索入力フィールド横にある ", (0,jsx_runtime.jsx)(IcAdvSearch, {}), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["詳細検索ウィンドウが開いたら、検索条件を入力し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.search"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-advanced-search.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["入力フィールドのうち ", (0,jsx_runtime.jsx)(IcTips, {}), " アイコンが表示されている項目は、個人情報DBの暗号化により完全一致でのみ検索できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["詳細検索ウィンドウで入力条件をリセットするには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.clearAll"
            }), " ボタンをクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["詳細検索では ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.title",
              product: "2"
            }), " の検索をサポートします。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.title",
              product: "2"
            }), " について詳しくは", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-server-server#custom-field",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-list-column-settings",
      children: "ユーザー一覧の列設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー一覧で表示される列設定を変更できます。 列設定で表示する列を選択したり、列の順序を変更したりできます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザー一覧画面右上の ", (0,jsx_runtime.jsx)(IcMoreW, {}), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.columnLayout"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.columnSetting.title"
          }), " ウィンドウが表示されたら、必要な列を選択または選択解除します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-users-list-column-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "列の順序を変更するには、目的の列をクリックしたままドラッグして位置を変更します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "列設定は各ユーザーアカウントごとに保存されます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["列レイアウト設定を初期化するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "columnSetting.button.defaultColumn",
              product: "2"
            }), " ボタンをクリックします。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "print-user-list",
      children: "ユーザー一覧を印刷"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示中のユーザー一覧をPDFまたはSVGファイルとして保存できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザー一覧画面右上の ", (0,jsx_runtime.jsx)(IcMoreW, {}), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.print"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「", (0,jsx_runtime.jsx)(Cmd, {
            sid: "printOption.dialog.header",
            product: "2"
          }), "」ウィンドウが表示されたら、「", (0,jsx_runtime.jsx)(Cmd, {
            sid: "printOption.fileFormat",
            product: "2"
          }), "」オプションで目的のフォーマットを選択し、その他のオプションを設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-users-print-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.print"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ブラウザーで開いたPDFまたはSVGファイルを印刷できます。"
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