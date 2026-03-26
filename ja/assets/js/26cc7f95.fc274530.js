"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["20021"], {
5258: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_vionyx_webserver_search_view_users_mdx_26c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-vionyx-webserver-search-view-users-mdx-26c.json
var site_docs_device_vionyx_webserver_search_view_users_mdx_26c_namespaceObject = JSON.parse('{"id":"device/vionyx_webserver/search-view-users","title":"사용자 목록에서 검색 및 보기","description":"사용자 목록에서 검색을 통해 원하는 사용자를 찾고 효율적으로 관리하는 방법을 안내합니다.","source":"@site/docs/device/vionyx_webserver/search-view-users.mdx","sourceDirName":"device/vionyx_webserver","slug":"/device/vionyx_webserver/search-view-users","permalink":"/docs/ja/device/vionyx_webserver/search-view-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx_webserver/search-view-users.mdx","tags":[],"version":"current","frontMatter":{"id":"search-view-users","title":"사용자 목록에서 검색 및 보기","description":"사용자 목록에서 검색을 통해 원하는 사용자를 찾고 효율적으로 관리하는 방법을 안내합니다.","keywords":["사용자","검색","필터","정렬","뷰","관리"],"isTranslationMissing":true},"sidebar":"aicamwebserver","previous":{"title":"사용자 수정 및 삭제하기","permalink":"/docs/ja/device/vionyx_webserver/modify-delete-users"},"next":{"title":"시스템 관리하기","permalink":"/docs/ja/device/vionyx_webserver/system-management"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/vionyx_webserver/search-view-users.mdx


const frontMatter = {
	id: 'search-view-users',
	title: '사용자 목록에서 검색 및 보기',
	description: '사용자 목록에서 검색을 통해 원하는 사용자를 찾고 효율적으로 관리하는 방법을 안내합니다.',
	keywords: [
		'사용자',
		'검색',
		'필터',
		'정렬',
		'뷰',
		'관리'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "사용자 검색",
  "id": "사용자-검색",
  "level": 2
}, {
  "value": "뷰 모드 변경",
  "id": "뷰-모드-변경",
  "level": 2
}, {
  "value": "테이블 뷰",
  "id": "테이블-뷰",
  "level": 3
}, {
  "value": "카드 뷰",
  "id": "카드-뷰",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록에서 이름이나 아이디를 입력하여 원하는 사용자를 신속하게 찾을 수 있습니다. 필요에 따라 테이블 또는 카드 형태로 사용자 정보를 표시할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "아래와 같은 상황에서 사용자 검색 및 관리 기능을 사용하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "많은 사용자 중에서 특정 사용자를 빠르게 찾아야 할 때"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "카드 형태로 사용자 프로필을 한눈에 확인하고 싶을 때"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "검색과 필터를 함께 사용하면 대규모 사용자 목록을 더 효율적으로 관리할 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "사용자-검색",
      children: "사용자 검색"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["화면 왼쪽 상단의 ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "people",
            product: "cam"
          }), " 메뉴를 클릭하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "화면 오른쪽 상단의 검색 입력란에 사용자 이름 또는 사용자 ID의 일부를 입력하세요."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/cam-server/cam-webserver-people-list-search.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "입력한 검색어와 일치하는 사용자가 목록에 표시됩니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "부분 검색을 지원합니다. 예를 들어, 'Kim'이라고 입력하면 이름에 'Kim'을 포함한 모든 사용자가 표시됩니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "검색 결과는 현재 선택된 필터 기준에 따라 표시됩니다. 필터를 변경하면 검색 결과도 함께 업데이트됩니다."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "뷰-모드-변경",
      children: "뷰 모드 변경"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "사용자 목록을 테이블 형태 또는 카드 형태로 표시할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "테이블-뷰",
      children: "테이블 뷰"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자 목록을 테이블 형태로 표시하려면 목록 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Image, {
        src: "/img/cam-server/ico-people-list-mode.svg",
        alone: true,
        ico: true
      }), " 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/cam-webserver-people-list-mode.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "카드-뷰",
      children: "카드 뷰"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자 목록을 카드 형태로 표시하려면 목록 오른쪽 상단의 ", (0,jsx_runtime.jsx)(Image, {
        src: "/img/cam-server/ico-people-card-mode.svg",
        alone: true,
        ico: true
      }), " 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/cam-server/cam-webserver-people-card-mode.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "리스트 뷰와 카드 뷰는 모두 동일한 기능을 제공합니다. 표시 방식만 다르며, 검색 및 필터, 정렬 결과는 동일합니다."
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