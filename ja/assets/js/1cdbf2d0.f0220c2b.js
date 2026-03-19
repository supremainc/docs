"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["39730"], {
65295: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_user_card_types_mdx_1cd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-user-card-types-mdx-1cd.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_user_card_types_mdx_1cd_namespaceObject = JSON.parse('{"id":"platform/biostar_air/user-card-types","title":"ユーザーのカードとクレデンシャルの種類","description":"BioStar Air 2.6 以上でサポートされるユーザーの種類（一般／一時）と各種類のクレデンシャルについて説明します。 一般ユーザーは Mobile Card、RF Card、QRコード、LinkPass、Face、PIN を使用でき、一時ユーザーはウェブベースの Dynamic QR Code と LinkPass を使用できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/user-card-types.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/user-card-types","permalink":"/docs/ja/platform/biostar_air/user-card-types","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/user-card-types.mdx","tags":[],"version":"current","frontMatter":{"id":"user-card-types","title":"ユーザーのカードとクレデンシャルの種類","description":"BioStar Air 2.6 以上でサポートされるユーザーの種類（一般／一時）と各種類のクレデンシャルについて説明します。 一般ユーザーは Mobile Card、RF Card、QRコード、LinkPass、Face、PIN を使用でき、一時ユーザーはウェブベースの Dynamic QR Code と LinkPass を使用できます。","keywords":["ユーザー管理","BioStar Air","ユーザーのカードタイプ"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"カードテンプレートの管理","permalink":"/docs/ja/platform/biostar_air/managing-card-templates"},"next":{"title":"リンクパス クレデンシャル","permalink":"/docs/ja/platform/biostar_air/linkpass-credentials"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/user-card-types.mdx


const frontMatter = {
	id: 'user-card-types',
	title: 'ユーザーのカードとクレデンシャルの種類',
	description: 'BioStar Air 2.6 以上でサポートされるユーザーの種類（一般／一時）と各種類のクレデンシャルについて説明します。 一般ユーザーは Mobile Card、RF Card、QRコード、LinkPass、Face、PIN を使用でき、一時ユーザーはウェブベースの Dynamic QR Code と LinkPass を使用できます。',
	keywords: [
		'ユーザー管理',
		'BioStar Air',
		'ユーザーのカードタイプ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "一般ユーザーのカードタイプ",
  "id": "regular-user-card-typs",
  "level": 2
}, {
  "value": "顔認証",
  "id": "face",
  "level": 3
}, {
  "value": "PIN",
  "id": "pin",
  "level": 3
}, {
  "value": "一時ユーザーのカードタイプ",
  "id": "temporary-user-card-typs",
  "level": 2
}, {
  "value": "アクセスレベルの管理",
  "id": "managing-access-levels",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air 2.6 以降、ユーザー管理を改善するために2種類のユーザータイプが導入されました。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_regular_card_type",
            product: "air"
          }), "：組織または施設の正規メンバーで、長期かつ継続的な入退室権限が必要なユーザーです。 すべてのクレデンシャルタイプを発行できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_temporary_card_type",
            product: "air"
          }), ": 短期かつ限定的な入退室権限を必要とする訪問者または非正規メンバーです。 ゲスト、外部来訪者、短期契約者、配達員などが該当します。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_form_input20",
            product: "air"
          }), " のクレデンシャルのみ発行でき、QRコードとLinkPassが含まれます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ユーザーを追加または編集する際のクレデンシャル発行に関する詳細は、", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/adding-individual-users#issuingCredentials"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "ユーザーとカードの種類に関するビデオガイドを視聴するには、以下の動画を参照してください。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "xTxIzG-30S0"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "regular-user-card-typs",
      children: "一般ユーザーのカードタイプ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一般ユーザーに発行できるクレデンシャルの種類は以下の通りです。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Suprema Pass アプリでのモバイルクレデンシャルの使い方については、", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/opening-doors-with-mobile-credentials"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mobileCard",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_type_mobile",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["固有の ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "カードID"
          }), " は自動割り当てされますが、手動で設定することもできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Tag"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Patch"
          }), " を使用する場合、モバイルカード番号をカードのシリアル番号として使用し、既存の出入管理システムと統合できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "既存システムとの互換性のため、モバイルカードIDは以前のサイトのRFカード番号と一致させることができます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rfCard",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_type_rf",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーごとに最大8枚のRFIDカードを追加できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["複数のカードが割り当てられる場合に管理を簡素化するため、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rf_card_type",
            product: "air"
          }), "(CSNまたはWiegand)、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "wiegand_card_id",
            product: "air"
          }), "、および ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rf_card_name",
            product: "air"
          }), " を構成できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["接続されたSupremaデバイスを使用して既存のRFIDカードをスキャンするには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "newest_rf_card_text_device",
            product: "air"
          }), " 項目でリーダーを選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既存のRFカードに ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "CSN"
          }), "（カードシリアル番号）がある場合、CSNを手動で入力できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qrCode",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_type_option3",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一般ユーザーはモバイルカードの ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "QRコード"
          }), " を使用できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "QRコードはモバイルカードのインターフェースのボタンを押して使用できます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linkPass",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_type_option4",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーのメールまたは携帯電話番号にウェブリンクを送信します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザーは受け取ったリンクをウェブブラウザで開き、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "web_card_preview_button1",
            product: "air"
          }), " ボタンをクリックして入退室できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["LinkPass クレデンシャルの詳細については、", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/linkpass-credentials"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "face",
      children: "顔認証"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーごとに最大2つの顔プロファイル画像を追加できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接続されたリーダーまたは画像アップロードで登録できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーにメールリンクを送信した後、モバイル端末のカメラで写真を撮影して登録できます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pin",
      children: "PIN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4～16桁のPINを設定し、2段階認証（2FA）の一部として使用できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "temporary-user-card-typs",
      children: "一時ユーザーのカードタイプ"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["一時ユーザーはモバイルまたはRFIDカードを受け取りません。 代わりに、アプリのダウンロードが不要な ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ウェブベースのクレデンシャル"
      }), " を発行できます。 利用できるオプションは以下の通りです。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "TempQrCode",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_type_option3",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メールまたはSMSで送信します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ウェブブラウザでアクセスできます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["セキュリティを強化するため、5分ごとに更新される ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dynamic QR Code"
          }), "（動的QRコード）を使用します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "TempLinkPass",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "card_type_option4",
        product: "air",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["メールまたはSMSでウェブリンクをユーザーに送信します。 ユーザーはウェブブラウザで", (0,jsx_runtime.jsx)(Cmd, {
        sid: "web_card_preview_button1",
        product: "air"
      }), " ボタンをクリックすると入退室できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["LinkPass クレデンシャルの詳細については、", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/linkpass-credentials"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "managing-access-levels",
      children: "アクセスレベルの管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["一般ユーザーであれ一時ユーザーであれ、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "アクセスレベル"
      }), "を設定してクレデンシャルが許可される場所を制御する必要があります。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "一時ユーザーの場合は、制限されたアクセスレベルを慎重に割り当て、無制限のアクセス権が付与されたクレデンシャルを付与しないよう注意してください。"
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