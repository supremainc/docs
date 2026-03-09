"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["29272"], {
65994: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_api_authentication_mdx_3a7_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-api-authentication-mdx-3a7.json
var site_docs_platform_biostar_air_api_authentication_mdx_3a7_namespaceObject = JSON.parse('{"id":"platform/biostar_air/api-authentication","title":"API 인증하기","description":"BioStar Air Cloud API 인증 흐름, API Base URL 목록, Bearer 토큰 발급 및 브라우저에서 토큰을 얻는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/api-authentication.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/api-authentication","permalink":"/docs/ja/platform/biostar_air/api-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/api-authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"api-authentication","title":"API 인증하기","description":"BioStar Air Cloud API 인증 흐름, API Base URL 목록, Bearer 토큰 발급 및 브라우저에서 토큰을 얻는 방법을 안내합니다.","keywords":["API 인증","Bearer 토큰","API Base URL","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"빠른 시작하기","permalink":"/docs/ja/platform/biostar_air/integration-quickstart"},"next":{"title":"사용자 관리 API 사용하기","permalink":"/docs/ja/platform/biostar_air/api-user-management"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/api-authentication.mdx


const frontMatter = {
	id: 'api-authentication',
	title: 'API 인증하기',
	description: 'BioStar Air Cloud API 인증 흐름, API Base URL 목록, Bearer 토큰 발급 및 브라우저에서 토큰을 얻는 방법을 안내합니다.',
	keywords: [
		'API 인증',
		'Bearer 토큰',
		'API Base URL',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "API Base URLs",
  "id": "api-base-urls",
  "level": 2
}, {
  "value": "API 로그인 절차",
  "id": "api-login-flow",
  "level": 2
}, {
  "value": "로그인",
  "id": "login",
  "level": 3
}, {
  "value": "계정 정보 조회",
  "id": "get-self-accounts",
  "level": 3
}, {
  "value": "계정에 로그인",
  "id": "login-to-account",
  "level": 3
}, {
  "value": "웹 브라우저에서 Bearer 토큰 얻는 방법",
  "id": "getYourBearerToken",
  "level": 2
}, {
  "value": "Chrome/Edge (Windows 또는 Mac)",
  "id": "chrome-edge",
  "level": 3
}, {
  "value": "Safari (Mac)",
  "id": "safari",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Kbd} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air Cloud API는 Bearer 토큰(JWT) 기반 인증을 사용합니다. API를 호출하기 전에 로그인 절차를 통해 토큰을 발급받아야 하며, 모든 요청의 Authorization 헤더에 토큰을 포함해야 합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-base-urls",
      children: "API Base URLs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "환경"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Base URL"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Demo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://demo-afs-api.airfob.com/v1/",
              children: "https://demo-afs-api.airfob.com/v1/"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Production - Europe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://e-afs-api.airfob.com/v1/",
              children: "https://e-afs-api.airfob.com/v1/"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Production - Korea"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://a-afs-api.airfob.com/v1/",
              children: "https://a-afs-api.airfob.com/v1/"
            }), " (EU가 아닌 모든 고객 전용)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-login-flow",
      children: "API 로그인 절차"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.postman.com/",
        children: "Postman"
      }), " 또는 프로그래밍 방식으로 API 호출을 수행할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "login",
      children: "로그인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Endpoint"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "login"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Payload"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\n  \"username\": \"your_email\",\n  \"password\": \"your_password\"\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bearer 토큰(JWT)을 반환합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-self-accounts",
      children: "계정 정보 조회"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Endpoint"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "getSelfAccounts"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Authorization"
          }), ": Bearer Token"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "접근 가능한 사이트 및 계정 목록을 반환합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "login-to-account",
      children: "계정에 로그인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Endpoint"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "loginAccount"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Authorization"
          }), ": Bearer Token"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "특정 사이트 토큰을 반환합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getYourBearerToken",
      children: "웹 브라우저에서 Bearer 토큰 얻는 방법"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Postman 없이 브라우저 개발자 도구를 사용해 Bearer 토큰을 직접 얻을 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chrome-edge",
      children: "Chrome/Edge (Windows 또는 Mac)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["웹 브라우저에서 ", (0,jsx_runtime.jsx)(Kbd, {
            children: "F12"
          }), " 또는 ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Ctrl/Cmd + Shift + I"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), " 탭으로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "페이지를 새로 고침하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API 호출을 검색하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["예, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "groups"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "login"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "목록에서 요청을 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Headers"
          }), " 탭으로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["요청 헤더에서 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Authorization: Bearer ..."
          }), "를 찾으세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "오른쪽 마우스를 클릭하여 토큰을 복사하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-chrome-develope.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safari",
      children: "Safari (Mac)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "개발자"
          }), " 메뉴를 활성화하세요. Safari → Preferences → Advanced → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show Develop menu"
          }), "를 체크하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Develop"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show Web Inspector"
          }), "으로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), " 탭으로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "페이지를 새로 고침하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "API 호출을 필터링하고 검사하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["요청 헤더에서 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Authorization: Bearer"
          }), " 토큰을 복사하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "브라우저에서 복사한 Bearer 토큰은 Postman에서 재사용할 수 있습니다. 항상 최신 토큰을 사용하세요."
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