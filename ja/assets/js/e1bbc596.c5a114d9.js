"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["37445"], {
58755: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_the_airfob_patch_and_tag_mdx_e1b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-configuring-the-airfob-patch-and-tag-mdx-e1b.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_configuring_the_airfob_patch_and_tag_mdx_e1b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/configuring-the-airfob-patch-and-tag","title":"Airfob PatchとTagを構成する","description":"既存の入退室管理システムをBioStar Airにアップグレードするために、Airfob PatchおよびTag機器を構成し、BLEモードの設定とカードIDのカスタム出力方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-the-airfob-patch-and-tag.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/configuring-the-airfob-patch-and-tag","permalink":"/docs/ja/platform/biostar_air/configuring-the-airfob-patch-and-tag","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/configuring-the-airfob-patch-and-tag.mdx","tags":[],"version":"current","frontMatter":{"id":"configuring-the-airfob-patch-and-tag","title":"Airfob PatchとTagを構成する","description":"既存の入退室管理システムをBioStar Airにアップグレードするために、Airfob PatchおよびTag機器を構成し、BLEモードの設定とカードIDのカスタム出力方法を案内します。","keywords":["Airfob","Patch","Tag","構成"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"デバイスグループを管理する","permalink":"/docs/ja/platform/biostar_air/manage-device-group"},"next":{"title":"ファームウェアをアップグレードする","permalink":"/docs/ja/platform/biostar_air/how-to-upgrade-firmware"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/configuring-the-airfob-patch-and-tag.mdx


const frontMatter = {
	id: 'configuring-the-airfob-patch-and-tag',
	title: 'Airfob PatchとTagを構成する',
	description: '既存の入退室管理システムをBioStar Airにアップグレードするために、Airfob PatchおよびTag機器を構成し、BLEモードの設定とカードIDのカスタム出力方法を案内します。',
	keywords: [
		'Airfob',
		'Patch',
		'Tag',
		'構成'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "構成手順",
  "id": "configurationSteps",
  "level": 2
}, {
  "value": "アプリを起動",
  "id": "accessApp",
  "level": 3
}, {
  "value": "デバイス設定に移動",
  "id": "navigateToDeviceSettings",
  "level": 3
}, {
  "value": "BLEモードの有効化",
  "id": "enable-ble-mode",
  "level": 3
}, {
  "value": "カードID出力方法の設定",
  "id": "set-card-id-output-method",
  "level": 3
}, {
  "value": "出力方法を選択",
  "id": "choose-the-output-method",
  "level": 3
}, {
  "value": "設定の保存",
  "id": "save-your-settings",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Airfob PatchおよびTagは、既存の入退室管理リーダーやドアロックをBioStar Airのモバイルクレデンシャルに対応させるためにアップグレードします。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Patch"
          }), "：有線リーダーおよびインターホンに適し、配線不要で取り付け可能なエネルギーハーベスティング(Energy-Harvesting)装置です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Tag"
          }), "：コイン型セル電池を搭載し、ドアロックなどのバッテリー駆動機器に適しています。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Airfob PatchおよびTagはMIFARE 1K技術と互換性がありますが、125 KHzの「低周波」リーダーやロック装置とは互換性がありません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Airfob PatchおよびTagは、モバイル機器上の暗号化されたBluetooth BioStar Airクレデンシャルを認証し、MIFARE RFID信号をエミュレートして動作します。 テープでリーダーやロック装置に貼り付けられ、配線は不要です。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configurationSteps",
      children: "構成手順"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Airfob PatchまたはTagを取り付け、BioStar Airアプリに登録してください。 次の手順に従ってデバイスを構成してください。"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "accessApp",
          children: "アプリを起動"
        }), (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--20",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-aifob-login-app.png"
            })
          }), (0,jsx_runtime.jsx)(Column, {
            className: "padding--l10",
            children: (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["モバイル機器で ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar Air"
                  }), " アプリを起動してください。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Airfob PatchまたはTagを登録したサイトにログインしてください。"
                }), "\n"]
              }), "\n"]
            })
          })]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "navigateToDeviceSettings",
          children: "デバイス設定に移動"
        }), (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--20",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-aifob-app-device.png"
            })
          }), (0,jsx_runtime.jsx)(Column, {
            className: "padding--l10",
            children: (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar Air"
                  }), " アプリの初期画面で下部の ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "site_setting_tab_management",
                    product: "air"
                  }), " をタップしてください。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["登録済みデバイスの一覧を確認するには ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "devices_card",
                    product: "air"
                  }), " をタップしてください。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "デバイス一覧からAirfob PatchまたはTagを選択してください。"
                }), "\n"]
              }), "\n"]
            })
          })]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "enable-ble-mode",
          children: "BLEモードの有効化"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "モバイル機器をデバイスに近づけてください。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["アプリで ", (0,jsx_runtime.jsx)(Cmd, {
                children: "BLE モード"
              }), " を有効にしてください。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "set-card-id-output-method",
          children: "カードID出力方法の設定"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Card ID Output Method"
              }), " までスクロールし、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Edit"
              }), " をタップしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "User Card ID"
              }), " の横にある ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select"
              }), " をタップしてください。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "choose-the-output-method",
          children: "出力方法を選択"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "None"
              }), "：カードIDを送信しない場合はこのオプションを選択してください。 バッテリー寿命を延ばすための勤怠管理(T&A)用途に有用です。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Fixed Device"
              }), "：あらかじめプログラムされた固定カードIDを送信します。 個別にRFIDカードをプログラムする必要があるドアロックやインターホンに適しています。 機器ログにはこの固定カードIDのみが表示されます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "User Card ID"
              }), "：各ユーザーごとに固有のカードIDを送信し、入退室管理システムの既存RFIDカード番号と一致します。 これにより、新しい物理カードを発行せずにシームレスに統合できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Direct Input"
              }), "：送信するカードIDを手動で指定します。 複数のデバイスで1つのIDを使用する必要があるカスタム設定に有用です。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "save-your-settings",
          children: "設定の保存"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["モバイル機器をデバイスの近くに置き、 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " ボタンをタップして選択内容を確認してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "更新完了のメッセージが表示されます。"
            }), "\n"]
          }), "\n"]
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