"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["90"], {
"5771": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_platform_biostar_2_system_requirements_mdx_965_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-2-system-requirements-mdx-965.json
var site_docs_platform_biostar_2_system_requirements_mdx_965_namespaceObject = JSON.parse('{"id":"platform/biostar2/system-requirements","title":"시스템 최소 요구 사항","description":"BioStar 2를 설치하기 위한 시스템 최소 요구 사항을 확인하세요.","source":"@site/docs/platform/biostar2/system-requirements.mdx","sourceDirName":"platform/biostar2","slug":"/platform/biostar2/system-requirements","permalink":"/en/platform/biostar2/system-requirements","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar2/system-requirements.mdx","tags":[],"version":"current","frontMatter":{"id":"system-requirements","title":"시스템 최소 요구 사항","description":"BioStar 2를 설치하기 위한 시스템 최소 요구 사항을 확인하세요.","keywords":["시스템 최소 요구 사항","운영체제","데이터베이스","CPU","RAM"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"시작하기 전에","permalink":"/en/platform/biostar2/getting-started"},"next":{"title":"제품별 펌웨어 호환 정보","permalink":"/en/platform/biostar2/product-compatibility"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/platform/biostar2/system-requirements.mdx


const frontMatter = {
	id: 'system-requirements',
	title: '시스템 최소 요구 사항',
	description: 'BioStar 2를 설치하기 위한 시스템 최소 요구 사항을 확인하세요.',
	keywords: [
		'시스템 최소 요구 사항',
		'운영체제',
		'데이터베이스',
		'CPU',
		'RAM'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 설치하기 위한 시스템 최소 요구 사항을 확인하세요."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x col5--15-10-25",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              colSpan: "2",
              children: "항목"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "소규모 조직"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "중간 규모 조직"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "대규모 조직"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "사용 환경"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "장치 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1 - 50 대"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "51 - 100 대"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "101 - 1,000 대"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "5",
              children: "시스템 환경(서버)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "운영체제"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              colSpan: "3",
              children: ["Windows 10, Windows 11, Windows Server 2016, Windows Server 2019, Windows Server 2022", (0,jsx_runtime.jsx)("br", {}), "* Mac OS 부트 캠프의 Windows 가상 환경은 지원되지 않습니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "데이터베이스"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              colSpan: "3",
              children: ["MariaDB 10.1.10, MS SQL Server 2012 SP3, MS SQL Server 2014 SP2, MS SQL Server 2016 SP1, MS SQL Server 2017, MS SQL Server 2019", (0,jsx_runtime.jsx)("br", {}), "* MS SQL 보안 통신은 TLS 1.0 및 1.1을 지원합니다."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2 GHz 듀얼 코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "4 GHz 쿼드 코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "4 GHz 16 코어"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "8 GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "16 GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "32 GB"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "SSD"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "512 GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1 TB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1 TB"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "시스템 환경(클라이언트)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1 GHz"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1 GHz"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1 GHz"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "4 GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "4 GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "4 GB"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "웹 브라우저"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "Google 크롬 100 버전 이상"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "최적의 성능을 위해 64bit 운영체제를 사용하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "는 Google 크롬에 최적화되어 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "는 Windows 7을 지원하지만 Windows 7에 대한 Microsoft의 기술 지원이 종료되었으므로 시스템 설치 시 운영체제 선택에 유의하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Windows 8.1을 사용하는 경우 다음 링크를 참고해 KB2919355 업데이트를 설치하세요. ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://support.microsoft.com/ko-kr/help/2919355/windows-rt-8-1--windows-8-1--and-windows-server-2012-r2-update-april-2",
              children: "Link 1"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["MS SQL Server와 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "가 서로 다른 PC에 설치되어 있으면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "가 설치된 PC에 Native Client를 설치해야 합니다. ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.microsoft.com/ko-kr/download/details.aspx?id=50402",
              children: "Link 2"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Oracle 데이터베이스는 더 이상 지원되지 않습니다. 자세한 내용은 슈프리마 기술 지원팀에 문의하세요."
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
"65": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
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