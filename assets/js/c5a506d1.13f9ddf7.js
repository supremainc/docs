"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["73215"], {
60753: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_facestation_f_2_release_notes_111_mdx_c5a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-facestation-f-2-release-notes-111-mdx-c5a.json
var site_docs_device_facestation_f_2_release_notes_111_mdx_c5a_namespaceObject = JSON.parse('{"id":"device/facestation_f2/release-notes/111","title":"펌웨어 버전 1.1.1","description":"릴리즈2021-06-25","source":"@site/docs/device/facestation_f2/release-notes/111.mdx","sourceDirName":"device/facestation_f2/release-notes","slug":"/device/facestation_f2/release-notes/111","permalink":"/device/facestation_f2/release-notes/111","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_f2/release-notes/111.mdx","tags":[],"version":"current","frontMatter":{"id":"111","title":"펌웨어 버전 1.1.1","isTranslationMissing":false},"sidebar":"facestationf2","previous":{"title":"펌웨어 버전 1.1.2","permalink":"/device/facestation_f2/release-notes/112"},"next":{"title":"펌웨어 버전 1.0.5","permalink":"/device/facestation_f2/release-notes/105"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/facestation_f2/release-notes/111.mdx


const frontMatter = {
	id: 111,
	title: '펌웨어 버전 1.1.1',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 1.1.1 (빌드 번호 1.1.1_210623)';

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
        id: "펌웨어-버전-111-빌드-번호-111_210623",
        children: "펌웨어 버전 1.1.1 (빌드 번호 1.1.1_210623)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2021-06-25"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "비주얼 페이스 알고리즘 개선"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "신규 비주얼 페이스 알고리즘은 펌웨어 버전 1.0.5 이하에서 등록한 비주얼 페이스 템플릿과 호환하지 않습니다. 펌웨어를 버전1.0.5 이하에서 버전 1.1.0 이상으로 업그레이드할 경우 기존에 등록된 얼굴 템플릿을 추출하기 위한 마이그레이션이 진행되며, 이 작업은 등록된 사용자 수에 따라 최대 10시간 정도 걸릴 수 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "버전 1.0.5 이하에서 발급한 얼굴 데이터가 저장된 AoC는 버전 1.1.0 이상 펌웨어가 적용된 장치에서 호환되지 않습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "펌웨어를 버전 1.1.0 이상으로 업그레이드할 경우 버전 1.0.5 이하로 다운그레이드할 수 없습니다."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "재실 인원 제한 구역 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "열화상 카메라 사용성 향상"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "온도 측정 거리 및 사용자의 움직임에 대한 음성 안내 추가"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ROI 가이드 영역에 대한 사용자 인터페이스 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ROI 설정에 따른 가이드 영역 표시 구분"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ROI 설정 기본 값을 동적 ROI에서 기본 ROI로 변경"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "온도 측정 실패 시 안내 메시지 추가"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "조명 밝기 조절 기능 명칭 변경 및 '사용 안 함' 옵션 추가"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "기능 이름 변경: '주변 밝기(Ambient Brightness)'에서 '조명 밝기(LED Brightness)'로 변경"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "'사용 안 함' 옵션을 추가하여 장치의 조명을 끌 수 있도록 개선"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "'자동' 옵션 삭제"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "기본 해시 키를 설정해도 보안 탬퍼를 수동으로 켜거나 끌 수 있도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "얼굴 인증 시간 간격을 2.5초로 변경"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "USB 내보내기 시 2 GB 이상의 크기가 큰 파일은 분할 후 압축하여 압축 해제 시 오류가 발생하지 않도록 개선"
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
              children: "1.0.5 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["너무 밝거나 어둡거나 역광이 비치는 환경으로 인해 사용자 얼굴 인증에 실패할 경우 화면의 밝기가 밝아지고, 이 상태가 지속되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.4 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["펌웨어를 버전 1.0.4 이상으로 업그레이드할 경우 열화상 카메라가 정상적으로 동작하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.4 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["USB 내보내기로 로그를 내보낼 때 사용자 등록 여부에 따라 소요 시간에 차이가 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["인증 모드를 ID+PIN으로 설정하였을 때 간헐적으로 관리자 메뉴가 표시되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.5 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이중 인증이 설정된 슬레이브 장치에서 두 번째 사용자 인증 성공 시 화면이 비정상적으로 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2와의 연결이 끊어진 뒤 다시 연결될 때 상황에 맞지 않는 팝업 메시지가 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.5 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["설정된 인증 모드의 순서에 따라 협박 지문 인증 로그가 발생되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.5 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["엘리베이터에 스케줄 개방 구역을 설정한 뒤 마스터 장치를 재부팅할 경우 릴레이가 Off(Lock)로 동작하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["USB 내보내기 시 데이터베이스의 전체 파일이 삭제되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.5 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["비주얼 페이스 매칭 알고리즘 개선 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.0 이하"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "마스크 착용 시 인증 성능 개선"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "안경 착용자에 대한 얼굴 인식 알고리즘 개선"
              }), "\n"]
            }), "\n"]
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