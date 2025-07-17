"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6424"], {
4933: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (MDXContent),
  d$: () => (toc)
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Customers who began using BioStar Air access control before May 2025 may still be using the Airfob Space app, which has since been rebranded as the Suprema Pass app. Both apps offer identical functionality and are fully compatible. There is no need for existing users to switch — mobile credentials work seamlessly across both."
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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
4481: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_platform_biostar_air_35_suprema_pass_app_location_issues_mdx_811_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-platform-biostar-air-35-suprema-pass-app-location-issues-mdx-811.json
var site_docs_platform_biostar_air_35_suprema_pass_app_location_issues_mdx_811_namespaceObject = JSON.parse('{"id":"platform/biostar_air/location-services-issues","title":"Why Do I Need to Enable Location Services?","description":"Learn how to enable location services in the Suprema Pass app for secure Bluetooth communication and mobile access card functionality.","source":"@site/docs/platform/biostar_air/35-suprema-pass-app-location-issues.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/location-services-issues","permalink":"/docs/platform/biostar_air/location-services-issues","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/35-suprema-pass-app-location-issues.mdx","tags":[],"version":"current","sidebarPosition":35,"frontMatter":{"id":"location-services-issues","title":"Why Do I Need to Enable Location Services?","description":"Learn how to enable location services in the Suprema Pass app for secure Bluetooth communication and mobile access card functionality.","keywords":["location services","Suprema Pass","Bluetooth"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Troubleshooting","permalink":"/docs/platform/biostar_air/troubleshooting-suprema-pass-app"},"next":{"title":"Intro to the BioStar Air Partner Portal","permalink":"/docs/platform/biostar_air/intro-to-partner-portal"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
// EXTERNAL MODULE: ./docs/common/_biostarair-customer-notice.mdx
var _biostarair_customer_notice = __webpack_require__(4933);
;// CONCATENATED MODULE: ./docs/platform/biostar_air/location-issues.json
var location_issues_namespaceObject = JSON.parse('[{"question":"Why Am I Being Asked to Enable Location Services?","answer":"The Suprema Pass app communicates with access control devices using Bluetooth. On Android devices, enabling location services is required by the operating system for Bluetooth functionality. On iOS, location permissions are necessary for using the app in background mode."},{"question":"Does the Airfob App Store My Location Data?","answer":"<b>No</b>. The Suprema Pass app does not track or store GPS-based location data, nor does it share this data with third parties.While the app uses Bluetooth location services for authentication, access logs are only recorded in the site administrator portal. The Suprema Pass app, Suprema, and MOCA System do not store or use any personal location data."},{"question":"Will Enabling Location Services Drain My Phone\'s Battery?","answer":"<b>No</b>. Unlike other apps that use GPS, the Suprema Pass app does not rely on GPS location services, so it does not increase battery consumption."},{"question":"Am I Required to Enable Location Services to Use the Suprema Pass?","answer":"<ul><li><b>Android users</b>: Yes, location services must be enabled due to Android’s Bluetooth policy.</li><li><b>iOS users</b>: Required only for background mode. If using the \\"Only while app on screen\\" mode, location permissions are not needed.</li></ul>"},{"question":"Location Permission Requirements by Connection Method:","answer":"<ul><li><b>Only while app on screen</b>: Location permission can be set to \\"Allow only while using the app.\\" (Not required on iOS.)</li><li><b>Background mode (Always)</b>: Location permission must be set to \\"Always allow.\\"</li><li><b>NFC Mode</b>: Android users must agree to location permissions.</li></ul>"},{"question":"Why Does My Phone Randomly Ask Me to Agree to Location Services?","answer":"<ol><li>If you select \\"Don\'t Allow\\" or \\"Allow Once,\\" your phone may continue prompting you to enable location services. This is controlled by iOS or Android, not by the Suprema Pass app.</li><li>For iOS users, even if \\"Always Allow\\" is selected, Apple may still display periodic confirmation messages as part of its security policies. Please continue to click \\"Always Allow\\" or mobile credentials may not work consistently. Features like Background Mode and Long Press may be disabled randomly.</li></ol>"}]')
;// CONCATENATED MODULE: ./docs/platform/biostar_air/35-suprema-pass-app-location-issues.mdx


const frontMatter = {
	id: 'location-services-issues',
	title: 'Why Do I Need to Enable Location Services?',
	description: 'Learn how to enable location services in the Suprema Pass app for secure Bluetooth communication and mobile access card functionality.',
	keywords: [
		'location services',
		'Suprema Pass',
		'Bluetooth'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "Feature Overview",
  "id": "feature-overview",
  "level": 2
}, ..._biostarair_customer_notice/* toc */.d$];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {FaqsItems} = _components;
  if (!FaqsItems) _missingMdxReference("FaqsItems", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-overview",
      children: "Feature Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Suprema Pass app requires location services to function correctly with your smartphone’s mobile access card. This ensures secure Bluetooth communication between your phone and the access control device."
    }), "\n", (0,jsx_runtime.jsx)(_biostarair_customer_notice/* default */.ZP, {}), "\n", "\n", (0,jsx_runtime.jsx)(FaqsItems, {
      data: location_issues_namespaceObject
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
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