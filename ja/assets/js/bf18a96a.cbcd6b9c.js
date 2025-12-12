"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["93450"], {
19800: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_data_automatic_report_schedule_mdx_bf1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-data-automatic-report-schedule-mdx-bf1.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_data_automatic_report_schedule_mdx_bf1_namespaceObject = JSON.parse('{"id":"platform/biostar_x/data-automatic-report-schedule","title":"自動生成スケジュールを設定する","description":"変動期間で作成したカスタムレポートを自動生成するようスケジュールを設定します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/data-automatic-report-schedule.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/data-automatic-report-schedule","permalink":"/docs/ja/platform/biostar_x/data-automatic-report-schedule","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/data-automatic-report-schedule.mdx","tags":[],"version":"current","frontMatter":{"id":"data-automatic-report-schedule","title":"自動生成スケジュールを設定する","description":"変動期間で作成したカスタムレポートを自動生成するようスケジュールを設定します。","keywords":["自動レポート","スケジュール"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"レポートを作成する ","permalink":"/docs/ja/platform/biostar_x/data-generate-reports"},"next":{"title":"レポート保存パスを設定する","permalink":"/docs/ja/platform/biostar_x/data-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/data-automatic-report-schedule.mdx


const frontMatter = {
	id: 'data-automatic-report-schedule',
	title: '自動生成スケジュールを設定する',
	description: '変動期間で作成したカスタムレポートを自動生成するようスケジュールを設定します。',
	keywords: [
		'自動レポート',
		'スケジュール'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "自動生成スケジュールを追加する",
  "id": "自動生成スケジュールを追加する",
  "level": 2
}, {
  "value": "情報を設定する",
  "id": "情報を設定する",
  "level": 3
}, {
  "value": "レポートとスケジュールを設定する",
  "id": "レポートとスケジュールを設定する",
  "level": 3
}, {
  "value": "レポート形式を設定する",
  "id": "レポート形式を設定する",
  "level": 3
}, {
  "value": "自動生成スケジュールを削除する",
  "id": "自動生成スケジュールを削除する",
  "level": 2
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["変動期間で作成した", (0,jsx_runtime.jsx)(Cmd, {
        sid: "reportApp.customReport",
        product: "2"
      }), "を自動生成するようスケジュールを設定します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自動生成スケジュールを追加する",
      children: "自動生成スケジュールを追加する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), " をクリックするか、画面左上のショートカットリストから ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), " を選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.mainMenu.schedule",
            product: "2"
          }), "タブをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.addSchedule",
            product: "2"
          }), "をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-auto-schedule-main.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "data.schedule.newSchedulePageTitle"
          }), "画面が表示されたら、各項目を設定します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "情報を設定する",
      children: "情報を設定する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自動生成スケジュールの基本情報を設定します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-information.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.scheduleName",
          product: "2"
        }), "：スケジュール名を入力します。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "レポートとスケジュールを設定する",
      children: "レポートとスケジュールを設定する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "レポートごとの自動生成スケジュールを設定します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-report-schedule.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.report",
            product: "2"
          }), "：自動生成するカスタムレポートを選択します。 変動期間に設定されたカスタムレポートのみ表示されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.frequency",
            product: "2"
          }), "：レポートを自動生成する周期を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.generateTime",
            product: "2"
          }), "：レポートを自動生成する時間を設定します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["カスタムレポートの作成について詳しくは、", (0,jsx_runtime.jsx)(_components.a, {
          href: "data-generate-reports#custom-report",
          children: "以下のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "レポート形式を設定する",
      children: "レポート形式を設定する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "レポートごとの形式を設定します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-data-report-format.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.outputType",
            product: "2"
          }), "：レポートの自動生成方式を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.reportTitle",
            product: "2"
          }), "：レポート名をすべてのページのタイトルとして表示するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.showTitle",
            product: "2"
          }), "を選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.header",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.showHeader",
            product: "2"
          }), "を選択すると、レポート生成時にヘッダーを表示できます。 ヘッダーをすべてのページに表示するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.onEveryPage",
            product: "2"
          }), "を選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "レポートごとに生成されるヘッダーは異なる場合があります。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.footer",
            product: "2"
          }), "：ページ番号を表示するかどうかを設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.fileFormat",
            product: "2"
          }), "：レポートを出力するファイル形式を設定します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["設定を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "reportApp.apply",
          product: "2"
        }), "をクリックします。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["すべての設定が完了したら、レポートを保存するパスを設定します。 詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "data-settings",
          children: "以下のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自動生成スケジュールを削除する",
      children: "自動生成スケジュールを削除する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), " をクリックするか、画面左上のショートカットリストから ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.data"
          }), " を選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "reportApp.mainMenu.schedule",
            product: "2"
          }), "タブをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自動スケジュール一覧で削除するスケジュールのチェックボックスをクリックします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-data-auto-schedule-remove-item.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.delete"
          }), "をクリックします。"]
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