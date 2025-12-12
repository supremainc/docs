"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["91515"], {
60764: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_lockoverride_mdx_f0a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-lockoverride-mdx-f0a.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_lockoverride_mdx_f0a_namespaceObject = JSON.parse('{"id":"platform/biostar_x/lockoverride","title":"緊急開放権限を設定する","description":"カードクレデンシャルに緊急開放権限を付与して、特定のユーザーが緊急時にすべてのドアを開放できるようにする方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/lockoverride.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/lockoverride","permalink":"/docs/ja/platform/biostar_x/lockoverride","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/lockoverride.mdx","tags":[],"version":"current","frontMatter":{"id":"lockoverride","title":"緊急開放権限を設定する","description":"カードクレデンシャルに緊急開放権限を付与して、特定のユーザーが緊急時にすべてのドアを開放できるようにする方法を説明します。","keywords":["緊急","開放","入退室"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"顔マイグレーション","permalink":"/docs/ja/platform/biostar_x/migration-face"},"next":{"title":"モニタリング","permalink":"/docs/ja/platform/biostar_x/how-to-guide-monitoring"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/lockoverride.mdx


const frontMatter = {
	id: 'lockoverride',
	title: '緊急開放権限を設定する',
	description: 'カードクレデンシャルに緊急開放権限を付与して、特定のユーザーが緊急時にすべてのドアを開放できるようにする方法を説明します。',
	keywords: [
		'緊急',
		'開放',
		'入退室'
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
  "value": "緊急開放権限を設定する",
  "id": "緊急開放権限を設定する",
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
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "緊急時に特定のユーザーがすべてのドアにアクセスできるよう緊急開放権限を設定できます。 緊急開放権限が設定されたカードでドアを開放すると、そのドアは開いたままになり誰でも通行できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "開始する前に",
      children: "開始する前に"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["緊急開放権限を設定する前に、まずカードクレデンシャルを追加する必要があります。 カードクレデンシャルの追加方法の詳細は", (0,jsx_runtime.jsx)(_components.a, {
        href: "enroll-credential-card",
        children: "以下"
      }), "を参照してください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "カードクレデンシャル以外のクレデンシャルはサポートしていません。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "スマートカード（AoC）、ToMモバイルアクセスカード（ToM AoC）を除くすべてのカードクレデンシャルをサポートします。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "デバイスによっては緊急開放機能をサポートしていない場合があります。 サポートされるデバイスとファームウェアバージョンは以下を参照してください。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "BioStation 3 ファームウェア v1.4.0 以降"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "緊急開放権限を設定する",
      children: "緊急開放権限を設定する"
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
          children: "ユーザーリストで緊急開放権限を設定するユーザーをダブルクリックします。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["または、ユーザーを選択し、右側に表示されるプロファイルで ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.preview.button.seeMore"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザー詳細画面が表示されたら、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.credential.title"
          }), " セクションに移動します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["緊急開放を許可するカードクレデンシャルの ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.table.lockOverride"
          }), " 項目のチェックボックスをクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-credential-set-emergency-opening.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["警告メッセージが表示されたら内容を確認し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.continue"
          }), " をクリックします。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-credential-set-emergency-opening-warning.png",
          width: "60%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "緊急開放権限の設定が完了します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "ユーザーは緊急開放権限が設定されたカードで全てのドアを開放できます。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "緊急開放権限を付与するカードクレデンシャルは1枚以上選択できます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["緊急開放権限を解除するには、選択したカードクレデンシャルの ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.table.lockOverride"
            }), " 項目のチェックボックスを再度クリックします。"]
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