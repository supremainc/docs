"use strict";
(self['webpackChunksuprema_docs'] = self['webpackChunksuprema_docs'] || []).push([["5685"], {
"7210": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_device_biostation_3_event_log_mdx_7c6_namespaceObject),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-biostation-3-event-log-mdx-7c6.json
var site_docs_device_biostation_3_event_log_mdx_7c6_namespaceObject = JSON.parse('{"id":"device/biostation_3/event-log","title":"이벤트 로그","description":"Description","source":"@site/docs/device/biostation_3/event-log.mdx","sourceDirName":"device/biostation_3","slug":"/device/biostation_3/event-log","permalink":"/docs/device/biostation_3/event-log","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3/event-log.mdx","tags":[],"version":"current","frontMatter":{"id":"event-log","title":"이벤트 로그","description":"Description","keywords":["keyword1","keyword2"],"isTranslationMissing":false},"sidebar":"bioStation3","previous":{"title":"설정","permalink":"/docs/device/biostation_3/settings"},"next":{"title":"문제 해결","permalink":"/docs/device/biostation_3/troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("5893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("65");
;// CONCATENATED MODULE: ./docs/device/biostation_3/event-log.mdx


const frontMatter = {
	id: 'event-log',
	title: '이벤트 로그',
	description: 'Description',
	keywords: [
		'keyword1',
		'keyword2'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "이벤트 로그 검색",
  "id": "이벤트-로그-검색",
  "level": 2
}, {
  "value": "전체 로그 삭제",
  "id": "전체-로그-삭제",
  "level": 2
}, {
  "value": "로그 사용량 보기",
  "id": "로그-사용량-보기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "이벤트-로그-검색",
      children: "이벤트 로그 검색"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "조건을 설정하여 로그를 검색할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-menu.svg",
            ico: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "대시보드"
          }), "에서 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-eventlog.png",
            ico: true
          }), "를 선택하세요. 전체 이벤트 로그 목록이 표시됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["특정 이벤트를 검색하려면 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-search.svg",
            ico: true
          }), "을 누른 뒤 원하는 항목을 변경하세요."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-eventlog.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["검색 조건을 설정하고 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "OK"
          }), "를 누르면 조건에 맞는 로그가 화면에 나타납니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "전체-로그-삭제",
      children: "전체 로그 삭제"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "저장된 로그를 모두 삭제할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-menu.svg",
            ico: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            children: "대시보드"
          }), "에서 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-eventlog.png",
            ico: true
          }), "를 선택하세요. 전체 이벤트 로그 목록이 표시됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["전체 로그를 삭제하려면 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-delete.svg",
            ico: true
          }), "을 선택한 뒤 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "확인"
          }), "을 누르세요. 이전 화면으로 돌아가려면 ", (0,jsx_runtime.jsx)(Cmd, {
            children: "취소"
          }), "를 누르세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "로그-사용량-보기",
      children: "로그 사용량 보기"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "로그 사용 현황을 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-menu.svg",
            ico: true
          }), "을 누른 뒤 관리자 권한 인증 수단으로 인증하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["대시보드에서 ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-eventlog.png",
            ico: true
          }), " → ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/device/ico-info.svg",
            ico: true
          }), "을 누르세요. 장치의 이벤트 로그 및 이미지 로그 사용량을 확인할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-eventlog1.png"
        }), "\n"]
      }), "\n"]
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