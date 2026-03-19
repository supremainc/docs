"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["5806"], {
58719: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ manage_access_level_frontMatter),
  toc: () => (/* binding */ manage_access_level_toc),
  "default": () => (/* binding */ manage_access_level_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_manage_access_level_mdx_c73_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ manage_access_level_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-manage-access-level-mdx-c73.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_manage_access_level_mdx_c73_namespaceObject = JSON.parse('{"id":"platform/biostar_air/manage-access-level","title":"出入レベルの管理性行する","description":"BioStar Airで出入レベルを作成および管理する方法です。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/manage-access-level.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/manage-access-level","permalink":"/docs/ja/platform/biostar_air/manage-access-level","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/manage-access-level.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-access-level","title":"出入レベルの管理性行する","description":"BioStar Airで出入レベルを作成および管理する方法です。","keywords":["出入レベル","管理","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"スケジュールを管理する","permalink":"/docs/ja/platform/biostar_air/manage-schedule"},"next":{"title":"フロアレベルを管理する","permalink":"/docs/ja/platform/biostar_air/manage-floor-level"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_add-access-level.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(_components.ol, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "access_menu",
          product: "air"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "access_levels_submenu",
          product: "air"
        }), " をクリックしてください。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "add_access_level",
          product: "air"
        }), " ボタンをクリックします。"]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-ac-level.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "add_access_level",
          product: "air"
        }), "パネルが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_name",
          product: "air"
        }), "と", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_description",
          product: "air"
        }), "(任意)を入力してください。"]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-ac-level-add.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "access_level_drawler_title_add_door_group",
          product: "air"
        }), " または ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "access_level_drawler_title_individual_door",
          product: "air"
        }), " セクションでドアグループまたは個別のドアを選択します。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "schedules_title",
          product: "air"
        }), "セクションで、アクセスレベルに適用するスケジュールを選択してください。 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "always_schedule",
          product: "air"
        }), "を選択して、制限のないアクセスを許可します。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["アクセスレベルを追加するには、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "save_btn",
          product: "air"
        }), " ボタンをクリックします。"]
      }), "\n"]
    }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/manage-access-level.mdx


const manage_access_level_frontMatter = {
	id: 'manage-access-level',
	title: '出入レベルの管理性行する',
	description: 'BioStar Airで出入レベルを作成および管理する方法です。',
	keywords: [
		'出入レベル',
		'管理',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const manage_access_level_contentTitle = undefined;

const assets = {

};




const manage_access_level_toc = [{
  "value": "出入レベルの追加",
  "id": "addAccessLevel",
  "level": 2
}, ...toc, {
  "value": "出入レベルの編集",
  "id": "editAccessLevel",
  "level": 2
}, {
  "value": "出入レベルの削除",
  "id": "deleteAccessLevel",
  "level": 2
}];
function manage_access_level_createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirEdit, IcAirRemove, Image} = _components;
  if (!Cmd) manage_access_level_missingMdxReference("Cmd", true);
  if (!IcAirEdit) manage_access_level_missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) manage_access_level_missingMdxReference("IcAirRemove", true);
  if (!Image) manage_access_level_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "出入レベルを使用してユーザーの入退室権限を細かく制御してください。 出入レベルは、誰がいつどこで入退室できるかを定義する重要な要素です。 出入レベルは以下の要素で構成されます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "出入口"
          }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "出入口グループ"
          }), ": 入退室を許可する場所"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "スケジュール"
          }), ": 入退室を許可する時間"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "休日グループ"
          }), ": 入退室を制限または調整する日付および期間"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーを追加する前に出入レベルを設定すると、ユーザー管理プロセスを簡素化できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addAccessLevel",
      children: "出入レベルの追加"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "出入レベルを使用して、出入口、スケジュール、および休日に基づいてユーザーの権限を設定できます。"
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editAccessLevel",
      children: "出入レベルの編集"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_levels_submenu",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["リストから編集する出入レベルをクリックしてください。 または、編集したい出入レベルのチェックボックスを選択し、リスト上部の ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-access-mng-ac-level-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_access_level",
            product: "air"
          }), " パネルが表示されたら、必要な情報を修正するか設定を変更してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteAccessLevel",
      children: "出入レベルの削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_levels_submenu",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "リストで削除する出入レベルのチェックボックスをクリックしてください。 1つ以上の出入レベルを選択できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一覧上部の", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["警告メッセージのウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_yes",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function manage_access_level_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(manage_access_level_createMdxContent, {
      ...props
    })
  }) : manage_access_level_createMdxContent(props);
}
function manage_access_level_missingMdxReference(id, component) {
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