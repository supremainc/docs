"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["36147"], {
98381: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_user_group_manage_mdx_0e0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-user-group-manage-mdx-0e0.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_user_group_manage_mdx_0e0_namespaceObject = JSON.parse('{"id":"platform/biostar_x/user-group-manage","title":"ユーザーグループを管理する","description":"ユーザーグループを活用し、管理効率と拡張性を高めて入退室制御運用を最適化します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/user-group-manage.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/user-group-manage","permalink":"/docs/ja/platform/biostar_x/user-group-manage","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/user-group-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"user-group-manage","title":"ユーザーグループを管理する","description":"ユーザーグループを活用し、管理効率と拡張性を高めて入退室制御運用を最適化します。","keywords":["ユーザー","グループ","アクセス制御"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ユーザー","permalink":"/docs/ja/platform/biostar_x/how-to-guide-user"},"next":{"title":"ユーザー登録","permalink":"/docs/ja/platform/biostar_x/add-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/user-group-manage.mdx


const frontMatter = {
	id: 'user-group-manage',
	title: 'ユーザーグループを管理する',
	description: 'ユーザーグループを活用し、管理効率と拡張性を高めて入退室制御運用を最適化します。',
	keywords: [
		'ユーザー',
		'グループ',
		'アクセス制御'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "グループの追加",
  "id": "group-additional",
  "level": 2
}, {
  "value": "最上位グループの作成",
  "id": "creating-a-higher-group",
  "level": 3
}, {
  "value": "下位グループの作成",
  "id": "creating-a-lower-group",
  "level": 3
}, {
  "value": "グループ名の変更",
  "id": "group-name-change",
  "level": 2
}, {
  "value": "グループの削除",
  "id": "group-deletion",
  "level": 2
}, {
  "value": "グループ別ユーザーを確認する",
  "id": "viewgroupuser",
  "level": 2
}, {
  "value": "グループリストの展開/折りたたみ",
  "id": "グループリストの展開折りたたみ",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーグループは共通の属性と権限を共有できます。 ユーザーがグループのメンバーになると、そのグループのすべての属性を自動で継承できます。 ユーザーは 1 つのユーザーグループにのみ所属できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "個々のユーザーごとに入退室権限を設定する代わりに、部署別または役割別のユーザーグループを作成して同一の権限を一括で適用できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "グループの入退室権限を修正すると、そのグループに属するすべてのユーザーに自動適用されるため、管理者の負担を軽減できます。 組織変更や新規プロジェクト発生時に迅速に権限を調整できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "グループ別の権限設定によって不要な入退室を防ぎ、セキュリティを向上できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "特定グループの入退室記録を個別に分析できるため、セキュリティ監査とログ管理が容易になります。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーグループは入退室グレードと連携し、入退室制限時間や制限区域などの詳細ポリシーを適用できます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "group-additional",
      children: "グループの追加"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "複数のユーザーを効率的に管理するためにグループを作成します。 ユーザーが所属する組織などの名前で登録すると便利に管理できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "グループ名はユーザーが所属する組織または部署名で登録すると管理が容易です。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "グループの下位グループは最大 8 階層まで順に作成できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ユーザーグループ名は最大 48 文字まで入力できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ユーザーグループ一覧でグループを選択すると、そのグループに属するユーザーだけをユーザー一覧に表示できます。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-a-higher-group",
      children: "最上位グループの作成"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側サイドバーの ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " タブで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.tree.userGroupRootName"
          }), " を選択し、右クリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-group-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.addNewGroup"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "グループが作成されたら、目的のグループ名を入力します。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-group-add-input.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-a-lower-group",
      children: "下位グループの作成"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側サイドバーの ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " タブで上位グループを選択し、右クリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-sub-group-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.addNewGroup"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "グループが作成されたら、目的のグループ名を入力します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "下位グループを作成する際は上位グループを選択する必要があり、最大 8 階層まで作成できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["グループを別のグループへドラッグして移動すると、対象グループの下位グループとして設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.tree.userGroupRootName"
            }), " へグループを移動すると、最上位グループとして設定できます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "group-name-change",
      children: "グループ名の変更"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーが所属するグループの名前を変更できます。 組織または部署名が変更された場合、グループ名も合わせて変更することを推奨します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側サイドバーの ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " 一覧で名前を変更するグループを選択し、右クリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-group-rename.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.renameGroup"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "目的のグループ名に変更します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.userGroup"
      }), " 一覧で変更内容を確認します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "ユーザーグループ名は最大 48 文字まで入力できます。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "group-deletion",
      children: "グループの削除"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーが所属するグループを削除できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側サイドバーの ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " 一覧で削除するグループを選択し、右クリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.deleteGroup"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-group-remove.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["確認メッセージが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.tree.dialog.delete.yes"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.userGroup"
      }), " 一覧で選択したグループが削除されたことを確認します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewgroupuser",
      children: "グループ別ユーザーを確認する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザーグループに所属するユーザーを確認できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " ページで、画面左側サイドバーから目的のユーザーグループを選択します。 選択したユーザーグループのユーザーが一覧に表示されます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-user-group-select-group-user.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "グループリストの展開折りたたみ",
      children: "グループリストの展開/折りたたみ"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ユーザーグループ一覧を展開または折りたたむことができます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.userGroup"
      }), " タブで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.tree.userGroupRootName"
      }), " を選択し、右クリックします。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.expandAll"
      }), " または ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.collapseAll"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-user-group-expand-collapse.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["グループ内に下位グループがある場合は、その下位グループを展開または折りたたむことができます。 上位グループを選択し、右クリックします。 ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.tree.contextMenu.expandBelow"
      }), " または ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.tree.contextMenu.collapseBelow"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-user-sub-group-expand-collapse.png"
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