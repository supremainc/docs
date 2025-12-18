"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["84662"], {
2837: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_edit_user_mdx_20f_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-edit-user-mdx-20f.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_edit_user_mdx_20f_namespaceObject = JSON.parse('{"id":"platform/biostar_x/edit-user","title":"Editar Información Del Usuario","description":"Guía el proceso de modificar la información de usuarios individuales o múltiples y cambiar los permisos de acceso.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/edit-user.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/edit-user","permalink":"/docs/es/platform/biostar_x/edit-user","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/edit-user.mdx","tags":[],"version":"current","frontMatter":{"id":"edit-user","title":"Editar Información Del Usuario","description":"Guía el proceso de modificar la información de usuarios individuales o múltiples y cambiar los permisos de acceso.","keywords":["Usuario","Grupo usuario"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Administrar Usuarios","permalink":"/docs/es/platform/biostar_x/user-manage"},"next":{"title":"Borrar Usuario","permalink":"/docs/es/platform/biostar_x/delete-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/edit-user.mdx


const frontMatter = {
	id: 'edit-user',
	title: 'Editar Información Del Usuario',
	description: 'Guía el proceso de modificar la información de usuarios individuales o múltiples y cambiar los permisos de acceso.',
	keywords: [
		'Usuario',
		'Grupo usuario'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Editar información del usuario",
  "id": "user-information-modification",
  "level": 2
}, {
  "value": "Editar información de usuario por lotes",
  "id": "user-information-collective-modification",
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
  }, {Cmd, IcClose, IcEdit, Image, NextItem, NextStep} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcClose) _missingMdxReference("IcClose", true);
  if (!IcEdit) _missingMdxReference("IcEdit", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!NextItem) _missingMdxReference("NextItem", true);
  if (!NextStep) _missingMdxReference("NextStep", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Guía cómo modificar la información de usuarios registrados. Modifica la información básica, los permisos de acceso o las credenciales de usuarios individuales o edita en lote la información de varios usuarios."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Un usuario con el ID original ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1"
        }), " no puede ser modificado por otros administradores. Solo el usuario que ha iniciado sesión en esta cuenta puede modificar su propia información."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-information-modification",
      children: "Editar información del usuario"
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
          children: "Selecciona al usuario que deseas editar de la lista de usuarios."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz doble clic en el usuario o haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.preview.button.seeMore"
          }), " cuando la información del perfil del usuario aparezca en el lado derecho de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Aparece una ventana para editar la información del usuario."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-edit-user-screen.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Modifique los elementos deseados."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(IcEdit, {}), " para modificar elementos de credenciales y en el botón ", (0,jsx_runtime.jsx)(IcClose, {}), " para eliminarlos."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-edit-user-credentials.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " en la esquina superior derecha de la pantalla para guardar los cambios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información sobre cada campo en la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.information"
            }), ", consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "add-user-basic-info",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información sobre cada campo en la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.credential.title"
            }), ", consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "enroll-credential",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener información sobre cada campo en la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.permission.title"
            }), ", consulta ", (0,jsx_runtime.jsx)(_components.a, {
              href: "set-permission",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Ingresa el mensaje personal del usuario en la sección ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.advanced",
              product: "2"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-information-collective-modification",
      children: "Editar información de usuario por lotes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Edita la información o los permisos de acceso de varios usuarios a la vez. Esta función es útil al establecer los mismos permisos de acceso o grupos para varios usuarios."
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
          children: "Haz clic en la casilla a la izquierda del usuario que deseas editar en la lista de usuarios. Selecciona dos o más usuarios."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.batchEdit"
          }), " en la esquina superior derecha de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-batch-edit-users.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.batchEdit"
          }), ", marca la casilla del elemento deseado y realiza las modificaciones."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-edit-user-batch-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.save"
          }), " en la esquina superior derecha de la pantalla para guardar la información editada."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El ID, nombre, correo electrónico, número de teléfono y credenciales del usuario no se pueden editar por lotes."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haz clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.cancel"
            }), " en la esquina superior derecha de la pantalla para cancelar la información editada."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(NextStep, {
      children: [(0,jsx_runtime.jsx)(NextItem, {
        to: "enroll-credential",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Enrola las credenciales del usuario y establece el método de autenticación de acceso."
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "set-permission",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Consulta cómo establecer los permisos de acceso del usuario."
        })
      }), (0,jsx_runtime.jsx)(NextItem, {
        to: "transfer-user-info-to-device",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Si cambiaste la información del usuario, envíala al dispositivo. Consulta cómo enviar la información del usuario al dispositivo."
        })
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