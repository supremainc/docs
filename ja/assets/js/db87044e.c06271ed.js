"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["24008"], {
41577: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_security_mdx_db8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-system-security-mdx-db8.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_security_mdx_db8_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-security","title":"システムセキュリティを強化する","description":"BioStar X のパスワードポリシー、個人情報の暗号化、デバイス間通信のセキュリティを設定してシステムセキュリティを強化しましょう。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-security.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-security","permalink":"/docs/ja/platform/biostar_x/settings-system-security","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-security.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-security","title":"システムセキュリティを強化する","description":"BioStar X のパスワードポリシー、個人情報の暗号化、デバイス間通信のセキュリティを設定してシステムセキュリティを強化しましょう。","keywords":["システムセキュリティ","暗号化"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"システムを復元する","permalink":"/docs/ja/platform/biostar_x/settings-system-system-restore"},"next":{"title":"サマータイムを設定する","permalink":"/docs/ja/platform/biostar_x/settings-system-daylight-saving-time"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-security.mdx


const frontMatter = {
	id: 'settings-system-security',
	title: 'システムセキュリティを強化する',
	description: 'BioStar X のパスワードポリシー、個人情報の暗号化、デバイス間通信のセキュリティを設定してシステムセキュリティを強化しましょう。',
	keywords: [
		'システムセキュリティ',
		'暗号化'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "システムセキュリティを使用する",
  "id": "システムセキュリティを使用する",
  "level": 2
}, {
  "value": "パスワードポリシーの設定",
  "id": "password-policy-configuration",
  "level": 2
}, {
  "value": "パスワードの複雑性の設定",
  "id": "パスワードの複雑性の設定",
  "level": 3
}, {
  "value": "パスワード変更周期の設定",
  "id": "パスワード変更周期の設定",
  "level": 3
}, {
  "value": "ログイン失敗制限の設定",
  "id": "ログイン失敗制限の設定",
  "level": 3
}, {
  "value": "パスワード変更回数制限の設定",
  "id": "パスワード変更回数制限の設定",
  "level": 3
}, {
  "value": "高度なセキュリティ設定",
  "id": "advanced-security-configuration",
  "level": 2
}, {
  "value": "個人情報保護の強化",
  "id": "個人情報保護の強化",
  "level": 3
}, {
  "value": "デバイス間通信セキュリティ設定",
  "id": "デバイス間通信セキュリティ設定",
  "level": 3
}, {
  "value": "同時接続制御",
  "id": "session-security-configuration",
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
  }, {Cmd, Details, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["組織のセキュリティポリシーに合わせて ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " のセキュリティ設定を構成します。 パスワードポリシー、個人情報の暗号化、デバイス間通信のセキュリティ、同時接続制御などを選択的に設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "システムセキュリティを強化する前に、組織のセキュリティポリシーおよび規程を確認してください。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "システムセキュリティを使用する",
      children: "システムセキュリティを使用する"
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
            sid: "setting.systemSecurity",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "セキュリティに関する各項目を設定します。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.systemSecurity.loginPassword",
                product: "2"
              }), "：ログインパスワードに関するセキュリティレベルを設定します。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
                href: "#password-policy-configuration",
                children: "次のセクション"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.secure.comm.title",
                product: "2"
              }), "：個人情報とデバイス間通信のセキュリティを強化できます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
                href: "#advanced-security-configuration",
                children: "次のセクション"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.systemSecurity.sessionSecurity",
                product: "2"
              }), "：セッションセキュリティを強化できます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
                href: "#session-security-configuration",
                children: "次のセクション"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.secure.comm.title",
          product: "2"
        }), " メニューは、ID が ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1"
        }), " の初期管理者アカウントのみ使用できます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "password-policy-configuration",
      children: "パスワードポリシーの設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.loginPassword",
        product: "2"
      }), " セクションでは、ログインパスワードに関するセキュリティレベルを設定します。 組織のセキュリティ要件に合わせてパスワードポリシーを設定します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-password.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "パスワードの複雑性の設定",
      children: "パスワードの複雑性の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザーパスワードの複雑性を設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.passwordLevel",
        product: "2"
      }), " オプションのスライダーを調整してセキュリティレベルを設定します。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.passwordLevelDefault",
            product: "2"
          }), "：最大32文字まで入力できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.passwordLevelMedium",
            product: "2"
          }), "：パスワードを設定する際は、8～32 文字の英字（大文字または小文字）と数字を組み合わせる必要があります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.passwordLevelStrong",
            product: "2"
          }), "：パスワードを設定する際は、10～32 文字の英字（大文字と小文字、少なくとも 1 文字の大文字を含む）と数字、記号を組み合わせる必要があります。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "パスワード変更周期の設定",
      children: "パスワード変更周期の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["パスワードの使用期間を制限するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.passwordUpdateCycle",
        product: "2"
      }), " オプションでトグルボタンをクリックして ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.active",
        product: "2"
      }), " 状態に切り替えます。 ユーザーは設定した期間ごとにパスワードを変更する必要があります。 パスワード変更周期を超えると、ログイン時にパスワード変更要求メッセージが表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "1 日から 180 日まで設定できます。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ログイン失敗制限の設定",
      children: "ログイン失敗制限の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["パスワード入力失敗の許容回数とログイン制限時間を設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.allowLoginFailed",
        product: "2"
      }), " オプションで設定した回数を超えてパスワードを誤入力すると、制限時間中はログインできません。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "このオプションはデフォルトで有効になっており、100 回失敗すると 10 分間ログインが制限されます。 必要に応じて値を調整するか、無効化できます。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "パスワード変更回数制限の設定",
      children: "パスワード変更回数制限の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザーが 1 日にパスワードを変更できる回数を制限するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.allowPasswordChange",
        product: "2"
      }), " オプションでトグルボタンをクリックして ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.active",
        product: "2"
      }), " 状態に切り替えます。 ユーザーは設定した回数だけパスワードを変更できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "最大 10 回まで設定できます。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advanced-security-configuration",
      children: "高度なセキュリティ設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.secure.comm.title",
        product: "2"
      }), " セクションでは、個人情報とデバイス間通信のセキュリティを強化できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-advanced.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "個人情報保護の強化",
      children: "個人情報保護の強化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "機微な個人情報を暗号化してデータ漏えいのリスクを最小化するには、以下のオプションを設定してください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.sever.secure.comm.encrypt.db",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), "：クレデンシャルデータを含むユーザーの個人情報を暗号化して保存します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.notUse",
                product: "2"
              }), "：ユーザーの個人情報を暗号化せずに保存します。 既に暗号化されているデータは復号して保存し、新しいデータは暗号化しません。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.encryption_key_db",
            product: "2"
          }), "：データベースに保存された情報を暗号化または復号してユーザーの個人情報を安全に保護するために使用します。 「", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.key_change",
            product: "2"
          }), "」ボタンをクリックして、新しい暗号化キー値を設定してください。 暗号化キーを変更すると、既に暗号化されているデータを再暗号化します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "個人情報 DB の暗号化または復号処理の実行中にサーバーを強制的に起動しないでください。 ログイン失敗やデータ破損などのエラーが発生する可能性があります。 データベースのサイズとサーバーの性能によっては時間がかかる場合があります。"
          }), "\n", (0,jsx_runtime.jsxs)(Details, {
            children: [(0,jsx_runtime.jsx)("summary", {
              children: "個人情報暗号化項目を表示"
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "プロフィール画像"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "ユーザーID"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "名前"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "電話番号"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "ユーザーIP"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "送信者および受信者のメール情報"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "ログインID"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "ログインパスワード"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "顔テンプレート"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "指紋テンプレート"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "カードID"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "スマートカードレイアウトキー"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "ユーザーおよび訪問者に関するカスタム情報"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "イメージログファイル"
                }), "\n"]
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.secure.comm.encryption_key_db",
              product: "2"
            }), "は英数字と記号を使用して32文字で入力できます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "デバイス間通信セキュリティ設定",
      children: "デバイス間通信セキュリティ設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " サーバーとアクセス制御デバイス間の安全な通信を設定してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.menu",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーとアクセス制御デバイス間の通信を証明書で保護できます。 このオプションを ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), " に設定すると、サーバーが自動で証明書を生成してデバイスに送信し、その後すべての通信が暗号化されます。 デバイスはこの証明書を使用して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーとのデータ送受信時にセキュアチャネルを利用できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["外部証明書を使用する場合は、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.extcert.menu",
            product: "2"
          }), " オプションをオンにして、ルート証明書、公開鍵証明書、秘密鍵ファイルをアップロードする必要があります。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-system-security-advanced-with-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.secure.comm.data_encryption",
            product: "2"
          }), "：データ暗号化キーと管理者パスワードを新たに指定できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " は、デバイスとのセキュア通信の設定状態に応じて証明書を生成または削除し、以前と同一の証明書を再生成しません。 例えば、デバイスとセキュア通信の設定を ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.notUse",
              product: "2"
            }), " の順に変更すると、生成された証明書は自動的に削除されます。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.notUse",
              product: "2"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.use",
              product: "2"
            }), " の順に変更すると、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "A 証明書の生成"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "A 証明書の破棄"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "B 証明書の生成"
            }), " が実行されます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["デバイスをネットワークから物理的に切り離した状態で ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.sever.secure.comm.menu",
              product: "2"
            }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.notUse",
              product: "2"
            }), " に設定すると、デバイスに保存されている証明書が削除されます。 この場合、デバイスを再接続できません。 再接続するには、デバイスに保存されている証明書を削除するか、工場出荷時設定に初期化する必要があります。 詳細についてはデバイスのマニュアルを参照してください。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.sever.secure.comm.menu",
            product: "2"
          }), " 機能対応デバイスとファームウェアバージョンを表示"]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStation 2 ファームウェア 1.1.0 以降"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation A2 ファームウェア 1.5.0 以降"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 2 ファームウェア 1.6.0 以降"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation L2 ファームウェア 1.3.0 以降"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioLite N2 ファームウェア 1.0.0 以上"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry P2 ファームウェア 1.1.0 以降"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry W2 ファームウェア 1.2.0 以降"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceLite ファームウェア 1.0.0 以上"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 2 ファームウェア 1.0.0 以上"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "CoreStation ファームウェア 1.1.0 以降"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "X-Station 2 ファームウェア 1.0.0 以上"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 3 ファームウェア 1.0.0 以上"
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "session-security-configuration",
      children: "同時接続制御"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.sessionSecurity",
        product: "2"
      }), " セクションでは、セキュリティを強化するために同一アカウントの重複ログインを制限できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.systemSecurity.useSimultaneousConnection",
        product: "2"
      }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.inactive",
        product: "2"
      }), " に設定してください。 同一アカウントで同時接続が試行されると、既に接続しているユーザーはログアウトされます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-system-security-session.png",
      className: "none"
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