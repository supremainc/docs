"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["48888"], {
60636: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_update_admin_password_mdx_fd2_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-update-admin-password-mdx-fd2.json
var site_docs_device_vionyx_webserver_update_admin_password_mdx_fd2_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/update-admin-password","title":"관리자 계정 비밀번호 업데이트하기","description":"카메라의 관리자 계정 비밀번호를 변경하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/update-admin-password.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/update-admin-password","permalink":"/docs/ja/device/vionyx_webserver/update-admin-password","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/update-admin-password.mdx","tags":[],"version":"current","frontMatter":{"id":"update-admin-password","title":"관리자 계정 비밀번호 업데이트하기","description":"카메라의 관리자 계정 비밀번호를 변경하는 방법을 안내합니다.","keywords":["관리자","비밀번호","보안","계정","변경","업데이트"],"isTranslationMissing":true},"sidebar":"aicamwebserver","previous":{"title":"오디오 클립 업로드하기","permalink":"/docs/ja/device/vionyx_webserver/upload-audio-clips"},"next":{"title":"운영자 추가하기","permalink":"/docs/ja/device/vionyx_webserver/add-operators"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/update-admin-password.mdx


const frontMatter = {
	id: 'update-admin-password',
	title: '관리자 계정 비밀번호 업데이트하기',
	description: '카메라의 관리자 계정 비밀번호를 변경하는 방법을 안내합니다.',
	keywords: [
		'관리자',
		'비밀번호',
		'보안',
		'계정',
		'변경',
		'업데이트'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "비밀번호 규칙 확인",
  "id": "비밀번호-규칙-확인",
  "level": 2
}, {
  "value": "관리자 비밀번호 변경",
  "id": "관리자-비밀번호-변경",
  "level": 2
}, {
  "value": "비밀번호를 잊어버렸을 때",
  "id": "비밀번호를-잊어버렸을-때",
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
  }, {Cmd, DocLink, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "관리자 계정의 비밀번호를 변경하여 카메라 접근 보안을 강화할 수 있습니다. 비밀번호는 정기적으로 변경하는 것이 보안 모범 사례입니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음과 같은 상황에서 비밀번호를 변경하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "관리자 계정을 처음 설정할 때 보안을 강화하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "정기적인 보안 정책에 따라 비밀번호를 갱신하고 싶을 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비밀번호가 노출되어 긴급하게 변경해야 할 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "관리자 교체 시 새로운 비밀번호로 설정하고 싶을 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "비밀번호-규칙-확인",
      children: "비밀번호 규칙 확인"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "비밀번호를 설정하기 전에 다음 규칙을 확인하세요. 모든 규칙을 동시에 만족해야 합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "관리자-비밀번호-변경",
      children: "관리자 비밀번호 변경"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "system",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "account_management",
            product: "cam"
          }), "를 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-system-account-manage.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "administrator",
            product: "cam"
          }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "current_password",
            product: "cam"
          }), " 입력란에 현재 관리자 비밀번호를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "password",
            product: "cam"
          }), " 입력란에 새 비밀번호를 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["새로운 비밀번호를 변경하려면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "update",
            product: "cam"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "성공 메시지가 나타나면 비밀번호 변경이 완료됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "비밀번호 변경 후 다시 로그인해야 할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "비밀번호 변경 기록은 시스템 로그에 남습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "비밀번호를-잊어버렸을-때",
      children: "비밀번호를 잊어버렸을 때"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "관리자 비밀번호를 잃어버렸다면 다음 방법으로 해결할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "카메라 초기화"
          }), ": Factory Reset을 실행하면 관리자 계정이 기본값으로 복원됩니다. 단, 모든 데이터가 삭제됩니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "device/vionyx_webserver/manage-device"
          }), "를 참조하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "기술 지원 연락"
          }), ": 슈프리마의 기술 지원 팀에 연락하여 도움을 받으세요."]
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