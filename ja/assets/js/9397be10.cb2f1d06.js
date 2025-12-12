"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["24788"], {
64149: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_ad_encrypt_mdx_939_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-ad-encrypt-mdx-939.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_ad_encrypt_mdx_939_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ad-encrypt","title":"Active Directory の暗号化設定","description":"Windows Active Directory サーバーと通信するときに暗号化を使用できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/ad-encrypt.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ad-encrypt","permalink":"/docs/ja/platform/biostar_x/ad-encrypt","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ad-encrypt.mdx","tags":[],"version":"current","frontMatter":{"id":"ad-encrypt","title":"Active Directory の暗号化設定","description":"Windows Active Directory サーバーと通信するときに暗号化を使用できます。","displayed_sidebar":"biostarx","isTranslationMissing":false},"sidebar":"biostarx"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/ad-encrypt.mdx


const frontMatter = {
	id: 'ad-encrypt',
	title: 'Active Directory の暗号化設定',
	description: 'Windows Active Directory サーバーと通信するときに暗号化を使用できます。',
	displayed_sidebar: 'biostarx',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "手順 1。 Active Directory 証明書サービスのインストール",
  "id": "手順-1-active-directory-証明書サービスのインストール",
  "level": 2
}, {
  "value": "手順 2。 LDAPS（LDAP over SSL/TLS）通信の接続",
  "id": "手順-2-ldapsldap-over-ssltls通信の接続",
  "level": 2
}, {
  "value": "手順 3。 ルート証明書のコピー",
  "id": "手順-3-ルート証明書のコピー",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Windows Active Directory サーバーと通信するときに暗号化を使用できます。 Active Directory の暗号化を初めて使用する場合は、以下の手順で設定してください。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "手順-1-active-directory-証明書サービスのインストール",
      children: "手順 1。 Active Directory 証明書サービスのインストール"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Windows Active Directory サーバーで暗号化通信を使用するには、Active Directory 証明書サービスをインストールする必要があります。 Active Directory 証明書サービスは、次の手順でインストールできます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows Active Directory サーバーがインストールされている PC で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "サーバー マネージャー"
          }), " を起動し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "管理"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "役割と機能の追加"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「開始する前に」画面で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「インストールの種類の選択」画面で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "役割ベース"
          }), " または ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "機能ベースのインストール"
          }), " を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「対象サーバーの選択」画面で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "サーバープールからサーバーを選択"
          }), " を選択し、サーバーを確認して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「サーバーの役割の選択」画面で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Active Directory 証明書サービス"
          }), " を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップ画面が表示されたら内容を確認し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "機能の追加"
          }), " を選択して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「Active Directory 証明書サービス」の内容を確認し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「インストール選択の確認」画面で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "インストール"
          }), " をクリックします。 インストールが完了したら ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "対象サーバーで Active Directory 証明書サービスを構成"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「AD CS の構成」ウィンドウが表示されたら内容を確認し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「役割サービス」画面で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "証明機関"
          }), " を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「構成の種類」画面で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "エンタープライズ CA"
          }), " を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「CA の種類」画面で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ルート CA"
          }), " を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「個人キー」画面で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "新しい個人キーを作成する"
          }), " を選択し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「暗号化」、「CA 名」、「有効期間」をそれぞれ設定し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「証明書データベース」画面で ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "証明書データベースの場所"
          }), " と ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "証明書データベースログの場所"
          }), " を設定し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "次へ"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「確認」画面で設定した Active Directory 証明書サービスの内容を確認し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "構成"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "手順-2-ldapsldap-over-ssltls通信の接続",
      children: "手順 2。 LDAPS（LDAP over SSL/TLS）通信の接続"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows の ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "スタート"
          }), " メニューで ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ファイル名を指定して実行"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["入力欄に ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ldp"
          }), " と入力します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["「Ldp-disconnected」ウィンドウが表示されたら ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "接続"
          }), " タブをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "サーバー"
          }), " と ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ポート"
          }), " の入力欄に値を入力し、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SSL"
          }), " を選択して ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " をクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "手順-3-ルート証明書のコピー",
      children: "手順 3。 ルート証明書のコピー"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Windows Active Directory サーバーがインストールされている PC でコマンド プロンプトを起動します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "certutil -ca.cert client.crt"
          }), " コマンドを入力してルート証明書をコピーします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "keytool -import -keystore ad.jks -file client.crt"
          }), " コマンドを入力してサーバー証明書を ", (0,jsx_runtime.jsx)(_components.em, {
            children: ".jks"
          }), " 形式に変換します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: ".jks"
          }), " 形式のサーバー証明書を ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " のインストールパスに保存します。"]
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