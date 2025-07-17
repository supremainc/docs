"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["714"], {
5572: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_video_troubleshotting_mdx_b2f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-platform-biostar-air-video-troubleshotting-mdx-b2f.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_platform_biostar_air_video_troubleshotting_mdx_b2f_namespaceObject = JSON.parse('{"id":"platform/biostar_air/video-troubleshooting","title":"Checking if a Camera Supports Recorded Video Playback","description":"Learn how to troubleshoot video playback issues, verify ONVIF Profile G support, check codec compatibility, and resolve SD card formatting problems in BioStar Air.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/video-troubleshotting.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/video-troubleshooting","permalink":"/docs/en/platform/biostar_air/video-troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/video-troubleshotting.mdx","tags":[],"version":"current","frontMatter":{"id":"video-troubleshooting","title":"Checking if a Camera Supports Recorded Video Playback","description":"Learn how to troubleshoot video playback issues, verify ONVIF Profile G support, check codec compatibility, and resolve SD card formatting problems in BioStar Air.","keywords":["IP Camera","Recorded Video Playback","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"IP Camera Support and Configuration","permalink":"/docs/en/platform/biostar_air/ip-camera-support-and-configuration"},"next":{"title":"Overview","permalink":"/docs/en/platform/biostar_air/suprema-pass-app-overview"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/platform/biostar_air/video-troubleshotting.mdx


const frontMatter = {
	id: 'video-troubleshooting',
	title: 'Checking if a Camera Supports Recorded Video Playback',
	description: 'Learn how to troubleshoot video playback issues, verify ONVIF Profile G support, check codec compatibility, and resolve SD card formatting problems in BioStar Air.',
	keywords: [
		'IP Camera',
		'Recorded Video Playback',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Troubleshooting Tips for Video Playback Issues",
  "id": "troubleshooting-tips-for-video-playback-issues",
  "level": 2
}, {
  "value": "Verify ONVIF Profile G Support",
  "id": "verify-onvif-profile-g-support",
  "level": 3
}, {
  "value": "Test Video Playback in Camera Settings",
  "id": "test-video-playback-in-camera-settings",
  "level": 3
}, {
  "value": "Check Video Codec Compatibility",
  "id": "check-video-codec-compatibility",
  "level": 3
}, {
  "value": "Format the SD Card If Codec Was Changed",
  "id": "format-the-sd-card-if-codec-was-changed",
  "level": 3
}, {
  "value": "Reference ONVIF&#39;s Conformant Products List",
  "id": "reference-onvifs-conformant-products-list",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting-tips-for-video-playback-issues",
      children: "Troubleshooting Tips for Video Playback Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If recorded videos do not play after registering the camera in BioStar Air, follow these steps to diagnose and resolve the issue:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verify-onvif-profile-g-support",
      children: "Verify ONVIF Profile G Support"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Check whether the camera supports ONVIF Profile G by searching for the model name on ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.onvif.org",
        children: "ONVIF's conformant products page"
      }), ". ONVIF Profile G is required for recorded video playback."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-video-playback-in-camera-settings",
      children: "Test Video Playback in Camera Settings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Log into the camera’s settings via its web interface."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ensure that you can view the live camera feed and recorded videos."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Be aware that some cameras may restrict simultaneous playback of recorded videos in both the portal and the settings menu. If playback works in the camera settings but not in Airfob Space, try closing the settings interface and testing again."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-video-codec-compatibility",
      children: "Check Video Codec Compatibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ensure that the recorded video is using the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "H.264"
      }), " codec, as Airfob Space does not support H.265."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "format-the-sd-card-if-codec-was-changed",
      children: "Format the SD Card If Codec Was Changed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the video codec was changed at any point, the existing recordings may not play correctly. Formatting the SD card may be necessary for the new settings to take effect. This solution has been confirmed to resolve playback issues on some camera models."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reference-onvifs-conformant-products-list",
      children: "Reference ONVIF's Conformant Products List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you are unsure whether your camera meets ONVIF standards, visit the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.onvif.org",
        children: "ONVIF website"
      }), " to verify compatibility."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By following these steps, you can troubleshoot video playback issues and ensure proper functionality within Airfob Space."
    })]
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