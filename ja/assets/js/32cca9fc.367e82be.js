"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["39910"], {
67653: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_manage_device_users_mdx_32c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-device-manage-device-users-mdx-32c.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_device_manage_device_users_mdx_32c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-device-manage-device-users","title":"デバイスに登録したユーザーを管理する","description":"デバイスに登録したユーザーを管理する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-manage-device-users.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-device-manage-device-users","permalink":"/docs/ja/platform/biostar_x/settings-device-manage-device-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-device-manage-device-users.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-device-manage-device-users","title":"デバイスに登録したユーザーを管理する","description":"デバイスに登録したユーザーを管理する方法を案内します。","keywords":["デバイス","ユーザー"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"スレーブ装置を登録する","permalink":"/docs/ja/platform/biostar_x/settings-adding-slave-device"},"next":{"title":"ファームウェアをアップグレードする","permalink":"/docs/ja/platform/biostar_x/settings-device-upgrade-firmware"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-device-manage-device-users.mdx


const frontMatter = {
	id: 'settings-device-manage-device-users',
	title: 'デバイスに登録したユーザーを管理する',
	description: 'デバイスに登録したユーザーを管理する方法を案内します。',
	keywords: [
		'デバイス',
		'ユーザー'
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["デバイスに登録されているユーザー数、指紋数、顔情報数、カード数を確認できます。 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " に未登録または既に登録済みのユーザー情報と比較し、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " サーバーに送信または削除できます。"]
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.manageUsersInDevice",
            product: "2"
          }), " をクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-setting-device-manage-device-users.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "device.menu.manageUsersInDevice",
        product: "2"
      }), " ウィンドウが表示されたら、デバイスに登録したユーザー情報と ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " に登録したユーザー情報を比較できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-setting-device-manage-device-users-popup.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.status",
        product: "2"
      }), " 列に表示される値を参照して、ユーザー情報をデバイスから削除するか ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " サーバーに送信するかを選択できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.status",
        product: "2"
      }), " 列の値は次のとおりです。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.syncStatus.same",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーに登録されている情報と同一のユーザー"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.syncStatus.different",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーに登録されている情報と異なるユーザー"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user.syncStatus.newUser",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " サーバーに登録されていないユーザー"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["特定のユーザー情報をデバイスから削除するには、削除するユーザーを選択して ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.delete",
        product: "2"
      }), " ボタンをクリックしてください。 ユーザー情報を ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " サーバーに送信するには、", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.upload",
        product: "2"
      }), " ボタンをクリックしてください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "button.manageUsersInDevice",
              product: "2"
            }), " 機能は 1 台のデバイスのみ選択して使用できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "button.upload",
              product: "2"
            }), " ボタンをクリックしたとき、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " サーバーに同じ ID を持つユーザーがいる場合は、デバイスの情報で更新できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["削除したユーザー情報はデバイスでのみ削除され、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " サーバーには残ります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["デバイスの詳細設定については", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-device-details",
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