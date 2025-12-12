"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["64575"], {
15828: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_apb_mdx_73d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-advanced-ac-apb-mdx-73d.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_advanced_ac_apb_mdx_73d_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-advanced-ac-apb","title":"アンチパスバック","description":"アンチパスバック設定の方法を案内します。 アンチパスバックは、ドアまたはデバイスを基準に作成されたアンチパスバックよりも高度な機能を提供します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-apb.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-advanced-ac-apb","permalink":"/docs/ja/platform/biostar_x/settings-advanced-ac-apb","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-advanced-ac-apb.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-advanced-ac-apb","title":"アンチパスバック","description":"アンチパスバック設定の方法を案内します。 アンチパスバックは、ドアまたはデバイスを基準に作成されたアンチパスバックよりも高度な機能を提供します。","keywords":["高度なアクセス制御","アンチパスバック"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"高度な入退室制御設定","permalink":"/docs/ja/platform/biostar_x/settings-advanced-ac"},"next":{"title":"火災警報","permalink":"/docs/ja/platform/biostar_x/settings-advanced-ac-fire-alarm"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-advanced-ac-apb.mdx


const frontMatter = {
	id: 'settings-advanced-ac-apb',
	title: 'アンチパスバック',
	description: 'アンチパスバック設定の方法を案内します。 アンチパスバックは、ドアまたはデバイスを基準に作成されたアンチパスバックよりも高度な機能を提供します。',
	keywords: [
		'高度なアクセス制御',
		'アンチパスバック'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "アンチパスバック登録",
  "id": "addAPBZone",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Glossary, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Glossary) _missingMdxReference("Glossary", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "アンチパスバックは、ドアまたはデバイスを基準に作成されたアンチパスバックよりも高度な機能を提供します。 アンチパスバックを設定することで、ユーザーが入室および退室する際に指定されたドアとデバイスを使用するよう強制できます。 これにより、不正な再入室を防止し、セキュリティを強化できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(Glossary, {
        termid: "apb"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addAPBZone",
      children: "アンチパスバック登録"
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
            sid: "zone.antiPassback",
            product: "2"
          }), " を選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.info",
            product: "2"
          }), " セクションで追加するアンチパスバック機能の名前を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-adv-ac-add-apb.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.setting",
            product: "2"
          }), " セクションでアンチパスバック機能の詳細項目を設定します。 詳しくは ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setting",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.alarm",
            product: "2"
          }), " セクションでアンチパスバック違反が発生したときに実行する動作を設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.apb.bypass",
            product: "2"
          }), " セクションでアンチパスバックをバイパスして通過できるアクセスグループを選択します。 このグループに属するユーザーはアンチパスバックをバイパスできます。"]
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
        }), " セクションは、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.entryDevices",
          product: "2"
        }), " と ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "zone.exitDevices",
          product: "2"
        }), " の双方を設定して初めて使用できます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting",
      children: "設定オプションの案内"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "アンチパスバック設定の詳細項目は以下のとおりです。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone",
            product: "2"
          }), "：適用範囲を設定します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.globalZone.local",
                product: "2"
              }), "：入室装置と RS-485 で接続されたデバイスで設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.globalZone.global",
                product: "2"
              }), "：", (0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar X"
              }), " に登録されているすべてのデバイスに設定できます。"]
            }), "\n"]
          }), "\n"]
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
            sid: "zone.apbType",
            product: "2"
          }), "：アンチパスバックの種類を選択します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbType.hard",
                product: "2"
              }), "：アンチパスバックイベントを生成し、入退室できません。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door.apbType.soft",
                product: "2"
              }), "：アンチパスバックイベントを生成し、入退室できます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door.resetTime",
            product: "2"
          }), "：アンチパスバック規則に違反したユーザーに再び入退室を許可するまでの待機時間を設定します。 アラーム発生後、設定した時間が経過すると該当ユーザーの入退室を自動で許可します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "1"
              }), " 分から ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "10080"
              }), " 分（7日）の範囲で設定できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "0"
              }), " 分に設定するとアラームは自動で解除されず、管理者が手動で解除するまで入退室できません。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.apbUseDoorSensor",
            product: "2"
          }), "：アンチパスバック規則を適用する範囲を設定します。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.on",
                product: "2"
              }), "：入室装置と退室装置が構成されたドアの実際の動作に従ってアンチパスバック規則が適用されます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.off",
                product: "2"
              }), "：ドアの動作に関係なく、ユーザーの認証に基づいて規則が適用されます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apbUseEachDoorSensorSetting",
                product: "2"
              }), "：当該ドアで入退室ベースの APB を使用する場合、センサー使用オプションの設定に従ってアンチパスバック規則が適用されます。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.entryDevices",
            product: "2"
          }), "：入室時に使用するデバイスを選択します。 登録済みデバイスの一覧から選択できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.exitDevices",
            product: "2"
          }), "：退室時に使用するデバイスを選択します。 登録済みデバイスの一覧から選択できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.apbFailAction",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " とアンチパスバックが設定されたデバイスとの通信が切断されたときのドア動作を設定します。 この機能は ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone",
            product: "2"
          }), " オプションを ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "zone.globalZone.global",
            product: "2"
          }), " に設定した場合に使用できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apbFailAction.noAction",
                product: "2"
              }), "：ユーザーが正常に認証されるとドアが開きます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apbFailAction.recordLog",
                product: "2"
              }), "：アンチパスバック違反アラームが発生し、ドアが開きます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "zone.apbFailAction.doorLocked",
                product: "2"
              }), "：アンチパスバック違反アラームが発生し、ドアは開きません。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "デバイス登録の詳細は、以下のドキュメントを参照してください。"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_x/settings-adding-devices"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_x/settings-adding-wiegand"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_x/settings-adding-slave-device"
          }), "\n"]
        }), "\n"]
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