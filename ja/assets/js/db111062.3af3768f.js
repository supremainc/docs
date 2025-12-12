"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["20021"], {
17829: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_event_log_import_mdx_db1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-event-log-import-mdx-db1.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_event_log_import_mdx_db1_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-event-log-import","title":"イベントログの取得","description":"イベントログの取得方法について説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-event-log-import.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-event-log-import","permalink":"/docs/ja/platform/biostar_x/settings-event-log-import","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-event-log-import.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-event-log-import","title":"イベントログの取得","description":"イベントログの取得方法について説明します。","keywords":["イベント","ログ","インポート"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"作業条件と動作を設定する","permalink":"/docs/ja/platform/biostar_x/settings-triger-and-action"},"next":{"title":"アラームを設定する","permalink":"/docs/ja/platform/biostar_x/settings-alert"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-event-log-import.mdx


const frontMatter = {
	id: 'settings-event-log-import',
	title: 'イベントログの取得',
	description: 'イベントログの取得方法について説明します。',
	keywords: [
		'イベント',
		'ログ',
		'インポート'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "手動で取得",
  "id": "手動で取得",
  "level": 2
}, {
  "value": "外部ストレージから取得",
  "id": "外部ストレージから取得",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
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
      children: ["デバイスのログを ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " サーバーにインポートしてイベントを確認できます。 この機能は、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server",
        product: "2"
      }), " で ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "setting.server.logUploadType",
        product: "2"
      }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.manual",
        product: "2"
      }), " に設定した場合に使用できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.server.logUploadType",
          product: "2"
        }), " オプションの詳細は、", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-server-server#basic-setting",
          children: "以下のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "手動で取得",
      children: "手動で取得"
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
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.event.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.event.eventLogImport"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.eventLogImport.UpdateLog.label"
          }), " でログを取得する期間を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-event-log-from-device.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.eventLogImport.UpdateLog.dropdown.SinceLast",
                product: "2"
              }), "：最後に ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " サーバーに保存されたログの日付以降のログを取得します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.eventLogImport.UpdateLog.dropdown.All",
                product: "2"
              }), "：デバイスのすべてのログを取得します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "setting.eventLogImport.UpdateLog.dropdown.UserDefined",
                product: "2"
              }), "：ログを取得する開始日と終了日を選択できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ログを取得するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.updateLog",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "外部ストレージから取得",
      children: "外部ストレージから取得"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["外部ストレージ（USB）に保存されたイベントログを ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " にインポートできます。"]
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
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.event.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.event.eventLogImport"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.dataImport",
            product: "2"
          }), " で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.browse",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-event-log-import-data.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ローカルに保存されているデータファイル（", (0,jsx_runtime.jsx)(_components.em, {
            children: ".tgz"
          }), "）を選択します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "データファイルのインポートに成功すると、画面にメッセージが表示されます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["古いファームウェアバージョンのデバイスからエクスポートされたデータは ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " へインポートできません。 常に最新バージョンのファームウェアを使用してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "FaceStation F2、FaceStation 2、FaceLite、BioStation A2、BioStation 2、X-Station 2、BioStation 3 からエクスポートされたデータファイルのみインポートできます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " システムで設定したドア、エレベーター、ゾーンのイベントログ以外の場合、一部の情報が空欄で表示されることがあります。"]
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