"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3653"], {
73537: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_plugins_development_guide_mdx_b33_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-plugins-development-guide-mdx-b33.json
var site_docs_platform_plugins_development_guide_mdx_b33_namespaceObject = JSON.parse('{"id":"platform/plugins/development-guide","title":"개발 가이드","description":"BioStar X 플러그인의 실제 개발 방법과 구현 예시를 제공합니다.","source":"@site/docs/platform/plugins/development-guide.mdx","sourceDirName":"platform/plugins","slug":"/platform/plugins/development-guide","permalink":"/docs/platform/plugins/development-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/plugins/development-guide.mdx","tags":[],"version":"current","frontMatter":{"id":"development-guide","title":"개발 가이드","description":"BioStar X 플러그인의 실제 개발 방법과 구현 예시를 제공합니다.","keywords":["플러그인 개발","엔드포인트","세션 브리지","암호화"],"isTranslationMissing":false},"sidebar":"bsxplugins","previous":{"title":"시작하기","permalink":"/docs/platform/plugins/getting-started"},"next":{"title":"등록 및 관리","permalink":"/docs/platform/plugins/registration-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/platform/plugins/development-guide.mdx


const frontMatter = {
	id: 'development-guide',
	title: '개발 가이드',
	description: 'BioStar X 플러그인의 실제 개발 방법과 구현 예시를 제공합니다.',
	keywords: [
		'플러그인 개발',
		'엔드포인트',
		'세션 브리지',
		'암호화'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "필수 엔드포인트 구현",
  "id": "필수-엔드포인트-구현",
  "level": 2
}, {
  "value": "플러그인 등록 엔드포인트",
  "id": "플러그인-등록-엔드포인트",
  "level": 3
}, {
  "value": "요청 형식",
  "id": "요청-형식",
  "level": 4
}, {
  "value": "구현 요구 사항",
  "id": "구현-요구-사항",
  "level": 4
}, {
  "value": "응답 형식",
  "id": "응답-형식",
  "level": 4
}, {
  "value": "테스트",
  "id": "테스트",
  "level": 4
}, {
  "value": "사용자 인증 콜백 엔드포인트",
  "id": "사용자-인증-콜백-엔드포인트",
  "level": 3
}, {
  "value": "요청 형식",
  "id": "요청-형식-1",
  "level": 4
}, {
  "value": "구현 요구사항",
  "id": "구현-요구사항",
  "level": 4
}, {
  "value": "테스트",
  "id": "테스트-1",
  "level": 4
}, {
  "value": "암호화 구현",
  "id": "암호화-구현",
  "level": 2
}, {
  "value": "RSA 공개키 암호화",
  "id": "rsa-공개키-암호화",
  "level": 3
}, {
  "value": "AES-256 복호화",
  "id": "aes-256-복호화",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Badge} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar X와 연동되는 플러그인의 실제 개발 방법과 구현 예시를 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "필수-엔드포인트-구현",
      children: "필수 엔드포인트 구현"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar X와 연동되는 플러그인을 개발하려면 다음 두 개의 엔드포인트를 반드시 구현해야 합니다. 이 문서에서는 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/bsx"
      }), "를 예시 경로로 사용합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "플러그인-등록-엔드포인트",
      children: "플러그인 등록 엔드포인트"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Badge, {
        className: "get",
        children: "GET"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/bsx"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["플러그인을 등록할 때 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X Service Manager"
      }), "에서 서버 접근성을 확인하기 위해 호출하는 엔드포인트입니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "요청-형식",
      children: "요청 형식"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-http",
        children: "GET /bsx\nHeaders:\n    X-BioStar-Ping: <ping_token>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "구현-요구-사항",
      children: "구현 요구 사항"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        metastring: "title=\"Python FastAPI\"",
        children: "from fastapi import FastAPI, Request\nfrom fastapi.responses import JSONResponse\n\napp = FastAPI()\n\n@app.get(\"/bsx\")\nasync def bsx_ping(request: Request):\n    \"\"\"BioStar 플러그인 등록용 ping 엔드포인트\"\"\"\n    ping_token = request.headers.get(\"x-biostar-ping\")\n    # 응답에 ping 토큰 반환\n    response_data = {\"token\": ping_token}\n    response = JSONResponse(content=response_data)\n    return response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "응답-형식",
      children: "응답 형식"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        metastring: "title=\"Success (200 OK)\"",
        children: "{\n    \"token\": \"<ping_token_value>\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "테스트",
      children: "테스트"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "curl"
      }), " 명령어를 사용해 수동으로 엔드포인트를 테스트할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -H \"X-BioStar-Ping: test123\" http://localhost:8000/bsx\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "사용자-인증-콜백-엔드포인트",
      children: "사용자 인증 콜백 엔드포인트"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Badge, {
        className: "post",
        children: "POST"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/bsx"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자가 BioStar 웹 인터페이스에서 플러그인 아이콘을 클릭할 때 호출되는 엔드포인트입니다. 이 과정에서 BioStar에 로그한 사용자의 세션(session)을 요청해 응답을 받습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "요청-형식-1",
      children: "요청 형식"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-http",
        children: "POST /bsx\nContent-Type: application/x-www-form-urlencoded\n\nuser_id={user_id}&plugin_id={plugin_id}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "구현-요구사항",
      children: "구현 요구사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "매개변수 검증"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "user_id"
          }), "와 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "plugin_id"
          }), " 필수 값 확인"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AES 키 생성"
          }), ": 보안 통신용 32바이트 키 생성"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "키 암호화"
          }), ": RSA 공개키로 AES 키 암호화"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "세션 브리지 요청"
          }), ": BioStar X 서버에 세션 요청"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "세션 복호화"
          }), ": 받은 암호화된 세션 ID를 AES로 복호화"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import uuid\nimport requests\nfrom fastapi import HTTPException, Form\n\n@app.post(\"/bsx\")\nasync def bsx_callback(\n    request: Request,\n    user_id: str = Form(None, description=\"사용자 ID\"),\n    plugin_id: str = Form(None, description=\"플러그인 ID\")\n):\n    \"\"\"BioStar 플러그인 콜백 처리\"\"\"\n    # 1. 필수 매개변수 검증\n    if not user_id:\n      raise HTTPException(status_code=400, detail=\"user_id가 필요합니다\")\n    if not plugin_id:\n      raise HTTPException(status_code=400, detail=\"plugin_id가 필요합니다\")\n    \n    # 2. 보안 통신을 위한 AES 키 생성\n    key = uuid.uuid4().hex # 32바이트 키\n    \n    # 3. RSA 공개키로 키 암호화\n    encrypted_key = encrypt_with_public_key(key, \"public_key.pem\")\n    \n    # 4. BioStar 서버에 세션 브리지 요청\n    payload = {\n        \"user_id\": user_id,\n        \"plugin_id\": plugin_id,\n        \"key\": encrypted_key\n    }\n\n    response = requests.post(\n        f\"https://{BIOSTAR_SERVER}/api/session/bridge\",\n        json=payload,\n        verify=False\n    )\n\n    # 5. 응답 처리\n    if response.status_code == 200:\n        data = response.json()\n        if data.get(\"Response\", {}).get(\"code\") == \"0\":\n            # 세션 ID 복호화\n            encrypted_session = data.get(\"bs_session_id\")\n            bs_session_id = decrypt_aes256_base64(encrypted_session, key)\n        else:\n            # BioStar 오류 처리\n            error_msg = data.get(\"Response\", {}).get(\"message\", \"알 수 없는 오류\")\n            raise HTTPException(status_code=400, detail=f\"BioStar 오류: {error_msg}\")\n    else:\n        raise HTTPException(status_code=500, detail=\"BioStar 서버 연결 실패\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "테스트-1",
      children: "테스트"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "curl"
      }), " 명령어를 사용해 수동으로 엔드포인트를 테스트할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -X POST http://localhost:8000/bsx \\\n    -H \"Content-Type: application/x-www-form-urlencoded\" \\\n    -d \"user_id={user_id}&plugin_id={your_plugin_id}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "암호화-구현",
      children: "암호화 구현"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음 암호화 함수를 구현해야 합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsa-공개키-암호화",
      children: "RSA 공개키 암호화"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from cryptography.hazmat.primitives import serialization, padding\nimport base64\n\ndef encrypt_with_public_key(message: str, public_key_path: str) -> str:\n    \"\"\"RSA 공개키로 메시지 암호화\"\"\"\n    with open(public_key_path, 'rb') as key_file:\n        public_key = serialization.load_pem_public_key(key_file.read())\n    \n    message_bytes = message.encode('utf-8')\n    encrypted = public_key.encrypt(message_bytes, padding.PKCS1v15())\n    return base64.b64encode(encrypted).decode('utf-8')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aes-256-복호화",
      children: "AES-256 복호화"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from Crypto.Cipher import AES\nfrom Crypto.Util.Padding import unpad\nimport base64\n\ndef decrypt_aes256_base64(encrypted_data: str, key: str) -> str:\n    \"\"\"AES256으로 암호화된 base64 데이터 복호화\"\"\"\n    key_bytes = key.encode('utf-8')\n    \n    # 32바이트 키 보장\n    if len(key_bytes) != 32:\n        if len(key_bytes) < 32:\n            key_bytes = key_bytes.ljust(32, b'\\0')\n        else:\n            key_bytes = key_bytes[:32]\n    \n    cipher_text = base64.b64decode(encrypted_data)\n    iv = key_bytes[:16]  # 첫 16바이트를 IV로 사용\n    \n    cipher = AES.new(key_bytes, AES.MODE_CBC, iv)\n    decrypted = unpad(cipher.decrypt(cipher_text), AES.block_size)\n    return decrypted.decode('utf-8')\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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