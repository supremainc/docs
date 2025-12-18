"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["49133"], {
2437: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_user_group_manage_mdx_77c_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-user-group-manage-mdx-77c.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_user_group_manage_mdx_77c_namespaceObject = JSON.parse('{"id":"platform/biostar_x/user-group-manage","title":"Administrar grupos de usuarios","description":"Mejore la eficiencia de la gestión y la escalabilidad aprovechando los grupos de usuarios y optimice las operaciones de control de acceso.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/user-group-manage.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/user-group-manage","permalink":"/docs/es/platform/biostar_x/user-group-manage","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/user-group-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"user-group-manage","title":"Administrar grupos de usuarios","description":"Mejore la eficiencia de la gestión y la escalabilidad aprovechando los grupos de usuarios y optimice las operaciones de control de acceso.","keywords":["Usuario","Grupo","Control de acceso"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Usuario","permalink":"/docs/es/platform/biostar_x/how-to-guide-user"},"next":{"title":"Registrar usuarios","permalink":"/docs/es/platform/biostar_x/add-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/user-group-manage.mdx


const frontMatter = {
	id: 'user-group-manage',
	title: 'Administrar grupos de usuarios',
	description: 'Mejore la eficiencia de la gestión y la escalabilidad aprovechando los grupos de usuarios y optimice las operaciones de control de acceso.',
	keywords: [
		'Usuario',
		'Grupo',
		'Control de acceso'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Agregar grupo",
  "id": "group-additional",
  "level": 2
}, {
  "value": "Crear grupo de nivel superior",
  "id": "creating-a-higher-group",
  "level": 3
}, {
  "value": "Crear subgrupo",
  "id": "creating-a-lower-group",
  "level": 3
}, {
  "value": "Cambiar nombre de grupo",
  "id": "group-name-change",
  "level": 2
}, {
  "value": "Eliminar grupo",
  "id": "group-deletion",
  "level": 2
}, {
  "value": "Ver usuarios por grupo",
  "id": "viewgroupuser",
  "level": 2
}, {
  "value": "Expandir/contraer lista de grupos",
  "id": "expandircontraer-lista-de-grupos",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
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
      children: "Los grupos de usuarios pueden compartir propiedades y permisos comunes. Cuando un usuario se convierte en miembro de un grupo, automáticamente se le otorgan todas las propiedades de ese grupo. Un usuario solo puede pertenecer a un grupo de usuarios."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "En lugar de establecer permisos de acceso para usuarios individuales, cree grupos de usuarios por departamento o rol y aplique los mismos permisos de acceso de una sola vez."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Al modificar los permisos de acceso del grupo, estos se aplican automáticamente a todos los usuarios que pertenecen a ese grupo, lo que reduce la carga administrativa. Ajuste rápidamente los permisos cuando haya cambios organizativos o nuevos proyectos."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Evite accesos innecesarios y aumente la seguridad estableciendo permisos por grupo."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Analice por separado los registros de acceso de grupos específicos, lo que facilita las auditorías de seguridad y la gestión de registros."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Los grupos de usuarios pueden aplicar políticas detalladas, como horarios límite de acceso y áreas restringidas, en integración con el nivel de acceso."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "group-additional",
      children: "Agregar grupo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cree grupos para gestionar varios usuarios de forma eficiente. Registre un nombre, como la organización a la que pertenece el usuario, para gestionarlo cómodamente."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Registrar el nombre del grupo como el nombre de la organización o departamento al que pertenece el usuario facilita la gestión."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Cree subgrupos del grupo de forma secuencial hasta 8 niveles."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "El nombre del grupo de usuarios puede tener hasta 48 caracteres."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Seleccione un grupo de la lista de grupos de usuarios para que en la lista de usuarios aparezcan únicamente los pertenecientes a ese grupo."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-a-higher-group",
      children: "Crear grupo de nivel superior"
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
          children: ["En la barra lateral izquierda de la pantalla, seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.tree.userGroupRootName"
          }), " en la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " y haga clic derecho."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-group-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.addNewGroup"
          }), " en el menú emergente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Una vez creado el grupo, ingrese el nombre de grupo deseado."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-group-add-input.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "creating-a-lower-group",
      children: "Crear subgrupo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " de la barra lateral izquierda de la pantalla, seleccione el grupo padre y haga clic derecho."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-sub-group-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.addNewGroup"
          }), " en el menú emergente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Una vez creado el grupo, ingrese el nombre de grupo deseado."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Al crear un subgrupo, debe seleccionar un grupo padre y puede crear hasta 8 niveles."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Establezca un grupo como subgrupo del grupo de destino arrastrándolo a otro grupo. Mover un grupo a ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "team.user.tree.userGroupRootName"
            }), " permite configurarlo como grupo de nivel superior."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "group-name-change",
      children: "Cambiar nombre de grupo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie el nombre del grupo al que pertenece el usuario. Se recomienda cambiar el nombre del grupo cuando cambie el nombre de la organización o del departamento."
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
          children: ["En la lista ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " de la barra lateral izquierda, seleccione el grupo que desea renombrar y haga clic derecho."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-group-rename.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.renameGroup"
          }), " en el menú emergente."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cambie el nombre del grupo según desee."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Verifique los cambios en la lista ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.userGroup"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "El nombre del grupo de usuarios puede tener hasta 48 caracteres."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "group-deletion",
      children: "Eliminar grupo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Elimine el grupo al que pertenece el usuario."
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
          children: ["En la lista ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.tree.userGroup"
          }), " de la barra lateral izquierda, seleccione el grupo que desea eliminar y haga clic derecho."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "arena.tree.contextMenu.deleteGroup"
          }), " en el menú emergente."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-user-group-remove.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el mensaje de confirmación, haga clic en el botón ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.tree.dialog.delete.yes"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En la lista ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.userGroup"
      }), ", confirme que el grupo seleccionado se ha eliminado."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "viewgroupuser",
      children: "Ver usuarios por grupo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vea los usuarios que pertenecen al grupo de usuarios. En la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), ", seleccione el grupo de usuarios deseado en la barra lateral izquierda. Los usuarios del grupo seleccionado se mostrarán en la lista."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-user-group-select-group-user.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expandircontraer-lista-de-grupos",
      children: "Expandir/contraer lista de grupos"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Expanda o contraiga la lista de grupos de usuarios. En la pestaña ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.tree.userGroup"
      }), ", seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.tree.userGroupRootName"
      }), " y haga clic derecho. En el menú emergente, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.expandAll"
      }), " o ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.collapseAll"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-user-group-expand-collapse.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Si hay subgrupos dentro del grupo, puede expandirlos o contraerlos. Seleccione el grupo padre y haga clic derecho. En el menú emergente, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.tree.contextMenu.expandBelow"
      }), " o ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "common.tree.contextMenu.collapseBelow"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-user-sub-group-expand-collapse.png"
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