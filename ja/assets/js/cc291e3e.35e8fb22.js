"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1509"], {
58411: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_change_db_mdx_cc2_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-change-db-mdx-cc2.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_change_db_mdx_cc2_namespaceObject = JSON.parse('{"id":"platform/biostar_x/change-db","title":"データベースを変更する ","description":"データベースの設定を変更できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/change-db.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/change-db","permalink":"/docs/ja/platform/biostar_x/change-db","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/change-db.mdx","tags":[],"version":"current","frontMatter":{"id":"change-db","title":"データベースを変更する ","description":"データベースの設定を変更できます。","keywords":["データベース"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ポートを変更する","permalink":"/docs/ja/platform/biostar_x/change-port"},"next":{"title":"補助データベースを追加する","permalink":"/docs/ja/platform/biostar_x/add-sub-db"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/change-db.mdx


const frontMatter = {
	id: 'change-db',
	title: 'データベースを変更する ',
	description: 'データベースの設定を変更できます。',
	keywords: [
		'データベース'
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
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, Start} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "データベースの設定を変更できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows で ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Service Manager"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Web ブラウザーで ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Service Manager"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            children: "SERVICES"
          }), " メニューをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべてのサービスで ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Stop"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-tutoria-service-manager-services-stop.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["すべてのサービスを一度に停止するには、", (0,jsx_runtime.jsx)(Cmd, {
              children: "Stop All"
            }), " ボタンをクリックします。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            children: "DATABASE"
          }), " メニューをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-tutoria-service-manager-database.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "データベース一覧から、設定を変更するデータベースを選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Database Server Configuration"
          }), " セクションで以下の設定を変更できます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostarx-tutoria-service-manager-database-configuration.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Name"
              }), "：データベース名を入力します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Description"
              }), "：データベースの説明を入力します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "DB Type"
              }), "：データベースの種類を選択します。 (MariaDB, MS SQL)"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Host"
              }), "：データベースサーバーのホスト名または IP アドレスを入力します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "Port"
              }), "：データベースサーバーのポート番号を入力します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                children: "AC"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                children: "TA"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                children: "Video"
              }), "：AC、TA、Video データベースの名前、ユーザー、パスワードを入力します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["データベースが正常に接続されているか確認するには、画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Test Connection"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには、画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Save"
          }), " ボタンをクリックします。"]
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