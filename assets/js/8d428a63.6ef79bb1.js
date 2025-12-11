"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["630"], {
46748: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_facestation_f_2_release_notes_214_mdx_8d4_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-facestation-f-2-release-notes-214-mdx-8d4.json
var site_docs_device_facestation_f_2_release_notes_214_mdx_8d4_namespaceObject = JSON.parse('{"id":"device/facestation_f2/release-notes/214","title":"펌웨어 버전 2.1.4","description":"릴리즈2023-08-11","source":"@site/docs/device/facestation_f2/release-notes/214.mdx","sourceDirName":"device/facestation_f2/release-notes","slug":"/device/facestation_f2/release-notes/214","permalink":"/device/facestation_f2/release-notes/214","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_f2/release-notes/214.mdx","tags":[],"version":"current","frontMatter":{"id":"214","title":"펌웨어 버전 2.1.4","isTranslationMissing":false},"sidebar":"facestationf2","previous":{"title":"펌웨어 버전 2.2.0","permalink":"/device/facestation_f2/release-notes/220"},"next":{"title":"펌웨어 버전 2.1.3","permalink":"/device/facestation_f2/release-notes/213"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/facestation_f2/release-notes/214.mdx


const frontMatter = {
	id: 214,
	title: '펌웨어 버전 2.1.4',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 2.1.4 (빌드 번호 2.1.4_230810)';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, BugLists, Separator} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!BugLists) _missingMdxReference("BugLists", true);
  if (!Separator) _missingMdxReference("Separator", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "펌웨어-버전-214-빌드-번호-214_230810",
        children: "펌웨어 버전 2.1.4 (빌드 번호 2.1.4_230810)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2023-08-11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "신규 SE 프로세서가 적용된 장치의 경우 펌웨어를 v2.1.0 이상으로 업그레이드한 뒤 하위 버전으로 다운그레이드할 수 없으며, 하위 버전에서 커스터마이징한 펌웨어도 다운그레이드할 수 없습니다."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "기존 SE 프로세서가 적용된 장치는 하위 버전으로 다운그레이드할 수 있습니다."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["장치의 신규 SE 프로세서 적용 여부 및 펌웨어 다운그레이드 가능 여부는 장치의 시리얼 번호를 확인한 뒤 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://supremainc.com",
          children: "슈프리마 홈페이지"
        }), "에 문의하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-기능-및-개선",
      children: "신규 기능 및 개선"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "퓨전 매칭"
          }), " 및 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "위조 얼굴 검출"
          }), " 기능이 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "보통"
          }), "으로 설정되어 있을 때 위조 얼굴 검출 성능 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["장치가 설치된 조도 환경에 따른 깜빡임 발생 방지를 위한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "주파수"
          }), " 조정 옵션 추가"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["iOS에서 BLE 모바일 카드로 인증하면 인증되지 않고 간헐적으로 장치가 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에 사용자가 5만명 이상 등록된 상태에서 BioStar 2에서 펌웨어 업그레이드하는 경우 장치가 멈추는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.1.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["마스터 장치를 재시작했을 때 장치의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "이벤트 로그"
            }), "에 재시작 로그가 생성되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "2.1.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일부 MIFARE Classic 카드 인식에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
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
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "화면 보호기"
            }), "가 동작하던 장치를 장기간 사용하지 않은 경우 검은 화면이 나타나고 먹통이 되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
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