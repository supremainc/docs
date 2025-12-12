"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["41953"], {
68273: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_shift_schedule_mdx_28b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-rule-shift-schedule-mdx-28b.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_shift_schedule_mdx_28b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-shift-schedule","title":"週次勤務規則を設定する","description":"設定した日次勤務規則を基に、週単位の勤務規則を作成する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-shift-schedule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-shift-schedule","permalink":"/docs/ja/platform/biostar_x/tna-rule-shift-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-shift-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-shift-schedule","title":"週次勤務規則を設定する","description":"設定した日次勤務規則を基に、週単位の勤務規則を作成する方法を案内します。","keywords":["週次勤務規則"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"日次勤務規則を設定する","permalink":"/docs/ja/platform/biostar_x/tna-rule-shift-day"},"next":{"title":"その他の勤務規則を設定する","permalink":"/docs/ja/platform/biostar_x/tna-rule-shift-overtime"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-shift-schedule.mdx


const frontMatter = {
	id: 'tna-rule-shift-schedule',
	title: '週次勤務規則を設定する',
	description: '設定した日次勤務規則を基に、週単位の勤務規則を作成する方法を案内します。',
	keywords: [
		'週次勤務規則'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "設定オプションガイド",
  "id": "設定オプションガイド",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcTrash2, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["設定した ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.shift",
        product: "2",
        className: "normal"
      }), " を基に、週単位の勤務規則を作成する方法を案内します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "scheduleTemplate.addScheduleTemplate",
        product: "2",
        className: "bold"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.tna"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.scheduleTemplate",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.addScheduleTemplate",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-shift-schedule.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.addScheduleTemplate",
            product: "2"
          }), " 画面が表示されたら各項目を設定します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["設定を保存するには、画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.apply",
              product: "2"
            }), " をクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["続けて勤務スケジュールを追加する場合は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.applyAndAddShift",
              product: "2"
            }), "ボタンをクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["設定を保存した後、別の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "tab.scheduleTemplate",
              product: "2"
            }), " を追加する場合は ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "ta.apply_add_another",
              product: "2"
            }), " ボタンをクリックします。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "設定オプションガイド",
      children: "設定オプションガイド"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-tna-shift-schedule-adding.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.name",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.scheduleTemplate",
            product: "2",
            className: "normal"
          }), " の名前を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.description",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.scheduleTemplate",
            product: "2",
            className: "normal"
          }), " の説明を入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.type",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.scheduleTemplate",
            product: "2",
            className: "normal"
          }), " を ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.type.weekly",
            product: "2"
          }), " または ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.type.daily",
            product: "2"
          }), " 日別で設定できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.type.daily",
            product: "2"
          }), " を選択すると、繰り返し使用期間（", (0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.cycle",
            product: "2"
          }), "）を設定できます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-shift-schedule-adding-daily.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.weekendSetting",
            product: "2"
          }), "：週末として指定する曜日を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "scheduleTemplate.shift",
            product: "2"
          }), "：設定された ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2",
            className: "normal"
          }), " の一覧を確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["週別/日別スケジュール：設定した ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2",
            className: "normal"
          }), " をドラッグ＆ドロップで設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-shift-schedule-adding-drag-shift.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["月曜日から日曜日まで全てに適用する場合は、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "scheduleTemplate.copyAll",
                  product: "2"
                }), " ボタンをクリックします。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["適用した ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "tab.shift",
                  product: "2",
                  className: "normal"
                }), " を解除するには、", (0,jsx_runtime.jsx)(IcTrash2, {}), " ボタンをクリックします。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "shift.dayStartTimeExcessTime",
                  product: "2"
                }), " を設定した ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "tab.shift",
                  product: "2",
                  className: "normal"
                }), " を適用する場合、前日の超過許容時間を前日勤務規則の開始時刻より24時間以上前に設定することはできません。"]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "tna-rule-shift-overtime",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "日次勤務規則に残業時間規則を追加適用して柔軟な勤務規則を作成する方法を案内します。"
        })
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