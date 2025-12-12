"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["74820"], {
51895: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_migration_face_mdx_715_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-migration-face-mdx-715.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_migration_face_mdx_715_namespaceObject = JSON.parse('{"id":"platform/biostar_x/migration-face","title":"顔マイグレーション","description":"BioStar X の旧バージョンで登録した顔を最新のアルゴリズムにアップグレードして認識性能を向上できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/migration-face.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/migration-face","permalink":"/docs/ja/platform/biostar_x/migration-face","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/migration-face.mdx","tags":[],"version":"current","frontMatter":{"id":"migration-face","title":"顔マイグレーション","description":"BioStar X の旧バージョンで登録した顔を最新のアルゴリズムにアップグレードして認識性能を向上できます。","keywords":["顔","マイグレーション","顔認証"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"顔を一括登録する ","permalink":"/docs/ja/platform/biostar_x/batch-import-face"},"next":{"title":"緊急開放権限を設定する","permalink":"/docs/ja/platform/biostar_x/lockoverride"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/migration-face.mdx


const frontMatter = {
	id: 'migration-face',
	title: '顔マイグレーション',
	description: 'BioStar X の旧バージョンで登録した顔を最新のアルゴリズムにアップグレードして認識性能を向上できます。',
	keywords: [
		'顔',
		'マイグレーション',
		'顔認証'
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
  "value": "対応デバイスおよびファームウェアバージョン",
  "id": "対応デバイスおよびファームウェアバージョン",
  "level": 3
}, {
  "value": "顔テンプレートタイプに関する注意事項",
  "id": "顔テンプレートタイプに関する注意事項",
  "level": 3
}, {
  "value": "デバイスに関する注意事項",
  "id": "デバイスに関する注意事項",
  "level": 3
}, {
  "value": "マイグレーションを実行",
  "id": "マイグレーションを実行",
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
  }, {Cmd, Details, IcMoreW, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " の旧バージョンで登録した顔を最新のアルゴリズムにアップグレードして認識性能を向上できます。 ユーザーを同期する際、顔画像を除いたテンプレートのみを送信するようプロトコルを改良し、同期に要する時間を大幅に短縮するとともに個人情報に関する問題の発生を防止できます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "開始する前に",
      children: "開始する前に"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "顔マイグレーション機能を実行する前に、次の事項を確認してください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "顔マイグレーションとは？"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["BioStar X サーバーにすでに保存されているユーザーの画像から 2 種類の顔テンプレートを生成する機能です。 ユーザー同期時に顔をテンプレートのみで同期するには、", (0,jsx_runtime.jsx)(Cmd, {
          sid: "team.menu.faceMigration"
        }), " を実行する必要があります。"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "対応デバイスおよびファームウェアバージョン",
      children: "対応デバイスおよびファームウェアバージョン"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "顔をテンプレートとして同期できるデバイスの一覧は以下を参照してください。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FaceStation F2 ファームウェア v2.2.0 以上"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStation 3 ファームウェア v1.3.1 以上"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioEntry W3 ファームウェア v1.0.0 以上"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "FaceStation F2 v1.x.x ファームウェアのサポート終了案内"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " は、ユーザーの顔をデバイスへ同期する際にテンプレートのみを送信するよう変更し、同期性能を最適化しました。 そのため、デバイスでのみテンプレートを抽出できる FaceStation F2 v1.x.x ファームウェアのサポートは終了します。 現在 FaceStation F2 の 1.x.x バージョンのファームウェアを使用している場合、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " を利用するには FaceStation F2 を最新ファームウェアへアップグレードしてください。"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["最新ファームウェアは", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://download.supremainc.com/",
          children: "Suprema ダウンロードセンター"
        }), "からダウンロードできます。"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "顔テンプレートタイプに関する注意事項",
      children: "顔テンプレートタイプに関する注意事項"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FaceStation F2 と BioStation 3、BioEntry W3 では、顔テンプレートタイプが異なります。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "NPU タイプ"
          }), "：BioStation 3、BioEntry W3"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GPU タイプ"
          }), "：FaceStation F2"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "顔テンプレートタイプが異なるデバイス間での同期所要時間"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "team.menu.faceMigration"
            }), " を実行する前に、FaceStation F2 だけを接続して使用していた環境に BioStation 3 や BioEntry W3 を追加して同期すると、テンプレートタイプが異なるため画像から NPU タイプのテンプレートを抽出します。そのため、サーバーに登録されている顔の数によっては相当な時間がかかる場合があります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X での顔登録を推奨"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["デバイスの ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "顔画像を保存"
            }), " オプションを無効にした状態で顔を登録した場合、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " にはテンプレートのみが同期されるため、顔テンプレートタイプが異なるデバイスへは同期できません。したがって、顔は ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " で登録することを推奨します。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "デバイスに関する注意事項",
      children: "デバイスに関する注意事項"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " からエクスポートしたユーザーデータファイルには画像が含まれずテンプレートのみのため、旧ファームウェアを使用している FaceStation F2 および BioStation 3 へはユーザーデータファイルをインポートできません。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "そのため、FaceStation F2 および BioStation 3 でデータファイルをエクスポートする場合は、以下のバージョン以上でのみエクスポートが可能です。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "FaceStation F2 ファームウェア v2.2.0 以上"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStation 3 ファームウェア v1.3.1 以上"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["FaceStation F2、BioStation 3 を使用している場合は、最新バージョンのファームウェアへアップグレードすることを推奨します。 最新ファームウェアは", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://download.supremainc.com/",
          children: "Suprema ダウンロードセンター"
        }), "からダウンロードできます。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "マイグレーションを実行",
      children: "マイグレーションを実行"
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
          children: ["画面右上の ", (0,jsx_runtime.jsx)(IcMoreW, {}), " ボタンを選択し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.faceMigration"
          }), " ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-face-migration.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["警告ポップアップの内容を確認し、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.button.continue"
          }), " をクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-face-migration-warning.png",
          width: "60%"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "顔マイグレーションを実行します。 顔マイグレーションが完了すると、総顔数、成功件数および失敗件数を確認できるポップアップが表示されます。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["マイグレーションが成功したら、デバイスにユーザー情報を同期して変更を適用してください。 デバイスへユーザー情報を送信する方法の詳細は", (0,jsx_runtime.jsx)(_components.a, {
            href: "transfer-user-info-to-device",
            children: "次のドキュメント"
          }), "を参照してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["顔マイグレーションに失敗した場合、失敗したユーザーの一覧を CSV ファイルでダウンロードできます。 マイグレーションに失敗した顔を一括削除するには、", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.delete"
          }), " ボタンをクリックしてください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["この機能は、ユーザー ID が ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            }), " の管理者アカウントのみ使用できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "マイグレーションを実行中は、現在のページから離れないでください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ユーザーによっては、登録された顔画像のサイズが大きいほどテンプレート生成に時間がかかる場合があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "顔 1,000 件の場合の所要時間は約 18 分で、サーバーの性能によって異なる場合があります。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ユーザーの顔画像をサーバーに保存せずテンプレートのみを保存する方法の詳細は", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-server-server#storevisualfaceimage",
              children: "次のドキュメント"
            }), "を参照してください。"]
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