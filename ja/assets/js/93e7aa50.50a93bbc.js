"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["12203"], {
73161: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_api_authentication_mdx_93e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-api-authentication-mdx-93e.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_api_authentication_mdx_93e_namespaceObject = JSON.parse('{"id":"platform/biostar_air/api-authentication","title":"API認証","description":"BioStar Air Cloud APIの認証フロー、APIベースURLの一覧、Bearerトークンの発行方法、およびウェブブラウザでBearerトークンを取得する方法について説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/api-authentication.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/api-authentication","permalink":"/docs/ja/platform/biostar_air/api-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/api-authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"api-authentication","title":"API認証","description":"BioStar Air Cloud APIの認証フロー、APIベースURLの一覧、Bearerトークンの発行方法、およびウェブブラウザでBearerトークンを取得する方法について説明します。","keywords":["API認証","Bearerトークン","APIベースURL","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"クイックスタート","permalink":"/docs/ja/platform/biostar_air/integration-quickstart"},"next":{"title":"ユーザー管理APIの使い方","permalink":"/docs/ja/platform/biostar_air/api-user-management"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/api-authentication.mdx


const frontMatter = {
	id: 'api-authentication',
	title: 'API認証',
	description: 'BioStar Air Cloud APIの認証フロー、APIベースURLの一覧、Bearerトークンの発行方法、およびウェブブラウザでBearerトークンを取得する方法について説明します。',
	keywords: [
		'API認証',
		'Bearerトークン',
		'APIベースURL',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "APIベースURL",
  "id": "api-base-urls",
  "level": 2
}, {
  "value": "APIログイン手順",
  "id": "api-login-flow",
  "level": 2
}, {
  "value": "ログイン",
  "id": "login",
  "level": 3
}, {
  "value": "アカウント情報の取得",
  "id": "get-self-accounts",
  "level": 3
}, {
  "value": "アカウントにログイン",
  "id": "login-to-account",
  "level": 3
}, {
  "value": "ウェブブラウザでBearerトークンを取得する方法",
  "id": "getYourBearerToken",
  "level": 2
}, {
  "value": "Chrome/Edge（WindowsまたはMac）",
  "id": "chrome-edge",
  "level": 3
}, {
  "value": "Safari（Mac）",
  "id": "safari",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Kbd} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air Cloud APIはBearerトークン（JWT）ベースの認証を使用します。 APIを呼び出す前にログインしてトークンを取得し、すべてのリクエストのAuthorizationヘッダーにトークンを含める必要があります。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-base-urls",
      children: "APIベースURL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "環境"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Base URL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Demo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://demo-afs-api.airfob.com/v1/",
              children: "https://demo-afs-api.airfob.com/v1/"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Production - Europe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://e-afs-api.airfob.com/v1/",
              children: "https://e-afs-api.airfob.com/v1/"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Production - Korea"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://a-afs-api.airfob.com/v1/%EF%BC%88EU%E4%BB%A5%E5%A4%96%E3%81%AE%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AE%E9%A1%A7%E5%AE%A2%E5%90%91%E3%81%91%EF%BC%89",
              children: "https://a-afs-api.airfob.com/v1/（EU以外のすべての顧客向け）"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-login-flow",
      children: "APIログイン手順"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.postman.com/",
        children: "Postman"
      }), " またはプログラムからAPI呼び出しを行うことができる。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "login",
      children: "ログイン"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Endpoint"
          }), "：", (0,jsx_runtime.jsx)(_components.code, {
            children: "login"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Payload"
          }), "："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\n  \"username\": \"your_email\",\n  \"password\": \"your_password\"\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bearerトークン（JWT）を返す。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-self-accounts",
      children: "アカウント情報の取得"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Endpoint"
          }), "：", (0,jsx_runtime.jsx)(_components.code, {
            children: "getSelfAccounts"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Authorization"
          }), "：Bearer Token"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "アクセス可能なサイトおよびアカウントの一覧を返す。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "login-to-account",
      children: "アカウントにログイン"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Endpoint"
          }), "：", (0,jsx_runtime.jsx)(_components.code, {
            children: "loginAccount"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Authorization"
          }), "：Bearer Token"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "特定サイトのトークンを返す。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getYourBearerToken",
      children: "ウェブブラウザでBearerトークンを取得する方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Postmanを使わずに、ブラウザの開発者ツールで直接Bearerトークンを取得できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chrome-edge",
      children: "Chrome/Edge（WindowsまたはMac）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ウェブブラウザで", (0,jsx_runtime.jsx)(Kbd, {
            children: "F12"
          }), "または", (0,jsx_runtime.jsx)(Kbd, {
            children: "Ctrl/Cmd + Shift + I"
          }), "を押す。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), " タブに移動する。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ページをリロードする。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API呼び出しを検索する。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["例: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "groups"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "login"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "リストからリクエストをクリックする。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Headers"
          }), "」タブに移動する。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["リクエストヘッダで", (0,jsx_runtime.jsx)(_components.code, {
            children: "Authorization: Bearer ..."
          }), "を探す。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "右クリックしてトークンをコピーしてください。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-chrome-develope.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safari",
      children: "Safari（Mac）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「開発者」メニューを有効にしてください。 Safari → Preferences → Advanced → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show Develop menu"
          }), "をチェックする。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Develop"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show Web Inspector"
          }), " に移動する。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), " タブに移動する。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ページをリロードする。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API呼び出しをフィルタリングして検査する。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["リクエストヘッダから", (0,jsx_runtime.jsx)(_components.code, {
            children: "Authorization: Bearer"
          }), "トークンをコピーする。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "ブラウザからコピーしたBearerトークンはPostmanで再利用できる。 常に最新のBearerトークンを使用してください。"
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