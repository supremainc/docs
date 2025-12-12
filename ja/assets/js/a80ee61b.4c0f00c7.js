"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["72542"], {
47786: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_facestation_2_authentication_mdx_a80_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-facestation-2-authentication-mdx-a80.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_facestation_2_authentication_mdx_a80_namespaceObject = JSON.parse('{"id":"device/facestation_2/authentication","title":"認証","description":"サポートする認証方式と認証手順について説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/facestation_2/authentication.mdx","sourceDirName":"device/facestation_2","slug":"/device/facestation_2/authentication","permalink":"/docs/ja/device/facestation_2/authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_2/authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"authentication","title":"認証","description":"サポートする認証方式と認証手順について説明します。","keywords":["認証モード","認証オプション","PIN","顔","勤怠"],"isTranslationMissing":false},"sidebar":"facestation2","previous":{"title":"ユーザー","permalink":"/docs/ja/device/facestation_2/user"},"next":{"title":"設定","permalink":"/docs/ja/device/facestation_2/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/facestation_2/authentication.mdx


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
  "value": "顔認証",
  "id": "顔認証",
  "level": 2
}, {
  "value": "勤怠モード",
  "id": "勤怠モード",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
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
        sid: "ui_228",
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
      }), " を組み合わせて認証モードとして利用でき、各認証モードごとに使用するスケジュールを設定することも可能です。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registering-auth-mode",
      children: "認証モードの登録"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "を押して、管理者権限の認証手段で認証してください。"]
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
            src: "/img/common/ico-add2.svg",
            ico: true,
            alone: true
          }), " を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-add3.svg",
            ico: true,
            alone: true
          }), " を押すと、追加可能なクレデンシャルが画面に表示されます。 必要なクレデンシャルを追加します。 クレデンシャルが追加された状態で ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-cancel1.svg",
            ico: true,
            alone: true
          }), " を押すと、追加したクレデンシャルを削除できます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/fs2-auth-mode.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["目的の認証モードを設定した後、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_203",
            product: "dev"
          }), " を設定します。"]
        }), "\n", (0,jsx_runtime.jsx)("div", {
          className: "overflow-x",
          children: (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "center"
                  },
                  children: "区分"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  children: "説明"
                })]
              })
            }), (0,jsx_runtime.jsxs)(_components.tbody, {
              children: [(0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "顔"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-fs2.png",
                    ico: true,
                    alone: true
                  }), "：顔だけを使用するモードです。", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-fs2.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs2a.png",
                    ico: true,
                    alone: true
                  }), "：顔で認証した後に PIN を入力するモードです。"]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "カード"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs2a.png",
                    ico: true,
                    alone: true
                  }), "：カードのみを使用するモードです。", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs2a.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-fs2.png",
                    ico: true,
                    alone: true
                  }), "：カードで認証した後に顔で認証するモードです。", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs2a.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs2a.png",
                    ico: true,
                    alone: true
                  }), "：カードで認証した後に PIN を入力するモードです。", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs2a.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-fs2.png",
                    ico: true,
                    alone: true
                  }), " / ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs2a.png",
                    ico: true,
                    alone: true
                  }), "：カードで認証した後に顔で認証するか、PIN を入力するモードです。", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-card-bs2a.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-fs2.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs2a.png",
                    ico: true,
                    alone: true
                  }), "：カードで認証した後に顔認証と PIN 入力を両方使用するモードです。"]
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "ID"
                }), (0,jsx_runtime.jsxs)(_components.td, {
                  children: ["- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id-bs2a.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-fs2.png",
                    ico: true,
                    alone: true
                  }), "：ID を入力した後に顔で認証するモードです。", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id-bs2a.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs2a.png",
                    ico: true,
                    alone: true
                  }), "：ID を入力した後に PIN を入力するモードです。", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id-bs2a.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-fs2.png",
                    ico: true,
                    alone: true
                  }), " / ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs2a.png",
                    ico: true,
                    alone: true
                  }), "：ID を入力した後に顔で認証するか、PIN を入力するモードです。", (0,jsx_runtime.jsx)("br", {}), "- ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-id-bs2a.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-face-fs2.png",
                    ico: true,
                    alone: true
                  }), " + ", (0,jsx_runtime.jsx)(Image, {
                    src: "/img/common/ico-authmode-pin-bs2a.png",
                    ico: true,
                    alone: true
                  }), "：ID を入力した後に顔認証と PIN 入力を両方使用するモードです。"]
                })]
              })]
            })]
          })
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
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "を押して、管理者権限の認証手段で認証してください。"]
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
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "を押して、管理者権限の認証手段で認証してください。"]
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "を押して、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " を押してから ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_265",
            product: "dev"
          }), " で目的の項目を変更します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/fs2-auth-option.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_310",
                product: "dev"
              }), "：周囲の明るさを検出して IR LED の強度を調整します。 設置環境に応じて設定を変更します。"]
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
                sid: "ui_260",
                product: "dev"
              }), "：設定した時間内に認証を完了できないと、認証失敗となります。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_185",
                product: "dev"
              }), "：サーバーマッチングを設定すると、デバイスではユーザー認証を行わず、BioStar X でユーザー認証を実行します。 サーバーマッチングは、デバイスにユーザー情報が多すぎる場合や、ユーザークレデンシャル情報が保存されているデバイスを外部にさらしたくない場合に有用です。"]
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
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_232",
                product: "dev"
              }), "：顔を登録する際に顔の位置、角度、距離に対する感度を設定します。 高精度の顔テンプレートを取得するには高く設定します。"]
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
                sid: "ui_117",
                product: "dev"
              }), "：顔登録時に重複顔をチェックできます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "顔認証",
      children: "顔認証"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "顔認証に関する設定を変更できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "を押して、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " を押してから ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_231",
            product: "dev"
          }), " で目的の項目を変更します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/fs2-auth.png"
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
                sid: "ui_078",
                product: "dev"
              }), "：グループマッチングの使用有無を確認できます。 グループマッチングを使用すると、複数ユーザーの顔をグループ化して認証速度を向上できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_360",
                product: "dev"
              }), "：顔テンプレートを登録したデバイスのファームウェアが v1.0.1 以前の場合はこのオプションを有効にします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_248",
                product: "dev"
              }), "：写真などの偽造顔を使用したユーザー登録を防止できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_004",
                product: "dev"
              }), " から ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_006",
                product: "dev"
              }), " まで強度を設定でき、段階が上がるほど検査強度が強化されます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_158",
                product: "dev"
              }), "：高速顔登録の使用有無を設定できます。 高速顔登録を有効にすると登録手順は 1 段階になり、無効にすると 3 段階になります。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_078",
                      product: "dev"
                    }), " は BioStar X で設定できます。"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_248",
                      product: "dev"
                    }), " を高い段階に設定すると、実際の顔の登録が拒否される可能性があります。 登録に失敗した場合は再試行するか、検査強度を下げます。"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["高品質の顔テンプレートを登録するには ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_158",
                      product: "dev"
                    }), " を無効にします。"]
                  }), "\n"]
                }), "\n"]
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "勤怠モード",
      children: "勤怠モード"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "勤怠モードの登録方法を設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu2.svg",
            ico: true,
            alone: true
          }), "を押して、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_256",
            product: "dev"
          }), " を押してから ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_083_list",
            product: "dev"
          }), " で目的の項目を変更します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/fs2-auth1.png"
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
              }), "：勤怠イベントを登録できます。"]
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