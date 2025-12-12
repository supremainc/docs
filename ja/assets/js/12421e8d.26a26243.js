"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["71823"], {
57318: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_facestation_f_2_authentication_mdx_124_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-facestation-f-2-authentication-mdx-124.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_facestation_f_2_authentication_mdx_124_namespaceObject = JSON.parse('{"id":"device/facestation_f2/authentication","title":"認証","description":"サポートする認証方式と認証手順について説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/facestation_f2/authentication.mdx","sourceDirName":"device/facestation_f2","slug":"/device/facestation_f2/authentication","permalink":"/docs/ja/device/facestation_f2/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_f2/authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"authentication","title":"認証","description":"サポートする認証方式と認証手順について説明します。","keywords":["認証モード","認証オプション","PIN","顔","勤怠"],"isTranslationMissing":false},"sidebar":"facestationf2","previous":{"title":"ユーザー","permalink":"/docs/ja/device/facestation_f2/user"},"next":{"title":"設定","permalink":"/docs/ja/device/facestation_f2/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/facestation_f2/authentication.mdx


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
  "value": "サーバーマッチング",
  "id": "サーバーマッチング",
  "level": 2
}, {
  "value": "顔",
  "id": "face",
  "level": 2
}, {
  "value": "指紋 <Badge>FSF2-ODB</Badge>",
  "id": "fingerprint",
  "level": 2
}, {
  "value": "勤怠",
  "id": "勤怠",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, Cmd, Column, Columns, Image} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "サポートする認証方式と認証手順について説明します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "認証モード",
      children: "認証モード"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスの認証モードを設定できます。 顔、指紋、PIN、カード、ID を組み合わせて認証モードとして使用でき、各認証モードごとに利用するスケジュールを設定することもできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "指紋認証は FSF2-ODB 製品でのみ使用できます。"
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
          }), " → ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add2.svg",
            ico: true,
            alone: true
          }), " を押します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add1.svg",
            ico: true,
            alone: true
          }), " を選択した後、実行する認証方法を選択します。 認証方法を追加で設定する場合は、同じ手順で選択してから組み合わせます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_203",
            product: "dev"
          }), " を設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["選択した認証方法を順番にすべて認証するように組み合わせることも、一部のみを選択して認証するように組み合わせることもできます。 例えば、", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-card.png",
                  ico: true,
                  alone: true
                }), " + ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-face-bs3.png",
                  ico: true,
                  alone: true
                }), " + ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-pin-bs3.png",
                  ico: true,
                  alone: true
                }), " の組み合わせでは、カード・顔・PIN のすべてで認証する必要があります。", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-card.png",
                  ico: true,
                  alone: true
                }), " + ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-face-bs3.png",
                  ico: true,
                  alone: true
                }), " / ", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/common/ico-authmode-pin-bs3.png",
                  ico: true,
                  alone: true
                }), " の組み合わせでは、カードで認証した後に顔または PIN を入力する必要があります。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_203",
                  product: "dev"
                }), " は BioStar X で設定できます。 設定済みのスケジュールがない場合は、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_163",
                  product: "dev"
                }), " と ", (0,jsx_runtime.jsx)(Cmd, {
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
          children: ["選択した項目を削除するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), " を押してから ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " を押します。 前の画面に戻るには ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_321",
            product: "dev"
          }), " を押してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "サーバーマッチング",
      children: "サーバーマッチング"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "サーバーマッチングを設定できます。 サーバーマッチングを使用すると、デバイスではなく BioStar X でユーザー認証を実行します。 サーバーマッチングは、デバイスにユーザー情報が多すぎる場合や、デバイスを出入口の外側に設置する場合に便利です。"
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
          }), " を押してから ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_185",
            product: "dev"
          }), " を有効にします。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Badge, {
                only: true,
                children: "FSF2-ODB"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_186",
                product: "dev"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Badge, {
                only: true,
                children: "FSF2-DB, FSF2-AB"
              }), "：", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_187",
                product: "dev"
              })]
            }), "\n"]
          }), "\n"]
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
            }), " では、指紋・カード・ID だけを使用できます。"]
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
      id: "face",
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
          src: "/img/device/fsf2-auth.png",
          width: 300
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_308",
                product: "dev"
              }), "：デバイスの照明の明るさを手動で調整できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_152",
                product: "dev"
              }), " または ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_107",
                product: "dev"
              }), " で明るさを設定するか、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_162",
                product: "dev"
              }), " を選択して照明をオフにできます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_070",
                product: "dev"
              }), "：マスク検出、サーマルカメラ機能など、顔認証に関する高度な設定を変更できます。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_368",
                    product: "dev"
                  }), "：用途に応じて確認モードを設定できます。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_264",
                    product: "dev"
                  }), "：マスク未着用または基準温度超過による認証失敗時の通知有無を設定できます。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_123",
                    product: "dev"
                  }), "：マスク検出の使用有無を設定できます。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        sid: "ui_165",
                        product: "dev"
                      }), "：マスクを着用していないユーザーは認証が拒否され、マスク未着用イベントがログに記録されます。"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(Cmd, {
                        sid: "ui_164",
                        product: "dev"
                      }), "：マスクを着用していないユーザーも認証可能ですが、マスク未着用イベントがログに記録されます。"]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_236",
                product: "dev"
              }), "：サーマルカメラの使用可否を設定できます。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_165",
                    product: "dev"
                  }), "：基準温度範囲を超えたユーザーは認証が拒否され、基準温度超過イベントがログに記録されます。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "ui_164",
                    product: "dev"
                  }), "：基準温度範囲を超えたユーザーも認証可能ですが、温度超過イベントがログに記録されます。"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_123",
              product: "dev"
            }), " または ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_236",
              product: "dev"
            }), "を使用する場合、装置の用途に応じて ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_368",
              product: "dev"
            }), " を設定できます。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_267",
                  product: "dev"
                }), "：認証を実行した後、ユーザーのマスク着用有無を確認または温度を測定します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_369",
                  product: "dev"
                }), "：ユーザーのマスク着用有無を確認または温度を測定した後に認証を行います。 このモードを使用すると、マスクを着用していない、または基準温度を超えたユーザーは認証できません。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_370",
                  product: "dev"
                }), "：装置をマスク着用有無の確認または温度測定専用として使用できます。 このモードを使用すると、認証に関係なく、マスクを着用しているか基準温度以下のユーザーはすべて入場できます。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_236",
              product: "dev"
            }), "を", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_161",
              product: "dev"
            }), "に設定すると、サーマルカメラの高度な設定オプションが有効になります。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_196",
                  product: "dev"
                }), "：温度表示単位を設定できます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_099",
                  product: "dev"
                }), "：入場を制限する最低基準温度を設定できます。 表面温度が", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_099",
                  product: "dev"
                }), "より低いユーザーは認証が拒否されます。 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_099",
                  product: "dev"
                }), "は1℃～45℃の範囲で設定でき、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_106",
                  product: "dev"
                }), "より高く設定することはできません。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_106",
                  product: "dev"
                }), "：入室を制限するための最高基準温度を設定します。 表面温度が", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_106",
                  product: "dev"
                }), "より高いユーザーは認証が拒否されます。 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_106",
                  product: "dev"
                }), "は1℃～45℃の範囲で設定でき、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_099",
                  product: "dev"
                }), "より低く設定することはできません。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_240",
                  product: "dev"
                }), "：ユーザーの温度ログを保存するかどうかを設定します。 このオプションを有効にすると、認証の成否とユーザーの温度値の両方がログに保存され、無効にすると認証の成否のみがログに保存されます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_235",
                  product: "dev"
                }), "：装置画面に赤外線映像を表示するかどうかを設定できます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_114",
                  product: "dev"
                }), "：装置がユーザーの温度を測定する関心領域（ROI）を自動検出するよう設定できます。 たとえば、周囲に他の照明が設置されている場合でも、このオプションを有効にすると、サーマルカメラは照明ではなくユーザーの温度を検知して測定します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_331",
                  product: "dev"
                }), "：正確な測定のためにカメラの詳細オプションを設定してください。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_236",
              product: "dev"
            }), "を", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_161",
              product: "dev"
            }), "に設定すると、設置環境に応じて正確に測定できるようサーマルカメラの詳細オプションを設定できます。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_243",
                  product: "dev"
                }), "：ユーザーとサーマルカメラの距離を設定します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_296",
                  product: "dev"
                }), "：赤外線放射率を設定します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_045",
                  product: "dev"
                }), "、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_046",
                  product: "dev"
                }), "、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_048",
                  product: "dev"
                }), "、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_047",
                  product: "dev"
                }), "：", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_114",
                  product: "dev"
                }), "を", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_162",
                  product: "dev"
                }), "に設定した場合、ROI（関心領域）を手動で設定できます。 ROI の位置とサイズを調整し、熱画像カメラが温度を測定する領域を手動で設定します。 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_045",
                  product: "dev"
                }), "は関心領域の左右位置を示し、この値を大きくすると領域は画面の右側へ移動します。 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_046",
                  product: "dev"
                }), "は関心領域の上下位置を示し、この値を大きくすると領域は上側へ移動します。 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_048",
                  product: "dev"
                }), "と", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_047",
                  product: "dev"
                }), "は関心領域のサイズを示し、両方の値を大きくすると温度を測定する領域が広がります。 たとえば、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_045",
                  product: "dev"
                }), "、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_046",
                  product: "dev"
                }), "、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_048",
                  product: "dev"
                }), "、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_047",
                  product: "dev"
                }), "の値をデフォルトからそれぞれ40、15、70、40に変更すると、関心領域は以下のように変更されます。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(Columns, {
            children: [(0,jsx_runtime.jsxs)(Column, {
              className: "text--center",
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/device/auth-roi1.png",
                width: 200,
                alone: true
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "ROIをデフォルト値に設定した場合"
              })]
            }), (0,jsx_runtime.jsxs)(Column, {
              className: "text--center",
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/device/auth-roi2.png",
                width: 200,
                alone: true
              }), (0,jsx_runtime.jsxs)(_components.p, {
                children: ["ROI X(%), ROI Y(%), ROI 幅(%), ROI 高さ(%)", (0,jsx_runtime.jsx)("br", {}), "値をそれぞれ 40、15、70、40 に変更した場合"]
              })]
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_241",
                  product: "dev"
                }), "：装置の使用環境と周囲温度を考慮し、サーマルカメラが自動で温度を補正するよう設定できます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_242",
                  product: "dev"
                }), "：製品の使用環境に合わせて、温度を一定値だけ高くまたは低く測定するよう補正できます。 たとえば、温度が常に0.1℃高く測定される環境では、温度補正値を-0.1に設定してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_017",
                  product: "dev"
                }), "：サーマルカメラが正常に接続されている場合、そのカメラのファームウェアバージョンが表示されます。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["最適な性能を得るために、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ui_331",
              product: "dev"
            }), "のサブオプションはデフォルト設定のまま使用することを推奨します。 各オプションのデフォルト値は次のとおりです。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_243",
                  product: "dev"
                }), "：100"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_296",
                  product: "dev"
                }), "：0.98"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_045",
                  product: "dev"
                }), "：30"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_046",
                  product: "dev"
                }), "：25"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_048",
                  product: "dev"
                }), "：50"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "ui_047",
                  product: "dev"
                }), "：55"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ROI をデフォルト設定値として使用する場合、認証時に画面の ROI 領域に以下のような黄色いガイドが表示されます。 ユーザーがその領域に顔を合わせて認証すると、正確な温度を測定できます。 設定値を手動で変更するか、ダイナミック ROI を設定した場合、黄色いガイドは表示されません。"
          }), "\n", (0,jsx_runtime.jsxs)(Columns, {
            children: [(0,jsx_runtime.jsxs)(Column, {
              className: "text--center",
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/device/auth-static-roi.png",
                width: 200
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "ROIをデフォルト値に設定した場合"
              })]
            }), (0,jsx_runtime.jsxs)(Column, {
              className: "text--center",
              children: [(0,jsx_runtime.jsx)(Image, {
                src: "/img/device/auth-dynamic-roi.png",
                width: 200
              }), (0,jsx_runtime.jsx)(_components.p, {
                children: "ROI 設定値を変更するか、ダイナミック ROI を使用する場合"
              })]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "スレーブ装置ではマスク認証およびサーマルカメラ機能を使用できません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "サーマルカメラは TCM10-FSF2 をサポートしています。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "fingerprint",
      children: ["指紋 ", (0,jsx_runtime.jsx)(Badge, {
        only: true,
        children: "FSF2-ODB"
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
          src: "/img/device/auth-tna.png",
          width: 300
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
                src: "/img/common/ico-add2.svg",
                ico: true,
                alone: true
              }), " を選択し、画面に表示するアイコン、勤怠イベント名、スケジュールを設定してください。"]
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
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_259",
            product: "dev"
          }), " で目的の項目を設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/auth-result-display-option.png",
          width: 300
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