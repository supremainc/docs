"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["97383"], {
14062: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_customizing_email_templates_mdx_690_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-customizing-email-templates-mdx-690.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_customizing_email_templates_mdx_690_namespaceObject = JSON.parse('{"id":"platform/biostar_air/customizing-email-templates","title":"メールテンプレートのカスタマイズ","description":"BioStar Airでロゴ、パーソナライズされたコンテンツ、多言語対応を活用して、ユーザー招待、アクティベーション、通知用のブランドメールテンプレートを作成およびカスタマイズする方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/customizing-email-templates.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/customizing-email-templates","permalink":"/docs/ja/platform/biostar_air/customizing-email-templates","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/customizing-email-templates.mdx","tags":[],"version":"current","frontMatter":{"id":"customizing-email-templates","title":"メールテンプレートのカスタマイズ","description":"BioStar Airでロゴ、パーソナライズされたコンテンツ、多言語対応を活用して、ユーザー招待、アクティベーション、通知用のブランドメールテンプレートを作成およびカスタマイズする方法を案内します。","keywords":["メールテンプレート","カスタマイズ"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"サマータイム（DST）の設定","permalink":"/docs/ja/platform/biostar_air/daylight-saving-time"},"next":{"title":"アラートとレポートの設定","permalink":"/docs/ja/platform/biostar_air/settings-alert-report"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/customizing-email-templates.mdx


const frontMatter = {
	id: 'customizing-email-templates',
	title: 'メールテンプレートのカスタマイズ',
	description: 'BioStar Airでロゴ、パーソナライズされたコンテンツ、多言語対応を活用して、ユーザー招待、アクティベーション、通知用のブランドメールテンプレートを作成およびカスタマイズする方法を案内します。',
	keywords: [
		'メールテンプレート',
		'カスタマイズ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "メールテンプレートの追加",
  "id": "addEmailTemplate",
  "level": 2
}, {
  "value": "メールテンプレートの編集",
  "id": "editEmailTemplate",
  "level": 2
}, {
  "value": "メールテンプレートの削除",
  "id": "deleteEmailTemplate",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirEdit, IcAirRemove, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "メールテンプレート機能を使って、サイト利用者に送信されるメールを会社のブランドやメッセージに合わせてカスタマイズできます。 メールテンプレートには招待状、アクティベーションメール、およびその他の通知が含まれます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "メールテンプレート設定のビデオガイドを視聴するには、次の動画を参照してください。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "xmgpp6xMBuE"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addEmailTemplate",
      children: "メールテンプレートの追加"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.email_template_menu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.add_template_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-email.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.add_email_template",
            product: "air"
          }), " パネルが表示されたら、各項目の設定を構成します。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_text",
            product: "air"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "admin_text",
            product: "air"
          }), " タブを選択して、ユーザーまたは管理者のメールテンプレートを設定できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["言語ごとにメールテンプレートを個別に作成できます。 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user_form_input3",
          product: "air"
        }), " オプションで言語を選択できます。 サポートされている言語は以下のとおりです。"]
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "English, 한국어, 日本語, Nederlands, Español, Português"
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "今後さらに多くの言語をサポートする予定です。"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "user_text",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーに送信されるメールテンプレートをカスタマイズできます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-email-add-user.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.email_type",
            product: "air"
          }), "：作成するメールテンプレートの種類を選択します。 利用可能なオプションは以下のとおりです。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "email_templates.activate_user",
                product: "air"
              }), "：通常、モバイルカードをダウンロードするための招待状として使用します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "email_templates.reactivate_user",
                product: "air"
              }), "：モバイルカードが再アクティブ化されたことをユーザーに通知します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "email_templates.reissue_user",
                product: "air"
              }), "：新しいモバイルカードを発行する際に使用します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "email_templates.delete_user",
                product: "air"
              }), "：カード削除に関する通知をユーザーに送信します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "email_templates.suspend_user",
                product: "air"
              }), "：カードが一時停止されたことをユーザーに通知します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "email_templates.upload_user_face",
                product: "air"
              }), "：ユーザーに顔写真の登録を依頼する際に使用します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.card_type",
            product: "air"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.activate_user",
            product: "air"
          }), " および ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.reissue_user",
            product: "air"
          }), " のように、モバイルカードのダウンロードを許可するメール種類で選択できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_card_type_mobile",
              product: "air"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_card_type_web_qr",
              product: "air"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_card_type_web_link",
              product: "air"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["クレデンシャルの種類の詳細については、", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/user-card-types"
            }), "をご参照ください。"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "admin",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "admin_text",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "管理者に送信されるメールテンプレートをカスタマイズできます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-email-add-admin.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "email_templates.email_type",
        product: "air"
      }), "：作成するメールテンプレートの種類を選択します。 利用可能なオプションは以下のとおりです。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.alert_event_log_admin",
            product: "air"
          }), "：サイトで発生したイベントに関する通知を管理者に送信します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.alert_system_admin",
            product: "air"
          }), "：システムアラートを管理者に送信します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.alert_report_admin",
            product: "air"
          }), "：レポートを生成した後、ダウンロードリンクを管理者に送信します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "emailStyles",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "email_templates.email_styles",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["メールのロゴと内容をカスタマイズできます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "email_templates.preview",
        product: "air"
      }), " でリアルタイムに変更を確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-email-add-style.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.logo_image",
            product: "air"
          }), "：メールに表示するロゴ画像をアップロードします。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "ファイル形式: JPG、JPEG、PNG"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "最小解像度: 200 x 60"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "ファイルサイズ: 1 MB以下"
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.title_text",
            product: "air"
          }), "：メールの件名を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.body_text",
            product: "air"
          }), "：メール本文に表示するメッセージを入力します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["メール本文にはHTMLキー（key）が含まれている必要があります。 キー（key）はそれぞれ受信者のメールアドレスやサイト名などに置き換えられます。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "email_templates.email_type",
              product: "air"
            }), "で選択した値によって使用できるキー（key）は異なる場合があります。"]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "ユーザー"
                }), " タブ"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${email}"
                }), "：メールアドレス"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${siteName}"
                }), "：サイト名"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "管理者"
                }), " タブ"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${email}"
                }), "：メールアドレス"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${siteName}"
                }), "：サイト名"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${alertType}"
                }), "：通知の種類"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${alertDetails}"
                }), "：通知の詳細"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${frequency}"
                }), "：通知の発生頻度"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${location}"
                }), "：通知が発生した場所"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${userInvolved}"
                }), "：通知に関連するユーザー"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${deviceInvolved}"
                }), "：通知に関連するデバイス"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "${dateTime}"
                }), "：通知が発生した日時"]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.bottom_text",
            product: "air"
          }), "：メール下部に表示する追加情報を入力します。 規制遵守のため、またはユーザーに場所の詳細を提供するために、会社の住所や連絡先情報を追加します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ロゴ画像がメールで適切に表示されるよう、正しい形式とサイズであることを確認します。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "現在使用している言語がサポートされていない場合は、今後のアップデートを確認してください。 さらに多くの言語を追加する予定です。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "住所欄は規制遵守と明確性のために重要なので、正確に入力してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["メールテンプレートを保存するには、下部の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "save_btn",
              product: "air"
            }), " をクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["既存の内容を変更した後に復元するには、下部の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "new_button_reset",
              product: "air"
            }), " をクリックします。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editEmailTemplate",
      children: "メールテンプレートの編集"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.email_template_menu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一覧から編集するメールテンプレートをクリックします。 またはチェックボックスをクリックし、上部の ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.edit_email_template",
            product: "air"
          }), " パネルが表示されたら、必要な項目を修正します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-email-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更を保存するには、下部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteEmailTemplate",
      children: "メールテンプレートの削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "email_templates.email_template_menu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧で削除するメールテンプレートのチェックボックスをクリックします。 1つ以上のテンプレートを選択できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一覧上部の", (0,jsx_runtime.jsx)(IcAirRemove, {}), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メッセージウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_delete",
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