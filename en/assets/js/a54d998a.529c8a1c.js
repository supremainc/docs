"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9427"], {
16984: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_plugins_development_guide_mdx_a54_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-plugins-development-guide-mdx-a54.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_plugins_development_guide_mdx_a54_namespaceObject = JSON.parse('{"id":"platform/plugins/development-guide","title":"Development Guide","description":"Provides actual development methods and implementation examples of the BioStar X plugin.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/plugins/development-guide.mdx","sourceDirName":"platform/plugins","slug":"/platform/plugins/development-guide","permalink":"/docs/en/platform/plugins/development-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/plugins/development-guide.mdx","tags":[],"version":"current","frontMatter":{"id":"development-guide","title":"Development Guide","description":"Provides actual development methods and implementation examples of the BioStar X plugin.","keywords":["Plugin Development","Endpoint","Session Bridge","Encryption"],"isTranslationMissing":false},"sidebar":"bsxplugins","previous":{"title":"Getting Started","permalink":"/docs/en/platform/plugins/getting-started"},"next":{"title":"Registration and Management","permalink":"/docs/en/platform/plugins/registration-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/plugins/development-guide.mdx


const frontMatter = {
	id: 'development-guide',
	title: 'Development Guide',
	description: 'Provides actual development methods and implementation examples of the BioStar X plugin.',
	keywords: [
		'Plugin Development',
		'Endpoint',
		'Session Bridge',
		'Encryption'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Required endpoint Implementation",
  "id": "required-endpoint-implementation",
  "level": 2
}, {
  "value": "Plugin registration endpoint",
  "id": "plugin-registration-endpoint",
  "level": 3
}, {
  "value": "Request format",
  "id": "request-format",
  "level": 4
}, {
  "value": "Implementation requirements",
  "id": "implementation-requirements",
  "level": 4
}, {
  "value": "Response format",
  "id": "response-format",
  "level": 4
}, {
  "value": "Testing",
  "id": "testing",
  "level": 4
}, {
  "value": "User authentication callback endpoint",
  "id": "user-authentication-callback-endpoint",
  "level": 3
}, {
  "value": "Request format",
  "id": "request-format-1",
  "level": 4
}, {
  "value": "Implementation requirements",
  "id": "implementation-requirements-1",
  "level": 4
}, {
  "value": "Testing",
  "id": "testing-1",
  "level": 4
}, {
  "value": "Encryption implementation",
  "id": "encryption-implementation",
  "level": 2
}, {
  "value": "RSA public key encryption",
  "id": "rsa-public-key-encryption",
  "level": 3
}, {
  "value": "AES-256 decryption",
  "id": "aes-256-decryption",
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
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Guides actual development methods and implementation examples of plugins integrated with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "required-endpoint-implementation",
      children: "Required endpoint Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To develop a plugin integrated with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ", you must implement the following two endpoints. This document uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/bsx"
      }), " as the example path."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "plugin-registration-endpoint",
      children: "Plugin registration endpoint"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Badge, {
        className: "get",
        children: "GET"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/bsx"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the endpoint called to check server accessibility by the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X Service Manager"
      }), " when registering the plugin."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "request-format",
      children: "Request format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-http",
        children: "GET /bsx\nHeaders:\n    X-BioStar-Ping: <ping_token>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementation-requirements",
      children: "Implementation requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        metastring: "title=\"Python FastAPI\"",
        children: "from fastapi import FastAPI, Request\nfrom fastapi.responses import JSONResponse\n\napp = FastAPI()\n\n@app.get(\"/bsx\")\nasync def bsx_ping(request: Request):\n    \"\"\"Ping endpoint for BioStar X plugin registration\"\"\"\n    ping_token = request.headers.get(\"x-biostar-ping\")\n    # Return ping token in response\n    response_data = {\"token\": ping_token}\n    response = JSONResponse(content=response_data)\n    return response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "response-format",
      children: "Response format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        metastring: "title=\"Success (200 OK)\"",
        children: "{\n    \"token\": \"<ping_token_value>\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "testing",
      children: "Testing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can manually test the endpoint using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "curl"
      }), " command."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -H \"X-BioStar-Ping: test123\" http://localhost:8000/bsx\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-authentication-callback-endpoint",
      children: "User authentication callback endpoint"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Badge, {
        className: "post",
        children: "POST"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/bsx"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the endpoint called when the user clicks the plugin icon in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " web interface. In this process, the session of the logged-in user in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " is requested and a response is received."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["A certificate is required for secure communication between ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " and the plugin. The certificate can be downloaded from the details page of the plugin after registration. For more information, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "registration-guide#register-plugin",
          children: "the following"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "request-format-1",
      children: "Request format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-http",
        children: "POST /bsx\nContent-Type: application/x-www-form-urlencoded\n\nuser_id={user_id}&plugin_id={plugin_id}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementation-requirements-1",
      children: "Implementation requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Parameter Validation"
          }), ": Check required values for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "user_id"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "plugin_id"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AES Key Generation"
          }), ": Generate a 32-byte key for secure communication"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key Encryption"
          }), ": Encrypt the AES key with the RSA public key (assuming the filename is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "public_key.pem"
          }), " in the example code)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Session Bridge Request"
          }), ": Request session from the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " server"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Session Decryption"
          }), ": Decrypt the received encrypted session ID with AES"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import uuid\nimport requests\nfrom fastapi import HTTPException, Form\n\n@app.post(\"/bsx\")\nasync def bsx_callback(\n    request: Request,\n    user_id: str = Form(None, description=\"User ID\"),\n    plugin_id: str = Form(None, description=\"Plugin ID\")\n):\n    \"\"\"BioStar X plugin callback processing\"\"\"\n    # 1. Validate required parameters\n    if not user_id:\n      raise HTTPException(status_code=400, detail=\"user_id is required\")\n    if not plugin_id:\n      raise HTTPException(status_code=400, detail=\"plugin_id is required\")\n    \n    # 2. Generate AES key for secure communication\n    key = uuid.uuid4().hex # 32-byte key\n    \n    # 3. Encrypt key with RSA public key\n    encrypted_key = encrypt_with_public_key(key, \"public_key.pem\")\n    \n    # 4. Request session bridge to BioStar server\n    payload = {\n        \"user_id\": user_id,\n        \"plugin_id\": plugin_id,\n        \"key\": encrypted_key\n    }\n\n    response = requests.post(\n        f\"https://{BIOSTAR_SERVER}/api/session/bridge\",\n        json=payload,\n        verify=False\n    )\n\n    # 5. Process response\n    if response.status_code == 200:\n        data = response.json()\n        if data.get(\"Response\", {}).get(\"code\") == \"0\":\n            # Decrypt session ID\n            encrypted_session = data.get(\"bs_session_id\")\n            bs_session_id = decrypt_aes256_base64(encrypted_session, key)\n        else:\n            # Handle BioStar X errors\n            error_msg = data.get(\"Response\", {}).get(\"message\", \"unknown error\")\n            raise HTTPException(status_code=400, detail=f\"BioStar X error: {error_msg}\")\n    else:\n        raise HTTPException(status_code=500, detail=\"Failed to connect to BioStar X server\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "testing-1",
      children: "Testing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can manually test the endpoint using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "curl"
      }), " command."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -X POST http://localhost:8000/bsx \\\n    -H \"Content-Type: application/x-www-form-urlencoded\" \\\n    -d \"user_id={user_id}&plugin_id={your_plugin_id}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "encryption-implementation",
      children: "Encryption implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You must implement the following encryption functions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rsa-public-key-encryption",
      children: "RSA public key encryption"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from cryptography.hazmat.primitives import serialization, padding\nimport base64\n\ndef encrypt_with_public_key(message: str, public_key_path: str) -> str:\n    \"\"\"Encrypt message with RSA public key\"\"\"\n    with open(public_key_path, 'rb') as key_file:\n        public_key = serialization.load_pem_public_key(key_file.read())\n    \n    message_bytes = message.encode('utf-8')\n    encrypted = public_key.encrypt(message_bytes, padding.PKCS1v15())\n    return base64.b64encode(encrypted).decode('utf-8')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aes-256-decryption",
      children: "AES-256 decryption"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from Crypto.Cipher import AES\nfrom Crypto.Util.Padding import unpad\nimport base64\n\ndef decrypt_aes256_base64(encrypted_data: str, key: str) -> str:\n    \"\"\"Decrypt base64 data encrypted with AES256\"\"\"\n    key_bytes = key.encode('utf-8')\n    \n    # Ensure 32-byte key\n    if len(key_bytes) != 32:\n        if len(key_bytes) < 32:\n            key_bytes = key_bytes.ljust(32, b'\\0')\n        else:\n            key_bytes = key_bytes[:32]\n    \n    cipher_text = base64.b64decode(encrypted_data)\n    iv = key_bytes[:16]  # Use first 16 bytes as IV\n    \n    cipher = AES.new(key_bytes, AES.MODE_CBC, iv)\n    decrypted = unpad(cipher.decrypt(cipher_text), AES.block_size)\n    return decrypted.decode('utf-8')\n"
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