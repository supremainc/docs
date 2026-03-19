"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["90051"], {
9708: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_biometric_readers_and_credentials_mdx_cab_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-biometric-readers-and-credentials-mdx-cab.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_biometric_readers_and_credentials_mdx_cab_namespaceObject = JSON.parse('{"id":"platform/biostar_air/biometric-readers-and-credentials","title":"バイオメトリクスリーダーとクレデンシャル","description":"BioStar Airでのバイオメトリクスリーダーの登録と設定方法、顔認証クレデンシャルの登録方法、BioStation 3およびBioEntry W3での単一または二要素認証の設定方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/biometric-readers-and-credentials.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/biometric-readers-and-credentials","permalink":"/docs/ja/platform/biostar_air/biometric-readers-and-credentials","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/biometric-readers-and-credentials.mdx","tags":[],"version":"current","frontMatter":{"id":"biometric-readers-and-credentials","title":"バイオメトリクスリーダーとクレデンシャル","description":"BioStar Airでのバイオメトリクスリーダーの登録と設定方法、顔認証クレデンシャルの登録方法、BioStation 3およびBioEntry W3での単一または二要素認証の設定方法を説明します。","keywords":["バイオメトリクスリーダー","クレデンシャル","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"ファームウェアをアップグレードする","permalink":"/docs/ja/platform/biostar_air/how-to-upgrade-firmware"},"next":{"title":"ドア","permalink":"/docs/ja/platform/biostar_air/manage-door"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/biometric-readers-and-credentials.mdx


const frontMatter = {
	id: 'biometric-readers-and-credentials',
	title: 'バイオメトリクスリーダーとクレデンシャル',
	description: 'BioStar Airでのバイオメトリクスリーダーの登録と設定方法、顔認証クレデンシャルの登録方法、BioStation 3およびBioEntry W3での単一または二要素認証の設定方法を説明します。',
	keywords: [
		'バイオメトリクスリーダー',
		'クレデンシャル',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "開始する前に",
  "id": "開始する前に",
  "level": 2
}, {
  "value": "ステップバイステップの手順",
  "id": "step-by-step-instructions",
  "level": 2
}, {
  "value": "バイオメトリクスリーダーの登録",
  "id": "registerBiometricReader",
  "level": 3
}, {
  "value": "デバイス設定",
  "id": "configureDevice",
  "level": 3
}, {
  "value": "ユーザーの顔登録",
  "id": "add-or-edit-user-and-enroll-face",
  "level": 3
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
  }, {Cmd, DocLink, IcAdd, IcAirEdit, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airはバイオメトリクスリーダーとバイオメトリッククレデンシャルをサポートし、安全な入退室管理を提供します。 BioStation 3（以下BS3）およびBioEntry W3（以下W3）などの互換性のあるバイオメトリクスリーダーを登録して設定し、顔認証でユーザーを認証できます。 この機能は単一認証および二要素認証の両方をサポートし、柔軟性とセキュリティを向上させます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "デバイスの登録"
          }), "：BioStar Airモバイルアプリを使用してバイオメトリクスリーダーを登録できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "デバイスの設定"
          }), "： ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "BioStar Airポータル"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " に移動し、デバイスの顔認証設定を構成します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ユーザー顔クレデンシャルの設定"
          }), "： ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "BioStar Airポータル"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " に移動し、ユーザーを追加するかユーザー情報を編集します。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "credential_detail",
            product: "air"
          }), " セクションで顔クレデンシャルを有効にしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "開始する前に",
      children: "開始する前に"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "バイオメトリクスリーダーが正常に動作するには、BioStar Air互換のファームウェアがインストールされている必要があります。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "顔テンプレートはユーザーごとに最大2つまで使用できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "高度な構成については、BioEntry W3またはBioStation 3のユーザーガイドを参照してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "二要素認証を使用するには、クレデンシャルを2つ以上登録する必要があります。 例えば、RFカードと顔クレデンシャルの両方を登録する必要があります。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-by-step-instructions",
      children: "ステップバイステップの手順"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "registerBiometricReader",
          children: "バイオメトリクスリーダーの登録"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioEntry W3またはBioStation 3にBioStar Air互換のファームウェアがインストールされていることを確認してください。 モデル名が ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-AIR"
          }), " で終わるデバイスには、Supremaが提供する標準ファームウェアが既にインストールされています。"]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイルデバイスでBioStar Airアプリを起動し、管理者IDとパスワードでログインしてください。 他のデバイスを登録するのと同じ方法でデバイスを登録してください。"
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["デバイス登録の詳細は、", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-device-with-app"
            }), "をご参照ください。"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "configureDevice",
          children: "デバイス設定"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "https://admin.biostarair.com",
                children: "BioStar Airポータル"
              }), "に管理者アカウントでログインしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "デバイス一覧でバイオメトリクスリーダーをクリックしてください。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_edit_title",
                product: "air"
              }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication",
                product: "air"
              }), " セクションに移動してください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-bs3-info-edit.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication_txt1",
                product: "air"
              }), " を設定してください。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "シングルファクター"
                  }), "：RFカードまたは顔のいずれかを使用して認証できます。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "二要素"
                  }), "：RFカードまたは顔認証のいずれかを削除し、RFカードと顔の両方を再登録することで二要素認証を構成できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "add_btn",
                    product: "air"
                  }), " ボタンをクリックし、希望する認証方式を組み合わせてください。"]
                }), "\n", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-device-two-fator-auth.png",
                  width: "30%"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication_auth_timeout",
                product: "air"
              }), " を設定してください。 設定した時間内にクレデンシャルを認証できないと、認証に失敗します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_face",
                product: "air"
              }), " セクションで次のオプションを設定してください。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_7_title",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_2_title",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_3_title",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_4_title",
                  product: "air"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "追加オプションを設定してください。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_7_text2",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_title",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_1_text",
                  product: "air"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_nav_title_authentication",
              product: "air"
            }), " セクションの設定の詳細は、", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/device-info-settings"
            }), "をご参照ください。"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "add-or-edit-user-and-enroll-face",
          children: "ユーザーの顔登録"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
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
              children: "新しいユーザーを追加するか既存のユーザーを編集するウィンドウを開いてください。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "新しいユーザーの追加"
                  }), "：ユーザーリスト右上の ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "add_user_btn",
                    product: "air"
                  }), " をクリック"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "既存ユーザーの編集"
                  }), ": ユーザー一覧でユーザーをクリックし、 ", (0,jsx_runtime.jsx)(IcAirEdit, {
                    title: "Edit"
                  }), " ボタンをクリック"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ユーザー情報ウィンドウで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "credential_detail",
                product: "air"
              }), " セクションに移動し、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "card_type_option5",
                product: "air"
              }), " クレデンシャルを有効にしてください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-info-credential-face.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcAdd, {}), " ボタンをクリックして顔テンプレートを追加してください。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-info-credential-face-add.png"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "select_file",
                    product: "air"
                  }), "：ローカルに保存された写真ファイルを選択"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "register_on_device",
                    product: "air"
                  }), "：接続されたバイオメトリクスリーダー（BioEntry W3またはBioStation 3）を使用"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "register_on_mobile",
                    product: "air"
                  }), "：ユーザーのモバイルデバイスに送信したQRコードをスキャンし、モバイルデバイスで顔を登録する"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "ユーザーごとに顔写真は2枚までアップロードできます。 通常は1枚の写真で十分です。"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["顔登録を完了するには ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " ボタンをクリックしてください。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザーの顔写真を一括でアップロードする方法の詳細は、", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/adding-users-in-bulk#uploadProfileImages"
            }), "をご参照ください。"]
          })
        })]
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