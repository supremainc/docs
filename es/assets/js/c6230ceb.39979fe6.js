"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["79904"], {
33245: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_visitor_register_mdx_c62_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-visitor-register-mdx-c62.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_visitor_register_mdx_c62_namespaceObject = JSON.parse('{"id":"platform/biostar_x/visitor-register","title":"Solicitar visita","description":"Esta guía explica cómo los visitantes solicitan la entrada mediante la PC de solicitud de visitas.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/visitor-register.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/visitor-register","permalink":"/docs/es/platform/biostar_x/visitor-register","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/visitor-register.mdx","tags":[],"version":"current","frontMatter":{"id":"visitor-register","title":"Solicitar visita","description":"Esta guía explica cómo los visitantes solicitan la entrada mediante la PC de solicitud de visitas.","keywords":["Solicitud de visita"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Administrar visitantes","permalink":"/docs/es/platform/biostar_x/visitor"},"next":{"title":"Administrar visitantes","permalink":"/docs/es/platform/biostar_x/visitor-register-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/visitor-register.mdx


const frontMatter = {
	id: 'visitor-register',
	title: 'Solicitar visita',
	description: 'Esta guía explica cómo los visitantes solicitan la entrada mediante la PC de solicitud de visitas.',
	keywords: [
		'Solicitud de visita'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Nueva solicitud de visita",
  "id": "nueva-solicitud-de-visita",
  "level": 2
}, {
  "value": "Solicitar usando información existente",
  "id": "solicitar-usando-información-existente",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía explica cómo los visitantes externos que no son usuarios internos solicitan la entrada mediante la PC de solicitud de visitas."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La PC de solicitud de visitas debe configurarse por separado y la configuración de visitantes debe realizarse previamente. Para más información sobre cómo configurar los ajustes de visitantes, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si no hay un icono de acceso directo para la página de solicitud de visitas en la PC de solicitud de visitas, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-pc-link",
              children: "lo siguiente"
            }), " para crear un icono de acceso directo."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nueva-solicitud-de-visita",
      children: "Nueva solicitud de visita"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía explica cómo los visitantes que vienen por primera vez solicitan la entrada mediante la PC de solicitud de visitas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Abra la página de solicitud de visitas en la PC de solicitud de visitas. La dirección URL de la página de solicitud de visitas tiene el formato ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://{biostar_x_server_ip}/#/register-welcome"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-welcome.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.welcome.first.time",
            product: "2"
          }), " en el centro de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de aceptar los términos y la política de privacidad relacionados con el acceso al departamento visitado, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " en la esquina inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ingrese la información requerida para la solicitud de visita."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-info.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.visitor",
                product: "2"
              }), ": Ingrese el nombre y el número de teléfono del visitante."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.host",
                product: "2"
              }), ": Ingrese el nombre y el número de teléfono de la persona responsable en el destino de la visita."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.accessInfo",
                product: "2"
              }), ": Configure el área de acceso y la duración de la visita."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de ingresar la información, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " en la esquina inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configure el medio de entrada."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-access-credential.png"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.fingerPrint",
                product: "2"
              }), ": Para usar autenticación por huella digital, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "button.addFingerprint",
                product: "2"
              }), " y luego registre su huella."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "common.card",
                product: "2"
              }), ": Para usar autenticación mediante tarjeta, configúrela con ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "visitor.request",
                product: "2"
              }), " y reciba una tarjeta del administrador."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de completar la configuración, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " en la esquina inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de confirmar toda la información proporcionada, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.register",
            product: "2"
          }), " en la esquina inferior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-complete.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para más información sobre cómo redactar los términos y las políticas de privacidad relacionadas con el acceso al departamento visitado, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-terms",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El nombre puede tener hasta 48 caracteres."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para agregar campos personalizados a la información del visitante, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-custom-field",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Solo se pueden seleccionar los grupos de acceso asignados al departamento visitado para la PC de visitas. Para más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-visitor#settings-visitor-site",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para más información sobre los grupos de acceso, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-access-control-manage-access-group",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para volver al paso anterior y modificar la información de la visita, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.previousPage",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Para escanear huellas digitales, se debe conectar un dispositivo de registro de huellas digitales a la PC de solicitud de visitas."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solicitar-usando-información-existente",
      children: "Solicitar usando información existente"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si una huella digital está registrada en el lugar de la visita, puede buscar la huella y solicitar una visita usando la información de visita existente."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Abra la página de solicitud de visitas en la PC de solicitud de visitas. La dirección URL de la página de solicitud de visitas tiene el formato ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://{biostar_x_server_ip}/#/register-welcome"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-welcome.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "visitor.welcome.search",
            product: "2"
          }), " debajo del ícono de huella digital en el centro de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Escanee su huella digital en el dispositivo de escaneo de huellas digitales. Use la huella digital escaneada para buscar usuarios registrados."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Si la huella digital coincide con un visitante registrado previamente, aparecerá un mensaje de confirmación."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-confirm-message.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Si el visitante encontrado es correcto, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.yes",
            product: "2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de aceptar los términos y la política de privacidad relacionados con el acceso al departamento visitado, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " en la esquina inferior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Confirme la información de la visita establecida durante la visita anterior. Para modificar la información existente, edite cada elemento y luego haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " en la esquina inferior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-saved-info.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Confirme el medio de entrada establecido durante la visita anterior. Para cambiar el medio de entrada existente, edite el elemento que desea cambiar y luego haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.nextPage",
            product: "2"
          }), " en la esquina inferior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-saved-access-credential.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Después de confirmar toda la información proporcionada, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "button.register",
            product: "2"
          }), " en la esquina inferior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-visitor-register-complete.png"
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