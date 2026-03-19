"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["86197"], {
54565: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ manage_holiday_group_frontMatter),
  toc: () => (/* binding */ manage_holiday_group_toc),
  "default": () => (/* binding */ manage_holiday_group_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_manage_holiday_group_mdx_56f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ manage_holiday_group_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-manage-holiday-group-mdx-56f.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_manage_holiday_group_mdx_56f_namespaceObject = JSON.parse('{"id":"platform/biostar_air/manage-holiday-group","title":"祝日グループを管理する","description":"祝日をグループ化して出入管理に適用する方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/manage-holiday-group.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/manage-holiday-group","permalink":"/docs/ja/platform/biostar_air/manage-holiday-group","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/manage-holiday-group.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-holiday-group","title":"祝日グループを管理する","description":"祝日をグループ化して出入管理に適用する方法を説明します。","keywords":["アクセス権管理","祝日グループ","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"アクセス権限","permalink":"/docs/ja/platform/biostar_air/manage-access-authority"},"next":{"title":"スケジュールを管理する","permalink":"/docs/ja/platform/biostar_air/manage-schedule"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_add-holiday-group.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
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
          sid: "holiday_groups_submenu",
          product: "air"
        }), " をクリックしてください。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "holiday_group_add_btn",
          product: "air"
        }), " ボタンをクリックします。"]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-holiday.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "holiday_group_add_title",
          product: "air"
        }), " パネルが表示されたら、グループ名を入力します。"]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-holiday-add.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "add_holidays_title",
          product: "air"
        }), " セクションで休日名と日付を指定し、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "add_btn",
          product: "air"
        }), " ボタンをクリックします。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["日付が固定された祝日を追加するには、名前と日付を設定し、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "holiday_group_checkbox_annually",
              product: "air"
            }), " オプションを選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["毎年繰り返されるが、一定期間を持つ休日の場合は、名前と日付を設定し、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "holiday_group_checkbox_duration",
              product: "air"
            }), " オプションを選択します。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "同じ方法で他の休日を追加します。"
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-holiday-add-new-day.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["休日グループの設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/manage-holiday-group.mdx


const manage_holiday_group_frontMatter = {
	id: 'manage-holiday-group',
	title: '祝日グループを管理する',
	description: '祝日をグループ化して出入管理に適用する方法を説明します。',
	keywords: [
		'アクセス権管理',
		'祝日グループ',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const manage_holiday_group_contentTitle = undefined;

const assets = {

};




const manage_holiday_group_toc = [{
  "value": "祝日グループを追加",
  "id": "祝日グループを追加",
  "level": 2
}, ...toc, {
  "value": "祝日グループを編集",
  "id": "祝日グループを編集",
  "level": 2
}, {
  "value": "祝日グループを削除",
  "id": "祝日グループを削除",
  "level": 2
}];
function manage_holiday_group_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAirEdit, IcAirRemove, Image, YouTube} = _components;
  if (!Cmd) manage_holiday_group_missingMdxReference("Cmd", true);
  if (!IcAirEdit) manage_holiday_group_missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) manage_holiday_group_missingMdxReference("IcAirRemove", true);
  if (!Image) manage_holiday_group_missingMdxReference("Image", true);
  if (!YouTube) manage_holiday_group_missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airでは、祝日グループは特定の日付や期間の間に出入ルールを調整するために使用されます。 祝日グループを設定すると、管理者は祝日や特別な日に出入権限を制限または変更できます。 これにより、セキュリティレベルを維持しながら柔軟な出入管理を実現できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "出入管理に関するビデオガイドを視聴するには、次の動画を参照してください。"
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "IkTP75lCHN4"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "祝日グループを追加",
      children: "祝日グループを追加"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "祝日グループは、毎年繰り返される祝日や特定期間の休日を定義し、その期間中に出入権限を制限または変更するために使用されます。"
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "祝日グループはスケジュールより優先されます。 常に出入りが必要なユーザーには、制限のないアクセス権を付与してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "1つのドアには、1つの祝日グループしか適用できません。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "祝日グループを編集",
      children: "祝日グループを編集"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "holiday_groups_submenu",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一覧から編集する祝日グループをクリックしてください。 または、祝日グループのチェックボックスをクリックして選択し、一覧の上部にある ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_holiday_group_title",
            product: "air"
          }), " パネルが表示されたら、希望の項目を編集してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-access-mng-holiday-edit.png"
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
      id: "祝日グループを削除",
      children: "祝日グループを削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "holiday_groups_submenu",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧で祝日グループのチェックボックスをクリックしてください。 1つ以上の祝日グループを選択できます。"
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
function manage_holiday_group_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(manage_holiday_group_createMdxContent, {
      ...props
    })
  }) : manage_holiday_group_createMdxContent(props);
}
function manage_holiday_group_missingMdxReference(id, component) {
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