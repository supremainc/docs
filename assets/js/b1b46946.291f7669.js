"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["20924"], {
286: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_device_corestation_setup_manager_monitoring_mdx_b1b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-device-corestation-setup-manager-monitoring-mdx-b1b.json
var site_docs_device_corestation_setup_manager_monitoring_mdx_b1b_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/monitoring","title":"모니터링","description":"입력·출력·Wiegand 포트의 실시간 상태 확인 및 제어 방법을 안내합니다.","source":"@site/docs/device/corestation_setup_manager/monitoring.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/monitoring","permalink":"/docs/device/corestation_setup_manager/monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/monitoring.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring","title":"모니터링","description":"입력·출력·Wiegand 포트의 실시간 상태 확인 및 제어 방법을 안내합니다.","keywords":["입력 포트","출력 포트","Wiegand 포트"],"isTranslationMissing":false},"sidebar":"corestation_setup_manager","previous":{"title":"장치 구성","permalink":"/docs/device/corestation_setup_manager/configuration"},"next":{"title":"설정","permalink":"/docs/device/corestation_setup_manager/settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/device/corestation_setup_manager/monitoring.mdx


const frontMatter = {
	id: 'monitoring',
	title: '모니터링',
	description: '입력·출력·Wiegand 포트의 실시간 상태 확인 및 제어 방법을 안내합니다.',
	keywords: [
		'입력 포트',
		'출력 포트',
		'Wiegand 포트'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "입력 포트 상태",
  "id": "입력-포트-상태",
  "level": 2
}, {
  "value": "출력 포트 상태",
  "id": "출력-포트-상태",
  "level": 2
}, {
  "value": "Wiegand 포트 상태",
  "id": "wiegand-포트-상태",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "배선을 완료한 뒤 CoreStation의 입력 및 출력 상태를 실시간으로 확인할 수 있습니다. 또한, 연결된 Wiegand 리더에서 스캔한 카드 ID를 확인할 수도 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "CoreStation 모델에 따라 연결할 수 있는 포트 개수가 다를 수 있습니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "입력-포트-상태",
      children: "입력 포트 상태"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "입력, Aux 입력 포트의 연결 상태가 표시됩니다. 배선을 완료한 뒤 현장에서 바로 입력 포트의 연결 상태를 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/monitoring-input.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "출력-포트-상태",
      children: "출력 포트 상태"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "릴레이, 출력 포트의 연결 상태가 표시됩니다. 원하는 항목을 선택하고 스위치를 클릭하여 릴레이 및 출력 포트를 제어할 수도 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/monitoring-output.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wiegand-포트-상태",
      children: "Wiegand 포트 상태"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wiegand 포트에 연결된 Wiegand 리더에 카드를 스캔하면 해당 카드 ID가 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status"
      }), " 열에 표시됩니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/monitoring-wiegand.png",
      alone: true
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