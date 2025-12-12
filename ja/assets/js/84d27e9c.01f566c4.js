"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["22730"], {
63732: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_system_restore_mdx_84d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-system-system-restore-mdx-84d.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_system_system_restore_mdx_84d_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-system-system-restore","title":"システムを復元する","description":"システムバックアップファイルを使用して、BioStar X のデータベース、設定、ライセンスなどを以前の状態に復元する方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-system-restore.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-system-system-restore","permalink":"/docs/ja/platform/biostar_x/settings-system-system-restore","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-system-system-restore.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-system-system-restore","title":"システムを復元する","description":"システムバックアップファイルを使用して、BioStar X のデータベース、設定、ライセンスなどを以前の状態に復元する方法を案内します。","keywords":["システム復元","復元","バックアップ復元","データ復旧","BioStar X Restore"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"システムをバックアップする","permalink":"/docs/ja/platform/biostar_x/settings-system-system-backup"},"next":{"title":"システムセキュリティを強化する","permalink":"/docs/ja/platform/biostar_x/settings-system-security"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-system-system-restore.mdx


const frontMatter = {
	id: 'settings-system-system-restore',
	title: 'システムを復元する',
	description: 'システムバックアップファイルを使用して、BioStar X のデータベース、設定、ライセンスなどを以前の状態に復元する方法を案内します。',
	keywords: [
		'システム復元',
		'復元',
		'バックアップ復元',
		'データ復旧',
		'BioStar X Restore'
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
    code: "code",
    em: "em",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {IcInfo, Image, Start} = _components;
  if (!IcInfo) _missingMdxReference("IcInfo", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " で問題が発生した場合や以前の状態に戻す必要がある場合は、システムバックアップファイルを使用して復元できる。 復元機能を使用すると、データベース、各種設定、ライセンス情報などをバックアップ時点の状態に戻せる。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["復元を実行すると、現在のデータがバックアップ時点の状態に戻る。 復元の前に現在の状態をバックアップすることを推奨する。 現在の状態をバックアップするには ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-system-system-backup",
              children: "the following"
            }), " を参照する。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "復元を実行する際、復元先サーバーの IP アドレスがバックアップ元サーバーの IP アドレスと異なる場合、復元が失敗する可能性がある。 復元を実行する前にサーバーの IP アドレスを確認する。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["SQL Server データベースと ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " が別々のサーバーにインストールされている場合、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " のシステムバックアップと復元は使用できません。"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Windows で ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Restore"
          }), " を実行する。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["プログラムパス：", (0,jsx_runtime.jsx)(_components.em, {
              children: "C:\\Program Files\\BioStar X\\biostar-restore.exe"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Select File"
          }), " をクリックし、復元するバックアップファイルを選択する。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/setting-system-restore.png",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["復元を開始するには ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Restore"
          }), " をクリックする。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Starting Biostar services...Done"
      }), " メッセージが表示されたら、復元が完了した状態だ。 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " に接続し、復元されたデータを確認する。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["バックアップ時点の ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " バージョンと現在のバージョンが異なる場合、復元を実行できない。 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " のバージョンを確認するには、画面右上の ", (0,jsx_runtime.jsx)(IcInfo, {}), " をクリックする。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/biostarx-settings-system-restore-check-ver.png"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["バックアップ時点の ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " バージョンを確認するには、バックアップファイルを展開し、", (0,jsx_runtime.jsx)(_components.em, {
              children: "sysbackup.conf"
            }), " の ", (0,jsx_runtime.jsx)(_components.code, {
              children: "biostarVersion"
            }), " を確認する。"]
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