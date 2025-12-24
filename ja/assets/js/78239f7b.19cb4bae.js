"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["18126"], {
231: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_biolite_n_2_authentication_mdx_782_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-biolite-n-2-authentication-mdx-782.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_biolite_n_2_authentication_mdx_782_namespaceObject = JSON.parse('{"id":"device/biolite_n2/authentication","title":"認証","description":"サポートする認証方式と認証手順について説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/biolite_n2/authentication.mdx","sourceDirName":"device/biolite_n2","slug":"/device/biolite_n2/authentication","permalink":"/docs/ja/device/biolite_n2/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biolite_n2/authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"authentication","title":"認証","description":"サポートする認証方式と認証手順について説明します。","keywords":["認証モード","認証オプション","PIN","勤怠"],"isTranslationMissing":false},"sidebar":"bioliten2","previous":{"title":"ユーザー","permalink":"/docs/ja/device/biolite_n2/user"},"next":{"title":"設定","permalink":"/docs/ja/device/biolite_n2/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/biolite_n2/authentication.mdx


const frontMatter = {
	id: 'authentication',
	title: '認証',
	description: 'サポートする認証方式と認証手順について説明します。',
	keywords: [
		'認証モード',
		'認証オプション',
		'PIN',
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
  "value": "指紋認証モード",
  "id": "指紋認証モード",
  "level": 3
}, {
  "value": "カード認証モード",
  "id": "カード認証モード",
  "level": 3
}, {
  "value": "ID 認証モード",
  "id": "id-認証モード",
  "level": 3
}, {
  "value": "勤怠モード",
  "id": "勤怠モード",
  "level": 2
}, {
  "value": "指紋設定",
  "id": "指紋設定",
  "level": 2
}, {
  "value": "サーバーマッチング",
  "id": "サーバーマッチング",
  "level": 2
}, {
  "value": "認証結果表示オプション",
  "id": "認証結果表示オプション",
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
  }, {Cmd, Image} = _components;
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
        sid: "ui_312",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_040",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_322",
        product: "dev"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "ui_020",
        product: "dev"
      }), " を組み合わせて認証モードとして使用でき、各認証モードごとに使用するスケジュールを設定することもできます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "指紋認証モード",
      children: "指紋認証モード"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指紋を使用する認証方法ごとにスケジュールを設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), "キーを押してから、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_313",
            product: "dev"
          }), " を選択して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " を押します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["希望の項目を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " を押してスケジュールを設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-auth-authmode.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), "：指紋のみを使用するモードです。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bln2.png",
                ico: true,
                alone: true
              }), "：指紋で認証した後、PIN を入力するモードです。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " を押してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), " は BioStar X で設定できます。 設定したスケジュールがない場合、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_162",
              product: "dev"
            }), " と ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_361",
              product: "dev"
            }), " だけ選択できます。"]
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
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "カード認証モード",
      children: "カード認証モード"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "カードを使用する認証方法ごとにスケジュールを設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), "キーを押してから、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_324",
            product: "dev"
          }), " を選択して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " を押します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["希望の項目を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " を押してスケジュールを設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-auth.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bln2.png",
                ico: true,
                alone: true
              }), "：カードのみを使用するモードです。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), "：カードで認証した後、指紋で認証するモードです。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bln2.png",
                ico: true,
                alone: true
              }), "：カードで認証した後、PIN を入力するモードです。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), " / ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bln2.png",
                ico: true,
                alone: true
              }), "：カードで認証した後、指紋で認証するか PIN を入力するモードです。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-card-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bln2.png",
                ico: true,
                alone: true
              }), "：カードで認証した後、指紋認証と PIN 入力の両方を使用するモードです。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " を押してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), " は BioStar X で設定できます。 設定したスケジュールがない場合、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_162",
              product: "dev"
            }), " と ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_361",
              product: "dev"
            }), " だけ選択できます。"]
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
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "id-認証モード",
      children: "ID 認証モード"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ID を使用する認証方法ごとにスケジュールを設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), "キーを押してから、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_261",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_021",
            product: "dev"
          }), " を選択して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " を押します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["希望の項目を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " を押してスケジュールを設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-auth1.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-id-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), "：ID を入力した後、指紋で認証するモードです。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-id-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bln2.png",
                ico: true,
                alone: true
              }), "：ID を入力した後、PIN を入力するモードです。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-id-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), " / ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bln2.png",
                ico: true,
                alone: true
              }), "：ID を入力した後、指紋で認証するか PIN を入力するモードです。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-id-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-finger-bln2.png",
                ico: true,
                alone: true
              }), " + ", (0,jsx_runtime.jsx)(Image, {
                src: "/img/common/ico-authmode-pin-bln2.png",
                ico: true,
                alone: true
              }), "：ID を入力した後、指紋認証と PIN 入力の両方を使用するモードです。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " を押してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_203",
              product: "dev"
            }), " は BioStar X で設定できます。 設定したスケジュールがない場合、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_162",
              product: "dev"
            }), " と ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_361",
              product: "dev"
            }), " だけ選択できます。"]
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
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "勤怠モード",
      children: "勤怠モード"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "勤怠モードの登録方法を設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), "キーを押してから、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_083_title",
            product: "dev"
          }), " を選択して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " を押します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["希望の項目を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " を押してスケジュールを設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-auth2.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_084",
                product: "dev"
              }), "：勤怠イベントを確認できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_083_list",
                product: "dev"
              }), "：勤怠モードの使用方法を設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_082",
                product: "dev"
              }), "：ユーザーが認証する際に必ず勤怠イベントを選択するよう設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_372",
                product: "dev"
              }), " に設定すると、認証時に勤怠イベントを必ず選択するよう設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_080",
                product: "dev"
              }), "：管理者が選択した勤怠イベントのみ使用するように設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " を押してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_279",
          product: "dev"
        }), " を ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_372",
          product: "dev"
        }), " に設定した場合、ユーザーの作業コードを変更できます。 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OK"
        }), " を長押しして認証すると、目的の作業コードを選択できます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "指紋設定",
      children: "指紋設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指紋認証に関する設定を変更できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), "キーを押してから、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_312",
            product: "dev"
          }), " を選択して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " を押します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["希望の項目を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " を押してスケジュールを設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-auth3.png"
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
                sid: "ui_249",
                product: "dev"
              }), "：偽造指紋検出レベルを設定できます。 偽造指紋検出レベルを高く設定すると、実際の指紋に対する拒否率も高くなる場合があります。"]
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
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "ユーザー指紋情報をすべて削除してからテンプレート形式を変更します。 ユーザー指紋情報が登録されている場合は、テンプレート形式を変更できません。"
              })
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " を押してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "サーバーマッチング",
      children: "サーバーマッチング"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "サーバーマッチングを設定できます。 サーバーマッチングを使用すると、端末でユーザー認証を行わず、BioStar X でユーザー認証を行います。 サーバーマッチングは、デバイスにユーザー情報が多すぎる場合や、ユーザークレデンシャル情報が保存されているデバイスを外部にさらしたくない場合に有用です。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), "キーを押してから、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_185",
            product: "dev"
          }), " を選択して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " を押します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-auth4.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " を押して設定を変更します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " を押してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_185",
              product: "dev"
            }), " は ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_312",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_322",
              product: "dev"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_020",
              product: "dev"
            }), " でのみ使用できます。"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "認証結果表示オプション",
      children: "認証結果表示オプション"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "認証結果表示オプションを設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), "キーを押してから、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " を選択して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " を押します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["希望の項目を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " を押して設定を変更します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-auth5.png"
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
                    sid: "ui_138",
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
                    sid: "ui_138",
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