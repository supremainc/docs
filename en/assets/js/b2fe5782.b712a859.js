"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["12211"], {
29277: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_video_troubleshotting_mdx_b2f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-video-troubleshotting-mdx-b2f.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_video_troubleshotting_mdx_b2f_namespaceObject = JSON.parse('{"id":"platform/biostar_air/video-troubleshooting","title":"Troubleshoot Video Playback Issues","description":"Learn how to troubleshoot video playback issues in BioStar Air, check ONVIF Profile G support, resolve codec compatibility, and fix SD card format problems.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/video-troubleshotting.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/video-troubleshooting","permalink":"/docs/en/platform/biostar_air/video-troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/video-troubleshotting.mdx","tags":[],"version":"current","frontMatter":{"id":"video-troubleshooting","title":"Troubleshoot Video Playback Issues","description":"Learn how to troubleshoot video playback issues in BioStar Air, check ONVIF Profile G support, resolve codec compatibility, and fix SD card format problems.","keywords":["IP camera","Recorded video playback","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Fix Mobile Card Issues","permalink":"/docs/en/platform/biostar_air/troubleshooting-suprema-pass-app"},"next":{"title":"v2.11","permalink":"/docs/en/platform/biostar_air/release-notes/v2_11"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/video-troubleshotting.json
var video_troubleshotting_namespaceObject = JSON.parse('[{"question":"Verify ONVIF profile G support","answer":"Check whether the camera supports ONVIF Profile G by searching for the model name on <a href=\'https://www.onvif.org\' target=\'_blank\'>ONVIF\'s conformant products page</a>. ONVIF Profile G is required for recorded video playback."},{"question":"Test video playback in camera settings","answer":"<ul><li>Log into the camera’s settings via its web interface.</li><li>Ensure that you can view the live camera feed and recorded videos.</li><li>Be aware that some cameras may restrict simultaneous playback of recorded videos in both the portal and the settings menu. If playback works in the camera settings but not in BioStar Air, try closing the settings interface and testing again.</li></ul>"},{"question":"Check video codec compatibility","answer":"Ensure that the recorded video is using the <b>H.264</b> codec, as BioStar Air does not support <b>H.265</b>."},{"question":"Format the SD card if codec was changed","answer":"If the video codec was changed at any point, the existing recordings may not play correctly. Formatting the SD card may be necessary for the new settings to take effect. This solution has been confirmed to resolve playback issues on some camera models."},{"question":"Reference ONVIF\'s conformant products list","answer":"If you are unsure whether your camera meets ONVIF standards, visit the <a href=\'https://www.onvif.org\' target=\'_blank\'>ONVIF website</a> to verify compatibility."}]')
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/video-troubleshotting.mdx


const frontMatter = {
	id: 'video-troubleshooting',
	title: 'Troubleshoot Video Playback Issues',
	description: 'Learn how to troubleshoot video playback issues in BioStar Air, check ONVIF Profile G support, resolve codec compatibility, and fix SD card format problems.',
	keywords: [
		'IP camera',
		'Recorded video playback',
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
    a: "a",
    admonition: "admonition",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {FaqsItems} = _components;
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Follow these steps to diagnose and resolve the issue when recorded video does not play after you register a camera in BioStar Air. These steps resolve video playback issues and ensure proper operation in BioStar Air."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information on camera registration, refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "ip-camera-support-and-configuration",
          children: "the following"
        }), "."]
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