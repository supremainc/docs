"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["73678"], {
15619: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_site_advanced_settings_mdx_49a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-site-advanced-settings-mdx-49a.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_site_advanced_settings_mdx_49a_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-advanced-settings","title":"高度設定","description":"BioStar Air サイトの高度な設定で、システムを組織の要件に合わせて構成してください。 タイムゾーン、勤怠管理、モバイル認証、リーダーとの互換性など、さまざまなオプションを設定できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/site-advanced-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-advanced-settings","permalink":"/docs/ja/platform/biostar_air/site-advanced-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-advanced-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"site-advanced-settings","title":"高度設定","description":"BioStar Air サイトの高度な設定で、システムを組織の要件に合わせて構成してください。 タイムゾーン、勤怠管理、モバイル認証、リーダーとの互換性など、さまざまなオプションを設定できます。","keywords":["高度な設定","構成する"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"基本情報を設定する","permalink":"/docs/ja/platform/biostar_air/site-basic-settings"},"next":{"title":"セキュリティの設定","permalink":"/docs/ja/platform/biostar_air/site-security-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/site-advanced-settings.mdx


const frontMatter = {
	id: 'site-advanced-settings',
	title: '高度設定',
	description: 'BioStar Air サイトの高度な設定で、システムを組織の要件に合わせて構成してください。 タイムゾーン、勤怠管理、モバイル認証、リーダーとの互換性など、さまざまなオプションを設定できます。',
	keywords: [
		'高度な設定',
		'構成する'
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
      children: "高度なオプションを設定して、BioStar Air を組織の業務環境に合わせて最適化してください。 タイムゾーンとサマータイムを設定し、勤怠管理を有効にし、モバイル認証方式やイベントログの表示方法を調整できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_submenu",
        product: "air"
      }), " をクリックします。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_tab_setting",
        product: "air"
      }), "：サイトの設定を構成できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-site-setting.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input4",
            product: "air"
          }), "：タイムゾーンはいつでも変更できます。 設定したタイムゾーンに従ってログとイベントを記録します。 詳細については、", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/daylight-saving-time"
          }), "を参照してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device_field_dst_usage",
              product: "air"
            }), "：特定地域で適用されるサマータイムを有効化または無効化できます。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input8",
            product: "air"
          }), "：勤怠管理（T&A）機能を有効化できます。 勤怠管理機能を有効化した後、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_setting",
            product: "air"
          }), " ボタンをクリックして詳細設定を構成してください。 詳細については、", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/configuring-ta"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_report",
            product: "air"
          }), "：勤怠レポート（T&A Report）を生成できます。 勤怠レポート機能を有効化した後、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tna_setting",
            product: "air"
          }), " ボタンをクリックしてレポート生成条件を構成してください。 詳細については、", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/reports-time-attendance-reports"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input7",
            product: "air"
          }), "：一定距離離れた出入口を遠隔で開けられるロングタッチ（Long Touch）機能を有効化できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_ble_background",
            product: "air"
          }), "：Suprema Passアプリがバックグラウンドモードのときにモバイルカードの使用を許可します。 この設定を有効化すると、ユーザーはアプリを開かなくてもドアを開けられます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "display_face_preview_setting",
            product: "air"
          }), "：顔クレデンシャル発行時に顔写真プレビューを表示できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input5",
            product: "air"
          }), "：イベントログの時刻表示方法を設定します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_time_display_setting1",
                product: "air"
              }), "：各デバイスの設定で構成したタイムゾーンに基づいてイベントログを表示します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "event_log_time_display_setting2",
                product: "air"
              }), "：サイトのタイムゾーンに従ってログを表示します。 すべてのデバイスが同一場所にあるサイトに適しています。 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "site_profile_input4",
                product: "air"
              }), " オプションを参照してください。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "new_setting_label_msb",
            product: "air"
          }), "：Airfob Patchをサードパーティ製リーダーと併用する際のカードデータ送信方法を設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "パッチデバイス専用の設定で、パッチを取り付けるサードパーティ製デバイスのタイプに合わせて設定できます。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "validity_period_label",
            product: "air"
          }), "：モバイルクレデンシャルのデフォルト有効期間を設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["管理者は個々のユーザーのクレデンシャルに対して個別の有効期限を設定できます。 詳細については、", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/adding-individual-users#setting-access-levels-and-validity"
            }), "を参照してください。"]
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