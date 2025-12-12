"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["21791"], {
63296: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_visitor_register_manage_mdx_de1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-visitor-register-manage-mdx-de1.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_visitor_register_manage_mdx_de1_namespaceObject = JSON.parse('{"id":"platform/biostar_x/visitor-register-manage","title":"来訪申請を管理する","description":"来訪申請を承認、修正、追加、削除できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/visitor-register-manage.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/visitor-register-manage","permalink":"/docs/ja/platform/biostar_x/visitor-register-manage","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/visitor-register-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"visitor-register-manage","title":"来訪申請を管理する","description":"来訪申請を承認、修正、追加、削除できます。","keywords":["訪問申請","管理"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"訪問を申請する","permalink":"/docs/ja/platform/biostar_x/visitor-register"},"next":{"title":"チェックイン訪問者を管理する","permalink":"/docs/ja/platform/biostar_x/visitor-register-checkin-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/visitor-register-manage.mdx


const frontMatter = {
	id: 'visitor-register-manage',
	title: '来訪申請を管理する',
	description: '来訪申請を承認、修正、追加、削除できます。',
	keywords: [
		'訪問申請',
		'管理'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "来訪承認",
  "id": "来訪承認",
  "level": 2
}, {
  "value": "承認とカード登録",
  "id": "approve-and-register-card",
  "level": 3
}, {
  "value": "指紋検索による来訪者承認",
  "id": "指紋検索による来訪者承認",
  "level": 2
}, {
  "value": "来訪者追加",
  "id": "来訪者追加",
  "level": 2
}, {
  "value": "来訪者削除",
  "id": "来訪者削除",
  "level": 2
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "来訪申請を承認または修正できます。 管理者が直接来訪者を追加または削除することもできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "来訪承認",
      children: "来訪承認"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "来訪申請履歴を確認し、来訪者の入退室を承認する方法を説明します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "来訪者一覧で、承認する来訪者をクリックします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["来訪者の来訪情報を確認して修正が必要な項目を修正した後、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.edit",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.status.checkIn",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.visitRegisterInfo",
            product: "2"
          }), " の内容を確認し、来訪を承認するには、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.checkin",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["来訪申請時に来訪者入退室利用規約に同意していない申請者の場合、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.checkin",
              product: "2"
            }), " は無効化されます。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "visitor.term.watch",
              product: "2"
            }), " をクリックして来訪者に入退室利用規約を提示し、規約への同意を取得します。 来訪者が入退室利用規約に同意しない場合、来訪が制限されます。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/visitor-register-manage-view-term.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["来訪PCにカード登録デバイスが設定されている場合、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "visitor.button.approveAndRegisterCard",
              product: "2"
            }), " が有効になります。 来訪を承認して入退室カードを発行するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "visitor.button.approveAndRegisterCard",
              product: "2"
            }), " をクリックします。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "#approve-and-register-card",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["来訪PCでカード利用を設定するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.visitor"
            }), " メニューで以下の最小設定が必要です。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-visitor-settings-use-card.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "visitor.site",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.setting",
                  product: "2"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.card",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.use",
                  product: "2"
                }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "user.cardType",
                  product: "2"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "visitor.pc.management",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "visitor.pc.setting",
                  product: "2"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.card",
                  product: "2"
                }), " ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.server.enrollment_device.device_name",
                  product: "2"
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "approve-and-register-card",
      children: "承認とカード登録"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "来訪申請を承認して入退室カードを発行する方法を説明します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.visitRegisterInfo",
            product: "2"
          }), " 画面で、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.button.approveAndRegisterCard",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved-card.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "カード登録ウィンドウが表示されたら、希望する登録方法を選択します。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.registerByCardReader",
              product: "2"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.enterManually",
              product: "2"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.registerByCardReader",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "来訪PCに接続されたデバイスでカード情報をスキャンして登録できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), " を ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registerByCardReader",
            product: "2"
          }), " に選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved-card-reader.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登録するカードをデバイスにスキャンするには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.readCard",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["カードを登録するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-1",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.enterManually",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "カード番号を直接入力して登録できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.registrationOption",
            product: "2"
          }), " を ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.enterManually",
            product: "2"
          }), " に選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-item-approved-card-manual.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.cardId",
            product: "2"
          }), " を直接入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["カードを登録するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.enroll",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指紋検索による来訪者承認",
      children: "指紋検索による来訪者承認"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指紋を登録済みの来訪者を指紋で検索し、承認できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["来訪申請一覧で左上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.button.searchVisitorByFingerprint",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-list-search-fingerprint.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指紋スキャナに来訪者の指紋をスキャンします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["指紋と一致する来訪者が検索されると、確認メッセージが表示されます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.button.registerInformation",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-list-search-fingerprint-confirm.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["来訪者の来訪情報を確認して修正が必要な項目を修正した後、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.edit",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.status.checkIn",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.visitRegisterInfo",
            product: "2"
          }), " の内容を確認し、来訪を承認するには、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.checkin",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "来訪者追加",
      children: "来訪者追加"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管理者が直接来訪者を追加する方法を説明します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["来訪者一覧で左上の ", (0,jsx_runtime.jsx)(IcAdd, {}), " ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addVisitor",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.visitor",
            product: "2"
          }), " セクションで来訪者の氏名と電話番号を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-visitor-info.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.host",
            product: "2"
          }), " セクションで訪問先担当者の氏名と電話番号を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-admin-info.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["氏名または電話番号を入力すると、一致するユーザーの一覧が表示されます。 希望するユーザーを指定するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.choose",
              product: "2"
            }), " をクリックします。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.accessInfo",
            product: "2"
          }), " セクションで入退室グループと訪問期間を設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-access-info.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["訪問PCに割り当てた訪問先の入退室グループのみ選択できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-site",
              children: "次のドキュメント"
            }), "を参照してください。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.credential",
            product: "2"
          }), " セクションで入退室手段を設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-add-credential.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.card",
                product: "2"
              }), "：カード認証を使用する場合は ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.request",
                product: "2"
              }), " に設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.fingerPrint",
                product: "2"
              }), "：指紋認証を使用する場合は、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.addFingerprint",
                product: "2"
              }), " をクリックして来訪者の指紋を登録します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["来訪者追加を完了するには、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.register",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "名前は最大48文字まで入力できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["訪問者情報入力にカスタムフィールドを追加する場合は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-custom-field",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "来訪者削除",
      children: "来訪者削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "来訪申請一覧で削除する来訪者のチェックボックスをクリックします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-lists-remove-visitor.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.deleteVisitor",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["確認メッセージが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "button.func.deleteVisitor",
              product: "2"
            }), " は、来訪者のチェックボックスをクリックすると有効になります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "来訪者は来訪申請一覧からのみ削除できます。"
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