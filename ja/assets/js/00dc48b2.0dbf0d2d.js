"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["70137"], {
61973: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_reports_time_attendance_reports_mdx_00d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-reports-time-attendance-reports-mdx-00d.json
var site_docs_platform_biostar_air_reports_time_attendance_reports_mdx_00d_namespaceObject = JSON.parse('{"id":"platform/biostar_air/reports-time-attendance-reports","title":"근태 보고서","description":"BioStar Air에서 기본적인 근태 보고서를 구성하는 방법을 안내합니다. 현장 근무 시간 추적, CSV 내보내기 옵션, API 통합 기능을 지원합니다.","source":"@site/docs/platform/biostar_air/reports-time-attendance-reports.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/reports-time-attendance-reports","permalink":"/docs/ja/platform/biostar_air/reports-time-attendance-reports","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/reports-time-attendance-reports.mdx","tags":[],"version":"current","frontMatter":{"id":"reports-time-attendance-reports","title":"근태 보고서","description":"BioStar Air에서 기본적인 근태 보고서를 구성하는 방법을 안내합니다. 현장 근무 시간 추적, CSV 내보내기 옵션, API 통합 기능을 지원합니다.","keywords":["reports","time and attendance","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"보고서 구성하기","permalink":"/docs/ja/platform/biostar_air/configuring-reports"},"next":{"title":"관리자 관리하기","permalink":"/docs/ja/platform/biostar_air/managing-administrators"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/reports-time-attendance-reports.mdx


const frontMatter = {
	id: 'reports-time-attendance-reports',
	title: '근태 보고서',
	description: 'BioStar Air에서 기본적인 근태 보고서를 구성하는 방법을 안내합니다. 현장 근무 시간 추적, CSV 내보내기 옵션, API 통합 기능을 지원합니다.',
	keywords: [
		'reports',
		'time and attendance',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "기능 개요",
  "id": "기능-개요",
  "level": 2
}, {
  "value": "기능 탐색",
  "id": "기능-탐색",
  "level": 2
}, {
  "value": "단계별 사용 안내",
  "id": "step-by-step-instructions",
  "level": 2
}, {
  "value": "공통 이슈 및 고려 사항",
  "id": "공통-이슈-및-고려-사항",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "기능-개요",
      children: "기능 개요"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Air의 근태 보고서(T&A Report)는 간단한 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "현장 근무 시간"
      }), " 보고서입니다. 이벤트 로그를 기반으로 직원의 시작 및 종료 시간을 표시합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이 기능은 복잡한 구성 옵션 없이 기본 보고를 위해 설계되었습니다. 근태 시스템은 지역 규정에 따라 다양한 요구 사항이 있을 수 있습니다. 기본 제공되는 근태 보고서가 조직의 요구를 충족하지 못하는 경우, 타사 T&A 솔루션을 사용하는 것을 권장합니다. 이벤트 로그는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CSV로 내보내기"
      }), "하거나 BioStar Air API를 사용하여 타사 근태 소프트웨어와 직접 통합할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "기능-탐색",
      children: "기능 탐색"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Site"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T&A Report"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Settings"
      }), "로 이동하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-by-step-instructions",
      children: "단계별 사용 안내"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["BioStar Air 포털에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Site"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "T&A Report"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings"
          }), "로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "근태 보고서를 활성화하려면 토글 버튼을 클릭하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "보고서에 포함할 사용자 또는 사용자 그룹을 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "결과를 확인하세요."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "보고서를 즉시 다운로드하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Alert & Report"
              }), " 화면에서 자동화된 일정을 구성할 수도 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-reports-settings.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-reports-download.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "공통-이슈-및-고려-사항",
      children: "공통 이슈 및 고려 사항"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "기본 제공되는 근태 보고서는 의도적으로 간단하게 설계되었으며 모든 준수 요구 사항을 충족하지 못할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "복잡한 근태 규칙(예, 지역 노동법, 근무 교대 패턴)이 있는 경우 타사 근태 솔루션을 사용하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이벤트 로그를 CSV로 내보내어 수동으로 처리하거나 API를 사용하여 다른 시스템과 자동으로 통합할 수 있습니다."
        }), "\n"]
      }), "\n"]
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