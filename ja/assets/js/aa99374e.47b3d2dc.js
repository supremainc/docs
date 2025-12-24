"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["47601"], {
50546: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_server_server_mdx_aa9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-server-server-mdx-aa9.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_server_server_mdx_aa9_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-server-server","title":"サーバーの詳細を設定する","description":"BioStar X サーバーの基本情報、ユーザーおよびデバイス管理、サーバーマッチング、システムログレベル、顔画像保存の設定を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-server-server.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-server-server","permalink":"/docs/ja/platform/biostar_x/settings-server-server","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-server-server.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-server-server","title":"サーバーの詳細を設定する","description":"BioStar X サーバーの基本情報、ユーザーおよびデバイス管理、サーバーマッチング、システムログレベル、顔画像保存の設定を案内します。","keywords":["サーバー設定","ユーザー管理","デバイス管理","サーバーマッチング","システムログ"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"サーバー設定","permalink":"/docs/ja/platform/biostar_x/settings-server"},"next":{"title":"HTTPS 証明書をインストールする","permalink":"/docs/ja/platform/biostar_x/settings-server-https"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-server-server.mdx


const frontMatter = {
	id: 'settings-server-server',
	title: 'サーバーの詳細を設定する',
	description: 'BioStar X サーバーの基本情報、ユーザーおよびデバイス管理、サーバーマッチング、システムログレベル、顔画像保存の設定を案内します。',
	keywords: [
		'サーバー設定',
		'ユーザー管理',
		'デバイス管理',
		'サーバーマッチング',
		'システムログ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "基本情報を設定する",
  "id": "basic-setting",
  "level": 2
}, {
  "value": "ユーザーおよびデバイス管理",
  "id": "user-and-device-management",
  "level": 2
}, {
  "value": "AoCカード設定",
  "id": "aoc-card-setting",
  "level": 3
}, {
  "value": "その他",
  "id": "other-settings",
  "level": 3
}, {
  "value": "サーバーマッチングを設定する",
  "id": "servermatching",
  "level": 2
}, {
  "value": "システムログレベルの設定",
  "id": "systemloglevel",
  "level": 2
}, {
  "value": "顔画像の保存",
  "id": "storevisualfaceimage",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
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
  }, {Cmd, Details, DocLink, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " サーバーの基本情報、ユーザーおよびデバイス管理、サーバーマッチング、システムログレベル、顔画像保存の設定を変更できます。"]
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
          children: ["画面左側のサイドバーで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.server.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.server",
            product: "2"
          }), "をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各セクションで必要な項目を設定してください。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.general",
                product: "2"
              }), "：IP アドレス、ポート番号、セッションタイムアウト、イベントログのアップロード方法、ログ保存期間を設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.userDeviceManagement",
                product: "2"
              }), "：ユーザーおよびデバイス管理設定を変更できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.logLevelManagement",
                product: "2"
              }), "：システムログレベル設定を変更できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.expertSettings.title",
                product: "2"
              }), "：顔の実画像とテンプレートを両方保存するか、実画像を保存せずテンプレートのみ保存するかを設定できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには、画面右下の", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "basic-setting",
      children: "基本情報を設定する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.general",
        product: "2"
      }), " セクションでは、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " の基本情報を確認または設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-general.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.biostarIPAdress",
            product: "2"
          }), "：サーバー IP アドレスを確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.logUploadType",
            product: "2"
          }), "：イベントログのアップロード方法を選択できます。 サーバーとリアルタイム通信が困難な場合は、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.manual",
            product: "2"
          }), "に設定してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.biostarPort",
            product: "2"
          }), "：サーバーポートを変更できます。 希望するポート番号を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.logRetainDays",
            product: "2"
          }), "：ログ保存期間は1〜120まで設定できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.sessionTimeout",
            product: "2"
          }), "：セッションのタイムアウト時間を設定できます。 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " にログインした後、設定した時間操作がないと自動でログアウトします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-and-device-management",
      children: "ユーザーおよびデバイス管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.userDeviceManagement",
        product: "2"
      }), " セクションでは、ユーザーとデバイス間の同期および認証方法を設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-management.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-sync",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.automaticUserSync",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.automaticUserSync",
        product: "2"
      }), " オプションでは、サーバーとデバイス間でユーザー情報を同期する方法を選択できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.syncOption.allDevices",
            product: "2"
          }), "：ユーザー情報がサーバーとデバイス間で自動的に同期されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.syncOption.deviceSync",
            product: "2"
          }), "：サーバーのユーザー情報がサーバーに登録されたすべてのデバイスと同期されます。 ただし、デバイスで修正したユーザー情報はサーバーに同期されず、デバイスで追加したユーザー情報のみがサーバーに同期されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.syncOption.smartSync",
            product: "2"
          }), "：変更があるアクセスグループに属するデバイスのみがサーバーと自動同期されます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), " オプションを選択すると、デバイスに保存されているユーザーのうちアクセスグループに属していないユーザーはサーバーで管理できません。 このオプションを使用するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.menu.device.root"
            }), " メニューで各デバイスを選択し、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), " をクリックして同期を実行します。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), " 機能の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-using-functions",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), " オプションを選択しても、以下のように特別な目的で指定されたアクセスグループの場合、デバイスのアクセスグループに関係なく同期されます。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "デバイスおよびエレベーターで設定された二要素認証アクセスグループ"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "アンチパスバック設定の常時通過グループ"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "スケジュール施錠設定の常時通過グループ"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "スケジュール解放設定の解放認証入退室グループ"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "警備設定の警備/解除グループ"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.syncOption.smartSync",
              product: "2"
            }), " オプションを選択しても、デバイス管理者に指定されたユーザーはアクセスグループに関係なく同期されます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fingerprint-template-format",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.fingerprintTemplateFormat",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.fingerprintTemplateFormat",
        product: "2"
      }), " オプションでは、指紋テンプレート形式を選択できます。 次の項目から選択します。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "SUPREMA"
          }), "：Suprema指紋テンプレート形式です。 Supremaデバイスで指紋を登録する際に使用します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "ISO"
          }), "：ISO国際指紋テンプレート形式です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "ANSI378"
          }), "：米国規格協会（ANSI）が定義した指紋テンプレート形式です。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "デバイスにユーザーの指紋テンプレートが残っている場合、別の形式に変更できません。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "userid-type",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType",
        product: "2"
      }), " オプションでは、ユーザーIDの種類を ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType.numeric",
        product: "2"
      }), " または ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.userDevice.useridType.alphanumeric",
        product: "2"
      }), " に設定できます。 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " サーバーに登録されているデバイス一覧を確認し、互換性のある設定値を選択します。"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsxs)("summary", {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.userDevice.useridType",
          product: "2"
        }), " を変更できるデバイスとファームウェアバージョンを表示"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CoreStation ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation 2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceLite ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry W2 ファームウェア 1.1.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation L2 ファームウェア 1.2.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation A2 ファームウェア 1.3.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 2 ファームウェア 1.4.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioLite N2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry P2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry R2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass 2 ファームウェア 1.0.0 以上"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass D2 ファームウェア 1.0.0 以上"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.userDevice.useridType.alphanumeric",
          product: "2"
        }), " から ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.userDevice.useridType.numeric",
          product: "2"
        }), " へ変更する場合、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " に登録されているすべてのユーザー情報を削除する必要があります。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enrollment-device",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.enrollment_device.title",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指紋や顔、カードを登録する際によく使用するデバイスを ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.enrollment_device.title",
        product: "2"
      }), " オプションに追加し、便利に利用できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスを追加するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.enrollment_device.configure.title",
            product: "2"
          }), " ウィンドウが表示されたら、一覧で目的のデバイスのチェックボックスをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-management-enroll-device.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["選択したデバイスを追加するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["追加したデバイス設定を保存するには、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "登録デバイスが多く一覧から見つけにくい場合は、検索入力フィールドにキーワードを入力してデバイスを検索します。 デバイスID、デバイス名、デバイスグループ、IPアドレスを入力できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ユーザー情報を登録する際の指紋または顔、カードクレデンシャル登録の詳細は次のドキュメントを参照してください。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-fingerprint"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-face"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-card"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
                docId: "platform/biostar_x/enroll-credential-mobile"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-field",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.custom_field.title",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.custom_field.title",
        product: "2"
      }), " オプションでは、ユーザーの付加情報を入力するフィールドを追加できます。 追加したフィールドはユーザー情報画面に表示されます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["カスタムユーザーフィールドを追加するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "カスタムユーザーフィールドの名前を入力し、タイプで希望の項目を選択します。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-management-custome-field.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.numericbox",
                product: "2"
              }), "：0 から 4294962795 まで入力でき、文字は入力できません。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.textbox",
                product: "2"
              }), "：最大32文字の数字および文字を入力できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.combobox",
                product: "2"
              }), "：最大20個のサブ項目を32文字で追加でき、各項目はセミコロン（;）で区切ります。 (例：選択1;選択2;選択3)"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/biostarx-settings-server-management-custome-field-select.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.custom_field.type.fileupload",
                product: "2"
              }), "：ファイルアップロード用のフィールドを追加できます。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "最大ファイルサイズは1MBです。"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "ファイル名は最小1文字から最大120文字まで可能です。"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["ファイル名の制約：ファイル名には英数字、アンダースコア(", (0,jsx_runtime.jsx)(_components.code, {
                      children: "_"
                    }), ")、ハイフン(", (0,jsx_runtime.jsx)(_components.code, {
                      children: "-"
                    }), ")を使用し、拡張子の区切りにはドット(", (0,jsx_runtime.jsx)(_components.code, {
                      children: "."
                    }), ")を使用します。"]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["追加したカスタムユーザーフィールドを保存するには、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["カスタムユーザーフィールドの順序を変更するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.order",
              product: "2"
            }), " 列の数字を変更します。 該当フィールドの位置が変更されます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["カスタムユーザーフィールドを修正した後、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " ボタンをクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["カスタムユーザーフィールドを削除するには、", (0,jsx_runtime.jsx)(IcTrash2, {}), " ボタンをクリックします。 削除したフィールドは復元できません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザー情報の登録および修正の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "how-to-guide-user",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["カスタムユーザーフィールドを追加したユーザー情報をカードに印刷できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-card-printer#adding-custom-user-fields",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aoc-card-setting",
      children: "AoCカード設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザーのクレデンシャルをカードに保存する", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../reference/glossary#access_on_card",
        children: "AoC（Access on Card）"
      }), "を発行する際に、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " サーバーから個人情報とクレデンシャル情報を削除するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.deleteCredentialAfterAOC",
        product: "2"
      }), " オプションを有効にします。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NFCモバイルカード"
          }), "をサポートするデバイスとファームウェアバージョンを表示"]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "モバイルデバイス OS：Android 5.0 Lollipop 以上、Android 10 以下"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar X Mobile 1.0.0 以上"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation 2：BS2-OMPW、BS2-OIPW ファームウェア 1.4 以上、1.8 以下"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation A2：BSA2-OMPW、BSA2-OIPW ファームウェア 1.3 以上、1.7.1 以下"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStation L2：BSL2-OM ファームウェア 1.2 以上"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry W2：BEW2-OAP、BEW2-ODP ファームウェア 1.1 以上、1.5 以下"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStation 2：FS2-D、FS2-AWB ファームウェア 1.3.1 以下"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioLite N2：BLN2-ODB、BLN2-OAB、BLN2-PAB ファームウェア 1.2 以下"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass D2：XPD2-MDB、XPD2-GDB、XPD2-GKDB ファームウェア 1.3 以下"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceLite：FL-DB ファームウェア 1.1 以下"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 2：XP2-MDPB、XP2-GDPB、XP2-GKDPB、XP2-MAPB ファームウェア 1.0 以上"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry P2：BEP2-OD、BEP2-OA ファームウェア 1.0 以上"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioEntry R2：BER2-OD ファームウェア 1.1.0 以上"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsxs)("summary", {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BLEモバイルカード"
          }), "をサポートするデバイスとファームウェアバージョンを表示"]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "モバイルデバイス OS：Android 5.0 Lollipop 以上、Android 10 以下 / iOS 9.0 以上"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar X Mobile 1.0.0 以上"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceStation 2：FS2-AWB ファームウェア 1.3.1 以下"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioLite N2：BLN2-ODB、BLN2-OAB、BLN2-PAB ファームウェア 1.2 以下"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass D2：XPD2-MDB、XPD2-GDB、XPD2-GKDB ファームウェア 1.3 以下"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "FaceLite：FL-DB ファームウェア 1.1 以下"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XPass 2：XP2-MDPB、XP2-GDPB、XP2-GKDPB、XP2-MAPB ファームウェア 1.0 以上"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.mobileCredentialCard",
            product: "2"
          }), "と", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.mobileCredential",
            product: "2"
          }), "は同時に使用できません。"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "other-settings",
      children: "その他"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.eventLogRetainDays",
            product: "2"
          }), "：出入管理イベントログを保存する期間を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.hideCredentialFaces",
            product: "2"
          }), "：ユーザーのプライバシーを保護するため、顔クレデンシャルを登録する際にプレビュー画像を非表示にできます。 このオプションを有効にすると、ユーザーの顔クレデンシャルを登録する際にプレビュー画面が表示されません。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "servermatching",
      children: "サーバーマッチングを設定する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.serverMatching",
        product: "2"
      }), " セクションでは、ユーザー情報をデバイスで認証せず ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " で認証できる", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../reference/glossary#server_matching",
        children: "サーバーマッチング"
      }), "機能を設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-server-matching.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.serverMatching.use",
            product: "2"
          }), "：サーバーマッチングの使用可否を設定できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.server.serverMatching.matchingConcurrencyCount",
            product: "2"
          }), "：同時にマッチングできる最大サーバーマッチング数を設定できます。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["このオプションは、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " をインストールしているサーバー PC の CPU 性能によって異なる場合があります。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.fingerPrint",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.serverMatching.fastMode",
                product: "2"
              }), "：指紋マッチング速度を調整できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.server.serverMatching.securityLevel",
                product: "2"
              }), "：指紋に対するサーバーマッチングのセキュリティレベルを設定できます。 セキュリティレベルが高いほど本人拒否率（FRR）が増加します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.face",
          product: "2"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.serverMatching.securityLevel",
              product: "2"
            }), "：IRフェイスに対するサーバーマッチングのセキュリティレベルを設定できます。 セキュリティレベルが高いほど本人拒否率（FRR）が増加します。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "common.serverMatching",
          product: "2"
        }), " は ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "アドバンス"
        }), "(Advanced) 以上のライセンスで機能追加オプション(Feature Add-ons)を有効にした場合に使用できます。 ライセンスポリシーの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing",
          children: "以下"
        }), " を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "systemloglevel",
      children: "システムログレベルの設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevelManagement",
        product: "2"
      }), " セクションでは、データベースに保存されるシステムログのレベルを設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-server-system-log-level.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["システムログはあらかじめ定義されたカテゴリーで管理され、ログレベルは ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.trace",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.debug",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.info",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.warning",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.error",
        product: "2"
      }), "に分類されます。 上位レベルには下位レベルのログがすべて含まれます。 例えば、システムログレベルを ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.trace",
        product: "2"
      }), " に選択すると、下位レベルである ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.debug",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.info",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.warning",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logLevel.error",
        product: "2"
      }), " のログもすべて含めて保存されます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "storevisualfaceimage",
      children: "顔画像の保存"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "顔をクレデンシャルとして登録する際に、実際の画像とテンプレートの両方を保存するか、実際の画像は保存せずテンプレートのみ保存するかを設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用前に"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.expertSettings.enableOptionLabel",
          product: "2"
        }), " オプションを有効にする前に、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.server",
          product: "2"
        }), " メニューで行った変更がある場合は、先に変更内容を保存する必要があります。 画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " ボタンをクリックします。"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.title",
            product: "2"
          }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.enableOptionLabel",
            product: "2"
          }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use",
            product: "2"
          }), " に設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-expert.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.enableButton",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.detail.title",
            product: "2"
          }), " 画面に進み、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.detail.storeVisualFaceImageOptionLabel",
            product: "2"
          }), " オプションを設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-server-expert2.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.use",
                product: "2"
              }), "：既定値です。 顔クレデンシャルの実際の画像とテンプレートを両方保存します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.notUse",
                product: "2"
              }), "：顔クレデンシャルの実際の画像は保存せず、テンプレートのみ保存します。 このオプションを選択したら表示される警告ポップアップをよく読み、設定してください。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " をクリックして設定を保存します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.expertSettings.detail.storeVisualFaceImageOptionLabel",
            product: "2"
          }), " オプションを無効にする際の注意事項"]
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "この機能を無効にすると、保存されている顔画像はすべて削除され、今後登録される顔画像も画像を除いたテンプレートのみ保存されます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["登録済みの顔画像が2種類のテンプレートを持っていない場合、この機能を無効にできません。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.menu.faceMigration"
            }), " 機能の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "migration-face",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["この機能を無効にした後、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "menu.dataImport",
              product: "2"
            }), " で無効な顔画像テンプレートが含まれている場合、データファイルをインポートできません。 問題を解決するには、この機能を一時的に有効にしてからデータファイルをインポートしてください。"]
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