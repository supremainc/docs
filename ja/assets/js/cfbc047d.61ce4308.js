"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["19133"], {
17025: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_shift_paycode_mdx_cfb_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-rule-shift-paycode-mdx-cfb.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_shift_paycode_mdx_cfb_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-shift-paycode","title":"時間ルールを設定する","description":"勤務時間の計算に使用する時間ルールの設定方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-shift-paycode.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-shift-paycode","permalink":"/docs/ja/platform/biostar_x/tna-rule-shift-paycode","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-shift-paycode.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-shift-paycode","title":"時間ルールを設定する","description":"勤務時間の計算に使用する時間ルールの設定方法を案内します。","keywords":["勤務時間","時間ルール"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"勤務規則を設定する ","permalink":"/docs/ja/platform/biostar_x/tna-rule-setting"},"next":{"title":"日次勤務規則を設定する","permalink":"/docs/ja/platform/biostar_x/tna-rule-shift-day"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-shift-paycode.mdx


const frontMatter = {
	id: 'tna-rule-shift-paycode',
	title: '時間ルールを設定する',
	description: '勤務時間の計算に使用する時間ルールの設定方法を案内します。',
	keywords: [
		'勤務時間',
		'時間ルール'
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["勤務時間の計算に使用する ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.payCode",
        product: "2",
        className: "normal"
      }), " の設定方法を案内します。 通常勤務用の時間ルール、残業用の時間ルール、不在用の時間ルールを設定できます。 各 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "tab.payCode",
        product: "2",
        className: "normal"
      }), " は時間当たりの重みを個別に設定して使用できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "payCode.addPayCode",
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
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.payCode",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "payCode.addPayCode",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-tna-shift-paycode.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "payCode.addPayCode",
            product: "2"
          }), " 画面が表示されたら、各項目を設定します。"]
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
            children: ["続けて ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "tab.shift",
              product: "2",
              className: "normal"
            }), " を追加する場合は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "payCode.applyAndAddShift",
              product: "2"
            }), " ボタンをクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["設定を保存した後に別の ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "tab.payCode",
              product: "2"
            }), " を追加する場合は、", (0,jsx_runtime.jsx)(Cmd, {
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
      src: "/img/biostarx-tna-shift-paycode-adding.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "form.name",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.payCode",
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
            sid: "tab.payCode",
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
            sid: "tab.payCode",
            product: "2",
            className: "normal"
          }), " の種類を選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "payCode.countAsAttendance",
                product: "2"
              }), "：通常勤務に使用する ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "tab.payCode",
                product: "2",
                className: "normal"
              }), " として設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "payCode.accumulateTowardOvertime",
                product: "2"
              }), "：残業に使用する ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "tab.payCode",
                product: "2",
                className: "normal"
              }), " として設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "payCode.trackOnLeaveManagement",
                product: "2"
              }), "：外出、外勤、出張、休暇などに使用する ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "tab.payCode",
                product: "2",
                className: "normal"
              }), " として設定します。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "payCode.timeRate",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.payCode",
            product: "2",
            className: "normal"
          }), " に応じた時間当たりの重みを設定します。 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1"
          }), " は基本の重みで、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "2"
          }), " に設定すると、設定された ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.payCode",
            product: "2",
            className: "normal"
          }), " が適用される際に勤務時間が時間当たり2倍で計算されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "payCode.color",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.payCode",
            product: "2",
            className: "normal"
          }), " を区別する色を設定します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "tna-rule-shift-day",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "1日（24時間）単位の勤務規則を設定できます。 勤務規則には、時間別の時間規則設定、1日の開始時間設定、時間の丸め規則などが含まれます。"
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