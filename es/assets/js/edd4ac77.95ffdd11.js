"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["41347"], {
94850: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_biometric_readers_and_credentials_mdx_edd_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-biometric-readers-and-credentials-mdx-edd.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_biometric_readers_and_credentials_mdx_edd_namespaceObject = JSON.parse('{"id":"platform/biostar_air/biometric-readers-and-credentials","title":"Lectores y credenciales biométricos","description":"Aprende a registrar y configurar dispositivos biométricos en BioStar Air, a inscribir credenciales de autenticación facial y a configurar la autenticación de uno o dos factores para BioStation 3 y BioEntry W3.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/biometric-readers-and-credentials.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/biometric-readers-and-credentials","permalink":"/docs/es/platform/biostar_air/biometric-readers-and-credentials","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/biometric-readers-and-credentials.mdx","tags":[],"version":"current","frontMatter":{"id":"biometric-readers-and-credentials","title":"Lectores y credenciales biométricos","description":"Aprende a registrar y configurar dispositivos biométricos en BioStar Air, a inscribir credenciales de autenticación facial y a configurar la autenticación de uno o dos factores para BioStation 3 y BioEntry W3.","keywords":["lectores biométricos","credenciales","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Actualización de firmware","permalink":"/docs/es/platform/biostar_air/how-to-upgrade-firmware"},"next":{"title":"Puertas","permalink":"/docs/es/platform/biostar_air/manage-door"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/biometric-readers-and-credentials.mdx


const frontMatter = {
	id: 'biometric-readers-and-credentials',
	title: 'Lectores y credenciales biométricos',
	description: 'Aprende a registrar y configurar dispositivos biométricos en BioStar Air, a inscribir credenciales de autenticación facial y a configurar la autenticación de uno o dos factores para BioStation 3 y BioEntry W3.',
	keywords: [
		'lectores biométricos',
		'credenciales',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Antes de Comenzar",
  "id": "antes-de-comenzar",
  "level": 2
}, {
  "value": "Instrucciones paso a paso",
  "id": "step-by-step-instructions",
  "level": 2
}, {
  "value": "Registrar dispositivo biométrico",
  "id": "registerBiometricReader",
  "level": 3
}, {
  "value": "Configurar el lector",
  "id": "configureDevice",
  "level": 3
}, {
  "value": "Registrar rostros de usuario",
  "id": "add-or-edit-user-and-enroll-face",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAdd, IcAirEdit, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "BioStar Air ahora es compatible con lectores y credenciales biométricos para mejorar el control de acceso. Registra y configura dispositivos biométricos compatibles, como BioStation 3 (BS3) y BioEntry W3 (W3), para autenticar a los usuarios mediante reconocimiento facial. La función admite la autenticación de uno o dos factores, lo que aumenta la flexibilidad y la seguridad."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Registrar lectores"
          }), ": Usa la app móvil de BioStar Air para registrar lectores biométricos."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configuración del dispositivo"
          }), ": Ve al ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "BioStar Air Portal"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " para configurar la autenticación facial del dispositivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Configuración de la credencial facial"
          }), ": Ve al ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://admin.biostarair.com",
            children: "BioStar Air Portal"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " para agregar o editar usuarios. Activa la credencial facial en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "credential_detail",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "antes-de-comenzar",
      children: "Antes de Comenzar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Debe instalarse un firmware compatible con BioStar Air para que el lector biométrico funcione correctamente."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Se pueden usar hasta dos plantillas faciales por usuario."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Para una configuración avanzada, consulta la guía del usuario de BioEntry W3 o BioStation 3."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Registra al menos dos credenciales para usar la autenticación de dos factores. Por ejemplo, registra tanto la credencial de tarjeta RF como la credencial facial."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-by-step-instructions",
      children: "Instrucciones paso a paso"
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "registerBiometricReader",
          children: "Registrar dispositivo biométrico"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Verifica que el firmware compatible con BioStar Air esté instalado en el BioEntry W3 o BioStation 3. Los modelos cuyos nombres terminan con ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-AIR"
          }), " ya incluyen el firmware predeterminado suministrado por Suprema."]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Abre la app BioStar Air en el dispositivo móvil e inicia sesión con el ID y la contraseña de administrador. Registra el dispositivo de la misma manera que cualquier otro lector."
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre el registro de dispositivos, consulta ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/manage-device-with-app"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "configureDevice",
          children: "Configurar el lector"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Inicia sesión en el ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://admin.biostarair.com",
                children: "BioStar Air Portal"
              }), " con una cuenta de administrador."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_submenu",
                product: "air"
              }), " en la barra lateral izquierda."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Haz clic en el lector biométrico en la lista de dispositivos."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_edit_title",
                product: "air"
              }), ", ve a la sección ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication",
                product: "air"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-device-bs3-info-edit.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Configura ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication_txt1",
                product: "air"
              }), "."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Autenticación de un factor"
                  }), ": Autentica mediante tarjeta RF o reconocimiento facial."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Autenticación de dos factores"
                  }), ": Elimina el factor de tarjeta RF o el de autenticación facial y, a continuación, vuelve a inscribir ambos para activar la autenticación de dos factores. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "add_btn",
                    product: "air"
                  }), " y combina los métodos de autenticación que prefieras."]
                }), "\n", (0,jsx_runtime.jsx)(Image, {
                  src: "/img/air/bsair-device-two-fator-auth.png",
                  width: "30%"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Configura ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_authentication_auth_timeout",
                product: "air"
              }), ". Si la credencial no se autentica dentro del tiempo especificado, la autenticación fallará."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Configure las siguientes opciones en la sección ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "new_layout_nav_title_face",
                product: "air"
              }), "."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_7_title",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_2_title",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_3_title",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_4_title",
                  product: "air"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Configure opciones adicionales."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_7_text2",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_title",
                  product: "air"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "new_layout_device_bew3_block_8_1_text",
                  product: "air"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre los ajustes en la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "new_layout_nav_title_authentication",
              product: "air"
            }), ", consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/device-info-settings"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "add-or-edit-user-and-enroll-face",
          children: "Registrar rostros de usuario"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_submenu",
                product: "air"
              }), " en la barra lateral izquierda."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Abra la ventana para agregar un usuario nuevo o editar uno existente."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Agregar un nuevo usuario"
                  }), ": Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "add_user_btn",
                    product: "air"
                  }), " en la esquina superior derecha de la lista de usuarios."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Editar un usuario existente"
                  }), ": Seleccione el usuario en la lista y luego haga clic en ", (0,jsx_runtime.jsx)(IcAirEdit, {
                    title: "Edit"
                  }), "."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la ventana de información del usuario, vaya a la sección ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "credential_detail",
                product: "air"
              }), " y active la credencial ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "card_type_option5",
                product: "air"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-info-credential-face.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAdd, {}), " y agregue la plantilla facial."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-info-credential-face-add.png"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "select_file",
                    product: "air"
                  }), ": Seleccione un archivo de imagen almacenado localmente"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "register_on_device",
                    product: "air"
                  }), ": Utilice el lector biométrico conectado (BioEntry W3 o BioStation 3)"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "register_on_mobile",
                    product: "air"
                  }), ": Escanee el código QR enviado al dispositivo móvil del usuario y registre el rostro desde dicho dispositivo"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "Solo se pueden subir dos fotos de rostro por usuario. Por lo general, una es suficiente."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " para completar el registro facial."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cómo subir fotos de perfil de usuarios de forma masiva, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/adding-users-in-bulk#uploadProfileImages"
            }), "."]
          })
        })]
      })]
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