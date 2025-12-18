"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["13581"], {
75034: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_index_mdx_f91_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-corestation-setup-manager-index-mdx-f91.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_index_mdx_f91_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/index","title":"CoreStation Setup Manager","description":"CoreStation Setup Manager es un servidor web que gestiona los ajustes de red de CoreStation o verifica el estado de conexión de los dispositivos esclavos, los puertos de entrada y salida y los puertos Wiegand. Usa CoreStation Setup Manager para verificar in situ el estado de la red y del cableado sin tener que desplazarte hasta la ubicación del servidor BioStar X mientras configuras el sistema de control de acceso con CoreStation.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/index.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/","permalink":"/docs/es/device/corestation_setup_manager/","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/index.mdx","tags":[],"version":"current","frontMatter":{"title":"CoreStation Setup Manager","description":"CoreStation Setup Manager es un servidor web que gestiona los ajustes de red de CoreStation o verifica el estado de conexión de los dispositivos esclavos, los puertos de entrada y salida y los puertos Wiegand. Usa CoreStation Setup Manager para verificar in situ el estado de la red y del cableado sin tener que desplazarte hasta la ubicación del servidor BioStar X mientras configuras el sistema de control de acceso con CoreStation.","keywords":["CoreStation Setup Manager","Servidor web de gestión de control de acceso centralizado"],"isTranslationMissing":false},"sidebar":"corestation_setup_manager","next":{"title":"Primeros pasos","permalink":"/docs/es/device/corestation_setup_manager/getting-started"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/index.mdx


const frontMatter = {
	title: 'CoreStation Setup Manager',
	description: 'CoreStation Setup Manager es un servidor web que gestiona los ajustes de red de CoreStation o verifica el estado de conexión de los dispositivos esclavos, los puertos de entrada y salida y los puertos Wiegand. Usa CoreStation Setup Manager para verificar in situ el estado de la red y del cableado sin tener que desplazarte hasta la ubicación del servidor BioStar X mientras configuras el sistema de control de acceso con CoreStation.',
	keywords: [
		'CoreStation Setup Manager',
		'Servidor web de gestión de control de acceso centralizado'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Overview} = _components;
  if (!Overview) _missingMdxReference("Overview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation Setup Manager es un servidor web que gestiona los ajustes de red de CoreStation o verifica el estado de conexión de los dispositivos esclavos, los puertos de entrada y salida y los puertos Wiegand. Usa CoreStation Setup Manager para verificar in situ el estado de la red y del cableado sin tener que desplazarte hasta la ubicación del servidor BioStar X mientras configuras el sistema de control de acceso con CoreStation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Ejemplo de banner",
        src: (__webpack_require__(31566)/* ["default"] */.A) + "",
        width: "1445",
        height: "948"
      })
    }), "\n", (0,jsx_runtime.jsx)(Overview, {})]
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
31566: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/corestation-setup-manager-main-49d4c62bc5170a4ed95e96a1b74d251c.png");

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