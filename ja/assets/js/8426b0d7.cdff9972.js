"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["96603"], {
11356: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_biostation_2_a_event_log_mdx_842_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-device-biostation-2-a-event-log-mdx-842.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_device_biostation_2_a_event_log_mdx_842_namespaceObject = JSON.parse('{"id":"device/biostation_2a/event-log","title":"イベントログ","description":"デバイスで発生したイベントの履歴を確認する方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/device/biostation_2a/event-log.mdx","sourceDirName":"device/biostation_2a","slug":"/device/biostation_2a/event-log","permalink":"/docs/ja/device/biostation_2a/event-log","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_2a/event-log.mdx","tags":[],"version":"current","frontMatter":{"id":"event-log","title":"イベントログ","description":"デバイスで発生したイベントの履歴を確認する方法を説明します。","keywords":["検索","ログ","削除","使用量"],"isTranslationMissing":false},"sidebar":"biostation2a","previous":{"title":"設定","permalink":"/docs/ja/device/biostation_2a/settings"},"next":{"title":"トラブルシューティング","permalink":"/docs/ja/device/biostation_2a/troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/device/biostation_2a/event-log.mdx


const frontMatter = {
	id: 'event-log',
	title: 'イベントログ',
	description: 'デバイスで発生したイベントの履歴を確認する方法を説明します。',
	keywords: [
		'検索',
		'ログ',
		'削除',
		'使用量'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "イベントログを検索する",
  "id": "イベントログを検索する",
  "level": 2
}, {
  "value": "すべてのログを削除",
  "id": "すべてのログを削除",
  "level": 2
}, {
  "value": "ログの使用量を確認する",
  "id": "ログの使用量を確認する",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcBw, IcFw, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!IcFw) _missingMdxReference("IcFw", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスで発生したイベントの履歴を確認する方法を説明します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "イベントログを検索する",
      children: "イベントログを検索する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "条件を設定してログを検索できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), "を押してから、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_255",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_066",
            product: "dev"
          }), "を選択して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-eventlog.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["希望の項目を選択し、", (0,jsx_runtime.jsx)(IcFw, {}), "/", (0,jsx_runtime.jsx)(IcBw, {}), " ボタンを押して設定を変更します。 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "をクリックすると、条件に合ったログが画面に表示されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["前の画面に戻るには ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), " を押してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "すべてのログを削除",
      children: "すべてのログを削除"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "保存されているログをすべて削除できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), "を押してから、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_255",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_303",
            product: "dev"
          }), "を選択して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-eventlog1.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " を押して全ログを削除します。 前の画面に戻るには ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), " を押してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ログの使用量を確認する",
      children: "ログの使用量を確認する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ログの使用状況を確認できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu1.svg",
            ico: true,
            alone: true
          }), "を押してから、管理者権限の認証手段で認証してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_255",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_120",
            product: "dev"
          }), "を選択して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "をクリックします。 デバイスのログ使用量を確認します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs2a-eventlog2.png"
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