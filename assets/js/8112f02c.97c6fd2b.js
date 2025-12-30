"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["9109"], {
20993: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (MDXContent),
  RM: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84429);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "2025년 5월 이전에 BioStar Air 출입 통제 서비스를 사용하기 시작한 고객은 현재 Suprema Pass 앱으로 새로 설계된 Airfob Space 앱을 계속 사용할 수 있습니다. 두 앱 모두 동일한 기능을 제공하며 완벽하게 호환됩니다. 기존 사용자는 전환할 필요가 없으며, 모바일 인증 정보가 두 앱 모두에서 원활하게 작동합니다."
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
88526: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_35_suprema_pass_app_location_issues_mdx_811_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-35-suprema-pass-app-location-issues-mdx-811.json
var site_docs_platform_biostar_air_35_suprema_pass_app_location_issues_mdx_811_namespaceObject = JSON.parse('{"id":"platform/biostar_air/location-services-issues","title":"위치 서비스를 활성화해야 하나요?","description":"슈프리마 패스 앱에서 안전한 블루투스 통신 및 모바일 출입 카드 기능을 위해 위치 서비스를 활성화하는 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/35-suprema-pass-app-location-issues.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/location-services-issues","permalink":"/docs/platform/biostar_air/location-services-issues","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/35-suprema-pass-app-location-issues.mdx","tags":[],"version":"current","sidebarPosition":35,"frontMatter":{"id":"location-services-issues","title":"위치 서비스를 활성화해야 하나요?","description":"슈프리마 패스 앱에서 안전한 블루투스 통신 및 모바일 출입 카드 기능을 위해 위치 서비스를 활성화하는 방법을 안내합니다.","keywords":["위치 서비스","슈프리마 패스","Bluetooth"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"일괄 사용자 추가 문제","permalink":"/docs/platform/biostar_air/troubleshooting-adding-users-in-bulk"},"next":{"title":"v2.11","permalink":"/docs/platform/biostar_air/release-notes/v2_11"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(20993);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/location-issues.json
var location_issues_namespaceObject = JSON.parse('[{"question":"위치 서비스를 활성화해야 하나요?","answer":"슈프리마 패스 앱은 블루투스를 사용하여 출입 통제 장치와 통신합니다. 안드로이드 기기에서는 운영체제의 블루투스 기능을 위해 위치 서비스 활성화가 필수입니다. iOS 기기에서는 백그라운드 모드에서 앱을 사용하기 위해 위치 권한이 필요합니다."},{"question":"슈프리마 패스 앱은 내 위치 데이터를 저장하나요?","answer":"<b>아니요</b>. 슈프리마 패스 앱은 GPS 기반 위치 데이터를 추적하거나 저장하지 않으며, 이 데이터를 제3자와 공유하지도 않습니다. 인증을 위해 블루투스 위치 서비스를 사용하지만, 출입 기록은 사이트 관리자 포털에만 기록됩니다. 슈프리마 패스 앱, Suprema, MOCA System은 개인 위치 데이터를 저장하거나 사용하지 않습니다."},{"question":"위치 서비스를 활성화하면 모바일 기기의 배터리가 소모되나요?","answer":"<b>아니요</b>. GPS를 사용하는 다른 앱과 달리, 슈프리마 패스 앱은 GPS 위치 서비스에 의존하지 않으므로 배터리 소모를 증가시키지 않습니다."},{"question":"슈프리마 패스 앱을 사용하려면 위치 서비스를 활성화해야 하나요?","answer":"<ul><li><b>안드로이드 사용자</b>: 예, 안드로이드 기기의 블루투스 정책으로 위치 서비스가 활성화되어야 합니다.</li><li><b>iOS 사용자</b>: 백그라운드 모드에서만 필요합니다. \'앱 사용 중에만\' 모드를 사용하면 위치 권한은 필요하지 않습니다.</li></ul>"},{"question":"연결 방법별 위치 권한 요구 사항","answer":"<ul><li><b>앱 사용 중에만</b>: 위치 권한을 \'앱 사용 중에만 허용\'으로 설정할 수 있습니다. (iOS에서는 필수가 아님)</li><li><b>백그라운드 모드(항상)</b>: 위치 권한을 \'항상 허용\'으로 설정해야 합니다.</li><li><b>NFC 모드</b>: 안드로이드 사용자는 위치 권한에 동의해야 합니다.</li></ul>"},{"question":"모바일 기기에서 위치 서비스 동의를 무작위로 요청하는 이유가 무엇인가요?","answer":"<ol><li>\'허용 안 함\' 또는 \'한 번 허용\'을 선택하면 모바일 기기에서 위치 서비스 활성화를 계속 요청할 수 있습니다. 이는 슈프리마 패스 앱이 아닌 iOS 또는 안드로이드에서 제어됩니다.</li><li>iOS 사용자의 경우 \'항상 허용\'을 선택해도 Apple에서 보안 정책의 일환으로 정기적인 확인 메시지를 표시할 수 있습니다. 모바일 크리덴셜이 일관되게 작동하려면 계속해서 \'항상 허용\'을 클릭하세요. 백그라운드 모드 및 길게 누르기와 같은 기능이 무작위로 비활성화될 수 있습니다.</li></ol>"}]')
;// CONCATENATED MODULE: ./docs/platform/biostar_air/35-suprema-pass-app-location-issues.mdx


const frontMatter = {
	id: 'location-services-issues',
	title: '위치 서비스를 활성화해야 하나요?',
	description: '슈프리마 패스 앱에서 안전한 블루투스 통신 및 모바일 출입 카드 기능을 위해 위치 서비스를 활성화하는 방법을 안내합니다.',
	keywords: [
		'위치 서비스',
		'슈프리마 패스',
		'Bluetooth'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [..._biostarair_customer_notice/* .toc */.RM];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {FaqsItems} = _components;
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "모바일 기기의 슈프리마 패스 앱에서 모바일 출입 카드로 인증하려면 위치 서비스가 필요합니다. 이를 통해 휴대폰과 출입 통제 장치 간의 안전한 블루투스 통신을 보장합니다."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* ["default"] */.Ay, {}), "\n", "\n", (0,jsx_runtime.jsx)(FaqsItems, {
      data: location_issues_namespaceObject
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