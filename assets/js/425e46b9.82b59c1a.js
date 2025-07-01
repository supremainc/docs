"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3097"], {
9033: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_manage_server_mdx_425_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-manage-server-mdx-425.json
var site_docs_platform_biostar_x_manage_server_mdx_425_namespaceObject = JSON.parse('{"id":"platform/biostar_x/manage-server","title":"서버 관리하기","description":"BioStar X Service Manager를 사용하여 BioStar X 서버의 서비스를 시작하고 종료하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/manage-server.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/manage-server","permalink":"/docs/platform/biostar_x/manage-server","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/manage-server.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-server","title":"서버 관리하기","description":"BioStar X Service Manager를 사용하여 BioStar X 서버의 서비스를 시작하고 종료하는 방법을 안내합니다.","keywords":["BioStar X Setting","서버 관리"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"라이선스 키 등록하기","permalink":"/docs/platform/biostar_x/tutorial-register-license-key"},"next":{"title":"포트 변경하기","permalink":"/docs/platform/biostar_x/change-port"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/manage-server.mdx


const frontMatter = {
	id: 'manage-server',
	title: '서버 관리하기',
	description: 'BioStar X Service Manager를 사용하여 BioStar X 서버의 서비스를 시작하고 종료하는 방법을 안내합니다.',
	keywords: [
		'BioStar X Setting',
		'서버 관리'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*모든 서비스를 종료하려면 화면 오른쪽 상단의 <Cmd>Stop All</Cmd> 버튼을 클릭하세요.*/
/*모든 서비스를 시작하려면 화면 오른쪽 상단의 <Cmd>Start All</Cmd> 버튼을 클릭하세요.*/


const toc = [{
  "value": "BioStar X Service Manager",
  "id": "biostar-x-setting",
  "level": 2
}, {
  "value": "서비스 종료하기",
  "id": "end-service",
  "level": 3
}, {
  "value": "서버 시작하기",
  "id": "start-the-server",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmd, Image, Start} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Start) _missingMdxReference("Start", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X Service Manager"
      }), "를 사용하여 BioStar X 서버의 서비스를 관리하는 방법을 확인하세요. 개별 서비스를 시작하거나 종료할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "biostar-x-setting",
      children: "BioStar X Service Manager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 서버의 상태를 관리할 수 있는 도구를 제공합니다. Windows에서 ", (0,jsx_runtime.jsx)(Start, {}), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X Service Manager"
      }), "를 클릭하세요. ", (0,jsx_runtime.jsx)(Cmd, {
        children: "BioStar X Service Manager"
      }), " 창이 나타납니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-tutoria-service-manager-main.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " 서버의 시간 설정을 변경했다면 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X Core Service"
        }), "를 종료하고 다시 시작하세요. 다시 시작하지 않으면 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), "가 동작하지 않을 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "end-service",
      children: "서비스 종료하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 종료하려면, ", (0,jsx_runtime.jsx)(Cmd, {
        children: "SERVICES"
      }), " 메뉴에서 개별 서비스의 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Stop"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-tutoria-service-manager-main.png",
      alone: true
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "start-the-server",
      children: "서버 시작하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 다시 시작하려면, ", (0,jsx_runtime.jsx)(Cmd, {
        children: "SERVICES"
      }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Status"
      }), " 열에서 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Stopped"
      }), " 상태인 서비스의 ", (0,jsx_runtime.jsx)(Cmd, {
        children: "Start"
      }), " 버튼을 클릭하세요."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/common/biostarx-tutoria-service-manager-main-restart.png",
      alone: true
    }), "\n"]
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