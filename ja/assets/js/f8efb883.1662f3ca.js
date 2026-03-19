"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["3850"], {
65396: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_location_services_issues_mdx_f8e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-ja-docusaurus-plugin-content-docs-current-platform-biostar-air-location-services-issues-mdx-f8e.json
var site_i_18_n_ja_docusaurus_plugin_content_docs_current_platform_biostar_air_location_services_issues_mdx_f8e_namespaceObject = JSON.parse('{"id":"platform/biostar_air/location-services-issues","title":"位置サービスを有効にする必要がありますか？","description":"Suprema Passアプリで安全なBluetooth通信およびモバイル入退室カード機能のために位置情報サービスを有効にする方法を案内します。","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/location-services-issues.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/location-services-issues","permalink":"/docs/ja/platform/biostar_air/location-services-issues","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/location-services-issues.mdx","tags":[],"version":"current","frontMatter":{"id":"location-services-issues","title":"位置サービスを有効にする必要がありますか？","description":"Suprema Passアプリで安全なBluetooth通信およびモバイル入退室カード機能のために位置情報サービスを有効にする方法を案内します。","keywords":["位置情報サービス","Suprema Pass","Bluetooth"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"モバイルカードが動作しません","permalink":"/docs/ja/platform/biostar_air/troubleshooting-suprema-pass-app"},"next":{"title":"ビデオ再生のトラブルシューティング","permalink":"/docs/ja/platform/biostar_air/video-troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/location-issues.json
var location_issues_namespaceObject = JSON.parse('[{"question":"位置サービスを有効にする必要がありますか？","answer":"Suprema PassアプリはBluetoothを使用してアクセスコントロール装置と通信します。Android端末ではOSのBluetooth機能のために位置情報サービスを有効にする必要があります。iOS端末ではバックグラウンドモードでアプリを使用するために位置情報の許可が必要です。"},{"question":"Suprema Passアプリは位置情報データを保存しますか？","answer":"<b>いいえ</b>。Suprema PassアプリはGPSベースの位置情報を追跡または保存せず、そのデータを第三者と共有しません。認証にはBluetoothの位置サービスを使用しますが、入退室記録はサイト管理者ポータルにのみ記録されます。Suprema Passアプリ、Suprema、MOCA Systemはいかなる個人の位置情報も保存または使用しません。"},{"question":"位置サービスを有効にするとモバイルデバイスのバッテリーが消耗しますか？","answer":"<b>いいえ</b>。他のGPSを使用するアプリとは異なり、Suprema PassアプリはGPS位置サービスに依存しないため、バッテリー消費を増加させません。"},{"question":"Suprema Passアプリを使用するには位置情報サービスを有効にする必要がありますか？","answer":"<ul><li><b>Androidユーザー</b>：はい、AndroidデバイスのBluetoothポリシーにより位置サービスを有効にする必要があります。</li><li><b>iOSユーザー</b>：バックグラウンドモードでのみ必要です。「Appの使用中のみ」モードを利用する場合、位置情報の許可は不要です。</li></ul>"},{"question":"接続方法別の位置情報許可要件","answer":"<ul><li><b>アプリ使用中のみ</b>：位置情報の許可を「アプリ使用中のみ許可」に設定できます。(iOSでは必須ではありません)</li><li><b>バックグラウンドモード(常に)</b>：位置情報の許可を「常に許可」に設定する必要があります。</li><li><b>NFCモード</b>：Androidユーザーは位置情報の許可に同意する必要があります。</li></ul>"},{"question":"モバイルデバイスが位置サービスの許可をランダムに要求するのはなぜですか？","answer":"<ol><li>「許可しない」または「一度だけ許可」を選択すると、モバイル端末で位置情報サービスの有効化を繰り返し求められる場合があります。これはSuprema Passアプリではなく、iOSまたはAndroidによって制御されます。</li><li>iOSユーザーの場合、「常に許可」を選択してもAppleがセキュリティポリシーの一環として定期的に確認メッセージを表示することがあります。モバイルクレデンシャルが一貫して動作するように、「常に許可」を選択し続けてください。バックグラウンドモードや長押しなどの機能がランダムに無効になることがあります。</li></ol>"}]')
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/platform/biostar_air/location-services-issues.mdx


const frontMatter = {
	id: 'location-services-issues',
	title: '位置サービスを有効にする必要がありますか？',
	description: 'Suprema Passアプリで安全なBluetooth通信およびモバイル入退室カード機能のために位置情報サービスを有効にする方法を案内します。',
	keywords: [
		'位置情報サービス',
		'Suprema Pass',
		'Bluetooth'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {FaqsItems} = _components;
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "モバイル機器のSuprema Passアプリでモバイル入退室カードにより認証を行うには、位置情報サービスが必要です。 これにより、モバイル端末と入退室管理装置との安全なBluetooth通信が確保されます。"
    }), "\n", "\n", (0,jsx_runtime.jsx)(FaqsItems, {
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