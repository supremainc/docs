"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["82442"], {
31413: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_linkpass_credentials_mdx_7d7_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-linkpass-credentials-mdx-7d7.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_linkpass_credentials_mdx_7d7_namespaceObject = JSON.parse('{"id":"platform/biostar_air/linkpass-credentials","title":"リンクパス クレデンシャル","description":"BioStar Airのクラウドベースのドア制御を通じて、ゲストの出入りや配達などアプリを使用しない一時的なユーザー向けにリンクパス クレデンシャルを発行および管理する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/linkpass-credentials.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/linkpass-credentials","permalink":"/docs/ja/platform/biostar_air/linkpass-credentials","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/linkpass-credentials.mdx","tags":[],"version":"current","frontMatter":{"id":"linkpass-credentials","title":"リンクパス クレデンシャル","description":"BioStar Airのクラウドベースのドア制御を通じて、ゲストの出入りや配達などアプリを使用しない一時的なユーザー向けにリンクパス クレデンシャルを発行および管理する方法を案内します。","keywords":["リンクパス","クレデンシャル","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"ユーザーのカードとクレデンシャルの種類","permalink":"/docs/ja/platform/biostar_air/user-card-types"},"next":{"title":"デバイス","permalink":"/docs/ja/platform/biostar_air/manage-device"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/linkpass-credentials.mdx


const frontMatter = {
	id: 'linkpass-credentials',
	title: 'リンクパス クレデンシャル',
	description: 'BioStar Airのクラウドベースのドア制御を通じて、ゲストの出入りや配達などアプリを使用しない一時的なユーザー向けにリンクパス クレデンシャルを発行および管理する方法を案内します。',
	keywords: [
		'リンクパス',
		'クレデンシャル',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "リンクパス認証情報の有効化",
  "id": "リンクパス認証情報の有効化",
  "level": 2
}, {
  "value": "ユーザーによるリンクパスの利用",
  "id": "ユーザーによるリンクパスの利用",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirEdit, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "リンクパス（LinkPass）は、BioStar Airでアプリなしで使用できるモバイルクレデンシャルです。 管理者はアプリのインストールやBLE/NFCを使用せずに、ユーザーにアクセス権を付与できます。 リンクパスはBioStar Airクラウドを介して動作し、安全なウェブリンクで有効化されるため、来訪者対応、配達、駐車場ゲートやロビーなどセキュリティレベルの低いドアでの使用に適しています。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "認証情報の範囲"
          }), "：リンクパスの認証情報は、ユーザーに割り当てられている他の認証情報と同じ出入口へのアクセスを許可します。 したがって、セキュリティレベルの高い区域へのアクセス権を持たないユーザーにリンクパスの認証情報を発行することは推奨されません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "アプリ不要"
          }), "：リンクパスはウェブブラウザで動作するため、モバイルアプリ、Bluetooth、またはNFC通信は不要です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "クラウドベースのアクセス"
          }), "：リンクパスのコマンドはBioStar Airのクラウドを通じて送信され、インターネットに接続されていればどこからでも有効化できます。 位置共有や位置追跡機能はありません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "デバイスの接続性"
          }), "：出入口デバイスでリンクパスが正しく動作するには、オンラインでありBioStar Airに接続されている必要があります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "推奨利用シーン"
          }), "：リンクパスは一時的な来訪者、配達、ロビーや駐車場ゲートなど、セキュリティレベルの低い区域での使用に適しています。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "リンクパス認証情報の有効化",
      children: "リンクパス認証情報の有効化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com/login",
            children: "BioStar Airのウェブサイト"
          }), "にログインします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["次のいずれかの方法で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_edit_header",
            product: "air"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_form_tab",
            product: "air"
          }), " の画面に移動してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["ユーザー一覧で既存ユーザーをクリックし、右上の ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_btn",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_btn",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "credential_detail",
            product: "air"
          }), " セクションに移動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input20",
            product: "air"
          }), " オプションを有効にします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-add-user-credential-credential-type-web.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "card_type_option4",
            product: "air"
          }), " のチェックボックスをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input8",
            product: "air"
          }), " に、ユーザーがクレデンシャルリンクを受け取るための固有の ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "メールアドレス"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "携帯電話番号"
          }), " を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-linkpass-credential.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["適切な ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column6",
            product: "air"
          }), " を選択し、ユーザーの ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column3",
            product: "air"
          }), " を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["クレデンシャルを発行するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_card_activate_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーに固有のリンクパスURLを含む招待状をメールまたはSMSで送信します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ユーザーによるリンクパスの利用",
      children: "ユーザーによるリンクパスの利用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メールまたはSMSで受け取ったユーザーは、モバイル端末でメッセージ内のリンクパスURLを開きます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ウェブページにはユーザーに割り当てられたすべてのドアが表示され、各ドアに ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "web_card_preview_button1",
            product: "air"
          }), " ボタンがあります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "web_card_preview_button1",
            product: "air"
          }), " をクリックすると、クラウドベースの開錠コマンドがリーダーに送信され、ドアを開くことができます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "リンクパスの使用にはBluetoothまたはNFC通信は必要ありません。"
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