"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["10450"], {
9863: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_using_functions_mdx_176_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-using-functions-mdx-176.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_using_functions_mdx_176_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-using-functions","title":"デバイス管理機能を利用する","description":"デバイスの再接続、同期、一括編集機能について説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-using-functions.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-using-functions","permalink":"/docs/ja/platform/biostar_x/settings-device-using-functions","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-using-functions.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-using-functions","title":"デバイス管理機能を利用する","description":"デバイスの再接続、同期、一括編集機能について説明します。","keywords":["デバイス"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ファームウェアをアップグレードする","permalink":"/docs/ja/platform/biostar_x/settings-device-upgrade-firmware"},"next":{"title":"デバイス設定","permalink":"/docs/ja/platform/biostar_x/settings-device-details"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-using-functions.mdx


const frontMatter = {
	id: 'settings-device-using-functions',
	title: 'デバイス管理機能を利用する',
	description: 'デバイスの再接続、同期、一括編集機能について説明します。',
	keywords: [
		'デバイス'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " でデバイスのその他の機能を使用する方法を説明します。 デバイスの再接続、同期、情報の一括編集、デバイス削除の機能を提供します。"]
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
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "menu.device.allDeviceGroups",
            product: "2"
          }), " リストでデバイスを選択し、右クリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ポップアップメニューから目的の機能を選択します。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-functions.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ポップアップメニューで提供される機能は以下を参照します。 提供される機能はデバイスによって異なる場合があります。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.reconnect",
            product: "2"
          }), "：選択したデバイスを再接続できます。 デバイスを 1 台選択した場合に使用できます。 この機能は ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " との接続が切れたときに使用できます。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["この機能は ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "device.info.deviceToServerConnection",
              product: "2"
            }), " オプションで接続されたデバイスではサポートされません。 デバイス登録の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-adding-devices#setipaddress",
              children: "次のドキュメント"
            }), "を参照してください。"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.syncDevice",
            product: "2"
          }), "：登録したデバイスと ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " のすべてのユーザー情報を同期できます。 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " のデータベース情報を基準にユーザー情報を同期し、デバイスのみに登録されているユーザー情報は削除します。 ユーザー情報を ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " にアップロードするには ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.manageUsersInDevice",
            product: "2"
          }), " 機能を使用します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.sync_all",
            product: "2"
          }), "：デバイスに保存されているすべての設定情報およびユーザー情報を削除して再送できます。 この機能はデバイス一覧でデバイスを選択し、", (0,jsx_runtime.jsx)(IcMoreW, {}), " ボタンをクリックして使用することもできます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.manageUsersInDevice",
            product: "2"
          }), "：デバイスに登録されているユーザー情報を ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " にアップロードするか、デバイスから削除できます。 詳細については ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-device-manage-device-users",
            children: "次のドキュメント"
          }), " を参照します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.firmwareUpgrade",
            product: "2"
          }), "：デバイスのファームウェアを簡単にアップグレードできます。 詳細については ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-device-upgrade-firmware",
            children: "次のドキュメント"
          }), " を参照します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "device.menu.reboot",
            product: "2"
          }), "：選択したデバイスを再起動できます。 この機能はデバイスが正常に動作しない場合に使用できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "button.deleteDevice",
            product: "2"
          }), "：選択したデバイスを一覧から削除できます。 出入口または区画として設定されたデバイスは削除できません。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.menu.addWiegandDevice",
              product: "2"
            }), " 機能の詳細は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-adding-wiegand",
              children: "次のドキュメント"
            }), " を参照します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "device.menu.searchSlaveDevice",
              product: "2"
            }), " 機能の詳細は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-adding-slave-device",
              children: "次のドキュメント"
            }), " を参照します。"]
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