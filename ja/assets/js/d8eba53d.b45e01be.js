"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2826"], {
20638: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_visitor_remove_expire_personal_mdx_d8e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-visitor-remove-expire-personal-mdx-d8e.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_visitor_remove_expire_personal_mdx_d8e_namespaceObject = JSON.parse('{"id":"platform/biostar_x/visitor-remove-expire-personal","title":"個人情報の保存期限が切れた訪問者を削除する","description":"個人情報の保存期間が過ぎた訪問者情報を削除します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/visitor-remove-expire-personal.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/visitor-remove-expire-personal","permalink":"/docs/ja/platform/biostar_x/visitor-remove-expire-personal","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/visitor-remove-expire-personal.mdx","tags":[],"version":"current","frontMatter":{"id":"visitor-remove-expire-personal","title":"個人情報の保存期限が切れた訪問者を削除する","description":"個人情報の保存期間が過ぎた訪問者情報を削除します。","keywords":["訪問者","個人情報","削除"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"すべての訪問者を管理する","permalink":"/docs/ja/platform/biostar_x/visitor-register-all-manage"},"next":{"title":"UI を確認","permalink":"/docs/ja/platform/biostar_x/ui-overview"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/visitor-remove-expire-personal.mdx


const frontMatter = {
	id: 'visitor-remove-expire-personal',
	title: '個人情報の保存期限が切れた訪問者を削除する',
	description: '個人情報の保存期間が過ぎた訪問者情報を削除します。',
	keywords: [
		'訪問者',
		'個人情報',
		'削除'
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "個人情報の保存期間が過ぎた訪問者情報を削除します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.visitor"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面上部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.expired.personalData",
            product: "2"
          }), " タブをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "個人情報の保存期間を超過した訪問者リストが表示されたら、削除する訪問者のチェックボックスをクリックします。 1人以上選択します。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-expire-personal-data-lists.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["訪問者リストの右上にある ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.button.deletePersonalData",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["確認メッセージが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["個人情報の期限切れ訪問者一覧を確認できるのは、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.account.administrator",
              product: "2",
              className: "bold"
            }), " 権限を持つユーザーのみです。 ユーザー権限の詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "add-user",
              children: "以下"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["個人情報の保存期間設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-terms",
              children: "以下"
            }), "を参照してください。"]
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