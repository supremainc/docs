"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["53555"], {
11008: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_securitylevel_mdx_af9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-enroll-credential-securitylevel-mdx-af9.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_enroll_credential_securitylevel_mdx_af9_namespaceObject = JSON.parse('{"id":"platform/biostar_x/enroll-credential-securitylevel","title":"セキュリティレベルを設定する","description":"デバイスで設定したバイオメトリクスの1:Nセキュリティレベルに関係なく、ユーザーごとに個別のセキュリティレベルを割り当てることができます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-securitylevel.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/enroll-credential-securitylevel","permalink":"/docs/ja/platform/biostar_x/enroll-credential-securitylevel","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/enroll-credential-securitylevel.mdx","tags":[],"version":"current","frontMatter":{"id":"enroll-credential-securitylevel","title":"セキュリティレベルを設定する","description":"デバイスで設定したバイオメトリクスの1:Nセキュリティレベルに関係なく、ユーザーごとに個別のセキュリティレベルを割り当てることができます。","keywords":["クレデンシャル","セキュリティ","セキュリティレベル"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ユーザークレデンシャルを登録する","permalink":"/docs/ja/platform/biostar_x/enroll-credential"},"next":{"title":"認証モードを設定する","permalink":"/docs/ja/platform/biostar_x/enroll-credential-authmode"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/enroll-credential-securitylevel.mdx


const frontMatter = {
	id: 'enroll-credential-securitylevel',
	title: 'セキュリティレベルを設定する',
	description: 'デバイスで設定したバイオメトリクスの1:Nセキュリティレベルに関係なく、ユーザーごとに個別のセキュリティレベルを割り当てることができます。',
	keywords: [
		'クレデンシャル',
		'セキュリティ',
		'セキュリティレベル'
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
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスで設定したバイオメトリクスの1", ":N", "セキュリティレベルに関係なく、ユーザーごとに個別のセキュリティレベルを割り当てることができます。 デバイスの1", ":N", "セキュリティレベルを高く設定していて認証に頻繁に失敗するユーザーがいる場合は、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.fingerSecurityLevel",
        product: "2"
      }), "を低く設定して認証失敗を緩和できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-new-user-credential-securitylevle.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "user.fingerSecurityLevel",
        product: "2"
      }), "項目で、希望するレベルを設定します。 設定可能な値は以下を参照してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.deviceDefault",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.lowest",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.low",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.normal",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.high",
          product: "2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
          sid: "securityLevel.highest",
          product: "2"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["設定を保存するには、画面右上の", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.save",
        product: "2"
      }), "をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.credential",
              product: "2"
            }), "セクションで", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.authMode.privateMode",
              product: "2"
            }), "項目を", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.authMode.biometric",
              product: "2"
            }), "に設定した場合、入力されたユーザーを特定できないため1:1セキュリティレベルを適用できません。カードやIDを含むユーザー特定が可能な認証モードを設定した場合にのみ、1:1セキュリティレベルを適用できます。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.authMode.privateMode",
              product: "2"
            }), "の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "enroll-credential-authmode",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["適切なセキュリティレベルを設定します。 セキュリティレベルが高いほど、指紋認証率が低下したり、", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../reference/glossary#frr",
              children: "本人拒否率(FRR)"
            }), "が高くなったりする可能性があります。"]
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