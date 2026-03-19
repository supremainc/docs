"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["80982"], {
29187: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_user_groups_mdx_70e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-user-groups-mdx-70e.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_user_groups_mdx_70e_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-user-groups","title":"ユーザーグループを管理する","description":"BioStar Airでユーザーを効率的に分類し出入管理を行うために、ユーザーグループおよびサブグループの作成、構成、管理方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-user-groups.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-user-groups","permalink":"/docs/ja/platform/biostar_air/managing-user-groups","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-user-groups.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-user-groups","title":"ユーザーグループを管理する","description":"BioStar Airでユーザーを効率的に分類し出入管理を行うために、ユーザーグループおよびサブグループの作成、構成、管理方法を案内します。","keywords":["ユーザー管理","BioStar Air","ユーザーグループ"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"ユーザーを一括で追加する","permalink":"/docs/ja/platform/biostar_air/adding-users-in-bulk"},"next":{"title":"カードテンプレートの管理","permalink":"/docs/ja/platform/biostar_air/managing-card-templates"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-user-groups.mdx


const frontMatter = {
	id: 'managing-user-groups',
	title: 'ユーザーグループを管理する',
	description: 'BioStar Airでユーザーを効率的に分類し出入管理を行うために、ユーザーグループおよびサブグループの作成、構成、管理方法を案内します。',
	keywords: [
		'ユーザー管理',
		'BioStar Air',
		'ユーザーグループ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "開始する前に",
  "id": "開始する前に",
  "level": 2
}, {
  "value": "ユーザーグループの構成",
  "id": "ユーザーグループの構成",
  "level": 3
}, {
  "value": "複数のユーザーグループの構成",
  "id": "複数のユーザーグループの構成",
  "level": 3
}, {
  "value": "グループの作成",
  "id": "creatingUserGroup",
  "level": 2
}, {
  "value": "ユーザーグループの作成",
  "id": "ユーザーグループの作成",
  "level": 3
}, {
  "value": "サブグループの作成",
  "id": "creatingSubgroup",
  "level": 3
}, {
  "value": "グループ名の編集",
  "id": "editGroupName",
  "level": 2
}, {
  "value": "グループの削除",
  "id": "deleteGroup",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirEdit, IcAirRemove, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーグループを使って、組織の部署、役割、拠点などでユーザーを分類・管理してください。 BioStar Airのユーザーグループは階層化されていないため、ユーザーは複数のグループに同時に所属できます。部門グループや役割グループ、拠点グループなどを組み合わせて運用できます。 グループを活用すると、入退室レベルの一括管理に加え、イベントログのフィルタリング、レポート作成、集合エリアへのデバイス割り当てなども効率的に行えます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "ユーザーグループ管理のビデオガイドを視聴するには、以下のビデオを参照します。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "sNxu5pQuOsI"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "開始する前に",
      children: "開始する前に"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ユーザーグループの構成",
      children: "ユーザーグループの構成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーグループは階層的に構成されていません。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["サブグループのユーザーは", (0,jsx_runtime.jsx)(_components.strong, {
            children: "自動的に"
          }), "上位グループに表示されません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上位グループの総ユーザー数には、サブグループのメンバーは手動で追加しない限り含まれません。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "サブグループを選択すると、該当サブグループに割り当てられたユーザーのみが表示されます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "複数のユーザーグループの構成",
      children: "複数のユーザーグループの構成"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Airのユーザーは", (0,jsx_runtime.jsx)(_components.strong, {
        children: "複数のグループ"
      }), "に所属できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar 2では、ユーザーグループは通常単一の部門に紐づいていました。 BioStar Airではこれを分離し、より動的な方法で利用できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "グループごとにユーザー一覧をフィルターして出入レベルを素早く管理できます。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "例：人事部"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "複数の部門をまたがる状況に合わせたグループを作成できます。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "例：男性更衣室"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザーグループは", (0,jsx_runtime.jsx)(_components.strong, {
            children: "イベントログフィルター"
          }), "および", (0,jsx_runtime.jsx)(_components.strong, {
            children: "レポート作成"
          }), "に使用されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザーグループを", (0,jsx_runtime.jsx)(_components.strong, {
            children: "点呼招集場所"
          }), "用のデバイスまたはデバイスグループに割り当てて、特定の安全プロトコルを適用できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "この柔軟性により、重複するユーザー役割やアクセスシナリオをより簡単に管理できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creatingUserGroup",
      children: "グループの作成"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ユーザーグループの作成",
      children: "ユーザーグループの作成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "新しいユーザーグループを作成します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-gettingstarted-user-group-mng.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_group_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_group_popup_title",
            product: "air"
          }), " ウィンドウが表示されたら、ユーザーグループ名を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-gettingstarted-user-group-mng-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["グループを作成するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_grops_ok_btn",
            product: "air"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "グループを削除しても、当該グループに所属するユーザーは削除されません。 ユーザーはグループから解除されるだけです。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザーをグループに割り当てる方法の詳細は、", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/user-management-user-list#manageUserGroups"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creatingSubgroup",
      children: "サブグループの作成"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["サブグループを使ってユーザーグループをより細かく分類できます。 ただし、サブグループは", (0,jsx_runtime.jsx)(_components.strong, {
        children: "階層的ではありません"
      }), "。 つまり、サブグループのユーザーは親グループに自動的に含まれません。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_group_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_group_popup_title",
            product: "air"
          }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_sub_group_text",
            product: "air"
          }), " オプションをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-sub-group-popup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "select_group_placeholder",
            product: "air"
          }), " で親グループを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_subgroup_name_input",
            product: "air"
          }), " にグループ名を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["サブグループを作成するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_grops_ok_btn",
            product: "air"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "作成されたサブグループはユーザーグループ一覧で親グループの下にインデント表示されます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-user-sub-group-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editGroupName",
      children: "グループ名の編集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "既に作成されたユーザーグループの名前を編集できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧で編集するユーザーグループのチェックボックスをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザーグループ一覧の左上にある ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_user_group_btn",
            product: "air"
          }), " ウィンドウが表示されたら、グループ名を編集します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-edit-popup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["編集内容を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_grops_ok_btn",
            product: "air"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "グループ名の編集は、1つのグループを選択している場合にのみ行えます。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteGroup",
      children: "グループの削除"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用していないユーザーグループがある場合は削除できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧で削除するユーザーグループのチェックボックスをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザーグループ一覧の左上にある ", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-remove.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["警告メッセージが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_group_yes_btn",
            product: "air"
          }), " ボタンをクリックしてください。"]
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