"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["7407"], {
17606: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_facestation_f_2_release_notes_index_mdx_978_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-facestation-f-2-release-notes-index-mdx-978.json
var site_docs_device_facestation_f_2_release_notes_index_mdx_978_namespaceObject = JSON.parse('{"id":"device/facestation_f2/release-notes/index","title":"FaceStation F2 릴리스 노트","description":"이 문서는 FaceStation F2 펌웨어의 각 버전에 적용된 기능 개선, 버그 수정, 주요 변경 사항을 요약하여 제공합니다.","source":"@site/docs/device/facestation_f2/release-notes/index.mdx","sourceDirName":"device/facestation_f2/release-notes","slug":"/device/facestation_f2/release-notes/","permalink":"/docs/device/facestation_f2/release-notes/","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_f2/release-notes/index.mdx","tags":[],"version":"current","frontMatter":{"title":"FaceStation F2 릴리스 노트","description":"이 문서는 FaceStation F2 펌웨어의 각 버전에 적용된 기능 개선, 버그 수정, 주요 변경 사항을 요약하여 제공합니다.","isTranslationMissing":false},"sidebar":"facestationf2","previous":{"title":"부록","permalink":"/docs/device/facestation_f2/appendices"},"next":{"title":"펌웨어 버전 2.2.1","permalink":"/docs/device/facestation_f2/release-notes/221"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/facestation_f2/release-notes/index.mdx


const frontMatter = {
	title: 'FaceStation F2 릴리스 노트',
	description: '이 문서는 FaceStation F2 펌웨어의 각 버전에 적용된 기능 개선, 버그 수정, 주요 변경 사항을 요약하여 제공합니다.',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {DocCardList} = _components;
  if (!DocCardList) _missingMdxReference("DocCardList", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "펌웨어를 v2.x.x로 업그레이드한 뒤 하위 버전(v1.x.x) 펌웨어로 다운그레이드 할 수 없습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "펌웨어를 v1.x.x에서 v2.x.x로 업그레이드할 경우 BioStar 2 또는 BioStar Device SDK를 이용할 것을 권장합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["부득이 USB 메모리를 이용하여 펌웨어를 업그레이드할 경우 먼저 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "화면과 소리"
            }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "메뉴 표시 시간"
            }), "을 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "항상 켜짐"
            }), "으로 설정한 뒤 업그레이드를 진행하세요. 또한 업그레이드 진행 중 실패 메시지가 출력되더라도 USB 메모리를 제거하지 말고 성공 메시지가 출력될 때까지 대기하세요. 업그레이드가 완료되면 장치가 자동으로 다시 시작됩니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(DocCardList, {})]
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