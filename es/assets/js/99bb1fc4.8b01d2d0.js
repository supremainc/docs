"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["78954"], {
39613: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_biostation_3_max_event_log_mdx_99b_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-biostation-3-max-event-log-mdx-99b.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_biostation_3_max_event_log_mdx_99b_namespaceObject = JSON.parse('{"id":"device/biostation_3_max/event-log","title":"Registros de eventos","description":"Describe cómo ver los registros de eventos generados por el dispositivo.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/biostation_3_max/event-log.mdx","sourceDirName":"device/biostation_3_max","slug":"/device/biostation_3_max/event-log","permalink":"/docs/es/device/biostation_3_max/event-log","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biostation_3_max/event-log.mdx","tags":[],"version":"current","frontMatter":{"id":"event-log","title":"Registros de eventos","description":"Describe cómo ver los registros de eventos generados por el dispositivo.","keywords":["Buscar","Registro","Borrar","Uso"],"isTranslationMissing":false},"sidebar":"biostation3max","previous":{"title":"Ajustes","permalink":"/docs/es/device/biostation_3_max/settings"},"next":{"title":"Solución de problemas","permalink":"/docs/es/device/biostation_3_max/troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/biostation_3_max/event-log.mdx


const frontMatter = {
	id: 'event-log',
	title: 'Registros de eventos',
	description: 'Describe cómo ver los registros de eventos generados por el dispositivo.',
	keywords: [
		'Buscar',
		'Registro',
		'Borrar',
		'Uso'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Busca registros de eventos",
  "id": "busca-registros-de-eventos",
  "level": 2
}, {
  "value": "Eliminar todos los registros",
  "id": "eliminar-todos-los-registros",
  "level": 2
}, {
  "value": "Ver uso de registros",
  "id": "ver-uso-de-registros",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Describe cómo ver los registros de eventos generados por el dispositivo."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "busca-registros-de-eventos",
      children: "Busca registros de eventos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configura condiciones para buscar registros."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentícate con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-eventlog.png",
            ico: true,
            alone: true
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_109",
            product: "dev"
          }), ". Todos los registros de eventos aparecen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-search.svg",
            ico: true,
            alone: true
          }), " para buscar un registro específico y cambiar la condición."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-search.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configura los criterios de búsqueda y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_037",
            product: "dev"
          }), " para mostrar los registros que coincidan con los criterios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "eliminar-todos-los-registros",
      children: "Eliminar todos los registros"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Elimina todos los registros guardados."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentícate con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-eventlog.png",
            ico: true,
            alone: true
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_109",
            product: "dev"
          }), ". Todos los registros de eventos aparecen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Selecciona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-delete.svg",
            ico: true,
            alone: true
          }), " y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_367",
            product: "dev"
          }), " para eliminar todos los registros. Presiona ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_321",
            product: "dev"
          }), " para regresar a la pantalla anterior."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ver-uso-de-registros",
      children: "Ver uso de registros"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consulta el estado del uso de registros."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-menu.svg",
            ico: true,
            alone: true
          }), " y autentícate con la credencial de nivel de administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presiona ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-eventlog.png",
            ico: true,
            alone: true
          }), " → ", (0,jsx_runtime.jsx)(Image, {
            src: "/img/common/ico-info.svg",
            ico: true,
            alone: true
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_109",
            product: "dev"
          }), ". Verifique el uso de los registros de eventos e imágenes del dispositivo."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bs3m-event-log-usage.png"
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