"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["57645"], {
66529: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_user_management_user_list_mdx_ec8_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-user-management-user-list-mdx-ec8.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_user_management_user_list_mdx_ec8_namespaceObject = JSON.parse('{"id":"platform/biostar_air/user-management-user-list","title":"Administrar Usuarios","description":"Administre de manera eficiente a los usuarios registrados en BioStar Air. Gestione a todos los usuarios de su organización mediante funciones como ver la lista de usuarios, filtrar, editar detalles, asignar grupos y niveles de acceso, emitir credenciales, realizar operaciones por lotes y generar informes.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/user-management-user-list.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/user-management-user-list","permalink":"/docs/es/platform/biostar_air/user-management-user-list","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/user-management-user-list.mdx","tags":[],"version":"current","frontMatter":{"id":"user-management-user-list","title":"Administrar Usuarios","description":"Administre de manera eficiente a los usuarios registrados en BioStar Air. Gestione a todos los usuarios de su organización mediante funciones como ver la lista de usuarios, filtrar, editar detalles, asignar grupos y niveles de acceso, emitir credenciales, realizar operaciones por lotes y generar informes.","keywords":["BioStar Air","Gestión Usuarios","Lista de usuarios","Credenciales","nivel de acceso","Grupo usuario","Informe"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Agregar usuarios","permalink":"/docs/es/platform/biostar_air/adding-individual-users"},"next":{"title":"Agregar usuarios masivamente","permalink":"/docs/es/platform/biostar_air/adding-users-in-bulk"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/user-management-user-list.mdx


const frontMatter = {
	id: 'user-management-user-list',
	title: 'Administrar Usuarios',
	description: 'Administre de manera eficiente a los usuarios registrados en BioStar Air. Gestione a todos los usuarios de su organización mediante funciones como ver la lista de usuarios, filtrar, editar detalles, asignar grupos y niveles de acceso, emitir credenciales, realizar operaciones por lotes y generar informes.',
	keywords: [
		'BioStar Air',
		'Gestión Usuarios',
		'Lista de usuarios',
		'Credenciales',
		'nivel de acceso',
		'Grupo usuario',
		'Informe'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Ver la lista de usuarios",
  "id": "ver-la-lista-de-usuarios",
  "level": 2
}, {
  "value": "Información del usuario",
  "id": "información-del-usuario",
  "level": 3
}, {
  "value": "Filtrar",
  "id": "userFiltering",
  "level": 3
}, {
  "value": "Funciones adicionales",
  "id": "additionalFunctions",
  "level": 3
}, {
  "value": "Editar información del usuario",
  "id": "editUserDetails",
  "level": 2
}, {
  "value": "Administrar grupos de usuarios",
  "id": "manageUserGroups",
  "level": 2
}, {
  "value": "Asignar usuarios a un grupo",
  "id": "assigning-users-to-a-group",
  "level": 3
}, {
  "value": "Eliminar o mover un grupo",
  "id": "disableGroup",
  "level": 3
}, {
  "value": "Administrar el estado del usuario",
  "id": "manageUserStatus",
  "level": 2
}, {
  "value": "Usuario individual",
  "id": "usuario-individual",
  "level": 3
}, {
  "value": "Acciones masivas",
  "id": "acciones-masivas",
  "level": 3
}, {
  "value": "Eliminar usuarios",
  "id": "deleteUser",
  "level": 2
}, {
  "value": "Usuario individual",
  "id": "deleteSingleUser",
  "level": 3
}, {
  "value": "Eliminar varios usuarios",
  "id": "deleteMultipleUsers",
  "level": 3
}, {
  "value": "Crear un informe de usuario",
  "id": "userReport",
  "level": 2
}, {
  "value": "Buscar usuarios",
  "id": "searchUsers",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, Column, Columns, DocLink, IcAdd, IcAirActive, IcAirDown, IcAirEdit, IcAirFaceLink, IcAirFilter, IcAirFilterReset, IcAirGroup, IcAirLock, IcAirMask, IcAirMore, IcAirMtag, IcAirReissue, IcAirRemove, IcAirReport, IcAirSuspend, IcAirUpface, IcAirUtemplate, IcBw, Image, TabItem, Tabs} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAdd) _missingMdxReference("IcAdd", true);
  if (!IcAirActive) _missingMdxReference("IcAirActive", true);
  if (!IcAirDown) _missingMdxReference("IcAirDown", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirFaceLink) _missingMdxReference("IcAirFaceLink", true);
  if (!IcAirFilter) _missingMdxReference("IcAirFilter", true);
  if (!IcAirFilterReset) _missingMdxReference("IcAirFilterReset", true);
  if (!IcAirGroup) _missingMdxReference("IcAirGroup", true);
  if (!IcAirLock) _missingMdxReference("IcAirLock", true);
  if (!IcAirMask) _missingMdxReference("IcAirMask", true);
  if (!IcAirMore) _missingMdxReference("IcAirMore", true);
  if (!IcAirMtag) _missingMdxReference("IcAirMtag", true);
  if (!IcAirReissue) _missingMdxReference("IcAirReissue", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!IcAirReport) _missingMdxReference("IcAirReport", true);
  if (!IcAirSuspend) _missingMdxReference("IcAirSuspend", true);
  if (!IcAirUpface) _missingMdxReference("IcAirUpface", true);
  if (!IcAirUtemplate) _missingMdxReference("IcAirUtemplate", true);
  if (!IcBw) _missingMdxReference("IcBw", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "La lista de usuarios es una herramienta esencial para los administradores encargados del control de acceso en una organización. Permite realizar todas las tareas de gestión de usuarios, incluida la administración organizacional mediante la agrupación de usuarios, la respuesta inmediata a empleados nuevos o que se marchan con activación/suspensión en tiempo real, la gestión integrada de distintos tipos de credenciales, el refuerzo de la seguridad mediante el control de su vigencia y la preparación de informes y auditorías mediante el filtrado y la generación de reportes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ver-la-lista-de-usuarios",
      children: "Ver la lista de usuarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La lista de usuarios muestra de un vistazo todos los usuarios registrados en BioStar Air. Vea los detalles de cada usuario y utilice las funciones de filtro y ordenamiento para encontrar rápidamente usuarios específicos. Edite, elimine y asigne grupos a los usuarios directamente desde la lista."
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-overview.png"
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user.png",
              className: "none"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsx)(_components.p, {
              children: "Use la función de gestión de usuarios en la app de BioStar Air."
            }), (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Abre ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "BioStar Air"
                  }), " en tu dispositivo móvil."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "site_setting_tab_management",
                    product: "air"
                  }), " en la barra de navegación inferior."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Toque ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_submenu",
                    product: "air"
                  }), "."]
                }), "\n"]
              }), "\n"]
            }), (0,jsx_runtime.jsx)(_components.p, {
              children: "Aparece una lista de usuarios. Agregue nuevos usuarios o edite los detalles de los usuarios existentes."
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "información-del-usuario",
      children: "Información del usuario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La tabla de la lista de usuarios muestra la siguiente información."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column8",
            product: "air"
          }), ": Indica si el usuario es regular o temporal. Para obtener más información sobre usuarios regulares y temporales, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/user-card-types"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column1",
            product: "air"
          }), ": El nombre del usuario."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_info_id",
            product: "air"
          }), ": El identificador único del usuario."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column2",
            product: "air"
          }), ": Muestra las credenciales emitidas al usuario. Para obtener más información sobre los tipos de credenciales, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/user-card-types"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column3",
            product: "air"
          }), ": El período de vigencia de las credenciales emitidas al usuario."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column4",
            product: "air"
          }), ": Indica si el usuario está activo o inactivo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column5",
            product: "air"
          }), ": El grupo al que pertenece el usuario. Para obtener más información sobre grupos de usuarios, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/managing-user-groups"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column6",
            product: "air"
          }), ": El nivel de acceso asignado al usuario. Para obtener más información sobre niveles de acceso, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/manage-access-level"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column7",
            product: "air"
          }), ": Los permisos del usuario para los pisos a los que puede acceder. Para obtener más información sobre niveles de piso, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/manage-floor-level"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "userFiltering",
      children: "Filtrar"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Use la función de filtrado en la parte superior de la lista de usuarios. Haga clic en ", (0,jsx_runtime.jsx)(IcAirFilter, {
            title: "Filter"
          }), " en el encabezado para establecer las condiciones deseadas."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-user-filtering.png"
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirFilterReset, {
              title: "Clear Filters"
            }), " en la parte superior de la lista de usuarios para restablecer las condiciones de filtro aplicadas."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["En la app móvil, puede filtrar y ver a los usuarios en la lista según los criterios deseados. Toque ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "logs_filters_action_btn",
            product: "air"
          }), " en la esquina superior derecha de la lista de usuarios. Puede filtrar usuarios por los siguientes criterios."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-filter.png",
          className: "none",
          width: "60%"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column8",
                product: "air"
              }), ": Filtra por tipo de usuario (regular o temporal)."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column2",
                product: "air"
              }), ": Filtra por tipo de credencial."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column4",
                product: "air"
              }), ": Filtra por estado de activación."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_table_column5",
                product: "air"
              }), ": Filtra por grupo de usuarios."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additionalFunctions",
      children: "Funciones adicionales"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Las funciones disponibles en la parte superior de la lista de usuarios son las siguientes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), ": Asignar, quitar o mover a los usuarios seleccionados a un grupo. Para más información, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#manageUserGroups"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirLock, {
            width: "24px",
            height: "24px",
            title: "Set Access"
          }), ": Cambiar el nivel de acceso de los usuarios seleccionados. Para más información sobre los niveles de acceso, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/manage-access-level"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-tool-aclevel.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirMtag, {
            width: "24px",
            height: "24px",
            title: "Mobile Consecutive Tag"
          }), ": Permite que los usuarios seleccionados marquen tarjetas móviles de forma consecutiva sin tiempo de espera. La app Suprema Pass admite esto a partir de la versión 2.9.0."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-tool-mobile-tag.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirUtemplate, {
            width: "24px",
            height: "24px",
            title: "User Template"
          }), ": Aplica una plantilla de usuario a los usuarios seleccionados. Añade cualquier otra información necesaria además de la información predeterminada del usuario."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-user-template.png",
          width: "43%"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirDown, {
            width: "24px",
            height: "24px",
            title: "Download"
          }), ": Exporta la información de los usuarios seleccionados a un archivo PDF o CSV."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirUpface, {
            width: "24px",
            height: "24px",
            title: "Image Upload"
          }), ": Sube imágenes de usuarios en lote. El nombre de cada archivo de imagen que se suba debe coincidir con el ID del usuario."]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Por ejemplo, el archivo 601.jpg corresponde al usuario con ID 601."
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Requisitos de formato de archivo"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Formatos compatibles: ", (0,jsx_runtime.jsx)(_components.em, {
                  children: ".jpg"
                }), ", ", (0,jsx_runtime.jsx)(_components.em, {
                  children: ".jpeg"
                }), ", ", (0,jsx_runtime.jsx)(_components.em, {
                  children: ".png"
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Límite de tamaño de archivo: ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "1 MB"
                }), " por imagen"]
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirFaceLink, {
            width: "26px",
            height: "26px",
            title: "Send Face Registration Link"
          }), ": Envía un enlace de registro facial a los usuarios seleccionados por correo electrónico o mensaje de texto. Cuando un usuario haga clic en el enlace y registre su rostro en la página web, se le otorgará acceso mediante autenticación facial."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "El enlace no puede enviarse a usuarios que no tengan una dirección de correo electrónico o número de teléfono registrado."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirFilterReset, {
            width: "26px",
            height: "26px",
            title: "Clear Filters"
          }), ": Restablece todos los filtros aplicados a la lista de usuarios. Esta opción está disponible solo cuando se han aplicado filtros. Para obtener más información sobre cómo aplicar filtros, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#userFiltering"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirReport, {
            width: "26px",
            height: "26px",
            title: "Report"
          }), ": Configura los informes de usuarios. Una vez generado, el informe se envía al correo electrónico del administrador. Para más información sobre la configuración de informes, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#userReport"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirMask, {
            width: "24px",
            height: "24px",
            title: "Apply Masking"
          }), ": Enmascara (", (0,jsx_runtime.jsx)(_components.code, {
            children: "***"
          }), ") información como el nombre y el ID en la lista de usuarios para proteger la privacidad. Esta función es útil en entornos que requieren privacidad. Active el interruptor para habilitarla y haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-user-masking.png"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editUserDetails",
      children: "Editar información del usuario"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "Siga estos pasos para editar los datos de un usuario o cambiar sus credenciales."
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
              children: "Haga clic en el usuario que desea editar en la lista."
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-list.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " en la esquina superior derecha de los detalles del usuario."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-details.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Edite los datos requeridos cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_edit_header",
                product: "air"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-details-edit-info.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Después de editar, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), " en la esquina inferior derecha."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-edit.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsx)(_components.p, {
              children: "Para editar la información detallada de un usuario en la aplicación móvil, siga estos pasos."
            }), (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Toque el usuario que desea editar en la lista de usuarios."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Toque ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " en la esquina superior derecha."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Edite la información necesaria en la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_edit_header",
                    product: "air"
                  }), "."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Para guardar los cambios, toque ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "save_btn",
                    product: "air"
                  }), "."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Utilice ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "add_user_card_activate_btn",
                    product: "air"
                  }), " para emitir credenciales."]
                }), "\n"]
              }), "\n"]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para obtener más información sobre los usuarios, consulte ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/adding-individual-users"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manageUserGroups",
      children: "Administrar grupos de usuarios"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Esta guía explica cómo asignar, mover o excluir usuarios de un grupo de usuarios. Para obtener más información sobre la creación y administración de grupos de usuarios, consulte ", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/managing-user-groups"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "assigning-users-to-a-group",
          children: "Asignar usuarios a un grupo"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Después de crear un grupo de usuarios, puede agregar usuarios al grupo desde la lista de usuarios."
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
              children: "Haga clic en la casilla junto a los usuarios que desea asignar al grupo en la lista de usuarios."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirGroup, {
                title: "Manage Groups"
              }), " en la parte superior izquierda de la lista de usuarios."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-group-assign.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_user_groups_header",
                product: "air"
              }), ", seleccione el grupo principal o el subgrupo al que asignar los usuarios."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-user-group-assign-popup.png",
              width: "50%"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Complete la selección y, para guardar la configuración del grupo, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_grops_ok_btn",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Confirme que los usuarios están asignados al nuevo grupo en la columna ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column5",
            product: "air"
          }), " de la lista de usuarios."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-group-assign-result.png"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Regrese a ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_submenu",
            product: "air"
          }), " para confirmar que la columna ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_groups_table_col2",
            product: "air"
          }), " del grupo se actualizó."]
        }), (0,jsx_runtime.jsx)(_components.h3, {
          id: "disableGroup",
          children: "Eliminar o mover un grupo"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Puede excluir usuarios de un grupo de usuarios o moverlos a otro grupo."
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
              children: "Haga clic en la casilla junto a los usuarios que desea quitar de un grupo o mover entre grupos en la lista de usuarios."
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsx)(_components.p, {
                children: "Al mover usuarios, primero seleccione usuarios del mismo grupo y luego continúe."
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirGroup, {}), " en la parte superior izquierda de la lista de usuarios."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_user_groups_header",
                product: "air"
              }), ", realice una de las siguientes acciones:"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Para desasignar el grupo, desmarque la casilla del grupo seleccionado."
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Para mover el grupo, seleccione la casilla del grupo actual y luego elija el grupo de destino."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "manage_grops_ok_btn",
                product: "air"
              }), " para guardar la configuración del grupo."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Confirme los cambios del grupo en la columna ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_table_column5",
            product: "air"
          }), " de la lista de usuarios."]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Puedes administrar los grupos de usuarios en la aplicación móvil. Toca ", (0,jsx_runtime.jsx)(IcAirGroup, {}), " en la parte superior de la lista de usuarios. Aparecerá la lista de grupos de usuarios."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-app-mng-user-group.png",
          className: "none",
          width: "60%"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Para ver los usuarios de un grupo, toca ", (0,jsx_runtime.jsx)(IcBw, {}), " a la derecha del grupo deseado."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Para agregar un nuevo grupo, toca ", (0,jsx_runtime.jsx)(IcAdd, {
                title: "Add"
              }), " en la esquina superior derecha."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Para editar el nombre de un grupo, mantén presionado el grupo deseado y toca ", (0,jsx_runtime.jsx)(IcAirEdit, {
                title: "Edit"
              }), " en la parte inferior."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Para eliminar un grupo, mantén presionado el grupo deseado y toca ", (0,jsx_runtime.jsx)(IcAirRemove, {
                title: "Remove"
              }), " en la parte inferior. Selecciona uno o más grupos para eliminarlos."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre la gestión de grupos de usuarios, consulta ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/managing-user-groups"
            }), "."]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "manageUserStatus",
      children: "Administrar el estado del usuario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Activa o suspende los permisos de acceso de un usuario. También vuelve a emitir las credenciales."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usuario-individual",
      children: "Usuario individual"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
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
              children: "Haga clic en el usuario de la lista para cambiar su estado."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Seleccione la acción deseada en la parte superior de los detalles del usuario."
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-details-manage-status.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcAirActive, {
                width: "24px",
                height: "24px",
                title: "Activate"
              }), ": Activa los permisos de acceso del usuario. Usa esta función para la activación inicial de nuevos usuarios o para reactivar a usuarios suspendidos."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcAirReissue, {
                width: "24px",
                height: "24px",
                title: "Reissue"
              }), ": Vuelve a emitir las credenciales. Usa esta función cuando las credenciales del usuario hayan expirado o no estén disponibles."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(IcAirSuspend, {
                width: "24px",
                height: "24px",
                title: "Suspend"
              }), ": Bloquea el acceso del usuario. Usa esta función cuando el usuario esté activo."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-action.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la aplicación móvil, toca un usuario en la lista. En la pantalla ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_detail",
                product: "air"
              }), ", toca ", (0,jsx_runtime.jsx)("span", {
                className: "rect green",
                children: (0,jsx_runtime.jsx)(IcAirMore, {})
              }), ". Aparece el menú ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Acciones de usuario"
              }), "."]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_activate_action",
                    product: "air"
                  }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "after_suspend_user_reactivate_action",
                    product: "air"
                  }), ": Activa los permisos de acceso del usuario. Usa esta función para la activación inicial de usuarios nuevos o para reactivar a usuarios suspendidos."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_reactivate_action",
                    product: "air"
                  }), ": Vuelve a emitir las credenciales del usuario."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "suspend_action",
                    product: "air"
                  }), ": Desactiva temporalmente al usuario. Los usuarios suspendidos no pueden acceder."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "delete_action",
                    product: "air"
                  }), ": Elimina al usuario del sistema."]
                }), "\n"]
              }), "\n"]
            }), (0,jsx_runtime.jsx)(_components.admonition, {
              type: "info",
              children: (0,jsx_runtime.jsxs)(_components.p, {
                children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
                  sid: "after_suspend_user_reactivate_action",
                  product: "air"
                }), " aparece solo para usuarios suspendidos."]
              })
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "acciones-masivas",
      children: "Acciones masivas"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "platform",
      children: [(0,jsx_runtime.jsxs)(TabItem, {
        value: "web",
        label: "Web",
        children: [(0,jsx_runtime.jsxs)(_components.ol, {
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
              children: "Haga clic en la casilla de cada usuario en la lista para cambiar su estado. Puede seleccionar más de un usuario."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Toca ", (0,jsx_runtime.jsx)(IcAirMore, {}), " en la esquina superior izquierda de la pantalla y selecciona la acción deseada del menú emergente."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-multi-user-batch-action.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_activate_action",
                product: "air"
              }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "after_suspend_user_reactivate_action",
                product: "air"
              }), ": Activa los permisos de acceso del usuario. Usa esta función para la activación inicial de usuarios nuevos o para reactivar a usuarios suspendidos."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "user_reactivate_action",
                product: "air"
              }), ": Vuelve a emitir las credenciales. Usa esta función cuando las credenciales del usuario hayan expirado o no estén disponibles."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "suspend_action",
                product: "air"
              }), ": Bloquea el acceso del usuario. Usa esta función cuando el usuario esté activo."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "mobile",
        label: "Mobile",
        children: (0,jsx_runtime.jsxs)(Columns, {
          children: [(0,jsx_runtime.jsx)(Column, {
            className: "width--40",
            children: (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-app-mng-user-bulk-action.png"
            })
          }), (0,jsx_runtime.jsxs)(Column, {
            className: "padding--l40",
            children: [(0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la aplicación móvil, mantenga presionado a un usuario en la lista para cambiar su estado. Seleccione los usuarios adicionales cuyo estado desee cambiar. Toque la acción deseada en el menú ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Acciones de usuario"
              }), " en la parte inferior de la pantalla."]
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_activate_action",
                    product: "air"
                  }), " / ", (0,jsx_runtime.jsx)(Cmd, {
                    sid: "after_suspend_user_reactivate_action",
                    product: "air"
                  }), ": Activa los permisos de acceso del usuario. Usa esta función para la activación inicial de usuarios nuevos o para reactivar a usuarios suspendidos."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "user_reactivate_action",
                    product: "air"
                  }), ": Vuelve a emitir las credenciales del usuario."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "suspend_action",
                    product: "air"
                  }), ": Desactiva temporalmente al usuario. Los usuarios suspendidos no pueden acceder."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmd, {
                    sid: "delete_action",
                    product: "air"
                  }), ": Elimina al usuario del sistema."]
                }), "\n"]
              }), "\n"]
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["La opción ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "after_suspend_user_reactivate_action",
          product: "air"
        }), " aparece solo para usuarios suspendidos."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deleteUser",
      children: "Eliminar usuarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Los usuarios eliminados no se pueden recuperar. Asegúrese de verificar antes de eliminarlos."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deleteSingleUser",
      children: "Usuario individual"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
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
          children: "Haga clic en el usuario que desea eliminar en la lista."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)("span", {
            className: "air-remove",
            children: (0,jsx_runtime.jsx)(IcAirRemove, {})
          }), " en los detalles del usuario."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-details-remove.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca un mensaje de advertencia, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "delete_user_yes_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deleteMultipleUsers",
      children: "Eliminar varios usuarios"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
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
          children: "Marque la casilla de cada usuario que desea eliminar en la lista. Puede seleccionar más de un usuario."
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-multi-select.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirMore, {}), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "delete_action",
            product: "air"
          }), " en la esquina superior izquierda de la pantalla."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-list-multi-select-remove-opt.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca un mensaje de advertencia, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "delete_user_yes_btn",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "userReport",
      children: "Crear un informe de usuario"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cree un informe de usuario y envíelo al correo electrónico del administrador."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirReport, {}), " en la parte superior de la lista de usuarios."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), ", ingrese un nombre para el informe."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-user-report-setting.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione los elementos que desea incluir en el informe en cada opción de filtro."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_add",
            product: "air"
          }), " para guardar el informe."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Se crea un ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_form_text_title",
            product: "air"
          }), " y se envía un enlace de descarga al correo electrónico del administrador."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-user-report-setting-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["En ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "report_form_text_title",
          product: "air"
        }), ", busque, edite, descargue o elimine los informes generados."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "searchUsers",
      children: "Buscar usuarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Utilice el campo de búsqueda en la esquina superior derecha de la lista de usuarios para encontrar rápidamente usuarios específicos. Busque por nombre de usuario, ID o número de teléfono."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-user-list-search.png"
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