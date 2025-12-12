"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["62405"], {
66957: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ enroll_credential_mobile_frontMatter),
  toc: () => (/* binding */ enroll_credential_mobile_toc),
  "default": () => (/* binding */ enroll_credential_mobile_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_mobile_mdx_fca_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ enroll_credential_mobile_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-mobile-mdx-fca.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_mobile_mdx_fca_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-mobile","title":"モバイルアクセスカードを登録する","description":"Suprema の Airfob Portal と連携してモバイルアクセスカードを使用すると、ユーザーにモバイルアクセスカードを発行できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-mobile.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-mobile","permalink":"/docs/ja/platform/biostar_x/enroll-credential-mobile","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-mobile.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-mobile","title":"モバイルアクセスカードを登録する","description":"Suprema の Airfob Portal と連携してモバイルアクセスカードを使用すると、ユーザーにモバイルアクセスカードを発行できます。","keywords":["モバイルアクセスカード","登録","クレデンシャル","認証","カード"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"入退室カードを登録する","permalink":"/docs/ja/platform/biostar_x/enroll-credential-card"},"next":{"title":"QR/バーコードを登録する","permalink":"/docs/ja/platform/biostar_x/enroll-credential-qrbarcode"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_enroll-credential-mobile-notes.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.info",
        product: "2"
      }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.photo",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.department",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.detail.title",
        product: "2"
      }), " オプションを有効にした場合、その情報をユーザーのモバイル入退室カードに表示できます。 このとき表示される項目は、ユーザー情報に入力された内容に基づきます。 ユーザー基本情報の入力方法については、", (0,jsx_runtime.jsx)(_components.a, {
        href: "add-user-basic-info",
        children: "次のドキュメント"
      }), "を参照してください。"]
    }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_enroll-credential-mobile-airfob-site-notes.mdx


const _enroll_credential_mobile_airfob_site_notes_frontMatter = (/* unused pure expression or super */ null && ({}));
const _enroll_credential_mobile_airfob_site_notes_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _enroll_credential_mobile_airfob_site_notes_toc = [];
function _enroll_credential_mobile_airfob_site_notes_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _enroll_credential_mobile_airfob_site_notes_missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsx)(_components.admonition, {
    type: "note",
    children: (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.validPeriod",
        product: "2"
      }), " 項目は、Airfobポータルでサイトを作成する際に", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ダイナミック"
      }), "(", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic"
      }), ")サイトとして設定すると有効になります。 ユーザーのモバイルアクセスカードの有効期限と利用期間を設定できます。 Airfobポータルの利用に関する詳細は", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://airfob.zohodesk.com/portal",
        children: "次のリンク"
      }), "を参照してください。"]
    })
  });
}
function _enroll_credential_mobile_airfob_site_notes_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_enroll_credential_mobile_airfob_site_notes_createMdxContent, {
      ...props
    })
  }) : _enroll_credential_mobile_airfob_site_notes_createMdxContent(props);
}
function _enroll_credential_mobile_airfob_site_notes_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-mobile.mdx


const enroll_credential_mobile_frontMatter = {
	id: 'enroll-credential-mobile',
	title: 'モバイルアクセスカードを登録する',
	description: 'Suprema の Airfob Portal と連携してモバイルアクセスカードを使用すると、ユーザーにモバイルアクセスカードを発行できます。',
	keywords: [
		'モバイルアクセスカード',
		'登録',
		'クレデンシャル',
		'認証',
		'カード'
	],
	isTranslationMissing: false
};
const enroll_credential_mobile_contentTitle = undefined;

const assets = {

};





