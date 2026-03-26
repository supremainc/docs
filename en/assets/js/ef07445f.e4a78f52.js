"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["46885"], {
81001: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_getting_started_mdx_ef0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-getting-started-mdx-ef0.json
var site_docs_device_vionyx_webserver_getting_started_mdx_ef0_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/getting-started","title":"시작하기","description":"ViOnyx Web Server에 처음 로그인하고 비밀번호 설정하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/getting-started.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/getting-started","permalink":"/docs/en/device/vionyx_webserver/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"시작하기","description":"ViOnyx Web Server에 처음 로그인하고 비밀번호 설정하는 방법을 안내합니다.","keywords":["ViOnyx","Web Server","시작하기"],"isTranslationMissing":true},"sidebar":"aicamwebserver","previous":{"title":"ViOnyx Web Server","permalink":"/docs/en/device/vionyx_webserver/"},"next":{"title":"사용자 인터페이스 이해하기","permalink":"/docs/en/device/vionyx_webserver/ui-navigation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: '시작하기',
	description: 'ViOnyx Web Server에 처음 로그인하고 비밀번호 설정하는 방법을 안내합니다.',
	keywords: [
		'ViOnyx',
		'Web Server',
		'시작하기'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "비밀번호 설정",
  "id": "비밀번호-설정",
  "level": 2
}, {
  "value": "로그인",
  "id": "로그인",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ViOnyx 카메라를 처음 설치한 후, 웹 브라우저에서 카메라의 IP 주소로 접속할 수 있습니다. 초기 로그인 시 보안을 위해 비밀번호를 설정해야 하며, 설정 완료 후 로그인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "비밀번호-설정",
      children: "비밀번호 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "처음 로그인할 때는 보안을 위해 강력한 비밀번호를 설정해야 합니다. ViOnyx는 강력한 비밀번호 정책을 적용하여 시스템 보안을 보장합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "웹 브라우저에서 ViOnyx Web Server의 IP 주소로 접속하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/password-setting1-vionyx.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["비밀번호 설정 페이지에 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "password",
            product: "cam"
          }), " 입력란에 새로운 비밀번호를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "confirm_password",
            product: "cam"
          }), " 필드에 동일한 비밀번호를 다시 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "입력한 비밀번호들이 아래의 모든 요구 사항을 만족하는지 확인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모든 조건이 충족되면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "submit",
            product: "cam"
          }), " 버튼이 활성화됩니다. 버튼을 클릭해 비밀번호 설정을 완료하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "비밀번호 요구 사항"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "비밀번호는 다음의 모든 조건을 만족해야 합니다:"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "password",
              product: "cam"
            }), " 필드와 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "confirm_password",
              product: "cam"
            }), " 필드의 값이 정확히 일치해야 합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "비밀번호는 최소 12자 이상이어야 합니다. 최대 64자 이하로 제한합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["최소 1개의 영어 소문자(", (0,jsx_runtime.jsx)(_components.code, {
              children: "a-z"
            }), ")와 대문자(", (0,jsx_runtime.jsx)(_components.code, {
              children: "A-Z"
            }), ")를 포함해야 합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["최소 1개의 숫자(", (0,jsx_runtime.jsx)(_components.code, {
              children: "0-9"
            }), ")와 특수문자를 포함해야 합니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["특수문자 예시: ", (0,jsx_runtime.jsx)(_components.code, {
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
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1234"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "abcd"
            }), " 같이 연속 문자 4개 이상, 동일 문자 4개 이상을 포함할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "대소문자와 무관하게 아이디는 비밀번호에 포함할 수 없습니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "admin, Admin, ADMIN, Admin123! 등"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "password"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "qwerty"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "123456"
            }), " 등 흔히 사용되는 비밀번호 패턴은 사용할 수 없습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "설정한 비밀번호는 안전한 장소에 보관하세요. 비밀번호를 분실한 경우 카메라를 초기화해야 합니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "로그인",
      children: "로그인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "비밀번호 설정이 완료되면 로그인 페이지로 자동 이동합니다. 관리자 아이디와 설정한 비밀번호를 입력하여 ViOnyx Web Server에 접속하세요."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/password-setting2-vionyx.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "id",
            product: "cam"
          }), " 입력란에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "admin"
          }), "을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "password",
            product: "cam"
          }), " 입력란에 설정한 비밀번호를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "로그인"
          }), " 버튼을 클릭하세요"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["로그인에 성공하면 ViOnyx Web Server의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "live",
        product: "cam"
      }), " 페이지로 이동합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["관리자 아이디(admin)는 ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "system",
          product: "cam"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "account_management",
          product: "cam"
        }), "에서 변경할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "live-basic",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "live",
            product: "cam",
            className: "normal"
          }), " 메뉴의 주요 기능과 사용 방법을 안내합니다."]
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "configure-ai-events-and-rules",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "AI 이벤트를 설정하여 카메라가 감지한 특정 상황을 모니터링할 수 있습니다."
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "configure-camera-device",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라의 다양한 설정을 통해 촬영 환경에 맞는 최적의 영상 품질을 유지하고, 네트워크를 구성하며, 보안 및 개인정보 보호 정책을 적용할 수 있습니다."
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "manage-people",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자를 등록하여 AI 얼굴 인식 기능을 활용할 수 있습니다."
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "system-management",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라 시스템을 효과적으로 관리하기 위해 디바이스 정보, 펌웨어, 유지 관리, 계정, 오디오, 로그 등을 체계적으로 관리할 수 있습니다."
        })
      })]
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