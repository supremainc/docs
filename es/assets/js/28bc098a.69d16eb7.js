"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["32245"], {
76976: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_monitoring_alert_report_history_mdx_28b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-monitoring-alert-report-history-mdx-28b.json
var site_docs_platform_biostar_air_monitoring_alert_report_history_mdx_28b_namespaceObject = JSON.parse('{"id":"platform/biostar_air/monitoring-alert-report-history","title":"알림 & 리포트 이력 확인하기","description":"BioStar Air에서 생성된 알림 및 리포트의 이력을 확인하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/monitoring-alert-report-history.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/monitoring-alert-report-history","permalink":"/docs/es/platform/biostar_air/monitoring-alert-report-history","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/monitoring-alert-report-history.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-alert-report-history","title":"알림 & 리포트 이력 확인하기","description":"BioStar Air에서 생성된 알림 및 리포트의 이력을 확인하는 방법을 안내합니다.","keywords":["모니터링","알림 이력","리포트 이력","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"이벤트 및 변경 로그 사용하기","permalink":"/docs/es/platform/biostar_air/monitoring-event-and-audit-logs"},"next":{"title":"출입문 상태 모니터링하기","permalink":"/docs/es/platform/biostar_air/monitoring-door-status"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/monitoring-alert-report-history.mdx


const frontMatter = {
	id: 'monitoring-alert-report-history',
	title: '알림 & 리포트 이력 확인하기',
	description: 'BioStar Air에서 생성된 알림 및 리포트의 이력을 확인하는 방법을 안내합니다.',
	keywords: [
		'모니터링',
		'알림 이력',
		'리포트 이력',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "시작하기 전에",
  "id": "시작하기-전에",
  "level": 2
}, {
  "value": "알림 및 리포트 이력 확인",
  "id": "알림-및-리포트-이력-확인",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air에서 생성된 알림 및 리포트의 이력을 확인하는 방법을 안내합니다. 관리자는 웹 포털과 모바일 앱을 통해 이전에 발생한 알림과 생성된 리포트 내역을 조회할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "시작하기-전에",
      children: "시작하기 전에"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["알림 및 리포트 이력은 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alert_sub_menu_title",
        product: "air"
      }), "에서 설정한 알림 및 리포트 생성 규칙에 의해 생성된 내역만 확인할 수 있습니다. 알림 및 리포트 생성 규칙 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#",
        children: "다음 문서"
      }), "를 참고하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "알림-및-리포트-이력-확인",
      children: "알림 및 리포트 이력 확인"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["화면 왼쪽 사이드바에서 ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "monitoring_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "alerts.alert_sub_menu_title",
        product: "air"
      }), "를 클릭하세요. 알림 및 리포트 이력을 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-monitoring-alert-report-history.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "알림이나 리포트를 생성한 시간 및 종류, 세부 내용을 목록에서 확인할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "화면 오른쪽 상단의 날짜 조회 영역을 클릭해 원하는 기간을 설정하고, 해당 기간 내의 알림 및 리포트 이력을 필터링할 수 있습니다."
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