"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["42532"], {
59830: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_elevator_set_floor_access_mdx_698_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-elevator-set-floor-access-mdx-698.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_elevator_set_floor_access_mdx_698_namespaceObject = JSON.parse('{"id":"platform/biostar_air/elevator-set-floor-access","title":"階別アクセス権の設定","description":"エレベーターを登録し、ユーザーやグループごとにアクセス可能な階を設定してください。 階レベルを定義し、スケジュールと休日ポリシーを適用して、階ごとの入退室を制御します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/elevator-set-floor-access.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/elevator-set-floor-access","permalink":"/docs/ja/platform/biostar_air/elevator-set-floor-access","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/elevator-set-floor-access.mdx","tags":[],"version":"current","frontMatter":{"id":"elevator-set-floor-access","title":"階別アクセス権の設定","description":"エレベーターを登録し、ユーザーやグループごとにアクセス可能な階を設定してください。 階レベルを定義し、スケジュールと休日ポリシーを適用して、階ごとの入退室を制御します。","keywords":["階ごとのアクセス権","エレベーター","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"エレベーター管理","permalink":"/docs/ja/platform/biostar_air/elevator-add-edit-delete"},"next":{"title":"アクセス権限","permalink":"/docs/ja/platform/biostar_air/manage-access-authority"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/elevator-set-floor-access.mdx


const frontMatter = {
	id: 'elevator-set-floor-access',
	title: '階別アクセス権の設定',
	description: 'エレベーターを登録し、ユーザーやグループごとにアクセス可能な階を設定してください。 階レベルを定義し、スケジュールと休日ポリシーを適用して、階ごとの入退室を制御します。',
	keywords: [
		'階ごとのアクセス権',
		'エレベーター',
		'BioStar Air'
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
    blockquote: "blockquote",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "エレベーターを登録し、階レベルを定義して、ユーザーやグループがアクセスできる階を制限します。 各階レベルごとにアクセススケジュール（例：勤務時間内）と休日ポリシーを設定し、セキュリティと利便性を両立して管理できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "floor_levels_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "floor_levels_title_add_button",
            product: "air"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-add-floor.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_floor_levels_add_floors_title",
            product: "air"
          }), " パネルが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "floor_levels_list_column_name",
            product: "air"
          }), " と ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_floor_levels_description_column",
            product: "air"
          }), "(オプション) を入力します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "例：セキュリティチーム、清掃スタッフ"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-elevator-mng-add-floor-config.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "add_floor_levels_add_floors",
            product: "air"
          }), " セクションで階レベルを適用する階を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedules_label",
            product: "air"
          }), " セクションでアクセススケジュールを設定してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "例：清掃スタッフの場合は勤務時間外のみアクセスを許可します。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["必要に応じて、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "floor_levels_label_holiday_grp",
            product: "air"
          }), " を追加して特定の日のアクセスを制限します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["階レベルを追加するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["階レベルの追加・編集・削除の詳細は ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/manage-floor-level"
        }), "を参照してください。"]
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