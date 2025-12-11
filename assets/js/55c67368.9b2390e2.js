"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["20215"], {
36314: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_facestation_2_release_notes_150_mdx_55c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-facestation-2-release-notes-150-mdx-55c.json
var site_docs_device_facestation_2_release_notes_150_mdx_55c_namespaceObject = JSON.parse('{"id":"device/facestation_2/release-notes/150","title":"펌웨어 버전 1.5.0","description":"릴리즈2021-07-08","source":"@site/docs/device/facestation_2/release-notes/150.mdx","sourceDirName":"device/facestation_2/release-notes","slug":"/device/facestation_2/release-notes/150","permalink":"/device/facestation_2/release-notes/150","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_2/release-notes/150.mdx","tags":[],"version":"current","frontMatter":{"id":"150","title":"펌웨어 버전 1.5.0","isTranslationMissing":false},"sidebar":"facestation2","previous":{"title":"펌웨어 버전 1.5.1","permalink":"/device/facestation_2/release-notes/151"},"next":{"title":"펌웨어 버전 1.4.2","permalink":"/device/facestation_2/release-notes/142"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/facestation_2/release-notes/150.mdx


const frontMatter = {
	id: 150,
	title: '펌웨어 버전 1.5.0',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 1.5.0 (빌드 번호1.5.0_210628)';

const assets = {

};



const toc = [{
  "value": "주요 버그 수정",
  "id": "주요-버그-수정",
  "level": 2
}, {
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
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "펌웨어-버전-150-빌드-번호150_210628",
        children: "펌웨어 버전 1.5.0 (빌드 번호1.5.0_210628)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2021-07-08"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "주요-버그-수정",
      children: "주요 버그 수정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["열화상 카메라를 설정한 슬레이브 장치에서 인증할 경우 잘못된 온도가 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
          children: "1.4.0, 1.4.1, 1.4.2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "재실 인원 제한 구역 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "슬레이브 장치에 화면 보호기 사용 여부 선택 옵션 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "기본 해시 키를 설정해도 보안 탬퍼를 수동으로 켜거나 끌 수 있도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 출입카드와 일반 RFID 카드의 이벤트 로그 분리"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "열화상 카메라와 Wiegand 항시 통과를 모두 설정한 경우 열화상 카메라에 대한 동작이 우선하도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "신규 터치패드 적용"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "버전 1.4.2 이하 펌웨어가 설치된 장치의 경우 전면 커버(터치패드)를 교체할 때 아래 안내를 따르십시오."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "펌웨어를 버전 1.5.0 이상으로 업그레이드한 뒤 전면 커버 교체를 진행하십시오."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "펌웨어를 버전 1.5.0 이상으로 업그레이드하기 전 전면 커버를 이미 교체해 버린 경우 최신 버전 펌웨어로 다시 업그레이드하십시오."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치를 타사 컨트롤러와 OSDP 로 연결했을 때 컨트롤러의 Secure Communication 모드를 활성화하면 RS-485 통신이 정상적으로 동작하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "슬레이브로 연결한 Secure I/O 2의 입력 포트에 출입문 센서를 설정하였을 때 다량의 'Door closed' 로그가 비정상적으로 발생하는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["IR LED 값에 오류가 있을 경우 초기화되도록 방어 코드 추가 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.0 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이중 인증이 설정된 슬레이브 장치에서 두 번째 사용자 인증 성공 시 화면이 비정상적으로 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["열화상 카메라의 온도 확인 모드를 '온도 확인 후 인증'으로 설정했을 때 온도 측정 실패 시 비정상적인 이벤트 로그가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.0, 1.4.1, 1.4.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["열화상 카메라의 온도 확인 모드를 '온도만 확인'으로 설정했을 때 온도 측정 시 비정상적인 이벤트 로그가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.0, 1.4.1, 1.4.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["근태 코드 설정을 변경하였을 때 변경된 설정이 로그에는 반영되나, 화면에는 정상적으로 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["엘리베이터에 스케줄 개방 구역을 설정한 뒤 마스터 장치를 재부팅할 경우 릴레이가 Off(Lock)로 동작하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["슈프리마 열화상 카메라를 사용할 때 작업 조건 및 동작에서 설정한 입력 신호에 대한 동작 내용과 다른 동작이 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.0, 1.4.1, 1.4.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["열화상 카메라를 '사용'에서 '사용 안 함'으로 변경해도 열화상 카메라 화면이 유지되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.0, 1.4.1, 1.4.2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["'장치 → 서버'로 통신 연결을 설정할 때 장치가 비정상적으로 종료되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["USB 내보내기 시 데이터베이스의 전체 파일이 삭제되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["슬레이브로 연결된 장치가 비정상적으로 재부팅되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Secure I/O 2를 연결했을 때 RS-485 연결 끊김 로그가 지속적으로 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 관리자를 1,000명 등록한 상태에서 초기화를 진행해도 10명의 장치 관리자가 삭제되지 않고 유지되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["모바일 출입카드 애플리케이션을 이용한 장치 등록이 다이나믹 사이트에서는 동작하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치를 DM-20과 연결하여 사용할 때 DM-20에 연결된 Wiegand 리더를 Lock 설정한 뒤 장치를 재부팅하면 Wiegand 리더가 Unlock으로 동작하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["AoC에 발급한 사용자 정보 중 지문을 신규로 등록하였을 때 기존 AoC에 발급한 지문으로 인증에 성공하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["수동 잠김/수동 개방을 설정하였을 때 마스터 장치를 재부팅하면 출입문 릴레이 상태가 정상적으로 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.2 이하"
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