"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["72255"], {
17151: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_view_users_mdx_920_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-x-view-users-mdx-920.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_x_view_users_mdx_920_namespaceObject = JSON.parse('{"id":"platform/biostar_x/view-users","title":"Explorar usuarios","description":"Esta guía explica cómo usar las funciones para ver, buscar, ordenar y administrar la lista de usuarios.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/view-users.mdx","sourceDirName":"platform/biostar_x","slug":"/platform/biostar_x/view-users","permalink":"/docs/es/platform/biostar_x/view-users","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_x/view-users.mdx","tags":[],"version":"current","frontMatter":{"id":"view-users","title":"Explorar usuarios","description":"Esta guía explica cómo usar las funciones para ver, buscar, ordenar y administrar la lista de usuarios.","keywords":["Usuario","Buscar"],"isTranslationMissing":false},"sidebar":"biostarx","previous":{"title":"Configura Los Ajustes Avanzados Del Usuario","permalink":"/docs/es/platform/biostar_x/set-user-advanced"},"next":{"title":"Administrar Usuarios","permalink":"/docs/es/platform/biostar_x/user-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_x/view-users.mdx


const frontMatter = {
	id: 'view-users',
	title: 'Explorar usuarios',
	description: 'Esta guía explica cómo usar las funciones para ver, buscar, ordenar y administrar la lista de usuarios.',
	keywords: [
		'Usuario',
		'Buscar'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Ver lista de usuarios",
  "id": "view-user-list",
  "level": 2
}, {
  "value": "Seleccionar opciones de vista",
  "id": "select-view-options",
  "level": 2
}, {
  "value": "Ir a la lista de usuarios",
  "id": "user-list-page-moves",
  "level": 3
}, {
  "value": "Cambiar la cantidad de usuarios mostrados en la lista",
  "id": "change-number-of-users-list-indications",
  "level": 3
}, {
  "value": "Ordenar lista de usuarios",
  "id": "user-list-alignment",
  "level": 3
}, {
  "value": "Buscar usuario",
  "id": "user-search",
  "level": 2
}, {
  "value": "Búsqueda general",
  "id": "general-search",
  "level": 3
}, {
  "value": "Búsqueda avanzada",
  "id": "advanced-search",
  "level": 3
}, {
  "value": "Configuración de columnas de la lista de usuarios",
  "id": "user-list-column-settings",
  "level": 2
}, {
  "value": "Imprimir lista de usuarios",
  "id": "print-user-list",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, IcAdvSearch, IcAscend, IcBw, IcDescend, IcFirst, IcFw, IcLast, IcMoreW, IcTips, Image, Kbd} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!IcAdvSearch) _missingMdxReference("IcAdvSearch", true);
  if (!IcAscend) _missingMdxReference("IcAscend", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!IcDescend) _missingMdxReference("IcDescend", true);
  if (!IcFirst) _missingMdxReference("IcFirst", true);
  if (!IcFw) _missingMdxReference("IcFw", true);
  if (!IcLast) _missingMdxReference("IcLast", true);
  if (!IcMoreW) _missingMdxReference("IcMoreW", true);
  if (!IcTips) _missingMdxReference("IcTips", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Kbd) _missingMdxReference("Kbd", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Esta guía explica cómo ver y administrar los usuarios registrados en la página de lista de usuarios. Busque rápidamente los usuarios deseados mediante búsquedas generales y avanzadas, y use funciones como el ordenamiento de listas, la configuración de columnas y la impresión."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " en el ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.launcher"
      }), " o seleccione ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), " en el menú de la esquina superior izquierda de la pantalla para acceder a la página ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "shell.header.user"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "view-user-list",
      children: "Ver lista de usuarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "En la página de lista de usuarios, consulte la información básica y el estado de los usuarios, y vea o edite la información detallada de cada uno."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La lista de usuarios muestra todos los usuarios registrados y permite verificar el ID, nombre, dirección de correo electrónico, duración y estado de las credenciales inscritas de cada usuario. Los usuarios se enumeran en orden según su ID."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en el usuario deseado en la lista para ver su información detallada. La información del perfil del usuario aparece en el lado derecho de la pantalla. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.user.preview.button.seeMore"
          }), " en la información del perfil del usuario para ir a la página de edición de la información detallada."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-users-list-view-profile.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga doble clic en el usuario deseado de la lista para editar su información detallada. Vaya a la página de edición de la información detallada del usuario."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la modificación de información del usuario, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "edit-user",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cambie el diseño de columnas en la lista de usuarios. Para obtener más información sobre cómo cambiar el diseño de columnas, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "view-users#user-list-column-settings",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "select-view-options",
      children: "Seleccionar opciones de vista"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie las opciones de visualización de la lista de usuarios mediante el botón de herramientas en la esquina superior derecha de la pantalla."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-list-page-moves",
      children: "Ir a la lista de usuarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "De forma predeterminada, la lista de usuarios muestra 10 usuarios. Haga clic en el botón en la parte superior de la pantalla para ir a otra página."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list-pagenation.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcFirst, {}), " : Ir a la primera página de la lista de usuarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcFw, {}), " : Ir a la página anterior de la lista de usuarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcBw, {}), " : Ir a la página siguiente de la lista de usuarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcLast, {}), " : Ir a la última página de la lista de usuarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vaya a la página deseada, ingrese el número de página en el campo numérico y presione ", (0,jsx_runtime.jsx)(Kbd, {
            children: "Enter"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "change-number-of-users-list-indications",
      children: "Cambiar la cantidad de usuarios mostrados en la lista"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie la cantidad de usuarios que se muestran en la lista. Seleccione la cantidad deseada de usuarios en el cuadro de lista de la esquina superior derecha de la pantalla. Las opciones disponibles son 50, 100 o 200 usuarios."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list-select-row.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-list-alignment",
      children: "Ordenar lista de usuarios"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cambie el criterio de ordenamiento de la lista de usuarios. Haga clic en el encabezado de columna en la parte superior de la lista para ordenar en orden ascendente o descendente. Por ejemplo, al hacer clic en el encabezado ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "team.user.table.firstName"
      }), ", los nombres de los usuarios se ordenan en orden ascendente o descendente. El elemento seleccionado mostrará un ícono de ascendente (", (0,jsx_runtime.jsx)(IcAscend, {}), ") o descendente (", (0,jsx_runtime.jsx)(IcDescend, {}), ")."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-list-order.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Algunos elementos podrían no ordenarse según el tipo de columna."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-search",
      children: "Buscar usuario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ofrece orientación sobre cómo buscar usuarios específicos. Encuentre rápidamente a los usuarios deseados mediante la función de búsqueda en la página de lista de usuarios."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Los términos de búsqueda no distinguen mayúsculas de minúsculas."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La información básica del usuario debe ingresarse para buscarlos. Para obtener más información sobre la introducción de la información del usuario, consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "add-user-basic-info",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "general-search",
      children: "Búsqueda general"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Busque por ID, nombre o correo electrónico del usuario. Introduzca las palabras clave en el campo de búsqueda en la parte superior de la pantalla y presione ", (0,jsx_runtime.jsx)(Kbd, {
        children: "Enter"
      }), ". Los usuarios que coincidan con la palabra clave especificada aparecerán en la lista. Verifique la cantidad de resultados de búsqueda en la parte superior de la lista."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-search-result.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-search",
      children: "Búsqueda avanzada"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Busque IDs de usuario, nombres, direcciones de correo electrónico, etc."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAdvSearch, {}), " junto al campo de búsqueda en la parte superior de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando se abra la ventana de búsqueda avanzada, ingrese los criterios deseados y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.search"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/biostarx-users-advanced-search.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los campos con el ícono ", (0,jsx_runtime.jsx)(IcTips, {}), " no admiten búsqueda de palabras parciales debido al cifrado de datos personales en la base de datos."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para restablecer los criterios ingresados en la ventana de búsqueda avanzada, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "common.clearAll"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["La búsqueda avanzada admite la búsqueda de ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.title",
              product: "2"
            }), ". Para obtener más información sobre ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "setting.server.custom_field.title",
              product: "2"
            }), ", consulte ", (0,jsx_runtime.jsx)(_components.a, {
              href: "settings-server-server#custom-field",
              children: "lo siguiente"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-list-column-settings",
      children: "Configuración de columnas de la lista de usuarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cambie la configuración de columnas que se muestran en la lista de usuarios. En la configuración de columnas, seleccione las columnas que se mostrarán o cambie su orden."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcMoreW, {}), " en la esquina superior derecha de la pantalla de la lista de usuarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.columnLayout"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.dialog.columnSetting.title"
          }), ", seleccione o deseleccione las columnas deseadas."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-users-list-column-layout.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Haga clic y arrastre la columna deseada para cambiar su posición."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "common.apply"
          }), " para guardar la configuración."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "La configuración de columnas se guarda para cada cuenta de usuario."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "columnSetting.button.defaultColumn",
              product: "2"
            }), " para restablecer el diseño de columnas."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "print-user-list",
      children: "Imprimir lista de usuarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Guarde la lista de usuarios que está viendo como archivo PDF o SVG."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcMoreW, {}), " en la esquina superior derecha de la pantalla de la lista de usuarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.print"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "printOption.dialog.header",
            product: "2"
          }), ", seleccione el formato deseado en las opciones ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "printOption.fileFormat",
            product: "2"
          }), " y configure las demás opciones."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/biostarx-users-print-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ingresa ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "printOption.printReason",
            product: "2"
          }), " (opcional) y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "team.menu.print"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imprima el archivo PDF o SVG que se abre en el navegador."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmd, {
          sid: "printOption.printReason",
          product: "2"
        }), " es opcional. Verifica los registros de ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "printOption.printReason",
          product: "2"
        }), " en ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "shell.header.setting"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.system.root"
        }), " → ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "setting.menu.system.auditTrail"
        }), "."]
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