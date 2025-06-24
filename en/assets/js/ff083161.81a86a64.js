"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9493"], {
3193: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_system_requirements_mdx_ff0_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-system-requirements-mdx-ff0.json
var site_docs_platform_biostar_x_system_requirements_mdx_ff0_namespaceObject = JSON.parse('{"id":"platform/biostar_x/system-requirements","title":"시스템 최소 요구 사항","description":"BioStar X를 설치하기 위한 시스템 요구 사항을 확인하여 조직 규모에 맞는 최적의 환경을 구성하세요.","source":"@site/docs/platform/biostar_x/system-requirements.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/system-requirements","permalink":"/docs/en/platform/biostar_x/system-requirements","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/system-requirements.mdx","tags":[],"version":"current","frontMatter":{"id":"system-requirements","title":"시스템 최소 요구 사항","description":"BioStar X를 설치하기 위한 시스템 요구 사항을 확인하여 조직 규모에 맞는 최적의 환경을 구성하세요.","keywords":["시스템 최소 요구 사항","운영체제","데이터베이스","CPU","RAM"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"시작하기 전에","permalink":"/docs/en/platform/biostar_x/getting-started"},"next":{"title":"튜토리얼","permalink":"/docs/en/platform/biostar_x/tutorial"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/system-requirements.mdx


const frontMatter = {
	id: 'system-requirements',
	title: '시스템 최소 요구 사항',
	description: 'BioStar X를 설치하기 위한 시스템 요구 사항을 확인하여 조직 규모에 맞는 최적의 환경을 구성하세요.',
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



const toc = [{
  "value": "메인 서버",
  "id": "main-server",
  "level": 2
}, {
  "value": "커뮤니케이션 서버",
  "id": "communication-server",
  "level": 2
}, {
  "value": "클라이언트",
  "id": "client",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
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
  }, {Cmd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "는 대규모 엔터프라이즈 환경에서 안정적이고 확장 가능한 통합 보안 관리 솔루션을 제공합니다. 시스템은 메인 서버와 커뮤니케이션 서버로 구성되는 분산 아키텍처를 통해 최대 1,000대 이상의 장치를 효율적으로 관리할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "메인 서버는 시스템의 핵심 관리 기능을, 커뮤니케이션 서버는 장치 통신을 전담하여 부하를 분산시키고 성능을 최적화합니다. 또한 관리자는 클라이언트 PC에서 웹 브라우저를 통해 시스템에 접속하여 모든 관리 업무를 수행할 수 있습니다. 아래의 시스템 요구 사항을 확인하여 조직 규모에 맞는 최적의 환경을 구성하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "main-server",
      children: "메인 서버"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["메인 서버는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "의 중앙 관리 시스템이 설치되는 컴퓨터입니다. 사용자가 웹 브라우저로 접속하여 시스템을 관리하고, 사용자 정보나 출입 권한 설정 등의 모든 업무를 처리합니다. 또한 시스템 전체의 상태를 모니터링하고, 이벤트 로그나 알람을 관리하는 역할을 담당합니다."]
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
              rowSpan: "6",
              children: "시스템 환경"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "운영체제"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "Windows 10, Windows 11, Windows Server 2016, Windows Server 2019, Windows Server 2022"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "데이터베이스"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "MariaDB 11.4.4, MS SQL Server 2012 SP3, MS SQL Server 2014 SP2, MS SQL Server 2016 SP1, MS SQL Server 2017, MS SQL Server 2019, MS SQL Server 2022"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.3GHz 8코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.3GHz 12코어"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["최소 2.3GHz", (0,jsx_runtime.jsx)("br", {}), "권장 4.0GHz 16코어"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "16GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "32GB"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["최소 64GB", (0,jsx_runtime.jsx)("br", {}), "권장 128GB"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "SSD"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "512GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "512GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1TB"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "HDD"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              colSpan: "3",
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.imageLog",
                product: "2"
              }), " 기능을 사용 시, 1,000만 개의 이미지 로그 기준 200GB 필요"]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "는 64bit 운영체제에서만 설치할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "MS SQL Server 보안 통신은 TLS 1.2를 지원합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["MS SQL Server와 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "가 서로 다른 PC에 설치되어 있으면 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "가 설치된 PC에 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://learn.microsoft.com/sql/connect/oledb/download-oledb-driver-for-sql-server",
              children: "Microsoft OLE DB Driver for SQL Server"
            }), "를 설치해야 합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "대규모 조직에서는 MS SQL Server 데이터베이스를 설치하는 것을 권장합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["데이터베이스를 MS SQL Server를 사용하고, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X T&A"
            }), "를 사용한다면 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://learn.microsoft.com/ko-kr/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16#version-17",
              children: "Microsoft ODBC Driver 17 for SQL Server"
            }), "가 필요하므로 사용자의 환경에 적합한 드라이버를 설치하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Mac 운영체제에서 제공하는 부트 캠프의 Windows 가상 환경은 지원하지 않습니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "communication-server",
      children: "커뮤니케이션 서버"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "커뮤니케이션 서버는 출입통제 장치들과의 통신을 전담하는 컴퓨터입니다. 메인 서버와 별도로 설치하여 많은 수의 장치를 안정적으로 관리할 수 있도록 도와줍니다. 한 대의 커뮤니케이션 서버로 최대 1,000대의 장치를 연결할 수 있으며, 필요에 따라 여러 대의 커뮤니케이션 서버를 추가할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              colSpan: "2",
              children: "항목"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "사양"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "4",
              children: "시스템 환경"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "운영체제"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Windows 10, Windows 11, Windows Server 2016, Windows Server 2019, Windows Server 2022"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "최소 2.3GHz, 권장 4.0GHz 16코어"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "최소 64GB, 권장 128GB"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "SSD"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1TB"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "client",
      children: "클라이언트"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["클라이언트는 관리자가 웹 브라우저를 통해 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "에 접속하여 시스템을 운영하는 컴퓨터입니다."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "overflow-x",
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
              rowSpan: "4",
              children: "시스템 환경"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.5GHz"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "2.5GHz"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "최소 2.5GHz"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "RAM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "16GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "32GB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "최소 32GB"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "GPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              colSpan: "3",
              children: "VMS 사용 시, 최소 NVIDIA GeForce RTX 4060"
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
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "는 Google 크롬에 최적화되어 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), "의 웹 인터페이스는 모바일 브라우저에 대한 지원을 제공하지 않습니다."]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
65: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
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