"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["60870"], {
94102: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_security_overview_mdx_9a1_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-security-overview-mdx-9a1.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_security_overview_mdx_9a1_namespaceObject = JSON.parse('{"id":"platform/biostar_air/security-overview","title":"セキュリティ体制","description":"BioStar Airの包括的なセキュリティ対策について説明します。 エンドツーエンド暗号化、ISO 27001認証、モバイル資格情報の保護、脆弱性管理の実践が含まれます。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/security-overview.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/security-overview","permalink":"/docs/ja/platform/biostar_air/security-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/security-overview.mdx","tags":[],"version":"current","frontMatter":{"id":"security-overview","title":"セキュリティ体制","description":"BioStar Airの包括的なセキュリティ対策について説明します。 エンドツーエンド暗号化、ISO 27001認証、モバイル資格情報の保護、脆弱性管理の実践が含まれます。","keywords":["セキュリティ","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"対応デバイス","permalink":"/docs/ja/platform/biostar_air/access-control-hardware-compatibility"},"next":{"title":"サイト管理者","permalink":"/docs/ja/platform/biostar_air/site-admin-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/security-overview.mdx


const frontMatter = {
	id: 'security-overview',
	title: 'セキュリティ体制',
	description: 'BioStar Airの包括的なセキュリティ対策について説明します。 エンドツーエンド暗号化、ISO 27001認証、モバイル資格情報の保護、脆弱性管理の実践が含まれます。',
	keywords: [
		'セキュリティ',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "ISO 27001認証",
  "id": "iso-27001認証",
  "level": 2
}, {
  "value": "エンドツーエンド（End-to-End）セキュリティのための検証済み技術",
  "id": "エンドツーエンドend-to-endセキュリティのための検証済み技術",
  "level": 2
}, {
  "value": "ポータルアクセスおよびデータ保護",
  "id": "ポータルアクセスおよびデータ保護",
  "level": 3
}, {
  "value": "BioStar Air APIとの暗号化通信",
  "id": "biostar-air-apiとの暗号化通信",
  "level": 3
}, {
  "value": "暗号化およびハッシュ処理されたモバイルカードID",
  "id": "暗号化およびハッシュ処理されたモバイルカードid",
  "level": 3
}, {
  "value": "モバイル機器に保存されたモバイルカードの安全な保存",
  "id": "モバイル機器に保存されたモバイルカードの安全な保存",
  "level": 3
}, {
  "value": "モバイル機器とリーダー間の安全な通信",
  "id": "モバイル機器とリーダー間の安全な通信",
  "level": 3
}, {
  "value": "モバイルカード改ざん防止",
  "id": "モバイルカード改ざん防止",
  "level": 3
}, {
  "value": "脆弱性管理",
  "id": "脆弱性管理",
  "level": 2
}, {
  "value": "リスク評価アプローチ",
  "id": "リスク評価アプローチ",
  "level": 2
}, {
  "value": "多要素認証（MFA）",
  "id": "多要素認証mfa",
  "level": 2
}, {
  "value": "主なセキュリティポリシー",
  "id": "主なセキュリティポリシー",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airは、Supremaの安全なクラウドベースのモバイル入退室管理ソリューションです。 Supremaのハードウェア、ソフトウェア、ファームウェアのエンジニアリングチームは「設計時のセキュリティ」原則に基づいて作業します。 システムアーキテクチャの全レイヤーおよびすべての通信接点は、プライバシー保護とデータ完全性を維持するように設計されています。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "主な対策"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Air管理ポータルおよびデータベースのデータ保護と暗号化"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Air APIとクライアント間のデータ送信時の暗号化と保護"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "スマートフォンに保存されたモバイルカードデータの暗号化"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "スマートフォンとリーダー間の通信保護（Suprema Pass）"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モバイル資格情報の改ざん防止（Suprema Pass）"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "iso-27001認証",
      children: "ISO 27001認証"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SupremaはISO 27001認証を取得しており、データ保護管理、セキュリティ統制、および個人情報管理に関する国際基準を満たしています。 2019年8月に取得されたISO 27001準拠は、一般データ保護規則（GDPR）やカリフォルニア消費者プライバシー法（CCPA）などの類似の法律とも整合しています。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "エンドツーエンドend-to-endセキュリティのための検証済み技術",
      children: "エンドツーエンド（End-to-End）セキュリティのための検証済み技術"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ポータルアクセスおよびデータ保護",
      children: "ポータルアクセスおよびデータ保護"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air管理ポータルは、AES-256以上の暗号化を使用するAWS Amazon RDS暗号化DBインスタンス上で実行されます。 すべての個人データには追加の暗号化が適用されます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "biostar-air-apiとの暗号化通信",
      children: "BioStar Air APIとの暗号化通信"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air REST APIとのすべての通信はHTTPS経由でTLS 1.2を使用して暗号化され、アクセストークン（デフォルトで1時間有効）が必要です。 AWS API Gatewayはブルートフォース攻撃を防ぐためにAPIリクエストを制限します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "暗号化およびハッシュ処理されたモバイルカードid",
      children: "暗号化およびハッシュ処理されたモバイルカードID"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "モバイルカードID番号はAES-256で暗号化され、サードパーティのサーバーで露出するのを防ぎます。 カードデータには真正性確認のためにデジタル署名が行われます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "モバイル機器に保存されたモバイルカードの安全な保存",
      children: "モバイル機器に保存されたモバイルカードの安全な保存"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema Passのモバイル資格情報および関連データはAES-256で暗号化されます。 暗号化キーはモバイル機器のトラステッド実行環境（TEE）、例えばSecure Enclave（Apple）やTrustZone（ARM）に保存されます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "モバイル機器とリーダー間の安全な通信",
      children: "モバイル機器とリーダー間の安全な通信"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bluetooth Low Energy（BLE）を介した「リプレイ攻撃」を防ぐため、BioStar Airは各接続に対してワンタイム暗号化キーを使用し、送信直後に接続を終了して中間者攻撃（MITM）を防ぎます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "モバイルカード改ざん防止",
      children: "モバイルカード改ざん防止"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "各Suprema Passのモバイルクレデンシャルは、各BioStar Airサイト固有のPKIベースのデジタル署名で保護されます。 独自の検証プロセスは改ざんや不正な変更の試みを検出します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "脆弱性管理",
      children: "脆弱性管理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Supremaの情報セキュリティチームが脆弱性管理を主導し、外部のセキュリティ専門家が支援します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "継続的な自動化された脅威スキャン"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全システムレビューを含む年次ISO 27001更新監査"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主要リリース前のペネトレーションテストおよびリスク評価"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "パスワード管理、ソーシャルエンジニアリング耐性、および手順遵守のためのチェック"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "すべての脆弱性および修正措置に関する包括的な文書化および報告"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "リスク評価アプローチ",
      children: "リスク評価アプローチ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "資産は機密性、完全性、可用性の評価に基づいて分類されます。 脅威が特定され、脆弱性が評価され、リスクは発生可能性と影響に基づいて評価されます。 緩和策はリスクの重大度に応じて優先順位付けされます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "多要素認証mfa",
      children: "多要素認証（MFA）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多要素認証（MFA）は段階的に実装されています。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "管理者アカウントに対するメールベースの2FA"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar Airアプリに対するパスコードベースの2FA"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "90日後に非アクティブな管理者アカウントを自動ロック"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "パスワードの有効期限設定が可能（30、60、90日）"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "主なセキュリティポリシー",
      children: "主なセキュリティポリシー"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "送信中データの暗号化: TLS 1.2"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "保存中データの暗号化: AES-256"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DoS保護: AWS API Gatewayによるリクエスト制限"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["サービス可用性: 99.9% 稼働時間(", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://supremainc.com/en/util/biostar-air-service-level-agreement.html",
            children: "SLA基準"
          }), ")"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "APIセキュリティ: トークンベース認証、HTTPS専用、厳格なエンドポイント検証"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ポータルアクセス：グローバル管理向けのクラウドベースのサービスで、プライベートクラウドのオプションは現在開発中です"
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