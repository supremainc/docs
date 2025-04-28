"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["8922"], {
"1043": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_login_with_mfa_mdx_b73_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-login-with-mfa-mdx-b73.json
var site_docs_platform_biostar_x_login_with_mfa_mdx_b73_namespaceObject = JSON.parse('{"id":"platform/biostar_x/login-with-mfa","title":"멀티팩터 인증으로 로그인하기","description":"BioStar X에 로그인할 때 멀티팩터 인증 기능을 사용하면 계정의 보안을 향상시킬 수 있습니다.","source":"@site/docs/platform/biostar_x/login-with-mfa.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/login-with-mfa","permalink":"/docs/en/platform/biostar_x/login-with-mfa","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/login-with-mfa.mdx","tags":[],"version":"current","frontMatter":{"id":"login-with-mfa","title":"멀티팩터 인증으로 로그인하기","description":"BioStar X에 로그인할 때 멀티팩터 인증 기능을 사용하면 계정의 보안을 향상시킬 수 있습니다.","keywords":["로그인","MFA","다중 인증"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"출입 권한별 사용자 확인하기","permalink":"/docs/en/platform/biostar_x/view-user-by-access"},"next":{"title":"비주얼 페이스 마이그레이션","permalink":"/docs/en/platform/biostar_x/migration-visual-face"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar_x/login-with-mfa.mdx


const frontMatter = {
	id: 'login-with-mfa',
	title: '멀티팩터 인증으로 로그인하기',
	description: 'BioStar X에 로그인할 때 멀티팩터 인증 기능을 사용하면 계정의 보안을 향상시킬 수 있습니다.',
	keywords: [
		'로그인',
		'MFA',
		'다중 인증'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "멀티팩터 인증 설정",
  "id": "multi-factor-authentication-setting",
  "level": 2
}, {
  "value": "멀티팩터 인증 일괄 설정",
  "id": "multi-factor-authentication-batch-set",
  "level": 2
}, {
  "value": "멀티팩터 인증으로 로그인",
  "id": "login-with-multi-factor-authentication",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에 로그인 시 보안 강화를 위해 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "멀티팩터 인증"
      }), " 기능을 사용할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.multiFactorAuth"
      }), " 기능을 활성화하면 사용자 아이디와 비밀번호 조합에 지문 스캐너를 통한 지문 인증 단계를 추가합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "멀티팩터 인증"
            }), "(Multi-factor authentication, MFA)이란, 두 가지 이상의 인증 절차를 통해 사용자를 인증하는 방식입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " 기능을 사용하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " 클라이언트 PC에 다중 인증 로그인을 지원하는 지문 스캐너를 연결해야 합니다. 지원되는 지문 스캐너 장치는 아래 목록을 참고하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioMini"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioMini Plus 2"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " 클라우드에서는 지문 인증 로그인을 지원하지 않습니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " 항목을 활성화한 사용자는 로그인할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["액티브 디렉토리 서버 계정으로 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "BioStar X 로그인에 사용"
            }), " 옵션을 사용한다면 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " 기능을 사용할 수 없습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), "을 설정한 사용자는 BioStar X AC 이외의 BioStar X 서비스에 등록할 수 없습니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "전체 관리자(ID 1번) 계정에 멀티팩터 인증 기능을 설정한 후 지문 인증을 사용할 수 없게 되면, 해당 계정에 영구적으로 로그인할 수 없게 됩니다. 주의하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["지문 인증을 사용해 로그인할 수 없다면 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://support.supremainc.com",
              children: "슈프리마 기술지원팀"
            }), "으로 문의하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multi-factor-authentication-setting",
      children: "멀티팩터 인증 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.multiFactorAuth"
      }), "을 설정하려면 다음 단계를 따르세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.header.user"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.multiFactorAuth"
          }), "를 설정하려는 사용자를 더블 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["또는 사용자를 선택하고 오른쪽 화면에 표시되는 프로필에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.more"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 프로필 화면이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.title"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.multiFactorAuth"
          }), " 항목을 클릭해 활성화하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "멀티팩터 인증 설정을 완료합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multi-factor-authentication-batch-set",
      children: "멀티팩터 인증 일괄 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["일괄 편집 기능을 사용해 여러 명의 사용자에게 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.multiFactorAuth"
      }), " 기능을 적용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.header.launcher"
          }), " 페이지에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.header.user"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자 목록에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.multiFactorAuth"
          }), "을 설정하려는 사용자의 가장 왼쪽에 체크 박스를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.batchEdit"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["일괄 편집 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.title"
          }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.multiFactorAuth"
          }), " 항목을 클릭해 활성화하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " 버튼을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "선택한 다수의 사용자에 대한 멀티팩터 인증 설정을 완료합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["선택한 사용자 중 ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " 기능을 활성화하는 데 필요한 조건을 만족하지 않는 사용자는 팝업 메시지에 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "적용할 수 없는 사용자 목록"
            }), "을 통해 확인할 수 있습니다. 설정에 필요한 조건을 확인하고 다시 시도하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "이 기능을 사용하려면 해당 사용자에게 지문 정보를 등록하고, 아이디 및 비밀번호, 권한 등급을 모두 설정해야 합니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "login-with-multi-factor-authentication",
      children: "멀티팩터 인증으로 로그인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["웹 브라우저에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " 로그인 화면으로 접속하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 아이디와 비밀번호를 입력해 로그인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "지문 입력 화면이 나타나면 지문 스캐너를 통해 지문을 스캔하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "로그인을 완료합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "지문 스캔 제한 시간은 18초로 고정되어 있으며, 변경할 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "최대 3회까지 연속으로 지문을 스캔할 수 있으며, 3회 동안 지문이 정확히 스캔되지 않으면 인증 실패 처리됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["인증에 실패했다면 ", (0,jsx_runtime.jsx)(Cmd, {
              children: "재시도"
            }), " 버튼을 클릭해 지문 인증을 재시도하세요. 최대 2회까지 재시도할 수 있습니다. 재시도 횟수 동안 인증에 실패한다면 로그인 초기 화면으로 전환됩니다."]
          }), "\n"]
        }), "\n"]
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