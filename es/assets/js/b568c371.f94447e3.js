"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["78953"], {
43582: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_site_basic_settings_mdx_b56_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-site-basic-settings-mdx-b56.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_site_basic_settings_mdx_b56_namespaceObject = JSON.parse('{"id":"platform/biostar_air/site-basic-settings","title":"Configuración del perfil","description":"Aprenda cómo administrar la información básica de un sitio y cómo eliminarlo en BioStar Air.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/site-basic-settings.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/site-basic-settings","permalink":"/docs/es/platform/biostar_air/site-basic-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/site-basic-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"site-basic-settings","title":"Configuración del perfil","description":"Aprenda cómo administrar la información básica de un sitio y cómo eliminarlo en BioStar Air.","keywords":["Configuración del sitio","configurar"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Configurar ajustes del sitio","permalink":"/docs/es/platform/biostar_air/settings"},"next":{"title":"Configuración Avanzada","permalink":"/docs/es/platform/biostar_air/site-advanced-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/site-basic-settings.mdx


const frontMatter = {
	id: 'site-basic-settings',
	title: 'Configuración del perfil',
	description: 'Aprenda cómo administrar la información básica de un sitio y cómo eliminarlo en BioStar Air.',
	keywords: [
		'Configuración del sitio',
		'configurar'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Configurar la información del sitio",
  "id": "siteProfile",
  "level": 2
}, {
  "value": "Eliminar el sitio",
  "id": "deletingSite",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "La información del sitio es la configuración más básica en BioStar Air. Esta guía explica cómo gestionar datos básicos, como el nombre y el identificador del sitio, y cómo eliminar un sitio cuando sea necesario."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "siteProfile",
      children: "Configurar la información del sitio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_submenu",
        product: "air"
      }), " en la barra lateral izquierda. Utilice la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_tab_profile",
        product: "air"
      }), " para modificar la información básica del sitio."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-site-info.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input2",
            product: "air"
          }), ": El nombre del sitio. Escriba un nuevo nombre y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "rename_site_apply_btn",
            product: "air"
          }), ". Puede cambiarlo en cualquier momento."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input1",
            product: "air"
          }), ": Identificador único requerido para solicitudes de soporte. Copie y proporcione el identificador del sitio al comunicarse con el equipo de MOCA."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "site_profile_input3",
            product: "air"
          }), ": Se establece al crear el sitio y no se puede cambiar posteriormente. Solicite cambios a través del Portal de Socios de BioStar Air."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deletingSite",
      children: "Eliminar el sitio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "settings_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_submenu",
        product: "air"
      }), " en la barra lateral izquierda. La única opción disponible en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "site_setting_tab_management",
        product: "air"
      }), " es ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "delete_site",
        product: "air"
      }), ". Esta acción es irreversible, y solo el ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "administrador principal"
      }), " puede eliminar un sitio."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-settings-site-management.png"
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