"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1050"], {
84933: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (MDXContent),
  d$: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "2025년 5월 이전에 BioStar Air 출입 통제 서비스를 사용하기 시작한 고객은 현재 Suprema Pass 앱으로 새로 설계된 Airfob Space 앱을 계속 사용할 수 있습니다. 두 앱 모두 동일한 기능을 제공하며 완벽하게 호환됩니다. 기존 사용자는 전환할 필요가 없으며, 모바일 인증 정보가 두 앱 모두에서 원활하게 작동합니다."
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
72276: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_13_door_management_managing_door_schedules_mdx_560_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-13-door-management-managing-door-schedules-mdx-560.json
var site_docs_platform_biostar_air_13_door_management_managing_door_schedules_mdx_560_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-door-schedules","title":"출입문 스케줄 관리하기","description":"BioStar Air에서 자동화 출입문 스케줄을 만들고 구성하는 방법, 잠금 해제 및 잠금 시간 설정 방법, 인증 기반 출입 통제를 관리하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/13-door-management-managing-door-schedules.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-door-schedules","permalink":"/docs/platform/biostar_air/managing-door-schedules","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/13-door-management-managing-door-schedules.mdx","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"id":"managing-door-schedules","title":"출입문 스케줄 관리하기","description":"BioStar Air에서 자동화 출입문 스케줄을 만들고 구성하는 방법, 잠금 해제 및 잠금 시간 설정 방법, 인증 기반 출입 통제를 관리하는 방법을 안내합니다.","keywords":["출입문 스케줄","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"출입문 및 장치 그룹 관리하기","permalink":"/docs/platform/biostar_air/managing-door-and-device-groups"},"next":{"title":"이벤트 로그와 감사 로그","permalink":"/docs/platform/biostar_air/event-and-audit-logs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(84933);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/13-door-management-managing-door-schedules.mdx


const frontMatter = {
	id: 'managing-door-schedules',
	title: '출입문 스케줄 관리하기',
	description: 'BioStar Air에서 자동화 출입문 스케줄을 만들고 구성하는 방법, 잠금 해제 및 잠금 시간 설정 방법, 인증 기반 출입 통제를 관리하는 방법을 안내합니다.',
	keywords: [
		'출입문 스케줄',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "기능 개요",
  "id": "feature-overview",
  "level": 2
}, ..._biostarair_customer_notice/* toc */.d$, {
  "value": "출입문 스케줄로 이동",
  "id": "navigating-to-door-schedules",
  "level": 2
}, {
  "value": "잠금 해제 스케줄 구성",
  "id": "configuring-unlock-schedules",
  "level": 2
}, {
  "value": "첫 인증 후 잠금 해제",
  "id": "unlock-after-first-authentication",
  "level": 3
}, {
  "value": "잠금 스케줄 설정하기",
  "id": "configuring-lock-schedules",
  "level": 2
}, {
  "value": "출입 관리에서 스케줄 직접 만들기",
  "id": "creating-schedules-directly-from-door-management",
  "level": 2
}, {
  "value": "주요 고려 사항",
  "id": "key-considerations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-overview",
      children: "기능 개요"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air의 출입문 스케줄을 통해 관리자는 시간 설정에 따라 출입문 잠금 및 잠금 해제를 자동화할 수 있습니다. 이 스케줄 설정을 통해 안전하고 통제된 출입을 보장할 수 있습니다.. 관리자는 잠금 및 잠금 해제 스케줄을 설정하고, 'Unlock after First Authentication'와 같은 고급 옵션을 설정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigating-to-door-schedules",
      children: "출입문 스케줄로 이동"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문 스케줄로 이동하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Door Management"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Registered Doors"
          }), "로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "구성할 출입문을 선택하려면 각 출입문 옆의 체크박스를 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["툴바에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Schedule Icon"
          }), " (체크 표시가 있는 달력 아이콘)을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuring-unlock-schedules",
      children: "잠금 해제 스케줄 구성"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "잠금 해제 스케줄은 출입문이 인증 없이 열려 있는 시간입니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Unlock Schedule"
          }), " 탭에서 미리 정의된 스케줄을 선택하거나 새 스케줄을 만드세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "새 스케줄을 아래의 단계에 따라 만드세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Create Schedule"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Name"
              }), "과 설명(선택 사항)을 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "인증 없이 출입문이 열려 있어야 하는 요일과 시간을 선택하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Save"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["잠금 해제 스케줄을 적용하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unlock-after-first-authentication",
      children: "첫 인증 후 잠금 해제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "출입문이 첫 번째 인증된 사용자가 인증할 때까지 잠금 상태를 유지할 수 있습니다. 잠금 해제되면 이후 예약된 시간 동안 출입문은 열려 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Unlock Schedule"
          }), " 탭에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Unlock After First Authentication"
          }), "을 활성화하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "인증 후 출입문이 열려 있어야 하는 시간을 정의하는 스케줄을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["변경 사항을 적용하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "사용 예시"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "이 기능은 출입문이 첫 번째 직원이 도착할 때까지 잠금 상태를 유지해야 하는 사무실 및 소매점에서 유용하게 사용할 수 있습니다."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuring-lock-schedules",
      children: "잠금 스케줄 설정하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "잠금 스케줄은 출입문이 잠금 상태를 유지하는 시간을 설정하고 유효한 크리덴셜이 있어도 출입을 차단합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lock Schedule"
          }), " 탭에서 기존 스케줄을 선택하거나 새 스케줄을 만드세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "새 스케줄을 아래의 단계에 따라 만드세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Create Schedule"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Name"
              }), "과 설명(선택 사항)을 입력하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "출입문이 잠금 상태를 유지해야 하는 요일과 시간을 선택하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Save"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["잠금 스케줄을 적용하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "잠금 스케줄은 표준 접근 권한을 무시하므로 사용자는 잠금 시간 동안 출입문을 잠금 해제할 수 없습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creating-schedules-directly-from-door-management",
      children: "출입 관리에서 스케줄 직접 만들기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "적절한 스케줄이 없는 경우 관리자는 출입문 스케줄 화면에서 직접 스케줄을 만들 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["스케줄 선택 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Schedule"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), "과 설명을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "운영 요일과 시간을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), "를 클릭하여 새 스케줄을 추가하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이제 새 스케줄이 선택할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-considerations",
      children: "주요 고려 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["스케줄은 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "인터넷 연결"
          }), "되어 있는 출입문에만 적용할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "휴일 그룹은 별도로 구성되지 않는 한 잠금 해제 스케줄을 무시합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비상 상황에 대비해 제한없는 출입 권한을 가진 관리자가 적어도 한 명 이상 있어야 합니다."
        }), "\n"]
      }), "\n"]
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