"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["97394"], {
84331: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_custom_interface_mdx_98a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-custom-interface-mdx-98a.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_custom_interface_mdx_98a_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-custom-interface","title":"クイックアクションを使用する","description":"設定したクイックアクションをメイン画面に追加します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-custom-interface.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-custom-interface","permalink":"/docs/ja/platform/biostar_x/settings-custom-interface","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-custom-interface.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-custom-interface","title":"クイックアクションを使用する","description":"設定したクイックアクションをメイン画面に追加します。","keywords":["クイックアクション","カスタムインターフェース"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"メールを設定する","permalink":"/docs/ja/platform/biostar_x/settings-email-setting"},"next":{"title":"サーバー設定","permalink":"/docs/ja/platform/biostar_x/settings-server"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-custom-interface.mdx


const frontMatter = {
	id: 'settings-custom-interface',
	title: 'クイックアクションを使用する',
	description: '設定したクイックアクションをメイン画面に追加します。',
	keywords: [
		'クイックアクション',
		'カスタムインターフェース'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "クイックアクションボタンを追加する",
  "id": "クイックアクションボタンを追加する",
  "level": 2
}, {
  "value": "クイックアクションボタンを編集する",
  "id": "クイックアクションボタンを編集する",
  "level": 2
}, {
  "value": "クイックアクションボタンを削除する",
  "id": "クイックアクションボタンを削除する",
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
  }, {Cmd, IcEditUL, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcEditUL) _missingMdxReference("IcEditUL", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.customInterface",
        product: "2"
      }), " メニューでクイックアクションボタンを追加すると、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " のメイン画面からクイックアクションボタンをクリックして複数のドアを一括制御します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["クイックアクションとして使用する", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.triggerAndAction",
          product: "2"
        }), "を追加するには、", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-triger-and-action",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "クイックアクションボタンを追加する",
      children: "クイックアクションボタンを追加する"
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
          children: ["画面左のサイドバーで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface",
            product: "2"
          }), "をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-custom-interface.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quickActionLayout",
            product: "2"
          }), " セクションで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), "ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "settings.customInterface.quickAction.add",
            product: "2"
          }), " ウィンドウが表示されたら、各項目を入力して設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/settings-custom-interface-add-quick-action.png",
          className: "none"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.operatorLevel",
                product: "2"
              }), "：追加するクイックアクションを実行できる", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.operatorLevel",
                product: "2"
              }), "を選択します。 複数選択できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.triggerAction",
                product: "2"
              }), "：実行する", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.triggerAction",
                product: "2"
              }), "を選択します。 複数選択できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "settings.customInterface.quickAction.confirmBeforeRun",
                product: "2"
              }), "：このオプションを有効にすると、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "common.quickAction",
                product: "2"
              }), " ボタンを押したときに実行の確認ポップアップが表示されます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右下の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 画面の右上ヘッダーエリアに、追加した", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.quickAction",
        product: "2"
      }), "ボタンが生成されます。 作成した", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.quickAction",
        product: "2"
      }), "ボタンをクリックして、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.triggerAndAction",
        product: "2"
      }), "で設定したとおりに動作するか確認します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/settings-custom-interface-main-quick-action.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.quickAction",
              product: "2"
            }), " ボタンは画面上部のヘッダーエリアに最大4個まで追加できます。 どのページでも使用できるよう固定されています。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザーに設定された", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.bioStarOperator",
              product: "2"
            }), "によって、使用できる", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.quickAction",
              product: "2"
            }), "ボタンが異なる場合があります。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "クイックアクションボタンを編集する",
      children: "クイックアクションボタンを編集する"
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
          children: ["画面左のサイドバーで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface",
            product: "2"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["編集するクイックアクションボタンの右側にある", (0,jsx_runtime.jsx)(IcEditUL, {}), "ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/settings-custom-interface-quick-action-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["編集用のポップアップが表示されたら、必要な項目を修正し", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更を保存するには、画面右下の", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "クイックアクションボタンを削除する",
      children: "クイックアクションボタンを削除する"
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
          children: ["画面左のサイドバーで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.customInterface",
            product: "2"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["削除するクイックアクションボタンの右側にある", (0,jsx_runtime.jsx)(IcTrash2, {}), "ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/settings-custom-interface-quick-action-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["削除確認ポップアップを確認し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), "をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/settings-custom-interface-confirm.png",
          className: "none"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["削除内容を反映するには、画面右下の", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "をクリックします。"]
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