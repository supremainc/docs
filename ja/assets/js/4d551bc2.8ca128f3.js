"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["10920"], {
53858: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_login_with_mfa_mdx_4d5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-login-with-mfa-mdx-4d5.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_login_with_mfa_mdx_4d5_namespaceObject = JSON.parse('{"id":"platform/biostar_x/login-with-mfa","title":"多要素認証でログインする","description":"BioStar X にログインする際に多要素認証機能を使用すると、アカウントのセキュリティを向上できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/login-with-mfa.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/login-with-mfa","permalink":"/docs/ja/platform/biostar_x/login-with-mfa","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/login-with-mfa.mdx","tags":[],"version":"current","frontMatter":{"id":"login-with-mfa","title":"多要素認証でログインする","description":"BioStar X にログインする際に多要素認証機能を使用すると、アカウントのセキュリティを向上できます。","keywords":["ログイン","MFA","多要素認証","多要素認証"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"アクセスグループを管理する","permalink":"/docs/ja/platform/biostar_x/view-user-by-access"},"next":{"title":"顔を一括登録する ","permalink":"/docs/ja/platform/biostar_x/batch-import-face"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/login-with-mfa.mdx


const frontMatter = {
	id: 'login-with-mfa',
	title: '多要素認証でログインする',
	description: 'BioStar X にログインする際に多要素認証機能を使用すると、アカウントのセキュリティを向上できます。',
	keywords: [
		'ログイン',
		'MFA',
		'多要素認証',
		'多要素認証'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "多要素認証の設定",
  "id": "multifactorauthenticationsetting",
  "level": 2
}, {
  "value": "多要素認証の一括設定",
  "id": "multifactorauthenticationbatchset",
  "level": 2
}, {
  "value": "多要素認証でログイン",
  "id": "loginwithmultifactorauthentication",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar X にログインする際、セキュリティを強化するために多要素認証機能を使用できます。 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.multiFactorAuth"
      }), " 機能を有効にすると、ユーザー ID とパスワードの組み合わせに指紋スキャナーによる指紋認証ステップが追加されます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " 機能を使用するユーザーは、指紋情報を登録し、ID とパスワード、権限レベルをすべて設定する必要があります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " 機能を使用するには、BioStar X クライアント PC に多要素認証ログインをサポートする指紋スキャナーを接続する必要があります。 指紋スキャナーとしてサポートされるデバイスは以下の一覧を参照してください。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioMini"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioMini Plus 2"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioMini Slim 2"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.activeDirectory.title",
              product: "2",
              className: "normal"
            }), " アカウントで ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "biostar.login",
              product: "2"
            }), " オプションを使用している場合、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " 機能は使用できません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " を設定した管理者は、入退室管理以外の BioStar X サービス（勤怠管理およびビデオ）には初回認証できません。 これらのサービスを使用するには、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " 設定を解除してからログインしてください。 その後、再度 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " 設定を有効にできます。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "全体管理者（ID 1）のアカウントに多要素認証機能を設定した後に指紋認証が利用できなくなると、そのアカウントではログインできなくなるため注意してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["指紋認証でログインできない場合は、", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://support.supremainc.com",
              children: "Suprema テクニカルサポート"
            }), " までお問い合わせください。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multifactorauthenticationsetting",
      children: "多要素認証の設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.multiFactorAuth"
      }), " を設定するには、次の手順に従ってください。"]
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザー一覧で ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.multiFactorAuth"
          }), " を設定するユーザーをダブルクリックします。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["または、ユーザーを選択し、右側に表示されるプロファイルで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.preview.button.seeMore"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザープレビュー画面が表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.title"
          }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.fingerprintLogin",
            product: "2"
          }), " 項目を ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use"
          }), " に設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-edit-user-mfa-use.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多要素認証の設定を完了します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multifactorauthenticationbatchset",
      children: "多要素認証の一括設定"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "始める前に"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "多要素認証ログイン機能を使用するには、次の条件を満たす必要があります。"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "当該ユーザーの指紋認証手段が登録されている必要があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "team.userTemplate.table.operator"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.loginId",
              product: "2"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.password",
              product: "2"
            }), " が設定されている必要があります。 詳細は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "set-permission",
              children: "以下"
            }), " を参照する。"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["一括編集機能を使用して、複数ユーザーに ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.multiFactorAuth"
      }), " 機能を適用できます。"]
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
          children: "ユーザー一覧で多要素認証を設定するユーザーの最左列にあるチェックボックスをクリックします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.batchEdit"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["一括編集ウィンドウが表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.title"
          }), " セクションで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.fingerprintLogin",
            product: "2"
          }), " オプションのチェックボックスを選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use"
          }), " に設定します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-batch-edit-user-mfa-use.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "選択した複数ユーザーの多要素認証設定を完了します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["選択したユーザーのうち、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.fingerprintLogin",
          product: "2"
        }), " 機能を有効にするための条件を満たしていないユーザーは、ポップアップメッセージの ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user.batchedit.popup.notavailableuser",
          product: "2"
        }), " リストで確認できます。 設定に必要な条件を確認し、再試行してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "loginwithmultifactorauthentication",
      children: "多要素認証でログイン"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Web ブラウザーで BioStar X のログイン画面にアクセスします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザー ID とパスワードを入力し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auth.login"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "指紋入力画面が表示されたら、指紋スキャナーで指紋をスキャンします。"
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-mfa-login-scan-fingerprint.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ログインを完了します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "指紋スキャンの制限時間は 18 秒に固定されており、変更できません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "最大 3 回まで連続して指紋をスキャンでき、3 回のスキャンで正しく読み取れない場合は認証失敗となります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["認証に失敗した場合は、", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.retry",
              product: "2"
            }), " ボタンをクリックして指紋認証を再試行します。 最大 2 回まで再試行できます。 再試行回数内で認証に失敗した場合、ログイン初期画面に戻ります。"]
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