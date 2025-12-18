"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["602"], {
17209: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_device_manager_initial_setup_mdx_725_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-device-manager-initial-setup-mdx-725.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_device_manager_initial_setup_mdx_725_namespaceObject = JSON.parse('{"id":"device/device_manager/initial-setup","title":"Configuración inicial del dispositivo","description":"Guía sobre cómo seleccionar un dispositivo y gestionar la configuración de la aplicación.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/device_manager/initial-setup.mdx","sourceDirName":"device/device_manager","slug":"/device/device_manager/initial-setup","permalink":"/docs/es/device/device_manager/initial-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/device_manager/initial-setup.mdx","tags":[],"version":"current","frontMatter":{"id":"initial-setup","title":"Configuración inicial del dispositivo","description":"Guía sobre cómo seleccionar un dispositivo y gestionar la configuración de la aplicación.","keywords":["Selección de dispositivo","Configuración de la aplicación"],"isTranslationMissing":false},"sidebar":"device_manager","previous":{"title":"Primeros pasos","permalink":"/docs/es/device/device_manager/getting-started"},"next":{"title":"Configurar dispositivo IP","permalink":"/docs/es/device/device_manager/ip-device-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/device_manager/initial-setup.mdx


const frontMatter = {
	id: 'initial-setup',
	title: 'Configuración inicial del dispositivo',
	description: 'Guía sobre cómo seleccionar un dispositivo y gestionar la configuración de la aplicación.',
	keywords: [
		'Selección de dispositivo',
		'Configuración de la aplicación'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Seleccionar dispositivo",
  "id": "seleccionar-dispositivo",
  "level": 2
}, {
  "value": "Configurar los ajustes de la aplicación",
  "id": "app-settings",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcSet, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcSet) _missingMdxReference("IcSet", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Guía sobre cómo seleccionar un dispositivo y gestionar la configuración de la aplicación."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "seleccionar-dispositivo",
      children: "Seleccionar dispositivo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Seleccione el dispositivo que desea configurar con Suprema Device Manager."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Seleccione un dispositivo IP o XPass D2; las opciones de configuración disponibles varían según el dispositivo seleccionado."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Instale la aplicación ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Suprema Device Manager"
          }), " en el dispositivo móvil del administrador. Suprema Device Manager está disponible para descargar en la ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "App Store"
          }), " y la ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Play Store"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ejecuta Suprema Device Manager en el dispositivo móvil."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione el dispositivo que desea configurar."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-manager-main.png",
          width: 250
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "app-settings",
      children: "Configurar los ajustes de la aplicación"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configure la función de conexión automática del dispositivo o consulte la información de la versión de la aplicación."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ejecuta Suprema Device Manager en el dispositivo móvil."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(IcSet, {}), " en la pantalla principal."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/device-manager-app-setting.png",
          className: "none",
          width: 540
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_276",
                product: "dev"
              }), ": Active o desactive la función de conexión automática del dispositivo."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_226",
                product: "dev"
              }), ": Consulte la versión actual de la aplicación y la información de la licencia."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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