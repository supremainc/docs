"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["78952"], {
44639: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_card_templates_mdx_270_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-card-templates-mdx-270.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_card_templates_mdx_270_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-card-templates","title":"カードテンプレートの管理","description":"BioStar Airでは、ロゴ、色、ユーザー属性などのブランディング要素を使用してモバイルカードテンプレートを作成し、カスタマイズおよび管理する方法について説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-card-templates.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-card-templates","permalink":"/docs/ja/platform/biostar_air/managing-card-templates","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-card-templates.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-card-templates","title":"カードテンプレートの管理","description":"BioStar Airでは、ロゴ、色、ユーザー属性などのブランディング要素を使用してモバイルカードテンプレートを作成し、カスタマイズおよび管理する方法について説明します。","keywords":["カードテンプレート","BioStar Air","ユーザー管理"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"ユーザーグループを管理する","permalink":"/docs/ja/platform/biostar_air/managing-user-groups"},"next":{"title":"ユーザーのカードとクレデンシャルの種類","permalink":"/docs/ja/platform/biostar_air/user-card-types"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-card-templates.mdx


const frontMatter = {
	id: 'managing-card-templates',
	title: 'カードテンプレートの管理',
	description: 'BioStar Airでは、ロゴ、色、ユーザー属性などのブランディング要素を使用してモバイルカードテンプレートを作成し、カスタマイズおよび管理する方法について説明します。',
	keywords: [
		'カードテンプレート',
		'BioStar Air',
		'ユーザー管理'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "新しいカードテンプレートを作成する",
  "id": "creatingNewCardTemplate",
  "level": 2
}, {
  "value": "既定のカードテンプレートの設定",
  "id": "既定のカードテンプレートの設定",
  "level": 2
}, {
  "value": "カードテンプレートの編集",
  "id": "カードテンプレートの編集",
  "level": 2
}, {
  "value": "カードテンプレートの削除",
  "id": "カードテンプレートの削除",
  "level": 2
}, {
  "value": "すべてのユーザーにテンプレートを適用する",
  "id": "すべてのユーザーにテンプレートを適用する",
  "level": 2
}, {
  "value": "個別ユーザーのカードテンプレート変更",
  "id": "applying-card-templates-to-users",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, IcAirDef, IcAirEdit, IcAirL, IcAirR, IcAirRemove, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!IcAirDef) _missingMdxReference("IcAirDef", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirL) _missingMdxReference("IcAirL", true);
  if (!IcAirR) _missingMdxReference("IcAirR", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airのカードテンプレートを使用すると、管理者はユーザー向けのモバイルカードをデザインし、カスタマイズできます。 このテンプレートは、会社の色、ロゴ、およびパーソナライズされた詳細を含め、ブランディングを強化するのに役立ちます。 カードテンプレートはSuprema Passアプリで使用されるモバイルカードに適用されます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-mobile-card-template-intro.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Airのすべてのサイトには既定のテンプレートが含まれています。 画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_template_submenu",
        product: "air"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-user-mobile-card-template.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "既定のテンプレートを確認できます。 管理者は次の3つの方法のいずれかを選択してモバイルカードテンプレートを適用できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "既定のカードテンプレートをユーザーのモバイルカードに適用する"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "既存テンプレートのパラメータを変更してカスタム設定したモバイルカードを適用する"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新しいカスタムテンプレートを作成して既存テンプレートの代わりに適用する"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "カードテンプレート管理のビデオガイドを見るには、次のビデオを参照してください。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "tFO1DvKo0po"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creatingNewCardTemplate",
      children: "新しいカードテンプレートを作成する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新しいカードテンプレートを作成できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_new_card_template",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-new.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_templates_header",
            product: "air"
          }), " パネルが表示されたら、カードのデザインと構成を設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-new-card.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["必要な設定を適用した後、モバイルカードテンプレートを保存するには ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cardStyles",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_styles_header",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "card_styles_header",
        product: "air"
      }), " セクションではカードの背景色または背景画像を設定できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_styles_1",
            product: "air"
          }), "：モバイルカードの背景色を設定できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_styles_2",
            product: "air"
          }), "：モバイルカードの背景画像をアップロードできます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "background_img_upload_btn",
            product: "air"
          }), " をクリックして、ローカルに保存されている背景画像ファイルを選択します。 その後、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "crop_image_header",
            product: "air"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "fit_this_image",
            product: "air"
          }), " オプションをクリックするか、手動でサイズを調整します。 画像の調整設定を完了したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-adjust-image.png",
          width: "50%"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cardProperties",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_properties",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "card_properties",
        product: "air"
      }), " セクションではモバイルカードに含める属性を選択できます。 トグルスイッチをクリックすると、右側の ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_template_preview_header",
        product: "air"
      }), " に選択した属性が表示されます。"]
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--60",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-card-config.png"
        })
      }), (0,jsx_runtime.jsx)(Column, {
        className: "padding--l10",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["希望する属性を配置し、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "card_template_preview_header",
                product: "air"
              }), " で該当要素をクリックすると、サイズ、位置、角度を調整できるハンドルが表示されます。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-mobile-card-template-card-config-setting.png",
              width: "20%"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "各属性のフォントをカスタマイズできます。 配置した属性をクリックした後、上部のフォント設定オプションを使用します。 フォントサイズおよびスタイル、整列、色を調整できます。"
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-mobile-card-template-card-config-font.png",
              width: "80%"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "app_display_theme",
                product: "air"
              }), " でダークモードまたはライトモードを選択できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["設定した構成とデザインを初期化するには、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "card_template_reset_btn",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["すべての設定を完了したら、モバイルカードテンプレートを保存するには ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "既定のカードテンプレートの設定",
      children: "既定のカードテンプレートの設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新しく追加したモバイルカードテンプレートを既定のテンプレートに設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "希望するテンプレートの右上のチェックボックスをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["テンプレート一覧の左上にある ", (0,jsx_runtime.jsx)(IcAirDef, {
            title: "Set as Default Card"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-set-default.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メッセージウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_yes_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "既定として設定されたモバイルカードテンプレートは、ユーザーを新規追加する際に自動的に適用されます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "既定テンプレート設定機能は、1つのテンプレートのみを適用できます。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "カードテンプレートの編集",
      children: "カードテンプレートの編集"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["テンプレート一覧から編集するテンプレートをクリックします。 またはテンプレートの右上のチェックボックスを選択してから、", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_templates_header",
            product: "air"
          }), " パネルが表示されたら、カードのデザインと構成を変更します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メッセージウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_replace_btn",
            product: "air"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_save_new_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-edit-confirm.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "card_template_replace_btn",
                product: "air"
              }), "：既存のテンプレートを編集して保存します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "card_template_save_new_btn",
                product: "air"
              }), "：編集した内容を新しいテンプレートとして保存します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "カードテンプレートの削除",
      children: "カードテンプレートの削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "テンプレート一覧で削除するテンプレートの右上のチェックボックスをクリックします。 1つ以上のテンプレートを選択できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["テンプレート一覧の左上にある ", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-remove.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メッセージウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_yes_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "既定のテンプレートは削除できません。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "すべてのユーザーにテンプレートを適用する",
      children: "すべてのユーザーにテンプレートを適用する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "テンプレート一覧で適用するテンプレートの右上のチェックボックスをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "update_all_users1",
            product: "air"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-apply-all.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メッセージウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "card_template_yes_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "選択したカードテンプレートをすべてのユーザーに適用すると、既に設定されているテンプレートは置き換えられます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "1つのカードテンプレートのみをすべてのユーザーに適用できます。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applying-card-templates-to-users",
      children: "個別ユーザーのカードテンプレート変更"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "個別ユーザーのカードテンプレートを変更するには、以下の手順に従います。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
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
          children: "ユーザー一覧でカードテンプレートを適用するユーザーをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザー詳細の右上にある ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-apply-user-edit.png",
          width: "70%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_edit_header",
            product: "air"
          }), " ウィンドウが表示されたら、右側のパネルのカードテンプレート欄で、", (0,jsx_runtime.jsx)(IcAirL, {
            title: "Previous"
          }), " または ", (0,jsx_runtime.jsx)(IcAirR, {
            title: "Next"
          }), " ボタンをクリックして、目的のカードテンプレートを選択してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-mobile-card-template-apply-user-details.png",
          width: "70%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更を適用するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
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