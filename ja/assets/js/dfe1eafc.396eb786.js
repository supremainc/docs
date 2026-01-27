"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["20005"], {
21034: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_card_manage_mdx_dfe_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-credential-card-manage-mdx-dfe.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_card_manage_mdx_dfe_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-credential-card-manage","title":"カードを管理する","description":"カード発行状態の確認、Wiegandカードデータ形式の変更、CSNモバイルカードの削除履歴の管理方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-card-manage.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-credential-card-manage","permalink":"/docs/ja/platform/biostar_x/settings-credential-card-manage","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-credential-card-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-credential-card-manage","title":"カードを管理する","description":"カード発行状態の確認、Wiegandカードデータ形式の変更、CSNモバイルカードの削除履歴の管理方法を案内します。","keywords":["カード","管理"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"クレデンシャル管理","permalink":"/docs/ja/platform/biostar_x/settings-credential-manage"},"next":{"title":"Wiegandカード形式を設定する","permalink":"/docs/ja/platform/biostar_x/settings-credential-wiegand-format"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-card-manage.mdx


const frontMatter = {
	id: 'settings-credential-card-manage',
	title: 'カードを管理する',
	description: 'カード発行状態の確認、Wiegandカードデータ形式の変更、CSNモバイルカードの削除履歴の管理方法を案内します。',
	keywords: [
		'カード',
		'管理'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "カード管理",
  "id": "カード管理",
  "level": 2
}, {
  "value": "Wiegandカードデータ形式の変更",
  "id": "wiegandカードデータ形式の変更",
  "level": 2
}, {
  "value": "CSNモバイルカード削除時の管理指針",
  "id": "csnモバイルカード削除時の管理指針",
  "level": 2
}, {
  "value": "削除された CSN モバイルカードの個別管理",
  "id": "削除された-csn-モバイルカードの個別管理",
  "level": 3
}, {
  "value": "削除されたカードIDの再発行防止",
  "id": "削除されたカードidの再発行防止",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "カードの発行状態を確認し、Wiegandカードデータ形式を変更し、CSNモバイルカードの削除履歴を管理できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "カード管理",
      children: "カード管理"
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
            sid: "setting.menu.credential.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.card"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "カード一覧画面で登録済みカードを確認できます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-credentail-card.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画面左側の発行状態をクリックすると、カード発行状態別にフィルターできます。 カード発行状態は次のとおりです。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.unassignedCard",
            product: "2"
          }), "：ユーザーに割り当てられていないカードです。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.assignedCard",
            product: "2"
          }), "：特定ユーザーに割り当てられているカードです。 カード一覧で割り当てられたユーザーのIDと名前を確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.blacklistCard",
            product: "2"
          }), "：ブラックリスト登録されたカードです。 該当カード所持者は入退室認証できません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.deletedCsnMobileCard",
            product: "2"
          }), "：削除されたモバイル入退室カードです。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ユーザーのカードをブロックした場合は、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.blacklistCard",
          product: "2"
        }), " リストでカード情報を確認できます。 ブロックを解除するには、対象のカードを選択して ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.unblocked",
          product: "2"
        }), " をクリックします。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiegandカードデータ形式の変更",
      children: "Wiegandカードデータ形式の変更"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用中のWiegandカードデータ形式を一括で変更できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "すでにユーザーに割り当てられているカードのデータ形式も変更されるため注意してください。"
      })
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
            sid: "setting.menu.credential.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.card"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["カード一覧の右上にある ", (0,jsx_runtime.jsx)(IcMoreW, {}), " ボタンをクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.more.changeDataFormat",
            product: "2"
          }), " を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-card-change-card-type-btn.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.changeDataFormat.title",
            product: "2"
          }), " ウィンドウが表示されたら、変更したいカードデータ形式を ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.changeDataFormat.currentType",
            product: "2"
          }), " リストから選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-card-change-data-format.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更先のカードデータ形式を ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.card.changeDataFormat.targetType",
            product: "2"
          }), " リストから選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["カードデータ形式を変更するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "csnモバイルカード削除時の管理指針",
      children: "CSNモバイルカード削除時の管理指針"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " に Airfobポータルレギュラーサイトを連携して CSN モバイルカードを使用している場合、カード所持者がカードを削除しても、同じカードIDを他のユーザーに発行できる状態になっていました。 しかし、同じカードIDを他のユーザーに発行すると、既存のカード所持者も引き続き入退室が可能になる問題が発生します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "この問題を解決するために、CSNモバイルカードを削除した後に削除履歴を管理できる機能を提供します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "削除された-csn-モバイルカードの個別管理",
      children: "削除された CSN モバイルカードの個別管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["削除された CSN モバイルカードは ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.setting",
        product: "2"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.card",
        product: "2"
      }), " の ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.deletedCsnMobileCard",
        product: "2"
      }), " リストに記録されます。 リストでは ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.cardType",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "user.cardList.th.cardFormat",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.cardId",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.lastCardHolder",
        product: "2"
      }), " を確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-credentail-mobile-removed-card.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "削除されたカードidの再発行防止",
      children: "削除されたカードIDの再発行防止"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "削除履歴がある CSN モバイルカードを他のユーザーに発行しようとすると、処理は失敗します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["削除されたカードIDでカードを発行する場合は、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.card.deletedCsnMobileCard",
        product: "2"
      }), " リストから該当する CSN モバイルカードを除外した後にのみ発行できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-credentail-mobile-card-exclude.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.deletedCsnMobileCard",
          product: "2"
        }), " リストに含まれている CSN モバイルカードは ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.unassignedCard",
          product: "2"
        }), " リストからは削除できません。"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.unassignedCard",
          product: "2"
        }), " リストからカードを削除するには、まず ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.card.deletedCsnMobileCard",
          product: "2"
        }), " リストからカードを除外してから再試行してください。"]
      })]
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