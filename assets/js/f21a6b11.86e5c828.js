"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4328"], {
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
10721: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_18_advanced_features_managing_roll_call_and_fire_muster_mdx_f21_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-18-advanced-features-managing-roll-call-and-fire-muster-mdx-f21.json
var site_docs_platform_biostar_air_18_advanced_features_managing_roll_call_and_fire_muster_mdx_f21_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-roll-call-fire-muster","title":"Roll Call 및 소집 구역 관리하기","description":"BioStar Air에서 소집 구역 설정, 비상 점호 시작, 사용자 안전 상태 추적, 점호 내역 보고서를 생성하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/18-advanced-features-managing-roll-call-and-fire-muster.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-roll-call-fire-muster","permalink":"/docs/platform/biostar_air/managing-roll-call-fire-muster","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/18-advanced-features-managing-roll-call-and-fire-muster.mdx","tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"id":"managing-roll-call-fire-muster","title":"Roll Call 및 소집 구역 관리하기","description":"BioStar Air에서 소집 구역 설정, 비상 점호 시작, 사용자 안전 상태 추적, 점호 내역 보고서를 생성하는 방법을 안내합니다.","keywords":["roll call","화재 소집 구역","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"엘리베이터 출입 관리하기","permalink":"/docs/platform/biostar_air/managing-elevator-access"},"next":{"title":"BioStation 3 SIP 인터폰","permalink":"/docs/platform/biostar_air/sip-intercom-for-biostation3"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(20993);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/18-advanced-features-managing-roll-call-and-fire-muster.mdx


const frontMatter = {
	id: 'managing-roll-call-fire-muster',
	title: 'Roll Call 및 소집 구역 관리하기',
	description: 'BioStar Air에서 소집 구역 설정, 비상 점호 시작, 사용자 안전 상태 추적, 점호 내역 보고서를 생성하는 방법을 안내합니다.',
	keywords: [
		'roll call',
		'화재 소집 구역',
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
}, {
  "value": "소집 구역 설정",
  "id": "setting-up-muster-points",
  "level": 2
}, {
  "value": "소집 구역에 대한 모범 사례",
  "id": "best-practices",
  "level": 3
}, {
  "value": "BioStar Air 앱에서 Roll Call 시작하기",
  "id": "starting-a-roll-call-in-the-biostar-air-app",
  "level": 2
}, {
  "value": "사용자가 안전하다고 표시하기",
  "id": "marking-users-safe",
  "level": 3
}, {
  "value": "점호 진행 상황 추적",
  "id": "tracking-roll-call-progress",
  "level": 3
}, {
  "value": "Roll Call 내역 보기",
  "id": "viewing-roll-call-history",
  "level": 2
}, {
  "value": "주요 고려 사항",
  "id": "key-considerations",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air의 Roll Call 및 화재 대피 안내 기능을 통해 조직은 비상 상황 발생 시 어떤 직원이 안전하게 건물에서 대피했는지 추적할 수 있습니다. 소집 구역을 설정하고 BioStar Air 앱을 사용하면 관리자는 모든 사용자를 신속하게 파악하고 점호 내역 보고서를 생성할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(YouTube, {
      videoId: "F0dnR7VmfAo"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-up-muster-points",
      children: "소집 구역 설정"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "소집 구역은 사용자가 비상 상황에서 자신이 안전하다는 것을 표시하기 위해 크리덴셜을 입력할 수 있는 지정된 구역입니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar Air 포털에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Advanced"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Roll Call"
          }), "로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Muster Point"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Name"
          }), "을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예, 동쪽 주차장"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["선택 사항인 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Description"
          }), "을 입력하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예, 주차 구조물의 세 번째 기둥"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치를 추가하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Add Device"
              }), "를 클릭하고 특정 리더를 할당하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["또는 여러 개의 소집 구역 리더기를 포함하고 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Device Group"
              }), "을 선택하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 그룹을 추가하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["소집 구역에 보고해야 하는 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "User Groups"
              }), "를 선택하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["개별 선택 후 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Add"
              }), "를 클릭하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["소집 구역 설정을 저장하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Save"
          }), "를 클릭하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "best-practices",
      children: "소집 구역에 대한 모범 사례"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["여러 소집 구역에 개별 장치를 선택하는 것보다 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "장치 그룹"
          }), "을 선택하기를 권장합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["특히 여러 건물이 있는 대규모 캠퍼스에서는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "관련 사용자만"
          }), " 특정 소집 구역에 배정하도록 하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "유선 출입 통제 리더기는 모바일과 카드 인증을 모두 지원하는 반면, Airfob Tag와 Airfob Patch는 모바일 크리덴셜만 지원합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "starting-a-roll-call-in-the-biostar-air-app",
      children: "BioStar Air 앱에서 Roll Call 시작하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air 모바일 앱으로 출석 확인을 시작하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 기기에서 BioStar Air 앱을 실행하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "All Menu"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Roll Call"
          }), " (Advanced Features 아래)로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Roll Call Start"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "시스템이 현재 현장에 있는 모든 사용자 목록을 표시합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "marking-users-safe",
      children: "사용자가 안전하다고 표시하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자는 아래 방법으로 자신이 안전하다고 표시할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자는 지정된 소집 구역에서 자신의 크리덴셜을 태깅하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["관리자는 사용자 이름 옆에 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "체크 표시"
          }), " 버튼을 길게 눌러서 사용자가 안전하다고 체크할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tracking-roll-call-progress",
      children: "점호 진행 상황 추적"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["사용자는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "소집 그룹"
          }), "에 따라 필터링할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "검색 기능을 사용하여 특정 개인을 찾을 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "점호를 완료하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "모든 사용자가 안전하다고 표시됩니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "관리자는 모든 사용자가 안전하다고 수동으로 체크합니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "24시간이 경과해도 완료되지 않습니다."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewing-roll-call-history",
      children: "Roll Call 내역 보기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이전 점호를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar Air 포털에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Roll Call"
          }), "로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "History"
          }), " 탭을 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "완료된 점호에서 아래 항목을 확인할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Roll Call 중 기록된 모든 출입 이벤트 목록"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "사용자가 안전하다고 표시되었는지 또는 확인되지 않았는지에 대한 세부 정보"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Roll Call 시작 및 완료 시간"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-considerations",
      children: "주요 고려 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자 그룹에 소집 구역이 올바르게 할당되었는지 확인"
          }), "하여 혼란을 방지하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["실제 비상 상황 발생 시 원활한 진행을 위해 Roll Call 기능을 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "정기적으로 테스트하세요"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "출입 기록"
          }), "을 통해 안전 규정 준수를 위한 출석을 확인할 수 있습니다."]
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