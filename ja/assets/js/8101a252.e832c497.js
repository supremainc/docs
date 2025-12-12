"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["95836"], {
56298: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_setting_mdx_810_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-tna-rule-setting-mdx-810.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_tna_rule_setting_mdx_810_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tna-rule-setting","title":"勤務規則を設定する ","description":"勤務スケジュールを時間・日・週単位で設定し、勤怠管理規則を構成する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-setting.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tna-rule-setting","permalink":"/docs/ja/platform/biostar_x/tna-rule-setting","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tna-rule-setting.mdx","tags":[],"version":"current","frontMatter":{"id":"tna-rule-setting","title":"勤務規則を設定する ","description":"勤務スケジュールを時間・日・週単位で設定し、勤怠管理規則を構成する方法を案内します。","keywords":["勤務規則","勤怠管理"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"勤怠管理を使用","permalink":"/docs/ja/platform/biostar_x/tna"},"next":{"title":"時間ルールを設定する","permalink":"/docs/ja/platform/biostar_x/tna-rule-shift-paycode"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/tna-rule-setting.mdx


const frontMatter = {
	id: 'tna-rule-setting',
	title: '勤務規則を設定する ',
	description: '勤務スケジュールを時間・日・週単位で設定し、勤怠管理規則を構成する方法を案内します。',
	keywords: [
		'勤務規則',
		'勤怠管理'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "勤務スケジュール",
  "id": "勤務スケジュール",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "勤務スケジュールを時間・日・週単位で設定し、勤怠管理規則を構成する方法を案内します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "勤務規則を初めて登録する場合は、次の順序で設定します。"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.payCode",
            product: "2",
            className: "bold"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "勤怠記録管理、残業、欠勤に関する時間規則を設定できます。 時間当たりの重み付けを設定でき、ひと目でわかるように色を指定して表示できます。"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.payCode",
            product: "2",
            className: "normal"
          }), " の設定の詳細については ", (0,jsx_runtime.jsx)(_components.a, {
            href: "tna-rule-shift-paycode",
            children: "以下の文書"
          }), " を参照してください。"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "-1",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2",
            className: "bold"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "1日（24時間）単位の勤務規則を設定できます。 勤務規則には、時間別の時間規則設定、1日の開始時間設定、時間の丸め規則などが含まれます。"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.shift",
            product: "2",
            className: "normal"
          }), " の設定の詳細については ", (0,jsx_runtime.jsx)(_components.a, {
            href: "tna-rule-shift-day",
            children: "以下の文書"
          }), " を参照してください。"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "-2",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.scheduleTemplate",
            product: "2",
            className: "bold"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "設定された 1 日単位の勤務規則で週次勤務規則を設定します。 週別または日別で週次勤務規則を設定します。"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "tab.scheduleTemplate",
            product: "2",
            className: "normal"
          }), " の設定の詳細については ", (0,jsx_runtime.jsx)(_components.a, {
            href: "tna-rule-shift-schedule",
            children: "以下の文書"
          }), " を参照してください。"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "-3",
          children: (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "bold"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["日次勤務規則に残業時間規則を追加していない場合に便利に使用できます。 日次勤務規則で設定する残業は開始時刻と終了時刻を持ちますが、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2"
          }), " は所定勤務時間を超えた合計時間を計算します。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2"
          }), "は日別/週別/月別の総残業時間を管理する際に便利に使用でき、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2"
          }), "を設定すると、勤務規則に追加された残業時間規則の代わりに適用されます。"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "rule.rule",
            product: "2",
            className: "normal"
          }), " の設定の詳細については ", (0,jsx_runtime.jsx)(_components.a, {
            href: "tna-rule-shift-overtime",
            children: "以下の文書"
          }), " を参照してください。"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "勤務スケジュール",
          children: "勤務スケジュール"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "前のステップで設定した勤務スケジュールを適用する期間、ユーザー、その他の勤務規則、休暇日程を設定できます。"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "ta.schedule",
            product: "2",
            className: "normal"
          }), " の設定の詳細については ", (0,jsx_runtime.jsx)(_components.a, {
            href: "tna-rule-schedule",
            children: "以下の文書"
          }), " を参照してください。"]
        })]
      })]
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