"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["37717"], {
35331: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_index_mdx_62a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-index-mdx-62a.json
var site_docs_device_vionyx_webserver_index_mdx_62a_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/index","title":"ViOnyx Web Server","description":"Suprema AI 어안 카메라(Fisheye Camera)의 웹 기반 관리 플랫폼. 얼굴 인식 기반 접근 제어, 사람 추적, 다중 카메라 통합 관리를 한 곳에서 제어합니다.","source":"@site/docs/device/vionyx_webserver/index.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/","permalink":"/docs/es/device/vionyx_webserver/","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/index.mdx","tags":[],"version":"current","frontMatter":{"title":"ViOnyx Web Server","description":"Suprema AI 어안 카메라(Fisheye Camera)의 웹 기반 관리 플랫폼. 얼굴 인식 기반 접근 제어, 사람 추적, 다중 카메라 통합 관리를 한 곳에서 제어합니다.","keywords":["ViOnyx","AI 카메라","얼굴 인식","접근 제어","사람 추적","Re-ID","어안카메라"],"isTranslationMissing":true},"sidebar":"aicamwebserver","next":{"title":"시작하기","permalink":"/docs/es/device/vionyx_webserver/getting-started"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/index.mdx


const frontMatter = {
	title: 'ViOnyx Web Server',
	description: 'Suprema AI 어안 카메라(Fisheye Camera)의 웹 기반 관리 플랫폼. 얼굴 인식 기반 접근 제어, 사람 추적, 다중 카메라 통합 관리를 한 곳에서 제어합니다.',
	keywords: [
		'ViOnyx',
		'AI 카메라',
		'얼굴 인식',
		'접근 제어',
		'사람 추적',
		'Re-ID',
		'어안카메라'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "주요 기능",
  "id": "주요-기능",
  "level": 2
}, {
  "value": "Walk-Through 얼굴 인식 접근 제어",
  "id": "walk-through-얼굴-인식-접근-제어",
  "level": 3
}, {
  "value": "사람 추적 &amp; Re-ID (재식별)",
  "id": "사람-추적--re-id-재식별",
  "level": 3
}, {
  "value": "다중 카메라 통합 관리",
  "id": "다중-카메라-통합-관리",
  "level": 3
}, {
  "value": "AI 영상 분석",
  "id": "ai-영상-분석",
  "level": 3
}, {
  "value": "엔드포인트 AI 처리",
  "id": "엔드포인트-ai-처리",
  "level": 3
}, {
  "value": "가이드 구성",
  "id": "가이드-구성",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Column, Columns, Overview} = _components;
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!Overview) _missingMdxReference("Overview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"누가 들어오는가 뿐만 아니라 누가 거기 있고, 어디에 있고, 무엇을 하고 있는가\""
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ViOnyx Web Server는 Suprema AI 어안 카메라(Fisheye Camera)를 위한 통합 관리 플랫폼입니다.\n얼굴 인식 기반의 Walk-through 접근 제어, 실시간 사람 추적(Re-ID), 다중 카메라 통합 감시를 웹 브라우저에서 간단하게 제어할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "주요-기능",
      children: "주요 기능"
    }), "\n", (0,jsx_runtime.jsxs)(Columns, {
      children: [(0,jsx_runtime.jsxs)(Column, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "walk-through-얼굴-인식-접근-제어",
          children: "Walk-Through 얼굴 인식 접근 제어"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "1초 이내에 50명 이상의 개인 동시 식별"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "카드 없이 얼굴만으로 진입"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "미인증 사용자만 게이트 차단하는 스마트 시스템"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar와의 완벽한 통합"
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h3, {
          id: "사람-추적--re-id-재식별",
          children: "사람 추적 & Re-ID (재식별)"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "한 개인을 다중 카메라 간 자동 추적"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "이동 경로 기록 및 분석"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "특정 구역별 체류 시간 측정"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "구역 진입/통과 감지"
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h3, {
          id: "다중-카메라-통합-관리",
          children: "다중 카메라 통합 관리"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "최대 4대의 확장 카메라 동시 제어"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "통합 대시보드에서 실시간 모니터링"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "카메라 간 자동 사람 추적"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "구역별 통합 분석"
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Column, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "ai-영상-분석",
          children: "AI 영상 분석"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "침입 감지 (Intrusion Detection)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "배회 감지 (Loitering)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "화재/연기 감지"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "이상 행동 감지"
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h3, {
          id: "엔드포인트-ai-처리",
          children: "엔드포인트 AI 처리"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "클라우드 서버 필요 없음"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "엣지 기반 실시간 처리"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "낮은 TCO (총 소유 비용)"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "프라이버시 보호"
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "가이드-구성",
      children: "가이드 구성"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ViOnyx Web Server 가이드는 다음과 같은 주요 섹션으로 구성되어 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Overview, {})]
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