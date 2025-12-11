"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["2491"], {
20993: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
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
3724: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_14_elevator_management_managing_elevator_access_mdx_f4f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-14-elevator-management-managing-elevator-access-mdx-f4f.json
var site_docs_platform_biostar_air_14_elevator_management_managing_elevator_access_mdx_f4f_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-elevator-access","title":"엘리베이터 출입 관리하기","description":"BioStar Air에서 슈프리마의 OM120 모듈을 사용해 엘리베이터 출입 통제 구성, 층 권한 설정, 사용자 출입 등급 관리 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/14-elevator-management-managing-elevator-access.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-elevator-access","permalink":"/platform/biostar_air/managing-elevator-access","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/14-elevator-management-managing-elevator-access.mdx","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"managing-elevator-access","title":"엘리베이터 출입 관리하기","description":"BioStar Air에서 슈프리마의 OM120 모듈을 사용해 엘리베이터 출입 통제 구성, 층 권한 설정, 사용자 출입 등급 관리 방법을 안내합니다.","keywords":["엘리베이터 출입","BioStar Air","OM120"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"출입문 관리하기","permalink":"/platform/biostar_air/managing-door-access"},"next":{"title":"Roll Call 및 소집 구역 관리하기","permalink":"/platform/biostar_air/managing-roll-call-fire-muster"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(20993);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/14-elevator-management-managing-elevator-access.mdx


const frontMatter = {
	id: 'managing-elevator-access',
	title: '엘리베이터 출입 관리하기',
	description: 'BioStar Air에서 슈프리마의 OM120 모듈을 사용해 엘리베이터 출입 통제 구성, 층 권한 설정, 사용자 출입 등급 관리 방법을 안내합니다.',
	keywords: [
		'엘리베이터 출입',
		'BioStar Air',
		'OM120'
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
}, ..._biostarair_customer_notice/* .toc */.RM, {
  "value": "필수 조건",
  "id": "requirements",
  "level": 2
}, {
  "value": "엘리베이터 제어 설정",
  "id": "setting-up-elevator-control",
  "level": 2
}, {
  "value": "층 이름 지정 및 구성",
  "id": "naming-and-configuring-floors",
  "level": 2
}, {
  "value": "층 출입 등급 설정",
  "id": "setting-floor-access-levels",
  "level": 2
}, {
  "value": "주요 고려 사항",
  "id": "key-considerations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {YouTube} = _components;
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-overview",
      children: "기능 개요"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air는 슈프리마의 OM120 모듈을 사용하여 엘리베이터 출입 통제를 지원합니다. 이 모듈은 관리자가 슈프리마 또는 Airfob 출입 통제 리더기와 연동하여 각 층에 대한 출입을 제어할 수 있습니다. 데이지 체인 방식으로 연결된 OM120 장치를 통해 최대 144층까지 지원합니다."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "필수 조건"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "엘리베이터 출입 통제를 활성화하려면 아래 사항이 필요합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["슈프리마 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OM120"
          }), " 모듈(각 모듈은 최대 12층까지 지원)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OM120 모듈과 호환되는 슈프리마 또는 Airfob 출입 통제 리더기"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "엘리베이터 제어 패널에 대한 적절한 배선"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "배선 세부정보는 엘리베이터 제조업체에 문의하세요."
      })
    }), "\n", (0,jsx_runtime.jsx)(YouTube, {
      videoId: "szCBlVFdrBo"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-up-elevator-control",
      children: "엘리베이터 제어 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "엘리베이터 제어를 구성할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "장치 관리"
          }), "로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["OM120 모듈이 연결된 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Edge Reader Ultimate"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["OM120 모듈이 감지되지 않으면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Search OM120"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["감지된 OM120 모듈을 선택하고 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "엘리베이터 관리"
          }), "로 이동하여 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "엘리베이터 추가"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "엘리베이터 이름"
          }), "과 선택 사항인 설명을 입력하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["제어할 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Edge Reader"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "엘리베이터에 대한 등록된 OM120 모듈을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "릴레이 타임아웃"
          }), "에서 인증 후 층 버튼이 활성 상태로 유지되는 시간을 설정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "제어할 층 수"
          }), "를 지정하세요. OM120당 최대 12층까지 지원합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "naming-and-configuring-floors",
      children: "층 이름 지정 및 구성"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "엘리베이터가 추가되면 개별 층을 구성할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "층 이름을 지정하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예, 1층, 로비, 회의실"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 층의 버튼에 해당하는 릴레이 출력을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 층에 대한 접근 가능 일정을 설정하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예, 근무 시간 외에 유지 보수 층 제한"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["엘리베이터 설정을 완료하면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "저장"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-floor-access-levels",
      children: "층 출입 등급 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "특정 층에 출입할 수 있는 사용자 또는 그룹을 설정하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Access Management"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Floor Levels"
          }), "로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Floor Level"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), "을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예, 보안, 청소 직원"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 층을 이 출입 등급에 할당하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Access Schedule"
          }), "을 적용하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예, 청소 직원이 근무 시간 외에 접근할 수 있도록 허용"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["선택 사항으로 특정 날짜에 대한 출입을 제한하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Holiday Groups"
          }), "를 추가할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 적용하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-considerations",
      children: "주요 고려 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "배선 요구 사항"
          }), ": OM120 모듈은 엘리베이터 제어 패널에 올바르게 배선되어야 합니다. 배선 사양에 대해서는 엘리베이터 제조업체에 문의하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "데이지 체인 모듈"
          }), ": 최대 12개의 OM120 모듈을 단일 Airfob Edge Reader에 연결해 최대 144층까지 지원합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "일정 및 재정의"
          }), ": 층 출입 일정이 우선하지만 휴일 설정이 일반 출입 규칙보다 우선할 수 있습니다."]
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