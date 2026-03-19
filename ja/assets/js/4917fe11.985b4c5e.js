"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["24200"], {
99505: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_site_selector_mdx_491_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-site-selector-mdx-491.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_site_selector_mdx_491_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-selector","title":"サイトセレクター(Site Selector)","description":"サイトセレクター(Site Selector)機能を使用して、1つのメールアドレスで複数の BioStar Air サイトを管理し、ログイン手順を簡素化する方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/site-selector.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-selector","permalink":"/docs/ja/platform/biostar_air/site-selector","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-selector.mdx","tags":[],"version":"current","frontMatter":{"id":"site-selector","title":"サイトセレクター(Site Selector)","description":"サイトセレクター(Site Selector)機能を使用して、1つのメールアドレスで複数の BioStar Air サイトを管理し、ログイン手順を簡素化する方法を説明します。","keywords":["BioStar Air","ログイン","Site Selector"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"はじめに","permalink":"/docs/ja/platform/biostar_air/getting-started"},"next":{"title":"BioStar Airアプリのはじめ方","permalink":"/docs/ja/platform/biostar_air/managing-sites-with-app"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/site-selector.mdx


const frontMatter = {
	id: 'site-selector',
	title: 'サイトセレクター(Site Selector)',
	description: 'サイトセレクター(Site Selector)機能を使用して、1つのメールアドレスで複数の BioStar Air サイトを管理し、ログイン手順を簡素化する方法を説明します。',
	keywords: [
		'BioStar Air',
		'ログイン',
		'Site Selector'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "サイトセレクター(Site Selector)とは？",
  "id": "siteSelector",
  "level": 2
}, {
  "value": "新しいサイトの作成",
  "id": "newSite",
  "level": 2
}, {
  "value": "1つのメールアドレスで複数のサイトを管理",
  "id": "existingSites",
  "level": 2
}, {
  "value": "サイトセレクター（Site Selector）の使い方",
  "id": "howToLogInAndUseTheSiteSelector",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Airポータルで", (0,jsx_runtime.jsx)(_components.strong, {
        children: "サイトセレクター"
      }), "（Site Selector）機能を使うと、1つのメールアドレスで複数のサイトを管理でき、作業が簡素化されて何度もログインする手間が省けます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "siteSelector",
      children: "サイトセレクター(Site Selector)とは？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "サイトセレクター"
      }), "機能を使用すると、複数のサイトを管理する場合でも1つの統合されたメールアドレスでBioStar Airポータルにログインできます。 各サイトごとに別のメールアドレスでログインする必要はありません。 1つのメールアドレスでログインし、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "サイトセレクター"
      }), "メニューを使用すると、管理するサイト間を簡単に切り替えられます。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-site-selector.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "統合されたメールアドレスを使用しても、各サイトの権限と設定は独立して維持されます。 管理者の役割とアクセス権はサイトごとに個別に管理されます。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "サイト選択"
            }), "機能が表示されない、または誤ったサイトが表示される場合は、マイグレーションの依頼が完了しているか確認するか、サポートチームにお問い合わせください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "サイトセレクター"
            }), "機能はログイン手順を簡素化し、複数のサイトを1つのアカウントに統合することで、BioStar Airで複数のサイトを管理する時間と労力を節約できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["サイト選択リストで", (0,jsx_runtime.jsx)(_components.code, {
              children: "F"
            }), "アイコンが表示されているサイトはフェデレーションサイト（Federation site）です。 フェデレーションサイトは画面左上に表示されます。 フェデレーションサイトの詳細は", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/federated-sites"
            }), "を参照してください。"]
          }), "\n", (0,jsx_runtime.jsx)(Image, {
            src: "/img/air/bsair-site-selector-top.png"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "newSite",
      children: "新しいサイトの作成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "パートナーポータルを通じて新しいサイトを作成する際、別のサイトの管理者アカウントとして登録されている既存のメールアドレスを使用できます。 システムは新しいサイトを既存のメールアドレスに自動的に紐付け、1つのアカウントで複数のサイトを管理できるようにします。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["新しいサイトは", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://partner.biostarair.com/",
            children: "パートナーポータル"
          }), "から作成してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "管理者のメールアドレスを入力するよう促されたら、既に別のサイトに紐付けられているメールアドレスを使用してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新しいサイトは既存のアカウントに自動的に関連付けられます。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["パートナーポータルへの登録と利用に関する詳細は", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/biostar-air-partner-portal-detailed-use"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "existingSites",
      children: "1つのメールアドレスで複数のサイトを管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["既に複数のサイトを管理していて、各サイトで別々のログイン認証を使用している場合は、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Suprema"
      }), " に手動マイグレーションを依頼する必要があります。 このプロセスによりメールアドレスを統合し、すべてのサイトを単一のログインで管理できるようになります。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "サポートチームにご連絡のうえ、サイトの手動マイグレーションを依頼してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:bob+site1@example.com",
            children: "bob+site1@example.com"
          }), " や ", (0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:bob+site2@example.com",
            children: "bob+site2@example.com"
          }), " のようなエイリアスアドレスを使用している場合は、ルートのメールアドレス（", (0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:bob@example.com",
            children: "bob@example.com"
          }), "）を提供してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "各サイトごとに完全に固有のメールアドレスを使用している場合は、すべてのメールアドレスの一覧を提供する必要があります。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["マイグレーションが完了すると、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "サイトセレクター"
          }), "機能を通じて単一のメールアドレスで全サイトにアクセスできるようになります。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "howToLogInAndUseTheSiteSelector",
      children: "サイトセレクター（Site Selector）の使い方"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "複数のサイトを管理できるメールアドレスがあれば、ログインしてサイトを切り替えるのは簡単です。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メールアドレスとパスワードを入力してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["複数のサイトを管理している場合は、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "select_site_title",
            product: "air"
          }), " ウィンドウで目的のサイトを素早く見つけることができます。 サイトを選択するとダッシュボードに移動します。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-site-selector-search.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ログインしたら、画面右上のプロフィールアイコンをクリックしてください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ポップアップメニューが表示されたら、メールアドレスの下にある", (0,jsx_runtime.jsx)(_components.strong, {
            children: "サイトセレクター"
          }), "機能をクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-site-selector-profile.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "メールアドレスに紐づくすべてのサイトの一覧を確認できます。"
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