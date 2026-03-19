"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["23171"], {
9883: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_troubleshooting_suprema_pass_app_mdx_a4a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-troubleshooting-suprema-pass-app-mdx-a4a.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_troubleshooting_suprema_pass_app_mdx_a4a_namespaceObject = JSON.parse('{"id":"platform/biostar_air/troubleshooting-suprema-pass-app","title":"モバイルカードが動作しません","description":"Suprema Passアプリでのモバイルカード認証の問題、Bluetoothや位置情報の権限に関する問題、接続失敗の対処方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/troubleshooting-suprema-pass-app.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/troubleshooting-suprema-pass-app","permalink":"/docs/ja/platform/biostar_air/troubleshooting-suprema-pass-app","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/troubleshooting-suprema-pass-app.mdx","tags":[],"version":"current","frontMatter":{"id":"troubleshooting-suprema-pass-app","title":"モバイルカードが動作しません","description":"Suprema Passアプリでのモバイルカード認証の問題、Bluetoothや位置情報の権限に関する問題、接続失敗の対処方法を説明します。","keywords":["トラブルシューティング","モバイルカード","Airfob"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"一括ユーザー追加の問題","permalink":"/docs/ja/platform/biostar_air/troubleshooting-adding-users-in-bulk"},"next":{"title":"位置サービスを有効にする必要がありますか？","permalink":"/docs/ja/platform/biostar_air/location-services-issues"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/troubleshooting-suprema-pass-app.mdx


const frontMatter = {
	id: 'troubleshooting-suprema-pass-app',
	title: 'モバイルカードが動作しません',
	description: 'Suprema Passアプリでのモバイルカード認証の問題、Bluetoothや位置情報の権限に関する問題、接続失敗の対処方法を説明します。',
	keywords: [
		'トラブルシューティング',
		'モバイルカード',
		'Airfob'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "BioStar Air 管理者に問い合わせる",
  "id": "contactbsairAdmin",
  "level": 2
}, {
  "value": "モバイルカードが削除されましたか？",
  "id": "mobileCardDeleted",
  "level": 2
}, {
  "value": "ステップ別トラブルシューティング",
  "id": "troubleshootingSteps",
  "level": 2
}, {
  "value": "Suprema Passアプリでエラーメッセージが表示されましたか？",
  "id": "suprema-passアプリでエラーメッセージが表示されましたか",
  "level": 3
}, {
  "value": "モバイル端末のBluetoothはオンになっていますか？",
  "id": "モバイル端末のbluetoothはオンになっていますか",
  "level": 3
}, {
  "value": "Suprema Passアプリの位置情報権限を許可してください",
  "id": "suprema-passアプリの位置情報権限を許可してください",
  "level": 3
}, {
  "value": "無線ネットワークとWi‑Fi接続を確認してください",
  "id": "無線ネットワークとwifi接続を確認してください",
  "level": 3
}, {
  "value": "選択した接続方法を使用しましたか？",
  "id": "選択した接続方法を使用しましたか",
  "level": 3
}, {
  "value": "認証時にモバイル端末が振動しましたか？",
  "id": "認証時にモバイル端末が振動しましたか",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcFunc, IcHamberg, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcFunc) _missingMdxReference("IcFunc", true);
  if (!IcHamberg) _missingMdxReference("IcHamberg", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "モバイルカードは機器と認証されているが、ドアが開かない場合は、以下の案内に従って問題を解決してください。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contactbsairAdmin",
      children: "BioStar Air 管理者に問い合わせる"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "サイト管理者はモバイルカードの再発行、一時的なモバイル端末の問題、設定の問題を支援できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-contact-admin.png",
      width: "78%",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Suprema Passアプリでモバイルカードの下にある ", (0,jsx_runtime.jsx)(IcFunc, {}), " アイコンをタップしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["下部のパネルが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            children: "管理者に問い合わせる"
          }), "をタップします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ポップアップが表示されたら、タイトルと内容を入力してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メッセージを管理者に送信するには、", (0,jsx_runtime.jsx)(Cmd, {
            children: "送信"
          }), "をタップします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mobileCardDeleted",
      children: "モバイルカードが削除されましたか？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "モバイル端末を変更したりSuprema Passアプリを再インストールした場合、セキュリティ上の理由によりすべてのモバイルカードが削除されます。 以下はモバイルカード再発行の問い合わせ先です。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Company Spaces"
          }), ": HR、IT、セキュリティまたは運用チーム"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Shared Spaces"
          }), ": エリア管理者またはカスタマーサービスチーム"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshootingSteps",
      children: "ステップ別トラブルシューティング"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "suprema-passアプリでエラーメッセージが表示されましたか",
          children: "Suprema Passアプリでエラーメッセージが表示されましたか？"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ドアが開かない場合は、Suprema Passアプリで再認証を試してください。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "エラーメッセージが表示されたら、スクリーンショットを撮ってサイト管理者と共有してください。"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "モバイル端末のbluetoothはオンになっていますか",
          children: "モバイル端末のBluetoothはオンになっていますか？"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイルカードはモバイル端末と出入管理機器間のBluetooth通信に依存します。"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Bluetoothがオンになっていることを確認してください。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Bluetoothを一度オフにしてから再度オンにしてください。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "必要に応じてモバイル端末を再起動してください。"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "suprema-passアプリの位置情報権限を許可してください",
          children: "Suprema Passアプリの位置情報権限を許可してください"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "BluetoothおよびNFC認証には位置情報権限が必要です。"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["モバイル端末の", (0,jsx_runtime.jsx)(_components.strong, {
                children: "設定"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "アプリ"
              }), "に移動します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Suprema Pass"
              }), "アプリを選択します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "権限"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "位置情報"
              }), "で位置アクセス許可を", (0,jsx_runtime.jsx)(_components.strong, {
                children: "常に許可"
              }), "または", (0,jsx_runtime.jsx)(_components.strong, {
                children: "アプリ使用中のみ許可"
              }), "に設定します。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "無線ネットワークとwifi接続を確認してください",
          children: "無線ネットワークとWi‑Fi接続を確認してください"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイルカード認証には安定した無線ネットワークまたはWi‑Fi接続が必要です。"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "選択した接続方法を使用しましたか",
          children: "選択した接続方法を使用しましたか？"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Suprema Passアプリで接続方式を確認してください。"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Suprema Passアプリの初期画面で右上の ", (0,jsx_runtime.jsx)(IcHamberg, {}), " アイコンをタップしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "接続方式"
              }), "で認証モードを確認してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "バックグラウンドモード"
              }), "を使用する場合、アプリがバックグラウンドで起動している必要があります。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "認証時にモバイル端末が振動しましたか",
          children: "認証時にモバイル端末が振動しましたか？"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "端末が振動したがドアが開かなかった場合は、Suprema Passアプリを開いて再認証を試してください。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "エラーメッセージが表示されたら、スクリーンショットを撮ってサイト管理者と共有してください。"
            }), "\n"]
          }), "\n"]
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