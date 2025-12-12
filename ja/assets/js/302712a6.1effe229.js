"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["86728"], {
77760: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_release_notes_v_2_10_mdx_302_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-release-notes-v-2-10-mdx-302.json
var site_docs_platform_biostar_air_release_notes_v_2_10_mdx_302_namespaceObject = JSON.parse('{"id":"platform/biostar_air/release-notes/v2_10","title":"v2.10","description":"BioStar Air v2.10 릴리스 노트","source":"@site/docs/platform/biostar_air/release-notes/v2_10.mdx","sourceDirName":"platform/biostar_air/release-notes","slug":"/platform/biostar_air/release-notes/v2_10","permalink":"/docs/ja/platform/biostar_air/release-notes/v2_10","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/release-notes/v2_10.mdx","tags":[],"version":"current","frontMatter":{"id":"v2_10","title":"v2.10","description":"BioStar Air v2.10 릴리스 노트","keywords":["BioStar Air","릴리스 노트","v2.10"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"v2.11","permalink":"/docs/ja/platform/biostar_air/release-notes/v2_11"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/release-notes/v2_10.mdx


const frontMatter = {
	id: 'v2_10',
	title: 'v2.10',
	description: 'BioStar Air v2.10 릴리스 노트',
	keywords: [
		'BioStar Air',
		'릴리스 노트',
		'v2.10'
	],
	isTranslationMissing: true
};
const contentTitle = 'BioStar Air 2.10 릴리스 노트';

const assets = {

};



const toc = [{
  "value": "BioStation 3 지원",
  "id": "biostation-3-지원",
  "level": 2
}, {
  "value": "더 스마트한 크리덴셜 관리",
  "id": "더-스마트한-크리덴셜-관리",
  "level": 2
}, {
  "value": "커스텀 Wiegand 형식 지원",
  "id": "커스텀-wiegand-형식-지원",
  "level": 3
}, {
  "value": "최대 8개의 카드 할당",
  "id": "최대-8개의-카드-할당",
  "level": 3
}, {
  "value": "PIN 코드 지원",
  "id": "pin-코드-지원",
  "level": 3
}, {
  "value": "모바일 앱 개선 사항",
  "id": "모바일-앱-개선-사항",
  "level": 3
}, {
  "value": "더 나은 CSV 업로드 피드백",
  "id": "더-나은-csv-업로드-피드백",
  "level": 3
}, {
  "value": "유효 기간 개선 사항",
  "id": "유효-기간-개선-사항",
  "level": 3
}, {
  "value": "장치 관리 개선 사항",
  "id": "장치-관리-개선-사항",
  "level": 2
}, {
  "value": "비디오 성능 개선 사항",
  "id": "비디오-성능-개선-사항",
  "level": 2
}, {
  "value": "개인 보고서",
  "id": "개인-보고서",
  "level": 2
}, {
  "value": "실시간 패치 진단",
  "id": "실시간-패치-진단",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {YouTube} = _components;
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "biostar-air-210-릴리스-노트",
        children: "BioStar Air 2.10 릴리스 노트"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2025년 8월 12일"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air 2.10을 발표하게 되어 기쁩니다. 이번 주요 업데이트에서는 가장 진보된 생체 인식 리더인 BioStation 3에 대한 지원과 크리덴셜 관리, 사용자 설정 및 장치 제어를 개선하기 위한 강력한 새로운 기능이 도입됩니다. 이 릴리스는 관리자와 설치자 모두에게 그 어느 때보다 더 많은 유연성, 보안 및 사용 편의성을 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "biostation-3-지원",
      children: "BioStation 3 지원"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStation 3 (BS3)는 슈프리마의 플래그십 지능형 단말기로, 얼굴 인증, 모바일 출입, 카드 판독 및 인터폰 기능을 하나의 컴팩트한 장치에 통합합니다. BioStar Air v2.10을 통해 BS3는 BioStar Air 포털 및 모바일 앱에서 완전히 지원되고 관리됩니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar Air에서 사용할 수 있는 주요 BS3 기능"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "얼굴 인증"
          }), ": 속도를 위한 패스트 모드, 보안을 위한 퓨전 모드"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RFID 지원"
          }), ": MIFARE Classic, FeliCa, DESFire, EM4100 (125 KHz) 및 선택된 독점 형식(iCLASS, Prox 지원)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "모바일 크리덴셜"
          }), ": 원활한 슈프리마 패스 통합"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "QR 코드 스캔"
          }), ": 동적 QR 코드 및 QR 코드로 인코딩된 CSN 지원(라이선스 필요)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SIP 인터폰"
          }), ": BioStar Air 앱 또는 웹 대시보드로의 오디오/비디오 통화, DTMF를 통한 원격 출입문 잠금 해제"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "장치 브랜딩"
          }), ": 장치 편집 화면을 통해 사용자 정의 로고 또는 배경화면 업로드"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "근태 키"
          }), ": 근무 시작/종료 및 휴식에 대한 화면상의 이벤트 코드"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "더-스마트한-크리덴셜-관리",
      children: "더 스마트한 크리덴셜 관리"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "커스텀-wiegand-형식-지원",
      children: "커스텀 Wiegand 형식 지원"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "시설 코드, 세그먼트 정의, 패리티 비트를 포함한 Wiegand 형식을 직접 정의하고 관리하세요. 웹 포털의 'Settings' → 'Credential Formats'에서 구성하세요. CSV 가져오기에서 형식은 별도의 열로 표시되므로 아래 작업을 수행할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자당 여러 카드를 / 구분 기호로 할당"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "각 카드를 인라인으로 선택적으로 이름 지정하여 명확하게 표시"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "최대-8개의-카드-할당",
      children: "최대 8개의 카드 할당"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자당 여러 자격 증명에 대한 지원이 확장되어 계정당 최대 8개의 RFID 카드(CSN 또는 Wiegand)를 허용합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pin-코드-지원",
      children: "PIN 코드 지원"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "편집 사용자 화면 또는 CSV 가져오기를 통해 PIN을 직접 설정하세요. 보안을 위해 PIN은 볼 수 없거나 내보낼 수 없습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "모바일-앱-개선-사항",
      children: "모바일 앱 개선 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "iOS"
          }), ": 편집 사용자 화면에 연결된 리더를 통해 카드를 스캔하는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "읽기"
          }), " 버튼이 추가되었습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Android"
          }), ": NFC-on-phone 스캔이 드롭다운 기반 리더 스캔으로 대체되었습니다( iOS 동작과 일치)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "더-나은-csv-업로드-피드백",
      children: "더 나은 CSV 업로드 피드백"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CSV 가져오기는 이제 행별 오류 메시지를 표시하여 문제를 더 빠르게 수정할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "유효-기간-개선-사항",
      children: "유효 기간 개선 사항"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "'무한' 액세스 기간의 경우 시작 날짜가 오늘 00:00으로 자동 설정됩니다. 빠른 조정(+1일, +1주 등)은 종료 날짜만 업데이트합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "장치-관리-개선-사항",
      children: "장치 관리 개선 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Wiegand Output Mode"
          }), ": 장치별로 Normal 및 Bypass 모드를 전환할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Firmware Update Safeguard"
          }), ": 활성 업데이트 중에는 업데이트 버튼이 비활성화됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Byte Order Settings"
          }), ": 장치별로 구성하거나 장치 목록에서 일괄 적용할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "비디오-성능-개선-사항",
      children: "비디오 성능 개선 사항"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "백엔드 최적화를 통해 Uniview 카메라 스트림의 안정성과 반응성이 향상되었습니다. 향후 릴리스에서는 추가적인 카메라 브랜드 지원이 계획되어 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "개인-보고서",
      children: "개인 보고서"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이제 일회성 보고서는 이를 생성한 관리자에게만 전송되므로 실수로 모든 관리자에게 배포되는 일을 방지할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "실시간-패치-진단",
      children: "실시간 패치 진단"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Airfob Patch를 등록할 때 시스템에서 실시간 전압 및 RSSI 판독값을 표시하여 배치 및 성능 테스트를 더 빠르고 정확하게 수행할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(YouTube, {
      videoId: "si2Pu0W8ABw"
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