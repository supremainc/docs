"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["44518"], {
81944: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_x_change_ip_address_mdx_bf9_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-x-change-ip-address-mdx-bf9.json
var site_docs_platform_biostar_x_change_ip_address_mdx_bf9_namespaceObject = JSON.parse('{"id":"platform/biostar_x/change-ip-address","title":"IP 주소 변경하기","description":"BioStar X를 설치하고 IP 주소를 변경하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_x/change-ip-address.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/change-ip-address","permalink":"/docs/en/platform/biostar_x/change-ip-address","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/change-ip-address.mdx","tags":[],"version":"current","frontMatter":{"id":"change-ip-address","title":"IP 주소 변경하기","description":"BioStar X를 설치하고 IP 주소를 변경하는 방법을 안내합니다.","keywords":["IP 주소 변경","BioStar X"],"isTranslationMissing":true},"sidebar":"biostarx","previous":{"title":"Add Auxiliary Database","permalink":"/docs/en/platform/biostar_x/add-sub-db"},"next":{"title":"Launcher","permalink":"/docs/en/platform/biostar_x/ui-launcher"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_x/change-ip-address.mdx


const frontMatter = {
	id: 'change-ip-address',
	title: 'IP 주소 변경하기',
	description: 'BioStar X를 설치하고 IP 주소를 변경하는 방법을 안내합니다.',
	keywords: [
		'IP 주소 변경',
		'BioStar X'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "IP 주소 변경",
  "id": "change_ip_address",
  "level": 2
}, {
  "value": "커뮤니케이션 서버에서 IP 주소 변경",
  "id": "change_ip_address_extension",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 설치하고 IP 주소를 변경하는 방법을 안내합니다. 이 문서는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 설치한 서버의 IP 주소를 변경할 때 필요합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["문서의 안내에 따라 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " 서버에 설정된 IP 주소를 변경하기 전에, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BioStar X"
        }), " 서버의 IP 주소를 먼저 변경하세요. 서버의 IP 주소를 변경하지 않고 안내하는 절차를 진행하면 시스템에 문제가 발생할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "change_ip_address",
      children: "IP 주소 변경"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["터미널 환경에서 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "를 설치한 경로로 이동해 아래 명령어를 실행하세요. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{change_to_IP_address}"
      }), " 부분에 변경할 IP 주소를 입력하세요. 주요 설정 파일의 IP 주소를 변경하고 인증서를 재발급합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd C:\\Program Files\\BioStar X\n\nbiostar-server.exe change_serverIP {change_to_IP_address}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title=\"Example\"",
        children: "biostar-server.exe change_serverIP 192.168.0.xxx\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "change_ip_address_extension",
      children: "커뮤니케이션 서버에서 IP 주소 변경"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["커뮤니케이션 서버를 설치한 경우, 커뮤니케이션 서버와 연결된 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " 서버의 IP 주소도 변경해야 합니다. 커뮤니케이션 서버에서 아래 명령어를 실행하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd C:\\Program Files\\BioStar X Communication Server\\third\\cert\n\nloadLeaderCert.bat\n"
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