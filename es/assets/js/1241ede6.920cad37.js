"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["74210"], {
33179: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_biostar_air_migration_mdx_124_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-biostar-air-migration-mdx-124.json
var site_docs_platform_biostar_air_biostar_air_migration_mdx_124_namespaceObject = JSON.parse('{"id":"platform/biostar_air/biostar-air-migration","title":"마이그레이션","description":"Airfob Space에서 BioStar Air로의 마이그레션하는 방법을 안내합니다. 플랫폼 기능 비교, 호환성을 알아보고, 마이그레이션 관련 질문에 대한 답변을 제공합니다.","source":"@site/docs/platform/biostar_air/biostar-air-migration.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/biostar-air-migration","permalink":"/docs/es/platform/biostar_air/biostar-air-migration","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/biostar-air-migration.mdx","tags":[],"version":"current","frontMatter":{"id":"biostar-air-migration","title":"마이그레이션","description":"Airfob Space에서 BioStar Air로의 마이그레션하는 방법을 안내합니다. 플랫폼 기능 비교, 호환성을 알아보고, 마이그레이션 관련 질문에 대한 답변을 제공합니다.","keywords":["migration","Airfob Space","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"네트워크 포트 및 장치 식별","permalink":"/docs/es/platform/biostar_air/site-setup-networking"},"next":{"title":"사이트 관리","permalink":"/docs/es/platform/biostar_air/site-management"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/faqs.json
var faqs_namespaceObject = JSON.parse('[{"question":"Airfob Space에서 BioStar Air로 전환해야 하나요?","answer":"아니요. 기존 Airfob Space 고객은 플랫폼을 그대로 사용할 수 있습니다. 현재 강제 마이그레이션은 없습니다."},{"question":"내 장치나 데이터에 영향을 미치나요?","answer":"아니요. 두 플랫폼은 동일한 백엔드를 공유합니다. 장치, 사용자 데이터 및 구성은 두 서비스 간에 완전히 호환됩니다."},{"question":"슈프리마 패스를 Airfob Space 앱 대신 사용해야 하나요?","answer":"기존 모바일 인증 사용자를 BioStar Air로 마이그레이션할 필요는 없습니다. <a href=\'app.airfobspace.com\' target=\'_blank\'>app.airfobspace.com</a> URL 또는 Airfob Pro 앱을 사용하여 사용자를 관리하고 모바일 인증을 발급하는 경우 해당 사용자는 Airfob Space 앱을 사용하기 위한 초대장을 받게 됩니다. <a href=\'admin.biostarair.com\' target=\'_blank\'>admin.biostarair.com</a> 또는 BioStar Air 앱을 사용하여 사용자를 관리하고 모바일 인증을 발급하는 경우 해당 사용자는 슈프리마 패스 앱을 사용하기 위한 초대장을 받게 됩니다."},{"question":"고객 지원 또는 요금이 변경되나요?","answer":"고객 지원이나 요금 프로세스에 즉각적인 변경은 발생하지 않습니다. 그러나 시간이 지남에 따라 BioStar Air는 문서화, 고객 지원 및 기능 발표를 위한 주요 브랜드가 될 것입니다."},{"question":"원한다면 BioStar Air로 전환할 수 있나요?","answer":"예. 백엔드가 공유되므로 전환은 간단하지만 일부 브랜딩 및 기능 제공 여부에 차이가 있을 수 있습니다. <a href=\'admin.biostarair.com\' target=\'_blank\'>admin.biostarair.com</a> 및 BioStar Air 앱을 사용하여 사이트 관리를 시작하세요. <a href=\'app.airfobspace.com\' target=\'_blank\'>app.airfobspace.com</a>의 기존 관리자 로그인 정보를 그대로 사용할 수 있습니다."},{"question":"BioStar Air의 이점은 무엇인가요?","answer":"BioStar Air는 미래 지향적인 브랜드입니다. 향후 개선 사항, 통합 향상, UI/UX 업데이트 그리고 Airfob Space로 다시 전환하지 않을 수 있는 새로운 기능을 지속적으로 개선시켜 나갈 것입니다."},{"question":"향후 기능은 Airfob Space와 호환되나요?","answer":"일부는 호환되지만 모두는 아닙니다. 새로운 기능은 앞으로 BioStar Air에만 독점적일 수 있습니다. 최상의 경험과 지원을 위해 새로운 배포는 BioStar Air를 사용해야 합니다."}]')
;// CONCATENATED MODULE: ./docs/platform/biostar_air/biostar-air-migration.mdx


const frontMatter = {
	id: 'biostar-air-migration',
	title: '마이그레이션',
	description: 'Airfob Space에서 BioStar Air로의 마이그레션하는 방법을 안내합니다. 플랫폼 기능 비교, 호환성을 알아보고, 마이그레이션 관련 질문에 대한 답변을 제공합니다.',
	keywords: [
		'migration',
		'Airfob Space',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "신규 고객 vs 기존 고객",
  "id": "신규-고객-vs-기존-고객",
  "level": 2
}, {
  "value": "플랫폼 비교",
  "id": "플랫폼-비교",
  "level": 2
}, {
  "value": "자주 묻는 질문",
  "id": "자주-묻는-질문",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {FaqsItems} = _components;
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air는 Airfob Space의 리브랜딩된 버전으로, 슈프리마의 통합 클라우드 출입 통제 전략을 반영하도록 설계되었습니다. 두 플랫폼은 동일한 백엔드 인프라와 핵심 기능을 공유합니다. 그러나 새로운 기능과 개선 사항은 앞으로 BioStar Air 브랜드로 출시할 예정입니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "신규-고객-vs-기존-고객",
      children: "신규 고객 vs 기존 고객"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "아래의 내용을 주의 깊게 읽어주세요"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "신규 고객"
          }), "은 지원되는 지역에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air"
          }), "를 사용하여 새로운 URL 및 앱으로 시작해야 합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "기존 고객"
          }), "은 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar Air"
          }), "를 계속 사용할 수 있습니다. 즉각적인 변경은 필요하지 않습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "백엔드 엔진은 두 플랫폼에서 동일"
          }), "하여 데이터 호환성과 서비스 연속성을 보장합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["향후 일부 기능은 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar Air"
        }), "에서만 사용할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "플랫폼-비교",
      children: "플랫폼 비교"
    }), "\n", (0,jsx_runtime.jsx)("div", {
      className: "cols3--20-40-40",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "카테고리"
            }), (0,jsx_runtime.jsxs)(_components.th, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar Air"
              }), "(Rebranded)"]
            }), (0,jsx_runtime.jsxs)(_components.th, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "BioStar Air"
              }), "(Retained for Korea)"]
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "서비스 명칭"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BioStar Air"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BioStar Air"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "웹 포털"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://admin.biostarair.com",
                children: "BioStar Air"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://app.airfobspace.com",
                children: "BioStar Air"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "관리자 앱"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BioStar Air"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BioStar Air"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "사용자 앱"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["슈프리마 패스", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.em, {
                children: "BioStar Air 인증만 지원 (Airfob 지원 예정)"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "BioStar Air"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "파트너 포털"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://partner.biostarair.com",
                children: "BioStar Air Partners"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://partner.airfobspace.com",
                children: "Airfob Partners"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "개발자 포털"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "https://developers.biostarair.com",
                children: "BioStar Air Developers"
              }), " ", (0,jsx_runtime.jsx)(_components.em, {
                children: "API base URLs will remain unchanged"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://developers.airfobspace.com",
                children: "Airfob Developers"
              })
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "자주-묻는-질문",
      children: "자주 묻는 질문"
    }), "\n", "\n", (0,jsx_runtime.jsx)(FaqsItems, {
      data: faqs_namespaceObject
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