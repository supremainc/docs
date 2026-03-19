"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["49272"], {
81929: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_federated_sites_mdx_3dd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-federated-sites-mdx-3dd.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_federated_sites_mdx_3dd_namespaceObject = JSON.parse('{"id":"platform/biostar_air/federated-sites","title":"Administrar sitios federados","description":"Configure y administre sitios federados en BioStar Air para edificios con múltiples inquilinos y organizaciones con varias sucursales a través de un control centralizado.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/federated-sites.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/federated-sites","permalink":"/docs/es/platform/biostar_air/federated-sites","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/federated-sites.mdx","tags":[],"version":"current","frontMatter":{"id":"federated-sites","title":"Administrar sitios federados","description":"Configure y administre sitios federados en BioStar Air para edificios con múltiples inquilinos y organizaciones con varias sucursales a través de un control centralizado.","keywords":["federado","sitios","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Usa el Portal de Socios","permalink":"/docs/es/platform/biostar_air/biostar-air-partner-portal-detailed-use"},"next":{"title":"Instalar el hardware","permalink":"/docs/es/platform/biostar_air/hardware-setup"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/federated-sites.mdx


const frontMatter = {
	id: 'federated-sites',
	title: 'Administrar sitios federados',
	description: 'Configure y administre sitios federados en BioStar Air para edificios con múltiples inquilinos y organizaciones con varias sucursales a través de un control centralizado.',
	keywords: [
		'federado',
		'sitios',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "¿Qué es un sitio federado?",
  "id": "whatFederatedSites",
  "level": 2
}, {
  "value": "Edificio con múltiples inquilinos",
  "id": "edificio-con-múltiples-inquilinos",
  "level": 3
}, {
  "value": "Organización con múltiples sucursales",
  "id": "organización-con-múltiples-sucursales",
  "level": 3
}, {
  "value": "Configurar sitios federados",
  "id": "setFederatedSites",
  "level": 2
}, {
  "value": "Acceder al Portal de Socios",
  "id": "acceder-al-portal-de-socios",
  "level": 3
}, {
  "value": "Crear sitio primario",
  "id": "crear-sitio-primario",
  "level": 3
}, {
  "value": "Agregar subsitios",
  "id": "agregar-subsitios",
  "level": 3
}, {
  "value": "Consideraciones importantes",
  "id": "important-considerations",
  "level": 2
}, {
  "value": "Gestión de usuarios y dispositivos",
  "id": "user-and-reader-management",
  "level": 3
}, {
  "value": "Uso del sitio principal",
  "id": "primary-site-usage",
  "level": 3
}, {
  "value": "Facturación",
  "id": "billing",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
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
      children: ["BioStar Air ofrece ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sitios federados"
      }), ", que permiten a un sitio primario gestionar sin problemas múltiples subsitios. Esta función es ideal para edificios con varios inquilinos u organizaciones con múltiples sucursales y proporciona control centralizado mediante la gestión distribuida de accesos."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Al aprovechar la función de sitios federados de BioStar Air, los administradores gestionan eficazmente el acceso en entornos complejos y ofrecen una experiencia segura, escalable y optimizada para todas las partes interesadas."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "whatFederatedSites",
      children: "¿Qué es un sitio federado?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Los sitios federados"
      }), " admiten una estructura jerárquica en la que un ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sitio primario"
      }), " gestiona uno o más ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "subsitios"
      }), ". Un administrador del sitio primario—denominado ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "administrador de la federación"
      }), "—puede acceder y administrar directamente los subsitios desde la interfaz de BioStar Air."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los sitios federados son útiles en las siguientes situaciones."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edificio-con-múltiples-inquilinos",
      children: "Edificio con múltiples inquilinos"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Por ejemplo, en un edificio comercial donde cada piso está ocupado por una empresa diferente, configure el sistema de la siguiente manera."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cuenta maestra"
          }), " del edificio"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Subcuenta"
          }), " para cada empresa inquilina"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Esta configuración autoriza únicamente a los empleados que tienen acceso a un piso específico, lo que simplifica la gestión del edificio."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "organización-con-múltiples-sucursales",
      children: "Organización con múltiples sucursales"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Una empresa con oficinas en varias ubicaciones puede configurar el sistema de la siguiente manera."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Gestione la configuración global mediante una ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cuenta maestra"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cree una ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "subcuenta"
          }), " para cada sucursal"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Por ejemplo, una empresa con diez oficinas en todo el mundo puede utilizar una estructura federada para agilizar la gestión."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setFederatedSites",
      children: "Configurar sitios federados"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "acceder-al-portal-de-socios",
          children: "Acceder al Portal de Socios"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["URL: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://partner.biostarair.com",
            children: "https://partner.biostarair.com"
          })]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Solo socios e instaladores pueden usar el Portal de Socios de BioStar Air."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Los clientes finales deben ponerse en contacto con un instalador para configurar esta función."
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "crear-sitio-primario",
          children: "Crear sitio primario"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Inicia sesión en el ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://partner.biostarair.com",
                children: "Portal de Socios"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Crear sitio"
              }), " y, en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Perfil del sitio"
              }), ", selecciona ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Sitio federado"
              }), "."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Este paso ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "debe"
                  }), " realizarse al configurar el sitio por primera vez."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Un sitio estándar no puede convertirse en un sitio federado más adelante."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Agrega un administrador del sitio federado en la misma pantalla."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Un ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "administrador del sitio federado"
                  }), " agregado en el Portal de Socios puede acceder al sitio principal y a todos los subsitios."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Un ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "administrador general"
                  }), " agregado en BioStar Air solo puede administrar sitios individuales."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "agregar-subsitios",
          children: "Agregar subsitios"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Una vez que el sitio principal está configurado como sitio federado, la ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Lista de sitios"
              }), " muestra la opción para crear subsitios."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Crear subsitio"
              }), " y configúralo como cualquier otro sitio."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-considerations",
      children: "Consideraciones importantes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-and-reader-management",
      children: "Gestión de usuarios y dispositivos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agrega usuarios y dispositivos por separado a cada subsitio."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Un dispositivo solo puede registrarse en un sitio a la vez. Selecciona el sitio principal o un subsitio."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primary-site-usage",
      children: "Uso del sitio principal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ciertos clientes usan el sitio principal únicamente como punto de acceso para la gestión de subsitios y no registran usuarios ni dispositivos en el sitio principal."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ejemplo 1"
          }), ": Una empresa con tres sucursales configura un sitio principal sin dispositivos y crea un subsitio para cada sucursal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ejemplo 2"
          }), ": Una empresa con sede central y tres sucursales registra usuarios y dispositivos en la sede central (el sitio principal) y crea subsitios para las sucursales."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "billing",
      children: "Facturación"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "La facturación se calcula según el número de dispositivos registrados (lectores) por sitio."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "No hay costo adicional por crear un sitio principal sin dispositivos registrados."
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