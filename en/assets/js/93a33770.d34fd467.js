"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["7583"], {
6879: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  "default": () => (/* binding */ MDXContent),
  toc: () => (/* binding */ toc),
  metadata: () => (/* reexport */ site_i_18_n_en_docusaurus_plugin_content_docs_current_integration_dom_settings_mdx_93a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-en-docusaurus-plugin-content-docs-current-integration-dom-settings-mdx-93a.json
var site_i_18_n_en_docusaurus_plugin_content_docs_current_integration_dom_settings_mdx_93a_namespaceObject = JSON.parse('{"id":"integration/dom/settings","title":"Settings","description":"Link Devices","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/integration/dom/settings.mdx","sourceDirName":"integration/dom","slug":"/integration/dom/settings","permalink":"/docs/en/integration/dom/settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/integration/dom/settings.mdx","tags":[],"version":"current","frontMatter":{"id":"settings","title":"Settings","isTranslationMissing":false},"sidebar":"dom","previous":{"title":"Installing BioStar 2","permalink":"/docs/en/integration/dom/installing-biostar2"},"next":{"title":"DOMPloy","permalink":"/docs/en/integration/dom/domploy"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(65);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/integration/dom/settings.mdx


const frontMatter = {
	id: 'settings',
	title: 'Settings',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Link Devices",
  "id": "link-devices",
  "level": 2
}, {
  "value": "Binding DOM Locks",
  "id": "binding-dom-locks",
  "level": 2
}, {
  "value": "Creating and Revoking Grants",
  "id": "creating-and-revoking-grants",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "link-devices",
      children: "Link Devices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The link devices section is used to link BioStar 2 devices to DOM devices, so that an authentication success event will activate the DOM lock, this will require devices to be added within BioStar 2 already, the linking window will then pull the BioStar readers. All you need to do is select the BioStar reader that will be used to authenticate, then the DOM reader you wish to activate. (This will only work with online devices, as the door open command is sent via RFNM to the online device.)"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/integration/link-devices.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "binding-dom-locks",
      children: "Binding DOM Locks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This portion of the SettingsEditor will only become visible once the tapkey site has been linked, this also requires readers to be registered via DomPloy or the Dom Service app:"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/integration/binding-dom-locks.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Start Binding DOM Locks"
      }), " will send the initial binding data down to the device, after pressing this button, Online devices should update automatically, offline devices will need to be synced with the DOM Service app."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once the secondary binding data has been uploaded back to the DOM Bridge, you can then choose ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Finish Binding DOM Locks"
      }), " to finish the binding, this will add the lock information into tapkey."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There is also a section to rename devices on tapkey (This is what they will appear as on the Dom Key app):"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/integration/binding-dom-locks1.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creating-and-revoking-grants",
      children: "Creating and Revoking Grants"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grants are now handled automatically by the Tapkey sync process, but there is also the option to manually add and remove grants via the settings editor too, to add grants, you just need to select the specific lock, then select one or multiple users to send the grant out to. To revoke grants, you do not need to select lock (All grants will be revoked), you can just select one or multiple users."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/integration/creating-reviking-grants.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/integration/creating-reviking-grants1.png",
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