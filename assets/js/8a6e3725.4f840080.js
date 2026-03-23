"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["90993"], {
32879: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_maintenance_mdx_8a6_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-maintenance-mdx-8a6.json
var site_docs_device_vionyx_maintenance_mdx_8a6_namespaceObject = JSON.parse('{"id":"device/vionyx/maintenance","title":"유지보수 및 관리","description":"카메라를 공장 초기화하고 방습제 모듈을 교체하는 방법을 안내합니다.","source":"@site/docs/device/vionyx/maintenance.mdx","sourceDirName":"device/vionyx","slug":"/device/vionyx/maintenance","permalink":"/docs/device/vionyx/maintenance","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx/maintenance.mdx","tags":[],"version":"current","frontMatter":{"id":"maintenance","title":"유지보수 및 관리","description":"카메라를 공장 초기화하고 방습제 모듈을 교체하는 방법을 안내합니다.","keywords":["keyword1","keyword2","keyword3"],"isTranslationMissing":false},"sidebar":"vionyx","previous":{"title":"웹 서버 접속 및 설정","permalink":"/docs/device/vionyx/web-server-settings"},"next":{"title":"문제 해결","permalink":"/docs/device/vionyx/troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx/maintenance.mdx


const frontMatter = {
	id: 'maintenance',
	title: '유지보수 및 관리',
	description: '카메라를 공장 초기화하고 방습제 모듈을 교체하는 방법을 안내합니다.',
	keywords: [
		'keyword1',
		'keyword2',
		'keyword3'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "공장 초기화",
  "id": "factory-reset",
  "level": 2
}, {
  "value": "방습제 모듈 교체하기",
  "id": "방습제-모듈-교체하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "카메라를 공장 초기화하고 방습제 모듈을 교체하는 방법을 안내합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "factory-reset",
      children: "공장 초기화"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "카메라에 저장된 모든 정보를 삭제하고 설정을 초기화합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카메라에 전원을 연결한 후, 초기화 버튼 위치를 확인하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/factory-reset-vionyx.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "초기화 버튼을 5초 이상 눌렀다 떼세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "공장 초기화가 진행된 후 카메라가 자동으로 다시 시작됩니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "공장 초기화를 진행하면 네트워크 설정을 포함한 모든 사용자 데이터와 설정값이 삭제됩니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "공장 초기화를 진행하더라도 IP 주소는 그대로 유지됩니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "방습제-모듈-교체하기",
      children: "방습제 모듈 교체하기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "렌즈 결로를 방지하기 위해 내부에 방습제 모듈이 장착되어 있습니다. 제습 성능을 유지하려면 최소 1년 주기로 방습제 모듈을 교체하는 것을 권장합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "방습제 모듈의 장착 위치를 확인하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "나사를 반시계 방향으로 풀어 방습제 모듈을 커버에서 분리하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/change-silicagel-vionyx.png",
          className: "none",
          width: 600,
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "새 방습제 모듈을 커버에 대고 나사를 시계 방향으로 돌려 고정하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "설치 환경에 따라 교체 주기가 달라질 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "교체 일자를 기록하여 다음 교체 시기를 관리하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "교체용 방습제 모듈은 제품 구입처를 통해 구매할 수 있습니다."
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