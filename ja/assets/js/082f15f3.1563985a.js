"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["54201"], {
33780: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_getting_started_mdx_082_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-corestation-setup-manager-getting-started-mdx-082.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_getting_started_mdx_082_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/getting-started","title":"はじめに","description":"CoreStation Setup Manager を使用するための最小要件を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/getting-started.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/getting-started","permalink":"/docs/ja/device/corestation_setup_manager/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"はじめに","description":"CoreStation Setup Manager を使用するための最小要件を説明します。","keywords":["概要","最小要件"],"isTranslationMissing":false},"sidebar":"corestation_setup_manager","previous":{"title":"CoreStation セットアップマネージャー","permalink":"/docs/ja/device/corestation_setup_manager/"},"next":{"title":"デバイスを初期設定する","permalink":"/docs/ja/device/corestation_setup_manager/initial-setup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: 'はじめに',
	description: 'CoreStation Setup Manager を使用するための最小要件を説明します。',
	keywords: [
		'概要',
		'最小要件'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "最小要件",
  "id": "最小要件",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation Setup Manager は、CoreStation のネットワーク設定を管理したり、スレーブデバイス、入力/出力ポート、Wiegand ポートの接続状態を確認したりできる Web サーバーです。 CoreStation Setup Manager を使用すると、CoreStation を用いた入退室管理システムを構成する際に、BioStar X サーバーの場所へ移動せず、その場でネットワークおよび配線の状態を確認できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation Setup Manager では、次の機能を使用できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "IP アドレス設定"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CoreStation 情報の確認"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "管理者設定"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "スレーブデバイスの接続状態確認"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "入力および出力、Wiegand ポートの状態モニタリング"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "デバイスの初期化、ネットワーク設定以外の設定の初期化"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "工場出荷時初期化"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "最小要件",
      children: "最小要件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "互換性のある装置とファームウェアバージョンを確認してください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CoreStation ファームウェアバージョン 1.3.1 以上"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CoreStation 20 ファームウェアバージョン 1.0.0 以上"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CoreStation Setup Manager は、CoreStation ファームウェアバージョン 1.3.1 以上および CoreStation 20 ファームウェアバージョン 1.0.0 以上でサポートされます。 古いバージョンのファームウェアを使用している場合は、BioStar X に接続してファームウェアを最新バージョンにアップグレードしてください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "各デバイスの接続および設置方法の詳細は、該当製品のガイドを参照してください。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/docs/ja/device/corestation_40/",
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "CoreStation"
                  })
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/docs/ja/device/corestation_20/",
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "CoreStation 20"
                  })
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CoreStation および CoreStation Setup Manager の詳細については、Suprema テクニカルサポート (", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:CS@suprema.co.kr",
              children: "CS@suprema.co.kr"
            }), ") までお問い合わせください。"]
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