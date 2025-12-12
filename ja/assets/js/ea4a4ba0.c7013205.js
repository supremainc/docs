"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8054"], {
33097: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_scheduled_lock_mdx_ea4_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-advanced-ac-scheduled-lock-mdx-ea4.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_scheduled_lock_mdx_ea4_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-advanced-ac-scheduled-lock","title":"スケジュールロック","description":"スケジュールロックの設定方法を案内します。 スケジュールロックは特定の時間にドアをロックする機能を提供します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-scheduled-lock.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-advanced-ac-scheduled-lock","permalink":"/docs/ja/platform/biostar_x/settings-advanced-ac-scheduled-lock","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-advanced-ac-scheduled-lock.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-advanced-ac-scheduled-lock","title":"スケジュールロック","description":"スケジュールロックの設定方法を案内します。 スケジュールロックは特定の時間にドアをロックする機能を提供します。","keywords":["高度なアクセス制御","スケジュールロック"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"火災警報","permalink":"/docs/ja/platform/biostar_x/settings-advanced-ac-fire-alarm"},"next":{"title":"スケジュール開放","permalink":"/docs/ja/platform/biostar_x/settings-advanced-ac-scheduled-unlock"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-scheduled-lock.mdx


const frontMatter = {
	id: 'settings-advanced-ac-scheduled-lock',
	title: 'スケジュールロック',
	description: 'スケジュールロックの設定方法を案内します。 スケジュールロックは特定の時間にドアをロックする機能を提供します。',
	keywords: [
		'高度なアクセス制御',
		'スケジュールロック'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "スケジュールロックの登録",
  "id": "addScheduledLockZone",
  "level": 2
}, {
  "value": "設定オプションの案内",
  "id": "setting",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
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
      children: "スケジュールロックの設定方法を案内します。 スケジュールロックは特定の時間にドアをロックする機能を提供します。 この機能は入退室制御を強化し、特定の時間帯に入退室を制限するのに役立ちます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["スケジュールロックの設定は", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.globalZone.local",
          product: "2"
        }), "モードのみ対応しています。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addScheduledLockZone",
      children: "スケジュールロックの登録"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "ページで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.setting"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左側のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.advancedAc.root"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addZone",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.scheduledLock",
            product: "2"
          }), "を選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), "をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), "セクションで追加するスケジュールロック機能の名前を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-schedule-lock.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), "セクションでスケジュールロック機能の詳細項目を設定します。 詳しくは ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setting",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.alarm",
            product: "2"
          }), "セクションでスケジュールロック違反発生時に実行する動作を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.forcedLock.bypass",
            product: "2"
          }), "セクションでスケジュールロックをバイパスできる入退室グループを選択します。 このグループに属するユーザーはスケジュールロックをバイパスできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["すべての設定が完了したら、画面下部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "common.alarm",
          product: "2"
        }), "セクションは、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.pause.doorselected",
          product: "2"
        }), "を設定すると使用できます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting",
      children: "設定オプションの案内"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "スケジュールロック設定の詳細項目は次のとおりです。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.activatedAndDeactivated",
            product: "2"
          }), "：設定を有効化または一時的に無効化できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.forcedLock.doorLockType",
            product: "2"
          }), "：入室デバイスのみをロックするか、入室デバイスと退室デバイスの両方をロックするように設定できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.doorselected",
            product: "2"
          }), "：スケジュールロック規則を適用するドアを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.schedule",
            product: "2"
          }), "：スケジュールを選択します。 目的のスケジュールがない場合は、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAddSchedule",
            product: "2"
          }), " をクリックして追加します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.globalZone.local",
              product: "2"
            }), "モードでは、複数のドアを選択してスケジュールロック機能を構成できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["スケジュール設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-schedule",
              children: "次のドキュメント"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
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