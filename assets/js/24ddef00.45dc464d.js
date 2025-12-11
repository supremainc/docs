"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["51749"], {
82674: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_facestation_f_2_release_notes_202_mdx_24d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-facestation-f-2-release-notes-202-mdx-24d.json
var site_docs_device_facestation_f_2_release_notes_202_mdx_24d_namespaceObject = JSON.parse('{"id":"device/facestation_f2/release-notes/202","title":"펌웨어 버전 2.0.2","description":"릴리즈2022-05-10","source":"@site/docs/device/facestation_f2/release-notes/202.mdx","sourceDirName":"device/facestation_f2/release-notes","slug":"/device/facestation_f2/release-notes/202","permalink":"/device/facestation_f2/release-notes/202","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_f2/release-notes/202.mdx","tags":[],"version":"current","frontMatter":{"id":"202","title":"펌웨어 버전 2.0.2","isTranslationMissing":false},"sidebar":"facestationf2","previous":{"title":"펌웨어 버전 2.0.3","permalink":"/device/facestation_f2/release-notes/203"},"next":{"title":"펌웨어 버전 1.1.4","permalink":"/device/facestation_f2/release-notes/114"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/facestation_f2/release-notes/202.mdx


const frontMatter = {
	id: 202,
	title: '펌웨어 버전 2.0.2',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 2.0.2 (빌드 번호 2.0.2_220502)';

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
    admonition: "admonition",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "펌웨어-버전-202-빌드-번호-202_220502",
        children: "펌웨어 버전 2.0.2 (빌드 번호 2.0.2_220502)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2022-05-10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비주얼 페이스 알고리즘 v2 적용"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "얼굴 등록 시 마스크를 감지하여 마스크를 착용하거나 입을 가린 상태로 얼굴을 등록할 수 없도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "열화상 카메라 사용 시 동적 ROI (동적 발열 측정 영역) 성능 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "마이그레이션 시 화면에 진행률 표시줄(Progress bar) 추가"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "서버에서 장치로 사용자 데이터를 전송할 때 사용자에게 등록된 카드에 대해 중복 여부를 체크하도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치의 전원이 끊기더라도 경비/해제 상태가 유지되도록 개선"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["USB 메모리를 이용하여 펌웨어를 v1.x.x에서 v2.x.x로 업그레이드할 경우 업그레이드에 실패하며, USB 메모리를 제거한 뒤 장치를 재부팅하면 로딩 상태로 장치가 멈추는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "info",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["USB 메모리를 이용하여 펌웨어를 업그레이드할 경우 먼저 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "화면과 소리"
              }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "메뉴 표시 시간"
              }), "을 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "항상 켜짐"
              }), "으로 설정한 뒤 업그레이드를 진행하세요. 또한 업그레이드 진행 중 실패 메시지가 출력되더라도 USB 메모리를 제거하지 말고 성공 메시지가 출력될 때까지 대기하세요. 업그레이드가 완료되면 장치가 자동으로 다시 시작됩니다."]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 메모리가 가득 찬 상태에서 펌웨어를 v1.x.x에서 v2.x.x로 업그레이드할 경우 장치 부팅이 불가한 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["특정 카드를 스캔하면 장치가 비정상적으로 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치를 타사 컨트롤 패널과 OSDP로 연결했을 때 Output Status Report Request 커맨드에 대해 릴레이는 동작하나 Output Status Report에 대한 응답을 하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치를 타사 컨트롤 패널과 OSDP로 연결했을 때 입력 포트 접지 상태에서 Input Status Request 커맨드에 대해 'Inactive'로 잘못 응답하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치를 타사 컨트롤 패널과 OSDP로 연결했을 때 Device Capabilities 커맨드에 대해 아무런 응답을 하지 않는 문제 (FSF2-DB, FSF2-AB)", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["스케줄 개방 구역 설정 후 층 설정 변경 시 마스터 장치가 비정상적으로 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["한 사용자에게 서로 다른 얼굴을 등록한 경우 두 번째에 등록한 얼굴로 인증 시 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2의 장치 상세 페이지에서 인텔리전트 슬레이브 관련 설정을 변경할 경우 설정이 적용되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.4"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자가 인증 대기 시간 만료 시점에 인증을 시도할 때 상황과 관계없는 오류 메시지가 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["인증 모드를 ID+얼굴+지문/PIN으로 설정한 장치에서 협박 지문으로 인증 시 협박 지문 로그가 남지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일부 HID iCLASS Seos 카드 인식에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["타사 컨트롤러(Software House iSTAR Edge G2)와 OSDP로 연결되지 않는 문제 (FSF2-ODB) ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["천장이 있는 실외 환경에서 얼굴 인증 및 온도 측정 성능이 저하되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자가 특정 색상 마스크를 착용한 경우 마스크 감지 성능이 저하되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["EM 카드에 대해 인식 속도가 느린 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자가 인증 대기 시간 만료 시점에 인증하면 인증은 동작하나, 출입문은 개방되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에 이중 인증을 설정했을 때 두 번째 인증에서 위조 지문을 사용하면 인증 실패 후 상황에 맞지 않는 화면이 출력되는 문제 (FSF2-ODB)", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["지갑 등에서 여러 장의 카드가 겹쳐진 채로 장치에서 스캔하면 장치가 비정상적으로 재부팅되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["엘리베이터를 스케줄 개방 구역으로 설정하고 '사용자 인증에 의한 시작' 옵션을 활성화했을 때 출입 그룹에 속한 사용자가 인증하면 층은 정상적으로 활성화되지만, 층 해제 로그가 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["USB 메모리를 이용한 펌웨어 업그레이드 시 업그레이드 실패 팝업이 출력된 뒤 장치가 재부팅되며, 이후 펌웨어가 업그레이드되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["펌웨어 버전에 따라 동일한 입력에 대한 글로벌 APB 동작이 다른 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치가 인텔리전트 슬레이브로 연결된 상태에서 사용자에게 등록된 첫 번째 카드가 26-bit를 제외한 다른 형식의 Wiegand 카드일 때 해당 사용자의 카드 이외의 인증 수단으로 인증하면 CSN 값이 OSDP를 통해 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["슬레이브로 연결된 OM-120의 특정 포트를 출입문 릴레이로 설정한 뒤 장치를 재부팅하면 릴레이가 비정상적으로 동작하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["열화상 카메라를 '인증 후 확인'으로 설정하였음에도 이벤트 로그에 '확인만'으로 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SDK를 이용해 관리자 메뉴에 진입한 사용자 로그를 불러올 때 사용자 ID가 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["인증서가 저장된 장치에서 전체 관리자로 메뉴 진입 시 기본값 복원 메뉴에 '루트 인증서 삭제' 항목이 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이중 인증을 설정한 장치에서 인증할 때 이중 인증 결과에 대해 인증 성공음이 출력되지 않고, 메인 화면이 유지되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자 ID 종류가 영숫자로 설정되어 있을 때 블랙리스트 카드로 설정한 AoC로 인증할 경우 이벤트 로그에 사용자 ID가 비정상적으로 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자에게 얼굴 데이터를 포함한 보안 크리덴셜 카드를 발급한 뒤 해당 사용자의 얼굴 데이터를 삭제하고 보안 크리덴셜 카드로 인증할 경우 카드에 얼굴 템플릿이 저장되어 있음에도 인증을 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["'네트워크 설정 유지'를 선택해 마스터 장치를 초기화할 경우 RS-485 통신 키가 초기화됨에 따라 슬레이브 장치의 연결이 끊어지는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
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