"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["89087"], {
42544: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_service_settings_mdx_7cf_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-x-service-settings-mdx-7cf.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_x_service_settings_mdx_7cf_namespaceObject = JSON.parse('{"id":"platform/biostar_x/service-settings","title":"サービス設定","description":"BioStar X Service Manager の Service Settings では、システムのコアサービスを構成して管理できます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/service-settings.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/service-settings","permalink":"/docs/ja/platform/biostar_x/service-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/service-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"service-settings","title":"サービス設定","description":"BioStar X Service Manager の Service Settings では、システムのコアサービスを構成して管理できます。","keywords":["Service Settings","Service Manager","BioStar X"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"サーバーの起動と停止","permalink":"/docs/ja/platform/biostar_x/manage-server"},"next":{"title":"ポートを変更する","permalink":"/docs/ja/platform/biostar_x/change-port"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_x/service-settings.mdx


const frontMatter = {
	id: 'service-settings',
	title: 'サービス設定',
	description: 'BioStar X Service Manager の Service Settings では、システムのコアサービスを構成して管理できます。',
	keywords: [
		'Service Settings',
		'Service Manager',
		'BioStar X'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "設定変更が必要な状況",
  "id": "when-to-change",
  "level": 2
}, {
  "value": "設定変更方法",
  "id": "how-to-change",
  "level": 2
}, {
  "value": "サービス構成",
  "id": "service-composition",
  "level": 2
}, {
  "value": "BioStar X Core Web Service",
  "id": "biostar-x-core-web-service",
  "level": 3
}, {
  "value": "BioStar X Core Service",
  "id": "biostar-x-core-service",
  "level": 3
}, {
  "value": "Unified Gateway Service",
  "id": "unified-gateway-service",
  "level": 3
}, {
  "value": "BioStar X Coordinator Service",
  "id": "biostar-x-coordinator-service",
  "level": 3
}, {
  "value": "BioStar X Server (Main)",
  "id": "biostar-x-server-(main)",
  "level": 3
}, {
  "value": "BioStar X Cache Service",
  "id": "biostar-x-cache-service",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        children: "BioStar X Service Manager"
      }), " の ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Service Settings"
      }), " メニューでは、システムのコアサービスを構成して管理できます。 各サービスは独立して設定され、ネットワークポートとバージョン情報を確認できます。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        children: "Service Settings"
      }), " は以下の主要サービスで構成されています。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Core Web Service"
          }), "：Web インターフェースサービス"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Core Service"
          }), "：システムのコア機能および API 通信サービス"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Unified Gateway Service"
          }), "：リバースプロキシベースの統合ゲートウェイサービス"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Coordinator Service"
          }), "：分散システムの構成情報管理およびサービス間同期"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Server (Main)"
          }), "：メインサーバーサービス"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Cache Service"
          }), "：データキャッシュとシステム性能の向上"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-to-change",
      children: "設定変更が必要な状況"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "次のような状況でサービス設定を変更する必要があります。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ポート競合の解決"
          }), "：他のアプリケーションが同じポートを使用して競合が発生した場合"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "セキュリティポリシーの遵守"
          }), "：組織のネットワークセキュリティポリシーにより特定のポート範囲のみ許可されている場合"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ファイアウォール設定"
          }), "：企業のファイアウォールで許可されているポートに変更する必要がある場合"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "サーバー環境の変更"
          }), "：サーバー IP アドレスやネットワーク構成を変更する場合"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "性能最適化"
          }), "：トラフィック分散やロードバランシングのためにポートを分離する必要がある場合"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-change",
      children: "設定変更方法"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "BioStar X Service Manager"
          }), " で ", (0,jsx_runtime.jsx)(Cmd, {
            children: "SERVICE SETTINGS"
          }), " メニューをクリックします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "変更するサービスのセクションに移動します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "必要なポート番号やアドレスを修正します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["変更を適用するには、画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
            children: "Apply"
          }), " ボタンをクリックします。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "サービス設定を変更した後、変更を反映させるには関連サービスを再起動してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "一部のサービスではポートの変更に対応していない場合があります。"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "ポート番号を変更する際は、他のサービスやアプリケーションと競合しないよう注意してください。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "service-composition",
      children: "サービス構成"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-core-web-service",
      children: "BioStar X Core Web Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web ベースのユーザーインターフェースを担当するサービスです。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-cws.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "HTTPS Port"
          }), "：Web インターフェース接続ポート (デフォルト：5002)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "WebServerThrift Port"
          }), "：Thrift プロトコルベースの Web サーバー通信ポート (デフォルト：9310)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-core-service",
      children: "BioStar X Core Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "システムのコア機能と外部 API 通信を処理するメインサービスです。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-core-s.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "WebSocket Port"
          }), "：リアルタイムの双方向通信用 WebSocket ポート (デフォルト：9002)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "API Port"
          }), "：REST API 通信用ポート (デフォルト：9010)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "WebServerFastCgi Port"
          }), "：FastCGI プロトコルベースの Web サーバー通信ポート (デフォルト：9000)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Rpc Port"
          }), "：RPC （リモートプロシージャコール）通信ポート (デフォルト：51218)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unified-gateway-service",
      children: "Unified Gateway Service"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["リバースプロキシ方式により ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " サーバーへのリクエストを効率的に処理し、iframe のセキュリティ脆弱性を改善し、SSL 証明書のエラーを最小化します。"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-ugs.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          children: "HTTPS Port"
        }), "：統合ゲートウェイ HTTPS 通信用ポート (デフォルト：443)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-coordinator-service",
      children: "BioStar X Coordinator Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分散システムの構成情報管理、サービス状態のモニタリング、およびサービス間同期を担当するサービスです。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-coordinator-s.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          children: "Client Port"
        }), "：クライアント接続用通信ポート (デフォルト：21810)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              children: "Client Port"
            }), " の値を変更した場合は、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Windows Services"
            }), "(", (0,jsx_runtime.jsx)(_components.em, {
              children: "services.msc"
            }), ") で ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Coordinator Service"
            }), " を探して手動で再起動してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Coordinator Service"
            }), " を再起動した後、", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X Service Manager"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SERVICES"
            }), " メニューで全サービスを再起動します。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["画面右上の ", (0,jsx_runtime.jsx)(Cmd, {
              children: "Stop All"
            }), " ボタンをクリックします。 すべてのサービスが停止した後、", (0,jsx_runtime.jsx)(Cmd, {
              children: "Start All"
            }), " ボタンが有効になったらクリックします。"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-server-(main)",
      children: "BioStar X Server (Main)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "システムのメインサーバーとして機能するコアサービスです。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-server.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Server Address"
          }), "：メインサーバーの IP アドレス"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Server Port"
          }), "：一般サーバー通信用ポート (デフォルト：51212)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "SSL Server Port"
          }), "：SSL セキュア通信ポート (デフォルト：51213)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "gRPC Server Port"
          }), "：gRPC プロトコルベースの高性能通信ポート (デフォルト：51219)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-x-cache-service",
      children: "BioStar X Cache Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "頻繁に使用されるデータをメモリに保存し、システムのデータ処理速度と性能を向上させるサービスです。"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-sm-cache-s.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Client Port"
          }), "：キャッシュサービスのクライアント接続ポート (デフォルト：10800)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Communication Port"
          }), "：キャッシュノード間内部通信ポート (デフォルト：47500)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "Discovery Port"
          }), "：分散キャッシュノード自動検出用ポート (デフォルト：47100)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "change-port",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " のデフォルトポート (443) を変更する手順をステップごとに確認しましょう。"]
        })
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