const enroll_credential_mobile_toc = [{
  "value": "CSN モバイル",
  "id": "csnmobilecard",
  "level": 2
}, {
  "value": "カード割り当て",
  "id": "カード割り当て",
  "level": 3
}, ..._enroll_credential_mobile_airfob_site_notes_toc, ...toc, {
  "value": "直接入力",
  "id": "直接入力",
  "level": 3
}, ..._enroll_credential_mobile_airfob_site_notes_toc, ...toc, ..._enroll_credential_mobile_airfob_site_notes_toc, ...toc];
function enroll_credential_mobile_createMdxContent(props) {
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
  }, {Cmd, Image} = _components;
  if (!Cmd) enroll_credential_mobile_missingMdxReference("Cmd", true);
  if (!Image) enroll_credential_mobile_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema の Airfob Portal と連携してモバイルアクセスカードを使用すると、ユーザーにモバイルアクセスカードを発行できます。 モバイルアクセスカードは、各ユーザーが個別に登録することも、CSV インポート機能を使用して多数のユーザーを一括登録することもできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Airfob Portal で設定したモバイルアクセスカード送信方法に応じて、ユーザーのメールアドレスを入力する必要があります。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["モバイルアクセスカードは ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSN モバイルカード"
            }), " と ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "テンプレート・オン・モバイル"
            }), " のいずれか一方のみ使用できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["この機能を使用するには Airfob Portal と連携する必要があります。 Airfob Portal との連携およびモバイルアクセスカードの使用について詳しくは", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-credential-mobile-access-card",
              children: "以下のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csnmobilecard",
      children: "CSN モバイル"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーに CSN モバイルアクセスカードを発行できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "カード割り当て",
      children: "カード割り当て"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.mobileCredential",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.mobile",
            product: "2"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnrol.cardTypeCsnMobile",
            product: "2"
          }), " を選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.assignCard",
            product: "2"
          }), " を選択してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-mobile-csn-assign.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsx)(_enroll_credential_mobile_airfob_site_notes_MDXContent, {}), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "カード一覧から割り当てたいカードを選択するか検索してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " と ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.validPeriod",
            product: "2"
          }), " を設定してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(MDXContent, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "直接入力",
      children: "直接入力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.mobileCredential",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.mobile",
            product: "2"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnrol.cardTypeCsnMobile",
            product: "2"
          }), " を選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.enterManually",
            product: "2"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-mobile-csn.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsx)(_enroll_credential_mobile_airfob_site_notes_MDXContent, {}), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.inputType",
            product: "2"
          }), " オプションを選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.random.cardid",
                product: "2"
              }), "：カード ID を自動生成します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.useUserId",
                product: "2"
              }), "：ユーザー ID をカード ID として使用します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.manual.input",
                product: "2"
              }), "：カード ID を直接入力できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " と ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.validPeriod",
            product: "2"
          }), " を設定してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["メールで送信したアクティベーションコードをユーザーが紛失または削除し、アクティベーションリンクを再発行する場合は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "再送信"
            }), " ボタンをクリックしてください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CSN モバイルアプリケーションの詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.csn.edu/csn-mobile-apps",
              children: "次のリンク"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "template-on-mobile",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.tom",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "テンプレート・オン・モバイル"
      }), " は、ユーザーのバイオメトリックテンプレートをモバイルデバイスに保存するモバイルアクセスカードです。 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " サーバー、Airfob Portal、およびデバイスにユーザーデータを保存しなくてもバイオメトリック認証が行えます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["この機能は、バイオメトリックをクレデンシャルとして使用したいが、プライバシー保護のためサーバーやデバイスに生体情報を保存できない環境で有用です。 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "テンプレート・オン・モバイル"
      }), " の発行とバイオメトリックテンプレートの登録が別々に行われるため、ユーザーは管理者と対面せずに ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "テンプレート・オン・モバイル"
      }), " 対応デバイスで直接顔を登録できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.mobileCredential",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.header.mobile",
            product: "2"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardType",
            product: "2"
          }), " オプションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardEnroll.cardTypeTemplateOnMobile",
            product: "2"
          }), " を選択してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-new-user-credential-mobile-tom.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsx)(_enroll_credential_mobile_airfob_site_notes_MDXContent, {}), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardModeLong",
            product: "2"
          }), " オプションで希望のカードタイプを選択してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.accessOnCard",
                product: "2"
              }), "：ユーザーの情報（カード ID、PIN、アクセスグループ、期間、個人認証モード）をカードに保存できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user.secureCredentialCard",
                product: "2"
              }), "：セキュアクレデンシャルカードです。 ユーザーのカード ID と PIN データをカードに保存できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " と ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.validPeriod",
            product: "2"
          }), " を設定してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["登録されたユーザーのメールアドレスに発行メールを送信します。 メールのリンクから Airfob Pass アプリケーションをインストールし、モバイルデバイスで ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "テンプレート・オン・モバイル"
      }), " の発行を完了すると使用できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "テンプレート・オン・モバイル認証方法"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "ユーザーはテンプレート・オン・モバイルを発行したモバイルデバイスを装置にかざし、画面の案内に従って顔を認証してください。"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "テンプレート・オン・モバイル"
            }), " が使用可能な装置とファームウェアバージョンについては以下の一覧を参照してください。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioStation 3 ファームウェア 1.2.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioEntry W3 ファームウェア 1.0.0 以上"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "FaceStation F2 ファームウェア 2.2.0 以上"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["モバイルアクセスカードは ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CSN モバイルカード"
            }), " と ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "テンプレート・オン・モバイル"
            }), " のいずれか一方のみ発行できます。"]
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function enroll_credential_mobile_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(enroll_credential_mobile_createMdxContent, {
      ...props
    })
  }) : enroll_credential_mobile_createMdxContent(props);
}
function enroll_credential_mobile_missingMdxReference(id, component) {
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