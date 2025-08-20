"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["1182"], {
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
8765: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_10_device_management_configuring_time_and_attendance_ta_mdx_528_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-10-device-management-configuring-time-and-attendance-ta-mdx-528.json
var site_docs_platform_biostar_air_10_device_management_configuring_time_and_attendance_ta_mdx_528_namespaceObject = JSON.parse('{"id":"platform/biostar_air/configuring-ta","title":"근태 관리(T&A) 설정하기","description":"BioStar Air에서 근태 관리 설정을 구성하는 방법, 모바일 근태 관리 추적을 활성화하는 방법, 장치에 근태 관리를 할당하는 방법, 근태 기록을 내보내는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/10-device-management-configuring-time-and-attendance-ta.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/configuring-ta","permalink":"/docs/platform/biostar_air/configuring-ta","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/10-device-management-configuring-time-and-attendance-ta.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"id":"configuring-ta","title":"근태 관리(T&A) 설정하기","description":"BioStar Air에서 근태 관리 설정을 구성하는 방법, 모바일 근태 관리 추적을 활성화하는 방법, 장치에 근태 관리를 할당하는 방법, 근태 기록을 내보내는 방법을 안내합니다.","keywords":["T&A","근태","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"등록 장치 관리하기","permalink":"/docs/platform/biostar_air/managing-registered-devices"},"next":{"title":"Airfob 패치(Patch)와 태그(Tag) 구성하기","permalink":"/docs/platform/biostar_air/configuring-the-airfob-patch-and-tag"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(84933);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/10-device-management-configuring-time-and-attendance-ta.mdx


const frontMatter = {
	id: 'configuring-ta',
	title: '근태 관리(T&A) 설정하기',
	description: 'BioStar Air에서 근태 관리 설정을 구성하는 방법, 모바일 근태 관리 추적을 활성화하는 방법, 장치에 근태 관리를 할당하는 방법, 근태 기록을 내보내는 방법을 안내합니다.',
	keywords: [
		'T&A',
		'근태',
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
  "value": "BioStar Air에서 근태 관리가 작동하는 방식",
  "id": "how-t-and-a-works",
  "level": 2
}, {
  "value": "모바일 근태 관리 설정",
  "id": "setting-up-mobile-t-and-a",
  "level": 2
}, {
  "value": "장치에 근태 할당",
  "id": "assigning-tanda-to-devices",
  "level": 2
}, {
  "value": "근태 로그 보기 및 내보내기",
  "id": "viewing-and-exporting-t-and-a-logs",
  "level": 2
}, {
  "value": "근태 옵션",
  "id": "alternative-tanda-options",
  "level": 2
}, {
  "value": "Disabled",
  "id": "disabled",
  "level": 3
}, {
  "value": "By Schedule",
  "id": "by-schedule",
  "level": 3
}, {
  "value": "Fixed",
  "id": "fixed",
  "level": 3
}, {
  "value": "Mobile",
  "id": "mobile",
  "level": 3
}, {
  "value": "근태 설정 마무리하기",
  "id": "finalizing-t-and-a-configuration",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {YouTube} = _components;
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-overview",
      children: "기능 개요"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air는 교대 근무 및 휴식 시간을 기록하여 기본적인 근태 관리(T&A) 추적 기능을 제공하며, 외부 근태 관리 시스템과 연동하거나 내보낼 수 있습니다. BioStar Air는 완전한 근태 관리 시스템을 제공하지는 않지만, 이벤트 로깅 및 급여 및 근태 관리 시스템과의 API 연동을 지원합니다. 또한 기본적인 '근무 시간' 보고서도 생성할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(YouTube, {
      videoId: "Que_LV25W04"
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-t-and-a-works",
      children: "BioStar Air에서 근태 관리가 작동하는 방식"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자는 아래와 같은 근태 이벤트를 기록할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "교대 시작"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "교대 종료"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "휴식 시작"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "휴식 종료"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "위와 같은 이벤트는 이벤트 로그에 기록되며 CSV 파일로 내보내거나 API를 통해 검색할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-up-mobile-t-and-a",
      children: "모바일 근태 관리 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "모바일에서 근태 관리를 활성화할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Site"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings"
          }), "로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "마스터 관리자"
          }), "로 로그인했는지 확인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "T&A on Mobile"
          }), "을 찾아 활성화하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "T&A 키에 대한 라벨을 설정하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예, 교대 시작, 교대 종료, 휴식 시작, 휴식 종료"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["각 이벤트가 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clock-In"
          }), " 또는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clock-Out"
          }), " 이벤트인지 지정하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 저장하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "assigning-tanda-to-devices",
      children: "장치에 근태 할당"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "모바일 근태 관리가 활성화되면 이를 사용할 장치를 지정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Device Management"
          }), "로 이동하여 등록된 장치를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "T&A Settings"
          }), "로 스크롤하여 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Mobile"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["T&A 선택이 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "required"
          }), "인지 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "optional"
          }), "인지 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["설정을 적용하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "근태 이벤트 라벨은 사이트 등급에서 관리되며 장치별로 변경할 수 없습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewing-and-exporting-t-and-a-logs",
      children: "근태 로그 보기 및 내보내기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "근태 이벤트는 이벤트 로그에 기록됩니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Event Logs"
          }), "로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "T&A Column"
          }), "을 로그 테이블에서 찾으세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "로그 테이블을 사용자 정의하여 T&A 열을 더 잘 보이도록 이동하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["데이터를 CSV 파일로 다운로드하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Export"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alternative-tanda-options",
      children: "근태 옵션"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치는 다양한 방법으로 근태 이벤트를 기록할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "disabled",
      children: "Disabled"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치는 근태 데이터를 기록하지 않습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "by-schedule",
      children: "By Schedule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "설정된 일정에 따라 출근 및 퇴근 시간을 기록합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["예를 들어, 8:00 AM - 12:00 PM 사이에 기록된 이벤트는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clock-In"
          }), "으로, 1:00 PM - 5:00 PM 사이에 기록된 이벤트는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clock-Out"
          }), "으로 기록됩니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fixed",
      children: "Fixed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "고정된 근태 코드를 리더기에 할당합니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예, 교대 시작"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "해당 리더기에서 인증할 때마다 동일한 근태 이벤트가 기록됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "전용 근태 리더기에 유용합니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예, 출근용 리더기, 퇴근용 리더기"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mobile",
      children: "Mobile"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자는 인증하기 전에 근태 코드를 선택해야 합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "선택한 근태 이벤트는 접근 로그와 함께 기록됩니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "finalizing-t-and-a-configuration",
      children: "근태 설정 마무리하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "근태 설정이 구성되면 모든 변경 사항이 저장되었는지 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["변경 사항을 적용하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["수정을 취소하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cancel"
          }), "을 클릭하세요."]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
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