"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["30403"], {
43945: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_initial_setup_guide_mdx_91a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-initial-setup-guide-mdx-91a.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_initial_setup_guide_mdx_91a_namespaceObject = JSON.parse('{"id":"platform/biostar_x/initial-setup-guide","title":"初期設定ガイド","description":"BioStar X入退室管理システムの初期設定から運用までを段階的に案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/initial-setup-guide.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/initial-setup-guide","permalink":"/docs/ja/platform/biostar_x/initial-setup-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/initial-setup-guide.mdx","tags":[],"version":"current","frontMatter":{"id":"initial-setup-guide","title":"初期設定ガイド","description":"BioStar X入退室管理システムの初期設定から運用までを段階的に案内します。","keywords":["初期設定","デバイス登録","ドア設定","ユーザー登録"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"ライセンスキーを登録する","permalink":"/docs/ja/platform/biostar_x/register-license-key"},"next":{"title":"サーバー管理","permalink":"/docs/ja/platform/biostar_x/server-management"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/initial-setup-guide.mdx


const frontMatter = {
	id: 'initial-setup-guide',
	title: '初期設定ガイド',
	description: 'BioStar X入退室管理システムの初期設定から運用までを段階的に案内します。',
	keywords: [
		'初期設定',
		'デバイス登録',
		'ドア設定',
		'ユーザー登録'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "デバイス登録",
  "id": "デバイス登録",
  "level": 2
}, {
  "value": "ドアの登録と設定",
  "id": "ドアの登録と設定",
  "level": 2
}, {
  "value": "アクセスレベル設定",
  "id": "アクセスレベル設定",
  "level": 2
}, {
  "value": "アクセスグループ設定",
  "id": "アクセスグループ設定",
  "level": 2
}, {
  "value": "ユーザー登録",
  "id": "ユーザー登録",
  "level": 2
}, {
  "value": "高度な入退室管理設定",
  "id": "高度な入退室管理設定",
  "level": 2
}, {
  "value": "モニタリング",
  "id": "モニタリング",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {DocLink, Step, Steps} = _components;
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["初めて ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " をインストールした後、正常に運用するために必要な設定を段階的に案内します。 各段階を順に実行し、効率的な入退室管理環境を構築してください。"]
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "デバイス登録",
          children: "デバイス登録"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " に接続するデバイスを登録してください。 デバイスごとに認証モードを個別に構成したり、それぞれのデバイスに管理者を設定できます。"]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "また、デバイスで発生する各種イベント（認証失敗、強要指紋認証、アンチパスバック違反など）に応じた動作を設定できます。"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-manage-device-group"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-devices"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-wiegand"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-adding-slave-device"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-device-details"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "ドアの登録と設定",
          children: "ドアの登録と設定"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "デバイスが設置されているドアの情報を登録してください。 リレー、アンチパスバック、二要素認証、アラームなどを設定できます。"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-manage-door-group"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-door-add"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "アクセスレベル設定",
          children: "アクセスレベル設定"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "アクセスレベルはドア情報とスケジュール情報を組み合わせて作成し、1 つのアクセスレベルに複数のドアとスケジュールを登録できます。"
        }), (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_x/settings-access-control-manage-access-level"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "アクセスグループ設定",
          children: "アクセスグループ設定"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "アクセスグループはアクセスレベル（ドア、スケジュール）とユーザー情報を組み合わせて作成し、1 つのアクセスグループに複数のアクセスレベルとユーザーを登録できます。"
        }), (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_x/settings-access-control-manage-access-group"
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "ユーザー登録",
          children: "ユーザー登録"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ユーザー情報やクレデンシャルなど、入退室管理に使用する情報を登録してください。 ユーザー情報はデバイスで直接登録することも、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " で登録することもできます。 さらに、デバイスで登録したユーザー情報を ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " に取り込んだり、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " で登録したユーザー情報をデバイスに送信することもできます。"]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/user-group-manage"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/user-manage"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/add-user"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/enroll-credential"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "高度な入退室管理設定",
          children: "高度な入退室管理設定"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "アンチパスバック、火災警報などを設定でき、火災警報はローカルとグローバルを設定できます。"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/settings-advanced-ac"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-map"
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "アドバンス"
            }), " 以上のライセンスでのみ使用できます。 ライセンスポリシーの詳細は ", (0,jsx_runtime.jsx)(_components.a, {
              href: "licensing",
              children: "以下"
            }), " を参照してください。"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "モニタリング",
          children: "モニタリング"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "ドア、デバイス、イベントなど、さまざまなモニタリング機能を通じてリアルタイムで入退室管理システムを管理できます。"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-door"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-device"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_x/monitoring-event"
            }), "\n"]
          }), "\n"]
        })]
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