"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["45196"], {
69055: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_initial_setup_mdx_07c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-corestation-setup-manager-initial-setup-mdx-07c.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_corestation_setup_manager_initial_setup_mdx_07c_namespaceObject = JSON.parse('{"id":"device/corestation_setup_manager/initial-setup","title":"Configuración inicial del dispositivo","description":"Guía para los procedimientos iniciales de uso de CoreStation Setup Manager.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/initial-setup.mdx","sourceDirName":"device/corestation_setup_manager","slug":"/device/corestation_setup_manager/initial-setup","permalink":"/docs/es/device/corestation_setup_manager/initial-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/corestation_setup_manager/initial-setup.mdx","tags":[],"version":"current","frontMatter":{"id":"initial-setup","title":"Configuración inicial del dispositivo","description":"Guía para los procedimientos iniciales de uso de CoreStation Setup Manager.","keywords":["CoreStation","Configuración inicial","Instalación del certificado","Registro de administrador"],"isTranslationMissing":false},"sidebar":"corestation_setup_manager","previous":{"title":"Primeros pasos","permalink":"/docs/es/device/corestation_setup_manager/getting-started"},"next":{"title":"Configuración del dispositivo","permalink":"/docs/es/device/corestation_setup_manager/configuration"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/corestation_setup_manager/initial-setup.mdx


const frontMatter = {
	id: 'initial-setup',
	title: 'Configuración inicial del dispositivo',
	description: 'Guía para los procedimientos iniciales de uso de CoreStation Setup Manager.',
	keywords: [
		'CoreStation',
		'Configuración inicial',
		'Instalación del certificado',
		'Registro de administrador'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
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
  }, {Image} = _components;
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "CoreStation Setup Manager proporciona un servicio basado en la web. Por lo tanto, después de completar el cableado para construir un sistema de control de acceso centralizado con CoreStation, puede acceder a CoreStation Setup Manager desde cualquier ubicación mediante un navegador web y verificar el estado de conexión de CoreStation."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Si utiliza CoreStation Setup Manager por primera vez, conecte CoreStation y continúe con la configuración inicial."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Complete la conexión de cables a CoreStation."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Inicie el navegador web."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Utilice Chrome versión 75 o superior."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese la dirección IP predeterminada ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://169.254.0.1:3001"
          }), " en el campo de dirección del navegador web."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Download https certification"
          }), " en la pantalla de inicio de sesión. Al acceder a CoreStation Setup Manager por primera vez, debe instalar el certificado para usar HTTPS correctamente."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/initial-main.png",
          width: "80%",
          alone: true
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ejecute el archivo ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "cs_client.crt"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Open File"
          }), " - ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Security Warning"
          }), ", haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Open"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la ventana ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Certificate details"
          }), ", haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install Certificate…"
          }), ". Se iniciará el ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Certificate Import Wizard"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), " para continuar."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione el almacén de certificados y luego haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Next"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Finish"
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ingrese su ID de usuario y la contraseña de inicio de sesión. El ID de usuario y la contraseña de inicio de sesión para el primer acceso son 'admin'."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Para registrar la cuenta de administrador, configure cada elemento y haga clic en ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/initial-setup-new-user.png",
          alone: true
        }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Nombre"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Descripción de la función"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "ID"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["El ID se establece automáticamente en ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "0"
                }), " y no puede cambiarse."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Nombre"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Ingrese el nombre del administrador.", (0,jsx_runtime.jsx)("br", {}), "- Se puede ingresar un nombre de hasta 48 caracteres."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Operator Level"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["El Operator Level se establece automáticamente en ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Administrator"
                }), " y no puede cambiarse."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Login ID"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Ingrese el Login ID.", (0,jsx_runtime.jsx)("br", {}), "- El Login ID puede tener hasta 32 caracteres."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Password"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Ingrese la contraseña de inicio de sesión.", (0,jsx_runtime.jsx)("br", {}), "- La contraseña debe combinar caracteres alfanuméricos y símbolos, y tener entre 7 y 32 caracteres."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Confirmar Contraseña"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Ingrese nuevamente la contraseña para confirmarla."
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Será redirigido a la pantalla de inicio de sesión. Inicie sesión con la cuenta de administrador registrada."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La cuenta de administrador solo puede configurarse al acceder a CoreStation Setup Manager por primera vez y solo puede designarse un usuario. Una vez completado el registro, el ID de usuario y la contraseña predeterminados utilizados durante el primer acceso ya no podrán usarse. Además, la cuenta de administrador puede revisar y editar todas las configuraciones, incluida la inicialización de fábrica."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["A partir de la versión 1.01 de CoreStation Setup Manager, el nombre del grado de administrador ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level 1"
            }), " se cambió a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Administrator"
            }), ", y las cuentas de administrador ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level 2"
            }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Level 3"
            }), " ya no son compatibles."]
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