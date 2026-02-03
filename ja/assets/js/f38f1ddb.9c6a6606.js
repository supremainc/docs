"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["13470"], {
23180: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_device_mdx_f38_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-monitoring-device-mdx-f38.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_monitoring_device_mdx_f38_namespaceObject = JSON.parse('{"id":"platform/biostar_x/monitoring-device","title":"デバイスをモニタリングする","description":"すべてのエリアと出入口に接続されたデバイスとカメラをリアルタイムでモニタリングします。 デバイスとカメラの状態チェック、詳細情報の確認、カメラ映像の再生など、さまざまな機能で効率的に管理できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-device.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/monitoring-device","permalink":"/docs/ja/platform/biostar_x/monitoring-device","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/monitoring-device.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-device","title":"デバイスをモニタリングする","description":"すべてのエリアと出入口に接続されたデバイスとカメラをリアルタイムでモニタリングします。 デバイスとカメラの状態チェック、詳細情報の確認、カメラ映像の再生など、さまざまな機能で効率的に管理できます。","keywords":["モニタリング","デバイス","カメラ"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"マップをモニタリングする","permalink":"/docs/ja/platform/biostar_x/monitoring-map"},"next":{"title":"ビデオをモニタリングする","permalink":"/docs/ja/platform/biostar_x/monitoring-video"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/monitoring-device.mdx


const frontMatter = {
	id: 'monitoring-device',
	title: 'デバイスをモニタリングする',
	description: 'すべてのエリアと出入口に接続されたデバイスとカメラをリアルタイムでモニタリングします。 デバイスとカメラの状態チェック、詳細情報の確認、カメラ映像の再生など、さまざまな機能で効率的に管理できます。',
	keywords: [
		'モニタリング',
		'デバイス',
		'カメラ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "デバイスおよびカメラの状態チェック",
  "id": "デバイスおよびカメラの状態チェック",
  "level": 2
}, {
  "value": "デバイス制御",
  "id": "デバイス制御",
  "level": 2
}, {
  "value": "デバイス再接続",
  "id": "デバイス再接続",
  "level": 3
}, {
  "value": "デバイス再起動",
  "id": "デバイス再起動",
  "level": 3
}, {
  "value": "デバイスロック",
  "id": "デバイスロック",
  "level": 3
}, {
  "value": "作業停止",
  "id": "作業停止",
  "level": 3
}, {
  "value": "デバイスの詳細表示",
  "id": "デバイスの詳細表示",
  "level": 3
}, {
  "value": "カメラ制御",
  "id": "カメラ制御",
  "level": 2
}, {
  "value": "カメラ映像の再生",
  "id": "カメラ映像の再生",
  "level": 3
}, {
  "value": "カメラの詳細表示",
  "id": "カメラの詳細表示",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcCamFail, IcCamOk, Image, StatusFail, StatusOK} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcCamFail) _missingMdxReference("IcCamFail", true);
  if (!IcCamOk) _missingMdxReference("IcCamOk", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusFail) _missingMdxReference("StatusFail", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスおよびカメラのモニタリング機能の使用方法を説明します。 デバイスとカメラの状態をチェックし、詳細情報を確認し、カメラ映像をリアルタイム再生するなど、さまざまな機能を利用できます。 さらに、最近発生したイベントを確認してデバイスとカメラの状態を効率的に管理する方法もご確認ください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " ページには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " をクリックするか、画面左上のショートカットリストから ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.title"
      }), " を選択してアクセスできます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイスおよびカメラの状態チェック",
      children: "デバイスおよびカメラの状態チェック"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["画面左側のサイドバーで", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.device.title"
      }), "タブをクリックします。 すべてのデバイスとカメラの状態をチェックできます。 デバイスとカメラの状態は以下を参照してください。"]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "col2--20-80 overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "ステータスアイコン"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(StatusOK, {})
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイスが正常に接続されています。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(StatusFail, {})
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "デバイスの電源がオフ、または接続が解除されています。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamOk, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラが接続されています。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(IcCamFail, {
                width: "auto",
                height: "35px"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "カメラの電源がオフ、または接続が解除されています。"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイス制御",
      children: "デバイス制御"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画面左側のサイドバーのデバイス一覧で目的のデバイスを選択し、右クリックします。 ポップアップメニューで必要な機能を選択できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-device-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "デバイス再接続",
      children: "デバイス再接続"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスの電源がオフまたは接続が解除されている場合は、ポップアップメニューで", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.reconnect"
      }), "をクリックします。 デバイスが再接続されると、ステータスアイコンが", (0,jsx_runtime.jsx)(StatusOK, {}), "に変わります。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.reconnect"
        }), "機能は、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "device.info.deviceToServerConnection",
          product: "2"
        }), "オプションで接続されたデバイスではサポートされません。 デバイス登録の詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-adding-devices#setipaddress",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "デバイス再起動",
      children: "デバイス再起動"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスを再起動するには、ポップアップメニューで", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.reboot"
      }), "をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "デバイスロック",
      children: "デバイスロック"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスをロックするには、ポップアップメニューで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.deviceLock"
          }), "をクリックします。 画面上部にデバイスロックが実行中であることを知らせるメッセージが表示されます。 ロックが完了するとメッセージが消えます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスロックを解除するには、ポップアップメニューで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.deviceUnlock"
          }), "をクリックします。 画面上部にデバイスロック解除が実行中であることを知らせるメッセージが表示されます。 ロック解除が完了するとメッセージが消えます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "作業停止",
      children: "作業停止"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["進行中の作業を停止するには、ポップアップメニューで", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.stopAction"
      }), "をクリックします。 画面上部に作業停止成功のメッセージが表示されます。 作業停止が完了するとメッセージが消えます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "デバイスの詳細表示",
      children: "デバイスの詳細表示"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスの詳細情報を確認するには、ポップアップメニューで", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), "をクリックします。 またはデバイスをダブルクリックします。 画面右側にデバイスの詳細情報が表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-device-details.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスのIDとグループ、モデル名、起動時間、IPアドレスなどの情報を確認できます。 下部の", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.recentEvent"
      }), "リストでは、最近発生したイベントを時系列の降順で確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "カメラ制御",
      children: "カメラ制御"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画面左側のサイドバーのカメラ一覧で目的のカメラを選択し、右クリックします。 ポップアップメニューで必要な機能を選択できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "カメラ映像の再生",
      children: "カメラ映像の再生"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ビデオタイルにカメラ映像を配置してリアルタイムにモニタリングするには、ポップアップメニューで", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.openVideo"
      }), "をクリックします。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "ビデオタイルにカメラ映像を追加する方法として、以下の方法もサポートしています。"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "画面左側のサイドバーのカメラ一覧で、映像を再生するカメラをダブルクリックします。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "カメラをビデオタイル領域にドラッグ＆ドロップして映像を追加することもできます。"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ビデオタイルは画面左上から順に追加され、現在の画面に追加スペースがない場合はエラーメッセージが表示されます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["映像の制御方法および映像に表示されるツールの詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-video",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "カメラの詳細表示",
      children: "カメラの詳細表示"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["カメラの詳細情報を確認するには、ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " をクリックしてください。 カメラのグループ、説明、ID、IPアドレスを確認できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-camera-details.png"
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