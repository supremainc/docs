"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["50869"], {
42997: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_wiegand_format_mdx_f3b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-credential-wiegand-format-mdx-f3b.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_credential_wiegand_format_mdx_f3b_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-credential-wiegand-format","title":"Wiegandカード形式を設定する","description":"Wiegandカード形式の設定方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-wiegand-format.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-credential-wiegand-format","permalink":"/docs/ja/platform/biostar_x/settings-credential-wiegand-format","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-credential-wiegand-format.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-credential-wiegand-format","title":"Wiegandカード形式を設定する","description":"Wiegandカード形式の設定方法を案内します。","keywords":["Wiegand","カード形式","設定"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"カードを管理する","permalink":"/docs/ja/platform/biostar_x/settings-credential-card-manage"},"next":{"title":"スマートカード形式を設定する","permalink":"/docs/ja/platform/biostar_x/settings-credential-smart-format"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-credential-wiegand-format.mdx


const frontMatter = {
	id: 'settings-credential-wiegand-format',
	title: 'Wiegandカード形式を設定する',
	description: 'Wiegandカード形式の設定方法を案内します。',
	keywords: [
		'Wiegand',
		'カード形式',
		'設定'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Wiegandカード形式の設定",
  "id": "wiegandカード形式の設定",
  "level": 2
}, {
  "value": "設定オプションの案内",
  "id": "setting",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcEdit, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "カードデータを読み取る形式を設定できます。 設定したWiegand形式でカードデータが処理されます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiegandカード形式の設定",
      children: "Wiegandカード形式の設定"
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
          children: ["画面左のサイドバーで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.root"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.menu.credential.cardFormat"
          }), " をクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面左のカード形式リストで", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.wiegand",
            product: "2"
          }), " をクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-settings-credentail-card-wiegand-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Wiegand形式リストで名前が指定されていない項目の", (0,jsx_runtime.jsx)(IcEdit, {}), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.addNewWiegand",
            product: "2"
          }), " 画面が表示されたら、各項目を設定してください。 詳しくは ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#setting",
            children: "次のドキュメント"
          }), " を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["設定したWiegand形式を追加するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.apply",
            product: "2"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Wiegand形式は最大15個まで使用できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "あらかじめ定義された形式は修正または削除できません。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting",
      children: "設定オプションの案内"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wiegandカード形式を追加または修正する際は、以下の項目を参考にビット構成を設定してください。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-settings-credential-wiegand-format.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.name",
            product: "2"
          }), "：Wiegand形式の名前を入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.description",
            product: "2"
          }), "：Wiegand形式の簡単な説明を入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.totalBits",
            product: "2"
          }), "：総ビット数を入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.fcField",
            product: "2"
          }), "：識別コードの使用有無を設定できます。 識別コードを使用する場合はチェックボックスをクリックし、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.startBit",
            product: "2"
          }), " と ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.endBit",
            product: "2"
          }), " を入力してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.idField",
            product: "2"
          }), "：使用するIDの", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.startBit",
            product: "2"
          }), " と ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.endBit",
            product: "2"
          }), " を入力してください。 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " ボタンをクリックするとIDフィールドを追加できます。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "setting.cardFormat.parityBits",
            product: "2"
          }), "：", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.plusAdd",
            product: "2"
          }), " ボタンをクリックしてパリティビット数を入力してください。 使用するパリティビットの位置と開始ビット、終了ビットを入力してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["パリティビットを追加するには、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.cardFormat.totalBits",
          product: "2"
        }), " オプションを入力する必要があります。"]
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