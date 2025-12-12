"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["71946"], {
57879: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_settings_mdx_d6a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-ui-settings-mdx-d6a.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_settings_mdx_d6a_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ui-settings","title":"設定","description":"設定ページのユーザーインターフェース (User Interface) について説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-settings.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ui-settings","permalink":"/docs/ja/platform/biostar_x/ui-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ui-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"ui-settings","title":"設定","description":"設定ページのユーザーインターフェース (User Interface) について説明します。","keywords":["設定","UI"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ダッシュボード","permalink":"/docs/ja/platform/biostar_x/ui-dashboard"},"next":{"title":"ライセンス ポリシー","permalink":"/docs/ja/platform/biostar_x/licensing"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-settings.mdx


const frontMatter = {
	id: 'ui-settings',
	title: '設定',
	description: '設定ページのユーザーインターフェース (User Interface) について説明します。',
	keywords: [
		'設定',
		'UI'
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
  }, {Calloutlists, Cmd, IcBw2, IcFirst2, IcFw2, IcLast2, IcMoreW, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcBw2) _missingMdxReference("IcBw2", true);
  if (!IcFirst2) _missingMdxReference("IcFirst2", true);
  if (!IcFw2) _missingMdxReference("IcFw2", true);
  if (!IcLast2) _missingMdxReference("IcLast2", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.setting"
      }), " ページでは、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " のさまざまな設定を管理できます。 このページの UI コンポーネントは次のとおりです。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-ui-settings.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      className: "svg-none-style",
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "shell.header.setting"
            }), " メニューから提供されるさまざまな設定メニューを確認できます。 詳細は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "how-to-guide-settings",
              children: "次のドキュメント"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ページリストをナビゲートできるツールです。 ページを移動したり、任意のページへジャンプできます。"
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-settings-access-control-status-pagenation.png"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcFirst2, {}), "：最初のページに移動します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcFw2, {}), "：前のページに移動します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcBw2, {}), "：次のページに移動します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(IcLast2, {}), "：最後のページに移動します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "目的のページに移動するには、数字入力フィールドにページ番号を入力します。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "1ページに表示する一覧の件数を設定するには、行選択ボックスをクリックします。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "info",
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "設定メニューによっては対応していない場合があります。"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(IcMoreW, {}), " ボタンをクリックすると追加機能を使用できます。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "info",
            children: (0,jsx_runtime.jsx)(_components.p, {
              children: "設定メニューによってサポートされる機能は異なる場合があります。"
            })
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