"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["14785"], {
41463: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_sip_intercom_for_biostaion_3_mdx_89d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-sip-intercom-for-biostaion-3-mdx-89d.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_sip_intercom_for_biostaion_3_mdx_89d_namespaceObject = JSON.parse('{"id":"platform/biostar_air/sip-intercom-for-biostation3","title":"BioStation 3 SIPインターホンの設定","description":"BioStation 3で双方向音声通話、DTMFコマンドによる遠隔ドア制御、およびBioStar AirのWebおよびモバイルアプリでの着信に対応するSIPインターホン機能の設定方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/sip-intercom-for-biostaion3.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/sip-intercom-for-biostation3","permalink":"/docs/ja/platform/biostar_air/sip-intercom-for-biostation3","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/sip-intercom-for-biostaion3.mdx","tags":[],"version":"current","frontMatter":{"id":"sip-intercom-for-biostation3","title":"BioStation 3 SIPインターホンの設定","description":"BioStation 3で双方向音声通話、DTMFコマンドによる遠隔ドア制御、およびBioStar AirのWebおよびモバイルアプリでの着信に対応するSIPインターホン機能の設定方法を説明します。","keywords":["SIP","インターホン","BioStation 3"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"ハードウェアのセットアップ","permalink":"/docs/ja/platform/biostar_air/hardware-setup"},"next":{"title":"IPカメラのサポートおよび設定","permalink":"/docs/ja/platform/biostar_air/ip-camera-support-and-configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/sip-intercom-for-biostaion3.mdx


const frontMatter = {
	id: 'sip-intercom-for-biostation3',
	title: 'BioStation 3 SIPインターホンの設定',
	description: 'BioStation 3で双方向音声通話、DTMFコマンドによる遠隔ドア制御、およびBioStar AirのWebおよびモバイルアプリでの着信に対応するSIPインターホン機能の設定方法を説明します。',
	keywords: [
		'SIP',
		'インターホン',
		'BioStation 3'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "SIP",
  "id": "sip",
  "level": 2
}, {
  "value": "着信",
  "id": "着信",
  "level": 2
}, {
  "value": "リモートドア制御",
  "id": "リモートドア制御",
  "level": 2
}, {
  "value": "構成手順",
  "id": "構成手順",
  "level": 2
}, {
  "value": "デバイス設定",
  "id": "デバイス設定",
  "level": 3
}, {
  "value": "アカウント設定",
  "id": "アカウント設定",
  "level": 3
}, {
  "value": "検証済みのSIPプロバイダー",
  "id": "検証済みのsipプロバイダー",
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
  }, {Cmd, Image, Step, Steps, TabItem, Tabs} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar Air v2.10"
      }), "以降、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStation 3"
      }), "(BS3)はSIPインターホン機能をサポートします。 これによりリーダーと管理者間の双方向音声通話だけでなく、リモートでドアを解錠できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "この機能を使用するにはSIPサーバーが必要で、別途購入および構成する必要があります。 SupremaはSIPサービスを提供していません。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sip",
      children: "SIP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "セッション開始プロトコル"
      }), "（Session Initiation Protocol, SIP）は、IPネットワーク上でリアルタイムの音声およびビデオ通話を開始、維持、終了するために広く使用される通信プロトコルです。 この場合、SIPはBioStation 3をインターホンエンドポイントとして動作させ、対応するSIPサービスを通じて発信・着信できるようにします。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "着信",
      children: "着信"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStation 3で受信した通話は、以下の方法で受信できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Web"
          }), "：ウェブブラウザで直接通話を受ける"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Mobile App"
          }), " (iOS / Android)：移動中でも通話を受ける"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "リモートドア制御",
      children: "リモートドア制御"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SIP通話中に、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DTMFコマンド"
      }), "を使用してドアを開けます："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "物理的なSIP電話"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Air モバイルアプリ"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Air Webインターフェース"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "構成手順",
      children: "構成手順"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイス設定および管理者アカウント設定から構成できます。"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "デバイス設定",
          children: "デバイス設定"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "https://admin.biostarair.com",
                children: "BioStar Air ポータル"
              }), "にログインします。"]
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
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["デバイス一覧で ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStation 3"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_intercom_title",
                product: "air"
              }), " セクションに移動し、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_intercom_txt_use_intercom",
                product: "air"
              }), " オプションを有効にします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "SIPサーバー情報を入力します。"
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-intercom-configuration-edit-device.png",
              className: "none",
              caption: true
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_intercom_txt_sip_server_address",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "device_intercom_txt_sip_server_port",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "device_intercom_txt_sip_username",
                    product: "air"
                  }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "login_password",
                    product: "air"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["変更を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "アカウント設定",
          children: "アカウント設定"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStation 3の通話をブラウザやアプリにルーティングできます。"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通話を受ける各管理者はBioStar Airポータルまたはモバイルアプリにログインします。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "アカウント設定"
              }), "に移動します。"]
            }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
              groupId: "platform",
              children: [(0,jsx_runtime.jsxs)(TabItem, {
                value: "web",
                label: "Web",
                children: [(0,jsx_runtime.jsxs)(_components.p, {
                  children: ["画面右上のユーザープロフィールアイコンをクリックした後、", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "settings_menu",
                    product: "air"
                  }), "を選択してください。"]
                }), (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-device-bs3-sip-account-settings.png"
                })]
              }), (0,jsx_runtime.jsxs)(TabItem, {
                value: "mobile",
                label: "Mobile",
                children: [(0,jsx_runtime.jsxs)(_components.p, {
                  children: ["初期画面の下部にある ", (0,jsx_runtime.jsx)(Cmd, {
                    children: "すべてのメニュー"
                  }), " をタップし、その後ユーザープロフィール領域をタップしてください。"]
                }), (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-app-bs3-sip-account-settings.png",
                  width: "38%",
                  className: "none"
                })]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings_menu",
                product: "air"
              }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_intercom_title",
                product: "air"
              }), " タブをクリックしてSIPサーバーのログイン情報を追加します。"]
            }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
              groupId: "platform",
              children: [(0,jsx_runtime.jsx)(TabItem, {
                value: "web",
                label: "Web",
                children: (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-device-bs3-sip-account-settings-intercom.png",
                  width: "60%"
                })
              }), (0,jsx_runtime.jsx)(TabItem, {
                value: "mobile",
                label: "Mobile",
                children: (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-device-bs3-sip-account-settings-intercom-mobile.png"
                })
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "検証済みのsipプロバイダー",
      children: "検証済みのSIPプロバイダー"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStation 3は以下のプロバイダーで正常に動作することを確認済みです。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.ringcentral.com/",
            children: "RingCentral"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.freepbx.org/",
            children: "FreePBX"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.linphone.org/",
            children: "Linphone"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.linhome.org/",
            children: "Linhome"
          })
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