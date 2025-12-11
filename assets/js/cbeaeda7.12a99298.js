"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["17546"], {
503: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_facestation_f_2_release_notes_112_mdx_cbe_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-facestation-f-2-release-notes-112-mdx-cbe.json
var site_docs_device_facestation_f_2_release_notes_112_mdx_cbe_namespaceObject = JSON.parse('{"id":"device/facestation_f2/release-notes/112","title":"펌웨어 버전 1.1.2","description":"릴리즈2021-10-01","source":"@site/docs/device/facestation_f2/release-notes/112.mdx","sourceDirName":"device/facestation_f2/release-notes","slug":"/device/facestation_f2/release-notes/112","permalink":"/device/facestation_f2/release-notes/112","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_f2/release-notes/112.mdx","tags":[],"version":"current","frontMatter":{"id":"112","title":"펌웨어 버전 1.1.2","isTranslationMissing":false},"sidebar":"facestationf2","previous":{"title":"펌웨어 버전 1.1.4","permalink":"/device/facestation_f2/release-notes/114"},"next":{"title":"펌웨어 버전 1.1.1","permalink":"/device/facestation_f2/release-notes/111"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/facestation_f2/release-notes/112.mdx


const frontMatter = {
	id: 112,
	title: '펌웨어 버전 1.1.2',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 1.1.2 (빌드 번호 1.1.2_210903)';

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
        id: "펌웨어-버전-112-빌드-번호-112_210903",
        children: "펌웨어 버전 1.1.2 (빌드 번호 1.1.2_210903)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2021-10-01"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "인텔리전트 슬레이브 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["인텔리전트 슬레이브: 슈프리마 장치와 타사 컨트롤러를 연결하였을 때 슈프리마 장치에서 직접 1:1 또는 1", ":N", " 매칭을 수행하고 인증 결과를 OSDP 카드 데이터로 타사 컨트롤러에 전송할 수 있는 기능"]
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
            children: ["재실 인원 제한 구역 추가 시 장치가 재부팅되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.1 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["재실 인원 제한 구역에 설정한 장치의 LAN 연결을 제거한 상태에서 항시 통과 인원에 포함된 사용자가 입실 장치에서 인증을 시도할 경우 장치가 재부팅되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.1 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["DHCP를 사용할 때 비정상적인 IP가 출력되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.1 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["슬레이브로 연결된 OM-120의 특정 포트를 출입문 릴레이로 설정한 뒤 장치를 재부팅하면 릴레이가 비정상적으로 동작하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.1 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["위조 지문 검출 기능을 설정한 상태에서 장치를 재부팅할 경우 이후 위조 지문 입력 시 검출되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.1 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["슬레이브 장치의 인증 모드를 카드+지문으로 설정했을 때 비정상적으로 인증에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.1 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["PIN 인증이 정상적으로 동작하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.1 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["조명 밝기 조절 기능 영문 명칭 변경 및 기능 개선 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.1"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "기능 이름 변경: 'LED Brightness'에서 'Light Brightness'로 변경"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "조명 밝기에 지원하지 않는 값이 설정될 경우 보통(Normal)으로 동작하도록 수정"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["지문, 지문/PIN이 포함된 인증 모드를 설정한 뒤 확장 개인 인증 모드를 지원하지 않는 슬레이브 장치에서 지문 및 PIN이 등록되지 않은 사용자로 인증을 시도할 경우 비정상적인 오류 메시지가 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.1 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["10시간 이상 얼굴 인증 모드를 사용하지 않다가 활성화할 경우 얼굴 인증이 동작하지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.1 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["서버 매칭을 사용할 때 사용자 권한이 '권한 없음'인 사용자로 본인의 이벤트 로그를 조회할 경우 로딩 과정에서 장치가 비정상적으로 재부팅되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.1 이하"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "장치에 다수의 이벤트 로그가 저장되어 있고, 오랜 기간 동안 서버에 업로드 되지 않은 경우 서버로 이벤트 로그를 업로드하는 동작과 해당 사용자의 이벤트 로그를 출력하는 동작이 충돌하여 발생함."
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["얼굴 인증과 무관한 동작 중 백그라운드에서 얼굴 영상 캡처 및 인증 동작이 활성화되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.1.1 이하"
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