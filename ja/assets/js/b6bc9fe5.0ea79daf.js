"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["17482"], {
64207: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_upgrade_firmware_mdx_b6b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-upgrade-firmware-mdx-b6b.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_upgrade_firmware_mdx_b6b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-upgrade-firmware","title":"ファームウェアをアップグレードする","description":"BioStar X に接続されたデバイスのファームウェアをアップグレードする手順を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-upgrade-firmware.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-upgrade-firmware","permalink":"/docs/ja/platform/biostar_x/settings-device-upgrade-firmware","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-upgrade-firmware.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-upgrade-firmware","title":"ファームウェアをアップグレードする","description":"BioStar X に接続されたデバイスのファームウェアをアップグレードする手順を案内します。","keywords":["デバイス","ファームウェア","アップグレード"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"デバイスに登録したユーザーを管理する","permalink":"/docs/ja/platform/biostar_x/settings-device-manage-device-users"},"next":{"title":"デバイス管理機能を利用する","permalink":"/docs/ja/platform/biostar_x/settings-device-using-functions"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-upgrade-firmware.mdx


const frontMatter = {
	id: 'settings-device-upgrade-firmware',
	title: 'ファームウェアをアップグレードする',
	description: 'BioStar X に接続されたデバイスのファームウェアをアップグレードする手順を案内します。',
	keywords: [
		'デバイス',
		'ファームウェア',
		'アップグレード'
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
  "value": "ファームウェアをアップグレードする",
  "id": "upgrade-firmware",
  "level": 2
}, {
  "value": "1 台のデバイスのファームウェアアップグレード",
  "id": "1-台のデバイスのファームウェアアップグレード",
  "level": 3
}, {
  "value": "複数デバイスのファームウェアアップグレード",
  "id": "複数デバイスのファームウェアアップグレード",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
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
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " に接続されたデバイスは追加の接続や操作なしで簡単にファームウェアをアップグレードできます。 デバイスのファームウェアを最新バージョンに保つことで、セキュリティ脆弱性を解消し、新機能を利用できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "before-start",
      children: "開始前に"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスのファームウェアをアップグレードする前に、新しいバージョンのファームウェアファイルをあらかじめ用意してください。 ダウンロードしたファームウェアファイルを以下のパスに保存してください。 「", (0,jsx_runtime.jsx)(_components.em, {
        children: "firmware"
      }), "」フォルダーがない場合は新規作成してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "C:\\Program Files\\BioStar X\\firmware"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["新しいバージョンのファームウェアファイルは、", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://download.supremainc.com",
          children: "Suprema ダウンロードセンター"
        }), "でデバイスのモデル名を検索し、最新バージョンのファームウェアファイルをダウンロードしてください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "upgrade-firmware",
      children: "ファームウェアをアップグレードする"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-台のデバイスのファームウェアアップグレード",
      children: "1 台のデバイスのファームウェアアップグレード"
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "デバイスリストでファームウェアをアップグレードするデバイスをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイス詳細画面の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device.info.information",
            product: "2"
          }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.firmwareUpgrade",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-info-upgrade-firmware.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "デバイスのファームウェアをアップグレードします。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "複数デバイスのファームウェアアップグレード",
      children: "複数デバイスのファームウェアアップグレード"
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "デバイスリストでファームウェアをアップグレードするデバイスの一番左にあるチェックボックスを選択します。 複数のデバイスを選択できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["デバイスリストの右上にある ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.firmwareUpgrade",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-upgrade-firmware.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.firmwareUpgrade",
            product: "2"
          }), " ウィンドウが表示されたら、ファームウェアバージョンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-upgrade-firmware-popup.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "選択したデバイスのファームウェアをアップグレードします。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "button.firmwareUpgrade",
              product: "2"
            }), " はデバイスリストでデバイスを選択した後にのみ有効になります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "同じ RS-485 モードを持つデバイスは、複数台を同時にアップグレードできます。 たとえば、マスターデバイスはマスターデバイス同士で複数台を同時にアップグレードでき、スレーブデバイスはスレーブデバイス同士で複数台を同時にアップグレードできます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "マスターデバイスやマスターに接続されていないスレーブデバイスは、複数台を同時にアップグレードできます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "同じマスターデバイスに接続されているスレーブデバイスは、複数台を同時にアップグレードできません。"
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