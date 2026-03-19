"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["99453"], {
418: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_e_200_qr_scanner_mdx_7b4_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-e-200-qr-scanner-mdx-7b4.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_e_200_qr_scanner_mdx_7b4_namespaceObject = JSON.parse('{"id":"platform/biostar_air/e200-qr-scanner","title":"E200 QRスキャナの配線と設定","description":"最適なパフォーマンスのために BioStar Air の配線と構成方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/e200-qr-scanner.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/e200-qr-scanner","permalink":"/docs/ja/platform/biostar_air/e200-qr-scanner","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/e200-qr-scanner.mdx","tags":[],"version":"current","frontMatter":{"id":"e200-qr-scanner","title":"E200 QRスキャナの配線と設定","description":"最適なパフォーマンスのために BioStar Air の配線と構成方法を案内します。","keywords":["配線","構成","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"SIO2 セキュリティモジュールの構成","permalink":"/docs/ja/platform/biostar_air/configuring-the-sio2-secure-module"},"next":{"title":"ネットワークポートとデバイスの特定","permalink":"/docs/ja/platform/biostar_air/site-setup-networking"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/e200-qr-scanner.mdx


const frontMatter = {
	id: 'e200-qr-scanner',
	title: 'E200 QRスキャナの配線と設定',
	description: '最適なパフォーマンスのために BioStar Air の配線と構成方法を案内します。',
	keywords: [
		'配線',
		'構成',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "ステップ 1: 配線",
  "id": "wiring",
  "level": 2
}, {
  "value": "ステップ 2: QRリーダーを有効化",
  "id": "enable-qr-reader",
  "level": 2
}, {
  "value": "ステップ 3: QRスキャナの構成",
  "id": "configure-qr-scanner",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "wiring",
      children: "ステップ 1: 配線"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下のように同梱のアダプターケーブルを使用して E200 シリーズの QRスキャナを接続します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["緑色の端子ブロックには ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1から4"
          }), " までラベルが付いたピンがあり、コネクタの正面を見たとき ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "右から左"
          }), " に並んでいます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "ピン"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "配線色"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "機能"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "黒"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Negative / Ground"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "2"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "赤"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Positive (V+)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "3"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "黄（白線）"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RS-485 TRXN"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "4"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "青 (白線)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RS-485 TRXP"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "他の多くのコネクタとは配線の向きが正反対です。 配線する前に向きをもう一度確認してください。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["QRスキャナ下部の CON ポートに 4ピンコネクタを接続します。 このコネクタは ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "極性"
          }), "（キー溝がある）ため、1方向にしか合いません。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/air-hardware-qr-reader-diagram.png",
          width: "80%",
          alone: true
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "enable-qr-reader",
      children: "ステップ 2: QRリーダーを有効化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "BioStar Air ポータル"
          }), "(Web またはアプリ)にログインします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧から E200 QRスキャナを接続した機器をクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "new_layout_nav_title_detail",
            product: "air"
          }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_editable_fields_qr_reader",
            product: "air"
          }), " オプションを有効にしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-details-qr-reader.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "QRリーダーを有効にすると、同じリーダーで他の RS-485 接続機器（例: SIO2）を使用できません。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configure-qr-scanner",
      children: "ステップ 3: QRスキャナの構成"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["デフォルトで ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "E200 QRスキャナ"
      }), " は ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "115,200"
      }), " の伝送速度に設定されています。 Suprema 機器で使用する場合は、伝送速度を ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "9,600"
      }), " に変更する必要があります。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["QRスキャナを機器に接続し、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "以下のバーコードをスキャン"
      }), "して新しい伝送速度を適用します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-hardware-qr-reader-barcode.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["配線が正しく、Suprema 機器がネットワークに接続されている場合、BioStar Air を通じて提供される ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ダイナミック QR クレデンシャル"
      }), " を使用できます。"]
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