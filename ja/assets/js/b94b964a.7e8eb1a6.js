"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["33507"], {
335: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_federated_sites_mdx_b94_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-federated-sites-mdx-b94.json
var site_docs_platform_biostar_air_federated_sites_mdx_b94_namespaceObject = JSON.parse('{"id":"platform/biostar_air/federated-sites","title":"페더레이션 사이트","description":"중앙 집중식 제어를 통해 다중 테넌트 빌딩과 다중 지점 조직을 위한 BioStar Air에서 페더레이션 사이트를 설정하고 관리하는 방법을 알아보세요.","source":"@site/docs/platform/biostar_air/federated-sites.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/federated-sites","permalink":"/docs/ja/platform/biostar_air/federated-sites","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/federated-sites.mdx","tags":[],"version":"current","frontMatter":{"id":"federated-sites","title":"페더레이션 사이트","description":"중앙 집중식 제어를 통해 다중 테넌트 빌딩과 다중 지점 조직을 위한 BioStar Air에서 페더레이션 사이트를 설정하고 관리하는 방법을 알아보세요.","keywords":["federated","sites","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"파트너 포털 사용하기","permalink":"/docs/ja/platform/biostar_air/biostar-air-partner-portal-detailed-use"},"next":{"title":"API 통합","permalink":"/docs/ja/platform/biostar_air/integration-quickstart"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/federated-sites.mdx


const frontMatter = {
	id: 'federated-sites',
	title: '페더레이션 사이트',
	description: '중앙 집중식 제어를 통해 다중 테넌트 빌딩과 다중 지점 조직을 위한 BioStar Air에서 페더레이션 사이트를 설정하고 관리하는 방법을 알아보세요.',
	keywords: [
		'federated',
		'sites',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "페더레이션 사이트란?",
  "id": "whatFederatedSites",
  "level": 2
}, {
  "value": "멀티 테넌트 빌딩",
  "id": "멀티-테넌트-빌딩",
  "level": 3
}, {
  "value": "멀티 브랜치 조직",
  "id": "멀티-브랜치-조직",
  "level": 3
}, {
  "value": "페더레이션 사이트 설정",
  "id": "setFederatedSites",
  "level": 2
}, {
  "value": "파트너 포털 접속",
  "id": "파트너-포털-접속",
  "level": 3
}, {
  "value": "기본 사이트 생성",
  "id": "기본-사이트-생성",
  "level": 3
}, {
  "value": "하위 사이트 추가",
  "id": "하위-사이트-추가",
  "level": 3
}, {
  "value": "중요 고려사항",
  "id": "important-considerations",
  "level": 2
}, {
  "value": "사용자 및 장치 관리",
  "id": "user-and-reader-management",
  "level": 3
}, {
  "value": "기본 사이트 사용",
  "id": "primary-site-usage",
  "level": 3
}, {
  "value": "청구",
  "id": "billing",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Step, Steps} = _components;
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Air는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "페더레이션 사이트"
      }), "를 생성하여 주 사이트에서 여러 하위 사이트를 원활하게 관리할 수 있는 기능을 제공합니다. 이 기능은 다중 테넌트 건물이나 여러 지점을 운영하는 조직에 적합하며, 분산형 출입 관리를 통해 중앙 집중식 제어 기능을 제공합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air의 페더레이션 사이트 기능을 활용함으로써 관리자는 복잡한 환경에 대한 출입을 효과적으로 관리하고 모든 이해 관계자에게 안전하고 확장 가능한, 간소화된 경험을 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "whatFederatedSites",
      children: "페더레이션 사이트란?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "페더레이션 사이트"
      }), "는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "기본 사이트"
      }), "가 하나 이상의 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "하위 사이트"
      }), "를 관리하는 계층적 구조를 지원합니다. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "페더레이션 관리자"
      }), "라고 하는 기본 사이트의 관리자는 BioStar Air 화면을 통해 하위 사이트에 직접 액세스하고 관리할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "페더레이션 사이트는 다음과 같은 상황에서 유용합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "멀티-테넌트-빌딩",
      children: "멀티 테넌트 빌딩"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "예를 들어, 각 층에 서로 다른 회사가 입주해 있는 상업용 건물에서는 아래와 같은 구성을 할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["건물에 대한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "마스터 계정"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["각 임차인 회사에 대한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "하위 계정"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이 구성을 통해 특정 층에 대한 접근을 허가받은 직원만 가능하게 하여 건물 관리자의 관리를 단순화할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "멀티-브랜치-조직",
      children: "멀티 브랜치 조직"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "여러 위치에 사무실이 있는 회사는 아래와 같이 구성할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "마스터 계정"
          }), "을 통해 전역(Global) 설정 관리"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["각 지점에 대한 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "하위 계정"
          }), " 생성"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "예를 들어, 전 세계에 10개의 사무실이 있는 기업은 연합 구조를 사용하여 관리를 간소화할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setFederatedSites",
      children: "페더레이션 사이트 설정"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "파트너-포털-접속",
          children: "파트너 포털 접속"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["접속 URL: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://partner.biostarair.com",
            children: "https://partner.biostarair.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "BioStar Air 파트너 포털은 오직 파트너와 설치 업체만 사용할 수 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "최종 고객이 이 기능을 구성하려면 설치 업체에 문의하세요."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "기본-사이트-생성",
          children: "기본 사이트 생성"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.a, {
                href: "https://partner.biostarair.com",
                children: "파트너 포털"
              }), "에 로그인하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "사이트 생성"
              }), "을 클릭하고 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "사이트 프로필"
              }), "에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "페더레이션 사이트"
              }), "를 선택하세요."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["이 단계는 사이트를 처음 설정할 때 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "반드시"
                  }), " 수행해야 합니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "일반 사이트는 나중에 페더레이션 사이트로 변경할 수 없습니다."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "동일한 화면에서 페더레이션 사이트 관리자를 추가하세요."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["파트너 포털에서 추가한 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "페더레이션 사이트 관리자"
                  }), "는 기본 사이트와 모든 하위 사이트에 진입할 수 있습니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["BioStar Air에서 추가한 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "일반 관리자"
                  }), "는 개별 사이트만 관리할 수 있습니다."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "하위-사이트-추가",
          children: "하위 사이트 추가"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["기본 사이트가 페더레이션 사이트로 설정되면 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "사이트 목록"
              }), "에 하위 사이트를 생성할 수 있는 옵션이 표시됩니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "서브사이트 생성"
              }), "을 클릭하고 다른 사이트와 마찬가지로 구성하세요."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-considerations",
      children: "중요 고려사항"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-and-reader-management",
      children: "사용자 및 장치 관리"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "사용자 및 장치는 각 하위 사이트에 별도로 추가해야 합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치는 한 번에 하나의 사이트에만 등록할 수 있습니다. 기본 사이트 또는 하위 사이트 중 하나를 선택하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primary-site-usage",
      children: "기본 사이트 사용"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "일부 고객은 기본 사이트를 하위 사이트 관리를 위한 액세스 포인트로만 사용하며, 기본 사이트에 사용자나 장치를 등록하지 않습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "예시 1"
          }), ": 세 개의 지사 사무실이 있는 회사는 장치가 없는 기본 사이트를 설정하고 각 지사에 대한 하위 사이트를 생성합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "예시 2"
          }), ": 본사와 세 개의 지사가 있는 회사는 본사(기본 사이트)에서 사용자와 장치를 등록하고 지사에 대한 하위 사이트를 설정합니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "billing",
      children: "청구"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "청구는 사이트당 등록된 장치(리더기)의 수를 기준으로 계산됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "등록된 장치가 없는 기본 사이트를 생성하는 데 추가 비용은 없습니다."
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