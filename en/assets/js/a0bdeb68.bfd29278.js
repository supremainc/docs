"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["28610"], {
70913: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_device_facestation_f_2_release_notes_index_mdx_a0b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-device-facestation-f-2-release-notes-index-mdx-a0b.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_device_facestation_f_2_release_notes_index_mdx_a0b_namespaceObject = JSON.parse('{"id":"device/facestation_f2/release-notes/index","title":"FaceStation F2 Release Notes","description":"This document provides a summary of feature improvements, bug fixes, and major changes applied to each version of the FaceStation F2 firmware.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/facestation_f2/release-notes/index.mdx","sourceDirName":"device/facestation_f2/release-notes","slug":"/device/facestation_f2/release-notes/","permalink":"/docs/en/device/facestation_f2/release-notes/","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/facestation_f2/release-notes/index.mdx","tags":[],"version":"current","frontMatter":{"title":"FaceStation F2 Release Notes","description":"This document provides a summary of feature improvements, bug fixes, and major changes applied to each version of the FaceStation F2 firmware.","isTranslationMissing":false},"sidebar":"facestationf2","previous":{"title":"Appendices","permalink":"/docs/en/device/facestation_f2/appendices"},"next":{"title":"Firmware Version 2.2.1","permalink":"/docs/en/device/facestation_f2/release-notes/221"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/device/facestation_f2/release-notes/index.mdx


const frontMatter = {
	title: 'FaceStation F2 Release Notes',
	description: 'This document provides a summary of feature improvements, bug fixes, and major changes applied to each version of the FaceStation F2 firmware.',
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
            children: "After upgrading the firmware to v2.x.x, it is not able to downgrade to an earlier version (v1.x.x) firmware."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "When upgrading the firmware from v1.x.x to v2.x.x, it is recommended to use BioStar 2 or BioStar Device SDK."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When upgrading the firmware using a USB memory inevitably, first set ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Menu Timeout"
            }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Always On"
            }), " in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Display & Sound"
            }), " menu before proceeding with the upgrade. Also, even if a failure message is displayed during the upgrade, DO NOT remove the USB memory and wait until a success message is displayed. The device will restart automatically when the upgrade is complete."]
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