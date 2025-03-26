"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["4834"], {
"8544": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_tutorial_login_mdx_417_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-tutorial-login-mdx-417.json
var site_docs_platform_biostar_x_tutorial_login_mdx_417_namespaceObject = JSON.parse('{"id":"platform/biostar_x/tutorial-login","title":"로그인하기","description":"웹 브라우저로 접속해 BioStar X에 로그인하세요.","source":"@site/docs/platform/biostar_x/tutorial-login.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/tutorial-login","permalink":"/docs/platform/biostar_x/tutorial-login","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/tutorial-login.mdx","tags":[],"version":"current","frontMatter":{"id":"tutorial-login","title":"로그인하기","description":"웹 브라우저로 접속해 BioStar X에 로그인하세요.","keywords":["로그인","웹 브라우저"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"사용자 정의 설치하기","permalink":"/docs/platform/biostar_x/tutorial-custom-install"},"next":{"title":"라이선스 키 등록하기","permalink":"/docs/platform/biostar_x/tutorial-register-license-key"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar_x/tutorial-login.mdx


const frontMatter = {
	id: 'tutorial-login',
	title: '로그인하기',
	description: '웹 브라우저로 접속해 BioStar X에 로그인하세요.',
	keywords: [
		'로그인',
		'웹 브라우저'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "웹 브라우저에서 로그인하기",
  "id": "log-in-from-a-web-browser",
  "level": 2
}, {
  "value": "HTTPS 사용하기",
  "id": "using-https",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["설치 패키지를 통해 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 설치를 모두 완료했다면 웹 브라우저로 접속해 정상 동작하는지 확인하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "는 웹 기반 서비스를 제공하여 언제 어디서든 접속할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "log-in-from-a-web-browser",
      children: "웹 브라우저에서 로그인하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "웹 브라우저를 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["웹 브라우저의 주소 입력창에 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://127.0.0.1"
          }), "을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "BioStar X"
                }), "를 다른 PC에 설치했다면 해당 PC의 IP 주소를 입력하세요. 예, ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "https://192.168.0.1"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["'localhost'를 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "BioStar X"
                }), " 접속 주소로 사용하지 마세요."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "로그인 화면이 나타나면 관리자 계정으로 로그인하세요."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["관리자 아이디는 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "admin"
                }), "입니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["최초 로그인할 때에는 웹 브라우저의 주소 표시줄에 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "안전하지 않음"
                }), " 경고가 표시됩니다. HTTPS 프로토콜을 적용하려면 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#using-https",
                  children: "다음 문서"
                }), "를 참고하세요."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["로그인하면 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Launcher"
      }), " 화면을 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-main-launcher.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Chrome 100 버전 이상의 브라우저를 사용하기를 권장합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "를 설치한 PC의 외부 IP 주소는 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://whatismyipaddress.com/",
              children: "다음 링크"
            }), "로 접속해 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "는 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "443"
            }), " 포트를 기본으로 사용합니다. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "443"
            }), " 포트를 사용하는 프로그램이 있다면 종료하고, 다시 접속을 시도하세요. 해당 프로그램을 종료할 수 없다면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar Setting"
            }), "을 실행하여 포트 번호를 변경하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "change-port",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "using-https",
      children: "HTTPS 사용하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 설치한 PC에 HTTPS 프로토콜을 적용하려면 인증서를 설치해야 합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로그인 화면에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "https.download"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostar-login-download-https.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다운로드한 파일(", (0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register-f305705478.zip"
          }), ")의 압축을 해제하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "cert-register.exe"
          }), " 파일을 실행하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enrollment Certification"
          }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), "를 설치한 PC의 IP 주소를 입력하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/common/biostar-enrollment-certi.png",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["보안 경고 메시지를 확인하고 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            className: "bold"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "웹 브라우저를 다시 시작하고 등록한 IP 주소를 입력하면 아래와 같이 웹 브라우저의 주소 표시줄에 안전함 표시가 나타납니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostar-enrollment-result.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["HTTPS 프로토콜 적용 파일은 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.setting"
        }), " > ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.https.https"
        }), " 메뉴 경로에서도 다운로드할 수 있습니다."]
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
"65": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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