"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["80941"], {
86591: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_plugins_getting_started_mdx_aff_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-plugins-getting-started-mdx-aff.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_plugins_getting_started_mdx_aff_namespaceObject = JSON.parse('{"id":"platform/plugins/getting-started","title":"はじめに","description":"BioStar X プラグイン開発を始めるための準備事項と基本概念を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/plugins/getting-started.mdx","sourceDirName":"platform/plugins","slug":"/platform/plugins/getting-started","permalink":"/docs/ja/platform/plugins/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/plugins/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"はじめに","description":"BioStar X プラグイン開発を始めるための準備事項と基本概念を案内します。","keywords":["プラグイン開発","はじめに","要件","アーキテクチャ"],"isTranslationMissing":false},"sidebar":"bsxplugins","previous":{"title":"概要","permalink":"/docs/ja/platform/plugins/plugins-overview"},"next":{"title":"開発ガイド","permalink":"/docs/ja/platform/plugins/development-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/plugins/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: 'はじめに',
	description: 'BioStar X プラグイン開発を始めるための準備事項と基本概念を案内します。',
	keywords: [
		'プラグイン開発',
		'はじめに',
		'要件',
		'アーキテクチャ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "開始する前に",
  "id": "開始する前に",
  "level": 2
}, {
  "value": "必要な事前知識",
  "id": "必要な事前知識",
  "level": 3
}, {
  "value": "開発環境の要件",
  "id": "開発環境の要件",
  "level": 3
}, {
  "value": "プラグインアーキテクチャ",
  "id": "プラグインアーキテクチャ",
  "level": 2
}, {
  "value": "プラグイン動作概要",
  "id": "プラグイン動作概要",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " と連携するプラグインを開発するための基本的な準備事項と概念を案内します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "開始する前に",
      children: "開始する前に"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "必要な事前知識",
      children: "必要な事前知識"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTP REST API 開発経験"
          }), "：Web サービス開発および API 通信に関する基本的な理解"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RSA 公開鍵暗号化の理解"
          }), "：非対称暗号方式に関する基本知識"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AES 共通鍵暗号化の理解"
          }), "：共通鍵暗号方式に関する基本知識"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Web サーバー開発経験"
          }), "：Python FastAPI、Node.js Express、Java Spring Boot など"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "開発環境の要件",
      children: "開発環境の要件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X サーバー"
          }), "：テスト用の ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 環境"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "開発用 Web サーバー"
          }), "：プラグインをホスティングする Web サーバー"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTP クライアント"
          }), "：curl、Postman などの API テストツール"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "プラグインアーキテクチャ",
      children: "プラグインアーキテクチャ"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " プラグインは次のような構造で動作します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "sequenceDiagram\n    autonumber\n    participant U as User\n    participant P as Plugin\n    participant SM as ServiceManager\n    participant BS as BioStar X Server\n    participant BC as BioStar X Client\n    \n    Note over U,BC: Register Plugin\n    U->>+SM: Register plugin\n    SM->>+P: Ping to register address / e.g. {address}/bsx\n    P->>-SM: Pong with header value in body\n    SM-->SM: Certificate generation\n    SM->>-U: Response / Reg success\n\n    Note over U,BC: Download Certification\n    U->>+SM: Download certification\n    SM-->SM: Certification\n    SM->>-U: Response certification file\n\n    Note over U,BC: Open Plugin Service\n    U->>+BC: Plugin Click\n    BC->>-P: Post request(with user id, plugin id) with new tab\n    U-->>+P: Watched new tab\n    P->>+BS: Post method called <br/>→ /api/session/bridge,<br/>Body: {pluginid, userid, key (a random 32-byte key encrypted with the certification and transmitted)}\n    Note right of BS: /api/session/brdige\n    BS->>-P: Response (bs-session-ID)\n    Note right of BS: Encrypt the current user's bs-session-id using the key and transmit it.\n    Note right of P: bs-session-id must be decrypted before use\n    P->>-U: Response / Open Page"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "キーまたは証明書は、一度ダウンロードした後に再発行しない限り再ダウンロードできません。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "プラグイン動作概要",
      children: "プラグイン動作概要"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " プラグインシステムは大きく三つの段階で動作します。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "プラグイン登録"
          }), "：Service Manager でプラグインサーバーを登録し、接続性を確認"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "証明書管理"
          }), "：Session Bridge 使用時の安全な通信のためのキー管理"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "プラグイン実行"
          }), "：ユーザーがプラグインにアクセスすると自動セッションブリッジで認証"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["各段階の具体的な実装方法は ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./development-guide",
        children: "開発ガイド"
      }), " を参照してください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "証明書はプラグイン登録後、該当プラグインの詳細ページからダウンロードできます。 証明書を紛失した場合は再度ダウンロードできます。 このとき既存の証明書は無効になります。"
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