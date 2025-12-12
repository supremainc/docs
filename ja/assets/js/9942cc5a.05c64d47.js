"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["34172"], {
32126: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_interphone_mdx_994_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-interphone-mdx-994.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_interphone_mdx_994_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-interphone","title":"IPインターホンを設定する","description":"IPインターホンの使用に関する詳細設定方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-interphone.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-interphone","permalink":"/docs/ja/platform/biostar_x/settings-device-details-interphone","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-interphone.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-interphone","title":"IPインターホンを設定する","description":"IPインターホンの使用に関する詳細設定方法を説明します。","keywords":["デバイス","IPインターホン"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"熱画像とマスクを設定する","permalink":"/docs/ja/platform/biostar_x/settings-device-details-thermal-mask"},"next":{"title":"RTSP を設定する","permalink":"/docs/ja/platform/biostar_x/settings-device-details-rtsp"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-interphone.mdx


const frontMatter = {
	id: 'settings-device-details-interphone',
	title: 'IPインターホンを設定する',
	description: 'IPインターホンの使用に関する詳細設定方法を説明します。',
	keywords: [
		'デバイス',
		'IPインターホン'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "IPインターホンの設定",
  "id": "ip-interphone-settings",
  "level": 2
}, {
  "value": "内線番号の編集",
  "id": "edit-extension",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["この", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.interphone",
        product: "2"
      }), "セクションでは、IPインターホンの詳細項目を設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "この機能はBioStation 3、FaceStation 2、BioStation A2モデルでサポートされています。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザーが任意で変更した内容がある場合は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " をクリックします。 変更内容を保存しないとデバイスに反映されません。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ip-interphone-settings",
      children: "IPインターホンの設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["各オプションを設定して、デバイスを", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Session Initiation Protocol"
      }), "（SIP）サーバーに登録してください。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-ipinterphone.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.interphone",
            product: "2"
          }), "：デバイスをIPインターホンとして使用するには", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.enabled",
            product: "2"
          }), "に設定してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.ipAddr",
            product: "2"
          }), "：SIPサーバーのアドレスを入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.port",
            product: "2"
          }), "：SIPサーバーのポートを入力してください。 デフォルトは5060です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.account.new",
            product: "2"
          }), "：SIPアカウントのユーザー名を入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.password.new",
            product: "2"
          }), "：SIPアカウントのパスワードを入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.authorization.id",
            product: "2"
          }), "：SIPアカウントの認証IDを入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.registration.duration",
            product: "2"
          }), "：登録維持時間を秒単位で入力してください。 デバイスは登録維持時間が終了するたびにSIPサーバーへの登録を試みます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.doorOpenButton",
            product: "2"
          }), "：通話中にデバイスのドアを開けるためのボタンを指定してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.transport",
            product: "2"
          }), "：IPインターホンのSIPサーバー設定の際にSIPトランスポート方式を選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.outbound.proxy.server",
            product: "2"
          }), "：別の（アウトバウンド）プロキシサーバー経由でSIPサービスを使用する場合は", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.enabled",
            product: "2"
          }), "に設定してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.intercom.outbound.proxy.server.ipAddress",
                product: "2"
              }), "：アウトバウンドプロキシサーバーのアドレスを入力してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device.intercom.outbound.proxy.server.port",
                product: "2"
              }), "：アウトバウンドプロキシサーバーのポートを入力してください。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.resolution",
            product: "2"
          }), "：IPインターホン使用時に出力される映像の解像度を選択してください。 デフォルトは", (0,jsx_runtime.jsx)(Cmd, {
            children: "360 x 640"
          }), "です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.display",
            product: "2"
          }), "：デバイスで内線番号を表示しないようにするには", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.disable",
            product: "2"
          }), "に設定してください。 内線番号を表示しない場合、発信画面で受信者を識別できません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension",
            product: "2"
          }), "：最大128件の内線番号を登録できます。 内線番号を追加または編集するには", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.editBtn",
            product: "2"
          }), "ボタンをクリックしてください。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
            href: "#edit-extension",
            children: "次のドキュメント"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.account.new",
              product: "2"
            }), "と", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.authorization.id",
              product: "2"
            }), "オプションでは数字、英字（大文字・小文字区別）、特殊記号のみ入力できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.registration.duration",
              product: "2"
            }), "オプションは60秒から600秒の範囲で設定できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.transport",
              product: "2"
            }), "と", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.intercom.resolution",
              product: "2"
            }), "オプションはBioStation 3ファームウェア1.3.0以上でサポートされています。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Session Initiation Protocol"
            }), "（SIP）は、インターネット電話やビデオ会議など、さまざまなマルチメディア通信のためのインターネットプロトコルベースの通信プロトコルです。 SIPサーバーはこれらの通信を管理し、接続を確立する役割を担います。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edit-extension",
      children: "内線番号の編集"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.intercom.extension.popup.title",
        product: "2"
      }), "ウィンドウで提供される機能について説明します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-ipinterphone-extension.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.sendToTop",
            product: "2"
          }), "：選択した内線番号をリストの最上段へ移動できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.csvImport",
            product: "2"
          }), "：内線番号を保存したCSVファイルを読み込めます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.csvExport",
            product: "2"
          }), "：保存されている内線番号をCSVファイルにエクスポートできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.add",
            product: "2"
          }), "：内線番号を追加します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.extension.popup.delete",
            product: "2"
          }), "：内線番号を削除します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.intercom.list.reorder",
            product: "2"
          }), "：内線番号をドラッグして順序を変更します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation 2とBioStation A2モデルでは、内線番号を最大16件まで保存できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "サポート上限を超える数の内線番号が含まれるCSVファイルは読み込めません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "内線番号には数字、英字（大文字・小文字区別）、特殊記号のみ入力できます。"
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