"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["40640"], {
78248: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_adding_individual_users_mdx_76f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-adding-individual-users-mdx-76f.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_adding_individual_users_mdx_76f_namespaceObject = JSON.parse('{"id":"platform/biostar_air/adding-individual-users","title":"ユーザーの追加","description":"BioStar Airでユーザーを追加、編集、削除する方法を案内します。 ユーザータイプの選択、クレデンシャル（Mobile Card、RF Card、Web Card、Face、PIN）の発行、アクセスレベルおよび有効期限の設定方法をステップごとに説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/adding-individual-users.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/adding-individual-users","permalink":"/docs/ja/platform/biostar_air/adding-individual-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/adding-individual-users.mdx","tags":[],"version":"current","frontMatter":{"id":"adding-individual-users","title":"ユーザーの追加","description":"BioStar Airでユーザーを追加、編集、削除する方法を案内します。 ユーザータイプの選択、クレデンシャル（Mobile Card、RF Card、Web Card、Face、PIN）の発行、アクセスレベルおよび有効期限の設定方法をステップごとに説明します。","keywords":["ユーザー管理","BioStar Air","ユーザーを追加"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"ユーザー","permalink":"/docs/ja/platform/biostar_air/managing-users"},"next":{"title":"ユーザー管理","permalink":"/docs/ja/platform/biostar_air/user-management-user-list"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/adding-individual-users.mdx


const frontMatter = {
	id: 'adding-individual-users',
	title: 'ユーザーの追加',
	description: 'BioStar Airでユーザーを追加、編集、削除する方法を案内します。 ユーザータイプの選択、クレデンシャル（Mobile Card、RF Card、Web Card、Face、PIN）の発行、アクセスレベルおよび有効期限の設定方法をステップごとに説明します。',
	keywords: [
		'ユーザー管理',
		'BioStar Air',
		'ユーザーを追加'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "ユーザーの追加を開始",
  "id": "addingUsers",
  "level": 2
}, {
  "value": "ユーザー情報の入力",
  "id": "userInformation",
  "level": 2
}, {
  "value": "プロフィール画像のアップロード",
  "id": "uploadProfileImage",
  "level": 2
}, {
  "value": "ユーザー種類の選択",
  "id": "selecting-user-type",
  "level": 2
}, {
  "value": "クレデンシャルの発行",
  "id": "issuingCredentials",
  "level": 2
}, {
  "value": "招待リンクの送信",
  "id": "sendingInvitationLink",
  "level": 2
}, {
  "value": "アクセスレベルと有効期限の設定",
  "id": "setting-access-levels-and-validity",
  "level": 2
}, {
  "value": "カードテンプレートの選択",
  "id": "selectingCardTemplate",
  "level": 2
}, {
  "value": "ユーザーの保存または有効化",
  "id": "saving-or-activating-the-user",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, DocLink, IcAdd, IcAirL, IcAirR, IcInfinity, Image, NextItem, NextStep, TabItem, Tabs, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcAirL) _missingMdxReference("IcAirL", true);
  if (!IcAirR) _missingMdxReference("IcAirR", true);
  if (!IcInfinity) _missingMdxReference("IcInfinity", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "このドキュメントは、BioStar Airで個々のユーザーを追加および管理する方法を段階的に案内します。 ユーザータイプ（通常／一時）を選択し、各タイプに適したクレデンシャルを発行し、アクセスレベルと有効期限を設定する全プロセスを扱います。 追加したユーザー情報の編集や削除方法も含みます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "新しいユーザーの追加全プロセスを段階的に案内する以下の動画を参照してください。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "FTgpsYPlP8k"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addingUsers",
      children: "ユーザーの追加を開始"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ユーザーリストが表示されます。"
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
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-gettingstarted-user-group-mng-add-user.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_a_user",
            product: "air"
          }), " 画面が表示されたら、各セクションに必要な情報を入力して設定してください。 すべてのセクションの必須項目を設定し、右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_card_activate_btn",
            product: "air"
          }), " をクリックしてください。"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsxs)(Column, {
            className: "width--40",
            children: [(0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user.png",
              className: "none"
            }), (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-add.png",
              className: "none"
            })]
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "モバイルアプリにログインしてください。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["初期画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "site_setting_tab_management",
                    product: "air"
                  }), " をタップしてください。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_submenu",
                    product: "air"
                  }), " カードをタップしてください。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["ユーザー一覧画面上部の ", (0,jsx_runtime.jsx)(IcAdd, {
                    title: "Add"
                  }), " ボタンをタップしてください。"]
                }), "\n"]
              }), "\n"]
            }), (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_a_user",
                product: "air"
              }), " 画面が表示されたら、各セクションに必要な情報を入力して設定してください。 すべてのセクションの必須項目を設定し、右下の ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_card_activate_btn",
                product: "air"
              }), " をクリックしてください。"]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "userInformation",
      children: "ユーザー情報の入力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "user_detail",
        product: "air"
      }), " セクションで追加するユーザーの基本情報を入力してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "web",
        label: "Web",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-gettingstarted-user-group-mng-add-user-details.png"
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-add-info.png",
          width: "30%"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input1",
            product: "air"
          }), "：特定のIDを直接入力するか、システムに連番で生成させることができます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input3",
            product: "air"
          }), "：ユーザーの基本言語を選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input5",
            product: "air"
          }), "：ユーザーが所属するグループを選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input2",
            product: "air"
          }), "：ユーザーの氏名を入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input18",
            product: "air"
          }), "：ユーザーの役職を入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input4",
            product: "air"
          }), "：ユーザーが所属する部署名を入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input11",
            product: "air"
          }), "：ユーザーのプロフィール画像をアップロードできます。 詳細については ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#uploadProfileImage"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("span", {
              className: "require",
              children: "*"
            }), " は必須入力項目です。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザーのメールアドレスと電話番号は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "credential_detail",
              product: "air"
            }), " セクションの ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_form_input8",
              product: "air"
            }), " 項目で入力できます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uploadProfileImage",
      children: "プロフィール画像のアップロード"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "web",
        label: "Web",
        children: (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "プロフィール画像領域にマウスオーバーし、プラスボタンをクリックしてください。"
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-upload-profile-image.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ローカルに保存された画像ファイルを選択してください。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "crop_image_header",
                product: "air"
              }), " ウィンドウが表示されたら、写真のサイズを希望の大きさに調整してください。 画像サイズを自動調整するには、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "fit_this_image",
                product: "air"
              }), " オプションをクリックしてください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-upload-profile-image-adjust.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["アップロードした画像をプロフィールとして保存するには、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " をクリックしてください。"]
            }), "\n"]
          }), "\n"]
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--30",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-add-image.png"
            })
          }), (0,jsx_runtime.jsx)(Column, {
            className: "padding--l40",
            children: (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "プロフィール画像をタップしてください。"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "下部に表示されるメニューから、希望する方法で画像を追加してください。"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        en: "Choose from library",
                        children: "ライブラリから選択"
                      }), ": モバイル端末に保存された画像ファイルを選択してアップロードできます。"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        en: "Take photo",
                        children: "写真を撮る"
                      }), "：モバイル端末のカメラで写真を撮影してアップロードできます。"]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "アップロードした画像を適切なサイズに調整して保存してください。"
                }), "\n"]
              }), "\n"]
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selecting-user-type",
      children: "ユーザー種類の選択"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "credential_detail",
            product: "air"
          }), " セクションで、追加するユーザーが通常ユーザーか一時訪問者かを選択してください。 ユーザーの種類により発行できるクレデンシャルの種類が異なります。"]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_regular_card_type",
                product: "air"
              }), "：組織または施設の正規メンバーで、長期かつ継続的な入退室権限が必要なユーザーです。 すべてのクレデンシャルタイプを発行できます。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-user-type-regular.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_temporary_card_type",
                product: "air"
              }), ": 短期かつ限定的な入退室権限を必要とする訪問者または非正規メンバーです。 ゲスト、外部来訪者、短期契約者、配達員などが該当します。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_form_input20",
                product: "air"
              }), " のクレデンシャルのみ発行でき、QRコードとLinkPassが含まれます。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-user-type-temporary.png"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "select_user_card_type_label",
            product: "air"
          }), " セクションで、追加するユーザーが通常ユーザーか一時訪問者かを選択してください。 ユーザーの種類により発行できるクレデンシャルの種類が異なります。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-add-type.png",
          width: "60%",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_regular_card_type",
                product: "air"
              }), "：組織または施設の正規メンバーで、長期かつ継続的な入退室権限が必要なユーザーです。 すべてのクレデンシャルタイプを発行できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_temporary_card_type",
                product: "air"
              }), ": 短期かつ限定的な入退室権限を必要とする訪問者または非正規メンバーです。 ゲスト、外部来訪者、短期契約者、配達員などが該当します。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_form_input20",
                product: "air"
              }), " のクレデンシャルのみ発行でき、QRコードとLinkPassが含まれます。"]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user_regular_card_type",
              product: "air"
            }), " タイプのユーザーは自動的に全アクセスレベルが割り当てられる場合がありますが、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_temporary_card_type",
              product: "air"
            }), " タイプのユーザーは手動でアクセスレベルを選択する必要があります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user_table_column8",
              product: "air"
            }), " は BioStar Air 2.6 以降でサポートされています。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "issuingCredentials",
      children: "クレデンシャルの発行"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザー情報を入力した後、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "credential_detail",
        product: "air"
      }), " セクションでアクセス認証手段として使用するクレデンシャルを設定してください。 各クレデンシャルには有効化または無効化できるトグルスイッチがあります。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_mobile",
            product: "air"
          }), "：Suprema Pass モバイルアプリをアクセス認証手段として使用できます。 管理者はカードID番号を編集できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
          groupId: "platform",
          children: [(0,jsx_runtime.jsx)(TabItem, {
            value: "web",
            label: "Web",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-credential-type-mobile.png"
            })
          }), (0,jsx_runtime.jsx)(TabItem, {
            value: "mobile",
            label: "Mobile",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-add-credential-mobile.png",
              width: "30%"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_rf",
            product: "air"
          }), "：ユーザーごとに最大8枚のRFIDカードをアクセス認証手段として追加できます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_btn",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
          groupId: "platform",
          children: [(0,jsx_runtime.jsx)(TabItem, {
            value: "web",
            label: "Web",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-credential-type-rfcard.png"
            })
          }), (0,jsx_runtime.jsx)(TabItem, {
            value: "mobile",
            label: "Mobile",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-add-credential-rfcard.png",
              width: "30%"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["カードの種類（CSN / Wiegand）、カードIDおよびカード名を構成できます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "newest_rf_card_text_device",
            product: "air"
          }), " 項目でリーダーを選択してください。 接続されたリーダーを使用して実物のRFIDカードをスキャンすることもできます。"]
        }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
          groupId: "platform",
          children: [(0,jsx_runtime.jsx)(TabItem, {
            value: "web",
            label: "Web",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-credential-type-rfcard-2type.png",
              className: "none"
            })
          }), (0,jsx_runtime.jsx)(TabItem, {
            value: "mobile",
            label: "Mobile",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-add-credential-rfcard-csn-wiegand.png",
              width: "60%",
              className: "none"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input20",
            product: "air"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_option3",
            product: "air"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_option4",
            product: "air"
          }), " をアクセス認証手段として使用できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
          groupId: "platform",
          children: [(0,jsx_runtime.jsx)(TabItem, {
            value: "web",
            label: "Web",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-credential-type-web.png"
            })
          }), (0,jsx_runtime.jsx)(TabItem, {
            value: "mobile",
            label: "Mobile",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-add-credential-webcard.png",
              width: "30%"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "card_type_option3",
              product: "air"
            }), " は ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings_menu",
              product: "air"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_submenu",
              product: "air"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_setting_qr_reader_tab",
              product: "air"
            }), " で ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_setting_qr_label",
              product: "air"
            }), " オプションを有効にする必要があります。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_option5",
            product: "air"
          }), "：アクセス認証手段として顔のプロフィール画像を最大2つまで追加できます。 既存の画像をアップロードするか、デバイスで登録できます。 またはメールでリンクを送って、ユーザーがモバイル端末のカメラで直接登録することもできます。"]
        }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
          groupId: "platform",
          children: [(0,jsx_runtime.jsxs)(TabItem, {
            value: "web",
            label: "Web",
            children: [(0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-credential-type-face.png"
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "select_file",
                    product: "air"
                  }), "：ローカルに保存された画像ファイルを選択してアップロードできます。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "register_on_device",
                    product: "air"
                  }), ": 登録済みのデバイスを使用して顔画像を登録できます。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "register_on_mobile",
                    product: "air"
                  }), "：モバイル端末のカメラでQRコードをスキャンすると、顔画像を登録できるリンクに移動できます。"]
                }), "\n", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-add-user-credential-credential-type-face-qr.png",
                  width: "50%"
                }), "\n"]
              }), "\n"]
            })]
          }), (0,jsx_runtime.jsx)(TabItem, {
            value: "mobile",
            label: "Mobile",
            children: (0,jsx_runtime.jsxs)(Columns, {
              children: [(0,jsx_runtime.jsx)(Column, {
                className: "width--30",
                children: (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-app-mng-user-add-credential-face.png"
                })
              }), (0,jsx_runtime.jsxs)(Column, {
                className: "padding--l40",
                children: [(0,jsx_runtime.jsxs)(_components.p, {
                  children: ["顔写真を追加するには ", (0,jsx_runtime.jsx)(IcAdd, {
                    title: "Add"
                  }), " ボタンをタップしてください。 画面下部に表示されるメニューから、任意の方法で顔写真を追加できます。"]
                }), (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        en: "Choose from library",
                        children: "ライブラリから選択"
                      }), ": モバイル端末に保存された画像ファイルを選択してアップロードできます。"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        en: "Take photo",
                        children: "写真を撮る"
                      }), "：モバイル端末のカメラで写真を撮影してアップロードできます。"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        sid: "use_as_profile_image",
                        product: "air"
                      }), "：プロフィール画像を顔認証用のクレデンシャルとして使用できます。"]
                    }), "\n"]
                  }), "\n"]
                }), (0,jsx_runtime.jsx)(_components.admonition, {
                  type: "note",
                  children: (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["顔写真登録の詳細については、", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "view_photo_guide",
                      product: "air"
                    }), " ボタンをクリックしてください。"]
                  })
                })]
              })]
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_option6",
            product: "air"
          }), "：4〜16桁のPINを設定して、2要素認証（2FA）の一部として使用できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
          groupId: "platform",
          children: [(0,jsx_runtime.jsx)(TabItem, {
            value: "web",
            label: "Web",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-add-user-credential-credential-type-pin.png"
            })
          }), (0,jsx_runtime.jsx)(TabItem, {
            value: "mobile",
            label: "Mobile",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-add-credential-pin.png",
              width: "30%"
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sendingInvitationLink",
      children: "招待リンクの送信"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "card_type_mobile",
        product: "air"
      }), " または ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_form_input20",
        product: "air"
      }), " を使用するユーザーに、Suprema Pass アプリのダウンロードリンクをメールで送信できます。 メールアドレス（必須）と携帯電話番号（任意）を入力してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "web",
        label: "Web",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-user-credential-credential-type-invite-link.png"
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-add-invitation.png",
          width: "30%"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "user_form_input10",
          product: "air"
        }), " オプションは ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings_menu",
          product: "air"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "credit_center_submenu",
          product: "air"
        }), " でSMSクレジットのチャージをリクエストする必要があります。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-access-levels-and-validity",
      children: "アクセスレベルと有効期限の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["クレデンシャルを選択した後、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "access_detail",
        product: "air"
      }), " セクションでユーザーのクレデンシャル有効期間、アクセスレベルおよびフロアレベルなどを構成してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "web",
        label: "Web",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-user-access-info.png"
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-add-validation.png",
          width: "30%"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_valid_period",
            product: "air"
          }), "：ユーザーに発行したクレデンシャルの有効期間を設定してください。 終了日を設定しない場合は、", (0,jsx_runtime.jsx)(IcInfinity, {
            title: "No Expiration Date"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input12",
            product: "air"
          }), "：ユーザーがアクセスできる権限を選択してください。 全権限を付与するか、あらかじめ定義されたアクセスレベルを選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input19",
            product: "air"
          }), "：ユーザーがアクセスできるフロアレベルを選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_device_manager",
            product: "air"
          }), ": ユーザーが特定のデバイスでアクセス権を管理できるように許可できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "mobile_consecutive_tag",
            product: "air"
          }), "：ウェイトなしで連続してモバイルカードをタッチできるように許可できます。 この機能はSuprema Passアプリ2.9.0以降でサポートされています。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user_form_input12",
              product: "air"
            }), " は恒久割り当て（クレデンシャルと共に期限切れ）または一時割り当て（クレデンシャルより先に期限切れ）を設定できます。 アクセスレベルの設定に関する詳細は ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-access-level"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["フロアレベルの設定に関する詳細は ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-floor-level"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "user_device_manager",
              product: "air"
            }), " オプションは X-Station 2 ユーザーのみ利用可能で、X-Station 2 端末の管理者メニューにアクセスできます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "selectingCardTemplate",
      children: "カードテンプレートの選択"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["カードテンプレートのデザインを変更するには、右パネルのカードテンプレートの下で ", (0,jsx_runtime.jsx)(IcAirL, {}), " または ", (0,jsx_runtime.jsx)(IcAirR, {}), " ボタンをクリックして選択できます。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-user-select-card-template.png",
          width: "70%"
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_preview_header",
            product: "air"
          }), "で ", (0,jsx_runtime.jsx)(IcAirL, {}), " または ", (0,jsx_runtime.jsx)(IcAirR, {}), " ボタンをタップして選択できます。"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-add-card-template.png",
          width: "30%"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["新しいカードテンプレートの作成方法に関する詳細は ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-card-templates"
        }), " を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "saving-or-activating-the-user",
      children: "ユーザーの保存または有効化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーに関するすべての設定を構成したら、以下のオプションのいずれかを選択できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザーを保存して後で有効化するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["クレデンシャルを即時に発行して有効化するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_card_activate_btn",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "adding-users-in-bulk",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "個別ユーザーを追加する方法を確認したら、次に複数のユーザーを一度に登録する方法を学んでください。"
        })
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