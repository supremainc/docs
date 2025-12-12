"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["52815"], {
90276: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_mdx_78f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-videos-mdx-78f.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_mdx_78f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-videos","title":"ビデオ設定","description":"BioStar X と VMS を連携し、統合ビデオセキュリティ管理システムを構築する手順を段階的に説明します。 VMS サーバーの連携からカメラ設定、ルール構成まで、全工程を扱います。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-videos","permalink":"/docs/ja/platform/biostar_x/settings-videos","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-videos.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-videos","title":"ビデオ設定","description":"BioStar X と VMS を連携し、統合ビデオセキュリティ管理システムを構築する手順を段階的に説明します。 VMS サーバーの連携からカメラ設定、ルール構成まで、全工程を扱います。","keywords":["ビデオ","VMS","連携","カメラ","設定","ルール"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"人数点検（ロールコール）","permalink":"/docs/ja/platform/biostar_x/settings-advanced-ac-roll-call"},"next":{"title":"VMS と連携する","permalink":"/docs/ja/platform/biostar_x/settings-video-integration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos.mdx


const frontMatter = {
	id: 'settings-videos',
	title: 'ビデオ設定',
	description: 'BioStar X と VMS を連携し、統合ビデオセキュリティ管理システムを構築する手順を段階的に説明します。 VMS サーバーの連携からカメラ設定、ルール構成まで、全工程を扱います。',
	keywords: [
		'ビデオ',
		'VMS',
		'連携',
		'カメラ',
		'設定',
		'ルール'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "ビデオ設定の概要",
  "id": "ビデオ設定の概要",
  "level": 2
}, {
  "value": "VMS サーバーを連携する",
  "id": "vms-サーバーを連携する",
  "level": 3
}, {
  "value": "カメラを設定する",
  "id": "カメラを設定する",
  "level": 3
}, {
  "value": "ルールを設定する",
  "id": "ルールを設定する",
  "level": 3
}, {
  "value": "主な機能",
  "id": "主な機能",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Step, Steps} = _components;
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " のビデオ設定機能により、入退室管理と映像セキュリティを統合管理できます。 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Video Management System"
      }), "（VMS）と連携し、リアルタイム映像モニタリング、イベント連動録画、自動ブックマーク生成などの強力なセキュリティ管理機能を利用します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ビデオ設定機能は ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "アドバンス"
        }), "（Advanced）ライセンス以上で追加オプションとして利用できます。 ライセンスポリシーの詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ビデオ設定の概要",
      children: "ビデオ設定の概要"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ビデオ設定は次の 3 段階で構成されます。"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "vms-サーバーを連携する",
          children: "VMS サーバーを連携する"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS サーバーと ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " の接続を設定し、証明書を構成します。 統合ビデオセキュリティ管理システムを構築するための必須ステップです。 詳細は ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-video-integration",
            children: "以下"
          }), " を参照してください。"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "カメラを設定する",
          children: "カメラを設定する"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["VMS に接続されているカメラの中から必要なカメラを選択し、効率的な管理のためにグループを構成します。 詳細は ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-videos-camera",
            children: "以下"
          }), " を参照してください。"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ルールを設定する",
          children: "ルールを設定する"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["入退室イベントと映像を連携するルールを作成し、自動ブックマークやイベント記録などの高度な機能を活用します。 詳細は ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-videos-rule",
            children: "以下"
          }), " を参照してください。"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "主な機能",
      children: "主な機能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "統合モニタリング"
          }), "：入退室管理と映像セキュリティを単一インターフェースで管理できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "自動イベント記録"
          }), "：入退室イベント発生時に関連映像を自動で記録し、タグを生成します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "効率的な検索"
          }), "：ブックマークとイベントタグによる素早い映像検索と証拠収集が可能です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "リアルタイム対応"
          }), "：セキュリティ事象発生時に関連カメラ映像を即時に確認できます。"]
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