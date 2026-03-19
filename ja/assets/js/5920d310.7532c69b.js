"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1148"], {
99755: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_site_basic_settings_mdx_592_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-site-basic-settings-mdx-592.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_site_basic_settings_mdx_592_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-basic-settings","title":"基本情報を設定する","description":"BioStar Airでサイトの基本情報を管理したり、サイトを削除したりする方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/site-basic-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-basic-settings","permalink":"/docs/ja/platform/biostar_air/site-basic-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-basic-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"site-basic-settings","title":"基本情報を設定する","description":"BioStar Airでサイトの基本情報を管理したり、サイトを削除したりする方法を案内します。","keywords":["サイト設定","構成する"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"サイトを設定する","permalink":"/docs/ja/platform/biostar_air/settings"},"next":{"title":"高度設定","permalink":"/docs/ja/platform/biostar_air/site-advanced-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/site-basic-settings.mdx


const frontMatter = {
	id: 'site-basic-settings',
	title: '基本情報を設定する',
	description: 'BioStar Airでサイトの基本情報を管理したり、サイトを削除したりする方法を案内します。',
	keywords: [
		'サイト設定',
		'構成する'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "サイト情報の設定",
  "id": "siteProfile",
  "level": 2
}, {
  "value": "サイトの削除",
  "id": "deletingSite",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "サイト情報はBioStar Airの基本設定です。 本書では、サイト名や識別子などの基本情報を管理する方法と、必要に応じてサイトを削除する方法を説明します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "siteProfile",
      children: "サイト情報の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_submenu",
        product: "air"
      }), " をクリックします。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_tab_profile",
        product: "air"
      }), "：サイトの基本情報を編集できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-site-info.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input2",
            product: "air"
          }), "：サイトの名前です。 新しい名前を入力して ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rename_site_apply_btn",
            product: "air"
          }), " ボタンをクリックします。 いつでも変更できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input1",
            product: "air"
          }), "：サポート要求時に必要な固有識別子です。 MOCAチームと連絡する際に、サイトIDをコピーして提供できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input3",
            product: "air"
          }), "：サイト作成時に設定され、後で変更できません。 変更が必要な場合は、BioStar Airパートナーポータルで手続きを行ってください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deletingSite",
      children: "サイトの削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_submenu",
        product: "air"
      }), " をクリックします。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_tab_management",
        product: "air"
      }), " タブで使用できる唯一のオプションは ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "delete_site",
        product: "air"
      }), " 機能です。 この操作は元に戻せず、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "マスター管理者"
      }), "のみサイトを削除できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-site-management.png"
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