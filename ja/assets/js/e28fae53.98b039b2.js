"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["70319"], {
53434: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_connection_manager_mdx_e28_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-connection-manager-mdx-e28.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_connection_manager_mdx_e28_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-connection-manager","title":"デバイス接続管理を設定する","description":"BioStar Xで通信サーバーを介して多数のデバイスを接続し管理する方法を案内します。 最大3,000台のネットワークデバイスを複数のサーバーに分散して管理できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-connection-manager.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-connection-manager","permalink":"/docs/ja/platform/biostar_x/settings-device-connection-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-connection-manager.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-connection-manager","title":"デバイス接続管理を設定する","description":"BioStar Xで通信サーバーを介して多数のデバイスを接続し管理する方法を案内します。 最大3,000台のネットワークデバイスを複数のサーバーに分散して管理できます。","keywords":["デバイス接続マネージャー","Communication サーバー","設定"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"USB エージェントを設定する","permalink":"/docs/ja/platform/biostar_x/settings-device-usb-agent"},"next":{"title":"ドア管理","permalink":"/docs/ja/platform/biostar_x/settings-manage-door"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-connection-manager.mdx


const frontMatter = {
	id: 'settings-device-connection-manager',
	title: 'デバイス接続管理を設定する',
	description: 'BioStar Xで通信サーバーを介して多数のデバイスを接続し管理する方法を案内します。 最大3,000台のネットワークデバイスを複数のサーバーに分散して管理できます。',
	keywords: [
		'デバイス接続マネージャー',
		'Communication サーバー',
		'設定'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "主な機能",
  "id": "主な機能",
  "level": 2
}, {
  "value": "別のサーバーへデバイスを移動する",
  "id": "別のサーバーへデバイスを移動する",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " の ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.deviceConnectionManager.settingMenuTitle",
        product: "2"
      }), " は、企業や大型ビルで多数のデバイスを効率的に管理するために作られた機能です。 従来は1台のサーバーで最大1,000台のデバイスしか接続できませんでしたが、現在は ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Communication"
      }), " サーバーを複数のコンピューターにインストールすることで、最大3,000台のネットワークデバイスを管理できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["この機能は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Device Manager"
            }), " ライセンスを有効化すると利用できます。 ライセンスポリシーの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "以下"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Communication サーバーの仕様とインストールの詳細については次のドキュメントを参照してください。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "system-requirements#communication-server",
                  children: "Communication サーバーの仕様"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "install-communication-server",
                  children: "Communication サーバーのインストール案内"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "主な機能",
      children: "主な機能"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "サーバー拡張"
          }), "：メインコンピューター以外の追加コンピューターに通信サーバーをインストールし、より多くのデバイスを接続できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "複数サーバー運用"
          }), "：最大3台のサーバーを併用して合計3,000台のデバイスをサポートします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "便利なデバイス管理"
          }), "：新しいデバイスを追加する際に接続先サーバーを選択でき、既存デバイスを別のサーバーへ移動することもできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "大規模環境サポート"
          }), "：大規模な事業所や建物で必要とされる多数のデバイスを安定して運用できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Communication サーバーは、BioStar X の統合サーバーからデバイス接続機能のみを分離した専用サービスです。 デバイスとの安定した通信に特化し、システム全体のパフォーマンスを向上させます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "別のサーバーへデバイスを移動する",
      children: "別のサーバーへデバイスを移動する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "メインサーバーまたは別の Communication サーバーに登録されているデバイスを、別の Communication サーバーへ移動できます。 この機能により、デバイスの接続状態を維持したままサーバー間でデバイスを移動できます。"
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
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.device.deviceConnectionManager"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["左側の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.deviceConnectionManager.followerSelectLabel",
            product: "2"
          }), " 項目で、移動したいデバイスが登録されているサーバーを選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-connection-manager-01.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["右側の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.deviceConnectionManager.selectedSelectLabel",
            product: "2"
          }), " 項目で、デバイスを移動する宛先サーバーを選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-connection-manager-02.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "デバイス一覧から移動するデバイスを選択します。 複数のデバイスを選択できます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-connection-manager-03.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "特定のデバイスを検索するには、上部の入力フィールドにキーワードを入力します。 デバイス名やシリアル番号で検索できます。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスを宛先サーバーへ移動するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.deviceConnectionManager.moveButtonTitle",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-connection-manager-04.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メッセージウィンドウで移動するデバイス総数、TCP/IP 接続デバイス数、移動先サーバーの名前と IP アドレスを確認します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移動が完了すると、メッセージウィンドウで移動されたデバイス総数、TCP/IP 接続デバイス数、移動先サーバーの名前と IP アドレスを確認できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["移動に失敗したデバイスがある場合、メッセージウィンドウで失敗したデバイス数と TCP/IP 接続デバイス数を確認できます。 移動に失敗したデバイスの一覧と失敗理由を CSV ファイルで確認するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.download",
        product: "2"
      }), " ボタンをクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["接続された拡張サーバーがない場合、画面右側の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.deviceConnectionManager.selectedSelectLabel",
              product: "2"
            }), " は表示されません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "サーバーを選択すると、そのサーバーに登録されている Wiegand や RS-485 接続デバイスを含むすべてのデバイスを確認できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスまたはデバイスグループを選択すると、デバイスに接続された子デバイスやグループに含まれるデバイスも一緒に移動します。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "TCP/IP 通信で接続していないデバイスは移動できません。"
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