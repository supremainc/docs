"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["17296"], {
51061: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_biostation_3_max_authentication_mdx_bbe_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-biostation-3-max-authentication-mdx-bbe.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_biostation_3_max_authentication_mdx_bbe_namespaceObject = JSON.parse('{"id":"device/biostation_3_max/authentication","title":"認証","description":"サポートする認証方式と認証手順について説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/biostation_3_max/authentication.mdx","sourceDirName":"device/biostation_3_max","slug":"/device/biostation_3_max/authentication","permalink":"/docs/ja/device/biostation_3_max/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3_max/authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"authentication","title":"認証","description":"サポートする認証方式と認証手順について説明します。","keywords":["認証モード","認証オプション","PIN","顔","勤怠"],"isTranslationMissing":false},"sidebar":"biostation3max","previous":{"title":"ユーザー","permalink":"/docs/ja/device/biostation_3_max/user"},"next":{"title":"設定","permalink":"/docs/ja/device/biostation_3_max/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/biostation_3_max/authentication.mdx


const frontMatter = {
	id: 'authentication',
	title: '認証',
	description: 'サポートする認証方式と認証手順について説明します。',
	keywords: [
		'認証モード',
		'認証オプション',
		'PIN',
		'顔',
		'勤怠'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "認証モード",
  "id": "認証モード",
  "level": 2
}, {
  "value": "認証モードの登録",
  "id": "registering-auth-mode",
  "level": 3
}, {
  "value": "認証モードの編集",
  "id": "認証モードの編集",
  "level": 3
}, {
  "value": "認証モードの削除",
  "id": "認証モードの削除",
  "level": 3
}, {
  "value": "認証オプション",
  "id": "認証オプション",
  "level": 2
}, {
  "value": "サーバーマッチング",
  "id": "サーバーマッチング",
  "level": 3
}, {
  "value": "QR認証",
  "id": "qr認証",
  "level": 3
}, {
  "value": "PIN",
  "id": "pin",
  "level": 2
}, {
  "value": "認証結果表示オプション",
  "id": "認証結果表示オプション",
  "level": 2
}, {
  "value": "顔",
  "id": "顔",
  "level": 2
}, {
  "value": "指紋 <Badge>BS3M-ODB, BS3M-OAPB</Badge>",
  "id": "fingerprint",
  "level": 2
}, {
  "value": "勤怠",
  "id": "勤怠",
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
  }, {Badge, Cmd, Image} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "サポートする認証方式と認証手順について説明します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "認証モード",
      children: "認証モード"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスの認証モードを設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_228",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_312",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_040",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_323",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_020",
        product: "dev"
      }), " を組み合わせて認証モードとして使用でき、各認証モードごとに使用するスケジュールも設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "指紋認証は BS3M-ODB、BS3M-OAPB 製品でのみ使用できます。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registering-auth-mode",
      children: "認証モードの登録"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "を選択し、管理者権限の認証手段で認証します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), " を押します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add.svg",
            ico: true,
            alone: true
          }), "を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add1.svg",
            ico: true,
            alone: true
          }), "を押すと、追加できるクレデンシャルが画面に表示されます。 必要なクレデンシャルを追加します。 クレデンシャルが追加された状態で ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-cancel.svg",
            ico: true,
            alone: true
          }), " を押すと、追加したクレデンシャルを削除できます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-add-auth-mode.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-face-bs3m.png",
                ico: true,
                alone: true
              }), ": 顔, ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-fingerprint-bs3m.png",
                ico: true,
                alone: true
              }), ": 指紋, ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-qr-bs3m.png",
                ico: true,
                alone: true
              }), ": カード / QRコード, ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-id-bs3m.png",
                ico: true,
                alone: true
              }), ": ID, ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bs3m.png",
                ico: true,
                alone: true
              }), ": PIN"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["選択した認証方法を順番にすべて認証するように組み合わせることも、一部のみを選択して認証するように組み合わせることもできます。 例えば、", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-qr-bs3m.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-face-bs3m.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bs3m.png",
                ico: true,
                alone: true
              }), " を組み合わせる場合は、カード / QRコード、顔、PIN のすべてで認証する必要があります。", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-qr-bs3m.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-face-bs3m.png",
                ico: true,
                alone: true
              }), " / ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bs3m.png",
                ico: true,
                alone: true
              }), " を組み合わせる場合は、カード / QRコードで認証した後、顔または PIN を入力する必要があります。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["目的の認証モードを設定した後、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_203",
            product: "dev"
          }), " を設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_203",
                  product: "dev"
                }), " は BioStar X で設定できます。 設定したスケジュールがない場合は、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_361",
                  product: "dev"
                }), " だけを選択できます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_203",
                  product: "dev"
                }), " の設定について詳しくは、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../platform/biostar_x/settings-schedule",
                  children: "BioStar X 管理者マニュアル"
                }), " を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_042",
                  product: "dev"
                }), "認証を使用するには、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_256",
                  product: "dev"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_265",
                  product: "dev"
                }), "で", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_041",
                  product: "dev"
                }), "が有効になっている必要があり、別途デバイスライセンスが必要です。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings#license",
                  children: "ライセンス"
                }), "を参照してください。"]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), "を押します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "認証モードの編集",
      children: "認証モードの編集"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "を選択し、管理者権限の認証手段で認証します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), " を押します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "編集する認証モードを選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#registering-auth-mode",
            children: "認証モードの登録"
          }), " を参照して認証モードを修正した後、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), " を押します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "認証モードの削除",
      children: "認証モードの削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "を選択し、管理者権限の認証手段で認証します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), " を押します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-delete.svg",
            ico: true,
            alone: true
          }), "をクリックして削除する項目を選択します。 複数選択することもできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["選択した項目を削除するには ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), " を押します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "認証オプション",
      children: "認証オプション"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "サーバーマッチング",
      children: "サーバーマッチング"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "サーバーマッチングを設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "を選択し、管理者権限の認証手段で認証します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), "を押した後、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_265",
            product: "dev"
          }), "で", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_187",
            product: "dev"
          }), "を有効にします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-operation.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_187",
              product: "dev"
            }), "：サーバーマッチングを設定すると、デバイスでユーザー認証を行わず、BioStar Xでユーザー認証を実行します。 サーバーマッチングは、デバイスにユーザー情報が多すぎる場合や、ユーザークレデンシャル情報が保存されているデバイスを外部にさらしたくない場合に有用です。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_185",
                  product: "dev"
                }), " ではカードと ID のみ使用できます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_185",
                  product: "dev"
                }), " を使用する場合は、デバイスと BioStar X の両方でサーバーマッチングを有効にする必要があります。 BioStar X のサーバーマッチング設定の詳細については、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../platform/biostar_x/settings-server-server#servermatching",
                  children: "BioStar X 管理者マニュアル"
                }), " を参照してください。"]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qr認証",
      children: "QR認証"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "QRコード認証を設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "を選択し、管理者権限の認証手段で認証します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), "を選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_265",
            product: "dev"
          }), "で", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_041",
            product: "dev"
          }), "を有効にします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-operation.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_041",
                product: "dev"
              }), "：デバイスのカメラによるQRコード認証の使用可否を設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_329",
                product: "dev"
              }), "：付与したCSNカードまたはWiegandカードと同じデータを持つQRコードで認証できるように設定します。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_041",
                product: "dev"
              }), "が有効な場合にのみ設定できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_041",
              product: "dev"
            }), "を使用するには、別途デバイスライセンスが必要です。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings#license",
              children: "ライセンス"
            }), "を参照してください。"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pin",
      children: "PIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "パスワード入力時にスクランブルキーパッドを使用するかどうかを設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "を選択し、管理者権限の認証手段で認証します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), "を選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_040",
            product: "dev"
          }), "で", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_204",
            product: "dev"
          }), "の使用有無を設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-pin.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_204",
              product: "dev"
            }), "：パスワード入力時に数字キーの位置をランダム化して、パスワード流出を防止できます。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "認証結果表示オプション",
      children: "認証結果表示オプション"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "認証結果表示オプションを設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "を選択し、管理者権限の認証手段で認証します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), "を選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_259",
            product: "dev"
          }), "で必要な項目を変更します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-auth-result-display-option.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_169",
                product: "dev"
              }), "：デバイスの認証結果画面でユーザー ID の表示方法を選択できます。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_307",
                    product: "dev"
                  }), "：ユーザー ID をすべて表示します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_316",
                    product: "dev"
                  }), "：ユーザー ID の先頭文字のみ表示します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_357",
                    product: "dev"
                  }), "：ユーザー ID を表示しません。"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_177",
                product: "dev"
              }), "：デバイスの認証結果画面でユーザー名の表示方法を選択できます。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_307",
                    product: "dev"
                  }), "：ユーザー名をすべて表示します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_316",
                    product: "dev"
                  }), "：ユーザー名の先頭文字のみ表示します。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_357",
                    product: "dev"
                  }), "：ユーザー名を表示しません。"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "顔",
      children: "顔"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "顔認証に関する設定を変更できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "を選択し、管理者権限の認証手段で認証します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_228",
            product: "dev"
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "必要な項目を変更してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-face.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_140",
                product: "dev"
              }), "：デバイス周辺の動きを検知する感度を設定します。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_140",
                product: "dev"
              }), " を ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_091",
                product: "dev"
              }), " に設定した場合、顔認証を行うには画面をタッチしてから認証を進めてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_115",
                product: "dev"
              }), "：設定した時間内に顔を登録できないと、顔登録がキャンセルされます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_260",
                product: "dev"
              }), "：設定した時間内に認証を完了できないと、認証失敗となります。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_117",
                product: "dev"
              }), "：顔登録時に重複顔をチェックできます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_229",
                product: "dev"
              }), "：顔認証時にデバイスが顔を検出する領域の位置とサイズを設定できます。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
              type: "info",
              children: [(0,jsx_runtime.jsxs)(_components.p, {
                children: ["最適な性能を得るために、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_229",
                  product: "dev"
                }), " のサブオプションはデフォルト値のまま使用することを推奨します。 各オプションのデフォルト値は次のとおりです。"]
              }), (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "最大顔回転角度：15"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "顔認識距離：最小30 cm、最大100 cm"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "顔認識領域拡張：無効"
                  }), "\n"]
                }), "\n"]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_060",
                product: "dev"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_060",
                product: "dev"
              }), " を有効にすると、BioStar X で発行された ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_340",
                product: "dev"
              }), " を登録できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_340",
                product: "dev"
              }), " は、ユーザーのバイオメトリックテンプレートをモバイル端末に保存するモバイルアクセスカードであり、BioStar X サーバー、Airfob Portal、デバイスにユーザーデータを保存せずにバイオメトリック認証を行えます。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_340",
                  product: "dev"
                }), " の詳細については、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../platform/biostar_x/enroll-credential-mobile#template-on-mobile",
                  children: "BioStar X 管理者マニュアル"
                }), " を参照してください。"]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_157",
                product: "dev"
              }), "：ビジュアルフェイスに実際の画像とテンプレートの両方を保存するか、画像を保存せずテンプレートのみを保存するかを設定できます。 無効にすると、保存されているビジュアルフェイスの画像はすべて削除され、今後登録されるビジュアルフェイスも画像を除いたテンプレートのみ保存されます。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "この設定を無効にした後は、BioStar 2 v2.9.7 以上に接続して使用してください。"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_149",
                product: "dev"
              }), "：1", ":N", " 認証のセキュリティレベルを設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_278",
                product: "dev"
              }), "：顔認証時のデバイス動作モードを設定できます。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_359",
                    product: "dev"
                  }), "：ビジュアルと赤外線の両方でマッチングを行い、顔認証の精度を向上させます。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_159",
                    product: "dev"
                  }), "：ユーザーはデバイスの認証範囲内を歩きながらでも顔認証を行うなど、高速に認証を実施できます。"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_247",
                product: "dev"
              }), "：写真などの偽造顔を用いたユーザー認証を防止できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_278",
                product: "dev"
              }), "を", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_359",
                product: "dev"
              }), "に設定すると有効になります。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "偽造顔検出性能を向上させ、iBeta Level 1 ISO 30107-3 Presentation Attack Detection テストに合格しました。"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["日差しが強い環境では、", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_247",
                      product: "dev"
                    }), "機能を", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_152",
                      product: "dev"
                    }), "に設定することを推奨します。"]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_070",
                product: "dev"
              }), "：マスク検出など顔認証に関する高度な設定を変更できます。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_123",
                    product: "dev"
                  }), "：マスク検出の使用有無を設定できます。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_067",
                    product: "dev"
                  }), "：マスク着用の確認方法を設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_123",
                    product: "dev"
                  }), "を", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_161",
                    product: "dev"
                  }), "に設定すると有効になります。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
                  type: "info",
                  children: (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(Cmd, {
                          sid: "ui_127",
                          product: "dev"
                        }), "：マスク未着用のユーザーは認証が拒否され、マスク未着用イベントがログに記録されます。"]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(Cmd, {
                          sid: "ui_126",
                          product: "dev"
                        }), "：マスク未着用のユーザーも認証できますが、マスク未着用イベントがログに記録されます。"]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(Cmd, {
                          sid: "ui_125",
                          product: "dev"
                        }), "：マスク未着用のユーザーのみ認証でき、このモードを使用する場合、マスク確認モードは", (0,jsx_runtime.jsx)(Cmd, {
                          sid: "ui_369",
                          product: "dev"
                        }), "に固定されます。"]
                      }), "\n"]
                    }), "\n"]
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_124",
                    product: "dev"
                  }), "：マスク着用を検知する感度を設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_123",
                    product: "dev"
                  }), "を", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_161",
                    product: "dev"
                  }), "に設定すると有効になります。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_368",
                    product: "dev"
                  }), "：デバイスの用途に応じて確認モードを設定できます。"]
                }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
                  type: "info",
                  children: (0,jsx_runtime.jsxs)(_components.ul, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(Cmd, {
                          sid: "ui_267",
                          product: "dev"
                        }), "：認証を実行した後にユーザーのマスク着用を確認します。"]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(Cmd, {
                          sid: "ui_369",
                          product: "dev"
                        }), "：ユーザーのマスク着用を確認した後に認証を実行します。"]
                      }), "\n"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                        children: [(0,jsx_runtime.jsx)(Cmd, {
                          sid: "ui_370",
                          product: "dev"
                        }), "：デバイスをマスク着用確認専用として使用できます。 このモードを使用すると、認証に関係なくマスクを着用したユーザーはすべて入退室できます。"]
                      }), "\n"]
                    }), "\n"]
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "fingerprint",
      children: ["指紋 ", (0,jsx_runtime.jsx)(Badge, {
        only: true,
        children: "BS3M-ODB, BS3M-OAPB"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指紋認証に関する設定を変更できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "を選択し、管理者権限の認証手段で認証します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_312",
            product: "dev"
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "必要な項目を変更してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/auth-fingerprint.png",
          width: 300
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_149",
                product: "dev"
              }), "：1", ":N", " 認証のセキュリティレベルを設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_130",
                product: "dev"
              }), "：指紋マッチング時の待機時間を設定できます。 設定した時間内に認証が完了しない場合、認証は失敗します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_254",
                product: "dev"
              }), "：指紋をスキャンしたときに元画像を表示できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_197",
                product: "dev"
              }), "：指紋センサーの感度を設定できます。 より精密な指紋情報を取得するには、センサー感度を高く設定してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_003",
                product: "dev"
              }), "：指紋認証速度を設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_275",
                product: "dev"
              }), " を選択すると、端末に登録されている指紋テンプレートの総数に応じて認証パフォーマンスが設定されます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_342",
                product: "dev"
              }), "：指紋テンプレート形式を設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_057",
                product: "dev"
              }), "がデフォルトで設定されています。テンプレート形式を変更すると、以前に保存されたすべての指紋が使用できなくなるため、変更時は注意してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_198",
                product: "dev"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_277",
                product: "dev"
              }), " に設定すると、指紋センサーがユーザーの指を検知して起動します。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_362",
                product: "dev"
              }), " に設定すると、指紋をスキャンしていないときでも常にセンサーがオンになります。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_249",
                product: "dev"
              }), "：偽造指紋検出レベルを設定できます。 偽造指紋検出レベルを高く設定すると、実際の指紋に対する拒否率も高くなる場合があります。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_116",
                product: "dev"
              }), "：高品質な指紋情報を保存するために、スキャンした指紋の品質を検査できます。 有効にすると、指紋品質が低い場合にユーザーへ通知し、正しくスキャンできるよう支援します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_118",
                product: "dev"
              }), "：指紋登録時に重複指紋かどうかを検査できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "勤怠",
      children: "勤怠"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "勤怠モードの登録方法を設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), "を選択し、管理者権限の認証手段で認証します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_079",
            product: "dev"
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "必要な項目を設定してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-ta.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083_list",
                product: "dev"
              }), "：勤怠モードの使用方法を設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_086",
                product: "dev"
              }), "：勤怠イベントを登録できます。 勤怠イベントを登録するには、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_086",
                product: "dev"
              }), " → ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-add.svg",
                ico: true,
                alone: true
              }), "を選択し、画面に表示するアイコン、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_085",
                product: "dev"
              }), "、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_203",
                product: "dev"
              }), "を設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_082",
                product: "dev"
              }), "：ユーザーが認証する際に必ず勤怠イベントを選択するよう設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083_list",
                product: "dev"
              }), " を ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_199",
                product: "dev"
              }), " に設定したときに使用できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_081",
                product: "dev"
              }), "：管理者が選択した勤怠イベントのみ使用するよう設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083_list",
                product: "dev"
              }), " を ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_071",
                product: "dev"
              }), " に設定したときに使用できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_279",
                product: "dev"
              }), "：作業コードの使用有無を選択できます。"]
            }), "\n"]
          }), "\n"]
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