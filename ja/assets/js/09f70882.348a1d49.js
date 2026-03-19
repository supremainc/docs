"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["22394"], {
29871: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_site_security_settings_mdx_09f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-site-security-settings-mdx-09f.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_site_security_settings_mdx_09f_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-security-settings","title":"セキュリティの設定","description":"管理者アカウントのロック、2段階認証、パスワードポリシー、モバイルクレデンシャルの有効期限など、BioStar Air サイトのセキュリティレベルを向上させる方法をご案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/site-security-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-security-settings","permalink":"/docs/ja/platform/biostar_air/site-security-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-security-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"site-security-settings","title":"セキュリティの設定","description":"管理者アカウントのロック、2段階認証、パスワードポリシー、モバイルクレデンシャルの有効期限など、BioStar Air サイトのセキュリティレベルを向上させる方法をご案内します。","keywords":["サイトのセキュリティ","セキュリティ設定"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"高度設定","permalink":"/docs/ja/platform/biostar_air/site-advanced-settings"},"next":{"title":"拡張機能の設定","permalink":"/docs/ja/platform/biostar_air/site-additional-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/site-security-settings.mdx


const frontMatter = {
	id: 'site-security-settings',
	title: 'セキュリティの設定',
	description: '管理者アカウントのロック、2段階認証、パスワードポリシー、モバイルクレデンシャルの有効期限など、BioStar Air サイトのセキュリティレベルを向上させる方法をご案内します。',
	keywords: [
		'サイトのセキュリティ',
		'セキュリティ設定'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "不正アクセスを防ぎ、サイトを安全に運用するには、適切なセキュリティポリシーを構成する必要があります。\n非アクティブな管理者アカウントのロック、メールによる2段階認証、パスワード変更の周期設定などにより、サイトのセキュリティレベルを強化できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_submenu",
        product: "air"
      }), " をクリックします。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_tab_security",
        product: "air"
      }), " タブでサイトのセキュリティに関する設定を構成できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-site-security.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_security_input1",
            product: "air"
          }), "：90日以上アクセスしていない管理者アカウントをロック状態に変更できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_security_input2",
            product: "air"
          }), "：管理者アカウントでログインするたびにメールによる2段階認証を要求できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_security_input3",
            product: "air"
          }), "：他のアクセス権が選択されていない場合、新規ユーザーに「全アクセス権」をデフォルトで付与します。 この設定を無効にすると、アクセスレベルを手動で割り当てる必要があります。 一時ユーザーは、上記の設定が有効でも自動的に全アクセス権を付与されません。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["アクセスレベル管理の詳細は ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-access-level"
            }), " を参照してください。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_security_input4",
            product: "air"
          }), "：30日、60日、90日ごとにパスワードをリセットするように設定できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_security_input6",
            product: "air"
          }), "：モバイルデバイスがネットワークに接続されていなくてもモバイルクレデンシャルが有効である時間を設定できます。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "デフォルトは5分で、1分から8日の間で設定できます。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "セキュリティと利便性のバランスをとるのに役立ち、特にネットワーク接続が制限される遠隔サイトで有用です。"
              }), "\n"]
            }), "\n"]
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