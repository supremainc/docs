"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["35299"], {
54368: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_login_with_mfa_mdx_b5a_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-login-with-mfa-mdx-b5a.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_login_with_mfa_mdx_b5a_namespaceObject = JSON.parse('{"id":"platform/biostar_x/login-with-mfa","title":"Iniciar sesión con autenticación multifactor","description":"Usar la autenticación multifactor al iniciar sesión en **BioStar X** puede mejorar la seguridad de su cuenta.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/login-with-mfa.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/login-with-mfa","permalink":"/docs/es/platform/biostar_x/login-with-mfa","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/login-with-mfa.mdx","tags":[],"version":"current","frontMatter":{"id":"login-with-mfa","title":"Iniciar sesión con autenticación multifactor","description":"Usar la autenticación multifactor al iniciar sesión en **BioStar X** puede mejorar la seguridad de su cuenta.","keywords":["Iniciar sesión","MFA","Autenticación de múltiples factores","Autenticación multifactor"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Administrar grupos de acceso","permalink":"/docs/es/platform/biostar_x/view-user-by-access"},"next":{"title":"Inscribir rostros por lotes","permalink":"/docs/es/platform/biostar_x/batch-import-face"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/login-with-mfa.mdx


const frontMatter = {
	id: 'login-with-mfa',
	title: 'Iniciar sesión con autenticación multifactor',
	description: 'Usar la autenticación multifactor al iniciar sesión en **BioStar X** puede mejorar la seguridad de su cuenta.',
	keywords: [
		'Iniciar sesión',
		'MFA',
		'Autenticación de múltiples factores',
		'Autenticación multifactor'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Configuración de autenticación multifactor",
  "id": "multifactorauthenticationsetting",
  "level": 2
}, {
  "value": "Configuración masiva de autenticación multifactor",
  "id": "multifactorauthenticationbatchset",
  "level": 2
}, {
  "value": "Iniciar sesión con autenticación multifactor",
  "id": "loginwithmultifactorauthentication",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
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
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use la función ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Autenticación multifactor"
      }), " para mejorar la seguridad al iniciar sesión en ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BioStar X"
      }), ". Al habilitar ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.multiFactorAuth"
      }), " se añade un paso de autenticación por huella digital mediante un lector de huellas a la combinación de ID de usuario y contraseña."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los usuarios que deseen utilizar la función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " deben registrar su huella digital y configurar su nombre de usuario, contraseña y nivel de operador."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para usar la función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), ", debe conectarse al PC cliente de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " un lector de huellas que admita inicio de sesión con autenticación multifactor. Consulte la siguiente lista para ver los dispositivos compatibles con el lector de huellas."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioMini"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioMini Plus 2"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "BioMini Slim 2"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si utiliza la cuenta ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings.activeDirectory.title",
              product: "2",
              className: "normal"
            }), " con la opción ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "biostar.login",
              product: "2"
            }), ", no podrá usar la función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los administradores que configuren ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), " no podrán autenticarse en los servicios de ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BioStar X"
            }), " (gestión de asistencia y video) distintos al control de acceso. Para usar el servicio, inicie sesión después de desactivar el ajuste ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), ". Luego puede volver a activar el ajuste ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.multiFactorAuth"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Después de configurar la función de autenticación multifactor para la cuenta de administrador principal (ID 1), tenga en cuenta que no podrá iniciar sesión con esa cuenta si la autenticación por huella digital deja de estar disponible."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si el inicio de sesión se vuelve imposible debido a problemas con la huella digital, comuníquese con ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://support.supremainc.com",
              children: "Suprema Technical Support"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multifactorauthenticationsetting",
      children: "Configuración de autenticación multifactor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Siga los pasos a continuación para configurar ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.multiFactorAuth"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga doble clic en el usuario al que desea configurar ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.multiFactorAuth"
          }), " en la lista de usuarios."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Como alternativa, seleccione un usuario y haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.preview.button.seeMore"
          }), " en el perfil que se muestra en la pantalla derecha."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la pantalla de vista previa del usuario, establezca el elemento ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.fingerprintLogin",
            product: "2"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use"
          }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.title"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-edit-user-mfa-use.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configuración de autenticación multifactor completada."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multifactorauthenticationbatchset",
      children: "Configuración masiva de autenticación multifactor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Antes de comenzar"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Para usar la función de inicio de sesión con autenticación multifactor, debe cumplir las siguientes condiciones."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El usuario debe tener registrada la autenticación por huella digital."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Se deben configurar ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.userTemplate.table.operator"
            }), ", ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user.loginId",
              product: "2"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.password",
              product: "2"
            }), ". Consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "set-permission",
              children: "lo siguiente"
            }), " para obtener más información."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede usar la función de edición masiva para aplicar ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.permission.multiFactorAuth"
      }), " a varios usuarios."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.user"
          }), " en la página ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "shell.header.launcher"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "En la lista de usuarios, marque la casilla a la izquierda del usuario al que desea configurar la autenticación multifactor."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.batchEdit"
          }), " en la esquina superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana de edición masiva, marque la casilla de la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.fingerprintLogin",
            product: "2"
          }), " en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.permission.title"
          }), " y establézcala en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.use"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-batch-edit-user-mfa-use.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configuración de autenticación multifactor completada para varios usuarios seleccionados."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Los usuarios seleccionados que no cumplan con las condiciones necesarias para activar la función ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "common.fingerprintLogin",
          product: "2"
        }), " se pueden verificar mediante el mensaje emergente de ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "user.batchedit.popup.notavailableuser",
          product: "2"
        }), ". Verifique las condiciones requeridas para la configuración e inténtelo de nuevo."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "loginwithmultifactorauthentication",
      children: "Iniciar sesión con autenticación multifactor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Acceda a la pantalla de inicio de sesión de ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "BioStar X"
          }), " mediante un navegador web."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Introduzca su ID de usuario y contraseña, y luego haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "auth.login"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cuando aparezca la pantalla de ingreso de huella, escanee su huella digital con el lector de huellas."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-mfa-login-scan-fingerprint.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inicio de sesión completado."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El tiempo límite de escaneo está fijado en 18 segundos y no se puede cambiar."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El escaneo de huella digital se puede intentar hasta tres veces consecutivas. Si la huella digital no se escanea correctamente dentro de estos tres intentos, la autenticación fallará."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Si la autenticación falla, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "button.retry",
              product: "2"
            }), " para volver a intentar la autenticación por huella digital. Se permiten hasta dos intentos de reintento. Si la autenticación falla después de los intentos de reintento, el proceso volverá al paso de inicio de sesión con ID y contraseña."]
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