"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["12389"], {
67411: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_visitor_register_mdx_a95_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-visitor-register-mdx-a95.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_visitor_register_mdx_a95_namespaceObject = JSON.parse('{"id":"platform/biostar_x/visitor-register","title":"訪問を申請する","description":"訪問申請用PCで訪問者が入退室を申請する方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/visitor-register.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/visitor-register","permalink":"/docs/ja/platform/biostar_x/visitor-register","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/visitor-register.mdx","tags":[],"version":"current","frontMatter":{"id":"visitor-register","title":"訪問を申請する","description":"訪問申請用PCで訪問者が入退室を申請する方法を説明します。","keywords":["訪問申請"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"訪問者の申請と管理","permalink":"/docs/ja/platform/biostar_x/visitor"},"next":{"title":"来訪申請を管理する","permalink":"/docs/ja/platform/biostar_x/visitor-register-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/visitor-register.mdx


const frontMatter = {
	id: 'visitor-register',
	title: '訪問を申請する',
	description: '訪問申請用PCで訪問者が入退室を申請する方法を説明します。',
	keywords: [
		'訪問申請'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "新規訪問申請",
  "id": "新規訪問申請",
  "level": 2
}, {
  "value": "既存情報で訪問申請",
  "id": "既存情報で訪問申請",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "社内ユーザーではない外部訪問者が訪問申請用PCを使用して入退室を申請する方法を説明します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["訪問申請用PCは別途構成する必要があり、訪問者設定を先に行う必要があります。 訪問者設定の詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["訪問申請用PCに訪問申請ページへのショートカットアイコンがない場合は、", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-pc-link",
              children: "次のドキュメント"
            }), "を参照してショートカットアイコンを作成してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "新規訪問申請",
      children: "新規訪問申請"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初めて訪問する訪問者が訪問申請用PCで入退室を申請する方法を説明します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["訪問申請用PCで訪問申請ページを開いてください。 訪問申請ページのURLアドレスは ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://{biostar_x_server_ip}/#/register-welcome"
          }), " 形式です。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-welcome.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面中央の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.welcome.first.time",
            product: "2"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["訪問先の入退室に関する約款および個人情報取扱方針への同意を完了したら、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "訪問申請に必要な情報を入力してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-info.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.visitor",
                product: "2"
              }), "：訪問者の名前と電話番号を入力してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.host",
                product: "2"
              }), "：訪問先担当者の名前と電話番号を入力してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.accessInfo",
                product: "2"
              }), "：入退室エリアと訪問期間を設定してください。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["情報入力が完了したら、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "入退室手段を設定してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-access-credential.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.fingerPrint",
                product: "2"
              }), "：指紋認証を使用する場合は ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.addFingerprint",
                product: "2"
              }), " ボタンをクリックして指紋を登録してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.card",
                product: "2"
              }), "：カード認証を使用する場合は ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.request",
                product: "2"
              }), " に設定した後、管理者からカードを発行してもらってください。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定が完了したら、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["申請したすべての情報を確認したら、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.register",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-complete.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["訪問先の入退室に関する約款および個人情報取扱方針の作成に関する詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-terms",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "名前は最大48文字まで入力できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["訪問者情報入力にカスタムフィールドを追加する場合は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-custom-field",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["訪問PCに割り当てた訪問先の入退室グループのみ選択できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-site",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["入退室グループの詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-access-control-manage-access-group",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["前の段階に戻って訪問情報を修正する場合は ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.previousPage",
              product: "2"
            }), " ボタンをクリックしてください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "指紋をスキャンするには、訪問申請用PCに指紋登録デバイスが接続されている必要があります。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "既存情報で訪問申請",
      children: "既存情報で訪問申請"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "訪問先に指紋が登録されている場合は、指紋を検索して既存の訪問情報を使用して訪問を申請できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["訪問申請用PCで訪問申請ページを開いてください。 訪問申請ページのURLアドレスは ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://{biostar_x_server_ip}/#/register-welcome"
          }), " 形式です。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-welcome.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面中央の指紋アイコン下にある ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.welcome.search",
            product: "2"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指紋スキャナデバイスで指紋をスキャンしてください。 スキャンした指紋を使用して登録済みユーザーを検索します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以前に指紋を登録した訪問者と一致する指紋がある場合、確認メッセージが表示されます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-confirm-message.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["検索された訪問者で正しければ ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["訪問先の入退室に関する約款および個人情報取扱方針への同意を完了したら、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["前回訪問時に設定した訪問情報を確認してください。 既存情報を修正する場合は各項目を修正した後、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-saved-info.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["前回訪問時に設定した入退室手段を確認してください。 既存の入退室手段を変更する場合は、変更する項目を修正した後、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-saved-access-credential.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["申請したすべての情報を確認したら、画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.register",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-complete.png"
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