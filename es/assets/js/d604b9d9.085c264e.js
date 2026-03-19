"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["18460"], {
57562: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_index_mdx_d60_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-index-mdx-d60.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_index_mdx_d60_namespaceObject = JSON.parse('{"id":"platform/biostar_air/index","title":"BioStar Air","description":"BioStar Air es una solución de control de acceso nativa en la nube desarrollada por Suprema, líder global en seguridad biométrica.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/index.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/","permalink":"/docs/es/platform/biostar_air/","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/index.mdx","tags":[],"version":"current","frontMatter":{"title":"BioStar Air","description":"BioStar Air es una solución de control de acceso nativa en la nube desarrollada por Suprema, líder global en seguridad biométrica.","keywords":["BioStar Air","Control de acceso","solución basada en la nube"],"isTranslationMissing":false},"sidebar":"biostar_air","next":{"title":"¿Qué es BioStar Air?","permalink":"/docs/es/platform/biostar_air/what-is-biostar-air"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/index.mdx


const frontMatter = {
	title: 'BioStar Air',
	description: 'BioStar Air es una solución de control de acceso nativa en la nube desarrollada por Suprema, líder global en seguridad biométrica.',
	keywords: [
		'BioStar Air',
		'Control de acceso',
		'solución basada en la nube'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Acerca de esta guía",
  "id": "acerca-de-esta-guía",
  "level": 2
}, {
  "value": "En esta guía",
  "id": "en-esta-guía",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {DocLink, Image, Overview} = _components;
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Overview) _missingMdxReference("Overview", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air es una solución de control de acceso nativa en la nube desarrollada por Suprema, líder global en seguridad biométrica. Diseñada para eliminar la necesidad de infraestructura local, BioStar Air ofrece un control de acceso seguro, flexible y escalable que se puede gestionar desde cualquier lugar. Con lectores inteligentes que se conectan directamente a la nube, las organizaciones pueden controlar fácilmente el acceso en múltiples ubicaciones usando solo un teléfono móvil o un navegador."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/air-main-cover-image.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acerca-de-esta-guía",
      children: "Acerca de esta guía"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La guía del usuario está dividida en cuatro secciones según el rol. Elija la que corresponda al suyo."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/site-admin-guide"
          }), ": Responsable de la operación diaria de un sitio de BioStar Air, que incluye registrar usuarios y credenciales, configurar dispositivos, puertas y ascensores, establecer permisos de acceso, monitorear eventos y administrar la configuración del sitio y del servicio."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/partner-install-guide"
          }), ": Responsable de crear y administrar sitios a través del Portal de Socios, instalar hardware como lectores, módulos y cámaras, y configurar redes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/credential-users-guide"
          }), ": Usuarios finales que desbloquean puertas con credenciales móviles mediante la aplicación Suprema Pass y configuran métodos de autenticación y la sensibilidad del Bluetooth."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/developer-guide"
          }), ": Documentación para desarrolladores que deseen automatizar la gestión de usuarios y la emisión de credenciales mediante la BioStar Air Cloud API."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "en-esta-guía",
      children: "En esta guía"
    }), "\n", (0,jsx_runtime.jsx)(Overview, {
      all: true
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