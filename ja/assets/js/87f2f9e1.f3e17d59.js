"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["66870"], {
52676: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_add_user_mdx_87f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-add-user-mdx-87f.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_add_user_mdx_87f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/add-user","title":"ユーザー登録","description":"新規ユーザーを登録する方法について説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/add-user.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/add-user","permalink":"/docs/ja/platform/biostar_x/add-user","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/add-user.mdx","tags":[],"version":"current","frontMatter":{"id":"add-user","title":"ユーザー登録","description":"新規ユーザーを登録する方法について説明します。","keywords":["ユーザー","ユーザーグループ"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ユーザーグループを管理する","permalink":"/docs/ja/platform/biostar_x/user-group-manage"},"next":{"title":"ユーザー基本情報を入力","permalink":"/docs/ja/platform/biostar_x/add-user-basic-info"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/add-user.mdx


const frontMatter = {
	id: 'add-user',
	title: 'ユーザー登録',
	description: '新規ユーザーを登録する方法について説明します。',
	keywords: [
		'ユーザー',
		'ユーザーグループ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "新規ユーザーを登録する方法について説明します。 ユーザーの写真、氏名、メールアドレス、電話番号などの情報を入力し、ユーザーの入退室権限と生体情報を設定できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー情報の入力、入退室権限の設定、クレデンシャル登録の順に進めます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " ページ右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.newUser"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-add-user-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.addNewUser",
            product: "2"
          }), " 画面でユーザー情報を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-add-user-02.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.information"
          }), " セクションでユーザーの基本情報を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.title"
          }), " セクションでユーザーの生体認証情報を登録します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.title"
          }), " セクションでユーザーの ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 運用権限と入退室権限を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.advanced",
            product: "2"
          }), " セクションでユーザーが入退室する際にデバイスに表示するメッセージを入力できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべての情報を入力し、画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user.save",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザー一覧で登録したユーザーを確認できます。 各セクションの入力と設定の詳細は以下を参照してください。"
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      notitle: true,
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "add-user-basic-info",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.information"
          }), " セクションでユーザーの基本情報を入力します。 各項目の詳細を確認できます。"]
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "enroll-credential",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.title"
          }), " セクションでユーザークレデンシャルを登録し、入退室認証方式を設定します。"]
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "set-permission",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.title"
          }), " セクションでユーザーの入退室権限の設定方法を確認します。"]
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "set-user-advanced",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.advanced",
            product: "2"
          }), " セクションでユーザー入退室時にデバイスに表示するメッセージを設定するか、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.activeDirectory.title",
            product: "2",
            className: "normal"
          }), " 連携時に当該ユーザーを同期対象から除外できます。"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "入退室権限と生体認証情報は任意項目です。 基本情報を入力して保存した後で、修正または追加できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザー情報をカードテンプレートでカードに印刷するには、画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.printCard",
              product: "2"
            }), " ボタンをクリックします。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-card-printer",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザー登録を取り消すには、画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.cancel",
              product: "2"
            }), " ボタンをクリックします。"]
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