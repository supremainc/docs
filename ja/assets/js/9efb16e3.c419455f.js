"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["56129"], {
61665: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_info_mdx_9ef_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-details-info-mdx-9ef.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_details_info_mdx_9ef_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-details-info","title":"基本情報を設定する","description":"デバイスの名前とグループ、タイムゾーン、ハードウェアおよびファームウェアバージョンなどを確認して設定する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-info.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-details-info","permalink":"/docs/ja/platform/biostar_x/settings-device-details-info","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-details-info.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-details-info","title":"基本情報を設定する","description":"デバイスの名前とグループ、タイムゾーン、ハードウェアおよびファームウェアバージョンなどを確認して設定する方法を案内します。","keywords":["デバイス","情報"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"デバイス設定","permalink":"/docs/ja/platform/biostar_x/settings-device-details"},"next":{"title":"ネットワークを設定する","permalink":"/docs/ja/platform/biostar_x/settings-device-details-network"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-details-info.mdx


const frontMatter = {
	id: 'settings-device-details-info',
	title: '基本情報を設定する',
	description: 'デバイスの名前とグループ、タイムゾーン、ハードウェアおよびファームウェアバージョンなどを確認して設定する方法を案内します。',
	keywords: [
		'デバイス',
		'情報'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "デバイス名を変更する",
  "id": "デバイス名を変更する",
  "level": 2
}, {
  "value": "デバイスグループを変更する",
  "id": "デバイスグループを変更する",
  "level": 2
}, {
  "value": "ファームウェアをアップグレードする",
  "id": "ファームウェアをアップグレードする",
  "level": 2
}, {
  "value": "デバイスの日付と時刻を設定する",
  "id": "デバイスの日付と時刻を設定する",
  "level": 2
}, {
  "value": "デバイスのロックを解除する",
  "id": "デバイスのロックを解除する",
  "level": 2
}, {
  "value": "デバイスを初期化する",
  "id": "デバイスを初期化する",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["「", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.information",
        product: "2"
      }), "」セクションではデバイスの基本情報を設定できます。 デバイスの名前とグループ、タイムゾーン、ハードウェアおよびファームウェアバージョンなどを確認できます。 デバイスの名前とグループを変更したり、デバイスのファームウェアをアップグレードできます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-edit-info.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下はデバイスに設定されている基本情報で、ユーザーが変更できない項目です。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceId",
            product: "2"
          }), "：デバイスのIDを確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceType",
            product: "2"
          }), "：デバイスの種類を確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.productName",
            product: "2"
          }), "：デバイスのモデル名を確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.kernelVersion",
            product: "2"
          }), "：デバイスの", (0,jsx_runtime.jsx)(_components.a, {
            href: "../../reference/glossary#kernel",
            children: "カーネル"
          }), "バージョンを確認できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.hwVersion",
            product: "2"
          }), "：デバイスのハードウェアバージョンを確認できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ユーザーが任意で変更した内容がある場合は、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " をクリックします。 変更内容を保存しないとデバイスに反映されません。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイス名を変更する",
      children: "デバイス名を変更する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["既定のデバイス名を変更できます。 「", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.name",
        product: "2"
      }), "」項目に希望のデバイス名を入力します。 デバイス名は最大48文字まで入力できます。 デバイス名はデバイスリストでデバイスを識別するために使用します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイスグループを変更する",
      children: "デバイスグループを変更する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスが属するグループを変更できます。 「", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.group",
        product: "2"
      }), "」項目で希望のデバイスグループを選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["新しいデバイスグループの作成やグループ名の変更・削除の詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-manage-device-group",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ファームウェアをアップグレードする",
      children: "ファームウェアをアップグレードする"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスのファームウェアバージョンを確認するには「", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.firmwareVersion",
        product: "2"
      }), "」項目で確認できます。 ファームウェアをアップグレードするには「", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.firmwareUpgrade",
        product: "2"
      }), "」ボタンをクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["デバイスのファームウェアアップグレードの詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-device-upgrade-firmware",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイスの日付と時刻を設定する",
      children: "デバイスの日付と時刻を設定する"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下のオプションでデバイスの日付と時刻を設定できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.timeZone",
            product: "2"
          }), "：デバイスがあるタイムゾーンを選択できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.timeSync",
            product: "2"
          }), "：デバイスの時刻を", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "サーバーの時刻と同期できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dst",
            product: "2"
          }), "：ユーザーが設定した夏時間をデバイスに適用できます。 新しい夏時間を追加するには", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-system-daylight-saving-time",
            children: "次のドキュメント"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.date",
            product: "2"
          }), "：デバイスの日付と時刻を手動で設定できます。 日付と時刻を設定したら「", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.setTime",
            product: "2"
          }), "」ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["この機能は「", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.timeSync",
              product: "2"
            }), "」オプションを選択していない場合に使用できます。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dateFormat",
            product: "2"
          }), "：デバイスに表示される日付形式を選択できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.getTime",
            product: "2"
          }), "：デバイスに設定されている時刻を取得できます。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "設定した日付と時刻はイベントログとリアルタイムログに記録されます。 デバイスの日付と時刻が正確でないとログ記録が不正確になる可能性があります。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイスのロックを解除する",
      children: "デバイスのロックを解除する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["動作条件によりデバイスがロックされた場合、「", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.locked",
        product: "2"
      }), "」項目の「", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.unlock",
        product: "2"
      }), "」ボタンをクリックします。 デバイスのロックを解除できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["動作条件およびアクション設定の詳細は", (0,jsx_runtime.jsx)(_components.a, {
          href: "settings-triger-and-action",
          children: "次のドキュメント"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "デバイスを初期化する",
      children: "デバイスを初期化する"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスの設定を初期化するには「", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.info.factoryDefault",
        product: "2"
      }), "」項目で以下のいずれかを選択します。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.reset",
            product: "2"
          }), "：デバイスのすべての設定を初期化します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.reset.withoutNetwork",
            product: "2"
          }), "：ネットワーク設定を保持し、それ以外を初期化します。"]
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