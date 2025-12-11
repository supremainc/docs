"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["88551"], {
59003: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_biolite_n_2_release_notes_130_mdx_ced_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-biolite-n-2-release-notes-130-mdx-ced.json
var site_docs_device_biolite_n_2_release_notes_130_mdx_ced_namespaceObject = JSON.parse('{"id":"device/biolite_n2/release-notes/130","title":"펌웨어 버전 1.3.0","description":"릴리즈2020-06-11","source":"@site/docs/device/biolite_n2/release-notes/130.mdx","sourceDirName":"device/biolite_n2/release-notes","slug":"/device/biolite_n2/release-notes/130","permalink":"/device/biolite_n2/release-notes/130","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biolite_n2/release-notes/130.mdx","tags":[],"version":"current","frontMatter":{"id":"130","title":"펌웨어 버전 1.3.0","isTranslationMissing":false},"sidebar":"bioliten2","previous":{"title":"펌웨어 버전 1.3.1","permalink":"/device/biolite_n2/release-notes/131"},"next":{"title":"펌웨어 버전 1.2.0","permalink":"/device/biolite_n2/release-notes/120"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/biolite_n2/release-notes/130.mdx


const frontMatter = {
	id: 130,
	title: '펌웨어 버전 1.3.0',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 1.3.0 (빌드 번호 1.3.0_200609)';

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
  }, {BugLists, Separator} = _components;
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "펌웨어-버전-130-빌드-번호-130_200609",
        children: "펌웨어 버전 1.3.0 (빌드 번호 1.3.0_200609)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2020-06-11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "주요-버그-수정",
      children: "주요 버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "장치 연결이 해제된 동안 발생한 로그가 장치 재연결 이후에도 BioStar 2에 전송되지 않는 문제"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 ID 변경 기능 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 보안 강화"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "암호화되지 않은 통신 연결 제한"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "암호화 키 보안 강화"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "사용자 정보 암호화 및 마이그레이션 지원"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "안티패스백 구역 규칙이 실제 출입문의 상태에 따라 동작하도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "엘리베이터 제어 시 층별 스케줄 개방 구역 기능 지원"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "신규 장치 연결 지원"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "XPass D2 (Rev 2)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mobile Access V1.1 지원"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "스케줄 개방 및 수동 잠금이 설정된 상태에서 마스터 장치가 재부팅될 경우 스케줄 개방으로 동작하는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "1세대 장치에서 발급한 iCLASS 카드를 정상적으로 인식하지 못하는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Wiegand 출력 장치에서 카드를 등록한 뒤 다른 사용자에게 등록된 지문으로 Wiegand 출력 시 장치가 정상적으로 동작하지 않는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "바이트 순서를 LSB로, Wiegand 출력 정보를 사용자 ID로 설정한 뒤 지문 인증으로 인증하면 장치가 재부팅되는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "슬레이브 장치에서 스마트 카드 및 얼굴으로 인증하면 마스터 장치가 재부팅되는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "사용자 ID 종류를 영숫자로 설정했을 때 장치에서 공백을 포함된 사용자 ID를 등록할 수 있는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioStation 2를 슬레이브 장치로 연결하였을 때 작업 조건 및 동작에서 출력 포트를 설정할 수 없는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "BioEntry R2(BER2-OD)와의 RS-485 통신이 정상적으로 동작하지 않는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "동작 신호 출력에 지연이 발생하는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "인증 모드를 편집해도 편집한 내용이 적용되지 않는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "SSL 보안 통신 중 펌웨어를 업그레이드하거나 사용자를 전송할 때 장치가 재부팅되거나 시간 초과되는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "지문 템플릿 업데이트 시 오류가 발생하는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "협박 지문으로 등록한 지문 인증을 실패하는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "XPass 2를 슬레이브 장치로 연결하였을 때 인증 모드 설정이 정상적으로 동작하지 않는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "슬레이브 장치로 연결한 BioStation 2를 공장초기화해도 일부 리소스가 초기화되지 않는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "슬레이브 장치에서 '잘못된 페이로드 정보입니다.' 메시지가 발생한 뒤 비정상적으로 슬레이브 장치의 연결이 끊기고 재연결이 불가능한 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "카드 형식별 선택 옵션에서 SEOS를 선택하지 않고, 스마트 카드 레이아웃을 설정한 뒤 iCLASS SEOS 카드로 인증할 경우 오류가 발생하는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "DES/AES 암호화 모드에서 발급된 AoC, SCC로 인증 시 오류가 발생하는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "글로벌 안티패스백 구역에서 안티패스백 위반 시 인증 성공 로그가 발생하는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "RS-485 통신 시 장치에서 연속으로 지문 인증을 시도할 경우 오인증이 발생하거나 인증을 실패하는 문제"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "간헐적으로 iCLASS 카드를 인식하지 못하는 문제"
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