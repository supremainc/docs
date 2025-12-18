"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["34063"], {
60537: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_plugins_troubleshooting_mdx_ef4_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-plugins-troubleshooting-mdx-ef4.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_plugins_troubleshooting_mdx_ef4_namespaceObject = JSON.parse('{"id":"platform/plugins/troubleshooting","title":"Solución de problemas","description":"Proporciona soluciones para problemas que puedan ocurrir durante el desarrollo, registro y operación del complemento BioStar X.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/plugins/troubleshooting.mdx","sourceDirName":"platform/plugins","slug":"/platform/plugins/troubleshooting","permalink":"/docs/es/platform/plugins/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/plugins/troubleshooting.mdx","tags":[],"version":"current","frontMatter":{"id":"troubleshooting","title":"Solución de problemas","description":"Proporciona soluciones para problemas que puedan ocurrir durante el desarrollo, registro y operación del complemento BioStar X.","keywords":["Solución de problemas","Depuración","Solución de problemas"],"isTranslationMissing":false},"sidebar":"bsxplugins","previous":{"title":"Registro y administración","permalink":"/docs/es/platform/plugins/registration-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/plugins/troubleshooting.mdx


const frontMatter = {
	id: 'troubleshooting',
	title: 'Solución de problemas',
	description: 'Proporciona soluciones para problemas que puedan ocurrir durante el desarrollo, registro y operación del complemento BioStar X.',
	keywords: [
		'Solución de problemas',
		'Depuración',
		'Solución de problemas'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Error de registro del complemento",
  "id": "error-de-registro-del-complemento",
  "level": 2
}, {
  "value": "Error del callback de autenticación",
  "id": "error-del-callback-de-autenticación",
  "level": 2
}, {
  "value": "Error de descifrado",
  "id": "error-de-descifrado",
  "level": 2
}, {
  "value": "Consejos de depuración",
  "id": "consejos-de-depuración",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Badge, Cmd} = _components;
  if (!Badge) _missingMdxReference("Badge", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Proporciona soluciones para problemas que puedan ocurrir durante el desarrollo, registro y operación del complemento ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "error-de-registro-del-complemento",
      children: "Error de registro del complemento"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verifica que el servidor esté en funcionamiento antes de registrar el complemento."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Asegúrate de que el endpoint ", (0,jsx_runtime.jsx)(Badge, {
            className: "get",
            children: "GET"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/bsx"
          }), " responda correctamente. Prueba con el comando ", (0,jsx_runtime.jsx)(_components.code, {
            children: "curl"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "curl -H \"X-BioStar-Ping: test123\" http://localhost:8000/bsx\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verifica si el servidor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " puede acceder a la URL del servidor del complemento."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "error-del-callback-de-autenticación",
      children: "Error del callback de autenticación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verifica que el archivo de certificado exista y sea válido."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verifica la dirección y el puerto del servidor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            children: "SERVICE SETTINGS"
          }), " del ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X Service Manager"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verifica que la red entre el servidor del complemento y el servidor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " esté conectada."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "error-de-descifrado",
      children: "Error de descifrado"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Verifica la generación de la clave AES y el proceso de cifrado."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Asegúrate de que el IV se derive de la misma clave."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consejos-de-depuración",
      children: "Consejos de depuración"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Habilita el registro para revisar los detalles de las solicitudes y respuestas."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prueba los endpoints individualmente antes de la integración completa."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Simula solicitudes al servidor ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " usando el comando ", (0,jsx_runtime.jsx)(_components.code, {
            children: "curl"
          }), "."]
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