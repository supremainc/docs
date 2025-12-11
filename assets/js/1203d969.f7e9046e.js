"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["7712"], {
83514: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_bioentry_w_2_release_notes_182_mdx_120_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-bioentry-w-2-release-notes-182-mdx-120.json
var site_docs_device_bioentry_w_2_release_notes_182_mdx_120_namespaceObject = JSON.parse('{"id":"device/bioentry_w2/release-notes/182","title":"펌웨어 버전 1.8.2","description":"릴리즈2024-11-01","source":"@site/docs/device/bioentry_w2/release-notes/182.mdx","sourceDirName":"device/bioentry_w2/release-notes","slug":"/device/bioentry_w2/release-notes/182","permalink":"/device/bioentry_w2/release-notes/182","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/bioentry_w2/release-notes/182.mdx","tags":[],"version":"current","frontMatter":{"id":"182","title":"펌웨어 버전 1.8.2","isTranslationMissing":false},"sidebar":"bioentryw2","previous":{"title":"BioEntry W2 릴리스 노트","permalink":"/device/bioentry_w2/release-notes/"},"next":{"title":"펌웨어 버전 1.8.1","permalink":"/device/bioentry_w2/release-notes/181"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/bioentry_w2/release-notes/182.mdx


const frontMatter = {
	id: 182,
	title: '펌웨어 버전 1.8.2',
	isTranslationMissing: false
};
const contentTitle = '펌웨어 버전 1.8.2 (빌드 번호 1.8.2_241025)';

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
        id: "펌웨어-버전-182-빌드-번호-182_241025",
        children: "펌웨어 버전 1.8.2 (빌드 번호 1.8.2_241025)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["릴리즈", (0,jsx_runtime.jsx)(Separator, {}), "2024-11-01"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "신규 SE 프로세서가 적용된 장치의 경우 펌웨어를 v1.7.1 이상으로 업그레이드한 뒤 하위 버전으로 다운그레이드할 수 없습니다. 기존 SE 프로세서가 적용된 장치는 하위 버전으로 다운그레이드할 수 있습니다."
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "장치 부팅 후 1분 동안 SEOS 설정 카드를 CSN으로 인식하지 않도록 개선"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "버그-수정",
      children: "버그 수정"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(BugLists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
              children: "1.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일부 장치가 펌웨어 업그레이드 후 부팅이 되지않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.5.0"
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
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "일괄 편집"
            }), "으로 설정한 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드 레이아웃"
            }), "이 장치 상세 페이지에서 적용되지 않는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["장치에 로그가 가득 찬 상태에서 새로운 이벤트가 발생하는 경우 새로 생성된 이벤트와 함께 의도치 않은 로그를 가져오는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.7.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "서버와 시간 동기화"
            }), " 옵션을 해제한 후 장치의 시간을 변경할 경우 장치가 비정상적으로 재시작되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.0.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["신규 SE 칩 펌웨어를 사용하는 환경에서 일부 스마트 카드 인식에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.7.1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "커스텀 스마트 카드 레이아웃"
            }), "이 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "보조 사이트 키"
            }), "로 설정된 DESFire 스마트 카드가 CSN 카드로 인식되는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.8.0"
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
              children: "1.8.0"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DESFire 고급 설정"
            }), "을 사용하여 설정된 커스텀 스마트 카드가 인식에 실패하는 문제 ", (0,jsx_runtime.jsx)(Badge, {
              children: "1.8.0"
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