"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["95585"], {
48227: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_adding_custom_account_mdx_460_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-adding-custom-account-mdx-460.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_adding_custom_account_mdx_460_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-adding-custom-account","title":"カスタム権限を追加する","description":"ユーザーが希望する権限レベルを追加する方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-adding-custom-account.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-adding-custom-account","permalink":"/docs/ja/platform/biostar_x/settings-adding-custom-account","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-adding-custom-account.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-adding-custom-account","title":"カスタム権限を追加する","description":"ユーザーが希望する権限レベルを追加する方法を説明します。","keywords":["アカウント","運用権限","カスタム権限"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"運用権限管理","permalink":"/docs/ja/platform/biostar_x/settings-manage-account"},"next":{"title":"入退室制御設定","permalink":"/docs/ja/platform/biostar_x/settings-access-control"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-adding-custom-account.mdx


const frontMatter = {
	id: 'settings-adding-custom-account',
	title: 'カスタム権限を追加する',
	description: 'ユーザーが希望する権限レベルを追加する方法を説明します。',
	keywords: [
		'アカウント',
		'運用権限',
		'カスタム権限'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "カスタム権限の追加",
  "id": "カスタム権限の追加",
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
  }, {Cmd, IcTrash2, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcTrash2) _missingMdxReference("IcTrash2", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーが希望する権限レベルを追加する方法を説明します。 カスタム権限は、基本の運用権限に加えて追加の権限を設定できるユーザー向けの機能です。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "カスタム権限の追加",
      children: "カスタム権限の追加"
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
            sid: "setting.menu.account.root"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.account.addCustomOperator",
            product: "2"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-account-add-custom-permission.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新しく作成する権限の名前と説明を入力します。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-account-add-custom-permission-details.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "残りの各項目を入力または選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定を保存するには、画面最下部の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.account.menu.setting",
              product: "2"
            }), " で設定できる項目は、有効化されているライセンスの種類によって異なる場合があります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.account.menu.detailSetting",
              product: "2"
            }), " の詳細については ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#detailSetting",
              children: "次のドキュメント"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.account.menu.setting",
              product: "2"
            }), " の詳細については ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#menuSetting",
              children: "次のドキュメント"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.account.addUser",
              product: "2"
            }), " の詳細については ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#addUser",
              children: "次のドキュメント"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detailSetting",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.account.menu.detailSetting",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["アイテムの詳細な権限を設定します。 各メニューに対して編集権限および閲覧権限を付与するグループを選択できます。 アイテム詳細権限は ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.permission.module.userGroup",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.permission.module.deviceGroup",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.permission.module.doorGroup",
        product: "2"
      }), ", ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.permission.module.accessGroup",
        product: "2"
      }), " に対して設定でき、各メニューで既に作成されているグループ情報を基に設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-account-add-custom-permission-details-item.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "目的のグループがない場合は、該当メニューに移動して新しいグループを追加します。 グループの追加の詳細については、次のドキュメントを参照してください。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "user-group-manage",
                  children: "ユーザーグループの登録と管理"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-manage-device-group",
                  children: "デバイスグループの登録と管理"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-manage-door-group",
                  children: "ドアグループの登録と管理"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-manage-elevators-group",
                  children: "エレベーターグループの登録と管理"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "settings-access-control-manage-access-group",
                  children: "アクセスグループの登録と管理"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.permission.module.elevatorGroup",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.account.item.advAC",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.account.item.map",
              product: "2"
            }), " の権限は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "アドバンス"
            }), "（Advanced）ライセンス以上で利用できます。 ライセンス ポリシーの詳細については、", (0,jsx_runtime.jsx)(_components.a, {
              href: "../biostar_x/licensing",
              children: "次のドキュメント"
            }), " を参照してください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "menuSetting",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.account.menu.setting",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["個別メニューに対する ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "編集"
      }), " と ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "閲覧"
      }), " 権限を設定します。 メニューごとに異なる権限を設定できます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-account-add-custom-permission-details-menus.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.editRead",
            product: "2"
          }), "：該当メニューの項目を追加、編集、削除できる権限を付与します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.read",
            product: "2"
          }), "：該当メニューへアクセスし、設定内容を確認のみできる権限を付与します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["各メニューに ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "編集"
        }), " 権限を付与すると、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.add",
          product: "2"
        }), " が有効になります。 ただし、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.dashboard"
        }), " および ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.setting"
        }), " メニューには追加機能がないため ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.account.menu.canCreate.na",
          product: "2"
        }), " と表示されます。", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.permission.module.ac",
          product: "2"
        }), " メニューでは、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "settings.account.menu.detailSetting",
          product: "2"
        }), " で ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.permission.module.accessGroup",
          product: "2"
        }), " を ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.account.menu.detailPriv.allAC",
          product: "2"
        }), " に設定し、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "編集"
        }), " 権限を付与した場合にのみ ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "button.add",
          product: "2"
        }), " が有効になります。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "addUser",
      children: (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings.account.addUser",
        product: "2",
        className: "normal"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["権限を付与するユーザー情報を追加または確認できます。 ユーザーを追加するには ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "button.plusAdd",
        product: "2"
      }), " をクリックします。 ユーザー一覧から権限を付与するユーザーを選択します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-account-add-custom-permission-details-users.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ユーザー一覧でユーザーの ", (0,jsx_runtime.jsx)(IcTrash2, {}), " をクリックすると、そのユーザーは権限から除外されます。"]
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