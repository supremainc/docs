"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["85723"], {
50327: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_user_groups_mdx_f5e_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-user-groups-mdx-f5e.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_user_groups_mdx_f5e_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-user-groups","title":"Administrar Grupos de Usuarios","description":"Esta guía explica cómo crear, organizar y administrar grupos y subgrupos de usuarios para clasificar a los usuarios de manera eficiente y controlar el acceso en BioStar Air.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-user-groups.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-user-groups","permalink":"/docs/es/platform/biostar_air/managing-user-groups","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-user-groups.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-user-groups","title":"Administrar Grupos de Usuarios","description":"Esta guía explica cómo crear, organizar y administrar grupos y subgrupos de usuarios para clasificar a los usuarios de manera eficiente y controlar el acceso en BioStar Air.","keywords":["Gestión Usuarios","BioStar Air","Grupo usuario"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Agregar usuarios masivamente","permalink":"/docs/es/platform/biostar_air/adding-users-in-bulk"},"next":{"title":"Administrar plantillas de tarjeta","permalink":"/docs/es/platform/biostar_air/managing-card-templates"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-user-groups.mdx


const frontMatter = {
	id: 'managing-user-groups',
	title: 'Administrar Grupos de Usuarios',
	description: 'Esta guía explica cómo crear, organizar y administrar grupos y subgrupos de usuarios para clasificar a los usuarios de manera eficiente y controlar el acceso en BioStar Air.',
	keywords: [
		'Gestión Usuarios',
		'BioStar Air',
		'Grupo usuario'
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
  "value": "Composición del grupo de usuarios",
  "id": "composición-del-grupo-de-usuarios",
  "level": 3
}, {
  "value": "Configurar múltiples grupos de usuarios",
  "id": "configurar-múltiples-grupos-de-usuarios",
  "level": 3
}, {
  "value": "Crear grupo",
  "id": "creatingUserGroup",
  "level": 2
}, {
  "value": "Crear grupo de usuarios",
  "id": "crear-grupo-de-usuarios",
  "level": 3
}, {
  "value": "Crear subgrupo",
  "id": "creatingSubgroup",
  "level": 3
}, {
  "value": "Editar nombre del grupo",
  "id": "editGroupName",
  "level": 2
}, {
  "value": "Eliminar grupo",
  "id": "deleteGroup",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirEdit, IcAirRemove, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Utiliza los grupos de usuarios para clasificar y gestionar usuarios por departamento, rol, ubicación y más. Los grupos de usuarios de BioStar Air no son jerárquicos, por lo que un usuario puede pertenecer a varios grupos al mismo tiempo; esto te permite combinar libremente grupos de departamento, rol y ubicación. Los grupos te permiten administrar los niveles de acceso de forma centralizada y manejar de manera eficiente el filtrado de registros de eventos, la generación de informes y la asignación de dispositivos a zonas de reunión."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Consulta el siguiente video para ver la guía sobre cómo gestionar grupos de usuarios."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "sNxu5pQuOsI"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "antes-de-comenzar",
      children: "Antes de Comenzar"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "composición-del-grupo-de-usuarios",
      children: "Composición del grupo de usuarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Los grupos de usuarios no están organizados de forma jerárquica."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Los usuarios en un subgrupo ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "no"
          }), " aparecen automáticamente en el grupo principal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "El recuento total de usuarios del grupo principal no incluye a los miembros del subgrupo a menos que se los agregue manualmente."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Al seleccionar un subgrupo, se muestran únicamente los usuarios asignados a ese subgrupo."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configurar-múltiples-grupos-de-usuarios",
      children: "Configurar múltiples grupos de usuarios"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Los usuarios en BioStar Air pueden pertenecer a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "múltiples grupos de usuarios"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En BioStar 2, los grupos de usuarios normalmente estaban vinculados a un único departamento. BioStar Air los separa, lo que permite un uso más dinámico."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Filtra la lista de usuarios por grupo para administrar rápidamente los niveles de acceso."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "p. ej., departamento de Recursos Humanos"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Crea grupos específicos que abarquen varios departamentos."
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "p. ej., vestuario masculino"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Los grupos de usuarios se utilizan para el ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "filtrado de registros de eventos"
          }), " y la ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "generación de informes"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Asigna grupos de usuarios a dispositivos o a grupos de dispositivos de la ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "zona de reunión"
          }), " para aplicar protocolos de seguridad específicos."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Esta flexibilidad facilita la gestión de roles de usuario superpuestos y de escenarios de acceso."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creatingUserGroup",
      children: "Crear grupo"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "crear-grupo-de-usuarios",
      children: "Crear grupo de usuarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Crear un nuevo grupo de usuarios."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-gettingstarted-user-group-mng.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_group_btn",
            product: "air"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_group_popup_title",
            product: "air"
          }), ", ingresa el nombre del grupo de usuarios."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-gettingstarted-user-group-mng-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_grops_ok_btn",
            product: "air"
          }), " para crear el grupo."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Eliminar un grupo no elimina a los usuarios que contiene. Solo se les quita la pertenencia al grupo."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cómo asignar usuarios a grupos, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/user-management-user-list#manageUserGroups"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creatingSubgroup",
      children: "Crear subgrupo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Puede usar subgrupos para clasificar aún más los grupos de usuarios. Sin embargo, los subgrupos ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no son jerárquicos"
      }), ". Esto significa que los usuarios de un subgrupo no se incluyen automáticamente en el grupo principal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_group_btn",
            product: "air"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_user_group_popup_title",
            product: "air"
          }), ", haz clic en la opción ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_sub_group_text",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-sub-group-popup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "select_group_placeholder",
            product: "air"
          }), ", seleccione el grupo principal."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingrese el nombre del grupo en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_subgroup_name_input",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_grops_ok_btn",
            product: "air"
          }), " para crear el subgrupo."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "El subgrupo recién creado aparece con sangría debajo del grupo principal en la lista de grupos de usuarios."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-user-sub-group-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editGroupName",
      children: "Editar nombre del grupo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modifica el nombre de un grupo de usuarios existente."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Marca la casilla del grupo de usuarios que deseas editar en la lista."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcAirEdit, {
            title: "Edit"
          }), " en la parte superior izquierda de la lista de grupos de usuarios."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_user_group_btn",
            product: "air"
          }), ", edita el nombre del grupo."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-edit-popup.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "manage_grops_ok_btn",
            product: "air"
          }), " para guardar los cambios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "El nombre del grupo solo se puede editar cuando se selecciona un único grupo."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteGroup",
      children: "Eliminar grupo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Elimina los grupos de usuarios que ya no sean necesarios."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Marca la casilla del grupo de usuarios que deseas eliminar en la lista."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(IcAirRemove, {
            title: "Delete"
          }), " en la parte superior izquierda de la lista de grupos de usuarios."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-remove.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca un mensaje de advertencia, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_group_yes_btn",
            product: "air"
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