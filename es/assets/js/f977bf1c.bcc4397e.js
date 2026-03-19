"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["87635"], {
97929: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_registered_doors_mdx_f97_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-managing-registered-doors-mdx-f97.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_managing_registered_doors_mdx_f97_namespaceObject = JSON.parse('{"id":"platform/biostar_air/managing-registered-doors","title":"Administrar puertas registradas","description":"Asigne dispositivos de acceso a las puertas registradas, configure relés y administre los horarios de acceso. Controle el acceso para seguridad, evacuación en caso de incendio y control de tiempo y asistencia.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-registered-doors.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/managing-registered-doors","permalink":"/docs/es/platform/biostar_air/managing-registered-doors","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/managing-registered-doors.mdx","tags":[],"version":"current","frontMatter":{"id":"managing-registered-doors","title":"Administrar puertas registradas","description":"Asigne dispositivos de acceso a las puertas registradas, configure relés y administre los horarios de acceso. Controle el acceso para seguridad, evacuación en caso de incendio y control de tiempo y asistencia.","keywords":["Administración de Puertas","BioStar Air"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Puertas","permalink":"/docs/es/platform/biostar_air/manage-door"},"next":{"title":"Administrar Grupo de Puertas","permalink":"/docs/es/platform/biostar_air/managing-door-groups"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/managing-registered-doors.mdx


const frontMatter = {
	id: 'managing-registered-doors',
	title: 'Administrar puertas registradas',
	description: 'Asigne dispositivos de acceso a las puertas registradas, configure relés y administre los horarios de acceso. Controle el acceso para seguridad, evacuación en caso de incendio y control de tiempo y asistencia.',
	keywords: [
		'Administración de Puertas',
		'BioStar Air'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Ver la lista de puertas",
  "id": "ver-la-lista-de-puertas",
  "level": 2
}, {
  "value": "Información de la puerta",
  "id": "información-de-la-puerta",
  "level": 3
}, {
  "value": "Funciones adicionales",
  "id": "funciones-adicionales",
  "level": 3
}, {
  "value": "Filtrar",
  "id": "deviceFiltering",
  "level": 3
}, {
  "value": "Agregar puertas",
  "id": "addingDoor",
  "level": 2
}, {
  "value": "Agregar usando un dispositivo",
  "id": "agregar-usando-un-dispositivo",
  "level": 3
}, {
  "value": "Agregar desde el portal web",
  "id": "agregar-desde-el-portal-web",
  "level": 3
}, {
  "value": "Editar puertas",
  "id": "editingDoors",
  "level": 2
}, {
  "value": "Generar informes de puertas",
  "id": "generatingDoorReports",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, IcAirEdit, IcAirFilter, IcAirGroup, IcAirRef, IcAirRemove, IcAirReport, IcAirSchedule, Image, YouTube} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!IcAirEdit) _missingMdxReference("IcAirEdit", true);
  if (!IcAirFilter) _missingMdxReference("IcAirFilter", true);
  if (!IcAirGroup) _missingMdxReference("IcAirGroup", true);
  if (!IcAirRef) _missingMdxReference("IcAirRef", true);
  if (!IcAirRemove) _missingMdxReference("IcAirRemove", true);
  if (!IcAirReport) _missingMdxReference("IcAirReport", true);
  if (!IcAirSchedule) _missingMdxReference("IcAirSchedule", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!YouTube) _missingMdxReference("YouTube", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Asigne dispositivos de acceso a las puertas registradas, configure relés y establezca los horarios de acceso. Controle el acceso de forma sistemática para la seguridad, la evacuación en caso de incendio y el control de tiempo y asistencia (T&A)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Vea el siguiente video para aprender a registrar y administrar puertas."
      }), (0,jsx_runtime.jsx)(YouTube, {
        className: "fit--content",
        videoId: "g7fUC-9f0qM"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ver-la-lista-de-puertas",
      children: "Ver la lista de puertas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La lista de puertas muestra todas las puertas registradas en BioStar Air de un vistazo. Vea información clave de cada puerta, como su nombre, los dispositivos asignados y el grupo. Haga clic en una puerta de la lista para ver los detalles y modificar la configuración."
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-door-mng-registered-door-list.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_menu",
        product: "air"
      }), " → ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_submenu",
        product: "air"
      }), " en la barra lateral izquierda para ver las puertas registradas."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "información-de-la-puerta",
      children: "Información de la puerta"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "La lista de puertas muestra la siguiente información."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_status_column1",
            product: "air"
          }), ": El nombre de la puerta. Normalmente se asigna automáticamente durante el registro del dispositivo, pero los administradores pueden cambiarlo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column2",
            product: "air"
          }), ": Dispositivo que autentica a los usuarios al ingresar por la puerta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column3",
            product: "air"
          }), ": Dispositivo que autentica a los usuarios al salir por la puerta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column4",
            product: "air"
          }), ": Nombre del grupo asignado a la puerta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column5",
            product: "air"
          }), ": Descripción de la puerta."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column6",
            product: "air"
          }), ": Muestra la información de la cámara asociada a la puerta. La columna ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column6",
            product: "air"
          }), " aparece solo después de habilitar la función ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_video_management",
            product: "air"
          }), " en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_submenu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "site_setting_qr_reader_tab",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "funciones-adicionales",
      children: "Funciones adicionales"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cuando se selecciona una o más puertas en la lista, los administradores pueden gestionarlas mediante las siguientes herramientas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirEdit, {
            width: "24px",
            height: "24px",
            title: "Edit"
          }), ": Editar la información de la puerta o cambiar la configuración de los dispositivos asignados. Esta opción está disponible solo cuando se selecciona una puerta. Para obtener más información, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#editingDoors"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRef, {
            width: "24px",
            height: "24px",
            title: "Refresh"
          }), ": Actualizar la lista de puertas."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirRemove, {
            width: "24px",
            height: "24px",
            title: "Delete"
          }), ": Eliminar las puertas seleccionadas de la lista."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirSchedule, {
            width: "24px",
            height: "24px",
            title: "Schedule Settings"
          }), ": Establecer un horario para los estados de apertura y bloqueo de la puerta. Para obtener más información sobre cómo gestionar los horarios de las puertas, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/managing-door-schedules"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirGroup, {
            width: "24px",
            height: "24px",
            title: "Manage Groups"
          }), ": Agrupar las puertas seleccionadas. Para obtener más información sobre cómo gestionar los grupos de puertas, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            docId: "platform/biostar_air/managing-door-groups"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(IcAirReport, {
            width: "24px",
            height: "24px",
            title: "Report"
          }), ": Generar informes de las puertas. Para obtener más información sobre cómo generar informes de puertas, consulte ", (0,jsx_runtime.jsx)(DocLink, {
            inner: "#generatingDoorReports"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deviceFiltering",
      children: "Filtrar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Filtre la lista de puertas por grupo. Haga clic en la columna ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "door_product_column4",
        product: "air"
      }), " y en su botón ", (0,jsx_runtime.jsx)(IcAirFilter, {
        title: "Filter"
      }), " y seleccione el grupo deseado. Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "popup_ok_btn",
        product: "air"
      }), " para mostrar solo las puertas del grupo seleccionado."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-door-mng-list-filter.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Para restablecer los filtros aplicados, haga clic en ", (0,jsx_runtime.jsx)(IcAirFilter, {
          title: "Filter"
        }), " y seleccione ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "column_filter_modal_reset_btn",
          product: "air"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "addingDoor",
      children: "Agregar puertas"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agregar-usando-un-dispositivo",
      children: "Agregar usando un dispositivo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["En el paso final del registro del dispositivo en la aplicación móvil, seleccione la opción ", (0,jsx_runtime.jsx)(Cmd, {
        en: "Create a door with this device",
        children: "Create a door with this device"
      }), " para crear una puerta. Para obtener más información sobre cómo registrar un dispositivo con la aplicación móvil, consulte ", (0,jsx_runtime.jsx)(DocLink, {
        docId: "platform/biostar_air/manage-device-with-app"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-door-mng-register-device-as-door.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agregar-desde-el-portal-web",
      children: "Agregar desde el portal web"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Siga los pasos a continuación para agregar una nueva puerta en el portal BioStar Air."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.title",
            product: "air"
          }), " en la parte superior derecha de la pantalla."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.title",
            product: "air"
          }), ", ingrese ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.door_name",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-registered-door-add.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column2",
            product: "air"
          }), " y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column3",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para guardar y agregar la configuración de la puerta."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Reglas para asignar dispositivos a puertas"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Cada dispositivo solo puede asignarse a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "una sola puerta"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Si un dispositivo ya está registrado pero no aparece en la lista de dispositivos disponibles, verifique si está asignado a otra puerta. Si lo está, quítelo de esa puerta e inténtelo de nuevo."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "editingDoors",
      children: "Editar puertas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Siga estos pasos para editar los detalles y la configuración de la puerta."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en la puerta que desea editar en la lista. O seleccione la casilla a la izquierda de la puerta y haga clic en ", (0,jsx_runtime.jsx)(IcAirEdit, {}), " en la barra lateral superior izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "edit_door.title",
            product: "air"
          }), ", edite ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "add_doors.door_name",
            product: "air"
          }), " y ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_product_column5",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-registered-door-edit.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Seleccione el dispositivo para la autenticación de entrada de la puerta en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_entry_and_exit",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column2",
                product: "air"
              }), ": Seleccione el dispositivo que autentica a los usuarios al entrar por la puerta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column3",
                product: "air"
              }), ": Seleccione el dispositivo que autentica a los usuarios al salir por la puerta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column6",
                product: "air"
              }), ": Puede conectar una cámara CCTV para los registros de eventos."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para usar la cámara, habilite la función ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_setting_video_management",
              product: "air"
            }), " en ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "settings_menu",
              product: "air"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_submenu",
              product: "air"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "site_setting_qr_reader_tab",
              product: "air"
            }), "."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Configure el dispositivo relé en la sección ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_auxiliary_device",
            product: "air"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.door_relay",
                product: "air"
              }), ": Seleccione el dispositivo relé que controla la cerradura de la puerta."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.relay_ignoring_door_sensor",
                product: "air"
              }), ": Configure el relé para ignorar el sensor de la puerta."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Configure los ajustes adicionales."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Si está instalado, seleccione el puerto para configurarlo como ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_exit_btn",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Seleccione el puerto para configurarlo como ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_editable_fields_door_sensor",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Establezca el tiempo que la puerta permanece abierta en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.open_time",
                product: "air"
              }), ". (Predeterminado: 3 segundos)"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "save_btn",
            product: "air"
          }), " para aplicar los cambios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Recomendamos asignar un relé ubicado dentro del área segura como ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door_product_column3",
              product: "air"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmd, {
              sid: "door_product_column2",
              product: "air"
            }), " y ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "door_product_column3",
              product: "air"
            }), " deben estar conectados a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "redes separadas"
            }), ". En una configuración maestro–esclavo, la conexión mediante Wiegand o RS-485 no es posible."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Para obtener más información sobre cómo configurar el módulo SIO2 Secure, consulte ", (0,jsx_runtime.jsx)(DocLink, {
              docId: "platform/biostar_air/configuring-the-sio2-secure-module"
            }), "."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generatingDoorReports",
      children: "Generar informes de puertas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Genere informes de puertas y envíelos al correo electrónico del administrador. Un informe de puerta proporciona información sobre los usuarios que ingresaron por esa puerta."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Haga clic en ", (0,jsx_runtime.jsx)(IcAirReport, {
            title: "Report"
          }), " en la parte superior de la lista de puertas."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "report_popup_title",
            product: "air"
          }), ", ingrese un nombre para el informe."]
        }), "\n", (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-door-mng-registered-door-report.png"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Seleccione los elementos que desea incluir en el informe."
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
      src: "/img/air/bsair-door-mng-registered-door-report-list.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["En ", (0,jsx_runtime.jsx)(Cmd, {
          sid: "report_form_text_title",
          product: "air"
        }), ", busque, edite, descargue o elimine los informes generados."]
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