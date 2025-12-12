"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["38645"], {
53923: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_adding_devices_mdx_d5d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-adding-devices-mdx-d5d.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_adding_devices_mdx_d5d_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-adding-devices","title":"デバイスを登録する","description":"BioStar X にデバイスを登録する方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-adding-devices.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-adding-devices","permalink":"/docs/ja/platform/biostar_x/settings-adding-devices","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-adding-devices.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-adding-devices","title":"デバイスを登録する","description":"BioStar X にデバイスを登録する方法を説明します。","keywords":["デバイス","デバイス追加"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"デバイスグループを管理する","permalink":"/docs/ja/platform/biostar_x/settings-manage-device-group"},"next":{"title":"Wiegandデバイスを登録する","permalink":"/docs/ja/platform/biostar_x/settings-adding-wiegand"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-adding-devices.mdx


const frontMatter = {
	id: 'settings-adding-devices',
	title: 'デバイスを登録する',
	description: 'BioStar X にデバイスを登録する方法を説明します。',
	keywords: [
		'デバイス',
		'デバイス追加'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "開始前に",
  "id": "before-start",
  "level": 2
}, {
  "value": "簡易登録",
  "id": "quickadd-device",
  "level": 2
}, {
  "value": "IP アドレス設定",
  "id": "setipaddress",
  "level": 3
}, {
  "value": "デバイス検索オプション",
  "id": "devicesearchoptions",
  "level": 3
}, {
  "value": "高度な検索",
  "id": "advancedsearch",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcEdit, IcMoreW, IcSet, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcSet) _missingMdxReference("IcSet", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " にデバイスを登録する方法を説明します。 デバイスを登録すると、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " でそのデバイスの状態を監視して管理できます。 デバイスを検索する前に、デバイスが正しく接続されていることを確認します。 複数のデバイスをまとめて追加する場合は、各デバイスの設置場所、ID、IP アドレスなどを事前に把握しておくと便利です。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスを新規登録するとき、デバイスのキー値をサーバーのデータ暗号化キー値に変更します。 キーを変換すると、デバイス内のすべてのユーザーデータが削除されます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["デバイスに保存されているすべての設定情報とユーザー情報を削除して再送信するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), " をクリックします。 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.sync_all",
              product: "2"
            }), " オプションは、デバイスリストでデバイスを選択し、", (0,jsx_runtime.jsx)(IcMoreW, {}), " ボタンをクリックすると表示されます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["グループ内のすべてのデバイスを登録するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "menu.device.waitingDevice",
              product: "2"
            }), " グループ名を右クリックし、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.menu.addAllWaitingDevices",
              product: "2"
            }), " をクリックします。 各デバイスを個別に登録する場合は、デバイス名を右クリックし、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.menu.addWaitingDevice",
              product: "2"
            }), " をクリックします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " とデバイスでユーザー ID タイプが異なる場合は、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " のユーザー ID 設定に合わせてデバイス設定を変更します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " のユーザー ID タイプを英数字に設定すると、一部のデバイスが使用できなかったり制限が発生したりすることがあります。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-server-server#userid-type",
              children: "次の記事"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["デバイスを登録して詳細を設定するには、", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-details",
              children: "次のドキュメント"
            }), " を参照します。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "開始前に"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスを登録する前に、次の事項を確認します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["入退室制御用の入室レベル、入室グループ、フロアレベルを設定します。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-access-control",
            children: "以下"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスを効率的に管理するグループを作成します。 詳細は ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-manage-device-group",
            children: "次のドキュメント"
          }), " を参照します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quickadd-device",
      children: "簡易登録"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " と同じネットワーク上にあるデバイスを自動で検索して登録できます。"]
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
            sid: "setting.menu.device.root"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイス一覧で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.searchDevice",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-search-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.searchDevice",
            product: "2"
          }), " ウィンドウが表示されると、登録可能なすべてのデバイス一覧が表示されます。 目的のデバイスが一覧にない場合は、右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.search",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-add-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "デバイス一覧で登録するデバイスを選択し、登録しないデバイスは選択を解除します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登録するデバイス名を変更するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.name",
            product: "2"
          }), " 列の ", (0,jsx_runtime.jsx)(IcEdit, {}), " をクリックして編集します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-add-device-rename.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登録するデバイスのグループを設定するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.group",
            product: "2"
          }), " 列で選択します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-add-device-group.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["選択したデバイスの設定が完了したら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["追加したデバイスがデバイス一覧に表示されます。 追加したデバイスを選択し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.syncDevice",
        product: "2"
      }), " をクリックします。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-sync-device.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["IP アドレスを使用できない、または変更が必要なデバイスは、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.setIp",
          product: "2"
        }), " をクリックして変更できます。 詳細は ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#setipaddress",
          children: "次のドキュメント"
        }), " を参照します。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setipaddress",
      children: "IP アドレス設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["新規登録するデバイスの IP アドレスを変更できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "device.searchDevice",
        product: "2"
      }), " ウィンドウ左下の ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.setIp",
        product: "2"
      }), " をクリックします。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.setIp",
        product: "2"
      }), " ウィンドウが表示されたら、デバイス一覧から IP アドレスを変更するデバイスを選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-set-ip.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.useDhcp",
            product: "2"
          }), "：デバイスが DHCP で IP アドレスを自動取得するように設定します。 このオプションを選択すると、デバイスがネットワークに接続するたびに IP アドレスが変わる可能性があります。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "IP アドレス、サブネットマスク、ゲートウェイなどを手動入力する場合は、このオプションの選択を解除します。"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.deviceToServerConnection",
            product: "2"
          }), "：デバイスから ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーへ接続するように設定する場合は、このオプションを選択します。 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " をインストールしたサーバーの IP アドレスとポート番号を入力する必要があります。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["IP 設定を完了して変更を保存するには、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.apply",
          product: "2"
        }), " をクリックします。 変更を取り消す場合は、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.cancel",
          product: "2"
        }), " をクリックします。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "devicesearchoptions",
      children: "デバイス検索オプション"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.searchDevice",
        product: "2"
      }), " ウィンドウ右上の ", (0,jsx_runtime.jsx)(IcSet, {}), " をクリックすると、デバイス検索オプションを設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-add-device-option.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.showNewDevicesOnly",
            product: "2"
          }), "：新しく検出されたデバイスのみを一覧に表示する場合は、このオプションを選択します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.timeout",
            product: "2"
          }), "：一定時間応答しないデバイスを一覧から除外する場合は、所要時間を設定します。 秒単位で設定でき、デフォルトは 3 秒です。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advancedsearch",
      children: "高度な検索"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "特定のデバイスの IP アドレスとポート番号を指定して登録できます。"
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
            sid: "setting.menu.device.root"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイス一覧で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.advancedSearch",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-adv-search-device.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.func.advancedSearch",
            product: "2"
          }), " ウィンドウが表示されたら、登録するデバイスの IP アドレスとポート番号を入力します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-advanced-search.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.search",
            product: "2"
          }), " をクリックすると、入力した条件に一致するデバイスが一覧に表示されます。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-advanced-search-result.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスを登録するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.add",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["追加したデバイスがデバイス一覧に表示されます。 追加したデバイスを選択し、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.syncDevice",
        product: "2"
      }), " をクリックします。"]
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