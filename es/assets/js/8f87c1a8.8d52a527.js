"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["20678"], {
22068: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_web_server_settings_mdx_8f8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-web-server-settings-mdx-8f8.json
var site_docs_device_vionyx_web_server_settings_mdx_8f8_namespaceObject = JSON.parse('{"id":"device/vionyx/web-server-settings","title":"웹 서버 접속 및 설정","description":"ViOnyx Web Server에 처음 접속하여 비밀번호를 설정하고 로그인하는 방법을 안내합니다.","source":"@site/docs/device/vionyx/web-server-settings.mdx","sourceDirName":"device/vionyx","slug":"/device/vionyx/web-server-settings","permalink":"/docs/es/device/vionyx/web-server-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx/web-server-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"web-server-settings","title":"웹 서버 접속 및 설정","description":"ViOnyx Web Server에 처음 접속하여 비밀번호를 설정하고 로그인하는 방법을 안내합니다.","keywords":["keyword1","keyword2","keyword3"],"isTranslationMissing":true},"sidebar":"vionyx","previous":{"title":"설치 및 연결하기","permalink":"/docs/es/device/vionyx/installation"},"next":{"title":"유지보수 및 관리","permalink":"/docs/es/device/vionyx/maintenance"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx/web-server-settings.mdx


const frontMatter = {
	id: 'web-server-settings',
	title: '웹 서버 접속 및 설정',
	description: 'ViOnyx Web Server에 처음 접속하여 비밀번호를 설정하고 로그인하는 방법을 안내합니다.',
	keywords: [
		'keyword1',
		'keyword2',
		'keyword3'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "카메라 웹 서버 접속하기",
  "id": "access-web-server",
  "level": 2
}, {
  "value": "비밀번호 설정하기",
  "id": "비밀번호-설정하기",
  "level": 2
}, {
  "value": "로그인하기",
  "id": "로그인하기",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ViOnyx Web Server에 처음 접속하여 비밀번호를 설정하고 로그인하는 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "access-web-server",
      children: "카메라 웹 서버 접속하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "카메라와 동일한 네트워크에 연결된 컴퓨터에서 진행하세요."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["슈프리마 기술 지원팀(", (0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:CS@suprema.co.kr",
            children: "CS@suprema.co.kr"
          }), ")에 문의하여 패키지 파일(", (0,jsx_runtime.jsx)(_components.em, {
            children: "ViOnyxTool_V1_0_1 4.zip"
          }), ")을 다운로드하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["압축을 해제한 후 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "ViOnyxTool.exe"
          }), "를 실행하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/web-server-settings1.png",
          width: "80%",
          alone: true
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "필수 프로그램이 설치되어 있지 않은 경우, 해당 프로그램을 다운로드할 수 있는 페이지로 연결됩니다."
              }), "\n", (0,jsx_runtime.jsx)(Image, {
                src: "/img/camera/web-server-settings2.png",
                width: "50%",
                alone: true
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["필요한 프로그램을 설치한 후 ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "ViOnyxTool.exe"
                }), "를 다시 실행하세요."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Search for Cameras"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/web-server-settings3.png",
          width: "80%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["검색된 카메라 목록에서 접속할 카메라의 시리얼 넘버(", (0,jsx_runtime.jsx)(_components.strong, {
            children: "DeviceID"
          }), ")를 찾아 IP 주소(", (0,jsx_runtime.jsx)(_components.strong, {
            children: "IP Address"
          }), ")를 확인하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/web-server-settings4.png",
          width: "80%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "웹 브라우저를 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["주소 표시줄에 카메라의 IP 주소(", (0,jsx_runtime.jsx)(_components.strong, {
            children: "IP Address"
          }), ")를 입력한 후 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enter"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ViOnyx Web Server 화면이 나타납니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "비밀번호-설정하기",
      children: "비밀번호 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ViOnyx Web Server에 최초 접속 시 비밀번호를 설정하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#access-web-server",
            children: "카메라 웹 서버 접속하기"
          }), "를 참고하여 웹 브라우저에서 ViOnyx Web Server의 IP 주소로 접속하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/password-setting1-vionyx.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "비밀번호"
          }), " 입력란에 비밀번호를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "비밀번호 확인"
          }), " 입력란에 동일한 비밀번호를 다시 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "입력한 비밀번호가 다음 요구 사항을 모두 충족하는지 확인하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "비밀번호 요구 사항"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "비밀번호 확인"
                }), ": ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "비밀번호"
                }), "와 ", (0,jsx_runtime.jsx)(Cmd, {
                  children: "비밀번호 확인"
                }), " 입력란의 값이 정확히 일치해야 합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "길이"
                }), ": 12자 이상 64자 이하로 입력하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "문자 조합"
                }), ": 영문 대문자(A-Z), 영문 소문자(a-z), 숫자(0-9), 특수문자(", (0,jsx_runtime.jsx)(_components.code, {
                  children: "\""
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "!"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "@"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "#"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "$"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "%"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "^"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "&"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "*"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "("
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: ")"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "-"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "_"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "="
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "+"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "["
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "]"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "{"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "}"
                }), ")를 각각 1개 이상 포함해야 합니다."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "공백, 한글 및 기타 유니코드 문자는 사용할 수 없습니다."
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "보안 규칙"
                }), ": 보안 취약성을 방지하기 위해 다음 패턴은 사용할 수 없습니다."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "4자 이상의 연속된 문자나 숫자 (예: abcd, 1234, 4321)"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "4회 이상 반복되는 동일한 문자나 숫자 (예: aaaa, 1111)"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "사용자 ID 포함 (대소문자 구분 없음)"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "유추하기 쉬운 일반적인 단어나 패턴 (예: password, qwerty)"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 조건이 충족되면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "제출"
          }), " 버튼이 활성화됩니다. 버튼을 클릭하여 비밀번호 설정을 완료하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "비밀번호를 분실하지 않도록 주의하세요. 비밀번호를 분실한 경우, 카메라를 초기화해야 합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "로그인하기",
      children: "로그인하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "비밀번호 설정이 완료되면 로그인 페이지로 자동 이동합니다. 관리자 아이디와 설정한 비밀번호를 입력하여 ViOnyx Web Server에 접속하세요."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/camera/password-setting2-vionyx.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "아이디"
          }), " 입력란에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "admin"
          }), "을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["관리자 아이디(admin)는 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "시스템"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              children: "계정 관리"
            }), "에서 변경할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "비밀번호"
          }), " 입력란에 설정한 비밀번호를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "로그인"
          }), " 버튼을 클릭하세요. 로그인에 성공하면 ViOnyx Web Server의 카메라 라이브 뷰어 화면이 나타납니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "#",
            children: "ViOnyx Web Server 사용자 설명서"
          }), "를 참고하여 카메라를 설정하세요."]
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