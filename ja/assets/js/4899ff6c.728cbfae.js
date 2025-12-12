"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["20229"], {
3187: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_view_user_by_access_mdx_489_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-view-user-by-access-mdx-489.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_view_user_by_access_mdx_489_namespaceObject = JSON.parse('{"id":"platform/biostar_x/view-user-by-access","title":"アクセスグループを管理する","description":"アクセスグループごとにユーザーを検索し、アクセス権限構造を探索する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/view-user-by-access.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/view-user-by-access","permalink":"/docs/ja/platform/biostar_x/view-user-by-access","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/view-user-by-access.mdx","tags":[],"version":"current","frontMatter":{"id":"view-user-by-access","title":"アクセスグループを管理する","description":"アクセスグループごとにユーザーを検索し、アクセス権限構造を探索する方法を案内します。","keywords":["ユーザー","アクセス権限"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ユーザー情報のエクスポート/インポート","permalink":"/docs/ja/platform/biostar_x/export-import-user-info"},"next":{"title":"多要素認証でログインする","permalink":"/docs/ja/platform/biostar_x/login-with-mfa"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/view-user-by-access.mdx


const frontMatter = {
	id: 'view-user-by-access',
	title: 'アクセスグループを管理する',
	description: 'アクセスグループごとにユーザーを検索し、アクセス権限構造を探索する方法を案内します。',
	keywords: [
		'ユーザー',
		'アクセス権限'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "アクセスグループ別にユーザーを確認する",
  "id": "view-user-by-access",
  "level": 2
}, {
  "value": "ツリー構造を確認する",
  "id": "learn-tree-view",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, IcMinus, Image, Treeview} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcMinus) _missingMdxReference("IcMinus", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Treeview) _missingMdxReference("Treeview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["アクセスグループを基準にユーザーを検索および管理する方法を案内します。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.accessExplorer"
      }), "を使用して、アクセスグループごとに登録されたユーザーを確認し、ツリー構造でアクセス権限階層を探索できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "team.tree.accessExplorer"
        }), "でアクセスグループに含まれるドアや階を確認するには、事前にアクセス制御機能を設定しておく必要があります。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-access-control",
          children: "以下"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "view-user-by-access",
      children: "アクセスグループ別にユーザーを確認する"
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
          children: ["ツリー構造メニューで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.accessExplorer"
          }), "タブをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-access-explorer.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.tree.accessExplorerRootName"
          }), "で目的のアクセス権限グループをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "選択したアクセス権限グループに属するユーザーをユーザーリストで確認できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["アクセスグループ配下のアクセスレベルまたは階レベルを展開または折りたたむには、", (0,jsx_runtime.jsx)(IcAdd, {}), " または ", (0,jsx_runtime.jsx)(IcMinus, {}), " ボタンをクリックします。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learn-tree-view",
      children: "ツリー構造を確認する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ツリー構造メニューは以下のような構成になっています。"
    }), "\n", (0,jsx_runtime.jsx)(Treeview, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "アクセスグループ"
          }), "はアクセスレベル、階レベル、ユーザーグループ、ユーザーを包含する上位階層です。 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "アクセスグループ"
          }), "を通じてアクセス権限を管理できます。 アクセスグループの作成について詳しくは", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control-manage-access-group",
            children: "こちら"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "アクセスレベル"
          }), "はユーザーが入退室できる時間を設定し、その時間内にドアへのアクセス権限を付与します。 アクセスレベルの作成について詳しくは", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control-manage-access-level",
            children: "こちら"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "階レベル"
          }), "を使用して、ユーザーがエレベーターでアクセスできる階を管理できます。 階レベルの作成について詳しくは", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control-manage-floor-level",
            children: "こちら"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "スケジュール"
          }), "は入退室および休日スケジュールを設定し、アクセス制御と勤怠管理を効率的に運用する機能です。 スケジュール登録の詳細は", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-schedule",
            children: "こちら"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "エレベーター"
          }), "を登録し、エレベーターでアクセスできる階を管理できます。 エレベーターの登録について詳しくは、", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-elevators-add",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["エレベーター登録機能は", (0,jsx_runtime.jsx)(_components.strong, {
          children: "アドバンス"
        }), "(Advanced)ライセンス以上で追加オプションとして利用できます。 ライセンスポリシーの詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "次のドキュメント"
        }), "を参照してください。"]
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