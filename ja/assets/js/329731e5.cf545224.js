"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["42851"], {
55404: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_how_to_upgrade_firmware_mdx_329_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-how-to-upgrade-firmware-mdx-329.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_how_to_upgrade_firmware_mdx_329_namespaceObject = JSON.parse('{"id":"platform/biostar_air/how-to-upgrade-firmware","title":"ファームウェアをアップグレードする","description":"ウェブポータルとモバイルアプリを使って装置のファームウェアを一括または個別にアップグレードする方法を案内します。 BioStar Airのバージョン確認とトラブルシューティングのヒントも含まれます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/how-to-upgrade-firmware.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/how-to-upgrade-firmware","permalink":"/docs/ja/platform/biostar_air/how-to-upgrade-firmware","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/how-to-upgrade-firmware.mdx","tags":[],"version":"current","frontMatter":{"id":"how-to-upgrade-firmware","title":"ファームウェアをアップグレードする","description":"ウェブポータルとモバイルアプリを使って装置のファームウェアを一括または個別にアップグレードする方法を案内します。 BioStar Airのバージョン確認とトラブルシューティングのヒントも含まれます。","keywords":["ファームウェア","アップグレード","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Airfob PatchとTagを構成する","permalink":"/docs/ja/platform/biostar_air/configuring-the-airfob-patch-and-tag"},"next":{"title":"バイオメトリクスリーダーとクレデンシャル","permalink":"/docs/ja/platform/biostar_air/biometric-readers-and-credentials"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/how-to-upgrade-firmware.mdx


const frontMatter = {
	id: 'how-to-upgrade-firmware',
	title: 'ファームウェアをアップグレードする',
	description: 'ウェブポータルとモバイルアプリを使って装置のファームウェアを一括または個別にアップグレードする方法を案内します。 BioStar Airのバージョン確認とトラブルシューティングのヒントも含まれます。',
	keywords: [
		'ファームウェア',
		'アップグレード',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "開始する前に",
  "id": "開始する前に",
  "level": 2
}, {
  "value": "個別の装置のファームウェアアップグレード",
  "id": "upgradingFirmwareAdeviceViaWebPortal",
  "level": 2
}, {
  "value": "複数の装置を一括でアップグレード",
  "id": "upgradingFirmwareInBulkViaWebPortal",
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
  }, {Cmd, DocLink, IcAirFw, Image, StatusOK, TabItem, Tabs} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirFw) _missingMdxReference("IcAirFw", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!StatusOK) _missingMdxReference("StatusOK", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airのファームウェアをアップグレードして装置のパフォーマンスを向上させ、セキュリティを強化し、新機能を活用できます。 この手順は簡単で、BioStar AirのウェブポータルまたはBioStar Airのモバイルアプリから実行できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["BioStar Air モバイルアプリでファームウェアをアップグレードするには、", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/manage-device-with-app#upgradingFirmwareViaMobileApp"
        }), "をご参照ください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "開始する前に",
      children: "開始する前に"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ファームウェアをアップデートするには、装置が", (0,jsx_runtime.jsx)(_components.strong, {
            children: "オンライン状態"
          }), "である必要があります。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_product_column",
            product: "air"
          }), " 列で装置の状態を確認してください。 装置の画像の横に緑の点(", (0,jsx_runtime.jsx)(StatusOK, {}), ")が表示されていればオンライン状態です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ファームウェア更新中はデバイスが", (0,jsx_runtime.jsx)(_components.strong, {
            children: "一時的にオフライン状態"
          }), "になりますが、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3~5分"
          }), "以内に再接続されます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ファームウェア更新中は装置が一時的にオフラインになりますので、業務時間外に実施することをおすすめします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新しいファームウェアがアップデートされると通知を受け取るよう設定できます。 通知設定の詳細は、", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/settings-alert-report#addAlert"
          }), "をご参照ください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["装置管理の詳細は、", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-registered-devices"
        }), "をご参照ください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "upgradingFirmwareAdeviceViaWebPortal",
      children: "個別の装置のファームウェアアップグレード"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "BioStar Air"
          }), " ポータルにログインした後、次の手順に従ってファームウェアをアップグレードします。"]
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_submenu",
                product: "air"
              }), " をクリックします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "装置一覧でアップグレードする装置をクリックします。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "device_edit_title",
                product: "air"
              }), " ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_detail",
                product: "air"
              }), " セクションに移動してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "firmware_update_btn",
                product: "air"
              }), " をクリックします。"]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-mng-fw-upgrade.png",
              caption: true
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "装置に応じて最新のファームウェアバージョンを選択し、更新を確認してください。"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "モバイルアプリでのファームウェアアップグレード手順を説明します。"
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-mobile-device-fw-update.png",
          className: "none"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "モバイル端末でBioStar Airアプリを起動してログインします。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "devices_card",
                product: "air"
              }), " カードをタップします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "装置一覧でアップグレードする装置をタップします。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "firmware_update_btn",
                product: "air"
              }), " をタップします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["最新のファームウェアバージョンを選択して ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "btn_ok",
                product: "air"
              }), " をタップします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["メッセージウィンドウが表示されたら、内容を確認して ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_btn_confirm",
                product: "air"
              }), " をタップしてください。"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "ファームウェアのアップグレードには約5〜10分かかる場合があり、その間装置は使用できません。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "装置の電源を切らないでください。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "ファームウェアアップグレード完了後、装置は自動的に再起動します。"
              }), "\n"]
            }), "\n"]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "upgradingFirmwareInBulkViaWebPortal",
      children: "複数の装置を一括でアップグレード"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のサイドバーで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["装置一覧の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_fw_column",
            product: "air"
          }), " 列で各装置の現在のバージョンを確認します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["装置をファームウェアバージョンごとに並べ替えるには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_fw_column",
            product: "air"
          }), " 列の右側にある矢印ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-list-fw-column-align.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "アップグレードする各装置の左側にあるチェックボックスをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["装置一覧の上部にある ", (0,jsx_runtime.jsx)(IcAirFw, {
            width: "24px",
            height: "24px",
            title: "Update Firmware"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-device-mng-list-fw-update.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "update_fw_text",
            product: "air"
          }), " ウィンドウが表示されたら、最新のファームウェアバージョンを選択して ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "btn_ok",
            product: "air"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["メッセージウィンドウが表示されたら、内容を確認して ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_btn_confirm",
            product: "air"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ファームウェアのアップグレードには約5〜10分かかる場合があり、その間装置は使用できません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "装置の電源を切らないでください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ファームウェアアップグレード完了後、装置は自動的に再起動します。"
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