"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8230"], {
5978: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_visitor_register_mdx_4b5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-visitor-register-mdx-4b5.json
var site_docs_platform_biostar_x_visitor_register_mdx_4b5_namespaceObject = JSON.parse('{"id":"platform/biostar_x/visitor-register","title":"방문 신청하기","description":"방문 신청용 PC에서 방문자가 출입을 신청하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/visitor-register.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/visitor-register","permalink":"/docs/en/platform/biostar_x/visitor-register","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/visitor-register.mdx","tags":[],"version":"current","frontMatter":{"id":"visitor-register","title":"방문 신청하기","description":"방문 신청용 PC에서 방문자가 출입을 신청하는 방법을 안내합니다.","keywords":["방문 신청"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"방문자 신청 및 관리하기","permalink":"/docs/en/platform/biostar_x/visitor"},"next":{"title":"방문 신청 관리하기","permalink":"/docs/en/platform/biostar_x/visitor-register-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/visitor-register.mdx


const frontMatter = {
	id: 'visitor-register',
	title: '방문 신청하기',
	description: '방문 신청용 PC에서 방문자가 출입을 신청하는 방법을 안내합니다.',
	keywords: [
		'방문 신청'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "신규 방문 신청",
  "id": "신규-방문-신청",
  "level": 2
}, {
  "value": "기존 정보로 방문 신청",
  "id": "기존-정보로-방문-신청",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사내 사용자가 아닌 외부 방문자가 방문 신청용 PC를 통해서 출입을 신청하는 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["방문 신청용 PC는 별도로 구성해야 하며, 방문자 설정이 선행되어야 합니다. 방문자 설정 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["방문 신청용 PC에 방문 신청 페이지 바로가기 아이콘이 없는 경우, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-pc-link",
              children: "다음 문서"
            }), "를 참고해 바로가기 아이콘을 생성하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-방문-신청",
      children: "신규 방문 신청"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "처음 방문하는 방문자가 방문 신청용 PC에서 출입을 신청하는 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["방문 신청용 PC에서 방문 신청 페이지를 실행하세요. 방문 신청 페이지 URL 주소는 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://{biostar_x_server_ip}/#/register-welcome"
          }), " 형식입니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-welcome.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 중앙의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.welcome.first.time",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["방문처 출입에 대한 약관 및 개인 정보 처리 방침에 대한 동의를 완료한 후 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "방문 신청에 필요한 정보를 입력하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-info.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.visitor",
                product: "2"
              }), ": 방문자의 이름과 전화번호를 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.host",
                product: "2"
              }), ": 방문 대상 담당자의 이름과 전화번호를 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.accessInfo",
                product: "2"
              }), ": 출입 구역 및 방문 기간을 설정하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["정보 입력을 완료한 후 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "출입 수단을 설정하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-access-credential.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.fingerPrint",
                product: "2"
              }), ": 지문 인증을 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.addFingerprint",
                product: "2"
              }), " 버튼을 클릭한 후 지문을 등록하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.card",
                product: "2"
              }), ": 카드 인증을 사용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.request",
                product: "2"
              }), "으로 설정한 후 관리자에게 카드를 발급 받으세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 완료한 후 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["신청한 모든 정보를 확인한 후 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.register",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-complete.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["방문처 출입에 대한 약관 및 개인 정보 처리 방침 작성에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-terms",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이름은 최대 48자까지 입력할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["방문자 정보 입력에 커스텀 필드를 추가하려면 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-custom-field",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["방문 PC에 할당한 방문처의 출입 그룹만 선택할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-site",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입 그룹에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-access-control-manage-access-group",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이전 단계로 돌아가 방문 정보를 수정하려면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.previousPage",
              product: "2"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "지문을 스캔하려면 방문자 신청용 PC에 지문 등록 장치가 연결되어 있어야 합니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "기존-정보로-방문-신청",
      children: "기존 정보로 방문 신청"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "방문처에 지문이 등록되어 있다면 지문을 검색한 뒤 기존 방문 정보를 사용해 방문을 신청할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["방문 신청용 PC에서 방문 신청 페이지를 실행하세요. 방문 신청 페이지 URL 주소는 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://{biostar_x_server_ip}/#/register-welcome"
          }), " 형식입니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-welcome.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 중앙에 있는 지문 아이콘 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.welcome.search",
            product: "2"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "지문 스캔 장치에 지문을 스캔하세요. 스캔한 지문을 이용해 등록된 사용자를 검색합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이전에 지문을 등록한 방문자와 일치하는 지문이 있다면 확인 메시지가 나타납니다."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-confirm-message.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["검색된 방문자가 맞는다면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["방문처 출입에 대한 약관 및 개인 정보 처리 방침에 대한 동의를 완료한 후 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이전 방문 시 설정한 방문 정보를 확인하세요. 기존 정보를 수정하려면 각 항목을 수정한 후 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-saved-info.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이전 방문 시 설정한 출입 수단을 확인하세요. 기존 출입 수단을 변경하려면 변경할 항목을 수정한 후 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-saved-access-credential.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["신청한 모든 정보를 확인한 후 화면 오른쪽 하단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.register",
            product: "2"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-complete.png"
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