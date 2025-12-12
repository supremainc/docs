"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["50694"], {
21721: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_edit_user_mdx_1ff_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-edit-user-mdx-1ff.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_edit_user_mdx_1ff_namespaceObject = JSON.parse('{"id":"platform/biostar_x/edit-user","title":"ユーザー情報を編集","description":"個別ユーザーまたは複数ユーザーの情報を編集し、アクセス権限を変更する手順を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/edit-user.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/edit-user","permalink":"/docs/ja/platform/biostar_x/edit-user","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/edit-user.mdx","tags":[],"version":"current","frontMatter":{"id":"edit-user","title":"ユーザー情報を編集","description":"個別ユーザーまたは複数ユーザーの情報を編集し、アクセス権限を変更する手順を説明します。","keywords":["ユーザー","ユーザーグループ"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ユーザー管理","permalink":"/docs/ja/platform/biostar_x/user-manage"},"next":{"title":"ユーザーを削除する","permalink":"/docs/ja/platform/biostar_x/delete-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/edit-user.mdx


const frontMatter = {
	id: 'edit-user',
	title: 'ユーザー情報を編集',
	description: '個別ユーザーまたは複数ユーザーの情報を編集し、アクセス権限を変更する手順を説明します。',
	keywords: [
		'ユーザー',
		'ユーザーグループ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "ユーザー情報を編集",
  "id": "user-information-modification",
  "level": 2
}, {
  "value": "ユーザー情報を一括編集",
  "id": "user-information-collective-modification",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcClose, IcEdit, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "登録済みユーザーの情報を編集する方法を説明します。 個別ユーザーの基本情報、アクセス権限、クレデンシャルを編集したり、複数ユーザーの情報を一括で編集します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["最初に作成されたIDが ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1"
        }), " のユーザーは、他の管理者が編集できません。 該当アカウントでログインした本人のみが自分の情報を編集できます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-information-modification",
      children: "ユーザー情報を編集"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザー一覧から編集するユーザーを選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザーをダブルクリックするか、画面右側にユーザープロフィール情報が表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.preview.button.seeMore"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザー情報を編集できるウィンドウが表示されます。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-edit-user-screen.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "必要な項目を編集します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["クレデンシャル項目を編集するには ", (0,jsx_runtime.jsx)(IcEdit, {}), " をクリックし、削除するには ", (0,jsx_runtime.jsx)(IcClose, {}), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-edit-user-credentials.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更内容を保存するには、画面右上の", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.information"
            }), " セクションの各項目の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "add-user-basic-info",
              children: "以下"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.credential.title"
            }), " セクションの各項目の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "enroll-credential",
              children: "以下"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.title"
            }), " セクションの各項目の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "set-permission",
              children: "以下"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "common.advanced",
              product: "2"
            }), " セクションでユーザーに関連する個人メッセージを入力します。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-information-collective-modification",
      children: "ユーザー情報を一括編集"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "複数ユーザーの情報やアクセス権限を一度に編集します。 この機能は多数のユーザーに同一のアクセス権限またはグループを設定する際に役立ちます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), " ページで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザー一覧で編集するユーザーの最左列のチェックボックスをクリックします。 2人以上のユーザーを選択します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.batchEdit"
          }), " ボタンをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-batch-edit-users.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.batchEdit"
          }), " 画面が表示されたら、目的の項目のチェックボックスをクリックして編集します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-edit-user-batch-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["編集内容を保存するには、画面右上の", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ユーザーのID、名前、メールアドレス、電話番号、クレデンシャルなどの個人情報は一括編集できません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["編集を取り消すには、画面右上の", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.cancel"
            }), " をクリックします。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "enroll-credential",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザークレデンシャルを登録し、入退室認証方式を設定します。"
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "set-permission",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーのアクセス権限を設定する方法を確認します。"
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "transfer-user-info-to-device",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザー情報を変更したら、デバイスへ送信する必要があります。 ユーザー情報をデバイスへ送信する方法を確認します。"
        })
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