"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["36283"], {
5621: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_integration_quickstart_mdx_c0b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-integration-quickstart-mdx-c0b.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_integration_quickstart_mdx_c0b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/integration-quickstart","title":"クイックスタート","description":"BioStar Airのデモ環境の構築、対応デバイスの登録、APIキーの発行方法についてご案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/integration-quickstart.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/integration-quickstart","permalink":"/docs/ja/platform/biostar_air/integration-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/integration-quickstart.mdx","tags":[],"version":"current","frontMatter":{"id":"integration-quickstart","title":"クイックスタート","description":"BioStar Airのデモ環境の構築、対応デバイスの登録、APIキーの発行方法についてご案内します。","keywords":["API 統合","クイックスタート","BioStar Air","デモ"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"開発者","permalink":"/docs/ja/platform/biostar_air/developer-guide"},"next":{"title":"API認証","permalink":"/docs/ja/platform/biostar_air/api-authentication"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/integration-quickstart.mdx


const frontMatter = {
	id: 'integration-quickstart',
	title: 'クイックスタート',
	description: 'BioStar Airのデモ環境の構築、対応デバイスの登録、APIキーの発行方法についてご案内します。',
	keywords: [
		'API 統合',
		'クイックスタート',
		'BioStar Air',
		'デモ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "事前要件",
  "id": "pre-requisites",
  "level": 2
}, {
  "value": "デモ環境とAPIキーの設定",
  "id": "demo-setup",
  "level": 2
}, {
  "value": "サインアップとログイン",
  "id": "サインアップとログイン",
  "level": 3
}, {
  "value": "デモアプリケーションの作成",
  "id": "デモアプリケーションの作成",
  "level": 3
}, {
  "value": "APIキーの発行",
  "id": "apiキーの発行",
  "level": 3
}, {
  "value": "デモポータルへのログイン",
  "id": "デモポータルへのログイン",
  "level": 3
}, {
  "value": "デバイスの登録",
  "id": "registerDevices",
  "level": 2
}, {
  "value": "デバイス管理",
  "id": "デバイス管理",
  "level": 2
}, {
  "value": "Demo vs Production",
  "id": "demo-vs-production",
  "level": 2
}, {
  "value": "サポートが必要ですか？",
  "id": "need-help",
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
  }, {IcAdd, Step, Steps} = _components;
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airのデモサイトを設定し、対応デバイスを接続・登録してクラウドAPI連携をテストする方法をご案内します。 BioStar 2で作業した経験があるなら、多くの概念が馴染み深く感じられるでしょう。 BioStar Airは完全なクラウドベースのシステムです。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pre-requisites",
      children: "事前要件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "開始する前に次の項目を確認する。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["工場出荷時に初期化されたファームウェアを搭載した", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air対応機器"
          }), "を用意する。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "XP2-AIR、XS2-AIR、BEW3-AIR、BS3-AIR、BLN2-AIR"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "機器は認定のSuprema販売代理店を通じて購入できる。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "機器はイーサネット経由でインターネットに接続されている必要がある。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ネットワークでアウトバウンドアクセスを許可する。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Port 443 (HTTPS)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Port 5671 (MQTT over TLS)"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "demo-setup",
      children: "デモ環境とAPIキーの設定"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "サインアップとログイン",
          children: "サインアップとログイン"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "https://developers.biostarair.com/login",
                children: "BioStar Air Developer"
              }), " に移動する。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["「", (0,jsx_runtime.jsx)(_components.strong, {
                children: "サインアップ"
              }), "」をクリックし、フォームを記入して承認を待つ。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "承認が完了したら、クレデンシャルを使ってログインする。"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "デモアプリケーションの作成",
          children: "デモアプリケーションの作成"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["「", (0,jsx_runtime.jsx)(_components.strong, {
                children: "API"
              }), "」→「", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Management"
              }), "」に移動する。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["「", (0,jsx_runtime.jsx)(_components.strong, {
                children: "+ Register"
              }), "」ボタンをクリックする。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["アプリケーションタイプを", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Demo"
              }), "に選択する。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["アプリケーション名を入力し、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Register"
              }), "ボタンをクリックする。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["デモサイトのログインクレデンシャル（メールとパスワード）を含むExcelファイルをダウンロードするには、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Download"
              }), "ボタンをクリックする。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "apiキーの発行",
          children: "APIキーの発行"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["「", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Application Management"
              }), "」で登録したアプリケーションをクリックする。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["「", (0,jsx_runtime.jsx)(_components.strong, {
                children: "API Management"
              }), "」までスクロールする。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["「", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Add"
              }), "」ボタンをクリックする。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "名前を入力して確認する。 生成されたキーを保存する。"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "デモポータルへのログイン",
          children: "デモポータルへのログイン"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "https://demo.airfobspace.com/login",
                children: "Demo Portal"
              }), " に移動する。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Excelファイルのメールとパスワードでログインする。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "先ほど生成したAPIキーを入力する。"
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registerDevices",
      children: "デバイスの登録"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "モバイル機器でBioStar Air Demo App（Android専用）を使用する。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["次のリンクをクリックしてモバイルアプリをダウンロードする。 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://moca-public-file-share.s3.ap-northeast-2.amazonaws.com/DeviceRegistration.zip",
            children: "DeviceRegistration.zip"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Excelファイルのクレデンシャルでログインする。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Android端末をリーダーの近く（BLEの範囲内）に持っていく。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["「", (0,jsx_runtime.jsx)(_components.strong, {
                children: "All Menu"
              }), "」→「", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Devices"
              }), "」で右上の", (0,jsx_runtime.jsx)(IcAdd, {}), "ボタンをタップする。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["デバイスを検索して", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Register"
              }), "ボタンをタップする。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "機器が音を出して再起動し、登録済みデバイス一覧に表示される。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "デバイスはモバイルアプリを通じてのみ登録できる。 ウェブポータルでは登録できない。 APIベースの登録には、パートナーに提供されない暗号化証明書が必要である。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイス管理",
      children: "デバイス管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デモアプリまたはデモウェブポータルでデバイスを管理できる。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air Demo App"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Demo Web Portal"
          }), ": ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://demo.airfobspace.com/login",
            children: "https://demo.airfobspace.com/login"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "demo-vs-production",
      children: "Demo vs Production"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Demo"
          }), "サイト（テスト用）は", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developers.biostarair.com/login",
            children: "開発者ポータル"
          }), "から作成される。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Production"
          }), "サイトは", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://partner.biostarair.com/",
            children: "パートナーポータル"
          }), "から作成され、サイトID、ユーザーのメールアドレスおよびパスワードが必要となる。 Productionサイトは承認された販売店またはSupremaの支店のみが作成できる。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ユーザーIDとアカウントIDは異なる。 混同しないこと。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "複数のサイトを管理する場合は、パスワードを安全に保管する。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "常に最新のBearerトークンを使用する。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ブラウザからコピーしたBearerトークンはPostmanで再利用できる。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "need-help",
      children: "サポートが必要ですか？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Supremaのテクニカルサポートポータルでチケットを作成する。 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://support.supremainc.com",
        children: "https://support.supremainc.com"
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