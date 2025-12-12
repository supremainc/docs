"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["41022"], {
33188: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_extendedmodule_installation_mdx_ce8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-extendedmodule-installation-mdx-ce8.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_extendedmodule_installation_mdx_ce8_namespaceObject = JSON.parse('{"id":"device/extendedmodule/installation","title":"インストール","description":"インストールに必要な全手順と接続例を提供します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/extendedmodule/installation.mdx","sourceDirName":"device/extendedmodule","slug":"/device/extendedmodule/installation","permalink":"/docs/ja/device/extendedmodule/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/extendedmodule/installation.mdx","tags":[],"version":"current","frontMatter":{"id":"installation","title":"インストール","description":"インストールに必要な全手順と接続例を提供します。","keywords":["ブラケット","電源","ネットワーク","入力","リレー","スタンドアロン","Secure I/O","Wiegand"],"isTranslationMissing":false},"sidebar":"extendedmodule","previous":{"title":"はじめに","permalink":"/docs/ja/device/extendedmodule/getting-started"},"next":{"title":"製品仕様","permalink":"/docs/ja/device/extendedmodule/product-specifications"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/extendedmodule/installation.mdx


const frontMatter = {
	id: 'installation',
	title: 'インストール',
	description: 'インストールに必要な全手順と接続例を提供します。',
	keywords: [
		'ブラケット',
		'電源',
		'ネットワーク',
		'入力',
		'リレー',
		'スタンドアロン',
		'Secure I/O',
		'Wiegand'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "BioStation 3に取り付ける",
  "id": "biostation-3に取り付ける",
  "level": 2
}, {
  "value": "BioStation 2aに取り付ける",
  "id": "biostation-2aに取り付ける",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "インストールに必要な全手順と接続例を提供します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "biostation-3に取り付ける",
      children: "BioStation 3に取り付ける"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "拡張モジュールを製品に取り付けるには、別売りの拡張ブラケットが必要です。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "拡張ブラケットの購入については、Suprema の販売店に問い合わせてください。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拡張ブラケットで拡張モジュールの装着位置を確認し、固定用ネジで拡張モジュールを取り付けます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm1.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用するケーブルを拡張モジュールに接続し、下部の溝に挿入して配線を整理します。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "図のように、MAIN USB ケーブルは内側に配置し、RS-232C ケーブルと RS-485 ケーブルは下部の溝から背面に出します。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SAMカードを使用する場合は、SAMカードスロットにSAMカードを装着してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm2.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "必要に応じて、下記で示した部分をニッパーやペンチで折って配線スペースを拡張できます。"
          }), (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/installation-bs3-extm3.svg",
            className: "none",
            alone: true
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拡張モジュール周辺の溝に合わせてシリコンゴムカバーを取り付けます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm4.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "IP65 等級を満たすには、ケーブルを接続した後、必ずシリコンゴムカバーを取り付ける必要があります。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "同梱の両面テープを拡張ブラケットの背面に貼り、製品を装着する位置に貼り付けた後、固定用ネジで拡張ブラケットをしっかり固定します。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm5.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "装置を設置する最適な高さは 136 cm です。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "装置を直射日光や紫外線が直接当たる場所に設置しないでください。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "利用者が顔認証を行う際に顔に直射日光が当たらないよう、設置位置を調整してください。"
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "拡張ブラケットの上に壁面ブラケットを配置し、固定用ネジでしっかり固定します。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm6.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "製品と MAIN USB ケーブルを接続し、ケーブルカバーを組み立てます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm7.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "IP65の防水・防塵等級を満たすには、製品とケーブルを接続した後、必ずケーブルカバーを使用してください。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "固定された壁面ブラケットに製品を取り付けます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm8.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "製品固定用ネジを締めて、製品と壁面ブラケットを組み立てます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs3-extm9.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "ブラケットと製品を組み立てる際は、セキュリティを向上させるため、製品固定用ネジの代わりに同梱のブラケット固定用ネジ（星形）を使用できます。"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "biostation-2aに取り付ける",
      children: "BioStation 2aに取り付ける"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "付属のドリルテンプレートを使用して、壁面ブラケットを取り付ける位置を決めます。 製品を取り付ける位置に固定用ネジで壁面ブラケットをしっかり固定します。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device1-bs2a.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "製品に MAIN USB ケーブルを接続し、拡張モジュールの装着位置を確認した後、固定用ネジで拡張モジュールを取り付けます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs2a-extm1.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用するケーブルを拡張モジュールに接続し、下部の溝に挿入して配線を整理します。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SAMカードを使用する場合は、SAMカードスロットにSAMカードを装着してください。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs2a-extm2.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ケーブルカバーを組み立てた後、固定された壁面ブラケットに製品を取り付けます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-bs2a-extm3.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "IP65の防水・防塵等級を満たすには、製品とケーブルを接続した後、必ずケーブルカバーを使用してください。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "製品固定用ネジを締めて、製品と壁面ブラケットを組み立てます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/installation-device3-bs2a.svg",
          className: "none",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "ブラケットと製品を組み立てる際は、セキュリティを向上させるため、製品固定用ネジの代わりに同梱のブラケット固定用ネジ（星形）を使用できます。"
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