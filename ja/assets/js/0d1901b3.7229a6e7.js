"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["88030"], {
80390: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_suprema_pass_app_sensitivity_settings_mdx_0d1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-suprema-pass-app-sensitivity-settings-mdx-0d1.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_suprema_pass_app_sensitivity_settings_mdx_0d1_namespaceObject = JSON.parse('{"id":"platform/biostar_air/suprema-pass-app-sensitivity-settings","title":"感度を設定する","description":"Suprema PassアプリでBluetoothの認識感度を調整し、意図しない認証の防止、認識距離の改善、Apple Payの干渉問題の解決方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/suprema-pass-app-sensitivity-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/suprema-pass-app-sensitivity-settings","permalink":"/docs/ja/platform/biostar_air/suprema-pass-app-sensitivity-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/suprema-pass-app-sensitivity-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"suprema-pass-app-sensitivity-settings","title":"感度を設定する","description":"Suprema PassアプリでBluetoothの認識感度を調整し、意図しない認証の防止、認識距離の改善、Apple Payの干渉問題の解決方法を案内します。","keywords":["感度設定","Bluetooth"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"高度な機能の設定","permalink":"/docs/ja/platform/biostar_air/suprema-pass-app-advanced-features"},"next":{"title":"開発者","permalink":"/docs/ja/platform/biostar_air/developer-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/suprema-pass-app-sensitivity-settings.mdx


const frontMatter = {
	id: 'suprema-pass-app-sensitivity-settings',
	title: '感度を設定する',
	description: 'Suprema PassアプリでBluetoothの認識感度を調整し、意図しない認証の防止、認識距離の改善、Apple Payの干渉問題の解決方法を案内します。',
	keywords: [
		'感度設定',
		'Bluetooth'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "感度設定の調整方法",
  "id": "how-to-adjust-the-sensitivity-setting",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdd, IcHamberg, IcMinus, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcHamberg) _missingMdxReference("IcHamberg", true);
  if (!IcMinus) _missingMdxReference("IcMinus", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "感度設定"
      }), "機能では、ユーザーがモバイル端末とBioStar Air対応機器間のBluetooth検出感度を調整できます。 この機能は円滑な認証を確保し、不要なアクセス試行や認証失敗を減らすのに役立ちます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "モバイル機器のモデルごとにBluetooth信号の強さが異なるため、ユーザーは異なる認識距離を経験することがあります。 また、壁や干渉、BioStar Air対応機器の配置などの環境要因がBluetoothの検出に影響を与えることがあります。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-adjust-the-sensitivity-setting",
      children: "感度設定の調整方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーはモバイル機器のBluetooth強度と個人の好みに応じてBluetooth認証の感度を微調整できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-sp-app-set-advanced-sensitivity.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Suprema Passアプリの初期画面で右上の ", (0,jsx_runtime.jsx)(IcHamberg, {
            title: "Hamburger menu"
          }), " アイコンをタップしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "その他"
          }), "をタップしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "詳細設定"
          }), "をタップ。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "感度設定"
          }), "をタップして、スライダーを移動して感度を調整する。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["意図しない認証を防ぐには、", (0,jsx_runtime.jsx)(IcMinus, {}), "方向にスライダーを移動して感度を下げる。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "例：モバイル機器が机の上にあるとき"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["認証に失敗する場合は、", (0,jsx_runtime.jsx)(IcAdd, {}), "方向にスライダーを移動して感度を上げる。 ただし、モバイル端末はBioStar Air対応機器の非常に近くにある必要があります。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "iOSユーザー向けのヒント"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Apple Payを利用しているiPhoneをBioStar Air対応機器に近づけると、Apple Payが起動します。 これは、モバイル端末のNFC領域がモバイルカード認証として検出されるためです。"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "解決策"
        }), "：感度設定を", (0,jsx_runtime.jsx)(IcAdd, {}), "方向に調整すると、BioStar Air対応機器がモバイル端末のBluetooth信号をより早く検出するようになり、機器に直接触れる必要がなくなります。 これにより、Apple Payがトリガーされるのを防ぎつつ、スムーズに出入りできます。"]
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