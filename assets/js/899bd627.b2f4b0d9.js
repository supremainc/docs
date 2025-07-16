"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["4391"], {
5908: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_docs_integration_paxton_2_0_introduction_mdx_899_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-integration-paxton-2-0-introduction-mdx-899.json
var site_docs_integration_paxton_2_0_introduction_mdx_899_namespaceObject = JSON.parse('{"id":"integration/paxton_2.0/introduction","title":"Introduction","description":"Target Audience","source":"@site/docs/integration/paxton_2.0/introduction.mdx","sourceDirName":"integration/paxton_2.0","slug":"/integration/paxton_2.0/introduction","permalink":"/docs/integration/paxton_2.0/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/integration/paxton_2.0/introduction.mdx","tags":[],"version":"current","frontMatter":{"id":"introduction","title":"Introduction","isTranslationMissing":false},"sidebar":"paxton","next":{"title":"Installation","permalink":"/docs/integration/paxton_2.0/installation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./docs/integration/paxton_2.0/introduction.mdx


const frontMatter = {
	id: 'introduction',
	title: 'Introduction',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Target Audience",
  "id": "target-audience",
  "level": 2
}, {
  "value": "Features",
  "id": "features",
  "level": 2
}, {
  "value": "System diagram",
  "id": "system-diagram",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "target-audience",
      children: "Target Audience"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document describes the integration between Suprema biometric devices and Paxton Net2 Access Control system using the Suprema Paxton Integration 2.0."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document is intended for OEM Clients. The OEM Clients require basic knowledge of the Paxton Net2 and Suprema biometric devices."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema Paxton Integration 2.0 is a middleware that allows the Paxton Net2 Access Control System to communicate with BioStar 2, facilitating the connection to devices, which can then register a variety of credentials to users from Net2. With Suprema Paxton Integration 2.0, you can easily setup and build the Biometric Management System for the Net2 using Suprema biometric devices."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Suprema Paxton Integration 2.0 provides the following features."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable biometrics"
          }), ": Not only the RFID cards and PINs but also fingerprints and face as credentials."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Easy user management"
          }), ": No need to register or manage users separately because user data on Net2 Access Control system is synchronized in real time."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Easy enrollment and management"
          }), ": Allows to register the user's credentials directly from the device."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enterprise-level configuration"
          }), ": Allows to connect and manage up to 1,000 Biometric Devices."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable sync with Airfob"
          }), ": Allows usage of the Suprema Mobile Credential, with automatic registration."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "For more details on the functionality of Paxton Net2 access control system, see the user manuals for Net2."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "system-diagram",
      children: "System diagram"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/integration/system-diagram-paxton-2.0.svg",
      className: "none full",
      alone: true
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