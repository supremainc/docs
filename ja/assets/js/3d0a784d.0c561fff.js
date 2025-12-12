"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["99955"], {
34421: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_plugins_development_guide_mdx_3d0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-plugins-development-guide-mdx-3d0.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_plugins_development_guide_mdx_3d0_namespaceObject = JSON.parse('{"id":"platform/plugins/development-guide","title":"開発ガイド","description":"BioStar X プラグインの実際の開発方法と実装例を提供します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/plugins/development-guide.mdx","sourceDirName":"platform/plugins","slug":"/platform/plugins/development-guide","permalink":"/docs/ja/platform/plugins/development-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/plugins/development-guide.mdx","tags":[],"version":"current","frontMatter":{"id":"development-guide","title":"開発ガイド","description":"BioStar X プラグインの実際の開発方法と実装例を提供します。","keywords":["プラグイン開発","エンドポイント","セッションブリッジ","暗号化"],"isTranslationMissing":false},"sidebar":"bsxplugins","previous":{"title":"はじめに","permalink":"/docs/ja/platform/plugins/getting-started"},"next":{"title":"登録と管理","permalink":"/docs/ja/platform/plugins/registration-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/plugins/development-guide.mdx


const frontMatter = {
	id: 'development-guide',
	title: '開発ガイド',
	description: 'BioStar X プラグインの実際の開発方法と実装例を提供します。',
	keywords: [
		'プラグイン開発',
		'エンドポイント',
		'セッションブリッジ',
		'暗号化'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "必須エンドポイントの実装",
  "id": "必須エンドポイントの実装",
  "level": 2
}, {
  "value": "プラグイン登録エンドポイント",
  "id": "プラグイン登録エンドポイント",
  "level": 3
}, {
  "value": "リクエスト形式",
  "id": "リクエスト形式",
  "level": 4
}, {
  "value": "実装要件",
  "id": "実装要件",
  "level": 4
}, {
  "value": "レスポンス形式",
  "id": "レスポンス形式",
  "level": 4
}, {
  "value": "テスト",
  "id": "テスト",
  "level": 4
}, {
  "value": "ユーザー認証コールバックエンドポイント",
  "id": "ユーザー認証コールバックエンドポイント",
  "level": 3
}, {
  "value": "リクエスト形式",
  "id": "リクエスト形式-1",
  "level": 4
}, {
  "value": "実装要件",
  "id": "実装要件-1",
  "level": 4
}, {
  "value": "テスト",
  "id": "テスト-1",
  "level": 4
}, {
  "value": "暗号化の実装",
  "id": "暗号化の実装",
  "level": 2
}, {
  "value": "RSA 公開鍵暗号化",
  "id": "rsa-公開鍵暗号化",
  "level": 3
}, {
  "value": "AES-256 復号",
  "id": "aes-256-復号",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar X と連携するプラグインの実際の開発方法と実装例を案内します。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "必須エンドポイントの実装",
      children: "必須エンドポイントの実装"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar X と連携するプラグインを開発するには、次の 2 つのエンドポイントを必ず実装する必要があります。 本ドキュメントでは ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/bsx"
      }), " を例示のパスとして使用します。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "プラグイン登録エンドポイント",
      children: "プラグイン登録エンドポイント"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Badge, {
        className: "get",
        children: "GET"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/bsx"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "これは、プラグインを登録する際に BioStar X Service Manager がサーバーのアクセス性を確認するために呼び出すエンドポイントです。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "リクエスト形式",
      children: "リクエスト形式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-http",
        children: "GET /bsx\nHeaders:\n    X-BioStar-Ping: <ping_token>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "実装要件",
      children: "実装要件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        metastring: "title=\"Python FastAPI\"",
        children: "from fastapi import FastAPI, Request\nfrom fastapi.responses import JSONResponse\n\napp = FastAPI()\n\n@app.get(\"/bsx\")\nasync def bsx_ping(request: Request):\n    \"\"\"BioStar X プラグイン登録用 ping エンドポイント\"\"\"\n    ping_token = request.headers.get(\"x-biostar-ping\")\n    # 応答で ping トークンを返す\n    response_data = {\"token\": ping_token}\n    response = JSONResponse(content=response_data)\n    return response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "レスポンス形式",
      children: "レスポンス形式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        metastring: "title=\"Success (200 OK)\"",
        children: "{\n    \"token\": \"<ping_token_value>\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "テスト",
      children: "テスト"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "curl"
      }), " コマンドを使用してエンドポイントを手動でテストできます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -H \"X-BioStar-Ping: test123\" http://localhost:8000/bsx\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ユーザー認証コールバックエンドポイント",
      children: "ユーザー認証コールバックエンドポイント"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Badge, {
        className: "post",
        children: "POST"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/bsx"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ユーザーが BioStar X の Web インターフェイスでプラグインアイコンをクリックすると呼び出されるエンドポイントです。 この過程で、BioStar X にログインしているユーザーのセッションを要求し、応答を受け取ります。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["BioStar X とプラグイン間の安全な通信には証明書が必要です。 証明書はプラグイン登録後、該当プラグインの詳細ページからダウンロードできます。 詳細については ", (0,jsx_runtime.jsx)(_components.a, {
          href: "registration-guide#register-plugin",
          children: "次のドキュメント"
        }), " を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "リクエスト形式-1",
      children: "リクエスト形式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-http",
        children: "POST /bsx\nContent-Type: application/x-www-form-urlencoded\n\nuser_id={user_id}&plugin_id={plugin_id}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "実装要件-1",
      children: "実装要件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "パラメーター検証"
          }), "：", (0,jsx_runtime.jsx)(_components.code, {
            children: "user_id"
          }), " と ", (0,jsx_runtime.jsx)(_components.code, {
            children: "plugin_id"
          }), " の必須値を確認"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AES キー生成"
          }), "：セキュア通信用の 32 バイトキーを生成"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "キー暗号化"
          }), "：RSA 公開鍵で AES キーを暗号化（例では ", (0,jsx_runtime.jsx)(_components.code, {
            children: "public_key.pem"
          }), " というファイル名を想定）"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "セッションブリッジ要求"
          }), "：BioStar X サーバーにセッションを要求"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "セッション復号"
          }), "：受信した暗号化されたセッション ID を AES で復号"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import uuid\nimport requests\nfrom fastapi import HTTPException, Form\n\n@app.post(\"/bsx\")\nasync def bsx_callback(\n    request: Request,\n    user_id: str = Form(None, description=\"ユーザー ID\"),\n    plugin_id: str = Form(None, description=\"プラグイン ID\")\n):\n    \"\"\"BioStar X プラグインコールバック処理\"\"\"\n    # 1. 必須パラメーター検証\n    if not user_id:\n      raise HTTPException(status_code=400, detail=\"user_idが必要です\")\n    if not plugin_id:\n      raise HTTPException(status_code=400, detail=\"plugin_idが必要です\")\n    \n    # 2. セキュア通信用の AES キー生成\n    key = uuid.uuid4().hex # 32バイトキー\n    \n    # 3. RSA 公開鍵でキーを暗号化\n    encrypted_key = encrypt_with_public_key(key, \"public_key.pem\")\n    \n    # 4. BioStar サーバーにセッションブリッジ要求\n    payload = {\n        \"user_id\": user_id,\n        \"plugin_id\": plugin_id,\n        \"key\": encrypted_key\n    }\n\n    response = requests.post(\n        f\"https://{BIOSTAR_SERVER}/api/session/bridge\",\n        json=payload,\n        verify=False\n    )\n\n    # 5. 応答処理\n    if response.status_code == 200:\n        data = response.json()\n        if data.get(\"Response\", {}).get(\"code\") == \"0\":\n            # セッション ID 復号\n            encrypted_session = data.get(\"bs_session_id\")\n            bs_session_id = decrypt_aes256_base64(encrypted_session, key)\n        else:\n            # BioStar X エラー処理\n            error_msg = data.get(\"Response\", {}).get(\"message\", \"不明なエラー\")\n            raise HTTPException(status_code=400, detail=f\"BioStar X エラー: {error_msg}\")\n    else:\n        raise HTTPException(status_code=500, detail=\"BioStar X サーバー接続失敗\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "テスト-1",
      children: "テスト"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "curl"
      }), " コマンドを使用してエンドポイントを手動でテストできます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -X POST http://localhost:8000/bsx \\\n    -H \"Content-Type: application/x-www-form-urlencoded\" \\\n    -d \"user_id={user_id}&plugin_id={your_plugin_id}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "暗号化の実装",
      children: "暗号化の実装"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "次の暗号化関数を実装する必要があります。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsa-公開鍵暗号化",
      children: "RSA 公開鍵暗号化"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from cryptography.hazmat.primitives import serialization, padding\nimport base64\n\ndef encrypt_with_public_key(message: str, public_key_path: str) -> str:\n    \"\"\"RSA 公開鍵でメッセージを暗号化\"\"\"\n    with open(public_key_path, 'rb') as key_file:\n        public_key = serialization.load_pem_public_key(key_file.read())\n    \n    message_bytes = message.encode('utf-8')\n    encrypted = public_key.encrypt(message_bytes, padding.PKCS1v15())\n    return base64.b64encode(encrypted).decode('utf-8')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aes-256-復号",
      children: "AES-256 復号"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from Crypto.Cipher import AES\nfrom Crypto.Util.Padding import unpad\nimport base64\n\ndef decrypt_aes256_base64(encrypted_data: str, key: str) -> str:\n    \"\"\"AES-256 で暗号化された Base64 文字列を復号\"\"\"\n    key_bytes = key.encode('utf-8')\n    \n    # 32バイトキー保証\n    if len(key_bytes) != 32:\n        if len(key_bytes) < 32:\n            key_bytes = key_bytes.ljust(32, b'\\0')\n        else:\n            key_bytes = key_bytes[:32]\n    \n    cipher_text = base64.b64decode(encrypted_data)\n    iv = key_bytes[:16]  # 最初の16バイトをIVとして使用\n    \n    cipher = AES.new(key_bytes, AES.MODE_CBC, iv)\n    decrypted = unpad(cipher.decrypt(cipher_text), AES.block_size)\n    return decrypted.decode('utf-8')\n"
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