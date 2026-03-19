"use strict";
(self["webpackChunksuprema_docs"] = self["webpackChunksuprema_docs"] || []).push([["45716"], {
33859: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  frontMatter: () => (/* binding */ frontMatter),
  toc: () => (/* binding */ toc),
  "default": () => (/* binding */ MDXContent),
  metadata: () => (/* reexport */ site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_getting_started_mdx_4c2_namespaceObject),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-i-18-n-es-docusaurus-plugin-content-docs-current-platform-biostar-air-getting-started-mdx-4c2.json
var site_i_18_n_es_docusaurus_plugin_content_docs_current_platform_biostar_air_getting_started_mdx_4c2_namespaceObject = JSON.parse('{"id":"platform/biostar_air/getting-started","title":"Primeros Pasos","description":"Esta guía te explica paso a paso cómo configurar un sitio de BioStar Air: desde añadir administradores y registrar dispositivos hasta crear puertas, configurar permisos de acceso y gestionar usuarios.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/getting-started.mdx","sourceDirName":"platform/biostar_air","slug":"/platform/biostar_air/getting-started","permalink":"/docs/es/platform/biostar_air/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/supremainc/docs/tree/main/docs/platform/biostar_air/getting-started.mdx","tags":[],"version":"current","frontMatter":{"id":"getting-started","title":"Primeros Pasos","description":"Esta guía te explica paso a paso cómo configurar un sitio de BioStar Air: desde añadir administradores y registrar dispositivos hasta crear puertas, configurar permisos de acceso y gestionar usuarios.","keywords":["Portal de BioStar Air","Ajustes","Guía"],"isTranslationMissing":false},"sidebar":"biostar_air","previous":{"title":"Administrador del sitio","permalink":"/docs/es/platform/biostar_air/site-admin-guide"},"next":{"title":"Selector de sitios","permalink":"/docs/es/platform/biostar_air/site-selector"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(84429);
;// CONCATENATED MODULE: ./i18n/es/docusaurus-plugin-content-docs/current/platform/biostar_air/getting-started.mdx


const frontMatter = {
	id: 'getting-started',
	title: 'Primeros Pasos',
	description: 'Esta guía te explica paso a paso cómo configurar un sitio de BioStar Air: desde añadir administradores y registrar dispositivos hasta crear puertas, configurar permisos de acceso y gestionar usuarios.',
	keywords: [
		'Portal de BioStar Air',
		'Ajustes',
		'Guía'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Accede al portal",
  "id": "navigating-to-the-feature",
  "level": 2
}, {
  "value": "Revisa el panel",
  "id": "dashboard-overview",
  "level": 2
}, {
  "value": "Guía de configuración del sitio",
  "id": "step-by-step-guide",
  "level": 2
}, {
  "value": "Agregar administradores",
  "id": "adding-administrators",
  "level": 3
}, {
  "value": "Registrar dispositivos",
  "id": "registering-devices",
  "level": 3
}, {
  "value": "Crear y administrar puertas",
  "id": "creating-and-managing-doors",
  "level": 3
}, {
  "value": "Categorizar puertas en grupos",
  "id": "categorizing-doors-into-groups",
  "level": 3
}, {
  "value": "Configurar derechos de acceso",
  "id": "configuring-access-rights",
  "level": 3
}, {
  "value": "Configurar grupos de días festivos",
  "id": "setting-up-holiday-groups",
  "level": 4
}, {
  "value": "Crear horarios",
  "id": "creating-schedules",
  "level": 4
}, {
  "value": "Definir niveles de acceso",
  "id": "defining-access-levels",
  "level": 4
}, {
  "value": "Crear grupos de usuarios y agregar usuarios",
  "id": "creating-user-groups-and-adding-users",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  }, {Cmd, DocLink, Image, Step, Steps} = _components;
  if (!Cmd) _missingMdxReference("Cmd", true);
  if (!DocLink) _missingMdxReference("DocLink", true);
  if (!Image) _missingMdxReference("Image", true);
  if (!Step) _missingMdxReference("Step", true);
  if (!Steps) _missingMdxReference("Steps", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "El Portal de BioStar Air ofrece una interfaz unificada en la web y en las aplicaciones móviles, proporcionando una experiencia de usuario coherente. Desde el Portal de BioStar Air, los administradores pueden gestionar el control de acceso, supervisar el uso del sitio y administrar usuarios y dispositivos sin complicaciones."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigating-to-the-feature",
      children: "Accede al portal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Abre un navegador web y ve a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://admin.biostarair.com",
        children: "https://admin.biostarair.com"
      }), " para acceder al Portal de BioStar Air. Cuando aparezca la página de inicio de sesión, selecciona ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Global Server"
      }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "EU Server"
      }), " según tu ubicación."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-gettingstarted-login.png"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["No puedes crear una cuenta registrándote. El instalador del sistema o un administrador existente debe invitarte al sitio. Para más información sobre la gestión de cuentas de administrador e invitaciones, consulta ", (0,jsx_runtime.jsx)(DocLink, {
          docId: "platform/biostar_air/managing-administrators"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dashboard-overview",
      children: "Revisa el panel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Después de iniciar sesión, aparece ", (0,jsx_runtime.jsx)(Cmd, {
        sid: "dashboard_menu",
        product: "air"
      }), " y muestra información clave del sitio."]
    }), "\n", (0,jsx_runtime.jsx)(Image, {
      src: "/img/air/bsair-gettingstarted-dashboard.png"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "user_tagged_today",
            product: "air"
          }), ": Muestra el número de usuarios que accedieron al sitio hoy."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "users_card",
            product: "air"
          }), ": Muestra el número total de usuarios registrados y activos. Haz clic en la tarjeta para abrir ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "user_menu",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "devices_card",
            product: "air"
          }), ": Muestra el número de dispositivos registrados. Haz clic en la tarjeta para abrir ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "credit_status_card",
            product: "air"
          }), ": Muestra los créditos restantes de la cuenta. Haz clic en la tarjeta para abrir ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "settings_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "credit_center_submenu",
            product: "air"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "dashboard_usage_header",
            product: "air"
          }), ": Ordena el uso por grupo de dispositivos, frecuencia (diaria, semanal, mensual) o rango de fechas personalizado."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmd, {
            sid: "recent_actions_header",
            product: "air"
          }), ": Muestra un registro de actividad con las acciones de los administradores, como inicios de sesión, actualizaciones de dispositivos y creación de usuarios."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "step-by-step-guide",
      children: "Guía de configuración del sitio"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sigue estas instrucciones para configurar un nuevo sitio."
    }), "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "adding-administrators",
          children: "Agregar administradores"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Invita a administradores."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "settings_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "admin_submenu",
                product: "air"
              }), " en la barra lateral izquierda."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-setting-admin.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "btn_invite",
                product: "air"
              }), " en la esquina superior derecha de la pantalla."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "admin_invitation_title",
                product: "air"
              }), ", ingresa la dirección de correo electrónico del administrador y asigna un rol."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-setting-admin-invite.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "send_btn",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Los administradores del sitio pueden gestionarlo, y los usuarios autenticados solo pueden acceder a él a través de la app ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Suprema Pass"
            }), "."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "registering-devices",
          children: "Registrar dispositivos"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Revisa los dispositivos registrados o añade nuevos. Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_menu",
            product: "air"
          }), " → ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "device_submenu",
            product: "air"
          }), " en la barra lateral izquierda."]
        }), (0,jsx_runtime.jsx)(Image, {
          src: "/img/air/bsair-gettingstarted-device-mng.png"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Si el dispositivo no está registrado, pide a otro administrador que lo registre en el sitio con la app móvil de BioStar Air."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "device_submenu",
                product: "air"
              }), ", elimina dispositivos, actualiza el firmware y gestiona grupos de dispositivos."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "creating-and-managing-doors",
          children: "Crear y administrar puertas"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Agregar puertas y asignar dispositivos."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_submenu",
                product: "air"
              }), " en la barra lateral izquierda."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-door-mng.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Si no aparece ninguna puerta en la lista, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "doors_group_label_add_device",
                product: "air"
              }), " en la esquina superior derecha."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_doors.title",
                product: "air"
              }), ", ingresa un nombre y una descripción."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-door-mng-add.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Asigna los dispositivos registrados a ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column2",
                product: "air"
              }), " y a ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_product_column3",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["En ", (0,jsx_runtime.jsx)(Cmd, {
            sid: "door_menu",
            product: "air"
          }), " puedes editar o eliminar puertas, configurar sus horarios y administrarlas por grupo."]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "categorizing-doors-into-groups",
          children: "Categorizar puertas en grupos"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Categorizar puertas en grupos."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "door_groups_submenu",
                product: "air"
              }), " en la barra lateral izquierda."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-door-group-mng.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "doors_group_add_btn",
                product: "air"
              }), " en la parte superior derecha de la pantalla."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "doors_group_title_add_popup_overlay",
                product: "air"
              }), ", ingresa un nombre de grupo como ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Indoor"
              }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Outdoor"
              }), " o ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Trap Doors"
              }), " y selecciona las puertas deseadas."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-door-group-mng-add.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Después de seleccionar todas las puertas, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "btn_ok",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "configuring-access-rights",
          children: "Configurar derechos de acceso"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Sigue estos pasos para administrar los derechos de acceso."
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "setting-up-holiday-groups",
          children: "Configurar grupos de días festivos"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la barra lateral izquierda, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "access_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "holiday_groups_submenu",
                product: "air"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-holiday-group-mng.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "holiday_group_add_btn",
                product: "air"
              }), " en la esquina superior derecha de la pantalla."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "holiday_group_add_title",
                product: "air"
              }), ", ingresa un nombre (por ejemplo, \"Korea Holidays\")."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-holiday-group-mng-add.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_holidays_title",
                product: "air"
              }), ", especifica los días festivos en los que se debe restringir el acceso y haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_btn",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Después de agregar todos los días festivos, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "creating-schedules",
          children: "Crear horarios"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "access_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "schedules_submenu",
                product: "air"
              }), " en la barra lateral izquierda."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-schedule.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "schedule_add_title",
                product: "air"
              }), " en la esquina superior derecha de la pantalla."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "schedule_add_title",
                product: "air"
              }), ", ingresa un nombre."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-schedule-add.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Selecciona los días a activar y vincula un grupo de días festivos."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Una vez completado el horario, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "defining-access-levels",
          children: "Definir niveles de acceso"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "access_menu",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "access_levels_submenu",
                product: "air"
              }), " en la barra lateral izquierda."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-access-level-mng.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_access_level",
                product: "air"
              }), " en la esquina superior derecha de la pantalla."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca el panel ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "access_level_title",
                product: "air"
              }), ", ingresa un nombre y asigna grupos de puertas, puertas individuales y horarios."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-access-level-mng-add.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Una vez configurado el nivel de acceso, haz clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "save_btn",
                product: "air"
              }), "."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(Step, {
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "creating-user-groups-and-adding-users",
          children: "Crear grupos de usuarios y agregar usuarios"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Cree un grupo de usuarios y agregue usuarios al nuevo grupo."
        }), (0,jsx_runtime.jsxs)(_components.ol, {
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
              }), " para guardar el grupo de usuarios."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_btn",
                product: "air"
              }), " → ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_a_user",
                product: "air"
              }), " en la esquina superior derecha de la pantalla."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-user-group-mng-add-user.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Cuando aparezca la ventana ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_a_user",
                product: "air"
              }), ", introduzca el ID del usuario, el nombre, etc. en la sección ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "user_detail",
                product: "air"
              }), "."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-user-group-mng-add-user-details.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "credential_detail",
                product: "air"
              }), ", habilite uno o más tipos de credenciales."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-user-group-mng-add-credential-details.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["En la sección ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "access_detail",
                product: "air"
              }), ", seleccione un nivel de acceso."]
            }), "\n", (0,jsx_runtime.jsx)(Image, {
              src: "/img/air/bsair-gettingstarted-user-group-mng-add-aclevel-details.png"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Para finalizar la configuración del acceso del usuario, haga clic en ", (0,jsx_runtime.jsx)(Cmd, {
                sid: "add_user_card_activate_btn",
                product: "air"
              }), " en la esquina inferior derecha."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "info",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["En el menú ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_menu",
              product: "air"
            }), " → ", (0,jsx_runtime.jsx)(Cmd, {
              sid: "user_groups_submenu",
              product: "air"
            }), " puede administrar usuarios de forma masiva: reemitir, suspender o eliminar usuarios; exportar datos y cargar imágenes de perfil en lote."]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Lista de verificación"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Para resumir, siga estos pasos."
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Agregar administradores."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Registrar dispositivos."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Crear puertas y asignar dispositivos."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Categorizar puertas en grupos."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Configurar derechos de acceso (días festivos, horarios, niveles de acceso)."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Crear grupos de usuarios y agregar usuarios."
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Seguir estos pasos permite configurar el sitio de BioStar Air sin problemas. Consulte los tutoriales en video individuales de la guía del usuario para obtener más detalles."
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