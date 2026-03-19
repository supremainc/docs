"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["50646"], {
46243: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ manage_schedule_frontMatter),
  toc: () => (/* binding */ manage_schedule_toc),
  "default": () => (/* binding */ manage_schedule_MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_manage_schedule_mdx_870_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ manage_schedule_contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-manage-schedule-mdx-870.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_manage_schedule_mdx_870_namespaceObject = JSON.parse('{"id":"platform/biostar_air/manage-schedule","title":"スケジュールを管理する","description":"BioStar Airでドアとエレベーターへのアクセスを制御するために、スケジュールを作成して管理する方法です。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/manage-schedule.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/manage-schedule","permalink":"/docs/ja/platform/biostar_air/manage-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/manage-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-schedule","title":"スケジュールを管理する","description":"BioStar Airでドアとエレベーターへのアクセスを制御するために、スケジュールを作成して管理する方法です。","keywords":["スケジュール","管理","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"祝日グループを管理する","permalink":"/docs/ja/platform/biostar_air/manage-holiday-group"},"next":{"title":"出入レベルの管理性行する","permalink":"/docs/ja/platform/biostar_air/manage-access-level"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common/_add-schedule-item.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
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
          sid: "schedules_submenu",
          product: "air"
        }), " をクリックします。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["画面右上の", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_add_title",
          product: "air"
        }), "ボタンをクリックしてください。"]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-schedule.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_add_title",
          product: "air"
        }), " パネルが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_name",
          product: "air"
        }), " と ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_description",
          product: "air"
        }), "（オプション）を入力します。"]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-schedule-add.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_section_title_time_intervals",
          product: "air"
        }), " セクションで曜日と時間を選択します。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "たとえば、勤務時間を設定するには、月曜日から金曜日まで、午前9時から午後6時まで選択します。 逆に勤務時間外のスケジュールを設定するには、土曜日と日曜日、または毎日午後6時から翌朝午前9時まで選択します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["選択したスケジュールを適用するには、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "add_btn",
          product: "air"
        }), " ボタンをクリックします。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "schedule_section_title_holiday_time",
          product: "air"
        }), " セクションでスケジュールに適用する休日グループを選択し、時間を設定します。"]
      }), "\n", (0,jsx_runtime.jsx)(Image, {
        src: "/img/air/bsair-access-mng-schedule-add-holiday-group.png"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["休日グループを適用するには、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "add_btn",
          product: "air"
        }), " ボタンをクリックします。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["スケジュールを追加するには、", (0,jsx_runtime.jsx)(Cmd, {
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/manage-schedule.mdx


const manage_schedule_frontMatter = {
	id: 'manage-schedule',
	title: 'スケジュールを管理する',
	description: 'BioStar Airでドアとエレベーターへのアクセスを制御するために、スケジュールを作成して管理する方法です。',
	keywords: [
		'スケジュール',
		'管理',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const manage_schedule_contentTitle = undefined;

const assets = {

};




const manage_schedule_toc = [{
  "value": "スケジュールを追加",
  "id": "addSchedule",
  "level": 2
}, ...toc, {
  "value": "スケジュールを編集",
  "id": "editSchedule",
  "level": 2
}, {
  "value": "スケジュールを削除",
  "id": "deleteSchedule",
  "level": 2
}];
function manage_schedule_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirEdit, IcAirRemove, Image} = _components;
  if (!Cmd) manage_schedule_missingMdxReference("Cmd", true);
  if (!DocLink) manage_schedule_missingMdxReference("DocLink", true);
  if (!IcAirEdit) manage_schedule_missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) manage_schedule_missingMdxReference("IcAirRemove", true);
  if (!Image) manage_schedule_missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "スケジュールを作成して、特定の曜日と時間帯にドアやエレベーターへの入退室を許可または制限します。 祝日グループと併用すると、出入りルールをさらに細かく調整できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "祝日グループはスケジュールより優先されます。 常に出入りが必要なユーザーには、制限のないアクセス権を付与してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["祝日グループの設定の詳細については ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-holiday-group"
            }), " をご参照ください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドアにスケジュールを適用する方法の詳細については ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/managing-door-schedules"
            }), " をご参照ください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["エレベーターの各階での入退室を制御するスケジュール設定の詳細については ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-elevator"
            }), " をご参照ください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addSchedule",
      children: "スケジュールを追加"
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["入室を許可する開錠スケジュールと入室を制限する施錠スケジュールを追加して、ドアに適用できます。 ドアにスケジュールを適用する方法の詳細については ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/managing-door-schedules"
            }), " をご参照ください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["エレベーターの各階での入退室を制御するスケジュール設定の詳細については ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-elevator"
            }), " をご参照ください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editSchedule",
      children: "スケジュールを編集"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedules_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一覧から編集するスケジュールをクリックします。 または、スケジュールのチェックボックスをクリックして、一覧上部の ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "schedule_edit_title",
            product: "air"
          }), " パネルが表示されたら、必要な情報を変更するかスケジュールを編集します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-access-mng-schedule-edit.png"
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
      id: "deleteSchedule",
      children: "スケジュールを削除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "access_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "schedules_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一覧から削除するスケジュールのチェックボックスをクリックします。 1件以上のスケジュールを選択できます。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "スケジュールを削除すると、すべての関連セクションからスケジュールが削除されます。 例えば、ドアやエレベーターに適用されているスケジュールが削除されると、当該ドアやエレベーターにはもはやスケジュールが適用されません。"
      })
    })]
  });
}
function manage_schedule_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(manage_schedule_createMdxContent, {
      ...props
    })
  }) : manage_schedule_createMdxContent(props);
}
function manage_schedule_missingMdxReference(id, component) {
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