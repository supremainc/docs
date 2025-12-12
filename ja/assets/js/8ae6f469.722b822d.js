"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["85219"], {
86580: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_monitoring_mdx_8ae_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-ui-monitoring-mdx-8ae.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_monitoring_mdx_8ae_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ui-monitoring","title":"モニタリング","description":"モニタリングページのユーザーインターフェース (User Interface) を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-monitoring.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ui-monitoring","permalink":"/docs/ja/platform/biostar_x/ui-monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ui-monitoring.mdx","tags":[],"version":"current","frontMatter":{"id":"ui-monitoring","title":"モニタリング","description":"モニタリングページのユーザーインターフェース (User Interface) を案内します。","keywords":["モニタリング","UI"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ユーザー","permalink":"/docs/ja/platform/biostar_x/ui-user"},"next":{"title":"ダッシュボード","permalink":"/docs/ja/platform/biostar_x/ui-dashboard"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-monitoring.mdx


const frontMatter = {
	id: 'ui-monitoring',
	title: 'モニタリング',
	description: 'モニタリングページのユーザーインターフェース (User Interface) を案内します。',
	keywords: [
		'モニタリング',
		'UI'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Calloutlists, Cmd, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " ページのユーザーインターフェース (User Interface) を案内します。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " ページでは、扉、マップ、デバイスを基準にセキュリティ状態をリアルタイムでモニタリングできます。 また、リアルタイムで発生するイベントを確認し、必要な対応を行えます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.arena"
      }), " ページの UI コンポーネントは次のとおりです。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-ui-monitoring.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "検索入力フィールドにキーワードを入力して、デバイス、扉、カメラなど必要な項目を検索できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.door.title"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.map.title"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "arena.tree.device.title"
            }), " をグループ単位のツリー構造リストで確認し、モニタリングできます。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "arena.tree.door.title"
                }), " のモニタリングの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "monitoring-door",
                  children: "以下"
                }), " を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "arena.tree.map.title"
                }), " のモニタリングの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "monitoring-map",
                  children: "以下"
                }), " を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "arena.tree.device.title"
                }), " のモニタリングの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "monitoring-device",
                  children: "以下"
                }), " を参照してください。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-more-black.svg",
              ico: true,
              alone: true
            }), " ボタンをクリックすると、リストのツリー構造を展開または折りたたむことができます。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "arena.tree.expandAll"
                }), "：サイドメニューでグループ内のすべてのリストを展開して表示します。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "arena.tree.collapseAll"
                }), "：サイドメニューでグループ内のすべてのリストを折りたたんで非表示にします。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ビデオタイル"
            }), " では、扉、カメラ、エリアなどのリアルタイム映像またはマップを確認できます。 複数カメラの映像を同時に配置してモニタリングできます。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["カメラ映像のモニタリングの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "monitoring-video",
                  children: "以下"
                }), " を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["マップモニタリングの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "monitoring-map",
                  children: "以下"
                }), " を参照してください。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "コントロールパネル"
            }), " では、選択した扉またはデバイスの機能を制御できます。 詳細は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "control-door",
              children: "以下"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "イベントリスト"
            }), " では、リアルタイムで発生するイベントを時系列で確認できます。 イベントごとに詳細情報、状態、関連ユーザーおよびデバイス情報を確認し、必要に応じてすぐに対処できます。 詳細は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "monitoring-event",
              children: "以下"
            }), " を参照してください。"]
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