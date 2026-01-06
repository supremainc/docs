"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["78995"], {
89641: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_video_troubleshotting_mdx_327_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-video-troubleshotting-mdx-327.json
var site_docs_platform_biostar_air_video_troubleshotting_mdx_327_namespaceObject = JSON.parse('{"id":"platform/biostar_air/video-troubleshooting","title":"비디오 재생 관련 문제 해결","description":"BioStar Air에서 비디오 재생 문제 해결 및 ONVIF Profile G 지원 여부, 코덱 호환성, SD 카드 포맷 문제 해결 방법을 안내합니다.","source":"@site/docs/platform/biostar_air/video-troubleshotting.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/video-troubleshooting","permalink":"/docs/es/platform/biostar_air/video-troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/video-troubleshotting.mdx","tags":[],"version":"current","frontMatter":{"id":"video-troubleshooting","title":"비디오 재생 관련 문제 해결","description":"BioStar Air에서 비디오 재생 문제 해결 및 ONVIF Profile G 지원 여부, 코덱 호환성, SD 카드 포맷 문제 해결 방법을 안내합니다.","keywords":["IP 카메라","녹화된 비디오 재생","BioStar Air"],"isTranslationMissing":true},"sidebar":"biostar_air","previous":{"title":"모바일 카드가 작동하지 않아요","permalink":"/docs/es/platform/biostar_air/troubleshooting-suprema-pass-app"},"next":{"title":"v2.11","permalink":"/docs/es/platform/biostar_air/release-notes/v2_11"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/video-troubleshotting.json
var video_troubleshotting_namespaceObject = JSON.parse('[{"question":"ONVIF Profilee G 지원 확인","answer":"<a href=\'https://www.onvif.org\' target=\'_blank\'>ONVIF 호환 제품 페이지</a>에서 모델명을 검색하여 카메라가 ONVIF Profile G를 지원하는지 확인하세요. 녹화된 비디오를 재생하려면 ONVIF Profile G가 필요합니다."},{"question":"카메라 설정에서 영상 재생 테스트","answer":"<ul><li>웹 인터페이스를 통해 카메라 설정에 로그인하세요.</li><li>라이브 카메라 영상 및 녹화된 영상을 볼 수 있는지 확인하세요.</li><li>일부 카메라는 포털과 설정 메뉴에서 녹화된 영상의 동시 재생을 제한할 수 있습니다. 카메라 설정에서는 재생이 되는데 BioStar Air에서는 재생되지 않는다면 설정 화면을 닫고 다시 테스트해 보세요.</li></ul>"},{"question":"비디오 코덱 호환성 확인","answer":"녹화된 비디오가 <b>H.264</b> 코덱을 사용하고 있는지 확인하세요. BioStar Air는 H.265 코덱을 지원하지 않습니다."},{"question":"코덱이 변경된 경우 SD 카드 포맷","answer":"비디오 코덱이 변경된 경우 기존 녹화가 제대로 재생되지 않을 수 있습니다. 새로운 설정이 적용되려면 SD 카드를 포맷해야 할 수 있습니다. 이 솔루션은 일부 카메라 모델에서 재생 문제를 해결하는 것으로 확인되었습니다."},{"question":"ONVIF 준수 제품 목록 참조","answer":"카메라가 ONVIF 표준을 충족하는지 확실하지 않은 경우 <a href=\'https://www.onvif.org\' target=\'_blank\'>ONVIF</a>를 방문하여 호환성을 확인하세요."}]')
;// CONCATENATED MODULE: ./docs/platform/biostar_air/video-troubleshotting.mdx


const frontMatter = {
	id: 'video-troubleshooting',
	title: '비디오 재생 관련 문제 해결',
	description: 'BioStar Air에서 비디오 재생 문제 해결 및 ONVIF Profile G 지원 여부, 코덱 호환성, SD 카드 포맷 문제 해결 방법을 안내합니다.',
	keywords: [
		'IP 카메라',
		'녹화된 비디오 재생',
		'BioStar Air'
	],
	isTranslationMissing: true
};
const contentTitle = undefined;

const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {FaqsItems} = _components;
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air에 카메라를 등록한 후 녹화된 비디오가 재생되지 않으면 다음 단계에 따라 문제를 진단하고 해결하세요. 이 단계를 따르면 비디오 재생 문제를 해결하고 BioStar Air에서 제대로 작동하는지 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["카메라 등록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "ip-camera-support-and-configuration",
          children: "다음 문서"
        }), "를 참고하세요."]
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(FaqsItems, {
      data: video_troubleshotting_namespaceObject
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