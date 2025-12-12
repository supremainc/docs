"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["26250"], {
48460: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_mdx_eee_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-mdx-eee.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_mdx_eee_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details","title":"デバイス設定","description":"登録済みデバイスの詳細機能を設定および管理する方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details","permalink":"/docs/ja/platform/biostar_x/settings-device-details","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details","title":"デバイス設定","description":"登録済みデバイスの詳細機能を設定および管理する方法を説明します。","keywords":["設定","デバイス","デバイス情報"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"デバイス管理機能を利用する","permalink":"/docs/ja/platform/biostar_x/settings-device-using-functions"},"next":{"title":"基本情報を設定する","permalink":"/docs/ja/platform/biostar_x/settings-device-details-info"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details.mdx


const frontMatter = {
	id: 'settings-device-details',
	title: 'デバイス設定',
	description: '登録済みデバイスの詳細機能を設定および管理する方法を説明します。',
	keywords: [
		'設定',
		'デバイス',
		'デバイス情報'
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
    ol: "ol",
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
      children: "登録済みデバイスの詳細機能を設定および管理する方法を説明します。 デバイスの情報、ネットワーク、認証、高度な設定などの詳細を設定できます。 詳細は RS-485 の接続方式やデバイスの種類によって異なります。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "ページで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.root"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "デバイス一覧で詳細を設定したいデバイスをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各セクションの詳細項目を参照してデバイス情報を設定します。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.information",
                product: "2"
              }), "：デバイス名、グループ、タイムゾーン、ハードウェアおよびファームウェアのバージョンを確認および変更できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "settings-device-details-info",
                children: "次のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.network",
                product: "2"
              }), "：デバイスの TCP/IP、RS-485、サーバー通信などのネットワークを設定できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "settings-device-details-network",
                children: "次のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.authentication",
                product: "2"
              }), "：デバイスのユーザー認証に関するオプションを設定できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "settings-device-details-auth",
                children: "次のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.advanced",
                product: "2"
              }), "：マスター管理者、デバイス管理者、画面/サウンド、動作条件および動作などを設定できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "settings-device-details-advanced",
                children: "次のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.temperMask",
                product: "2"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.mask",
                product: "2"
              }), "：サーマルカメラおよびマスク使用に関する詳細項目を設定できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "settings-device-details-thermal-mask",
                children: "次のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.interphone",
                product: "2"
              }), "：IP インターフォンの使用に関する詳細項目を設定できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "settings-device-details-interphone",
                children: "次のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.info.rtsp",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Real Time Streaming Protocol"
              }), " (RTSP) ストリーミング用の詳細項目を設定できます。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
                href: "settings-device-details-rtsp",
                children: "次のドキュメント"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべての設定が完了したら、画面最下部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["複数のデバイス情報をまとめて編集することもできます。 2 台以上のデバイスを選択し、画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.batchEdit",
              product: "2"
            }), " をクリックします。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-setting-device-batch-edit.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["選択したデバイスの種類によって、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.batchEdit",
              product: "2"
            }), " ウィンドウに表示される詳細項目が異なる場合があります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["マスターデバイスとスレーブデバイスを同時に選択して一括編集をクリックすると、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authentication",
              product: "2"
            }), " と ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.displaySound",
              product: "2"
            }), " 項目の一部のみを変更できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.authenticationMode",
              product: "2"
            }), " は同一モデル名のデバイスを選択した場合にのみ一括編集できます。"]
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