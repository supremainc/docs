"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["6622"], {
7605: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_integration_dom_domploy_mdx_378_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-integration-dom-domploy-mdx-378.json
var site_docs_integration_dom_domploy_mdx_378_namespaceObject = JSON.parse('{"id":"integration/dom/domploy","title":"DOMPloy","description":"DOMPloy is the utility to setup the DOMBridge and device connections. You can download the DOMPloy utility by browsing to the https://IPOFDOMBRIDGE webpage. The default user and password are both Master.","source":"@site/docs/integration/dom/domploy.mdx","sourceDirName":"integration/dom","slug":"/integration/dom/domploy","permalink":"/docs/integration/dom/domploy","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/integration/dom/domploy.mdx","tags":[],"version":"current","frontMatter":{"id":"domploy","title":"DOMPloy","isTranslationMissing":false},"sidebar":"dom","previous":{"title":"Settings","permalink":"/docs/integration/dom/settings"},"next":{"title":"Appendices","permalink":"/docs/integration/dom/appendices"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(50065);
;// CONCATENATED MODULE: ./docs/integration/dom/domploy.mdx


const frontMatter = {
	id: 'domploy',
	title: 'DOMPloy',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["DOMPloy is the utility to setup the DOMBridge and device connections. You can download the DOMPloy utility by browsing to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://*IPOFDOMBRIDGE*"
      }), " webpage. The default user and password are both ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Master"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once logged in, you will see Online devices and Offline devices, both connection scenarios are supported by the integration, Online devices require an RFNM and will update periodically with the DOMBridge, Offline devices can exist by themselves and are updated by using the DOM Service app connected to the same WiFi network as the DOMBridge."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/integration/domploy.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/integration/domploy1.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To add devices via DOMPloy, you will need a USB BLE module and be running the DOMPloy application as an admin."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/integration/domploy2.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You will then see a list of devices if they are available."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/integration/domploy3.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For DOM Service, you will need to first add an account, this is a local account to the phone that is used to handle the different sites you can log into, once created, you will need to do into the DOM Controllers section to add your DOM Controller (URL, username and password is needed), once added, you will be able to sync that DOM Controller and pull the added devices, as well as add/edit devices."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/integration/domploy4.png",
      className: "none",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is almost the same behaviour as an RFNM, just that the phone connected to WiFi and Bluetooth handles all the communication instead."
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
50065: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: () => (MDXProvider),
  a: () => (useMDXComponents)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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