"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["13290"], {
73331: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_biolite_n_2_release_notes_140_mdx_1f6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-biolite-n-2-release-notes-140-mdx-1f6.json
var site_docs_device_biolite_n_2_release_notes_140_mdx_1f6_namespaceObject = JSON.parse('{"id":"device/biolite_n2/release-notes/140","title":"펌웨어 버전 1.4.0","description":"릴리즈2021-06-25","source":"@site/docs/device/biolite_n2/release-notes/140.mdx","sourceDirName":"device/biolite_n2/release-notes","slug":"/device/biolite_n2/release-notes/140","permalink":"/docs/device/biolite_n2/release-notes/140","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biolite_n2/release-notes/140.mdx","tags":[],"version":"current","frontMatter":{"id":"140","title":"펌웨어 버전 1.4.0","isTranslationMissing":false},"sidebar":"bioliten2","previous":{"title":"펌웨어 버전 1.4.1","permalink":"/docs/device/biolite_n2/release-notes/141"},"next":{"title":"펌웨어 버전 1.3.2","permalink":"/docs/device/biolite_n2/release-notes/132"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/biolite_n2/release-notes/140.mdx


const frontMatter = {
	id: 140,
	title: '펌웨어 버전 1.4.0',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 1.4.0 (빌드 번호 1.4.0_210617)';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "펌웨어-버전-140-빌드-번호-140_210617",
        children: "펌웨어 버전 1.4.0 (빌드 번호 1.4.0_210617)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2021-06-25"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "기본 해시 키를 설정해도 보안 탬퍼를 수동으로 켜거나 끌 수 있도록 개선"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Open SSL 1.1.1i 버전 적용"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "모바일 출입카드와 일반 RFID 카드의 이벤트 로그 분리"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["스케줄 개방 구역에 구성된 슬레이브 장치의 연결이 끊어졌다가 재연결될 경우 릴레이 상태가 끊기기 전 상태로 유지되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이중 인증이 설정된 슬레이브 장치에서 두 번째 사용자 인증 성공 시 화면이 비정상적으로 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.4.0 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["BioStar 2와의 연결이 끊어진 뒤 다시 연결될 때 상황에 맞지 않는 팝업 메시지가 표시되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["버전 1.2.0 펌웨어가 설치된 슬레이브 장치를 마스터로 변경한 뒤 펌웨어를 버전 1.3.2로 업그레이드할 경우 장치가 비정상적으로 재부팅되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["엘리베이터에 스케줄 개방 구역을 설정한 뒤 마스터 장치를 재부팅할 경우 릴레이가 Off(Lock)로 동작하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["슬레이브로 연결된 장치가 비정상적으로 재부팅되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치를 Secure I/O 2와 연결하여 사용할 때 연결 끊김 로그가 빈번하게 발생하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치를 DM-20과 연결하여 사용할 때 DM-20에 연결된 Wiegand 리더를 Lock 설정한 뒤 장치를 재부팅하면 Wiegand 리더가 Unlock으로 동작하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["출입문 수동 개방 상태에서 장치를 재부팅하면 출입문이 잠긴 채로 열리지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 관리자를 1,000명 등록한 상태에서 초기화를 진행해도 10명의 장치 관리자가 삭제되지 않고 유지되는 문제", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["서버 URL 항목에 입력 가능해야 하는 특수 기호(., ?, /, *)를 입력할 수 없는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치 펌웨어 업그레이드 후 키 입력에 반응이 없거나 사용자 인터페이스 동작이 느려지는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["AoC에 발급한 사용자 정보 중 지문을 신규로 등록하였을 때 기존 AoC에 발급한 지문으로 인증에 성공하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 이하"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Wiegand 리더에 대해 Card Only 이외의 인증 모드도 설정이 가능한 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.3.2 이하"
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