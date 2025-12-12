"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["36942"], {
7113: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Include} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Include) _missingMdxReference("Include", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.administrator",
            product: "2"
          }), "：すべてのメニューを使用できる管理者権限レベルです。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.userOperator",
            product: "2"
          }), "：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " メニューで ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "読み取り"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "書き込み"
          }), " 権限を持ちます。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.monitoringOperator",
            product: "2"
          }), "：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.data"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "shell.header.dashboard"
          }), " メニューで ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "読み取り"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "書き込み"
          }), " 権限を持ちます。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.taOperator",
            product: "2"
          }), "：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "common.gnb.time_attendance",
            product: "2"
          }), " メニューで ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "読み取り"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "書き込み"
          }), " 権限を持ちます。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "setting.account.visitorOperator",
            product: "2"
          }), "：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
            sid: "common.gnb.visitor",
            product: "2"
          }), " メニューで ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "読み取り"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "書き込み"
          }), " 権限を持ちます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Include, {
        pages: "set-permission",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["管理者権限レベルを設定しない場合は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "common.selectNone"
            }), " を選択してください。 この場合、該当ユーザーは ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "BioStar X"
            }), " にログインできません。"]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["事前定義されたユーザー権限以外に新しいユーザー権限を追加するには、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "settings-adding-custom-account",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "既定のアカウントの権限は変更または削除できません。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "setting.account.taOperator",
              product: "2"
            }), " および ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
              sid: "setting.account.visitorOperator",
              product: "2"
            }), " 権限レベルには別途ライセンスが必要です。 ライセンスポリシーの詳細は", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "licensing#features-add-ons",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
92465: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "新規ユーザー"
        }), "：画面右上の ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
          sid: "team.user.dialog.newUser"
        }), " をクリックします。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
          sid: "team.user.dialog.newUser"
        }), " ウィンドウが表示されます。"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "既存ユーザー"
        }), "：ユーザーリストでユーザーをダブルクリックします。 または、ユーザーをクリックすると画面右側に表示されるプレビュー画面で ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmd, {
          sid: "team.user.preview.button.seeMore"
        }), " をクリックします。 ユーザー情報を編集できるウィンドウが表示されます。"]
      }), "\n"]
    }), "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
5799: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_set_permission_mdx_bfa_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-set-permission-mdx-bfa.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_set_permission_mdx_bfa_namespaceObject = JSON.parse('{"id":"platform/biostar_x/set-permission","title":"ユーザー権限を設定する","description":"BioStar X ユーザーの管理者権限および入退室権限を設定する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/set-permission.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/set-permission","permalink":"/docs/ja/platform/biostar_x/set-permission","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/set-permission.mdx","tags":[],"version":"current","frontMatter":{"id":"set-permission","title":"ユーザー権限を設定する","description":"BioStar X ユーザーの管理者権限および入退室権限を設定する方法を案内します。","keywords":["ユーザー","権限"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"PINを登録する","permalink":"/docs/ja/platform/biostar_x/enroll-credential-pin"},"next":{"title":"ユーザーの詳細設定","permalink":"/docs/ja/platform/biostar_x/set-user-advanced"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_enter-user-page.mdx
var _enter_user_page = __webpack_require__(92465);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_account-list.mdx
var _account_list = __webpack_require__(7113);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/set-permission.mdx


const frontMatter = {
	id: 'set-permission',
	title: 'ユーザー権限を設定する',
	description: 'BioStar X ユーザーの管理者権限および入退室権限を設定する方法を案内します。',
	keywords: [
		'ユーザー',
		'権限'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [..._enter_user_page/* .toc */.RM, {
  "value": "管理者グレードを選択",
  "id": "operatorLevel",
  "level": 2
}, ..._account_list/* .toc */.RM, {
  "value": "ログイン ID とパスワードを設定",
  "id": "ログイン-id-とパスワードを設定",
  "level": 3
}, {
  "value": "多要素認証を設定",
  "id": "multiFactorAuth",
  "level": 2
}, {
  "value": "ユーザー IP アドレスでログインを設定",
  "id": "userIp",
  "level": 2
}, {
  "value": "入退室グループを選択",
  "id": "accessGroup",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["組織のセキュリティポリシーに応じて、ユーザーごとに ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " の運用権限と入退室権限を区別して設定できます。 管理者グレードで主要メニューへのアクセスを制限し、入退室グループで物理的スペースへのアクセスを制御できます。 さらに、IP アドレス制限と多要素認証によりセキュリティを強化できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " ページに移動し、次の 2 つの方法で入退室権限を設定します。"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_enter_user_page/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " セクションで設定できる項目は次のとおりです。 各項目の説明を参考に適切なユーザー権限を設定します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-permission.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operatorLevel",
      children: "管理者グレードを選択"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["管理者グレードによってアクセスできるメニューが制限されます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " セクションの ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.bioStarOperator",
        product: "2"
      }), " 項目で、ユーザーの管理者グレードを選択します。 ユーザーに割り当てられる管理者グレードは次の一覧を参照してください。"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_account_list/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ログイン-id-とパスワードを設定",
      children: "ログイン ID とパスワードを設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["管理者グレードを選択したら、そのユーザーが ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " にログインする際に使用する ID とパスワードを設定する必要があります。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-permission-set-login.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "ID とパスワードを設定する際の注意事項"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ID は英字と数字の組み合わせで 8～32 文字以内に設定します。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["パスワードポリシー設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-security#password-policy-configuration",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "セキュリティ上脆弱なパスワードは使用しないでください。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "連続した文字または数字（例：abcd、1234）"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "一般的な単語またはパターン（例：qwerty、password）"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multiFactorAuth",
      children: "多要素認証を設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.fingerprintLogin",
        product: "2"
      }), " を有効にすると、ユーザーは ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " にログインする際に指紋認証を追加してログインできます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "多要素認証"
        }), " の設定に関する詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "login-with-mfa",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "userIp",
      children: "ユーザー IP アドレスでログインを設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザー IP アドレスを登録すると、アカウントに登録した IP 情報と一致する場合にのみ PC にログインできます。 これによりセキュリティが向上します。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " セクションの ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.userIp"
      }), " 項目にユーザーの IP アドレスを入力します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "IP アドレスは xxx.xxx.xxx.xxx 形式で入力でき、各オクテットには 0～255 の数値のみを入力できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "IP アドレスを登録しない場合は、IP 情報に関係なく PC にログインできます。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessGroup",
      children: "入退室グループを選択"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザーの入退室グループを設定して、組織や部署ごとに入退室を制限できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " セクションの ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.accessGroup"
      }), " 項目で入退室グループを選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["入退室グループの追加および設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-access-control-manage-access-group",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "set-user-advanced",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.advanced",
            product: "2"
          }), " セクションでユーザー入退室時にデバイスに表示するメッセージを設定するか、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2",
            className: "normal"
          }), " 連携時に当該ユーザーを同期対象から除外できます。"]
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "edit-user",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザー情報を修正する方法を確認してください。"
        })
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