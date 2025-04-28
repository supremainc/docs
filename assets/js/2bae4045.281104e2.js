"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["7908"], {
"942": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_set_permission_mdx_2ba_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-set-permission-mdx-2ba.json
var site_docs_platform_biostar_x_set_permission_mdx_2ba_namespaceObject = JSON.parse('{"id":"platform/biostar_x/set-permission","title":"사용자 권한 설정하기","description":"사용자의 출입 권한 설정 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/set-permission.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/set-permission","permalink":"/docs/platform/biostar_x/set-permission","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/set-permission.mdx","tags":[],"version":"current","frontMatter":{"id":"set-permission","title":"사용자 권한 설정하기","description":"사용자의 출입 권한 설정 방법을 안내합니다.","keywords":["사용자","권한"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"사용자 정보 수정하기","permalink":"/docs/platform/biostar_x/edit-user"},"next":{"title":"사용자 크리덴셜 등록하기","permalink":"/docs/platform/biostar_x/enroll-credential"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar_x/set-permission.mdx


const frontMatter = {
	id: 'set-permission',
	title: '사용자 권한 설정하기',
	description: '사용자의 출입 권한 설정 방법을 안내합니다.',
	keywords: [
		'사용자',
		'권한'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "권한 등급",
  "id": "permission-level",
  "level": 2
}, {
  "value": "사용자 IP",
  "id": "user-ip",
  "level": 2
}, {
  "value": "멀티팩터 인증",
  "id": "multi-factor-authentication",
  "level": 2
}, {
  "value": "출입 그룹",
  "id": "access-group",
  "level": 2
}, {
  "value": "개인 인증 모드",
  "id": "auth-mode",
  "level": 2
}, {
  "value": "장치 기본 인증 모드 제외",
  "id": "exclude-device-auth",
  "level": 2
}, {
  "value": "출입 예외",
  "id": "access-exception",
  "level": 2
}, {
  "value": "연장된 출입문 열림 시간",
  "id": "extended-door-open-time",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, IcClose, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사용자의 출입 권한 설정 방법을 안내합니다. 출입 권한을 통해 사용자가 어떤 공간을 출입할 수 있는지, 어떤 시간대에 출입할 수 있는지 등을 설정할 수 있습니다. 출입 권한은 사용자를 새로 추가하거나 수정할 때 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmd, {
        sid: "common.header.launcher"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.header.user"
      }), " 페이지로 이동해, 아래 두 가지 방식으로 출입 권한을 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "새로운 사용자"
          }), ": 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.dialog.newUser"
          }), " 버튼을 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.dialog.newUser"
          }), " 창의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.title"
          }), " 섹션에서 출입 권한을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "기존 사용자"
          }), ": 사용자 목록에서 사용자를 선택하세요. 화면 오른쪽에 표시되는 프로필 화면에서 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.dialog.newUser"
          }), " 버튼을 클릭하세요. 사용자 정보를 수정할 수 있는 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.title"
          }), " 섹션에서 출입 권한을 설정하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "permission-level",
      children: "권한 등급"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["권한 등급에 따라 BioStar X에서 접근할 수 있는 메뉴가 제한됩니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.operatorLevel"
      }), " 항목에서 사용자의 권한 등급을 선택하세요. 사용자에게 할당할 수 있는 권한 등급은 아래 목록을 참고하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Administrator"
          }), ": 모든 메뉴를 사용할 수 있는 관리자 등급입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "User Operator"
          }), ": 사용자와 설정 메뉴만 사용할 수 있는 등급입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring Operator"
          }), ": 모니터링과 설정 메뉴를 사용할 수 있으며, 대시보드, 사용자, 장치, 출입문, 구역, 출입 통제 메뉴는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "보기"
          }), " 권한만 가집니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Video Operator"
          }), ": 모니터링과 설정 메뉴를 사용할 수 있는 등급입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "TA Operator"
          }), ": 근태 관리 메뉴를 사용할 수 있으며 사용자 메뉴는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "보기"
          }), " 권한만 가집니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "User"
          }), ": 자신의 사용자 정보와 근태 정보만을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visitor Operator"
          }), ": 방문자 메뉴만 사용할 수 있는 등급입니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["사전 정의된 사용자 권한 외 새로운 사용자 권한을 추가하려면 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-ip",
      children: "사용자 IP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 IP 주소를 등록하면, 계정에 등록한 IP 정보와 일치할 경우에만 PC에 로그인할 수 있습니다. 이를 통해 보안을 강화할 수 있습니다. Permission 섹션의 User IP 항목에서 사용자의 IP 주소를 입력하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "IP 주소는 xxx.xxx.xxx.xxx 형식으로 입력할 수 있으며 각 옥텟은 0~255 범위의 숫자로만 입력할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "IP 주소를 등록하지 않으면 IP 정보와 관계없이 PC에 로그인할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "클라우드를 사용할 때는 사용자 계정에 등록된 IP 주소와 PC의 IP 주소가 일치하지 않아도 접속할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multi-factor-authentication",
      children: "멀티팩터 인증"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "멀티팩터 인증"
      }), "을 활성화하면 사용자는 BioStar X에 로그인 시 지문 인증을 추가해 로그인할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.multiFactorAuth"
      }), " 항목에서 사용자의 이중 인증을 설정하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "멀티팩터 인증"
            }), "(Multi-factor authentication, MFA)이란, 2회 이상의 인증 절차를 통해 사용자를 인증하는 방식입니다. 멀티팩터 인증을 사용해 계정에 대한 보안을 강화할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "멀티팩터 인증"
            }), " 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "login-with-mfa",
              children: "다음 문서"
            }), "를 참고하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "access-group",
      children: "출입 그룹"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자의 출입 그룹을 설정해 조직별, 부서별로 출입을 제한할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.accessGroup"
      }), " 항목에서 출입 그룹을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["출입 그룹 추가 및 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "auth-mode",
      children: "개인 인증 모드"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자에 따라 기본 인증 방식을 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.privateAuthMode"
      }), " 항목에서 원하는 인증 방식을 선택하세요. 원하는 인증 방식를 추가로 선택할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["확장 인증 모드를 활성화하면 얼굴과 지문을 포함하여 인증 모드를 조합할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.dialog.extendAuthMode"
            }), " 옵션은 FaceStation F2 및 BioStation 3, BioEntry W3 모델에서만 지원합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["추가한 인증 방식을 삭제하려면 ", (0,jsx_runtime.jsx)(IcClose, {}), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exclude-device-auth",
      children: "장치 기본 인증 모드 제외"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["앞서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.privateAuthMode"
      }), " 항목에서 설정한 개인 인증만 사용하도록 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.excludeDeviceAuthMode"
      }), " 항목을을 클릭해 기능을 활성화하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "team.user.permission.excludeDeviceAuthMode"
        }), " 항목을 비활성화하면 장치에 설정된 인증 방식과 개인 인증 방식 모두를 사용할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "access-exception",
      children: "출입 예외"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자가 모든 출입문을 자유롭게 드나들도록 허용하거나 특정 출입문에 대해서만 출입을 제한하도록 예외를 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.accessException"
      }), " 항목에서 사용자가 출입할 수 있는 출입문(", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.allow"
      }), ")과 출입을 제한할 출입문(", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.deny"
      }), ")을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["추가한 출입문을 삭제하려면 ", (0,jsx_runtime.jsx)(IcClose, {}), " 버튼을 클릭하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extended-door-open-time",
      children: "연장된 출입문 열림 시간"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["연장된 출입 시간 동안에도 출입을 허용할지 설정할 수 있습니다. 연장 출입 시간에 출입을 허용하려면 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.title"
      }), " 섹션의 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.extendedDoorOpenTime"
      }), " 항목을 클릭해 기능을 활성화하세요."]
    }), "\n", (0,jsx_runtime.jsx)(NextStep, {
      children: (0,jsx_runtime.jsx)(NextItem, {
        to: "enroll-credential",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 크리덴션을 등록하고 출입 인증 방식을 설정하세요."
        })
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