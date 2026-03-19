"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["83143"], {
52059: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_federated_sites_mdx_a2c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-federated-sites-mdx-a2c.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_federated_sites_mdx_a2c_namespaceObject = JSON.parse('{"id":"platform/biostar_air/federated-sites","title":"フェデレーションサイトの管理","description":"集中管理により、マルチテナントビルや複数拠点の組織向けに、BioStar Airでフェデレーションサイトを設定および管理する方法を説明します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/federated-sites.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/federated-sites","permalink":"/docs/ja/platform/biostar_air/federated-sites","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/federated-sites.mdx","tags":[],"version":"current","frontMatter":{"id":"federated-sites","title":"フェデレーションサイトの管理","description":"集中管理により、マルチテナントビルや複数拠点の組織向けに、BioStar Airでフェデレーションサイトを設定および管理する方法を説明します。","keywords":["フェデレーション","サイト","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"パートナーポータルの使い方","permalink":"/docs/ja/platform/biostar_air/biostar-air-partner-portal-detailed-use"},"next":{"title":"ハードウェアのセットアップ","permalink":"/docs/ja/platform/biostar_air/hardware-setup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/federated-sites.mdx


const frontMatter = {
	id: 'federated-sites',
	title: 'フェデレーションサイトの管理',
	description: '集中管理により、マルチテナントビルや複数拠点の組織向けに、BioStar Airでフェデレーションサイトを設定および管理する方法を説明します。',
	keywords: [
		'フェデレーション',
		'サイト',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "フェデレーションサイトとは？",
  "id": "whatFederatedSites",
  "level": 2
}, {
  "value": "マルチテナントビル",
  "id": "マルチテナントビル",
  "level": 3
}, {
  "value": "複数拠点の組織",
  "id": "複数拠点の組織",
  "level": 3
}, {
  "value": "フェデレーションサイトの設定",
  "id": "setFederatedSites",
  "level": 2
}, {
  "value": "パートナーポータルにアクセス",
  "id": "パートナーポータルにアクセス",
  "level": 3
}, {
  "value": "プライマリサイトの作成",
  "id": "プライマリサイトの作成",
  "level": 3
}, {
  "value": "サブサイトの追加",
  "id": "サブサイトの追加",
  "level": 3
}, {
  "value": "重要な考慮事項",
  "id": "important-considerations",
  "level": 2
}, {
  "value": "ユーザーおよびデバイス管理",
  "id": "user-and-reader-management",
  "level": 3
}, {
  "value": "プライマリサイトの使用",
  "id": "primary-site-usage",
  "level": 3
}, {
  "value": "請求",
  "id": "billing",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Step, Steps} = _components;
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Airは", (0,jsx_runtime.jsx)(_components.strong, {
        children: "フェデレーションサイト"
      }), "を作成し、親サイトから複数のサブサイトを円滑に管理できる機能を提供します。 この機能はマルチテナントビルや複数拠点を運営する組織に適しており、分散した入退室管理に対して集中管理を提供します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airのフェデレーションサイト機能を活用することで、管理者は複雑な環境の入退室を効果的に管理し、すべての利害関係者に対して安全でスケーラブルかつ簡素化された体験を提供します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "whatFederatedSites",
      children: "フェデレーションサイトとは？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "フェデレーションサイト"
      }), "は、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "プライマリサイト"
      }), "が1つ以上の", (0,jsx_runtime.jsx)(_components.strong, {
        children: "サブサイト"
      }), "を管理する階層構造をサポートします。 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "フェデレーション管理者"
      }), "と呼ばれるプライマリサイトの管理者は、BioStar Airの画面から直接サブサイトにアクセスして管理できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "フェデレーションサイトは次のような状況で有用です。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "マルチテナントビル",
      children: "マルチテナントビル"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例えば、各フロアに異なる会社が入居している商業ビルでは、以下のように構成できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ビル用の", (0,jsx_runtime.jsx)(_components.strong, {
            children: "マスターアカウント"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["各テナント会社用の", (0,jsx_runtime.jsx)(_components.strong, {
            children: "サブアカウント"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "この構成により、特定フロアへのアクセスが許可された従業員のみがアクセスできるようにして、ビル管理者の管理を簡素化できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "複数拠点の組織",
      children: "複数拠点の組織"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "複数の場所にオフィスがある会社は、以下のように構成できます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "マスターアカウント"
          }), "でグローバル設定を管理"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["各拠点用の", (0,jsx_runtime.jsx)(_components.strong, {
            children: "サブアカウント"
          }), "を作成"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例えば、世界中に10のオフィスがある企業は、フェデレーション構造を使って管理を簡素化できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setFederatedSites",
      children: "フェデレーションサイトの設定"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "パートナーポータルにアクセス",
          children: "パートナーポータルにアクセス"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["アクセスURL: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://partner.biostarair.com",
            children: "https://partner.biostarair.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar Airのパートナーポータルはパートナーおよび導入業者のみが利用できます。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "最終顧客がこの機能を設定するには導入業者にお問い合わせください。"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "プライマリサイトの作成",
          children: "プライマリサイトの作成"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "https://partner.biostarair.com",
                children: "パートナーポータル"
              }), "にログインしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "サイト作成"
              }), "をクリックし、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "サイトプロファイル"
              }), "で", (0,jsx_runtime.jsx)(_components.strong, {
                children: "フェデレーションサイト"
              }), "を選択してください。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["この手順はサイトを初めて設定する際に", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "必ず"
                  }), "実行する必要があります。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "通常のサイトは後からフェデレーションサイトに変更できません。"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "同じ画面でフェデレーションサイト管理者を追加してください。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["パートナーポータルで追加された", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "フェデレーションサイト管理者"
                  }), "は、プライマリサイトとすべてのサブサイトにアクセスできます。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["BioStar Air上で追加された", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "一般管理者"
                  }), "は個別サイトのみ管理できます。"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "サブサイトの追加",
          children: "サブサイトの追加"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["プライマリサイトがフェデレーションサイトに設定されると、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "サイト一覧"
              }), "にサブサイトを作成するオプションが表示されます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "サブサイト作成"
              }), "をクリックし、他のサイトと同様に構成してください。"]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-considerations",
      children: "重要な考慮事項"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-and-reader-management",
      children: "ユーザーおよびデバイス管理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ユーザーとデバイスは各サブサイトごとに個別に追加する必要があります。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "デバイスは一度に1つのサイトにのみ登録できます。 プライマリサイトまたはサブサイトのいずれかを選択してください。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primary-site-usage",
      children: "プライマリサイトの使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一部の顧客はプライマリサイトをサブサイト管理のアクセスポイントとしてのみ使用し、プライマリサイトにユーザーやデバイスを登録しません。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "例1"
          }), ": 3つの支社オフィスを持つ企業は、デバイスを持たないプライマリサイトを設定し、各支社ごとにサブサイトを作成します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "例2"
          }), ": 本社と3つの支社を持つ会社は、本社（プライマリサイト）でユーザーとデバイスを登録し、支社用のサブサイトを設定します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "billing",
      children: "請求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "請求はサイトごとに登録されたデバイス（リーダー）の数に基づいて計算されます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "登録されたデバイスがないプライマリサイトを作成する際に追加料金は発生しません。"
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