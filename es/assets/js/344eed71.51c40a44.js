"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["17337"], {
97443: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_extendedmodule_product_specifications_mdx_344_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-extendedmodule-product-specifications-mdx-344.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_extendedmodule_product_specifications_mdx_344_namespaceObject = JSON.parse('{"id":"device/extendedmodule/product-specifications","title":"Especificaciones del producto","description":"Incluye las especificaciones clave del producto, como tamaño, características y rendimiento.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/extendedmodule/product-specifications.mdx","sourceDirName":"device/extendedmodule","slug":"/device/extendedmodule/product-specifications","permalink":"/docs/es/device/extendedmodule/product-specifications","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/extendedmodule/product-specifications.mdx","tags":[],"version":"current","frontMatter":{"id":"product-specifications","title":"Especificaciones del producto","description":"Incluye las especificaciones clave del producto, como tamaño, características y rendimiento.","keywords":["General","Interfaz","Dimensiones"],"isTranslationMissing":false},"sidebar":"extendedmodule","previous":{"title":"Instalación","permalink":"/docs/es/device/extendedmodule/installation"},"next":{"title":"Apéndices","permalink":"/docs/es/device/extendedmodule/appendices"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./static/specs/extm_specs.json
var extm_specs_namespaceObject = JSON.parse('{"_":{"j":{"label":"일반","label_id":"specs.general","items":{"ip_rating":{"label":"IP 등급","label_id":"specs.general.ip_rating","label_link":"../../reference/glossary#ip_rating","value":"IP65"}}},"q":{"label":"인터페이스","label_id":"specs.interface","items":{"rs485":{"label":"RS-485","label_id":"specs.interface.rs485","value":{"ko":"1채널","en":"1 ch","es":"1 canal","ja":"1 チャンネル"}},"rs232c":{"label":"RS-232C","label_id":"specs.interface.rs232c","value":{"ko":"1채널","en":"1 ch","es":"1 canal","ja":"1 チャンネル"}}}}}}')
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/extendedmodule/product-specifications.mdx


const frontMatter = {
	id: 'product-specifications',
	title: 'Especificaciones del producto',
	description: 'Incluye las especificaciones clave del producto, como tamaño, características y rendimiento.',
	keywords: [
		'General',
		'Interfaz',
		'Dimensiones'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*일반*/
/*인터페이스*/



const toc = [{
  "value": "Dimensiones y peso",
  "id": "dimensiones-y-peso",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    hr: "hr",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, SpecSection} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!SpecSection) _missingMdxReference("SpecSection", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Incluye las especificaciones clave del producto, como tamaño, características y rendimiento."
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: extm_specs_namespaceObject._.j
    }), "\n", "\n", (0,jsx_runtime.jsx)(SpecSection, {
      data: extm_specs_namespaceObject._.q
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dimensiones-y-peso",
      children: "Dimensiones y peso"
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/device/extm-dimension.svg",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Las especificaciones del producto están sujetas a cambios sin previo aviso para mejorar el rendimiento."
      })
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