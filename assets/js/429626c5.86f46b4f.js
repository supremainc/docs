"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["90869"], {
23595: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_corestation_setup_manager_getting_started_mdx_429_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-corestation-setup-manager-getting-started-mdx-429.json
var site_docs_device_corestation_setup_manager_getting_started_mdx_429_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/getting-started","title":"시작하기","description":"CoreStation Setup Manager 사용을 위한 최소 요구 사항을 안내합니다.","source":"@site/docs/device/corestation_setup_manager/getting-started.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/getting-started","permalink":"/device/corestation_setup_manager/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"시작하기","description":"CoreStation Setup Manager 사용을 위한 최소 요구 사항을 안내합니다.","keywords":["소개","최소 요구 사항"],"isTranslationMissing":false},"sidebar":"corestation_setup_manager","previous":{"title":"CoreStation Setup Manager","permalink":"/device/corestation_setup_manager/"},"next":{"title":"장치 초기 설정하기","permalink":"/device/corestation_setup_manager/initial-setup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/corestation_setup_manager/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: '시작하기',
	description: 'CoreStation Setup Manager 사용을 위한 최소 요구 사항을 안내합니다.',
	keywords: [
		'소개',
		'최소 요구 사항'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "최소 요구 사항",
  "id": "최소-요구-사항",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation Setup Manager는 CoreStation의 네트워크 설정을 관리하거나 슬레이브 장치, 입력 및 출력 포트, Wiegand 포트의 연결 상태를 확인할 수 있는 웹 서버입니다. CoreStation Setup Manager를 사용하면 CoreStation을 이용한 출입통제 시스템을 구성할 때 BioStar X 서버의 위치로 이동하지 않고 현장에서 네트워크 및 배선의 상태를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation Setup Manager에서 다음과 같은 기능을 사용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "IP 주소 설정"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CoreStation 장치 정보 확인"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "관리자 설정"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "슬레이브 장치 연결 상태 확인"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "입력 및 출력, Wiegand 포트 상태 모니터링"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "장치 초기화, 네트워크 설정을 제외한 설정 초기화"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "공장 초기화"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "최소-요구-사항",
      children: "최소 요구 사항"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "호환되는 장치와 펌웨어 버전을 확인하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CoreStation 펌웨어 버전 1.3.1 이상"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CoreStation 20 펌웨어 버전 1.0.0 이상"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CoreStation Setup Manager는 CoreStation 펌웨어 버전 1.3.1 이상, CoreStation 20 펌웨어 버전 1.0.0 이상에서 지원됩니다. 낮은 버전의 펌웨어를 사용할 경우 BioStar X에 접속하여 펌웨어를 최신 버전으로 업그레이드하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "각 장치를 연결하고 설치하는 방법에 대한 자세한 내용은 해당 제품의 가이드를 참고하세요."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/device/corestation_40/",
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "CoreStation"
                  })
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/device/corestation_20/",
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "CoreStation 20"
                  })
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["CoreStation 및 CoreStation Setup Manager에 대한 더 자세한 내용은 슈프리마 기술 지원팀(", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:CS@suprema.co.kr",
              children: "CS@suprema.co.kr"
            }), ")에 문의하세요."]
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