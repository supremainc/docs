"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["81003"], {
67160: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_account_settings_mdx_6f8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-account-settings-mdx-6f8.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_account_settings_mdx_6f8_namespaceObject = JSON.parse('{"id":"platform/biostar_air/account-settings","title":"個人アカウントの設定","description":"BioStar Airのパスワード、通知、IPインターホンなどの個人アカウント設定の変更方法と、サイトからの退会およびアカウント削除の手順を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/account-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/account-settings","permalink":"/docs/ja/platform/biostar_air/account-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/account-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"account-settings","title":"個人アカウントの設定","description":"BioStar Airのパスワード、通知、IPインターホンなどの個人アカウント設定の変更方法と、サイトからの退会およびアカウント削除の手順を案内します。","keywords":["アカウント設定","プロフィール","通知","SIPインターホン","アカウント管理"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"管理者アカウントおよび役割の管理","permalink":"/docs/ja/platform/biostar_air/managing-administrators"},"next":{"title":"追加サイトの設定","permalink":"/docs/ja/platform/biostar_air/service-configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/account-settings.mdx


const frontMatter = {
	id: 'account-settings',
	title: '個人アカウントの設定',
	description: 'BioStar Airのパスワード、通知、IPインターホンなどの個人アカウント設定の変更方法と、サイトからの退会およびアカウント削除の手順を案内します。',
	keywords: [
		'アカウント設定',
		'プロフィール',
		'通知',
		'SIPインターホン',
		'アカウント管理'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "アカウント設定へのアクセス",
  "id": "accessAccountSettings",
  "level": 2
}, {
  "value": "アカウント情報の変更",
  "id": "changeAccountInfo",
  "level": 2
}, {
  "value": "通知設定",
  "id": "setAlertPreferences",
  "level": 2
}, {
  "value": "IPインターホンの設定",
  "id": "manageSIPIntercom",
  "level": 2
}, {
  "value": "退会またはアカウント削除",
  "id": "manageAccount",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirEdit, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "パスワードの変更、通知の受信方法の調整、IPインターホンの設定など、アカウントに関する個人設定を自分で管理できます。 サイトを退会したり、アカウントを永久に削除したりすることもできます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessAccountSettings",
      children: "アカウント設定へのアクセス"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "BioStar Air ポータル"
          }), "にログインします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "画面右上のユーザープロフィールアイコンをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ドロップダウンメニューで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-bs3-sip-account-settings.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " ウィンドウが表示されたら、必要なオプションを設定します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "account",
                product: "air"
              }), "：ユーザー名、パスワード、電話番号などを編集できます。 詳しくは", (0,jsx_runtime.jsx)(DocLink, {
                inner: "#changeAccountInfo"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "alerts.alerts",
                product: "air"
              }), "：通知の受信方法を設定できます。 詳しくは", (0,jsx_runtime.jsx)(DocLink, {
                inner: "#setAlertPreferences"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_intercom_title",
                product: "air"
              }), "：SIPインターホンの設定情報を管理できます。 詳しくは", (0,jsx_runtime.jsx)(DocLink, {
                inner: "#manageSIPIntercom"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "site_setting_tab_management",
                product: "air"
              }), "：サイトを退会するかアカウントを削除できます。 詳しくは", (0,jsx_runtime.jsx)(DocLink, {
                inner: "#manageAccount"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "changeAccountInfo",
      children: "アカウント情報の変更"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "account",
        product: "air"
      }), " タブでは、現在ログインしているユーザーの情報を変更できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-account-settings-account.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザーの名前、パスワード、電話番号を変更できます。 各項目の ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "session_timeout_label",
            product: "air"
          }), "：選択した時間が経過すると自動的にログアウトします。 希望の時間を選択します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setAlertPreferences",
      children: "通知設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alerts",
        product: "air"
      }), "：通知の受信方法を設定できます。 すべての通知を受信するには ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "all_service_alerts",
        product: "air"
      }), " オプションを有効にします。 不要な通知は個別に無効化できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-account-settings-alert-report.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "アプリ通知の受信を許可しているのに通知が届かない場合は、モバイルの設定を確認します。 iOSまたはAndroid端末でアプリ通知を許可する必要があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ユーザーはサービス通知の受信を拒否できます。拒否してもサービスの利用に制限はありません。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manageSIPIntercom",
      children: "IPインターホンの設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device_intercom_title",
        product: "air"
      }), " タブではSIPインターホンの設定情報を管理できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-device-bs3-sip-account-settings-intercom.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["SIPインターホン設定の詳細については", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/sip-intercom-for-biostation3"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manageAccount",
      children: "退会またはアカウント削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_tab_management",
        product: "air"
      }), " タブではサイトを退会するかアカウントを削除できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-account-settings-management.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "leave_site",
            product: "air"
          }), "：サイトを退会できます。 サイトを退会した後に再度サイトに参加するには、当該サイトの管理者から招待を受ける必要があります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "account_settings_option_3",
            product: "air"
          }), "：アカウントを永久に削除できます。 アカウントを削除すると、すべての個人情報と設定が永久に削除され、復元できません。"]
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