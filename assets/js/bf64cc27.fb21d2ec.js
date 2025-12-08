"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["29971"], {
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
6341: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_16_monitoring_airfob_pro_monitoring_event_logs_and_audit_logs_mdx_bf6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-16-monitoring-airfob-pro-monitoring-event-logs-and-audit-logs-mdx-bf6.json
var site_docs_platform_biostar_air_16_monitoring_airfob_pro_monitoring_event_logs_and_audit_logs_mdx_bf6_namespaceObject = JSON.parse('{"id":"platform/biostar_air/event-and-audit-logs","title":"이벤트 로그와 감사 로그","description":"BioStar Air에서 이벤트 로그와 감사 로그를 모니터링 및 분석하고, 필터 적용, 데이터 내보내기 및 관리 활동 추적 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/16-monitoring-airfob-pro-monitoring-event-logs-and-audit-logs.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/event-and-audit-logs","permalink":"/docs/platform/biostar_air/event-and-audit-logs","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/16-monitoring-airfob-pro-monitoring-event-logs-and-audit-logs.mdx","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"event-and-audit-logs","title":"이벤트 로그와 감사 로그","description":"BioStar Air에서 이벤트 로그와 감사 로그를 모니터링 및 분석하고, 필터 적용, 데이터 내보내기 및 관리 활동 추적 방법을 안내합니다.","keywords":["모니터링","이벤트 로그","감사 로그","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"층 레벨 관리하기","permalink":"/docs/platform/biostar_air/manage-floor-level"},"next":{"title":"출입문 상태 모니터링","permalink":"/docs/platform/biostar_air/monitoring-door-status"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(20993);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/16-monitoring-airfob-pro-monitoring-event-logs-and-audit-logs.mdx


const frontMatter = {
	id: 'event-and-audit-logs',
	title: '이벤트 로그와 감사 로그',
	description: 'BioStar Air에서 이벤트 로그와 감사 로그를 모니터링 및 분석하고, 필터 적용, 데이터 내보내기 및 관리 활동 추적 방법을 안내합니다.',
	keywords: [
		'모니터링',
		'이벤트 로그',
		'감사 로그',
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
}, ..._biostarair_customer_notice/* .toc */.RM, {
  "value": "이벤트 로그로 이동",
  "id": "navigating-to-event-logs",
  "level": 2
}, {
  "value": "이벤트 로그 필터링",
  "id": "filtering-event-logs",
  "level": 2
}, {
  "value": "로그 정렬 및 관리",
  "id": "sorting-and-managing-logs",
  "level": 2
}, {
  "value": "감사 로그 사용",
  "id": "using-audit-logs",
  "level": 2
}, {
  "value": "감사 로그 액세스",
  "id": "accessing-audit-logs",
  "level": 3
}, {
  "value": "감사 로그 필터링 및 관리",
  "id": "filtering-and-managing-audit-logs",
  "level": 3
}, {
  "value": "BioStar Air 모바일 앱에서 이벤트 로그 사용",
  "id": "using-event-logs-in-the-biostar-air-mobile-app",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["클라우드 출입 통제 플랫폼의 주요 장점 중 하나는 언제 어디서나 사이트 활동을 모니터링할 수 있는 기능입니다. 이 문서에서는 BioStar Air에서 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "이벤트 로그"
      }), "와 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "감사 로그"
      }), "를 사용하는 방법을 안내합니다. 출입문 상태 모니터링은 별도의 문서에서 다루고 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigating-to-event-logs",
      children: "이벤트 로그로 이동"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이벤트 로그를 확인하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event Logs"
      }), "로 이동하세요."]
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
            children: "Event Logs"
          }), " 화면에는 이벤트 시간, 이벤트 이름, 출입문 위치, 장치 별명, 사용자 유형 및 사용자 이름과 같은 세부 정보가 포함된 테이블을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Customize"
          }), "를 클릭하고 열을 켜거나 끄고 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply"
          }), "를 클릭해 열을 사용자 지정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(YouTube, {
      videoId: "nwIEYyK-uAg"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filtering-event-logs",
      children: "이벤트 로그 필터링"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "로그를 필터링할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Filter"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이벤트 유형을 선택하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예, Access Denied, Authentication Failed, Door Open 등"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 그룹, 사용자 유형(정규 또는 임시), 장치 그룹, 장치 ID 또는 장치 별명으로 필터링하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로그를 업데이트하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sorting-and-managing-logs",
      children: "로그 정렬 및 관리"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로그를 날짜별로 정렬하려면 날짜 및 시간 범위를 선택한 다음 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["필터를 재설정하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Filters"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clear all"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["날짜 필터를 재설정하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reset"
          }), "을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["필터를 적용하고 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), "를 클릭하면 특정 보기를 저장할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로그를 내보내려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Export"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로그를 새로 고치려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Refresh"
          }), "를 클릭하거나 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Auto Refresh"
          }), "를 활성화하세요. 5초에서 1분 사이로 조정할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "using-audit-logs",
      children: "감사 로그 사용"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "감사 로그는 플랫폼에서 관리자가 수행한 작업을 추적합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "accessing-audit-logs",
      children: "감사 로그 액세스"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Audit Logs"
          }), "로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "감사 로그 화면에서는 아래와 같은 정보를 확인할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Admin name"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Action time"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Source account"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Admin role"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Action type"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Details of the action"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "filtering-and-managing-audit-logs",
      children: "감사 로그 필터링 및 관리"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Filter"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "계정 이름, 관리자 유형, 작업 유형 및 범주와 같은 필터를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply Filter"
          }), "를 클릭하여 로그를 업데이트하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "로그를 날짜 범위별로 정렬하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["필터 선택 사항을 저장하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save Filter"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["필터를 지우려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clear Filter"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["로그를 새로 고침하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Refresh"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "using-event-logs-in-the-biostar-air-mobile-app",
      children: "BioStar Air 모바일 앱에서 이벤트 로그 사용"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 하단의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Monitoring"
          }), "을 탭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Event Logs"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이벤트 로그를 스크롤하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Filter"
          }), "를 탭하고 선택하여 보기를 수정하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "이벤트 기간"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "이벤트 유형"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "사용자 그룹"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "사용자 유형"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "필터 선택 사항을 지우거나 나중에 사용할 수 있도록 저장하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 상단의 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update"
          }), "를 탭하여 이벤트 로그를 업데이트하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "특정 이벤트를 찾으려면 로그를 검색하세요."
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