"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["72435"], {
79604: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_vionyx_maintenance_mdx_2c4_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-vionyx-maintenance-mdx-2c4.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_vionyx_maintenance_mdx_2c4_namespaceObject = JSON.parse('{"id":"device/vionyx/maintenance","title":"Mantenimiento y cuidado","description":"Esta guía explica cómo restablecer la cámara a la configuración de fábrica y cómo reemplazar el módulo desecante.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/vionyx/maintenance.mdx","sourceDirName":"device/vionyx","slug":"/device/vionyx/maintenance","permalink":"/docs/es/device/vionyx/maintenance","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/vionyx/maintenance.mdx","tags":[],"version":"current","frontMatter":{"id":"maintenance","title":"Mantenimiento y cuidado","description":"Esta guía explica cómo restablecer la cámara a la configuración de fábrica y cómo reemplazar el módulo desecante.","keywords":["keyword1","keyword2","keyword3"],"isTranslationMissing":false},"sidebar":"vionyx","previous":{"title":"Acceso y configuración del servidor web","permalink":"/docs/es/device/vionyx/web-server-settings"},"next":{"title":"Solución de Problemas","permalink":"/docs/es/device/vionyx/troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/vionyx/maintenance.mdx


const frontMatter = {
	id: 'maintenance',
	title: 'Mantenimiento y cuidado',
	description: 'Esta guía explica cómo restablecer la cámara a la configuración de fábrica y cómo reemplazar el módulo desecante.',
	keywords: [
		'keyword1',
		'keyword2',
		'keyword3'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Restablecimiento de fábrica",
  "id": "factory-reset",
  "level": 2
}, {
  "value": "Reemplazo del módulo desecante",
  "id": "reemplazo-del-módulo-desecante",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía explica cómo restablecer la cámara a la configuración de fábrica y cómo reemplazar el módulo desecante."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "factory-reset",
      children: "Restablecimiento de fábrica"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Elimina toda la información almacenada en la cámara y restablece toda la configuración."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Después de conectar la cámara a la corriente, localiza el botón de reinicio."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/factory-reset-vionyx.svg",
          className: "none",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mantén presionado el botón de reinicio durante al menos 5 segundos y luego suéltalo."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Al completarse el restablecimiento de fábrica, la cámara se reiniciará automáticamente."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Al realizar un restablecimiento de fábrica, se eliminarán todos los datos y la configuración del usuario, incluida la configuración de red."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "La dirección IP no cambia incluso después de un restablecimiento de fábrica."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reemplazo-del-módulo-desecante",
      children: "Reemplazo del módulo desecante"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La cámara incluye un módulo desecante para evitar la condensación de la lente. Para mantener la eficacia de la deshumidificación, recomendamos reemplazar el módulo desecante al menos 1 vez al año."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Comprueba la ubicación de montaje del módulo desecante."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Afloja el tornillo girándolo en sentido antihorario y retira el módulo desecante de la tapa."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/camera/change-silicagel-vionyx.png",
          className: "none",
          width: 600,
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Coloca el nuevo módulo desecante en la tapa y gira el tornillo en sentido horario para fijarlo."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Los intervalos de reemplazo pueden variar según el entorno de instalación."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Anota la fecha de reemplazo para llevar un control del siguiente."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los módulos desecantes de repuesto se pueden adquirir en el punto de venta donde adquiriste el producto."
          }), "\n"]
        }), "\n"]
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