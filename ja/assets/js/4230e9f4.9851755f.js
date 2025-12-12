"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["54177"], {
5738: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_intrusion_alarm_mdx_423_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-advanced-ac-intrusion-alarm-mdx-423.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_intrusion_alarm_mdx_423_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-advanced-ac-intrusion-alarm","title":"警備","description":"警備設定の方法を案内します。 警備機能は、侵入を検知した際にドアをロックしたりアラームを発生させたりする機能を提供します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-intrusion-alarm.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-advanced-ac-intrusion-alarm","permalink":"/docs/ja/platform/biostar_x/settings-advanced-ac-intrusion-alarm","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-advanced-ac-intrusion-alarm.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-advanced-ac-intrusion-alarm","title":"警備","description":"警備設定の方法を案内します。 警備機能は、侵入を検知した際にドアをロックしたりアラームを発生させたりする機能を提供します。","keywords":["高度なアクセス制御","警備"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"スケジュール開放","permalink":"/docs/ja/platform/biostar_x/settings-advanced-ac-scheduled-unlock"},"next":{"title":"インターロック","permalink":"/docs/ja/platform/biostar_x/settings-advanced-ac-interlock"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-intrusion-alarm.mdx


const frontMatter = {
	id: 'settings-advanced-ac-intrusion-alarm',
	title: '警備',
	description: '警備設定の方法を案内します。 警備機能は、侵入を検知した際にドアをロックしたりアラームを発生させたりする機能を提供します。',
	keywords: [
		'高度なアクセス制御',
		'警備'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "警備登録",
  "id": "addIntrusionAlarmZone",
  "level": 2
}, {
  "value": "設定オプションの案内",
  "id": "setting",
  "level": 2
}, {
  "value": "警備開始または解除の設定",
  "id": "armConfiguration",
  "level": 2
}, {
  "value": "デバイスによる警備開始/解除の追加",
  "id": "addArmInput",
  "level": 3
}, {
  "value": "入力信号による警備開始/解除の追加",
  "id": "addArmInputBySignal",
  "level": 3
}, {
  "value": "侵入検知設定",
  "id": "intrusionSetting",
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
  }, {Cmd, Glossary, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Glossary) _missingMdxReference("Glossary", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "警備設定の方法を案内します。 警備設定は、侵入を検知した際にドアをロックしたりアラームを発生させたりする機能を提供します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(Glossary, {
        termid: "intrusion_alarm_zone"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addIntrusionAlarmZone",
      children: "警備登録"
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
            sid: "zone.intrusion",
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
          }), " セクションで追加する警備設定の名前を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-intrusion.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), " セクションで警備設定の詳細項目を設定します。 詳しくは ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setting",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.armConfiguration",
            product: "2"
          }), " セクションで警備開始と解除の認証設定を追加します。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
            href: "#armConfiguration",
            children: "次のドキュメント"
          }), "を参照してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-intrusion-set-arm.png"
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "zone.intrusion.armConfiguration",
              product: "2"
            }), " セクションは、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.info",
              product: "2"
            }), " セクションでドアを選択したときに表示されます。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.intrusionSetting",
            product: "2"
          }), " セクションで侵入検知信号を設定します。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
            href: "#intrusionSetting",
            children: "次のドキュメント"
          }), "を参照してください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-intrusion-set-intrusion.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.alarm",
            product: "2"
          }), " セクションで特定のイベントが発生したときに実行する動作を設定します。"]
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
          sid: "zone.intrusion.armConfiguration",
          product: "2"
        }), " と ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.intrusion.intrusionSetting",
          product: "2"
        }), "、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.alarm",
          product: "2"
        }), " セクションは、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.setting",
          product: "2"
        }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.pause.doorselected",
          product: "2"
        }), " オプションを設定すると使用できます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting",
      children: "設定オプションの案内"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "警備設定のための詳細項目は以下のとおりです。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone",
            product: "2"
          }), "：適用範囲を設定します。 警備設定は ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone.local",
            product: "2"
          }), " モードのみをサポートし、入室デバイスと RS-485 で接続されたデバイスでのみ設定できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.activatedAndDeactivated",
            product: "2"
          }), "：設定を有効化または一時的に無効化できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.pause.doorselected",
            product: "2"
          }), "：警備機能を適用するドアを選択します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "armConfiguration",
      children: "警備開始または解除の設定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "警備開始と解除の認証設定を追加できます。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-adv-ac-add-intrusion-set-arm.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.delayTime",
            product: "2"
          }), "：警備開始または警備解除までの遅延時間を設定できます。 つまり、開始は認証後から警備開始までの遅延時間であり、解除は侵入検知後からアラームが発生するまでの遅延時間です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.accessCard",
            product: "2"
          }), "：警備開始または解除の権限を付与したカードを追加できます。 警備/解除カードは最大128枚まで登録できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.accessGroup",
            product: "2"
          }), "：警備開始または解除の権限を付与したグループを選択できます。 警備/解除グループは最大128件まで登録できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.intrusion.armInput",
            product: "2"
          }), "：デバイスによる警備開始/解除または入力信号による警備開始/解除を設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " をクリックし、各項目を設定します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addArmInput",
      children: "デバイスによる警備開始/解除の追加"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["「", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armInput",
        product: "2"
      }), "」（", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.device",
        product: "2"
      }), "）オプションで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.plusAdd",
        product: "2"
      }), " をクリックします。 警備機能を制御するデバイスを選択し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armType",
        product: "2"
      }), " を選択します。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType",
        product: "2"
      }), " では、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.card",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.key",
        product: "2"
      }), "、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.cardOrKey",
        product: "2"
      }), " を選択できます。 LCD画面のないデバイスは、入力種別として ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.card",
        product: "2"
      }), " のみ使用できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-advanced-ac-intusion-add-device.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addArmInputBySignal",
      children: "入力信号による警備開始/解除の追加"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["「", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armInput",
        product: "2"
      }), "」（", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.input",
        product: "2"
      }), "）オプションで ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.plusAdd",
        product: "2"
      }), " をクリックします。 警備機能を制御するデバイスを選択します。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.inputType.port",
        product: "2"
      }), " をクリックし、選択したデバイスの入力ポートを選択します。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "zone.intrusion.armType",
        product: "2"
      }), " を選択した後、スイッチの種類と信号の持続時間を設定します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-advanced-ac-intusion-add-signal.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intrusionSetting",
      children: "侵入検知設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["侵入検知信号を設定できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.addplus",
        product: "2"
      }), " をクリックし、以下のように設定すると、BioStation 3 デバイスの0番入力ポートに接続された N/O センサーが100(ms) の間信号を送信した場合に侵入を検知したと判断します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-advanced-ac-intusion-detect-settings.png"
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