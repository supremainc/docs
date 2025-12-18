"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["30875"], {
79804: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_device_biolite_n_2_user_mdx_9f5_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-device-biolite-n-2-user-mdx-9f5.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_device_biolite_n_2_user_mdx_9f5_namespaceObject = JSON.parse('{"id":"device/biolite_n2/user","title":"Usuario","description":"Describe cómo registrar, editar, eliminar y gestionar usuarios.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/device/biolite_n2/user.mdx","sourceDirName":"device/biolite_n2","slug":"/device/biolite_n2/user","permalink":"/docs/es/device/biolite_n2/user","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/device/biolite_n2/user.mdx","tags":[],"version":"current","frontMatter":{"id":"user","title":"Usuario","description":"Describe cómo registrar, editar, eliminar y gestionar usuarios.","keywords":["Enrolamiento","Editar","Borrar","Gestionar"],"isTranslationMissing":false},"sidebar":"bioliten2","previous":{"title":"Menú De Administrador","permalink":"/docs/es/device/biolite_n2/admin-menu"},"next":{"title":"Autenticación","permalink":"/docs/es/device/biolite_n2/authentication"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/device/biolite_n2/user.mdx


const frontMatter = {
	id: 'user',
	title: 'Usuario',
	description: 'Describe cómo registrar, editar, eliminar y gestionar usuarios.',
	keywords: [
		'Enrolamiento',
		'Editar',
		'Borrar',
		'Gestionar'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Registrar información de usuario",
  "id": "registering-user-information",
  "level": 2
}, {
  "value": "Modificar información de usuario",
  "id": "modificar-información-de-usuario",
  "level": 2
}, {
  "value": "Eliminar todos los usuarios",
  "id": "eliminar-todos-los-usuarios",
  "level": 2
}, {
  "value": "Ver uso de usuarios",
  "id": "ver-uso-de-usuarios",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Image} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Describe cómo registrar, editar, eliminar y gestionar usuarios."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registering-user-information",
      children: "Registrar información de usuario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Registre información de usuario que incluya datos de autenticación biométrica."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), " y autentícate como administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_173",
            product: "dev"
          }), " y luego presione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-user-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione el elemento deseado y presione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "4"
          }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), " para configurarlo. Presione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " para registrar la información del usuario."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_020",
                product: "dev"
              }), ": Ingrese un número entre 1 y 4294967294 para registrar un ID de usuario. Si ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_168",
                product: "dev"
              }), " está configurado en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_237",
                product: "dev"
              }), ", puede usar una combinación de caracteres alfanuméricos y los símbolos ", (0,jsx_runtime.jsx)(_components.code, {
                children: "_"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "-"
              }), " como ID, con un máximo de 32 caracteres."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_253",
                product: "dev"
              }), ": Puede ingresar un nombre de usuario usando los botones numéricos y de función."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_312",
                product: "dev"
              }), ": Inscriba una huella digital para la autenticación del usuario. Después de escanear la huella digital del dedo que se va a inscribir, vuelva a escanear la huella del mismo dedo. Seleccione la huella digital que desea eliminar y presione ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "4"
              }), " para eliminarla, o presione ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "6"
              }), " para escanearla nuevamente. Para agregar más huellas digitales, seleccione ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_001",
                product: "dev"
              }), " y luego presione ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "6"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_322",
                product: "dev"
              }), ": Inscriba una tarjeta para la autenticación del usuario. Escanee la tarjeta que se asignará al usuario en la unidad de reconocimiento de tarjetas RF."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_040",
                product: "dev"
              }), ": Ingrese el PIN que desea usar. Después de ingresar el PIN deseado, ingréselo nuevamente para confirmación. Ingrese un número de entre 8 y 16 dígitos para evitar filtraciones."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_172",
                product: "dev"
              }), ": Seleccione los permisos que desea asignar al usuario."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
              type: "info",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: "Los menús disponibles varían según el nivel de usuario establecido."
              }), (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_273",
                      product: "dev"
                    }), ": Este es un nivel de usuario regular y no puede acceder al menú."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_300",
                      product: "dev"
                    }), ": Puede usar todos los menús."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_194",
                      product: "dev"
                    }), ": Puede usar los menús ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_256",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_366",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_280",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_344",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_255",
                      product: "dev"
                    }), "."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_171",
                      product: "dev"
                    }), ": Puede usar los menús ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_166",
                      product: "dev"
                    }), ", ", (0,jsx_runtime.jsx)(Cmd, {
                      sid: "ui_255",
                      product: "dev"
                    }), "."]
                  }), "\n"]
                }), "\n"]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_213",
                product: "dev"
              }), ": Configure la fecha de inicio de uso de la cuenta de usuario."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_129",
                product: "dev"
              }), ": Configure la fecha de finalización de uso de la cuenta de usuario."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_002",
                product: "dev"
              }), ": Puede establecer el nivel de seguridad para la autenticación 1:1."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_363",
                product: "dev"
              }), ": Puede seleccionar el número de huella digital que se utilizará como huella digital de amenaza. Debe inscribir al menos 2 huellas digitales para usar esta función."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "ui_064",
                product: "dev"
              }), ": Puede cambiar el método de autenticación para cada usuario."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modificar-información-de-usuario",
      children: "Modificar información de usuario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "El gestor de usuarios o el administrador pueden modificar la información de usuario registrada. Agregue la huella digital o la tarjeta del usuario y modifique el PIN y los permisos."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), " y autentícate como administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_170",
            product: "dev"
          }), " y luego presione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione los términos de búsqueda. Puede buscar usuarios usando ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_137",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_020",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_253",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_312",
            product: "dev"
          }), ", ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_322",
            product: "dev"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/device/bln2-user-search.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione al usuario que desea modificar y luego presione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), ". Consulte ", (0,jsx_runtime.jsx)(_components.a, {
            href: "#registering-user-information",
            children: "Registrar información de usuario"
          }), " para modificar la información."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Para eliminar un usuario, seleccione ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            }), " y luego presione ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OK"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "ui_320",
          product: "dev"
        }), " se puede registrar en BioStar X. Para obtener más información sobre el registro de grupos de acceso, consulte la ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../platform/biostar_x/settings-access-control-manage-access-group#addAccessGroup",
          children: "Guía del administrador de BioStar X"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "eliminar-todos-los-usuarios",
      children: "Eliminar todos los usuarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Elimine todos los usuarios registrados a la vez."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), " y autentícate como administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_302",
            product: "dev"
          }), " y luego presione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Presione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OK"
          }), " para eliminar a todos los usuarios registrados."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ver-uso-de-usuarios",
      children: "Ver uso de usuarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vea de un vistazo la cantidad de usuarios, huellas digitales y tarjetas inscritas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pulsa ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESC"
          }), " y autentícate como administrador."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_166",
            product: "dev"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "ui_175",
            product: "dev"
          }), " y luego presione ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "6"
          }), ". La información de uso de usuarios aparece."]
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