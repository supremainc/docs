"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["41448"], {
64980: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_triger_and_action_mdx_188_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-triger-and-action-mdx-188.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_triger_and_action_mdx_188_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-triger-and-action","title":"作業条件と動作を設定する","description":"デバイス、ドア、ゾーンで特定のイベントが発生した際に、ユーザーが希望する動作をデバイスまたは BioStar X が実行するように設定できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-triger-and-action.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-triger-and-action","permalink":"/docs/ja/platform/biostar_x/settings-triger-and-action","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-triger-and-action.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-triger-and-action","title":"作業条件と動作を設定する","description":"デバイス、ドア、ゾーンで特定のイベントが発生した際に、ユーザーが希望する動作をデバイスまたは BioStar X が実行するように設定できます。","keywords":["作業","動作"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"スケジュールを設定する","permalink":"/docs/ja/platform/biostar_x/settings-schedule"},"next":{"title":"イベントログの取得","permalink":"/docs/ja/platform/biostar_x/settings-event-log-import"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-triger-and-action.mdx


const frontMatter = {
	id: 'settings-triger-and-action',
	title: '作業条件と動作を設定する',
	description: 'デバイス、ドア、ゾーンで特定のイベントが発生した際に、ユーザーが希望する動作をデバイスまたは BioStar X が実行するように設定できます。',
	keywords: [
		'作業',
		'動作'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "名前の入力",
  "id": "名前の入力",
  "level": 2
}, {
  "value": "スケジュール設定",
  "id": "スケジュール設定",
  "level": 2
}, {
  "value": "クイックアクションとして使用する",
  "id": "クイックアクションとして使用する",
  "level": 2
}, {
  "value": "デバイス、ドア、高度入退室制御の選択",
  "id": "select-device-door-advanced-ac",
  "level": 2
}, {
  "value": "作業条件イベントの設定",
  "id": "作業条件イベントの設定",
  "level": 2
}, {
  "value": "動作設定",
  "id": "動作設定",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcSet2, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSet2) _missingMdxReference("IcSet2", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイス、ドア、ゾーンで特定のイベントが発生した際に、ユーザーが希望する動作をデバイスまたは ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " が実行するように設定できます。"]
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
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.triggerAndAction.root"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.addTriggerAndAction",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-trigger-and-action.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "画面の案内に従って詳細項目を設定します。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-trigger-and-action-add.png"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "名前の入力",
          children: "名前の入力"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), "：作業条件と動作の名前を入力します。"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "スケジュール設定",
          children: "スケジュール設定"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.schedule",
            product: "2"
          }), "：作業条件と動作が適用されるスケジュールを設定します。"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "triggerAction.input",
                  product: "2"
                }), " を選択してユーザー定義条件を設定する際、希望するスケジュールがない場合は ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "button.plusAddSchedule",
                  product: "2"
                }), " をクリックして設定します。"]
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
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "クイックアクションとして使用する",
          children: "クイックアクションとして使用する"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quickAction",
            product: "2"
          }), " を設定すると、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " のメイン画面で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.quickAction",
            product: "2"
          }), " から複数のドアを一度に制御できます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.quickAction",
            product: "2"
          }), " チェックボックスをクリックします。"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["この機能は、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "triggerAction.schedule",
                  product: "2"
                }), " オプションが ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "Always"
                }), " のときのみ使用できます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.quickAction",
                  product: "2"
                }), " は ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "shell.header.setting"
                }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.menu.customInterface.root"
                }), " で設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.quickAction",
                  product: "2"
                }), " の詳細は ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-custom-interface",
                  children: "以下"
                }), " を参照してください。"]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "select-device-door-advanced-ac",
          children: "デバイス、ドア、高度入退室制御の選択"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["イベントシグナルを送信する項目を選択します。 各デバイスは複数選択でき、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " との接続が切れても独立して動作します。"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "高度入退室制御"
            }), " 項目は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "アドバンス"
            }), " 以上のライセンスでのみ使用できます。 ライセンスポリシーの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "以下"
            }), " を参照してください。"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "作業条件イベントの設定",
          children: "作業条件イベントの設定"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "条件イベントを設定します。 1 つ以上のイベントを選択する必要があります。"
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#select-device-door-advanced-ac",
              children: "前の手順"
            }), " で選択したオプションに応じて、それぞれ異なるイベントリストが有効になります。"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "動作設定",
          children: "動作設定"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["動作を実行するデバイスを選択します。 動作を実行するデバイス、ドア、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " の動作を選択できます。"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "triggerAction.action",
            product: "2"
          }), " セクションでは、選択した条件イベントが発生した際に送信するシグナルを設定できます。 ログをメールで受信するには、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " で設定できます。"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.device",
                  product: "2"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.door",
                  product: "2"
                }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "BioStar X"
                }), " タブをクリックすると、動作セクションの内容が変わります。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["メールサーバー情報を設定するには、", (0,jsx_runtime.jsx)(Cmd, {
                  children: "BioStar X"
                }), " タブで ", (0,jsx_runtime.jsx)(IcSet2, {}), " アイコンをクリックします。 ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "setting.triggerAction.smtpOption",
                  product: "2"
                }), " ウィンドウが表示されたら、メールサーバー情報を入力し、", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "button.apply",
                  product: "2"
                }), " をクリックします。 詳細は ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-email-setting#email-contents-setting",
                  children: "以下"
                }), " を参照してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "メールサーバー情報の詳細については、システム管理者にお問い合わせください。"
              }), "\n"]
            }), "\n"]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["すべての設定が完了したら、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.apply",
        product: "2"
      }), " ボタンをクリックしてください。"]
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