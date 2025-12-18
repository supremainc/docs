"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["65118"], {
57337: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_user_mdx_f3d_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-ui-user-mdx-f3d.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_ui_user_mdx_f3d_namespaceObject = JSON.parse('{"id":"platform/biostar_x/ui-user","title":"Usuario","description":"Esta guía describe la interfaz de usuario de la página de usuario.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-user.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/ui-user","permalink":"/docs/es/platform/biostar_x/ui-user","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/ui-user.mdx","tags":[],"version":"current","frontMatter":{"id":"ui-user","title":"Usuario","description":"Esta guía describe la interfaz de usuario de la página de usuario.","keywords":["Usuario","IU"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Aprender la interfaz de usuario común","permalink":"/docs/es/platform/biostar_x/ui-common"},"next":{"title":"Monitorizar","permalink":"/docs/es/platform/biostar_x/ui-monitoring"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/ui-user.mdx


const frontMatter = {
	id: 'ui-user',
	title: 'Usuario',
	description: 'Esta guía describe la interfaz de usuario de la página de usuario.',
	keywords: [
		'Usuario',
		'IU'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Calloutlists, Cmd, Image} = _components;
  if (!Calloutlists) _missingMdxReference("Calloutlists", true);
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Image) _missingMdxReference("Image", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["El menú ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.sidebar.user"
      }), " de la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " permite una gestión eficiente de usuarios mediante varias funciones, como la administración de grupos de usuarios, la administración de usuarios y la consulta de usuarios por derechos de acceso, lo que mejora la seguridad mediante permisos. Los componentes de la IU de la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " son los siguientes:"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-ui-user.png",
      className: "none"
    }), "\n", (0,jsx_runtime.jsx)(Calloutlists, {
      children: (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Compruebe los grupos de usuarios o los grupos de acceso."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener más información sobre los grupos de usuarios, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "user-group-manage",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Para obtener más información sobre los grupos de acceso, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "view-user-by-access",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Vea los grupos de usuarios o grupos de acceso en formato de estructura de árbol. Expanda o contraiga la estructura de árbol y haga clic en cada grupo para verificar los usuarios que pertenecen a ese grupo."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Verifique la cantidad de usuarios en el grupo de usuarios seleccionado desde el menú lateral."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.selectAll"
            }), " para seleccionar todos los usuarios mostrados en la lista de usuarios. La cantidad de usuarios seleccionados aparece en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.selected"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Ingrese palabras clave para buscar usuarios. Para obtener más información sobre la búsqueda de usuarios, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "view-users#user-search",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en el botón de navegación de página ubicado en la parte superior derecha de la pantalla para ver las listas de usuarios siguiente o anterior. Especifique también la página a la que desea moverse. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "view-users#select-view-options",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(Image, {
              src: "/img/menus/ico-more-white.svg",
              ico: true,
              alone: true
            }), " para acceder a varias funciones relacionadas con los usuarios."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.export.title"
                }), ": Guarde la lista de usuarios en formato de archivo CSV o de datos. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "export-import-user-info",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.import.title"
                }), ": Importe listas de usuarios en formato de archivo CSV o de datos, o importe información de autenticación facial. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "export-import-user-info",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.transferToDevice"
                }), ": Función para enviar la información de usuarios registrados al dispositivo. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "transfer-user-info-to-device",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.faceMigration"
                }), ": Mejore el rendimiento de autenticación actualizando los rostros inscritos en versiones anteriores de ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "BioStar X"
                }), " con el algoritmo más reciente. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "migration-face",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.columnLayout"
                }), ": Cambie los elementos de encabezado de las columnas en la lista de usuarios. Para obtener más información al respecto, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "view-users#user-list-column-settings",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.menu.print"
                }), ": Imprima la lista de usuarios."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Utilice las funciones para el registro de usuarios y la modificación o eliminación por lotes."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.batchEdit"
                }), ": Modifique información o derechos de acceso para varios usuarios a la vez. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "edit-user#user-information-collective-modification",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "common.delete"
                }), ": Elimine los usuarios seleccionados. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "delete-user",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmd, {
                  sid: "team.user.newUser"
                }), ": Registre nuevos usuarios. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "add-user",
                  children: "lo siguiente"
                }), "."]
              }), "\n"]
            }), "\n"]
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