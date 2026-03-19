"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["48514"], {
73455: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_opening_doors_with_mobile_credentials_mdx_81a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-opening-doors-with-mobile-credentials-mdx-81a.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_opening_doors_with_mobile_credentials_mdx_81a_namespaceObject = JSON.parse('{"id":"platform/biostar_air/opening-doors-with-mobile-credentials","title":"モバイル認証情報の使い方","description":"BluetoothまたはNFCを使用してSuprema Passモバイル認証情報でドアを開ける方法、アプリの動作モードの設定、およびさまざまな認証方法（タグ、長押し、QRコード）の使用方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/opening-doors-with-mobile-credentials.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/opening-doors-with-mobile-credentials","permalink":"/docs/ja/platform/biostar_air/opening-doors-with-mobile-credentials","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/opening-doors-with-mobile-credentials.mdx","tags":[],"version":"current","frontMatter":{"id":"opening-doors-with-mobile-credentials","title":"モバイル認証情報の使い方","description":"BluetoothまたはNFCを使用してSuprema Passモバイル認証情報でドアを開ける方法、アプリの動作モードの設定、およびさまざまな認証方法（タグ、長押し、QRコード）の使用方法を案内します。","keywords":["モバイル認証情報","Suprema Pass","出入口を開ける","Bluetooth","NFC"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"認証済みユーザー","permalink":"/docs/ja/platform/biostar_air/credential-users-guide"},"next":{"title":"高度な機能の設定","permalink":"/docs/ja/platform/biostar_air/suprema-pass-app-advanced-features"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/opening-doors-with-mobile-credentials.mdx


const frontMatter = {
	id: 'opening-doors-with-mobile-credentials',
	title: 'モバイル認証情報の使い方',
	description: 'BluetoothまたはNFCを使用してSuprema Passモバイル認証情報でドアを開ける方法、アプリの動作モードの設定、およびさまざまな認証方法（タグ、長押し、QRコード）の使用方法を案内します。',
	keywords: [
		'モバイル認証情報',
		'Suprema Pass',
		'出入口を開ける',
		'Bluetooth',
		'NFC'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "必須要件と準備",
  "id": "必須要件と準備",
  "level": 2
}, {
  "value": "接続方法の設定",
  "id": "setCoonection",
  "level": 2
}, {
  "value": "出入口を開ける",
  "id": "出入口を開ける",
  "level": 2
}, {
  "value": "モバイル機器をデバイスにかざす",
  "id": "モバイル機器をデバイスにかざす",
  "level": 3
}, {
  "value": "モバイルカードを長押し",
  "id": "モバイルカードを長押し",
  "level": 3
}, {
  "value": "QRコード認証",
  "id": "qrコード認証",
  "level": 3
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
  }, {Cmd, Column, Columns, DocLink, IcHamberg, IcSpqr, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcHamberg) _missingMdxReference("IcHamberg", true);
  if (!IcSpqr) _missingMdxReference("IcSpqr", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema Passアプリを使用すると、プラスチックのRFIDカードの代わりにモバイルクレデンシャルでドアを開けることができます。 モバイルデバイスをBluetoothまたはNFCでタグ付けするか、カードを長押しして、QRコードをスキャンしてドアを開けることができます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Suprema PassアプリはBioStar Airシステムのユーザーインターフェースとして機能し、主にモバイル認証情報用のデジタルウォレットとして使用されます。 ユーザーはアプリ内でモバイル入退室カードを発行・保存し、モバイル機器を使って安全な場所に出入りできます。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "必須要件と準備",
      children: "必須要件と準備"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "モバイル認証情報で出入り口を開くには、次の要件を満たす必要があります。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Suprema Passのモバイル認証情報に対応した入退室制御装置が設置されている必要があります。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーのモバイルデバイスにSuprema Passアプリがインストールされている必要があります。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://apps.apple.com/kr/app/suprema-pass/id6745057639",
                children: "iOS"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://play.google.com/store/apps/details?id=com.supremainc.supremapass",
                children: "Android"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイルデバイスでBluetoothまたはNFC通信が有効でなければなりません。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["2段階認証を有効にすると", (0,jsx_runtime.jsx)(Cmd, {
            children: "バックグラウンドモード"
          }), "は無効になります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "QR認証は管理者がBioStar Airポータルで有効にする必要があります。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ハンズフリー入退室機能を使用するには、その入退室方法がサイトでサポートされているか確認してください。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["モバイル機器のSuprema Passアプリでモバイル入退室カードにより認証を行うには、位置情報サービスが必要です。 ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/location-services-issues"
            }), "で関連するFAQを確認してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["モバイルカードが機器と認証されているがドアが開かない場合は、案内に従って問題を解決してください。 ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/troubleshooting-suprema-pass-app"
            }), "で関連するFAQを確認してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      className: "mt--50",
      children: [(0,jsx_runtime.jsx)(Column, {
        className: "width--20",
        children: (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-sp-app-menus.png"
        })
      }), (0,jsx_runtime.jsxs)(Column, {
        className: "padding--l20",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "setCoonection",
          children: "接続方法の設定"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Suprema Pass アプリで、ユーザーは2種類の動作モードから選択できます。 Suprema Passアプリの初期画面で、右上の", (0,jsx_runtime.jsx)(IcHamberg, {}), "アイコンをタップした後、", (0,jsx_runtime.jsx)(Cmd, {
            children: "Connection Method"
          }), "から希望のモードを選択してください。"]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Only while App is on Screen"
              }), ": アプリが画面に表示され、モバイルカードが見えているときのみ出入口を開けることができます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Background Mode"
              }), ": アプリがバックグラウンドで実行されている場合、端末がロックされていても出入口を開けることができます。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "モードに関係なく、ユーザーは常にモバイル機器をデバイスにかざして認証できます。"
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "出入口を開ける",
      children: "出入口を開ける"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema Passアプリを使用して、ユーザーはさまざまな方法で出入口を開けることができます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "モバイル機器をデバイスにかざす",
      children: "モバイル機器をデバイスにかざす"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "モバイル機器をBioStar Airと互換性のあるデバイスに近づけ、BluetoothまたはNFCで認証して出入口を開けることができます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Suprema Passアプリが実行中であることを確認してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル機器のBluetoothまたはNFCアンテナ部分をデバイスに近づけてください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイルクレデンシャルが認証されると出入口が開きます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザーは2つの通信モードから選択できます。 詳細については ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/suprema-pass-app-advanced-features"
            }), " を参照してください。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Bluetoothモード"
                }), ": モバイル機器がデバイスとワイヤレスで通信します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "NFCモード"
                }), ": Android端末でのみ使用でき、モバイル機器をデバイスにかざして認証できます。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "モバイル機器のBluetoothまたはNFCアンテナの位置はモデルによって異なる場合があります。 最適な接触ポイントはモバイル機器の仕様を参照してください。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "モバイルカードを長押し",
      children: "モバイルカードを長押し"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema Passアプリでモバイルカードを長押しすることで出入口を開けることができます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Suprema Passアプリの初期画面を表示してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Airと互換性のあるデバイスの近くで、モバイルカードを2-3秒間長押ししてください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイルクレデンシャルが認証されると出入口が開きます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["この機能を使用するには、", (0,jsx_runtime.jsx)(Cmd, {
              children: "接続方式"
            }), "設定で必ず", (0,jsx_runtime.jsx)(Cmd, {
              children: "Background Mode"
            }), "を選択してください。 詳細については ", (0,jsx_runtime.jsx)(DocLink, {
              inner: "#setCoonection"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["セキュリティ上の理由により、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "サイト管理者がこの機能を無効にする場合があります"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "有効範囲は"
            }), "モバイル機器のBluetooth強度によって異なります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "近隣の入退室制御リーダーが意図しない認証を引き起こす可能性があります。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qrコード認証",
      children: "QRコード認証"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["管理者がBioStar Airポータルで", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_qr_label",
        product: "air"
      }), "オプションを有効にしている場合、Suprema PassアプリでQRコードをQRリーダーにかざして出入口を開けることができます。 Suprema Passアプリのホーム画面で、モバイルカードの下にある", (0,jsx_runtime.jsx)(IcSpqr, {
        title: "QR Scan"
      }), "アイコンをタップしてください。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-contact-qrcode.png",
      width: "50%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "site_setting_qr_label",
              product: "air"
            }), "オプションの詳細は ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/site-additional-settings"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "QRコード認証はQRリーダーが設置された出入口でのみ使用できます。"
          }), "\n"]
        }), "\n"]
      })
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