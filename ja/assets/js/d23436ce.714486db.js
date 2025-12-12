"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["58344"], {
30738: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_control_elevator_mdx_d23_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-control-elevator-mdx-d23.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_control_elevator_mdx_d23_namespaceObject = JSON.parse('{"id":"platform/biostar_x/control-elevator","title":"エレベーターを制御","description":"エレベーターを制御し、詳細情報を確認します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/control-elevator.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/control-elevator","permalink":"/docs/ja/platform/biostar_x/control-elevator","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/control-elevator.mdx","tags":[],"version":"current","frontMatter":{"id":"control-elevator","title":"エレベーターを制御","description":"エレベーターを制御し、詳細情報を確認します。","keywords":["モニタリング","エレベーター"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"スレーブ装置を制御する","permalink":"/docs/ja/platform/biostar_x/control-door-slave-device"},"next":{"title":"高度アクセス制御を操作する","permalink":"/docs/ja/platform/biostar_x/control-zone"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/control-elevator.mdx


const frontMatter = {
	id: 'control-elevator',
	title: 'エレベーターを制御',
	description: 'エレベーターを制御し、詳細情報を確認します。',
	keywords: [
		'モニタリング',
		'エレベーター'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "エレベーターを制御",
  "id": "エレベーターを制御",
  "level": 2
}, {
  "value": "アラーム解除",
  "id": "clear-alarm",
  "level": 3
}, {
  "value": "詳細情報確認",
  "id": "detail-view",
  "level": 3
}, {
  "value": "フロアアクセス制御",
  "id": "floor-access-control",
  "level": 2
}, {
  "value": "フロア解放",
  "id": "floor-open",
  "level": 3
}, {
  "value": "フロア解除",
  "id": "floor-unlock",
  "level": 3
}, {
  "value": "フロアロック",
  "id": "floor-lock",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "エレベーターを制御する方法を案内します。 提供されている機能を使用してエレベーターを制御したり、詳細情報を確認できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " をクリックするか、画面左上のショートカットリストから ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.arena"
          }), " を選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側のサイドバーにある ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.title"
          }), " タブで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.door.allElevatorGroups"
          }), " に移動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目的のグループのエレベーターを選択し、右クリックします。 ポップアップメニューで必要な機能を選択できます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["エレベーターの設定およびグループ構成の詳細については", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-manage-elevators",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "エレベーターを制御",
      children: "エレベーターを制御"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "エレベーターで発生したアラームを解除したり、詳細情報を確認できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-elevator-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clear-alarm",
      children: "アラーム解除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["該当エレベーターで発生したアラームを解除できます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.clearAlarm"
      }), " をクリックしてください。 画面右上に完了メッセージが表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detail-view",
      children: "詳細情報確認"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["エレベーターの詳細情報とイベント履歴を確認できます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.viewDetail"
      }), " をクリックしてください。 画面右側にエレベーターの詳細情報とイベント履歴が表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-elevator-details.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "エレベーターの詳細情報"
          }), "：エレベーターの名前、位置、状態などを確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.recentEvent"
          }), "：選択したエレベーターで発生した最近のイベント一覧を確認できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["エレベーター詳細情報セクションの各項目の詳細については", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-elevators-add",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "floor-access-control",
      children: "フロアアクセス制御"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "エレベーターで移動できる階を制御できます。 エレベーターに設定されている階のリレーをクリックし、右クリックします。 ポップアップメニューから目的の機能を選択します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-monitoring-door-elevator-floor-popup.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "floor-open",
      children: "フロア解放"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["解放状態の階は誰でも出入りできます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.unlock"
      }), " をクリックし、必要なオプションを選択してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockOnce"
          }), "：一度だけ階を解放します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.unlockPermanent"
          }), "：時間に関係なく階を解放します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["外部の来客がある場合に、選択した階を一時的に解放して便利に出入りできます。 階を解放した後は必ず ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "arena.tree.contextMenu.normalize"
        }), " 状態に戻します。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "floor-unlock",
      children: "フロア解除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["選択した階を ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " 状態に変更すると、許可されたユーザーのみが出入りできます。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.normalize"
      }), " をクリックしてください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "floor-lock",
      children: "フロアロック"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["選択した階を ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " 状態に変更すると、誰も出入りできません。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "arena.tree.contextMenu.lock"
      }), " をクリックします。"]
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