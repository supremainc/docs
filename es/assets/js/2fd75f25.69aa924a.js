"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["37219"], {
87809: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_mdx_2fd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-settings-videos-mdx-2fd.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_settings_videos_mdx_2fd_namespaceObject = JSON.parse('{"id":"platform/biostar_x/settings-videos","title":"Configuración de video","description":"Guía paso a paso para crear un sistema integrado de gestión de seguridad por video mediante la vinculación de BioStar X y VMS. Comprende todo el proceso, desde la integración del servidor VMS hasta los ajustes de cámara y la configuración de reglas.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/settings-videos","permalink":"/docs/es/platform/biostar_x/settings-videos","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/settings-videos.mdx","tags":[],"version":"current","frontMatter":{"id":"settings-videos","title":"Configuración de video","description":"Guía paso a paso para crear un sistema integrado de gestión de seguridad por video mediante la vinculación de BioStar X y VMS. Comprende todo el proceso, desde la integración del servidor VMS hasta los ajustes de cámara y la configuración de reglas.","keywords":["Video","VMS","Integración","Cámara","Ajustes","Reglas"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Lista de Presencia","permalink":"/docs/es/platform/biostar_x/settings-advanced-ac-roll-call"},"next":{"title":"Integrar VMS","permalink":"/docs/es/platform/biostar_x/settings-video-integration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/settings-videos.mdx


const frontMatter = {
	id: 'settings-videos',
	title: 'Configuración de video',
	description: 'Guía paso a paso para crear un sistema integrado de gestión de seguridad por video mediante la vinculación de BioStar X y VMS. Comprende todo el proceso, desde la integración del servidor VMS hasta los ajustes de cámara y la configuración de reglas.',
	keywords: [
		'Video',
		'VMS',
		'Integración',
		'Cámara',
		'Ajustes',
		'Reglas'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Descripción general de los ajustes de video",
  "id": "descripción-general-de-los-ajustes-de-video",
  "level": 2
}, {
  "value": "Integrar servidor VMS",
  "id": "integrar-servidor-vms",
  "level": 3
}, {
  "value": "Configurar la cámara",
  "id": "configurar-la-cámara",
  "level": 3
}, {
  "value": "Configurar reglas",
  "id": "configurar-reglas",
  "level": 3
}, {
  "value": "Funciones clave",
  "id": "funciones-clave",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Step, Steps} = _components;
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["La función de ajustes de video de ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), " permite gestionar de forma integrada el control de acceso y la seguridad por video. Al integrarse con un ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Video Management System"
      }), " (VMS), utilice potentes funciones de gestión de seguridad, como la supervisión de video en tiempo real, la grabación vinculada a eventos y la generación automática de marcadores."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La función de ajustes de video está disponible como opción adicional con una licencia ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced"
        }), " o superior. Para más información sobre la política de licencias, consulta ", (0,jsx_runtime.jsx)(_components.a, {
          href: "licensing#features-add-ons",
          children: "lo siguiente"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "descripción-general-de-los-ajustes-de-video",
      children: "Descripción general de los ajustes de video"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los ajustes de video constan de los siguientes tres pasos."
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "integrar-servidor-vms",
          children: "Integrar servidor VMS"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure la conexión entre el servidor VMS y ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " y los certificados. Un paso esencial para crear un sistema integrado de gestión de seguridad por video. Para más información sobre esto, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-video-integration",
            children: "lo siguiente"
          }), "."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "configurar-la-cámara",
          children: "Configurar la cámara"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione las cámaras necesarias entre las conectadas al VMS y cree grupos para una gestión eficiente. Para más información sobre esto, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-videos-camera",
            children: "lo siguiente"
          }), "."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "configurar-reglas",
          children: "Configurar reglas"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cree reglas que vinculen los eventos de acceso con video para utilizar funciones avanzadas, como marcadores automáticos y registro de eventos. Para más información sobre esto, consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "settings-videos-rule",
            children: "lo siguiente"
          }), "."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "funciones-clave",
      children: "Funciones clave"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Supervisión integrada"
          }), ": Gestione el control de acceso y la seguridad por video desde una sola interfaz."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Registro automático de eventos"
          }), ": Grabe automáticamente el video asociado y genere etiquetas cuando se produzcan eventos de acceso."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Búsqueda eficiente"
          }), ": Busque rápidamente videos y reúna evidencia mediante marcadores y etiquetas de eventos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Respuesta en tiempo real"
          }), ": Verifique al instante las grabaciones de las cámaras pertinentes cuando surjan situaciones de seguridad."]
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