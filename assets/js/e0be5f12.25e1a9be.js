"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["31124"], {
58350: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_overview_compatibility_mdx_e0b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-overview-compatibility-mdx-e0b.json
var site_docs_platform_biostar_air_overview_compatibility_mdx_e0b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/access-control-hardware-compatibility","title":"출입 통제 장치 호환성","description":"BioStar Air는 슈프리마 및 모카(MOCA) 시스템의 장치와 원활하게 통합되어 클라우드 기반 출입 관리가 가능합니다.","source":"@site/docs/platform/biostar_air/overview-compatibility.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/access-control-hardware-compatibility","permalink":"/platform/biostar_air/access-control-hardware-compatibility","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/overview-compatibility.mdx","tags":[],"version":"current","frontMatter":{"id":"access-control-hardware-compatibility","title":"출입 통제 장치 호환성","description":"BioStar Air는 슈프리마 및 모카(MOCA) 시스템의 장치와 원활하게 통합되어 클라우드 기반 출입 관리가 가능합니다.","keywords":["BioStar Air","출입 통제","장치 호환성"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"BioStar Air란?","permalink":"/platform/biostar_air/what-is-biostar-air"},"next":{"title":"보안 개요","permalink":"/platform/biostar_air/security-overview"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/overview-compatibility.mdx


const frontMatter = {
	id: 'access-control-hardware-compatibility',
	title: '출입 통제 장치 호환성',
	description: 'BioStar Air는 슈프리마 및 모카(MOCA) 시스템의 장치와 원활하게 통합되어 클라우드 기반 출입 관리가 가능합니다.',
	keywords: [
		'BioStar Air',
		'출입 통제',
		'장치 호환성'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "개요",
  "id": "개요",
  "level": 2
}, {
  "value": "호환 장치",
  "id": "호환-장치",
  "level": 2
}, {
  "value": "리더 장치",
  "id": "리더-장치",
  "level": 3
}, {
  "value": "패치(Patch) 장치",
  "id": "패치patch-장치",
  "level": 3
}, {
  "value": "기타 호환 장치",
  "id": "기타-호환-장치",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "개요",
      children: "개요"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BioStar Air(이전 명칭: Airfob Space)는 리더기를 클라우드에 직접 연결하는 엣지 아키텍처를 활용하기 때문에, On-premise 서버, 가상 머신(VM), VPN 또는 출입문 컨트롤러가 필요하지 않습니다. 또한, IT 유지 관리가 필요 없기 때문에 사용자는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "스마트 리더"
      }), "(Smart Reader)를 설치하고 클라우드에 연결하는 것만으로도 출입 관리를 시작할 수 있습니다. 리더기는 동일한 네트워크나 물리적 위치 없이 여러 사이트에서 작동합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "호환-장치",
      children: "호환 장치"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air는 다양한 출입 통제 장치와 호환되며, 슈프리마 및 모카(MOCA) 시스템의 장치와 원활하게 통합되어 클라우드 기반 출입 관리가 가능합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "리더-장치",
      children: "리더 장치"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "XPass 2"
          }), " (MDPB, GDPB, GKDPB)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Edge Reader"
          }), " (AE-MC)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Edge Reader Ultimate"
          }), " (AE-MU)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "X-Station 2"
          }), " (DPB)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioEntry W3"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStation 3"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BioLite N2"
          }), " (예정)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "패치patch-장치",
      children: "패치(Patch) 장치"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Patch"
          }), " (AP-H)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Airfob Tag"
          }), " (AP-B)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "기타-호환-장치",
      children: "기타 호환 장치"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "OM-120"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "SIO2"
          })
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