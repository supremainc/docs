"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["88392"], {
73091: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_api_authentication_mdx_05e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-api-authentication-mdx-05e.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_api_authentication_mdx_05e_namespaceObject = JSON.parse('{"id":"platform/biostar_air/api-authentication","title":"Autenticación de la API","description":"Este artículo explica el flujo de autenticación de la API de BioStar Air Cloud, enumera las URL base de la API, describe cómo obtener tokens Bearer y muestra cómo obtener un token desde un navegador.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/api-authentication.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/api-authentication","permalink":"/docs/es/platform/biostar_air/api-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/api-authentication.mdx","tags":[],"version":"current","frontMatter":{"id":"api-authentication","title":"Autenticación de la API","description":"Este artículo explica el flujo de autenticación de la API de BioStar Air Cloud, enumera las URL base de la API, describe cómo obtener tokens Bearer y muestra cómo obtener un token desde un navegador.","keywords":["Autenticación de la API","Bearer token","URL base de la API","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Inicio rápido","permalink":"/docs/es/platform/biostar_air/integration-quickstart"},"next":{"title":"Uso de la API de gestión de usuarios","permalink":"/docs/es/platform/biostar_air/api-user-management"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/api-authentication.mdx


const frontMatter = {
	id: 'api-authentication',
	title: 'Autenticación de la API',
	description: 'Este artículo explica el flujo de autenticación de la API de BioStar Air Cloud, enumera las URL base de la API, describe cómo obtener tokens Bearer y muestra cómo obtener un token desde un navegador.',
	keywords: [
		'Autenticación de la API',
		'Bearer token',
		'URL base de la API',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "URLs base de la API",
  "id": "api-base-urls",
  "level": 2
}, {
  "value": "Flujo de inicio de sesión de la API",
  "id": "api-login-flow",
  "level": 2
}, {
  "value": "Iniciar sesión",
  "id": "login",
  "level": 3
}, {
  "value": "Obtener información de la cuenta",
  "id": "get-self-accounts",
  "level": 3
}, {
  "value": "Iniciar sesión en una cuenta",
  "id": "login-to-account",
  "level": 3
}, {
  "value": "Cómo obtener un token Bearer desde un navegador web",
  "id": "getYourBearerToken",
  "level": 2
}, {
  "value": "Chrome/Edge (Windows o Mac)",
  "id": "chrome-edge",
  "level": 3
}, {
  "value": "Safari (Mac)",
  "id": "safari",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Image, Kbd} = _components;
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "La API de BioStar Air Cloud utiliza autenticación basada en tokens Bearer (JWT). Debe obtener un token mediante el proceso de inicio de sesión antes de hacer llamadas a la API e incluirlo en el encabezado Authorization de cada solicitud."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-base-urls",
      children: "URLs base de la API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Entorno"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "URL base"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Demo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://demo-afs-api.airfob.com/v1/",
              children: "https://demo-afs-api.airfob.com/v1/"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Producción - Europa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://e-afs-api.airfob.com/v1/",
              children: "https://e-afs-api.airfob.com/v1/"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Producción - Corea"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://a-afs-api.airfob.com/v1/",
              children: "https://a-afs-api.airfob.com/v1/"
            }), " (para todos los clientes que no pertenezcan a la UE)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-login-flow",
      children: "Flujo de inicio de sesión de la API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Realice llamadas a la API con ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.postman.com/",
        children: "Postman"
      }), " o de forma programática."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "login",
      children: "Iniciar sesión"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Endpoint"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "login"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Payload"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-json",
            children: "{\n  \"username\": \"your_email\",\n  \"password\": \"your_password\"\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Devuelve un token Bearer (JWT)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-self-accounts",
      children: "Obtener información de la cuenta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Endpoint"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "getSelfAccounts"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Authorization"
          }), ": token Bearer"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Devuelve una lista de sitios y cuentas a los que puede acceder."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "login-to-account",
      children: "Iniciar sesión en una cuenta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Endpoint"
          }), ": ", (0,jsx_runtime.jsx)(_components.code, {
            children: "loginAccount"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Authorization"
          }), ": token Bearer"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Devuelve un token específico del sitio."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getYourBearerToken",
      children: "Cómo obtener un token Bearer desde un navegador web"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Puede obtener el token Bearer directamente desde el navegador usando las herramientas de desarrollo, sin necesidad de Postman."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chrome-edge",
      children: "Chrome/Edge (Windows o Mac)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En el navegador web, presione ", (0,jsx_runtime.jsx)(Kbd, {
            children: "F12"
          }), " o ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Ctrl/Cmd + Shift + I"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vaya a la pestaña ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Actualice la página."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Busque llamadas a la API."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["p. ej., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "groups"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "login"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic en la petición en la lista."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vaya a la pestaña ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Headers"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En los encabezados de la petición, busque ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Authorization: Bearer ..."
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic con el botón derecho en el token y cópielo."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-chrome-develope.png",
      alone: true
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safari",
      children: "Safari (Mac)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Active el menú ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Developer"
          }), ". En Safari, vaya a Preferences → Advanced y marque ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show Develop menu"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vaya a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Develop"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Show Web Inspector"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vaya a la pestaña ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Network"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Actualice la página."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Filtre e inspeccione las llamadas a la API."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Copie el token ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Authorization: Bearer"
          }), " de los encabezados de la petición."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Un token Bearer copiado del navegador puede reutilizarse en Postman. Use siempre el token Bearer más reciente."
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