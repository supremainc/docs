"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["91053"], {
26121: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_bioentry_p_2_release_notes_160_mdx_042_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-bioentry-p-2-release-notes-160-mdx-042.json
var site_docs_device_bioentry_p_2_release_notes_160_mdx_042_namespaceObject = JSON.parse('{"id":"device/bioentry_p2/release-notes/160","title":"펌웨어 버전 1.6.0","description":"릴리즈2026-03-13","source":"@site/docs/device/bioentry_p2/release-notes/160.mdx","sourceDirName":"device/bioentry_p2/release-notes","slug":"/device/bioentry_p2/release-notes/160","permalink":"/docs/device/bioentry_p2/release-notes/160","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/bioentry_p2/release-notes/160.mdx","tags":[],"version":"current","frontMatter":{"id":"160","title":"펌웨어 버전 1.6.0","isTranslationMissing":false},"sidebar":"bioentryp2","previous":{"title":"BioEntry P2 릴리스 노트","permalink":"/docs/device/bioentry_p2/release-notes/"},"next":{"title":"펌웨어 버전 1.5.2","permalink":"/docs/device/bioentry_p2/release-notes/152"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/bioentry_p2/release-notes/160.mdx


const frontMatter = {
	id: 160,
	title: '펌웨어 버전 1.6.0',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 1.6.0 (빌드 번호 1.6.0_260212)';

const assets = {

};



const toc = [{
  "value": "신규 기능 및 개선",
  "id": "신규-기능-및-개선",
  "level": 2
}, {
  "value": "버그 수정",
  "id": "버그-수정",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "펌웨어-버전-160-빌드-번호-160_260212",
        children: "펌웨어 버전 1.6.0 (빌드 번호 1.6.0_260212)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2026-03-13"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "펌웨어를 v1.5.1 이상으로 업그레이드한 뒤 하위 버전으로 다운그레이드할 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioEntry P2 모델 중 BEP2-OA는 SE프로세서를 통해 HID iCLASS 카드 타입을 지원합니다.", (0,jsx_runtime.jsx)("br", {}), "신규 SE 프로세서가 적용된 장치의 경우 펌웨어를 v1.4.4 이상으로 업그레이드한 뒤 하위 버전으로 다운그레이드할 수 없으며, 하위 버전에서 커스터마이징한 펌웨어도 다운그레이드할 수 없습니다. 기존 SE 프로세서가 적용된 장치는 하위 버전으로 다운그레이드할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치의 펌웨어 다운그레이드 가능 여부는 장치의 시리얼 번호를 확인한 뒤 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://supremainc.com",
              children: "슈프리마 홈페이지"
            }), "에 문의하세요."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "글로벌 사이버 보안 표준 및 최신 보안 요구사항 반영"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "최신 카드를 인식할 수 있도록 구분 코드 추가"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "DESFire EV3"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "서버와 장치 간 시간 동기화 관련 동작 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "슬레이브 장치의 전송 속도를 설정할 수 있는 기능 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "보안 탬퍼"
          }), " 기능을 지원하는 장치를 구분하도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치를 타사 컨트롤러와 Wiegand로 연결했을 때 컨트롤러로부터 반복적으로 입력되는 인증에 대한 신호를 무시하는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "반복 신호 무시 시간"
          }), " 기능 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "반복 신호 무시 시간"
          }), " 기능이 작동할 때 이벤트를 기록하지 않도록 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "MIFARE Plus EV1 카드의 보안 수준 호환성을 위해 SL1, SL3, SL1/SL3 혼합 모드 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SL1: MIFARE Classic 호환 모드"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SL3: AES 기반 고급 보안 모드"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 부팅 후 1분 동안 SEOS 설정 카드를 CSN으로 인식하지 않도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "수동 잠김"
          }), "으로 설정된 출입문에 인증 시 인증 실패 이벤트가 발생하고 상태 메시지가 표시되도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "BioStar X에서 장치의 여러 상태를 실시간으로 확인할 수 있도록 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["슬레이브로 연결된 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "마스터 관리자"
          }), " 지원 장치의 상세 페이지 진입 및 설정 변경을 지원하도록 호환성 개선"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["신규 SE 칩 펌웨어를 사용하는 환경에서 일부 스마트 카드 인식에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["인증모드에 비주얼 페이스가 포함되어 발급된 스마트 카드로 인증 시, ‘유효기간 만료’ 메시지가 표시되며 인증에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SDK에서 getOperator 함수 사용 시 데이터베이스가 마이그레이션되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일광절약시간(DST) 적용 시 출입 그룹 인증이 스케줄에 따라 비정상적으로 작동하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드 레이아웃"
            }), "이 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "보조 사이트 키"
            }), "로 설정된 DESFire 스마트 카드가 CSN 카드로 인식되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RS-485"
            }), " 모드가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "슬레이브"
            }), "로 설정된 상태에서 장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드 레이아웃"
            }), "과 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "바이트 순서"
            }), "가 설정한대로 저장되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RS-485"
            }), " 모드가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "슬레이브"
            }), "로 설정된 상태에서 장치 상세 페이지에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드"
            }), " 옵션이 보이지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["카드가 2개 이상 등록되어있는 사용자가 Wiegand 출력 장치에 카드 인증 시 인증한 카드가 아닌 다른 카드의 ID가 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "슈프리마 스마트 카드 레이아웃"
            }), "에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "기본 사이트 키"
            }), "만 설정되어 있고, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드 레이아웃"
            }), "에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "보조 사이트 키"
            }), "만 설정된 상태에서 장치를 재시작할 경우, 장치가 커스텀 스마트 카드를 CSN 카드로 인식하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["엘리베이터에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "스케줄 개방"
            }), "이 설정된 상태에서 슬레이브 장치의 RS-485 연결이 해제되고, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "스케줄 개방"
            }), "이 종료된 후 슬레이브 장치가 다시 연결되었을 때 릴레이가 잠금으로 동작하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DESFire 고급 설정"
            }), "을 사용하여 설정된 커스텀 스마트 카드가 인식에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "일괄 편집"
            }), "으로 설정한 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드 레이아웃"
            }), "이 장치 상세 페이지에서 적용되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에 로그가 가득 찬 상태에서 새로운 이벤트가 발생하는 경우 새로 생성된 이벤트와 함께 의도치 않은 로그를 가져오는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SDK에서 BS2_GetDeviceCapabilities 함수를 이용해 장치에서 지원하는 정보를 불러올 때 커스텀 스마트 카드를 지원하는 장치임에도 CustomClassicPlus와 CustomDesFireEV1 항목이 False로 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2에서 장치의 네트워크 설정을 변경하면 장치가 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Device SDK에서 BS2_GetDeviceCapabilities API를 사용하여 장치 기능(Capability) 정보를 가져올 때, 얼굴 인증을 지원하지 않는 장치임에도 maxFacePerUser 값이 잘못 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일부 카드가 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "슈프리마 스마트 카드"
            }), " 옵션에서 설정한 것과 다르게 인식되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.1"
            })]
          }), "\n"]
        }), "\n"]
      })
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