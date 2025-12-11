"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["27071"], {
14335: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_release_notes_v_2_11_mdx_eec_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-release-notes-v-2-11-mdx-eec.json
var site_docs_platform_biostar_air_release_notes_v_2_11_mdx_eec_namespaceObject = JSON.parse('{"id":"platform/biostar_air/release-notes/v2_11","title":"v2.11","description":"BioStar Air v2.11 릴리스 노트","source":"@site/docs/platform/biostar_air/release-notes/v2_11.mdx","sourceDirName":"platform/biostar_air/release-notes","slug":"/platform/biostar_air/release-notes/v2_11","permalink":"/docs/platform/biostar_air/release-notes/v2_11","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/release-notes/v2_11.mdx","tags":[],"version":"current","frontMatter":{"id":"v2_11","title":"v2.11","description":"BioStar Air v2.11 릴리스 노트","keywords":["BioStar Air","릴리스 노트","v2.11"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"일괄 사용자 추가 문제","permalink":"/docs/platform/biostar_air/troubleshooting-adding-users-in-bulk"},"next":{"title":"v2.10","permalink":"/docs/platform/biostar_air/release-notes/v2_10"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/release-notes/v2_11.mdx


const frontMatter = {
	id: 'v2_11',
	title: 'v2.11',
	description: 'BioStar Air v2.11 릴리스 노트',
	keywords: [
		'BioStar Air',
		'릴리스 노트',
		'v2.11'
	],
	isTranslationMissing: false
};
const contentTitle = 'BioStar Air 2.11 릴리스 노트';

const assets = {

};



const toc = [{
  "value": "XPass 2 및 XStation 2의 RFID 카드 Active Sync",
  "id": "xpass-2-및-xstation-2의-rfid-카드-active-sync",
  "level": 2
}, {
  "value": "인터페이스 업데이트",
  "id": "인터페이스-업데이트",
  "level": 2
}, {
  "value": "장치 목록",
  "id": "장치-목록",
  "level": 3
}, {
  "value": "개인 정보 마스킹",
  "id": "개인-정보-마스킹",
  "level": 3
}, {
  "value": "보고서",
  "id": "보고서",
  "level": 3
}, {
  "value": "사용자 목록",
  "id": "사용자-목록",
  "level": 3
}, {
  "value": "파트너 포털",
  "id": "파트너-포털",
  "level": 3
}, {
  "value": "BioStation 3 – 비디오 게이트웨이 지원",
  "id": "biostation-3--비디오-게이트웨이-지원",
  "level": 2
}, {
  "value": "이벤트 로그 &amp; 경고 알림",
  "id": "이벤트-로그--경고-알림",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {IcAirRef} = _components;
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "biostar-air-211-릴리스-노트",
        children: "BioStar Air 2.11 릴리스 노트"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2025년 11월 25일"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air 2.11은 기존 온프레미스 시스템 수준의 안정성을 클라우드 환경에서 제공하기 위한 저희의 지속적인 노력입니다. 이번 릴리스에서는 네트워크 오프라인 시 동작 개선, 관리 기능 강화, 그리고 BioStation 3의 새로운 기능을 추가했습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "단일 사이트부터 수십 개의 사이트까지 모든 규모의 운영 환경에서 BioStar Air를 더욱 쉽게 관리하고, 안정적으로 운영하며, 더욱 복잡한 배포에도 대응할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "xpass-2-및-xstation-2의-rfid-카드-active-sync",
      children: "XPass 2 및 XStation 2의 RFID 카드 Active Sync"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["온프레미스 시스템 수준의 안정성을 클라우드에서 구현하기 위해 BioStar Air의 크레덴셜 동기화 방식을 완전히 재설계했습니다. 새로운 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Sync"
      }), " 아키텍처를 통해 네트워크 연결이 끊어진 상태에서도 장치는 정상 동작합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "네트워크가 끊어진 상태에서도 모든 주요 크레덴셜 유형은 정상 동작합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RF 카드"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "바이오메트릭 템플릿"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "모바일 크레덴셜"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "PIN"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic QR"
        }), " 및 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LinkPass"
        }), " 크레덴셜을 사용하려면 여전히 네트워크 연결이 필요합니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "장치는 여전히 자동으로 연결 및 동기화되며, 새로운 설치 단계가 필요하지 않습니다. 크레덴셜 데이터는 백그라운드에서 지속적으로 동기화됩니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이 기능은 장치에 따라 순차적으로 배포할 예정입니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStation 3"
          }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioEntry W3"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "지금 사용할 수 있습니다. 펌웨어 업데이트가 필요하지 않습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "XPass 2"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Rolling out beginning ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Nov 25, 2025"
          }), ".\n2025년 11월 25일부터 순차적으로 배포됩니다. 펌웨어 v2.11이 아직 보이지 않는 경우, 잠시 기다려 주세요. 모든 고객은 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "12월 9일"
          }), "까지 업그레이드할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "XStation 2"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "2025년 12월 23일에 릴리스될 예정입니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "인터페이스-업데이트",
      children: "인터페이스 업데이트"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "일상적인 관리를 단순화하고 반복 작업을 줄이기 위해 여러 UI 개선을 진행했습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "장치-목록",
      children: "장치 목록"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치의 상태가 최신이 아닌 경우를 대비해 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "상태 새로고침"
          }), "(", (0,jsx_runtime.jsx)(IcAirRef, {
            width: "24px",
            height: "24px"
          }), ") 버튼을 추가했습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이제 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "웹 포털에서 직접 장치를 삭제할 수 있습니다"
          }), ". 모바일 앱을 사용할 필요가 없습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "장치는 네트워크에 정상 연결되어 있어야 합니다. 네트워크에 연결되어 있지 않다면 여전히 모바일 앱에서 장치를 삭제해야 합니다. 펌웨어 업데이트 일정에 따라 지원됩니다."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "개인-정보-마스킹",
      children: "개인 정보 마스킹"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이벤트 로그, 관리자 로그 또는 사용자 정보를 확인할 때, 민감한 사용자 세부 정보를 숨기는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "개인 정보 마스킹"
      }), " 기능을 추가했습니다. 감사 또는 화면 공유 검토에 유용하게 사용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "보고서",
      children: "보고서"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["모든 드롭다운 필터가 이제 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "검색할 수 있습니다"
      }), ". 이를 통해 보고서 템플릿을 더 빠르게 작성할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "사용자-목록",
      children: "사용자 목록"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자 선택 UI를 개선했습니다. 관리자는 일괄 작업을 수행하기 전에 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "선택된 사용자 수를 시각적으로 확인"
      }), "할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "파트너-포털",
      children: "파트너 포털"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사용자 및 장치 수"
          }), "를 개선했습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "사이트 삭제 워크플로우"
          }), "를 개선하여 장치가 여전히 사이트에 등록되어 있다면 관리자에게 경고합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "biostation-3--비디오-게이트웨이-지원",
      children: "BioStation 3 – 비디오 게이트웨이 지원"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStation 3는 이제 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "비디오 게이트웨이"
      }), "로 작동할 수 있어 여러 대의 4K 카메라에서 동시에 비디오 스트림을 처리하고 중계할 수 있습니다. 이를 통해 추가 하드웨어 없이도 강력하고 유연한 비디오 배포가 가능합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이 기능을 활성화하려면 아래의 단계를 따르세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStation 3 펌웨어를 업데이트하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStation 3에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "장치"
          }), " 설정으로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "비디오 게이트웨이"
          }), "를 켜세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["IP 카메라 지원 및 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../ip-camera-support-and-configuration",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "이벤트-로그--경고-알림",
      children: "이벤트 로그 & 경고 알림"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이전에는 일부 네트워크 연결 끊김 로그가 장치에 저장되었고, 장치가 다시 연결될 때만 업로드되었습니다. 이로 인해 경고 표시가 지연되는 문제가 있었습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "v2.11 변경 사항:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "네트워크 연결 끊김 이벤트가 이제 서버 측에서 생성됩니다"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "경고 알림은 장치의 연결이 끊겼을 때 즉시 표시됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "관리자는 배선 문제, 정전 또는 예상치 못한 장치 동작에 더 빠르게 대응할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이로써 장치가 오프라인 상태일 때도 일관되게 실시간으로 상황을 인지할 수 있습니다."
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