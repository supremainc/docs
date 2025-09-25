"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1183"], {
25456: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_plugins_getting_started_mdx_277_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-plugins-getting-started-mdx-277.json
var site_docs_platform_plugins_getting_started_mdx_277_namespaceObject = JSON.parse('{"id":"platform/plugins/getting-started","title":"시작하기","description":"BioStar X 플러그인 개발을 시작하기 위한 준비사항과 기본 개념을 안내합니다.","source":"@site/docs/platform/plugins/getting-started.mdx","sourceDirName":"platform/plugins","slug":"/platform/plugins/getting-started","permalink":"/docs/platform/plugins/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/plugins/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"시작하기","description":"BioStar X 플러그인 개발을 시작하기 위한 준비사항과 기본 개념을 안내합니다.","keywords":["플러그인 개발","시작하기","요구사항","아키텍처"],"isTranslationMissing":false},"sidebar":"bsxplugins","previous":{"title":"개요","permalink":"/docs/platform/plugins/plugins-overview"},"next":{"title":"개발 가이드","permalink":"/docs/platform/plugins/development-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/platform/plugins/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: '시작하기',
	description: 'BioStar X 플러그인 개발을 시작하기 위한 준비사항과 기본 개념을 안내합니다.',
	keywords: [
		'플러그인 개발',
		'시작하기',
		'요구사항',
		'아키텍처'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "시작하기 전에",
  "id": "시작하기-전에",
  "level": 2
}, {
  "value": "필요한 사전 지식",
  "id": "필요한-사전-지식",
  "level": 3
}, {
  "value": "개발 환경 요구사항",
  "id": "개발-환경-요구사항",
  "level": 3
}, {
  "value": "플러그인 아키텍처",
  "id": "플러그인-아키텍처",
  "level": 2
}, {
  "value": "플러그인 동작 개요",
  "id": "플러그인-동작-개요",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "와 연동되는 플러그인을 개발하기 위한 기본 준비사항과 개념을 안내합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시작하기-전에",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "필요한-사전-지식",
      children: "필요한 사전 지식"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTP REST API 개발 경험"
          }), ": 웹 서비스 개발 및 API 통신에 대한 기본 이해"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RSA 공개키 암호화 이해"
          }), ": 비대칭 암호화 방식에 대한 기본 지식"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "AES 대칭키 암호화 이해"
          }), ": 대칭 암호화 방식에 대한 기본 지식"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "웹 서버 개발 경험"
          }), ": Python FastAPI, Node.js Express, Java Spring Boot 등"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "개발-환경-요구사항",
      children: "개발 환경 요구사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X 서버"
          }), ": 테스트용 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 환경"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "개발용 웹 서버"
          }), ": 플러그인을 호스팅할 웹 서버"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTP 클라이언트"
          }), ": curl, Postman 등 API 테스트 도구"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "플러그인-아키텍처",
      children: "플러그인 아키텍처"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 플러그인은 다음과 같은 구조로 동작합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "sequenceDiagram\n    autonumber\n    participant U as User\n    participant P as Plugin\n    participant SM as ServiceManager\n    participant BS as BioStar X Server\n    participant BC as BioStar X Client\n    \n    Note over U,BC: Register Plugin\n    U->>+SM: Register plugin\n    SM->>+P: Ping to register address / e.g. {address}/bsx\n    P->>-SM: Pong with header value in body\n    SM-->SM: Certificate generation\n    SM->>-U: Response / Reg success\n\n    Note over U,BC: Download Certification\n    U->>+SM: Download certification\n    SM-->SM: Certification\n    SM->>-U: Response certification file\n\n    Note over U,BC: Open Plugin Service\n    U->>+BC: Plugin Click\n    BC->>-P: Post request(with user id, plugin id) with new tab\n    U-->>+P: Watched new tab\n    P->>+BS: Post method called <br/>→ /api/session/bridge,<br/>Body: {pluginid, userid, key (a random 32-byte key encrypted with the certification and transmitted)}\n    Note right of BS: /api/session/brdige\n    BS->>-P: Response (bs-session-ID)\n    Note right of BS: Encrypt the current user's bs-session-id using the key and transmit it.\n    Note right of P: bs-session-id must be decrypted before use\n    P->>-U: Response / Open Page"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Key 또는 인증서는 한번 다운로드 후 재발급하지 않는 이상 다시 다운로드할 수 없습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "플러그인-동작-개요",
      children: "플러그인 동작 개요"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 플러그인 시스템은 크게 세 단계로 동작합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "플러그인 등록"
          }), ": Service Manager에서 플러그인 서버 등록 및 접근성 확인"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "인증서 관리"
          }), ": Session Bridge 사용 시 보안 통신을 위한 키 관리"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "플러그인 실행"
          }), ": 사용자가 플러그인 접근 시 자동 세션 브리지를 통한 인증"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["각 단계의 구체적인 구현 방법은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./development-guide",
        children: "개발 가이드"
      }), "를 참고하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "인증서는 플로그인 등록 후 해당 플러그인 상세 페이지에서 다운로드할 수 있습니다. 인증서를 분실했다면 새로 다운로드할 수 있습니다. 이때 기존 인증서는 무효화됩니다."
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