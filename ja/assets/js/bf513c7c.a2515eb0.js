"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["65678"], {
91038: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_site_additional_settings_mdx_bf5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-site-additional-settings-mdx-bf5.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_site_additional_settings_mdx_bf5_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-additional-settings","title":"拡張機能の設定","description":"QRコードリーダー、IPカメラ連携、Webhookなど、BioStar Airの拡張機能を有効化して構成する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/site-additional-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-additional-settings","permalink":"/docs/ja/platform/biostar_air/site-additional-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-additional-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"site-additional-settings","title":"拡張機能の設定","description":"QRコードリーダー、IPカメラ連携、Webhookなど、BioStar Airの拡張機能を有効化して構成する方法を案内します。","keywords":["サイトの追加設定","追加設定"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"セキュリティの設定","permalink":"/docs/ja/platform/biostar_air/site-security-settings"},"next":{"title":"管理者アカウントおよび役割の管理","permalink":"/docs/ja/platform/biostar_air/managing-administrators"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/site-additional-settings.mdx


const frontMatter = {
	id: 'site-additional-settings',
	title: '拡張機能の設定',
	description: 'QRコードリーダー、IPカメラ連携、Webhookなど、BioStar Airの拡張機能を有効化して構成する方法を案内します。',
	keywords: [
		'サイトの追加設定',
		'追加設定'
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
    code: "code",
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
      children: "QRコードリーダーの利用可否、ONVIFカメラ連携、外部システムへのイベント送信（Webhook）など、サイト運営に必要な拡張機能を有効化または無効化できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_submenu",
        product: "air"
      }), " をクリックします。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_qr_reader_tab",
        product: "air"
      }), " タブで追加機能を有効化または無効化できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-site-additional-feature.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_qr_label",
            product: "air"
          }), "：QRコードリーダーをサポートします。 QRリーダーを使用しない場合は、該当オプションを無効にしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_video_management",
            product: "air"
          }), "：ONVIF互換のIPカメラをサポートします。 BioStar Airとビデオ監視を統合するには、この機能を有効化してください。 機能を有効化した後、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting_label",
            product: "air"
          }), " ボタンをクリックするとイベントログの再生時間を設定できます。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ビデオ管理の詳細については、", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/ip-camera-support-and-configuration"
            }), "をご参照ください。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_webhook_title",
            product: "air"
          }), "：Webhookを有効化して、BioStar Airのイベントを外部システムに送信できます。 この機能を有効化した後、以下の項目を設定してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-settings-site-additional-feature-webhook.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_webhook_url",
                product: "air"
              }), "：イベントを受信する外部サーバーのエンドポイントアドレスを入力してください。 例：", (0,jsx_runtime.jsx)(_components.code, {
                children: "https://example.com/webhook-endpoint"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_webhook_secret",
                product: "air"
              }), "：Webhookリクエストが信頼できる送信サーバーから送信されたかを検証するためのセキュリティトークンです。 発信サーバーはセキュリティキーを使用してデータ本文（Payload）をSHA256で暗号化し、ヘッダーに ", (0,jsx_runtime.jsx)(_components.code, {
                children: "X-Signature"
              }), " として送信します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_webhook_form_send_text",
                product: "air"
              }), "：Webhookが正しく動作するかどうかを確認できます。 テストメッセージを送信して外部サーバーがリクエストを受信し応答するかを検証してください。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["必要な情報をすべて入力したら、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "save_btn",
                  product: "air"
                }), " ボタンをクリックしてください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["入力した情報を初期化するには、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_button_reset",
                  product: "air"
                }), " ボタンをクリックしてください。"]
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