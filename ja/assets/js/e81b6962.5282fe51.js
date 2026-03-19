"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["8075"], {
89590: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_video_troubleshotting_mdx_e81_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-video-troubleshotting-mdx-e81.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_video_troubleshotting_mdx_e81_namespaceObject = JSON.parse('{"id":"platform/biostar_air/video-troubleshooting","title":"ビデオ再生のトラブルシューティング","description":"BioStar Airでのビデオ再生問題のトラブルシューティングと、ONVIF Profile Gのサポート可否、コーデック互換性、SDカードのフォーマットに関する問題の解決方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/video-troubleshotting.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/video-troubleshooting","permalink":"/docs/ja/platform/biostar_air/video-troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/video-troubleshotting.mdx","tags":[],"version":"current","frontMatter":{"id":"video-troubleshooting","title":"ビデオ再生のトラブルシューティング","description":"BioStar Airでのビデオ再生問題のトラブルシューティングと、ONVIF Profile Gのサポート可否、コーデック互換性、SDカードのフォーマットに関する問題の解決方法を案内します。","keywords":["IPカメラ","録画ビデオの再生","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"位置サービスを有効にする必要がありますか？","permalink":"/docs/ja/platform/biostar_air/location-services-issues"},"next":{"title":"v2.11","permalink":"/docs/ja/platform/biostar_air/release-notes/v2_11"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/video-troubleshotting.json
var video_troubleshotting_namespaceObject = JSON.parse('[{"question":"ONVIF Profile Gの対応を確認する","answer":"<a href=\'https://www.onvif.org\' target=\'_blank\'>ONVIF互換製品ページ</a>でモデル名を検索して、カメラがONVIF Profile Gに対応しているか確認する。録画ビデオを再生するにはONVIF Profile Gが必要です。"},{"question":"カメラ設定で映像再生をテストする","answer":"<ul><li>ウェブインターフェースでカメラの設定にログインする。</li><li>ライブ映像と録画映像が表示できるか確認する。</li><li>一部のカメラはポータルや設定メニューで録画映像の同時再生を制限することがある。カメラ設定では再生できるがBioStar Airでは再生できない場合は、設定画面を閉じて再度テストする。</li></ul>"},{"question":"ビデオコーデックの互換性を確認する","answer":"<b>H.264</b>コーデックを使用しているか確認する。BioStar Airは<b>H.265</b>コーデックをサポートしていない。"},{"question":"コーデック変更時はSDカードをフォーマットする","answer":"ビデオコーデックが変更された場合、既存の録画が正しく再生されないことがあります。新しい設定を適用するにはSDカードのフォーマットが必要な場合があります。この解決策は一部のカメラモデルで再生問題を解決することが確認されています。"},{"question":"ONVIF準拠製品一覧を参照する","answer":"<a href=\'https://www.onvif.org\' target=\'_blank\'>ONVIF</a>サイトにアクセスして互換性を確認する。"}]')
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/video-troubleshotting.mdx


const frontMatter = {
	id: 'video-troubleshooting',
	title: 'ビデオ再生のトラブルシューティング',
	description: 'BioStar Airでのビデオ再生問題のトラブルシューティングと、ONVIF Profile Gのサポート可否、コーデック互換性、SDカードのフォーマットに関する問題の解決方法を案内します。',
	keywords: [
		'IPカメラ',
		'録画ビデオの再生',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {DocLink, FaqsItems} = _components;
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Airにカメラを登録した後、録画ビデオが再生されない場合は、以下の手順に従って問題を診断し解決してください。 この手順に従うことで、ビデオ再生の問題を解決し、BioStar Airで正常に動作することを確認できます。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["カメラ登録の詳細については、", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/ip-camera-support-and-configuration"
        }), "をご参照ください。"]
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